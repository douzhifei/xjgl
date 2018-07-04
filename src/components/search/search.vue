<template>
    <div class="search" :class="{'focus-style':!collect}">
        <form class="search-container" action="" @submit="submit">
            <div class="search-box">
                <i class="icon-search" v-show="noclick"></i>
                <i class="icon-blank" v-if="noclick"></i>
                <i class="icon-search2" v-else></i>
                <input type="search" ref="query" v-model="query" @focus="showSearch" @blur.prevent="displaySearch" class="box" :placeholder="placeholder"/>
                <i @click="clear" v-show="query" class="icon-dismiss"></i>
            </div>
            <div class="collect">
                <i class="my" v-if="collect" @click="gotoCollect"></i>
                <span class="quit" v-else @click="quit">取消</span>
            </div>
        </form>
    </div>
</template>

<script>
import {debounce} from 'common/js/util'
export default {
    props: {
      placeholder: {
        type: String,
        default: '搜索'
      }
    },
    data() {
        return {
            query: '',
            noclick: true,
            collect: true,
            showQuit: false

        }
    },
    created() {
      this.$watch('query', debounce((newQuery) => {
        this.$emit('query', newQuery)
        // this.displaySearch()
      }, 200))
    },
    methods: {
        showSearch() {
            this.noclick = false
            this.collect = false
            this.showQuit = true
            this.$emit('showSearch')
        },
        displaySearch() {
            if(this.query === '') {
                this.noclick = true
            }else{
                this.noclick = false
            }
        },
        gotoCollect() {
            this.$router.push({path:'/collect'})
        },
        clear() {
            this.collect = true
            this.noclick = true
            this.query = ''
            this.$refs.query.blur()
        },
        submit(){
            this.$refs.query.blur()
            return
        },
        quit(){
            this.$emit('closeSearch')
            this.query = ''
            this.noclick = true
            this.showQuit = false
            this.clear()
        },
        replaceQuery(str){
            this.query = str
            this.displaySearch()
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "~common/stylus/variable"
 @import "~common/stylus/mixin"
.focus-style
    margin-top 45px
.search
  width: 100%
  height: 55px
  box-sizing: border-box
  .search-container
    width 100%
    height 100%
    display: flex
    align-items: center
    .collect
        display flex
        width 35px
        height 35px
        margin-left 15px
        align-items: center
        .my
            width 24px
            height 24px
            background-size 24px 24px
            bg-image('my')
        .quit
            font-size $font-size-medium
            letter-spacing 3px
            color $color-theme
    .search-box
        display: flex
        align-items: center
        box-sizing: border-box
        width: 300px
        padding: 0 12.5px
        height: 35px
        background: $color-background-tab
        margin-left: 12.5px
        border-radius: 5px
        .icon-search
            position absolute
            width: 16px
            height: 16px
            background-size: 16px 16px
            bg-image('search')
            left: 136px
        .icon-search2
            position relative
            width: 16px
            height: 16px
            background-size: 16px 16px
            bg-image('search')
        .icon-blank
            position relative
            width: 16px
            height: 16px
        .box
            flex: 1
            margin: 0 2.5px
            background: $color-background-tab
            color: $color-text
            font-size: $font-size-medium
            outline 0
            &::placeholder
                color: $color-text-d
                text-align center
            &:focus::placeholder
                text-align left
            .icon-dismiss
                font-size: $font-size-medium-x
                color: $color-background
</style>
