parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"DdrU":[function(require,module,exports) {
const t={changeFormButtonImperial:document.querySelector('.measurements__select-button[data-action="imperial"]'),changeFormButtonMetric:document.querySelector('.measurements__select-button[data-action="metric"]'),changeFormButtonWrap:document.querySelector(".measurements__select-list"),formImperial:document.querySelector(".measurements__form--imperial"),formImperialInputs:document.querySelectorAll(".measurements__form--imperial input"),formImperialSubmit:document.querySelector(".measurements__form-submit--imperial"),formMetric:document.querySelector(".measurements__form--metric"),formMetricInputs:document.querySelectorAll(".measurements__form--metric input"),submitButtonWrap:document.querySelectorAll(".measurements__form-button-wrap")};let e=localStorage.getItem("gender");function r(){t.changeFormButtonWrap.classList.add("measurements__select-list--metric-active"),t.changeFormButtonMetric.classList.add("measurements__select-button--active"),t.changeFormButtonImperial.classList.remove("measurements__select-button--active"),t.formMetric.classList.add("measurements__form-wrap--metric-active"),t.formImperial.classList.add("measurements__form-wrap--metric-active")}function a(){t.changeFormButtonWrap.classList.remove("measurements__select-list--metric-active"),t.changeFormButtonImperial.classList.add("measurements__select-button--active"),t.changeFormButtonMetric.classList.remove("measurements__select-button--active"),t.formMetric.classList.remove("measurements__form-wrap--metric-active"),t.formImperial.classList.remove("measurements__form-wrap--metric-active")}function i(t){const e=t.currentTarget.dataset.type;if(t.target.dataset.type===`${e}-age`){n(t,`${e}-age`,e)}if(t.target.dataset.type===`${e}-height-cm`){n(t,`${e}-height-cm`,e)}if(t.target.dataset.type===`${e}-height-ft`){n(t,`${e}-height-ft`,e)}if(t.target.dataset.type===`${e}-height-inch`){n(t,`${e}-height-inch`,e)}if(t.target.dataset.type===`${e}-weight`){n(t,`${e}-weight`,e)}if(t.target.dataset.type===`${e}-target-weight`){n(t,`${e}-target-weight`,e)}}function n(t,e,r){const a=document.querySelector(`.measurements__form-notification[data-type="${e}"]`);console.log(r),o(t,e,r),!t.target.validity.valid&&Number(t.target.value)<Number(t.target.getAttribute("min"))?(a.textContent=`Please enter a value of at least ${t.target.getAttribute("min")}`,a.classList.add("active")):!t.target.validity.valid&&Number(t.target.value)>Number(t.target.getAttribute("max"))?(a.textContent=`Enter a value less than or equal to ${t.target.getAttribute("max")}`,a.classList.add("active")):Number.isInteger(Number(t.target.value))?a.classList.remove("active"):(a.textContent="Please enter only whole numbers",a.classList.add("active"))}function m(e){e.preventDefault();const r={};for(input of t.formImperialInputs){if(!input.validity.valid)return;r[input.id]=input.value}console.log(r),localStorage.setItem("measurements-imperic",JSON.stringify(r))}function s(e){e.preventDefault();const r={};for(input of t.formMetricInputs){if(!input.validity.valid)return;r[input.id]=input.value}console.log(r),localStorage.setItem("measurements-metric",JSON.stringify(r))}function o(e,r,a){e.preventDefault();const i={...c()};if(console.log(a),"imperial"===a)for(input of t.formImperialInputs)i[input.id]=input.value;if("metric"===a)for(input of t.formMetricInputs)i[input.id]=input.value;console.log(i),localStorage.setItem("measurements-inputs-save",JSON.stringify(i))}function u(){const e=c();if(e){for(input of t.formImperialInputs)input.value=e[input.id];for(input of t.formMetricInputs)input.value=e[input.id]}}function c(){try{const e=JSON.parse(localStorage.getItem("measurements-inputs-save"));return null===e?void 0:e}catch(t){}}function l(e){for(button of t.submitButtonWrap)"male"===e?button.classList.add("measurements__form-button-wrap--male"):button.classList.add("measurements__form-button-wrap--female")}null===e&&(e="female"),u(),l(e),t.changeFormButtonImperial.addEventListener("click",a),t.changeFormButtonMetric.addEventListener("click",r),t.formImperial.addEventListener("change",i),t.formImperial.addEventListener("submit",m),t.formMetric.addEventListener("change",i),t.formMetric.addEventListener("submit",s);
},{}]},{},["DdrU"], null)
//# sourceMappingURL=/keto-diet-test/measurements.e93f5d98.js.map