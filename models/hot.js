const Hot = require('../lib/mongo').Hot

module.exports = {
// 创建
  create: function create (hot) {
    return Hot.create(hot)
  },

  // 通过 id 删除
  del: function del (id) {
    return Hot.deleteOne({ _id: id })
  },

  // findAndUpdate
  findAndUpdate: function findAndUpdate (name) {
    return Hot.findOneAndUpdate({ name: name }, {$inc: { count: 1 }})
  },

  // 获取列表
  getList: function getList () {
    return Hot.find().sort({count: -1}).limit(8)
  }
}