// const Mongolass = require('mongolass')
const mongodb = require('../config/default').mongodb
// const mongolass = new Mongolass()
// // mongolass.connect(mongodb)
// mongolass.connect(mongodb, function (err, client) {
//   const collection = client.db('xj').collection('users')
//   client.close()
// })

// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect(mongodb, function(err, client) {
//    const collection = client.db("xj").collection("user");
//    collection.insert({name:'ben',psw:'2222'})
//    client.close();
// });

const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect(mongodb)

exports.User = mongoose.model(
  'User',
  new Schema({
    name: String,
    password: String
  })
)

exports.Skin = mongoose.model(
  'Skin',
  new Schema({
    name: String,
    level: { type: Number, default: 0 },
    sort: { type: Number, default: 100 }, // 100起，部件为101，102...
    tl: { type: Boolean, default: false },
    gj: { type: Boolean, default: false },
    ll: { type: Boolean, default: false },
    fy: { type: Boolean, default: false },
    bj: { type: Boolean, default: false },
    fb: { type: Boolean, default: false },
    sb: { type: Boolean, default: false },
    hj: { type: Boolean, default: false },
    fj: { type: Boolean, default: false },
    bjjs: { type: Boolean, default: false },
    fbjs: { type: Boolean, default: false },
    sbhx: { type: Boolean, default: false },
    hjhx: { type: Boolean, default: false },
    fjjs: { type: Boolean, default: false },
    jn: String,
    hasPart: { type: Boolean, default: false },
    isPart: { type: Boolean, default: false },
    property: { type: Number, default: 0 } // 五行属性，水火雷风土武
  })
)

exports.Article = mongoose.model('Article', {
  title: { type: 'string', required: true },
  text: { type: 'string' },
  cover: { type: 'string' },
  type: { type: 'number', default: 2 }, // 1是公告，2是攻略，3是数据图表，0是所有
  likes: { type: 'number', default: 0 },
  author: { type: 'string', default: 'ben' },
  banner: { type: 'number', dafault: 0 },
  create_time: { type: Date, default: Date.now },
  update_time: { type: Date, default: Date.now },
  goto: { type: 'string', dafault: 'article' }, // 链接跳转
  top: { type: 'number', default: 0 }, // 置顶，默认0
  content: { type: 'string' }
})
// exports.Article.prototype.schema.index({ top: 1, _id: -1 })// 按创建时间降序查看文章列表

exports.Treasure = mongoose.model('Treasure', {
  range: { type: 'number', require: true },
  name: { type: 'string' },
  num: { type: 'number' },
  img: { type: 'string' },
  level: { type: 'number', default: 0 }, // 难度
  mapId: { type: 'number', require: true },
  important: { type: 'number', default: 0 }, // 等级分类
  site: { type: 'string', require: true }, // 坐标
  plus: { type: 'string' } // 加成
})
// exports.Treasure.index({ _id: -1 }).exec()// 按创建时间降序查看列表

exports.World = mongoose.model('World', {
  mapId: { type: 'number', require: true },
  name: { type: 'string', require: true },
  attach: { type: 'string', require: true }
})

exports.Hot = mongoose.model('hot', {
  name: { type: 'string', require: true },
  count: { type: 'number', default: 0 }
})

exports.Count = mongoose.model('count', {
  name: { type: 'string', require: true },
  count: { type: 'number', default: 0 }
})