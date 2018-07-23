var express = require('express')
var config = require('./config/index')
var axios = require('axios')
var bodyParser = require('body-parser')
const tokenQiniu = require('./config/qiniu').uploadToken
const jwt = require('jsonwebtoken')
const morgan = require('morgan')
const Article = require('./models/article')
const World = require('./models/world')
const Treasure = require('./models/treasure')
const Hot = require('./models/hot')
const User = require('./models/user')
const Count = require('./models/count')
const Skin = require('./models/skin')

var port = process.env.PORT || config.build.port

var app = express()
var apiRoutes = express.Router()

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
            expiresIn : 60*60*24// 授权时效24小时
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

app.use(express.static('./page'))
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
})