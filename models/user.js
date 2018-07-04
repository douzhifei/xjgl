const User = require('../lib/mongo').User

module.exports = {
  // 创建用户
  create: function create (user) {
    return User.create(user)
  },

  // 获取用户
  findOne: function findOne (name) {
    return User.findOne({name: name})
  },

  // 获取所有用户
  findAll: function findAll () {
    return User.findOne()
  }

}
