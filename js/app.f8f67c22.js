(function(n){function t(t){for(var r,i,u=t[0],s=t[1],l=t[2],p=0,f=[];p<u.length;p++)i=u[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var n,t=0;t<a.length;t++){for(var e=a[t],r=!0,u=1;u<e.length;u++){var s=e[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),n=i(i.s=e[0]))}return n}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=r,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)i.d(e,r,function(t){return n[t]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=s;a.push([3,0]),e()})({3:function(n,t,e){n.exports=e("Vtdi")},"5uDY":function(n,t,e){"use strict";var r=e("QPQM"),o=e.n(r);o.a},"7aa1":function(n,t,e){"use strict";var r=e("Cass"),o=e.n(r);o.a},"89x0":function(n,t,e){"use strict";var r=e("8mL9"),o=e.n(r);o.a},"8mL9":function(n,t,e){},Cass:function(n,t,e){},QPQM:function(n,t,e){},Vtdi:function(n,t,e){"use strict";e.r(t);e("VRzm");var r=e("Kw5r"),o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("nav",[e("router-link",{attrs:{to:"/"}},[n._v("Landing")]),n._v(" | \n    "),e("router-link",{attrs:{to:"/background"}},[n._v("Background")]),n._v(" | \n    "),e("router-link",{attrs:{to:"/reactapp"}},[n._v("About Me")]),n._v(" | \n    "),e("router-link",{attrs:{to:"/owcsx"}},[n._v("OWCSX")]),n._v(" | \n  ")],1),e("router-view")],1)},a=[],i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"landing"},[n._v("\n  "+n._s(n.msg)+"\n\n  "),e("button",{attrs:{disabled:n.btnState},on:{click:n.ChangeName}},[n._v("bolean")]),n._v("\n  "+n._s(n.btnState?"The button is disabled":"the button is active")+"\n\n  "),e("div",{staticClass:"holder"},[e("ul",n._l(n.skills,function(t,r){return e("li",{key:r},[n._v(n._s(r)+". "+n._s(t.skill))])})),n.skills.length>=5?e("p",[n._v("You are good to go")]):e("p",[n._v("Danger zone")])])])},u=[],s={name:"Landing",props:{},data:function(){return{msg:"Kiran Kumar Roy up here",btnState:!0,skills:[{skill:"Vue.js"},{skill:"GoLang"},{skill:"Python"},{skill:"Rust"},{skill:"C/C++"}]}}},l=s,c=(e("5uDY"),e("KHd+")),p=Object(c["a"])(l,i,u,!1,null,"42fce4bf",null),f=p.exports,d={name:"app",components:{Landing:f}},v=d,b=(e("89x0"),Object(c["a"])(v,o,a,!1,null,null,null)),_=b.exports,g=e("jE9Z"),h=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},m=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"background"},[e("p",[n._v("History repeats but science reverberates, I am Computer Science Engineer and I love building things.")])])}],w={name:"Background"},k=w,y=(e("7aa1"),Object(c["a"])(k,h,m,!1,null,"23d05fce",null)),x=y.exports;r["a"].use(g["a"]);var j=new g["a"]({routes:[{path:"/",name:"landing",component:f},{path:"/background/",name:"background",component:x},{path:"/reactapp/",beforeEnter:function(){window.location="https://www.bikky.space/reactme/"}},{path:"/owcsx/",beforeEnter:function(){window.location="http://www.owcsx.science/"}}]});r["a"].config.productionTip=!1,new r["a"]({router:j,render:function(n){return n(_)}}).$mount("#app")}});
//# sourceMappingURL=app.f8f67c22.js.map