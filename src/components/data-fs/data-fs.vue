<template>
  <div class="data-fs">
    <head-box class="head-box" :data="articleData" :inApp="this.isApp(this.$route.query.inApp)"></head-box>
    <div class="name">
      <div class="item item-value">品质</div>
      <div class="item item-num1">飞升次数</div>
    </div>
    <div class="compute">
      <el-select class="item-value" v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-input-number class="item-num1" v-model="num1" :min="0" :max="40" label="飞升次数"></el-input-number>
    </div>
    <div class="result">元神：{{ animatedNumber }}</div>
    <div class="result">飞升丹：{{ animatedNumber2 }}</div>
    <adv class="adv" v-if="articleData.title"></adv>
  </div>
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
      num1: 40,
      options: [{
        value: 1.5,
        label: '14品'
      }, {
        value: 1,
        label: '13品'
      }],
      value: 1.5,
      articleData: {},
      result1: 370,
      result2: 900
    }
  },
  computed: {
    animatedNumber: function () {
      return this.result1.toFixed(0)
    },
    animatedNumber2: function () {
      return this.result2.toFixed(0)
    }
  },
  created () {
    this.articleData.title = '人物飞升所需材料'
    this.articleData.goto = 'fs'
    if (this.$route.query.inApp) {
      this.getArticleData().then((res) => {
        this.articleData = res
      })
    }
  },
  mounted () {
    countVisit('feisheng')
  },
  methods: {
    computeResult (y, x) {
      if (y < 5) {
        return 2 * y
      } else if (y < 10) {
        return 2 * (y - 1) + 10
      } else if (y === 10) {
        return 46
      } else if (y < 15) {
        return 3 * (y - 10) + 46
      } else if (y < 21) {
        return 3 * (y - 11) + 46 + 40
      } else if (y < 25) {
        return 5 * (y - 20) + 113
      } else if (y === 25) {
        return 193
      } else if (y < 31) {
        return 5 * (y - 21) + 113 + 60
      } else if (y < 40) {
        return 8 * (y - 30) + 218
      } else if (y === 40) {
        return 370
      }
    },
    computeResult2 (x, y) {
      if (x < 11) {
        return 4 * x * y
      } else if (x < 21) {
        return 4 * 10 * y + 8 * (x - 10) * y
      } else if (x < 31) {
        return 4 * 10 * y + 8 * 10 * y + 16 * (x - 20) * y
      } else if (x < 41) {
        return 4 * 10 * y + 8 * 10 * y + 16 * 10 * y + 32 * (x - 30) * y
      }
    }
  },
  components: { HeadBox, Adv },
  watch: {
    num1: function (newValue) {
      TweenLite.to(this.$data, 1, { result1: this.computeResult(newValue, this.value), result2: this.computeResult2(newValue, this.value) })
    },
    value: function (newValue) {
      TweenLite.to(this.$data, 1, { result1: this.computeResult(this.num1, newValue), result2: this.computeResult2(this.num1, newValue) })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable'
.data-fs
  position fixed
  width 100%
  left 0
  top 0
  bottom 0
  overflow scroll
  z-index 999
  background $color-background
  .compute, .name
    width 96%
    margin-left 2%
    display flex
    align-items center
    justify-content center
    .item-value
      width 26%
      margin-right 20px
    .item-num1
      width 38%
  .name
    margin-top 18%
    padding-bottom 6px
    font-weight bold
    .item
      text-align center
  .result
    width 100%
    font-size 60px
    text-align center
    margin-top 10%
    font-weight bold
  .adv
    margin-top 90px
</style>
