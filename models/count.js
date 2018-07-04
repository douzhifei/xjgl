const Count = require('../lib/mongo.js').Count

module.exports = {
    // 创建
  create: function create (data) {
    return Count.create(data)
  },

  // 通过文章 id 删除
  del: function del (id) {
    return Count.deleteOne({ _id: id })
  },

  // 修改
  update: function update (data) {
    return Count.update({ _id: data._id }, { $set: data })
  },
  // 获取列表
  countVisit: function countVisit (name) {
    return Count.findOneAndUpdate({ name: name }, {$inc: { count: 1 }})
   },

  // 获取列表
  getList: function getList () {
    return Count.find().sort({sort: 1})
  }
}