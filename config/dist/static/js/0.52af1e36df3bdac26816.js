webpackJsonp([0],{R0uM:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("GQaK"),o={name:"Scroller",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},listenScroll:{type:Boolean,default:!1},pullup:{type:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},this.refreshDelay)},watch:{data:function(){var t=this;setTimeout(function(){t._initScroll()},this.refreshDelay)}},methods:{_initScroll:function(){var t=this;this.$refs.wrapper&&(this.scroll=new i.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}),this.listenScroll&&this.scroll.on("scroll",function(n){t.$emit("scroll",n)}),this.pullup&&this.scroll.on("scrollEnd",function(){t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")}))},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){this.scroll&&this.scroll.refresh()},stop:function(){this.scroll&&this.scroll.stop()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollBy:function(){this.scroll&&this.scroll.scrollBy.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper"},[this._t("default")],2)},staticRenderFns:[]};var s={components:{Scroller:e("VU/8")(o,l,!1,function(t){e("hCaK")},null,null).exports},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},created:function(){this.touch={},this.listenScroll=!0,this.listHeight=[],this.probeType=3},computed:{Contact_List:function(){return this.$store.getters.ContactList},fixedTitle:function(){return this.scrollY>0?"":this.Contact_List[this.currentIndex]?this.Contact_List[this.currentIndex].title:""}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var n=this.listHeight;if(t>0)this.currentIndex=0;else{for(var e=0;e<n.length-1;e++){var i=n[e],o=n[e+1];if(-t>=i&&-t<o)return this.currentIndex=e,void(this.diff=o+t)}this._calculateHeight(),this.currentIndex=n.length-2}},diff:function(t){var n=t>0&&t<30?t-30:0;this.fixedTop!==n&&(this.fixedTop=n,this.$refs.fixed.style.transform="translate3d(0,"+n+"px,0)")}},methods:{selectItem:function(t){this.$emit("select",t)},_scrollTo:function(t){(t||0==t)&&(t<0?t=0:t>this.listHeight-2&&(t=this.listHeight-2),this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listGroup[t],100))},onShortcutTouchMove:function(t){var n=t.touches[0];this.touch.y2=n.pageY;var e=(this.touch.y2-this.touch.y1)/18|0,i=parseInt(this.touch.anchorIndex)+e;this._scrollTo(i)},onShortcutTouchStart:function(t){var n=this.getData(t.target,"index"),e=t.touches[0];this.touch.y1=e.pageY,this.touch.anchorIndex=n,console.log(this.touch),this._scrollTo(n)},getData:function(t,n,e){return n="data-"+n,e?t.serAttribute(n,e):t.getAttribute(n)},refresh:function(){this.$refs.listview.refresh()},scroll:function(t){this.scrollY=t.y},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,n=0;this.listHeight.push(n);for(var e=0;e<t.length;e++){n+=t[e].clientHeight,this.listHeight.push(n)}}}},r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Scroller",{ref:"listview",attrs:{data:t.Contact_List,listenScroll:t.listenScroll,probeType:t.probeType,id:"listview"},on:{scroll:t.scroll}},[e("div",t._l(t.Contact_List,function(n,i){return e("dl",{key:i,ref:"listGroup",refInFor:!0},[e("dt",[t._v(t._s(n.title))]),t._v(" "),t._l(n.list,function(n,i){return e("dd",{key:i},[t._v("\n                "+t._s(n.username)+"\n            ")])})],2)}),0),t._v(" "),e("div",{staticClass:"list-shortcut",on:{touchstart:t.onShortcutTouchStart,touchmove:function(n){return n.stopPropagation(),n.preventDefault(),t.onShortcutTouchMove(n)}}},[e("ul",t._l(t.Contact_List,function(n,i){return e("li",{key:i,staticClass:"item",class:{active:t.currentIndex===i},attrs:{"data-index":i}},[t._v(t._s(n.title))])}),0)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[e("h1",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])])])},staticRenderFns:[]};var c=e("VU/8")(s,r,!1,function(t){e("j8/G")},null,null);n.default=c.exports},hCaK:function(t,n,e){var i=e("mYVX");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("4e287e18",i,!0,{})},"j8/G":function(t,n,e){var i=e("zIqj");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("470121e0",i,!0,{})},mYVX:function(t,n,e){(t.exports=e("FZ+f")(!0)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"Scroller.vue",sourceRoot:""}])},zIqj:function(t,n,e){(t.exports=e("FZ+f")(!0)).push([t.i,"\n#listview {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(7,17,27,0.8);\n  top: 0;\n}\n#listview dt {\n  height: 25px;\n  line-height: 25px;\n  text-align: left;\n  text-indent: 20px;\n  background-color: #ddd;\n  opacity: 0.8;\n}\n#listview dd {\n  height: 40px;\n  line-height: 40px;\n  color: #fff;\n}\n#listview .list-shortcut {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 20px;\n  z-index: 10;\n  background-color: #ddd;\n  -webkit-transform: translate(0, 50%);\n          transform: translate(0, 50%);\n}\n#listview .list-shortcut li {\n  height: 15px;\n  line-height: 15px;\n}\n#listview .list-shortcut li.active {\n  color: #800080;\n  font-weight: bolder;\n}\n#listview .list-fixed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 25px;\n  line-height: 25px;\n  background-color: #ffa500;\n  color: #fff;\n}","",{version:3,sources:["E:/doc/Vue_Mobile/src/view/Contact.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,oCAAoC;EACpC,OAAO;CACR;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;CACd;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,SAAS;EACT,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,qCAAqC;UAC7B,6BAA6B;CACtC;AACD;EACE,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,0BAA0B;EAC1B,YAAY;CACb",file:"Contact.vue",sourcesContent:["\n#listview {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(7,17,27,0.8);\n  top: 0;\n}\n#listview dt {\n  height: 25px;\n  line-height: 25px;\n  text-align: left;\n  text-indent: 20px;\n  background-color: #ddd;\n  opacity: 0.8;\n}\n#listview dd {\n  height: 40px;\n  line-height: 40px;\n  color: #fff;\n}\n#listview .list-shortcut {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 20px;\n  z-index: 10;\n  background-color: #ddd;\n  -webkit-transform: translate(0, 50%);\n          transform: translate(0, 50%);\n}\n#listview .list-shortcut li {\n  height: 15px;\n  line-height: 15px;\n}\n#listview .list-shortcut li.active {\n  color: #800080;\n  font-weight: bolder;\n}\n#listview .list-fixed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 25px;\n  line-height: 25px;\n  background-color: #ffa500;\n  color: #fff;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=0.52af1e36df3bdac26816.js.map