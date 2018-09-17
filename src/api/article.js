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

export function getAllArticleList (data) {
  const url = '/api/getAllArticleList'
  return axios.get(url, { params: data }).then(res => {
    return Promise.resolve(res.data)
  })
}

export function deleteArticle (data) {
  const url = '/api/deleteArticle'
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function createArticle (data) {
  const url = '/api/createArticle'
  return axios.post(url, data).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getArticleList (obj) {
  const url = '/getList'
  return axios.post(url, obj).then(res => {
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

export function getArticleSearch (str) {
  const url = '/getArticleSearch'
  const data = {
    title: str
  }
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function updateArticle (data) {
  const url = '/api/updateArticle'
  return axios.post(url, data).then(res => {
    return Promise.resolve(res.data)
  })
}
