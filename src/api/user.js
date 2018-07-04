import axios from 'axios'
export function login (data) {
  const url = '/authenticate'
  return axios.post(url, data).then(res => {
    return Promise.resolve(res.data)
  })
}