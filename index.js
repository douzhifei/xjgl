var express = require('express')
var config = require('./config/index')
var axios = require('axios')
var bodyParser = require('body-parser')
var Article = require('./models/article')
var World = require('./models/world')
var Treasure = require('./models/treasure')

var port = process.env.PORT || config.build.port

var app = express()

var apiRoutes = express.Router()
app.use('/api',apiRoutes)
app.use(bodyParser.urlencoded({    
    extended: true
  }))

app.use(bodyParser.json())

app.post("/createArticle",function(req, res){
    Article.create(req.body).then((data) => {
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

app.get("/deleteArticle",function(req, res){
    Article.deleteOneArticle(req.query.num.id).then((data) => {
      res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
      res.end(JSON.stringify(data))
    })
   })

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

app.use(express.static('./dist'))

app.get('/', function(request, response) {
  response.render('dist/index');  //对应views文件夹下的 pages/index.ejs
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
})