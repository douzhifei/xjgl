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
const tokenQiniu = require('../config/qiniu').uploadToken
const jwt = require('jsonwebtoken')
const morgan = require('morgan')
const Article = require('../models/article')
const World = require('../models/world')
const Treasure = require('../models/treasure')
const Hot = require('../models/hot')
const User = require('../models/user')
const Count = require('../models/count')
const Skin = require('../models/skin')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)


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
      app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
      app.use(bodyParser.json({limit: '50mb'}))
      app.set('superSecret', 'myjwttest')
      app.use(morgan('dev'))
      apiRoutes.use(function(req, res, next) {
        // 拿取token 数据 按照自己传递方式写
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token) {      
            // 解码 token (验证 secret 和检查有效期（exp）)
            jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
                  if (err) {
                return res.json({ success: false, message: '无效的token.' });    
                  } else {
                    // 如果验证通过，在req中写入解密结果
                    req.decoded = decoded;  
                    next(); //继续下一步路由
              }
            });
          } else {
            // 没有拿到token 返回错误 
            return res.status(403).send({ 
                success: false, 
                message: '没有找到token.' 
            });
          }
        });
    
        
    apiRoutes.get('/', function(req, res) {
      res.json({ success: true, message: req.decoded.name+'  欢迎使用API' });
    });
    //获取所有用户数据
    apiRoutes.get('/users', function(req, res) {
      User.findAll().then((data)=>{
        res.json(data);
      })
    })

      app.post('/setup', function(req, res) {
        User.create(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
         })
      })
      // 用户授权路径，返回JWT 的 Token 验证用户名密码
      app.post('/authenticate', function(req, res) {
        User.findOne(req.body.name).then((data)=>{
            if(!data){
              res.json({ success: false, message: '未找到授权用户' });
            }else if(data){
              if(data.password != req.body.password){
                res.json({ success: false, message: '用户密码错误' });
              }else{
                var token = jwt.sign(data.toJSON(), app.get('superSecret'), {
                  expiresIn : 60*60// 授权时效24小时
                })
                res.json({
                  success: true,
                  message: '请使用您的授权码',
                  token: token
                })
            }
          }
        })
      })

      apiRoutes.post("/createArticle",function(req, res){
        Article.create(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
         })
       })
       apiRoutes.post("/updateArticle",function(req, res){
        Article.update(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
         })
       })
       apiRoutes.get("/getAllArticleList",function(req, res){
        Article.getAllList().then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       app.get("/getBanner",function(req, res){
        Article.getBanner(parseInt(req.query.num)).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       app.post("/getList",function(req, res){
        Article.getList(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       apiRoutes.get("/deleteArticle",function(req, res){
        Article.deleteOneArticle(req.query.id).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       app.get("/getArticle",function(req, res){
        Article.getArticleById(req.query.id).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       app.get("/getArticleSearch",function(req, res){
        Article.getArticles(req.query.title).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       //探宝
       apiRoutes.post("/createTreasure",function(req, res){
        Treasure.create(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
         })
       })
       apiRoutes.get("/getTreasureAllList",function(req, res){
        Treasure.getAllList().then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       app.get("/getTreasureList",function(req, res){
        Treasure.getList(req.query).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       app.get("/getTreasureSearchList",function(req, res){
        Treasure.getNameLike(req.query.name).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       apiRoutes.post("/updateTreasure",function(req, res){
        Treasure.update(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       apiRoutes.get("/delTreasure",function(req, res){
        Treasure.del(req.query.id).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       apiRoutes.post("/createWorld",function(req, res){
        World.create(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
         })
       })
       app.get("/getWorld",function(req, res){
        World.getList().then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       apiRoutes.post("/updateWorld",function(req, res){
        World.update(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       apiRoutes.get("/delWorld",function(req, res){
        World.del(req.query.id).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       app.get("/getHots",function(req, res){
        Hot.getList().then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       // 获取qiniu token
       app.get("/getToken",function(req, res){
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(tokenQiniu())
       })
       // 统计页面访问次数
       app.get("/count",function(req, res){
        Count.countVisit(req.query.name).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       apiRoutes.get("/countList",function(req, res){
        Count.getList().then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       // 皮肤
       apiRoutes.post("/skin",function(req, res){
        Skin.create(req.body).then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       app.get("/skin",function(req, res){
        Skin.getList().then((data) => {
          res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
       })
       app.use('/api',apiRoutes)
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
