<template>
  <transition name="bounce">
    <div class="dianhua" @touchmove.prevent>
      <div class="block" @click="quit"></div>
      <div class="content">
        <div class="figure">
          <el-select v-model="dh1" placeholder="请选择" v-if="options.length!=0" size="small" class="select" @change="changeSkin(0)">
            <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item">
            </el-option>
          </el-select>
          <strong style="margin-left:10px">等级：</strong><input v-if="dh1.sort" v-model.number="data.dianhua[0].level" @blur.prevent="check(0)" class="edit" maxlength="3" max="30" min="1" type="number">
          <strong @click="clearDianhua(0)" v-if="dh1.sort">重置</strong>
          <div class="jineng">{{dh1.jn}}</div>
          <div class="data" v-if="data.dianhua[0].level">
            <div class="item" v-if="dh1.tl">
              <div class="item-left">体：</div>
              <div class="item-right">{{computeTili1}}</div>
            </div>
            <div class="item" v-if="dh1.gj">
              <div class="item-left">攻：</div>
              <div class="item-right">{{computeGongji1}}</div>
            </div>
            <div class="item" v-if="dh1.ll">
              <div class="item-left">灵：</div>
              <div class="item-right">{{computeLingli1}}</div>
            </div>
            <div class="item" v-if="dh1.fy">
              <div class="item-left">防：</div>
              <div class="item-right">{{computeFangyu1}}</div>
            </div>
            <div class="item">
              <div class="item-left">五彩石：</div>
              <div class="item-right">{{computeWCS1}}</div>
            </div>
            <div class="item">
              <div class="item-left">龙玉：</div>
              <div class="item-right">{{computeWCS1}}</div>
            </div>
            <div class="item">
              <div class="item-left">{{data.figure}}：</div>
              <div class="item-right">{{computeYS1}}</div>
            </div>
            <div class="item">
              <div class="item-left">{{dh1.figure}}：</div>
              <div class="item-right">{{computeYS1}}</div>
            </div>
            <div class="item" v-if="dh1.hasPart">
              <div class="item-left">累计部件：</div>
              <div class="item-right">{{computeBJ1}}套</div>
            </div>
          </div>
        </div>
        <div class="figure">
          <el-select v-model="dh2" placeholder="请选择" v-if="options.length!=0" size="small" class="select" @change="changeSkin(1)">
            <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item">
            </el-option>
          </el-select>
          <strong style="margin-left:10px">等级：</strong><input v-if="dh2.sort" v-model.number="data.dianhua[1].level" @blur.prevent="check(1)" class="edit" maxlength="3" max="30" min="1" type="number">
          <strong @click="clearDianhua(1)" v-if="dh2.sort">重置</strong>
          <div class="jineng">{{dh2.jn}}</div>
          <div class="data" v-if="data.dianhua[1].level">
            <div class="item" v-if="dh2.tl">
              <div class="item-left">体：</div>
              <div class="item-right">{{computeTili2}}</div>
            </div>
            <div class="item" v-if="dh2.gj">
              <div class="item-left">攻：</div>
              <div class="item-right">{{computeGongji2}}</div>
            </div>
            <div class="item" v-if="dh2.ll">
              <div class="item-left">灵：</div>
              <div class="item-right">{{computeLingli2}}</div>
            </div>
            <div class="item" v-if="dh2.fy">
              <div class="item-left">防：</div>
              <div class="item-right">{{computeFangyu2}}</div>
            </div>
            <div class="item">
              <div class="item-left">五彩石：</div>
              <div class="item-right">{{computeWCS2}}</div>
            </div>
            <div class="item">
              <div class="item-left">龙玉：</div>
              <div class="item-right">{{computeWCS2}}</div>
            </div>
            <div class="item">
              <div class="item-left">{{data.figure}}：</div>
              <div class="item-right">{{computeYS2}}</div>
            </div>
            <div class="item">
              <div class="item-left">{{dh2.figure}}：</div>
              <div class="item-right">{{computeYS2}}</div>
            </div>
            <div class="item" v-if="dh2.hasPart">
              <div class="item-left">累计部件：</div>
              <div class="item-right">{{computeBJ2}}套</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { articleMixin } from 'common/js/mixin'
