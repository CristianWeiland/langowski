exports.get = function(req, res) {
    var data;

    // Set data from MySQL instead of junk here
    data = [
        { name: 'John', age: '32' },
        { name: 'Mayara', age: '21' },
        { name: 'Susan', age: '37' }
    ];

    res.json({ data: data }).status(200);
}
