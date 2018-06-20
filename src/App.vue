<template>
  <div id="app">
    <div class="app-container"  @touchmove.prevent v-show="false">
      <search></search>
      <tab></tab>
    </div>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Search from 'components/search/search'
import Banner from 'components/banner/banner'
import Tab from 'components/tab/tab'

export default {
  components: { Search, Banner, Tab }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/index'
#app 
  width: 100%
  .app-container
    position fixed
    width 100%
    z-index 999
</style>