export default {
  mixins: [articleMixin],
  props: {
    data: {
      type: Object,
      default: () => { return {} }
    },
    list: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {
      options: [],
      dh1: '',
      dh2: {},
      dianhua: [
        {
          sort: 0,
          level: 0
        },
        {
          sort: 0,
          level: 0
        }
      ]
    }
  },
  computed: {
    computeTili1 () {
      let level = this.data.dianhua[0].level > 30 ? 30 : this.data.dianhua[0].level
      if (!this.dh1.tl) {
        return
      }
      if (this.dh1.hasPart) {
        return 2500 * Math.ceil(level / 2) * 3
      }
      if (!this.dh1.hasPart) {
        return 2000 * Math.ceil(level / 2) * 3
      }
    },
    computeGongji1 () {
      let level = this.data.dianhua[0].level > 30 ? 30 : this.data.dianhua[0].level
      if (!this.dh1.gj) {
        return
      }
      if (this.dh1.hasPart) {
        return Math.floor(2500 * Math.ceil(level / 2))
      }
      if (!this.dh1.hasPart) {
        return Math.floor(2000 * Math.ceil(level / 2))
      }
    },
    computeLingli1 () {
      let level = this.data.dianhua[0].level > 30 ? 30 : this.data.dianhua[0].level
      if (!this.dh1.ll) {
        return
      }
      if (this.dh1.hasPart) {
        return Math.floor(555.5 * Math.ceil(level / 2) * 3)
      }
      if (!this.dh1.hasPart) {
        return Math.floor(444.4 * Math.ceil(level / 2) * 3)
      }
    },
    computeFangyu1 () {
      let level = this.data.dianhua[0].level > 30 ? 30 : this.data.dianhua[0].level
      if (!this.dh1.fy) {
        return
      }
      if (this.dh1.hasPart) {
        return Math.floor(555.5 * Math.ceil(level / 2) * 3)
      }
      if (!this.dh1.hasPart) {
        return Math.floor(444.4 * Math.ceil(level / 2) * 3)
      }
    },
    computeWCS1 () {
      let wcs = 0
      let level = this.data.dianhua[0].level
      if (level === 0) {
        return 0
      }
      for (let i = 1; i < level + 1; i++) {
        if (i < 4) {
          wcs += 50
        } else if (i < 7) {
          wcs += 75
        } else if (i < 10) {
          wcs += 100
        } else if (i < 13) {
          wcs += 150
        } else if (i < 16) {
          wcs += 200
        } else if (i < 19) {
          wcs += 300
        } else if (i < 22) {
          wcs += 400
        } else if (i < 25) {
          wcs += 500
        } else if (i < 28) {
          wcs += 600
        } else if (i < 31) {
          wcs += 800
        }
      }
      return wcs
    },
    computeYS1 () {
      let ys = 0
      let level = this.data.dianhua[0].level > 30 ? 30 : this.data.dianhua[0].level
      if (level === 0) {
        return 0
      }
      for (let i = 1; i < level + 1; i++) {
        ys += i * 6
      }
      return ys
    },
    computeBJ1 () {
      let bj = 0
      let level = this.data.dianhua[0].level > 30 ? 30 : this.data.dianhua[0].level
      if (level === 0) {
        return 0
      }
      for (let i = 1; i < level + 1; i++) {
        bj += Math.ceil(i / 3) * 3
      }
      return bj
    },
    computeTili2 () {
      let level = this.data.dianhua[1].level > 30 ? 30 : this.data.dianhua[1].level
      if (!this.dh2.tl) {
        return
      }
      if (this.dh2.hasPart) {
        return 2500 * Math.ceil(level / 2) * 3
      }
      if (!this.dh2.hasPart) {
        return 2000 * Math.ceil(level / 2) * 3
      }
    },
    computeGongji2 () {
      let level = this.data.dianhua[1].level > 30 ? 30 : this.data.dianhua[1].level
      if (!this.dh2.gj) {
        return
      }
      if (this.dh2.hasPart) {
        return Math.floor(2500 * Math.ceil(level / 2))
      }
      if (!this.dh2.hasPart) {
        return Math.floor(2000 * Math.ceil(level / 2))
      }
    },
    computeLingli2 () {
      let level = this.data.dianhua[1].level > 30 ? 30 : this.data.dianhua[1].level
      if (!this.dh2.ll) {
        return
      }
      if (this.dh2.hasPart) {
        return Math.floor(555.5 * Math.ceil(level / 2) * 3)
      }
      if (!this.dh2.hasPart) {
        return Math.floor(444.4 * Math.ceil(level / 2) * 3)
      }
    },
    computeFangyu2 () {
      let level = this.data.dianhua[1].level > 30 ? 30 : this.data.dianhua[1].level
      if (!this.dh2.fy) {
        return
      }
      if (this.dh2.hasPart) {
        return Math.floor(555.5 * Math.ceil(level / 2) * 3)
      }
      if (!this.dh2.hasPart) {
        return Math.floor(444.4 * Math.ceil(level / 2) * 3)
      }
    },
    computeWCS2 () {
      let wcs = 0
      let level = this.data.dianhua[1].level
      if (level === 0) {
        return 0
      }
      for (let i = 1; i < level + 1; i++) {
        if (i < 4) {
          wcs += 50
        } else if (i < 7) {
          wcs += 75
        } else if (i < 10) {
          wcs += 100
        } else if (i < 13) {
          wcs += 150
        } else if (i < 16) {
          wcs += 200
        } else if (i < 19) {
          wcs += 300
        } else if (i < 22) {
          wcs += 400
        } else if (i < 25) {
          wcs += 500
        } else if (i < 28) {
          wcs += 600
        } else if (i < 31) {
          wcs += 800
        }
      }
      return wcs
    },
    computeYS2 () {
      let ys = 0
      let level = this.data.dianhua[1].level > 30 ? 30 : this.data.dianhua[1].level
      if (level === 0) {
        return 0
      }
      for (let i = 1; i < level + 1; i++) {
        ys += i * 6
      }
      return ys
    },
    computeBJ2 () {
      let bj = 0
      let level = this.data.dianhua[1].level > 30 ? 30 : this.data.dianhua[1].level
      if (level === 0) {
        return 0
      }
      for (let i = 1; i < level + 1; i++) {
        bj += Math.ceil(i / 3) * 3
      }
      return bj
    }
  },
  created () {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].dhtime < 2) {
        this.options.push(this.list[i])
      }
    }
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].sort === this.data.dianhua[0].sort) {
        this.dh1 = this.options[i]
      }
      if (this.options[i].sort === this.data.dianhua[1].sort) {
        this.dh2 = this.options[i]
      }
    }
  },
  methods: {
    quit () {
      this.$emit('closeDianhua')
    },
    changeSkin (index) {
      this.data.dianhua[0].sort = this.dh1.sort
      this.data.dianhua[1].sort = this.dh2.sort
      if (index === 0) {
        this.data.dianhua[0].level = 1
      }
      if (index === 1) {
        this.data.dianhua[1].level = 1
      }
      this.$emit('saveDianhua', this.data)
    },
    clearDianhua (index) {
      this.data.dianhua[index].level = 0
      this.data.dianhua[index].sort = ''
      this.quit()
    },
    check (index) {
      this.blurAdjust()
      if (index === 0) {
        if (!Number.isFinite(this.data.dianhua[0].level)) {
          this.data.dianhua[0].level = 1
        }
        this.data.dianhua[0].level = parseInt(this.data.dianhua[0].level)
        if (this.data.dianhua[0].level < 1) {
          this.data.dianhua[0].level = 1
        }
        if (this.data.dianhua[0].level > 30) {
          this.data.dianhua[0].level = 30
        }
        if (this.data.dianhua[0].level > this.dh1.level * 2) {
          this.data.dianhua[0].level = this.dh1.level * 2
        }
      }
      if (index === 1) {
        if (!Number.isFinite(this.data.dianhua[1].level)) {
          this.data.dianhua[1].level = 1
        }
        this.data.dianhua[1].level = parseInt(this.data.dianhua[1].level)
        if (this.data.dianhua[1].level < 1) {
          this.data.dianhua[1].level = 1
        }
        if (this.data.dianhua[1].level > 30) {
          this.data.dianhua[1].level = 30
        }
        if (this.data.dianhua[1].level > this.dh2.level * 2) {
          this.data.dianhua[1].level = this.dh2.level * 2
        }
      }
      this.$emit('saveDianhua', this.data)
    }
  }
}
</script>

<style lang="stylus" scoped>
.dianhua
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
    .figure
      width 100%
      padding-bottom 20px
      .select
        width 46%
      .edit
        padding 2px
        min-width 50px
        min-height 30px
        overflow hidden
      .jineng
        width 100%
        padding 10px 0
        color red
      .data
        width 100%
        display flex
        flex-wrap wrap
        .item
          width 50%
          height 25px
          display flex
          align-items center
          justify-content space-between
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
.bounce-enter-active
  animation bounce-in 0.5s
.bounce-leave-active
  animation bounce-in 0.5s reverse
@keyframes bounce-in
  0%
    transform scale(0)
  50%
    transform scale(1.3)
  100%
    transform scale(1)
</style>
