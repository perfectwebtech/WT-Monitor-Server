webpackJsonp([7],{628:function(e,t,n){"use strict";(function(e){function r(t){return e(n.i(s.a)()+"/api/users",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return console.log(e),e.json()},function(e){return console.error(e),e})}function o(e){var t;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,n.i(a.call)(r,e);case 3:return t=o.sent,console.log(t),o.next=7,n.i(a.put)(n.i(c.a)(t));case 7:o.next=12;break;case 9:o.prev=9,o.t0=o["catch"](0),console.log(o.t0);case 12:case"end":return o.stop()}},l[0],this,[[0,9]])}function i(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(n.i(u.b)(f.b,o),"t0",1);case 1:return e.abrupt("return",e.t0);case 2:case"end":return e.stop()}},l[1],this)}var a=n(728),u=(n.n(a),n(263)),s=n(675),c=n(735),f=n(694);t.defaultSaga=i;var l=[o,i].map(regeneratorRuntime.mark);t["default"]=[i]}).call(t,n(698))},675:function(e,t,n){"use strict";function r(){return""}t.a=r},694:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var r="app/AuthWrapper/GET_USERS",o="app/AuthWrapper/RECEIVED_USERS"},698:function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return y.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function a(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function u(e){var t=new FileReader;return t.readAsArrayBuffer(e),a(t)}function s(e){var t=new FileReader;return t.readAsText(e),a(t)}function c(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,"string"==typeof e)this._bodyText=e;else if(y.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(y.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(e){if(!y.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob?(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(u)},this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return s(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var e=i(this);return e?e:Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(e){var t=e.toUpperCase();return b.indexOf(t)>-1?t:e}function l(e,t){t=t||{};var n=t.body;if(l.prototype.isPrototypeOf(e)){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,n||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=e;if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=f(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function d(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function h(e){var t=new o,n=(e.getAllResponseHeaders()||"").trim().split("\n");return n.forEach(function(e){var n=e.trim().split(":"),r=n.shift().trim(),o=n.join(":").trim();t.append(r,o)}),t}function p(e,t){t||(t={}),this.type="default",this.status=t.status,this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText,this.headers=t.headers instanceof o?t.headers:new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var y={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};o.prototype.append=function(e,r){e=t(e),r=n(r);var o=this.map[e];o||(o=[],this.map[e]=o),o.push(r)},o.prototype["delete"]=function(e){delete this.map[t(e)]},o.prototype.get=function(e){var n=this.map[t(e)];return n?n[0]:null},o.prototype.getAll=function(e){return this.map[t(e)]||[]},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,r){this.map[t(e)]=[n(r)]},o.prototype.forEach=function(e,t){Object.getOwnPropertyNames(this.map).forEach(function(n){this.map[n].forEach(function(r){e.call(t,r,n,this)},this)},this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},y.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this)},c.call(l.prototype),c.call(p.prototype),p.prototype.clone=function(){return new p(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},p.error=function(){var e=new p(null,{status:0,statusText:""});return e.type="error",e};var m=[301,302,303,307,308];p.redirect=function(e,t){if(m.indexOf(t)===-1)throw new RangeError("Invalid status code");return new p(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=l,e.Response=p,e.fetch=function(e,t){return new Promise(function(n,r){function o(){return"responseURL"in a?a.responseURL:/^X-Request-URL:/m.test(a.getAllResponseHeaders())?a.getResponseHeader("X-Request-URL"):void 0}var i;i=l.prototype.isPrototypeOf(e)&&!t?e:new l(e,t);var a=new XMLHttpRequest;a.onload=function(){var e={status:a.status,statusText:a.statusText,headers:h(a),url:o()},t="response"in a?a.response:a.responseText;n(new p(t,e))},a.onerror=function(){r(new TypeError("Network request failed"))},a.ontimeout=function(){r(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials&&(a.withCredentials=!0),"responseType"in a&&y.blob&&(a.responseType="blob"),i.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),a.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this),e.exports=self.fetch},728:function(e,t,n){e.exports=n(729)},729:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(730);Object.defineProperty(t,"take",{enumerable:!0,get:function(){return r.take}}),Object.defineProperty(t,"takem",{enumerable:!0,get:function(){return r.takem}}),Object.defineProperty(t,"put",{enumerable:!0,get:function(){return r.put}}),Object.defineProperty(t,"race",{enumerable:!0,get:function(){return r.race}}),Object.defineProperty(t,"call",{enumerable:!0,get:function(){return r.call}}),Object.defineProperty(t,"apply",{enumerable:!0,get:function(){return r.apply}}),Object.defineProperty(t,"cps",{enumerable:!0,get:function(){return r.cps}}),Object.defineProperty(t,"fork",{enumerable:!0,get:function(){return r.fork}}),Object.defineProperty(t,"spawn",{enumerable:!0,get:function(){return r.spawn}}),Object.defineProperty(t,"join",{enumerable:!0,get:function(){return r.join}}),Object.defineProperty(t,"cancel",{enumerable:!0,get:function(){return r.cancel}}),Object.defineProperty(t,"select",{enumerable:!0,get:function(){return r.select}}),Object.defineProperty(t,"actionChannel",{enumerable:!0,get:function(){return r.actionChannel}}),Object.defineProperty(t,"cancelled",{enumerable:!0,get:function(){return r.cancelled}})},730:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(arguments.length>=2)(0,w.check)(e,w.is.notUndef,"take(channel, pattern): channel is undefined"),(0,w.check)(e,w.is.take,"take(channel, pattern): argument "+String(e)+" is not a valid channel (channel argument must have a take method)"),(0,w.check)(t,w.is.notUndef,"take(channel, pattern): pattern is undefined"),(0,w.check)(t,w.is.pattern,"take(channel, pattern): argument "+String(t)+" is not a valid pattern (pattern must be String | Function: a => boolean | Array<String>)");else if(1===arguments.length)if((0,w.check)(e,w.is.notUndef,"take(patternOrChannel): undefined argument"),w.is.take(e))t="*";else{if(!w.is.pattern(e))throw new Error("take(patternOrChannel): argument "+String(e)+" is not valid channel or a valid pattern");t=e,e=null}else t="*";return C(E,{channel:e,pattern:t})}function i(){var e=o.apply(void 0,arguments);return e[E].maybe=!0,e}function a(e,t){return arguments.length>1?((0,w.check)(e,w.is.notUndef,"put(channel, action): argument channel is undefined"),(0,w.check)(e,w.is.put,"put(channel, action): argument "+e+" is not a valid channel (channel argument must have a put method)"),(0,w.check)(t,w.is.notUndef,"put(channel, action): argument action is undefined")):((0,w.check)(e,w.is.notUndef,"put(action): argument action is undefined"),t=e,e=null),C(T,{channel:e,action:t})}function u(e){return C(P,e)}function s(e,t,n){(0,w.check)(t,w.is.notUndef,e+": argument fn is undefined");var r=null;if(w.is.array(t)){var o=t,i=g(o,2);r=i[0],t=i[1]}else if(t.fn){var a=t;r=a.context,t=a.fn}return(0,w.check)(t,w.is.func,e+": argument "+t+" is not a function"),{context:r,fn:t,args:n}}function c(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return C(O,s("call",e,n))}function f(e,t){var n=arguments.length<=2||void 0===arguments[2]?[]:arguments[2];return C(O,s("apply",{context:e,fn:t},n))}function l(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return C(x,s("cps",e,n))}function d(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return C(j,s("fork",e,n))}function h(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=d.apply(void 0,[e].concat(n));return o[j].detached=!0,o}function p(e){if((0,w.check)(e,w.is.notUndef,"join(task): argument task is undefined"),!B(e))throw new Error("join(task): argument "+e+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return C(A,e)}function y(e){if((0,w.check)(e,w.is.notUndef,"cancel(task): argument task is undefined"),!B(e))throw new Error("cancel(task): argument "+e+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return C(S,e)}function b(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return 0===arguments.length?e=w.ident:((0,w.check)(b,w.is.notUndef,"select(selector,[...]): argument selector is undefined"),(0,w.check)(e,w.is.func,"select(selector,[...]): argument "+e+" is not a function")),C(U,{selector:e,args:n})}function m(e,t){return(0,w.check)(e,w.is.notUndef,"actionChannel(pattern,...): argument pattern is undefined"),arguments.length>1&&((0,w.check)(t,w.is.notUndef,"actionChannel(pattern, buffer): argument buffer is undefined"),(0,w.check)(t,w.is.notUndef,"actionChannel(pattern, buffer): argument "+t+" is not a valid buffer")),C(_,{pattern:e,buffer:t})}function v(){return C(R,{})}Object.defineProperty(t,"__esModule",{value:!0}),t.asEffect=void 0;var g=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&u["return"]&&u["return"]()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.take=o,t.takem=i,t.put=a,t.race=u,t.call=c,t.apply=f,t.cps=l,t.fork=d,t.spawn=h,t.join=p,t.cancel=y,t.select=b,t.actionChannel=m,t.cancelled=v;var w=n(731),k=(0,w.sym)("IO"),E="TAKE",T="PUT",P="RACE",O="CALL",x="CPS",j="FORK",A="JOIN",S="CANCEL",U="SELECT",_="ACTION_CHANNEL",R="CANCELLED",C=function(e,t){var n;return n={},r(n,k,!0),r(n,e,t),n};a.sync=function(){var e=a.apply(void 0,arguments);return e[T].sync=!0,e};var B=function(e){return e[w.TASK]};t.asEffect={take:function(e){return e&&e[k]&&e[E]},put:function(e){return e&&e[k]&&e[T]},race:function(e){return e&&e[k]&&e[P]},call:function(e){return e&&e[k]&&e[O]},cps:function(e){return e&&e[k]&&e[x]},fork:function(e){return e&&e[k]&&e[j]},join:function(e){return e&&e[k]&&e[A]},cancel:function(e){return e&&e[k]&&e[S]},select:function(e){return e&&e[k]&&e[U]},actionChannel:function(e){return e&&e[k]&&e[_]},cancelled:function(e){return e&&e[k]&&e[R]}}},731:function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t,n){if(!t(e))throw l("error","uncaught at check",n),new Error(n)}function o(e,t){var n=e.indexOf(t);n>=0&&e.splice(n,1)}function i(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=d({},e),n=new Promise(function(e,n){t.resolve=e,t.reject=n});return t.promise=n,t}function a(e){for(var t=[],n=0;n<e;n++)t.push(i());return t}function u(e){var t=arguments.length<=1||void 0===arguments[1]||arguments[1],n=void 0,r=new Promise(function(r){n=setTimeout(function(){return r(t)},e)});return r[b]=function(){return clearTimeout(n)},r}function s(){var e,t=!0,r=void 0,o=void 0;return e={},n(e,y,!0),n(e,"isRunning",function(){return t}),n(e,"result",function(){return r}),n(e,"error",function(){return o}),n(e,"setRunning",function(e){return t=e}),n(e,"setResult",function(e){return r=e}),n(e,"setError",function(e){return o=e}),e}function c(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0];return function(){return++e}}function f(e){var t=arguments.length<=1||void 0===arguments[1]?g:arguments[1],n=arguments.length<=2||void 0===arguments[2]?"":arguments[2],r={name:n,next:e,"throw":t,"return":w};return"undefined"!=typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r}function l(e,t,n){"undefined"==typeof window?console.log("redux-saga "+e+": "+t+"\n"+(n&&n.stack||n)):console[e].call(console,t,n)}Object.defineProperty(t,"__esModule",{value:!0});var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.check=r,t.remove=o,t.deferred=i,t.arrayOfDeffered=a,t.delay=u,t.createMockTask=s,t.autoInc=c,t.makeIterator=f,t.log=l;var p=t.sym=function(e){return"@@redux-saga/"+e},y=t.TASK=p("TASK"),b=(t.MATCH=p("MATCH"),t.CANCEL=p("cancelPromise")),m=t.konst=function(e){return function(){return e}},v=(t.kTrue=m(!0),t.kFalse=m(!1),t.noop=function(){},t.ident=function(e){return e},t.is={undef:function(e){return null===e||void 0===e},notUndef:function(e){return null!==e&&void 0!==e},func:function(e){return"function"==typeof e},number:function(e){return"number"==typeof e},array:Array.isArray,promise:function(e){return e&&v.func(e.then)},iterator:function(e){return e&&v.func(e.next)&&v.func(e["throw"])},task:function(e){return e&&e[y]},take:function(e){return e&&v.func(e.take)},put:function(e){return e&&v.func(e.put)},observable:function(e){return e&&v.func(e.subscribe)},buffer:function(e){return e&&v.func(e.isEmpty)&&v.func(e.take)&&v.func(e.put)},pattern:function(e){return e&&("string"==typeof e||"symbol"===("undefined"==typeof e?"undefined":h(e))||v.func(e)||v.array(e))}}),g=function(e){throw e},w=function(e){return{value:e,done:!0}};t.internalErr=function(e){return new Error("\n  redux-saga: Error checking hooks detected an inconsisten state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+e+"\n")}},735:function(e,t,n){"use strict";function r(){return{type:i.b}}function o(e){return{type:i.a,payload:e}}var i=n(694);t.b=r,t.a=o}});