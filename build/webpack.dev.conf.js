'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express()
const apiRoutes = express.Router()
app.use('/api',apiRoutes)

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)


const Article = require('../models/article')
const World = require('../models/world')
const Treasure = require('../models/treasure')


const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    before(app){
      app.use(bodyParser.urlencoded({    
        extended: true
      }));
      app.use(bodyParser.json())
      app.get("/api/getActivity",function(req,res){
        var url = 'https://andfcg.qq.com/fcg-bin/mobile/android/base_common_interface_v2'
         axios.get(url, {
           headers: {
             referer: 'https://agame.qq.com',
             host: 'agame.qq.com'
           },
           params: req.query
         }).then(response => {
           console.log(response)
           res.json(response.data)
         }).catch(error => {
           console.log(error)
         })
       }),
       app.post("/createArticle",function(req, res){
        Article.create(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
         })
       }),
       app.get("/getBanner",function(req, res){
        Article.getBanner(parseInt(req.query.num)).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       }),
       app.post("/getList",function(req, res){
        Article.getList(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       }),
       app.get("/deleteArticle",function(req, res){
        Article.deleteOneArticle(req.query.id).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       }),
       app.get("/getArticle",function(req, res){
        Article.getArticleById(req.query.id).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       }),
       //探宝
       app.post("/createTreasure",function(req, res){
        Treasure.create(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
         })
       }),
       app.get("/getTreasureAllList",function(req, res){
        Treasure.getAllList().then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       }),
       app.get("/getTreasureList",function(req, res){
        Treasure.getList(req.query).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       }),
       app.get("/getTreasureSearchList",function(req, res){
        Treasure.getNameLike(req.query.name).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       }),
       app.post("/updateTreasure",function(req, res){
        Treasure.update(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       }),
       app.get("/delTreasure",function(req, res){
        Treasure.del(req.query.id).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       }),
       app.post("/createWorld",function(req, res){
        World.create(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
         })
       }),
       app.get("/getWorld",function(req, res){
        World.getList().then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       }),
       app.post("/updateWorld",function(req, res){
        World.update(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       }),
       app.get("/delWorld",function(req, res){
        World.del(req.query.id).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
