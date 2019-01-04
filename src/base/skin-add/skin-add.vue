<template>
  <div class="count">
    <div class="head">皮肤添加</div>
    <div class="content">
      <el-form ref="form" :model="form" label-width="80px" size="mini">
        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model.number="form.sort"></el-input>
        </el-form-item>
        <el-form-item label="技能描述">
          <el-input v-model="form.jn"></el-input>
        </el-form-item>
        <el-form-item label="部件衣服" style="width:40%;display:inline-block">
          <el-switch v-model="form.hasPart"></el-switch>
        </el-form-item>
        <el-form-item label="部件" style="width:40%;display:inline-block">
          <el-switch v-model="form.isPart"></el-switch>
        </el-form-item>
        <el-form-item label="体" style="width:23%;display:inline-block" label-width="40px">
          <el-switch v-model="form.tl"></el-switch>
        </el-form-item>
        <el-form-item label="攻" style="width:23%;display:inline-block" label-width="40px">
          <el-switch v-model="form.gj"></el-switch>
        </el-form-item>
        <el-form-item label="灵" style="width:23%;display:inline-block" label-width="40px">
          <el-switch v-model="form.ll"></el-switch>
        </el-form-item>
        <el-form-item label="防" style="width:23%;display:inline-block" label-width="40px">
          <el-switch v-model="form.fy"></el-switch>
        </el-form-item>
        <el-form-item label="暴击" style="width:30%;display:inline-block">
          <el-switch v-model="form.bj"></el-switch>
        </el-form-item>
        <el-form-item label="法爆" style="width:50%;display:inline-block">
          <el-switch v-model="form.fb"></el-switch>
        </el-form-item>
        <el-form-item label="闪避" style="width:30%;display:inline-block">
          <el-switch v-model="form.sb"></el-switch>
        </el-form-item>
        <el-form-item label="化解" style="width:30%;display:inline-block">
          <el-switch v-model="form.hj"></el-switch>
        </el-form-item>
        <el-form-item label="反击" style="width:30%;display:inline-block">
          <el-switch v-model="form.fj"></el-switch>
        </el-form-item>
        <el-form-item label="暴击加伤" style="width:40%;display:inline-block">
          <el-switch v-model="form.bjjs"></el-switch>
        </el-form-item>
        <el-form-item label="法爆加伤" style="width:40%;display:inline-block">
          <el-switch v-model="form.fbjs"></el-switch>
        </el-form-item>
        <el-form-item label="闪避回血" style="width:40%;display:inline-block">
          <el-switch v-model="form.sbhx"></el-switch>
        </el-form-item>
        <el-form-item label="化解回血" style="width:40%;display:inline-block">
          <el-switch v-model="form.hjhx"></el-switch>
        </el-form-item>
        <el-form-item label="反击加伤" style="width:40%;display:inline-block">
          <el-switch v-model="form.fjjs"></el-switch>
        </el-form-item>
        <el-radio-group v-model="form.property" size="medium">
          <el-radio-button :label="0">水</el-radio-button>
          <el-radio-button :label="1">火</el-radio-button>
          <el-radio-button :label="2">雷</el-radio-button>
          <el-radio-button :label="3">风</el-radio-button>
          <el-radio-button :label="4">土</el-radio-button>
          <el-radio-button :label="5">武</el-radio-button>
        </el-radio-group>
        <el-form-item >
          <el-button type="primary" class="sumbmit" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { createSkin } from 'api/skin'
import { adminMixin } from 'common/js/mixin'
export default {
  mixins: [adminMixin],
  data () {
    return {
      form: {
        property: 0
      }
    }
  },
  mounted () {
    this.checkToken()
  },
  methods: {
    onSubmit () {
      this.form.token = this.token
      console.log(this.form)
      createSkin(this.form).then((res) => {
        console.log(res)
        this.$message('添加成功！')
        this.form = {}
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable'
.count
  position absolute
  width 100%
  top 0
  bottom 0
  overflow scroll
  background-color $color-background
  z-index 999
  .head
    width 100%
    height 50px
    display flex
    align-items center
    justify-content center
    font-size $font-size-medium-x
    border-bottom 2px solid #E7E6EB
  .content
    width 92%
    margin-left 3%
.sumbmit
  margin 20px
</style>
