import * as types from './mutation-types'

const mutations = {
  [types.SET_SEARCH_HISTORY] (state, history) {
    state.searchHistory = history
  },
  [types.SET_FAVORITE_LIST] (state, list) {
    state.favoriteList = list
  },
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  [types.SET_SKIN_LIST] (state, list) {
    state.skinList = list
  }
}

export default mutations
