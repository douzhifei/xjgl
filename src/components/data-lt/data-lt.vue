<template>
    <div class="data-lt">
        <head-box class="head-box" :data="articleData" :inApp="this.isApp(this.$route.query.inApp)"></head-box>
        <div class="name"><div class="item item-value">称号</div><div class="item item-num1">遭遇战次数</div><div class="item item-num2">遭遇战最后场数</div></div>
        <div class="compute">
            <el-select class="item-value" v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
            </el-select>
            <el-input-number class="item-num1" v-model="num1" :min="27" :max="48" label="遭遇次数"></el-input-number>
            <el-input-number class="item-num2" v-model="num2" :min="0" :max="2" label="遭遇次数"></el-input-number>
        </div>
        <div class="result">{{ animatedNumber }}</div>
    </div>
</template>
<script>
import {TweenLite} from 'gsap/TweenLite'
import HeadBox from 'base/head-box/head-box'
import {articleMixin} from 'common/js/mixin'
export default {
     mixins: [articleMixin],
     data() {
      return {
        num1: 27,
        num2: 0,
        options: [{
          value: 8,
          label: '不灭'
        }, {
          value: 6,
          label: '上仙'
        }, {
          value: 4,
          label: '金仙'
        }, {
          value: 3,
          label: '玄仙'
        }, {
          value: 2,
          label: '真仙'
        }, {
          value: 1.5,
          label: '散仙'
        }, {
          value: 1,
          label: '游侠'
        }],
        value: 8,
        result: 216780,
        articleData:{title:'龙潭满气分数计算器'}
      };
    },
    computed: {
        animatedNumber: function() {
            return this.result.toFixed(0)
        }
    },
    created(){
        
    },
    methods: {
      computeResult(x,y,z) {
          return 3900 + ((x+20)*130*3+(150-x*3)*120+y*10)*z
      }
    },
    components:{HeadBox},
    watch: {
        num1: function(newValue) {
            TweenLite.to(this.$data, 1, { result: this.computeResult(newValue, this.num2, this.value) })
        },
        num2: function(newValue) {
            TweenLite.to(this.$data, 1, { result:  this.computeResult(this.num1, newValue, this.value)})
        },
        value: function(newValue) {
            TweenLite.to(this.$data, 1, { result:  this.computeResult(this.num1, this.num2, newValue)})
        }
    }
}
</script>
<style lang="stylus" scoped>
.data-lt
    width 100%
    .compute,.name
        width 96%
        margin-left 2%
        display flex
        align-items center
        justify-content space-between
        .item-value
            width 26%
        .item-num1
            width 38%
        .item-num2
            width 32%
    .name
        margin-top 18%
        padding-bottom 6px
        font-weight bold
        .item
            text-align center
    .result
        width 100%
        font-size 95px
        text-align center
        margin-top 10%
        font-weight bold
</style>
