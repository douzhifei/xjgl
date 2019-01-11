const Skin = require('../lib/mongo').Skin

module.exports = {
  // 创建
  create: function create(data) {
    console.log(Skin)
    return Skin.create(data)
  },
  // 通过 id 更新
  update: function update(data) {
    return Skin.update({ _id: data._id }, { $set: data })
  },
  // 更新大量
  updateMore: function updateMore(data) {
    Skin.find({ isPart: false }, function (err, raw) {
      raw.forEach(function(item) {
        //console.log(item)
        Skin.update(
          { _id: item._id },
          { $set: { dianhua: [{ 'sort': 0, 'level': 0 }, { 'sort': 0, 'level': 0 }] } }, function(e,r) {
            console.log(r)
          }
        )
      })
    })
    // Skin.updateMany({ isPart: false }, { $set: {dianhua:[{'sort': 0, 'level': 0}, {'sort': 0, 'level': 0}]} }, function (err, raw) {
    //   console.log(raw)
    // })
  },
  // 通过文章 id 删除
  del: function del(id) {
    return Skin.deleteOne({ _id: id })
  },
  // 获取列表
  getList: function getList() {
    return Skin.find().sort({ sort: 1 })
  }
}
