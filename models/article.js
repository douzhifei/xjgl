const Article = require('../lib/mongo').Article

module.exports = {
  // 创建一篇文章
  create: function create (article) {
    return Article.create(article)
  },

  // 获取banner的文章
  getBanner: function getBanner (num) {
    return Article.find({banner: 1}, {title: 1, cover: 1, type: 1, goto: 1}).sort({create_time: -1}).limit(num)
  },

  // 获取所以文章
  getAllList: function getAllList () {
    return Article.find().sort({_id: -1})
  },
  // 获取文字列表
  getList: function getList (list) {
    if (list.type === 0 ) {
      return Article.find({}, {title: 1, cover: 1, type: 1, goto: 1, create_time: 1}).sort({create_time: -1, top: -1}).limit(list.limit).skip(list.skip)
    }
    return Article.find({type: list.type}, {title: 1, cover: 1, type: 1, goto: 1, create_time: 1}).sort({create_time: -1, top: -1}).limit(list.limit).skip(list.skip)
  },

  // 通过文章 id 获取一篇文章
  getArticleById: function getArticleById (articleId) {
    return Article.findByIdAndUpdate({ _id: articleId }, {$inc: { likes: 1 }})
  },

  // 通过文章 id 删除一篇文章
  deleteOneArticle: function deleteOneArticle (articleId) {
    return Article.deleteOne({ _id: articleId })
  },

  // 按创建时间降序模糊搜索所有文章
  getArticles: function getArticles (str) {
    return Article.find({title: {$regex: str, $options: '$i'}}, {title: 1, goto: 1, create_time: 1}).sort({ _id: -1 })
  },

  // 通过 id 更新
  update: function update (data) {
    data.update_time = new Date()
    return Article.update({ _id: data._id }, { $set: data })
  }
}
