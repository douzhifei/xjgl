<template>
    <div class="admin">
        <ul class="menu">
            <li class="item"><router-link to="/admin/treasure">文章</router-link></li>
            <li class="item"><router-link to="/admin/treasure/1">虚空探宝</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.admin
    position fixed
    width 100%
    top 0
    bottom 0
    left 0
    background-color: $color-background
    z-index 999
    font-size $font-size-large
    .menu
        position relative
        width 100%
        height 100%
        display flex
        flex-direction column
        align-items center
        justify-content center
        .item
            padding 15px
        
</style>
