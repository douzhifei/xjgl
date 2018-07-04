import {loadSearch, loadFavorite, loadToken} from 'common/js/cache'

const state = {
  searchHistory: loadSearch(),
  favoriteList: loadFavorite(),
  token: loadToken()
}

export default state