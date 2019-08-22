var pg = require("pg");

exports.handler = function(event, context, callback) {
    try {
        var conn = process.env.PostgreSQL_URL;
    
        var client = new pg.Client(conn);
        
        client.connect(err => {
           if (err) {
               console.log('connection error', err.stack);
           } else {
               console.log('Connected to PostgreSQL database');
           }
        });
        
        var text = "CREATE TABLE test_data (id int, timestamp bigint NOT NULL, mac text, sensor text, value decimal, metric text)";
        
        client.query(text, (err, res) => {
            console.log("Writing to database");
            
            if (err) {
                client.end();
                context.fail(err.stack);
                console.log(err.stack);
            } else {
                console.log("Creation complete");
                client.end();
                
                const response_success = {
                    statusCode: 200,
                    body: {
                        message: 'ok'
                    },
                };
                
                callback(null, response_success);
          }
        });   
    } catch (error) {
        context.fail(error);
        console.log(error);
    }
};
