webpackJsonp([8],{Ut2c:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("cxMv"),i=a("JBuz"),s=a("F4+m"),u=a("rq2H"),n=a("yOI4"),c={mixins:[s.b],data:function(){return{num1:40,num2:0,options:[{value:8,label:"不灭"},{value:6,label:"上仙"},{value:4,label:"金仙"},{value:3,label:"玄仙"},{value:2,label:"真仙"},{value:1.5,label:"散仙"},{value:1,label:"游侠"}],value:8,result:216780,articleData:{}}},computed:{animatedNumber:function(){return this.result.toFixed(0)}},created:function(){var t=this;this.articleData.title="龙潭满气分数计算器",this.articleData.goto="lt",this.$route.query.inApp&&this.getArticleData().then(function(e){t.articleData=e})},mounted:function(){Object(u.b)("longtan")},methods:{computeResult:function(t,e,a){return 3900+(130*(t+20)*3+120*(150-3*t)+10*e)*a}},components:{HeadBox:i.a,Adv:n.a},watch:{num1:function(t){l.a.to(this.$data,1,{result:this.computeResult(t,this.num2,this.value)})},num2:function(t){l.a.to(this.$data,1,{result:this.computeResult(this.num1,t,this.value)})},value:function(t){l.a.to(this.$data,1,{result:this.computeResult(this.num1,this.num2,t)})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide"}},[a("div",{staticClass:"data-lt"},[a("head-box",{staticClass:"head-box",attrs:{data:t.articleData,inApp:this.isApp(this.$route.query.inApp)}}),t._v(" "),a("div",{staticClass:"name"},[a("div",{staticClass:"item item-value"},[t._v("称号")]),t._v(" "),a("div",{staticClass:"item item-num1"},[t._v("遭遇战次数")]),t._v(" "),a("div",{staticClass:"item item-num2"},[t._v("遭遇战最后场数")])]),t._v(" "),a("div",{staticClass:"compute"},[a("el-select",{staticClass:"item-value",attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-input-number",{staticClass:"item-num1",attrs:{min:27,max:48,label:"遭遇次数"},model:{value:t.num1,callback:function(e){t.num1=e},expression:"num1"}}),t._v(" "),a("el-input-number",{staticClass:"item-num2",attrs:{min:0,max:2,label:"遭遇次数"},model:{value:t.num2,callback:function(e){t.num2=e},expression:"num2"}})],1),t._v(" "),a("div",{staticClass:"result"},[t._v(t._s(t.animatedNumber))]),t._v(" "),t.articleData.title?a("adv",{staticClass:"adv"}):t._e()],1)])},staticRenderFns:[]};var r=a("VU/8")(c,o,!1,function(t){a("qLj9")},"data-v-69e81d28",null);e.default=r.exports},qLj9:function(t,e){}});