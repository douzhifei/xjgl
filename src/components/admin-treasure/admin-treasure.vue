<template>
    <div class="treasure" ref="treasure">
        <div class="treasure-head">虚空探宝</div>
        <div style="margin: 10px 0">
            <el-row>
                <el-col :span="8" style="margin:0 10px">
                    <el-input placeholder="搜索宝物" v-model="filters[0].value"></el-input>
                </el-col>

                <el-col :span="5" style="margin: 0 15px">
                    <el-button @click="openAdd">添加</el-button>
                </el-col>

                <el-col :span="6" style="margin-left:20ppx">
                    <el-button @click="worldOpen">地图</el-button>
                </el-col>
            </el-row>
        </div>
        <data-tables class="data-table"
            :data="data" 
            :current-page="3" 
            :page-size="5" 
            :pagination-props="{ background: false, small: true, layout: 'prev, pager, next', pageSizes: [6, 1, 3] }" 
            :action-col="actionCol" 
            :filters="filters" 
            @selection-change="handleSelectionChange" style="width: 100%">
            <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.prop" sortable="custom" :width="width(title.prop)">
            </el-table-column>
        </data-tables>
        <treasure-add 
            v-show="isOpenAdd" 
            @sucess="addData"
            @addQuit="addQuit" 
            :worlds="worlds"></treasure-add>
        <add-world v-show="isOpenAddWorld" @worldQuit="worldQuit"></add-world>
        <treasure-update 
            v-show="isOpenUpdate" 
            @updateSucess="updateData" 
            @updateQuit="updateQuit" 
            :data="udata" 
            :worlds="worlds"
            :toSite="changeRange(udata.range)"></treasure-update>
    </div>
</template>

<script>
import TreasureAdd from 'base/treasure-add/treasure-add'
import TreasureUpdate from 'base/treasure-update/treasure-update'
import AddWorld from 'base/addWorld/addWorld'
import { getWorld } from 'api/world'
import { getTreasureAllList, delTreasure } from 'api/treasure'

export default {
    data() {
        return {
            data:[],
            udata:{},
            uRow: 0,
            worlds: [],
            titles: [{
                    prop: "nameNum",
                    label: "宝物"
                }, {
                    prop: "mapId",
                    label: "图"
                },{
                    prop: "range",
                    label: "序"
                },{
                    prop: "important",
                    label: "类" 
                }],
            isOpenAdd: false,
            isOpenAddWorld: false,
            isOpenUpdate: false,
            filters: [{ //查询
                prop: 'name',
                value: ''
            }],
            actionCol: {
                props: {
                label: '操作',
                },
                buttons: [{
                    handler: row => {
                        this.update(row)
                    },
                    label: '编辑'
                    }, {
                    handler: row => {
                       this.delete(row)
                    },
                    label: '删除'
                }]
            },
            selectedRow: []
        }
    },
    created() {
        this._getTreasureAllList()
        this._getWorld()
    },
    methods: {
        _getWorld() {
            getWorld().then((res)=>{
                this.worlds = res
            })
        },
        _getTreasureAllList() {
            let that = this
            getTreasureAllList().then( (res) =>{
                res.forEach(element => {
                    let nameNum = element.name + element.num
                    let item = { nameNum: nameNum }
                    Object.assign(item,element)
                    that.data.push(item)
                });
            })
        },
        worldOpen() {
            this.isOpenAddWorld = true
        },
        openAdd() {
            this.isOpenAdd = true
        },
        addData(val) {
            let nameNum = val.name + val.num
            let item = { nameNum: nameNum }
            Object.assign(item,val)
            console.log(item)
            this.isOpenAdd = false
            this.data.unshift(item)
        },
        worldQuit() {
            this.isOpenAddWorld = false
        },
        addQuit() {
            this.isOpenAdd = false
        },
        delete(row) {
            delTreasure(row._id).then( (res) =>{
                if(!res.ok){
                    return
                }
                this.data.splice(this.data.indexOf(row), 1)
                this.$message('删除成功！')
            })
        },
        update(row) {
            this.isOpenUpdate = true
            this.udata = row
            this.uRow = this.data.indexOf(row)
        },
        updateQuit() {
            this.isOpenUpdate = false
        },
        updateData(val) {
            let nameNum = val.name + val.num
            let item = { nameNum: nameNum }
            Object.assign(item,val)
            this.isOpenUpdate = false
            this.data.splice(this.uRow, 1, item)
            console.log(this.data[this.uRow])
        },
        width(key) {
            if(key !== 'nameNum'){
                return 60
            }
        },
        changeRange(range){
            let directions = ['东','西','南','北','中','西南','西北','东北','东南']
            let directionIndex = Math.ceil(range/30)-1
            let row = Math.ceil(range%30/5)==0 ? 6 : Math.ceil(range%30/5)
            let col = range%30%5 == 0 ? 5 : range%30%5
            let direction = directions[directionIndex]
            return {
                direction : direction,
                row : row,
                col : col
            }
        },
        handleSelectionChange(val) {
            this.selectedRow = val
        }
    },
    components: { TreasureAdd, TreasureUpdate, AddWorld }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.treasure
    position absolute
    width 100%
    top 0
    bottom 0
    left 0
    background-color: $color-background
    font-size $font-size-large
    color #606266
    overflow scroll
    .data-table
        width 100%
        font-size $font-size-small
    .treasure-head
        width 100%
        height 50px
        display flex
        align-items center
        justify-content center
        font-size $font-size-medium-x
        border-bottom 2px solid #E7E6EB
</style>

