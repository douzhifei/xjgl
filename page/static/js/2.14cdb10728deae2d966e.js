webpackJsonp([2],{"+deQ":function(t,a){},"/EfR":function(t,a,s){"use strict";a.a=function(t){return v.a.post("/api/skin",t).then(function(t){return e.a.resolve(t.data)})},a.b=function(){return v.a.get("/skin").then(function(t){return e.a.resolve(t.data)})};var i=s("//Fk"),e=s.n(i),l=s("aozt"),v=s.n(l)},"30KW":function(t,a,s){var i=s("kM2E"),e=s("7KvD").isFinite;i(i.S,"Number",{isFinite:function(t){return"number"==typeof t&&e(t)}})},AMV0:function(t,a,s){t.exports={default:s("k2Ib"),__esModule:!0}},OZJ6:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("AMV0"),e=s.n(i),l=s("JBuz"),v=s("qwAB"),r=s("F4+m"),o=s("rq2H"),h=s("/EfR"),d=s("Kf/3"),c=s("yOI4"),n={props:{data:{type:Object,default:function(){return{}}}},computed:{computeTili:function(){if(this.data.tl)return this.data.hasPart?2500*this.data.level:this.data.isPart?350*this.data.level+(this.data.level>=3?375:0)+(this.data.level>=10?750:0)+(this.data.level>=15?1125:0):this.data.hasPart||this.data.isPart?void 0:2e3*this.data.level},computeGongji:function(){if(this.data.gj)return this.data.hasPart?Math.floor(2500/3*this.data.level):this.data.isPart?233*this.data.level+(this.data.level>=3?250:0)+(this.data.level>=10?500:0)+(this.data.level>=15?750:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(2e3/3*this.data.level)},computeLingli:function(){if(this.data.ll)return this.data.hasPart?Math.floor(555.5*this.data.level):this.data.isPart?155*this.data.level+(this.data.level>=3?167:0)+(this.data.level>=10?333:0)+(this.data.level>=15?499:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(444.4*this.data.level)},computeFangyu:function(){if(this.data.fy)return this.data.hasPart?Math.floor(555.5*this.data.level):this.data.isPart?155*this.data.level+(this.data.level>=3?167:0)+(this.data.level>=10?333:0)+(this.data.level>=15?499:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(444.4*this.data.level)},computeBaoji:function(){if(this.data.bj)return this.data.hasPart?Math.floor(25/3*this.data.level):this.data.isPart?3*this.data.level+(this.data.level>=6?4:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(20/3*this.data.level)},computeFabao:function(){if(this.data.fb)return this.data.hasPart?Math.floor(25/3*this.data.level):this.data.isPart?3*this.data.level+(this.data.level>=6?4:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(20/3*this.data.level)},computeShangbi:function(){if(this.data.sb)return this.data.hasPart?Math.floor(25/3*this.data.level):this.data.isPart?3*this.data.level+(this.data.level>=6?4:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(20/3*this.data.level)},computeHuajie:function(){if(this.data.hj)return this.data.hasPart?Math.floor(50/3*this.data.level):this.data.isPart?3*this.data.level+(this.data.level>=6?4:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(40/3*this.data.level)},computeFangji:function(){if(this.data.fj)return this.data.hasPart?Math.floor(25/3*this.data.level):this.data.isPart?3*this.data.level+(this.data.level>=6?4:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(20/3*this.data.level)},computeBJJS:function(){if(this.data.bjjs)return this.data.hasPart?Math.floor(2500*this.data.level):this.data.isPart?360*this.data.level:this.data.hasPart||this.data.isPart?void 0:Math.floor(2e3*this.data.level)},computeFBJJ:function(){if(this.data.fbjs)return this.data.hasPart?Math.floor(2500*this.data.level):this.data.isPart?360*this.data.level:this.data.hasPart||this.data.isPart?void 0:Math.floor(2e3*this.data.level)},computeSBHX:function(){if(this.data.sbhx)return this.data.hasPart?Math.floor(5e3/3*this.data.level):this.data.isPart?360*this.data.level:this.data.hasPart||this.data.isPart?void 0:Math.floor(4e3/3*this.data.level)},computeHJHX:function(){if(this.data.hjhx)return this.data.hasPart?Math.floor(2e3*this.data.level):this.data.isPart?360*this.data.level:this.data.hasPart||this.data.isPart?void 0:Math.floor(1600*this.data.level)},computeFJJS:function(){if(this.data.fjjs)return this.data.hasPart?Math.floor(2500*this.data.level):this.data.isPart?360*this.data.level:this.data.hasPart||this.data.isPart?void 0:Math.floor(2e3*this.data.level)},computeWCS:function(){if(this.data.isPart){for(var t=0,a=1;a<this.data.level+1;a++)t+=a<7?20*(a-1):100;return t}for(var s=0,i=1;i<this.data.level+1;i++)s+=i<12?50*(i-1):500;return s},computeYS:function(){if(this.data.isPart){for(var t=0,a=1;a<this.data.level+1;a++)t+=a<8?2*(a-1):15;return t}for(var s=0,i=1;i<this.data.level+1;i++)s+=1===i?0:2===i?10:3===i?15:i>3&&i<7?30:35;return s},computeBJ:function(){if(this.data.isPart){for(var t=0,a=1;a<this.data.level+1;a++)t+=a<4?1:4===a?2:5===a?3:5;return t}}},created:function(){},methods:{quit:function(){this.$emit("closeLook")}}},u={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"message",on:{touchmove:function(t){t.preventDefault()}}},[s("div",{staticClass:"block",on:{click:t.quit}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"item item-title"},[t._v(t._s(t.data.name+"+"+t.data.level))]),t._v(" "),t.data.tl?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("体：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeTili))])]):t._e(),t._v(" "),t.data.gj?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("攻：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeGongji))])]):t._e(),t._v(" "),t.data.ll?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("灵：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeLingli))])]):t._e(),t._v(" "),t.data.fy?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("防：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeFangyu))])]):t._e(),t._v(" "),t.data.bj?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("暴击：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeBaoji))])]):t._e(),t._v(" "),t.data.fb?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("法爆：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeFabao))])]):t._e(),t._v(" "),t.data.sb?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("闪避：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeShangbi))])]):t._e(),t._v(" "),t.data.hj?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("化解：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeHuajie))])]):t._e(),t._v(" "),t.data.fj?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("反击：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeFangji))])]):t._e(),t._v(" "),t.data.bjjs?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("暴击加伤：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeBJJS))])]):t._e(),t._v(" "),t.data.fbjs?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("法爆加伤：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeFBJJ))])]):t._e(),t._v(" "),t.data.sbhx?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("闪避回血：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeSBHX))])]):t._e(),t._v(" "),t.data.hjhx?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("化解回血：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeHJHX))])]):t._e(),t._v(" "),t.data.fjjs?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("反击加伤：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeFJJS))])]):t._e(),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("五彩石：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeWCS))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("元神：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeYS))])]),t._v(" "),t.data.isPart?s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("部件消耗：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.computeBJ))])]):t._e(),t._v(" "),t.data.jn?s("div",{staticClass:"item item-jn"},[t._v(t._s(t.data.jn))]):t._e()])])])},staticRenderFns:[]};var f=s("VU/8")(n,u,!1,function(t){s("+deQ")},"data-v-c9d4f8d0",null).exports,m={data:function(){return{result:{tl:0,gj:0,ll:0,fy:0,bj:0,fb:0,sb:0,hj:0,fj:0,bjjs:0,fbjs:0,sbhx:0,hjhx:0,fjjs:0,wcs:0,zl:0}}},props:{data:{type:Array,default:function(){return[]}}},watch:{},mounted:function(){this.computeAll()},methods:{computeTili:function(t){return t.tl?t.hasPart?2500*t.level:t.isPart?350*t.level+(t.level>=3?375:0)+(t.level>=10?750:0)+(t.level>=15?1125:0):t.hasPart||t.isPart?void 0:2e3*t.level:0},computeGongji:function(t){return t.gj?t.hasPart?Math.floor(2500/3*t.level):t.isPart?233*t.level+(t.level>=3?250:0)+(t.level>=10?500:0)+(t.level>=15?750:0):t.hasPart||t.isPart?void 0:Math.floor(2e3/3*t.level):0},computeLingli:function(t){return t.ll?t.hasPart?Math.floor(555.5*t.level):t.isPart?155*t.level+(t.level>=3?167:0)+(t.level>=10?333:0)+(t.level>=15?499:0):t.hasPart||t.isPart?void 0:Math.floor(444.4*t.level):0},computeFangyu:function(t){return t.fy?t.hasPart?Math.floor(555.5*t.level):t.isPart?155*t.level+(t.level>=3?167:0)+(t.level>=10?333:0)+(t.level>=15?499:0):t.hasPart||t.isPart?void 0:Math.floor(444.4*t.level):0},computeBaoji:function(t){return t.bj?t.hasPart?Math.floor(25/3*t.level):t.isPart?3*t.level+(t.level>=6?4:0):t.hasPart||t.isPart?void 0:Math.floor(20/3*t.level):0},computeFabao:function(t){return t.fb?t.hasPart?Math.floor(25/3*t.level):t.isPart?3*t.level+(t.level>=6?4:0):t.hasPart||t.isPart?void 0:Math.floor(20/3*t.level):0},computeShangbi:function(t){return t.sb?t.hasPart?Math.floor(25/3*t.level):t.isPart?3*t.level+(t.level>=6?4:0):t.hasPart||t.isPart?void 0:Math.floor(20/3*t.level):0},computeHuajie:function(t){return t.hj?t.hasPart?Math.floor(50/3*t.level):t.isPart?3*t.level+(t.level>=6?4:0):t.hasPart||t.isPart?void 0:Math.floor(40/3*t.level):0},computeFangji:function(t){return t.fj?t.hasPart?Math.floor(25/3*t.level):t.isPart?3*t.level+(t.level>=6?4:0):t.hasPart||t.isPart?void 0:Math.floor(20/3*t.level):0},computeBJJS:function(t){return t.bjjs?t.hasPart?Math.floor(2500*t.level):t.isPart?360*t.level:t.hasPart||t.isPart?void 0:Math.floor(2e3*t.level):0},computeFBJJ:function(t){return t.fbjs?t.hasPart?Math.floor(2500*t.level):t.isPart?360*t.level:t.hasPart||t.isPart?void 0:Math.floor(2e3*t.level):0},computeSBHX:function(t){return t.sbhx?t.hasPart?Math.floor(5e3/3*t.level):t.isPart?360*t.level:t.hasPart||t.isPart?void 0:Math.floor(4e3/3*t.level):0},computeHJHX:function(t){return t.hjhx?t.hasPart?Math.floor(2e3*t.level):t.isPart?360*t.level:t.hasPart||t.isPart?void 0:Math.floor(1600*t.level):0},computeFJJS:function(t){return t.fjjs?t.hasPart?Math.floor(2e3*t.level):t.isPart?360*t.level:t.hasPart||t.isPart?void 0:Math.floor(1600*t.level):0},computeWCS:function(t){if(t.isPart){for(var a=0,s=1;s<t.level+1;s++)a+=s<7?20*(s-1):100;return a}for(var i=0,e=1;e<t.level+1;e++)i+=e<12?50*(e-1):500;return i},computeYS:function(t){if(t.isPart){for(var a=0,s=1;s<t.level+1;s++)a+=s<8?2*(s-1):15;return a}for(var i=0,e=1;e<t.level+1;e++)i+=1===e?0:2===e?10:3===e?15:e>3&&e<7?30:35;return i},computeBJ:function(t){if(t.isPart){for(var a=0,s=1;s<t.level+1;s++)a+=s<4?1:4===s?2:5===s?3:5;return a}},quit:function(){this.$emit("closeResult")},computeAll:function(){for(var t=0;t<this.data.length;t++)this.result.tl+=this.computeTili(this.data[t]),this.result.gj+=this.computeGongji(this.data[t]),this.result.ll+=this.computeLingli(this.data[t]),this.result.fy+=this.computeFangyu(this.data[t]),this.result.bj+=this.computeBaoji(this.data[t]),this.result.fb+=this.computeFabao(this.data[t]),this.result.sb+=this.computeShangbi(this.data[t]),this.result.hj+=this.computeHuajie(this.data[t]),this.result.fj+=this.computeFangji(this.data[t]),this.result.bjjs+=this.computeBJJS(this.data[t]),this.result.fbjs+=this.computeFBJJ(this.data[t]),this.result.sbhx+=this.computeSBHX(this.data[t]),this.result.hjhx+=this.computeHJHX(this.data[t]),this.result.fjjs+=this.computeFJJS(this.data[t]),this.result.wcs+=this.computeWCS(this.data[t]);this.result.zl=7.65*(this.result.tl/8+this.result.gj)+this.result.ll/2*5.9+5.9*this.result.fy,this.result.zl=Math.floor(this.result.zl)}}},_={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"message",on:{touchmove:function(t){t.preventDefault()}}},[s("div",{staticClass:"block",on:{click:t.quit}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"item item-title"},[t._v("合计")]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("体：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.tl))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("攻：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.gj))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("灵：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.ll))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("防：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.fy))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("暴击：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.bj))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("法爆：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.fb))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("闪避：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.sb))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("化解：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.hj))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("反击：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.fj))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("暴击加伤：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.bjjs))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("法爆加伤：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.fbjs))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("闪避回血：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.sbhx))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("化解回血：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.hjhx))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("反击加伤：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.fjjs))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"item-left"},[t._v("五彩石：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.wcs))])]),t._v(" "),s("div",{staticClass:"item item-zl"},[s("div",{staticClass:"item-left"},[t._v("提高战力：")]),t._v(" "),s("div",{staticClass:"item-right"},[t._v(t._s(t.result.zl))])])])])])},staticRenderFns:[]};var C=s("VU/8")(m,_,!1,function(t){s("mOE7")},"data-v-fe65b4aa",null).exports,P={mixins:[r.b],data:function(){return{data:[],articleData:{},openMessage:!1,openResult:!1,message:{}}},created:function(){var t=this;this.articleData.title="云裳计算器",this.articleData.goto="skin",this.$route.query.inApp&&this.getArticleData().then(function(a){t.articleData=a}),this._getSkins()},mounted:function(){Object(o.b)("skin")},methods:{_getSkins:function(){var t=this,a=Object(d.f)();void 0!==a&&(this.data=a),Object(h.b)().then(function(s){if(void 0!==a)for(var i=0;i<a.length;i++)s[i].level=a[i].level;t.data=s,setTimeout(function(){t.$refs.scroll.refresh()},300)})},scrollTop:function(){this.$refs.scroll.scrollTo(0,0,300)},check:function(t){e()(this.data[t].level)||(this.data[t].level=0),this.data[t].level=parseInt(this.data[t].level),this.data[t].level<0&&(this.data[t].level=0),this.data[t].level>15&&(this.data[t].level=15),Object(d.j)(this.data)},openLook:function(t){this.data[t].level&&(this.message=this.data[t],this.openMessage=!0)},closeLook:function(){this.openMessage=!1},saveAndLook:function(){this.openResult=!0,Object(d.j)(this.data)},closeResult:function(){this.openResult=!1}},components:{HeadBox:l.a,Adv:c.a,SkinMessage:f,SkinResult:C,Scroll:v.a},watch:{}},p={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"data-skin"},[s("scroll",{ref:"scroll",staticClass:"content"},[s("div",{staticClass:"content-div"},[s("head-box",{staticClass:"head-box",attrs:{data:t.articleData,inApp:this.isApp(this.$route.query.inApp)}}),t._v(" "),s("ul",{staticClass:"content-ul"},t._l(t.data,function(a,i){return s("li",{key:i,staticClass:"content-li"},[s("div",{staticClass:"li-name",class:{bujian:a.isPart}},[t._v("\n              "+t._s(a.isPart?"-"+a.name:a.name)+"\n            ")]),t._v(" "),s("div",{staticClass:"li-level"},[s("strong",[t._v("等级：")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:a.level,expression:"item.level",modifiers:{number:!0}}],staticClass:"edit",attrs:{maxlength:"2",max:"15"},domProps:{value:a.level},on:{blur:[function(a){a.preventDefault(),t.check(i)},function(a){t.$forceUpdate()}],input:function(s){s.target.composing||t.$set(a,"level",t._n(s.target.value))}}})]),t._v(" "),s("div",{staticClass:"li-look",class:{forbid:a.level},on:{click:function(a){t.openLook(i)}}},[t._v("查看")])])})),t._v(" "),t.articleData.title?s("adv",{staticClass:"adv",on:{scrollTop:t.scrollTop}}):t._e(),t._v(" "),0!=t.data.length?s("div",{staticClass:"block"}):t._e()],1)]),t._v(" "),t.openMessage?s("skin-message",{staticClass:"message",attrs:{data:t.message},on:{closeLook:t.closeLook}}):t._e(),t._v(" "),t.openResult?s("skin-result",{staticClass:"result",attrs:{data:t.data},on:{closeResult:t.closeResult}}):t._e(),t._v(" "),0!=t.data.length?s("div",{staticClass:"save",on:{click:function(a){t.saveAndLook()}}},[t._v("总计")]):t._e()],1)])},staticRenderFns:[]};var j=s("VU/8")(P,p,!1,function(t){s("rcab")},"data-v-8910be66",null);a.default=j.exports},k2Ib:function(t,a,s){s("30KW"),t.exports=s("FeBl").Number.isFinite},mOE7:function(t,a){},rcab:function(t,a){}});