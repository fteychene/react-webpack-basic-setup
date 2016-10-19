import webpack from "webpack"
import path from "path"
import express from "express"
import webpackDevMiddleware from "webpack-dev-middleware"
import webpackHotMiddleware from "webpack-hot-middleware"

import config from "./config"

const basedir = "../.."
const { HOST } = process.env

const server = express()

config.entry.index = [
  "webpack-hot-middleware/client",
  ...config.entry.index,
]

const devConfig = {
  ...config,
  plugins: [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
    })
  ],
}

const compiler = webpack(devConfig)

server.use(webpackDevMiddleware(compiler, {
  publicPath: devConfig.output.publicPath,
}))

server.use(webpackHotMiddleware(compiler))

server.use("/assets", express.static(path.join(__dirname, `${basedir}/assets`)))

server.get("*" , (req, res) => {
  res.sendFile(path.join(__dirname, `${basedir}/index.html`))
})

server.listen(3333, HOST || "localhost", (err) => {
  console.log("Dev server is start")
})

export default devConfig
