import axios from 'axios'

export function createWorld (data) {
  const url = '/api/createWorld'
  return axios.post(url, data).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getWorld () {
  const url = '/getWorld'
  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}

export function delWorld (id) {
  const url = '/api/delWorld'
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
  const url = '/api/updateWorld'
  return axios.post(url, data).then(res => {
    return Promise.resolve(res.data)
  })
}
