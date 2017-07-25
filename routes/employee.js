exports.get = function(req, res) {
    req.db.query('SELECT * FROM employees', function(err, rows, fields) {
        if (!err) {
            console.log('The solution is: ', rows);
            res.status(200).json({ data: rows });
            return;
        } else {
            console.log('Error while performing Query.');
            res.status(500).json({ error: 'Database query failed.' });
            return;
        }
    });
}
