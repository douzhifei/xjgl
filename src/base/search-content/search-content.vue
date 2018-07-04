<template>
  <transition  name="slide">
    <div class="search-content">
      <scroll class="search-scroll" ref="scroll">
        <div>
            <div class="hot">
              <div class="hot-title"><strong>热门搜索</strong></div>
              <ul class="hot-list">
                <li v-for="(item,index) in hots" :key="index" class="hot-item"  @click="selectItem(item.name)">{{item.name}}</li>
              </ul>
            </div>
            <div class="history" v-if="data.length!=0">
              <div class="history-title"><strong>历史搜索</strong><strong class="history-clear" @click="historyClear">清空</strong></div>
              <ul class="history-list">
                <li v-for="(item,index) in data" :key="index" class="history-item" @click="selectItem(item)">
                  <div class="history-item-left">{{item}}</div>
                  <div class="history-item-right" @click.stop="delSearch(item)"><i class="icon-close"></i></div>
                </li>
              </ul>
            </div>
        </div>
      </scroll>
    </div>
  </transition>
</template>
<script>
import Scroll from 'base/scroll/scroll'
export default {
    props:{
      data:{
        type:Array,
        default:[]
      },
      hots:{
        type:Array,
        default:[]
      }
    },
    methods: {
      selectItem(item){
        this.$emit('selectKey',item)
      },
      historyClear(){
        this.$emit('historyClear')
      },
      refreshScroll(){
        this.$refs.scroll.refresh()
      },
      delSearch(item){
          this.$emit('delSearch',item)
        }
    },
    components:{ Scroll },
    watch:{
      'data':'refreshScroll'
    }
}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.search-content
  width 100%
  top 100px
  bottom 0
  background-color $color-background-search 
  font-size $font-size-large
  overflow hidden
  .search-scroll
    height 100%
    width 100%
    .hot
      position relative
      width 94%
      padding 20px 0 0 3%
      .hot-title
        position relative
        width 100%
        margin-top 15px
      .hot-list
        display flex
        flex-wrap wrap
        width 100%
        padding-top 10px
        .hot-item
          display flex
          position relative
          color #7e8c8d
          background-color $color-background-tab
          padding 5px
          margin:7.5px 7.5px 0px 0
          border-radius 3px
    .history
      padding-top 40px
      .history-title
        position relative
        width 94%
        margin-left 3%
        .history-clear
          position absolute
          right 0
          color $color-theme
      .history-list
        padding-top 15px
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
            width 17%
            height 100%
            border-bottom  1px solid #E7E6EB
            .icon-close
              width 16px
              height 16px
              background-size 16px 16px
              bg-image('close')
          .history-item-left
            width 80%
            height 100%
            margin-left 3%
            no-wrap()
            border-bottom  1px solid #E7E6EB
            line-height 40px
          &:first-child
            .history-item-left,.history-item-right
              border-top  1px solid #E7E6EB
.slide-enter-active, .slide-leave-active
    transition: all 0.3s
.slide-enter, .slide-leave-to
    transform: translate3d(0, 100%, 0)
</style>
