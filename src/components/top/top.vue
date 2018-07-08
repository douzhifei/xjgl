<template>
  <div class="top">
    <search-box></search-box>
    <div class="collect">
      <i class="my"></i>
    </div>
  </div>
</template>

<script>
import SearchBox from 'base/search-box/search-box'
export default {
  components: {
    SearchBox
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.top
  display flex
  align-items center
  box-sizing border-box
  width 100%
  height 55px
  z-index 99
  .collect
    display flex
    width 35px
    height 35px
    margin-left 15px
    align-items center
    .my
      width 24px
      height 24px
      background-size 24px 24px
      bg-image('my')
</style>

