webpackJsonp([9],{"2wta":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("sODj"),n=e("qwAB"),a=e("y/jF"),o=e("6ROu"),l=e.n(o),r=e("viA7"),c={mixins:[e("F4+m").b],data:function(){return{skip:0,listType:2,limit:10,nodata:!1,isFinish:!0,isloading:!1,hideLoading:0,listViewShow:!1,listData:[]}},created:function(){this.listenScroll=!1,this.pullup=!0,this.isBeforeScroll=!0,this._initData()},methods:{scrollToEnd:function(){if(!this.nodata&&this.isFinish)return this.isFinish=!1,void(this.skip+=3);this.hideLoading+=1},setNodata:function(){this.nodata=!0},finishLoad:function(){this.isFinish=!0,this.refresh()},beforeScrollLoading:function(){this.listData.length<this.limit||(this.isloading=!this.isloading)},refresh:function(){this.$refs.headlineScroll.refresh()},_initData:function(){var i=this,t={type:this.listType,limit:this.limit,skip:this.skip};Object(r.e)(t).then(function(t){var e=[];t.forEach(function(i){var t={};t._id=i._id,t.cover=i.cover,t.title=i.title,t.type=i.type,t.goto=i.goto,t.create_time=l()(i.create_time).format("YYYY-MM-DD"),e.push(t)}),i.listData=e,setTimeout(function(){i.refresh()},40)})}},components:{Listview:s.a,Scroll:n.a,Loading:a.a}},d={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"raiders"},[e("scroll",{ref:"headlineScroll",staticClass:"headline-content",attrs:{listenScroll:i.listenScroll,beforeScroll:i.isBeforeScroll,pullup:i.pullup},on:{scrollToEnd:i.scrollToEnd,beforeScroll:i.beforeScrollLoading}},[e("div",[0!=i.listData.length?e("listview",{attrs:{listType:i.listType,hideLoading:i.hideLoading,skip:i.skip,isloading:i.isloading,initData:i.listData},on:{select:i.slectItem,nodata:i.setNodata,finishLoad:i.finishLoad}}):i._e()],1)]),i._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!i.listData.length,expression:"!listData.length"}],staticClass:"loading-container"},[e("loading")],1)],1)},staticRenderFns:[]};var h=e("VU/8")(c,d,!1,function(i){e("WLUx")},"data-v-dc150bce",null);t.default=h.exports},WLUx:function(i,t){}});