parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qhja":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.load=exports.save=void 0;const e=(e,t)=>{try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(r){console.error("Set state error: ",r.message)}};exports.save=e;const t=e=>{try{const r=localStorage.getItem(e);return null===r?void 0:JSON.parse(r)}catch(t){console.error("Get state error: ",t.message)}};exports.load=t;
},{}],"FNyO":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],n="Expected a function",e=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),v=Object.prototype,p=v.toString,y=Math.max,d=Math.min,m=function(){return s.Date.now()};function b(t,e,i){var r,o,u,f,a,c,l=0,s=!1,v=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function b(n){var e=r,i=o;return r=o=void 0,l=n,f=t.apply(i,e)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||v&&t-l>=u}function h(){var t=m();if(g(t))return x(t);a=setTimeout(h,function(t){var n=e-(t-c);return v?d(n,u-(t-l)):n}(t))}function x(t){return a=void 0,p&&r?b(t):(r=o=void 0,f)}function T(){var t=m(),n=g(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(h,e),s?b(t):f}(c);if(v)return a=setTimeout(h,e),b(c)}return void 0===a&&(a=setTimeout(h,e)),f}return e=O(e)||0,j(i)&&(s=!!i.leading,u=(v="maxWait"in i)?y(O(i.maxWait)||0,e):u,p="trailing"in i?!!i.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},T.flush=function(){return void 0===a?f:x(m())},T}function g(t,e,i){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(n);return j(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),b(t,e,{leading:r,maxWait:e,trailing:o})}function j(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){return!!t&&"object"==typeof t}function x(t){return"symbol"==typeof t||h(t)&&p.call(t)==i}function O(t){if("number"==typeof t)return t;if(x(t))return e;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?a(t.slice(2),i?2:8):o.test(t)?e:+t}module.exports=g;
},{}],"V8fK":[function(require,module,exports) {
"use strict";var e=require("./js/storage"),t=n(require("lodash.throttle"));function n(e){return e&&e.__esModule?e:{default:e}}const o={ctaButtonWrap:document.querySelector(".final__hero-button-wrap"),profileCardValues:document.querySelectorAll(".profile-cards__value"),profileCardTexts:document.querySelectorAll(".profile-cards__text"),weightValue:document.querySelector(".final__summary-weight-kg-value"),weightUnit:document.querySelector(".final__summary-weight-kg-unit"),weightFromValue:document.querySelector(".final__summary-weight-graph-target-from-value"),weightFromUnit:document.querySelector(".final__summary-weight-graph-target-from-unit"),weightToValue:document.querySelector(".final__summary-weight-graph-target-to-value"),weightToUnit:document.querySelector(".final__summary-weight-graph-target-to-unit"),bmiSvg:document.querySelector(".final__summary-bmi-img"),bmiSubtitle:document.querySelector(".final__summary-bmi-subtitle"),caloriesSvg:document.querySelector(".calorie_animations"),caloriesSubtitle:document.querySelector(".calories-subtitle"),bottleContainer:document.querySelector(".bottle-container"),helpModalsButtonsWrap:document.querySelector(".help-modal__open-close-wrap"),openModals:document.querySelectorAll(".help-modal__open-button"),closeModals:document.querySelectorAll(".help-modal__close-button"),helpModals:document.querySelectorAll(".final__help-modal-wrap")},a=(0,e.load)("measurements-imperic"),i=(0,e.load)("measurements-metric");let s=localStorage.getItem("gender");null===s&&(s="female");let r=localStorage.getItem("final");null===r&&(r="imperic");const l=(0,t.default)(y,700),c=(0,t.default)(_,700),d=(0,t.default)(x,700),f=(0,t.default)(b,700),p=(0,t.default)(C,700),m=(0,t.default)(L,700);function h(){"male"===s?o.ctaButtonWrap.classList.add("final__hero-button-wrap-male"):o.ctaButtonWrap.classList.add("final__hero-button-wrap-female"),"male"===s?document.querySelector(".summary-card__body-img--woman").style.display="none":document.querySelector(".summary-card__body-img--man").style.display="none","male"===s?document.querySelector(".summary-card__people-img-women").style.display="none":document.querySelector(".summary-card__people-img-men").style.display="none",u()}function u(){if(void 0!==a&&"imperic"===r){for(const e of o.profileCardValues){const t=e.dataset.value;e.textContent=`${a[`${t}-imperic`]}`,"height"===t&&(e.textContent=`${a[`${t}-ft`]}.${a[`${t}-inch`]}`)}for(const e of o.profileCardTexts){const t=e.dataset.value,n={age:"Age",height:"Height (ft)",weight:"Weight (lb)"};e.textContent=`${n[t]}`}}if(void 0!==i&&"metric"===r){for(const e of o.profileCardValues){const t=e.dataset.value;e.textContent=`${i[`${t}-metric`]}`}for(const e of o.profileCardTexts){const t=e.dataset.value,n={age:"Age",height:"Height (cm)",weight:"Weight (kg)"};e.textContent=`${n[t]}`}}}function y(){if(o.weightValue.getBoundingClientRect().top<=document.documentElement.clientHeight){if("imperic"===r){const e=a["weight-imperic"],t=e-12.5;o.weightUnit.textContent="lb",o.weightFromValue.textContent=`${e}`,o.weightFromUnit.textContent="lb",o.weightToUnit.textContent="lb",g(e,t),window.removeEventListener("scroll",l)}if("metric"===r){const e=i["weight-metric"],t=e-5.6;o.weightUnit.textContent="kg",o.weightFromValue.textContent=`${e}`,o.weightFromUnit.textContent="kg",o.weightToUnit.textContent="kg",g(e,t),window.removeEventListener("scroll",l)}}}async function g(e,t){const n=e-t;for(let a=0;a<=10*n+1;a+=1){await w(20);o.weightValue.textContent=`${e-a/10}`,o.weightToValue.textContent=`${e-a/10}`}}function w(e){return new Promise(t=>{setTimeout(()=>t(e),e)})}function _(){document.querySelector(".summary-card__body-img-wrap").getBoundingClientRect().top<=document.documentElement.clientHeight&&("male"===s?document.querySelector("#silhouette-male-1_to").classList.add("active"):document.querySelector("#silhouette-female-green-female-1_to").classList.add("active"),window.removeEventListener("scroll",c))}function x(){document.querySelector(".summary-card__people-img-wrap").getBoundingClientRect().top<=document.documentElement.clientHeight&&("male"===s?document.querySelector("#silhouette-male-purple-male-2").classList.add("active"):document.querySelector("#silhouette-female-purple-female-2").classList.add("active"),window.removeEventListener("scroll",d))}function b(){if(document.querySelector(".final__summary-bmi-img").getBoundingClientRect().top<=document.documentElement.clientHeight){if(void 0!==a&&"imperic"===r){const e=12*Number(`${a["height-ft"]}.${a["height-inch"]}`),t=a["weight-imperic"]/(e*e)*703;k(t),v(t),window.removeEventListener("scroll",f)}if(void 0!==i&&"metric"===r){const e=i["height-metric"]/100,t=i["weight-metric"]/(e*e);k(t),v(t),window.removeEventListener("scroll",f)}}}async function v(e){for(let t=0;t<=10*e+1;t+=1){await w(10);document.querySelector(".final__summary-bmi-img-value").textContent=`${0+t/10}`}}function k(e){if(e<=18.5){const e=S("(80px, 145px)");o.bmiSvg.insertAdjacentHTML("afterbegin",e),o.bmiSubtitle.textContent="Underweight"}if(e>18.5&&e<=24.9){const e=S("(135px, 113px)");o.bmiSvg.insertAdjacentHTML("afterbegin",e),o.bmiSubtitle.textContent="Healthy Weight"}if(e>24.9&&e<=29.9){const e=S("(190px, 63px)");o.bmiSvg.insertAdjacentHTML("afterbegin",e),o.bmiSubtitle.textContent="Overweight"}if(e>29.9){const e=S("(250px, 23px)");o.bmiSvg.insertAdjacentHTML("afterbegin",e),o.bmiSubtitle.textContent="Obesity"}}function S(e){return`<style>\n          \n          #bmi-phase-3-chart-gradient {\n            animation: bmi-phase-3-chart-gradient_c_o 3000ms linear 1 normal forwards\n          }\n\n          @keyframes  bmi-phase-3-chart-gradient_c_o {\n            0% {\n              opacity: 0\n            }\n\n            3.333333% {\n              opacity: 0\n            }\n\n            20% {\n              opacity: 1\n            }\n\n            100% {\n              opacity: 1\n            }\n          }\n\n          #bmi-phase-3-chart-curve {\n            animation: bmi-phase-3-chart-curve_s_do 3000ms linear 1 normal forwards\n          }\n\n          @keyframes  bmi-phase-3-chart-curve_s_do {\n            0% {\n              stroke-dashoffset: 385.9\n            }\n\n            16.666667% {\n              stroke-dashoffset: 0\n            }\n\n            100% {\n              stroke-dashoffset: 0\n            }\n          }\n\n          #bmi-phase-3-pointer-3_ts {\n            animation: bmi-phase-3-pointer-3_ts__ts 3000ms linear 1 normal forwards\n          }\n\n          @keyframes  bmi-phase-3-pointer-3_ts__ts {\n            0% {\n              transform: translate${e} scale(0, 0)\n            }\n\n            3.333333% {\n              transform: translate${e} scale(0, 0);\n              animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1)\n            }\n\n            20% {\n              transform: translate${e} scale(1, 1)\n            }\n\n            100% {\n              transform: translate${e} scale(1, 1)\n            }\n          }\n\n          #bmi-phase-3-value-3 {\n            animation: bmi-phase-3-value-3_c_o 3000ms linear 1 normal forwards\n          }\n\n          @keyframes  bmi-phase-3-value-3_c_o {\n            0% {\n              opacity: 0\n            }\n\n            10% {\n              opacity: 0\n            }\n\n            20% {\n              opacity: 1\n            }\n\n            100% {\n              opacity: 1\n            }\n          }\n          \n        </style>`}function C(){let e=null;if(o.caloriesSvg.getBoundingClientRect().top<=document.documentElement.clientHeight){if(void 0!==a&&"imperic"===r){const t=12*Number(`${a["height-ft"]}.${a["height-inch"]}`);"male"===s&&(e=6.23*a["weight-imperic"]+12.7*t-6.8*a["age-imperic"]+66),"female"===s&&(e=4.35*a["weight-imperic"]+4.7*t-4.7*a["age-imperic"]+655),q(e),window.removeEventListener("scroll",p)}void 0!==i&&"metric"===r&&("male"===s&&(e=10*i["weight-metric"]+6.25*i["height-metric"]-5*i["age-metric"]+5),"female"===s&&(e=10*i["weight-metric"]+6.25*i["height-metric"]-5*i["age-metric"]-161),q(e),window.removeEventListener("scroll",p))}}function q(e){const t=M(e);o.caloriesSvg.insertAdjacentHTML("afterbegin",t)}function M(e){const t=100*Math.round(e/100),n=`${t} - ${t+100}`;return document.querySelector(".final__summary-card-heading--calories").textContent=`${n}  Cal`,e>1250&&e<=2500?`<svg id="calories-phase-2" class="calorie_animations" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 279 180" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">\n  <style>\n          \n          #calories-phase-2-solid {\n            animation: calories-phase-2-solid_c_o 3000ms linear 1 normal forwards\n          }\n  \n          @keyframes  calories-phase-2-solid_c_o {\n            0% {\n              opacity: 0\n            }\n  \n            6.666667% {\n              opacity: 0\n            }\n  \n            16.666667% {\n              opacity: 1\n            }\n  \n            100% {\n              opacity: 1\n            }\n          }\n  \n          #calories-phase-2-calories {\n            animation: calories-phase-2-calories_c_o 3000ms linear 1 normal forwards\n          }\n  \n          @keyframes  calories-phase-2-calories_c_o {\n            0% {\n              opacity: 0\n            }\n  \n            16.666667% {\n              opacity: 0\n            }\n  \n            26.666667% {\n              opacity: 1\n            }\n  \n            100% {\n              opacity: 1\n            }\n          }\n  \n          #calories-phase-2-2350-2450 {\n            animation: calories-phase-2-2350-2450_c_o 3000ms linear 1 normal forwards\n          }\n  \n          @keyframes  calories-phase-2-2350-2450_c_o {\n            0% {\n              opacity: 0\n            }\n  \n            13.333333% {\n              opacity: 0\n            }\n  \n            26.666667% {\n              opacity: 1\n            }\n  \n            100% {\n              opacity: 1\n            }\n          }\n  \n          #calories-phase-2-placeholder {\n            animation: calories-phase-2-placeholder_s_do 3000ms linear 1 normal forwards\n          }\n  \n          @keyframes  calories-phase-2-placeholder_s_do {\n            0% {\n              stroke-dashoffset: 417.11\n            }\n  \n            16.666667% {\n              stroke-dashoffset: 0\n            }\n  \n            100% {\n              stroke-dashoffset: 0\n            }\n          }\n  \n          #calories-phase-2-inidcator-2 {\n            animation: calories-phase-2-inidcator-2_s_do 3000ms linear 1 normal forwards\n          }\n  \n          @keyframes  calories-phase-2-inidcator-2_s_do {\n            0% {\n              stroke-dashoffset: 110.27\n            }\n  \n            16.666667% {\n              stroke-dashoffset: 0\n            }\n  \n            100% {\n              stroke-dashoffset: 0\n            }\n          }\n          \n        </style>\n  <defs>\n  <linearGradient id="calories-phase-2-solid-fill" x1="140" y1="9" x2="140" y2="142" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">\n  <stop id="calories-phase-2-solid-fill-0" offset="0%" stop-color="hsla(0,0%,100%,0.1)"></stop>\n  <stop id="calories-phase-2-solid-fill-1" offset="100%" stop-color="hsla(0,0%,100%,0)"></stop>\n  </linearGradient>\n  <linearGradient id="calories-phase-2-2350-2450-fill" x1="74" y1="87" x2="206" y2="87" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">\n  <stop id="calories-phase-2-2350-2450-fill-0" offset="0%" stop-color="#ff592d"></stop>\n  <stop id="calories-phase-2-2350-2450-fill-1" offset="100%" stop-color="#f90"></stop>\n  </linearGradient>\n  <linearGradient id="calories-phase-2-tspan4-fill" x1="-0.492203" y1="-14.603106" x2="131.507797" y2="-14.603106" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">\n  <stop id="calories-phase-2-tspan4-fill-0" offset="0%" stop-color="#ff592d"></stop>\n  <stop id="calories-phase-2-tspan4-fill-1" offset="100%" stop-color="#f90"></stop>\n  </linearGradient>\n  <linearGradient id="calories-phase-2-inidcator-2-stroke" x1="6.99999" y1="149" x2="139" y2="5" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">\n  <stop id="calories-phase-2-inidcator-2-stroke-0" offset="0%" stop-color="#ff592d"></stop>\n  <stop id="calories-phase-2-inidcator-2-stroke-1" offset="100%" stop-color="#f90"></stop>\n  </linearGradient>\n  </defs>\n  <g id="calories-phase-2-calories-phase-2"><text id="calories-phase-2-0" dx="0" dy="0" font-family="Roboto" font-size="18" font-weight="400" fill="#fff">\n  <tspan id="calories-phase-2-tspan1" x="1" y="177.152" font-family="Roboto" font-size="18" font-weight="400" font-style="normal" fill="#fff">\n  0\n  </tspan>\n  </text><text id="calories-phase-2-5000" dx="0" dy="0" font-family="Roboto" font-size="18" font-weight="400" fill="#fff">\n  <tspan id="calories-phase-2-tspan2" x="237.57" y="177.152" font-family="Roboto" font-size="18" font-weight="400" font-style="normal" fill="#fff">\n  5000\n  </tspan>\n  </text>\n  <path id="calories-phase-2-solid" d="M139.5,9C66.3223,9,7,68.5461,7,142h265C272,68.5461,212.678,9,139.5,9Z" opacity="0" fill="url(#calories-phase-2-solid-fill)"></path><text id="calories-phase-2-calories" dx="0" dy="0" font-family="Roboto" font-size="18" font-weight="400" opacity="0" fill="#fff">\n  <tspan id="calories-phase-2-tspan3" x="107.539" y="119.152" font-family="Roboto" font-size="18" font-weight="400" font-style="normal" fill="#fff">\n  Calories\n  </tspan>\n  </text><text id="calories-phase-2-2350-2450" dx="0" dy="0" font-family="Roboto" font-size="24" font-weight="700" opacity="0" fill="url(#calories-phase-2-2350-2450-fill)">\n  <tspan id="calories-phase-2-tspan4" x="74.4922" y="95.2031" font-family="Roboto" font-size="24" font-weight="700" font-style="normal" fill="url(#calories-phase-2-tspan4-fill)">${n}</tspan>\n  </text>\n  <path id="calories-phase-2-placeholder" d="M272,142C272,68.5461,212.678,9,139.5,9C66.3223,9,7,68.5461,7,142" transform="matrix(-1 0 0 1 279 0)" fill="none" stroke="var(--calories-arch)" stroke-width="14" stroke-linecap="round" stroke-dashoffset="417.11" stroke-dasharray="417.11"></path>\n  <path id="calories-phase-2-inidcator-2" d="M139.27,9C100.497,9,65.6214,25.7746,41.4282,52.5" fill="none" stroke="url(#calories-phase-2-inidcator-2-stroke)" stroke-width="18" stroke-linecap="round" stroke-dashoffset="110.27" stroke-dasharray="110.27"></path>\n  </g>\n  <style>\n          \n          @font-face {\n            font-family: 'Roboto';\n            font-style: normal;\n            font-weight: 400;\n            src: url(https://fonts.gstatic.com/l/font?kit=KFOmCnqEu92Fr1Me5X5AIxoNGPLGoMsvHhLYbits&amp;skey=a0a0114a1dcab3ac&amp;v=v29) format('truetype');\n          }\n  \n          @font-face {\n            font-family: 'Roboto';\n            font-style: normal;\n            font-weight: 700;\n            src: url(https://fonts.gstatic.com/l/font?kit=KFOlCnqEu92Fr1MmWUlvAwUyCuzCp7t6TjjVZDBzDEar&amp;skey=c06e7213f788649e&amp;v=v29) format('truetype');\n          }\n          \n        </style>\n  </svg>`:e>2500&&e<=3750?`<svg id="calories-phase-3" class="calorie_animations" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 279 180" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">\n  <style>\n          \n          #calories-phase-3-solid {\n            animation: calories-phase-3-solid_c_o 3000ms linear 1 normal forwards\n          }\n  \n          @keyframes  calories-phase-3-solid_c_o {\n            0% {\n              opacity: 0\n            }\n  \n            6.666667% {\n              opacity: 0\n            }\n  \n            16.666667% {\n              opacity: 1\n            }\n  \n            100% {\n              opacity: 1\n            }\n          }\n  \n          #calories-phase-3-calories {\n            animation: calories-phase-3-calories_c_o 3000ms linear 1 normal forwards\n          }\n  \n          @keyframes  calories-phase-3-calories_c_o {\n            0% {\n              opacity: 0\n            }\n  \n            16.666667% {\n              opacity: 0\n            }\n  \n            26.666667% {\n              opacity: 1\n            }\n  \n            100% {\n              opacity: 1\n            }\n          }\n  \n          #calories-phase-3-2350-2450 {\n            animation: calories-phase-3-2350-2450_c_o 3000ms linear 1 normal forwards\n          }\n  \n          @keyframes  calories-phase-3-2350-2450_c_o {\n            0% {\n              opacity: 0\n            }\n  \n            13.333333% {\n              opacity: 0\n            }\n  \n            26.666667% {\n              opacity: 1\n            }\n  \n            100% {\n              opacity: 1\n            }\n          }\n  \n          #calories-phase-3-placeholder {\n            animation: calories-phase-3-placeholder_s_do 3000ms linear 1 normal forwards\n          }\n  \n          @keyframes  calories-phase-3-placeholder_s_do {\n            0% {\n              stroke-dashoffset: 417.11\n            }\n  \n            16.666667% {\n              stroke-dashoffset: 834.22\n            }\n  \n            100% {\n              stroke-dashoffset: 834.22\n            }\n          }\n  \n          #calories-phase-3-inidcator-3 {\n            animation: calories-phase-3-inidcator-3_s_do 3000ms linear 1 normal forwards\n          }\n  \n          @keyframes  calories-phase-3-inidcator-3_s_do {\n            0% {\n              stroke-dashoffset: 111.1\n            }\n  \n            6.666667% {\n              stroke-dashoffset: 111.1\n            }\n  \n            16.666667% {\n              stroke-dashoffset: 222.2\n            }\n  \n            100% {\n              stroke-dashoffset: 222.2\n            }\n          }\n          \n        </style>\n  <defs>\n  <linearGradient id="calories-phase-3-solid-fill" x1="140" y1="9" x2="140" y2="142" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">\n  <stop id="calories-phase-3-solid-fill-0" offset="0%" stop-color="hsla(0,0%,100%,0.1)"></stop>\n  <stop id="calories-phase-3-solid-fill-1" offset="100%" stop-color="hsla(0,0%,100%,0)"></stop>\n  </linearGradient>\n  <linearGradient id="calories-phase-3-2350-2450-fill" x1="74" y1="87" x2="206" y2="87" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">\n  <stop id="calories-phase-3-2350-2450-fill-0" offset="0%" stop-color="#ff592d"></stop>\n  <stop id="calories-phase-3-2350-2450-fill-1" offset="100%" stop-color="#f90"></stop>\n  </linearGradient>\n  <linearGradient id="calories-phase-3-tspan4-fill" x1="-0.328102" y1="-14.603106" x2="131.671898" y2="-14.603106" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">\n  <stop id="calories-phase-3-tspan4-fill-0" offset="0%" stop-color="#ff592d"></stop>\n  <stop id="calories-phase-3-tspan4-fill-1" offset="100%" stop-color="#f90"></stop>\n  </linearGradient>\n  <linearGradient id="calories-phase-3-inidcator-3-stroke" x1="104.853" y1="150.609" x2="238.428" y2="5.63214" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">\n  <stop id="calories-phase-3-inidcator-3-stroke-0" offset="0%" stop-color="#ff592d"></stop>\n  <stop id="calories-phase-3-inidcator-3-stroke-1" offset="100%" stop-color="#f90"></stop>\n  </linearGradient>\n  </defs>\n  <g id="calories-phase-3-calories-phase-3"><text id="calories-phase-3-0" dx="0" dy="0" font-family="calories-phase-3:::Roboto" font-size="18" font-weight="400" fill="#fff">\n  <tspan id="calories-phase-3-tspan1" x="1" y="177.152" font-family="calories-phase-3:::Roboto" font-size="18" font-weight="400" font-style="normal" fill="#fff">\n  0\n  </tspan>\n  </text><text id="calories-phase-3-5000" dx="0" dy="0" font-family="calories-phase-3:::Roboto" font-size="18" font-weight="400" fill="#fff">\n  <tspan id="calories-phase-3-tspan2" x="237.57" y="177.152" font-family="calories-phase-3:::Roboto" font-size="18" font-weight="400" font-style="normal" fill="#fff">\n  5000\n  </tspan>\n  </text>\n  <path id="calories-phase-3-solid" d="M139.5,9C66.3223,9,7,68.5461,7,142h265C272,68.5461,212.678,9,139.5,9Z" opacity="0" fill="url(#calories-phase-3-solid-fill)"></path><text id="calories-phase-3-calories" dx="0" dy="0" font-family="calories-phase-3:::Roboto" font-size="18" font-weight="400" opacity="0" fill="#fff">\n  <tspan id="calories-phase-3-tspan3" x="107.539" y="119.152" font-family="calories-phase-3:::Roboto" font-size="18" font-weight="400" font-style="normal" fill="#fff">\n  Calories\n  </tspan>\n  </text><text id="calories-phase-3-2350-2450" dx="0" dy="0" font-family="calories-phase-3:::Roboto" font-size="24" font-weight="700" opacity="0" fill="url(#calories-phase-3-2350-2450-fill)">\n  <tspan id="calories-phase-3-tspan4" class="calories-subtitle" x="74.3281" y="95.2031" font-family="calories-phase-3:::Roboto" font-size="24" font-weight="700" font-style="normal" fill="url(#calories-phase-3-tspan4-fill)">${n}</tspan>\n  </text>\n  <path id="calories-phase-3-placeholder" d="M272,142C272,68.5461,212.678,9,139.5,9C66.3223,9,7,68.5461,7,142" fill="none" stroke="var(--calories-arch)" stroke-width="14" stroke-linecap="round" stroke-dashoffset="417.11" stroke-dasharray="417.11"></path>\n  <path id="calories-phase-3-inidcator-3" d="M139.5,9c39.082,0,74.211,16.984,98.463,44" fill="none" stroke="url(#calories-phase-3-inidcator-3-stroke)" stroke-width="18" stroke-linecap="round" stroke-dashoffset="111.1" stroke-dasharray="111.1"></path>\n  </g>\n  <style>\n          \n          @font-face {\n            font-family: 'calories-phase-3:::Roboto';\n            font-style: normal;\n            font-weight: 400;\n            src: url(https://fonts.gstatic.com/l/font?kit=KFOmCnqEu92Fr1Me5X5AIxoNGPLGoMsvHhLYbits&amp;skey=a0a0114a1dcab3ac&amp;v=v29) format('truetype');\n          }\n  \n          @font-face {\n            font-family: 'calories-phase-3:::Roboto';\n            font-style: normal;\n            font-weight: 700;\n            src: url(https://fonts.gstatic.com/l/font?kit=KFOlCnqEu92Fr1MmWUlvAwUyCuzCp7t6TjjVZDBzDEar&amp;skey=c06e7213f788649e&amp;v=v29) format('truetype');\n          }\n          \n        </style>\n  </svg>`:void 0}function L(){if(o.bottleContainer.getBoundingClientRect().top<=document.documentElement.clientHeight){if(void 0!==a&&"imperic"===r){E(.04*a["weight-imperic"]/2.204),window.removeEventListener("scroll",m)}if(void 0!==i&&"metric"===r){E(.04*i["weight-metric"]),window.removeEventListener("scroll",m)}}}function E(e){const t=o.bottleContainer.children,n=Math.floor(e);for(let o=0;o<=n&&o<t.length;o+=1)t[o].classList.add("single-bottle");t.length-n>0&&t[n].classList.add("single-bottle--semifilled"),document.querySelector(".water-intake-value").textContent=e.toFixed(1);const a=U(e);o.bottleContainer.insertAdjacentHTML("afterend",a)}function U(e){const t=String(e).indexOf(".");return`<style>\n        .bottle-container {\n          display: flex;\n          height: 80px;\n        }\n\n        [dir="rtl"] .bottle-container {\n          height: 100%;\n        }\n\n        .single-bottle {\n          width: 27px;\n          position: relative;\n        }\n\n        .single-bottle:not(:first-child) {\n          margin-left: 3px;\n        }\n\n        .single-bottle svg {\n          width: 100%;\n          height: 100%;\n        }\n\n        .single-bottle span {\n          position: absolute;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          top: auto;\n          background-color: #33c6f5;\n          animation: 2s bottle;\n          animation-fill-mode: forwards;\n          border-bottom-left-radius: 4px;\n          border-bottom-right-radius: 4px;\n        }\n\n        [dir="rtl"] .single-bottle {\n          margin-left: 3px;\n        }\n\n        [dir="rtl"] .single-bottle span {\n          bottom: 3px;\n        }\n\n        .single-bottle--semifilled span {\n          animation: 2s bottleSemifilled;\n          animation-fill-mode: forwards\n        }\n\n        @keyframes  bottle {\n          0% {\n            height: 1px;\n            opacity: 0\n          }\n\n          100% {\n            height: 65px;\n            opacity: 1\n          }\n        }\n\n        @keyframes  bottleSemifilled {\n          0% {\n            height: 1px;\n            opacity: 0\n          }\n\n          100% {\n            height: ${Math.floor(6.5*Number(String(e.toFixed(1)).slice(t+1)))}px;\n            opacity: 1\n          }\n        }\n                </style>`}function $(e){e.preventDefault();const t=e.target.dataset.modal,n=e.target.dataset.action;if("open"===n){for(const e of o.closeModals)e.dataset.modal===t&&(e.style.display="flex");for(const e of o.openModals)e.dataset.modal===t&&(e.style.display="none");for(const e of o.helpModals)e.dataset.modal===t&&(e.style.opacity="1")}if("close"===n){for(const e of o.closeModals)e.dataset.modal===t&&(e.style.display="none");for(const e of o.openModals)e.dataset.modal===t&&(e.style.display="flex");for(const e of o.helpModals)e.dataset.modal===t&&(e.style.opacity="0")}}window.addEventListener("scroll",l),window.addEventListener("scroll",c),window.addEventListener("scroll",d),window.addEventListener("scroll",f),window.addEventListener("scroll",p),window.addEventListener("scroll",m),document.querySelector('.help-modal__open-close-wrap[data-modal="weight"]').addEventListener("click",$),document.querySelector('.help-modal__open-close-wrap[data-modal="body"]').addEventListener("click",$),document.querySelector('.help-modal__open-close-wrap[data-modal="bmi"]').addEventListener("click",$),document.querySelector('.help-modal__open-close-wrap[data-modal="bmr"]').addEventListener("click",$),document.querySelector('.help-modal__open-close-wrap[data-modal="water"]').addEventListener("click",$),h();
},{"./js/storage":"qhja","lodash.throttle":"FNyO"}]},{},["V8fK"], null)
//# sourceMappingURL=/keto-diet-test/final.c2fbfedb.js.map