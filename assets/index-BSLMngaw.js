(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))p(g);new MutationObserver(g=>{for(const k of g)if(k.type==="childList")for(const z of k.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&p(z)}).observe(document,{childList:!0,subtree:!0});function u(g){const k={};return g.integrity&&(k.integrity=g.integrity),g.referrerPolicy&&(k.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?k.credentials="include":g.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function p(g){if(g.ep)return;g.ep=!0;const k=u(g);fetch(g.href,k)}})();function Vp(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ss={exports:{}},Wr={},Cs={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc;function Gp(){if(Bc)return te;Bc=1;var o=Symbol.for("react.element"),a=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),z=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),F=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),D=Symbol.iterator;function G(h){return h===null||typeof h!="object"?null:(h=D&&h[D]||h["@@iterator"],typeof h=="function"?h:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Y={};function J(h,w,B){this.props=h,this.context=w,this.refs=Y,this.updater=B||le}J.prototype.isReactComponent={},J.prototype.setState=function(h,w){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,w,"setState")},J.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function ue(){}ue.prototype=J.prototype;function M(h,w,B){this.props=h,this.context=w,this.refs=Y,this.updater=B||le}var ge=M.prototype=new ue;ge.constructor=M,X(ge,J.prototype),ge.isPureReactComponent=!0;var me=Array.isArray,se=Object.prototype.hasOwnProperty,ne={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function Z(h,w,B){var $,Q={},ee=null,re=null;if(w!=null)for($ in w.ref!==void 0&&(re=w.ref),w.key!==void 0&&(ee=""+w.key),w)se.call(w,$)&&!W.hasOwnProperty($)&&(Q[$]=w[$]);var ie=arguments.length-2;if(ie===1)Q.children=B;else if(1<ie){for(var fe=Array(ie),Ne=0;Ne<ie;Ne++)fe[Ne]=arguments[Ne+2];Q.children=fe}if(h&&h.defaultProps)for($ in ie=h.defaultProps,ie)Q[$]===void 0&&(Q[$]=ie[$]);return{$$typeof:o,type:h,key:ee,ref:re,props:Q,_owner:ne.current}}function Ue(h,w){return{$$typeof:o,type:h.type,key:w,ref:h.ref,props:h.props,_owner:h._owner}}function $e(h){return typeof h=="object"&&h!==null&&h.$$typeof===o}function Pe(h){var w={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(B){return w[B]})}var He=/\/+/g;function de(h,w){return typeof h=="object"&&h!==null&&h.key!=null?Pe(""+h.key):w.toString(36)}function Le(h,w,B,$,Q){var ee=typeof h;(ee==="undefined"||ee==="boolean")&&(h=null);var re=!1;if(h===null)re=!0;else switch(ee){case"string":case"number":re=!0;break;case"object":switch(h.$$typeof){case o:case a:re=!0}}if(re)return re=h,Q=Q(re),h=$===""?"."+de(re,0):$,me(Q)?(B="",h!=null&&(B=h.replace(He,"$&/")+"/"),Le(Q,w,B,"",function(Ne){return Ne})):Q!=null&&($e(Q)&&(Q=Ue(Q,B+(!Q.key||re&&re.key===Q.key?"":(""+Q.key).replace(He,"$&/")+"/")+h)),w.push(Q)),1;if(re=0,$=$===""?".":$+":",me(h))for(var ie=0;ie<h.length;ie++){ee=h[ie];var fe=$+de(ee,ie);re+=Le(ee,w,B,fe,Q)}else if(fe=G(h),typeof fe=="function")for(h=fe.call(h),ie=0;!(ee=h.next()).done;)ee=ee.value,fe=$+de(ee,ie++),re+=Le(ee,w,B,fe,Q);else if(ee==="object")throw w=String(h),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return re}function Ve(h,w,B){if(h==null)return h;var $=[],Q=0;return Le(h,$,"","",function(ee){return w.call(B,ee,Q++)}),$}function Ie(h){if(h._status===-1){var w=h._result;w=w(),w.then(function(B){(h._status===0||h._status===-1)&&(h._status=1,h._result=B)},function(B){(h._status===0||h._status===-1)&&(h._status=2,h._result=B)}),h._status===-1&&(h._status=0,h._result=w)}if(h._status===1)return h._result.default;throw h._result}var ye={current:null},L={transition:null},A={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:L,ReactCurrentOwner:ne};function P(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:Ve,forEach:function(h,w,B){Ve(h,function(){w.apply(this,arguments)},B)},count:function(h){var w=0;return Ve(h,function(){w++}),w},toArray:function(h){return Ve(h,function(w){return w})||[]},only:function(h){if(!$e(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},te.Component=J,te.Fragment=u,te.Profiler=g,te.PureComponent=M,te.StrictMode=p,te.Suspense=C,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,te.act=P,te.cloneElement=function(h,w,B){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var $=X({},h.props),Q=h.key,ee=h.ref,re=h._owner;if(w!=null){if(w.ref!==void 0&&(ee=w.ref,re=ne.current),w.key!==void 0&&(Q=""+w.key),h.type&&h.type.defaultProps)var ie=h.type.defaultProps;for(fe in w)se.call(w,fe)&&!W.hasOwnProperty(fe)&&($[fe]=w[fe]===void 0&&ie!==void 0?ie[fe]:w[fe])}var fe=arguments.length-2;if(fe===1)$.children=B;else if(1<fe){ie=Array(fe);for(var Ne=0;Ne<fe;Ne++)ie[Ne]=arguments[Ne+2];$.children=ie}return{$$typeof:o,type:h.type,key:Q,ref:ee,props:$,_owner:re}},te.createContext=function(h){return h={$$typeof:z,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:k,_context:h},h.Consumer=h},te.createElement=Z,te.createFactory=function(h){var w=Z.bind(null,h);return w.type=h,w},te.createRef=function(){return{current:null}},te.forwardRef=function(h){return{$$typeof:_,render:h}},te.isValidElement=$e,te.lazy=function(h){return{$$typeof:U,_payload:{_status:-1,_result:h},_init:Ie}},te.memo=function(h,w){return{$$typeof:F,type:h,compare:w===void 0?null:w}},te.startTransition=function(h){var w=L.transition;L.transition={};try{h()}finally{L.transition=w}},te.unstable_act=P,te.useCallback=function(h,w){return ye.current.useCallback(h,w)},te.useContext=function(h){return ye.current.useContext(h)},te.useDebugValue=function(){},te.useDeferredValue=function(h){return ye.current.useDeferredValue(h)},te.useEffect=function(h,w){return ye.current.useEffect(h,w)},te.useId=function(){return ye.current.useId()},te.useImperativeHandle=function(h,w,B){return ye.current.useImperativeHandle(h,w,B)},te.useInsertionEffect=function(h,w){return ye.current.useInsertionEffect(h,w)},te.useLayoutEffect=function(h,w){return ye.current.useLayoutEffect(h,w)},te.useMemo=function(h,w){return ye.current.useMemo(h,w)},te.useReducer=function(h,w,B){return ye.current.useReducer(h,w,B)},te.useRef=function(h){return ye.current.useRef(h)},te.useState=function(h){return ye.current.useState(h)},te.useSyncExternalStore=function(h,w,B){return ye.current.useSyncExternalStore(h,w,B)},te.useTransition=function(){return ye.current.useTransition()},te.version="18.3.1",te}var Wc;function Bs(){return Wc||(Wc=1,Cs.exports=Gp()),Cs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc;function Qp(){if(Uc)return Wr;Uc=1;var o=Bs(),a=Symbol.for("react.element"),u=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,g=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function z(_,C,F){var U,D={},G=null,le=null;F!==void 0&&(G=""+F),C.key!==void 0&&(G=""+C.key),C.ref!==void 0&&(le=C.ref);for(U in C)p.call(C,U)&&!k.hasOwnProperty(U)&&(D[U]=C[U]);if(_&&_.defaultProps)for(U in C=_.defaultProps,C)D[U]===void 0&&(D[U]=C[U]);return{$$typeof:a,type:_,key:G,ref:le,props:D,_owner:g.current}}return Wr.Fragment=u,Wr.jsx=z,Wr.jsxs=z,Wr}var $c;function Yp(){return $c||($c=1,Ss.exports=Qp()),Ss.exports}var c=Yp(),so={},js={exports:{}},rt={},Ns={exports:{}},Es={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc;function Kp(){return Hc||(Hc=1,(function(o){function a(L,A){var P=L.length;L.push(A);e:for(;0<P;){var h=P-1>>>1,w=L[h];if(0<g(w,A))L[h]=A,L[P]=w,P=h;else break e}}function u(L){return L.length===0?null:L[0]}function p(L){if(L.length===0)return null;var A=L[0],P=L.pop();if(P!==A){L[0]=P;e:for(var h=0,w=L.length,B=w>>>1;h<B;){var $=2*(h+1)-1,Q=L[$],ee=$+1,re=L[ee];if(0>g(Q,P))ee<w&&0>g(re,Q)?(L[h]=re,L[ee]=P,h=ee):(L[h]=Q,L[$]=P,h=$);else if(ee<w&&0>g(re,P))L[h]=re,L[ee]=P,h=ee;else break e}}return A}function g(L,A){var P=L.sortIndex-A.sortIndex;return P!==0?P:L.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var k=performance;o.unstable_now=function(){return k.now()}}else{var z=Date,_=z.now();o.unstable_now=function(){return z.now()-_}}var C=[],F=[],U=1,D=null,G=3,le=!1,X=!1,Y=!1,J=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(L){for(var A=u(F);A!==null;){if(A.callback===null)p(F);else if(A.startTime<=L)p(F),A.sortIndex=A.expirationTime,a(C,A);else break;A=u(F)}}function me(L){if(Y=!1,ge(L),!X)if(u(C)!==null)X=!0,Ie(se);else{var A=u(F);A!==null&&ye(me,A.startTime-L)}}function se(L,A){X=!1,Y&&(Y=!1,ue(Z),Z=-1),le=!0;var P=G;try{for(ge(A),D=u(C);D!==null&&(!(D.expirationTime>A)||L&&!Pe());){var h=D.callback;if(typeof h=="function"){D.callback=null,G=D.priorityLevel;var w=h(D.expirationTime<=A);A=o.unstable_now(),typeof w=="function"?D.callback=w:D===u(C)&&p(C),ge(A)}else p(C);D=u(C)}if(D!==null)var B=!0;else{var $=u(F);$!==null&&ye(me,$.startTime-A),B=!1}return B}finally{D=null,G=P,le=!1}}var ne=!1,W=null,Z=-1,Ue=5,$e=-1;function Pe(){return!(o.unstable_now()-$e<Ue)}function He(){if(W!==null){var L=o.unstable_now();$e=L;var A=!0;try{A=W(!0,L)}finally{A?de():(ne=!1,W=null)}}else ne=!1}var de;if(typeof M=="function")de=function(){M(He)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,Ve=Le.port2;Le.port1.onmessage=He,de=function(){Ve.postMessage(null)}}else de=function(){J(He,0)};function Ie(L){W=L,ne||(ne=!0,de())}function ye(L,A){Z=J(function(){L(o.unstable_now())},A)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_continueExecution=function(){X||le||(X=!0,Ie(se))},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return G},o.unstable_getFirstCallbackNode=function(){return u(C)},o.unstable_next=function(L){switch(G){case 1:case 2:case 3:var A=3;break;default:A=G}var P=G;G=A;try{return L()}finally{G=P}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(L,A){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var P=G;G=L;try{return A()}finally{G=P}},o.unstable_scheduleCallback=function(L,A,P){var h=o.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?h+P:h):P=h,L){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=P+w,L={id:U++,callback:A,priorityLevel:L,startTime:P,expirationTime:w,sortIndex:-1},P>h?(L.sortIndex=P,a(F,L),u(C)===null&&L===u(F)&&(Y?(ue(Z),Z=-1):Y=!0,ye(me,P-h))):(L.sortIndex=w,a(C,L),X||le||(X=!0,Ie(se))),L},o.unstable_shouldYield=Pe,o.unstable_wrapCallback=function(L){var A=G;return function(){var P=G;G=A;try{return L.apply(this,arguments)}finally{G=P}}}})(Es)),Es}var Vc;function Xp(){return Vc||(Vc=1,Ns.exports=Kp()),Ns.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc;function Zp(){if(Gc)return rt;Gc=1;var o=Bs(),a=Xp();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,g={};function k(e,t){z(e,t),z(e+"Capture",t)}function z(e,t){for(g[e]=t,e=0;e<t.length;e++)p.add(t[e])}var _=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),C=Object.prototype.hasOwnProperty,F=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,U={},D={};function G(e){return C.call(D,e)?!0:C.call(U,e)?!1:F.test(e)?D[e]=!0:(U[e]=!0,!1)}function le(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,t,n,r){if(t===null||typeof t>"u"||le(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Y(e,t,n,r,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new Y(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];J[t]=new Y(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new Y(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new Y(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new Y(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){J[e]=new Y(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){J[e]=new Y(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){J[e]=new Y(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){J[e]=new Y(e,5,!1,e.toLowerCase(),null,!1,!1)});var ue=/[\-:]([a-z])/g;function M(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ue,M);J[t]=new Y(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ue,M);J[t]=new Y(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ue,M);J[t]=new Y(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){J[e]=new Y(e,1,!1,e.toLowerCase(),null,!1,!1)}),J.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){J[e]=new Y(e,1,!1,e.toLowerCase(),null,!0,!0)});function ge(e,t,n,r){var i=J.hasOwnProperty(t)?J[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X(t,n,i,r)&&(n=null),r||i===null?G(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var me=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),ne=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),Ue=Symbol.for("react.profiler"),$e=Symbol.for("react.provider"),Pe=Symbol.for("react.context"),He=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),Ve=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),L=Symbol.iterator;function A(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,h;function w(e){if(h===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);h=t&&t[1]||""}return`
`+h+e}var B=!1;function $(e,t){if(!e||B)return"";B=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var r=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){r=x}e.call(t.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var i=x.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,d=l.length-1;1<=s&&0<=d&&i[s]!==l[d];)d--;for(;1<=s&&0<=d;s--,d--)if(i[s]!==l[d]){if(s!==1||d!==1)do if(s--,d--,0>d||i[s]!==l[d]){var f=`
`+i[s].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=s&&0<=d);break}}}finally{B=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?w(e):""}function Q(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1),e;case 11:return e=$(e.type.render,!1),e;case 1:return e=$(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case ne:return"Portal";case Ue:return"Profiler";case Z:return"StrictMode";case de:return"Suspense";case Le:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pe:return(e.displayName||"Context")+".Consumer";case $e:return(e._context.displayName||"Context")+".Provider";case He:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ve:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case Ie:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}function re(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(t);case 8:return t===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ne(e){var t=fe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zr(e){e._valueTracker||(e._valueTracker=Ne(e))}function Gs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Po(e,t){var n=t.checked;return P({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ie(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ys(e,t){t=t.checked,t!=null&&ge(e,"checked",t,!1)}function Lo(e,t){Ys(e,t);var n=ie(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bo(e,t.type,n):t.hasOwnProperty("defaultValue")&&bo(e,t.type,ie(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ks(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bo(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var nr=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ie(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function To(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return P({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(nr(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ie(n)}}function Zs(e,t){var n=ie(t.value),r=ie(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Js(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Io(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qr,ea=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yd=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(e){Yd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ir[t]=ir[e]})});function ta(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ir.hasOwnProperty(e)&&ir[e]?(""+t).trim():t+"px"}function na(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ta(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Kd=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oo(e,t){if(t){if(Kd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function Ro(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mo=null;function Ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fo=null,En=null,_n=null;function ra(e){if(e=Er(e)){if(typeof Fo!="function")throw Error(u(280));var t=e.stateNode;t&&(t=Si(t),Fo(e.stateNode,e.type,t))}}function ia(e){En?_n?_n.push(e):_n=[e]:En=e}function oa(){if(En){var e=En,t=_n;if(_n=En=null,ra(e),t)for(e=0;e<t.length;e++)ra(t[e])}}function la(e,t){return e(t)}function sa(){}var Do=!1;function aa(e,t,n){if(Do)return e(t,n);Do=!0;try{return la(e,t,n)}finally{Do=!1,(En!==null||_n!==null)&&(sa(),oa())}}function or(e,t){var n=e.stateNode;if(n===null)return null;var r=Si(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Bo=!1;if(_)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Bo=!1}function Xd(e,t,n,r,i,l,s,d,f){var x=Array.prototype.slice.call(arguments,3);try{t.apply(n,x)}catch(j){this.onError(j)}}var sr=!1,ei=null,ti=!1,Wo=null,Zd={onError:function(e){sr=!0,ei=e}};function Jd(e,t,n,r,i,l,s,d,f){sr=!1,ei=null,Xd.apply(Zd,arguments)}function qd(e,t,n,r,i,l,s,d,f){if(Jd.apply(this,arguments),sr){if(sr){var x=ei;sr=!1,ei=null}else throw Error(u(198));ti||(ti=!0,Wo=x)}}function an(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ua(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ca(e){if(an(e)!==e)throw Error(u(188))}function ef(e){var t=e.alternate;if(!t){if(t=an(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return ca(i),e;if(l===r)return ca(i),t;l=l.sibling}throw Error(u(188))}if(n.return!==r.return)n=i,r=l;else{for(var s=!1,d=i.child;d;){if(d===n){s=!0,n=i,r=l;break}if(d===r){s=!0,r=i,n=l;break}d=d.sibling}if(!s){for(d=l.child;d;){if(d===n){s=!0,n=l,r=i;break}if(d===r){s=!0,r=l,n=i;break}d=d.sibling}if(!s)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function da(e){return e=ef(e),e!==null?fa(e):null}function fa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fa(e);if(t!==null)return t;e=e.sibling}return null}var pa=a.unstable_scheduleCallback,ma=a.unstable_cancelCallback,tf=a.unstable_shouldYield,nf=a.unstable_requestPaint,_e=a.unstable_now,rf=a.unstable_getCurrentPriorityLevel,Uo=a.unstable_ImmediatePriority,ha=a.unstable_UserBlockingPriority,ni=a.unstable_NormalPriority,of=a.unstable_LowPriority,ga=a.unstable_IdlePriority,ri=null,Nt=null;function lf(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(ri,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:uf,sf=Math.log,af=Math.LN2;function uf(e){return e>>>=0,e===0?32:31-(sf(e)/af|0)|0}var ii=64,oi=4194304;function ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function li(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var d=s&~i;d!==0?r=ar(d):(l&=s,l!==0&&(r=ar(l)))}else s=n&~i,s!==0?r=ar(s):l!==0&&(r=ar(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),i=1<<n,r|=e[n],t&=~i;return r}function cf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function df(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-gt(l),d=1<<s,f=i[s];f===-1?((d&n)===0||(d&r)!==0)&&(i[s]=cf(d,t)):f<=t&&(e.expiredLanes|=d),l&=~d}}function $o(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ya(){var e=ii;return ii<<=1,(ii&4194240)===0&&(ii=64),e}function Ho(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function ff(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-gt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Vo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var pe=0;function va(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var xa,Go,wa,ka,Sa,Qo=!1,si=[],Bt=null,Wt=null,Ut=null,cr=new Map,dr=new Map,$t=[],pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ca(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":cr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(t.pointerId)}}function fr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Er(t),t!==null&&Go(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function mf(e,t,n,r,i){switch(t){case"focusin":return Bt=fr(Bt,e,t,n,r,i),!0;case"dragenter":return Wt=fr(Wt,e,t,n,r,i),!0;case"mouseover":return Ut=fr(Ut,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return cr.set(l,fr(cr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,dr.set(l,fr(dr.get(l)||null,e,t,n,r,i)),!0}return!1}function ja(e){var t=un(e.target);if(t!==null){var n=an(t);if(n!==null){if(t=n.tag,t===13){if(t=ua(n),t!==null){e.blockedOn=t,Sa(e.priority,function(){wa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ko(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Mo=r,n.target.dispatchEvent(r),Mo=null}else return t=Er(n),t!==null&&Go(t),e.blockedOn=n,!1;t.shift()}return!0}function Na(e,t,n){ai(e)&&n.delete(t)}function hf(){Qo=!1,Bt!==null&&ai(Bt)&&(Bt=null),Wt!==null&&ai(Wt)&&(Wt=null),Ut!==null&&ai(Ut)&&(Ut=null),cr.forEach(Na),dr.forEach(Na)}function pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Qo||(Qo=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,hf)))}function mr(e){function t(i){return pr(i,e)}if(0<si.length){pr(si[0],e);for(var n=1;n<si.length;n++){var r=si[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&pr(Bt,e),Wt!==null&&pr(Wt,e),Ut!==null&&pr(Ut,e),cr.forEach(t),dr.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)ja(n),n.blockedOn===null&&$t.shift()}var zn=me.ReactCurrentBatchConfig,ui=!0;function gf(e,t,n,r){var i=pe,l=zn.transition;zn.transition=null;try{pe=1,Yo(e,t,n,r)}finally{pe=i,zn.transition=l}}function yf(e,t,n,r){var i=pe,l=zn.transition;zn.transition=null;try{pe=4,Yo(e,t,n,r)}finally{pe=i,zn.transition=l}}function Yo(e,t,n,r){if(ui){var i=Ko(e,t,n,r);if(i===null)fl(e,t,r,ci,n),Ca(e,r);else if(mf(i,e,t,n,r))r.stopPropagation();else if(Ca(e,r),t&4&&-1<pf.indexOf(e)){for(;i!==null;){var l=Er(i);if(l!==null&&xa(l),l=Ko(e,t,n,r),l===null&&fl(e,t,r,ci,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else fl(e,t,r,null,n)}}var ci=null;function Ko(e,t,n,r){if(ci=null,e=Ao(r),e=un(e),e!==null)if(t=an(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ua(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ci=e,null}function Ea(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rf()){case Uo:return 1;case ha:return 4;case ni:case of:return 16;case ga:return 536870912;default:return 16}default:return 16}}var Ht=null,Xo=null,di=null;function _a(){if(di)return di;var e,t=Xo,n=t.length,r,i="value"in Ht?Ht.value:Ht.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[l-r];r++);return di=i.slice(e,1<r?1-r:void 0)}function fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function za(){return!1}function it(e){function t(n,r,i,l,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?pi:za,this.isPropagationStopped=za,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=it(Pn),hr=P({},Pn,{view:0,detail:0}),vf=it(hr),Jo,qo,gr,mi=P({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(Jo=e.screenX-gr.screenX,qo=e.screenY-gr.screenY):qo=Jo=0,gr=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:qo}}),Pa=it(mi),xf=P({},mi,{dataTransfer:0}),wf=it(xf),kf=P({},hr,{relatedTarget:0}),el=it(kf),Sf=P({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cf=it(Sf),jf=P({},Pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nf=it(jf),Ef=P({},Pn,{data:0}),La=it(Ef),_f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pf[e])?!!t[e]:!1}function tl(){return Lf}var bf=P({},hr,{key:function(e){if(e.key){var t=_f[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tf=it(bf),If=P({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ba=it(If),Of=P({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),Rf=it(Of),Mf=P({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Af=it(Mf),Ff=P({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Df=it(Ff),Bf=[9,13,27,32],nl=_&&"CompositionEvent"in window,yr=null;_&&"documentMode"in document&&(yr=document.documentMode);var Wf=_&&"TextEvent"in window&&!yr,Ta=_&&(!nl||yr&&8<yr&&11>=yr),Ia=" ",Oa=!1;function Ra(e,t){switch(e){case"keyup":return Bf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ma(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function Uf(e,t){switch(e){case"compositionend":return Ma(t);case"keypress":return t.which!==32?null:(Oa=!0,Ia);case"textInput":return e=t.data,e===Ia&&Oa?null:e;default:return null}}function $f(e,t){if(Ln)return e==="compositionend"||!nl&&Ra(e,t)?(e=_a(),di=Xo=Ht=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ta&&t.locale!=="ko"?null:t.data;default:return null}}var Hf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hf[e.type]:t==="textarea"}function Fa(e,t,n,r){ia(r),t=xi(t,"onChange"),0<t.length&&(n=new Zo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,xr=null;function Vf(e){nu(e,0)}function hi(e){var t=Rn(e);if(Gs(t))return e}function Gf(e,t){if(e==="change")return t}var Da=!1;if(_){var rl;if(_){var il="oninput"in document;if(!il){var Ba=document.createElement("div");Ba.setAttribute("oninput","return;"),il=typeof Ba.oninput=="function"}rl=il}else rl=!1;Da=rl&&(!document.documentMode||9<document.documentMode)}function Wa(){vr&&(vr.detachEvent("onpropertychange",Ua),xr=vr=null)}function Ua(e){if(e.propertyName==="value"&&hi(xr)){var t=[];Fa(t,xr,e,Ao(e)),aa(Vf,t)}}function Qf(e,t,n){e==="focusin"?(Wa(),vr=t,xr=n,vr.attachEvent("onpropertychange",Ua)):e==="focusout"&&Wa()}function Yf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi(xr)}function Kf(e,t){if(e==="click")return hi(t)}function Xf(e,t){if(e==="input"||e==="change")return hi(t)}function Zf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Zf;function wr(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!C.call(t,i)||!yt(e[i],t[i]))return!1}return!0}function $a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ha(e,t){var n=$a(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$a(n)}}function Va(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Va(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ga(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jf(e){var t=Ga(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Va(n.ownerDocument.documentElement,n)){if(r!==null&&ol(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ha(n,l);var s=Ha(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qf=_&&"documentMode"in document&&11>=document.documentMode,bn=null,ll=null,kr=null,sl=!1;function Qa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sl||bn==null||bn!==Jr(r)||(r=bn,"selectionStart"in r&&ol(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&wr(kr,r)||(kr=r,r=xi(ll,"onSelect"),0<r.length&&(t=new Zo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bn)))}function gi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tn={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionend:gi("Transition","TransitionEnd")},al={},Ya={};_&&(Ya=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function yi(e){if(al[e])return al[e];if(!Tn[e])return e;var t=Tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ya)return al[e]=t[n];return e}var Ka=yi("animationend"),Xa=yi("animationiteration"),Za=yi("animationstart"),Ja=yi("transitionend"),qa=new Map,eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){qa.set(e,t),k(t,[e])}for(var ul=0;ul<eu.length;ul++){var cl=eu[ul],ep=cl.toLowerCase(),tp=cl[0].toUpperCase()+cl.slice(1);Vt(ep,"on"+tp)}Vt(Ka,"onAnimationEnd"),Vt(Xa,"onAnimationIteration"),Vt(Za,"onAnimationStart"),Vt("dblclick","onDoubleClick"),Vt("focusin","onFocus"),Vt("focusout","onBlur"),Vt(Ja,"onTransitionEnd"),z("onMouseEnter",["mouseout","mouseover"]),z("onMouseLeave",["mouseout","mouseover"]),z("onPointerEnter",["pointerout","pointerover"]),z("onPointerLeave",["pointerout","pointerover"]),k("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),k("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),k("onBeforeInput",["compositionend","keypress","textInput","paste"]),k("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),np=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));function tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qd(r,t,void 0,e),e.currentTarget=null}function nu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var d=r[s],f=d.instance,x=d.currentTarget;if(d=d.listener,f!==l&&i.isPropagationStopped())break e;tu(i,d,x),l=f}else for(s=0;s<r.length;s++){if(d=r[s],f=d.instance,x=d.currentTarget,d=d.listener,f!==l&&i.isPropagationStopped())break e;tu(i,d,x),l=f}}}if(ti)throw e=Wo,ti=!1,Wo=null,e}function xe(e,t){var n=t[vl];n===void 0&&(n=t[vl]=new Set);var r=e+"__bubble";n.has(r)||(ru(t,e,2,!1),n.add(r))}function dl(e,t,n){var r=0;t&&(r|=4),ru(n,e,r,t)}var vi="_reactListening"+Math.random().toString(36).slice(2);function Cr(e){if(!e[vi]){e[vi]=!0,p.forEach(function(n){n!=="selectionchange"&&(np.has(n)||dl(n,!1,e),dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vi]||(t[vi]=!0,dl("selectionchange",!1,t))}}function ru(e,t,n,r){switch(Ea(t)){case 1:var i=gf;break;case 4:i=yf;break;default:i=Yo}n=i.bind(null,t,n,e),i=void 0,!Bo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function fl(e,t,n,r,i){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var d=r.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var f=s.tag;if((f===3||f===4)&&(f=s.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;s=s.return}for(;d!==null;){if(s=un(d),s===null)return;if(f=s.tag,f===5||f===6){r=l=s;continue e}d=d.parentNode}}r=r.return}aa(function(){var x=l,j=Ao(n),N=[];e:{var S=qa.get(e);if(S!==void 0){var b=Zo,I=e;switch(e){case"keypress":if(fi(n)===0)break e;case"keydown":case"keyup":b=Tf;break;case"focusin":I="focus",b=el;break;case"focusout":I="blur",b=el;break;case"beforeblur":case"afterblur":b=el;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=wf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Rf;break;case Ka:case Xa:case Za:b=Cf;break;case Ja:b=Af;break;case"scroll":b=vf;break;case"wheel":b=Df;break;case"copy":case"cut":case"paste":b=Nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ba}var O=(t&4)!==0,ze=!O&&e==="scroll",y=O?S!==null?S+"Capture":null:S;O=[];for(var m=x,v;m!==null;){v=m;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,y!==null&&(E=or(m,y),E!=null&&O.push(jr(m,E,v)))),ze)break;m=m.return}0<O.length&&(S=new b(S,I,null,n,j),N.push({event:S,listeners:O}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",S&&n!==Mo&&(I=n.relatedTarget||n.fromElement)&&(un(I)||I[bt]))break e;if((b||S)&&(S=j.window===j?j:(S=j.ownerDocument)?S.defaultView||S.parentWindow:window,b?(I=n.relatedTarget||n.toElement,b=x,I=I?un(I):null,I!==null&&(ze=an(I),I!==ze||I.tag!==5&&I.tag!==6)&&(I=null)):(b=null,I=x),b!==I)){if(O=Pa,E="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(O=ba,E="onPointerLeave",y="onPointerEnter",m="pointer"),ze=b==null?S:Rn(b),v=I==null?S:Rn(I),S=new O(E,m+"leave",b,n,j),S.target=ze,S.relatedTarget=v,E=null,un(j)===x&&(O=new O(y,m+"enter",I,n,j),O.target=v,O.relatedTarget=ze,E=O),ze=E,b&&I)t:{for(O=b,y=I,m=0,v=O;v;v=In(v))m++;for(v=0,E=y;E;E=In(E))v++;for(;0<m-v;)O=In(O),m--;for(;0<v-m;)y=In(y),v--;for(;m--;){if(O===y||y!==null&&O===y.alternate)break t;O=In(O),y=In(y)}O=null}else O=null;b!==null&&iu(N,S,b,O,!1),I!==null&&ze!==null&&iu(N,ze,I,O,!0)}}e:{if(S=x?Rn(x):window,b=S.nodeName&&S.nodeName.toLowerCase(),b==="select"||b==="input"&&S.type==="file")var R=Gf;else if(Aa(S))if(Da)R=Xf;else{R=Yf;var H=Qf}else(b=S.nodeName)&&b.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(R=Kf);if(R&&(R=R(e,x))){Fa(N,R,n,j);break e}H&&H(e,S,x),e==="focusout"&&(H=S._wrapperState)&&H.controlled&&S.type==="number"&&bo(S,"number",S.value)}switch(H=x?Rn(x):window,e){case"focusin":(Aa(H)||H.contentEditable==="true")&&(bn=H,ll=x,kr=null);break;case"focusout":kr=ll=bn=null;break;case"mousedown":sl=!0;break;case"contextmenu":case"mouseup":case"dragend":sl=!1,Qa(N,n,j);break;case"selectionchange":if(qf)break;case"keydown":case"keyup":Qa(N,n,j)}var V;if(nl)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Ln?Ra(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(Ta&&n.locale!=="ko"&&(Ln||K!=="onCompositionStart"?K==="onCompositionEnd"&&Ln&&(V=_a()):(Ht=j,Xo="value"in Ht?Ht.value:Ht.textContent,Ln=!0)),H=xi(x,K),0<H.length&&(K=new La(K,e,null,n,j),N.push({event:K,listeners:H}),V?K.data=V:(V=Ma(n),V!==null&&(K.data=V)))),(V=Wf?Uf(e,n):$f(e,n))&&(x=xi(x,"onBeforeInput"),0<x.length&&(j=new La("onBeforeInput","beforeinput",null,n,j),N.push({event:j,listeners:x}),j.data=V))}nu(N,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=or(e,n),l!=null&&r.unshift(jr(e,l,i)),l=or(e,t),l!=null&&r.push(jr(e,l,i))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function iu(e,t,n,r,i){for(var l=t._reactName,s=[];n!==null&&n!==r;){var d=n,f=d.alternate,x=d.stateNode;if(f!==null&&f===r)break;d.tag===5&&x!==null&&(d=x,i?(f=or(n,l),f!=null&&s.unshift(jr(n,f,d))):i||(f=or(n,l),f!=null&&s.push(jr(n,f,d)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var rp=/\r\n?/g,ip=/\u0000|\uFFFD/g;function ou(e){return(typeof e=="string"?e:""+e).replace(rp,`
`).replace(ip,"")}function wi(e,t,n){if(t=ou(t),ou(e)!==t&&n)throw Error(u(425))}function ki(){}var pl=null,ml=null;function hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gl=typeof setTimeout=="function"?setTimeout:void 0,op=typeof clearTimeout=="function"?clearTimeout:void 0,lu=typeof Promise=="function"?Promise:void 0,lp=typeof queueMicrotask=="function"?queueMicrotask:typeof lu<"u"?function(e){return lu.resolve(null).then(e).catch(sp)}:gl;function sp(e){setTimeout(function(){throw e})}function yl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mr(t)}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var On=Math.random().toString(36).slice(2),Et="__reactFiber$"+On,Nr="__reactProps$"+On,bt="__reactContainer$"+On,vl="__reactEvents$"+On,ap="__reactListeners$"+On,up="__reactHandles$"+On;function un(e){var t=e[Et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=su(e);e!==null;){if(n=e[Et])return n;e=su(e)}return t}e=n,n=e.parentNode}return null}function Er(e){return e=e[Et]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function Si(e){return e[Nr]||null}var xl=[],Mn=-1;function Qt(e){return{current:e}}function we(e){0>Mn||(e.current=xl[Mn],xl[Mn]=null,Mn--)}function ve(e,t){Mn++,xl[Mn]=e.current,e.current=t}var Yt={},Ge=Qt(Yt),Je=Qt(!1),cn=Yt;function An(e,t){var n=e.type.contextTypes;if(!n)return Yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function Ci(){we(Je),we(Ge)}function au(e,t,n){if(Ge.current!==Yt)throw Error(u(168));ve(Ge,t),ve(Je,n)}function uu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(u(108,re(e)||"Unknown",i));return P({},n,r)}function ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,cn=Ge.current,ve(Ge,e),ve(Je,Je.current),!0}function cu(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=uu(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,we(Je),we(Ge),ve(Ge,e)):we(Je),ve(Je,n)}var Tt=null,Ni=!1,wl=!1;function du(e){Tt===null?Tt=[e]:Tt.push(e)}function cp(e){Ni=!0,du(e)}function Kt(){if(!wl&&Tt!==null){wl=!0;var e=0,t=pe;try{var n=Tt;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,Ni=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),pa(Uo,Kt),i}finally{pe=t,wl=!1}}return null}var Fn=[],Dn=0,Ei=null,_i=0,ut=[],ct=0,dn=null,It=1,Ot="";function fn(e,t){Fn[Dn++]=_i,Fn[Dn++]=Ei,Ei=e,_i=t}function fu(e,t,n){ut[ct++]=It,ut[ct++]=Ot,ut[ct++]=dn,dn=e;var r=It;e=Ot;var i=32-gt(r)-1;r&=~(1<<i),n+=1;var l=32-gt(t)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,It=1<<32-gt(t)+i|n<<i|r,Ot=l+e}else It=1<<l|n<<i|r,Ot=e}function kl(e){e.return!==null&&(fn(e,1),fu(e,1,0))}function Sl(e){for(;e===Ei;)Ei=Fn[--Dn],Fn[Dn]=null,_i=Fn[--Dn],Fn[Dn]=null;for(;e===dn;)dn=ut[--ct],ut[ct]=null,Ot=ut[--ct],ut[ct]=null,It=ut[--ct],ut[ct]=null}var ot=null,lt=null,Se=!1,vt=null;function pu(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,lt=Gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:It,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,lt=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(Se){var t=lt;if(t){var n=t;if(!mu(e,t)){if(Cl(e))throw Error(u(418));t=Gt(n.nextSibling);var r=ot;t&&mu(e,t)?pu(r,n):(e.flags=e.flags&-4097|2,Se=!1,ot=e)}}else{if(Cl(e))throw Error(u(418));e.flags=e.flags&-4097|2,Se=!1,ot=e}}}function hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function zi(e){if(e!==ot)return!1;if(!Se)return hu(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hl(e.type,e.memoizedProps)),t&&(t=lt)){if(Cl(e))throw gu(),Error(u(418));for(;t;)pu(e,t),t=Gt(t.nextSibling)}if(hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=Gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=ot?Gt(e.stateNode.nextSibling):null;return!0}function gu(){for(var e=lt;e;)e=Gt(e.nextSibling)}function Bn(){lt=ot=null,Se=!1}function Nl(e){vt===null?vt=[e]:vt.push(e)}var dp=me.ReactCurrentBatchConfig;function _r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var d=i.refs;s===null?delete d[l]:d[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function Pi(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function vu(e){function t(y,m){if(e){var v=y.deletions;v===null?(y.deletions=[m],y.flags|=16):v.push(m)}}function n(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=rn(y,m),y.index=0,y.sibling=null,y}function l(y,m,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<m?(y.flags|=2,m):v):(y.flags|=2,m)):(y.flags|=1048576,m)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function d(y,m,v,E){return m===null||m.tag!==6?(m=gs(v,y.mode,E),m.return=y,m):(m=i(m,v),m.return=y,m)}function f(y,m,v,E){var R=v.type;return R===W?j(y,m,v.props.children,E,v.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ie&&yu(R)===m.type)?(E=i(m,v.props),E.ref=_r(y,m,v),E.return=y,E):(E=qi(v.type,v.key,v.props,null,y.mode,E),E.ref=_r(y,m,v),E.return=y,E)}function x(y,m,v,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=ys(v,y.mode,E),m.return=y,m):(m=i(m,v.children||[]),m.return=y,m)}function j(y,m,v,E,R){return m===null||m.tag!==7?(m=wn(v,y.mode,E,R),m.return=y,m):(m=i(m,v),m.return=y,m)}function N(y,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=gs(""+m,y.mode,v),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case se:return v=qi(m.type,m.key,m.props,null,y.mode,v),v.ref=_r(y,null,m),v.return=y,v;case ne:return m=ys(m,y.mode,v),m.return=y,m;case Ie:var E=m._init;return N(y,E(m._payload),v)}if(nr(m)||A(m))return m=wn(m,y.mode,v,null),m.return=y,m;Pi(y,m)}return null}function S(y,m,v,E){var R=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:d(y,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case se:return v.key===R?f(y,m,v,E):null;case ne:return v.key===R?x(y,m,v,E):null;case Ie:return R=v._init,S(y,m,R(v._payload),E)}if(nr(v)||A(v))return R!==null?null:j(y,m,v,E,null);Pi(y,v)}return null}function b(y,m,v,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return y=y.get(v)||null,d(m,y,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case se:return y=y.get(E.key===null?v:E.key)||null,f(m,y,E,R);case ne:return y=y.get(E.key===null?v:E.key)||null,x(m,y,E,R);case Ie:var H=E._init;return b(y,m,v,H(E._payload),R)}if(nr(E)||A(E))return y=y.get(v)||null,j(m,y,E,R,null);Pi(m,E)}return null}function I(y,m,v,E){for(var R=null,H=null,V=m,K=m=0,De=null;V!==null&&K<v.length;K++){V.index>K?(De=V,V=null):De=V.sibling;var ae=S(y,V,v[K],E);if(ae===null){V===null&&(V=De);break}e&&V&&ae.alternate===null&&t(y,V),m=l(ae,m,K),H===null?R=ae:H.sibling=ae,H=ae,V=De}if(K===v.length)return n(y,V),Se&&fn(y,K),R;if(V===null){for(;K<v.length;K++)V=N(y,v[K],E),V!==null&&(m=l(V,m,K),H===null?R=V:H.sibling=V,H=V);return Se&&fn(y,K),R}for(V=r(y,V);K<v.length;K++)De=b(V,y,K,v[K],E),De!==null&&(e&&De.alternate!==null&&V.delete(De.key===null?K:De.key),m=l(De,m,K),H===null?R=De:H.sibling=De,H=De);return e&&V.forEach(function(on){return t(y,on)}),Se&&fn(y,K),R}function O(y,m,v,E){var R=A(v);if(typeof R!="function")throw Error(u(150));if(v=R.call(v),v==null)throw Error(u(151));for(var H=R=null,V=m,K=m=0,De=null,ae=v.next();V!==null&&!ae.done;K++,ae=v.next()){V.index>K?(De=V,V=null):De=V.sibling;var on=S(y,V,ae.value,E);if(on===null){V===null&&(V=De);break}e&&V&&on.alternate===null&&t(y,V),m=l(on,m,K),H===null?R=on:H.sibling=on,H=on,V=De}if(ae.done)return n(y,V),Se&&fn(y,K),R;if(V===null){for(;!ae.done;K++,ae=v.next())ae=N(y,ae.value,E),ae!==null&&(m=l(ae,m,K),H===null?R=ae:H.sibling=ae,H=ae);return Se&&fn(y,K),R}for(V=r(y,V);!ae.done;K++,ae=v.next())ae=b(V,y,K,ae.value,E),ae!==null&&(e&&ae.alternate!==null&&V.delete(ae.key===null?K:ae.key),m=l(ae,m,K),H===null?R=ae:H.sibling=ae,H=ae);return e&&V.forEach(function(Hp){return t(y,Hp)}),Se&&fn(y,K),R}function ze(y,m,v,E){if(typeof v=="object"&&v!==null&&v.type===W&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case se:e:{for(var R=v.key,H=m;H!==null;){if(H.key===R){if(R=v.type,R===W){if(H.tag===7){n(y,H.sibling),m=i(H,v.props.children),m.return=y,y=m;break e}}else if(H.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ie&&yu(R)===H.type){n(y,H.sibling),m=i(H,v.props),m.ref=_r(y,H,v),m.return=y,y=m;break e}n(y,H);break}else t(y,H);H=H.sibling}v.type===W?(m=wn(v.props.children,y.mode,E,v.key),m.return=y,y=m):(E=qi(v.type,v.key,v.props,null,y.mode,E),E.ref=_r(y,m,v),E.return=y,y=E)}return s(y);case ne:e:{for(H=v.key;m!==null;){if(m.key===H)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(y,m.sibling),m=i(m,v.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else t(y,m);m=m.sibling}m=ys(v,y.mode,E),m.return=y,y=m}return s(y);case Ie:return H=v._init,ze(y,m,H(v._payload),E)}if(nr(v))return I(y,m,v,E);if(A(v))return O(y,m,v,E);Pi(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(y,m.sibling),m=i(m,v),m.return=y,y=m):(n(y,m),m=gs(v,y.mode,E),m.return=y,y=m),s(y)):n(y,m)}return ze}var Wn=vu(!0),xu=vu(!1),Li=Qt(null),bi=null,Un=null,El=null;function _l(){El=Un=bi=null}function zl(e){var t=Li.current;we(Li),e._currentValue=t}function Pl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){bi=e,El=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(et=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(El!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(bi===null)throw Error(u(308));Un=e,bi.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var pn=null;function Ll(e){pn===null?pn=[e]:pn.push(e)}function wu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ll(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(oe&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ll(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rt(e,n)}function Ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vo(e,n)}}function Su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ii(e,t,n,r){var i=e.updateQueue;Xt=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var f=d,x=f.next;f.next=null,s===null?l=x:s.next=x,s=f;var j=e.alternate;j!==null&&(j=j.updateQueue,d=j.lastBaseUpdate,d!==s&&(d===null?j.firstBaseUpdate=x:d.next=x,j.lastBaseUpdate=f))}if(l!==null){var N=i.baseState;s=0,j=x=f=null,d=l;do{var S=d.lane,b=d.eventTime;if((r&S)===S){j!==null&&(j=j.next={eventTime:b,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var I=e,O=d;switch(S=t,b=n,O.tag){case 1:if(I=O.payload,typeof I=="function"){N=I.call(b,N,S);break e}N=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=O.payload,S=typeof I=="function"?I.call(b,N,S):I,S==null)break e;N=P({},N,S);break e;case 2:Xt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,S=i.effects,S===null?i.effects=[d]:S.push(d))}else b={eventTime:b,lane:S,tag:d.tag,payload:d.payload,callback:d.callback,next:null},j===null?(x=j=b,f=N):j=j.next=b,s|=S;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;S=d,d=S.next,S.next=null,i.lastBaseUpdate=S,i.shared.pending=null}}while(!0);if(j===null&&(f=N),i.baseState=f,i.firstBaseUpdate=x,i.lastBaseUpdate=j,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);gn|=s,e.lanes=s,e.memoizedState=N}}function Cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(u(191,i));i.call(r)}}}var zr={},_t=Qt(zr),Pr=Qt(zr),Lr=Qt(zr);function mn(e){if(e===zr)throw Error(u(174));return e}function Tl(e,t){switch(ve(Lr,t),ve(Pr,e),ve(_t,zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Io(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Io(t,e)}we(_t),ve(_t,t)}function Hn(){we(_t),we(Pr),we(Lr)}function ju(e){mn(Lr.current);var t=mn(_t.current),n=Io(t,e.type);t!==n&&(ve(Pr,e),ve(_t,n))}function Il(e){Pr.current===e&&(we(_t),we(Pr))}var Ce=Qt(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ol=[];function Rl(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var Ri=me.ReactCurrentDispatcher,Ml=me.ReactCurrentBatchConfig,hn=0,je=null,Oe=null,Ae=null,Mi=!1,br=!1,Tr=0,fp=0;function Qe(){throw Error(u(321))}function Al(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function Fl(e,t,n,r,i,l){if(hn=l,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?gp:yp,e=n(r,i),br){l=0;do{if(br=!1,Tr=0,25<=l)throw Error(u(301));l+=1,Ae=Oe=null,t.updateQueue=null,Ri.current=vp,e=n(r,i)}while(br)}if(Ri.current=Di,t=Oe!==null&&Oe.next!==null,hn=0,Ae=Oe=je=null,Mi=!1,t)throw Error(u(300));return e}function Dl(){var e=Tr!==0;return Tr=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?je.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function ft(){if(Oe===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Ae===null?je.memoizedState:Ae.next;if(t!==null)Ae=t,Oe=e;else{if(e===null)throw Error(u(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ae===null?je.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function Ir(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=ft(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=Oe,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var d=s=null,f=null,x=l;do{var j=x.lane;if((hn&j)===j)f!==null&&(f=f.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var N={lane:j,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};f===null?(d=f=N,s=r):f=f.next=N,je.lanes|=j,gn|=j}x=x.next}while(x!==null&&x!==l);f===null?s=r:f.next=d,yt(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,je.lanes|=l,gn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wl(e){var t=ft(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);yt(l,t.memoizedState)||(et=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Nu(){}function Eu(e,t){var n=je,r=ft(),i=t(),l=!yt(r.memoizedState,i);if(l&&(r.memoizedState=i,et=!0),r=r.queue,Ul(Pu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,Or(9,zu.bind(null,n,r,i,t),void 0,null),Fe===null)throw Error(u(349));(hn&30)!==0||_u(n,t,i)}return i}function _u(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zu(e,t,n,r){t.value=n,t.getSnapshot=r,Lu(t)&&bu(e)}function Pu(e,t,n){return n(function(){Lu(t)&&bu(e)})}function Lu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function bu(e){var t=Rt(e,1);t!==null&&St(t,e,1,-1)}function Tu(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},t.queue=e,e=e.dispatch=hp.bind(null,je,e),[t.memoizedState,e]}function Or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Iu(){return ft().memoizedState}function Ai(e,t,n,r){var i=zt();je.flags|=e,i.memoizedState=Or(1|t,n,void 0,r===void 0?null:r)}function Fi(e,t,n,r){var i=ft();r=r===void 0?null:r;var l=void 0;if(Oe!==null){var s=Oe.memoizedState;if(l=s.destroy,r!==null&&Al(r,s.deps)){i.memoizedState=Or(t,n,l,r);return}}je.flags|=e,i.memoizedState=Or(1|t,n,l,r)}function Ou(e,t){return Ai(8390656,8,e,t)}function Ul(e,t){return Fi(2048,8,e,t)}function Ru(e,t){return Fi(4,2,e,t)}function Mu(e,t){return Fi(4,4,e,t)}function Au(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fu(e,t,n){return n=n!=null?n.concat([e]):null,Fi(4,4,Au.bind(null,t,e),n)}function $l(){}function Du(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Al(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bu(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Al(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wu(e,t,n){return(hn&21)===0?(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n):(yt(n,t)||(n=ya(),je.lanes|=n,gn|=n,e.baseState=!0),t)}function pp(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=Ml.transition;Ml.transition={};try{e(!1),t()}finally{pe=n,Ml.transition=r}}function Uu(){return ft().memoizedState}function mp(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$u(e))Hu(t,n);else if(n=wu(e,t,n,r),n!==null){var i=Ze();St(n,e,r,i),Vu(n,t,r)}}function hp(e,t,n){var r=tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($u(e))Hu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,d=l(s,n);if(i.hasEagerState=!0,i.eagerState=d,yt(d,s)){var f=t.interleaved;f===null?(i.next=i,Ll(t)):(i.next=f.next,f.next=i),t.interleaved=i;return}}catch{}finally{}n=wu(e,t,i,r),n!==null&&(i=Ze(),St(n,e,r,i),Vu(n,t,r))}}function $u(e){var t=e.alternate;return e===je||t!==null&&t===je}function Hu(e,t){br=Mi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vo(e,n)}}var Di={readContext:dt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},gp={readContext:dt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Ou,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ai(4194308,4,Au.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ai(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=mp.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:Tu,useDebugValue:$l,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=Tu(!1),t=e[0];return e=pp.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,i=zt();if(Se){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Fe===null)throw Error(u(349));(hn&30)!==0||_u(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Ou(Pu.bind(null,r,l,e),[e]),r.flags|=2048,Or(9,zu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=zt(),t=Fe.identifierPrefix;if(Se){var n=Ot,r=It;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=fp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yp={readContext:dt,useCallback:Du,useContext:dt,useEffect:Ul,useImperativeHandle:Fu,useInsertionEffect:Ru,useLayoutEffect:Mu,useMemo:Bu,useReducer:Bl,useRef:Iu,useState:function(){return Bl(Ir)},useDebugValue:$l,useDeferredValue:function(e){var t=ft();return Wu(t,Oe.memoizedState,e)},useTransition:function(){var e=Bl(Ir)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Eu,useId:Uu,unstable_isNewReconciler:!1},vp={readContext:dt,useCallback:Du,useContext:dt,useEffect:Ul,useImperativeHandle:Fu,useInsertionEffect:Ru,useLayoutEffect:Mu,useMemo:Bu,useReducer:Wl,useRef:Iu,useState:function(){return Wl(Ir)},useDebugValue:$l,useDeferredValue:function(e){var t=ft();return Oe===null?t.memoizedState=e:Wu(t,Oe.memoizedState,e)},useTransition:function(){var e=Wl(Ir)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Eu,useId:Uu,unstable_isNewReconciler:!1};function xt(e,t){if(e&&e.defaultProps){t=P({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:P({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bi={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=tn(e),l=Mt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Zt(e,l,i),t!==null&&(St(t,e,i,r),Ti(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=tn(e),l=Mt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Zt(e,l,i),t!==null&&(St(t,e,i,r),Ti(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=tn(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Zt(e,i,r),t!==null&&(St(t,e,r,n),Ti(t,e,r))}};function Gu(e,t,n,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!wr(n,r)||!wr(i,l):!0}function Qu(e,t,n){var r=!1,i=Yt,l=t.contextType;return typeof l=="object"&&l!==null?l=dt(l):(i=qe(t)?cn:Ge.current,r=t.contextTypes,l=(r=r!=null)?An(e,i):Yt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Yu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bi.enqueueReplaceState(t,t.state,null)}function Vl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},bl(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=dt(l):(l=qe(t)?cn:Ge.current,i.context=An(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Hl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Bi.enqueueReplaceState(i,i.state,null),Ii(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=Q(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xp=typeof WeakMap=="function"?WeakMap:Map;function Ku(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qi||(Qi=!0,as=r),Ql(e,t)},n}function Xu(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ql(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ql(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Zu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ip.bind(null,e,t,n),t.then(e,e))}function Ju(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qu(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var wp=me.ReactCurrentOwner,et=!1;function Xe(e,t,n,r){t.child=e===null?xu(t,null,n,r):Wn(t,e.child,n,r)}function ec(e,t,n,r,i){n=n.render;var l=t.ref;return $n(t,i),r=Fl(e,t,n,r,l,i),n=Dl(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(Se&&n&&kl(t),t.flags|=1,Xe(e,t,r,i),t.child)}function tc(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!hs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,nc(e,t,l,r,i)):(e=qi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:wr,n(s,r)&&e.ref===t.ref)return At(e,t,i)}return t.flags|=1,e=rn(l,r),e.ref=t.ref,e.return=t,t.child=e}function nc(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(wr(l,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,At(e,t,i)}return Yl(e,t,n,r,i)}function rc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Qn,st),st|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Qn,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ve(Qn,st),st|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ve(Qn,st),st|=r;return Xe(e,t,i,n),t.child}function ic(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yl(e,t,n,r,i){var l=qe(n)?cn:Ge.current;return l=An(t,l),$n(t,i),n=Fl(e,t,n,r,l,i),r=Dl(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(Se&&r&&kl(t),t.flags|=1,Xe(e,t,n,i),t.child)}function oc(e,t,n,r,i){if(qe(n)){var l=!0;ji(t)}else l=!1;if($n(t,i),t.stateNode===null)Ui(e,t),Qu(t,n,r),Vl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,d=t.memoizedProps;s.props=d;var f=s.context,x=n.contextType;typeof x=="object"&&x!==null?x=dt(x):(x=qe(n)?cn:Ge.current,x=An(t,x));var j=n.getDerivedStateFromProps,N=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function";N||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==r||f!==x)&&Yu(t,s,r,x),Xt=!1;var S=t.memoizedState;s.state=S,Ii(t,r,s,i),f=t.memoizedState,d!==r||S!==f||Je.current||Xt?(typeof j=="function"&&(Hl(t,n,j,r),f=t.memoizedState),(d=Xt||Gu(t,n,d,r,S,f,x))?(N||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),s.props=r,s.state=f,s.context=x,r=d):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ku(e,t),d=t.memoizedProps,x=t.type===t.elementType?d:xt(t.type,d),s.props=x,N=t.pendingProps,S=s.context,f=n.contextType,typeof f=="object"&&f!==null?f=dt(f):(f=qe(n)?cn:Ge.current,f=An(t,f));var b=n.getDerivedStateFromProps;(j=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==N||S!==f)&&Yu(t,s,r,f),Xt=!1,S=t.memoizedState,s.state=S,Ii(t,r,s,i);var I=t.memoizedState;d!==N||S!==I||Je.current||Xt?(typeof b=="function"&&(Hl(t,n,b,r),I=t.memoizedState),(x=Xt||Gu(t,n,x,r,S,I,f)||!1)?(j||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,I,f),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,I,f)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=I),s.props=r,s.state=I,s.context=f,r=x):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),r=!1)}return Kl(e,t,n,r,l,i)}function Kl(e,t,n,r,i,l){ic(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&cu(t,n,!1),At(e,t,l);r=t.stateNode,wp.current=t;var d=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Wn(t,e.child,null,l),t.child=Wn(t,null,d,l)):Xe(e,t,d,l),t.memoizedState=r.state,i&&cu(t,n,!0),t.child}function lc(e){var t=e.stateNode;t.pendingContext?au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&au(e,t.context,!1),Tl(e,t.containerInfo)}function sc(e,t,n,r,i){return Bn(),Nl(i),t.flags|=256,Xe(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ac(e,t,n){var r=t.pendingProps,i=Ce.current,l=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Ce,i&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=s):l=eo(s,r,0,null),e=wn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Zl(n),t.memoizedState=Xl,e):Jl(t,s));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return kp(e,t,s,r,d,i,n);if(l){l=r.fallback,s=t.mode,i=e.child,d=i.sibling;var f={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=rn(i,f),r.subtreeFlags=i.subtreeFlags&14680064),d!==null?l=rn(d,l):(l=wn(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Zl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return l=e.child,e=l.sibling,r=rn(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jl(e,t){return t=eo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wi(e,t,n,r){return r!==null&&Nl(r),Wn(t,e.child,null,n),e=Jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kp(e,t,n,r,i,l,s){if(n)return t.flags&256?(t.flags&=-257,r=Gl(Error(u(422))),Wi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=eo({mode:"visible",children:r.children},i,0,null),l=wn(l,i,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Wn(t,e.child,null,s),t.child.memoizedState=Zl(s),t.memoizedState=Xl,l);if((t.mode&1)===0)return Wi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var d=r.dgst;return r=d,l=Error(u(419)),r=Gl(l,r,void 0),Wi(e,t,s,r)}if(d=(s&e.childLanes)!==0,et||d){if(r=Fe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Rt(e,i),St(r,e,i,-1))}return ms(),r=Gl(Error(u(421))),Wi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Op.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,lt=Gt(i.nextSibling),ot=t,Se=!0,vt=null,e!==null&&(ut[ct++]=It,ut[ct++]=Ot,ut[ct++]=dn,It=e.id,Ot=e.overflow,dn=t),t=Jl(t,r.children),t.flags|=4096,t)}function uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pl(e.return,t,n)}function ql(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function cc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Xe(e,t,r.children,n),r=Ce.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uc(e,n,t);else if(e.tag===19)uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ce,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Oi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ql(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ql(t,!0,n,null,l);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ui(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sp(e,t,n){switch(t.tag){case 3:lc(t),Bn();break;case 5:ju(t);break;case 1:qe(t.type)&&ji(t);break;case 4:Tl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(Li,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ce,Ce.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ac(e,t,n):(ve(Ce,Ce.current&1),e=At(e,t,n),e!==null?e.sibling:null);ve(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return cc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,rc(e,t,n)}return At(e,t,n)}var dc,es,fc,pc;dc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},es=function(){},fc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,mn(_t.current);var l=null;switch(n){case"input":i=Po(e,i),r=Po(e,r),l=[];break;case"select":i=P({},i,{value:void 0}),r=P({},r,{value:void 0}),l=[];break;case"textarea":i=To(e,i),r=To(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ki)}Oo(n,r);var s;n=null;for(x in i)if(!r.hasOwnProperty(x)&&i.hasOwnProperty(x)&&i[x]!=null)if(x==="style"){var d=i[x];for(s in d)d.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(g.hasOwnProperty(x)?l||(l=[]):(l=l||[]).push(x,null));for(x in r){var f=r[x];if(d=i!=null?i[x]:void 0,r.hasOwnProperty(x)&&f!==d&&(f!=null||d!=null))if(x==="style")if(d){for(s in d)!d.hasOwnProperty(s)||f&&f.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in f)f.hasOwnProperty(s)&&d[s]!==f[s]&&(n||(n={}),n[s]=f[s])}else n||(l||(l=[]),l.push(x,n)),n=f;else x==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,d=d?d.__html:void 0,f!=null&&d!==f&&(l=l||[]).push(x,f)):x==="children"?typeof f!="string"&&typeof f!="number"||(l=l||[]).push(x,""+f):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(g.hasOwnProperty(x)?(f!=null&&x==="onScroll"&&xe("scroll",e),l||d===f||(l=[])):(l=l||[]).push(x,f))}n&&(l=l||[]).push("style",n);var x=l;(t.updateQueue=x)&&(t.flags|=4)}},pc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rr(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cp(e,t,n){var r=t.pendingProps;switch(Sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return qe(t.type)&&Ci(),Ye(t),null;case 3:return r=t.stateNode,Hn(),we(Je),we(Ge),Rl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vt!==null&&(ds(vt),vt=null))),es(e,t),Ye(t),null;case 5:Il(t);var i=mn(Lr.current);if(n=t.type,e!==null&&t.stateNode!=null)fc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Ye(t),null}if(e=mn(_t.current),zi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Et]=t,r[Nr]=l,e=(t.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<Sr.length;i++)xe(Sr[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":Qs(r,l),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},xe("invalid",r);break;case"textarea":Xs(r,l),xe("invalid",r)}Oo(n,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var d=l[s];s==="children"?typeof d=="string"?r.textContent!==d&&(l.suppressHydrationWarning!==!0&&wi(r.textContent,d,e),i=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(l.suppressHydrationWarning!==!0&&wi(r.textContent,d,e),i=["children",""+d]):g.hasOwnProperty(s)&&d!=null&&s==="onScroll"&&xe("scroll",r)}switch(n){case"input":Zr(r),Ks(r,l,!0);break;case"textarea":Zr(r),Js(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ki)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Et]=t,e[Nr]=r,dc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ro(n,r),n){case"dialog":xe("cancel",e),xe("close",e),i=r;break;case"iframe":case"object":case"embed":xe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Sr.length;i++)xe(Sr[i],e);i=r;break;case"source":xe("error",e),i=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),i=r;break;case"details":xe("toggle",e),i=r;break;case"input":Qs(e,r),i=Po(e,r),xe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=P({},r,{value:void 0}),xe("invalid",e);break;case"textarea":Xs(e,r),i=To(e,r),xe("invalid",e);break;default:i=r}Oo(n,i),d=i;for(l in d)if(d.hasOwnProperty(l)){var f=d[l];l==="style"?na(e,f):l==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&ea(e,f)):l==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&rr(e,f):typeof f=="number"&&rr(e,""+f):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(g.hasOwnProperty(l)?f!=null&&l==="onScroll"&&xe("scroll",e):f!=null&&ge(e,l,f,s))}switch(n){case"input":Zr(e),Ks(e,r,!1);break;case"textarea":Zr(e),Js(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ie(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Nn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ki)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)pc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=mn(Lr.current),mn(_t.current),zi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Et]=t,(l=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return Ye(t),null;case 13:if(we(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&lt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)gu(),Bn(),t.flags|=98560,l=!1;else if(l=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Et]=t}else Bn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),l=!1}else vt!==null&&(ds(vt),vt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Re===0&&(Re=3):ms())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Hn(),es(e,t),e===null&&Cr(t.stateNode.containerInfo),Ye(t),null;case 10:return zl(t.type._context),Ye(t),null;case 17:return qe(t.type)&&Ci(),Ye(t),null;case 19:if(we(Ce),l=t.memoizedState,l===null)return Ye(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)Rr(l,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Oi(e),s!==null){for(t.flags|=128,Rr(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Ce,Ce.current&1|2),t.child}e=e.sibling}l.tail!==null&&_e()>Yn&&(t.flags|=128,r=!0,Rr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Oi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Se)return Ye(t),null}else 2*_e()-l.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,Rr(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=_e(),t.sibling=null,n=Ce.current,ve(Ce,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return ps(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(st&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function jp(e,t){switch(Sl(t),t.tag){case 1:return qe(t.type)&&Ci(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),we(Je),we(Ge),Rl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Il(t),null;case 13:if(we(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ce),null;case 4:return Hn(),null;case 10:return zl(t.type._context),null;case 22:case 23:return ps(),null;case 24:return null;default:return null}}var $i=!1,Ke=!1,Np=typeof WeakSet=="function"?WeakSet:Set,T=null;function Gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function ts(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var mc=!1;function Ep(e,t){if(pl=ui,e=Ga(),ol(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,d=-1,f=-1,x=0,j=0,N=e,S=null;t:for(;;){for(var b;N!==n||i!==0&&N.nodeType!==3||(d=s+i),N!==l||r!==0&&N.nodeType!==3||(f=s+r),N.nodeType===3&&(s+=N.nodeValue.length),(b=N.firstChild)!==null;)S=N,N=b;for(;;){if(N===e)break t;if(S===n&&++x===i&&(d=s),S===l&&++j===r&&(f=s),(b=N.nextSibling)!==null)break;N=S,S=N.parentNode}N=b}n=d===-1||f===-1?null:{start:d,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(ml={focusedElem:e,selectionRange:n},ui=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var I=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var O=I.memoizedProps,ze=I.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?O:xt(t.type,O),ze);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(E){Ee(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return I=mc,mc=!1,I}function Mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ts(t,n,l)}i=i.next}while(i!==r)}}function Hi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ns(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hc(e){var t=e.alternate;t!==null&&(e.alternate=null,hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[Nr],delete t[vl],delete t[ap],delete t[up])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gc(e){return e.tag===5||e.tag===3||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ki));else if(r!==4&&(e=e.child,e!==null))for(rs(e,t,n),e=e.sibling;e!==null;)rs(e,t,n),e=e.sibling}function is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(is(e,t,n),e=e.sibling;e!==null;)is(e,t,n),e=e.sibling}var Be=null,wt=!1;function Jt(e,t,n){for(n=n.child;n!==null;)vc(e,t,n),n=n.sibling}function vc(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(ri,n)}catch{}switch(n.tag){case 5:Ke||Gn(n,t);case 6:var r=Be,i=wt;Be=null,Jt(e,t,n),Be=r,wt=i,Be!==null&&(wt?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(wt?(e=Be,n=n.stateNode,e.nodeType===8?yl(e.parentNode,n):e.nodeType===1&&yl(e,n),mr(e)):yl(Be,n.stateNode));break;case 4:r=Be,i=wt,Be=n.stateNode.containerInfo,wt=!0,Jt(e,t,n),Be=r,wt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&((l&2)!==0||(l&4)!==0)&&ts(n,t,s),i=i.next}while(i!==r)}Jt(e,t,n);break;case 1:if(!Ke&&(Gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){Ee(n,t,d)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,Jt(e,t,n),Ke=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function xc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Np),t.forEach(function(r){var i=Rp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,s=t,d=s;e:for(;d!==null;){switch(d.tag){case 5:Be=d.stateNode,wt=!1;break e;case 3:Be=d.stateNode.containerInfo,wt=!0;break e;case 4:Be=d.stateNode.containerInfo,wt=!0;break e}d=d.return}if(Be===null)throw Error(u(160));vc(l,s,i),Be=null,wt=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(x){Ee(i,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wc(t,e),t=t.sibling}function wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),Pt(e),r&4){try{Mr(3,e,e.return),Hi(3,e)}catch(O){Ee(e,e.return,O)}try{Mr(5,e,e.return)}catch(O){Ee(e,e.return,O)}}break;case 1:kt(t,e),Pt(e),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(kt(t,e),Pt(e),r&512&&n!==null&&Gn(n,n.return),e.flags&32){var i=e.stateNode;try{rr(i,"")}catch(O){Ee(e,e.return,O)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,d=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{d==="input"&&l.type==="radio"&&l.name!=null&&Ys(i,l),Ro(d,s);var x=Ro(d,l);for(s=0;s<f.length;s+=2){var j=f[s],N=f[s+1];j==="style"?na(i,N):j==="dangerouslySetInnerHTML"?ea(i,N):j==="children"?rr(i,N):ge(i,j,N,x)}switch(d){case"input":Lo(i,l);break;case"textarea":Zs(i,l);break;case"select":var S=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var b=l.value;b!=null?Nn(i,!!l.multiple,b,!1):S!==!!l.multiple&&(l.defaultValue!=null?Nn(i,!!l.multiple,l.defaultValue,!0):Nn(i,!!l.multiple,l.multiple?[]:"",!1))}i[Nr]=l}catch(O){Ee(e,e.return,O)}}break;case 6:if(kt(t,e),Pt(e),r&4){if(e.stateNode===null)throw Error(u(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(O){Ee(e,e.return,O)}}break;case 3:if(kt(t,e),Pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mr(t.containerInfo)}catch(O){Ee(e,e.return,O)}break;case 4:kt(t,e),Pt(e);break;case 13:kt(t,e),Pt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ss=_e())),r&4&&xc(e);break;case 22:if(j=n!==null&&n.memoizedState!==null,e.mode&1?(Ke=(x=Ke)||j,kt(t,e),Ke=x):kt(t,e),Pt(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!j&&(e.mode&1)!==0)for(T=e,j=e.child;j!==null;){for(N=T=j;T!==null;){switch(S=T,b=S.child,S.tag){case 0:case 11:case 14:case 15:Mr(4,S,S.return);break;case 1:Gn(S,S.return);var I=S.stateNode;if(typeof I.componentWillUnmount=="function"){r=S,n=S.return;try{t=r,I.props=t.memoizedProps,I.state=t.memoizedState,I.componentWillUnmount()}catch(O){Ee(r,n,O)}}break;case 5:Gn(S,S.return);break;case 22:if(S.memoizedState!==null){Cc(N);continue}}b!==null?(b.return=S,T=b):Cc(N)}j=j.sibling}e:for(j=null,N=e;;){if(N.tag===5){if(j===null){j=N;try{i=N.stateNode,x?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(d=N.stateNode,f=N.memoizedProps.style,s=f!=null&&f.hasOwnProperty("display")?f.display:null,d.style.display=ta("display",s))}catch(O){Ee(e,e.return,O)}}}else if(N.tag===6){if(j===null)try{N.stateNode.nodeValue=x?"":N.memoizedProps}catch(O){Ee(e,e.return,O)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;j===N&&(j=null),N=N.return}j===N&&(j=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:kt(t,e),Pt(e),r&4&&xc(e);break;case 21:break;default:kt(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gc(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(rr(i,""),r.flags&=-33);var l=yc(e);is(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,d=yc(e);rs(e,d,s);break;default:throw Error(u(161))}}catch(f){Ee(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _p(e,t,n){T=e,kc(e)}function kc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||$i;if(!s){var d=i.alternate,f=d!==null&&d.memoizedState!==null||Ke;d=$i;var x=Ke;if($i=s,(Ke=f)&&!x)for(T=i;T!==null;)s=T,f=s.child,s.tag===22&&s.memoizedState!==null?jc(i):f!==null?(f.return=s,T=f):jc(i);for(;l!==null;)T=l,kc(l),l=l.sibling;T=i,$i=d,Ke=x}Sc(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,T=l):Sc(e)}}function Sc(e){for(;T!==null;){var t=T;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ke||Hi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Cu(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cu(t,s,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var j=x.memoizedState;if(j!==null){var N=j.dehydrated;N!==null&&mr(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Ke||t.flags&512&&ns(t)}catch(S){Ee(t,t.return,S)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Cc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function jc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hi(4,t)}catch(f){Ee(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(f){Ee(t,i,f)}}var l=t.return;try{ns(t)}catch(f){Ee(t,l,f)}break;case 5:var s=t.return;try{ns(t)}catch(f){Ee(t,s,f)}}}catch(f){Ee(t,t.return,f)}if(t===e){T=null;break}var d=t.sibling;if(d!==null){d.return=t.return,T=d;break}T=t.return}}var zp=Math.ceil,Vi=me.ReactCurrentDispatcher,os=me.ReactCurrentOwner,pt=me.ReactCurrentBatchConfig,oe=0,Fe=null,be=null,We=0,st=0,Qn=Qt(0),Re=0,Ar=null,gn=0,Gi=0,ls=0,Fr=null,tt=null,ss=0,Yn=1/0,Ft=null,Qi=!1,as=null,qt=null,Yi=!1,en=null,Ki=0,Dr=0,us=null,Xi=-1,Zi=0;function Ze(){return(oe&6)!==0?_e():Xi!==-1?Xi:Xi=_e()}function tn(e){return(e.mode&1)===0?1:(oe&2)!==0&&We!==0?We&-We:dp.transition!==null?(Zi===0&&(Zi=ya()),Zi):(e=pe,e!==0||(e=window.event,e=e===void 0?16:Ea(e.type)),e)}function St(e,t,n,r){if(50<Dr)throw Dr=0,us=null,Error(u(185));ur(e,n,r),((oe&2)===0||e!==Fe)&&(e===Fe&&((oe&2)===0&&(Gi|=n),Re===4&&nn(e,We)),nt(e,r),n===1&&oe===0&&(t.mode&1)===0&&(Yn=_e()+500,Ni&&Kt()))}function nt(e,t){var n=e.callbackNode;df(e,t);var r=li(e,e===Fe?We:0);if(r===0)n!==null&&ma(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ma(n),t===1)e.tag===0?cp(Ec.bind(null,e)):du(Ec.bind(null,e)),lp(function(){(oe&6)===0&&Kt()}),n=null;else{switch(va(r)){case 1:n=Uo;break;case 4:n=ha;break;case 16:n=ni;break;case 536870912:n=ga;break;default:n=ni}n=Oc(n,Nc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nc(e,t){if(Xi=-1,Zi=0,(oe&6)!==0)throw Error(u(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=li(e,e===Fe?We:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ji(e,r);else{t=r;var i=oe;oe|=2;var l=zc();(Fe!==e||We!==t)&&(Ft=null,Yn=_e()+500,vn(e,t));do try{bp();break}catch(d){_c(e,d)}while(!0);_l(),Vi.current=l,oe=i,be!==null?t=0:(Fe=null,We=0,t=Re)}if(t!==0){if(t===2&&(i=$o(e),i!==0&&(r=i,t=cs(e,i))),t===1)throw n=Ar,vn(e,0),nn(e,r),nt(e,_e()),n;if(t===6)nn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Pp(i)&&(t=Ji(e,r),t===2&&(l=$o(e),l!==0&&(r=l,t=cs(e,l))),t===1))throw n=Ar,vn(e,0),nn(e,r),nt(e,_e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:xn(e,tt,Ft);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=ss+500-_e(),10<t)){if(li(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gl(xn.bind(null,e,tt,Ft),t);break}xn(e,tt,Ft);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-gt(r);l=1<<s,s=t[s],s>i&&(i=s),r&=~l}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zp(r/1960))-r,10<r){e.timeoutHandle=gl(xn.bind(null,e,tt,Ft),r);break}xn(e,tt,Ft);break;case 5:xn(e,tt,Ft);break;default:throw Error(u(329))}}}return nt(e,_e()),e.callbackNode===n?Nc.bind(null,e):null}function cs(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(vn(e,t).flags|=256),e=Ji(e,t),e!==2&&(t=tt,tt=n,t!==null&&ds(t)),e}function ds(e){tt===null?tt=e:tt.push.apply(tt,e)}function Pp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!yt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~ls,t&=~Gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function Ec(e){if((oe&6)!==0)throw Error(u(327));Kn();var t=li(e,0);if((t&1)===0)return nt(e,_e()),null;var n=Ji(e,t);if(e.tag!==0&&n===2){var r=$o(e);r!==0&&(t=r,n=cs(e,r))}if(n===1)throw n=Ar,vn(e,0),nn(e,t),nt(e,_e()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,tt,Ft),nt(e,_e()),null}function fs(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(Yn=_e()+500,Ni&&Kt())}}function yn(e){en!==null&&en.tag===0&&(oe&6)===0&&Kn();var t=oe;oe|=1;var n=pt.transition,r=pe;try{if(pt.transition=null,pe=1,e)return e()}finally{pe=r,pt.transition=n,oe=t,(oe&6)===0&&Kt()}}function ps(){st=Qn.current,we(Qn)}function vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,op(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Sl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ci();break;case 3:Hn(),we(Je),we(Ge),Rl();break;case 5:Il(r);break;case 4:Hn();break;case 13:we(Ce);break;case 19:we(Ce);break;case 10:zl(r.type._context);break;case 22:case 23:ps()}n=n.return}if(Fe=e,be=e=rn(e.current,null),We=st=t,Re=0,Ar=null,ls=Gi=gn=0,tt=Fr=null,pn!==null){for(t=0;t<pn.length;t++)if(n=pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}n.pending=r}pn=null}return e}function _c(e,t){do{var n=be;try{if(_l(),Ri.current=Di,Mi){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mi=!1}if(hn=0,Ae=Oe=je=null,br=!1,Tr=0,os.current=null,n===null||n.return===null){Re=1,Ar=t,be=null;break}e:{var l=e,s=n.return,d=n,f=t;if(t=We,d.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var x=f,j=d,N=j.tag;if((j.mode&1)===0&&(N===0||N===11||N===15)){var S=j.alternate;S?(j.updateQueue=S.updateQueue,j.memoizedState=S.memoizedState,j.lanes=S.lanes):(j.updateQueue=null,j.memoizedState=null)}var b=Ju(s);if(b!==null){b.flags&=-257,qu(b,s,d,l,t),b.mode&1&&Zu(l,x,t),t=b,f=x;var I=t.updateQueue;if(I===null){var O=new Set;O.add(f),t.updateQueue=O}else I.add(f);break e}else{if((t&1)===0){Zu(l,x,t),ms();break e}f=Error(u(426))}}else if(Se&&d.mode&1){var ze=Ju(s);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),qu(ze,s,d,l,t),Nl(Vn(f,d));break e}}l=f=Vn(f,d),Re!==4&&(Re=2),Fr===null?Fr=[l]:Fr.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var y=Ku(l,f,t);Su(l,y);break e;case 1:d=f;var m=l.type,v=l.stateNode;if((l.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(qt===null||!qt.has(v)))){l.flags|=65536,t&=-t,l.lanes|=t;var E=Xu(l,d,t);Su(l,E);break e}}l=l.return}while(l!==null)}Lc(n)}catch(R){t=R,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function zc(){var e=Vi.current;return Vi.current=Di,e===null?Di:e}function ms(){(Re===0||Re===3||Re===2)&&(Re=4),Fe===null||(gn&268435455)===0&&(Gi&268435455)===0||nn(Fe,We)}function Ji(e,t){var n=oe;oe|=2;var r=zc();(Fe!==e||We!==t)&&(Ft=null,vn(e,t));do try{Lp();break}catch(i){_c(e,i)}while(!0);if(_l(),oe=n,Vi.current=r,be!==null)throw Error(u(261));return Fe=null,We=0,Re}function Lp(){for(;be!==null;)Pc(be)}function bp(){for(;be!==null&&!tf();)Pc(be)}function Pc(e){var t=Ic(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?Lc(e):be=t,os.current=null}function Lc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Cp(n,t,st),n!==null){be=n;return}}else{if(n=jp(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,be=null;return}}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Re===0&&(Re=5)}function xn(e,t,n){var r=pe,i=pt.transition;try{pt.transition=null,pe=1,Tp(e,t,n,r)}finally{pt.transition=i,pe=r}return null}function Tp(e,t,n,r){do Kn();while(en!==null);if((oe&6)!==0)throw Error(u(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(ff(e,l),e===Fe&&(be=Fe=null,We=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Yi||(Yi=!0,Oc(ni,function(){return Kn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=pt.transition,pt.transition=null;var s=pe;pe=1;var d=oe;oe|=4,os.current=null,Ep(e,n),wc(n,e),Jf(ml),ui=!!pl,ml=pl=null,e.current=n,_p(n),nf(),oe=d,pe=s,pt.transition=l}else e.current=n;if(Yi&&(Yi=!1,en=e,Ki=i),l=e.pendingLanes,l===0&&(qt=null),lf(n.stateNode),nt(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qi)throw Qi=!1,e=as,as=null,e;return(Ki&1)!==0&&e.tag!==0&&Kn(),l=e.pendingLanes,(l&1)!==0?e===us?Dr++:(Dr=0,us=e):Dr=0,Kt(),null}function Kn(){if(en!==null){var e=va(Ki),t=pt.transition,n=pe;try{if(pt.transition=null,pe=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Ki=0,(oe&6)!==0)throw Error(u(331));var i=oe;for(oe|=4,T=e.current;T!==null;){var l=T,s=l.child;if((T.flags&16)!==0){var d=l.deletions;if(d!==null){for(var f=0;f<d.length;f++){var x=d[f];for(T=x;T!==null;){var j=T;switch(j.tag){case 0:case 11:case 15:Mr(8,j,l)}var N=j.child;if(N!==null)N.return=j,T=N;else for(;T!==null;){j=T;var S=j.sibling,b=j.return;if(hc(j),j===x){T=null;break}if(S!==null){S.return=b,T=S;break}T=b}}}var I=l.alternate;if(I!==null){var O=I.child;if(O!==null){I.child=null;do{var ze=O.sibling;O.sibling=null,O=ze}while(O!==null)}}T=l}}if((l.subtreeFlags&2064)!==0&&s!==null)s.return=l,T=s;else e:for(;T!==null;){if(l=T,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Mr(9,l,l.return)}var y=l.sibling;if(y!==null){y.return=l.return,T=y;break e}T=l.return}}var m=e.current;for(T=m;T!==null;){s=T;var v=s.child;if((s.subtreeFlags&2064)!==0&&v!==null)v.return=s,T=v;else e:for(s=m;T!==null;){if(d=T,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Hi(9,d)}}catch(R){Ee(d,d.return,R)}if(d===s){T=null;break e}var E=d.sibling;if(E!==null){E.return=d.return,T=E;break e}T=d.return}}if(oe=i,Kt(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(ri,e)}catch{}r=!0}return r}finally{pe=n,pt.transition=t}}return!1}function bc(e,t,n){t=Vn(n,t),t=Ku(e,t,1),e=Zt(e,t,1),t=Ze(),e!==null&&(ur(e,1,t),nt(e,t))}function Ee(e,t,n){if(e.tag===3)bc(e,e,n);else for(;t!==null;){if(t.tag===3){bc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=Vn(n,e),e=Xu(t,e,1),t=Zt(t,e,1),e=Ze(),t!==null&&(ur(t,1,e),nt(t,e));break}}t=t.return}}function Ip(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(We&n)===n&&(Re===4||Re===3&&(We&130023424)===We&&500>_e()-ss?vn(e,0):ls|=n),nt(e,t)}function Tc(e,t){t===0&&((e.mode&1)===0?t=1:(t=oi,oi<<=1,(oi&130023424)===0&&(oi=4194304)));var n=Ze();e=Rt(e,t),e!==null&&(ur(e,t,n),nt(e,n))}function Op(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tc(e,n)}function Rp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Tc(e,n)}var Ic;Ic=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)et=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return et=!1,Sp(e,t,n);et=(e.flags&131072)!==0}else et=!1,Se&&(t.flags&1048576)!==0&&fu(t,_i,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ui(e,t),e=t.pendingProps;var i=An(t,Ge.current);$n(t,n),i=Fl(null,t,r,e,i,n);var l=Dl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(l=!0,ji(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bl(t),i.updater=Bi,t.stateNode=i,i._reactInternals=t,Vl(t,r,e,n),t=Kl(null,t,r,!0,l,n)):(t.tag=0,Se&&l&&kl(t),Xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ui(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ap(r),e=xt(r,e),i){case 0:t=Yl(null,t,r,e,n);break e;case 1:t=oc(null,t,r,e,n);break e;case 11:t=ec(null,t,r,e,n);break e;case 14:t=tc(null,t,r,xt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Yl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),oc(e,t,r,i,n);case 3:e:{if(lc(t),e===null)throw Error(u(387));r=t.pendingProps,l=t.memoizedState,i=l.element,ku(e,t),Ii(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Vn(Error(u(423)),t),t=sc(e,t,r,n,i);break e}else if(r!==i){i=Vn(Error(u(424)),t),t=sc(e,t,r,n,i);break e}else for(lt=Gt(t.stateNode.containerInfo.firstChild),ot=t,Se=!0,vt=null,n=xu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===i){t=At(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return ju(t),e===null&&jl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,hl(r,i)?s=null:l!==null&&hl(r,l)&&(t.flags|=32),ic(e,t),Xe(e,t,s,n),t.child;case 6:return e===null&&jl(t),null;case 13:return ac(e,t,n);case 4:return Tl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),ec(e,t,r,i,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,ve(Li,r._currentValue),r._currentValue=s,l!==null)if(yt(l.value,s)){if(l.children===i.children&&!Je.current){t=At(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var d=l.dependencies;if(d!==null){s=l.child;for(var f=d.firstContext;f!==null;){if(f.context===r){if(l.tag===1){f=Mt(-1,n&-n),f.tag=2;var x=l.updateQueue;if(x!==null){x=x.shared;var j=x.pending;j===null?f.next=f:(f.next=j.next,j.next=f),x.pending=f}}l.lanes|=n,f=l.alternate,f!==null&&(f.lanes|=n),Pl(l.return,n,t),d.lanes|=n;break}f=f.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(u(341));s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),Pl(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}Xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$n(t,n),i=dt(i),r=r(i),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,i=xt(r,t.pendingProps),i=xt(r.type,i),tc(e,t,r,i,n);case 15:return nc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Ui(e,t),t.tag=1,qe(r)?(e=!0,ji(t)):e=!1,$n(t,n),Qu(t,r,i),Vl(t,r,i,n),Kl(null,t,r,!0,e,n);case 19:return cc(e,t,n);case 22:return rc(e,t,n)}throw Error(u(156,t.tag))};function Oc(e,t){return pa(e,t)}function Mp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new Mp(e,t,n,r)}function hs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ap(e){if(typeof e=="function")return hs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===He)return 11;if(e===Ve)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qi(e,t,n,r,i,l){var s=2;if(r=e,typeof e=="function")hs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case W:return wn(n.children,i,l,t);case Z:s=8,i|=8;break;case Ue:return e=mt(12,n,t,i|2),e.elementType=Ue,e.lanes=l,e;case de:return e=mt(13,n,t,i),e.elementType=de,e.lanes=l,e;case Le:return e=mt(19,n,t,i),e.elementType=Le,e.lanes=l,e;case ye:return eo(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $e:s=10;break e;case Pe:s=9;break e;case He:s=11;break e;case Ve:s=14;break e;case Ie:s=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=mt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function wn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function eo(e,t,n,r){return e=mt(22,e,r,t),e.elementType=ye,e.lanes=n,e.stateNode={isHidden:!1},e}function gs(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function ys(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vs(e,t,n,r,i,l,s,d,f){return e=new Fp(e,t,n,d,f),t===1?(t=1,l===!0&&(t|=8)):t=0,l=mt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bl(l),e}function Dp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rc(e){if(!e)return Yt;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(qe(n))return uu(e,n,t)}return t}function Mc(e,t,n,r,i,l,s,d,f){return e=vs(n,r,!0,e,i,l,s,d,f),e.context=Rc(null),n=e.current,r=Ze(),i=tn(n),l=Mt(r,i),l.callback=t??null,Zt(n,l,i),e.current.lanes=i,ur(e,i,r),nt(e,r),e}function to(e,t,n,r){var i=t.current,l=Ze(),s=tn(i);return n=Rc(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(i,t,s),e!==null&&(St(e,i,s,l),Ti(e,i,s)),s}function no(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xs(e,t){Ac(e,t),(e=e.alternate)&&Ac(e,t)}function Bp(){return null}var Fc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ws(e){this._internalRoot=e}ro.prototype.render=ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));to(e,t,null,null)},ro.prototype.unmount=ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){to(null,e,null,null)}),t[bt]=null}};function ro(e){this._internalRoot=e}ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=ka();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&ja(e)}};function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dc(){}function Wp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var x=no(s);l.call(x)}}var s=Mc(t,r,e,0,null,!1,!1,"",Dc);return e._reactRootContainer=s,e[bt]=s.current,Cr(e.nodeType===8?e.parentNode:e),yn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var d=r;r=function(){var x=no(f);d.call(x)}}var f=vs(e,0,!1,null,null,!1,!1,"",Dc);return e._reactRootContainer=f,e[bt]=f.current,Cr(e.nodeType===8?e.parentNode:e),yn(function(){to(t,f,n,r)}),f}function oo(e,t,n,r,i){var l=n._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var d=i;i=function(){var f=no(s);d.call(f)}}to(t,s,e,i)}else s=Wp(n,t,e,i,r);return no(s)}xa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ar(t.pendingLanes);n!==0&&(Vo(t,n|1),nt(t,_e()),(oe&6)===0&&(Yn=_e()+500,Kt()))}break;case 13:yn(function(){var r=Rt(e,1);if(r!==null){var i=Ze();St(r,e,1,i)}}),xs(e,1)}},Go=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=Ze();St(t,e,134217728,n)}xs(e,134217728)}},wa=function(e){if(e.tag===13){var t=tn(e),n=Rt(e,t);if(n!==null){var r=Ze();St(n,e,t,r)}xs(e,t)}},ka=function(){return pe},Sa=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}},Fo=function(e,t,n){switch(t){case"input":if(Lo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Si(r);if(!i)throw Error(u(90));Gs(r),Lo(r,i)}}}break;case"textarea":Zs(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}},la=fs,sa=yn;var Up={usingClientEntryPoint:!1,Events:[Er,Rn,Si,ia,oa,fs]},Br={findFiberByHostInstance:un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$p={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:me.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=da(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||Bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{ri=lo.inject($p),Nt=lo}catch{}}return rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Up,rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ks(t))throw Error(u(200));return Dp(e,t,null,n)},rt.createRoot=function(e,t){if(!ks(e))throw Error(u(299));var n=!1,r="",i=Fc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vs(e,1,!1,null,null,n,!1,r,i),e[bt]=t.current,Cr(e.nodeType===8?e.parentNode:e),new ws(t)},rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=da(t),e=e===null?null:e.stateNode,e},rt.flushSync=function(e){return yn(e)},rt.hydrate=function(e,t,n){if(!io(t))throw Error(u(200));return oo(null,e,t,!0,n)},rt.hydrateRoot=function(e,t,n){if(!ks(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",s=Fc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Mc(t,null,e,1,n??null,i,!1,l,s),e[bt]=t.current,Cr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ro(t)},rt.render=function(e,t,n){if(!io(t))throw Error(u(200));return oo(null,e,t,!1,n)},rt.unmountComponentAtNode=function(e){if(!io(e))throw Error(u(40));return e._reactRootContainer?(yn(function(){oo(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1},rt.unstable_batchedUpdates=fs,rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!io(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return oo(e,t,n,!1,r)},rt.version="18.3.1-next-f1338f8080-20240426",rt}var Qc;function Jp(){if(Qc)return js.exports;Qc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),js.exports=Zp(),js.exports}var Yc;function qp(){if(Yc)return so;Yc=1;var o=Jp();return so.createRoot=o.createRoot,so.hydrateRoot=o.hydrateRoot,so}var em=qp(),fd=Bs();const at=Vp(fd);var ke="-ms-",Vr="-moz-",ce="-webkit-",pd="comm",xo="rule",Ws="decl",tm="@import",nm="@namespace",md="@keyframes",rm="@layer",hd=Math.abs,Us=String.fromCharCode,Is=Object.assign;function im(o,a){return Me(o,0)^45?(((a<<2^Me(o,0))<<2^Me(o,1))<<2^Me(o,2))<<2^Me(o,3):0}function gd(o){return o.trim()}function Dt(o,a){return(o=a.exec(o))?o[0]:o}function q(o,a,u){return o.replace(a,u)}function uo(o,a,u){return o.indexOf(a,u)}function Me(o,a){return o.charCodeAt(a)|0}function jn(o,a,u){return o.slice(a,u)}function Ct(o){return o.length}function yd(o){return o.length}function $r(o,a){return a.push(o),o}function om(o,a){return o.map(a).join("")}function Kc(o,a){return o.filter(function(u){return!Dt(u,a)})}var wo=1,Jn=1,vd=0,ht=0,Te=0,tr="";function ko(o,a,u,p,g,k,z,_){return{value:o,root:a,parent:u,type:p,props:g,children:k,line:wo,column:Jn,length:z,return:"",siblings:_}}function ln(o,a){return Is(ko("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},a)}function Xn(o){for(;o.root;)o=ln(o.root,{children:[o]});$r(o,o.siblings)}function lm(){return Te}function sm(){return Te=ht>0?Me(tr,--ht):0,Jn--,Te===10&&(Jn=1,wo--),Te}function jt(){return Te=ht<vd?Me(tr,ht++):0,Jn++,Te===10&&(Jn=1,wo++),Te}function sn(){return Me(tr,ht)}function co(){return ht}function So(o,a){return jn(tr,o,a)}function Qr(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function am(o){return wo=Jn=1,vd=Ct(tr=o),ht=0,[]}function um(o){return tr="",o}function _s(o){return gd(So(ht-1,Os(o===91?o+2:o===40?o+1:o)))}function cm(o){for(;(Te=sn())&&Te<33;)jt();return Qr(o)>2||Qr(Te)>3?"":" "}function dm(o,a){for(;--a&&jt()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return So(o,co()+(a<6&&sn()==32&&jt()==32))}function Os(o){for(;jt();)switch(Te){case o:return ht;case 34:case 39:o!==34&&o!==39&&Os(Te);break;case 40:o===41&&Os(o);break;case 92:jt();break}return ht}function fm(o,a){for(;jt()&&o+Te!==57;)if(o+Te===84&&sn()===47)break;return"/*"+So(a,ht-1)+"*"+Us(o===47?o:jt())}function pm(o){for(;!Qr(sn());)jt();return So(o,ht)}function mm(o){return um(fo("",null,null,null,[""],o=am(o),0,[0],o))}function fo(o,a,u,p,g,k,z,_,C){for(var F=0,U=0,D=z,G=0,le=0,X=0,Y=1,J=1,ue=1,M=0,ge="",me=g,se=k,ne=p,W=ge;J;)switch(X=M,M=jt()){case 40:if(X!=108&&Me(W,D-1)==58){uo(W+=q(_s(M),"&","&\f"),"&\f",hd(F?_[F-1]:0))!=-1&&(ue=-1);break}case 34:case 39:case 91:W+=_s(M);break;case 9:case 10:case 13:case 32:W+=cm(X);break;case 92:W+=dm(co()-1,7);continue;case 47:switch(sn()){case 42:case 47:$r(hm(fm(jt(),co()),a,u,C),C),(Qr(X||1)==5||Qr(sn()||1)==5)&&Ct(W)&&jn(W,-1,void 0)!==" "&&(W+=" ");break;default:W+="/"}break;case 123*Y:_[F++]=Ct(W)*ue;case 125*Y:case 59:case 0:switch(M){case 0:case 125:J=0;case 59+U:ue==-1&&(W=q(W,/\f/g,"")),le>0&&(Ct(W)-D||Y===0&&X===47)&&$r(le>32?Zc(W+";",p,u,D-1,C):Zc(q(W," ","")+";",p,u,D-2,C),C);break;case 59:W+=";";default:if($r(ne=Xc(W,a,u,F,U,g,_,ge,me=[],se=[],D,k),k),M===123)if(U===0)fo(W,a,ne,ne,me,k,D,_,se);else{switch(G){case 99:if(Me(W,3)===110)break;case 108:if(Me(W,2)===97)break;default:U=0;case 100:case 109:case 115:}U?fo(o,ne,ne,p&&$r(Xc(o,ne,ne,0,0,g,_,ge,g,me=[],D,se),se),g,se,D,_,p?me:se):fo(W,ne,ne,ne,[""],se,0,_,se)}}F=U=le=0,Y=ue=1,ge=W="",D=z;break;case 58:D=1+Ct(W),le=X;default:if(Y<1){if(M==123)--Y;else if(M==125&&Y++==0&&sm()==125)continue}switch(W+=Us(M),M*Y){case 38:ue=U>0?1:(W+="\f",-1);break;case 44:_[F++]=(Ct(W)-1)*ue,ue=1;break;case 64:sn()===45&&(W+=_s(jt())),G=sn(),U=D=Ct(ge=W+=pm(co())),M++;break;case 45:X===45&&Ct(W)==2&&(Y=0)}}return k}function Xc(o,a,u,p,g,k,z,_,C,F,U,D){for(var G=g-1,le=g===0?k:[""],X=yd(le),Y=0,J=0,ue=0;Y<p;++Y)for(var M=0,ge=jn(o,G+1,G=hd(J=z[Y])),me=o;M<X;++M)(me=gd(J>0?le[M]+" "+ge:q(ge,/&\f/g,le[M])))&&(C[ue++]=me);return ko(o,a,u,g===0?xo:_,C,F,U,D)}function hm(o,a,u,p){return ko(o,a,u,pd,Us(lm()),jn(o,2,-2),0,p)}function Zc(o,a,u,p,g){return ko(o,a,u,Ws,jn(o,0,p),jn(o,p+1,-1),p,g)}function xd(o,a,u){switch(im(o,a)){case 5103:return ce+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ce+o+o;case 4855:return ce+o.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+o;case 4789:return Vr+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+o+Vr+o+ke+o+o;case 5936:switch(Me(o,a+11)){case 114:return ce+o+ke+q(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return ce+o+ke+q(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return ce+o+ke+q(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return ce+o+ke+o+o;case 6165:return ce+o+ke+"flex-"+o+o;case 5187:return ce+o+q(o,/(\w+).+(:[^]+)/,ce+"box-$1$2"+ke+"flex-$1$2")+o;case 5443:return ce+o+ke+"flex-item-"+q(o,/flex-|-self/g,"")+(Dt(o,/flex-|baseline/)?"":ke+"grid-row-"+q(o,/flex-|-self/g,""))+o;case 4675:return ce+o+ke+"flex-line-pack"+q(o,/align-content|flex-|-self/g,"")+o;case 5548:return ce+o+ke+q(o,"shrink","negative")+o;case 5292:return ce+o+ke+q(o,"basis","preferred-size")+o;case 6060:return ce+"box-"+q(o,"-grow","")+ce+o+ke+q(o,"grow","positive")+o;case 4554:return ce+q(o,/([^-])(transform)/g,"$1"+ce+"$2")+o;case 6187:return q(q(q(o,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),o,"")+o;case 5495:case 3959:return q(o,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return q(q(o,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+ke+"flex-pack:$3"),/space-between/,"justify")+ce+o+o;case 4200:if(!Dt(o,/flex-|baseline/))return ke+"grid-column-align"+jn(o,a)+o;break;case 2592:case 3360:return ke+q(o,"template-","")+o;case 4384:case 3616:return u&&u.some(function(p,g){return a=g,Dt(p.props,/grid-\w+-end/)})?~uo(o+(u=u[a].value),"span",0)?o:ke+q(o,"-start","")+o+ke+"grid-row-span:"+(~uo(u,"span",0)?Dt(u,/\d+/):+Dt(u,/\d+/)-+Dt(o,/\d+/))+";":ke+q(o,"-start","")+o;case 4896:case 4128:return u&&u.some(function(p){return Dt(p.props,/grid-\w+-start/)})?o:ke+q(q(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return q(o,/(.+)-inline(.+)/,ce+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ct(o)-1-a>6)switch(Me(o,a+1)){case 109:if(Me(o,a+4)!==45)break;case 102:return q(o,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Vr+(Me(o,a+3)==108?"$3":"$2-$3"))+o;case 115:return~uo(o,"stretch",0)?xd(q(o,"stretch","fill-available"),a,u)+o:o}break;case 5152:case 5920:return q(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,g,k,z,_,C,F){return ke+g+":"+k+F+(z?ke+g+"-span:"+(_?C:+C-+k)+F:"")+o});case 4949:if(Me(o,a+6)===121)return q(o,":",":"+ce)+o;break;case 6444:switch(Me(o,Me(o,14)===45?18:11)){case 120:return q(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Me(o,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+ke+"$2box$3")+o;case 100:return q(o,":",":"+ke)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return q(o,"scroll-","scroll-snap-")+o}return o}function ho(o,a){for(var u="",p=0;p<o.length;p++)u+=a(o[p],p,o,a)||"";return u}function gm(o,a,u,p){switch(o.type){case rm:if(o.children.length)break;case tm:case nm:case Ws:return o.return=o.return||o.value;case pd:return"";case md:return o.return=o.value+"{"+ho(o.children,p)+"}";case xo:if(!Ct(o.value=o.props.join(",")))return""}return Ct(u=ho(o.children,p))?o.return=o.value+"{"+u+"}":""}function ym(o){var a=yd(o);return function(u,p,g,k){for(var z="",_=0;_<a;_++)z+=o[_](u,p,g,k)||"";return z}}function vm(o){return function(a){a.root||(a=a.return)&&o(a)}}function xm(o,a,u,p){if(o.length>-1&&!o.return)switch(o.type){case Ws:o.return=xd(o.value,o.length,u);return;case md:return ho([ln(o,{value:q(o.value,"@","@"+ce)})],p);case xo:if(o.length)return om(u=o.props,function(g){switch(Dt(g,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xn(ln(o,{props:[q(g,/:(read-\w+)/,":"+Vr+"$1")]})),Xn(ln(o,{props:[g]})),Is(o,{props:Kc(u,p)});break;case"::placeholder":Xn(ln(o,{props:[q(g,/:(plac\w+)/,":"+ce+"input-$1")]})),Xn(ln(o,{props:[q(g,/:(plac\w+)/,":"+Vr+"$1")]})),Xn(ln(o,{props:[q(g,/:(plac\w+)/,ke+"input-$1")]})),Xn(ln(o,{props:[g]})),Is(o,{props:Kc(u,p)});break}return""})}}var Zn={},zs,Ps;const qn=typeof process<"u"&&Zn!==void 0&&(Zn.REACT_APP_SC_ATTR||Zn.SC_ATTR)||"data-styled",wd="active",kd="data-styled-version",Co="6.4.1",$s=`/*!sc*/
`,Gr=typeof window<"u"&&typeof document<"u";function Jc(o){if(typeof process<"u"&&Zn!==void 0){const a=Zn[o];if(a!==void 0&&a!=="")return a!=="false"}}const wm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Ps=(zs=Jc("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&zs!==void 0?zs:Jc("SC_DISABLE_SPEEDY"))!==null&&Ps!==void 0?Ps:typeof process>"u"||Zn===void 0),km="sc-keyframes-";function jo(o,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${o} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}let po=new Map,go=new Map,mo=1;const ao=o=>{if(po.has(o))return po.get(o);for(;go.has(mo);)mo++;const a=mo++;return po.set(o,a),go.set(a,o),a},Sm=o=>go.get(o),Cm=(o,a)=>{mo=a+1,po.set(o,a),go.set(a,o)},Hs=Object.freeze([]),er=Object.freeze({});function jm(o,a,u=er){return o.theme!==u.theme&&o.theme||a||u.theme}const Nm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Em=/(^-|-$)/g;function Sd(o){return o.replace(Nm,"-").replace(Em,"")}const _m=/(a)(d)/gi,qc=o=>String.fromCharCode(o+(o>25?39:97));function Cd(o){let a,u="";for(a=Math.abs(o);a>52;a=a/52|0)u=qc(a%52)+u;return(qc(a%52)+u).replace(_m,"$1-$2")}const Rs=5381,Sn=(o,a)=>{let u=a.length;for(;u;)o=33*o^a.charCodeAt(--u);return o},jd=o=>Sn(Rs,o);function zm(o){return Cd(jd(o)>>>0)}function Pm(o){return o.displayName||o.name||"Component"}function Ms(o){return typeof o=="string"&&!0}function Lm(o){return Ms(o)?`styled.${o}`:`Styled(${Pm(o)})`}const Nd=Symbol.for("react.memo"),bm=Symbol.for("react.forward_ref"),Tm={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Im={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ed={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Om={[bm]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Nd]:Ed};function ed(o){return("type"in(a=o)&&a.type.$$typeof)===Nd?Ed:"$$typeof"in o?Om[o.$$typeof]:Tm;var a}const Rm=Object.defineProperty,Mm=Object.getOwnPropertyNames,Am=Object.getOwnPropertySymbols,Fm=Object.getOwnPropertyDescriptor,Dm=Object.getPrototypeOf,Bm=Object.prototype;function _d(o,a,u){if(typeof a!="string"){const p=Dm(a);p&&p!==Bm&&_d(o,p,u);const g=Mm(a).concat(Am(a)),k=ed(o),z=ed(a);for(let _=0;_<g.length;++_){const C=g[_];if(!(C in Im||u&&u[C]||z&&C in z||k&&C in k)){const F=Fm(a,C);try{Rm(o,C,F)}catch{}}}}return o}function No(o){return typeof o=="function"}function zd(o){return typeof o=="object"&&"styledComponentId"in o}function Hr(o,a){return o&&a?o+" "+a:o||a||""}function td(o,a){return o.join("")}function Yr(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function As(o,a,u=!1){if(!u&&!Yr(o)&&!Array.isArray(o))return a;if(Array.isArray(a))for(let p=0;p<a.length;p++)o[p]=As(o[p],a[p]);else if(Yr(a))for(const p in a)o[p]=As(o[p],a[p]);return o}function Pd(o,a){Object.defineProperty(o,"toString",{value:a})}const Wm=class{constructor(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o,this._cGroup=0,this._cIndex=0}indexOfGroup(o){if(o===this._cGroup)return this._cIndex;let a=this._cIndex;if(o>this._cGroup)for(let u=this._cGroup;u<o;u++)a+=this.groupSizes[u];else for(let u=this._cGroup-1;u>=o;u--)a-=this.groupSizes[u];return this._cGroup=o,this._cIndex=a,a}insertRules(o,a){if(o>=this.groupSizes.length){const g=this.groupSizes,k=g.length;let z=k;for(;o>=z;)if(z<<=1,z<0)throw jo(16,`${o}`);this.groupSizes=new Uint32Array(z),this.groupSizes.set(g),this.length=z;for(let _=k;_<z;_++)this.groupSizes[_]=0}let u=this.indexOfGroup(o+1),p=0;for(let g=0,k=a.length;g<k;g++)this.tag.insertRule(u,a[g])&&(this.groupSizes[o]++,u++,p++);p>0&&this._cGroup>o&&(this._cIndex+=p)}clearGroup(o){if(o<this.length){const a=this.groupSizes[o],u=this.indexOfGroup(o),p=u+a;this.groupSizes[o]=0;for(let g=u;g<p;g++)this.tag.deleteRule(u);a>0&&this._cGroup>o&&(this._cIndex-=a)}}getGroup(o){let a="";if(o>=this.length||this.groupSizes[o]===0)return a;const u=this.groupSizes[o],p=this.indexOfGroup(o),g=p+u;for(let k=p;k<g;k++)a+=this.tag.getRule(k)+$s;return a}},Um=`style[${qn}][${kd}="${Co}"]`,$m=new RegExp(`^${qn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),nd=o=>typeof ShadowRoot<"u"&&o instanceof ShadowRoot||"host"in o&&o.nodeType===11,Fs=o=>{if(!o)return document;if(nd(o))return o;if("getRootNode"in o){const a=o.getRootNode();if(nd(a))return a}return document},Hm=(o,a,u)=>{const p=u.split(",");let g;for(let k=0,z=p.length;k<z;k++)(g=p[k])&&o.registerName(a,g)},Vm=(o,a)=>{var u;const p=((u=a.textContent)!==null&&u!==void 0?u:"").split($s),g=[];for(let k=0,z=p.length;k<z;k++){const _=p[k].trim();if(!_)continue;const C=_.match($m);if(C){const F=0|parseInt(C[1],10),U=C[2];F!==0&&(Cm(U,F),Hm(o,U,C[3]),o.getTag().insertRules(F,g)),g.length=0}else g.push(_)}},Ls=o=>{const a=Fs(o.options.target).querySelectorAll(Um);for(let u=0,p=a.length;u<p;u++){const g=a[u];g&&g.getAttribute(qn)!==wd&&(Vm(o,g),g.parentNode&&g.parentNode.removeChild(g))}};let Ur=!1;function Gm(){if(Ur!==!1)return Ur;if(typeof document<"u"){const o=document.head.querySelector('meta[property="csp-nonce"]');if(o)return Ur=o.nonce||o.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return Ur=a.getAttribute("content")||void 0}return Ur=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Ld=(o,a)=>{const u=document.head,p=o||u,g=document.createElement("style"),k=(C=>{const F=Array.from(C.querySelectorAll(`style[${qn}]`));return F[F.length-1]})(p),z=k!==void 0?k.nextSibling:null;g.setAttribute(qn,wd),g.setAttribute(kd,Co);const _=a||Gm();return _&&g.setAttribute("nonce",_),p.insertBefore(g,z),g},Qm=class{constructor(o,a){this.element=Ld(o,a),this.element.appendChild(document.createTextNode("")),this.sheet=(u=>{var p;if(u.sheet)return u.sheet;const g=(p=u.getRootNode().styleSheets)!==null&&p!==void 0?p:document.styleSheets;for(let k=0,z=g.length;k<z;k++){const _=g[k];if(_.ownerNode===u)return _}throw jo(17)})(this.element),this.length=0}insertRule(o,a){try{return this.sheet.insertRule(a,o),this.length++,!0}catch{return!1}}deleteRule(o){this.sheet.deleteRule(o),this.length--}getRule(o){const a=this.sheet.cssRules[o];return a&&a.cssText?a.cssText:""}},Ym=class{constructor(o,a){this.element=Ld(o,a),this.nodes=this.element.childNodes,this.length=0}insertRule(o,a){if(o<=this.length&&o>=0){const u=document.createTextNode(a);return this.element.insertBefore(u,this.nodes[o]||null),this.length++,!0}return!1}deleteRule(o){this.element.removeChild(this.nodes[o]),this.length--}getRule(o){return o<this.length?this.nodes[o].textContent:""}};let rd=Gr;const Km={isServer:!Gr,useCSSOMInjection:!wm};class Eo{static registerId(a){return ao(a)}constructor(a=er,u={},p){this.options=Object.assign(Object.assign({},Km),a),this.gs=u,this.keyframeIds=new Set,this.names=new Map(p),this.server=!!a.isServer,!this.server&&Gr&&rd&&(rd=!1,Ls(this)),Pd(this,()=>(g=>{const k=g.getTag(),{length:z}=k;let _="";for(let C=0;C<z;C++){const F=Sm(C);if(F===void 0)continue;const U=g.names.get(F);if(U===void 0||!U.size)continue;const D=k.getGroup(C);if(D.length===0)continue;const G=qn+".g"+C+'[id="'+F+'"]';let le="";for(const X of U)X.length>0&&(le+=X+",");_+=D+G+'{content:"'+le+'"}'+$s}return _})(this))}rehydrate(){!this.server&&Gr&&Ls(this)}reconstructWithOptions(a,u=!0){const p=new Eo(Object.assign(Object.assign({},this.options),a),this.gs,u&&this.names||void 0);return p.keyframeIds=new Set(this.keyframeIds),!this.server&&Gr&&a.target!==this.options.target&&Fs(this.options.target)!==Fs(a.target)&&Ls(p),p}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:u,target:p,nonce:g})=>u?new Qm(p,g):new Ym(p,g))(this.options),new Wm(a)));var a}hasNameForId(a,u){var p,g;return(g=(p=this.names.get(a))===null||p===void 0?void 0:p.has(u))!==null&&g!==void 0&&g}registerName(a,u){ao(a),a.startsWith(km)&&this.keyframeIds.add(a);const p=this.names.get(a);p?p.add(u):this.names.set(a,new Set([u]))}insertRules(a,u,p){this.registerName(a,u),this.getTag().insertRules(ao(a),p)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(ao(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const bd=new WeakSet,Xm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Zm(o,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||o in Xm||o.startsWith("--")?String(a).trim():a+"px"}const kn=47;function id(o){if(o.charCodeAt(0)===45&&o.charCodeAt(1)===45)return o;let a="";for(let u=0;u<o.length;u++){const p=o.charCodeAt(u);a+=p>=65&&p<=90?"-"+String.fromCharCode(p+32):o[u]}return a.startsWith("ms-")?"-"+a:a}const Jm=Symbol.for("sc-keyframes");function qm(o){return typeof o=="object"&&o!==null&&Jm in o}function Td(o){return No(o)&&!(o.prototype&&o.prototype.isReactComponent)}const Id=o=>o==null||o===!1||o==="",eh=Symbol.for("react.client.reference");function od(o){return o.$$typeof===eh}function Od(o,a){for(const u in o){const p=o[u];o.hasOwnProperty(u)&&!Id(p)&&(Array.isArray(p)&&bd.has(p)||No(p)?a.push(id(u)+":",p,";"):Yr(p)?(a.push(u+" {"),Od(p,a),a.push("}")):a.push(id(u)+": "+Zm(u,p)+";"))}}function Cn(o,a,u,p,g=[]){if(Id(o))return g;const k=typeof o;if(k==="string")return g.push(o),g;if(k==="function"){if(od(o))return g;if(Td(o)&&a){const z=o(a);return Cn(z,a,u,p,g)}return g.push(o),g}if(Array.isArray(o)){for(let z=0;z<o.length;z++)Cn(o[z],a,u,p,g);return g}return zd(o)?(g.push(`.${o.styledComponentId}`),g):qm(o)?(u?(o.inject(u,p),g.push(o.getName(p))):g.push(o),g):od(o)?g:Yr(o)?(Od(o,g),g):(g.push(o.toString()),g)}const th=jd(Co);class nh{constructor(a,u,p){this.rules=a,this.componentId=u,this.baseHash=Sn(th,u),this.baseStyle=p,Eo.registerId(u)}generateAndInjectStyles(a,u,p){let g=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,u,p):"";{let k="";for(let z=0;z<this.rules.length;z++){const _=this.rules[z];if(typeof _=="string")k+=_;else if(_)if(Td(_)){const C=_(a);typeof C=="string"?k+=C:C!=null&&C!==!1&&(k+=td(Cn(C,a,u,p)))}else k+=td(Cn(_,a,u,p))}if(k){this.dynamicNameCache||(this.dynamicNameCache=new Map);const z=p.hash?p.hash+k:k;let _=this.dynamicNameCache.get(z);if(!_){if(_=Cd(Sn(Sn(this.baseHash,p.hash),k)>>>0),this.dynamicNameCache.size>=200){const C=this.dynamicNameCache.keys().next().value;C!==void 0&&this.dynamicNameCache.delete(C)}this.dynamicNameCache.set(z,_)}if(!u.hasNameForId(this.componentId,_)){const C=p(k,"."+_,void 0,this.componentId);u.insertRules(this.componentId,_,C)}g=Hr(g,_)}}return g}}const rh=/&/g;function Rd(o,a){let u=0;for(;--a>=0&&o.charCodeAt(a)===92;)u++;return!(1&~u)}function bs(o){const a=o.length;let u="",p=0,g=0,k=0,z=!1,_=!1;for(let C=0;C<a;C++){const F=o.charCodeAt(C);if(k!==0||z||F!==kn||o.charCodeAt(C+1)!==42)if(z)F===42&&o.charCodeAt(C+1)===kn&&(z=!1,C++);else if(F!==34&&F!==39||Rd(o,C)){if(k===0)if(F===123)g++;else if(F===125){if(g--,g<0){_=!0;let U=C+1;for(;U<a;){const D=o.charCodeAt(U);if(D===59||D===10)break;U++}U<a&&o.charCodeAt(U)===59&&U++,g=0,C=U-1,p=U;continue}g===0&&(u+=o.substring(p,C+1),p=C+1)}else F===59&&g===0&&(u+=o.substring(p,C+1),p=C+1)}else k===0?k=F:k===F&&(k=0);else z=!0,C++}return _||g!==0||k!==0?(p<a&&g===0&&k===0&&(u+=o.substring(p)),u):o}function Md(o,a){const u=a+" ",p=","+u;for(let g=0;g<o.length;g++){const k=o[g];if(k.type==="rule"){k.value=(u+k.value).replaceAll(",",p);const z=k.props,_=[];for(let C=0;C<z.length;C++)_[C]=u+z[C];k.props=_}Array.isArray(k.children)&&k.type!=="@keyframes"&&Md(k.children,a)}return o}function ih({options:o=er,plugins:a=Hs}=er){let u,p,g;const k=(G,le,X)=>X.startsWith(p)&&X.endsWith(p)&&X.replaceAll(p,"").length>0?`.${u}`:G,z=a.slice();z.push(G=>{G.type===xo&&G.value.includes("&")&&(g||(g=new RegExp(`\\${p}\\b`,"g")),G.props[0]=G.props[0].replace(rh,p).replace(g,k))}),o.prefix&&z.push(xm),z.push(gm);let _=[];const C=ym(z.concat(vm(G=>_.push(G)))),F=(G,le="",X="",Y="&")=>{u=Y,p=le,g=void 0;const J=(function(M){const ge=M.indexOf("//")!==-1,me=M.indexOf("}")!==-1;if(!ge&&!me)return M;if(!ge)return bs(M);const se=M.length;let ne="",W=0,Z=0,Ue=0,$e=0,Pe=0,He=!1;for(;Z<se;){const de=M.charCodeAt(Z);if(de!==34&&de!==39||Rd(M,Z))if(Ue===0)if(de===kn&&Z+1<se&&M.charCodeAt(Z+1)===42){for(Z+=2;Z+1<se&&(M.charCodeAt(Z)!==42||M.charCodeAt(Z+1)!==kn);)Z++;Z+=2}else if(de!==40)if(de!==41)if($e>0)Z++;else if(de===42&&Z+1<se&&M.charCodeAt(Z+1)===kn)ne+=M.substring(W,Z),Z+=2,W=Z,He=!0;else if(de===kn&&Z+1<se&&M.charCodeAt(Z+1)===kn){for(ne+=M.substring(W,Z);Z<se&&M.charCodeAt(Z)!==10;)Z++;W=Z,He=!0}else de===123?Pe++:de===125&&Pe--,Z++;else $e>0&&$e--,Z++;else $e++,Z++;else Z++;else Ue===0?Ue=de:Ue===de&&(Ue=0),Z++}return He?(W<se&&(ne+=M.substring(W)),Pe===0?ne:bs(ne)):Pe===0?M:bs(M)})(G);let ue=mm(X||le?X+" "+le+" { "+J+" }":J);return o.namespace&&(ue=Md(ue,o.namespace)),_=[],ho(ue,C),_},U=o;let D=Rs;for(let G=0;G<a.length;G++)a[G].name||jo(15),D=Sn(D,a[G].name);return U!=null&&U.namespace&&(D=Sn(D,U.namespace)),U!=null&&U.prefix&&(D=Sn(D,"p")),F.hash=D!==Rs?D.toString():"",F}const oh=new Eo,lh=ih(),Ad=at.createContext({shouldForwardProp:void 0,styleSheet:oh,stylis:lh,stylisPlugins:void 0});Ad.Consumer;function sh(){return at.useContext(Ad)}const Fd=at.createContext(void 0);Fd.Consumer;const ld=Object.prototype.hasOwnProperty,Ts={};function ah(o,a){const u=typeof o!="string"?"sc":Sd(o);Ts[u]=(Ts[u]||0)+1;const p=u+"-"+zm(Co+u+Ts[u]);return a?a+"-"+p:p}function uh(o,a,u){const p=zd(o),g=o,k=!Ms(o),{attrs:z=Hs,componentId:_=ah(a.displayName,a.parentComponentId),displayName:C=Lm(o)}=a,F=a.displayName&&a.componentId?Sd(a.displayName)+"-"+a.componentId:a.componentId||_,U=p&&g.attrs?g.attrs.concat(z).filter(Boolean):z;let{shouldForwardProp:D}=a;if(p&&g.shouldForwardProp){const Y=g.shouldForwardProp;if(a.shouldForwardProp){const J=a.shouldForwardProp;D=(ue,M)=>Y(ue,M)&&J(ue,M)}else D=Y}const G=new nh(u,F,p?g.componentStyle:void 0);function le(Y,J){return(function(ue,M,ge){const{attrs:me,componentStyle:se,defaultProps:ne,foldedComponentIds:W,styledComponentId:Z,target:Ue}=ue,$e=at.useContext(Fd),Pe=sh(),He=ue.shouldForwardProp||Pe.shouldForwardProp,de=jm(M,$e,ne)||er;let Le,Ve;{const A=at.useRef(null),P=A.current;if(P!==null&&P[1]===de&&P[2]===Pe.styleSheet&&P[3]===Pe.stylis&&P[7]===se&&(function(h,w,B){const $=h,Q=w;let ee=0;for(const re in Q)if(ld.call(Q,re)&&(ee++,$[re]!==Q[re]))return!1;return ee===B})(P[0],M,P[4]))Le=P[5],Ve=P[6];else{Le=(function(w,B,$){const Q=Object.assign(Object.assign({},B),{className:void 0,theme:$}),ee=w.length>1;for(let re=0;re<w.length;re++){const ie=w[re],fe=No(ie)?ie(ee?Object.assign({},Q):Q):ie;for(const Ne in fe)Ne==="className"?Q.className=Hr(Q.className,fe[Ne]):Ne==="style"?Q.style=Object.assign(Object.assign({},Q.style),fe[Ne]):Ne in B&&B[Ne]===void 0||(Q[Ne]=fe[Ne])}return"className"in B&&typeof B.className=="string"&&(Q.className=Hr(Q.className,B.className)),Q})(me,M,de),Ve=(function(w,B,$,Q){return w.generateAndInjectStyles(B,$,Q)})(se,Le,Pe.styleSheet,Pe.stylis);let h=0;for(const w in M)ld.call(M,w)&&h++;A.current=[M,de,Pe.styleSheet,Pe.stylis,h,Le,Ve,se]}}const Ie=Le.as||Ue,ye=(function(A,P,h,w){const B={};for(const $ in A)A[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&A.theme===h||($==="forwardedAs"?B.as=A.forwardedAs:w&&!w($,P)||(B[$]=A[$]));return B})(Le,Ie,de,He);let L=Hr(W,Z);return Ve&&(L+=" "+Ve),Le.className&&(L+=" "+Le.className),ye[Ms(Ie)&&Ie.includes("-")?"class":"className"]=L,ge&&(ye.ref=ge),fd.createElement(Ie,ye)})(X,Y,J)}le.displayName=C;let X=at.forwardRef(le);return X.attrs=U,X.componentStyle=G,X.displayName=C,X.shouldForwardProp=D,X.foldedComponentIds=p?Hr(g.foldedComponentIds,g.styledComponentId):"",X.styledComponentId=F,X.target=p?g.target:o,Object.defineProperty(X,"defaultProps",{get(){return this._foldedDefaultProps},set(Y){this._foldedDefaultProps=p?(function(J,...ue){for(const M of ue)As(J,M,!0);return J})({},g.defaultProps,Y):Y}}),Pd(X,()=>`.${X.styledComponentId}`),k&&_d(X,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}var ch=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function sd(o,a){const u=[o[0]];for(let p=0,g=a.length;p<g;p+=1)u.push(a[p],o[p+1]);return u}const ad=o=>(bd.add(o),o);function dh(o,...a){if(No(o)||Yr(o))return ad(Cn(sd(Hs,[o,...a])));const u=o;return a.length===0&&u.length===1&&typeof u[0]=="string"?Cn(u):ad(Cn(sd(u,a)))}function Ds(o,a,u=er){if(!a)throw jo(1,a);const p=(g,...k)=>o(a,u,dh(g,...k));return p.attrs=g=>Ds(o,a,Object.assign(Object.assign({},u),{attrs:Array.prototype.concat(u.attrs,g).filter(Boolean)})),p.withConfig=g=>Ds(o,a,Object.assign(Object.assign({},u),g)),p}const Dd=o=>Ds(uh,o),Lt=Dd;ch.forEach(o=>{Lt[o]=Dd(o)});const fh={Wrapper:Lt.div`
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
            max-width: 1440px;
            margin: auto;
        }
    `};var Bd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ud=at.createContext&&at.createContext(Bd),ph=["attr","size","title"];function mh(o,a){if(o==null)return{};var u,p,g=hh(o,a);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(o);for(p=0;p<k.length;p++)u=k[p],a.indexOf(u)===-1&&{}.propertyIsEnumerable.call(o,u)&&(g[u]=o[u])}return g}function hh(o,a){if(o==null)return{};var u={};for(var p in o)if({}.hasOwnProperty.call(o,p)){if(a.indexOf(p)!==-1)continue;u[p]=o[p]}return u}function yo(){return yo=Object.assign?Object.assign.bind():function(o){for(var a=1;a<arguments.length;a++){var u=arguments[a];for(var p in u)({}).hasOwnProperty.call(u,p)&&(o[p]=u[p])}return o},yo.apply(null,arguments)}function cd(o,a){var u=Object.keys(o);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(o);a&&(p=p.filter(function(g){return Object.getOwnPropertyDescriptor(o,g).enumerable})),u.push.apply(u,p)}return u}function vo(o){for(var a=1;a<arguments.length;a++){var u=arguments[a]!=null?arguments[a]:{};a%2?cd(Object(u),!0).forEach(function(p){gh(o,p,u[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(u)):cd(Object(u)).forEach(function(p){Object.defineProperty(o,p,Object.getOwnPropertyDescriptor(u,p))})}return o}function gh(o,a,u){return(a=yh(a))in o?Object.defineProperty(o,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[a]=u,o}function yh(o){var a=vh(o,"string");return typeof a=="symbol"?a:a+""}function vh(o,a){if(typeof o!="object"||!o)return o;var u=o[Symbol.toPrimitive];if(u!==void 0){var p=u.call(o,a);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(o)}function Wd(o){return o&&o.map((a,u)=>at.createElement(a.tag,vo({key:u},a.attr),Wd(a.child)))}function he(o){return a=>at.createElement(xh,yo({attr:vo({},o.attr)},a),Wd(o.child))}function xh(o){var a=u=>{var{attr:p,size:g,title:k}=o,z=mh(o,ph),_=g||u.size||"1em",C;return u.className&&(C=u.className),o.className&&(C=(C?C+" ":"")+o.className),at.createElement("svg",yo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,p,z,{className:C,style:vo(vo({color:o.color||u.color},u.style),o.style),height:_,width:_,xmlns:"http://www.w3.org/2000/svg"}),k&&at.createElement("title",null,k),o.children)};return ud!==void 0?at.createElement(ud.Consumer,null,u=>a(u)):a(Bd)}function Ud(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(o)}function wh(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"},child:[]},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"},child:[]}]})(o)}function kh(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(o)}function Sh(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(o)}function Ch(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(o)}function jh(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(o)}function $d(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(o)}function Kr(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(o)}function Nh(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(o)}function Eh(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(o)}function Hd(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(o)}function _o(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(o)}function _h(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"},child:[]},{tag:"line",attr:{x1:"16",y1:"8",x2:"2",y2:"22"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"15",x2:"9",y2:"15"},child:[]}]})(o)}function zh(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(o)}function Vd(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(o)}function zo(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(o)}function Ph(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(o)}function Lh(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"},child:[]},{tag:"line",attr:{x1:"12",y1:"22",x2:"12",y2:"15.5"},child:[]},{tag:"polyline",attr:{points:"22 8.5 12 15.5 2 8.5"},child:[]},{tag:"polyline",attr:{points:"2 15.5 12 8.5 22 15.5"},child:[]},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"8.5"},child:[]}]})(o)}function Xr(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(o)}function dd(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(o)}function bh(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(o)}function Gd(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function Th(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(o)}function Vs(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(o)}function Ih(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"polyline",attr:{points:"19 12 12 19 5 12"},child:[]}]})(o)}function Oh(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"7",x2:"17",y2:"17"},child:[]},{tag:"polyline",attr:{points:"17 7 17 17 7 17"},child:[]}]})(o)}function Qd(o){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(o)}const Rh={Wrapper:Lt.header`
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
            gap: 0.65rem;
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
                border-color 0.3s ease,
                transform 0.3s ease;
        }

        .githubIcon {
            font-size: 1rem;
        }

        .externalIcon {
            font-size: 0.9rem;
            transition: transform 0.25s ease;
        }

        .githubLink:hover {
            background: #f4f4f4;
            color: #050509;
            border-color: #f4f4f4;
            transform: translateY(-2px);
        }

        .githubLink:hover .externalIcon {
            transform: translate(2px, -2px);
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
    `};function Mh(){return c.jsxs(Rh.Wrapper,{children:[c.jsxs("a",{className:"brand",href:"#home","aria-label":"test-app home",children:[c.jsx("span",{className:"brandMark",children:"a2rp"}),c.jsx("span",{className:"brandLabel",children:"TEST APP"})]}),c.jsxs("nav",{className:"nav","aria-label":"Main navigation",children:[c.jsx("a",{href:"#experiments",children:"Experiments"}),c.jsx("a",{href:"#stack",children:"Stack"}),c.jsx("a",{href:"#process",children:"Process"}),c.jsx("a",{href:"#about",children:"About"})]}),c.jsxs("a",{className:"githubLink",href:"https://github.com/a2rp/test-app",target:"_blank",rel:"noreferrer","aria-label":"Open test-app repository on GitHub",children:[c.jsx(_o,{className:"githubIcon"}),c.jsx("span",{children:"GitHub"}),c.jsx(Vs,{className:"externalIcon"})]})]})}const Ah={Wrapper:Lt.section`
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

        .label {
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

        .primaryCta svg {
            flex: 0 0 auto;
            font-size: 1rem;
            transition: transform 0.25s ease;
        }

        .primaryCta:hover svg {
            transform: translate(3px, 3px);
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

        .panelTitle {
            display: inline-flex;
            align-items: center;
            gap: 0.55rem;
        }

        .panelTitle svg {
            font-size: 0.85rem;
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

        .terminalIcon {
            flex: 0 0 auto;
            margin-top: 1px;
            color: #888892;
            font-size: 0.85rem;
        }

        .terminalLine:first-child .terminalIcon {
            color: #f4f4f4;
        }

        .terminalLine.success .terminalIcon {
            color: #b9b9c1;
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

        .scrollIndicator svg {
            font-size: 0.9rem;
            transition: transform 0.25s ease;
        }

        .scrollIndicator:hover svg {
            transform: translateY(4px);
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
    `};function Fh(){return c.jsxs(Ah.Wrapper,{id:"home",children:[c.jsx("div",{className:"gridOverlay"}),c.jsx("div",{className:"glow glowOne"}),c.jsx("div",{className:"glow glowTwo"}),c.jsxs("div",{className:"heroContent",children:[c.jsxs("div",{className:"label",children:[c.jsx("span",{className:"statusDot"}),"Experimental technology playground"]}),c.jsxs("h1",{children:["BUILD.",c.jsx("span",{children:"BREAK."}),"LEARN.",c.jsx("span",{children:"REPEAT."})]}),c.jsxs("div",{className:"heroBottom",children:[c.jsx("p",{children:"test-app is a digital playground for experiments in code, interfaces, AI, creative technology and emerging web ideas."}),c.jsxs("a",{className:"primaryCta",href:"#experiments",children:[c.jsx("span",{children:"Explore experiments"}),c.jsx(Oh,{})]})]})]}),c.jsxs("div",{className:"labPanel",children:[c.jsxs("div",{className:"panelHeader",children:[c.jsxs("div",{className:"panelDots",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]}),c.jsxs("div",{className:"panelTitle",children:[c.jsx(kh,{}),c.jsx("span",{children:"TEST_APP_STATUS.exe"})]})]}),c.jsxs("div",{className:"panelBody",children:[c.jsxs("div",{className:"terminalLine",children:[c.jsx(Xr,{className:"terminalIcon"}),c.jsx("span",{children:"initialize test-app"})]}),c.jsxs("div",{className:"terminalLine dim",children:[c.jsx(dd,{className:"terminalIcon"}),c.jsx("span",{children:"loading experiments..."})]}),c.jsxs("div",{className:"terminalLine dim",children:[c.jsx(dd,{className:"terminalIcon"}),c.jsx("span",{children:"connecting creative systems..."})]}),c.jsxs("div",{className:"terminalLine success",children:[c.jsx(bh,{className:"terminalIcon"}),c.jsx("span",{children:"system online"})]}),c.jsxs("div",{className:"systemGrid",children:[c.jsxs("div",{className:"systemItem",children:[c.jsx("span",{children:"Status"}),c.jsx("strong",{children:"ONLINE"})]}),c.jsxs("div",{className:"systemItem",children:[c.jsx("span",{children:"Mode"}),c.jsx("strong",{children:"EXPERIMENTAL"})]}),c.jsxs("div",{className:"systemItem",children:[c.jsx("span",{children:"Build"}),c.jsx("strong",{children:"2026.08"})]}),c.jsxs("div",{className:"systemItem",children:[c.jsx("span",{children:"Environment"}),c.jsx("strong",{children:"PUBLIC"})]})]}),c.jsxs("div",{className:"signal",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})]})]}),c.jsxs("div",{className:"heroMeta",children:[c.jsx("span",{children:"Creative Coding"}),c.jsx("span",{children:"Interfaces"}),c.jsx("span",{children:"AI"}),c.jsx("span",{children:"Experiments"})]}),c.jsxs("a",{className:"scrollIndicator",href:"#experiments",children:[c.jsx("span",{children:"Scroll to explore"}),c.jsx(Ih,{})]})]})}const Dh={Wrapper:Lt.section`
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
            z-index: 1;
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

        .visualImage {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.12;
            filter: grayscale(1) contrast(1.15) brightness(0.6);
            transform: scale(1.02);
            transition:
                transform 0.8s ease,
                opacity 0.6s ease,
                filter 0.6s ease;
        }

        .visualImageOverlay {
            position: absolute;
            inset: 0;
            z-index: 1;
            background:
                linear-gradient(
                    180deg,
                    rgba(7, 7, 11, 0.2),
                    rgba(7, 7, 11, 0.72)
                ),
                radial-gradient(
                    circle at center,
                    rgba(7, 7, 11, 0.05),
                    rgba(7, 7, 11, 0.75)
                );
        }

        .experimentCard:hover .visualImage {
            opacity: 0.2;
            filter: grayscale(0.65) contrast(1.15) brightness(0.72);
            transform: scale(1.08);
        }

        .visualIcon {
            position: absolute;
            top: 56px;
            right: 24px;
            z-index: 5;
            width: 42px;
            height: 42px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 50%;
            background: rgba(5, 5, 9, 0.55);
            backdrop-filter: blur(12px);
            color: #777782;
            font-size: 1rem;
            transition:
                color 0.3s ease,
                background 0.3s ease,
                transform 0.3s ease;
        }

        .experimentCard:hover .visualIcon {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
            transform: rotate(-8deg) scale(1.08);
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
            font-size: 1.05rem;
            transition:
                background 0.3s ease,
                color 0.3s ease,
                transform 0.3s ease;
        }

        .experimentCard:hover .cardArrow {
            background: #f4f4f4;
            color: #050509;
            transform: translateY(-2px);
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
    `},Bh=[{id:"EXP-001",title:"Adaptive Interface",category:"Interface System",status:"ACTIVE",description:"A responsive interaction study exploring modular layouts, adaptive states and interface behavior.",tags:["React","UI","Responsive"],visual:"interface",image:"https://picsum.photos/seed/test-app-interface/1200/900",icon:Kr},{id:"EXP-002",title:"Neural Signal",category:"AI Concept",status:"RESEARCH",description:"A visual experiment inspired by neural networks, signal processing and machine-assisted interfaces.",tags:["AI","Data","Motion"],visual:"signal",image:"https://picsum.photos/seed/test-app-neural/1200/900",icon:Qd},{id:"EXP-003",title:"Spatial Grid",category:"Creative Coding",status:"ACTIVE",description:"An evolving grid system designed around depth, motion, geometry and procedural visual structures.",tags:["Creative Code","Geometry","Web"],visual:"grid",image:"https://picsum.photos/seed/test-app-spatial/1200/900",icon:Eh},{id:"EXP-004",title:"System Core",category:"Prototype",status:"PROTOTYPE",description:"A technical interface concept focused on system monitoring, status visualization and control surfaces.",tags:["Prototype","System UI","Data"],visual:"core",image:"https://picsum.photos/seed/test-app-system/1200/900",icon:zo}];function Wh({type:o}){return o==="interface"?c.jsxs("div",{className:"interfaceVisual",children:[c.jsxs("div",{className:"interfaceTop",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]}),c.jsxs("div",{className:"interfaceBody",children:[c.jsx("div",{className:"interfaceSide"}),c.jsxs("div",{className:"interfaceMain",children:[c.jsx("span",{className:"interfaceTitle"}),c.jsx("span",{className:"interfaceLine"}),c.jsx("span",{className:"interfaceLine short"}),c.jsxs("div",{className:"interfaceCards",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})]})]})]}):o==="signal"?c.jsxs("div",{className:"signalVisual",children:[c.jsx("div",{className:"signalOrbit orbitOne"}),c.jsx("div",{className:"signalOrbit orbitTwo"}),c.jsx("div",{className:"signalOrbit orbitThree"}),c.jsx("div",{className:"signalCore"}),c.jsx("span",{className:"node nodeOne"}),c.jsx("span",{className:"node nodeTwo"}),c.jsx("span",{className:"node nodeThree"}),c.jsx("span",{className:"node nodeFour"})]}):o==="grid"?c.jsxs("div",{className:"spatialVisual",children:[c.jsx("div",{className:"spatialCube cubeOne"}),c.jsx("div",{className:"spatialCube cubeTwo"}),c.jsx("div",{className:"spatialCube cubeThree"}),c.jsx("div",{className:"spatialCube cubeFour"}),c.jsx("div",{className:"spatialCube cubeFive"})]}):c.jsxs("div",{className:"coreVisual",children:[c.jsx("div",{className:"coreRing ringOuter"}),c.jsx("div",{className:"coreRing ringMiddle"}),c.jsx("div",{className:"coreRing ringInner"}),c.jsx("div",{className:"systemCore",children:c.jsx(zo,{})})]})}function Uh(){return c.jsxs(Dh.Wrapper,{id:"experiments",children:[c.jsxs("div",{className:"sectionHeader",children:[c.jsxs("div",{children:[c.jsx("span",{className:"sectionIndex",children:"01 / EXPERIMENTS"}),c.jsxs("h2",{children:["Ideas under",c.jsx("span",{children:"active development."})]})]}),c.jsx("p",{children:"A collection of interface studies, prototypes and creative technology experiments built to test ideas before they become products."})]}),c.jsx("div",{className:"experimentGrid",children:Bh.map(o=>{const a=o.icon;return c.jsxs("article",{className:"experimentCard",children:[c.jsxs("div",{className:"visualArea",children:[c.jsx("img",{className:"visualImage",src:o.image,alt:"",loading:"lazy"}),c.jsx("div",{className:"visualImageOverlay"}),c.jsxs("div",{className:"visualMeta",children:[c.jsx("span",{children:o.id}),c.jsxs("span",{className:"status",children:[c.jsx("span",{className:"statusDot"}),o.status]})]}),c.jsx("div",{className:"visualIcon",children:c.jsx(a,{})}),c.jsx(Wh,{type:o.visual}),c.jsx("span",{className:"categoryBadge",children:o.category})]}),c.jsxs("div",{className:"cardContent",children:[c.jsxs("div",{className:"cardHeading",children:[c.jsx("h3",{children:o.title}),c.jsx("span",{className:"cardArrow",children:c.jsx(Vs,{})})]}),c.jsx("p",{children:o.description}),c.jsx("div",{className:"tags",children:o.tags.map(u=>c.jsx("span",{children:u},u))})]})]},o.id)})})]})}const $h={Wrapper:Lt.section`
        position: relative;
        padding: 140px 4vw;
        background: #050509;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .sectionHeader {
            display: grid;
            grid-template-columns: 0.95fr 1.05fr;
            gap: 5rem;
            align-items: end;
            margin-bottom: 80px;
        }

        .sectionLabel {
            display: inline-flex;
            align-items: center;
            margin-bottom: 1.4rem;
            color: #777782;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
        }

        .sectionHeader h2 {
            max-width: 850px;
            color: #e3e3e7;
            font-size: clamp(3.5rem, 6vw, 6.8rem);
            font-weight: 600;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .sectionHeader h2 span {
            display: block;
            color: #555560;
            font-weight: 400;
        }

        .sectionHeader > p {
            max-width: 520px;
            justify-self: end;
            color: #74747d;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .stackGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .stackCard {
            position: relative;
            min-height: 330px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            border-right: 1px solid rgba(255, 255, 255, 0.09);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            background: rgba(255, 255, 255, 0.008);
            transition:
                background 0.35s ease,
                transform 0.35s ease;
        }

        .stackCard::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: radial-gradient(
                circle at top right,
                rgba(255, 255, 255, 0.07),
                transparent 42%
            );
            opacity: 0;
            transition: opacity 0.35s ease;
        }

        .stackCard::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background: #d7d7dc;
            transition: width 0.4s ease;
        }

        .stackCard:hover {
            background: rgba(255, 255, 255, 0.025);
            transform: translateY(-4px);
        }

        .stackCard:hover::before {
            opacity: 1;
        }

        .stackCard:hover::after {
            width: 100%;
        }

        .cardTop {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .cardIndex {
            color: #4b4b54;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.17em;
        }

        .stackIcon {
            width: 44px;
            height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 50%;
            color: #85858f;
            background: rgba(255, 255, 255, 0.025);
            font-size: 1rem;
            transition:
                color 0.3s ease,
                background 0.3s ease,
                border-color 0.3s ease,
                transform 0.3s ease;
        }

        .stackCard:hover .stackIcon {
            color: #050509;
            background: #f4f4f4;
            border-color: #f4f4f4;
            transform: rotate(-8deg) scale(1.06);
        }

        .cardContent {
            position: relative;
            z-index: 1;
        }

        .category {
            display: block;
            margin-bottom: 0.9rem;
            color: #555560;
            font-size: 0.6rem;
            font-weight: 700;
            letter-spacing: 0.15em;
            text-transform: uppercase;
        }

        .cardContent h3 {
            margin-bottom: 1.1rem;
            color: #d7d7dc;
            font-size: clamp(1.8rem, 2.5vw, 2.7rem);
            font-weight: 500;
            line-height: 1;
            letter-spacing: -0.045em;
        }

        .cardContent p {
            max-width: 330px;
            color: #696972;
            font-size: 0.84rem;
            line-height: 1.8;
        }

        @media (max-width: 1050px) {
            .stackGrid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .stackCard {
                min-height: 300px;
            }
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 2rem;
                margin-bottom: 60px;
            }

            .sectionHeader > p {
                justify-self: start;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .sectionHeader h2 {
                font-size: clamp(3rem, 14vw, 4.8rem);
            }

            .stackGrid {
                grid-template-columns: 1fr;
            }

            .stackCard {
                min-height: 260px;
                padding: 26px;
            }

            .cardContent p {
                max-width: none;
            }
        }
    `},Hh=[{title:"React",category:"Interface",text:"Component-driven UI architecture for building reusable and interactive frontend systems.",icon:Kr},{title:"Vite",category:"Tooling",text:"Fast development tooling with optimized builds and a lightweight modern workflow.",icon:Ud},{title:"Styled Components",category:"Styling",text:"Scoped component styling for modular design systems and flexible interface experiments.",icon:_h},{title:"React Icons",category:"Visual UI",text:"Consistent vector icons used throughout the interface for clear visual communication.",icon:Gd},{title:"JavaScript",category:"Logic",text:"Modern JavaScript powering interactions, data flow, animation logic and experimental behavior.",icon:Xr},{title:"Creative Systems",category:"Experiments",text:"A flexible layer for prototyping unconventional interfaces, motion and emerging web concepts.",icon:zo}];function Vh(){return c.jsxs($h.Wrapper,{id:"stack",children:[c.jsxs("div",{className:"sectionHeader",children:[c.jsxs("div",{children:[c.jsx("span",{className:"sectionLabel",children:"04 / STACK"}),c.jsxs("h2",{children:["Tools behind",c.jsx("span",{children:"the experiments."})]})]}),c.jsx("p",{children:"A focused frontend stack chosen for speed, modularity, experimentation and clean interface development."})]}),c.jsx("div",{className:"stackGrid",children:Hh.map((o,a)=>{const u=o.icon;return c.jsxs("article",{className:"stackCard",children:[c.jsxs("div",{className:"cardTop",children:[c.jsx("span",{className:"cardIndex",children:String(a+1).padStart(2,"0")}),c.jsx("span",{className:"stackIcon",children:c.jsx(u,{})})]}),c.jsxs("div",{className:"cardContent",children:[c.jsx("span",{className:"category",children:o.category}),c.jsx("h3",{children:o.title}),c.jsx("p",{children:o.text})]})]},o.title)})})]})}const Gh={Wrapper:Lt.section`
        position: relative;
        padding: 140px 4vw;
        background: #07070b;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .sectionHeader {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 5rem;
            align-items: end;
            margin-bottom: 80px;
        }

        .sectionHeader > div {
            min-width: 0;
        }

        .sectionLabel {
            display: inline-flex;
            align-items: center;
            margin-bottom: 1.4rem;
            color: #777782;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
        }

        .sectionHeader h2 {
            max-width: 850px;
            color: #e3e3e7;
            font-size: clamp(3.5rem, 6vw, 6.8rem);
            font-weight: 600;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .sectionHeader h2 span {
            display: block;
            color: #555560;
            font-weight: 400;
        }

        .sectionHeader > p {
            max-width: 520px;
            justify-self: end;
            color: #74747d;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .processGrid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .processCard {
            position: relative;
            min-height: 360px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            border-right: 1px solid rgba(255, 255, 255, 0.09);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            background: rgba(255, 255, 255, 0.008);
            transition:
                background 0.35s ease,
                transform 0.35s ease;
        }

        .processCard::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: radial-gradient(
                circle at top right,
                rgba(255, 255, 255, 0.07),
                transparent 42%
            );
            opacity: 0;
            transition: opacity 0.35s ease;
        }

        .processCard::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background: #d7d7dc;
            transition: width 0.4s ease;
        }

        .processCard:hover {
            background: rgba(255, 255, 255, 0.025);
            transform: translateY(-4px);
        }

        .processCard:hover::before {
            opacity: 1;
        }

        .processCard:hover::after {
            width: 100%;
        }

        .cardTop {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .stepNumber {
            color: #4b4b54;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.17em;
        }

        .stepIcon {
            width: 44px;
            height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 50%;
            color: #85858f;
            background: rgba(255, 255, 255, 0.025);
            font-size: 1rem;
            transition:
                color 0.3s ease,
                background 0.3s ease,
                border-color 0.3s ease,
                transform 0.3s ease;
        }

        .processCard:hover .stepIcon {
            color: #050509;
            background: #f4f4f4;
            border-color: #f4f4f4;
            transform: rotate(-8deg) scale(1.06);
        }

        .cardContent {
            position: relative;
            z-index: 1;
        }

        .cardContent h3 {
            margin-bottom: 1.1rem;
            color: #d7d7dc;
            font-size: clamp(1.8rem, 2.6vw, 2.8rem);
            font-weight: 500;
            line-height: 1;
            letter-spacing: -0.045em;
        }

        .cardContent p {
            max-width: 320px;
            color: #696972;
            font-size: 0.84rem;
            line-height: 1.8;
        }

        @media (max-width: 1050px) {
            .processGrid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .processCard {
                min-height: 310px;
            }
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 2rem;
                margin-bottom: 60px;
            }

            .sectionHeader > p {
                justify-self: start;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .sectionHeader h2 {
                font-size: clamp(3rem, 14vw, 4.8rem);
            }

            .processGrid {
                grid-template-columns: 1fr;
            }

            .processCard {
                min-height: 260px;
                padding: 26px;
            }

            .cardContent p {
                max-width: none;
            }
        }
    `},Qh=[{number:"01",title:"Explore",text:"Study an idea, interface pattern or technical direction worth experimenting with.",icon:Sh},{number:"02",title:"Prototype",text:"Turn the concept into a focused prototype with clear interaction and visual intent.",icon:Gd},{number:"03",title:"Build",text:"Develop the experiment using modern frontend tools, reusable structure and clean code.",icon:Xr},{number:"04",title:"Refine",text:"Improve the system through testing, iteration, polish and lessons learned from the build.",icon:Kr}];function Yh(){return c.jsxs(Gh.Wrapper,{id:"process",children:[c.jsxs("div",{className:"sectionHeader",children:[c.jsxs("div",{children:[c.jsx("span",{className:"sectionLabel",children:"03 / PROCESS"}),c.jsxs("h2",{children:["From idea to",c.jsx("span",{children:"working experiment."})]})]}),c.jsx("p",{children:"A simple workflow designed for fast exploration, practical learning and continuous refinement."})]}),c.jsx("div",{className:"processGrid",children:Qh.map(o=>{const a=o.icon;return c.jsxs("article",{className:"processCard",children:[c.jsxs("div",{className:"cardTop",children:[c.jsx("span",{className:"stepNumber",children:o.number}),c.jsx("span",{className:"stepIcon",children:c.jsx(a,{})})]}),c.jsxs("div",{className:"cardContent",children:[c.jsx("h3",{children:o.title}),c.jsx("p",{children:o.text})]})]},o.number)})})]})}const Kh={Wrapper:Lt.section`
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
    `},Xh=[{value:"04",label:"Active Experiments",text:"Interface studies and prototypes currently being explored.",icon:Qd},{value:"06+",label:"Core Technologies",text:"A flexible stack for rapid frontend experimentation.",icon:zo},{value:"100%",label:"Built to Explore",text:"Every concept exists to test, learn and evolve.",icon:Ud},{value:"∞",label:"Ideas Ahead",text:"A continuously evolving space for future experiments.",icon:Kr}];function Zh(){return c.jsxs(Kh.Wrapper,{children:[c.jsxs("div",{className:"sectionHeader",children:[c.jsx("span",{className:"sectionLabel",children:"02 / SYSTEM METRICS"}),c.jsx("p",{children:"A quick snapshot of the ideas, technologies and experimental systems running inside test-app."})]}),c.jsx("div",{className:"metricsGrid",children:Xh.map(o=>{const a=o.icon;return c.jsxs("article",{className:"metricCard",children:[c.jsxs("div",{className:"metricTop",children:[c.jsx("span",{className:"metricIcon",children:c.jsx(a,{})}),c.jsx("span",{className:"metricSignal",children:"LIVE"})]}),c.jsx("strong",{className:"metricValue",children:o.value}),c.jsx("span",{className:"metricLabel",children:o.label}),c.jsx("p",{children:o.text})]},o.label)})})]})}const Jh={Wrapper:Lt.section`
        position: relative;
        padding: 140px 4vw;
        background: #07070b;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .sectionHeader {
            display: grid;
            grid-template-columns: 0.55fr 1.45fr;
            gap: 5rem;
            align-items: start;
            margin-bottom: 80px;
        }

        .sectionLabel {
            color: #777782;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
        }

        .sectionHeader > p {
            max-width: 520px;
            color: #74747d;
            font-size: 0.9rem;
            line-height: 1.85;
        }

        .aboutGrid {
            display: grid;
            grid-template-columns: minmax(320px, 0.85fr) minmax(0, 1.15fr);
            gap: clamp(3rem, 7vw, 8rem);
            align-items: center;
        }

        .visualColumn {
            min-width: 0;
        }

        .imageWrapper {
            position: relative;
            min-height: 620px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: #0b0b10;
        }

        .imageWrapper img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(1) contrast(1.05) brightness(0.58);
            transform: scale(1.01);
            transition:
                transform 0.9s ease,
                filter 0.6s ease;
        }

        .imageWrapper:hover img {
            transform: scale(1.06);
            filter: grayscale(0.65) contrast(1.05) brightness(0.68);
        }

        .imageOverlay {
            position: absolute;
            inset: 0;
            background:
                linear-gradient(
                    180deg,
                    rgba(5, 5, 9, 0.04),
                    rgba(5, 5, 9, 0.72)
                ),
                radial-gradient(
                    circle at top right,
                    rgba(255, 255, 255, 0.1),
                    transparent 42%
                );
        }

        .imageLabel {
            position: absolute;
            left: 24px;
            right: 24px;
            bottom: 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }

        .imageLabel span,
        .imageLabel strong {
            font-size: 0.58rem;
            letter-spacing: 0.16em;
            font-weight: 600;
        }

        .imageLabel span {
            color: #a1a1a9;
        }

        .imageLabel strong {
            color: #d6d6dc;
        }

        .imageCorner {
            position: absolute;
            top: 24px;
            right: 24px;
            width: 46px;
            height: 46px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 50%;
            color: #b2b2ba;
            background: rgba(5, 5, 9, 0.45);
            backdrop-filter: blur(12px);
            font-size: 1rem;
        }

        .contentColumn {
            max-width: 760px;
        }

        .smallLabel {
            display: block;
            margin-bottom: 1.5rem;
            color: #5d5d66;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.17em;
        }

        .contentColumn h2 {
            margin: 0;
            color: #e2e2e7;
            font-size: clamp(4rem, 7vw, 8rem);
            font-weight: 600;
            line-height: 0.88;
            letter-spacing: -0.07em;
        }

        .contentColumn h2 span {
            display: block;
            color: #555560;
            font-weight: 400;
        }

        .intro {
            max-width: 680px;
            margin-top: 2.5rem;
            color: #b0b0b8;
            font-size: clamp(1.05rem, 1.4vw, 1.25rem);
            line-height: 1.75;
        }

        .description {
            max-width: 650px;
            margin-top: 1.5rem;
            color: #707079;
            font-size: 0.9rem;
            line-height: 1.9;
        }

        .highlights {
            margin-top: 3rem;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .highlightItem {
            min-width: 0;
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 14px;
            border-right: 1px solid rgba(255, 255, 255, 0.09);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
        }

        .highlightIcon {
            width: 36px;
            height: 36px;
            flex: 0 0 36px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: #85858f;
            font-size: 0.85rem;
        }

        .highlightItem div {
            min-width: 0;
        }

        .highlightItem div span {
            display: block;
            margin-bottom: 5px;
            color: #53535c;
            font-size: 0.54rem;
            letter-spacing: 0.13em;
            text-transform: uppercase;
        }

        .highlightItem div strong {
            display: block;
            overflow: hidden;
            color: #b7b7be;
            font-size: 0.74rem;
            font-weight: 500;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .actions {
            margin-top: 2.2rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .primaryLink {
            min-height: 48px;
            padding: 0 18px;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: 1px solid #e1e1e5;
            border-radius: 999px;
            color: #050509;
            background: #e1e1e5;
            font-size: 0.66rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            transition:
                transform 0.25s ease,
                background 0.25s ease;
        }

        .primaryLink svg:last-child {
            transition: transform 0.25s ease;
        }

        .primaryLink:hover {
            background: #ffffff;
            transform: translateY(-2px);
        }

        .primaryLink:hover svg:last-child {
            transform: translate(2px, -2px);
        }

        .iconLink {
            width: 48px;
            height: 48px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 50%;
            color: #888892;
            background: rgba(255, 255, 255, 0.02);
            font-size: 1rem;
            transition:
                color 0.25s ease,
                background 0.25s ease,
                transform 0.25s ease;
        }

        .iconLink:hover {
            color: #050509;
            background: #f4f4f4;
            transform: translateY(-2px);
        }

        @media (max-width: 1000px) {
            .aboutGrid {
                grid-template-columns: 1fr;
            }

            .imageWrapper {
                min-height: 520px;
            }

            .contentColumn {
                max-width: none;
            }
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 1.5rem;
                margin-bottom: 60px;
            }
        }

        @media (max-width: 650px) {
            .highlights {
                grid-template-columns: 1fr;
            }

            .highlightItem div strong {
                white-space: normal;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .imageWrapper {
                min-height: 430px;
            }

            .contentColumn h2 {
                font-size: clamp(3.8rem, 18vw, 6rem);
            }

            .actions {
                flex-wrap: wrap;
            }
        }
    `},qh=[{label:"Focus",value:"Frontend Systems",icon:Kr},{label:"Approach",value:"Build & Experiment",icon:Xr},{label:"Location",value:"Bengaluru, India",icon:Ch}];function e0(){return c.jsxs(Jh.Wrapper,{id:"about",children:[c.jsxs("div",{className:"sectionHeader",children:[c.jsx("span",{className:"sectionLabel",children:"05 / ABOUT"}),c.jsx("p",{children:"The person behind the experiments, interfaces and ideas explored throughout test-app."})]}),c.jsxs("div",{className:"aboutGrid",children:[c.jsx("div",{className:"visualColumn",children:c.jsxs("div",{className:"imageWrapper",children:[c.jsx("img",{src:"https://picsum.photos/seed/test-app-about/1000/1200",alt:"Abstract creative workspace",loading:"lazy"}),c.jsx("div",{className:"imageOverlay"}),c.jsxs("div",{className:"imageLabel",children:[c.jsx("span",{children:"CREATIVE SYSTEM"}),c.jsx("strong",{children:"2026"})]}),c.jsx("div",{className:"imageCorner",children:c.jsx(Xr,{})})]})}),c.jsxs("div",{className:"contentColumn",children:[c.jsx("span",{className:"smallLabel",children:"CREATOR / DEVELOPER"}),c.jsxs("h2",{children:["Ashish",c.jsx("span",{children:"Ranjan."})]}),c.jsx("p",{className:"intro",children:"Full-stack web developer focused on building modern interfaces, reusable frontend systems and practical web experiments."}),c.jsx("p",{className:"description",children:"test-app is a space for exploring ideas without the constraints of a traditional product. It is used to prototype interfaces, test creative concepts, learn new techniques and turn experiments into working experiences."}),c.jsx("div",{className:"highlights",children:qh.map(o=>{const a=o.icon;return c.jsxs("div",{className:"highlightItem",children:[c.jsx("span",{className:"highlightIcon",children:c.jsx(a,{})}),c.jsxs("div",{children:[c.jsx("span",{children:o.label}),c.jsx("strong",{children:o.value})]})]},o.label)})}),c.jsxs("div",{className:"actions",children:[c.jsxs("a",{className:"primaryLink",href:"https://www.ashishranjan.net",target:"_blank",rel:"noreferrer",children:[c.jsx(Hd,{}),c.jsx("span",{children:"Portfolio"}),c.jsx(Vs,{})]}),c.jsx("a",{className:"iconLink",href:"https://github.com/a2rp",target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:c.jsx(_o,{})}),c.jsx("a",{className:"iconLink",href:"https://www.linkedin.com/in/aashishranjan",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:c.jsx($d,{})})]})]})]})]})}const t0={Wrapper:Lt.footer`
        position: relative;
        padding: 90px 4vw 30px;
        overflow: hidden;
        background: #050509;
        border-top: 1px solid rgba(255, 255, 255, 0.08);

        &::before {
            content: "";
            position: absolute;
            top: -220px;
            left: 50%;
            width: 700px;
            height: 420px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.035);
            filter: blur(110px);
            transform: translateX(-50%);
            pointer-events: none;
        }

        .footerMain {
            position: relative;
            z-index: 1;
            display: grid;
            grid-template-columns: minmax(280px, 0.8fr) minmax(0, 1.2fr);
            gap: clamp(4rem, 9vw, 10rem);
            padding-bottom: 80px;
        }

        .brandColumn {
            max-width: 520px;
        }

        .brand {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            gap: 14px;
        }

        .brandMark {
            width: 48px;
            height: 48px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 50%;
            color: #050509;
            background: #e1e1e5;
            font-size: 0.7rem;
            font-weight: 800;
            letter-spacing: -0.03em;
        }

        .brandName {
            color: #d6d6dc;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.18em;
        }

        .brandColumn > p {
            max-width: 460px;
            margin-top: 2rem;
            color: #696972;
            font-size: 0.9rem;
            line-height: 1.9;
        }

        .repositoryLink {
            width: fit-content;
            min-height: 46px;
            margin-top: 2rem;
            padding: 0 16px;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 999px;
            color: #8c8c95;
            background: rgba(255, 255, 255, 0.02);
            font-size: 0.64rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            transition:
                color 0.25s ease,
                background 0.25s ease,
                border-color 0.25s ease,
                transform 0.25s ease;
        }

        .repositoryLink svg:last-child {
            transition: transform 0.25s ease;
        }

        .repositoryLink:hover {
            color: #050509;
            background: #f4f4f4;
            border-color: #f4f4f4;
            transform: translateY(-2px);
        }

        .repositoryLink:hover svg:last-child {
            transform: translate(2px, -2px);
        }

        .linksColumn {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 3rem;
        }

        .linkGroup {
            min-width: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
        }

        .groupLabel {
            margin-bottom: 10px;
            color: #4f4f58;
            font-size: 0.58rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
        }

        .linkGroup a {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            color: #85858e;
            font-size: 0.78rem;
            line-height: 1.4;
            transition:
                color 0.25s ease,
                transform 0.25s ease;
        }

        .linkGroup a svg {
            flex: 0 0 auto;
            color: #55555e;
            font-size: 0.9rem;
            transition: color 0.25s ease;
        }

        .linkGroup a:hover {
            color: #f0f0f2;
            transform: translateX(4px);
        }

        .linkGroup a:hover svg {
            color: #d7d7dc;
        }

        .footerBottom {
            position: relative;
            z-index: 1;
            min-height: 72px;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 2rem;
            align-items: center;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .copyright {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            color: #4f4f58;
            font-size: 0.6rem;
            letter-spacing: 0.08em;
        }

        .copyright a {
            color: #8d8d96;
            transition: color 0.25s ease;
        }

        .copyright a:hover {
            color: #f4f4f4;
        }

        .separator {
            color: #34343c;
        }

        .status {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #595962;
            font-size: 0.58rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        .statusDot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #8e8e96;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.24);
            animation: statusPulse 2s ease-in-out infinite;
        }

        .backToTop {
            justify-self: end;
            display: inline-flex;
            align-items: center;
            gap: 9px;
            color: #62626b;
            font-size: 0.6rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            transition:
                color 0.25s ease,
                transform 0.25s ease;
        }

        .backToTop svg {
            transition: transform 0.25s ease;
        }

        .backToTop:hover {
            color: #f4f4f4;
        }

        .backToTop:hover svg {
            transform: translateY(-4px);
        }

        @keyframes statusPulse {
            0%,
            100% {
                opacity: 0.4;
                transform: scale(0.85);
            }

            50% {
                opacity: 1;
                transform: scale(1);
            }
        }

        @media (max-width: 1000px) {
            .footerMain {
                grid-template-columns: 1fr;
            }

            .linksColumn {
                max-width: 760px;
            }
        }

        @media (max-width: 760px) {
            padding: 70px 20px 24px;

            .linksColumn {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .footerBottom {
                padding-top: 24px;
                grid-template-columns: 1fr auto;
            }

            .status {
                justify-self: end;
            }

            .backToTop {
                grid-column: 1 / -1;
                justify-self: start;
            }
        }

        @media (max-width: 520px) {
            .footerMain {
                padding-bottom: 60px;
            }

            .linksColumn {
                grid-template-columns: 1fr;
                gap: 2.5rem;
            }

            .footerBottom {
                grid-template-columns: 1fr;
                gap: 16px;
            }

            .status,
            .backToTop {
                justify-self: start;
            }
        }
    `},n0=[{label:"Portfolio",href:"https://www.ashishranjan.net",icon:Hd},{label:"GitHub",href:"https://github.com/a2rp",icon:_o},{label:"CodePen",href:"https://codepen.io/ash1198",icon:Lh},{label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:$d},{label:"Facebook",href:"https://www.facebook.com/theash.ashish/",icon:zh},{label:"YouTube",href:"https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",icon:wh}],r0=[{label:"Support",href:"https://a2rp-donation-page.netlify.app/",icon:Nh},{label:"Buy Me A Coffee",href:"https://buymeacoffee.com/a2rp",icon:Ph},{label:"Patreon",href:"https://patreon.com/a2rp",icon:Vd},{label:"Email",href:"mailto:ash.ranjan09@gmail.com",icon:jh}];function i0(){const o=new Date().getFullYear();return c.jsxs(t0.Wrapper,{children:[c.jsxs("div",{className:"footerMain",children:[c.jsxs("div",{className:"brandColumn",children:[c.jsxs("a",{className:"brand",href:"#home",children:[c.jsx("span",{className:"brandMark",children:"a2rp"}),c.jsx("span",{className:"brandName",children:"TEST APP"})]}),c.jsx("p",{children:"An experimental frontend playground for creative interfaces, interaction ideas and modern web concepts."}),c.jsxs("a",{className:"repositoryLink",href:"https://github.com/a2rp/test-app",target:"_blank",rel:"noreferrer",children:[c.jsx(_o,{}),c.jsx("span",{children:"View Repository"}),c.jsx(Vd,{})]})]}),c.jsxs("div",{className:"linksColumn",children:[c.jsxs("div",{className:"linkGroup",children:[c.jsx("span",{className:"groupLabel",children:"Navigate"}),c.jsx("a",{href:"#experiments",children:"Experiments"}),c.jsx("a",{href:"#stack",children:"Stack"}),c.jsx("a",{href:"#process",children:"Process"}),c.jsx("a",{href:"#about",children:"About"})]}),c.jsxs("div",{className:"linkGroup",children:[c.jsx("span",{className:"groupLabel",children:"Connect"}),n0.map(a=>{const u=a.icon;return c.jsxs("a",{href:a.href,target:"_blank",rel:"noreferrer",children:[c.jsx(u,{}),c.jsx("span",{children:a.label})]},a.label)})]}),c.jsxs("div",{className:"linkGroup",children:[c.jsx("span",{className:"groupLabel",children:"Support"}),r0.map(a=>{const u=a.icon;return c.jsxs("a",{href:a.href,target:a.href.startsWith("mailto:")?void 0:"_blank",rel:a.href.startsWith("mailto:")?void 0:"noreferrer",children:[c.jsx(u,{}),c.jsx("span",{children:a.label})]},a.label)})]})]})]}),c.jsxs("div",{className:"footerBottom",children:[c.jsxs("div",{className:"copyright",children:[c.jsxs("span",{children:["© ",o]}),c.jsx("span",{className:"separator",children:"/"}),c.jsxs("span",{children:["Developed by"," ",c.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noreferrer",children:"Ashish Ranjan"})]})]}),c.jsxs("div",{className:"status",children:[c.jsx("span",{className:"statusDot"}),c.jsx("span",{children:"System Online"})]}),c.jsxs("a",{className:"backToTop",href:"#home","aria-label":"Back to top",children:[c.jsx("span",{children:"Back to top"}),c.jsx(Th,{})]})]})]})}function o0(){return c.jsxs(fh.Wrapper,{children:[c.jsx(Mh,{}),c.jsxs("main",{children:[c.jsx(Fh,{}),c.jsx(Uh,{}),c.jsx(Vh,{}),c.jsx(Yh,{}),c.jsx(Zh,{}),c.jsx(e0,{})]}),c.jsx(i0,{})]})}em.createRoot(document.getElementById("root")).render(c.jsx(c.Fragment,{children:c.jsx(o0,{})}));
