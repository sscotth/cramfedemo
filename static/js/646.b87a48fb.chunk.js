/*! For license information please see 646.b87a48fb.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcramfedemo=self.webpackChunkcramfedemo||[]).push([[646,725],{646:function(r,t,e){function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function o(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,a=[],i=!0,u=!1;try{for(e=e.call(r);!(i=(n=e.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}}(r,t)||function(r,t){if(r){if("string"===typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.r(t),e.d(t,{Counter:function(){return c}});var a=e(264),i=e.n(a),u=e(184),c=function(){var r=o(i().useState(0),2),t=r[0],e=r[1];return(0,u.jsxs)("div",{children:[(0,u.jsx)("h5",{children:"Counter"}),(0,u.jsxs)("p",{children:["Count: ",t]}),(0,u.jsx)("button",{onClick:function(){return e(t+1)},children:"Add to Count"})]})}},725:function(r){var t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(r){if(null===r||void 0===r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(r){return t[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(r,a){for(var i,u,c=o(r),f=1;f<arguments.length;f++){for(var l in i=Object(arguments[f]))e.call(i,l)&&(c[l]=i[l]);if(t){u=t(i);for(var s=0;s<u.length;s++)n.call(i,u[s])&&(c[u[s]]=i[u[s]])}}return c}},374:function(r,t,e){e(725);var n=e(264),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function f(r,t,e){var n,a={},f=null,l=null;for(n in void 0!==e&&(f=""+e),void 0!==t.key&&(f=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(r&&r.defaultProps)for(n in t=r.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:r,key:f,ref:l,props:a,_owner:i.current}}t.jsx=f,t.jsxs=f},184:function(r,t,e){r.exports=e(374)}}]);
//# sourceMappingURL=646.b87a48fb.chunk.js.map