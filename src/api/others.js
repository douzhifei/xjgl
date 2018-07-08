import axios from 'axios'

export function countVisit (name) {
  const url = '/count?name=' + name
  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}

export function countList (data) {
  const url = '/api/countList'
  return axios.get(url, { params: data }).then(res => {
    return Promise.resolve(res.data)
  })
}
