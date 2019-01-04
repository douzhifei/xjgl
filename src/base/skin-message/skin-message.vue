<template>
  <transition name="bounce">
    <div class="message" @touchmove.prevent>
      <div class="block" @click="quit"></div>
      <div class="content">
        <div class="item item-title">{{data.name+"+"+data.level}}</div>
        <div class="item" v-if="data.tl">
          <div class="item-left">体：</div>
          <div class="item-right">{{computeTili}}</div>
        </div>
        <div class="item" v-if="data.gj">
          <div class="item-left">攻：</div>
          <div class="item-right">{{computeGongji}}</div>
        </div>
        <div class="item" v-if="data.ll">
          <div class="item-left">灵：</div>
          <div class="item-right">{{computeLingli}}</div>
        </div>
        <div class="item" v-if="data.fy">
          <div class="item-left">防：</div>
          <div class="item-right">{{computeFangyu}}</div>
        </div>
        <div class="item" v-if="data.bj">
          <div class="item-left">暴击：</div>
          <div class="item-right">{{computeBaoji}}</div>
        </div>
        <div class="item" v-if="data.fb">
          <div class="item-left">法爆：</div>
          <div class="item-right">{{computeFabao}}</div>
        </div>
        <div class="item" v-if="data.sb">
          <div class="item-left">闪避：</div>
          <div class="item-right">{{computeShangbi}}</div>
        </div>
        <div class="item" v-if="data.hj">
          <div class="item-left">化解：</div>
          <div class="item-right">{{computeHuajie}}</div>
        </div>
        <div class="item" v-if="data.fj">
          <div class="item-left">反击：</div>
          <div class="item-right">{{computeFangji}}</div>
        </div>
        <div class="item" v-if="data.bjjs">
          <div class="item-left">暴击加伤：</div>
          <div class="item-right">{{computeBJJS}}</div>
        </div>
        <div class="item" v-if="data.fbjs">
          <div class="item-left">法爆加伤：</div>
          <div class="item-right">{{computeFBJJ}}</div>
        </div>
        <div class="item" v-if="data.sbhx">
          <div class="item-left">闪避回血：</div>
          <div class="item-right">{{computeSBHX}}</div>
        </div>
        <div class="item" v-if="data.hjhx">
          <div class="item-left">化解回血：</div>
          <div class="item-right">{{computeHJHX}}</div>
        </div>
        <div class="item" v-if="data.fjjs">
          <div class="item-left">反击加伤：</div>
          <div class="item-right">{{computeFJJS}}</div>
        </div>
        <div class="item">
          <div class="item-left">五彩石：</div>
          <div class="item-right">{{computeWCS}}</div>
        </div>
        <div class="item">
          <div class="item-left">元神：</div>
          <div class="item-right">{{computeYS}}</div>
        </div>
        <div class="item" v-if="data.isPart">
          <div class="item-left">部件消耗：</div>
          <div class="item-right">{{computeBJ}}</div>
        </div>
        <div class="item item-jn" v-if="data.jn">{{data.jn}}</div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => { return {} }
    }
  },
  computed: {
    computeTili () {
      if (!this.data.tl) {
        return
      }
      if (this.data.hasPart) {
        return 2500 * this.data.level
      }
      if (this.data.isPart) {
        return this.data.level * 350 + (this.data.level >= 3 ? 375 : 0) + (this.data.level >= 10 ? 750 : 0) + (this.data.level >= 15 ? 1125 : 0)
      }
      if (!this.data.hasPart && !this.data.isPart) {
        return 2000 * this.data.level
      }
    },
    computeGongji () {
      if (!this.data.gj) {
        return
      }
      if (this.data.hasPart) {
        return Math.floor(2500 / 3 * this.data.level)
      }
      if (this.data.isPart) {
        return this.data.level * 233 + (this.data.level >= 3 ? 250 : 0) + (this.data.level >= 10 ? 500 : 0) + (this.data.level >= 15 ? 750 : 0)
      }
      if (!this.data.hasPart && !this.data.isPart) {
        return Math.floor(2000 / 3 * this.data.level)
      }
    },
    computeLingli () {
      if (!this.data.ll) {
        return
      }
      if (this.data.hasPart) {
        return Math.floor(555.5 * this.data.level)
      }
      if (this.data.isPart) {
        return this.data.level * 155 + (this.data.level >= 3 ? 167 : 0) + (this.data.level >= 10 ? 333 : 0) + (this.data.level >= 15 ? 499 : 0)
      }
      if (!this.data.hasPart && !this.data.isPart) {
        return Math.floor(444.4 * this.data.level)
      }
    },
    computeFangyu () {
      if (!this.data.fy) {
        return
      }
      if (this.data.hasPart) {
        return Math.floor(555.5 * this.data.level)
      }
      if (this.data.isPart) {
        return this.data.level * 155 + (this.data.level >= 3 ? 167 : 0) + (this.data.level >= 10 ? 333 : 0) + (this.data.level >= 15 ? 499 : 0)
      }
      if (!this.data.hasPart && !this.data.isPart) {
        return Math.floor(444.4 * this.data.level)
      }
    },
    computeBaoji () {
      if (!this.data.bj) {
        return
      }
      if (this.data.hasPart) {
        return Math.floor(25 / 3 * this.data.level)
      }
      if (this.data.isPart) {
        return this.data.level * 3 + (this.data.level >= 6 ? 4 : 0)
      }
      if (!this.data.hasPart && !this.data.isPart) {
        return Math.floor(20 / 3 * this.data.level)
      }
    },
    computeFabao () {
      if (!this.data.fb) {
        return
      }
      if (this.data.hasPart) {
        return Math.floor(25 / 3 * this.data.level)
      }
      if (this.data.isPart) {
        return this.data.level * 3 + (this.data.level >= 6 ? 4 : 0)
      }
      if (!this.data.hasPart && !this.data.isPart) {
        return Math.floor(20 / 3 * this.data.level)
      }
    },
    computeShangbi () {
      if (!this.data.sb) {
        return
      }
      if (this.data.hasPart) {
        return Math.floor(25 / 3 * this.data.level)
      }
      if (this.data.isPart) {
        return this.data.level * 3 + (this.data.level >= 6 ? 4 : 0)
      }
      if (!this.data.hasPart && !this.data.isPart) {
        return Math.floor(20 / 3 * this.data.level)
      }
    },
    computeHuajie () {
      if (!this.data.hj) {
        return
      }
      if (this.data.hasPart) {
        return Math.floor(50 / 3 * this.data.level)
      }
      if (this.data.isPart) {
        return this.data.level * 3 + (this.data.level >= 6 ? 4 : 0)
      }
      if (!this.data.hasPart && !this.data.isPart) {
        return Math.floor(40 / 3 * this.data.level)
      }
    },
    computeFangji () {
      if (!this.data.fj) {
        return
      }
      if (this.data.hasPart) {
        return Math.floor(25 / 3 * this.data.level)
      }
      if (this.data.isPart) {
        return this.data.level * 3 + (this.data.level >= 6 ? 4 : 0)
      }
      if (!this.data.hasPart && !this.data.isPart) {
        return Math.floor(20 / 3 * this.data.level)
      }
    },
    computeBJJS () {
      if (!this.data.bjjs) {
        return
      }
      if (this.data.hasPart) {
        return Math.floor(2500 * this.data.level)
      }
      if (this.data.isPart) {
        return this.data.level * 360
      }
      if (!this.data.hasPart && !this.data.isPart) {
        return Math.floor(2000 * this.data.level)
      }
    },
    computeFBJJ () {
      if (!this.data.fbjs) {
        return
      }
      if (this.data.hasPart) {
        return Math.floor(2500 * this.data.level)
      }
      if (this.data.isPart) {
        return this.data.level * 450 + (this.data.level>2 ? 600 : 0)
      }
      if (!this.data.hasPart && !this.data.isPart) {
        return Math.floor(2000 * this.data.level)
      }
    },
    computeSBHX () {
      if (!this.data.sbhx) {
        return
      }
      if (this.data.hasPart) {
        return Math.floor(5000 / 3 * this.data.level)
      }
      if (this.data.isPart) {
        return this.data.level * 300 + (this.data.level>5 ? 400 : 0)
      }
      if (!this.data.hasPart && !this.data.isPart) {
        return Math.floor(4000 / 3 * this.data.level)
      }
    },
    computeHJHX () {
      if (!this.data.hjhx) {
        return
      }
      if (this.data.hasPart) {
        return Math.floor(2000 * this.data.level)
      }
      if (this.data.isPart) {
        return this.data.level * 360
      }
      if (!this.data.hasPart && !this.data.isPart) {
        return Math.floor(1600 * this.data.level)
      }
    },
    computeFJJS () {
      if (!this.data.fjjs) {
        return
      }
      if (this.data.hasPart) {
        return Math.floor(2000 * this.data.level)
      }
      if (this.data.isPart) {
        return this.data.level * 360
      }
      if (!this.data.hasPart && !this.data.isPart) {
        return Math.floor(1600 * this.data.level)
      }
    },
    computeWCS () {
      if (!this.data.isPart) {
        let wcs = 0
        for (let i = 1; i < this.data.level + 1; i++) {
          if (i < 12) {
            wcs += 50 * (i - 1)
          } else {
            wcs += 500
          }
        }
        return wcs
      } else {
        let wcs = 0
        for (let i = 1; i < this.data.level + 1; i++) {
          if (i < 7) {
            wcs += 20 * (i - 1)
          } else {
            wcs += 100
          }
        }
        return wcs
      }
    },
    computeYS () {
      if (!this.data.isPart) {
        let ys = 0
        for (let i = 1; i < this.data.level + 1; i++) {
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
        for (let i = 1; i < this.data.level + 1; i++) {
          if (i < 8) {
            ys += 2 * (i - 1)
          } else {
            ys += 15
          }
        }
        return ys
      }
    },
    computeBJ () {
      if (this.data.isPart) {
        let bj = 0
        for (let i = 1; i < this.data.level + 1; i++) {
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
    }
  },
  created () {

  },
  methods: {
    quit () {
      this.$emit('closeLook')
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
  .content
    position absolute
    width 72%
    left 12%
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
      .item-right
        width 40%
    .item-title
      width 100%
      color #010101
      font-weight bold
      font-size 18px
      margin-bottom 10px
    .item-jn
      width 100%
      color red
      line-height 18px
      height 50px
      padding-bottom 5px
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
