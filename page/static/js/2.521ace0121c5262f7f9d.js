webpackJsonp([2],{"/EfR":function(t,a,i){"use strict";a.a=function(t){return h.a.post("/api/skin",t).then(function(t){return e.a.resolve(t.data)})},a.d=function(t){return h.a.put("/api/skin",t).then(function(t){return e.a.resolve(t.data)})},a.e=function(t){h.a.post("/api/skinMore",t)},a.b=function(t){return h.a.delete("/api/skin",{params:t}).then(function(t){return e.a.resolve(t.data)})},a.c=function(){return h.a.get("/skin").then(function(t){return e.a.resolve(t.data)})};var s=i("//Fk"),e=i.n(s),l=i("aozt"),h=i.n(l)},"1sPf":function(t,a){},"30KW":function(t,a,i){var s=i("kM2E"),e=i("7KvD").isFinite;s(s.S,"Number",{isFinite:function(t){return"number"==typeof t&&e(t)}})},AMV0:function(t,a,i){t.exports={default:i("k2Ib"),__esModule:!0}},MGQK:function(t,a){},MwuU:function(t,a){},OZJ6:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("AMV0"),e=i.n(s),l=i("JBuz"),h=i("qwAB"),v=i("F4+m"),r=i("rq2H"),n=i("/EfR"),d=i("Kf/3"),o=i("yOI4"),u={props:{data:{type:Object,default:function(){return{}}}},computed:{computeTili:function(){if(this.data.tl)return this.data.hasPart?2500*this.data.level:this.data.isPart?350*this.data.level+(this.data.level>=3?375:0)+(this.data.level>=10?750:0)+(this.data.level>=15?1125:0):this.data.hasPart||this.data.isPart?void 0:2e3*this.data.level},computeGongji:function(){if(this.data.gj)return this.data.hasPart?Math.floor(2500/3*this.data.level):this.data.isPart?233*this.data.level+(this.data.level>=3?250:0)+(this.data.level>=10?500:0)+(this.data.level>=15?750:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(2e3/3*this.data.level)},computeLingli:function(){if(this.data.ll)return this.data.hasPart?Math.floor(555.5*this.data.level):this.data.isPart?155*this.data.level+(this.data.level>=3?500/3:0)+(this.data.level>=10?1e3/3:0)+(this.data.level>=15?500:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(444.4*this.data.level)},computeFangyu:function(){if(this.data.fy)return this.data.hasPart?Math.floor(555.5*this.data.level):this.data.isPart?155*this.data.level+(this.data.level>=3?500/3:0)+(this.data.level>=10?1e3/3:0)+(this.data.level>=15?500:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(444.4*this.data.level)},computeBaoji:function(){if(this.data.bj)return this.data.hasPart?Math.floor(25/3*this.data.level):this.data.isPart?3*this.data.level+(this.data.level>=6?4:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(20/3*this.data.level)},computeFabao:function(){if(this.data.fb)return this.data.hasPart?Math.floor(25/3*this.data.level):this.data.isPart?3*this.data.level+(this.data.level>=6?4:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(20/3*this.data.level)},computeShangbi:function(){if(this.data.sb)return this.data.hasPart?Math.floor(25/3*this.data.level):this.data.isPart?3*this.data.level+(this.data.level>=6?4:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(20/3*this.data.level)},computeHuajie:function(){if(this.data.hj)return this.data.hasPart?Math.floor(50/3*this.data.level):this.data.isPart?3*this.data.level+(this.data.level>=6?4:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(40/3*this.data.level)},computeFangji:function(){if(this.data.fj)return this.data.hasPart?Math.floor(25/3*this.data.level):this.data.isPart?3*this.data.level+(this.data.level>=6?4:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(20/3*this.data.level)},computeBJJS:function(){if(this.data.bjjs)return this.data.hasPart?Math.floor(2500*this.data.level):this.data.isPart?360*this.data.level:this.data.hasPart||this.data.isPart?void 0:Math.floor(2e3*this.data.level)},computeFBJJ:function(){if(this.data.fbjs)return this.data.hasPart?Math.floor(2500*this.data.level):this.data.isPart?450*this.data.level+(this.data.level>2?600:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(2e3*this.data.level)},computeSBHX:function(){if(this.data.sbhx)return this.data.hasPart?Math.floor(5e3/3*this.data.level):this.data.isPart?300*this.data.level+(this.data.level>5?400:0):this.data.hasPart||this.data.isPart?void 0:Math.floor(4e3/3*this.data.level)},computeHJHX:function(){if(this.data.hjhx)return this.data.hasPart?Math.floor(2e3*this.data.level):this.data.isPart?360*this.data.level:this.data.hasPart||this.data.isPart?void 0:Math.floor(1600*this.data.level)},computeFJJS:function(){if(this.data.fjjs)return this.data.hasPart?Math.floor(2e3*this.data.level):this.data.isPart?360*this.data.level:this.data.hasPart||this.data.isPart?void 0:Math.floor(1600*this.data.level)},computeWCS:function(){if(this.data.isPart){for(var t=0,a=1;a<this.data.level+1;a++)t+=a<7?20*(a-1):100;return t}for(var i=0,s=1;s<this.data.level+1;s++)i+=s<12?50*(s-1):500;return i},computeYS:function(){if(this.data.isPart){for(var t=0,a=1;a<this.data.level+1;a++)t+=a<8?2*(a-1):15;return t}for(var i=0,s=1;s<this.data.level+1;s++)i+=1===s?0:2===s?10:3===s?15:s>3&&s<7?30:35;return i},computeBJ:function(){if(this.data.isPart){for(var t=0,a=1;a<this.data.level+1;a++)t+=a<4?1:4===a?2:5===a?3:5;return t}}},created:function(){},methods:{quit:function(){this.$emit("closeLook")}}},c={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("transition",{attrs:{name:"bounce"}},[i("div",{staticClass:"message",on:{touchmove:function(t){t.preventDefault()}}},[i("div",{staticClass:"block",on:{click:t.quit}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"item item-title"},[t._v(t._s(t.data.name+"+"+t.data.level))]),t._v(" "),t.data.tl?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("体：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeTili))])]):t._e(),t._v(" "),t.data.gj?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("攻：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeGongji))])]):t._e(),t._v(" "),t.data.ll?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("灵：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeLingli))])]):t._e(),t._v(" "),t.data.fy?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("防：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeFangyu))])]):t._e(),t._v(" "),t.data.bj?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("暴击：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeBaoji))])]):t._e(),t._v(" "),t.data.fb?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("法爆：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeFabao))])]):t._e(),t._v(" "),t.data.sb?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("闪避：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeShangbi))])]):t._e(),t._v(" "),t.data.hj?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("化解：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeHuajie))])]):t._e(),t._v(" "),t.data.fj?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("反击：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeFangji))])]):t._e(),t._v(" "),t.data.bjjs?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("暴击加伤：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeBJJS))])]):t._e(),t._v(" "),t.data.fbjs?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("法爆加伤：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeFBJJ))])]):t._e(),t._v(" "),t.data.sbhx?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("闪避回血：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeSBHX))])]):t._e(),t._v(" "),t.data.hjhx?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("化解回血：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeHJHX))])]):t._e(),t._v(" "),t.data.fjjs?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("反击加伤：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeFJJS))])]):t._e(),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("五彩石：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeWCS))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("元神：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeYS))])]),t._v(" "),t.data.isPart?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("部件消耗：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeBJ))])]):t._e(),t._v(" "),t.data.jn?i("div",{staticClass:"item item-jn"},[t._v(t._s(t.data.jn))]):t._e()])])])},staticRenderFns:[]};var f=i("VU/8")(u,c,!1,function(t){i("MGQK")},"data-v-61505374",null).exports,m={props:{data:{type:Object,default:function(){return{}}},list:{type:Array,default:function(){return[]}}},data:function(){return{options:[],dh1:"",dh2:{},dianhua:[{sort:0,level:0},{sort:0,level:0}]}},computed:{computeTili1:function(){var t=this.data.dianhua[0].level>30?30:this.data.dianhua[0].level;if(this.dh1.tl)return this.dh1.hasPart?2500*Math.ceil(t/2)*3:this.dh1.hasPart?void 0:2e3*Math.ceil(t/2)*3},computeGongji1:function(){var t=this.data.dianhua[0].level>30?30:this.data.dianhua[0].level;if(this.dh1.gj)return this.dh1.hasPart?Math.floor(2500*Math.ceil(t/2)):this.dh1.hasPart?void 0:Math.floor(2e3*Math.ceil(t/2))},computeLingli1:function(){var t=this.data.dianhua[0].level>30?30:this.data.dianhua[0].level;if(this.dh1.ll)return this.dh1.hasPart?Math.floor(555.5*Math.ceil(t/2)*3):this.dh1.hasPart?void 0:Math.floor(444.4*Math.ceil(t/2)*3)},computeFangyu1:function(){var t=this.data.dianhua[0].level>30?30:this.data.dianhua[0].level;if(this.dh1.fy)return this.dh1.hasPart?Math.floor(555.5*Math.ceil(t/2)*3):this.dh1.hasPart?void 0:Math.floor(444.4*Math.ceil(t/2)*3)},computeWCS1:function(){var t=0,a=this.data.dianhua[0].level;if(0==a)return 0;for(var i=1;i<a+1;i++)i<4?t+=50:i<7?t+=75:i<10?t+=100:i<13?t+=150:i<16?t+=200:i<19?t+=300:i<22?t+=400:i<25?t+=500:i<28?t+=600:i<31&&(t+=800);return t},computeYS1:function(){var t=0,a=this.data.dianhua[0].level>30?30:this.data.dianhua[0].level;if(0==a)return 0;for(var i=1;i<a+1;i++)t+=6*i;return t},computeBJ1:function(){var t=0,a=this.data.dianhua[0].level>30?30:this.data.dianhua[0].level;if(0==a)return 0;for(var i=1;i<a+1;i++)t+=3*Math.ceil(i/3);return t},computeTili2:function(){var t=this.data.dianhua[1].level>30?30:this.data.dianhua[1].level;if(this.dh2.tl)return this.dh2.hasPart?2500*Math.ceil(t/2)*3:this.dh2.hasPart?void 0:2e3*Math.ceil(t/2)*3},computeGongji2:function(){var t=this.data.dianhua[1].level>30?30:this.data.dianhua[1].level;if(this.dh2.gj)return this.dh2.hasPart?Math.floor(2500*Math.ceil(t/2)):this.dh2.hasPart?void 0:Math.floor(2e3*Math.ceil(t/2))},computeLingli2:function(){var t=this.data.dianhua[1].level>30?30:this.data.dianhua[1].level;if(this.dh2.ll)return this.dh2.hasPart?Math.floor(555.5*Math.ceil(t/2)*3):this.dh2.hasPart?void 0:Math.floor(444.4*Math.ceil(t/2)*3)},computeFangyu2:function(){var t=this.data.dianhua[1].level>30?30:this.data.dianhua[1].level;if(this.dh2.fy)return this.dh2.hasPart?Math.floor(555.5*Math.ceil(t/2)*3):this.dh2.hasPart?void 0:Math.floor(444.4*Math.ceil(t/2)*3)},computeWCS2:function(){var t=0,a=this.data.dianhua[1].level;if(0==a)return 0;for(var i=1;i<a+1;i++)i<4?t+=50:i<7?t+=75:i<10?t+=100:i<13?t+=150:i<16?t+=200:i<19?t+=300:i<22?t+=400:i<25?t+=500:i<28?t+=600:i<31&&(t+=800);return t},computeYS2:function(){var t=0,a=this.data.dianhua[1].level>30?30:this.data.dianhua[1].level;if(0==a)return 0;for(var i=1;i<a+1;i++)t+=6*i;return t},computeBJ2:function(){var t=0,a=this.data.dianhua[1].level>30?30:this.data.dianhua[1].level;if(0==a)return 0;for(var i=1;i<a+1;i++)t+=3*Math.ceil(i/3);return t}},created:function(){for(var t=0;t<this.list.length;t++)this.list[t].dhtime<2&&this.options.push(this.list[t]);for(var a=0;a<this.options.length;a++)this.options[a].sort===this.data.dianhua[0].sort&&(this.dh1=this.options[a]),this.options[a].sort===this.data.dianhua[1].sort&&(this.dh2=this.options[a])},methods:{quit:function(){this.$emit("closeDianhua")},changeSkin:function(t){this.data.dianhua[0].sort=this.dh1.sort,this.data.dianhua[1].sort=this.dh2.sort,0==t&&(this.data.dianhua[0].level=1),1==t&&(this.data.dianhua[1].level=1),this.$emit("saveDianhua",this.data)},check:function(t){0===t&&(e()(this.data.dianhua[0].level)||(this.data.dianhua[0].level=1),this.data.dianhua[0].level=parseInt(this.data.dianhua[0].level),this.data.dianhua[0].level<1&&(this.data.dianhua[0].level=1),this.data.dianhua[0].level>30&&(this.data.dianhua[0].level=30),this.data.dianhua[0].level>2*this.dh1.level&&(this.data.dianhua[0].level=2*this.dh1.level)),1===t&&(e()(this.data.dianhua[1].level)||(this.data.dianhua[1].level=1),this.data.dianhua[1].level=parseInt(this.data.dianhua[1].level),this.data.dianhua[1].level<1&&(this.data.dianhua[1].level=1),this.data.dianhua[1].level>30&&(this.data.dianhua[1].level=30),this.data.dianhua[1].level>2*this.dh2.level&&(this.data.dianhua[1].level=2*this.dh2.level)),this.$emit("saveDianhua",this.data)}}},_={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("transition",{attrs:{name:"bounce"}},[i("div",{staticClass:"dianhua",on:{touchmove:function(t){t.preventDefault()}}},[i("div",{staticClass:"block",on:{click:t.quit}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"figure"},[0!=t.options.length?i("el-select",{staticClass:"select",attrs:{placeholder:"请选择",size:"small"},on:{change:function(a){t.changeSkin(0)}},model:{value:t.dh1,callback:function(a){t.dh1=a},expression:"dh1"}},t._l(t.options,function(t){return i("el-option",{key:t.value,attrs:{label:t.name,value:t}})})):t._e(),t._v(" "),i("strong",{staticStyle:{"margin-left":"10px"}},[t._v("等级：")]),t.dh1.sort?i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.data.dianhua[0].level,expression:"data.dianhua[0].level",modifiers:{number:!0}}],staticClass:"edit",attrs:{maxlength:"3",max:"30",min:"1",type:"number"},domProps:{value:t.data.dianhua[0].level},on:{blur:[function(a){a.preventDefault(),t.check(0)},function(a){t.$forceUpdate()}],input:function(a){a.target.composing||t.$set(t.data.dianhua[0],"level",t._n(a.target.value))}}}):t._e(),t._v(" "),i("div",{staticClass:"jineng"},[t._v(t._s(t.dh1.jn))]),t._v(" "),t.data.dianhua[0].level?i("div",{staticClass:"data"},[t.dh1.tl?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("体：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeTili1))])]):t._e(),t._v(" "),t.dh1.gj?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("攻：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeGongji1))])]):t._e(),t._v(" "),t.dh1.ll?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("灵：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeLingli1))])]):t._e(),t._v(" "),t.dh1.fy?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("防：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeFangyu1))])]):t._e(),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("五彩石：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeWCS1))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("龙玉：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeWCS1))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v(t._s(t.data.figure)+"：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeYS1))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v(t._s(t.dh1.figure)+"：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeYS1))])]),t._v(" "),t.dh1.hasPart?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("累计部件：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeBJ1)+"套")])]):t._e()]):t._e()],1),t._v(" "),i("div",{staticClass:"figure"},[0!=t.options.length?i("el-select",{staticClass:"select",attrs:{placeholder:"请选择",size:"small"},on:{change:function(a){t.changeSkin(1)}},model:{value:t.dh2,callback:function(a){t.dh2=a},expression:"dh2"}},t._l(t.options,function(t){return i("el-option",{key:t.value,attrs:{label:t.name,value:t}})})):t._e(),t._v(" "),i("strong",{staticStyle:{"margin-left":"10px"}},[t._v("等级：")]),t.dh1.sort?i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.data.dianhua[1].level,expression:"data.dianhua[1].level",modifiers:{number:!0}}],staticClass:"edit",attrs:{maxlength:"3",max:"30",min:"1",type:"number"},domProps:{value:t.data.dianhua[1].level},on:{blur:[function(a){a.preventDefault(),t.check(1)},function(a){t.$forceUpdate()}],input:function(a){a.target.composing||t.$set(t.data.dianhua[1],"level",t._n(a.target.value))}}}):t._e(),t._v(" "),i("div",{staticClass:"jineng"},[t._v(t._s(t.dh2.jn))]),t._v(" "),t.data.dianhua[1].level?i("div",{staticClass:"data"},[t.dh2.tl?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("体：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeTili2))])]):t._e(),t._v(" "),t.dh2.gj?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("攻：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeGongji2))])]):t._e(),t._v(" "),t.dh2.ll?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("灵：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeLingli2))])]):t._e(),t._v(" "),t.dh2.fy?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("防：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeFangyu2))])]):t._e(),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("五彩石：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeWCS2))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("龙玉：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeWCS2))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v(t._s(t.data.figure)+"：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeYS2))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v(t._s(t.dh2.figure)+"：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeYS2))])]),t._v(" "),t.dh2.hasPart?i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("累计部件：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.computeBJ2)+"套")])]):t._e()]):t._e()],1)])])])},staticRenderFns:[]};var p=i("VU/8")(m,_,!1,function(t){i("MwuU")},"data-v-197534e4",null).exports,C={data:function(){return{result:{tl:0,gj:0,ll:0,fy:0,bj:0,fb:0,sb:0,hj:0,fj:0,bjjs:0,fbjs:0,sbhx:0,hjhx:0,fjjs:0,wcs:0,zl:0,allwcs:0,progress:0,longyu:0}}},props:{data:{type:Array,default:function(){return[]}}},watch:{},mounted:function(){this.computeAll()},methods:{computeTili:function(t){return t.tl?t.hasPart?2500*t.level:t.isPart?350*t.level+(t.level>=3?375:0)+(t.level>=10?750:0)+(t.level>=15?1125:0):t.hasPart||t.isPart?void 0:2e3*t.level:0},computeGongji:function(t){return t.gj?t.hasPart?Math.floor(2500/3*t.level):t.isPart?233*t.level+(t.level>=3?250:0)+(t.level>=10?500:0)+(t.level>=15?750:0):t.hasPart||t.isPart?void 0:Math.floor(2e3/3*t.level):0},computeLingli:function(t){return t.ll?t.hasPart?Math.floor(555.5*t.level):t.isPart?155*t.level+(t.level>=3?500/3:0)+(t.level>=10?1e3/3:0)+(t.level>=15?500:0):t.hasPart||t.isPart?void 0:Math.floor(444.4*t.level):0},computeFangyu:function(t){return t.fy?t.hasPart?Math.floor(555.5*t.level):t.isPart?155*t.level+(t.level>=3?500/3:0)+(t.level>=10?1e3/3:0)+(t.level>=15?500:0):t.hasPart||t.isPart?void 0:Math.floor(444.4*t.level):0},computeBaoji:function(t){return t.bj?t.hasPart?Math.floor(25/3*t.level):t.isPart?3*t.level+(t.level>=6?4:0):t.hasPart||t.isPart?void 0:Math.floor(20/3*t.level):0},computeFabao:function(t){return t.fb?t.hasPart?Math.floor(25/3*t.level):t.isPart?3*t.level+(t.level>=6?4:0):t.hasPart||t.isPart?void 0:Math.floor(20/3*t.level):0},computeShangbi:function(t){return t.sb?t.hasPart?Math.floor(25/3*t.level):t.isPart?3*t.level+(t.level>=6?4:0):t.hasPart||t.isPart?void 0:Math.floor(20/3*t.level):0},computeHuajie:function(t){return t.hj?t.hasPart?Math.floor(50/3*t.level):t.isPart?3*t.level+(t.level>=6?4:0):t.hasPart||t.isPart?void 0:Math.floor(40/3*t.level):0},computeFangji:function(t){return t.fj?t.hasPart?Math.floor(25/3*t.level):t.isPart?3*t.level+(t.level>=6?4:0):t.hasPart||t.isPart?void 0:Math.floor(20/3*t.level):0},computeBJJS:function(t){return t.bjjs?t.hasPart?Math.floor(2500*t.level):t.isPart?360*t.level:t.hasPart||t.isPart?void 0:Math.floor(2e3*t.level):0},computeFBJJ:function(t){return t.fbjs?t.hasPart?Math.floor(2500*t.level):t.isPart?450*t.level+(t.level>2?600:0):t.hasPart||t.isPart?void 0:Math.floor(2e3*t.level):0},computeSBHX:function(t){return t.sbhx?t.hasPart?Math.floor(5e3/3*t.level):t.isPart?300*t.level+(t.level>5?400:0):t.hasPart||t.isPart?void 0:Math.floor(4e3/3*t.level):0},computeHJHX:function(t){return t.hjhx?t.hasPart?Math.floor(2e3*t.level):t.isPart?360*t.level:t.hasPart||t.isPart?void 0:Math.floor(1600*t.level):0},computeFJJS:function(t){return t.fjjs?t.hasPart?Math.floor(2e3*t.level):t.isPart?360*t.level:t.hasPart||t.isPart?void 0:Math.floor(1600*t.level):0},computeWCS:function(t){if(t.isPart){for(var a=0,i=1;i<t.level+1;i++)a+=i<7?20*(i-1):100;return a}for(var s=0,e=1;e<t.level+1;e++)s+=e<12?50*(e-1):500;return s},computeAllWCS:function(t){if(t.isPart){for(var a=0,i=1;i<16;i++)a+=i<7?20*(i-1):100;return a}for(var s=0,e=1;e<16;e++)s+=e<12?50*(e-1):500;return s},computeLongyu:function(t){if(t.isPart)return 0;for(var a=0,i=t.dianhua[0].level,s=t.dianhua[1].level,e=1;e<i+1;e++)e<4?a+=50:e<7?a+=75:e<10?a+=100:e<13?a+=150:e<16?a+=200:e<19?a+=300:e<22?a+=400:e<25?a+=500:e<28?a+=600:e<31&&(a+=800);for(var l=1;l<s+1;l++)l<4?a+=50:l<7?a+=75:l<10?a+=100:l<13?a+=150:l<16?a+=200:l<19?a+=300:l<22?a+=400:l<25?a+=500:l<28?a+=600:l<31&&(a+=800);return a},computeYS:function(t){if(t.isPart){for(var a=0,i=1;i<t.level+1;i++)a+=i<8?2*(i-1):15;return a}for(var s=0,e=1;e<t.level+1;e++)s+=1===e?0:2===e?10:3===e?15:e>3&&e<7?30:35;return s},computeBJ:function(t){if(t.isPart){for(var a=0,i=1;i<t.level+1;i++)a+=i<4?1:4===i?2:5===i?3:5;return a}},computeTili1:function(t){if(!t.tl)return 0;if(!t.battle)return 0;var a=t.dianhua[0].level>30?30:t.dianhua[0].level;return t.hasPart?2500*Math.ceil(a/2)*3:t.hasPart||t.isPart?void 0:2e3*Math.ceil(a/2)*3},computeGongji1:function(t){if(!t.gj)return 0;if(!t.battle)return 0;var a=t.dianhua[0].level>30?30:t.dianhua[0].level;return t.hasPart?Math.floor(2500*Math.ceil(a/2)):t.hasPart||t.isPart?void 0:Math.floor(2e3*Math.ceil(a/2))},computeLingli1:function(t){if(!t.ll)return 0;if(!t.battle)return 0;var a=t.dianhua[0].level>30?30:t.dianhua[0].level;return t.hasPart?Math.floor(555.5*Math.ceil(a/2)*3):t.hasPart||t.isPart?void 0:Math.floor(444.4*Math.ceil(a/2)*3)},computeFangyu1:function(t){if(!t.fy)return 0;if(!t.battle)return 0;var a=t.dianhua[0].level>30?30:t.dianhua[0].level;return t.hasPart?Math.floor(555.5*Math.ceil(a/2)*3):t.hasPart||t.isPart?void 0:Math.floor(444.4*Math.ceil(a/2)*3)},computeTili2:function(t){if(!t.tl)return 0;if(!t.battle)return 0;var a=t.dianhua[1].level>30?30:t.dianhua[1].level;return t.hasPart?2500*Math.ceil(a/2)*3:t.hasPart||t.isPart?void 0:2e3*Math.ceil(a/2)*3},computeGongji2:function(t){if(!t.gj)return 0;if(!t.battle)return 0;var a=t.dianhua[1].level>30?30:t.dianhua[1].level;return t.hasPart?Math.floor(2500*Math.ceil(a/2)):t.hasPart||t.isPart?void 0:Math.floor(2e3*Math.ceil(a/2))},computeLingli2:function(t){if(!t.ll)return 0;if(!t.battle)return 0;var a=t.dianhua[1].level>30?30:t.dianhua[1].level;return t.hasPart?Math.floor(555.5*Math.ceil(a/2)*3):t.hasPart||t.isPart?void 0:Math.floor(444.4*Math.ceil(a/2)*3)},computeFangyu2:function(t){if(!t.fy)return 0;if(!t.battle)return 0;var a=t.dianhua[1].level>30?30:t.dianhua[1].level;return t.hasPart?Math.floor(555.5*Math.ceil(a/2)*3):t.hasPart||t.isPart?void 0:Math.floor(444.4*Math.ceil(a/2)*3)},quit:function(){this.$emit("closeResult")},computeAll:function(){for(var t=0;t<this.data.length;t++)this.result.tl+=this.computeTili(this.data[t]),this.result.gj+=this.computeGongji(this.data[t]),this.result.ll+=this.computeLingli(this.data[t]),this.result.fy+=this.computeFangyu(this.data[t]),this.result.bj+=this.computeBaoji(this.data[t]),this.result.fb+=this.computeFabao(this.data[t]),this.result.sb+=this.computeShangbi(this.data[t]),this.result.hj+=this.computeHuajie(this.data[t]),this.result.fj+=this.computeFangji(this.data[t]),this.result.bjjs+=this.computeBJJS(this.data[t]),this.result.fbjs+=this.computeFBJJ(this.data[t]),this.result.sbhx+=this.computeSBHX(this.data[t]),this.result.hjhx+=this.computeHJHX(this.data[t]),this.result.fjjs+=this.computeFJJS(this.data[t]),this.result.wcs+=this.computeWCS(this.data[t]),this.result.allwcs+=this.computeAllWCS(this.data[t]),this.result.longyu+=this.computeLongyu(this.data[t]);this.result.zl=7.65*(this.result.tl/8+this.result.gj)+this.result.ll/2*5.9+5.9*this.result.fy,this.result.zl=Math.floor(this.result.zl),this.result.progress=(this.result.wcs/this.result.allwcs*100).toFixed(2)}}},g={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("transition",{attrs:{name:"slide"}},[i("div",{staticClass:"message",on:{touchmove:function(t){t.preventDefault()}}},[i("div",{staticClass:"block",on:{click:t.quit}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"item item-title"},[t._v("合计")]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("体：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.tl))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("攻：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.gj))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("灵：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.ll))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("防：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.fy))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("暴击：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.bj))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("法爆：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.fb))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("闪避：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.sb))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("化解：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.hj))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("反击：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.fj))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("暴击加伤：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.bjjs))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("法爆加伤：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.fbjs))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("闪避回血：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.sbhx))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("化解回血：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.hjhx))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("反击加伤：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.fjjs))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("进阶石头：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.wcs))])]),t._v(" "),i("div",{staticClass:"item item-zl"},[i("div",{staticClass:"item-left"},[t._v("进度：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.progress)+"%")])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("累计石头：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.wcs+t.result.longyu))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("龙玉：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.longyu))])]),t._v(" "),i("div",{staticClass:"item item-zl"},[i("div",{staticClass:"item-left"},[t._v("提高战力：")]),t._v(" "),i("div",{staticClass:"item-right"},[t._v(t._s(t.result.zl))])])])])])},staticRenderFns:[]};var P=i("VU/8")(C,g,!1,function(t){i("1sPf")},"data-v-023c6a38",null).exports,M={mixins:[v.b],data:function(){return{data:[],articleData:{},openMessage:!1,openDianhua:!1,openResult:!1,message:{},dhlist:[]}},created:function(){var t=this;this.articleData.title="云裳计算器",this.articleData.goto="skin",this.$route.query.inApp&&this.getArticleData().then(function(a){t.articleData=a}),this._getSkins()},mounted:function(){Object(r.b)("skin")},methods:{_getSkins:function(){var t=this,a=Object(d.f)();Object(n.c)().then(function(i){if(void 0!==a)for(var s=a.length>i.length?i.length:a.length,e=0;e<s;e++)i[e].level=a[e].level,void 0===a[e].dianhua||a[e].dianhua||(i[e].dianhua=a[e].dianhua);t.data=i,setTimeout(function(){t.$refs.scroll.refresh()},300)})},scrollTop:function(){this.$refs.scroll.scrollTo(0,0,300)},check:function(t){e()(this.data[t].level)||(this.data[t].level=0,this.data[t].dianhua=[{level:0,sort:0},{level:0,sort:0}],this.data[t].battle=!1),this.data[t].level=parseInt(this.data[t].level),this.data[t].level<=0&&(this.data[t].level=0,this.data[t].dianhua=[{level:0,sort:0},{level:0,sort:0}],this.data[t].battle=!1),this.data[t].level>15&&(this.data[t].level=15),Object(d.j)(this.data)},battle:function(){Object(d.j)(this.data)},saveDianhua:function(t){for(var a=0;a<this.data.length;a++)t.sort===this.data[a].sort&&(this.data[a]=t);Object(d.j)(this.data)},openLook:function(t){this.data[t].level&&(this.message=this.data[t],this.openMessage=!0)},dianhua:function(t){if(this.data[t].level){this.message=this.data[t];for(var a=[],i=0;i<this.data.length;i++)if(!this.data[i].isPart&&this.data[i].property!==this.message.property&&this.data[i].level>0){var s={};s.sort=this.data[i].sort,s.name=this.data[i].name,s.figure=this.data[i].figure,s.tl=this.data[i].tl,s.gj=this.data[i].gj,s.ll=this.data[i].ll,s.fy=this.data[i].fy,s.value=this.data[i].name,s.dhtime=this.data[i].dhtime,s.level=this.data[i].level,s.jn=this.data[i].jn,s.hasPart=this.data[i].hasPart,a.push(s)}this.dhlist=a,0!==this.dhlist.length&&(this.openDianhua=!0)}},closeLook:function(){this.openMessage=!1},closeDianhua:function(){this.openDianhua=!1},saveAndLook:function(){this.openResult=!0,Object(d.j)(this.data)},closeResult:function(){this.openResult=!1}},components:{HeadBox:l.a,Adv:o.a,SkinMessage:f,SkinDianhua:p,SkinResult:P,Scroll:h.a},watch:{}},j={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("transition",{attrs:{name:"slide"}},[i("div",{staticClass:"data-skin"},[i("scroll",{ref:"scroll",staticClass:"content"},[i("div",{staticClass:"content-div"},[i("head-box",{staticClass:"head-box",attrs:{data:t.articleData,inApp:this.isApp(this.$route.query.inApp)}}),t._v(" "),i("ul",{staticClass:"content-ul"},[i("div",{staticClass:"content-li"},[i("div",{staticClass:"content-li content-li-title"},[i("div",{staticClass:"li-name"},[t._v("云裳名称")]),t._v(" "),i("div",{staticClass:"li-level"},[t._v("等级")]),t._v(" "),i("div",{staticClass:"li-operate-title"},[t._v("数据查看")])])]),t._v(" "),t._l(t.data,function(a,s){return i("li",{key:s,staticClass:"content-li"},[i("div",{staticClass:"li-name",class:{bujian:a.isPart}},[t._v("\n              "+t._s(a.isPart?"-"+a.name:a.name)+"\n            ")]),t._v(" "),i("div",{staticClass:"li-level"},[i("strong",[t._v("等级：")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:a.level,expression:"item.level",modifiers:{number:!0}}],staticClass:"edit",attrs:{maxlength:"3",max:"15",min:"0",type:"number"},domProps:{value:a.level},on:{blur:[function(a){a.preventDefault(),t.check(s)},function(a){t.$forceUpdate()}],input:function(i){i.target.composing||t.$set(a,"level",t._n(i.target.value))}}})]),t._v(" "),i("div",{staticClass:"li-operate"},[t._e(),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!a.isPart,expression:"!item.isPart"}],staticClass:"li-look",class:{forbid:a.level},on:{click:function(a){t.dianhua(s)}}},[t._v("点化")]),t._v(" "),i("div",{staticClass:"li-look",class:{forbid:a.level},on:{click:function(a){t.openLook(s)}}},[t._v("查看")])],1)])})],2),t._v(" "),t.articleData.title?i("adv",{staticClass:"adv",on:{scrollTop:t.scrollTop}}):t._e(),t._v(" "),0!=t.data.length?i("div",{staticClass:"block"}):t._e()],1)]),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.openMessage?i("div",{staticClass:"mask"}):t._e()]),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.openDianhua?i("div",{staticClass:"mask"}):t._e()]),t._v(" "),t.openMessage?i("skin-message",{staticClass:"message",attrs:{data:t.message},on:{closeLook:t.closeLook}}):t._e(),t._v(" "),t.openDianhua?i("skin-dianhua",{staticClass:"message",attrs:{data:t.message,list:t.dhlist},on:{closeDianhua:t.closeDianhua,saveDianhua:t.saveDianhua}}):t._e(),t._v(" "),t.openResult?i("skin-result",{staticClass:"result",attrs:{data:t.data},on:{closeResult:t.closeResult}}):t._e(),t._v(" "),0!=t.data.length?i("div",{staticClass:"save",on:{click:function(a){t.saveAndLook()}}},[t._v("合计")]):t._e()],1)])},staticRenderFns:[]};var b=i("VU/8")(M,j,!1,function(t){i("YYnB")},"data-v-2e5766c9",null);a.default=b.exports},YYnB:function(t,a){},k2Ib:function(t,a,i){i("30KW"),t.exports=i("FeBl").Number.isFinite}});