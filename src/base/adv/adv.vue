<template>
  <div class="adv">
    <div class="adv-item"><img class="adv-item-img" :src="qrcode"></div>
    <div class="adv-item adv-item-attch">关注仙剑手游攻略</div>
    <div class="adv-item adv-item-search">搜索微信公众号：
      <i style="color:#FE2735">gonglue_XJ</i>
    </div>
    <div class="adv-item adv-item-top" @click="goTop()">返回顶部</div>
  </div>
</template>
<script>
import qrUrl from 'common/image/qrcode.jpg'
export default {
  data () {
    return {
      qrcode: qrUrl
    }
  },
  methods: {
    goTop () {
      this.$emit('scrollTop')
    }
  }
}
</script>
<style lang="stylus" scoped>
.adv
  width 100%
  height 220px
  background-color #010101
  display flex
  align-content center
  justify-content center
  flex-direction column
  color rgba(222, 222, 222, 1)
  .adv-item
    display flex
    align-content center
    justify-content center
    padding-top 10px
    font-size 14px
    .adv-item-img
      width 100px
      height 100px
  .adv-item-attch
    font-size 18px
    padding-bottom 5px
    color rgba(242, 242, 242, 1)
</style>
