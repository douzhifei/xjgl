<template>
  <div class="update-block" @touchmove.prevent>
    <div class="update-mask" @click="updateQuit"></div>
    <div class="update-content">
      <div class="update-item">宝物：
        <el-input class="update-item-input" type="text" v-model="data.name" placeholder="输入宝物名称"></el-input>
      </div>
      <div class="update-item">数量：
        <el-input class="update-item-input" type="number" placeholder=" 数量" v-model="data.num"></el-input>
      </div>
      <div class="add-item">地图：
        <el-select v-model="data.mapId" placeholder="地图" style="width:180px">
          <el-option v-for="(item, index) in worlds" :key="index" :label="item.name" :value="item.mapId">
          </el-option>
        </el-select>
      </div>
      <div class="add-item">位置：<br>
        <el-select v-model="site.direction" placeholder="方位" style="width:90px">
          <el-option v-for="(item, index) in directions" :key="index" :label="item" :value="item">
          </el-option>
        </el-select>

        <el-select v-model="site.row" placeholder="行" style="width:70px">
          <el-option v-for="item in rows" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>

        <el-select v-model="site.col" placeholder="列" style="width:70px">
          <el-option v-for="item in cols" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </div>
      <div class="update-item">难度：
        <el-input class="update-item-input" type="number" placeholder=" 几星难度" v-model="data.level"></el-input>
      </div>
      <div class="update-item">加成：
        <el-input class="update-item-input" type="text" placeholder=" 加成，可以不填" v-model="data.plus"></el-input>
      </div>
      <div class="update-item">

        <input type="radio" id="i-one" value="0" v-model="data.important">
        <label for="i-one">不值钱的</label>

        <input type="radio" id="i-two" value="1" v-model="data.important">
        <label for="i-two">宝箱</label>

        <br>

        <input type="radio" id="i-tree" value="2" v-model="data.important">
        <label for="i-tree">稀有元神</label>

        <input type="radio" id="i-four" value="3" v-model="data.important">
        <label for="i-four">重要物品</label>
      </div>
      <div class="update-item" style="margin:10px 0">
        <el-button type="primary" @click="updateSubmit" style="margin: 5px">确认</el-button>
        <el-button @click="updateQuit" style="margin: 5px">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { updateTreasure } from 'api/treasure'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      directions: ['东', '西', '南', '北', '中', '西南', '西北', '东北', '东南'],
      rows: [1, 2, 3, 4, 5, 6],
      cols: [1, 2, 3, 4, 5],
      site: {}
    }
  },
  props: {
    data: {
      type: Object,
      default: () => { return {} }
    },
    toSite: {
      type: Object,
      default: () => { return {} }
    },
    worlds: {
      type: Array,
      default: () => { return [] }
    }
  },
  computed: {
    ...mapGetters(['token'])
  },
  methods: {
    updateSubmit () {
      this.data.num = parseInt(this.data.num)
      this.data.mapId = parseInt(this.data.mapId)
      this.data.level = parseInt(this.data.level)
      this.data.important = parseInt(this.data.important)
      let site = this.site.direction + '-' + this.site.row + '-' + this.site.col
      this.data.range = this.changSite(site, this.directions)
      this.data.site = site
      if (!(this.data.name !== '' && Number.isInteger(this.data.num) && Number.isInteger(this.data.important) && this.site.direction !== undefined && this.site.row !== undefined && this.site.col !== undefined)) {
        this.$message('不能有空值！')
        return
      }
      delete this.data.nameNum
      let that = this
      that.data.token = this.token
      updateTreasure(that.data).then((res) => {
        if (!res.ok) {
          that.$message('修改失败！')
          return
        }
        that.$emit('updateSucess', that.data)
        that.$message('修改成功！')
        this.$emit('updateQuit')
      })
    },
    updateQuit () {
      this.$emit('updateQuit')
    },
    changSite (site, directions) {
      let arraySite = site.split('-')
      let index = directions.indexOf(arraySite[0])
      return index * 30 + (arraySite[1] - 1) * 5 + parseInt(arraySite[2])
    },
    setSite () {
      this.site = this.toSite
    }
  },
  watch: {
    'toSite': 'setSite'
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.update-block
  position fixed
  width 100%
  height 100%
  top 0
  left 0
  overflow hidden
  color #606266
  .update-mask
    position absolute
    width 100%
    height 100%
    top 0
    left 0
    background-color rgba(0, 0, 0, 0.7)
  .update-content
    position absolute
    width 80%
    height 500px
    left 10%
    top 20px
    display flex
    flex-direction column
    align-items center
    justify-content center
    background-color $color-background-search
    font-size $font-size-medium-x
    z-index 1
    .update-item
      position relative
      width 100%
      text-align center
      margin 5px 0
      .update-item-input
        width 180px
</style>
