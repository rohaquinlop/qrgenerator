(function(e){function t(t){for(var a,c,i=t[0],l=t[1],d=t[2],u=0,s=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(s.length)s.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/qrgenerator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"15a2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function o(e,t,n,o,r,c){var i=Object(a["resolveComponent"])("Main"),l=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(i),Object(a["createVNode"])(l)],64)}var r=function(e){return Object(a["pushScopeId"])("data-v-8fe8d02e"),e=e(),Object(a["popScopeId"])(),e},c={class:"main"},i={class:"container"},l=r((function(){return Object(a["createElementVNode"])("section",{class:"child"},[Object(a["createElementVNode"])("h1",{class:"title"},"QR Code Generator"),Object(a["createElementVNode"])("p",{class:"subtitle"},"Generate for free QR Codes for your websites")],-1)})),d={class:"inputZone child"},f=r((function(){return Object(a["createElementVNode"])("label",{for:"value"},"Enter your URL: ",-1)})),u={class:"outputQR child"},s={class:"child button"};function b(e,t,n,o,r,b){var p=Object(a["resolveComponent"])("qrcode-vue"),v=Object(a["resolveComponent"])("v-container");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("section",i,[Object(a["createVNode"])(v,{"fill-height":"",fluid:""},{default:Object(a["withCtx"])((function(){return[l,Object(a["createElementVNode"])("section",d,[f,Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.value=e})},null,512),[[a["vModelText"],r.value]])]),Object(a["createElementVNode"])("section",u,[Object(a["createVNode"])(p,{value:r.value,size:r.size,level:"H",id:"qrcode"},null,8,["value","size"])]),Object(a["createElementVNode"])("section",s,[Object(a["createElementVNode"])("button",{onClick:t[1]||(t[1]=function(e){return b.downloadImg()})},"Download QR Code")])]})),_:1})])])}n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861");var p=n("d39c"),v=n.n(p),m={name:"Main",data:function(){return{value:"",size:.3*window.innerWidth}},props:{},components:{QrcodeVue:v.a},methods:{downloadImg:function(e){e&&e.preventDefault();var t=document.getElementById("qrcode"),n=t.toDataURL("image/png"),a=new XMLHttpRequest;a.responseType="blob",a.onload=function(){var e=document.createElement("a");e.href=window.URL.createObjectURL(a.response),e.download="qrCode.png",e.style.display="none",document.body.appendChild(e),e.click(),e.remove()},a.open("GET",n),a.send()}}},h=(n("7af3"),n("6b0d")),O=n.n(h);const j=O()(m,[["render",b],["__scopeId","data-v-8fe8d02e"]]);var w=j,g=Object(a["createStaticVNode"])('<div class="content" data-v-7afbf964><h3 data-v-7afbf964>Robin Hafid Quintero Lopez</h3><p data-v-7afbf964>Software developer at Banco de Occidente and Systems engineering student at Pontificia Universidad Javeriana Cali, Colombia.</p><ul class="socials" data-v-7afbf964><li data-v-7afbf964><a href="https://github.com/rohaquinlop" data-v-7afbf964><i class="fa fa-github" data-v-7afbf964></i></a></li><li data-v-7afbf964><a href="https://www.linkedin.com/in/robin-hafid-quintero-lopez/" data-v-7afbf964><i class="fa fa-linkedin-square" data-v-7afbf964></i></a></li><li data-v-7afbf964><a href="https://www.youtube.com/channel/UCpA2-pYqfzbhdU80_4N-vPg" data-v-7afbf964><i class="fa fa-youtube" data-v-7afbf964></i></a></li><li data-v-7afbf964><a href="https://www.instagram.com/therobinquintero/" data-v-7afbf964><i class="fa fa-instagram" data-v-7afbf964></i></a></li></ul></div><div class="bottom" data-v-7afbf964><p data-v-7afbf964>copyright ©2021 Robin Hafid Quintero Lopez. designed by <span data-v-7afbf964>rohaquinlop</span></p></div>',2),y=[g];function E(e,t,n,o,r,c){return Object(a["openBlock"])(),Object(a["createElementBlock"])("footer",null,y)}var V={name:"Footer"};n("ec11");const N=O()(V,[["render",E],["__scopeId","data-v-7afbf964"]]);var C=N,k={name:"App",components:{Main:w,Footer:C}};n("ba4c");const q=O()(k,[["render",o]]);var _=q;Object(a["createApp"])(_).mount("#app")},"6a3e":function(e,t,n){},"7af3":function(e,t,n){"use strict";n("ba37")},ba37:function(e,t,n){},ba4c:function(e,t,n){"use strict";n("6a3e")},ec11:function(e,t,n){"use strict";n("15a2")}});
//# sourceMappingURL=app.12164798.js.map
