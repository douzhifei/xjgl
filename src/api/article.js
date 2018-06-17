import axios from 'axios'

export function getBanner (n) {
  const url = '/getBanner'
  const data = {
    num: n
  }
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function createArticle (ariticle) {
  console.log(ariticle)
  const url = '/createArticle'
  return axios
    .post(url, ariticle)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getArticleList (obj) {
  const url = '/getList'
  return axios
    .post(url, obj)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getArticle (id) {
  const url = '/getArticle'
  const data = {
    id: id
  }
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}