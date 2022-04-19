parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FNyO":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],n="Expected a function",e=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),v=Object.prototype,p=v.toString,y=Math.max,d=Math.min,m=function(){return s.Date.now()};function b(t,e,i){var r,o,u,f,a,c,l=0,s=!1,v=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function b(n){var e=r,i=o;return r=o=void 0,l=n,f=t.apply(i,e)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||v&&t-l>=u}function h(){var t=m();if(g(t))return x(t);a=setTimeout(h,function(t){var n=e-(t-c);return v?d(n,u-(t-l)):n}(t))}function x(t){return a=void 0,p&&r?b(t):(r=o=void 0,f)}function T(){var t=m(),n=g(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(h,e),s?b(t):f}(c);if(v)return a=setTimeout(h,e),b(c)}return void 0===a&&(a=setTimeout(h,e)),f}return e=O(e)||0,j(i)&&(s=!!i.leading,u=(v="maxWait"in i)?y(O(i.maxWait)||0,e):u,p="trailing"in i?!!i.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},T.flush=function(){return void 0===a?f:x(m())},T}function g(t,e,i){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(n);return j(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),b(t,e,{leading:r,maxWait:e,trailing:o})}function j(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){return!!t&&"object"==typeof t}function x(t){return"symbol"==typeof t||h(t)&&p.call(t)==i}function O(t){if("number"==typeof t)return t;if(x(t))return e;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?a(t.slice(2),i?2:8):o.test(t)?e:+t}module.exports=g;
},{}],"xtzB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;const e={percentage:document.querySelector(".progress__percentage-value")};function t(e,t){const r=100/t*e;let c=1e3;for(let u=1;u<=r;u+=1)n(u,c).then(e=>o(e)),c+=70}function n(e,t){return new Promise(n=>{setTimeout(()=>n(e),t)})}function o(t){e.percentage.textContent=t}
},{}],"tuDp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeDoneDotExp=exports.removeOldActiveDotExp=exports.onDoneDotExp=void 0;const o={allDot:document.querySelector(".progress-bar__dot").children};function t(t){let n=2200;o.allDot[t].classList.add("active");for(let o=0;o<t;o+=1)e(o,n).then(o=>s(o)),n+=600}function e(o,t){return new Promise(e=>{setTimeout(()=>e(o),t)})}function s(t){o.allDot[t].classList.add("done")}function n(t){o.allDot[t].classList.remove("active")}function l(){const t=o.allDot.length;for(let e=0;e<t;e+=1)o.allDot[e].classList.contains("done")&&o.allDot[e].classList.remove("done")}const r=o=>t(o);exports.onDoneDotExp=r;const c=o=>n(o);exports.removeOldActiveDotExp=c;const i=()=>l();exports.removeDoneDotExp=i;
},{}],"wFNr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.clearDoneLineExp=exports.onDoneLineExp=void 0;const e={line:document.querySelector(".progress-bar__line-done"),wrap:document.querySelector(".progress-bar__line")};function n(n,o){const r=e.wrap.getBoundingClientRect(),t=(r.right-r.left-20)/o*(n-1)+20;e.line.classList.add("progress-bar__line-done--calc"),e.line.style.width=`${t}px`}function o(){e.line.classList.remove("progress-bar__line-done--calc")}const r=(e,o)=>n(e,o);exports.onDoneLineExp=r;const t=()=>o();exports.clearDoneLineExp=t;
},{}],"KUk1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pages=void 0;const e=[{page:1,type:"quiz",name:"Physical activity",question:"Physical activity",answers:["ALMOST NO PHYSICAL ACTIVITY","I OFTEN GO FOR A WALK","I EXERCISE 1 - 2 TIMES A WEEK","I EXERCISE 3 - 5 TIMES A WEEK","I EXERCISE 5 - 7 TIMES A WEEK"],icon:"icon-physical-activity",background:"bg-1",p:""},{page:2,type:"quiz",name:"Energy",question:"Do you have the energy and focus you need to meet your daily challenges?",answers:["YES! TOTALLY ENERGETIC","MY ENERGY LEVELS FALL DURING THE DAY","I USUALLY FEEL WEAK AND LAZY","I FEEL DISTRACTED EVEN AFTER BEING ENERGETIC"],icon:"icon-have-energy",background:"bg-2",p:""},{page:3,type:"quiz",name:"Easy weight",question:"Is it easy for you to lose weight?",answers:["IF I WORK ON IT - QUITE EASY","WEIGHT LOSS IS A LITTLE BIT DIFFICULT FOR ME","IT HAS ALWAYS BEEN HARD"],icon:"icon-easy-to-lose-weight",background:"bg-3",p:""},{page:4,type:"card",name:"Target weight",question:"",answers:"Keto can be really effective even without excercising. On average people following a keto diet for several months are able to get sustainable results without a yo-yo effect.",icon:"icon-easy-to-lose-weight",background:"card-target-weight",p:"Keto can be really effective even without excercising. On average people following a keto diet for several months are able to get sustainable results without a yo-yo effect."},{page:5,type:"quiz",name:"Desired weight",question:"How long has it been since you were at your desired weight?",answers:["I AM RIGHT NOW","LESS THAN A YEAR AGO","MORE THAN A YEAR AGO","I CAN’T REMEMBER"],icon:"icon-since-desired-weight",background:"bg-4",p:""},{page:6,type:"quiz",name:"Calories",question:"Do you care about calories?",answers:["YES, I COUNT CALORIES AND MACROS","I HAVE SOME IDEA ABOUT THE CALORIES OF MY DAILY MEALS","I DON’T CARE ABOUT CALORIES"],icon:"icon-care-about-calories",background:"bg-5",p:""},{page:7,type:"card",name:"Target weight",question:"",answers:"Keto can be really effective even without excercising. On average people following a keto diet for several months are able to get sustainable results without a yo-yo effect.",icon:"icon-easy-to-lose-weight",background:"card-target-weight",p:"Keto can be really effective even without excercising. On average people following a keto diet for several months are able to get sustainable results without a yo-yo effect."}];exports.pages=e;
},{}],"a6HF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addBackgroundExp=exports.addHeaderIconExp=exports.addQuestionExp=exports.addAnswersMarkupExp=void 0;const e={answerList:document.querySelector(".quiz-list"),question:document.querySelector(".hero__heading"),heading:document.querySelector(".hero__heading-wrap"),headerLogo:document.querySelector(".heading__logo-svg"),heroBackground:document.querySelector(".hero__container"),cardWrap:document.querySelector(".card-wrap"),containerHero:document.querySelector(".hero__container"),backgroundMask:document.querySelector(".hero__mask-svg")};function o(e,o){try{return e.find(e=>e.page===Number(o)).answers.map(e=>`<li class="quiz-list__item"><button type="button" class="quiz-list__link" href="">${e}</button></li>`).join("")}catch(r){return""}}function r(r,t){const n=o(r,t);e.heading.style.display="",e.answerList.style.display="",e.cardWrap.style.display="none",e.containerHero.classList.remove("hero__container--card"),e.backgroundMask.classList.remove("hero__mask-svg--card"),e.answerList.innerHTML="",e.answerList.insertAdjacentHTML("beforeend",n)}function t(o,r){const t=o.find(e=>e.page===Number(r)).question;e.question.textContent=`${t}`}function n(o,r,t){const n=t[o.find(e=>e.page===Number(r)).background];e.heroBackground.style.backgroundImage=`url(${n})`}function s(o,r,t){const n=o[r-1].icon;console.log(n);const s=t["symbol-defs"];console.log(s),e.headerLogo.setAttribute("href",`${s}#${n}`)}const a=(e,o)=>r(e,o);exports.addAnswersMarkupExp=a;const c=(e,o)=>t(e,o);exports.addQuestionExp=c;const d=(e,o,r)=>s(e,o,r);exports.addHeaderIconExp=d;const u=(e,o,r)=>n(e,o,r);exports.addBackgroundExp=u;
},{}],"v3Z2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addProgressDotMarkupExp=void 0;const e={dotParent:document.querySelector(".progress-bar__dot")};function r(e){return e.map(e=>`<div class="progress-bar__circle">\n                  <span class="progress-bar__dot-desc">${e.name}</span>\n                </div>`).join("")}function s(s){const o=r(s);e.dotParent.insertAdjacentHTML("beforeend",o)}const o=e=>s(e);exports.addProgressDotMarkupExp=o;
},{}],"Z2Gu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addCardMarkupExp=void 0;const e={heading:document.querySelector(".hero__heading-wrap"),answerList:document.querySelector(".quiz-list"),cardWrap:document.querySelector(".card-wrap"),containerHero:document.querySelector(".hero__container"),backgroundMask:document.querySelector(".hero__mask-svg")};function r(e,r,a){return`<p class="card-wrap__desc">${e[r-1].p}</p>\n            <div class="card-wrap__content" style="background-image: url(${a[e[r-1].background]});"></div><a  class="card__button-link">\n                Continue<svg class="card__button-icon">\n                  <use class="card__button-svg" href="${a["symbol-defs"]}#icon-next"></use>\n                </svg>\n              </a>`}function a(a,n,s){const c=r(a,n,s);e.heading.style.display="none",e.answerList.style.display="none",e.cardWrap.style.display="",e.containerHero.classList.add("hero__container--card"),e.containerHero.style.backgroundImage="",e.backgroundMask.classList.add("hero__mask-svg--card"),e.cardWrap.innerHTML="",e.cardWrap.insertAdjacentHTML("beforeend",c)}const n=(e,r,n)=>a(e,r,n);exports.addCardMarkupExp=n;
},{}],"EJ9j":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-1.6f84262e.jpeg";
},{}],"VW0r":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-10.5220f112.jpeg";
},{}],"lXsp":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-11.62147d26.jpeg";
},{}],"m4MI":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-12.9436b869.jpeg";
},{}],"ITWR":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-13.ffe6460e.jpeg";
},{}],"Rkyx":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-14.e414f408.jpeg";
},{}],"zwIs":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-15.5038da82.jpeg";
},{}],"XSl3":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-16.f9e1b0d4.jpeg";
},{}],"Nlig":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-17.afa28510.jpeg";
},{}],"Zjxv":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-18.19f719f6.jpeg";
},{}],"MnR1":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-19.260ebdf0.jpeg";
},{}],"LagP":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-2.513056b5.jpeg";
},{}],"Zf7z":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-20.46ee4188.jpeg";
},{}],"Yttb":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-21.ce29e347.jpeg";
},{}],"DPfe":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-22.5917b107.jpeg";
},{}],"VOwp":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-23.53840e60.jpeg";
},{}],"OlPL":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-24.d684dcbf.jpeg";
},{}],"IGAf":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-25.797be1ae.jpeg";
},{}],"U35R":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-26.1812c5a7.jpeg";
},{}],"AWuY":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-3.5cdad454.jpeg";
},{}],"nMNg":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-4.cf3532c9.jpeg";
},{}],"f3HK":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-5.3caef439.jpeg";
},{}],"vgb8":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-6.678ee0cc.jpeg";
},{}],"M5eQ":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-7.ae305bbb.jpeg";
},{}],"jVLH":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-8.0bf6d513.jpeg";
},{}],"PHE4":[function(require,module,exports) {
module.exports="/keto-diet-test/bg-9.74774687.jpeg";
},{}],"S67B":[function(require,module,exports) {
module.exports={"bg-1":require("./bg-1.jpeg"),"bg-10":require("./bg-10.jpeg"),"bg-11":require("./bg-11.jpeg"),"bg-12":require("./bg-12.jpeg"),"bg-13":require("./bg-13.jpeg"),"bg-14":require("./bg-14.jpeg"),"bg-15":require("./bg-15.jpeg"),"bg-16":require("./bg-16.jpeg"),"bg-17":require("./bg-17.jpeg"),"bg-18":require("./bg-18.jpeg"),"bg-19":require("./bg-19.jpeg"),"bg-2":require("./bg-2.jpeg"),"bg-20":require("./bg-20.jpeg"),"bg-21":require("./bg-21.jpeg"),"bg-22":require("./bg-22.jpeg"),"bg-23":require("./bg-23.jpeg"),"bg-24":require("./bg-24.jpeg"),"bg-25":require("./bg-25.jpeg"),"bg-26":require("./bg-26.jpeg"),"bg-3":require("./bg-3.jpeg"),"bg-4":require("./bg-4.jpeg"),"bg-5":require("./bg-5.jpeg"),"bg-6":require("./bg-6.jpeg"),"bg-7":require("./bg-7.jpeg"),"bg-8":require("./bg-8.jpeg"),"bg-9":require("./bg-9.jpeg")};
},{"./bg-1.jpeg":"EJ9j","./bg-10.jpeg":"VW0r","./bg-11.jpeg":"lXsp","./bg-12.jpeg":"m4MI","./bg-13.jpeg":"ITWR","./bg-14.jpeg":"Rkyx","./bg-15.jpeg":"zwIs","./bg-16.jpeg":"XSl3","./bg-17.jpeg":"Nlig","./bg-18.jpeg":"Zjxv","./bg-19.jpeg":"MnR1","./bg-2.jpeg":"LagP","./bg-20.jpeg":"Zf7z","./bg-21.jpeg":"Yttb","./bg-22.jpeg":"DPfe","./bg-23.jpeg":"VOwp","./bg-24.jpeg":"OlPL","./bg-25.jpeg":"IGAf","./bg-26.jpeg":"U35R","./bg-3.jpeg":"AWuY","./bg-4.jpeg":"nMNg","./bg-5.jpeg":"f3HK","./bg-6.jpeg":"vgb8","./bg-7.jpeg":"M5eQ","./bg-8.jpeg":"jVLH","./bg-9.jpeg":"PHE4"}],"xscj":[function(require,module,exports) {
module.exports="/keto-diet-test/calories.4e221656.svg";
},{}],"GkWv":[function(require,module,exports) {
module.exports="/keto-diet-test/card-target-weight.3fa19c16.svg";
},{}],"qRRe":[function(require,module,exports) {
module.exports="/keto-diet-test/dev.1ff0f9bc.svg";
},{}],"Cpbe":[function(require,module,exports) {
module.exports="/keto-diet-test/fast.13b1ae89.svg";
},{}],"UmfP":[function(require,module,exports) {
module.exports="/keto-diet-test/free-profile.d9c1dbbc.svg";
},{}],"NzAr":[function(require,module,exports) {
module.exports="/keto-diet-test/gender-man.1aaaedd4.svg";
},{}],"ydcr":[function(require,module,exports) {
module.exports="/keto-diet-test/gender-women.78c560e1.svg";
},{}],"pEjg":[function(require,module,exports) {
module.exports="/keto-diet-test/gid.18d71647.svg";
},{}],"HZji":[function(require,module,exports) {
module.exports="/keto-diet-test/head-mask.93add8fd.svg";
},{}],"ajjJ":[function(require,module,exports) {
module.exports="/keto-diet-test/icon-physical-activity.2159a4df.svg";
},{}],"xF82":[function(require,module,exports) {
module.exports="/keto-diet-test/keto-icon.0d88012b.svg";
},{}],"rFnr":[function(require,module,exports) {
module.exports="/keto-diet-test/list.f645be28.svg";
},{}],"okQu":[function(require,module,exports) {
module.exports="/keto-diet-test/progress-percentage-bg.f5898a9b.svg";
},{}],"yKQK":[function(require,module,exports) {
module.exports="/keto-diet-test/subscribe.219aee54.svg";
},{}],"bKpA":[function(require,module,exports) {
module.exports="/keto-diet-test/symbol-defs.f1459283.svg";
},{}],"uUbn":[function(require,module,exports) {
module.exports={calories:require("./calories.svg"),"card-target-weight":require("./card-target-weight.svg"),dev:require("./dev.svg"),fast:require("./fast.svg"),"free-profile":require("./free-profile.svg"),"gender-man":require("./gender-man.svg"),"gender-women":require("./gender-women.svg"),gid:require("./gid.svg"),"head-mask":require("./head-mask.svg"),"icon-physical-activity":require("./icon-physical-activity.svg"),"keto-icon":require("./keto-icon.svg"),list:require("./list.svg"),"progress-percentage-bg":require("./progress-percentage-bg.svg"),subscribe:require("./subscribe.svg"),"symbol-defs":require("./symbol-defs.svg")};
},{"./calories.svg":"xscj","./card-target-weight.svg":"GkWv","./dev.svg":"qRRe","./fast.svg":"Cpbe","./free-profile.svg":"UmfP","./gender-man.svg":"NzAr","./gender-women.svg":"ydcr","./gid.svg":"pEjg","./head-mask.svg":"HZji","./icon-physical-activity.svg":"ajjJ","./keto-icon.svg":"xF82","./list.svg":"rFnr","./progress-percentage-bg.svg":"okQu","./subscribe.svg":"yKQK","./symbol-defs.svg":"bKpA"}],"rAAd":[function(require,module,exports) {
"use strict";var e=c(require("lodash.throttle")),r=c(require("./js/progress-percent")),t=require("./js/progress-dot"),a=require("./js/progress-line"),n=require("./js/pages"),s=require("./js/add-markup-answers"),o=require("./js/add-markup-progress"),d=require("./js/add-markup-card"),u=c(require("./images/quiz-bg/*.jpeg")),p=c(require("./images/*.svg"));function c(e){return e&&e.__esModule?e:{default:e}}let i=Number(localStorage.getItem("page"));const g=n.pages.length;"quiz"===n.pages[i-1].type&&((0,s.addBackgroundExp)(n.pages,i,u.default),(0,s.addHeaderIconExp)(n.pages,i,p.default),(0,s.addQuestionExp)(n.pages,i),(0,s.addAnswersMarkupExp)(n.pages,i)),"card"===n.pages[i-1].type&&(0,d.addCardMarkupExp)(n.pages,i,p.default),(0,o.addProgressDotMarkupExp)(n.pages);const l={progressStart:document.querySelector(".progress__section"),answers:document.querySelector(".quiz-list"),backButton:document.querySelector(".progress__button-link--back"),cardNextButton:document.querySelector(".card__button-link")},m=(0,e.default)(E,700);function E(){if(l.progressStart.getBoundingClientRect().top<=document.documentElement.clientHeight)return(0,r.default)(i,g),(0,t.onDoneDotExp)(i),(0,a.onDoneLineExp)(i,g),window.removeEventListener("scroll",m)}function f(e,r){localStorage.setItem("page",`${e}`),i=localStorage.getItem("page"),(0,t.removeDoneDotExp)(),(0,a.clearDoneLineExp)(),"quiz"===n.pages[i-1].type&&((0,s.addBackgroundExp)(n.pages,i,u.default),(0,s.addHeaderIconExp)(n.pages,i,p.default),(0,s.addQuestionExp)(n.pages,i),(0,s.addAnswersMarkupExp)(n.pages,i)),"card"===n.pages[i-1].type&&(0,d.addCardMarkupExp)(n.pages,i,p.default),(0,t.removeOldActiveDotExp)(r),window.addEventListener("scroll",m)}function k(){const e=i;f(Number(i)+1,e)}function q(e){e.preventDefault();const r=i;f(Number(i)+1,r)}function x(e){if(1===Number(i))return;e.preventDefault();const r=i;f(Number(i)-1,r)}window.addEventListener("scroll",m),l.answers.addEventListener("click",q),l.backButton.addEventListener("click",x),l.cardNextButton.addEventListener("click",k);
},{"lodash.throttle":"FNyO","./js/progress-percent":"xtzB","./js/progress-dot":"tuDp","./js/progress-line":"wFNr","./js/pages":"KUk1","./js/add-markup-answers":"a6HF","./js/add-markup-progress":"v3Z2","./js/add-markup-card":"Z2Gu","./images/quiz-bg/*.jpeg":"S67B","./images/*.svg":"uUbn"}]},{},["rAAd"], null)
//# sourceMappingURL=/keto-diet-test/quiz.8afcf37c.js.map