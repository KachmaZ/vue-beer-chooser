(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-beer-chooser/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var b=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0162":function(e,t){e.exports="data:image/png;base64,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"},"0584":function(e,t,n){"use strict";n("aa2b")},"4bcd":function(e,t,n){"use strict";n("df8d")},"4f2c":function(e,t,n){"use strict";n("6750")},5282:function(e,t,n){"use strict";n("9be1")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,o,a){var i=Object(r["y"])("Header"),u=Object(r["y"])("router-view");return Object(r["s"])(),Object(r["g"])(r["a"],null,[Object(r["i"])(i),Object(r["i"])(u)],64)}var o=n("5530"),a=function(e){return Object(r["v"])("data-v-6a0a72c2"),e=e(),Object(r["t"])(),e},i=a((function(){return Object(r["h"])("svg",{fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30px",height:"30px"},[Object(r["h"])("path",{d:"M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"})],-1)})),u=[i],s=a((function(){return Object(r["h"])("span",null,"About",-1)})),b=a((function(){return Object(r["h"])("span",null,"Home",-1)})),l=a((function(){return Object(r["h"])("span",null,"Contacts",-1)})),d={class:"mobile-nav"},j=a((function(){return Object(r["h"])("span",null,"About",-1)})),O=a((function(){return Object(r["h"])("span",null,"Home",-1)})),f=a((function(){return Object(r["h"])("span",null,"Contacts",-1)}));function h(e,t,n,c,o,a){var i=Object(r["y"])("router-link");return Object(r["s"])(),Object(r["g"])("header",null,[Object(r["h"])("nav",null,[Object(r["F"])(Object(r["h"])("div",{class:Object(r["o"])(["ham-icon",{active:e.mobileNav}]),onClick:t[0]||(t[0]=Object(r["G"])((function(){return e.toggleMobileNav&&e.toggleMobileNav.apply(e,arguments)}),["stop"]))},u,2),[[r["C"],e.mobile]]),Object(r["F"])(Object(r["h"])("ul",null,[Object(r["h"])("li",null,[Object(r["i"])(i,{to:"/about",class:"link"},{default:Object(r["E"])((function(){return[s]})),_:1})]),Object(r["h"])("li",null,[Object(r["i"])(i,{to:"/",class:"link"},{default:Object(r["E"])((function(){return[b]})),_:1})]),Object(r["h"])("li",null,[Object(r["i"])(i,{to:"/contacts",class:"link"},{default:Object(r["E"])((function(){return[l]})),_:1})])],512),[[r["C"],!e.mobile]]),Object(r["i"])(r["b"],null,{default:Object(r["E"])((function(){return[Object(r["F"])(Object(r["h"])("ul",d,[Object(r["h"])("li",null,[Object(r["i"])(i,{to:"/about",class:"link"},{default:Object(r["E"])((function(){return[j]})),_:1})]),Object(r["h"])("li",null,[Object(r["i"])(i,{to:"/",class:"link"},{default:Object(r["E"])((function(){return[O]})),_:1})]),Object(r["h"])("li",null,[Object(r["i"])(i,{to:"/contacts",class:"link"},{default:Object(r["E"])((function(){return[f]})),_:1})])],512),[[r["C"],e.mobileNav]])]})),_:1})])])}var m=n("5502"),p={computed:Object(o["a"])({},Object(m["c"])(["mobile","mobileNav","windowWidth"])),methods:Object(o["a"])({},Object(m["d"])(["toggleMobileNav","setWindowWidth"])),created:function(){window.addEventListener("resize",this.setWindowWidth),this.setWindowWidth()}},v=(n("a94c"),n("6b0d")),g=n.n(v);const y=g()(p,[["render",h],["__scopeId","data-v-6a0a72c2"]]);var A=y,w={components:{Header:A},methods:Object(o["a"])({},Object(m["d"])(["setMobileNav"])),mounted:function(){var e=this;window.addEventListener("click",(function(){return e.setMobileNav(!1)}))}};n("5282");const B=g()(w,[["render",c]]);var k=B,R=n("1da1"),L=(n("96cf"),n("d3b7"),{actions:{fetchRandomUser:function(e){return Object(R["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("setLoading",!0),t.next=3,fetch("https://random-data-api.com/api/users/random_user");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e.commit("updateCurrentUser",r),e.commit("setLoading");case 9:case"end":return t.stop()}}),t)})))()}},mutations:{updateCurrentUser:function(e,t){e.currentUser=t},setLoading:function(e,t){e.userLoading=t}},state:{currentUser:{},userLoading:!1},getters:{currentUser:function(e){return e.currentUser},userLoading:function(e){return e.userLoading}}}),M={actions:{fetchRandomBeer:function(e){return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("setBeerLoading",!0),setTimeout(Object(R["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://random-data-api.com/api/beer/random_beer");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.commit("updateCurrentBeer",r),e.commit("setBeerLoading",!1);case 8:case"end":return t.stop()}}),t)}))),1e3);case 2:case"end":return t.stop()}}),t)})))()}},mutations:{updateCurrentBeer:function(e,t){e.currentBeer=t},setBeerLoading:function(e,t){e.beerLoading=t}},state:{currentBeer:{},beerLoading:!1},getters:{currentBeer:function(e){return e.currentBeer},beerLoading:function(e){return e.beerLoading}}},I={actions:{},mutations:{toggleMobileNav:function(e){e.mobileNav=!e.mobileNav},setMobileNav:function(e,t){e.mobileNav=t},setWindowWidth:function(e){e.windowWidth=window.innerWidth,e.windowWidth<=750?e.mobile=!0:(e.mobile=!1,e.mobileNav=!1)}},state:{mobile:!0,mobileNav:!1,windowWidth:null},getters:{mobile:function(e){return e.mobile},mobileNav:function(e){return e.mobileNav},windowWidth:function(e){return e.windowWidth}}},J=Object(m["a"])({modules:{user:L,beer:M,menu:I}}),E=n("6c02"),x={class:"home"};function W(e,t,n,c,o,a){var i=Object(r["y"])("PersonalAccount"),u=Object(r["y"])("YourBeer");return Object(r["s"])(),Object(r["g"])("div",x,[Object(r["i"])(i,{user:e.currentUser},null,8,["user"]),Object(r["i"])(u,{beer:e.currentBeer},null,8,["beer"])])}var C={class:"user"},N=["src"],Y={class:"user-info"},D={class:"user-name"},F={class:"user-fullname"},V={class:"user-age"},G={key:0,class:"user-employment"},z={class:"user-name"},U={class:"user-fullname"},q={key:0,class:"user-employment"};function P(e,t,n,c,o,a){var i=Object(r["y"])("Loader");return Object(r["s"])(),Object(r["g"])("div",C,[e.userLoading?(Object(r["s"])(),Object(r["e"])(i,{key:0})):(Object(r["s"])(),Object(r["g"])(r["a"],{key:1},[Object(r["h"])("img",{class:"user-avatar",src:n.user.avatar,onError:t[0]||(t[0]=function(){return a.setAltImage&&a.setAltImage.apply(a,arguments)}),alt:"Avatar"},null,40,N),Object(r["h"])("div",Y,[o.mobile?(Object(r["s"])(),Object(r["g"])(r["a"],{key:1},[Object(r["h"])("span",z,Object(r["A"])(n.user.username),1),Object(r["h"])("span",U,Object(r["A"])(n.user.first_name)+" "+Object(r["A"])(n.user.last_name)+", "+Object(r["A"])(a.userAge),1),n.user.employment?(Object(r["s"])(),Object(r["g"])("span",q,Object(r["A"])(n.user.employment.title),1)):Object(r["f"])("",!0)],64)):(Object(r["s"])(),Object(r["g"])(r["a"],{key:0},[Object(r["h"])("h2",D,Object(r["A"])(n.user.username),1),Object(r["h"])("span",F,Object(r["A"])(n.user.first_name)+" "+Object(r["A"])(n.user.last_name),1),Object(r["h"])("span",V,Object(r["A"])(a.userAge)+" years",1),n.user.employment?(Object(r["s"])(),Object(r["g"])("span",G,Object(r["A"])(n.user.employment.title),1)):Object(r["f"])("",!0)],64))])],64))])}var Q=function(e){return Object(r["v"])("data-v-69fdefbf"),e=e(),Object(r["t"])(),e},S={class:"loader d-flex justify-content-center"},K=Q((function(){return Object(r["h"])("div",{class:"lds-grid"},[Object(r["h"])("div"),Object(r["h"])("div"),Object(r["h"])("div"),Object(r["h"])("div"),Object(r["h"])("div"),Object(r["h"])("div"),Object(r["h"])("div"),Object(r["h"])("div"),Object(r["h"])("div")],-1)})),Z=[K];function T(e,t){return Object(r["s"])(),Object(r["g"])("div",S,Z)}n("ecaf");const H={},X=g()(H,[["render",T],["__scopeId","data-v-69fdefbf"]]);var _=X,$={props:{user:Object},data:function(){return{mobile:!0,windowWidth:null}},computed:Object(o["a"])(Object(o["a"])({},Object(m["c"])(["userLoading"])),{},{userAge:function(){return((new Date).getTime()-new Date(this.user.date_of_birth))/315576e5|0}}),methods:{setAltImage:function(e){e.target.src=n("0162")},checkScreen:function(){this.windowWidth=window.innerWidth,this.windowWidth<=750?this.mobile=!0:this.mobile=!1}},created:function(){window.addEventListener("resize",this.checkScreen),this.checkScreen()},components:{Loader:_}};n("0584");const ee=g()($,[["render",P],["__scopeId","data-v-97f0f84e"]]);var te=ee,ne=(n("b0c0"),function(e){return Object(r["v"])("data-v-76bf3837"),e=e(),Object(r["t"])(),e}),re={class:"beer"},ce={class:"beer-desc"},oe={class:"brand"},ae={class:"name"},ie={class:"style"},ue=ne((function(){return Object(r["h"])("span",null," Choose ",-1)})),se=[ue];function be(e,t,n,c,o,a){var i=Object(r["y"])("Loader");return Object(r["s"])(),Object(r["g"])("div",re,[Object(r["h"])("h2",{class:Object(r["o"])([{hidden:e.beerLoading},"beer-title"])},"Your beer",2),Object(r["h"])("div",{class:Object(r["o"])(["beer-img",{loading:e.beerLoading}])},null,2),Object(r["h"])("div",ce,[e.beerLoading?(Object(r["s"])(),Object(r["e"])(i,{key:0})):(Object(r["s"])(),Object(r["g"])(r["a"],{key:1},[Object(r["h"])("span",oe,"Brand: "+Object(r["A"])(n.beer.brand),1),Object(r["h"])("span",ae,"Name: "+Object(r["A"])(n.beer.name),1),Object(r["h"])("span",ie,"Style: "+Object(r["A"])(n.beer.style),1)],64))]),Object(r["h"])("div",{onClick:t[0]||(t[0]=function(){return e.fetchRandomBeer&&e.fetchRandomBeer.apply(e,arguments)}),class:"beer-choose"},se)])}var le={props:{beer:Object},computed:Object(o["a"])({},Object(m["c"])(["currentBeer","beerLoading"])),methods:Object(o["a"])(Object(o["a"])({},Object(m["b"])(["fetchRandomBeer"])),Object(m["d"])(["toggleMobileNav"])),components:{Loader:_}};n("4f2c");const de=g()(le,[["render",be],["__scopeId","data-v-76bf3837"]]);var je=de,Oe={name:"Home",components:{PersonalAccount:te,YourBeer:je},computed:Object(o["a"])({},Object(m["c"])(["currentUser","currentBeer"])),methods:Object(o["a"])({},Object(m["b"])(["fetchRandomUser","fetchRandomBeer"])),mounted:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.fetchRandomUser(),e.fetchRandomBeer();case 2:case"end":return t.stop()}}),t)})))()}};n("4bcd");const fe=g()(Oe,[["render",W],["__scopeId","data-v-405ee778"]]);var he=fe;function me(e,t,n,c,o,a){return Object(r["s"])(),Object(r["g"])("div",null," About page ")}var pe={};const ve=g()(pe,[["render",me]]);var ge=ve;function ye(e,t,n,r,c,o){return" Contacts page "}var Ae={};const we=g()(Ae,[["render",ye]]);var Be=we,ke=[{path:"/",name:"Home",component:he},{path:"/about",name:"About",component:ge},{path:"/contacts",name:"Contacts",component:Be}],Re=Object(E["a"])({history:Object(E["b"])("/vue-beer-chooser/"),routes:ke}),Le=Re;Object(r["d"])(k).use(Le).use(J).mount("#app")},"614b":function(e,t,n){},6750:function(e,t,n){},8219:function(e,t,n){},"9be1":function(e,t,n){},a94c:function(e,t,n){"use strict";n("614b")},aa2b:function(e,t,n){},df8d:function(e,t,n){},ecaf:function(e,t,n){"use strict";n("8219")}});
//# sourceMappingURL=app.4b104243.js.map