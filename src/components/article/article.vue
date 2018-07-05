<template>
 <transition  name="slide">
        <div class="article" ref="box">
            <head-box class="head-box" 
                :data="data" 
                :inApp="isApp(this.$route.query.inApp)" 
                :showTitle="showTitle"></head-box>
  
            <scroll :listenScroll="listenScroll" class="article-content" ref="scroll">



                            <div class="container">
                                <div class="title" v-show="data.title">{{data.title}}</div>
                                <div class="comments" v-show="data.comments">
                                    <span>{{data.author}}</span>
                                    <span>{{data.create_time}}</span>
                                </div>
                                <div class="content" ref="content" v-show="data.content"></div>
                                <adv v-if="data.title" @scrollTop="scrollTop"></adv>
                            </div>
      
            </scroll>
            <div class="loading-container" v-if="!data.title">
                <loading></loading>
            </div>
        </div>
 </transition>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import HeadBox from 'base/head-box/head-box'
import {articleMixin} from 'common/js/mixin'
import Loading from 'base/loading/loading'
import Adv from 'base/adv/adv'
import { countVisit } from 'api/others'
export default {
    mixins: [articleMixin],
    data() {
        return {
            data: {},
            showTitle: false,
            showHead: false
        }
    },
    created() {
        this.listenScroll = true
        this.refresh()
    },
    mounted(){
        countVisit('article')
    },
    methods: {
        scroll(el) {
            if(el.y>-50) {
                this.showHead = true
            }else{
                this.showHead = false
            }
        },
        scrollTop(){
            this.$refs.scroll.scrollTo(0, 0, 300)
        },
        refreshScroll(){
            this.$refs.scroll.refresh()
        },
        refresh(){
            this.data = {}
            this.getArticleData().then((res)=>{
            this.data = res
            this.$refs.content.innerHTML = this.data.content
            setTimeout(()=>{
                this.refreshScroll()
                },200)
            })
        }
    },
    watch: {
        '$route' (to, from) {
            if(this.$route.params.id === undefined){
                return
            }
            this.refresh()
        }
    },
    components: { Scroll,HeadBox,Loading,Adv }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.article
    position: fixed
    z-index: 9999
    width: 100%
    top: 0
    bottom 0
    background-color: $color-background
    .loading-container
        position: absolute
        top: 50%
        left: 50%
        transform: translateY(-50%)
        transform: translateX(-50%)
    .head-box
        position fixed
        z-index: 9999
    .article-content
        width 100%
        height 100%
        .container
            width: 100%
            padding-top: 45px
            .title
                position: relative
                font-size: $font-size-large-x 
                font-weight: bold
                text-overflow ellipsis 
                display: -webkit-box
                -webkit-line-clamp: 2
                -webkit-box-orient: vertical
                overflow: hidden
                width: 92% 
                margin-left:4%
                line-height: 28px 
            .comments
                position: relative
                font-size: 15px
                padding-top 10px
                color #7e8c8d
                margin-left:4%
                span
                    margin-right: 15px
            .content
                position: relative
                padding-top: 30px
                width: 100%
                font-size $font-size-medium-x
                padding-bottom 20px
                width: 92% 
                margin-left:4%
.slide-enter-active, .slide-leave-active
    transition: all 0.4s
.slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
