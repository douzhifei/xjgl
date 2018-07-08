import * as types from './mutation-types'
import {saveSearch, clearSearch, deleteSearch, saveFavorite, deleteFavorite, setToken} from 'common/js/cache'

export const saveSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}
export const deleteSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, deleteSearch(query))
}
export const clearSearchHistory = function ({commit}) {
  commit(types.SET_SEARCH_HISTORY, clearSearch())
}
export const saveFavoriteList = function ({commit}, item) {
  commit(types.SET_FAVORITE_LIST, saveFavorite(item))
}
export const deleteFavoriteList = function ({commit}, item) {
  commit(types.SET_FAVORITE_LIST, deleteFavorite(item))
}
export const saveToken = function ({commit}, token) {
  commit(types.SET_TOKEN, setToken(token))
}
