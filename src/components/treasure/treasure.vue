<template>
    <div class="treasure">
        <div class="treasure-head">虚空探宝</div>
        <search-box class="search-box"
            @showSearch="showSearch"
            @closeSearch="closeSearch"
            @query="onQueryChange"
            ></search-box>
        <scroll class="treasure-scroll">
            <div class="treasure-map">
                <div class="map-item" v-for="(item, mapId) in data" :key="mapId">
                    <a @click="gotoTable(item)">{{item.name}}</a>
                </div>
            </div>
        </scroll>
        <treasure-search-list class="search-list treasure-scroll" v-show="showSearchList" :data="searchData"></treasure-search-list>
        <router-view></router-view>
    </div>
</template>

<script>
import SearchBox from 'base/treasure-search-box/treasure-search-box'
import TreasureSearchList from 'base/treasure-search-list/treasure-search-list'
import Scroll from 'base/scroll/scroll'
import { getWorld } from 'api/world'
import { getTreasureSearchList } from 'api/treasure'

export default {
    data(){
        return {
            data:[],
            showSearchList: false,
            searchData:[]
        }
    },
    created(){
        this._getWorld()
    },
    methods: {
        _getWorld() {
            getWorld().then((res)=>{
                this.data = res
            })
        },
        gotoTable(item) {
            this.$router.push({
                path: `/treasure/${item.mapId}`,
                query: {
                    title: item.name,
                    mapId: item.mapId
                }
            })
        },
        showSearch(){
            this.showSearchList = true
        },
        closeSearch(){
            this.showSearchList = false
            this.searchData = []
        },
        onQueryChange(newQuery){
            if(newQuery === ''){
                return
            }
            getTreasureSearchList(newQuery).then((res)=>{
                let array = res
                if(array.length !== 0){
                    for(let i = 0; i<array.length; i++){
                        let world
                        for(let j = 0; j<this.data.length; j++){
                            if(array[i].mapId === this.data[j].mapId){
                                world = this.data[j].name
                                array[i].world = world
                            }
                        }
                    }
                }
                this.searchData = array
            })

        }
    },
    components: { SearchBox,TreasureSearchList,Scroll }
    
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.treasure
    position fixed
    width 100%
    top 0
    bottom 0
    left 0
    background-color: $color-background
    z-index 999
    font-size $font-size-large
    overflow hidden
    .treasure-head
        width 100%
        height 50px
        display flex
        align-items center
        justify-content center
        font-size $font-size-medium-x
        border-bottom 2px solid #E7E6EB
        font-weight bold
    .treasure-scroll
        position absolute
        width 100%
        top 108px
        bottom 0
        overflow hidden
        .treasure-map
            width 100%
            text-align center
            .map-item 
                padding 12px
</style>
