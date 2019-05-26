module.exports = {
    entry: __dirname + '/src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
        loaders: [
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=25000'
            }
        ],
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    }
};