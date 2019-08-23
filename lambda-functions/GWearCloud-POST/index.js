console.log('PostgreSQL POST Function');

const pgp = require("pg-promise")({
    capSQL: true
});

exports.handler = function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    
    const cn = {
        host: process.env.HOST,
        port: process.env.PORT,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD
    };
    
    try {
        const db = pgp(cn)
        //var id = event.id;
        console.log('Connected to PostgreSQL database');
        
        console.log(JSON.stringify(event.body));
        
        const cs = new pgp.helpers.ColumnSet(['metric', 'sensor', 'id', 'value', 'mac', 'timestamp'], {table: 'test_data'});

        // data input values:
        const values = event.body;
        
        // generating a multi-row insert query:
        const query = pgp.helpers.insert(values, cs);
        //=> INSERT INTO "tmp"("col_a","col_b") VALUES('a1','b1'),('a2','b2')
        
        // executing the query:
        db.none(query)
            .then(() => {
                const response_success = {
                    statusCode: 200,
                    body: {
                        message: 'ok'
                    },
                };
                
                callback(null, response_success);
            })
            .catch(error => {
                context.fail(error.stack);
            });
    } catch (error) {
        context.fail(error);
    }
};
