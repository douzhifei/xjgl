<template>
    <div class="count">
        <div class="head">访问统计</div>
        <ul v-if="data.list!=0" class="count-ul">
            <li v-for="(item,index) in data" :key="index" class="count-li">
                {{item.name}}:{{item.count}}
            </li>
        </ul>
    </div>
</template>
<script>
import { countList } from 'api/others'
import {adminMixin} from 'common/js/mixin'
export default {
    mixins:[adminMixin],
    data(){
        return {
            data:[]
        }
    },
    mounted(){
        this.checkToken()
        let token = {token: this.token}
        countList(token).then((res)=>{
            console.log(res)
            this.data = res
        })
    },
}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
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
    .count-ul
        width 100%
        color #606266
        .count-li
            width 100%
            height 40px
            display flex
            align-items center
            justify-content center
            border-bottom  1px solid #E7E6EB


</style>
