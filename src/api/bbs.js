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

export function createArticle (ariticle) {
  console.log(ariticle)
  const url = '/createArticle'
  return axios
    .post(url, ariticle)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getArticleList (obj) {
  const url = '/getList'
  return axios
    .post(url, obj)
    .then(res => {
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


export function getActivity () {
  const url = '/api/getActivity'

  const data = {
    param: {
      QueryTopTopic_1: {
        module: 'MiniGame.ForumAccessLogicSvr.ForumAccessLogicSvrObj',
        method: 'QueryTopTopic',
        param: { forum_type: 3, forum_id: 12946 }
      },
      QueryTopic_2: {
        module: 'MiniGame.ForumAccessLogicSvr.ForumAccessLogicSvrObj',
        method: 'QueryTopic',
        param: {
          forum_type: 3,
          forum_id: 12946,
          page_no: 1,
          page_size: 10,
          rank_way: 1
        }
      },
      RandomPopUser_3: {
        module: 'MiniGame.ForumAccessLogicSvr.ForumAccessLogicSvrObj',
        method: 'RandomPopUser',
        param: { forum_id: 12946 }
      },
      GetOneForumPindaoCount_4: {
        module: 'MiniGame.PindaoLogicSvr.PindaoLogicSvrObj',
        method: 'GetOneForumPindaoCount',
        param: {
          __module: 'MiniGame.PindaoLogicSvr.PindaoLogicSvrObj',
          lForumId: 12946
        }
      }
    },
    aid:
      'ForumAccessLogicSvr.ForumAccessLogicSvrObj.QueryTopTopic|ForumAccessLogicSvr.ForumAccessLogicSvrObj.QueryTopic|ForumAccessLogicSvr.ForumAccessLogicSvrObj.RandomPopUser|PindaoLogicSvr.PindaoLogicSvrObj.GetOneForumPindaoCount',
    g_tk: '',
    _: 1526546974274
  }
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      console.log(res)
      return Promise.resolve(res.data)
    })
}
