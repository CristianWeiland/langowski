exports.login = function(req, res) {
    var user = 'langow', pass = '123mudar', id = '127';

    console.log('Cheguei na requisicao. Params: \'' + req.body.user + '\' and \'' + req.body.pass + '\'.');
    console.log('Data: \'' + user + '\' and \'' + pass + '\'.');

    // Get no banco pra setar variaveis user e pass.

    if(req.body.user == user && req.body.pass == pass) {
        req.session.id = id;
        //res.redirect('/employees');
        res.json(200);
        return;
    } else {
        console.log('Respondendo 401...');
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
