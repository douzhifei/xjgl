<template>
    <div class="add-block" @touchmove.prevent>
            <div class="add-mask" @click="addQuit"></div>
            <div class="add-content">
                <div class="add-item">地图名称：<el-input class="add-item-input" type="text" v-model="data.name" placeholder="x界虚空探宝x"></el-input></div>
                <div class="add-item">地图MapId：<el-input class="add-item-input" type="number" placeholder=" MapId"  v-model="data.mapId"></el-input></div>
                <div class="add-item">六界所属：<el-input class="add-item-input" type="text" placeholder=" 六界所属 " v-model="data.attach"></el-input></div>
                <div class="add-item" style="margin:10px 0">
                    <el-button type="primary" @click="addSubmit" style="margin: 5px">确认</el-button>
                    <el-button @click="addQuit" style="margin: 5px">取消</el-button>
                </div>
            </div>
        </div>
</template>

<script>
import { createWorld } from 'api/world'
export default {
    data() {
        return {
            data: {},
        }
    },
    methods: {
        addSubmit(){
            this.data.mapId = parseInt(this.data.mapId)
            let that = this
            createWorld(this.data).then((result) => {
                that.$message('添加成功！')
                that.data = {}
                this.$emit('worldQuit')
            }).catch((err) => {
                console.log(err)
                that.$message('添加失败！')
            });
        },
        addQuit() {
            this.$emit('worldQuit')
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.add-block
    position fixed
    width 100%
    height 100%
    top 0
    left 0
    overflow hidden
    color #606266
    .add-mask
        position absolute
        width 100%
        height 100%
        top 0
        left 0
        background-color rgba(0,0,0,0.7)
    .add-content
        position absolute
        width 80%
        height 300px
        left 10%
        top 20px
        display flex
        flex-direction column
        align-items center
        justify-content center
        background-color $color-background-search
        font-size $font-size-medium-x
        z-index 1
        .add-item 
            position relative
            width 100%
            text-align center
            margin  5px 0
            .add-item-input
                width 180px
</style>

