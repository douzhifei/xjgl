import storage from 'good-storage'

const SEARCH_KEY = '__search__'
const SEARCH_MAX_LEN = 15

const FAVORITE_KEY = '__favorite__'
const FAVORITE_MAX_LEN = 200

const TOKEN = '__token__'

const SKIN_KEY = '_skin_'

function insertArray (arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index === 0) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

function deleteFromArray (arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}
export function saveSearch (query) {
  let searches = storage.get(SEARCH_KEY, [])
  insertArray(
    searches,
    query,
    item => {
      return item === query
    },
    SEARCH_MAX_LEN
  )
  storage.set(SEARCH_KEY, searches)
  return searches
}

export function deleteSearch (query) {
  let searches = storage.get(SEARCH_KEY, [])
  deleteFromArray(searches, item => {
    return item === query
  })
  storage.set(SEARCH_KEY, searches)
  return searches
}

export function clearSearch () {
  storage.remove(SEARCH_KEY)
  return []
}

export function loadSearch () {
  return storage.get(SEARCH_KEY, [])
}

export function saveFavorite (article) {
  let articles = storage.get(FAVORITE_KEY, [])
  insertArray(
    articles,
    article,
    item => {
      return article._id === item._id
    },
    FAVORITE_MAX_LEN
  )
  storage.set(FAVORITE_KEY, articles)
  return articles
}

export function deleteFavorite (article) {
  let articles = storage.get(FAVORITE_KEY, [])
  deleteFromArray(articles, item => {
    return item._id === article._id
  })
  storage.set(FAVORITE_KEY, articles)
  return articles
}

export function loadFavorite () {
  return storage.get(FAVORITE_KEY, [])
}

export function loadToken () {
  return storage.get(TOKEN)
}

export function setToken (token) {
  return storage.set(TOKEN, token)
}

export function saveSkin (skins) {
  storage.set(SKIN_KEY, skins)
  return skins
}

export function loadSkin () {
  return storage.get(SKIN_KEY)
}
