!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p;let o=window.innerHeight;const r=document.getElementById("menubars"),l=document.getElementById("navBar"),c=document.getElementById("sideNav"),i=document.querySelectorAll(".sidenav-list-items"),d=document.getElementById("hidenav"),u=document.getElementById("about"),s=document.getElementById("projects"),a=document.getElementById("celularesnica"),m=document.getElementById("grekoostudio"),f=document.querySelectorAll(".section-titles");window.onscroll=()=>{b(),g(),y(u),y(s),y(a),y(m)};const p=e=>e.getBoundingClientRect().top,g=()=>{f.forEach(e=>{p(e)<o&&e.style.setProperty("--fadeRight","fadeRight 800ms running")})},y=e=>{p(e)<o&&(e.style.animation="fadeUp 1.11s forwards")},v=()=>{r.firstElementChild.classList.toggle("simple"),c.classList.toggle("active"),body.classList.toggle("no-scroll")},b=()=>{document.body.scrollTop>0||document.documentElement.scrollTop>0?l.classList.add("navshadow"):l.classList.remove("navshadow")};r.addEventListener("click",()=>{v()}),d.addEventListener("click",()=>{v()}),i.forEach(e=>{e.addEventListener("click",()=>{v()})})}]);