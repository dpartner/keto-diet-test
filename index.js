parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"i0CD":[function(require,module,exports) {
const e={burgerButton:document.querySelector(".header__button"),burgerMenu:document.querySelector(".header__burger-menu")};function t(t){t.currentTarget.classList.toggle("toggle-menu"),e.burgerMenu.classList.toggle("open-menu")}e.burgerButton.addEventListener("click",t);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./js/menu");const e={female:document.querySelector(".select-gender__wrap--female"),male:document.querySelector(".select-gender__wrap--male"),resetButton:document.querySelector(".reset-button"),cookieWrap:document.querySelector(".cookie__wrap")};function t(){localStorage.setItem("page","1"),localStorage.setItem("gender","female")}function o(){localStorage.setItem("page","1"),localStorage.setItem("gender","male")}function c(){localStorage.clear()}function l(t){t.preventDefault(),localStorage.setItem("cookies",!0),e.cookieWrap.style.display="none"}async function n(t){t.preventDefault(),localStorage.setItem("cookies",!1),e.cookieWrap.style.display="none";await i(1e4);e.cookieWrap.style.display="flex"}function r(){}function a(){"true"===localStorage.getItem("cookies")?(console.log(localStorage.getItem("cookies")),e.cookieWrap.style.display="none",console.log(1)):e.cookieWrap.style.display="flex"}function i(e){return new Promise(t=>{setTimeout(()=>t(e),e)})}e.female.addEventListener("click",t),e.male.addEventListener("click",o),e.resetButton.addEventListener("click",c),document.querySelector("#accept").addEventListener("click",l),document.querySelector("#reject").addEventListener("click",n),document.querySelector("#read").addEventListener("click",r),a();
},{"./js/menu":"i0CD"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map