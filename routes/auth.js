var crypto = require('crypto');

exports.login = function(req, res) {
    // Get encrypted version of password.
    var hash = crypto.createHash('sha256');
    hash.update(req.body.pass);
    var encrypted = hash.digest('hex');

    // Get no banco pra setar variaveis user e pass.
    req.db.query('SELECT * FROM users', function(err, rows, fields) {
        if(err) {
            console.log('Error while performing Query.');
            res.status(500).json({ error: 'Database query failed.' });
            return;
        }
        for(var i=0; i<rows.length; ++i) {
            if(rows[i].username == req.body.user && rows[i].password == encrypted) {
                req.session.id = rows[i].ID;
                crypto.randomBytes(48, function(err, buffer) {
                    var token = buffer.toString('hex');
                    req.session.token = token;
                    res.status(200).json({ token: token });
                    return;
                });
                return;
            }
        }
        res.status(401).json({ error: 'Error authenticating. Please try again.' });
        return;
    });
}

exports.logout = function(req, res) {
    delete req.session.id;
    delete req.session.token;
    res.json(200);
    return;
}

// This function was used to setup the project, but is not used anymore.
exports.createUser = function(req, res) {
    var user = req.body.user,
        pass = req.body.pass;

    // Encrypt password
    var hash = crypto.createHash('sha256');
    hash.update(pass);
    var encrypted = hash.digest('hex');

    var query = 'INSERT INTO users (username, password) VALUES (\'' + user + '\', \'' + encrypted + '\');';

    req.db.query(query, function(err) {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Database query failed.' });
            return;
        }
        console.log('User created succesfully!');
        res.json(200);
        return;
    });
}

exports.checkToken = function(req, res) {
    var token = req.body.token;
    if(req.session.token && token == req.session.token) {
        res.json(200);
        return;
    }

    res.status(401).json({ error: 'Error validating token.' });
    return;
}
