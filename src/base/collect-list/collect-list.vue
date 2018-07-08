<template>
  <div class="search-content">
    <scroll class="search-scroll">
      <div class="history">
        <ul class="history-list">
          <li v-for="(item,index) in data" :key="index" class="history-item" @click="selectItem(item)">
            <div class="history-item-left">{{item.title}}</div>
            <div class="history-item-right" @click.stop="delCollect(item)">
              <i class="icon-close"></i>
            </div>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from 'base/scroll/scroll'
export default {
  props: {
    data: {
      type: Array,
      default: () => { return [] }
    }
  },
  methods: {
    selectItem (item) {
      this.$emit('select', item)
    },
    delCollect (item) {
      this.$emit('delCollect', item)
    }
  },
  components: { Scroll }

}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.search-content
  position fixed
  width 100%
  top 45px
  bottom 0
  z-index 98
  background-color $color-background-search
  font-size $font-size-large
  overflow hidden
  .search-scroll
    width 100%
    height 100%
    .history
      .history-title
        position relative
        width 94%
        margin-left 3%
      .history-list
        .history-item
          width 100%
          height 40px
          background-color $color-background-search
          display flex
          color #7e8c8d
          .history-item-right
            display flex
            align-items center
            justify-content center
            width 50px
            height 100%
            border-bottom 1px solid #E7E6EB
            .icon-close
              width 16px
              height 16px
              background-size 16px 16px
              bg-image('close')
          .history-item-left
            width 94%
            height 100%
            margin-left 3%
            no-wrap()
            border-bottom 1px solid #E7E6EB
            line-height 40px
          &:first-child
            .history-item-left, .history-item-right
              border-top 1px solid #E7E6EB
</style>
