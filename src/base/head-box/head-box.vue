<template>
    <div class="head">
        <div class="head-left"><i class="back" @click="goBack()"></i></div>
        <div class="head-center" v-if="showTitle">{{data.title}}</div>
        <div class="head-right" @click="toggleFavorite(data)" v-if="inApp&&data.title">
            <i :class="getFavoriteIcon(data)" ></i>
         </div>
    </div>
</template>

<script>
import {articleMixin} from 'common/js/mixin'
export default {
    mixins: [articleMixin],
    props:{
        data:{
            type:Object,
            default: {}
        },
        inApp: {
            type: Boolean,
            default: false
        },
        showTitle: {
            type: Boolean,
            default: true
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
        .head
            display flex
            width 100%
            height 45px
            align-items center 
            justify-content center
            font-size $font-size-large
            top 0
            .head-center
                width 76%
                height 45px
                position absolute
                left 12%
                line-height 45px
                text-align center
                no-wrap()
            .head-left
                position absolute
                width 45px
                height 45px
                display flex
                align-items center
                justify-content center
                left 0
                .back
                    width 24px
                    height 24px
                    background-size 24px 24px
                    bg-image('left')
            .head-right
                position absolute
                width 45px
                height 45px
                right 0
                display flex
                align-items center
                justify-content center
                .has-collect
                    width 24px
                    height 24px
                    background-size 24px 24px
                    bg-image('collected')
                .no-collect
                    width 24px
                    height 24px
                    background-size 24px 24px
                    background-size 24px 24px
                    bg-image('collect')
</style>
