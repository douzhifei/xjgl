webpackJsonp([8],{INgv:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=s("Dd8w"),i=s.n(c),l=s("9rMa"),n=s("qwAB"),o={props:{data:{type:Array,default:function(){return[]}}},methods:{selectItem:function(t){this.$emit("select",t)},delCollect:function(t){this.$emit("delCollect",t)}},components:{Scroll:n.a}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-content"},[s("scroll",{staticClass:"search-scroll"},[s("div",{staticClass:"history"},[s("ul",{staticClass:"history-list"},t._l(t.data,function(e,c){return s("li",{key:c,staticClass:"history-item",on:{click:function(s){t.selectItem(e)}}},[s("div",{staticClass:"history-item-left"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"history-item-right",on:{click:function(s){s.stopPropagation(),t.delCollect(e)}}},[s("i",{staticClass:"icon-close"})])])}))])])],1)},staticRenderFns:[]};var r=s("VU/8")(o,a,!1,function(t){s("kDeQ")},"data-v-5277838f",null).exports,d=s("F4+m"),u=s("rq2H"),f={mixins:[d.b],computed:i()({},Object(l.c)(["favoriteList"])),mounted:function(){Object(u.b)("collect")},methods:{delCollect:function(t){this.toggleFavorite(t)}},components:{CollectList:r}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"collect"},[s("div",{staticClass:"collect-head"},[s("i",{staticClass:"back",on:{click:function(e){t.$router.back(-1)}}}),t._v(" "),s("span",{staticClass:"title"},[t._v("我的收藏")])]),t._v(" "),s("collect-list",{attrs:{data:t.favoriteList},on:{select:t.slectItem,delCollect:t.delCollect}})],1)])},staticRenderFns:[]};var m=s("VU/8")(f,v,!1,function(t){s("Y4Do")},"data-v-06d4a5f4",null);e.default=m.exports},Y4Do:function(t,e){},kDeQ:function(t,e){}});