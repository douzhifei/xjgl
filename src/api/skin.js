import axios from 'axios'

export function createSkin (data) {
  const url = '/api/skin'
  return axios.post(url, data).then(res => {
    return Promise.resolve(res.data)
  })
}

export function updateSkin (data) {
  const url = '/api/skin'
  return axios.put(url, data).then(res => {
    return Promise.resolve(res.data)
  })
}

export function updateSkinMore (data) {
  const url = '/api/skinMore'
  axios.post(url, data)
}

export function delSkin (data) {
  const url = '/api/skin'
  return axios.delete(url, {params: data}).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSkins () {
  const url = '/skin'
  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}
