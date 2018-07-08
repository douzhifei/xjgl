<template>
  <transition name="slide">
    <div class="collect">
      <div class="collect-head">
        <i class="back" @click="$router.back(-1)"></i>
        <span class="title">我的收藏</span>
      </div>
      <collect-list :data="favoriteList" @select="slectItem" @delCollect="delCollect"></collect-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import CollectList from 'base/collect-list/collect-list'
import { articleMixin } from 'common/js/mixin'
import { countVisit } from 'api/others'
export default {
  mixins: [articleMixin],
  computed: {
    ...mapGetters(['favoriteList'])
  },
  mounted () {
    countVisit('collect')
  },
  methods: {
    delCollect (item) {
      this.toggleFavorite(item)
    }
  },
  components: { CollectList }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.collect
  position fixed
  width 100%
  top 0
  bottom 0
  background-color $color-background-search
  z-index 9999
  .collect-head
    display flex
    position relative
    width 100%
    height 45px
    background-color $color-background
    align-items center
    justify-content center
    font-size $font-size-medium-x
    .back
      position absolute
      width 24px
      height 24px
      left 12.5px
      background-size 24px 24px
      bg-image('left')
.slide-enter-active, .slide-leave-active
  transition all 0.4s
  opacity 1
.slide-enter, .slide-leave-to
  opacity 0
</style>
