<template>
  <transition name="slide">
    <div class="data-skin">
      <scroll class="content" ref="scroll">
        <div class="content-div">
          <head-box class="head-box" :data="articleData" :inApp="this.isApp(this.$route.query.inApp)"></head-box>
          <ul class="content-ul">
            <div class="content-li">
              <div class="content-li content-li-title">
                <div class="li-name">云裳名称</div>
                <div class="li-level">等级</div>
                <div class="li-operate-title">数据查看</div>
              </div>
            </div>
            <li v-for="(item,index) in data" :key="index" class="content-li">
              <div class="li-name" :class="{'bujian':item.isPart}">
                {{item.isPart?"-"+item.name:item.name}}
              </div>
              <div class="li-level">
                <strong>等级：</strong><input v-model.number="item.level" @blur.prevent="check(index)" class="edit" maxlength="3" max="15" min="0" type="number">
              </div>
              <div class="li-operate">
                <el-switch class="li-battle"
                  v-if="false"
                  v-model="item.battle"
                  @change="battle"
                  :width="30"
                  >
                </el-switch>
                <div class="li-look" @click="dianhua(index)" :class="{'forbid': item.level}" v-show="!item.isPart">点化</div>
                <div class="li-look" @click="openLook(index)" :class="{'forbid': item.level}">查看</div>
              </div>
            </li>
          </ul>
          <adv class="adv" v-if="articleData.title" @scrollTop="scrollTop"></adv>
          <div class="block" v-if="data.length!=0"></div>
        </div>
      </scroll>
      <transition name="fade">
        <div class="mask" v-if="openMessage"></div>
      </transition>
      <transition name="fade">
        <div class="mask" v-if="openDianhua"></div>
      </transition>
      <skin-message class="message" :data="message" v-if="openMessage" @closeLook="closeLook"></skin-message>
      <skin-dianhua class="message" :data="message" :list="dhlist" v-if="openDianhua" @closeDianhua="closeDianhua" @saveDianhua="saveDianhua"></skin-dianhua>
      <skin-result class="result" :data="data" v-if="openResult" @closeResult="closeResult"></skin-result>
      <div class="save" v-if="data.length!=0" @click="saveAndLook()">合计</div>
    </div>
  </transition>
