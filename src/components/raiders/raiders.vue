\<template>
    <div class="raiders">
        <scroll :listenScroll="listenScroll" 
                :beforeScroll="isBeforeScroll" 
                :pullup="pullup"  
                @scrollToEnd="scrollToEnd" 
                @beforeScroll="beforeScrollLoading"  class="headline-content" ref="headlineScroll">
            <div>
                <listview v-if="listData.length != 0" 
                    :listType ="listType" 
                    :hideLoading="hideLoading" 
                    :skip="skip" 
                    @select="slectItem" 
                    @nodata="setNodata" 
                    @finishLoad="finishLoad" 
                    :isloading="isloading" 
                    :initData="listData"></listview>
            </div>
        </scroll>
        <div class="loading-container" v-show="!listData.length">
            <loading></loading>
        </div>
    </div>
</template>

<script>
import Listview from 'base/listview/listview'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import moment from 'moment'
import { getArticleList } from 'api/article'
import {articleMixin} from 'common/js/mixin'
const ARTICLE_TYPE = 2
const ARTICLE_SKIP = 0
export default {
    mixins:[articleMixin],
    data() {
        return {
            skip: ARTICLE_SKIP,
            listType: ARTICLE_TYPE,
            limit: 10,
            nodata: false,
            isFinish: true,
            isloading: false,
            hideLoading: 0,
            listViewShow: false,
            listData: []
        }
    },
    created() {
        this.listenScroll = false
        this.pullup = true
        this.isBeforeScroll = true
        this._initData()
    },
    methods: {
        scrollToEnd() {
            if(!this.nodata && this.isFinish){
                this.isFinish = false
                this.skip += 3
                return
            }
            this.hideLoading += 1 
        },
        setNodata() {
            this.nodata = true
        },
        finishLoad() {
            this.isFinish = true
            this.refresh()
        },
        beforeScrollLoading() {
            if(this.listData.length<this.limit){
                return
            }
            this.isloading = !this.isloading
        },
        refresh() {
            this.$refs.headlineScroll.refresh()
        },
        _initData() {
            let dataList = {
                type: this.listType,
                limit: this.limit,
                skip: this.skip
            }
            getArticleList(dataList).then((res) => {
                let list = []
                res.forEach(value => {
                    let item = {}
                    item._id = value._id
                    item.cover = value.cover
                    item.title = value.title
                    item.type = value.type
                    item.goto = value.goto
                    item.create_time = moment(value.create_time).format('YYYY-MM-DD')
                    list.push(item)
                })
                this.listData = list
                setTimeout(()=>{
                    this.refresh()
                },40)
            })
        },
        
    },
    components: { Listview, Scroll, Loading }
}
</script>

<style lang="stylus" scoped>
.raiders
    position: fixed
    width: 100%
    top: 105px
    bottom: 0
    .headline-content
        height: 100%
        overflow: hidden
        .blank
            width: 100%
            height: 25px 
    .loading-container
        position: absolute
        top: 50%
        left: 50%
        transform: translateY(-50%)
        transform: translateX(-50%)
</style>


