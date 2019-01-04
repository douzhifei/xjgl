const Skin = require('../lib/mongo').Skin

module.exports = {
  // 创建
  create: function create (data) {
    console.log(Skin)
    return Skin.create(data)
  },
  // 通过 id 更新
  update: function update (data) {
    return Skin.update({ _id: data._id }, { $set: data })
  },
  // 通过文章 id 删除
  del: function del (id) {
    return Skin.deleteOne({ _id: id })
  },
  // 获取列表
  getList: function getList () {
    return Skin.find().sort({ sort: 1 })
  }
}
