<template>
 <transition  name="slide">
        <div class="article" ref="box">
            <div class="head" v-show="showHead">
                        <i class="back" @click="$router.back(-1)"></i>
                            <div @click="collect" class="collect">
                                <i class="has-collect"></i>
                                <i class="no-collect"></i>
                            </div>
                    </div>
            <scroll :listenScroll="listenScroll" class="article-content">

                

                            <div class="container">
                                <div class="title">{{data.title}}</div>
                                <div class="comments">
                                    <span>{{data.author}}</span>
                                    <span>{{data.create_time}}</span>
                                </div>
                                <div class="content">{{data.content}}</div>
                            </div>
      
            </scroll>
        </div>
 </transition>
</template>

<script>
import { getArticle } from 'api/article'
import Scroll from 'base/scroll/scroll'
import moment from 'moment'
export default {
    data() {
        return {
            data: {}
        }
    },
    created() {
        this.listenScroll = true
        this.showHead = true
        this._getArticle()
    },
    mounted() {
        let box = this.$refs.box
        box.addEventListener('scroll', () => {
            //console.log(box.scrollTop)
            if(box.scrollTop>90){
                this.showHead = false
            }
        }, false)
        this.onScroll()
    },
    methods: {
        _getArticle() {
            if(!this.$route.params.id){
                return
            }
            getArticle(this.$route.params.id).then((res) => {
                let time = moment(res.create_time).format('YYYY-MM-DD') 
                let today = moment(new Date()).format('YYYY-MM-DD')
                if( time === today) {
                    res.create_time = '今天'
                }else{
                     res.create_time = time
                }
                this.data = res
            })
        },
        collect() {

        },
        scroll(el) {
            if(el.y>-50) {
                this.showHead = true
            }else{
                this.showHead = false
            }
        },
        onScroll(){
           console.log(11)
        }
    },
    watch: {
        '$route' (to, from) {
            this._getArticle()
        }
    },
    components: { Scroll }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.article
    position: fixed
    z-index: 999
    width: 100%
    top: 0
    bottom 0
    background-color: $color-background
    .head
            display flex
            position fixed
            width 100%
            height 45px
            background-color $color-background
            align-items center 
            justify-content center
            font-size $font-size-medium-x
            border-bottom 1px solid #E7E6EB
            z-index 1000
            top 0
            .back
                position absolute
                width 24px
                height 24px
                left 12.5px
                background-size 24px 24px
                bg-image('left')
            .collect
                position absolute
                width 24px
                height 24px
                right 12.5px
                .has-collect
                    position absolute
                    left 0
                    top 0
                    width 100%
                    height 100%
                    background-size 24px 24px
                    bg-image('collected')
                .no-collect
                    position absolute
                    left 0
                    top 0
                    width 100%
                    height 100%
                    background-size 24px 24px
                    bg-image('collect')
    .article-content
        width 100%
        height 100%
        overflow hidden
        .container
            position: relative
            width: 343px
            margin-left:16px
            padding-top: 45px
            .title
                position: relative
                font-size: $font-size-large-x 
                font-weight: bold
                margin 21px 0
                text-overflow ellipsis 
                display: -webkit-box
                -webkit-line-clamp: 2
                -webkit-box-orient: vertical
                overflow: hidden
                width: 100% 
                max-height: 100px
                line-height: 26px 
            .comments
                position: relative
                font-size: 15px
                span
                    margin-right: 15px
            .content
                position: relative
                margin-top: 40px
                width: 100%
                font-size $font-size-medium-x
.slide-enter-active, .slide-leave-active
    transition: all 0.3s
.slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
