console.log('PostgreSQL POST Function');

var pg = require("pg");

exports.handler = function(event, context, callback) {
    try {
        var conn = process.env.PostgreSQL_URL;
    
        var client = new pg.Client(conn);
        client.connect();
        //var id = event.id;
        console.log('Connected to PostgreSQL database');
        
        console.log(JSON.stringify(event.body));
        
        var text = "INSERT INTO test_data (id, timestamp, mac, sensor, value, metric) VALUES ($1, $2, $3, $4, $5, $6);";
        var values = [event.body.id, event.body.timestamp, event.body.mac, event.body.sensor, event.body.value, event.body.metric];
        
        client.query(text, values, (err, res) => {
            if (err) {
                client.end();
                context.fail(err.stack);
            } else {
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
    }
    
    
    // query.on("row", function (row, result) {
    //  result.addRow(row);
    // });
    
    // query.on("end", function () {
    //  var jsonString = JSON.stringify(result.rows);
    //  var jsonObj = JSON.parse(jsonString);
     
    //  console.log(jsonString);
    //  client.end();
    //  context.succeed(jsonObj);
    // });
};
