<template>
  <transition name="slide">
    <div class="message" @touchmove.prevent>
      <div class="block" @click="quit"></div>
      <div class="content">
        <div class="item item-title">合计</div>
        <div class="item">
          <div class="item-left">体：</div>
          <div class="item-right">{{result.tl}}</div>
        </div>
        <div class="item">
          <div class="item-left">攻：</div>
          <div class="item-right">{{result.gj}}</div>
        </div>
        <div class="item">
          <div class="item-left">灵：</div>
          <div class="item-right">{{result.ll}}</div>
        </div>
        <div class="item">
          <div class="item-left">防：</div>
          <div class="item-right">{{result.fy}}</div>
        </div>
        <div class="item">
          <div class="item-left">暴击：</div>
          <div class="item-right">{{result.bj}}</div>
        </div>
        <div class="item">
          <div class="item-left">法爆：</div>
          <div class="item-right">{{result.fb}}</div>
        </div>
        <div class="item">
          <div class="item-left">闪避：</div>
          <div class="item-right">{{result.sb}}</div>
        </div>
        <div class="item">
          <div class="item-left">化解：</div>
          <div class="item-right">{{result.hj}}</div>
        </div>
        <div class="item">
          <div class="item-left">反击：</div>
          <div class="item-right">{{result.fj}}</div>
        </div>
        <div class="item">
          <div class="item-left">暴击加伤：</div>
          <div class="item-right">{{result.bjjs}}</div>
        </div>
        <div class="item">
          <div class="item-left">法爆加伤：</div>
          <div class="item-right">{{result.fbjs}}</div>
        </div>
        <div class="item">
          <div class="item-left">闪避回血：</div>
          <div class="item-right">{{result.sbhx}}</div>
        </div>
        <div class="item">
          <div class="item-left">化解回血：</div>
          <div class="item-right">{{result.hjhx}}</div>
        </div>
        <div class="item">
          <div class="item-left">反击加伤：</div>
          <div class="item-right">{{result.fjjs}}</div>
        </div>
        <div class="item">
          <div class="item-left">五彩石：</div>
          <div class="item-right">{{result.wcs}}</div>
        </div>
        <div class="item item-zl">
          <div class="item-left">提高战力：</div>
          <div class="item-right">{{result.zl}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      result: {
        tl: 0,
        gj: 0,
        ll: 0,
        fy: 0,
        bj: 0,
        fb: 0,
        sb: 0,
        hj: 0,
        fj: 0,
        bjjs: 0,
        fbjs: 0,
        sbhx: 0,
        hjhx: 0,
        fjjs: 0,
        wcs: 0,
        zl: 0
      }
    }
  },
  props: {
    data: {
      type: Array,
      default: () => { return [] }
    }
  },
  watch: {

  },
  mounted () {
    this.computeAll()
  },
  methods: {
    computeTili (item) {
      if (!item.tl) {
        return 0
      }
      if (item.hasPart) {
        return 2500 * item.level
      }
      if (item.isPart) {
        return item.level * 350 + (item.level >= 3 ? 375 : 0) + (item.level >= 10 ? 750 : 0) + (item.level >= 15 ? 1125 : 0)
      }
      if (!item.hasPart && !item.isPart) {
        return 2000 * item.level
      }
    },
    computeGongji (item) {
      if (!item.gj) {
        return 0
      }
      if (item.hasPart) {
        return Math.floor(2500 / 3 * item.level)
      }
      if (item.isPart) {
        return item.level * 233 + (item.level >= 3 ? 250 : 0) + (item.level >= 10 ? 500 : 0) + (item.level >= 15 ? 750 : 0)
      }
      if (!item.hasPart && !item.isPart) {
        return Math.floor(2000 / 3 * item.level)
      }
    },
    computeLingli (item) {
      if (!item.ll) {
        return 0
      }
      if (item.hasPart) {
        return Math.floor(555.5 * item.level)
      }
      if (item.isPart) {
        return item.level * 155 + (item.level >= 3 ? 167 : 0) + (item.level >= 10 ? 333 : 0) + (item.level >= 15 ? 499 : 0)
      }
      if (!item.hasPart && !item.isPart) {
        return Math.floor(444.4 * item.level)
      }
    },
    computeFangyu (item) {
      if (!item.fy) {
        return 0
      }
      if (item.hasPart) {
        return Math.floor(555.5 * item.level)
      }
      if (item.isPart) {
        return item.level * 155 + (item.level >= 3 ? 167 : 0) + (item.level >= 10 ? 333 : 0) + (item.level >= 15 ? 499 : 0)
      }
      if (!item.hasPart && !item.isPart) {
        return Math.floor(444.4 * item.level)
      }
    },
    computeBaoji (item) {
      if (!item.bj) {
        return 0
      }
      if (item.hasPart) {
        return Math.floor(25 / 3 * item.level)
      }
      if (item.isPart) {
        return item.level * 3 + (item.level >= 6 ? 4 : 0)
      }
      if (!item.hasPart && !item.isPart) {
        return Math.floor(20 / 3 * item.level)
      }
    },
    computeFabao (item) {
      if (!item.fb) {
        return 0
      }
      if (item.hasPart) {
        return Math.floor(25 / 3 * item.level)
      }
      if (item.isPart) {
        return item.level * 3 + (item.level >= 6 ? 4 : 0)
      }
      if (!item.hasPart && !item.isPart) {
        return Math.floor(20 / 3 * item.level)
      }
    },
    computeShangbi (item) {
      if (!item.sb) {
        return 0
      }
      if (item.hasPart) {
        return Math.floor(25 / 3 * item.level)
      }
      if (item.isPart) {
        return item.level * 3 + (item.level >= 6 ? 4 : 0)
      }
      if (!item.hasPart && !item.isPart) {
        return Math.floor(20 / 3 * item.level)
      }
    },
    computeHuajie (item) {
      if (!item.hj) {
        return 0
      }
      if (item.hasPart) {
        return Math.floor(50 / 3 * item.level)
      }
      if (item.isPart) {
        return item.level * 3 + (item.level >= 6 ? 4 : 0)
      }
      if (!item.hasPart && !item.isPart) {
        return Math.floor(40 / 3 * item.level)
      }
    },
    computeFangji (item) {
      if (!item.fj) {
        return 0
      }
      if (item.hasPart) {
        return Math.floor(25 / 3 * item.level)
      }
      if (item.isPart) {
        return item.level * 3 + (item.level >= 6 ? 4 : 0)
      }
      if (!item.hasPart && !item.isPart) {
        return Math.floor(20 / 3 * item.level)
      }
    },
    computeBJJS (item) {
      if (!item.bjjs) {
        return 0
      }
      if (item.hasPart) {
        return Math.floor(2500 * item.level)
      }
      if (item.isPart) {
        return item.level * 360
      }
      if (!item.hasPart && !item.isPart) {
        return Math.floor(2000 * item.level)
      }
    },
    computeFBJJ (item) {
      if (!item.fbjs) {
        return 0
      }
      if (item.hasPart) {
        return Math.floor(2500 * item.level)
      }
      if (item.isPart) {
        return item.level * 360
      }
      if (!item.hasPart && !item.isPart) {
        return Math.floor(2000 * item.level)
      }
    },
    computeSBHX (item) {
      if (!item.sbhx) {
        return 0
      }
      if (item.hasPart) {
        return Math.floor(5000 / 3 * item.level)
      }
      if (item.isPart) {
        return item.level * 360
      }
      if (!item.hasPart && !item.isPart) {
        return Math.floor(4000 / 3 * item.level)
      }
    },
    computeHJHX (item) {
      if (!item.hjhx) {
        return 0
      }
      if (item.hasPart) {
        return Math.floor(2000 * item.level)
      }
      if (item.isPart) {
        return item.level * 360
      }
      if (!item.hasPart && !item.isPart) {
        return Math.floor(1600 * item.level)
      }
    },
    computeFJJS (item) {
      if (!item.fjjs) {
        return 0
      }
      if (item.hasPart) {
        return Math.floor(2000 * item.level)
      }
      if (item.isPart) {
        return item.level * 360
      }
      if (!item.hasPart && !item.isPart) {
        return Math.floor(1600 * item.level)
      }
    },
    computeWCS (item) {
      if (!item.isPart) {
        let wcs = 0
        for (let i = 1; i < item.level + 1; i++) {
          if (i < 12) {
            wcs += 50 * (i - 1)
          } else {
            wcs += 500
          }
        }
        return wcs
      } else {
        let wcs = 0
        for (let i = 1; i < item.level + 1; i++) {
          if (i < 7) {
            wcs += 20 * (i - 1)
          } else {
            wcs += 100
          }
        }
        return wcs
      }
    },
    computeYS (item) {
      if (!item.isPart) {
        let ys = 0
        for (let i = 1; i < item.level + 1; i++) {
          if (i === 1) {
            ys += 0
          } else if (i === 2) {
            ys += 10
          } else if (i === 3) {
            ys += 15
          } else if (i > 3 && i < 7) {
            ys += 30
          } else {
            ys += 35
          }
        }
        return ys
      } else {
        let ys = 0
        for (let i = 1; i < item.level + 1; i++) {
          if (i < 8) {
            ys += 2 * (i - 1)
          } else {
            ys += 15
          }
        }
        return ys
      }
    },
    computeBJ (item) {
      if (item.isPart) {
        let bj = 0
        for (let i = 1; i < item.level + 1; i++) {
          if (i < 4) {
            bj += 1
          } else if (i === 4) {
            bj += 2
          } else if (i === 5) {
            bj += 3
          } else {
            bj += 5
          }
        }
        return bj
      }
    },
    quit () {
      this.$emit('closeResult')
    },
    computeAll () {
      for (let i = 0; i < this.data.length; i++) {
        this.result.tl += this.computeTili(this.data[i])
        this.result.gj += this.computeGongji(this.data[i])
        this.result.ll += this.computeLingli(this.data[i])
        this.result.fy += this.computeFangyu(this.data[i])
        this.result.bj += this.computeBaoji(this.data[i])
        this.result.fb += this.computeFabao(this.data[i])
        this.result.sb += this.computeShangbi(this.data[i])
        this.result.hj += this.computeHuajie(this.data[i])
        this.result.fj += this.computeFangji(this.data[i])
        this.result.bjjs += this.computeBJJS(this.data[i])
        this.result.fbjs += this.computeFBJJ(this.data[i])
        this.result.sbhx += this.computeSBHX(this.data[i])
        this.result.hjhx += this.computeHJHX(this.data[i])
        this.result.fjjs += this.computeFJJS(this.data[i])
        this.result.wcs += this.computeWCS(this.data[i])
      }
      this.result.zl = (this.result.tl / 8 + this.result.gj) * (1.35 * 5 + 0.9) + this.result.ll / 2 * 5.9 + this.result.fy * 5.9
      this.result.zl = Math.floor(this.result.zl)
    }
  }
}
</script>
<style lang="stylus" scoped>
.message
  width 100%
  height 100%
  top 0
  font-size 14px
  .block
    position absolute
    width 100%
    height 100%
    top 0
    overflow hidden
    background-color rgba(1, 1, 1, 0.7)
  .content
    position absolute
    width 74%
    left 11%
    background-color #fff
    transform-origin 50% 50%
    top 20%
    display flex
    flex-wrap wrap
    padding 2%
    border-radius 8px
    .item
      width 44%
      height 30px
      display flex
      align-items center
      justify-content space-between
      padding-left 2%
      .item-left
        width 60%
        text-align right
      .item-right
        width 40%
    .item-zl
      color red
      font-weight bold
    .item-title
      font-weight bold
      font-size 18px
      justify-content center
      width 100%
      margin-bottom 10px
.slide-enter-active, .slide-leave-active
  transition all 0.3s
.slide-enter, .slide-leave-to
  transform translate3d(0, 100%, 0)
</style>
