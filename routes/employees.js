exports.get = function(req, res) {
    req.db.query('SELECT * from employees', function(err, rows, fields) {
        if (!err) {
            res.status(200).json({ data: rows });
            return;
        } else {
            res.status(500).json({ error: 'Database query failed.' });
            return;
        }
    });
}
