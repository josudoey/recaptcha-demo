(()=>{var e,t,r,o={417:(e,t,r)=>{"use strict";var o=r(538),a=r(345),n=r(822),i=r(483),l=r(151),s=r.n(l);r(655);o.default.use(n.XG7),o.default.use(i.A7),o.default.use(a.Z);const u=new a.Z({mode:"hash",base:"/",linkActiveClass:"active",scrollBehavior:(e,t,r)=>r||{x:0,y:0},routes:s()});new o.default({router:u}).$mount("#app")},151:(e,t,r)=>{e.exports=[{name:"home",path:"/",component:()=>r.e(693).then(r.bind(r,693))},{name:"site",path:"/site/:key",component:()=>Promise.all([r.e(486),r.e(164)]).then(r.bind(r,164))}]}},a={};function n(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return o[e](r,r.exports,n),r.exports}n.m=o,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,o,a]=e[u],l=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,a<i&&(i=a));l&&(e.splice(u--,1),t=o())}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>({164:"89e7941d16ebf8004774",486:"1f6aafdf994a2f0171eb",693:"e5f6ecce20c34d77c207"}[e]+".js"),n.miniCssF=e=>"css/0bf711a44d0b0a836634.css",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="recaptcha-demo:",n.l=(e,o,a,i)=>{if(t[e])t[e].push(o);else{var l,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==r+a){l=c;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",r+a),l.src=e),t[e]=[o];var f=(r,o)=>{l.onerror=l.onload=null,clearTimeout(p);var a=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(o))),r)return r(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="./~/",(()=>{var e={826:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var i=n.p+n.u(t),l=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,l,s]=r,u=0;for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var d=s(n);for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[i[u]]=0;return n.O(d)},r=self.webpackChunkrecaptcha_demo=self.webpackChunkrecaptcha_demo||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=n.O(void 0,[848],(()=>n(417)));i=n.O(i)})();