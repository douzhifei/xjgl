const Hot = require('../lib/mongo').Hot

module.exports = {
// 创建
  create: function create (hot) {
    return Hot.create(hot)
  },

  // 通过文章 id 删除
  del: function del (id) {
    return Hot.deleteOne({ _id: id })
  },

  // 获取列表
  getList: function getList () {
    return Hot.find().sort({sort: 1})
  }
}