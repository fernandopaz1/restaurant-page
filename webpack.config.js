const path = require("path");

const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
=======
>>>>>>> 1b515ce... version con ts y sass
    mode: "development",
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "styles.css",
        }),
    ],
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
<<<<<<< HEAD
=======
>>>>>>> 46c1e90... ahora compila typescript y sass con webpack
>>>>>>> 1b515ce... version con ts y sass
};
