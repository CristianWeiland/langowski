module.exports = {
    login: function(req, res) {
        var user = 'langow', pass = '123mudar', id = '127';

        /*
        Get no banco pra setar variaveis user e pass.
        */

        if(req.body.user === user && req.body.pass = pass) {
            req.session.id = id;
            res.redirect('/employees');
        }
    }, logout: function(req, res) {
        delete req.session.id;
        res.redirect('/');
    }
}
