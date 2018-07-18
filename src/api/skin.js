import axios from 'axios'

export function createSkin (data) {
  const url = '/api/skin'
  return axios.post(url, data).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSkins () {
  const url = '/skin'
  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}
