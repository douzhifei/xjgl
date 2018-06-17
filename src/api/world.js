import axios from 'axios'

export function createWorld (data) {
  const url = '/createWorld'
  return axios
    .post(url, data)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getWorld () {
  const url = '/getWorld'
  return axios
    .get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function delWorld (id) {
  const url = '/delWorld'
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

export function updateWorld (data) {
  const url = '/updateWorld'
  return axios
    .post(url, data)
    .then(res => {
      return Promise.resolve(res.data)
    })
}