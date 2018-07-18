const Skin = require('../lib/mongo').Skin

module.exports = {
  // 创建
  create: function create (data) {
    console.log(Skin)
    return Skin.create(data)
  },
  // 获取列表
  getList: function getList () {
    return Skin.find().sort({ sort: 1 })
  }
}
