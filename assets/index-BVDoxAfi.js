(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))h(g);new MutationObserver(g=>{for(const k of g)if(k.type==="childList")for(const z of k.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&h(z)}).observe(document,{childList:!0,subtree:!0});function c(g){const k={};return g.integrity&&(k.integrity=g.integrity),g.referrerPolicy&&(k.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?k.credentials="include":g.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function h(g){if(g.ep)return;g.ep=!0;const k=c(g);fetch(g.href,k)}})();function _p(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var hs={exports:{}},Br={},gs={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc;function zp(){if(Rc)return te;Rc=1;var o=Symbol.for("react.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),z=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),F=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),D=Symbol.iterator;function G(m){return m===null||typeof m!="object"?null:(m=D&&m[D]||m["@@iterator"],typeof m=="function"?m:null)}var oe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Y={};function J(m,w,B){this.props=m,this.context=w,this.refs=Y,this.updater=B||oe}J.prototype.isReactComponent={},J.prototype.setState=function(m,w){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,w,"setState")},J.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function ue(){}ue.prototype=J.prototype;function M(m,w,B){this.props=m,this.context=w,this.refs=Y,this.updater=B||oe}var he=M.prototype=new ue;he.constructor=M,X(he,J.prototype),he.isPureReactComponent=!0;var me=Array.isArray,se=Object.prototype.hasOwnProperty,ne={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function Z(m,w,B){var H,Q={},ee=null,re=null;if(w!=null)for(H in w.ref!==void 0&&(re=w.ref),w.key!==void 0&&(ee=""+w.key),w)se.call(w,H)&&!U.hasOwnProperty(H)&&(Q[H]=w[H]);var ie=arguments.length-2;if(ie===1)Q.children=B;else if(1<ie){for(var fe=Array(ie),Ce=0;Ce<ie;Ce++)fe[Ce]=arguments[Ce+2];Q.children=fe}if(m&&m.defaultProps)for(H in ie=m.defaultProps,ie)Q[H]===void 0&&(Q[H]=ie[H]);return{$$typeof:o,type:m,key:ee,ref:re,props:Q,_owner:ne.current}}function Ue(m,w){return{$$typeof:o,type:m.type,key:w,ref:m.ref,props:m.props,_owner:m._owner}}function $e(m){return typeof m=="object"&&m!==null&&m.$$typeof===o}function ze(m){var w={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(B){return w[B]})}var He=/\/+/g;function de(m,w){return typeof m=="object"&&m!==null&&m.key!=null?ze(""+m.key):w.toString(36)}function Pe(m,w,B,H,Q){var ee=typeof m;(ee==="undefined"||ee==="boolean")&&(m=null);var re=!1;if(m===null)re=!0;else switch(ee){case"string":case"number":re=!0;break;case"object":switch(m.$$typeof){case o:case u:re=!0}}if(re)return re=m,Q=Q(re),m=H===""?"."+de(re,0):H,me(Q)?(B="",m!=null&&(B=m.replace(He,"$&/")+"/"),Pe(Q,w,B,"",function(Ce){return Ce})):Q!=null&&($e(Q)&&(Q=Ue(Q,B+(!Q.key||re&&re.key===Q.key?"":(""+Q.key).replace(He,"$&/")+"/")+m)),w.push(Q)),1;if(re=0,H=H===""?".":H+":",me(m))for(var ie=0;ie<m.length;ie++){ee=m[ie];var fe=H+de(ee,ie);re+=Pe(ee,w,B,fe,Q)}else if(fe=G(m),typeof fe=="function")for(m=fe.call(m),ie=0;!(ee=m.next()).done;)ee=ee.value,fe=H+de(ee,ie++),re+=Pe(ee,w,B,fe,Q);else if(ee==="object")throw w=String(m),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return re}function Ve(m,w,B){if(m==null)return m;var H=[],Q=0;return Pe(m,H,"","",function(ee){return w.call(B,ee,Q++)}),H}function Re(m){if(m._status===-1){var w=m._result;w=w(),w.then(function(B){(m._status===0||m._status===-1)&&(m._status=1,m._result=B)},function(B){(m._status===0||m._status===-1)&&(m._status=2,m._result=B)}),m._status===-1&&(m._status=0,m._result=w)}if(m._status===1)return m._result.default;throw m._result}var ge={current:null},T={transition:null},A={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:T,ReactCurrentOwner:ne};function P(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:Ve,forEach:function(m,w,B){Ve(m,function(){w.apply(this,arguments)},B)},count:function(m){var w=0;return Ve(m,function(){w++}),w},toArray:function(m){return Ve(m,function(w){return w})||[]},only:function(m){if(!$e(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},te.Component=J,te.Fragment=c,te.Profiler=g,te.PureComponent=M,te.StrictMode=h,te.Suspense=N,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,te.act=P,te.cloneElement=function(m,w,B){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var H=X({},m.props),Q=m.key,ee=m.ref,re=m._owner;if(w!=null){if(w.ref!==void 0&&(ee=w.ref,re=ne.current),w.key!==void 0&&(Q=""+w.key),m.type&&m.type.defaultProps)var ie=m.type.defaultProps;for(fe in w)se.call(w,fe)&&!U.hasOwnProperty(fe)&&(H[fe]=w[fe]===void 0&&ie!==void 0?ie[fe]:w[fe])}var fe=arguments.length-2;if(fe===1)H.children=B;else if(1<fe){ie=Array(fe);for(var Ce=0;Ce<fe;Ce++)ie[Ce]=arguments[Ce+2];H.children=ie}return{$$typeof:o,type:m.type,key:Q,ref:ee,props:H,_owner:re}},te.createContext=function(m){return m={$$typeof:z,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:k,_context:m},m.Consumer=m},te.createElement=Z,te.createFactory=function(m){var w=Z.bind(null,m);return w.type=m,w},te.createRef=function(){return{current:null}},te.forwardRef=function(m){return{$$typeof:_,render:m}},te.isValidElement=$e,te.lazy=function(m){return{$$typeof:$,_payload:{_status:-1,_result:m},_init:Re}},te.memo=function(m,w){return{$$typeof:F,type:m,compare:w===void 0?null:w}},te.startTransition=function(m){var w=T.transition;T.transition={};try{m()}finally{T.transition=w}},te.unstable_act=P,te.useCallback=function(m,w){return ge.current.useCallback(m,w)},te.useContext=function(m){return ge.current.useContext(m)},te.useDebugValue=function(){},te.useDeferredValue=function(m){return ge.current.useDeferredValue(m)},te.useEffect=function(m,w){return ge.current.useEffect(m,w)},te.useId=function(){return ge.current.useId()},te.useImperativeHandle=function(m,w,B){return ge.current.useImperativeHandle(m,w,B)},te.useInsertionEffect=function(m,w){return ge.current.useInsertionEffect(m,w)},te.useLayoutEffect=function(m,w){return ge.current.useLayoutEffect(m,w)},te.useMemo=function(m,w){return ge.current.useMemo(m,w)},te.useReducer=function(m,w,B){return ge.current.useReducer(m,w,B)},te.useRef=function(m){return ge.current.useRef(m)},te.useState=function(m){return ge.current.useState(m)},te.useSyncExternalStore=function(m,w,B){return ge.current.useSyncExternalStore(m,w,B)},te.useTransition=function(){return ge.current.useTransition()},te.version="18.3.1",te}var Lc;function Ls(){return Lc||(Lc=1,gs.exports=zp()),gs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc;function Pp(){if(Oc)return Br;Oc=1;var o=Ls(),u=Symbol.for("react.element"),c=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,g=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function z(_,N,F){var $,D={},G=null,oe=null;F!==void 0&&(G=""+F),N.key!==void 0&&(G=""+N.key),N.ref!==void 0&&(oe=N.ref);for($ in N)h.call(N,$)&&!k.hasOwnProperty($)&&(D[$]=N[$]);if(_&&_.defaultProps)for($ in N=_.defaultProps,N)D[$]===void 0&&(D[$]=N[$]);return{$$typeof:u,type:_,key:G,ref:oe,props:D,_owner:g.current}}return Br.Fragment=c,Br.jsx=z,Br.jsxs=z,Br}var bc;function Tp(){return bc||(bc=1,hs.exports=Pp()),hs.exports}var a=Tp(),il={},ys={exports:{}},nt={},vs={exports:{}},xs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc;function Ip(){return Mc||(Mc=1,(function(o){function u(T,A){var P=T.length;T.push(A);e:for(;0<P;){var m=P-1>>>1,w=T[m];if(0<g(w,A))T[m]=A,T[P]=w,P=m;else break e}}function c(T){return T.length===0?null:T[0]}function h(T){if(T.length===0)return null;var A=T[0],P=T.pop();if(P!==A){T[0]=P;e:for(var m=0,w=T.length,B=w>>>1;m<B;){var H=2*(m+1)-1,Q=T[H],ee=H+1,re=T[ee];if(0>g(Q,P))ee<w&&0>g(re,Q)?(T[m]=re,T[ee]=P,m=ee):(T[m]=Q,T[H]=P,m=H);else if(ee<w&&0>g(re,P))T[m]=re,T[ee]=P,m=ee;else break e}}return A}function g(T,A){var P=T.sortIndex-A.sortIndex;return P!==0?P:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var k=performance;o.unstable_now=function(){return k.now()}}else{var z=Date,_=z.now();o.unstable_now=function(){return z.now()-_}}var N=[],F=[],$=1,D=null,G=3,oe=!1,X=!1,Y=!1,J=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function he(T){for(var A=c(F);A!==null;){if(A.callback===null)h(F);else if(A.startTime<=T)h(F),A.sortIndex=A.expirationTime,u(N,A);else break;A=c(F)}}function me(T){if(Y=!1,he(T),!X)if(c(N)!==null)X=!0,Re(se);else{var A=c(F);A!==null&&ge(me,A.startTime-T)}}function se(T,A){X=!1,Y&&(Y=!1,ue(Z),Z=-1),oe=!0;var P=G;try{for(he(A),D=c(N);D!==null&&(!(D.expirationTime>A)||T&&!ze());){var m=D.callback;if(typeof m=="function"){D.callback=null,G=D.priorityLevel;var w=m(D.expirationTime<=A);A=o.unstable_now(),typeof w=="function"?D.callback=w:D===c(N)&&h(N),he(A)}else h(N);D=c(N)}if(D!==null)var B=!0;else{var H=c(F);H!==null&&ge(me,H.startTime-A),B=!1}return B}finally{D=null,G=P,oe=!1}}var ne=!1,U=null,Z=-1,Ue=5,$e=-1;function ze(){return!(o.unstable_now()-$e<Ue)}function He(){if(U!==null){var T=o.unstable_now();$e=T;var A=!0;try{A=U(!0,T)}finally{A?de():(ne=!1,U=null)}}else ne=!1}var de;if(typeof M=="function")de=function(){M(He)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Ve=Pe.port2;Pe.port1.onmessage=He,de=function(){Ve.postMessage(null)}}else de=function(){J(He,0)};function Re(T){U=T,ne||(ne=!0,de())}function ge(T,A){Z=J(function(){T(o.unstable_now())},A)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(T){T.callback=null},o.unstable_continueExecution=function(){X||oe||(X=!0,Re(se))},o.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<T?Math.floor(1e3/T):5},o.unstable_getCurrentPriorityLevel=function(){return G},o.unstable_getFirstCallbackNode=function(){return c(N)},o.unstable_next=function(T){switch(G){case 1:case 2:case 3:var A=3;break;default:A=G}var P=G;G=A;try{return T()}finally{G=P}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var P=G;G=T;try{return A()}finally{G=P}},o.unstable_scheduleCallback=function(T,A,P){var m=o.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?m+P:m):P=m,T){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=P+w,T={id:$++,callback:A,priorityLevel:T,startTime:P,expirationTime:w,sortIndex:-1},P>m?(T.sortIndex=P,u(F,T),c(N)===null&&T===c(F)&&(Y?(ue(Z),Z=-1):Y=!0,ge(me,P-m))):(T.sortIndex=w,u(N,T),X||oe||(X=!0,Re(se))),T},o.unstable_shouldYield=ze,o.unstable_wrapCallback=function(T){var A=G;return function(){var P=G;G=A;try{return T.apply(this,arguments)}finally{G=P}}}})(xs)),xs}var Ac;function Rp(){return Ac||(Ac=1,vs.exports=Ip()),vs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc;function Lp(){if(Fc)return nt;Fc=1;var o=Ls(),u=Rp();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h=new Set,g={};function k(e,t){z(e,t),z(e+"Capture",t)}function z(e,t){for(g[e]=t,e=0;e<t.length;e++)h.add(t[e])}var _=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N=Object.prototype.hasOwnProperty,F=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$={},D={};function G(e){return N.call(D,e)?!0:N.call($,e)?!1:F.test(e)?D[e]=!0:($[e]=!0,!1)}function oe(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,t,n,r){if(t===null||typeof t>"u"||oe(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Y(e,t,n,r,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new Y(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];J[t]=new Y(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new Y(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new Y(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new Y(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){J[e]=new Y(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){J[e]=new Y(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){J[e]=new Y(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){J[e]=new Y(e,5,!1,e.toLowerCase(),null,!1,!1)});var ue=/[\-:]([a-z])/g;function M(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ue,M);J[t]=new Y(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ue,M);J[t]=new Y(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ue,M);J[t]=new Y(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){J[e]=new Y(e,1,!1,e.toLowerCase(),null,!1,!1)}),J.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){J[e]=new Y(e,1,!1,e.toLowerCase(),null,!0,!0)});function he(e,t,n,r){var i=J.hasOwnProperty(t)?J[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X(t,n,i,r)&&(n=null),r||i===null?G(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var me=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),ne=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),Ue=Symbol.for("react.profiler"),$e=Symbol.for("react.provider"),ze=Symbol.for("react.context"),He=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),Ve=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),T=Symbol.iterator;function A(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,m;function w(e){if(m===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);m=t&&t[1]||""}return`
`+m+e}var B=!1;function H(e,t){if(!e||B)return"";B=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var r=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){r=x}e.call(t.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var i=x.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,d=l.length-1;1<=s&&0<=d&&i[s]!==l[d];)d--;for(;1<=s&&0<=d;s--,d--)if(i[s]!==l[d]){if(s!==1||d!==1)do if(s--,d--,0>d||i[s]!==l[d]){var f=`
`+i[s].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=s&&0<=d);break}}}finally{B=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?w(e):""}function Q(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=H(e.type,!1),e;case 11:return e=H(e.type.render,!1),e;case 1:return e=H(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case ne:return"Portal";case Ue:return"Profiler";case Z:return"StrictMode";case de:return"Suspense";case Pe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ze:return(e.displayName||"Context")+".Consumer";case $e:return(e._context.displayName||"Context")+".Provider";case He:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ve:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}function re(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(t);case 8:return t===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ce(e){var t=fe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yr(e){e._valueTracker||(e._valueTracker=Ce(e))}function Fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kl(e,t){var n=t.checked;return P({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ds(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ie(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bs(e,t){t=t.checked,t!=null&&he(e,"checked",t,!1)}function Sl(e,t){Bs(e,t);var n=ie(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&jl(e,t.type,ie(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Us(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jl(e,t,n){(t!=="number"||Kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var tr=Array.isArray;function jn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ie(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return P({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $s(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(c(92));if(tr(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ie(n)}}function Hs(e,t){var n=ie(t.value),r=ie(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ws(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ws(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xr,Gs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Td=["Webkit","ms","Moz","O"];Object.keys(rr).forEach(function(e){Td.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),rr[t]=rr[e]})});function Qs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||rr.hasOwnProperty(e)&&rr[e]?(""+t).trim():t+"px"}function Ys(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Id=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function El(e,t){if(t){if(Id[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function _l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zl=null;function Pl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tl=null,Cn=null,Nn=null;function Ks(e){if(e=Nr(e)){if(typeof Tl!="function")throw Error(c(280));var t=e.stateNode;t&&(t=xi(t),Tl(e.stateNode,e.type,t))}}function Xs(e){Cn?Nn?Nn.push(e):Nn=[e]:Cn=e}function Zs(){if(Cn){var e=Cn,t=Nn;if(Nn=Cn=null,Ks(e),t)for(e=0;e<t.length;e++)Ks(t[e])}}function Js(e,t){return e(t)}function qs(){}var Il=!1;function ea(e,t,n){if(Il)return e(t,n);Il=!0;try{return Js(e,t,n)}finally{Il=!1,(Cn!==null||Nn!==null)&&(qs(),Zs())}}function ir(e,t){var n=e.stateNode;if(n===null)return null;var r=xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Rl=!1;if(_)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Rl=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Rl=!1}function Rd(e,t,n,r,i,l,s,d,f){var x=Array.prototype.slice.call(arguments,3);try{t.apply(n,x)}catch(j){this.onError(j)}}var or=!1,Zr=null,Jr=!1,Ll=null,Ld={onError:function(e){or=!0,Zr=e}};function Od(e,t,n,r,i,l,s,d,f){or=!1,Zr=null,Rd.apply(Ld,arguments)}function bd(e,t,n,r,i,l,s,d,f){if(Od.apply(this,arguments),or){if(or){var x=Zr;or=!1,Zr=null}else throw Error(c(198));Jr||(Jr=!0,Ll=x)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ta(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function na(e){if(on(e)!==e)throw Error(c(188))}function Md(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return na(i),e;if(l===r)return na(i),t;l=l.sibling}throw Error(c(188))}if(n.return!==r.return)n=i,r=l;else{for(var s=!1,d=i.child;d;){if(d===n){s=!0,n=i,r=l;break}if(d===r){s=!0,r=i,n=l;break}d=d.sibling}if(!s){for(d=l.child;d;){if(d===n){s=!0,n=l,r=i;break}if(d===r){s=!0,r=l,n=i;break}d=d.sibling}if(!s)throw Error(c(189))}}if(n.alternate!==r)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function ra(e){return e=Md(e),e!==null?ia(e):null}function ia(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ia(e);if(t!==null)return t;e=e.sibling}return null}var la=u.unstable_scheduleCallback,oa=u.unstable_cancelCallback,Ad=u.unstable_shouldYield,Fd=u.unstable_requestPaint,Ee=u.unstable_now,Dd=u.unstable_getCurrentPriorityLevel,Ol=u.unstable_ImmediatePriority,sa=u.unstable_UserBlockingPriority,qr=u.unstable_NormalPriority,Bd=u.unstable_LowPriority,aa=u.unstable_IdlePriority,ei=null,jt=null;function Ud(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Vd,$d=Math.log,Hd=Math.LN2;function Vd(e){return e>>>=0,e===0?32:31-($d(e)/Hd|0)|0}var ti=64,ni=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var d=s&~i;d!==0?r=sr(d):(l&=s,l!==0&&(r=sr(l)))}else s=n&~i,s!==0?r=sr(s):l!==0&&(r=sr(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),i=1<<n,r|=e[n],t&=~i;return r}function Wd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-mt(l),d=1<<s,f=i[s];f===-1?((d&n)===0||(d&r)!==0)&&(i[s]=Wd(d,t)):f<=t&&(e.expiredLanes|=d),l&=~d}}function bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ua(){var e=ti;return ti<<=1,(ti&4194240)===0&&(ti=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function Qd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-mt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Al(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var pe=0;function ca(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var da,Fl,fa,pa,ma,Dl=!1,ii=[],Ft=null,Dt=null,Bt=null,ur=new Map,cr=new Map,Ut=[],Yd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ha(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(t.pointerId)}}function dr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Nr(t),t!==null&&Fl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Kd(e,t,n,r,i){switch(t){case"focusin":return Ft=dr(Ft,e,t,n,r,i),!0;case"dragenter":return Dt=dr(Dt,e,t,n,r,i),!0;case"mouseover":return Bt=dr(Bt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return ur.set(l,dr(ur.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,cr.set(l,dr(cr.get(l)||null,e,t,n,r,i)),!0}return!1}function ga(e){var t=sn(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=ta(n),t!==null){e.blockedOn=t,ma(e.priority,function(){fa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zl=r,n.target.dispatchEvent(r),zl=null}else return t=Nr(n),t!==null&&Fl(t),e.blockedOn=n,!1;t.shift()}return!0}function ya(e,t,n){li(e)&&n.delete(t)}function Xd(){Dl=!1,Ft!==null&&li(Ft)&&(Ft=null),Dt!==null&&li(Dt)&&(Dt=null),Bt!==null&&li(Bt)&&(Bt=null),ur.forEach(ya),cr.forEach(ya)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Dl||(Dl=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Xd)))}function pr(e){function t(i){return fr(i,e)}if(0<ii.length){fr(ii[0],e);for(var n=1;n<ii.length;n++){var r=ii[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ft!==null&&fr(Ft,e),Dt!==null&&fr(Dt,e),Bt!==null&&fr(Bt,e),ur.forEach(t),cr.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)ga(n),n.blockedOn===null&&Ut.shift()}var En=me.ReactCurrentBatchConfig,oi=!0;function Zd(e,t,n,r){var i=pe,l=En.transition;En.transition=null;try{pe=1,Bl(e,t,n,r)}finally{pe=i,En.transition=l}}function Jd(e,t,n,r){var i=pe,l=En.transition;En.transition=null;try{pe=4,Bl(e,t,n,r)}finally{pe=i,En.transition=l}}function Bl(e,t,n,r){if(oi){var i=Ul(e,t,n,r);if(i===null)io(e,t,r,si,n),ha(e,r);else if(Kd(i,e,t,n,r))r.stopPropagation();else if(ha(e,r),t&4&&-1<Yd.indexOf(e)){for(;i!==null;){var l=Nr(i);if(l!==null&&da(l),l=Ul(e,t,n,r),l===null&&io(e,t,r,si,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else io(e,t,r,null,n)}}var si=null;function Ul(e,t,n,r){if(si=null,e=Pl(r),e=sn(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ta(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return si=e,null}function va(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dd()){case Ol:return 1;case sa:return 4;case qr:case Bd:return 16;case aa:return 536870912;default:return 16}default:return 16}}var $t=null,$l=null,ai=null;function xa(){if(ai)return ai;var e,t=$l,n=t.length,r,i="value"in $t?$t.value:$t.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[l-r];r++);return ai=i.slice(e,1<r?1-r:void 0)}function ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function wa(){return!1}function rt(e){function t(n,r,i,l,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ci:wa,this.isPropagationStopped=wa,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=rt(_n),mr=P({},_n,{view:0,detail:0}),qd=rt(mr),Vl,Wl,hr,di=P({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(Vl=e.screenX-hr.screenX,Wl=e.screenY-hr.screenY):Wl=Vl=0,hr=e),Vl)},movementY:function(e){return"movementY"in e?e.movementY:Wl}}),ka=rt(di),ef=P({},di,{dataTransfer:0}),tf=rt(ef),nf=P({},mr,{relatedTarget:0}),Gl=rt(nf),rf=P({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),lf=rt(rf),of=P({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sf=rt(of),af=P({},_n,{data:0}),Sa=rt(af),uf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},df={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ff(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=df[e])?!!t[e]:!1}function Ql(){return ff}var pf=P({},mr,{key:function(e){if(e.key){var t=uf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mf=rt(pf),hf=P({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ja=rt(hf),gf=P({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),yf=rt(gf),vf=P({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),xf=rt(vf),wf=P({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kf=rt(wf),Sf=[9,13,27,32],Yl=_&&"CompositionEvent"in window,gr=null;_&&"documentMode"in document&&(gr=document.documentMode);var jf=_&&"TextEvent"in window&&!gr,Ca=_&&(!Yl||gr&&8<gr&&11>=gr),Na=" ",Ea=!1;function _a(e,t){switch(e){case"keyup":return Sf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function za(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function Cf(e,t){switch(e){case"compositionend":return za(t);case"keypress":return t.which!==32?null:(Ea=!0,Na);case"textInput":return e=t.data,e===Na&&Ea?null:e;default:return null}}function Nf(e,t){if(zn)return e==="compositionend"||!Yl&&_a(e,t)?(e=xa(),ai=$l=$t=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ca&&t.locale!=="ko"?null:t.data;default:return null}}var Ef={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ef[e.type]:t==="textarea"}function Ta(e,t,n,r){Xs(r),t=gi(t,"onChange"),0<t.length&&(n=new Hl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,vr=null;function _f(e){Ya(e,0)}function fi(e){var t=Ln(e);if(Fs(t))return e}function zf(e,t){if(e==="change")return t}var Ia=!1;if(_){var Kl;if(_){var Xl="oninput"in document;if(!Xl){var Ra=document.createElement("div");Ra.setAttribute("oninput","return;"),Xl=typeof Ra.oninput=="function"}Kl=Xl}else Kl=!1;Ia=Kl&&(!document.documentMode||9<document.documentMode)}function La(){yr&&(yr.detachEvent("onpropertychange",Oa),vr=yr=null)}function Oa(e){if(e.propertyName==="value"&&fi(vr)){var t=[];Ta(t,vr,e,Pl(e)),ea(_f,t)}}function Pf(e,t,n){e==="focusin"?(La(),yr=t,vr=n,yr.attachEvent("onpropertychange",Oa)):e==="focusout"&&La()}function Tf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fi(vr)}function If(e,t){if(e==="click")return fi(t)}function Rf(e,t){if(e==="input"||e==="change")return fi(t)}function Lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Lf;function xr(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!N.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function ba(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ma(e,t){var n=ba(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ba(n)}}function Aa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Aa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fa(){for(var e=window,t=Kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}function Zl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Of(e){var t=Fa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Aa(n.ownerDocument.documentElement,n)){if(r!==null&&Zl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ma(n,l);var s=Ma(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bf=_&&"documentMode"in document&&11>=document.documentMode,Pn=null,Jl=null,wr=null,ql=!1;function Da(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ql||Pn==null||Pn!==Kr(r)||(r=Pn,"selectionStart"in r&&Zl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&xr(wr,r)||(wr=r,r=gi(Jl,"onSelect"),0<r.length&&(t=new Hl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tn={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},eo={},Ba={};_&&(Ba=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function mi(e){if(eo[e])return eo[e];if(!Tn[e])return e;var t=Tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ba)return eo[e]=t[n];return e}var Ua=mi("animationend"),$a=mi("animationiteration"),Ha=mi("animationstart"),Va=mi("transitionend"),Wa=new Map,Ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Wa.set(e,t),k(t,[e])}for(var to=0;to<Ga.length;to++){var no=Ga[to],Mf=no.toLowerCase(),Af=no[0].toUpperCase()+no.slice(1);Ht(Mf,"on"+Af)}Ht(Ua,"onAnimationEnd"),Ht($a,"onAnimationIteration"),Ht(Ha,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(Va,"onTransitionEnd"),z("onMouseEnter",["mouseout","mouseover"]),z("onMouseLeave",["mouseout","mouseover"]),z("onPointerEnter",["pointerout","pointerover"]),z("onPointerLeave",["pointerout","pointerover"]),k("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),k("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),k("onBeforeInput",["compositionend","keypress","textInput","paste"]),k("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ff=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function Qa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bd(r,t,void 0,e),e.currentTarget=null}function Ya(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var d=r[s],f=d.instance,x=d.currentTarget;if(d=d.listener,f!==l&&i.isPropagationStopped())break e;Qa(i,d,x),l=f}else for(s=0;s<r.length;s++){if(d=r[s],f=d.instance,x=d.currentTarget,d=d.listener,f!==l&&i.isPropagationStopped())break e;Qa(i,d,x),l=f}}}if(Jr)throw e=Ll,Jr=!1,Ll=null,e}function ve(e,t){var n=t[co];n===void 0&&(n=t[co]=new Set);var r=e+"__bubble";n.has(r)||(Ka(t,e,2,!1),n.add(r))}function ro(e,t,n){var r=0;t&&(r|=4),Ka(n,e,r,t)}var hi="_reactListening"+Math.random().toString(36).slice(2);function Sr(e){if(!e[hi]){e[hi]=!0,h.forEach(function(n){n!=="selectionchange"&&(Ff.has(n)||ro(n,!1,e),ro(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,ro("selectionchange",!1,t))}}function Ka(e,t,n,r){switch(va(t)){case 1:var i=Zd;break;case 4:i=Jd;break;default:i=Bl}n=i.bind(null,t,n,e),i=void 0,!Rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function io(e,t,n,r,i){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var d=r.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var f=s.tag;if((f===3||f===4)&&(f=s.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;s=s.return}for(;d!==null;){if(s=sn(d),s===null)return;if(f=s.tag,f===5||f===6){r=l=s;continue e}d=d.parentNode}}r=r.return}ea(function(){var x=l,j=Pl(n),C=[];e:{var S=Wa.get(e);if(S!==void 0){var I=Hl,L=e;switch(e){case"keypress":if(ui(n)===0)break e;case"keydown":case"keyup":I=mf;break;case"focusin":L="focus",I=Gl;break;case"focusout":L="blur",I=Gl;break;case"beforeblur":case"afterblur":I=Gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=tf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=yf;break;case Ua:case $a:case Ha:I=lf;break;case Va:I=xf;break;case"scroll":I=qd;break;case"wheel":I=kf;break;case"copy":case"cut":case"paste":I=sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=ja}var O=(t&4)!==0,_e=!O&&e==="scroll",y=O?S!==null?S+"Capture":null:S;O=[];for(var p=x,v;p!==null;){v=p;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,y!==null&&(E=ir(p,y),E!=null&&O.push(jr(p,E,v)))),_e)break;p=p.return}0<O.length&&(S=new I(S,L,null,n,j),C.push({event:S,listeners:O}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",S&&n!==zl&&(L=n.relatedTarget||n.fromElement)&&(sn(L)||L[Pt]))break e;if((I||S)&&(S=j.window===j?j:(S=j.ownerDocument)?S.defaultView||S.parentWindow:window,I?(L=n.relatedTarget||n.toElement,I=x,L=L?sn(L):null,L!==null&&(_e=on(L),L!==_e||L.tag!==5&&L.tag!==6)&&(L=null)):(I=null,L=x),I!==L)){if(O=ka,E="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(O=ja,E="onPointerLeave",y="onPointerEnter",p="pointer"),_e=I==null?S:Ln(I),v=L==null?S:Ln(L),S=new O(E,p+"leave",I,n,j),S.target=_e,S.relatedTarget=v,E=null,sn(j)===x&&(O=new O(y,p+"enter",L,n,j),O.target=v,O.relatedTarget=_e,E=O),_e=E,I&&L)t:{for(O=I,y=L,p=0,v=O;v;v=In(v))p++;for(v=0,E=y;E;E=In(E))v++;for(;0<p-v;)O=In(O),p--;for(;0<v-p;)y=In(y),v--;for(;p--;){if(O===y||y!==null&&O===y.alternate)break t;O=In(O),y=In(y)}O=null}else O=null;I!==null&&Xa(C,S,I,O,!1),L!==null&&_e!==null&&Xa(C,_e,L,O,!0)}}e:{if(S=x?Ln(x):window,I=S.nodeName&&S.nodeName.toLowerCase(),I==="select"||I==="input"&&S.type==="file")var b=zf;else if(Pa(S))if(Ia)b=Rf;else{b=Tf;var V=Pf}else(I=S.nodeName)&&I.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(b=If);if(b&&(b=b(e,x))){Ta(C,b,n,j);break e}V&&V(e,S,x),e==="focusout"&&(V=S._wrapperState)&&V.controlled&&S.type==="number"&&jl(S,"number",S.value)}switch(V=x?Ln(x):window,e){case"focusin":(Pa(V)||V.contentEditable==="true")&&(Pn=V,Jl=x,wr=null);break;case"focusout":wr=Jl=Pn=null;break;case"mousedown":ql=!0;break;case"contextmenu":case"mouseup":case"dragend":ql=!1,Da(C,n,j);break;case"selectionchange":if(bf)break;case"keydown":case"keyup":Da(C,n,j)}var W;if(Yl)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else zn?_a(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(Ca&&n.locale!=="ko"&&(zn||K!=="onCompositionStart"?K==="onCompositionEnd"&&zn&&(W=xa()):($t=j,$l="value"in $t?$t.value:$t.textContent,zn=!0)),V=gi(x,K),0<V.length&&(K=new Sa(K,e,null,n,j),C.push({event:K,listeners:V}),W?K.data=W:(W=za(n),W!==null&&(K.data=W)))),(W=jf?Cf(e,n):Nf(e,n))&&(x=gi(x,"onBeforeInput"),0<x.length&&(j=new Sa("onBeforeInput","beforeinput",null,n,j),C.push({event:j,listeners:x}),j.data=W))}Ya(C,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ir(e,n),l!=null&&r.unshift(jr(e,l,i)),l=ir(e,t),l!=null&&r.push(jr(e,l,i))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xa(e,t,n,r,i){for(var l=t._reactName,s=[];n!==null&&n!==r;){var d=n,f=d.alternate,x=d.stateNode;if(f!==null&&f===r)break;d.tag===5&&x!==null&&(d=x,i?(f=ir(n,l),f!=null&&s.unshift(jr(n,f,d))):i||(f=ir(n,l),f!=null&&s.push(jr(n,f,d)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Df=/\r\n?/g,Bf=/\u0000|\uFFFD/g;function Za(e){return(typeof e=="string"?e:""+e).replace(Df,`
`).replace(Bf,"")}function yi(e,t,n){if(t=Za(t),Za(e)!==t&&n)throw Error(c(425))}function vi(){}var lo=null,oo=null;function so(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ao=typeof setTimeout=="function"?setTimeout:void 0,Uf=typeof clearTimeout=="function"?clearTimeout:void 0,Ja=typeof Promise=="function"?Promise:void 0,$f=typeof queueMicrotask=="function"?queueMicrotask:typeof Ja<"u"?function(e){return Ja.resolve(null).then(e).catch(Hf)}:ao;function Hf(e){setTimeout(function(){throw e})}function uo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Rn,Cr="__reactProps$"+Rn,Pt="__reactContainer$"+Rn,co="__reactEvents$"+Rn,Vf="__reactListeners$"+Rn,Wf="__reactHandles$"+Rn;function sn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qa(e);e!==null;){if(n=e[Ct])return n;e=qa(e)}return t}e=n,n=e.parentNode}return null}function Nr(e){return e=e[Ct]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function xi(e){return e[Cr]||null}var fo=[],On=-1;function Wt(e){return{current:e}}function xe(e){0>On||(e.current=fo[On],fo[On]=null,On--)}function ye(e,t){On++,fo[On]=e.current,e.current=t}var Gt={},We=Wt(Gt),Ze=Wt(!1),an=Gt;function bn(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Je(e){return e=e.childContextTypes,e!=null}function wi(){xe(Ze),xe(We)}function eu(e,t,n){if(We.current!==Gt)throw Error(c(168));ye(We,t),ye(Ze,n)}function tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(c(108,re(e)||"Unknown",i));return P({},n,r)}function ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,an=We.current,ye(We,e),ye(Ze,Ze.current),!0}function nu(e,t,n){var r=e.stateNode;if(!r)throw Error(c(169));n?(e=tu(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,xe(Ze),xe(We),ye(We,e)):xe(Ze),ye(Ze,n)}var Tt=null,Si=!1,po=!1;function ru(e){Tt===null?Tt=[e]:Tt.push(e)}function Gf(e){Si=!0,ru(e)}function Qt(){if(!po&&Tt!==null){po=!0;var e=0,t=pe;try{var n=Tt;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,Si=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),la(Ol,Qt),i}finally{pe=t,po=!1}}return null}var Mn=[],An=0,ji=null,Ci=0,st=[],at=0,un=null,It=1,Rt="";function cn(e,t){Mn[An++]=Ci,Mn[An++]=ji,ji=e,Ci=t}function iu(e,t,n){st[at++]=It,st[at++]=Rt,st[at++]=un,un=e;var r=It;e=Rt;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var l=32-mt(t)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,It=1<<32-mt(t)+i|n<<i|r,Rt=l+e}else It=1<<l|n<<i|r,Rt=e}function mo(e){e.return!==null&&(cn(e,1),iu(e,1,0))}function ho(e){for(;e===ji;)ji=Mn[--An],Mn[An]=null,Ci=Mn[--An],Mn[An]=null;for(;e===un;)un=st[--at],st[at]=null,Rt=st[--at],st[at]=null,It=st[--at],st[at]=null}var it=null,lt=null,ke=!1,gt=null;function lu(e,t){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,lt=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:It,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,lt=null,!0):!1;default:return!1}}function go(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yo(e){if(ke){var t=lt;if(t){var n=t;if(!ou(e,t)){if(go(e))throw Error(c(418));t=Vt(n.nextSibling);var r=it;t&&ou(e,t)?lu(r,n):(e.flags=e.flags&-4097|2,ke=!1,it=e)}}else{if(go(e))throw Error(c(418));e.flags=e.flags&-4097|2,ke=!1,it=e}}}function su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function Ni(e){if(e!==it)return!1;if(!ke)return su(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!so(e.type,e.memoizedProps)),t&&(t=lt)){if(go(e))throw au(),Error(c(418));for(;t;)lu(e,t),t=Vt(t.nextSibling)}if(su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=it?Vt(e.stateNode.nextSibling):null;return!0}function au(){for(var e=lt;e;)e=Vt(e.nextSibling)}function Fn(){lt=it=null,ke=!1}function vo(e){gt===null?gt=[e]:gt.push(e)}var Qf=me.ReactCurrentBatchConfig;function Er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var r=n.stateNode}if(!r)throw Error(c(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var d=i.refs;s===null?delete d[l]:d[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function Ei(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uu(e){var t=e._init;return t(e._payload)}function cu(e){function t(y,p){if(e){var v=y.deletions;v===null?(y.deletions=[p],y.flags|=16):v.push(p)}}function n(y,p){if(!e)return null;for(;p!==null;)t(y,p),p=p.sibling;return null}function r(y,p){for(y=new Map;p!==null;)p.key!==null?y.set(p.key,p):y.set(p.index,p),p=p.sibling;return y}function i(y,p){return y=tn(y,p),y.index=0,y.sibling=null,y}function l(y,p,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<p?(y.flags|=2,p):v):(y.flags|=2,p)):(y.flags|=1048576,p)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function d(y,p,v,E){return p===null||p.tag!==6?(p=us(v,y.mode,E),p.return=y,p):(p=i(p,v),p.return=y,p)}function f(y,p,v,E){var b=v.type;return b===U?j(y,p,v.props.children,E,v.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Re&&uu(b)===p.type)?(E=i(p,v.props),E.ref=Er(y,p,v),E.return=y,E):(E=Xi(v.type,v.key,v.props,null,y.mode,E),E.ref=Er(y,p,v),E.return=y,E)}function x(y,p,v,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=cs(v,y.mode,E),p.return=y,p):(p=i(p,v.children||[]),p.return=y,p)}function j(y,p,v,E,b){return p===null||p.tag!==7?(p=vn(v,y.mode,E,b),p.return=y,p):(p=i(p,v),p.return=y,p)}function C(y,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=us(""+p,y.mode,v),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case se:return v=Xi(p.type,p.key,p.props,null,y.mode,v),v.ref=Er(y,null,p),v.return=y,v;case ne:return p=cs(p,y.mode,v),p.return=y,p;case Re:var E=p._init;return C(y,E(p._payload),v)}if(tr(p)||A(p))return p=vn(p,y.mode,v,null),p.return=y,p;Ei(y,p)}return null}function S(y,p,v,E){var b=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:d(y,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case se:return v.key===b?f(y,p,v,E):null;case ne:return v.key===b?x(y,p,v,E):null;case Re:return b=v._init,S(y,p,b(v._payload),E)}if(tr(v)||A(v))return b!==null?null:j(y,p,v,E,null);Ei(y,v)}return null}function I(y,p,v,E,b){if(typeof E=="string"&&E!==""||typeof E=="number")return y=y.get(v)||null,d(p,y,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case se:return y=y.get(E.key===null?v:E.key)||null,f(p,y,E,b);case ne:return y=y.get(E.key===null?v:E.key)||null,x(p,y,E,b);case Re:var V=E._init;return I(y,p,v,V(E._payload),b)}if(tr(E)||A(E))return y=y.get(v)||null,j(p,y,E,b,null);Ei(p,E)}return null}function L(y,p,v,E){for(var b=null,V=null,W=p,K=p=0,Fe=null;W!==null&&K<v.length;K++){W.index>K?(Fe=W,W=null):Fe=W.sibling;var ae=S(y,W,v[K],E);if(ae===null){W===null&&(W=Fe);break}e&&W&&ae.alternate===null&&t(y,W),p=l(ae,p,K),V===null?b=ae:V.sibling=ae,V=ae,W=Fe}if(K===v.length)return n(y,W),ke&&cn(y,K),b;if(W===null){for(;K<v.length;K++)W=C(y,v[K],E),W!==null&&(p=l(W,p,K),V===null?b=W:V.sibling=W,V=W);return ke&&cn(y,K),b}for(W=r(y,W);K<v.length;K++)Fe=I(W,y,K,v[K],E),Fe!==null&&(e&&Fe.alternate!==null&&W.delete(Fe.key===null?K:Fe.key),p=l(Fe,p,K),V===null?b=Fe:V.sibling=Fe,V=Fe);return e&&W.forEach(function(nn){return t(y,nn)}),ke&&cn(y,K),b}function O(y,p,v,E){var b=A(v);if(typeof b!="function")throw Error(c(150));if(v=b.call(v),v==null)throw Error(c(151));for(var V=b=null,W=p,K=p=0,Fe=null,ae=v.next();W!==null&&!ae.done;K++,ae=v.next()){W.index>K?(Fe=W,W=null):Fe=W.sibling;var nn=S(y,W,ae.value,E);if(nn===null){W===null&&(W=Fe);break}e&&W&&nn.alternate===null&&t(y,W),p=l(nn,p,K),V===null?b=nn:V.sibling=nn,V=nn,W=Fe}if(ae.done)return n(y,W),ke&&cn(y,K),b;if(W===null){for(;!ae.done;K++,ae=v.next())ae=C(y,ae.value,E),ae!==null&&(p=l(ae,p,K),V===null?b=ae:V.sibling=ae,V=ae);return ke&&cn(y,K),b}for(W=r(y,W);!ae.done;K++,ae=v.next())ae=I(W,y,K,ae.value,E),ae!==null&&(e&&ae.alternate!==null&&W.delete(ae.key===null?K:ae.key),p=l(ae,p,K),V===null?b=ae:V.sibling=ae,V=ae);return e&&W.forEach(function(Ep){return t(y,Ep)}),ke&&cn(y,K),b}function _e(y,p,v,E){if(typeof v=="object"&&v!==null&&v.type===U&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case se:e:{for(var b=v.key,V=p;V!==null;){if(V.key===b){if(b=v.type,b===U){if(V.tag===7){n(y,V.sibling),p=i(V,v.props.children),p.return=y,y=p;break e}}else if(V.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Re&&uu(b)===V.type){n(y,V.sibling),p=i(V,v.props),p.ref=Er(y,V,v),p.return=y,y=p;break e}n(y,V);break}else t(y,V);V=V.sibling}v.type===U?(p=vn(v.props.children,y.mode,E,v.key),p.return=y,y=p):(E=Xi(v.type,v.key,v.props,null,y.mode,E),E.ref=Er(y,p,v),E.return=y,y=E)}return s(y);case ne:e:{for(V=v.key;p!==null;){if(p.key===V)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(y,p.sibling),p=i(p,v.children||[]),p.return=y,y=p;break e}else{n(y,p);break}else t(y,p);p=p.sibling}p=cs(v,y.mode,E),p.return=y,y=p}return s(y);case Re:return V=v._init,_e(y,p,V(v._payload),E)}if(tr(v))return L(y,p,v,E);if(A(v))return O(y,p,v,E);Ei(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(y,p.sibling),p=i(p,v),p.return=y,y=p):(n(y,p),p=us(v,y.mode,E),p.return=y,y=p),s(y)):n(y,p)}return _e}var Dn=cu(!0),du=cu(!1),_i=Wt(null),zi=null,Bn=null,xo=null;function wo(){xo=Bn=zi=null}function ko(e){var t=_i.current;xe(_i),e._currentValue=t}function So(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){zi=e,xo=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(qe=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(xo!==e)if(e={context:e,memoizedValue:t,next:null},Bn===null){if(zi===null)throw Error(c(308));Bn=e,zi.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return t}var dn=null;function jo(e){dn===null?dn=[e]:dn.push(e)}function fu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,jo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function Co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(le&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lt(e,n)}return i=r.interleaved,i===null?(t.next=t,jo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lt(e,n)}function Pi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Al(e,n)}}function mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ti(e,t,n,r){var i=e.updateQueue;Yt=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var f=d,x=f.next;f.next=null,s===null?l=x:s.next=x,s=f;var j=e.alternate;j!==null&&(j=j.updateQueue,d=j.lastBaseUpdate,d!==s&&(d===null?j.firstBaseUpdate=x:d.next=x,j.lastBaseUpdate=f))}if(l!==null){var C=i.baseState;s=0,j=x=f=null,d=l;do{var S=d.lane,I=d.eventTime;if((r&S)===S){j!==null&&(j=j.next={eventTime:I,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var L=e,O=d;switch(S=t,I=n,O.tag){case 1:if(L=O.payload,typeof L=="function"){C=L.call(I,C,S);break e}C=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=O.payload,S=typeof L=="function"?L.call(I,C,S):L,S==null)break e;C=P({},C,S);break e;case 2:Yt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,S=i.effects,S===null?i.effects=[d]:S.push(d))}else I={eventTime:I,lane:S,tag:d.tag,payload:d.payload,callback:d.callback,next:null},j===null?(x=j=I,f=C):j=j.next=I,s|=S;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;S=d,d=S.next,S.next=null,i.lastBaseUpdate=S,i.shared.pending=null}}while(!0);if(j===null&&(f=C),i.baseState=f,i.firstBaseUpdate=x,i.lastBaseUpdate=j,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);mn|=s,e.lanes=s,e.memoizedState=C}}function hu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(c(191,i));i.call(r)}}}var _r={},Nt=Wt(_r),zr=Wt(_r),Pr=Wt(_r);function fn(e){if(e===_r)throw Error(c(174));return e}function No(e,t){switch(ye(Pr,t),ye(zr,e),ye(Nt,_r),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nl(t,e)}xe(Nt),ye(Nt,t)}function $n(){xe(Nt),xe(zr),xe(Pr)}function gu(e){fn(Pr.current);var t=fn(Nt.current),n=Nl(t,e.type);t!==n&&(ye(zr,e),ye(Nt,n))}function Eo(e){zr.current===e&&(xe(Nt),xe(zr))}var Se=Wt(0);function Ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=[];function zo(){for(var e=0;e<_o.length;e++)_o[e]._workInProgressVersionPrimary=null;_o.length=0}var Ri=me.ReactCurrentDispatcher,Po=me.ReactCurrentBatchConfig,pn=0,je=null,Le=null,Me=null,Li=!1,Tr=!1,Ir=0,Yf=0;function Ge(){throw Error(c(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Io(e,t,n,r,i,l){if(pn=l,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?Jf:qf,e=n(r,i),Tr){l=0;do{if(Tr=!1,Ir=0,25<=l)throw Error(c(301));l+=1,Me=Le=null,t.updateQueue=null,Ri.current=ep,e=n(r,i)}while(Tr)}if(Ri.current=Mi,t=Le!==null&&Le.next!==null,pn=0,Me=Le=je=null,Li=!1,t)throw Error(c(300));return e}function Ro(){var e=Ir!==0;return Ir=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?je.memoizedState=Me=e:Me=Me.next=e,Me}function ct(){if(Le===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Me===null?je.memoizedState:Me.next;if(t!==null)Me=t,Le=e;else{if(e===null)throw Error(c(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Me===null?je.memoizedState=Me=e:Me=Me.next=e}return Me}function Rr(e,t){return typeof t=="function"?t(e):t}function Lo(e){var t=ct(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var d=s=null,f=null,x=l;do{var j=x.lane;if((pn&j)===j)f!==null&&(f=f.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var C={lane:j,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};f===null?(d=f=C,s=r):f=f.next=C,je.lanes|=j,mn|=j}x=x.next}while(x!==null&&x!==l);f===null?s=r:f.next=d,ht(r,t.memoizedState)||(qe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,je.lanes|=l,mn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oo(e){var t=ct(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);ht(l,t.memoizedState)||(qe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function yu(){}function vu(e,t){var n=je,r=ct(),i=t(),l=!ht(r.memoizedState,i);if(l&&(r.memoizedState=i,qe=!0),r=r.queue,bo(ku.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Lr(9,wu.bind(null,n,r,i,t),void 0,null),Ae===null)throw Error(c(349));(pn&30)!==0||xu(n,t,i)}return i}function xu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wu(e,t,n,r){t.value=n,t.getSnapshot=r,Su(t)&&ju(e)}function ku(e,t,n){return n(function(){Su(t)&&ju(e)})}function Su(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function ju(e){var t=Lt(e,1);t!==null&&wt(t,e,1,-1)}function Cu(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},t.queue=e,e=e.dispatch=Zf.bind(null,je,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nu(){return ct().memoizedState}function Oi(e,t,n,r){var i=Et();je.flags|=e,i.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function bi(e,t,n,r){var i=ct();r=r===void 0?null:r;var l=void 0;if(Le!==null){var s=Le.memoizedState;if(l=s.destroy,r!==null&&To(r,s.deps)){i.memoizedState=Lr(t,n,l,r);return}}je.flags|=e,i.memoizedState=Lr(1|t,n,l,r)}function Eu(e,t){return Oi(8390656,8,e,t)}function bo(e,t){return bi(2048,8,e,t)}function _u(e,t){return bi(4,2,e,t)}function zu(e,t){return bi(4,4,e,t)}function Pu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tu(e,t,n){return n=n!=null?n.concat([e]):null,bi(4,4,Pu.bind(null,t,e),n)}function Mo(){}function Iu(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ru(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Lu(e,t,n){return(pn&21)===0?(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=n):(ht(n,t)||(n=ua(),je.lanes|=n,mn|=n,e.baseState=!0),t)}function Kf(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=Po.transition;Po.transition={};try{e(!1),t()}finally{pe=n,Po.transition=r}}function Ou(){return ct().memoizedState}function Xf(e,t,n){var r=qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bu(e))Mu(t,n);else if(n=fu(e,t,n,r),n!==null){var i=Xe();wt(n,e,r,i),Au(n,t,r)}}function Zf(e,t,n){var r=qt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bu(e))Mu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,d=l(s,n);if(i.hasEagerState=!0,i.eagerState=d,ht(d,s)){var f=t.interleaved;f===null?(i.next=i,jo(t)):(i.next=f.next,f.next=i),t.interleaved=i;return}}catch{}finally{}n=fu(e,t,i,r),n!==null&&(i=Xe(),wt(n,e,r,i),Au(n,t,r))}}function bu(e){var t=e.alternate;return e===je||t!==null&&t===je}function Mu(e,t){Tr=Li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Au(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Al(e,n)}}var Mi={readContext:ut,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Jf={readContext:ut,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Eu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4194308,4,Pu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oi(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xf.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:Cu,useDebugValue:Mo,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=Cu(!1),t=e[0];return e=Kf.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,i=Et();if(ke){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Ae===null)throw Error(c(349));(pn&30)!==0||xu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Eu(ku.bind(null,r,l,e),[e]),r.flags|=2048,Lr(9,wu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Et(),t=Ae.identifierPrefix;if(ke){var n=Rt,r=It;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qf={readContext:ut,useCallback:Iu,useContext:ut,useEffect:bo,useImperativeHandle:Tu,useInsertionEffect:_u,useLayoutEffect:zu,useMemo:Ru,useReducer:Lo,useRef:Nu,useState:function(){return Lo(Rr)},useDebugValue:Mo,useDeferredValue:function(e){var t=ct();return Lu(t,Le.memoizedState,e)},useTransition:function(){var e=Lo(Rr)[0],t=ct().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:vu,useId:Ou,unstable_isNewReconciler:!1},ep={readContext:ut,useCallback:Iu,useContext:ut,useEffect:bo,useImperativeHandle:Tu,useInsertionEffect:_u,useLayoutEffect:zu,useMemo:Ru,useReducer:Oo,useRef:Nu,useState:function(){return Oo(Rr)},useDebugValue:Mo,useDeferredValue:function(e){var t=ct();return Le===null?t.memoizedState=e:Lu(t,Le.memoizedState,e)},useTransition:function(){var e=Oo(Rr)[0],t=ct().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:vu,useId:Ou,unstable_isNewReconciler:!1};function yt(e,t){if(e&&e.defaultProps){t=P({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ao(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:P({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ai={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=qt(e),l=Ot(r,i);l.payload=t,n!=null&&(l.callback=n),t=Kt(e,l,i),t!==null&&(wt(t,e,i,r),Pi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=qt(e),l=Ot(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Kt(e,l,i),t!==null&&(wt(t,e,i,r),Pi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=qt(e),i=Ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kt(e,i,r),t!==null&&(wt(t,e,r,n),Pi(t,e,r))}};function Fu(e,t,n,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!xr(n,r)||!xr(i,l):!0}function Du(e,t,n){var r=!1,i=Gt,l=t.contextType;return typeof l=="object"&&l!==null?l=ut(l):(i=Je(t)?an:We.current,r=t.contextTypes,l=(r=r!=null)?bn(e,i):Gt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ai,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Bu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ai.enqueueReplaceState(t,t.state,null)}function Fo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Co(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=ut(l):(l=Je(t)?an:We.current,i.context=bn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ao(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ai.enqueueReplaceState(i,i.state,null),Ti(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var n="",r=t;do n+=Q(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Do(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tp=typeof WeakMap=="function"?WeakMap:Map;function Uu(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vi||(Vi=!0,ts=r),Bo(e,t)},n}function $u(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Bo(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Bo(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Hu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=hp.bind(null,e,t,n),t.then(e,e))}function Vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wu(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var np=me.ReactCurrentOwner,qe=!1;function Ke(e,t,n,r){t.child=e===null?du(t,null,n,r):Dn(t,e.child,n,r)}function Gu(e,t,n,r,i){n=n.render;var l=t.ref;return Un(t,i),r=Io(e,t,n,r,l,i),n=Ro(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bt(e,t,i)):(ke&&n&&mo(t),t.flags|=1,Ke(e,t,r,i),t.child)}function Qu(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!as(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Yu(e,t,l,r,i)):(e=Xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:xr,n(s,r)&&e.ref===t.ref)return bt(e,t,i)}return t.flags|=1,e=tn(l,r),e.ref=t.ref,e.return=t,t.child=e}function Yu(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(xr(l,r)&&e.ref===t.ref)if(qe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,bt(e,t,i)}return Uo(e,t,n,r,i)}function Ku(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Wn,ot),ot|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(Wn,ot),ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ye(Wn,ot),ot|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ye(Wn,ot),ot|=r;return Ke(e,t,i,n),t.child}function Xu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Uo(e,t,n,r,i){var l=Je(n)?an:We.current;return l=bn(t,l),Un(t,i),n=Io(e,t,n,r,l,i),r=Ro(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bt(e,t,i)):(ke&&r&&mo(t),t.flags|=1,Ke(e,t,n,i),t.child)}function Zu(e,t,n,r,i){if(Je(n)){var l=!0;ki(t)}else l=!1;if(Un(t,i),t.stateNode===null)Di(e,t),Du(t,n,r),Fo(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,d=t.memoizedProps;s.props=d;var f=s.context,x=n.contextType;typeof x=="object"&&x!==null?x=ut(x):(x=Je(n)?an:We.current,x=bn(t,x));var j=n.getDerivedStateFromProps,C=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function";C||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==r||f!==x)&&Bu(t,s,r,x),Yt=!1;var S=t.memoizedState;s.state=S,Ti(t,r,s,i),f=t.memoizedState,d!==r||S!==f||Ze.current||Yt?(typeof j=="function"&&(Ao(t,n,j,r),f=t.memoizedState),(d=Yt||Fu(t,n,d,r,S,f,x))?(C||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),s.props=r,s.state=f,s.context=x,r=d):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,pu(e,t),d=t.memoizedProps,x=t.type===t.elementType?d:yt(t.type,d),s.props=x,C=t.pendingProps,S=s.context,f=n.contextType,typeof f=="object"&&f!==null?f=ut(f):(f=Je(n)?an:We.current,f=bn(t,f));var I=n.getDerivedStateFromProps;(j=typeof I=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==C||S!==f)&&Bu(t,s,r,f),Yt=!1,S=t.memoizedState,s.state=S,Ti(t,r,s,i);var L=t.memoizedState;d!==C||S!==L||Ze.current||Yt?(typeof I=="function"&&(Ao(t,n,I,r),L=t.memoizedState),(x=Yt||Fu(t,n,x,r,S,L,f)||!1)?(j||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,L,f),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,L,f)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=L),s.props=r,s.state=L,s.context=f,r=x):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),r=!1)}return $o(e,t,n,r,l,i)}function $o(e,t,n,r,i,l){Xu(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&nu(t,n,!1),bt(e,t,l);r=t.stateNode,np.current=t;var d=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Dn(t,e.child,null,l),t.child=Dn(t,null,d,l)):Ke(e,t,d,l),t.memoizedState=r.state,i&&nu(t,n,!0),t.child}function Ju(e){var t=e.stateNode;t.pendingContext?eu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&eu(e,t.context,!1),No(e,t.containerInfo)}function qu(e,t,n,r,i){return Fn(),vo(i),t.flags|=256,Ke(e,t,n,r),t.child}var Ho={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ec(e,t,n){var r=t.pendingProps,i=Se.current,l=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ye(Se,i&1),e===null)return yo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Zi(s,r,0,null),e=vn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Vo(n),t.memoizedState=Ho,e):Wo(t,s));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return rp(e,t,s,r,d,i,n);if(l){l=r.fallback,s=t.mode,i=e.child,d=i.sibling;var f={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=tn(i,f),r.subtreeFlags=i.subtreeFlags&14680064),d!==null?l=tn(d,l):(l=vn(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Vo(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ho,r}return l=e.child,e=l.sibling,r=tn(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wo(e,t){return t=Zi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fi(e,t,n,r){return r!==null&&vo(r),Dn(t,e.child,null,n),e=Wo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rp(e,t,n,r,i,l,s){if(n)return t.flags&256?(t.flags&=-257,r=Do(Error(c(422))),Fi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Zi({mode:"visible",children:r.children},i,0,null),l=vn(l,i,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Dn(t,e.child,null,s),t.child.memoizedState=Vo(s),t.memoizedState=Ho,l);if((t.mode&1)===0)return Fi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var d=r.dgst;return r=d,l=Error(c(419)),r=Do(l,r,void 0),Fi(e,t,s,r)}if(d=(s&e.childLanes)!==0,qe||d){if(r=Ae,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Lt(e,i),wt(r,e,i,-1))}return ss(),r=Do(Error(c(421))),Fi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=gp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,lt=Vt(i.nextSibling),it=t,ke=!0,gt=null,e!==null&&(st[at++]=It,st[at++]=Rt,st[at++]=un,It=e.id,Rt=e.overflow,un=t),t=Wo(t,r.children),t.flags|=4096,t)}function tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),So(e.return,t,n)}function Go(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function nc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Ke(e,t,r.children,n),r=Se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tc(e,n,t);else if(e.tag===19)tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ye(Se,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ii(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Go(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ii(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Go(t,!0,n,null,l);break;case"together":Go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Di(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ip(e,t,n){switch(t.tag){case 3:Ju(t),Fn();break;case 5:gu(t);break;case 1:Je(t.type)&&ki(t);break;case 4:No(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ye(_i,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ye(Se,Se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ec(e,t,n):(ye(Se,Se.current&1),e=bt(e,t,n),e!==null?e.sibling:null);ye(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return nc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,Ku(e,t,n)}return bt(e,t,n)}var rc,Qo,ic,lc;rc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Qo=function(){},ic=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fn(Nt.current);var l=null;switch(n){case"input":i=kl(e,i),r=kl(e,r),l=[];break;case"select":i=P({},i,{value:void 0}),r=P({},r,{value:void 0}),l=[];break;case"textarea":i=Cl(e,i),r=Cl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vi)}El(n,r);var s;n=null;for(x in i)if(!r.hasOwnProperty(x)&&i.hasOwnProperty(x)&&i[x]!=null)if(x==="style"){var d=i[x];for(s in d)d.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(g.hasOwnProperty(x)?l||(l=[]):(l=l||[]).push(x,null));for(x in r){var f=r[x];if(d=i!=null?i[x]:void 0,r.hasOwnProperty(x)&&f!==d&&(f!=null||d!=null))if(x==="style")if(d){for(s in d)!d.hasOwnProperty(s)||f&&f.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in f)f.hasOwnProperty(s)&&d[s]!==f[s]&&(n||(n={}),n[s]=f[s])}else n||(l||(l=[]),l.push(x,n)),n=f;else x==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,d=d?d.__html:void 0,f!=null&&d!==f&&(l=l||[]).push(x,f)):x==="children"?typeof f!="string"&&typeof f!="number"||(l=l||[]).push(x,""+f):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(g.hasOwnProperty(x)?(f!=null&&x==="onScroll"&&ve("scroll",e),l||d===f||(l=[])):(l=l||[]).push(x,f))}n&&(l=l||[]).push("style",n);var x=l;(t.updateQueue=x)&&(t.flags|=4)}},lc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Or(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lp(e,t,n){var r=t.pendingProps;switch(ho(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return Je(t.type)&&wi(),Qe(t),null;case 3:return r=t.stateNode,$n(),xe(Ze),xe(We),zo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ni(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gt!==null&&(is(gt),gt=null))),Qo(e,t),Qe(t),null;case 5:Eo(t);var i=fn(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)ic(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(c(166));return Qe(t),null}if(e=fn(Nt.current),Ni(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ct]=t,r[Cr]=l,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<kr.length;i++)ve(kr[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Ds(r,l),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ve("invalid",r);break;case"textarea":$s(r,l),ve("invalid",r)}El(n,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var d=l[s];s==="children"?typeof d=="string"?r.textContent!==d&&(l.suppressHydrationWarning!==!0&&yi(r.textContent,d,e),i=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(l.suppressHydrationWarning!==!0&&yi(r.textContent,d,e),i=["children",""+d]):g.hasOwnProperty(s)&&d!=null&&s==="onScroll"&&ve("scroll",r)}switch(n){case"input":Yr(r),Us(r,l,!0);break;case"textarea":Yr(r),Vs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=vi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ws(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ct]=t,e[Cr]=r,rc(e,t,!1,!1),t.stateNode=e;e:{switch(s=_l(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<kr.length;i++)ve(kr[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":Ds(e,r),i=kl(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=P({},r,{value:void 0}),ve("invalid",e);break;case"textarea":$s(e,r),i=Cl(e,r),ve("invalid",e);break;default:i=r}El(n,i),d=i;for(l in d)if(d.hasOwnProperty(l)){var f=d[l];l==="style"?Ys(e,f):l==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Gs(e,f)):l==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&nr(e,f):typeof f=="number"&&nr(e,""+f):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(g.hasOwnProperty(l)?f!=null&&l==="onScroll"&&ve("scroll",e):f!=null&&he(e,l,f,s))}switch(n){case"input":Yr(e),Us(e,r,!1);break;case"textarea":Yr(e),Vs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ie(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?jn(e,!!r.multiple,l,!1):r.defaultValue!=null&&jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)lc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(c(166));if(n=fn(Pr.current),fn(Nt.current),Ni(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(l=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:yi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Qe(t),null;case 13:if(xe(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&lt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)au(),Fn(),t.flags|=98560,l=!1;else if(l=Ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Ct]=t}else Fn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Qe(t),l=!1}else gt!==null&&(is(gt),gt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Se.current&1)!==0?Oe===0&&(Oe=3):ss())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return $n(),Qo(e,t),e===null&&Sr(t.stateNode.containerInfo),Qe(t),null;case 10:return ko(t.type._context),Qe(t),null;case 17:return Je(t.type)&&wi(),Qe(t),null;case 19:if(xe(Se),l=t.memoizedState,l===null)return Qe(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)Or(l,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Ii(e),s!==null){for(t.flags|=128,Or(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ye(Se,Se.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ee()>Gn&&(t.flags|=128,r=!0,Or(l,!1),t.lanes=4194304)}else{if(!r)if(e=Ii(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Or(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!ke)return Qe(t),null}else 2*Ee()-l.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,Or(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ee(),t.sibling=null,n=Se.current,ye(Se,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return os(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ot&1073741824)!==0&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function op(e,t){switch(ho(t),t.tag){case 1:return Je(t.type)&&wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),xe(Ze),xe(We),zo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Eo(t),null;case 13:if(xe(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Se),null;case 4:return $n(),null;case 10:return ko(t.type._context),null;case 22:case 23:return os(),null;case 24:return null;default:return null}}var Bi=!1,Ye=!1,sp=typeof WeakSet=="function"?WeakSet:Set,R=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function Yo(e,t,n){try{n()}catch(r){Ne(e,t,r)}}var oc=!1;function ap(e,t){if(lo=oi,e=Fa(),Zl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,d=-1,f=-1,x=0,j=0,C=e,S=null;t:for(;;){for(var I;C!==n||i!==0&&C.nodeType!==3||(d=s+i),C!==l||r!==0&&C.nodeType!==3||(f=s+r),C.nodeType===3&&(s+=C.nodeValue.length),(I=C.firstChild)!==null;)S=C,C=I;for(;;){if(C===e)break t;if(S===n&&++x===i&&(d=s),S===l&&++j===r&&(f=s),(I=C.nextSibling)!==null)break;C=S,S=C.parentNode}C=I}n=d===-1||f===-1?null:{start:d,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(oo={focusedElem:e,selectionRange:n},oi=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var L=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(L!==null){var O=L.memoizedProps,_e=L.memoizedState,y=t.stateNode,p=y.getSnapshotBeforeUpdate(t.elementType===t.type?O:yt(t.type,O),_e);y.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(E){Ne(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return L=oc,oc=!1,L}function br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Yo(t,n,l)}i=i.next}while(i!==r)}}function Ui(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ko(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sc(e){var t=e.alternate;t!==null&&(e.alternate=null,sc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[Cr],delete t[co],delete t[Vf],delete t[Wf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ac(e){return e.tag===5||e.tag===3||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ac(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vi));else if(r!==4&&(e=e.child,e!==null))for(Xo(e,t,n),e=e.sibling;e!==null;)Xo(e,t,n),e=e.sibling}function Zo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zo(e,t,n),e=e.sibling;e!==null;)Zo(e,t,n),e=e.sibling}var De=null,vt=!1;function Xt(e,t,n){for(n=n.child;n!==null;)cc(e,t,n),n=n.sibling}function cc(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(ei,n)}catch{}switch(n.tag){case 5:Ye||Vn(n,t);case 6:var r=De,i=vt;De=null,Xt(e,t,n),De=r,vt=i,De!==null&&(vt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(vt?(e=De,n=n.stateNode,e.nodeType===8?uo(e.parentNode,n):e.nodeType===1&&uo(e,n),pr(e)):uo(De,n.stateNode));break;case 4:r=De,i=vt,De=n.stateNode.containerInfo,vt=!0,Xt(e,t,n),De=r,vt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&((l&2)!==0||(l&4)!==0)&&Yo(n,t,s),i=i.next}while(i!==r)}Xt(e,t,n);break;case 1:if(!Ye&&(Vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){Ne(n,t,d)}Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,Xt(e,t,n),Ye=r):Xt(e,t,n);break;default:Xt(e,t,n)}}function dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sp),t.forEach(function(r){var i=yp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,s=t,d=s;e:for(;d!==null;){switch(d.tag){case 5:De=d.stateNode,vt=!1;break e;case 3:De=d.stateNode.containerInfo,vt=!0;break e;case 4:De=d.stateNode.containerInfo,vt=!0;break e}d=d.return}if(De===null)throw Error(c(160));cc(l,s,i),De=null,vt=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(x){Ne(i,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fc(t,e),t=t.sibling}function fc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),_t(e),r&4){try{br(3,e,e.return),Ui(3,e)}catch(O){Ne(e,e.return,O)}try{br(5,e,e.return)}catch(O){Ne(e,e.return,O)}}break;case 1:xt(t,e),_t(e),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(xt(t,e),_t(e),r&512&&n!==null&&Vn(n,n.return),e.flags&32){var i=e.stateNode;try{nr(i,"")}catch(O){Ne(e,e.return,O)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,d=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{d==="input"&&l.type==="radio"&&l.name!=null&&Bs(i,l),_l(d,s);var x=_l(d,l);for(s=0;s<f.length;s+=2){var j=f[s],C=f[s+1];j==="style"?Ys(i,C):j==="dangerouslySetInnerHTML"?Gs(i,C):j==="children"?nr(i,C):he(i,j,C,x)}switch(d){case"input":Sl(i,l);break;case"textarea":Hs(i,l);break;case"select":var S=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var I=l.value;I!=null?jn(i,!!l.multiple,I,!1):S!==!!l.multiple&&(l.defaultValue!=null?jn(i,!!l.multiple,l.defaultValue,!0):jn(i,!!l.multiple,l.multiple?[]:"",!1))}i[Cr]=l}catch(O){Ne(e,e.return,O)}}break;case 6:if(xt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(c(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(O){Ne(e,e.return,O)}}break;case 3:if(xt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pr(t.containerInfo)}catch(O){Ne(e,e.return,O)}break;case 4:xt(t,e),_t(e);break;case 13:xt(t,e),_t(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(es=Ee())),r&4&&dc(e);break;case 22:if(j=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(x=Ye)||j,xt(t,e),Ye=x):xt(t,e),_t(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!j&&(e.mode&1)!==0)for(R=e,j=e.child;j!==null;){for(C=R=j;R!==null;){switch(S=R,I=S.child,S.tag){case 0:case 11:case 14:case 15:br(4,S,S.return);break;case 1:Vn(S,S.return);var L=S.stateNode;if(typeof L.componentWillUnmount=="function"){r=S,n=S.return;try{t=r,L.props=t.memoizedProps,L.state=t.memoizedState,L.componentWillUnmount()}catch(O){Ne(r,n,O)}}break;case 5:Vn(S,S.return);break;case 22:if(S.memoizedState!==null){hc(C);continue}}I!==null?(I.return=S,R=I):hc(C)}j=j.sibling}e:for(j=null,C=e;;){if(C.tag===5){if(j===null){j=C;try{i=C.stateNode,x?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(d=C.stateNode,f=C.memoizedProps.style,s=f!=null&&f.hasOwnProperty("display")?f.display:null,d.style.display=Qs("display",s))}catch(O){Ne(e,e.return,O)}}}else if(C.tag===6){if(j===null)try{C.stateNode.nodeValue=x?"":C.memoizedProps}catch(O){Ne(e,e.return,O)}}else if((C.tag!==22&&C.tag!==23||C.memoizedState===null||C===e)&&C.child!==null){C.child.return=C,C=C.child;continue}if(C===e)break e;for(;C.sibling===null;){if(C.return===null||C.return===e)break e;j===C&&(j=null),C=C.return}j===C&&(j=null),C.sibling.return=C.return,C=C.sibling}}break;case 19:xt(t,e),_t(e),r&4&&dc(e);break;case 21:break;default:xt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ac(n)){var r=n;break e}n=n.return}throw Error(c(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(nr(i,""),r.flags&=-33);var l=uc(e);Zo(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,d=uc(e);Xo(e,d,s);break;default:throw Error(c(161))}}catch(f){Ne(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function up(e,t,n){R=e,pc(e)}function pc(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Bi;if(!s){var d=i.alternate,f=d!==null&&d.memoizedState!==null||Ye;d=Bi;var x=Ye;if(Bi=s,(Ye=f)&&!x)for(R=i;R!==null;)s=R,f=s.child,s.tag===22&&s.memoizedState!==null?gc(i):f!==null?(f.return=s,R=f):gc(i);for(;l!==null;)R=l,pc(l),l=l.sibling;R=i,Bi=d,Ye=x}mc(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,R=l):mc(e)}}function mc(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ye||Ui(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:yt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&hu(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hu(t,s,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var j=x.memoizedState;if(j!==null){var C=j.dehydrated;C!==null&&pr(C)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Ye||t.flags&512&&Ko(t)}catch(S){Ne(t,t.return,S)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function hc(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function gc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ui(4,t)}catch(f){Ne(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(f){Ne(t,i,f)}}var l=t.return;try{Ko(t)}catch(f){Ne(t,l,f)}break;case 5:var s=t.return;try{Ko(t)}catch(f){Ne(t,s,f)}}}catch(f){Ne(t,t.return,f)}if(t===e){R=null;break}var d=t.sibling;if(d!==null){d.return=t.return,R=d;break}R=t.return}}var cp=Math.ceil,$i=me.ReactCurrentDispatcher,Jo=me.ReactCurrentOwner,dt=me.ReactCurrentBatchConfig,le=0,Ae=null,Te=null,Be=0,ot=0,Wn=Wt(0),Oe=0,Mr=null,mn=0,Hi=0,qo=0,Ar=null,et=null,es=0,Gn=1/0,Mt=null,Vi=!1,ts=null,Zt=null,Wi=!1,Jt=null,Gi=0,Fr=0,ns=null,Qi=-1,Yi=0;function Xe(){return(le&6)!==0?Ee():Qi!==-1?Qi:Qi=Ee()}function qt(e){return(e.mode&1)===0?1:(le&2)!==0&&Be!==0?Be&-Be:Qf.transition!==null?(Yi===0&&(Yi=ua()),Yi):(e=pe,e!==0||(e=window.event,e=e===void 0?16:va(e.type)),e)}function wt(e,t,n,r){if(50<Fr)throw Fr=0,ns=null,Error(c(185));ar(e,n,r),((le&2)===0||e!==Ae)&&(e===Ae&&((le&2)===0&&(Hi|=n),Oe===4&&en(e,Be)),tt(e,r),n===1&&le===0&&(t.mode&1)===0&&(Gn=Ee()+500,Si&&Qt()))}function tt(e,t){var n=e.callbackNode;Gd(e,t);var r=ri(e,e===Ae?Be:0);if(r===0)n!==null&&oa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&oa(n),t===1)e.tag===0?Gf(vc.bind(null,e)):ru(vc.bind(null,e)),$f(function(){(le&6)===0&&Qt()}),n=null;else{switch(ca(r)){case 1:n=Ol;break;case 4:n=sa;break;case 16:n=qr;break;case 536870912:n=aa;break;default:n=qr}n=Ec(n,yc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yc(e,t){if(Qi=-1,Yi=0,(le&6)!==0)throw Error(c(327));var n=e.callbackNode;if(Qn()&&e.callbackNode!==n)return null;var r=ri(e,e===Ae?Be:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ki(e,r);else{t=r;var i=le;le|=2;var l=wc();(Ae!==e||Be!==t)&&(Mt=null,Gn=Ee()+500,gn(e,t));do try{pp();break}catch(d){xc(e,d)}while(!0);wo(),$i.current=l,le=i,Te!==null?t=0:(Ae=null,Be=0,t=Oe)}if(t!==0){if(t===2&&(i=bl(e),i!==0&&(r=i,t=rs(e,i))),t===1)throw n=Mr,gn(e,0),en(e,r),tt(e,Ee()),n;if(t===6)en(e,r);else{if(i=e.current.alternate,(r&30)===0&&!dp(i)&&(t=Ki(e,r),t===2&&(l=bl(e),l!==0&&(r=l,t=rs(e,l))),t===1))throw n=Mr,gn(e,0),en(e,r),tt(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(c(345));case 2:yn(e,et,Mt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=es+500-Ee(),10<t)){if(ri(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ao(yn.bind(null,e,et,Mt),t);break}yn(e,et,Mt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-mt(r);l=1<<s,s=t[s],s>i&&(i=s),r&=~l}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cp(r/1960))-r,10<r){e.timeoutHandle=ao(yn.bind(null,e,et,Mt),r);break}yn(e,et,Mt);break;case 5:yn(e,et,Mt);break;default:throw Error(c(329))}}}return tt(e,Ee()),e.callbackNode===n?yc.bind(null,e):null}function rs(e,t){var n=Ar;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Ki(e,t),e!==2&&(t=et,et=n,t!==null&&is(t)),e}function is(e){et===null?et=e:et.push.apply(et,e)}function dp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!ht(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~qo,t&=~Hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function vc(e){if((le&6)!==0)throw Error(c(327));Qn();var t=ri(e,0);if((t&1)===0)return tt(e,Ee()),null;var n=Ki(e,t);if(e.tag!==0&&n===2){var r=bl(e);r!==0&&(t=r,n=rs(e,r))}if(n===1)throw n=Mr,gn(e,0),en(e,t),tt(e,Ee()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,et,Mt),tt(e,Ee()),null}function ls(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(Gn=Ee()+500,Si&&Qt())}}function hn(e){Jt!==null&&Jt.tag===0&&(le&6)===0&&Qn();var t=le;le|=1;var n=dt.transition,r=pe;try{if(dt.transition=null,pe=1,e)return e()}finally{pe=r,dt.transition=n,le=t,(le&6)===0&&Qt()}}function os(){ot=Wn.current,xe(Wn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Uf(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(ho(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wi();break;case 3:$n(),xe(Ze),xe(We),zo();break;case 5:Eo(r);break;case 4:$n();break;case 13:xe(Se);break;case 19:xe(Se);break;case 10:ko(r.type._context);break;case 22:case 23:os()}n=n.return}if(Ae=e,Te=e=tn(e.current,null),Be=ot=t,Oe=0,Mr=null,qo=Hi=mn=0,et=Ar=null,dn!==null){for(t=0;t<dn.length;t++)if(n=dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}n.pending=r}dn=null}return e}function xc(e,t){do{var n=Te;try{if(wo(),Ri.current=Mi,Li){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Li=!1}if(pn=0,Me=Le=je=null,Tr=!1,Ir=0,Jo.current=null,n===null||n.return===null){Oe=1,Mr=t,Te=null;break}e:{var l=e,s=n.return,d=n,f=t;if(t=Be,d.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var x=f,j=d,C=j.tag;if((j.mode&1)===0&&(C===0||C===11||C===15)){var S=j.alternate;S?(j.updateQueue=S.updateQueue,j.memoizedState=S.memoizedState,j.lanes=S.lanes):(j.updateQueue=null,j.memoizedState=null)}var I=Vu(s);if(I!==null){I.flags&=-257,Wu(I,s,d,l,t),I.mode&1&&Hu(l,x,t),t=I,f=x;var L=t.updateQueue;if(L===null){var O=new Set;O.add(f),t.updateQueue=O}else L.add(f);break e}else{if((t&1)===0){Hu(l,x,t),ss();break e}f=Error(c(426))}}else if(ke&&d.mode&1){var _e=Vu(s);if(_e!==null){(_e.flags&65536)===0&&(_e.flags|=256),Wu(_e,s,d,l,t),vo(Hn(f,d));break e}}l=f=Hn(f,d),Oe!==4&&(Oe=2),Ar===null?Ar=[l]:Ar.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var y=Uu(l,f,t);mu(l,y);break e;case 1:d=f;var p=l.type,v=l.stateNode;if((l.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Zt===null||!Zt.has(v)))){l.flags|=65536,t&=-t,l.lanes|=t;var E=$u(l,d,t);mu(l,E);break e}}l=l.return}while(l!==null)}Sc(n)}catch(b){t=b,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function wc(){var e=$i.current;return $i.current=Mi,e===null?Mi:e}function ss(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Ae===null||(mn&268435455)===0&&(Hi&268435455)===0||en(Ae,Be)}function Ki(e,t){var n=le;le|=2;var r=wc();(Ae!==e||Be!==t)&&(Mt=null,gn(e,t));do try{fp();break}catch(i){xc(e,i)}while(!0);if(wo(),le=n,$i.current=r,Te!==null)throw Error(c(261));return Ae=null,Be=0,Oe}function fp(){for(;Te!==null;)kc(Te)}function pp(){for(;Te!==null&&!Ad();)kc(Te)}function kc(e){var t=Nc(e.alternate,e,ot);e.memoizedProps=e.pendingProps,t===null?Sc(e):Te=t,Jo.current=null}function Sc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=lp(n,t,ot),n!==null){Te=n;return}}else{if(n=op(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,Te=null;return}}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Oe===0&&(Oe=5)}function yn(e,t,n){var r=pe,i=dt.transition;try{dt.transition=null,pe=1,mp(e,t,n,r)}finally{dt.transition=i,pe=r}return null}function mp(e,t,n,r){do Qn();while(Jt!==null);if((le&6)!==0)throw Error(c(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Qd(e,l),e===Ae&&(Te=Ae=null,Be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Wi||(Wi=!0,Ec(qr,function(){return Qn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=dt.transition,dt.transition=null;var s=pe;pe=1;var d=le;le|=4,Jo.current=null,ap(e,n),fc(n,e),Of(oo),oi=!!lo,oo=lo=null,e.current=n,up(n),Fd(),le=d,pe=s,dt.transition=l}else e.current=n;if(Wi&&(Wi=!1,Jt=e,Gi=i),l=e.pendingLanes,l===0&&(Zt=null),Ud(n.stateNode),tt(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vi)throw Vi=!1,e=ts,ts=null,e;return(Gi&1)!==0&&e.tag!==0&&Qn(),l=e.pendingLanes,(l&1)!==0?e===ns?Fr++:(Fr=0,ns=e):Fr=0,Qt(),null}function Qn(){if(Jt!==null){var e=ca(Gi),t=dt.transition,n=pe;try{if(dt.transition=null,pe=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,Gi=0,(le&6)!==0)throw Error(c(331));var i=le;for(le|=4,R=e.current;R!==null;){var l=R,s=l.child;if((R.flags&16)!==0){var d=l.deletions;if(d!==null){for(var f=0;f<d.length;f++){var x=d[f];for(R=x;R!==null;){var j=R;switch(j.tag){case 0:case 11:case 15:br(8,j,l)}var C=j.child;if(C!==null)C.return=j,R=C;else for(;R!==null;){j=R;var S=j.sibling,I=j.return;if(sc(j),j===x){R=null;break}if(S!==null){S.return=I,R=S;break}R=I}}}var L=l.alternate;if(L!==null){var O=L.child;if(O!==null){L.child=null;do{var _e=O.sibling;O.sibling=null,O=_e}while(O!==null)}}R=l}}if((l.subtreeFlags&2064)!==0&&s!==null)s.return=l,R=s;else e:for(;R!==null;){if(l=R,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:br(9,l,l.return)}var y=l.sibling;if(y!==null){y.return=l.return,R=y;break e}R=l.return}}var p=e.current;for(R=p;R!==null;){s=R;var v=s.child;if((s.subtreeFlags&2064)!==0&&v!==null)v.return=s,R=v;else e:for(s=p;R!==null;){if(d=R,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Ui(9,d)}}catch(b){Ne(d,d.return,b)}if(d===s){R=null;break e}var E=d.sibling;if(E!==null){E.return=d.return,R=E;break e}R=d.return}}if(le=i,Qt(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(ei,e)}catch{}r=!0}return r}finally{pe=n,dt.transition=t}}return!1}function jc(e,t,n){t=Hn(n,t),t=Uu(e,t,1),e=Kt(e,t,1),t=Xe(),e!==null&&(ar(e,1,t),tt(e,t))}function Ne(e,t,n){if(e.tag===3)jc(e,e,n);else for(;t!==null;){if(t.tag===3){jc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=Hn(n,e),e=$u(t,e,1),t=Kt(t,e,1),e=Xe(),t!==null&&(ar(t,1,e),tt(t,e));break}}t=t.return}}function hp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Be&n)===n&&(Oe===4||Oe===3&&(Be&130023424)===Be&&500>Ee()-es?gn(e,0):qo|=n),tt(e,t)}function Cc(e,t){t===0&&((e.mode&1)===0?t=1:(t=ni,ni<<=1,(ni&130023424)===0&&(ni=4194304)));var n=Xe();e=Lt(e,t),e!==null&&(ar(e,t,n),tt(e,n))}function gp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cc(e,n)}function yp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(t),Cc(e,n)}var Nc;Nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)qe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return qe=!1,ip(e,t,n);qe=(e.flags&131072)!==0}else qe=!1,ke&&(t.flags&1048576)!==0&&iu(t,Ci,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Di(e,t),e=t.pendingProps;var i=bn(t,We.current);Un(t,n),i=Io(null,t,r,e,i,n);var l=Ro();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(l=!0,ki(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Co(t),i.updater=Ai,t.stateNode=i,i._reactInternals=t,Fo(t,r,e,n),t=$o(null,t,r,!0,l,n)):(t.tag=0,ke&&l&&mo(t),Ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Di(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=xp(r),e=yt(r,e),i){case 0:t=Uo(null,t,r,e,n);break e;case 1:t=Zu(null,t,r,e,n);break e;case 11:t=Gu(null,t,r,e,n);break e;case 14:t=Qu(null,t,r,yt(r.type,e),n);break e}throw Error(c(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),Uo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),Zu(e,t,r,i,n);case 3:e:{if(Ju(t),e===null)throw Error(c(387));r=t.pendingProps,l=t.memoizedState,i=l.element,pu(e,t),Ti(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Hn(Error(c(423)),t),t=qu(e,t,r,n,i);break e}else if(r!==i){i=Hn(Error(c(424)),t),t=qu(e,t,r,n,i);break e}else for(lt=Vt(t.stateNode.containerInfo.firstChild),it=t,ke=!0,gt=null,n=du(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fn(),r===i){t=bt(e,t,n);break e}Ke(e,t,r,n)}t=t.child}return t;case 5:return gu(t),e===null&&yo(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,so(r,i)?s=null:l!==null&&so(r,l)&&(t.flags|=32),Xu(e,t),Ke(e,t,s,n),t.child;case 6:return e===null&&yo(t),null;case 13:return ec(e,t,n);case 4:return No(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dn(t,null,r,n):Ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),Gu(e,t,r,i,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,ye(_i,r._currentValue),r._currentValue=s,l!==null)if(ht(l.value,s)){if(l.children===i.children&&!Ze.current){t=bt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var d=l.dependencies;if(d!==null){s=l.child;for(var f=d.firstContext;f!==null;){if(f.context===r){if(l.tag===1){f=Ot(-1,n&-n),f.tag=2;var x=l.updateQueue;if(x!==null){x=x.shared;var j=x.pending;j===null?f.next=f:(f.next=j.next,j.next=f),x.pending=f}}l.lanes|=n,f=l.alternate,f!==null&&(f.lanes|=n),So(l.return,n,t),d.lanes|=n;break}f=f.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(c(341));s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),So(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}Ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Un(t,n),i=ut(i),r=r(i),t.flags|=1,Ke(e,t,r,n),t.child;case 14:return r=t.type,i=yt(r,t.pendingProps),i=yt(r.type,i),Qu(e,t,r,i,n);case 15:return Yu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),Di(e,t),t.tag=1,Je(r)?(e=!0,ki(t)):e=!1,Un(t,n),Du(t,r,i),Fo(t,r,i,n),$o(null,t,r,!0,e,n);case 19:return nc(e,t,n);case 22:return Ku(e,t,n)}throw Error(c(156,t.tag))};function Ec(e,t){return la(e,t)}function vp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,r){return new vp(e,t,n,r)}function as(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return as(e)?1:0;if(e!=null){if(e=e.$$typeof,e===He)return 11;if(e===Ve)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xi(e,t,n,r,i,l){var s=2;if(r=e,typeof e=="function")as(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case U:return vn(n.children,i,l,t);case Z:s=8,i|=8;break;case Ue:return e=ft(12,n,t,i|2),e.elementType=Ue,e.lanes=l,e;case de:return e=ft(13,n,t,i),e.elementType=de,e.lanes=l,e;case Pe:return e=ft(19,n,t,i),e.elementType=Pe,e.lanes=l,e;case ge:return Zi(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $e:s=10;break e;case ze:s=9;break e;case He:s=11;break e;case Ve:s=14;break e;case Re:s=16,r=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=ft(s,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function vn(e,t,n,r){return e=ft(7,e,r,t),e.lanes=n,e}function Zi(e,t,n,r){return e=ft(22,e,r,t),e.elementType=ge,e.lanes=n,e.stateNode={isHidden:!1},e}function us(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function cs(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ds(e,t,n,r,i,l,s,d,f){return e=new wp(e,t,n,d,f),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ft(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Co(l),e}function kp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _c(e){if(!e)return Gt;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if(Je(n))return tu(e,n,t)}return t}function zc(e,t,n,r,i,l,s,d,f){return e=ds(n,r,!0,e,i,l,s,d,f),e.context=_c(null),n=e.current,r=Xe(),i=qt(n),l=Ot(r,i),l.callback=t??null,Kt(n,l,i),e.current.lanes=i,ar(e,i,r),tt(e,r),e}function Ji(e,t,n,r){var i=t.current,l=Xe(),s=qt(i);return n=_c(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(i,t,s),e!==null&&(wt(e,i,s,l),Pi(e,i,s)),s}function qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fs(e,t){Pc(e,t),(e=e.alternate)&&Pc(e,t)}function Sp(){return null}var Tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ps(e){this._internalRoot=e}el.prototype.render=ps.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));Ji(e,t,null,null)},el.prototype.unmount=ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){Ji(null,e,null,null)}),t[Pt]=null}};function el(e){this._internalRoot=e}el.prototype.unstable_scheduleHydration=function(e){if(e){var t=pa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&ga(e)}};function ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ic(){}function jp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var x=qi(s);l.call(x)}}var s=zc(t,r,e,0,null,!1,!1,"",Ic);return e._reactRootContainer=s,e[Pt]=s.current,Sr(e.nodeType===8?e.parentNode:e),hn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var d=r;r=function(){var x=qi(f);d.call(x)}}var f=ds(e,0,!1,null,null,!1,!1,"",Ic);return e._reactRootContainer=f,e[Pt]=f.current,Sr(e.nodeType===8?e.parentNode:e),hn(function(){Ji(t,f,n,r)}),f}function nl(e,t,n,r,i){var l=n._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var d=i;i=function(){var f=qi(s);d.call(f)}}Ji(t,s,e,i)}else s=jp(n,t,e,i,r);return qi(s)}da=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(Al(t,n|1),tt(t,Ee()),(le&6)===0&&(Gn=Ee()+500,Qt()))}break;case 13:hn(function(){var r=Lt(e,1);if(r!==null){var i=Xe();wt(r,e,1,i)}}),fs(e,1)}},Fl=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=Xe();wt(t,e,134217728,n)}fs(e,134217728)}},fa=function(e){if(e.tag===13){var t=qt(e),n=Lt(e,t);if(n!==null){var r=Xe();wt(n,e,t,r)}fs(e,t)}},pa=function(){return pe},ma=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}},Tl=function(e,t,n){switch(t){case"input":if(Sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xi(r);if(!i)throw Error(c(90));Fs(r),Sl(r,i)}}}break;case"textarea":Hs(e,n);break;case"select":t=n.value,t!=null&&jn(e,!!n.multiple,t,!1)}},Js=ls,qs=hn;var Cp={usingClientEntryPoint:!1,Events:[Nr,Ln,xi,Xs,Zs,ls]},Dr={findFiberByHostInstance:sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Np={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:me.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ra(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||Sp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{ei=rl.inject(Np),jt=rl}catch{}}return nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cp,nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ms(t))throw Error(c(200));return kp(e,t,null,n)},nt.createRoot=function(e,t){if(!ms(e))throw Error(c(299));var n=!1,r="",i=Tc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ds(e,1,!1,null,null,n,!1,r,i),e[Pt]=t.current,Sr(e.nodeType===8?e.parentNode:e),new ps(t)},nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=ra(t),e=e===null?null:e.stateNode,e},nt.flushSync=function(e){return hn(e)},nt.hydrate=function(e,t,n){if(!tl(t))throw Error(c(200));return nl(null,e,t,!0,n)},nt.hydrateRoot=function(e,t,n){if(!ms(e))throw Error(c(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",s=Tc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=zc(t,null,e,1,n??null,i,!1,l,s),e[Pt]=t.current,Sr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new el(t)},nt.render=function(e,t,n){if(!tl(t))throw Error(c(200));return nl(null,e,t,!1,n)},nt.unmountComponentAtNode=function(e){if(!tl(e))throw Error(c(40));return e._reactRootContainer?(hn(function(){nl(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1},nt.unstable_batchedUpdates=ls,nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!tl(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return nl(e,t,n,!1,r)},nt.version="18.3.1-next-f1338f8080-20240426",nt}var Dc;function Op(){if(Dc)return ys.exports;Dc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),ys.exports=Lp(),ys.exports}var Bc;function bp(){if(Bc)return il;Bc=1;var o=Op();return il.createRoot=o.createRoot,il.hydrateRoot=o.hydrateRoot,il}var Mp=bp(),nd=Ls();const Kn=_p(nd);var we="-ms-",Vr="-moz-",ce="-webkit-",rd="comm",pl="rule",Os="decl",Ap="@import",Fp="@namespace",id="@keyframes",Dp="@layer",ld=Math.abs,bs=String.fromCharCode,Es=Object.assign;function Bp(o,u){return be(o,0)^45?(((u<<2^be(o,0))<<2^be(o,1))<<2^be(o,2))<<2^be(o,3):0}function od(o){return o.trim()}function At(o,u){return(o=u.exec(o))?o[0]:o}function q(o,u,c){return o.replace(u,c)}function ol(o,u,c){return o.indexOf(u,c)}function be(o,u){return o.charCodeAt(u)|0}function Sn(o,u,c){return o.slice(u,c)}function kt(o){return o.length}function sd(o){return o.length}function $r(o,u){return u.push(o),o}function Up(o,u){return o.map(u).join("")}function Uc(o,u){return o.filter(function(c){return!At(c,u)})}var ml=1,Zn=1,ad=0,pt=0,Ie=0,er="";function hl(o,u,c,h,g,k,z,_){return{value:o,root:u,parent:c,type:h,props:g,children:k,line:ml,column:Zn,length:z,return:"",siblings:_}}function rn(o,u){return Es(hl("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},u)}function Yn(o){for(;o.root;)o=rn(o.root,{children:[o]});$r(o,o.siblings)}function $p(){return Ie}function Hp(){return Ie=pt>0?be(er,--pt):0,Zn--,Ie===10&&(Zn=1,ml--),Ie}function St(){return Ie=pt<ad?be(er,pt++):0,Zn++,Ie===10&&(Zn=1,ml++),Ie}function ln(){return be(er,pt)}function sl(){return pt}function gl(o,u){return Sn(er,o,u)}function Gr(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vp(o){return ml=Zn=1,ad=kt(er=o),pt=0,[]}function Wp(o){return er="",o}function ws(o){return od(gl(pt-1,_s(o===91?o+2:o===40?o+1:o)))}function Gp(o){for(;(Ie=ln())&&Ie<33;)St();return Gr(o)>2||Gr(Ie)>3?"":" "}function Qp(o,u){for(;--u&&St()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return gl(o,sl()+(u<6&&ln()==32&&St()==32))}function _s(o){for(;St();)switch(Ie){case o:return pt;case 34:case 39:o!==34&&o!==39&&_s(Ie);break;case 40:o===41&&_s(o);break;case 92:St();break}return pt}function Yp(o,u){for(;St()&&o+Ie!==57;)if(o+Ie===84&&ln()===47)break;return"/*"+gl(u,pt-1)+"*"+bs(o===47?o:St())}function Kp(o){for(;!Gr(ln());)St();return gl(o,pt)}function Xp(o){return Wp(al("",null,null,null,[""],o=Vp(o),0,[0],o))}function al(o,u,c,h,g,k,z,_,N){for(var F=0,$=0,D=z,G=0,oe=0,X=0,Y=1,J=1,ue=1,M=0,he="",me=g,se=k,ne=h,U=he;J;)switch(X=M,M=St()){case 40:if(X!=108&&be(U,D-1)==58){ol(U+=q(ws(M),"&","&\f"),"&\f",ld(F?_[F-1]:0))!=-1&&(ue=-1);break}case 34:case 39:case 91:U+=ws(M);break;case 9:case 10:case 13:case 32:U+=Gp(X);break;case 92:U+=Qp(sl()-1,7);continue;case 47:switch(ln()){case 42:case 47:$r(Zp(Yp(St(),sl()),u,c,N),N),(Gr(X||1)==5||Gr(ln()||1)==5)&&kt(U)&&Sn(U,-1,void 0)!==" "&&(U+=" ");break;default:U+="/"}break;case 123*Y:_[F++]=kt(U)*ue;case 125*Y:case 59:case 0:switch(M){case 0:case 125:J=0;case 59+$:ue==-1&&(U=q(U,/\f/g,"")),oe>0&&(kt(U)-D||Y===0&&X===47)&&$r(oe>32?Hc(U+";",h,c,D-1,N):Hc(q(U," ","")+";",h,c,D-2,N),N);break;case 59:U+=";";default:if($r(ne=$c(U,u,c,F,$,g,_,he,me=[],se=[],D,k),k),M===123)if($===0)al(U,u,ne,ne,me,k,D,_,se);else{switch(G){case 99:if(be(U,3)===110)break;case 108:if(be(U,2)===97)break;default:$=0;case 100:case 109:case 115:}$?al(o,ne,ne,h&&$r($c(o,ne,ne,0,0,g,_,he,g,me=[],D,se),se),g,se,D,_,h?me:se):al(U,ne,ne,ne,[""],se,0,_,se)}}F=$=oe=0,Y=ue=1,he=U="",D=z;break;case 58:D=1+kt(U),oe=X;default:if(Y<1){if(M==123)--Y;else if(M==125&&Y++==0&&Hp()==125)continue}switch(U+=bs(M),M*Y){case 38:ue=$>0?1:(U+="\f",-1);break;case 44:_[F++]=(kt(U)-1)*ue,ue=1;break;case 64:ln()===45&&(U+=ws(St())),G=ln(),$=D=kt(he=U+=Kp(sl())),M++;break;case 45:X===45&&kt(U)==2&&(Y=0)}}return k}function $c(o,u,c,h,g,k,z,_,N,F,$,D){for(var G=g-1,oe=g===0?k:[""],X=sd(oe),Y=0,J=0,ue=0;Y<h;++Y)for(var M=0,he=Sn(o,G+1,G=ld(J=z[Y])),me=o;M<X;++M)(me=od(J>0?oe[M]+" "+he:q(he,/&\f/g,oe[M])))&&(N[ue++]=me);return hl(o,u,c,g===0?pl:_,N,F,$,D)}function Zp(o,u,c,h){return hl(o,u,c,rd,bs($p()),Sn(o,2,-2),0,h)}function Hc(o,u,c,h,g){return hl(o,u,c,Os,Sn(o,0,h),Sn(o,h+1,-1),h,g)}function ud(o,u,c){switch(Bp(o,u)){case 5103:return ce+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ce+o+o;case 4855:return ce+o.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+o;case 4789:return Vr+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+o+Vr+o+we+o+o;case 5936:switch(be(o,u+11)){case 114:return ce+o+we+q(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return ce+o+we+q(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return ce+o+we+q(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return ce+o+we+o+o;case 6165:return ce+o+we+"flex-"+o+o;case 5187:return ce+o+q(o,/(\w+).+(:[^]+)/,ce+"box-$1$2"+we+"flex-$1$2")+o;case 5443:return ce+o+we+"flex-item-"+q(o,/flex-|-self/g,"")+(At(o,/flex-|baseline/)?"":we+"grid-row-"+q(o,/flex-|-self/g,""))+o;case 4675:return ce+o+we+"flex-line-pack"+q(o,/align-content|flex-|-self/g,"")+o;case 5548:return ce+o+we+q(o,"shrink","negative")+o;case 5292:return ce+o+we+q(o,"basis","preferred-size")+o;case 6060:return ce+"box-"+q(o,"-grow","")+ce+o+we+q(o,"grow","positive")+o;case 4554:return ce+q(o,/([^-])(transform)/g,"$1"+ce+"$2")+o;case 6187:return q(q(q(o,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),o,"")+o;case 5495:case 3959:return q(o,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return q(q(o,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+we+"flex-pack:$3"),/space-between/,"justify")+ce+o+o;case 4200:if(!At(o,/flex-|baseline/))return we+"grid-column-align"+Sn(o,u)+o;break;case 2592:case 3360:return we+q(o,"template-","")+o;case 4384:case 3616:return c&&c.some(function(h,g){return u=g,At(h.props,/grid-\w+-end/)})?~ol(o+(c=c[u].value),"span",0)?o:we+q(o,"-start","")+o+we+"grid-row-span:"+(~ol(c,"span",0)?At(c,/\d+/):+At(c,/\d+/)-+At(o,/\d+/))+";":we+q(o,"-start","")+o;case 4896:case 4128:return c&&c.some(function(h){return At(h.props,/grid-\w+-start/)})?o:we+q(q(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return q(o,/(.+)-inline(.+)/,ce+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(o)-1-u>6)switch(be(o,u+1)){case 109:if(be(o,u+4)!==45)break;case 102:return q(o,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Vr+(be(o,u+3)==108?"$3":"$2-$3"))+o;case 115:return~ol(o,"stretch",0)?ud(q(o,"stretch","fill-available"),u,c)+o:o}break;case 5152:case 5920:return q(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(h,g,k,z,_,N,F){return we+g+":"+k+F+(z?we+g+"-span:"+(_?N:+N-+k)+F:"")+o});case 4949:if(be(o,u+6)===121)return q(o,":",":"+ce)+o;break;case 6444:switch(be(o,be(o,14)===45?18:11)){case 120:return q(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(be(o,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+we+"$2box$3")+o;case 100:return q(o,":",":"+we)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return q(o,"scroll-","scroll-snap-")+o}return o}function dl(o,u){for(var c="",h=0;h<o.length;h++)c+=u(o[h],h,o,u)||"";return c}function Jp(o,u,c,h){switch(o.type){case Dp:if(o.children.length)break;case Ap:case Fp:case Os:return o.return=o.return||o.value;case rd:return"";case id:return o.return=o.value+"{"+dl(o.children,h)+"}";case pl:if(!kt(o.value=o.props.join(",")))return""}return kt(c=dl(o.children,h))?o.return=o.value+"{"+c+"}":""}function qp(o){var u=sd(o);return function(c,h,g,k){for(var z="",_=0;_<u;_++)z+=o[_](c,h,g,k)||"";return z}}function em(o){return function(u){u.root||(u=u.return)&&o(u)}}function tm(o,u,c,h){if(o.length>-1&&!o.return)switch(o.type){case Os:o.return=ud(o.value,o.length,c);return;case id:return dl([rn(o,{value:q(o.value,"@","@"+ce)})],h);case pl:if(o.length)return Up(c=o.props,function(g){switch(At(g,h=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Yn(rn(o,{props:[q(g,/:(read-\w+)/,":"+Vr+"$1")]})),Yn(rn(o,{props:[g]})),Es(o,{props:Uc(c,h)});break;case"::placeholder":Yn(rn(o,{props:[q(g,/:(plac\w+)/,":"+ce+"input-$1")]})),Yn(rn(o,{props:[q(g,/:(plac\w+)/,":"+Vr+"$1")]})),Yn(rn(o,{props:[q(g,/:(plac\w+)/,we+"input-$1")]})),Yn(rn(o,{props:[g]})),Es(o,{props:Uc(c,h)});break}return""})}}var Xn={},ks,Ss;const Jn=typeof process<"u"&&Xn!==void 0&&(Xn.REACT_APP_SC_ATTR||Xn.SC_ATTR)||"data-styled",cd="active",dd="data-styled-version",yl="6.4.1",Ms=`/*!sc*/
`,Wr=typeof window<"u"&&typeof document<"u";function Vc(o){if(typeof process<"u"&&Xn!==void 0){const u=Xn[o];if(u!==void 0&&u!=="")return u!=="false"}}const nm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Ss=(ks=Vc("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&ks!==void 0?ks:Vc("SC_DISABLE_SPEEDY"))!==null&&Ss!==void 0?Ss:typeof process>"u"||Xn===void 0),rm="sc-keyframes-";function vl(o,...u){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${o} for more information.${u.length>0?` Args: ${u.join(", ")}`:""}`)}let ul=new Map,fl=new Map,cl=1;const ll=o=>{if(ul.has(o))return ul.get(o);for(;fl.has(cl);)cl++;const u=cl++;return ul.set(o,u),fl.set(u,o),u},im=o=>fl.get(o),lm=(o,u)=>{cl=u+1,ul.set(o,u),fl.set(u,o)},As=Object.freeze([]),qn=Object.freeze({});function om(o,u,c=qn){return o.theme!==c.theme&&o.theme||u||c.theme}const sm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,am=/(^-|-$)/g;function fd(o){return o.replace(sm,"-").replace(am,"")}const um=/(a)(d)/gi,Wc=o=>String.fromCharCode(o+(o>25?39:97));function pd(o){let u,c="";for(u=Math.abs(o);u>52;u=u/52|0)c=Wc(u%52)+c;return(Wc(u%52)+c).replace(um,"$1-$2")}const zs=5381,wn=(o,u)=>{let c=u.length;for(;c;)o=33*o^u.charCodeAt(--c);return o},md=o=>wn(zs,o);function cm(o){return pd(md(o)>>>0)}function dm(o){return o.displayName||o.name||"Component"}function Ps(o){return typeof o=="string"&&!0}function fm(o){return Ps(o)?`styled.${o}`:`Styled(${dm(o)})`}const hd=Symbol.for("react.memo"),pm=Symbol.for("react.forward_ref"),mm={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},hm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gm={[pm]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[hd]:gd};function Gc(o){return("type"in(u=o)&&u.type.$$typeof)===hd?gd:"$$typeof"in o?gm[o.$$typeof]:mm;var u}const ym=Object.defineProperty,vm=Object.getOwnPropertyNames,xm=Object.getOwnPropertySymbols,wm=Object.getOwnPropertyDescriptor,km=Object.getPrototypeOf,Sm=Object.prototype;function yd(o,u,c){if(typeof u!="string"){const h=km(u);h&&h!==Sm&&yd(o,h,c);const g=vm(u).concat(xm(u)),k=Gc(o),z=Gc(u);for(let _=0;_<g.length;++_){const N=g[_];if(!(N in hm||c&&c[N]||z&&N in z||k&&N in k)){const F=wm(u,N);try{ym(o,N,F)}catch{}}}}return o}function xl(o){return typeof o=="function"}function vd(o){return typeof o=="object"&&"styledComponentId"in o}function Hr(o,u){return o&&u?o+" "+u:o||u||""}function Qc(o,u){return o.join("")}function Qr(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function Ts(o,u,c=!1){if(!c&&!Qr(o)&&!Array.isArray(o))return u;if(Array.isArray(u))for(let h=0;h<u.length;h++)o[h]=Ts(o[h],u[h]);else if(Qr(u))for(const h in u)o[h]=Ts(o[h],u[h]);return o}function xd(o,u){Object.defineProperty(o,"toString",{value:u})}const jm=class{constructor(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o,this._cGroup=0,this._cIndex=0}indexOfGroup(o){if(o===this._cGroup)return this._cIndex;let u=this._cIndex;if(o>this._cGroup)for(let c=this._cGroup;c<o;c++)u+=this.groupSizes[c];else for(let c=this._cGroup-1;c>=o;c--)u-=this.groupSizes[c];return this._cGroup=o,this._cIndex=u,u}insertRules(o,u){if(o>=this.groupSizes.length){const g=this.groupSizes,k=g.length;let z=k;for(;o>=z;)if(z<<=1,z<0)throw vl(16,`${o}`);this.groupSizes=new Uint32Array(z),this.groupSizes.set(g),this.length=z;for(let _=k;_<z;_++)this.groupSizes[_]=0}let c=this.indexOfGroup(o+1),h=0;for(let g=0,k=u.length;g<k;g++)this.tag.insertRule(c,u[g])&&(this.groupSizes[o]++,c++,h++);h>0&&this._cGroup>o&&(this._cIndex+=h)}clearGroup(o){if(o<this.length){const u=this.groupSizes[o],c=this.indexOfGroup(o),h=c+u;this.groupSizes[o]=0;for(let g=c;g<h;g++)this.tag.deleteRule(c);u>0&&this._cGroup>o&&(this._cIndex-=u)}}getGroup(o){let u="";if(o>=this.length||this.groupSizes[o]===0)return u;const c=this.groupSizes[o],h=this.indexOfGroup(o),g=h+c;for(let k=h;k<g;k++)u+=this.tag.getRule(k)+Ms;return u}},Cm=`style[${Jn}][${dd}="${yl}"]`,Nm=new RegExp(`^${Jn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Yc=o=>typeof ShadowRoot<"u"&&o instanceof ShadowRoot||"host"in o&&o.nodeType===11,Is=o=>{if(!o)return document;if(Yc(o))return o;if("getRootNode"in o){const u=o.getRootNode();if(Yc(u))return u}return document},Em=(o,u,c)=>{const h=c.split(",");let g;for(let k=0,z=h.length;k<z;k++)(g=h[k])&&o.registerName(u,g)},_m=(o,u)=>{var c;const h=((c=u.textContent)!==null&&c!==void 0?c:"").split(Ms),g=[];for(let k=0,z=h.length;k<z;k++){const _=h[k].trim();if(!_)continue;const N=_.match(Nm);if(N){const F=0|parseInt(N[1],10),$=N[2];F!==0&&(lm($,F),Em(o,$,N[3]),o.getTag().insertRules(F,g)),g.length=0}else g.push(_)}},js=o=>{const u=Is(o.options.target).querySelectorAll(Cm);for(let c=0,h=u.length;c<h;c++){const g=u[c];g&&g.getAttribute(Jn)!==cd&&(_m(o,g),g.parentNode&&g.parentNode.removeChild(g))}};let Ur=!1;function zm(){if(Ur!==!1)return Ur;if(typeof document<"u"){const o=document.head.querySelector('meta[property="csp-nonce"]');if(o)return Ur=o.nonce||o.getAttribute("content")||void 0;const u=document.head.querySelector('meta[name="sc-nonce"]');if(u)return Ur=u.getAttribute("content")||void 0}return Ur=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const wd=(o,u)=>{const c=document.head,h=o||c,g=document.createElement("style"),k=(N=>{const F=Array.from(N.querySelectorAll(`style[${Jn}]`));return F[F.length-1]})(h),z=k!==void 0?k.nextSibling:null;g.setAttribute(Jn,cd),g.setAttribute(dd,yl);const _=u||zm();return _&&g.setAttribute("nonce",_),h.insertBefore(g,z),g},Pm=class{constructor(o,u){this.element=wd(o,u),this.element.appendChild(document.createTextNode("")),this.sheet=(c=>{var h;if(c.sheet)return c.sheet;const g=(h=c.getRootNode().styleSheets)!==null&&h!==void 0?h:document.styleSheets;for(let k=0,z=g.length;k<z;k++){const _=g[k];if(_.ownerNode===c)return _}throw vl(17)})(this.element),this.length=0}insertRule(o,u){try{return this.sheet.insertRule(u,o),this.length++,!0}catch{return!1}}deleteRule(o){this.sheet.deleteRule(o),this.length--}getRule(o){const u=this.sheet.cssRules[o];return u&&u.cssText?u.cssText:""}},Tm=class{constructor(o,u){this.element=wd(o,u),this.nodes=this.element.childNodes,this.length=0}insertRule(o,u){if(o<=this.length&&o>=0){const c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[o]||null),this.length++,!0}return!1}deleteRule(o){this.element.removeChild(this.nodes[o]),this.length--}getRule(o){return o<this.length?this.nodes[o].textContent:""}};let Kc=Wr;const Im={isServer:!Wr,useCSSOMInjection:!nm};class wl{static registerId(u){return ll(u)}constructor(u=qn,c={},h){this.options=Object.assign(Object.assign({},Im),u),this.gs=c,this.keyframeIds=new Set,this.names=new Map(h),this.server=!!u.isServer,!this.server&&Wr&&Kc&&(Kc=!1,js(this)),xd(this,()=>(g=>{const k=g.getTag(),{length:z}=k;let _="";for(let N=0;N<z;N++){const F=im(N);if(F===void 0)continue;const $=g.names.get(F);if($===void 0||!$.size)continue;const D=k.getGroup(N);if(D.length===0)continue;const G=Jn+".g"+N+'[id="'+F+'"]';let oe="";for(const X of $)X.length>0&&(oe+=X+",");_+=D+G+'{content:"'+oe+'"}'+Ms}return _})(this))}rehydrate(){!this.server&&Wr&&js(this)}reconstructWithOptions(u,c=!0){const h=new wl(Object.assign(Object.assign({},this.options),u),this.gs,c&&this.names||void 0);return h.keyframeIds=new Set(this.keyframeIds),!this.server&&Wr&&u.target!==this.options.target&&Is(this.options.target)!==Is(u.target)&&js(h),h}allocateGSInstance(u){return this.gs[u]=(this.gs[u]||0)+1}getTag(){return this.tag||(this.tag=(u=(({useCSSOMInjection:c,target:h,nonce:g})=>c?new Pm(h,g):new Tm(h,g))(this.options),new jm(u)));var u}hasNameForId(u,c){var h,g;return(g=(h=this.names.get(u))===null||h===void 0?void 0:h.has(c))!==null&&g!==void 0&&g}registerName(u,c){ll(u),u.startsWith(rm)&&this.keyframeIds.add(u);const h=this.names.get(u);h?h.add(c):this.names.set(u,new Set([c]))}insertRules(u,c,h){this.registerName(u,c),this.getTag().insertRules(ll(u),h)}clearNames(u){this.names.has(u)&&this.names.get(u).clear()}clearRules(u){this.getTag().clearGroup(ll(u)),this.clearNames(u)}clearTag(){this.tag=void 0}}const kd=new WeakSet,Rm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Lm(o,u){return u==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||o in Rm||o.startsWith("--")?String(u).trim():u+"px"}const xn=47;function Xc(o){if(o.charCodeAt(0)===45&&o.charCodeAt(1)===45)return o;let u="";for(let c=0;c<o.length;c++){const h=o.charCodeAt(c);u+=h>=65&&h<=90?"-"+String.fromCharCode(h+32):o[c]}return u.startsWith("ms-")?"-"+u:u}const Om=Symbol.for("sc-keyframes");function bm(o){return typeof o=="object"&&o!==null&&Om in o}function Sd(o){return xl(o)&&!(o.prototype&&o.prototype.isReactComponent)}const jd=o=>o==null||o===!1||o==="",Mm=Symbol.for("react.client.reference");function Zc(o){return o.$$typeof===Mm}function Cd(o,u){for(const c in o){const h=o[c];o.hasOwnProperty(c)&&!jd(h)&&(Array.isArray(h)&&kd.has(h)||xl(h)?u.push(Xc(c)+":",h,";"):Qr(h)?(u.push(c+" {"),Cd(h,u),u.push("}")):u.push(Xc(c)+": "+Lm(c,h)+";"))}}function kn(o,u,c,h,g=[]){if(jd(o))return g;const k=typeof o;if(k==="string")return g.push(o),g;if(k==="function"){if(Zc(o))return g;if(Sd(o)&&u){const z=o(u);return kn(z,u,c,h,g)}return g.push(o),g}if(Array.isArray(o)){for(let z=0;z<o.length;z++)kn(o[z],u,c,h,g);return g}return vd(o)?(g.push(`.${o.styledComponentId}`),g):bm(o)?(c?(o.inject(c,h),g.push(o.getName(h))):g.push(o),g):Zc(o)?g:Qr(o)?(Cd(o,g),g):(g.push(o.toString()),g)}const Am=md(yl);class Fm{constructor(u,c,h){this.rules=u,this.componentId=c,this.baseHash=wn(Am,c),this.baseStyle=h,wl.registerId(c)}generateAndInjectStyles(u,c,h){let g=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,c,h):"";{let k="";for(let z=0;z<this.rules.length;z++){const _=this.rules[z];if(typeof _=="string")k+=_;else if(_)if(Sd(_)){const N=_(u);typeof N=="string"?k+=N:N!=null&&N!==!1&&(k+=Qc(kn(N,u,c,h)))}else k+=Qc(kn(_,u,c,h))}if(k){this.dynamicNameCache||(this.dynamicNameCache=new Map);const z=h.hash?h.hash+k:k;let _=this.dynamicNameCache.get(z);if(!_){if(_=pd(wn(wn(this.baseHash,h.hash),k)>>>0),this.dynamicNameCache.size>=200){const N=this.dynamicNameCache.keys().next().value;N!==void 0&&this.dynamicNameCache.delete(N)}this.dynamicNameCache.set(z,_)}if(!c.hasNameForId(this.componentId,_)){const N=h(k,"."+_,void 0,this.componentId);c.insertRules(this.componentId,_,N)}g=Hr(g,_)}}return g}}const Dm=/&/g;function Nd(o,u){let c=0;for(;--u>=0&&o.charCodeAt(u)===92;)c++;return!(1&~c)}function Cs(o){const u=o.length;let c="",h=0,g=0,k=0,z=!1,_=!1;for(let N=0;N<u;N++){const F=o.charCodeAt(N);if(k!==0||z||F!==xn||o.charCodeAt(N+1)!==42)if(z)F===42&&o.charCodeAt(N+1)===xn&&(z=!1,N++);else if(F!==34&&F!==39||Nd(o,N)){if(k===0)if(F===123)g++;else if(F===125){if(g--,g<0){_=!0;let $=N+1;for(;$<u;){const D=o.charCodeAt($);if(D===59||D===10)break;$++}$<u&&o.charCodeAt($)===59&&$++,g=0,N=$-1,h=$;continue}g===0&&(c+=o.substring(h,N+1),h=N+1)}else F===59&&g===0&&(c+=o.substring(h,N+1),h=N+1)}else k===0?k=F:k===F&&(k=0);else z=!0,N++}return _||g!==0||k!==0?(h<u&&g===0&&k===0&&(c+=o.substring(h)),c):o}function Ed(o,u){const c=u+" ",h=","+c;for(let g=0;g<o.length;g++){const k=o[g];if(k.type==="rule"){k.value=(c+k.value).replaceAll(",",h);const z=k.props,_=[];for(let N=0;N<z.length;N++)_[N]=c+z[N];k.props=_}Array.isArray(k.children)&&k.type!=="@keyframes"&&Ed(k.children,u)}return o}function Bm({options:o=qn,plugins:u=As}=qn){let c,h,g;const k=(G,oe,X)=>X.startsWith(h)&&X.endsWith(h)&&X.replaceAll(h,"").length>0?`.${c}`:G,z=u.slice();z.push(G=>{G.type===pl&&G.value.includes("&")&&(g||(g=new RegExp(`\\${h}\\b`,"g")),G.props[0]=G.props[0].replace(Dm,h).replace(g,k))}),o.prefix&&z.push(tm),z.push(Jp);let _=[];const N=qp(z.concat(em(G=>_.push(G)))),F=(G,oe="",X="",Y="&")=>{c=Y,h=oe,g=void 0;const J=(function(M){const he=M.indexOf("//")!==-1,me=M.indexOf("}")!==-1;if(!he&&!me)return M;if(!he)return Cs(M);const se=M.length;let ne="",U=0,Z=0,Ue=0,$e=0,ze=0,He=!1;for(;Z<se;){const de=M.charCodeAt(Z);if(de!==34&&de!==39||Nd(M,Z))if(Ue===0)if(de===xn&&Z+1<se&&M.charCodeAt(Z+1)===42){for(Z+=2;Z+1<se&&(M.charCodeAt(Z)!==42||M.charCodeAt(Z+1)!==xn);)Z++;Z+=2}else if(de!==40)if(de!==41)if($e>0)Z++;else if(de===42&&Z+1<se&&M.charCodeAt(Z+1)===xn)ne+=M.substring(U,Z),Z+=2,U=Z,He=!0;else if(de===xn&&Z+1<se&&M.charCodeAt(Z+1)===xn){for(ne+=M.substring(U,Z);Z<se&&M.charCodeAt(Z)!==10;)Z++;U=Z,He=!0}else de===123?ze++:de===125&&ze--,Z++;else $e>0&&$e--,Z++;else $e++,Z++;else Z++;else Ue===0?Ue=de:Ue===de&&(Ue=0),Z++}return He?(U<se&&(ne+=M.substring(U)),ze===0?ne:Cs(ne)):ze===0?M:Cs(M)})(G);let ue=Xp(X||oe?X+" "+oe+" { "+J+" }":J);return o.namespace&&(ue=Ed(ue,o.namespace)),_=[],dl(ue,N),_},$=o;let D=zs;for(let G=0;G<u.length;G++)u[G].name||vl(15),D=wn(D,u[G].name);return $!=null&&$.namespace&&(D=wn(D,$.namespace)),$!=null&&$.prefix&&(D=wn(D,"p")),F.hash=D!==zs?D.toString():"",F}const Um=new wl,$m=Bm(),_d=Kn.createContext({shouldForwardProp:void 0,styleSheet:Um,stylis:$m,stylisPlugins:void 0});_d.Consumer;function Hm(){return Kn.useContext(_d)}const zd=Kn.createContext(void 0);zd.Consumer;const Jc=Object.prototype.hasOwnProperty,Ns={};function Vm(o,u){const c=typeof o!="string"?"sc":fd(o);Ns[c]=(Ns[c]||0)+1;const h=c+"-"+cm(yl+c+Ns[c]);return u?u+"-"+h:h}function Wm(o,u,c){const h=vd(o),g=o,k=!Ps(o),{attrs:z=As,componentId:_=Vm(u.displayName,u.parentComponentId),displayName:N=fm(o)}=u,F=u.displayName&&u.componentId?fd(u.displayName)+"-"+u.componentId:u.componentId||_,$=h&&g.attrs?g.attrs.concat(z).filter(Boolean):z;let{shouldForwardProp:D}=u;if(h&&g.shouldForwardProp){const Y=g.shouldForwardProp;if(u.shouldForwardProp){const J=u.shouldForwardProp;D=(ue,M)=>Y(ue,M)&&J(ue,M)}else D=Y}const G=new Fm(c,F,h?g.componentStyle:void 0);function oe(Y,J){return(function(ue,M,he){const{attrs:me,componentStyle:se,defaultProps:ne,foldedComponentIds:U,styledComponentId:Z,target:Ue}=ue,$e=Kn.useContext(zd),ze=Hm(),He=ue.shouldForwardProp||ze.shouldForwardProp,de=om(M,$e,ne)||qn;let Pe,Ve;{const A=Kn.useRef(null),P=A.current;if(P!==null&&P[1]===de&&P[2]===ze.styleSheet&&P[3]===ze.stylis&&P[7]===se&&(function(m,w,B){const H=m,Q=w;let ee=0;for(const re in Q)if(Jc.call(Q,re)&&(ee++,H[re]!==Q[re]))return!1;return ee===B})(P[0],M,P[4]))Pe=P[5],Ve=P[6];else{Pe=(function(w,B,H){const Q=Object.assign(Object.assign({},B),{className:void 0,theme:H}),ee=w.length>1;for(let re=0;re<w.length;re++){const ie=w[re],fe=xl(ie)?ie(ee?Object.assign({},Q):Q):ie;for(const Ce in fe)Ce==="className"?Q.className=Hr(Q.className,fe[Ce]):Ce==="style"?Q.style=Object.assign(Object.assign({},Q.style),fe[Ce]):Ce in B&&B[Ce]===void 0||(Q[Ce]=fe[Ce])}return"className"in B&&typeof B.className=="string"&&(Q.className=Hr(Q.className,B.className)),Q})(me,M,de),Ve=(function(w,B,H,Q){return w.generateAndInjectStyles(B,H,Q)})(se,Pe,ze.styleSheet,ze.stylis);let m=0;for(const w in M)Jc.call(M,w)&&m++;A.current=[M,de,ze.styleSheet,ze.stylis,m,Pe,Ve,se]}}const Re=Pe.as||Ue,ge=(function(A,P,m,w){const B={};for(const H in A)A[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&A.theme===m||(H==="forwardedAs"?B.as=A.forwardedAs:w&&!w(H,P)||(B[H]=A[H]));return B})(Pe,Re,de,He);let T=Hr(U,Z);return Ve&&(T+=" "+Ve),Pe.className&&(T+=" "+Pe.className),ge[Ps(Re)&&Re.includes("-")?"class":"className"]=T,he&&(ge.ref=he),nd.createElement(Re,ge)})(X,Y,J)}oe.displayName=N;let X=Kn.forwardRef(oe);return X.attrs=$,X.componentStyle=G,X.displayName=N,X.shouldForwardProp=D,X.foldedComponentIds=h?Hr(g.foldedComponentIds,g.styledComponentId):"",X.styledComponentId=F,X.target=h?g.target:o,Object.defineProperty(X,"defaultProps",{get(){return this._foldedDefaultProps},set(Y){this._foldedDefaultProps=h?(function(J,...ue){for(const M of ue)Ts(J,M,!0);return J})({},g.defaultProps,Y):Y}}),xd(X,()=>`.${X.styledComponentId}`),k&&yd(X,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}var Gm=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function qc(o,u){const c=[o[0]];for(let h=0,g=u.length;h<g;h+=1)c.push(u[h],o[h+1]);return c}const ed=o=>(kd.add(o),o);function Qm(o,...u){if(xl(o)||Qr(o))return ed(kn(qc(As,[o,...u])));const c=o;return u.length===0&&c.length===1&&typeof c[0]=="string"?kn(c):ed(kn(qc(c,u)))}function Rs(o,u,c=qn){if(!u)throw vl(1,u);const h=(g,...k)=>o(u,c,Qm(g,...k));return h.attrs=g=>Rs(o,u,Object.assign(Object.assign({},c),{attrs:Array.prototype.concat(c.attrs,g).filter(Boolean)})),h.withConfig=g=>Rs(o,u,Object.assign(Object.assign({},c),g)),h}const Pd=o=>Rs(Wm,o),zt=Pd;Gm.forEach(o=>{zt[o]=Pd(o)});const Ym={Wrapper:zt.div`
        min-height: 100vh;
        background: #050509;
        color: #f4f4f4;
        font-family: Arial, Helvetica, sans-serif;
        overflow-x: hidden;

        a {
            color: inherit;
            text-decoration: none;
        }

        main {
            width: 100%;
        }
    `},Km={Wrapper:zt.header`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 82px;
        padding: 0 4vw;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(5, 5, 9, 0.72);
        backdrop-filter: blur(22px);

        .brand {
            justify-self: start;
            display: flex;
            align-items: center;
            gap: 0.65rem;
        }

        .brandMark {
            color: #f4f4f4;
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: 0.08em;
        }

        .brandLabel {
            padding: 0.35rem 0.5rem;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 4px;
            color: #74747d;
            font-size: 0.58rem;
            font-weight: 700;
            letter-spacing: 0.18em;
        }

        .nav {
            display: flex;
            align-items: center;
            gap: 2.4rem;
        }

        .nav a {
            position: relative;
            color: #77777f;
            font-size: 0.68rem;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            transition: color 0.25s ease;
        }

        .nav a::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -9px;
            width: 0;
            height: 1px;
            background: #f4f4f4;
            transition: width 0.25s ease;
        }

        .nav a:hover {
            color: #f4f4f4;
        }

        .nav a:hover::after {
            width: 100%;
        }

        .githubLink {
            justify-self: end;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.78rem 1rem;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 999px;
            color: #b5b5bb;
            font-size: 0.66rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
            transition:
                background 0.3s ease,
                color 0.3s ease,
                border-color 0.3s ease;
        }

        .githubLink:hover {
            background: #f4f4f4;
            color: #050509;
            border-color: #f4f4f4;
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr auto;

            .nav {
                display: none;
            }
        }

        @media (max-width: 560px) {
            height: 70px;
            padding: 0 20px;

            .brandLabel {
                display: none;
            }

            .githubLink {
                padding: 0.68rem 0.8rem;
                font-size: 0.58rem;
            }
        }
    `};function Xm(){return a.jsxs(Km.Wrapper,{children:[a.jsxs("a",{className:"brand",href:"#home","aria-label":"a2rp LAB home",children:[a.jsx("span",{className:"brandMark",children:"a2rp"}),a.jsx("span",{className:"brandLabel",children:"LAB"})]}),a.jsxs("nav",{className:"nav","aria-label":"Main navigation",children:[a.jsx("a",{href:"#experiments",children:"Experiments"}),a.jsx("a",{href:"#stack",children:"Stack"}),a.jsx("a",{href:"#process",children:"Process"}),a.jsx("a",{href:"#about",children:"About"})]}),a.jsxs("a",{className:"githubLink",href:"https://github.com/a2rp",target:"_blank",rel:"noreferrer",children:["GitHub",a.jsx("span",{children:"↗"})]})]})}const Zm={Wrapper:zt.section`
        position: relative;
        min-height: 100vh;
        padding: 140px 4vw 70px;
        display: flex;
        align-items: center;
        overflow: hidden;
        background: #050509;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .gridOverlay {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(
                    rgba(255, 255, 255, 0.025) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.025) 1px,
                    transparent 1px
                );
            background-size: 64px 64px;
            mask-image: linear-gradient(
                to bottom,
                transparent,
                black 14%,
                black 84%,
                transparent
            );
            pointer-events: none;
        }

        .glow {
            position: absolute;
            border-radius: 50%;
            filter: blur(140px);
            pointer-events: none;
        }

        .glowOne {
            width: 500px;
            height: 500px;
            top: 10%;
            right: 8%;
            background: rgba(120, 120, 255, 0.08);
        }

        .glowTwo {
            width: 350px;
            height: 350px;
            left: 10%;
            bottom: -10%;
            background: rgba(255, 255, 255, 0.05);
        }

        .heroContent {
            position: relative;
            z-index: 2;
            width: min(760px, 58%);
        }

        .eyebrow {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 2rem;
            color: #777780;
            font-size: 0.68rem;
            text-transform: uppercase;
            letter-spacing: 0.18em;
        }

        .statusDot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #f4f4f4;
            box-shadow: 0 0 14px rgba(255, 255, 255, 0.75);
        }

        h1 {
            margin: 0;
            font-size: clamp(4rem, 7.5vw, 8.5rem);
            line-height: 0.84;
            letter-spacing: -0.065em;
            font-weight: 700;
        }

        h1 span {
            display: block;
            color: #555560;
            font-weight: 500;
        }

        .heroBottom {
            margin-top: 3rem;
            display: flex;
            align-items: flex-end;
            gap: 3rem;
        }

        .heroBottom p {
            max-width: 470px;
            color: #85858d;
            font-size: 0.95rem;
            line-height: 1.8;
        }

        .primaryCta {
            flex-shrink: 0;
            min-width: 220px;
            padding: 1rem 1.2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.025);
            color: #c5c5ca;
            font-size: 0.67rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
            transition:
                background 0.3s ease,
                color 0.3s ease,
                border-color 0.3s ease;
        }

        .primaryCta:hover {
            background: #f4f4f4;
            color: #050509;
            border-color: #f4f4f4;
        }

        .labPanel {
            position: absolute;
            z-index: 2;
            right: 4vw;
            top: 50%;
            width: min(34vw, 520px);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 10px;
            background: rgba(8, 8, 14, 0.82);
            box-shadow:
                0 60px 120px rgba(0, 0, 0, 0.55),
                0 0 80px rgba(90, 90, 255, 0.03);
            backdrop-filter: blur(20px);
            transform: translateY(-50%) perspective(1300px) rotateY(-7deg);
            overflow: hidden;
        }

        .panelHeader {
            height: 46px;
            padding: 0 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: #666670;
            font-size: 0.58rem;
            letter-spacing: 0.14em;
        }

        .panelDots {
            display: flex;
            gap: 6px;
        }

        .panelDots span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #414149;
        }

        .panelBody {
            padding: 28px;
        }

        .terminalLine {
            display: flex;
            gap: 0.8rem;
            margin-bottom: 0.85rem;
            color: #c8c8ce;
            font-family: "Courier New", monospace;
            font-size: 0.75rem;
        }

        .terminalPrompt {
            color: #f4f4f4;
        }

        .terminalLine.dim {
            color: #5f5f68;
        }

        .terminalLine.success {
            color: #b9b9c1;
        }

        .systemGrid {
            margin-top: 2rem;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            border-left: 1px solid rgba(255, 255, 255, 0.08);
        }

        .systemItem {
            min-height: 95px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-right: 1px solid rgba(255, 255, 255, 0.08);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .systemItem span {
            color: #52525b;
            font-size: 0.55rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .systemItem strong {
            color: #aaaab3;
            font-size: 0.68rem;
            font-weight: 500;
            letter-spacing: 0.08em;
        }

        .signal {
            height: 70px;
            margin-top: 2rem;
            display: flex;
            align-items: flex-end;
            gap: 7px;
        }

        .signal span {
            flex: 1;
            min-width: 4px;
            background: linear-gradient(to top, #33333b, #8e8e9a);
            animation: pulse 1.8s ease-in-out infinite alternate;
        }

        .signal span:nth-child(1) {
            height: 22%;
        }

        .signal span:nth-child(2) {
            height: 48%;
            animation-delay: 0.1s;
        }

        .signal span:nth-child(3) {
            height: 78%;
            animation-delay: 0.2s;
        }

        .signal span:nth-child(4) {
            height: 55%;
            animation-delay: 0.3s;
        }

        .signal span:nth-child(5) {
            height: 92%;
            animation-delay: 0.4s;
        }

        .signal span:nth-child(6) {
            height: 67%;
            animation-delay: 0.5s;
        }

        .signal span:nth-child(7) {
            height: 38%;
            animation-delay: 0.6s;
        }

        .signal span:nth-child(8) {
            height: 72%;
            animation-delay: 0.7s;
        }

        .heroMeta {
            position: absolute;
            left: 4vw;
            bottom: 32px;
            display: flex;
            gap: 2rem;
            color: #45454d;
            font-size: 0.56rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
        }

        .scrollIndicator {
            position: absolute;
            right: 4vw;
            bottom: 32px;
            display: flex;
            align-items: center;
            gap: 0.7rem;
            color: #4c4c55;
            font-size: 0.56rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            transition: color 0.3s ease;
        }

        .scrollIndicator:hover {
            color: #d8d8dc;
        }

        @keyframes pulse {
            from {
                opacity: 0.35;
                transform: scaleY(0.75);
                transform-origin: bottom;
            }

            to {
                opacity: 1;
                transform: scaleY(1);
                transform-origin: bottom;
            }
        }

        @media (max-width: 1100px) {
            .heroContent {
                width: 66%;
            }

            .labPanel {
                right: -8vw;
                opacity: 0.65;
            }
        }

        @media (max-width: 760px) {
            min-height: 100svh;
            padding: 120px 20px 90px;
            align-items: flex-start;

            .heroContent {
                width: 100%;
            }

            h1 {
                font-size: clamp(3.5rem, 17vw, 6rem);
            }

            .heroBottom {
                flex-direction: column;
                align-items: flex-start;
                gap: 1.5rem;
            }

            .heroBottom p {
                max-width: 100%;
            }

            .primaryCta {
                width: 100%;
            }

            .labPanel {
                width: 78vw;
                right: -36vw;
                top: 72%;
                opacity: 0.24;
                pointer-events: none;
            }

            .heroMeta {
                display: none;
            }

            .scrollIndicator {
                left: 20px;
                right: auto;
                bottom: 24px;
            }
        }
    `};function Jm(){return a.jsxs(Zm.Wrapper,{id:"home",children:[a.jsx("div",{className:"gridOverlay"}),a.jsx("div",{className:"glow glowOne"}),a.jsx("div",{className:"glow glowTwo"}),a.jsxs("div",{className:"heroContent",children:[a.jsxs("div",{className:"eyebrow",children:[a.jsx("span",{className:"statusDot"}),"Experimental technology playground"]}),a.jsxs("h1",{children:["BUILD.",a.jsx("span",{children:"BREAK."}),"LEARN.",a.jsx("span",{children:"REPEAT."})]}),a.jsxs("div",{className:"heroBottom",children:[a.jsx("p",{children:"a2rp LAB is a digital laboratory for experiments in code, interfaces, AI, creative technology and emerging web ideas."}),a.jsxs("a",{className:"primaryCta",href:"#experiments",children:["Explore experiments",a.jsx("span",{children:"↘"})]})]})]}),a.jsxs("div",{className:"labPanel",children:[a.jsxs("div",{className:"panelHeader",children:[a.jsxs("div",{className:"panelDots",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsx("span",{children:"LAB_STATUS.exe"})]}),a.jsxs("div",{className:"panelBody",children:[a.jsxs("div",{className:"terminalLine",children:[a.jsx("span",{className:"terminalPrompt",children:"$"}),a.jsx("span",{children:"initialize a2rp-lab"})]}),a.jsxs("div",{className:"terminalLine dim",children:[a.jsx("span",{children:">"}),a.jsx("span",{children:"loading experiments..."})]}),a.jsxs("div",{className:"terminalLine dim",children:[a.jsx("span",{children:">"}),a.jsx("span",{children:"connecting creative systems..."})]}),a.jsxs("div",{className:"terminalLine success",children:[a.jsx("span",{children:"✓"}),a.jsx("span",{children:"lab online"})]}),a.jsxs("div",{className:"systemGrid",children:[a.jsxs("div",{className:"systemItem",children:[a.jsx("span",{children:"Status"}),a.jsx("strong",{children:"ONLINE"})]}),a.jsxs("div",{className:"systemItem",children:[a.jsx("span",{children:"Mode"}),a.jsx("strong",{children:"EXPERIMENTAL"})]}),a.jsxs("div",{className:"systemItem",children:[a.jsx("span",{children:"Build"}),a.jsx("strong",{children:"2026.08"})]}),a.jsxs("div",{className:"systemItem",children:[a.jsx("span",{children:"Environment"}),a.jsx("strong",{children:"PUBLIC"})]})]}),a.jsxs("div",{className:"signal",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})]})]}),a.jsxs("div",{className:"heroMeta",children:[a.jsx("span",{children:"Creative Coding"}),a.jsx("span",{children:"Interfaces"}),a.jsx("span",{children:"AI"}),a.jsx("span",{children:"Experiments"})]}),a.jsxs("a",{className:"scrollIndicator",href:"#experiments",children:["Scroll to explore",a.jsx("span",{children:"↓"})]})]})}const qm={Wrapper:zt.section`
        position: relative;
        padding: 140px 4vw;
        background: #07070b;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .sectionHeader {
            display: grid;
            grid-template-columns:
                minmax(0, 1.45fr)
                minmax(280px, 0.55fr);
            gap: 5rem;
            align-items: end;
            margin-bottom: 90px;
        }

        .sectionIndex {
            display: block;
            margin-bottom: 2rem;
            color: #55555e;
            font-size: 0.62rem;
            letter-spacing: 0.18em;
        }

        h2 {
            max-width: 950px;
            font-size: clamp(3.8rem, 6vw, 7rem);
            line-height: 0.92;
            letter-spacing: -0.06em;
            font-weight: 600;
        }

        h2 span {
            display: block;
            color: #555560;
            font-weight: 400;
        }

        .sectionHeader > p {
            max-width: 410px;
            color: #74747d;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .experimentGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .experimentCard {
            min-width: 0;
            border-right: 1px solid rgba(255, 255, 255, 0.09);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            background: #07070b;
        }

        .visualArea {
            position: relative;
            min-height: 540px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background:
                radial-gradient(
                    circle at center,
                    rgba(255, 255, 255, 0.035),
                    transparent 58%
                ),
                #09090e;
        }

        .visualArea::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(
                    rgba(255, 255, 255, 0.025) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.025) 1px,
                    transparent 1px
                );
            background-size: 52px 52px;
        }

        .visualMeta {
            position: absolute;
            top: 24px;
            left: 24px;
            right: 24px;
            z-index: 5;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #51515a;
            font-size: 0.56rem;
            letter-spacing: 0.14em;
        }

        .status {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .statusDot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #a7a7b2;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.45);
        }

        .categoryBadge {
            position: absolute;
            right: 24px;
            bottom: 24px;
            z-index: 5;
            padding: 0.55rem 0.7rem;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 999px;
            background: rgba(5, 5, 9, 0.72);
            backdrop-filter: blur(14px);
            color: #686872;
            font-size: 0.55rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .interfaceVisual {
            position: relative;
            z-index: 2;
            width: min(72%, 520px);
            aspect-ratio: 1.38;
            border: 1px solid rgba(255, 255, 255, 0.13);
            border-radius: 8px;
            background: rgba(7, 7, 12, 0.85);
            box-shadow: 0 45px 90px rgba(0, 0, 0, 0.5);
            transform: perspective(1000px) rotateX(7deg) rotateY(-8deg);
            overflow: hidden;
            transition: transform 0.6s ease;
        }

        .experimentCard:hover .interfaceVisual {
            transform: perspective(1000px) rotateX(2deg) rotateY(-2deg)
                scale(1.025);
        }

        .interfaceTop {
            height: 38px;
            padding: 0 14px;
            display: flex;
            align-items: center;
            gap: 6px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .interfaceTop span {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #3e3e47;
        }

        .interfaceBody {
            height: calc(100% - 38px);
            display: grid;
            grid-template-columns: 23% 1fr;
        }

        .interfaceSide {
            border-right: 1px solid rgba(255, 255, 255, 0.07);
            background: rgba(255, 255, 255, 0.012);
        }

        .interfaceMain {
            padding: 9%;
        }

        .interfaceTitle,
        .interfaceLine {
            display: block;
            border-radius: 999px;
            background: #303038;
        }

        .interfaceTitle {
            width: 72%;
            height: 15px;
            margin-bottom: 14px;
            background: #777780;
        }

        .interfaceLine {
            width: 56%;
            height: 6px;
            margin-bottom: 8px;
        }

        .interfaceLine.short {
            width: 35%;
        }

        .interfaceCards {
            margin-top: 11%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }

        .interfaceCards span {
            aspect-ratio: 1;
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 5px;
            background: linear-gradient(145deg, #14141a, #08080d);
        }

        .signalVisual {
            position: relative;
            z-index: 2;
            width: 320px;
            height: 320px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .signalOrbit {
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.13);
            border-radius: 50%;
        }

        .orbitOne {
            width: 100%;
            height: 100%;
            animation: rotate 24s linear infinite;
        }

        .orbitTwo {
            width: 72%;
            height: 72%;
            border-style: dashed;
            animation: rotateReverse 18s linear infinite;
        }

        .orbitThree {
            width: 44%;
            height: 44%;
            animation: rotate 14s linear infinite;
        }

        .signalCore {
            width: 95px;
            height: 95px;
            border-radius: 50%;
            background: radial-gradient(
                circle at 35% 28%,
                #d8d8df,
                #53535e 24%,
                #101016 67%
            );
            box-shadow: 0 0 70px rgba(255, 255, 255, 0.07);
        }

        .node {
            position: absolute;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #a7a7b0;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.55);
        }

        .nodeOne {
            top: 9%;
            left: 30%;
        }

        .nodeTwo {
            top: 43%;
            right: -1%;
        }

        .nodeThree {
            bottom: 7%;
            left: 38%;
        }

        .nodeFour {
            top: 34%;
            left: 8%;
        }

        .spatialVisual {
            position: relative;
            z-index: 2;
            width: 340px;
            height: 340px;
            transform: rotate(-8deg);
        }

        .spatialCube {
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.14);
            background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.08),
                rgba(255, 255, 255, 0.01)
            );
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
            transition: transform 0.5s ease;
        }

        .cubeOne {
            width: 130px;
            height: 130px;
            top: 15px;
            left: 28px;
        }

        .cubeTwo {
            width: 95px;
            height: 95px;
            top: 82px;
            right: 22px;
        }

        .cubeThree {
            width: 110px;
            height: 110px;
            bottom: 15px;
            left: 78px;
        }

        .cubeFour {
            width: 62px;
            height: 62px;
            bottom: 45px;
            right: 20px;
        }

        .cubeFive {
            width: 52px;
            height: 52px;
            top: 142px;
            left: 5px;
        }

        .experimentCard:hover .cubeOne {
            transform: translate(-8px, -8px);
        }

        .experimentCard:hover .cubeTwo {
            transform: translate(8px, -4px);
        }

        .experimentCard:hover .cubeThree {
            transform: translateY(9px);
        }

        .experimentCard:hover .cubeFour {
            transform: translate(8px, 7px);
        }

        .experimentCard:hover .cubeFive {
            transform: translateX(-7px);
        }

        .coreVisual {
            position: relative;
            z-index: 2;
            width: 330px;
            height: 330px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .coreRing {
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 50%;
        }

        .ringOuter {
            width: 100%;
            height: 100%;
            animation: rotate 30s linear infinite;
        }

        .ringMiddle {
            width: 70%;
            height: 70%;
            border-style: dashed;
            animation: rotateReverse 22s linear infinite;
        }

        .ringInner {
            width: 46%;
            height: 46%;
        }

        .systemCore {
            width: 108px;
            height: 108px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 18px;
            background: linear-gradient(145deg, #17171e, #08080d);
            box-shadow:
                inset 0 0 35px rgba(255, 255, 255, 0.025),
                0 35px 60px rgba(0, 0, 0, 0.45);
            transform: rotate(45deg);
        }

        .systemCore span {
            color: #85858e;
            font-size: 1.4rem;
            font-weight: 700;
            letter-spacing: 0.06em;
            transform: rotate(-45deg);
        }

        .cardContent {
            min-height: 245px;
            padding: 30px;
        }

        .cardHeading {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
        }

        .cardHeading h3 {
            color: #d2d2d8;
            font-size: clamp(1.6rem, 2vw, 2.3rem);
            font-weight: 500;
            letter-spacing: -0.035em;
        }

        .cardArrow {
            width: 44px;
            height: 44px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 50%;
            color: #595962;
            transition:
                background 0.3s ease,
                color 0.3s ease,
                transform 0.3s ease;
        }

        .experimentCard:hover .cardArrow {
            background: #f4f4f4;
            color: #050509;
            transform: rotate(45deg);
        }

        .cardContent > p {
            max-width: 560px;
            margin-top: 1.2rem;
            color: #6d6d76;
            font-size: 0.86rem;
            line-height: 1.8;
        }

        .tags {
            margin-top: 1.6rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .tags span {
            padding: 0.45rem 0.65rem;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 999px;
            color: #51515a;
            font-size: 0.52rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        @keyframes rotateReverse {
            from {
                transform: rotate(360deg);
            }

            to {
                transform: rotate(0deg);
            }
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 2rem;
                margin-bottom: 65px;
            }

            .experimentGrid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            h2 {
                font-size: clamp(3rem, 14vw, 4.8rem);
            }

            .visualArea {
                min-height: 410px;
            }

            .interfaceVisual {
                width: 84%;
            }

            .signalVisual,
            .coreVisual {
                width: 240px;
                height: 240px;
            }

            .spatialVisual {
                width: 250px;
                height: 250px;
                transform: scale(0.78) rotate(-8deg);
            }

            .cardContent {
                min-height: auto;
                padding: 24px 20px 28px;
            }
        }
    `},eh=[{id:"EXP-001",title:"Adaptive Interface",category:"Interface System",status:"ACTIVE",description:"A responsive interaction study exploring modular layouts, adaptive states and interface behavior.",tags:["React","UI","Responsive"],visual:"interface"},{id:"EXP-002",title:"Neural Signal",category:"AI Concept",status:"RESEARCH",description:"A visual experiment inspired by neural networks, signal processing and machine-assisted interfaces.",tags:["AI","Data","Motion"],visual:"signal"},{id:"EXP-003",title:"Spatial Grid",category:"Creative Coding",status:"ACTIVE",description:"An evolving grid system designed around depth, motion, geometry and procedural visual structures.",tags:["Creative Code","Geometry","Web"],visual:"grid"},{id:"EXP-004",title:"System Core",category:"Prototype",status:"PROTOTYPE",description:"A technical interface concept focused on system monitoring, status visualization and control surfaces.",tags:["Prototype","System UI","Data"],visual:"core"}];function th({type:o}){return o==="interface"?a.jsxs("div",{className:"interfaceVisual",children:[a.jsxs("div",{className:"interfaceTop",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsxs("div",{className:"interfaceBody",children:[a.jsx("div",{className:"interfaceSide"}),a.jsxs("div",{className:"interfaceMain",children:[a.jsx("span",{className:"interfaceTitle"}),a.jsx("span",{className:"interfaceLine"}),a.jsx("span",{className:"interfaceLine short"}),a.jsxs("div",{className:"interfaceCards",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})]})]})]}):o==="signal"?a.jsxs("div",{className:"signalVisual",children:[a.jsx("div",{className:"signalOrbit orbitOne"}),a.jsx("div",{className:"signalOrbit orbitTwo"}),a.jsx("div",{className:"signalOrbit orbitThree"}),a.jsx("div",{className:"signalCore"}),a.jsx("span",{className:"node nodeOne"}),a.jsx("span",{className:"node nodeTwo"}),a.jsx("span",{className:"node nodeThree"}),a.jsx("span",{className:"node nodeFour"})]}):o==="grid"?a.jsxs("div",{className:"spatialVisual",children:[a.jsx("div",{className:"spatialCube cubeOne"}),a.jsx("div",{className:"spatialCube cubeTwo"}),a.jsx("div",{className:"spatialCube cubeThree"}),a.jsx("div",{className:"spatialCube cubeFour"}),a.jsx("div",{className:"spatialCube cubeFive"})]}):a.jsxs("div",{className:"coreVisual",children:[a.jsx("div",{className:"coreRing ringOuter"}),a.jsx("div",{className:"coreRing ringMiddle"}),a.jsx("div",{className:"coreRing ringInner"}),a.jsx("div",{className:"systemCore",children:a.jsx("span",{children:"a2"})})]})}function nh(){return a.jsxs(qm.Wrapper,{id:"experiments",children:[a.jsxs("div",{className:"sectionHeader",children:[a.jsxs("div",{children:[a.jsx("span",{className:"sectionIndex",children:"01 / EXPERIMENTS"}),a.jsxs("h2",{children:["Ideas under",a.jsx("span",{children:"active development."})]})]}),a.jsx("p",{children:"A collection of interface studies, prototypes and creative technology experiments built to test ideas before they become products."})]}),a.jsx("div",{className:"experimentGrid",children:eh.map(o=>a.jsxs("article",{className:"experimentCard",children:[a.jsxs("div",{className:"visualArea",children:[a.jsxs("div",{className:"visualMeta",children:[a.jsx("span",{children:o.id}),a.jsxs("span",{className:"status",children:[a.jsx("span",{className:"statusDot"}),o.status]})]}),a.jsx(th,{type:o.visual}),a.jsx("span",{className:"categoryBadge",children:o.category})]}),a.jsxs("div",{className:"cardContent",children:[a.jsxs("div",{className:"cardHeading",children:[a.jsx("h3",{children:o.title}),a.jsx("span",{className:"cardArrow",children:"↗"})]}),a.jsx("p",{children:o.description}),a.jsx("div",{className:"tags",children:o.tags.map(u=>a.jsx("span",{children:u},u))})]})]},o.id))})]})}const rh={Wrapper:zt.section`
        position: relative;
        padding: 140px 4vw;
        background: #050509;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .sectionHeader {
            display: grid;
            grid-template-columns: 0.55fr 1.45fr;
            gap: 5rem;
            margin-bottom: 90px;
        }

        .sectionIndex {
            color: #55555e;
            font-size: 0.62rem;
            letter-spacing: 0.18em;
        }

        .headingBlock h2 {
            max-width: 980px;
            font-size: clamp(3.8rem, 6vw, 7rem);
            line-height: 0.92;
            letter-spacing: -0.06em;
            font-weight: 600;
        }

        .headingBlock h2 span {
            display: block;
            color: #555560;
            font-weight: 400;
        }

        .headingBlock p {
            max-width: 520px;
            margin-top: 2.4rem;
            color: #74747d;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .stackMatrix {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .stackGroup {
            min-width: 0;
            border-right: 1px solid rgba(255, 255, 255, 0.09);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            background: #07070b;
        }

        .groupHeader {
            min-height: 130px;
            padding: 28px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            background:
                linear-gradient(
                    135deg,
                    rgba(255, 255, 255, 0.025),
                    transparent 60%
                ),
                #07070b;
        }

        .groupHeader > span {
            color: #4c4c55;
            font-size: 0.55rem;
            letter-spacing: 0.15em;
        }

        .groupHeader h3 {
            color: #cfcfd5;
            font-size: clamp(1.8rem, 2.6vw, 3rem);
            font-weight: 500;
            letter-spacing: -0.04em;
        }

        .groupItems {
            display: grid;
        }

        .stackItem {
            min-height: 92px;
            padding: 0 26px;
            display: grid;
            grid-template-columns: 42px 1fr auto;
            gap: 1rem;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            transition:
                background 0.3s ease,
                padding 0.3s ease;
        }

        .stackItem:last-child {
            border-bottom: 0;
        }

        .stackItem:hover {
            padding-left: 34px;
            padding-right: 34px;
            background: rgba(255, 255, 255, 0.025);
        }

        .itemIndex {
            color: #404048;
            font-size: 0.54rem;
            letter-spacing: 0.13em;
        }

        .stackItem strong {
            color: #9d9da6;
            font-size: 0.85rem;
            font-weight: 500;
            letter-spacing: 0.02em;
            transition: color 0.3s ease;
        }

        .stackItem:hover strong {
            color: #e1e1e5;
        }

        .itemStatus {
            padding: 0.38rem 0.52rem;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 999px;
            color: #4d4d56;
            font-size: 0.48rem;
            letter-spacing: 0.13em;
        }

        .stackFooter {
            margin-top: 44px;
            padding-top: 28px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .stackStatus {
            display: flex;
            align-items: center;
            gap: 0.65rem;
            color: #5d5d66;
            font-size: 0.58rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .statusDot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #a8a8b2;
            box-shadow: 0 0 9px rgba(255, 255, 255, 0.45);
        }

        .stackFooter p {
            max-width: 420px;
            color: #4f4f58;
            font-size: 0.72rem;
            line-height: 1.7;
            text-align: right;
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 2rem;
                margin-bottom: 65px;
            }

            .stackMatrix {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .headingBlock h2 {
                font-size: clamp(3rem, 14vw, 4.8rem);
            }

            .groupHeader {
                min-height: 110px;
                padding: 22px;
            }

            .stackItem {
                min-height: 82px;
                padding: 0 20px;
                grid-template-columns: 34px 1fr;
            }

            .stackItem:hover {
                padding-left: 20px;
                padding-right: 20px;
            }

            .itemStatus {
                display: none;
            }

            .stackFooter {
                flex-direction: column;
                align-items: flex-start;
            }

            .stackFooter p {
                text-align: left;
            }
        }
    `},ih=[{group:"Interface",items:["React","JavaScript","Styled Components","Responsive UI"]},{group:"Build",items:["Vite","ESBuild","GitHub Pages","Git"]},{group:"Creative",items:["Motion","Interaction","Visual Systems","Creative Coding"]},{group:"Exploration",items:["AI Concepts","Prototypes","Experiments","Emerging Web"]}];function lh(){return a.jsxs(rh.Wrapper,{id:"stack",children:[a.jsxs("div",{className:"sectionHeader",children:[a.jsx("span",{className:"sectionIndex",children:"02 / TECHNOLOGY STACK"}),a.jsxs("div",{className:"headingBlock",children:[a.jsxs("h2",{children:["Tools change.",a.jsx("span",{children:"Curiosity stays."})]}),a.jsx("p",{children:"The lab uses a focused modern stack, but every tool is treated as a means to test ideas, not as the idea itself."})]})]}),a.jsx("div",{className:"stackMatrix",children:ih.map((o,u)=>a.jsxs("article",{className:"stackGroup",children:[a.jsxs("div",{className:"groupHeader",children:[a.jsxs("span",{children:["SYS-",String(u+1).padStart(2,"0")]}),a.jsx("h3",{children:o.group})]}),a.jsx("div",{className:"groupItems",children:o.items.map((c,h)=>a.jsxs("div",{className:"stackItem",children:[a.jsx("span",{className:"itemIndex",children:String(h+1).padStart(2,"0")}),a.jsx("strong",{children:c}),a.jsx("span",{className:"itemStatus",children:"READY"})]},c))})]},o.group))}),a.jsxs("div",{className:"stackFooter",children:[a.jsxs("div",{className:"stackStatus",children:[a.jsx("span",{className:"statusDot"}),"Systems operational"]}),a.jsx("p",{children:"New technologies are added when an experiment actually benefits from them."})]})]})}const oh={Wrapper:zt.section`
        position: relative;
        padding: 140px 4vw;
        background: #07070b;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .sectionHeader {
            display: grid;
            grid-template-columns: 0.55fr 1.45fr;
            gap: 5rem;
            margin-bottom: 90px;
        }

        .sectionIndex {
            color: #55555e;
            font-size: 0.62rem;
            letter-spacing: 0.18em;
        }

        .headingBlock h2 {
            max-width: 980px;
            font-size: clamp(3.8rem, 6vw, 7rem);
            line-height: 0.92;
            letter-spacing: -0.06em;
            font-weight: 600;
        }

        .headingBlock h2 span {
            display: block;
            color: #555560;
            font-weight: 400;
        }

        .headingBlock p {
            max-width: 520px;
            margin-top: 2.4rem;
            color: #74747d;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .processList {
            border-top: 1px solid rgba(255, 255, 255, 0.09);
        }

        .processItem {
            position: relative;
            min-height: 170px;
            display: grid;
            grid-template-columns: 90px 0.9fr 1.25fr 90px;
            gap: 2rem;
            align-items: center;
            padding: 34px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            transition:
                padding 0.35s ease,
                background 0.35s ease;
        }

        .processItem::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0;
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.03),
                transparent 70%
            );
            transition: opacity 0.35s ease;
        }

        .processItem:hover::before {
            opacity: 1;
        }

        .processItem:hover {
            padding-left: 18px;
            padding-right: 18px;
        }

        .processItem > * {
            position: relative;
            z-index: 1;
        }

        .stepNumber {
            color: #44444d;
            font-size: 0.58rem;
            letter-spacing: 0.16em;
        }

        .stepTitle {
            display: flex;
            flex-direction: column;
            gap: 0.55rem;
        }

        .stepTitle span {
            color: #4f4f58;
            font-size: 0.52rem;
            letter-spacing: 0.14em;
        }

        .stepTitle h3 {
            color: #d1d1d7;
            font-size: clamp(1.8rem, 2.6vw, 3rem);
            font-weight: 500;
            letter-spacing: -0.045em;
        }

        .processItem > p {
            max-width: 560px;
            color: #6d6d76;
            font-size: 0.86rem;
            line-height: 1.8;
        }

        .stepVisual {
            position: relative;
            height: 100%;
            min-height: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .stepNode {
            position: relative;
            z-index: 2;
            width: 12px;
            height: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            background: #0b0b10;
            box-shadow:
                inset 0 0 8px rgba(255, 255, 255, 0.12),
                0 0 12px rgba(255, 255, 255, 0.08);
            transition:
                background 0.3s ease,
                transform 0.3s ease;
        }

        .processItem:hover .stepNode {
            background: #d7d7dc;
            transform: scale(1.25);
        }

        .stepLine {
            position: absolute;
            top: 50%;
            left: calc(50% + 6px);
            width: calc(100% + 2rem);
            height: 1px;
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.14),
                rgba(255, 255, 255, 0.03)
            );
        }

        .processFooter {
            margin-top: 44px;
            padding: 26px 0;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 2rem;
            align-items: center;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .processFooter > span,
        .processFooter > strong {
            color: #4f4f58;
            font-size: 0.52rem;
            font-weight: 500;
            letter-spacing: 0.15em;
        }

        .loopIndicator {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 6px;
        }

        .loopIndicator span {
            height: 3px;
            background: #34343c;
            animation: loopPulse 2s ease-in-out infinite;
        }

        .loopIndicator span:nth-child(2) {
            animation-delay: 0.15s;
        }

        .loopIndicator span:nth-child(3) {
            animation-delay: 0.3s;
        }

        .loopIndicator span:nth-child(4) {
            animation-delay: 0.45s;
        }

        .loopIndicator span:nth-child(5) {
            animation-delay: 0.6s;
        }

        @keyframes loopPulse {
            0%,
            100% {
                opacity: 0.25;
                transform: scaleX(0.7);
            }

            50% {
                opacity: 1;
                transform: scaleX(1);
            }
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 2rem;
                margin-bottom: 65px;
            }

            .processItem {
                grid-template-columns: 52px 1fr 50px;
                gap: 1.2rem;
            }

            .processItem > p {
                grid-column: 2 / 4;
            }

            .stepVisual {
                grid-column: 3;
                grid-row: 1 / 3;
            }

            .stepLine {
                display: none;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .headingBlock h2 {
                font-size: clamp(3rem, 14vw, 4.8rem);
            }

            .processItem {
                min-height: auto;
                grid-template-columns: 34px 1fr;
                padding: 28px 0;
            }

            .processItem:hover {
                padding-left: 0;
                padding-right: 0;
            }

            .stepNumber {
                align-self: start;
                padding-top: 0.35rem;
            }

            .stepTitle {
                grid-column: 2;
            }

            .processItem > p {
                grid-column: 2;
            }

            .stepVisual {
                display: none;
            }

            .processFooter {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
        }
    `},td=[{number:"01",title:"Observe",description:"Study the problem, the environment and the constraints before touching the interface.",meta:"RESEARCH"},{number:"02",title:"Prototype",description:"Turn ideas into something visible and interactive as quickly as possible.",meta:"BUILD"},{number:"03",title:"Break",description:"Stress-test assumptions, interactions and technical decisions until weak points surface.",meta:"TEST"},{number:"04",title:"Refine",description:"Remove noise, strengthen the system and improve every detail that affects the experience.",meta:"ITERATE"},{number:"05",title:"Ship",description:"Package the experiment into a stable, usable and documented result worth sharing.",meta:"RELEASE"}];function sh(){return a.jsxs(oh.Wrapper,{id:"process",children:[a.jsxs("div",{className:"sectionHeader",children:[a.jsx("span",{className:"sectionIndex",children:"03 / PROCESS"}),a.jsxs("div",{className:"headingBlock",children:[a.jsxs("h2",{children:["Experiment fast.",a.jsx("span",{children:"Refine relentlessly."})]}),a.jsx("p",{children:"Every experiment follows a simple loop designed to move from curiosity to a working result without losing the original idea."})]})]}),a.jsx("div",{className:"processList",children:td.map((o,u)=>a.jsxs("article",{className:"processItem",children:[a.jsx("div",{className:"stepNumber",children:o.number}),a.jsxs("div",{className:"stepTitle",children:[a.jsx("span",{children:o.meta}),a.jsx("h3",{children:o.title})]}),a.jsx("p",{children:o.description}),a.jsxs("div",{className:"stepVisual",children:[a.jsx("span",{className:"stepNode"}),u<td.length-1&&a.jsx("span",{className:"stepLine"})]})]},o.number))}),a.jsxs("div",{className:"processFooter",children:[a.jsx("span",{children:"LOOP STATUS"}),a.jsxs("div",{className:"loopIndicator",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsx("strong",{children:"CONTINUOUS"})]})]})}const ah={Wrapper:zt.section`
        position: relative;
        padding: 140px 4vw;
        overflow: hidden;
        background: #050509;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .gridOverlay {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(
                    rgba(255, 255, 255, 0.022) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.022) 1px,
                    transparent 1px
                );
            background-size: 54px 54px;
            mask-image: linear-gradient(
                to bottom,
                transparent,
                black 12%,
                black 88%,
                transparent
            );
            pointer-events: none;
        }

        .sectionTop,
        .metricsGrid,
        .telemetryPanel {
            position: relative;
            z-index: 1;
        }

        .sectionTop {
            margin-bottom: 70px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
        }

        .sectionIndex {
            color: #55555e;
            font-size: 0.62rem;
            letter-spacing: 0.18em;
        }

        .liveStatus {
            display: flex;
            align-items: center;
            gap: 0.65rem;
            color: #5f5f68;
            font-size: 0.54rem;
            letter-spacing: 0.15em;
        }

        .statusDot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #bebec7;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.45);
            animation: statusPulse 1.8s ease-in-out infinite;
        }

        .metricsGrid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .metricCard {
            position: relative;
            min-height: 390px;
            padding: 28px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-right: 1px solid rgba(255, 255, 255, 0.09);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            background: rgba(255, 255, 255, 0.012);
            overflow: hidden;
            transition:
                background 0.35s ease,
                transform 0.35s ease;
        }

        .metricCard::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0;
            background: radial-gradient(
                circle at 50% 35%,
                rgba(255, 255, 255, 0.055),
                transparent 55%
            );
            transition: opacity 0.35s ease;
        }

        .metricCard:hover {
            background: rgba(255, 255, 255, 0.022);
            transform: translateY(-5px);
        }

        .metricCard:hover::before {
            opacity: 1;
        }

        .metricCard > * {
            position: relative;
            z-index: 1;
        }

        .metricCode {
            color: #45454e;
            font-size: 0.52rem;
            letter-spacing: 0.15em;
        }

        .metricCard strong {
            color: #d5d5da;
            font-size: clamp(4rem, 6vw, 7rem);
            line-height: 1;
            font-weight: 300;
            letter-spacing: -0.07em;
        }

        .metricLabel {
            color: #66666f;
            font-size: 0.65rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .metricSignal {
            height: 54px;
            display: flex;
            align-items: flex-end;
            gap: 5px;
        }

        .metricSignal span {
            flex: 1;
            min-width: 3px;
            background: linear-gradient(to top, #27272f, #73737e);
            animation: metricPulse 1.6s ease-in-out infinite alternate;
        }

        .metricSignal span:nth-child(1) {
            height: 28%;
        }

        .metricSignal span:nth-child(2) {
            height: 58%;
            animation-delay: 0.1s;
        }

        .metricSignal span:nth-child(3) {
            height: 84%;
            animation-delay: 0.2s;
        }

        .metricSignal span:nth-child(4) {
            height: 47%;
            animation-delay: 0.3s;
        }

        .metricSignal span:nth-child(5) {
            height: 72%;
            animation-delay: 0.4s;
        }

        .metricSignal span:nth-child(6) {
            height: 38%;
            animation-delay: 0.5s;
        }

        .telemetryPanel {
            margin-top: 60px;
            border: 1px solid rgba(255, 255, 255, 0.09);
            background: rgba(8, 8, 13, 0.78);
            backdrop-filter: blur(20px);
        }

        .telemetryHeader {
            min-height: 48px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: #4d4d56;
            font-size: 0.52rem;
            letter-spacing: 0.15em;
        }

        .telemetryBody {
            padding: 40px;
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 7vw;
            align-items: center;
        }

        .telemetryCopy {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }

        .terminalPrefix {
            color: #777781;
            font-family: "Courier New", monospace;
            font-size: 1rem;
        }

        .telemetryCopy p {
            max-width: 620px;
            color: #888891;
            font-size: clamp(1.25rem, 2vw, 2rem);
            line-height: 1.5;
            letter-spacing: -0.025em;
        }

        .telemetryBars {
            display: grid;
            gap: 1.3rem;
        }

        .barRow {
            display: grid;
            grid-template-columns: 90px 1fr 42px;
            gap: 1rem;
            align-items: center;
        }

        .barRow > span {
            color: #55555e;
            font-size: 0.55rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .barRow strong {
            color: #66666f;
            font-size: 0.55rem;
            font-weight: 500;
            text-align: right;
        }

        .bar {
            height: 4px;
            background: #17171d;
            overflow: hidden;
        }

        .barFill {
            display: block;
            height: 100%;
            background: linear-gradient(90deg, #464650, #a1a1ab);
        }

        .researchBar {
            width: 82%;
        }

        .buildBar {
            width: 94%;
        }

        .breakBar {
            width: 68%;
        }

        .learnBar {
            width: 100%;
        }

        @keyframes statusPulse {
            0%,
            100% {
                opacity: 0.4;
            }

            50% {
                opacity: 1;
            }
        }

        @keyframes metricPulse {
            from {
                opacity: 0.3;
                transform: scaleY(0.7);
                transform-origin: bottom;
            }

            to {
                opacity: 1;
                transform: scaleY(1);
                transform-origin: bottom;
            }
        }

        @media (max-width: 1100px) {
            .metricsGrid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .metricCard {
                min-height: 320px;
            }
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .telemetryBody {
                grid-template-columns: 1fr;
                gap: 3rem;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .sectionTop {
                align-items: flex-start;
                flex-direction: column;
                margin-bottom: 50px;
            }

            .metricsGrid {
                grid-template-columns: 1fr;
            }

            .metricCard {
                min-height: 260px;
                padding: 22px;
            }

            .telemetryPanel {
                margin-top: 40px;
            }

            .telemetryHeader {
                align-items: flex-start;
                flex-direction: column;
                justify-content: center;
                gap: 0.35rem;
                padding: 14px 18px;
            }

            .telemetryBody {
                padding: 26px 20px;
            }

            .barRow {
                grid-template-columns: 72px 1fr 34px;
                gap: 0.7rem;
            }
        }
    `},uh=[{value:"24/7",label:"Curiosity mode",code:"SYS-CURIOSITY"},{value:"∞",label:"Ideas to test",code:"SYS-IDEAS"},{value:"100%",label:"Experimental mindset",code:"SYS-MINDSET"},{value:"01",label:"Rule: keep learning",code:"SYS-RULE"}];function ch(){return a.jsxs(ah.Wrapper,{children:[a.jsx("div",{className:"gridOverlay"}),a.jsxs("div",{className:"sectionTop",children:[a.jsx("span",{className:"sectionIndex",children:"04 / LAB METRICS"}),a.jsxs("div",{className:"liveStatus",children:[a.jsx("span",{className:"statusDot"}),"TELEMETRY ACTIVE"]})]}),a.jsx("div",{className:"metricsGrid",children:uh.map(o=>a.jsxs("article",{className:"metricCard",children:[a.jsx("div",{className:"metricCode",children:o.code}),a.jsx("strong",{children:o.value}),a.jsx("span",{className:"metricLabel",children:o.label}),a.jsxs("div",{className:"metricSignal",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})]},o.code))}),a.jsxs("div",{className:"telemetryPanel",children:[a.jsxs("div",{className:"telemetryHeader",children:[a.jsx("span",{children:"LIVE_OUTPUT.log"}),a.jsx("span",{children:"SESSION / 2026"})]}),a.jsxs("div",{className:"telemetryBody",children:[a.jsxs("div",{className:"telemetryCopy",children:[a.jsx("span",{className:"terminalPrefix",children:">"}),a.jsx("p",{children:"The lab is not measured by how many ideas survive. It is measured by how much each experiment teaches."})]}),a.jsxs("div",{className:"telemetryBars",children:[a.jsxs("div",{className:"barRow",children:[a.jsx("span",{children:"Research"}),a.jsx("div",{className:"bar",children:a.jsx("span",{className:"barFill researchBar"})}),a.jsx("strong",{children:"82%"})]}),a.jsxs("div",{className:"barRow",children:[a.jsx("span",{children:"Building"}),a.jsx("div",{className:"bar",children:a.jsx("span",{className:"barFill buildBar"})}),a.jsx("strong",{children:"94%"})]}),a.jsxs("div",{className:"barRow",children:[a.jsx("span",{children:"Breaking"}),a.jsx("div",{className:"bar",children:a.jsx("span",{className:"barFill breakBar"})}),a.jsx("strong",{children:"68%"})]}),a.jsxs("div",{className:"barRow",children:[a.jsx("span",{children:"Learning"}),a.jsx("div",{className:"bar",children:a.jsx("span",{className:"barFill learnBar"})}),a.jsx("strong",{children:"100%"})]})]})]})]})]})}const dh={Wrapper:zt.section`
        position: relative;
        padding: 140px 4vw;
        background: #07070b;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .sectionTop {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
        }

        .sectionIndex {
            color: #55555e;
            font-size: 0.62rem;
            letter-spacing: 0.18em;
        }

        .sectionTop > p {
            max-width: 520px;
            justify-self: end;
            color: #74747d;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .statement {
            margin-top: 100px;
        }

        .statement h2 {
            max-width: 1150px;
            font-size: clamp(4rem, 7vw, 8rem);
            line-height: 0.9;
            letter-spacing: -0.065em;
            font-weight: 600;
        }

        .statement h2 span {
            display: block;
            color: #555560;
            font-weight: 400;
        }

        .aboutGrid {
            margin-top: 110px;
            padding-top: 55px;
            display: grid;
            grid-template-columns:
                minmax(280px, 0.72fr)
                minmax(0, 1.28fr);
            gap: 8vw;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .aboutCopy {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .copyLabel {
            margin-bottom: 0.5rem;
            color: #4d4d56;
            font-size: 0.54rem;
            letter-spacing: 0.15em;
        }

        .aboutCopy p {
            max-width: 470px;
            color: #777780;
            font-size: 0.92rem;
            line-height: 1.9;
        }

        .identityPanel {
            border: 1px solid rgba(255, 255, 255, 0.09);
            background: rgba(255, 255, 255, 0.012);
        }

        .identityHeader {
            min-height: 48px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: #4c4c55;
            font-size: 0.52rem;
            letter-spacing: 0.14em;
        }

        .identityBody {
            padding: 40px;
            display: grid;
            grid-template-columns: 150px 1fr;
            gap: 3rem;
            align-items: center;
        }

        .identityMark {
            width: 150px;
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            background:
                linear-gradient(
                    145deg,
                    rgba(255, 255, 255, 0.06),
                    transparent 60%
                ),
                #09090e;
            box-shadow:
                inset 0 0 50px rgba(255, 255, 255, 0.025),
                0 30px 60px rgba(0, 0, 0, 0.35);
        }

        .identityMark span {
            color: #8b8b94;
            font-size: 2rem;
            font-weight: 600;
            letter-spacing: 0.08em;
        }

        .identityLabel {
            color: #505059;
            font-size: 0.52rem;
            letter-spacing: 0.15em;
        }

        .identityContent h3 {
            margin-top: 0.8rem;
            color: #d7d7dc;
            font-size: clamp(2rem, 3vw, 3.6rem);
            font-weight: 500;
            letter-spacing: -0.045em;
        }

        .identityContent > p {
            max-width: 620px;
            margin-top: 1.3rem;
            color: #72727b;
            font-size: 0.88rem;
            line-height: 1.85;
        }

        .identityMeta {
            margin-top: 1.6rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.55rem;
        }

        .identityMeta span {
            padding: 0.48rem 0.66rem;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 999px;
            color: #595962;
            font-size: 0.52rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .identityFooter {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .identityFooter a {
            min-height: 70px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            color: #66666f;
            font-size: 0.58rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
            transition:
                background 0.3s ease,
                color 0.3s ease;
        }

        .identityFooter a:first-child {
            border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .identityFooter a:hover {
            background: rgba(255, 255, 255, 0.035);
            color: #d8d8dd;
        }

        .identityFooter a span {
            transition: transform 0.3s ease;
        }

        .identityFooter a:hover span {
            transform: rotate(45deg);
        }

        .manifesto {
            margin-top: 100px;
            padding-top: 28px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .manifestoLabel {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            color: #44444d;
            font-size: 0.52rem;
            letter-spacing: 0.15em;
        }

        .manifestoText {
            margin-top: 35px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
        }

        .manifestoText span {
            color: #2f2f37;
            font-size: clamp(2.2rem, 5vw, 6rem);
            font-weight: 700;
            letter-spacing: -0.055em;
            transition:
                color 0.3s ease,
                transform 0.3s ease;
        }

        .manifestoText span:hover {
            color: #8b8b94;
            transform: translateY(-4px);
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .sectionTop {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .sectionTop > p {
                justify-self: start;
            }

            .statement {
                margin-top: 75px;
            }

            .aboutGrid {
                margin-top: 80px;
                grid-template-columns: 1fr;
                gap: 4rem;
            }

            .manifestoText {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .statement {
                margin-top: 60px;
            }

            .statement h2 {
                font-size: clamp(3.1rem, 14vw, 4.8rem);
            }

            .aboutGrid {
                margin-top: 60px;
                padding-top: 40px;
            }

            .identityBody {
                padding: 26px 20px;
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .identityMark {
                width: 110px;
            }

            .identityFooter {
                grid-template-columns: 1fr;
            }

            .identityFooter a:first-child {
                border-right: 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }

            .manifesto {
                margin-top: 70px;
            }

            .manifestoText {
                grid-template-columns: 1fr;
                gap: 0.25rem;
            }

            .manifestoText span {
                font-size: clamp(2.8rem, 14vw, 4.8rem);
            }
        }
    `};function fh(){return a.jsxs(dh.Wrapper,{id:"about",children:[a.jsxs("div",{className:"sectionTop",children:[a.jsx("span",{className:"sectionIndex",children:"05 / ABOUT THE LAB"}),a.jsx("p",{children:"a2rp LAB is a personal experimentation space for exploring ideas across code, interfaces, systems and emerging technology."})]}),a.jsx("div",{className:"statement",children:a.jsxs("h2",{children:["Built to explore.",a.jsx("span",{children:"Designed to evolve."})]})}),a.jsxs("div",{className:"aboutGrid",children:[a.jsxs("div",{className:"aboutCopy",children:[a.jsx("span",{className:"copyLabel",children:"LAB PHILOSOPHY"}),a.jsx("p",{children:"The goal is not to build everything perfectly on the first attempt. The goal is to build, observe, break, understand and improve."}),a.jsx("p",{children:"Every experiment becomes a small record of learning, whether it turns into a finished product or simply reveals a better direction."})]}),a.jsxs("div",{className:"identityPanel",children:[a.jsxs("div",{className:"identityHeader",children:[a.jsx("span",{children:"CREATOR_PROFILE.sys"}),a.jsx("span",{children:"ACTIVE"})]}),a.jsxs("div",{className:"identityBody",children:[a.jsx("div",{className:"identityMark",children:a.jsx("span",{children:"AR"})}),a.jsxs("div",{className:"identityContent",children:[a.jsx("span",{className:"identityLabel",children:"CREATOR / DEVELOPER"}),a.jsx("h3",{children:"Ashish Ranjan"}),a.jsx("p",{children:"Full-Stack Web Developer exploring modern frontend systems, backend engineering, creative coding, AI and experimental technology."}),a.jsxs("div",{className:"identityMeta",children:[a.jsx("span",{children:"React"}),a.jsx("span",{children:"Node.js"}),a.jsx("span",{children:"Creative Coding"}),a.jsx("span",{children:"AI"})]})]})]}),a.jsxs("div",{className:"identityFooter",children:[a.jsxs("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noreferrer",children:["View Portfolio",a.jsx("span",{children:"↗"})]}),a.jsxs("a",{href:"https://github.com/a2rp",target:"_blank",rel:"noreferrer",children:["GitHub",a.jsx("span",{children:"↗"})]})]})]})]}),a.jsxs("div",{className:"manifesto",children:[a.jsxs("div",{className:"manifestoLabel",children:[a.jsx("span",{children:"LAB MANIFESTO"}),a.jsx("span",{children:"2026"})]}),a.jsxs("div",{className:"manifestoText",children:[a.jsx("span",{children:"BUILD"}),a.jsx("span",{children:"BREAK"}),a.jsx("span",{children:"LEARN"}),a.jsx("span",{children:"REPEAT"})]})]})]})}const ph={Wrapper:zt.footer`
        position: relative;
        padding: 130px 4vw 30px;
        overflow: hidden;
        background: #050509;

        .footerGrid {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(
                    rgba(255, 255, 255, 0.022) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.022) 1px,
                    transparent 1px
                );
            background-size: 58px 58px;
            mask-image: linear-gradient(to bottom, black, transparent 72%);
            pointer-events: none;
        }

        .footerTop,
        .linksGrid,
        .footerBottom {
            position: relative;
            z-index: 1;
        }

        .footerTop {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 8vw;
            align-items: end;
        }

        .footerIndex {
            display: block;
            margin-bottom: 2rem;
            color: #505059;
            font-size: 0.56rem;
            letter-spacing: 0.17em;
        }

        .footerIntro h2 {
            max-width: 900px;
            color: #dedee3;
            font-size: clamp(3.8rem, 6.5vw, 7.5rem);
            line-height: 0.91;
            letter-spacing: -0.065em;
            font-weight: 600;
        }

        .footerIntro h2 span {
            display: block;
            color: #555560;
            font-weight: 400;
        }

        .footerIntro > p {
            max-width: 510px;
            margin-top: 2.4rem;
            color: #707079;
            font-size: 0.9rem;
            line-height: 1.85;
        }

        .contactPanel {
            border: 1px solid rgba(255, 255, 255, 0.09);
            background: rgba(255, 255, 255, 0.012);
        }

        .contactLabel {
            min-height: 48px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: #4e4e57;
            font-size: 0.52rem;
            letter-spacing: 0.15em;
        }

        .emailLink {
            min-height: 125px;
            padding: 26px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: #aaaab2;
            font-size: clamp(1rem, 1.6vw, 1.45rem);
            transition:
                background 0.3s ease,
                color 0.3s ease;
        }

        .emailLink:hover {
            background: rgba(255, 255, 255, 0.025);
            color: #e5e5e9;
        }

        .emailLink strong {
            width: 46px;
            height: 46px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 50%;
            color: #64646d;
            font-weight: 400;
            transition:
                background 0.3s ease,
                color 0.3s ease,
                transform 0.3s ease;
        }

        .emailLink:hover strong {
            background: #f4f4f4;
            color: #050509;
            transform: rotate(45deg);
        }

        .contactMeta {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .contactMeta > div {
            min-height: 88px;
            padding: 18px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .contactMeta > div:first-child {
            border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .contactMeta span {
            color: #46464f;
            font-size: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .contactMeta strong {
            color: #74747d;
            font-size: 0.58rem;
            font-weight: 500;
            letter-spacing: 0.11em;
        }

        .available {
            display: flex;
            align-items: center;
            gap: 0.55rem;
        }

        .statusDot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #aaaab3;
            box-shadow: 0 0 9px rgba(255, 255, 255, 0.4);
        }

        .linksGrid {
            margin-top: 100px;
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            border-left: 1px solid rgba(255, 255, 255, 0.08);
        }

        .linksGrid a {
            min-height: 82px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            border-right: 1px solid rgba(255, 255, 255, 0.08);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: #5d5d66;
            font-size: 0.56rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            transition:
                color 0.3s ease,
                background 0.3s ease;
        }

        .linksGrid a:hover {
            color: #d7d7dc;
            background: rgba(255, 255, 255, 0.025);
        }

        .linksGrid a span:last-child {
            color: #45454d;
            transition: transform 0.3s ease;
        }

        .linksGrid a:hover span:last-child {
            transform: rotate(45deg);
        }

        .footerBottom {
            margin-top: 70px;
            padding-top: 26px;
            display: grid;
            grid-template-columns: 1fr auto auto 1fr;
            gap: 2rem;
            align-items: center;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .footerBrand {
            display: flex;
            align-items: center;
            gap: 0.6rem;
        }

        .footerBrand strong {
            color: #c4c4ca;
            font-size: 0.78rem;
            letter-spacing: 0.08em;
        }

        .footerBrand span {
            padding: 0.28rem 0.4rem;
            border: 1px solid rgba(255, 255, 255, 0.09);
            border-radius: 3px;
            color: #55555e;
            font-size: 0.45rem;
            letter-spacing: 0.15em;
        }

        .footerBottom p,
        .footerBottom > a {
            color: #45454e;
            font-size: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.11em;
        }

        .footerBottom > a {
            justify-self: end;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            transition: color 0.3s ease;
        }

        .footerBottom > a:hover {
            color: #b7b7bf;
        }

        @media (max-width: 1100px) {
            .linksGrid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .footerBottom {
                grid-template-columns: 1fr 1fr;
            }

            .footerBottom > a {
                justify-self: start;
            }
        }

        @media (max-width: 900px) {
            padding: 100px 20px 30px;

            .footerTop {
                grid-template-columns: 1fr;
                gap: 4rem;
            }

            .linksGrid {
                margin-top: 70px;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px 25px;

            .footerIntro h2 {
                font-size: clamp(3rem, 14vw, 4.8rem);
            }

            .emailLink {
                min-height: 105px;
                padding: 20px;
                flex-direction: column;
                align-items: flex-start;
            }

            .contactMeta {
                grid-template-columns: 1fr;
            }

            .contactMeta > div:first-child {
                border-right: 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }

            .linksGrid {
                grid-template-columns: 1fr;
                margin-top: 60px;
            }

            .linksGrid a {
                min-height: 68px;
            }

            .footerBottom {
                margin-top: 50px;
                grid-template-columns: 1fr;
                gap: 0.9rem;
            }

            .footerBottom > a {
                justify-self: start;
            }
        }
    `},mh=[{label:"Portfolio",href:"https://www.ashishranjan.net"},{label:"GitHub",href:"https://github.com/a2rp"},{label:"CodePen",href:"https://codepen.io/ash1198"},{label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan"},{label:"Facebook",href:"https://www.facebook.com/theash.ashish/"},{label:"YouTube",href:"https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1"},{label:"Buy Me A Coffee",href:"https://buymeacoffee.com/a2rp"},{label:"Patreon",href:"https://patreon.com/a2rp"}];function hh(){return a.jsxs(ph.Wrapper,{children:[a.jsx("div",{className:"footerGrid"}),a.jsxs("div",{className:"footerTop",children:[a.jsxs("div",{className:"footerIntro",children:[a.jsx("span",{className:"footerIndex",children:"06 / END OF SESSION"}),a.jsxs("h2",{children:["Keep building.",a.jsx("span",{children:"Keep experimenting."})]}),a.jsx("p",{children:"a2rp LAB is an ongoing collection of experiments in code, interfaces, systems, AI and emerging technology."})]}),a.jsxs("div",{className:"contactPanel",children:[a.jsx("span",{className:"contactLabel",children:"START A CONVERSATION"}),a.jsxs("a",{className:"emailLink",href:"mailto:ash.ranjan09@gmail.com",children:[a.jsx("span",{children:"ash.ranjan09@gmail.com"}),a.jsx("strong",{children:"↗"})]}),a.jsxs("div",{className:"contactMeta",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Status"}),a.jsxs("strong",{className:"available",children:[a.jsx("span",{className:"statusDot"}),"AVAILABLE"]})]}),a.jsxs("div",{children:[a.jsx("span",{children:"Mode"}),a.jsx("strong",{children:"REMOTE"})]})]})]})]}),a.jsxs("div",{className:"linksGrid",children:[mh.map(o=>a.jsxs("a",{href:o.href,target:"_blank",rel:"noreferrer",children:[a.jsx("span",{children:o.label}),a.jsx("span",{children:"↗"})]},o.label)),a.jsxs("a",{href:"mailto:ash.ranjan09@gmail.com",children:[a.jsx("span",{children:"Email"}),a.jsx("span",{children:"↗"})]}),a.jsxs("a",{href:"https://a2rp-donation-page.netlify.app/",target:"_blank",rel:"noreferrer",children:[a.jsx("span",{children:"Support"}),a.jsx("span",{children:"↗"})]})]}),a.jsxs("div",{className:"footerBottom",children:[a.jsxs("div",{className:"footerBrand",children:[a.jsx("strong",{children:"a2rp"}),a.jsx("span",{children:"LAB"})]}),a.jsx("p",{children:"© 2026 Ashish Ranjan"}),a.jsx("p",{children:"Build. Break. Learn. Repeat."}),a.jsxs("a",{href:"#home",children:["Back to top",a.jsx("span",{children:"↑"})]})]})]})}function gh(){return a.jsxs(Ym.Wrapper,{children:[a.jsx(Xm,{}),a.jsxs("main",{children:[a.jsx(Jm,{}),a.jsx(nh,{}),a.jsx(lh,{}),a.jsx(sh,{}),a.jsx(ch,{}),a.jsx(fh,{})]}),a.jsx(hh,{})]})}Mp.createRoot(document.getElementById("root")).render(a.jsx(a.Fragment,{children:a.jsx(gh,{})}));
