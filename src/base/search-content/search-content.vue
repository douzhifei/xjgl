<template>
  <transition  name="slide">
    <div class="search-content">
      <scroll class="search-scroll">
        <div>
        <div class="hot">
          <div class="hot-title"><strong>热门搜索</strong></div>
          <ul class="hot-list">
            <li v-for="(item,index) in hot" :key="index" class="hot-item">{{item}}</li>
          </ul>
        </div>
        <div class="history">
          <div class="history-title"><strong>历史搜索</strong></div>
          <ul class="history-list">
            <li v-for="(item,index) in list" :key="index" class="history-item"><div>{{item}}</div></li>
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
    data(){
      return {
        hot: [],
        list: []
      }
    },
    created() {
      this.hot = ['仙剑','椰子','大家深刻理解阿拉丁','倒垃圾达拉斯姐弟恋','dds','四岁的萨达','三三四四','我是谁我在那里','打算','得到']
      this.list = ['fjhadk ','fsdfds','大家深刻理解阿拉丁','倒垃圾达拉斯姐弟恋','dds','四岁的萨达','三三四四','sdfjhsdjh杜绝垃圾的拉斯加大打击圣诞节阿萨德加拉斯打进as来得及啊塑料袋',,'椰子','大家深刻理解阿拉丁','倒垃圾达拉斯姐弟恋','dds','四岁的萨达','三三四四','我是谁我在那里']
    },
    components:{ Scroll }

}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.search-content
  position fixed
  width 100%
  top 105px
  bottom 0
  z-index 98
  background-color $color-background-search 
  font-size $font-size-large
  .search-scroll
    width 100%
    height 100%
    .hot
      position relative
      width 350px
      margin 20px 0 0 12.5px
      .hot-title
        position relative
        width 100%
        margin-top 15px
      .hot-list
        display flex
        flex-wrap wrap
        width 100%
        margin-top 10px
        .hot-item
          display flex
          position relative
          color #a8a8a8
          background-color $color-background-tab
          padding 5px
          margin:7.5px 7.5px 0px 0
          border-radius 3px
    .history
      margin-top 40px
      .history-title
        position relative
        width 350px
        margin-left 12.5px
      .history-list
        margin-top 15px
        .history-item
          width 375px
          height 40px
          background-color $color-background-search 
          div
            display flex
            align-items center
            position relative
            width 350px
            height 100%
            margin-left 12.5px
            no-wrap()
            border-bottom  1px solid #E7E6EB
          &:first-child
            div
              border-top  1px solid #E7E6EB
.slide-enter-active, .slide-leave-active
    transition: all 0.3s
.slide-enter, .slide-leave-to
    transform: translate3d(0, 100%, 0)
</style>
