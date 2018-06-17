<template>
    <div class="activity">
        <scroll :listenScroll="listenScroll" :beforeScroll="beforeScroll" :pullup="pullup"  @scrollToEnd="scrollToEnd" @beforeScroll="beforeScrollLoading"  class="activity-content">
            <div>
                <listview :listType ="listType" :skip="skip" @select="slectItem" @nodata="setNodata" @finishLoad="finishLoad" :isloading="isloading"></listview>
                <div class="blank"></div>
            </div>
        </scroll>
    </div>
</template>

<script>
import Listview from 'base/listview/listview'
import Scroll from 'base/scroll/scroll'
const ARTICLE_TYPE = 1
const ARTICLE_SKIP = 0
export default {
    data() {
        return {
            skip: ARTICLE_SKIP,
            listType: ARTICLE_TYPE,
            nodata: false,
            beforeScroll: false,
            isFinish: true,
            isloading: false
        }
    },
    created() {
        this.listenScroll = true
        this.pullup = true
    },
    methods: {
        slectItem(item) {
            console.log(item)
            this.$router.push({
                path: `/article/${item._id}`
            })
        },
        scrollToEnd() {
            if(!this.nodata && this.isFinish){
                this.isFinish = false
                this.skip += 3
                console.log(this.skip)
            }
        },
        setNodata() {
            this.nodata = true
        },
        finishLoad() {
            this.isFinish = true
        },
        beforeScrollLoading() {
            this.isloading = !this.isloading
        }
    },
    components: { Listview, Scroll }
}
</script>

<style lang="stylus" scoped>
.activity
    position: fixed
    width: 100%
    top: 105px
    bottom: 0
    .activity-content
        height: 100%
        overflow: hidden
        .blank
            width: 100%
            height: 25px 
</style>


