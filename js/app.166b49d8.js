(function(){"use strict";var t={5557:function(t,e,a){var r=a(7195),n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{id:"app"}},[null!==t.pages&&null!==t.characters&&null!==t.currentPage?e("div",[e("router-view",{staticClass:"app__characters-feed",attrs:{characters:t.characters}}),e("Paginator",{attrs:{totalCount:t.pages.length,currentPage:t.currentPage,pages:t.pages,pagesMiddleRange:t.currentPage>2&&t.pages.length-t.currentPage>2?t.pages.slice(t.pages.indexOf(t.currentPage)-1,t.pages.indexOf(t.currentPage)+2):t.pages.length-t.currentPage<=2?t.pages.slice(t.pages.length-4,t.pages.length-1):t.pages.slice(1,4),setPage:t.setPage}})],1):e("div",[e("Loader")],1)])},s=[],i=(a(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"paginator-footer"},[t.totalCount>5?e("div",{staticClass:"paginator-container"},[e("button",{staticClass:"paginator__btn",class:{"paginator__current-page":1===t.currentPage},on:{click:function(e){return e.preventDefault(),(()=>t.setPage(1)).apply(null,arguments)}}},[t._v(" "+t._s(1)+" ")]),t.currentPage>3?e("span",{staticClass:"paginator__ellipsis"},[t._v(" ... ")]):t._e(),t._l(t.pagesMiddleRange,(function(a){return e("button",{key:a,staticClass:"paginator__btn",class:{"paginator__current-page":t.currentPage===a},on:{click:function(e){return e.preventDefault(),(()=>t.setPage(a)).apply(null,arguments)}}},[t._v(" "+t._s(a)+" ")])})),t.totalCount-t.currentPage>2?e("span",{staticClass:"paginator__ellipsis"},[t._v(" ... ")]):t._e(),e("button",{staticClass:"paginator__btn",class:{"paginator__current-page":t.currentPage===t.pages[t.totalCount-1]},on:{click:function(e){return e.preventDefault(),(()=>t.setPage(t.pages[t.totalCount-1])).apply(null,arguments)}}},[t._v(" "+t._s(t.pages[t.totalCount-1])+" ")])],2):e("div",{staticClass:"paginator-container"},t._l(t.pages,(function(a){return e("button",{key:a,staticClass:"paginator__btn",class:{"paginator__current-page":t.currentPage===a},on:{click:function(e){return e.preventDefault(),(()=>t.setPage(a)).apply(null,arguments)}}},[t._v(" "+t._s(a)+" ")])})),0)])}),c=[],u={name:"Paginator",props:{totalCount:{required:!0,type:Number},currentPage:{required:!0,type:Number},pages:{required:!0,type:Array},pagesMiddleRange:{required:!0,type:Array},setPage:{required:!0,type:Function}}},o=u,l=a(1001),p=(0,l.Z)(o,i,c,!1,null,null,null),g=p.exports,d=function(){var t=this;t._self._c;return t._m(0)},f=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"loader"})])}],_={name:"Loader"},h=_,v=(0,l.Z)(h,d,f,!1,null,null,null),P=v.exports;async function m(t){try{const e="https://rickandmortyapi.com/api/character"+(t?`?page=${t}`:""),a=await fetch(e);return a.ok?{success:!0,data:await a.json()}:{success:!1,data:await a.json()}}catch(e){return{success:!1,data:e}}}var C=m,y=a(2241),b=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"characters-feed"},t._l(t.characters,(function(t){return e("Character",{key:t.id,attrs:{gender:t.gender,name:t.name,status:t.status,origin:t.origin.name,image:t.image}})})),1)},w=[],x=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"character-card"},[e("div",{staticClass:"character__row-info"},[e("span",{staticClass:"character-name"},[t._v(t._s(t.name))]),e("span",{staticClass:"character-status",class:{"character__status-alive":"Alive"===t.status,"character__status-dead":"Dead"===t.status,"character__status-unknown":"Unknown"===t.status}},[t._v(t._s(t.status))])]),e("div",{staticClass:"character__row-info"},[e("span",{staticClass:"character-gender"},[t._v(t._s(t.gender))]),e("span",{staticClass:"character-origin"},[t._v(t._s(t.origin))])]),e("Picture",{attrs:{imgSrc:t.image}})],1)},k=[],Z=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"picture-container"},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.isLoaded,expression:"isLoaded"}],staticClass:"picture",attrs:{src:t.imgSrc,alt:"character"},on:{load:t.onImgLoad}}),t.isLoaded?t._e():e("Loader",{staticClass:"picture-loader"})],1)},O=[],L=r.ZP.extend({name:"Picture",components:{Loader:P},props:{imgSrc:String},data(){return{isLoaded:!1}},methods:{onImgLoad(){this.isLoaded=!0}}}),S=L,j=(0,l.Z)(S,Z,O,!1,null,"348e3880",null),D=j.exports,q=r.ZP.extend({components:{Picture:D},name:"Character",props:{gender:String,name:String,status:String,origin:String,image:String},mounted:()=>{window.scroll({top:0,behavior:"smooth"})}}),$=q,A=(0,l.Z)($,x,k,!1,null,"28acf800",null),M=A.exports,N=r.ZP.extend({components:{Character:M},name:"CharactersFeed",props:{characters:{required:!0,type:Array}}}),F=N,R=(0,l.Z)(F,b,w,!1,null,"4be53544",null),T=R.exports;r.ZP.use(y.ZP);const I=[{path:"/:page(\\d+)",name:"page",component:T},{path:"/*",redirect:()=>({path:"/1"})}],E=new y.ZP({mode:"history",base:"/vue-client/",routes:I});var U=E,z=r.ZP.extend({router:U,components:{Paginator:g,Loader:P},data(){return{pages:null,characters:null,currentPage:null}},methods:{setPage:function(t){this.currentPage=t},getData:function(t){C(t).then((t=>{this.characters=t.data.results,this.pages=Array(t.data.info.pages).fill(null).map(((t,e)=>e+1))}))}},watch:{currentPage:function(){this.currentPage&&null!==this.currentPage&&(this.getData(this.currentPage),this.$route.params.page!==String(this.currentPage)&&this.$router.push(`/${this.currentPage}`))}},mounted(){this.currentPage=Number(this.$route.params.page)}}),B=z,G=(0,l.Z)(B,n,s,!1,null,null,null),H=G.exports;r.ZP.config.productionTip=!1,new r.ZP({router:U,render:t=>t(H)}).$mount("#app")}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,s){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],n=t[l][1],s=t[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[u])}))?r.splice(u--,1):(c=!1,s<i&&(i=s));if(c){t.splice(l--,1);var o=n();void 0!==o&&(e=o)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[r,n,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,s,i=r[0],c=r[1],u=r[2],o=0;if(i.some((function(e){return 0!==t[e]}))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(u)var l=u(a)}for(e&&e(r);o<i.length;o++)s=i[o],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(l)},r=self["webpackChunkvue_client"]=self["webpackChunkvue_client"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(5557)}));r=a.O(r)})();
//# sourceMappingURL=app.166b49d8.js.map