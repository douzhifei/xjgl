<template>
  <transition  name="slide">
    <div class="search-content">
      <scroll class="search-scroll">
        <div>
        <ul class="search-ul">
            <li class="search-li" v-for="(item, index) in data " :key="index">
                <div class="search-li-data" style="width:95px;margin-left:4px">{{item.name+(item.num>1?item.num:'')}}</div>
                <div class="search-li-data" style="width:85px">{{item.world}}</div>
                <div class="search-li-data" style="width:70px">{{item.site}}</div>
                <div class="search-li-data">{{item.level>0?item.level+"星":""}}</div>
                <div class="search-li-data" style="margin-left:5px">{{item.plus}}</div>
            </li>
        </ul>
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
            type: Array,
            default: []
        }
    },
    methods: {

    },
    components:{ Scroll }

}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.search-content
  position absolute
  width 100%
  top 105px
  bottom 0
  background-color $color-background-search 
  font-size $font-size-large
  .search-scroll
    width 100%
    height 100%
    .search-ul
        width 94%
        margin-left 3%
        .search-li
            width 100%
            overflow hidden
            display flex
            flex-direction row
            font-size 14px
            color #7e8c8d
            padding 10px 0
            border-bottom 1px solid rgba(126,140,141,0.6)
            
.slide-enter-active, .slide-leave-active
    transition: all 0.3s
.slide-enter, .slide-leave-to
    transform: translate3d(0, 100%, 0)
</style>
