import axios from 'axios'
export function getToken () {
  const url = '/api/getToken'
  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}
