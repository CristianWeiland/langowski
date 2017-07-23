const path = require('path');

module.exports = {
    entry: './public/js/main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "build.js"
    },
    module: {
        rules: [
        ]
    },
    plugins: []
}
