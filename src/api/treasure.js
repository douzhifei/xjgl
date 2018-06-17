import axios from 'axios'

export function createTreasure (data) {
  const url = '/createTreasure'
  return axios
    .post(url, data)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getTreasureAllList () {
  const url = '/getTreasureAllList'
  return axios
    .get(url)
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

export function delTreasure (id) {
  const url = '/delTreasure'
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

export function updateTreasure (data) {
  const url = '/updateTreasure'
  return axios
    .post(url, data)
    .then(res => {
      return Promise.resolve(res.data)
    })
}