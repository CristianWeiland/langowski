exports.get = function(req, res) {
    var data;

    req.db.query('SELECT * from employees', function(err, rows, fields) {
        if (!err) {
            console.log('The solution is: ', rows);
        } else {
            console.log('Error while performing Query.');
        }
    });

    res.json({ data: data }).status(200);
}
