parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({3:[function(require,module,exports) {
"use strict";var t=Math.floor(1099511627776*Math.random()).toString(16),n=new RegExp('"@__(F|R|D)-'+t+'-(\\d+)__@"',"g"),e=/\{\s*\[native code\]\s*\}/g,r=/[<>\/\u2028\u2029]/g,i={"<":"\\u003C",">":"\\u003E","/":"\\u002F","\u2028":"\\u2028","\u2029":"\\u2029"};function u(t){return i[t]}module.exports=function(i,o){o||(o={}),"number"!=typeof o&&"string"!=typeof o||(o={space:o});var f,s=[],a=[],g=[];return"string"!=typeof(f=o.isJSON&&!o.space?JSON.stringify(i):JSON.stringify(i,o.isJSON?null:function(n,e){if(!e)return e;var r=this[n],i=typeof r;if("object"===i){if(r instanceof RegExp)return"@__R-"+t+"-"+(a.push(r)-1)+"__@";if(r instanceof Date)return"@__D-"+t+"-"+(g.push(r)-1)+"__@"}return"function"===i?"@__F-"+t+"-"+(s.push(r)-1)+"__@":e},o.space))?String(f):(!0!==o.unsafe&&(f=f.replace(r,u)),0===s.length&&0===a.length&&0===g.length?f:f.replace(n,function(t,n,r){if("D"===n)return'new Date("'+g[r].toISOString()+'")';if("R"===n)return a[r].toString();var i=s[r],u=i.toString();if(e.test(u))throw new TypeError("Serializing native function: "+i.name);return u}))};
},{}],1:[function(require,module,exports) {
"use strict";var e=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),n=require("serialize-javascript"),r=t(n);function t(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var i={LOAD_SCRIPTS:0,REGISTER_FUNCTIONS:1,CALL_FUNCTION:2},o=function e(n){return n?(n^16*Math.random()>>n/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},u=function(){function n(e){var t=this;a(this,n);var i=new Worker(e);this.worker=i,this.send=function(e,n){t.worker.postMessage((0,r.default)(e))}}return e(n,[{key:"loadScripts",value:function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];this.send({action:i.LOAD_SCRIPTS,scripts:n})}},{key:"registerFunctions",value:function(e){var n=this;Object.keys(e).map(function(r){n.send({action:i.REGISTER_FUNCTIONS,key:r,fn:e[r]}),n[r]=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return new Promise(function(e,a){n.send({action:i.CALL_FUNCTION,key:r,parameters:t}),e()})}})}}]),n}();module.exports=u;
},{"serialize-javascript":3}]},{},[1], null)
//# sourceMappingURL=/centaurus.map