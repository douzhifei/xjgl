<template>
<div class="banner">
  <div class="banner-container">
  <slider :speed="speed">
    <div v-for="(item, index) in banners" :key="index"  @click="selectItem(item)">
      <a>
        <img :src="item.cover == undefined ? pic : item.cover ">
      </a>
    </div>
  </slider>
  </div>
</div>
</template>

<script>
import Slider from 'base/slider/slider'
import { getBanner, createArticle } from 'api/article'
import defaultPic from 'common/image/default.jpg'
export default {
  name: 'banner',
  data () {
    return {
      banners: [],
      speed: 400,
      pic: defaultPic
    }
  },
  created () {
    this._getBanner()
  },
  methods: {
    _getBanner () {
      getBanner(5).then((res) => {
        this.banners = res
        this.speed = 450
      })
    },
    selectItem(item) {
      this.$emit('select', item)
    }
  },
  components: { Slider }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
.banner
  position: relative
  width: 100%
  margin-top: 12.5px
  height: 0
  padding-top: 53%
  overflow: hidden
  .banner-container
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
</style>

