<template>
<div class="banner">
  <div class="banner-container">
  <slider>
    <div v-for="(item, index) in banners" :key="index">
      <a>
        <img :src="item.cover">
      </a>
    </div>
  </slider>
  </div>
</div>
</template>

<script>
import Slider from 'base/slider/slider'
import { getBanner, createArticle } from 'api/bbs'
export default {
  name: 'banner',
  data () {
    return {
      banners: []
    }
  },
  created () {
    this._getBanner()
    //this.printPress()
  },
  methods: {
    _getBanner () {
      getBanner(5).then((res) => {
        this.banners = res
        console.log(res)
      })
    },
    printPress () {
      const data = {
        title: 'sd看到手机发送到肌肤上的纠纷四季度房价上的飞机螺丝钉看见发牢骚开发家看到手机反垄断司法局发废旧塑料的房价健身房',
        text: 'sdasfdgfdsgsgfdsfgdssgsda',
        cover: 'http://img2.imgtn.bdimg.com/it/u=303867580,1135614190&fm=27&gp=0.jpg',
        author: 'ben',
        create_time: new Date(),
        update_time: new Date(),
        likes: 666,
        type: 0,
        banner: true,
        content: '啦啦啦啦啦啦啦啊，啦啦啦啦啦啊了，<br><b>粗b</b>,lalalal,啦啦啦啦啦'
      }
      createArticle(data).then((res) => {
        console.log(res)
      })
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
  padding-top: 50%
  overflow: hidden
  .banner-container
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
</style>

