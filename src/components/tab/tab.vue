<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/hot">
      <span class="tab-link">头条</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/activity">
      <span class="tab-link">活动</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/raiders">
      <span class="tab-link">攻略</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/data">
      <span class="tab-link">数据</span>
    </router-link>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      navs: [
        { id: 1, name: '头条' },
        { id: 2, name: '活动' },
        { id: 3, name: '攻略' },
        { id: 4, name: '资料' }]
    }
  },
  methods: {
    swiperContainer: function (id) {
      alert(id)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.tab
  display flex
  height 44px
  line-height 22px
  font-size $font-size-large
  margin-top 10px
  width 100%
  z-index 0
  .tab-item
    display flex
    flex 1
    justify-content center
    align-items center
    .tab-link
      padding-bottom 2px
      color $color-text-l
    &.router-link-active
      .tab-link
        color $color-theme
        border-bottom 2px solid $color-theme
</style>
