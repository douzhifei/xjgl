<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Index from 'components/index/index'

export default {
  components: { Index }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/index'
#app 
  max-width 1024px
  margin 0 auto
  .app-container
    position fixed
    width 100%
    z-index 999
</style>
