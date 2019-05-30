module.exports = {
    entry: {
        // __dirname + '/src/index.js',
        carousel: __dirname + `/src/components/Carousel.js`,
        footer: __dirname + `/src/components/Footer.js`,
        guides: __dirname + `/src/components/Guides.js`
    },

    output: {
        filename: '[name]-bundle.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 25000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ],
    }
};