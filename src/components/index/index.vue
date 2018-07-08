<template>
  <div class="app-container" @touchmove.prevent>
    <search class="search-box" ref="searchBox" @showSearch="showSearch" @closeSearch="closeSearch" @query="onQueryChange"></search>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <search-content class="search-content" v-if="showSearchContent" :data="searchHistory" :hots="hots" @selectKey="selectKey" @delSearch="delSearch" @historyClear="historyClear"></search-content>
    <search-list v-if="showSearchList" :data="searchData" @select="slectItem"></search-list>
  </div>
</template>
<script>
import Search from 'components/search/search'
import Tab from 'components/tab/tab'
import SearchContent from 'base/search-content/search-content'
import SearchList from 'base/search-list/search-list'
import { getArticleSearch, getHots } from 'api/article'
import { mapGetters, mapActions } from 'vuex'
import { countVisit } from 'api/others'
export default {
  data () {
    return {
      showSearchContent: false,
      showSearchList: false,
      searchData: [],
      hots: [],
      query: ''
    }
  },
  computed: {
    ...mapGetters(['searchHistory'])
  },
  watch: {
    '$route' (to, from) {
      if (to.path === '/') {
        this.$router.push({
          path: 'hot'
        })
      }
    }
  },
  created () {
    this._getHots()
  },
  mounted () {
    countVisit('index')
    setTimeout(() => {
      this.$router.push({
        path: '/hot'
      })
    }, 40)
  },
  methods: {
    showSearch () {
      this.showSearchContent = true
    },
    closeSearch () {
      this.showSearchContent = false
      this.showSearchList = false
      this.searchData = []
    },
    onQueryChange (newQuery) {
      if (newQuery === '') {
        this.showSearchList = false
        return
      }
      this.query = newQuery
      this.showSearchList = true
      getArticleSearch(newQuery).then((res) => {
        this.searchData = res
      })
    },
    slectItem (item) {
      this.saveSearch()
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
    selectKey (item) {
      this.$refs.searchBox.replaceQuery(item)
    },
    _getHots () {
      getHots().then((res) => {
        this.hots = res
      })
    },
    historyClear () {
      this.clearSearchHistory()
    },
    saveSearch () {
      this.saveSearchHistory(this.query)
    },
    delSearch (item) {
      this.deleteSearchHistory(item)
    },
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory',
      'clearSearchHistory'
    ])
  },
  components: { Search, Tab, SearchContent, SearchList }
}
</script>

<style lang="stylus" scoped>
.search-content
  position fixed
  z-index 98
</style>