</template>
<script>
import HeadBox from 'base/head-box/head-box'
import Scroll from 'base/scroll/scroll'
import { articleMixin } from 'common/js/mixin'
import { countVisit } from 'api/others'
import { getSkins } from 'api/skin'
import { saveSkin, loadSkin } from 'common/js/cache'
import Adv from 'base/adv/adv'
import SkinMessage from 'base/skin-message/skin-message'
import SkinDianhua from 'base/skin-dianhua/skin-dianhua'
import SkinResult from 'base/skin-result/skin-result'
export default {
  mixins: [articleMixin],
  data () {
    return {
      data: [],
      articleData: {},
      openMessage: false,
      openDianhua: false,
      openResult: false,
      message: {},
      dhlist: []
    }
  },
  created () {
    this.articleData.title = '云裳计算器'
    this.articleData.goto = 'skin'
    if (this.$route.query.inApp) {
      this.getArticleData().then((res) => {
        this.articleData = res
      })
    }
    this._getSkins()
  },
  mounted () {
    countVisit('skin')
  },
  methods: {
    _getSkins () {
      let list = loadSkin()
      // if (list !== undefined) {
      //   this.data = list
      // }
      getSkins().then((res) => {
        if (list !== undefined) {
          let length = list.length > res.length ? res.length : list.length
          for (let i = 0; i < length; i++) {
            res[i].level = list[i].level
            if(typeof(list[i].dianhua) !== "unfefined" && !list[i].dianhua){
               res[i].dianhua = list[i].dianhua
            }
            // res[i].battle = list[i].battle
          }
        }
        this.data = res
        setTimeout(() => {
          this.$refs.scroll.refresh()
        }, 300)
      })
    },
    scrollTop () {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    check (index) {
      if (!Number.isFinite(this.data[index].level)) {
        this.data[index].level = 0
        this.data[index].dianhua = [{ level: 0, sort: 0 }, { level: 0, sort: 0 }]
        this.data[index].battle = false
      }
      this.data[index].level = parseInt(this.data[index].level)
      if (this.data[index].level <= 0) {
        this.data[index].level = 0
        this.data[index].dianhua = [{ level: 0, sort: 0 }, { level: 0, sort: 0 }]
        this.data[index].battle = false
      }
      if (this.data[index].level > 15) {
        this.data[index].level = 15
      }
      saveSkin(this.data)
    },
    battle () {
      saveSkin(this.data)
    },
    saveDianhua(data) {
       for(let i =0 ;i<this.data.length;i++) {
         if(data.sort === this.data[i].sort) {
           this.data[i] = data
         }
       }
      //  for(let i=0;i<this.data.length;i++) {
      //    let time = 0
      //    for(let j=0;j<this.data.length;j++) {
      //      console.log(this.data[i].sort)
      //      if(this.data[j].dianhua.length!=0){
      //       if(this.data[j].dianhua[0].sort == this.data[i].sort) {
      //         time++
      //       } 
      //       if(this.data[j].dianhua[1].sort == this.data[i].sort) {
      //         time++
      //       }
      //      } 
      //    }
      //    this.data[i].dhtime = time
      //  }
       saveSkin(this.data)
    },
    openLook (index) {
      if (!this.data[index].level) {
        return
      }
      this.message = this.data[index]
      this.openMessage = true
    },
    dianhua (index) {
      if (!this.data[index].level) {
        return
      }
      this.message = this.data[index]
      let list = []
      for (let i = 0; i < this.data.length; i++) {
        if (!this.data[i].isPart) {
          if (this.data[i].property !== this.message.property) {
            if(this.data[i].level > 0 ) {
              let item = {}
              item.sort = this.data[i].sort
              item.name = this.data[i].name
              item.figure = this.data[i].figure
              item.tl = this.data[i].tl
              item.gj = this.data[i].gj
              item.ll = this.data[i].ll
              item.fy = this.data[i].fy
              item.value = this.data[i].name
              item.dhtime = this.data[i].dhtime
              item.level = this.data[i].level
              item.jn = this.data[i].jn
              item.hasPart = this.data[i].hasPart
              list.push(item)
            }
          }
        }
      }
      this.dhlist = list
      if(this.dhlist.length === 0) {
        return
      }
      this.openDianhua = true
    },
    closeLook () {
      this.openMessage = false
    },
    closeDianhua () {
      this.openDianhua = false
    },
    saveAndLook () {
      this.openResult = true
      saveSkin(this.data)
    },
    closeResult () {
      this.openResult = false
    }
  },
  components: { HeadBox, Adv, SkinMessage, SkinDianhua, SkinResult, Scroll },
  watch: {

  }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable'
.data-skin
  position fixed
  width 100%
  left 0
  top 0
  bottom 0
  overflow scroll
  z-index 1000
  background $color-background
  .adv
    margin-top 40px
  .block
    width 100%
    height 45px
  .save
    position fixed
    bottom 0
    width 100%
    height 45px
    display flex
    align-items center
    justify-content center
    background-color #fff
    font-size 18
    font-weight bold
  .content
    width 100%
    height 100%
    font-size 15px
    .content-div
      width 100%
      .content-ul
        width 100%
        .content-li
          width 100%
          height 50px
          display flex
          align-items center
          justify-content space-between
          border-bottom 1px solid #E7E6EB
          .li-name
            width 33%
            display flex
            align-items center
            padding-left 13px
          .bujian
            padding-left 5%
            width 30%
            color #F79646
          .forbid
            color #409EFF
          .li-level
            width 27%
            display flex
            align-items center
            .edit
              padding 2px
              min-width 35px
              min-height 30px
              overflow hidden
              background-color #ebebeb
          .li-operate-title
            width 40%
            display flex
            align-items center
          .li-operate
            width 40%
            display flex
            align-items center
            justify-content flex-end
            .li-look
              width 40%
            .li-battle
              padding-right 5px
        .content-li-title
          font-weight bold
          border-bottom 1px solid red
          border-top 1px solid red
.message
  position fixed
  z-index 1001
.result
  position fixed
  z-index 1001
.slide-enter-active, .slide-leave-active
  transition all 0.4s
.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
.mask
  position fixed
  top 0
  bottom 0
  left 0
  width 100%
  background-color rgba(0, 0, 0, 0.7)
.fade-enter-active, .fade-leave-active
  transition opacity 0.4s
.fade-enter, .fade-leave-to
  opacity 0
</style>
