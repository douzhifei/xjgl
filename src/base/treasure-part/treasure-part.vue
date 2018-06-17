<template>
    <div class="part">
        <div class="part-title">{{data.title}}</div>
        <ul class="part-content">
            <li class="part-item" v-for="(item,index) in data.data" :key="index" :class="classObject(item)">
                <div class="part-item-div" v-if="item != undefined">
                    <div class="div-hidden" >{{item.name}}</div>
                    <div style="margin:2px 0">{{item.num>1?item.num:''}}</div>
                    <div>{{item.level>0?item.level+'星':''}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        data:{
            type:Object,
            default:()=>{
                return {}
            }
        }
    },
    methods: {
        classObject(item) {
            if( item === undefined){
                return
            }
            switch(item.important){
                case 1:
                    return { 'is-box': true }
                    break
                case 2:
                    return { 'is-rare': true }
                    break
                case 3:
                    return { 'is-ipt': true}
                    break
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.part
    width 100%
    background-color #A5A4A2 
    .part-title
        width 100%
        font-size 18px
        font-weight bold
        height 30px
        display flex
        align-items center
        justify-content center
        background-color #101010 
        color #fff
    .part-content
        width 100%
        display flex
        flex-wrap wrap
        border 1px solid #101010
        box-sizing border-box
        .part-item
            width 20%
            height 50px
            font-size 10px
            display flex
            align-items center
            justify-content center
            border 1px solid #101010
            box-sizing border-box
            .part-item-div
                padding 2px 2%
                width 96%
                .div-hidden
                    white-space: nowrap
                    text-emphasis ellipsis
                    width 100%
                    overflow hidden
                    font-weight bold
                    font-size 13px
.is-box
    background-color red
    color rgba(254,254,254,1)
.is-rare
    background-color #daf92f
    color rgba(24,24,24,1) 
.is-ipt
    background-color #b3524e
    color rgba(254,254,254,1) 
</style>
