const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const isProduction = process.env.NODE_ENV === "production"
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
module.exports = {
    entry: "./main.js",
    mode: isProduction ? "production" : "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    optimization: {
        minimizer: ["...", new CssMinimizerPlugin()],
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
}
