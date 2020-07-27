const mysql=require("mysql");
    const db =process.env.DB_NAME;
    const host = process.env.DB_HOST;
    const user =process.env.DB_USER_NAME;
    const password =process.env.DB_PASSWORD;
//msql config and set connections
    var mysqlConnectOpts = {
        connectionLimit: 2000000, //increase limit for multiple connections
        waitForConnections: true,
        queueLimit: 150000, // resource dedication for particular query
        acquireTimeout: 172800000, // pending query time out
        connectTimeout: 172800000, // each connection life cycle time
        host: host,
        user: user,
        password: password,
        database: db,
        dateStrings: 'date',
        multipleStatements: false,
        rejectUnauthorized: true
    }


    var pool = mysql.createPool(mysqlConnectOpts);
    
var mysqlConnect = function() {
   
    var connection = {
        query: function() {
            var queryArgs = Array.prototype.slice.call(arguments),
                events = [],
                eventNameIndex = {};
            pool.getConnection(function(err, conn) {
                if (err) {
                  
                    if (eventNameIndex.error) {
                        eventNameIndex.error();
                    }
                }
                if (conn) {
                    var q = conn.query.apply(conn, queryArgs);
                    q.on('end', function() {
                        conn.release();
                     
                    });
                    q.on('error', function(err) {
                    
                    });
                    events.forEach(function(args) {
                        q.on.apply(q, args);
                    });
                }
            });
            return {
                on: function(eventName, callback) {
                    events.push(Array.prototype.slice.call(arguments));
                    eventNameIndex[eventName] = callback;
                    return this;
                }
            };
        }
    };
    var oneMinute = 60000;
    connection.query('SELECT 1', function(err, rows, field) {
     
        function anotherQueryInAWhile(cb) {
            connection.query('SELECT 1', function(err, rows, field) {
         
            });
        }
        setTimeout(anotherQueryInAWhile, oneMinute); // during this time you restart mysql server
    });

    return pool;
};
module.exports.localConnect = mysqlConnect;