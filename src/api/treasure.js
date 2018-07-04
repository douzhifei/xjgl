import axios from 'axios'

export function createTreasure (data) {
  const url = '/api/createTreasure'
  return axios
    .post(url, data)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getTreasureAllList (data) {
  const url = '/api/getTreasureAllList'
  return axios
    .get(url, {params: data})
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getTreasureList (mapId) {
  const url = '/getTreasureList'
  const data = {
    mapId: mapId
  }
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getTreasureSearchList (name) {
  const url = '/getTreasureSearchList'
  const data = {
    name: name
  }
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getTreasure (id) {
  const url = '/getTreasure'
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

export function delTreasure (data) {
  const url = '/api/delTreasure'
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function updateTreasure (data) {
  const url = '/api/updateTreasure'
  return axios
    .post(url, data)
    .then(res => {
      return Promise.resolve(res.data)
    })
}