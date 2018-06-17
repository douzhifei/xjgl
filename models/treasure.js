const Treasure = require('../lib/mongo').Treasure

module.exports = {
// 创建
  create: function create (treasure) {
    return Treasure.create(treasure)
  },

  // 通过文章 id 删除
  del: function del (id) {
    return Treasure.deleteOne({ _id: id })
  },

  // 获取所有列表
  getAllList: function getAllList () {
    return Treasure.find().sort({session: 1})
  },
  // 获取mapId列表
  getList: function getList (data) {
    return Treasure.find({mapId: parseInt(data.mapId)}).sort({range: 1})
  },

  // 模糊查询，按name
  getNameLike: function getNameLike (str) {
    return Treasure.find({name: {$regex: str, $options: '$i'}}).sort({num: -1})
  },

  // 通过 id 更新
  update: function update (data) {
    return Treasure.update({ _id: data._id }, { $set: data })
  }
}