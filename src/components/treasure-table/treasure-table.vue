<template>
  <transition name="slide">
    <scroll class="treasure" ref="scroll">
      <div>
        <div class="treasure-head">{{$route.query.title}}</div>
        <div class="treasure-map">
          <treasure-part :data="item" v-for="(item, index) in tData" :key="index"></treasure-part>
        </div>
        <adv v-if="tData.length!=0" @scrollTop="scrollTop"></adv>
      </div>
    </scroll>
  </transition>
</template>
<script>
import { getTreasureList } from 'api/treasure'
import Scroll from 'base/scroll/scroll'
import TreasurePart from 'base/treasure-part/treasure-part'
import { countVisit } from 'api/others'
import Adv from 'base/adv/adv'
export default {
  data () {
    return {
      data: new Array(270),
      tData: [],
      directions: ['东', '西', '南', '北', '中', '西南', '西北', '东北', '东南']
    }
  },
  created () {
    this.newData()
  },
  mounted () {
    countVisit('treasureTable')
  },
  methods: {
    newData () {
      getTreasureList(this.$route.query.mapId).then((res) => {
        res.forEach(value => {
          this.data.fill(value, value.range - 1, value.range)
        })
        for (let i = 0; i < this.directions.length; i++) {
          let part = {}
          part.data = []
          let len = i * 30
          for (let j = len; j < len + 30; j++) {
            part.data.push(this.data[j])
          }
          part.title = this.directions[i]
          this.tData.push(part)
        }
      })
    },
    scrollTop () {
      this.$refs.scroll.scrollTo(0, 0, 400)
    }
  },
  components: { TreasurePart, Scroll, Adv }

}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.treasure
  position fixed
  width 100%
  top 0
  bottom 0
  left 0
  background-color $color-background
  z-index 999
  font-size $font-size-large
  overflow hidden
  .treasure-head
    width 100%
    height 50px
    display flex
    align-items center
    justify-content center
    font-size $font-size-medium-x
    border-bottom 2px solid #E7E6EB
    font-weight bold
  .treasure-map
    width 100%
    text-align center
    .map-item
      margin 20px
.slide-enter-active, .slide-leave-active
  transition all 0.4s
.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
</style>
