<template>
    <div class="listview">
        <ul class="list-group" ref="listGroup">
            <li class="list-item" v-for="(item, index) in data" :key="index" @click="selectItem(item)">
                <img :src="item.cover" >
                <div class="item-right">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-time">{{item.create_time}}</div>
                </div>
            </li>
        </ul>
        <div v-if="loadEnd" class="load_staus">
            <div v-if="loadMore" class="loading">
                <loading></loading>
            </div>
            <div v-else class="loading_txt"><span>{{refreshTxt}}</span></div>
        </div>
    </div>
</template>

<script>
import { getArticleList } from 'api/bbs'
import moment from 'moment'
import Loading from 'base/loading/loading'
export default {
    data() {
        return {
            data: [],
            loadEnd: false,
            loadMore: true,
            isLoad: true,
            refreshTxt: '没有更多数据了'
        }
    },
    props: {
        listType: {
            type: Number,
            default: 0
        },
        limit: {
            type: Number,
            default: 5,
        },
        skip: {
            type: Number,
            default: 0
        },
        nodata: {
            type: Boolean,
            default: false
        },
        isloading: {
            type: Boolean,
            default: false
        },
        hideLoading: {
            type: Number,
            default: 0
        }
    },
    created() {
        this._initData()
    },
    methods: {
        _initData() {
            let dataList = {
                type: this.listType,
                limit: this.limit,
                skip: this.skip
            }
            getArticleList(dataList).then((res) => {
                res.forEach(value => {
                    let item = {}
                    item._id = value._id
                    item.cover = value.cover
                    item.title = value.title
                    item.create_time = moment(value.create_time).format('YYYY-MM-DD')
                    this.data.push(item)
                })

            })
        },
        getMoreData() {
            this.loadEnd = true
            if(!this.isLoad){
                this.loadEnd = false
                return
            }
            let moreData = {
                type: this.listType,
                limit: this.limit,
                skip: this.skip
            }
            let that = this
            getArticleList(moreData).then((res) => {
                if(res.length == 0){
                    console.log(res)
                    that.loadEnd = true
                    that.loadMore = false
                    that.isLoad = false
                    this.$emit('nodata')
                    return
                }
                let newLists = []
                res.forEach(value => {
                    let item = {}
                    item._id = value._id
                    item.cover = value.cover
                    item.title = value.title
                    item.create_time = moment(value.create_time).format('YYYY-MM-DD')
                    newLists.push(item)
                })
                setTimeout(() =>{
                    this.data = this.data.concat(newLists)
                    that.loadEnd = false
                     this.$emit('finishLoad')
                },200)
            })
        },
        selectItem(item) {
            this.$emit('select', item)
        },
        setLoading() {
            this.loadEnd = true
        },
        setHideLoading() {
            this.loadEnd = false
        }
    },
    watch: {
        skip: 'getMoreData',
        isloading: 'setLoading',
        hideLoading: 'setHideLoading'
    },
    components: { Loading }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .listview 
        position: relative
        width: 100%
        overflow: hidden
        .load_staus
            width: 100%
            height: 50px 
            display: flex
            justify-content center
            align-items center
            .loading
                margin: 5px 0
            .loading_txt
                margin: 5px 0
    .list-group
        position: relative
        width: 100%
        .list-item
            position: relative
            width: 350px
            height: 95px
            margin-top: 10px
            margin-left: 12.5px
            display: flex
            border: 1px #f6f6f6 solid
            border-radius: 10px
            img 
                position: relative
                display: flex
                left: 0
                height: 100%
                width: 150px
                border-radius: 10px
            .item-right
                padding: 10px
                display: flex 
                width: 360px
                flex-direction: column
                justify-content:space-between
                .item-title
                    overflow: hidden
                    height: 39px
                    width: 100%
                    font-size: $font-size-large
                    line-height: 21px
                    text-overflow ellipsis 
                    display: -webkit-box
                    -webkit-line-clamp: 2
                    -webkit-box-orient: vertical
</style>

