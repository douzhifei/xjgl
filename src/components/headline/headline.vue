<template>
    <div class="headline">
        <scroll :listenScroll="listenScroll" :beforeScroll="isBeforeScroll" :pullup="pullup"  @scrollToEnd="scrollToEnd" @beforeScroll="beforeScrollLoading"  class="headline-content" ref="headlineScroll">
            <div>
                <banner></banner>
                <listview :listType ="listType" :hideLoading="hideLoading" :skip="skip" @select="slectItem" @nodata="setNodata" @finishLoad="finishLoad" :isloading="isloading"></listview>
                <div class="blank"></div>
            </div>
        </scroll>
    </div>
</template>

<script>
import Listview from 'base/listview/listview'
import Banner from 'components/banner/banner'
import Scroll from 'base/scroll/scroll'
const ARTICLE_TYPE = 0
const ARTICLE_SKIP = 0
export default {
    data() {
        return {
            skip: ARTICLE_SKIP,
            listType: ARTICLE_TYPE,
            nodata: false,
            isFinish: true,
            isloading: false,
            hideLoading: 0
        }
    },
    created() {
        this.listenScroll = false
        this.pullup = true
        this.isBeforeScroll = true
    },
    methods: {
        slectItem(item) {
            this.$router.push({
                path: `/article/${item._id}`
            })
        },
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
            this.isloading = !this.isloading
        },
        refresh() {
            this.$refs.headlineScroll.refresh()
        }
    },
    components: { Listview, Banner, Scroll }
}
</script>

<style lang="stylus" scoped>
.headline
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
</style>


