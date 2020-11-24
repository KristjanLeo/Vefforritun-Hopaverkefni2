!function(){"use strict";function t(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}t((function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:p,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",y={};function v(){}function m(){}function g(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,L=b&&b(b(_([])));L&&L!==r&&n.call(L,i)&&(w=L);var S=g.prototype=v.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=S.constructor=g,g.constructor=m,m.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(S),c(S,u,"Generator"),S[i]=function(){return this},S.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));function e(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}}var n=t((function(t){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)})),o=t((function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)})),i=t((function(t){var e="__core-js_shared__",r=o[e]||(o[e]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),a=0,u=Math.random(),c=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++a+u).toString(36))},s=t((function(t){var e=i("wks"),r=o.Symbol,n="function"==typeof r;(t.exports=function(t){return e[t]||(e[t]=n&&r[t]||(n?r:c)("Symbol."+t))}).store=e})),l=function(t){return"object"==typeof t?null!==t:"function"==typeof t},f=function(t){if(!l(t))throw TypeError(t+" is not an object!");return t},p=function(t){try{return!!t()}catch(t){return!0}},h=!p((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),d=o.document,y=l(d)&&l(d.createElement),v=function(t){return y?d.createElement(t):{}},m=!h&&!p((function(){return 7!=Object.defineProperty(v("div"),"a",{get:function(){return 7}}).a})),g=Object.defineProperty,w={f:h?Object.defineProperty:function(t,e,r){if(f(t),e=function(t,e){if(!l(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!l(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!l(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!l(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")}(e,!0),f(r),m)try{return g(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},b=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},L=h?function(t,e,r){return w.f(t,e,b(1,r))}:function(t,e,r){return t[e]=r,t},S=s("unscopables"),x=Array.prototype;null==x[S]&&L(x,S,{});var k=function(t){x[S][t]=!0},O=function(t,e){return{value:e,done:!!t}},j={},E={}.toString,C=function(t){return E.call(t).slice(8,-1)},_=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==C(t)?t.split(""):Object(t)},T=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},M=function(t){return _(T(t))},R={}.hasOwnProperty,P=function(t,e){return R.call(t,e)},F=i("native-function-to-string",Function.toString),A=t((function(t){var e=c("src"),r="toString",i=(""+F).split(r);n.inspectSource=function(t){return F.call(t)},(t.exports=function(t,r,n,a){var u="function"==typeof n;u&&(P(n,"name")||L(n,"name",r)),t[r]!==n&&(u&&(P(n,e)||L(n,e,t[r]?""+t[r]:i.join(String(r)))),t===o?t[r]=n:a?t[r]?t[r]=n:L(t,r,n):(delete t[r],L(t,r,n)))})(Function.prototype,r,(function(){return"function"==typeof this&&this[e]||F.call(this)}))})),G=function(t,e,r){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}},N=function(t,e,r){var i,a,u,c,s=t&N.F,l=t&N.G,f=t&N.S,p=t&N.P,h=t&N.B,d=l?o:f?o[e]||(o[e]={}):(o[e]||{}).prototype,y=l?n:n[e]||(n[e]={}),v=y.prototype||(y.prototype={});for(i in l&&(r=e),r)u=((a=!s&&d&&void 0!==d[i])?d:r)[i],c=h&&a?G(u,o):p&&"function"==typeof u?G(Function.call,u):u,d&&A(d,i,u,t&N.U),y[i]!=u&&L(y,i,c),p&&v[i]!=u&&(v[i]=u)};o.core=n,N.F=1,N.G=2,N.S=4,N.P=8,N.B=16,N.W=32,N.U=64,N.R=128;var q,I=N,D=Math.ceil,V=Math.floor,B=function(t){return isNaN(t=+t)?0:(t>0?V:D)(t)},H=Math.min,z=Math.max,U=Math.min,W=i("keys"),Y=function(t){return W[t]||(W[t]=c(t))},J=(q=!1,function(t,e,r){var n,o,i=M(t),a=(n=i.length)>0?H(B(n),9007199254740991):0,u=function(t,e){return(t=B(t))<0?z(t+e,0):U(t,e)}(r,a);if(q&&e!=e){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((q||u in i)&&i[u]===e)return q||u||0;return!q&&-1}),K=Y("IE_PROTO"),Q="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),X=Object.keys||function(t){return function(t,e){var r,n=M(t),o=0,i=[];for(r in n)r!=K&&P(n,r)&&i.push(r);for(;e.length>o;)P(n,r=e[o++])&&(~J(i,r)||i.push(r));return i}(t,Q)},Z=h?Object.defineProperties:function(t,e){f(t);for(var r,n=X(e),o=n.length,i=0;o>i;)w.f(t,r=n[i++],e[r]);return t},$=o.document,tt=$&&$.documentElement,et=Y("IE_PROTO"),rt=function(){},nt=function(){var t,e=v("iframe"),r=Q.length;for(e.style.display="none",tt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),nt=t.F;r--;)delete nt.prototype[Q[r]];return nt()},ot=Object.create||function(t,e){var r;return null!==t?(rt.prototype=f(t),r=new rt,rt.prototype=null,r[et]=t):r=nt(),void 0===e?r:Z(r,e)},it=w.f,at=s("toStringTag"),ut=function(t,e,r){t&&!P(t=r?t:t.prototype,at)&&it(t,at,{configurable:!0,value:e})},ct={};L(ct,s("iterator"),(function(){return this}));var st=function(t,e,r){t.prototype=ot(ct,{next:b(1,r)}),ut(t,e+" Iterator")},lt=function(t){return Object(T(t))},ft=Y("IE_PROTO"),pt=Object.prototype,ht=Object.getPrototypeOf||function(t){return t=lt(t),P(t,ft)?t[ft]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?pt:null},dt=s("iterator"),yt=!([].keys&&"next"in[].keys()),vt="keys",mt="values",gt=function(){return this},wt=function(t,e,r,n,o,i,a){st(r,e,n);var u,c,s,l=function(t){if(!yt&&t in d)return d[t];switch(t){case vt:case mt:return function(){return new r(this,t)}}return function(){return new r(this,t)}},f=e+" Iterator",p=o==mt,h=!1,d=t.prototype,y=d[dt]||d["@@iterator"]||o&&d[o],v=y||l(o),m=o?p?l("entries"):v:void 0,g="Array"==e&&d.entries||y;if(g&&(s=ht(g.call(new t)))!==Object.prototype&&s.next&&(ut(s,f,!0),"function"!=typeof s[dt]&&L(s,dt,gt)),p&&y&&y.name!==mt&&(h=!0,v=function(){return y.call(this)}),(yt||h||!d[dt])&&L(d,dt,v),j[e]=v,j[f]=gt,o)if(u={values:p?v:l(mt),keys:i?v:l(vt),entries:m},a)for(c in u)c in d||A(d,c,u[c]);else I(I.P+I.F*(yt||h),e,u);return u}(Array,"Array",(function(t,e){this._t=M(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,O(1)):O(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])}),"values");j.Arguments=j.Array,k("keys"),k("values"),k("entries");for(var bt=s("iterator"),Lt=s("toStringTag"),St=j.Array,xt={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},kt=X(xt),Ot=0;Ot<kt.length;Ot++){var jt,Et=kt[Ot],Ct=xt[Et],_t=o[Et],Tt=_t&&_t.prototype;if(Tt&&(Tt[bt]||L(Tt,bt,St),Tt[Lt]||L(Tt,Lt,Et),j[Et]=St,Ct))for(jt in wt)Tt[jt]||A(Tt,jt,wt[jt],!0)}var Mt=s("toStringTag"),Rt="Arguments"==C(function(){return arguments}()),Pt={};Pt[s("toStringTag")]="z",Pt+""!="[object z]"&&A(Object.prototype,"toString",(function(){return"[object "+((void 0===(t=this)?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Mt))?r:Rt?C(e):"Object"==(n=C(e))&&"function"==typeof e.callee?"Arguments":n)+"]");var t,e,r,n}),!0);var Ft,At,Gt,Nt;function qt(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=document.createElement(t),o=arguments.length,i=new Array(o>3?o-3:0),a=3;a<o;a++)i[a-3]=arguments[a];for(var u=0;u<i.length;u+=1)e&&Object.keys(e).forEach((function(t){n.setAttribute(t,e[t])})),r&&Object.keys(r).forEach((function(t){n.addEventListener(t,r[t])})),"string"==typeof i[u]?n.appendChild(document.createTextNode(i[u])):n.appendChild(i[u]);return n}function It(t){return(Math.floor(t/3600)>0?Math.floor(t/3600)+":":"")+(Math.floor(t%3600/60)>0?Math.floor(t%3600/60)>10?Math.floor(t%3600/60):"0"+Math.floor(t%3600/60)+":":"00:")+(t%60>10?60&t:"0"+t%60)}function Dt(t){var e=(Date.now()-t)/1e3;return e>31536e3?"Fyrir "+Math.floor(e/31536e3)+" árum síðan":e>=2592e3?"Fyrir "+Math.floor(e/2592e3)+" mánuðum síðan":e>=604800?"Fyrir "+Math.floor(e/604800)+" vikum síðan":e>=86400?"Fyrir "+Math.floor(e/86400)+" dögum síðan":e>=3600?"Fyrir "+Math.floor(e/3600)+" klukkutímum síðan":e>=60?"Fyrir "+Math.floor(e/60)+" mínútum síðan":"Fyrir "+e+" sekúndum síðan"}Ft="keys",At=function(){return function(t){return X(lt(t))}},Gt=(n.Object||{})[Ft]||Object[Ft],(Nt={})[Ft]=At(Gt),I(I.S+I.F*p((function(){Gt(1)})),"Object",Nt);var Vt="../videos.json";function Bt(){return Ht.apply(this,arguments)}function Ht(){return(Ht=r(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(Vt).then((function(t){if(!t.ok)throw new Error("non 200 status");return t.json()})).then((function(t){return t})).catch((function(){console.error("Villa við að sækja gögn")}));case 2:return e=t.sent,console.log(e),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function zt(t){return Ut.apply(this,arguments)}function Ut(){return(Ut=r(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.currentTime-=3;case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Wt(t){return Yt.apply(this,arguments)}function Yt(){return(Yt=r(regeneratorRuntime.mark((function t(e){var r,n,o,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=document.getElementById("playpause"),!e.paused&&!e.ended&&e.currentTime>0?(e.pause(),r.src="img/play.svg",n=document.querySelector(".videocol"),console.log(n),o=qt("div",{class:"overlay"},{},""),n.appendChild(o)):(e.play(),r.src="img/pause.svg",i=document.querySelector(".videocol"),a=document.querySelector(".overlay"),i.removeChild(a));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Jt(t){return Kt.apply(this,arguments)}function Kt(){return(Kt=r(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=document.getElementById("muteunmute"),e.volume>0?(e.volume=0,r.src="img/unmute.svg"):(e.volume=1,r.src="img/mute.svg");case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Qt(t){return Xt.apply(this,arguments)}function Xt(){return(Xt=r(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.requestFullscreen();case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Zt(t){return $t.apply(this,arguments)}function $t(){return($t=r(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.currentTime+=3;case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function te(t){return ee.apply(this,arguments)}function ee(){return(ee=r(regeneratorRuntime.mark((function t(e){var r,n,o,i,a,u,c,s,l,f,p,h,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=document.querySelector("main"),n=qt("div",{class:"grid"},{},""),r.appendChild(n),o=qt("div",{class:"row controlrow"},{},""),n.appendChild(o),i=qt("img",{class:"button-img",src:"img/back.svg",width:"75",height:"75"},{},""),a=qt("button",{class:"button"},{click:function(){zt(e)}},i),o.appendChild(a),u=qt("img",{class:"button-img",src:"img/play.svg",width:"75",height:"75",id:"playpause"},{},""),c=qt("button",{class:"button"},{click:function(){Wt(e)}},u),o.appendChild(c),s=qt("img",{class:"button-img",src:"img/mute.svg",width:"75",height:"75",id:"muteunmute"},{},""),l=qt("button",{class:"button"},{click:function(){Jt(e)}},s),o.appendChild(l),f=qt("img",{class:"button-img",src:"img/fullscreen.svg",width:"75",height:"75"},{},""),p=qt("button",{class:"button"},{click:function(){Qt(e)}},f),o.appendChild(p),h=qt("img",{class:"button-img",src:"img/next.svg",width:"75",height:"75"},{},""),d=qt("button",{class:"button"},{click:function(){Zt(e)}},h),o.appendChild(d);case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function re(t,e){return ne.apply(this,arguments)}function ne(){return(ne=r(regeneratorRuntime.mark((function t(e,r){var n,o,i,a,u,c,s,l,f,p,h,d,y,v,m,g,w,b,L,S;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=document.querySelector("body"),o=document.querySelector("main"),console.log(r.related),i=qt("div",{class:"grid"},{},""),o.appendChild(i),a=qt("div",{class:"row"},{},""),i.appendChild(a),u=qt("h2",{class:"col col-12"},{},"Tengd myndbönd"),a.appendChild(u),c=qt("div",{class:"row"},{},""),i.appendChild(c),s=new Array(r.related.length),l=function(t){var e=r.related[t];s[t]=qt("div",{class:"col col-4 col-sm-12"},{},""),s[t].onclick=function(){document.location.href="video.html?id=".concat(e)},c.appendChild(s[t])},f=0;f<r.related.length;f+=1)l(f);for(p=new Array(r.related.length),h=new Array(r.related.length),d=new Array(r.related.length),y=0;y<r.related.length;y+=1)v=r.related[y],p[y]=qt("img",{src:e.videos[v-1].poster,class:"thumbnails"},{},""),h[y]=qt("span",{class:"display-time"},{},It(e.videos[v-1].duration)),d[y]=qt("div",{class:"thumbnail-container videocontainer"},{},p[y],h[y]),s[y].appendChild(d[y]);for(m=new Array(r.related.length),g=new Array(r.related.length),w=0;w<r.related.length;w+=1)b=r.related[w],m[w]=qt("h5",{},{},Dt(e.videos[b-1].created)),g[w]=qt("h4",{},{},e.videos[b-1].title),s[w].appendChild(g[w]),s[w].appendChild(m[w]);L=qt("hr",{class:"split"},{},""),n.appendChild(L),S=qt("a",{href:"index.html"},{},"Til baka"),n.appendChild(S);case 25:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function oe(t,e){return ie.apply(this,arguments)}function ie(){return(ie=r(regeneratorRuntime.mark((function t(e,r){var n,o,i,a,u,c,s,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.videos[r-1],o=document.querySelector("body"),i=qt("h1",{},{},n.title),o.appendChild(i),a=qt("main",{},{},""),o.appendChild(a),u=qt("div",{class:"grid"},{},""),c=qt("div",{class:"row"},{},""),u.appendChild(c),s=qt("div",{class:"col col-12 videocol"},{},""),c.appendChild(s),l=qt("video",{src:n.video},{},""),s.appendChild(l),a.appendChild(u),te(l),re(e,n);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ae(t){return ue.apply(this,arguments)}function ue(){return(ue=r(regeneratorRuntime.mark((function t(e){var r,n,o,i,a,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{for(r=window.location.href.toLowerCase(),n=new URL(r),o=n.searchParams.get("id"),i=!1,a=0;a<e.videos.length;a++)e.videos[a].id==o&&(i=!0);i?oe(e,o):(u=qt("div",{class:"errormessage"},{},"Villa við að sækja vídeo, ekkert vídeo fannst með id: ".concat(o)),document.querySelector("body").appendChild(u))}catch(t){console.log("Error"+t)}case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",r(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=qt("div",{class:"loading"},{},"Hleð gögnum..."),document.querySelector("body").appendChild(e),t.next=4,Bt().then((function(t){ae(t)}));case 4:document.querySelector("body").removeChild(e);case 5:case"end":return t.stop()}}),t)}))))}();
//# sourceMappingURL=videosbundle.js.map
