(function(t){function e(e){for(var n,c,o=e[0],a=e[1],u=e[2],d=0,h=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&h.push(i[c][0]),i[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,o=1;o<s.length;o++){var a=s[o];0!==i[a]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=s[0]))}return t}var n={},i={app:0},r=[];function c(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=n,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(s,n,function(e){return t[e]}.bind(null,n));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/inbis/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=a;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1cc2":function(t,e,s){"use strict";s("6f20")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("7a23"),i=(s("b0c0"),Object(n["e"])("h1",{class:"app__header"},"Наши топ‑блогеры",-1)),r=Object(n["e"])("p",{class:"app__title"},"Лучшие специалисты в своем деле, средний опыт работы в профессии - 27 лет",-1);function c(t,e,s,c,o,a){var u=Object(n["j"])("Slider"),l=Object(n["j"])("Posts");return Object(n["h"])(),Object(n["d"])(n["a"],null,[i,r,Object(n["f"])(u,{class:"app__slider",users:o.users,onToggle:a.toggleUser},null,8,["users","onToggle"]),Object(n["f"])(l,{class:"app__posts",username:o.selectedUser.name,posts:o.selectedUser.posts},null,8,["username","posts"])],64)}s("7db0"),s("d3b7"),s("fb6a"),s("4de4");var o={class:"slider"},a=Object(n["e"])("div",{class:"controls"},[Object(n["e"])("button",{class:"controls__button"}),Object(n["e"])("button",{class:"controls__button"})],-1),u={class:"slider__display"},l={class:"slider__stack"};function d(t,e,s,i,r,c){var d=Object(n["j"])("Person");return Object(n["h"])(),Object(n["d"])("div",o,[a,Object(n["e"])("div",u,[Object(n["e"])("ul",l,[(Object(n["h"])(!0),Object(n["d"])(n["a"],null,Object(n["i"])(s.users,(function(t){return Object(n["h"])(),Object(n["c"])(d,{key:t.id,name:t.name,username:t.username,id:t.id,onToggle:c.toggleUser,class:"slider__item"},null,8,["name","username","id","onToggle"])})),128))])])])}var h={class:"person"},f=["id"],p=["for"],b={class:"person__name"},m={class:"person__nickname"};function g(t,e,s,i,r,c){return Object(n["h"])(),Object(n["d"])("li",h,[Object(n["e"])("input",{id:"p-".concat(s.id),class:"person__selector",type:"radio",name:"username",onChange:e[0]||(e[0]=function(){return c.toggleUser&&c.toggleUser.apply(c,arguments)})},null,40,f),Object(n["e"])("label",{for:"p-".concat(s.id),class:"person__content"},[Object(n["e"])("div",{class:"person__avatar",style:Object(n["g"])(r.styleObject)},null,4),Object(n["e"])("h2",b,Object(n["k"])(s.name),1),Object(n["e"])("p",m,Object(n["k"])(s.username),1)],8,p)])}var j={name:"Slider",props:["name","username","id"],data:function(){return{styleObject:{backgroundImage:"url('https://i.pravatar.cc/500?img=".concat(Math.floor(70*Math.random())+1,"')")}}},methods:{toggleUser:function(){this.$emit("toggle",this.id)}}},v=(s("1cc2"),s("6b0d")),O=s.n(v);const _=O()(j,[["render",g]]);var y=_,k=s("d4ec"),S=s("bee2"),P=function(){function t(e,s,n){var i=this;Object(k["a"])(this,t),this.container=e,this.stack=e.firstElementChild,this.btnLeft=s,this.btnRight=n,this.setSizes(),window.addEventListener("resize",(function(){return i.setSizes()})),this.stack.addEventListener("transitionend",(function(){return i.unlock()})),this.container.addEventListener("touchstart",(function(t){return i.touchStartPos=i.touchCurrentPos=t.changedTouches[0].clientX})),this.container.addEventListener("touchmove",(function(t){if(i.active){var e=parseInt(i.stack.style.marginLeft)+(t.changedTouches[0].clientX-i.touchCurrentPos);e>=0?i.stack.style.marginLeft="0px":e<=i.maxOffset?i.stack.style.marginLeft=i.maxOffset+"px":(i.stack.style.marginLeft=e+"px",i.touchCurrentPos=t.changedTouches[0].clientX,i.touchStartPos-i.touchCurrentPos>i.limit?i.moveTo(i.currentSlide+1):i.touchStartPos-i.touchCurrentPos<-i.limit&&i.moveTo(i.currentSlide-1))}})),this.container.addEventListener("touchend",(function(){i.touchStartPos=i.touchCurrentPos=void 0,i.active&&(i.moveTo(i.currentSlide,"0.1s"),setTimeout((function(){return i.unlock()}),100))})),this.btnRight.addEventListener("click",(function(){return i.moveTo(i.currentSlide+1)})),this.btnLeft.addEventListener("click",(function(){return i.moveTo(i.currentSlide-1)}))}return Object(S["a"])(t,[{key:"moveTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.5s";this.active=!1,this.stack.style.transition=e,this.currentSlide=t,this.stack.style.marginLeft=this.currentSlide*this.slideWidth+"px",this.toggleMarker()}},{key:"unlock",value:function(){this.stack.style.transition="",this.active=!0}},{key:"toggleMarker",value:function(){0===this.currentSlide?(this.btnLeft.disabled=!0,this.btnRight.disabled=!1):this.currentSlide===this.slideCount?(this.btnLeft.disabled=!1,this.btnRight.disabled=!0):this.btnLeft.disabled=this.btnRight.disabled=!1}},{key:"setSizes",value:function(){window.matchMedia("(max-width: 640px)").matches?(this.slideWidth=-.1*this.stack.offsetWidth,this.slideCount=9):window.matchMedia("(max-width: 960px)").matches?(this.slideWidth=-.0525*this.stack.offsetWidth,this.slideCount=8):(this.slideWidth=-.034*this.stack.offsetWidth,this.slideCount=7),this.stack.style.marginLeft="0px",this.maxOffset=this.slideWidth*this.slideCount,this.touchStartPos=this.touchCurrentPos=void 0,this.limit=Math.round(.125*this.container.offsetWidth),this.currentSlide=0,this.active=!0,this.toggleMarker()}}]),t}(),x={name:"Slider",props:["users"],components:{Person:y},methods:{toggleUser:function(t){this.$emit("toggle",t)}},mounted:function(){new P(document.getElementsByClassName("slider__display")[0],document.getElementsByClassName("controls__button")[0],document.getElementsByClassName("controls__button")[1])}};s("bc20");const w=O()(x,[["render",d]]);var L=w,C=s("7dca"),T=s.n(C),M=s("c02a"),U=s.n(M),E={class:"posts"},W={class:"posts__header"},R={class:"posts__list"},z=Object(n["e"])("img",{class:"posts__quotes",src:T.a,alt:"quotes"},null,-1),q=Object(n["e"])("img",{class:"posts__figure",src:U.a,alt:""},null,-1);function B(t,e,s,i,r,c){return Object(n["h"])(),Object(n["d"])("div",E,[Object(n["e"])("h1",W,"3 актуальных поста "+Object(n["k"])(s.username),1),Object(n["e"])("ul",R,[(Object(n["h"])(!0),Object(n["d"])(n["a"],null,Object(n["i"])(s.posts,(function(t){return Object(n["h"])(),Object(n["d"])("li",{key:t.id,class:"posts__item"},[Object(n["e"])("h2",null,Object(n["k"])(t.title),1),Object(n["e"])("p",null,Object(n["k"])(t.body),1)])})),128))]),z,q])}var I={name:"Posts",props:["username","posts"]};s("719b");const N=O()(I,[["render",B]]);var X=N,J={name:"App",components:{Slider:L,Posts:X},data:function(){return{users:[],posts:[],selectedUser:{name:"",posts:[]}}},methods:{toggleUser:function(t){this.selectedUser.name=this.users.find((function(e){return e.id==t})).username,this.selectedUser.posts=this.posts.filter((function(e){return e.userId==t})).slice(0,3)}},created:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(e){return t.users=e})),fetch("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.json()})).then((function(e){return t.posts=e}))}};s("72f1");const $=O()(J,[["render",c]]);var A=$;Object(n["b"])(A).mount("#app")},"6efa":function(t,e,s){},"6f20":function(t,e,s){},"719b":function(t,e,s){"use strict";s("f7cc")},"72f1":function(t,e,s){"use strict";s("6efa")},"7dca":function(t,e,s){t.exports=s.p+"img/quotes.ff27a041.svg"},bc20:function(t,e,s){"use strict";s("fc1a")},c02a:function(t,e,s){t.exports=s.p+"img/figure.18135466.svg"},f7cc:function(t,e,s){},fc1a:function(t,e,s){}});
//# sourceMappingURL=app.c983896b.js.map