<template>
  <transition name="slide">
    <div class="data-jj">
      <head-box class="head-box" :data="articleData" :inApp="this.isApp(this.$route.query.inApp)"></head-box>
      <div class="compute">
        <div class="item">
          绝技一：
          <el-select v-model="value1" @change="change" placeholder="请选择" size="small">
            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="item">
          绝技二：
          <el-select v-model="value2" @change="change" placeholder="请选择" size="small">
            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="item">
          绝技三：
          <el-select v-model="value3" @change="change" placeholder="请选择" size="small">
            <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="item">
          绝技四：
          <el-select v-model="value4" @change="change" placeholder="请选择" size="small">
            <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="item">
          绝技五：
          <el-select v-model="value5" @change="change" placeholder="请选择" size="small">
            <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="item">
          绝技六：
          <el-select v-model="value6" @change="change" placeholder="请选择" size="small">
            <el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="result" v-if="animatedNumber1">
        <div class="re-left">自身元神：</div>
        <div class="re-right">{{ animatedNumber1 }}</div>
      </div>
      <div class="result" v-if="animatedNumber2">
        <div class="re-left">仙缘人物1：</div>
        <div class="re-right">{{ animatedNumber2 }}</div>
      </div>
      <div class="result" v-if="animatedNumber3">
        <div class="re-left">仙缘人物2：</div>
        <div class="re-right">{{ animatedNumber3 }}</div>
      </div>
      <div class="result" v-if="animatedNumber4">
        <div class="re-left">仙缘人物3：</div>
        <div class="re-right">{{ animatedNumber4 }}</div>
      </div>
      <div class="result" v-if="animatedNumber5">
        <div class="re-left">神贴：</div>
        <div class="re-right">{{ animatedNumber5 }}</div>
      </div>
      <div class="result" v-if="animatedNumber6">
        <div class="re-left">绝技书：</div>
        <div class="re-right">{{ animatedNumber6 }}</div>
      </div>
      <div class="result" v-if="animatedNumber7">
        <div class="re-left">灵珠碎片：</div>
        <div class="re-right">{{ animatedNumber7 }}</div>
      </div>
      <div class="result" v-if="animatedNumber8">
        <div class="re-left">修炼丹：</div>
        <div class="re-right">{{ animatedNumber8 }}</div>
      </div>
      <div class="result" v-if="animatedNumber9">
        <div class="re-left">银两：</div>
        <div class="re-right">{{ animatedNumber9 }}</div>
      </div>
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
      dis2: false,
      dis3: true,
      dis4: true,
      dis5: true,
      dis6: true,
      options1: [{
        value: 0,
        label: '-'
      }, {
        value: 1,
        label: '一重'
      }, {
        value: 2,
        label: '二重'
      }, {
        value: 3,
        label: '三重'
      }, {
        value: 4,
        label: '四重'
      }, {
        value: 5,
        label: '五重'
      }, {
        value: 6,
        label: '六重'
      }, {
        value: 7,
        label: '七重'
      }, {
        value: 8,
        label: '八重'
      }, {
        value: 9,
        label: '九重'
      }, {
        value: 10,
        label: '十重'
      }],
      options2: [{
        value: 0,
        label: '-'
      }, {
        value: 1,
        label: '一重'
      }, {
        value: 2,
        label: '二重'
      }, {
        value: 3,
        label: '三重'
      }, {
        value: 4,
        label: '四重'
      }, {
        value: 5,
        label: '五重'
      }, {
        value: 6,
        label: '六重'
      }, {
        value: 7,
        label: '七重'
      }, {
        value: 8,
        label: '八重'
      }, {
        value: 9,
        label: '九重'
      }, {
        value: 10,
        label: '十重'
      }],
      options3: [{
        value: 0,
        label: '-'
      }, {
        value: 1,
        label: '一重'
      }],
      options4: [{
        value: 0,
        label: '-'
      }, {
        value: 1,
        label: '一重'
      }, {
        value: 2,
        label: '二重'
      }, {
        value: 3,
        label: '三重'
      }, {
        value: 4,
        label: '四重'
      }, {
        value: 5,
        label: '五重'
      }, {
        value: 6,
        label: '六重'
      }, {
        value: 7,
        label: '七重'
      }, {
        value: 8,
        label: '八重'
      }, {
        value: 9,
        label: '九重'
      }, {
        value: 10,
        label: '十重'
      }],
      options5: [{
        value: 0,
        label: '-'
      }, {
        value: 1,
        label: '一重'
      }],
      options6: [{
        value: 0,
        label: '-'
      }, {
        value: 1,
        label: '一重'
      }, {
        value: 2,
        label: '二重'
      }, {
        value: 3,
        label: '三重'
      }, {
        value: 4,
        label: '四重'
      }, {
        value: 5,
        label: '五重'
      }, {
        value: 6,
        label: '六重'
      }, {
        value: 7,
        label: '七重'
      }, {
        value: 8,
        label: '八重'
      }, {
        value: 9,
        label: '九重'
      }, {
        value: 10,
        label: '十重'
      }],
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      value5: 0,
      value6: 0,
      articleData: {},
      result1: 0,
      result2: 0,
      result3: 0,
      result4: 0,
      result5: 0,
      result6: 0,
      result7: 0,
      result8: 0,
      result9: 0,
      jj1: [
        { mj: 16, xld: 64, ys: 2, xy1: 5, xy2: 0, xy3: 0, lz: 8, yl: 1, fs: 20, st: 0 },
        { mj: 20, xld: 80, ys: 4, xy1: 10, xy2: 0, xy3: 0, lz: 10, yl: 2, fs: 20, st: 0 },
        { mj: 24, xld: 96, ys: 6, xy1: 20, xy2: 0, xy3: 0, lz: 12, yl: 3, fs: 20, st: 0 },
        { mj: 28, xld: 112, ys: 8, xy1: 30, xy2: 0, xy3: 0, lz: 14, yl: 4, fs: 20, st: 0 },
        { mj: 32, xld: 128, ys: 10, xy1: 40, xy2: 0, xy3: 0, lz: 16, yl: 5, fs: 20, st: 0 },
        { mj: 36, xld: 144, ys: 15, xy1: 60, xy2: 0, xy3: 0, lz: 18, yl: 6, fs: 20, st: 0 },
        { mj: 40, xld: 160, ys: 20, xy1: 80, xy2: 0, xy3: 0, lz: 20, yl: 7, fs: 20, st: 0 },
        { mj: 44, xld: 176, ys: 25, xy1: 100, xy2: 0, xy3: 0, lz: 22, yl: 8, fs: 20, st: 0 },
        { mj: 48, xld: 192, ys: 30, xy1: 120, xy2: 0, xy3: 0, lz: 24, yl: 9, fs: 20, st: 0 },
        { mj: 52, xld: 208, ys: 40, xy1: 160, xy2: 0, xy3: 0, lz: 26, yl: 10, fs: 20, st: 0 }
      ],
      jj2: [
        { mj: 32, xld: 128, ys: 4, xy1: 0, xy2: 5, xy3: 5, lz: 16, yl: 2, fs: 30, st: 0 },
        { mj: 40, xld: 160, ys: 8, xy1: 0, xy2: 10, xy3: 10, lz: 20, yl: 4, fs: 30, st: 0 },
        { mj: 48, xld: 192, ys: 12, xy1: 0, xy2: 20, xy3: 20, lz: 24, yl: 6, fs: 30, st: 0 },
        { mj: 56, xld: 224, ys: 16, xy1: 0, xy2: 30, xy3: 30, lz: 28, yl: 8, fs: 30, st: 0 },
        { mj: 64, xld: 256, ys: 20, xy1: 0, xy2: 40, xy3: 40, lz: 32, yl: 10, fs: 30, st: 0 },
        { mj: 72, xld: 288, ys: 30, xy1: 0, xy2: 60, xy3: 60, lz: 36, yl: 12, fs: 30, st: 0 },
        { mj: 80, xld: 320, ys: 40, xy1: 0, xy2: 80, xy3: 80, lz: 40, yl: 14, fs: 30, st: 0 },
        { mj: 88, xld: 352, ys: 50, xy1: 0, xy2: 100, xy3: 100, lz: 44, yl: 16, fs: 30, st: 0 },
        { mj: 96, xld: 384, ys: 60, xy1: 0, xy2: 120, xy3: 120, lz: 48, yl: 18, fs: 30, st: 0 },
        { mj: 104, xld: 416, ys: 80, xy1: 0, xy2: 160, xy3: 160, lz: 52, yl: 20, fs: 30, st: 0 }
      ],
      jj3: [
        { mj: 64, xld: 256, ys: 40, xy1: 40, xy2: 40, xy3: 40, lz: 32, yl: 4, fs: 35, st: 0 }
      ],
      jj4: [
        { mj: 48, xld: 0, ys: 6, xy1: 0, xy2: 0, xy3: 0, lz: 24, yl: 3, fs: 40, st: 24 },
        { mj: 60, xld: 0, ys: 12, xy1: 0, xy2: 0, xy3: 0, lz: 30, yl: 6, fs: 40, st: 30 },
        { mj: 72, xld: 0, ys: 18, xy1: 0, xy2: 0, xy3: 0, lz: 36, yl: 9, fs: 40, st: 36 },
        { mj: 84, xld: 0, ys: 24, xy1: 0, xy2: 0, xy3: 0, lz: 42, yl: 12, fs: 40, st: 42 },
        { mj: 96, xld: 0, ys: 30, xy1: 0, xy2: 0, xy3: 0, lz: 48, yl: 15, fs: 40, st: 48 },
        { mj: 120, xld: 0, ys: 45, xy1: 0, xy2: 0, xy3: 0, lz: 54, yl: 18, fs: 40, st: 54 },
        { mj: 144, xld: 0, ys: 60, xy1: 0, xy2: 0, xy3: 0, lz: 60, yl: 21, fs: 40, st: 60 },
        { mj: 192, xld: 0, ys: 75, xy1: 0, xy2: 0, xy3: 0, lz: 66, yl: 24, fs: 40, st: 66 },
        { mj: 240, xld: 0, ys: 90, xy1: 0, xy2: 0, xy3: 0, lz: 72, yl: 27, fs: 40, st: 72 },
        { mj: 288, xld: 0, ys: 120, xy1: 0, xy2: 0, xy3: 0, lz: 78, yl: 30, fs: 40, st: 78 }
      ],
      jj5: [
        { mj: 80, xld: 0, ys: 60, xy1: 0, xy2: 0, xy3: 0, lz: 48, yl: 6, fs: 40, st: 48 }
      ],
      jj6: [
        { mj: 64, xld: 0, ys: 16, xy1: 16, xy2: 16, xy3: 16, lz: 32, yl: 40, fs: 40, st: 36 },
        { mj: 80, xld: 0, ys: 24, xy1: 24, xy2: 24, xy3: 24, lz: 40, yl: 80, fs: 40, st: 48 },
        { mj: 96, xld: 0, ys: 32, xy1: 32, xy2: 32, xy3: 32, lz: 48, yl: 120, fs: 40, st: 60 },
        { mj: 112, xld: 0, ys: 52, xy1: 52, xy2: 52, xy3: 52, lz: 56, yl: 160, fs: 40, st: 72 },
        { mj: 128, xld: 0, ys: 72, xy1: 72, xy2: 72, xy3: 72, lz: 64, yl: 200, fs: 40, st: 84 },
        { mj: 144, xld: 0, ys: 80, xy1: 80, xy2: 80, xy3: 80, lz: 80, yl: 240, fs: 40, st: 96 },
        { mj: 160, xld: 0, ys: 80, xy1: 80, xy2: 80, xy3: 80, lz: 80, yl: 280, fs: 40, st: 108 },
        { mj: 176, xld: 0, ys: 80, xy1: 80, xy2: 80, xy3: 80, lz: 80, yl: 320, fs: 40, st: 120 },
        { mj: 192, xld: 0, ys: 80, xy1: 80, xy2: 80, xy3: 80, lz: 96, yl: 360, fs: 40, st: 132 },
        { mj: 208, xld: 0, ys: 80, xy1: 80, xy2: 80, xy3: 80, lz: 104, yl: 400, fs: 40, st: 144 }
      ]
    }
  },
  computed: {
    animatedNumber1: function () {
      return this.result1.toFixed(0) > 0 ? this.result1.toFixed(0) : ''
    },
    animatedNumber2: function () {
      return this.result2.toFixed(0) > 0 ? this.result2.toFixed(0) : ''
    },
    animatedNumber3: function () {
      return this.result3.toFixed(0) > 0 ? this.result3.toFixed(0) : ''
    },
    animatedNumber4: function () {
      return this.result4.toFixed(0) > 0 ? this.result4.toFixed(0) : ''
    },
    animatedNumber5: function () {
      return this.result5.toFixed(0) > 0 ? this.result5.toFixed(0) : ''
    },
    animatedNumber6: function () {
      return this.result6.toFixed(0) > 0 ? this.result6.toFixed(0) : ''
    },
    animatedNumber7: function () {
      return this.result7.toFixed(0) > 0 ? this.result7.toFixed(0) : ''
    },
    animatedNumber8: function () {
      return this.result8.toFixed(0) > 0 ? this.result8.toFixed(0) : ''
    },
    animatedNumber9: function () {
      return this.result9.toFixed(0) > 0 ? this.result9.toFixed(0) + '万' : ''
    }
  },
  created () {
    this.articleData.title = '人物绝技所需材料'
    this.articleData.goto = 'jj'
    if (this.$route.query.inApp) {
      this.getArticleData().then((res) => {
        this.articleData = res
      })
    }
  },
  mounted () {
    countVisit('jueji')
  },
  methods: {
    change () {
      if (this.value1 < 5) {
        this.value2 = 0
        this.value3 = 0
        this.value4 = 0
        this.value5 = 0
        this.value6 = 0
      }
      if (this.value2 < 5) {
        this.value3 = 0
        this.value4 = 0
        this.value5 = 0
        this.value6 = 0
      }
      if (this.value3 !== 1) {
        this.value4 = 0
        this.value5 = 0
        this.value6 = 0
      }
      if (this.value4 < 5) {
        this.value5 = 0
        this.value6 = 0
      }
      if (this.value5 !== 1) {
        this.value6 = 0
      }
      let result = this.computeResult()
      TweenLite.to(this.$data, 0.5, { result1: result.result1 })
      TweenLite.to(this.$data, 0.5, { result2: result.result2 })
      TweenLite.to(this.$data, 0.5, { result3: result.result3 })
      TweenLite.to(this.$data, 0.5, { result4: result.result4 })
      TweenLite.to(this.$data, 0.5, { result5: result.result5 })
      TweenLite.to(this.$data, 0.5, { result6: result.result6 })
      TweenLite.to(this.$data, 0.5, { result7: result.result7 })
      TweenLite.to(this.$data, 0.5, { result8: result.result8 })
      TweenLite.to(this.$data, 0.5, { result9: result.result9 })
    },
    computeResult () {
      let result = {}
      result.result1 = 0
      result.result2 = 0
      result.result3 = 0
      result.result4 = 0
      result.result5 = 0
      result.result6 = 0
      result.result7 = 0
      result.result8 = 0
      result.result9 = 0
      for (let i = 0; i < this.value1; i++) {
        result.result1 += this.jj1[i].ys
        result.result2 += this.jj1[i].xy1
        result.result3 += this.jj1[i].xy2
        result.result4 += this.jj1[i].xy3
        result.result5 += this.jj1[i].st
        result.result6 += this.jj1[i].mj
        result.result7 += this.jj1[i].lz
        result.result8 += this.jj1[i].xld
        result.result9 += this.jj1[i].yl
      }
      for (let i = 0; i < this.value2; i++) {
        result.result1 += this.jj2[i].ys
        result.result2 += this.jj2[i].xy1
        result.result3 += this.jj2[i].xy2
        result.result4 += this.jj2[i].xy3
        result.result5 += this.jj2[i].st
        result.result6 += this.jj2[i].mj
        result.result7 += this.jj2[i].lz
        result.result8 += this.jj2[i].xld
        result.result9 += this.jj2[i].yl
      }
      for (let i = 0; i < this.value3; i++) {
        result.result1 += this.jj3[i].ys
        result.result2 += this.jj3[i].xy1
        result.result3 += this.jj3[i].xy2
        result.result4 += this.jj3[i].xy3
        result.result5 += this.jj3[i].st
        result.result6 += this.jj3[i].mj
        result.result7 += this.jj3[i].lz
        result.result8 += this.jj3[i].xld
        result.result9 += this.jj3[i].yl
      }
      for (let i = 0; i < this.value4; i++) {
        result.result1 += this.jj4[i].ys
        result.result2 += this.jj4[i].xy1
        result.result3 += this.jj4[i].xy2
        result.result4 += this.jj4[i].xy3
        result.result5 += this.jj4[i].st
        result.result6 += this.jj4[i].mj
        result.result7 += this.jj4[i].lz
        result.result8 += this.jj4[i].xld
        result.result9 += this.jj4[i].yl
      }
      for (let i = 0; i < this.value5; i++) {
        result.result1 += this.jj5[i].ys
        result.result2 += this.jj5[i].xy1
        result.result3 += this.jj5[i].xy2
        result.result4 += this.jj5[i].xy3
        result.result5 += this.jj5[i].st
        result.result6 += this.jj5[i].mj
        result.result7 += this.jj5[i].lz
        result.result8 += this.jj5[i].xld
        result.result9 += this.jj5[i].yl
      }
      for (let i = 0; i < this.value6; i++) {
        result.result1 += this.jj6[i].ys
        result.result2 += this.jj6[i].xy1
        result.result3 += this.jj6[i].xy2
        result.result4 += this.jj6[i].xy3
        result.result5 += this.jj6[i].st
        result.result6 += this.jj6[i].mj
        result.result7 += this.jj6[i].lz
        result.result8 += this.jj6[i].xld
        result.result9 += this.jj6[i].yl
      }
      return result
    }
  },
  components: { HeadBox, Adv }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable'
.data-jj
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
    flex-direction column
    margin-bottom 20px
    .item
      width 100%
      height 35px
      display flex
      align-items center
      justify-content center
  .result
    width 100%
    font-size 28px
    text-align center
    margin-top 2%
    font-weight bold
    display flex
    align-items center
    justify-content space-around
    .re-left
      width 50%
      text-align right
    .re-right
      width 40%
      text-align left
      color red
  .adv
    margin-top 70px
.slide-enter-active, .slide-leave-active
  transition all 0.4s
.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
</style>
