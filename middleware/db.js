var mysql = require('mysql');

module.exports = function(config) {
    var db_config = config.db_config;
    var connection = mysql.createConnection({
        host: db_config.host,
        user: db_config.user,
        password: db_config.password,
        database: db_config.database,
    });

    return function(req, res, next) {
        req.db = connection;
        req.db.connect();
        next();
    }
}
