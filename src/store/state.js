import { loadSearch, loadFavorite, loadToken, loadSkin } from 'common/js/cache'

const state = {
  searchHistory: loadSearch(),
  favoriteList: loadFavorite(),
  token: loadToken(),
  skinList: loadSkin()
}

export default state
