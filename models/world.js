const World = require('../lib/mongo').World

module.exports = {
// 创建
  create: function create (world) {
    return World.create(world)
  },

  // 通过文章 id 删除
  del: function del (mapId) {
    return World.deleteOne({ mapId: mapId })
  },

  // 获取六界地图
  getList: function getList () {
    return World.find().sort({mapId: 1})
  },

  // 通过文章 id 更新一篇文章
  update: function update (data) {
    return World.update({ _id: data._id }, { $set: data })
  }
}