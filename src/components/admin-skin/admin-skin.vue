<template>
  <div class="skin" ref="skin">
    <div>
      <div class="skin-head">皮肤管理</div>
      <div style="margin: 10px 0">
        <el-row>
          <el-col :span="8" style="margin:0 10px">
            <el-input placeholder="搜索" v-model="filters[0].value"></el-input>
          </el-col>
          
          <el-col :span="5" style="margin: 0 15px">
            <el-button @click="openAdd">添加</el-button>
          </el-col>

           <el-col :span="5" style="margin: 0 15px">
            <el-button @click="updateMore">updateMore</el-button>
          </el-col>
        </el-row>
      </div>
      <data-tables class="data-table" :data="data" :current-page="3" :page-size="5" :pagination-props="{ background: false, small: true, layout: 'prev, pager, next', pageSizes: [6, 1, 3] }" :action-col="actionCol" :filters="filters" @selection-change="handleSelectionChange" style="width: 100%">
        <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.prop" sortable="custom" :width="width(title.prop)">
        </el-table-column>
      </data-tables>
      <skin-add v-if="isOpenAdd" :udata="udata" @quit="quit" @submit="submit"></skin-add>
    </div>
  </div>
</template>

<script>
import SkinAdd from 'base/skin-add/skin-add'
import { getSkins, delSkin, createSkin, updateSkin, updateSkinMore } from 'api/skin'
import Scroll from 'base/scroll/scroll'
import { adminMixin } from 'common/js/mixin'
export default {
  mixins: [adminMixin],
  data () {
    return {
      data: [],
      udata: {},
      isAdd: true,
      titles: [{
        prop: 'name',
        label: '衣服'
      }, {
        prop: 'sort',
        label: '序'
      },{
        prop: 'property',
        label: '属'
      }],
      isOpenAdd: false,
      filters: [{ // 查询
        prop: 'title',
        value: ''
      }],
      actionCol: {
        props: {
          label: '操作'
        },
        buttons: [{
          handler: row => {
            this.update(row)
          },
          label: '编辑'
        }, {
          handler: row => {
            this.delete(row)
          },
          label: '删除'
        }]
      },
      selectedRow: []
    }
  },
  created () {
    this._getSkinList()
  },
  mounted () {
    this.checkToken()
  },
  methods: {
    updateMore() {
      let that = this
      let dianhua = [{ level: 0, sort: 0 }, { level: 0, sort: 0 }]
      let um = { token:this.token ,dianhua:dianhua }
      updateSkinMore(um)
    },
    _getSkinList () {
      let that = this
      let token = { token: this.token }
      getSkins(token).then((res) => {
        that.data = res
      })
    },
    openAdd () {
      this.isOpenAdd = true
      this.udata = {}
      this.isAdd = true
    },
    submit (val) {
      if (this.isAdd) {
        val.token = this.token
        val.dianhua = [{ 'sort': 0, 'level': 0 }, { 'sort': 0, 'level': 0 }]
        createSkin(val).then((res) => {
          console.log(res)
          this.isOpenAdd = false
          this.$message('添加成功！')
          this.data.unshift(val)
        })
      } else {
        console.log(val)
        val.token = this.token
        updateSkin(val).then((res) => {
          console.log(res)
          if (!res.ok) {
            this.$message('修改失败！')
            return
          }
          this.isOpenAdd = false
          this.$message('修改成功！')
        })
      }
    },
    quit () {
      this.isOpenAdd = false
    },
    delete (row) {
      let data = { id: row._id, token: this.token }
      delSkin(data).then((res) => {
        console.log(res)
        if (!res.ok) {
          return
        }
        this.data.splice(this.data.indexOf(row), 1)
        this.$message('删除成功！')
      })
    },
    update (row) {
      this.isOpenAdd = true
      this.isAdd = false
      this.udata = row
    },
    width (key) {
      if (key !== 'name') {
        return 60
      }
    },
    handleSelectionChange (val) {
      this.selectedRow = val
    }
  },
  components: { SkinAdd, Scroll }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.skin
  position absolute
  width 100%
  top 0
  bottom 0
  left 0
  background-color $color-background
  font-size $font-size-large
  color #606266
  overflow scroll
  .data-table
    width 100%
    font-size $font-size-small
  .skin-head
    width 100%
    height 50px
    display flex
    align-items center
    justify-content center
    font-size $font-size-medium-x
    border-bottom 2px solid #E7E6EB
</style>
