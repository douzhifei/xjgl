import { mapGetters, mapActions } from 'vuex'
import { getArticle } from 'api/article'
import axios from 'axios'
import moment from 'moment'
export const articleMixin = {
  computed: {
    ...mapGetters(['favoriteList'])
  },
  methods: {
    toggleFavorite (article) {
      if (this.isFavorite(article)) {
        this.deleteFavoriteList(article)
      } else {
        this.saveFavoriteList(article)
      }
    },
    getFavoriteIcon (article) {
      if (this.isFavorite(article)) {
        return 'has-collect'
      }
      return 'no-collect'
    },
    isFavorite (article) {
      const index = this.favoriteList.findIndex(item => {
        return item._id === article._id
      })
      return index > -1
    },
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    isApp (app) {
      if (this.$route.query.inApp !== 1) {
        return false
      }
      return true
    },
    getArticleData () {
      let id = this.$route.params.id || this.$route.query.id
      if (!id) {
        return
      }
      return getArticle(id).then(res => {
        let time = moment(res.create_time).format('YYYY-MM-DD')
        let today = moment(new Date()).format('YYYY-MM-DD')
        if (time === today) {
          res.create_time = '今天'
        } else {
          res.create_time = time
        }
        return res
      })
    },
    slectItem (item) {
      if (item.goto !== 'article') {
        this.$router.push({
          path: `/${item.goto}`,
          query: { inApp: 1, id: item._id }
        })
        return
      }
      this.$router.push({
        path: `/${item.goto}/${item._id}`,
        query: { inApp: 1 }
      })
    },
    blurAdjust () {
      setTimeout(() => {
        if (
          document.activeElement.tagName == 'INPUT' ||
          document.activeElement.tagName == 'TEXTAREA'
        ) {
          return
        }
        let result = 'pc'
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
          // 判断iPhone|iPad|iPod|iOS
          result = 'ios'
        } else if (/(Android)/i.test(navigator.userAgent)) {
          // 判断Android
          result = 'android'
        }
        if (result === 'ios') {
          document.activeElement.scrollIntoViewIfNeeded(true)
        }
      }, 100)
    },
    ...mapActions(['saveFavoriteList', 'deleteFavoriteList'])
  }
}

export const adminMixin = {
  computed: {
    ...mapGetters(['token'])
  },
  methods: {
    checkToken () {
      if (this.token === undefined) {
        this.$router.push({
          path: '/login'
        })
        return
      }
      axios
        .get('/api', {
          params: { token: this.token }
        })
        .then(res => {
          if (!res.data.success) {
            this.$router.push({
              path: '/login'
            })
          }
        })
    }
  }
}

export const searchMixin = {
  data () {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  computed: {
    ...mapGetters(['searchHistory'])
  },
  methods: {
    saveSearch () {
      this.saveSearchHistory(this.query)
    },
    ...mapActions(['saveSearchHistory', 'deleteSearchHistory'])
  }
}
