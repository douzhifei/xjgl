<template>
  <transition name="slide">
    <div class="data-lt">
      <head-box class="head-box" :data="articleData" :inApp="this.isApp(this.$route.query.inApp)"></head-box>
      <div class="compute">
        <el-input-number v-model.number="level" :min="0" :max="100" label="描述文字"></el-input-number>
      </div>
      <div class="result">升级所需法印：{{ animatedNumber1 }}</div>
      <div class="result">合计：{{ animatedNumber2 }}</div>
      <adv class="adv" v-if="articleData.title"></adv>
    </div>
  </transition>
</template>
<script>
import { TweenLite } from 'gsap/TweenLite'
import HeadBox from 'base/head-box/head-box'
import { articleMixin } from 'common/js/mixin'
import { countVisit } from 'api/others'
import Adv from 'base/adv/adv'
export default {
  mixins: [articleMixin],
  data () {
    return {
      level: 0,
      result1: 1,
      result2: 1,
      articleData: {},
      cl: [1, 4, 6, 8, 10, 12, 13, 14, 15, 17, 20, 24, 29, 35, 42, 50, 58, 67, 76, 86, 96, 106, 117, 128, 139, 151,
        163, 175, 187, 199, 212, 225, 238, 251, 265, 279, 293, 307, 322, 337, 352, 367, 382, 398, 414, 430, 446, 462, 479, 496, 513,
        530, 547, 565, 583, 601, 619, 637, 656, 675, 694, 713, 732, 752, 772, 792, 812, 832, 853, 874, 895, 916, 937, 959, 981, 1003,
        1025, 1047, 1070, 1093, 1116, 1139, 1162, 1186, 1210, 1234, 1258, 1282, 1307, 1332, 1357, 1382, 1407, 1433, 1459, 1485, 1511, 1537, 1563, 1589, 1615]
    }
  },
  computed: {
    animatedNumber1: function () {
      return this.result1.toFixed(0)
    },
    animatedNumber2: function () {
      return this.result2.toFixed(0)
    }
  },
  created () {
    this.articleData.title = '化境等级所需材料'
    this.articleData.goto = 'hj'
    if (this.$route.query.inApp) {
      this.getArticleData().then((res) => {
        this.articleData = res
      })
    }
  },
  mounted () {
    countVisit('huajing')
  },
  methods: {
    computeResult (v) {
      let count = 0
      for (let i = 0; i < v + 1; i++) {
        count += this.cl[i]
      }
      return count
    }
  },
  components: { HeadBox, Adv },
  watch: {
    level: function (newValue) {
      TweenLite.to(this.$data, 0.6, { result1: this.cl[newValue] })
      TweenLite.to(this.$data, 0.6, { result2: this.computeResult(newValue) })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable'
.data-lt
  position fixed
  width 100%
  left 0
  top 0
  bottom 0
  overflow scroll
  z-index 1000
  background $color-background
  .compute
    width 96%
    margin-left 2%
    display flex
    align-items center
    justify-content center
    margin-top 20px
    .item-value
      width 26%
    .item-num1
      width 38%
    .item-num2
      width 32%
  .name
    margin-top 18%
    padding-bottom 6px
    font-weight bold
    .item
      text-align center
  .result
    width 100%
    font-size 28px
    text-align center
    margin-top 10%
    font-weight bold
  .adv
    margin-top 90px
.slide-enter-active, .slide-leave-active
  transition all 0.4s
.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
</style>
