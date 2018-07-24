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
    return Treasure.find().sort({_id: -1})
  },
  // 获取mapId列表
  getList: function getList (data) {
    return Treasure.find({mapId: parseInt(data.mapId)}).sort({range: 1})
  },

  // 模糊查询，按name
  getNameLike: function getNameLike (str) {
    if (str.indexOf('，') !== -1) {
      let items = str.split('，')
      let newStr = items.join('|')
      return Treasure.find({name: {$regex: newStr, $options: '$i'}}).sort({name: 1})
    }
    switch (str) {
      case '元宝' :
        return Treasure.find({name: {$regex: str, $options: '$i'}}).sort({num: -1})
        break
      case '五彩石' :
        return Treasure.find({name: {$regex: str, $options: '$i'}}).sort({num: -1})
        break
      case '琼华一梦' :
        return Treasure.find({name: {$regex: /琼华菱纱|琼华天河|琼华梦璃|紫英仙人|飞仙玄霄/, $options: '$i'}}).sort({ name: 1 })
        break
      case '此生不换' :
        return Treasure.find({name: {$regex: /公主龙葵|梦蛇紫萱|太子龙阳|魔尊重楼|掌门长卿/, $options: '$i'}}).sort({name: 1})
        break
      case '仙剑奇侠' :
        return Treasure.find({name: {$regex: /海棠夫人|掌门逍遥|梦蛇灵儿|柔情月如/, $options: '$i'}}).sort({name: -1})
        break
      case 'f4' :
        return Treasure.find({name: {$regex: /海棠夫人|掌门逍遥|梦蛇灵儿|柔情月如/, $options: '$i'}}).sort({name: -1})
        break
      case 'F4' :
        return Treasure.find({name: {$regex: /海棠夫人|掌门逍遥|梦蛇灵儿|柔情月如/, $options: '$i'}}).sort({name: -1})
        break
      case '风不止' :
        return Treasure.find({name: {$regex: /南蛮王|李三思|葛巧菱|灵月宫主/, $options: '$i'}}).sort({name: 1})
        break
      case '仙一' :
        return Treasure.find({plus: {$regex: str, $options: '$i'},important:2}).sort({map: 1})
        break
      case '仙二' :
        return Treasure.find({plus: {$regex: str, $options: '$i'},important:2}).sort({map: 1})
        break
      case '仙三' :
        return Treasure.find({plus: {$regex: str, $options: '$i'},important:2}).sort({map: 1})
        break
      case '仙四' :
        return Treasure.find({plus: {$regex: str, $options: '$i'},important:2}).sort({map: 1})
        break
      case '仙五' :
        return Treasure.find({plus:str,important:2}).sort({map: 1})
        break
      case '仙五前' :
        return Treasure.find({plus:str,important:2}).sort({map: 1})
        break
      case '仙六' :
        return Treasure.find({plus: {$regex: str, $options: '$i'},important:2}).sort({map: 1})
        break
      case '1星' :
        return Treasure.find({level:1}).sort({map: 1})
        break
      case '2星' :
        return Treasure.find({level:2}).sort({map: 1})
        break
      case '3星' :
        return Treasure.find({level:3}).sort({map: 1})
        break
      case '4星' :
        return Treasure.find({level:4}).sort({map: 1})
        break
      case '5星' :
        return Treasure.find({level:5}).sort({map: 1})
        break
      case '6星' :
        return Treasure.find({level:6}).sort({map: 1})
        break
      case '7星' :
        return Treasure.find({level:7}).sort({map: 1})
        break
      case '8星' :
        return Treasure.find({level:8}).sort({map: 1})
        break
      case '9星' :
        return Treasure.find({level:9}).sort({map: 1})
        break
      case '10星' :
        return Treasure.find({level:10}).sort({map: 1})
        break
      case '11星' :
        return Treasure.find({level:11}).sort({map: 1})
        break
      default:
        return Treasure.find({name: {$regex: str, $options: '$i'}}).sort({mapId: 1})
    }
  },

  // 通过 id 更新
  update: function update (data) {
    return Treasure.update({ _id: data._id }, { $set: data })
  }
}