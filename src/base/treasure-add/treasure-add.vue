<template>
    <div class="add-block" @touchmove.prevent>
            <div class="add-mask" @click="addQuit"></div>
            <div class="add-content">
                <div class="add-item">宝物：<el-input class="add-item-input" type="text" v-model="data.name" placeholder="输入宝物名称"></el-input></div>
                <div class="add-item">数量：<el-input class="add-item-input" type="number" placeholder=" 数量"  v-model="data.num"></el-input></div>
                <div class="add-item">地图：
                    <el-select v-model="data.mapId" placeholder="地图" style="width:180px">
                        <el-option
                            v-for="(item, index) in worlds"
                            :key="index"
                            :label="item.name"
                            :value="item.mapId">
                        </el-option>
                    </el-select>
                </div>
                <div class="add-item">位置：
                    <el-select v-model="site.direction" placeholder="方位" style="width:90px">
                        <el-option
                            v-for="(item, index) in directions"
                            :key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>

                    <el-select v-model="site.row" placeholder="行" style="width:70px">
                        <el-option
                            v-for="item in rows"
                            :key="item"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>

                    <el-select v-model="site.col" placeholder="列" style="width:70px">
                        <el-option
                            v-for="item in cols"
                            :key="item"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
                </div>
                
                <div class="add-item">难度：<el-input class="add-item-input" type="number" placeholder=" 几星难度,可不填" v-model="data.level"></el-input></div>
                <div class="add-item">加成：<el-input class="add-item-input" type="text" placeholder=" 加成，可不填" v-model="data.plus"></el-input></div>
                <div class="add-item">

                    <input type="radio" id="i-one" value="0" v-model="data.important">
                    <label for="i-one">不值钱的</label>

                    <input type="radio" id="i-two" value="1" v-model="data.important">
                    <label for="i-two">宝箱</label>

                    <br>

                    <input type="radio" id="i-tree" value="2" v-model="data.important">
                    <label for="i-tree">稀有元神</label>

                    <input type="radio" id="i-four" value="3" v-model="data.important">
                    <label for="i-four">重要物品</label>
                </div>
                <div class="add-item" style="margin:10px 0">
                    <el-button type="primary" @click="addSubmit" style="margin: 5px">确认</el-button>
                    <el-button @click="addQuit" style="margin: 5px">取消</el-button>
                </div>
            </div>
        </div>
</template>

<script>
import { createTreasure } from 'api/treasure'
export default {
    data() {
        return {
            data: {},
            directions: ['东','西','南','北','中','西南','西北','东北','东南'],
            rows:[1,2,3,4,5,6],
            cols:[1,2,3,4,5],
            site:{}
        }
    },
    props:{
        worlds:{
            type: Array,
            default: []
        }
    },
    methods: {
        addSubmit(){
            this.data.num = parseInt(this.data.num)
            this.data.mapId = parseInt(this.data.mapId)
            this.data.level = parseInt(this.data.level)
            this.data.important = parseInt(this.data.important)
            let site = this.site.direction+'-'+this.site.row+'-'+this.site.col
            this.data.range = this.changSite(site,this.directions)
            this.data.site = site
            console.log(site)
            if(!(this.data.name !==''&&Number.isInteger(this.data.num)&&Number.isInteger(this.data.important)&&this.site.direction !== undefined&&this.site.row !== undefined&&this.site.col !== undefined)){
                this.$message('不能有空值！')
                return
            }
            let that = this
            createTreasure(this.data).then((result) => {
                let item = result
                that.$emit('sucess', item)
                that.$message('添加成功！')
                console.log(11)
                that.data.name =''
                that.data.num = ''
                that.data.level = ''
                that.data.plus = ''
                that.site.col++
                if(that.site.col>5){
                    that.site.col = 1
                    that.site.row++
                }
                if(that.site.row>6){
                    that.site.row = 1
                }
            }).catch((err) => {
                console.log(err)
                that.$message('添加失败！')
            });
        },
        addQuit() {
            this.$emit('addQuit')
        },
        changSite(site,directions) {
            let arraySite = site.split('-')
            let index = directions.indexOf(arraySite[0])
            return index*30+(arraySite[1]-1)*5+parseInt(arraySite[2])
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
        height 500px
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

