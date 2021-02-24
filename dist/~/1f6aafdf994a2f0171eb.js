/*! For license information please see 1f6aafdf994a2f0171eb.js.LICENSE.txt */
(self.webpackChunkrecaptcha_demo=self.webpackChunkrecaptcha_demo||[]).push([[486],{486:t=>{!function(n){"use strict";"function"==typeof bootstrap?bootstrap("promise",n):t.exports=n()}((function(){"use strict";var t=!1;try{throw new Error}catch(n){t=!!n.stack}var n,e=b(),r=function(){},o=function(){var t={task:void 0,next:null},n=t,e=!1,r=void 0,i=!1,u=[];function c(){for(var n,r;t.next;)n=(t=t.next).task,t.task=void 0,(r=t.domain)&&(t.domain=void 0,r.enter()),s(n,r);for(;u.length;)s(n=u.pop());e=!1}function s(t,n){try{t()}catch(t){if(i)throw n&&n.exit(),setTimeout(c,0),n&&n.enter(),t;setTimeout((function(){throw t}),0)}n&&n.exit()}if(o=function(t){n=n.next={task:t,domain:i&&process.domain,next:null},e||(e=!0,r())},"object"==typeof process&&"[object process]"===process.toString()&&process.nextTick)i=!0,r=function(){process.nextTick(c)};else if("function"==typeof setImmediate)r="undefined"!=typeof window?setImmediate.bind(window,c):function(){setImmediate(c)};else if("undefined"!=typeof MessageChannel){var p=new MessageChannel;p.port1.onmessage=function(){r=f,p.port1.onmessage=c,c()};var f=function(){p.port2.postMessage(0)};r=function(){setTimeout(c,0),f()}}else r=function(){setTimeout(c,0)};return o.runAfter=function(t){u.push(t),e||(e=!0,r())},o}(),i=Function.call;function u(t){return function(){return i.apply(t,arguments)}}var c,s=u(Array.prototype.slice),p=u(Array.prototype.reduce||function(t,n){var e=0,r=this.length;if(1===arguments.length)for(;;){if(e in this){n=this[e++];break}if(++e>=r)throw new TypeError}for(;e<r;e++)e in this&&(n=t(n,this[e],e));return n}),f=u(Array.prototype.indexOf||function(t){for(var n=0;n<this.length;n++)if(this[n]===t)return n;return-1}),a=u(Array.prototype.map||function(t,n){var e=this,r=[];return p(e,(function(o,i,u){r.push(t.call(n,i,u,e))}),void 0),r}),l=Object.create||function(t){function n(){}return n.prototype=t,new n},d=Object.defineProperty||function(t,n,e){return t[n]=e.value,t},h=u(Object.prototype.hasOwnProperty),y=Object.keys||function(t){var n=[];for(var e in t)h(t,e)&&n.push(e);return n},v=u(Object.prototype.toString);function m(t){return"[object StopIteration]"===v(t)||t instanceof c}c="undefined"!=typeof ReturnValue?ReturnValue:function(t){this.value=t};function k(n,e){if(t&&e.stack&&"object"==typeof n&&null!==n&&n.stack){for(var r=[],o=e;o;o=o.source)o.stack&&(!n.__minimumStackCounter__||n.__minimumStackCounter__>o.stackCounter)&&(d(n,"__minimumStackCounter__",{value:o.stackCounter,configurable:!0}),r.unshift(o.stack));r.unshift(n.stack);var i=function(t){for(var n=t.split("\n"),e=[],r=0;r<n.length;++r){var o=n[r];g(o)||j(o)||!o||e.push(o)}return e.join("\n")}(r.join("\nFrom previous event:\n"));d(n,"stack",{value:i,configurable:!0})}}function j(t){return-1!==t.indexOf("(module.js:")||-1!==t.indexOf("(node.js:")}function w(t){var n=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);if(n)return[n[1],Number(n[2])];var e=/at ([^ ]+):(\d+):(?:\d+)$/.exec(t);if(e)return[e[1],Number(e[2])];var r=/.*@(.+):(\d+)$/.exec(t);return r?[r[1],Number(r[2])]:void 0}function g(t){var r=w(t);if(!r)return!1;var o=r[0],i=r[1];return o===n&&i>=e&&i<=J}function b(){if(t)try{throw new Error}catch(t){var e=t.stack.split("\n"),r=w(e[0].indexOf("@")>0?e[1]:e[2]);if(!r)return;return n=r[0],r[1]}}function x(t){return t instanceof O?t:D(t)?function(t){var n=R();return x.nextTick((function(){try{t.then(n.resolve,n.reject,n.notify)}catch(t){n.reject(t)}})),n.promise}(t):V(t)}x.resolve=x,x.nextTick=o,x.longStackSupport=!1;var T=1;function R(){var n,e=[],r=[],o=l(R.prototype),i=l(O.prototype);if(i.promiseDispatch=function(t,o,i){var u=s(arguments);e?(e.push(u),"when"===o&&i[1]&&r.push(i[1])):x.nextTick((function(){n.promiseDispatch.apply(n,u)}))},i.valueOf=function(){if(e)return i;var t=C(n);return N(t)&&(n=t),t},i.inspect=function(){return n?n.inspect():{state:"pending"}},x.longStackSupport&&t)try{throw new Error}catch(t){i.stack=t.stack.substring(t.stack.indexOf("\n")+1),i.stackCounter=T++}function u(o){n=o,x.longStackSupport&&t&&(i.source=o),p(e,(function(t,n){x.nextTick((function(){o.promiseDispatch.apply(o,n)}))}),void 0),e=void 0,r=void 0}return o.promise=i,o.resolve=function(t){n||u(x(t))},o.fulfill=function(t){n||u(V(t))},o.reject=function(t){n||u($(t))},o.notify=function(t){n||p(r,(function(n,e){x.nextTick((function(){e(t)}))}),void 0)},o}function S(t){if("function"!=typeof t)throw new TypeError("resolver must be a function.");var n=R();try{t(n.resolve,n.reject,n.notify)}catch(t){n.reject(t)}return n.promise}function E(t){return S((function(n,e){for(var r=0,o=t.length;r<o;r++)x(t[r]).then(n,e)}))}function O(t,n,e){void 0===n&&(n=function(t){return $(new Error("Promise does not support operation: "+t))}),void 0===e&&(e=function(){return{state:"unknown"}});var r=l(O.prototype);if(r.promiseDispatch=function(e,o,i){var u;try{u=t[o]?t[o].apply(r,i):n.call(r,o,i)}catch(t){u=$(t)}e&&e(u)},r.inspect=e,e){var o=e();"rejected"===o.state&&(r.exception=o.reason),r.valueOf=function(){var t=e();return"pending"===t.state||"rejected"===t.state?r:t.value}}return r}function _(t,n,e,r){return x(t).then(n,e,r)}function C(t){if(N(t)){var n=t.inspect();if("fulfilled"===n.state)return n.value}return t}function N(t){return t instanceof O}function D(t){return(n=t)===Object(n)&&"function"==typeof t.then;var n}"object"==typeof process&&process&&process.env&&process.env.Q_DEBUG&&(x.longStackSupport=!0),x.defer=R,R.prototype.makeNodeResolver=function(){var t=this;return function(n,e){n?t.reject(n):arguments.length>2?t.resolve(s(arguments,1)):t.resolve(e)}},x.Promise=S,x.promise=S,S.race=E,S.all=L,S.reject=$,S.resolve=x,x.passByCopy=function(t){return t},O.prototype.passByCopy=function(){return this},x.join=function(t,n){return x(t).join(n)},O.prototype.join=function(t){return x([this,t]).spread((function(t,n){if(t===n)return t;throw new Error("Q can't join: not the same: "+t+" "+n)}))},x.race=E,O.prototype.race=function(){return this.then(x.race)},x.makePromise=O,O.prototype.toString=function(){return"[object Promise]"},O.prototype.then=function(t,n,e){var r=this,o=R(),i=!1;return x.nextTick((function(){r.promiseDispatch((function(n){i||(i=!0,o.resolve(function(n){try{return"function"==typeof t?t(n):n}catch(t){return $(t)}}(n)))}),"when",[function(t){i||(i=!0,o.resolve(function(t){if("function"==typeof n){k(t,r);try{return n(t)}catch(t){return $(t)}}return $(t)}(t)))}])})),r.promiseDispatch(void 0,"when",[void 0,function(t){var n,r=!1;try{n=function(t){return"function"==typeof e?e(t):t}(t)}catch(t){if(r=!0,!x.onerror)throw t;x.onerror(t)}r||o.notify(n)}]),o.promise},x.tap=function(t,n){return x(t).tap(n)},O.prototype.tap=function(t){return t=x(t),this.then((function(n){return t.fcall(n).thenResolve(n)}))},x.when=_,O.prototype.thenResolve=function(t){return this.then((function(){return t}))},x.thenResolve=function(t,n){return x(t).thenResolve(n)},O.prototype.thenReject=function(t){return this.then((function(){throw t}))},x.thenReject=function(t,n){return x(t).thenReject(n)},x.nearer=C,x.isPromise=N,x.isPromiseAlike=D,x.isPending=function(t){return N(t)&&"pending"===t.inspect().state},O.prototype.isPending=function(){return"pending"===this.inspect().state},x.isFulfilled=function(t){return!N(t)||"fulfilled"===t.inspect().state},O.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},x.isRejected=function(t){return N(t)&&"rejected"===t.inspect().state},O.prototype.isRejected=function(){return"rejected"===this.inspect().state};var P,A,Q,I=[],U=[],F=[],M=!0;function B(){I.length=0,U.length=0,M||(M=!0)}function $(t){var n=O({when:function(n){return n&&function(t){if(M){var n=f(U,t);-1!==n&&("object"==typeof process&&"function"==typeof process.emit&&x.nextTick.runAfter((function(){var e=f(F,t);-1!==e&&(process.emit("rejectionHandled",I[n],t),F.splice(e,1))})),U.splice(n,1),I.splice(n,1))}}(this),n?n(t):this}},(function(){return this}),(function(){return{state:"rejected",reason:t}}));return function(t,n){M&&("object"==typeof process&&"function"==typeof process.emit&&x.nextTick.runAfter((function(){-1!==f(U,t)&&(process.emit("unhandledRejection",n,t),F.push(t))})),U.push(t),n&&void 0!==n.stack?I.push(n.stack):I.push("(no stack) "+n))}(n,t),n}function V(t){return O({when:function(){return t},get:function(n){return t[n]},set:function(n,e){t[n]=e},delete:function(n){delete t[n]},post:function(n,e){return null==n?t.apply(void 0,e):t[n].apply(t,e)},apply:function(n,e){return t.apply(n,e)},keys:function(){return y(t)}},void 0,(function(){return{state:"fulfilled",value:t}}))}function G(t,n,e){return x(t).spread(n,e)}function H(t,n,e){return x(t).dispatch(n,e)}function L(t){return _(t,(function(t){var n=0,e=R();return p(t,(function(r,o,i){var u;N(o)&&"fulfilled"===(u=o.inspect()).state?t[i]=u.value:(++n,_(o,(function(r){t[i]=r,0==--n&&e.resolve(t)}),e.reject,(function(t){e.notify({index:i,value:t})})))}),void 0),0===n&&e.resolve(t),e.promise}))}function q(t){if(0===t.length)return x.resolve();var n=x.defer(),e=0;return p(t,(function(r,o,i){var u=t[i];e++,_(u,(function(t){n.resolve(t)}),(function(t){if(0===--e){var r=t||new Error(""+t);r.message="Q can't get fulfillment value from any promise, all promises were rejected. Last error message: "+r.message,n.reject(r)}}),(function(t){n.notify({index:i,value:t})}))}),void 0),n.promise}function z(t){return _(t,(function(t){return t=a(t,x),_(L(a(t,(function(t){return _(t,r,r)}))),(function(){return t}))}))}x.resetUnhandledRejections=B,x.getUnhandledReasons=function(){return I.slice()},x.stopUnhandledRejectionTracking=function(){B(),M=!1},B(),x.reject=$,x.fulfill=V,x.master=function(t){return O({isDef:function(){}},(function(n,e){return H(t,n,e)}),(function(){return x(t).inspect()}))},x.spread=G,O.prototype.spread=function(t,n){return this.all().then((function(n){return t.apply(void 0,n)}),n)},x.async=function(t){return function(){function n(t,n){var i;if("undefined"==typeof StopIteration){try{i=e[t](n)}catch(t){return $(t)}return i.done?x(i.value):_(i.value,r,o)}try{i=e[t](n)}catch(t){return m(t)?x(t.value):$(t)}return _(i,r,o)}var e=t.apply(this,arguments),r=n.bind(n,"next"),o=n.bind(n,"throw");return r()}},x.spawn=function(t){x.done(x.async(t)())},x.return=function(t){throw new c(t)},x.promised=function(t){return function(){return G([this,L(arguments)],(function(n,e){return t.apply(n,e)}))}},x.dispatch=H,O.prototype.dispatch=function(t,n){var e=this,r=R();return x.nextTick((function(){e.promiseDispatch(r.resolve,t,n)})),r.promise},x.get=function(t,n){return x(t).dispatch("get",[n])},O.prototype.get=function(t){return this.dispatch("get",[t])},x.set=function(t,n,e){return x(t).dispatch("set",[n,e])},O.prototype.set=function(t,n){return this.dispatch("set",[t,n])},x.del=x.delete=function(t,n){return x(t).dispatch("delete",[n])},O.prototype.del=O.prototype.delete=function(t){return this.dispatch("delete",[t])},x.mapply=x.post=function(t,n,e){return x(t).dispatch("post",[n,e])},O.prototype.mapply=O.prototype.post=function(t,n){return this.dispatch("post",[t,n])},x.send=x.mcall=x.invoke=function(t,n){return x(t).dispatch("post",[n,s(arguments,2)])},O.prototype.send=O.prototype.mcall=O.prototype.invoke=function(t){return this.dispatch("post",[t,s(arguments,1)])},x.fapply=function(t,n){return x(t).dispatch("apply",[void 0,n])},O.prototype.fapply=function(t){return this.dispatch("apply",[void 0,t])},x.try=x.fcall=function(t){return x(t).dispatch("apply",[void 0,s(arguments,1)])},O.prototype.fcall=function(){return this.dispatch("apply",[void 0,s(arguments)])},x.fbind=function(t){var n=x(t),e=s(arguments,1);return function(){return n.dispatch("apply",[this,e.concat(s(arguments))])}},O.prototype.fbind=function(){var t=this,n=s(arguments);return function(){return t.dispatch("apply",[this,n.concat(s(arguments))])}},x.keys=function(t){return x(t).dispatch("keys",[])},O.prototype.keys=function(){return this.dispatch("keys",[])},x.all=L,O.prototype.all=function(){return L(this)},x.any=q,O.prototype.any=function(){return q(this)},x.allResolved=(P=z,A="allResolved",Q="allSettled",function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(A+" is deprecated, use "+Q+" instead.",new Error("").stack),P.apply(P,arguments)}),O.prototype.allResolved=function(){return z(this)},x.allSettled=function(t){return x(t).allSettled()},O.prototype.allSettled=function(){return this.then((function(t){return L(a(t,(function(t){function n(){return t.inspect()}return(t=x(t)).then(n,n)})))}))},x.fail=x.catch=function(t,n){return x(t).then(void 0,n)},O.prototype.fail=O.prototype.catch=function(t){return this.then(void 0,t)},x.progress=function(t,n){return x(t).then(void 0,void 0,n)},O.prototype.progress=function(t){return this.then(void 0,void 0,t)},x.fin=x.finally=function(t,n){return x(t).finally(n)},O.prototype.fin=O.prototype.finally=function(t){if(!t||"function"!=typeof t.apply)throw new Error("Q can't apply finally callback");return t=x(t),this.then((function(n){return t.fcall().then((function(){return n}))}),(function(n){return t.fcall().then((function(){throw n}))}))},x.done=function(t,n,e,r){return x(t).done(n,e,r)},O.prototype.done=function(t,n,e){var r=function(t){x.nextTick((function(){if(k(t,o),!x.onerror)throw t;x.onerror(t)}))},o=t||n||e?this.then(t,n,e):this;"object"==typeof process&&process&&process.domain&&(r=process.domain.bind(r)),o.then(void 0,r)},x.timeout=function(t,n,e){return x(t).timeout(n,e)},O.prototype.timeout=function(t,n){var e=R(),r=setTimeout((function(){n&&"string"!=typeof n||((n=new Error(n||"Timed out after "+t+" ms")).code="ETIMEDOUT"),e.reject(n)}),t);return this.then((function(t){clearTimeout(r),e.resolve(t)}),(function(t){clearTimeout(r),e.reject(t)}),e.notify),e.promise},x.delay=function(t,n){return void 0===n&&(n=t,t=void 0),x(t).delay(n)},O.prototype.delay=function(t){return this.then((function(n){var e=R();return setTimeout((function(){e.resolve(n)}),t),e.promise}))},x.nfapply=function(t,n){return x(t).nfapply(n)},O.prototype.nfapply=function(t){var n=R(),e=s(t);return e.push(n.makeNodeResolver()),this.fapply(e).fail(n.reject),n.promise},x.nfcall=function(t){var n=s(arguments,1);return x(t).nfapply(n)},O.prototype.nfcall=function(){var t=s(arguments),n=R();return t.push(n.makeNodeResolver()),this.fapply(t).fail(n.reject),n.promise},x.nfbind=x.denodeify=function(t){if(void 0===t)throw new Error("Q can't wrap an undefined function");var n=s(arguments,1);return function(){var e=n.concat(s(arguments)),r=R();return e.push(r.makeNodeResolver()),x(t).fapply(e).fail(r.reject),r.promise}},O.prototype.nfbind=O.prototype.denodeify=function(){var t=s(arguments);return t.unshift(this),x.denodeify.apply(void 0,t)},x.nbind=function(t,n){var e=s(arguments,2);return function(){var r=e.concat(s(arguments)),o=R();function i(){return t.apply(n,arguments)}return r.push(o.makeNodeResolver()),x(i).fapply(r).fail(o.reject),o.promise}},O.prototype.nbind=function(){var t=s(arguments,0);return t.unshift(this),x.nbind.apply(void 0,t)},x.nmapply=x.npost=function(t,n,e){return x(t).npost(n,e)},O.prototype.nmapply=O.prototype.npost=function(t,n){var e=s(n||[]),r=R();return e.push(r.makeNodeResolver()),this.dispatch("post",[t,e]).fail(r.reject),r.promise},x.nsend=x.nmcall=x.ninvoke=function(t,n){var e=s(arguments,2),r=R();return e.push(r.makeNodeResolver()),x(t).dispatch("post",[n,e]).fail(r.reject),r.promise},O.prototype.nsend=O.prototype.nmcall=O.prototype.ninvoke=function(t){var n=s(arguments,1),e=R();return n.push(e.makeNodeResolver()),this.dispatch("post",[t,n]).fail(e.reject),e.promise},x.nodeify=function(t,n){return x(t).nodeify(n)},O.prototype.nodeify=function(t){if(!t)return this;this.then((function(n){x.nextTick((function(){t(null,n)}))}),(function(n){x.nextTick((function(){t(n)}))}))},x.noConflict=function(){throw new Error("Q.noConflict only works when Q is used as a global")};var J=b();return x}))}}]);