var crypto = require('crypto');

exports.login = function(req, res) {
    var user = 'lan', pass = '123', id = '127';

    // Get no banco pra setar variaveis user e pass.

    if(req.body.user == user && req.body.pass == pass) {
        req.session.id = id;
        crypto.randomBytes(48, function(err, buffer) {
            var token = buffer.toString('hex');
            req.session.token = token;
            res.status(200).json({ token: token });
            return;
        });

    } else {
        res.status(401).json({ error: 'Error authenticating. Please try again.' });
        return;
    }
}

exports.logout = function(req, res) {
    delete req.session.id;
    res.redirect('/');
    res.status(200);
    return;
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
