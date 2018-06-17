const Article = require('../lib/mongo').Article

module.exports = {
  // 创建一篇文章
  create: function create (article) {
    return Article.create(article)
  },

  // 获取banner的文章
  getBanner: function getBanner (num) {
    return Article.find({banner: true}, {title: 1, cover: 1}).sort({create_time: -1}).limit(num)
  },

  //获取文字列表
  getList: function getList (list) {
    if (list.type === 0 ) {
      return Article.find({}, {title: 1, cover: 1}).sort({create_time: -1}).limit(list.limit).skip(list.skip)
    }
    return Article.find({type: list.type}, {title: 1, cover: 1}).sort({create_time: -1}).limit(list.limit).skip(list.skip)
  },

  // 通过文章 id 获取一篇文章
  getArticleById: function getArticleById (articleId) {
    return Article.findOne({ _id: articleId })
  },

  // 通过文章 id 删除一篇文章
  deleteOneArticle: function deleteOneArticle (articleId) {
    return Article.deleteOne({ _id: articleId })
  },

  // 按创建时间降序获取所有用户文章或者某个特定用户的所有文章
  getPosts: function getArticles (author) {
    const query = {}
    if (author) {
      query.author = author
    }
    return Article.find(query)
      .sort({ _id: -1 })
  },

  // 按创建时间降序获取所有用户文章或者某个特定用户的所有文章
  getArticles: function getArticles (author) {
    const query = {}
    if (author) {
      query.author = author
    }
    return Article.find(query)
      .sort({ _id: -1 })
  },

  // 通过文章 id 更新一篇文章
  updateArticleById: function updateArticleById (articleId, data) {
    return Article.update({ _id: articleId }, { $set: data })
  }
}
