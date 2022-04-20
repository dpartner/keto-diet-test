parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FNyO":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],n="Expected a function",e=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),v=Object.prototype,p=v.toString,y=Math.max,d=Math.min,m=function(){return s.Date.now()};function b(t,e,i){var r,o,u,f,a,c,l=0,s=!1,v=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function b(n){var e=r,i=o;return r=o=void 0,l=n,f=t.apply(i,e)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||v&&t-l>=u}function h(){var t=m();if(g(t))return x(t);a=setTimeout(h,function(t){var n=e-(t-c);return v?d(n,u-(t-l)):n}(t))}function x(t){return a=void 0,p&&r?b(t):(r=o=void 0,f)}function T(){var t=m(),n=g(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(h,e),s?b(t):f}(c);if(v)return a=setTimeout(h,e),b(c)}return void 0===a&&(a=setTimeout(h,e)),f}return e=O(e)||0,j(i)&&(s=!!i.leading,u=(v="maxWait"in i)?y(O(i.maxWait)||0,e):u,p="trailing"in i?!!i.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},T.flush=function(){return void 0===a?f:x(m())},T}function g(t,e,i){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(n);return j(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),b(t,e,{leading:r,maxWait:e,trailing:o})}function j(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){return!!t&&"object"==typeof t}function x(t){return"symbol"==typeof t||h(t)&&p.call(t)==i}function O(t){if("number"==typeof t)return t;if(x(t))return e;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?a(t.slice(2),i?2:8):o.test(t)?e:+t}module.exports=g;
},{}],"CXGo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ref=void 0;const e={progressStart:document.querySelector(".progress__section"),backButton:document.querySelector(".progress__button-link--back"),cardNextButton:document.querySelector(".card__button-link"),answerList:document.querySelector(".quiz-list"),answerListItem:document.querySelector(".quiz-list__item"),question:document.querySelector(".hero__heading"),heading:document.querySelector(".hero__heading-wrap"),headerLogo:document.querySelector(".heading__logo-svg"),cardWrap:document.querySelector(".card-wrap"),containerHero:document.querySelector(".hero__container"),backgroundMask:document.querySelector(".hero__mask-svg"),cardWrapContent:document.querySelector(".card-wrap__content"),cardButtonWrap:document.querySelector(".card__button-wrap "),choiceForm:document.querySelector(".quiz__choice-form"),choiceFormWrap:document.querySelector(".quiz__choice-form-wrap"),choiceButtonWrap:document.querySelector(".quiz__choice__button-wrap"),dotParent:document.querySelector(".progress-bar__dot"),allDot:document.querySelector(".progress-bar__dot").children,line:document.querySelector(".progress-bar__line-done"),lineWrap:document.querySelector(".progress-bar__line"),percentage:document.querySelector(".progress__percentage-value")};exports.ref=e;
},{}],"xtzB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=require("./quiz-ref");function t(e,t){const o=100/t*(e-1);let u=1e3;for(let i=1;i<=o;i+=1)r(i,u).then(e=>n(e)),u+=70}function r(e,t){return new Promise(r=>{setTimeout(()=>r(e),t)})}function n(t){e.ref.percentage.textContent=t}
},{"./quiz-ref":"CXGo"}],"tuDp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeDoneDotExp=exports.removeOldActiveDotExp=exports.onDoneDotExp=void 0;var e=require("./quiz-ref");function o(o){let r=2200;e.ref.allDot[o].classList.add("active");for(let e=0;e<o;e+=1)t(e,r).then(e=>s(e)),r+=600}function t(e,o){return new Promise(t=>{setTimeout(()=>t(e),o)})}function s(o){e.ref.allDot[o].classList.add("done")}function r(o){e.ref.allDot[o].classList.remove("active")}function n(){const o=e.ref.allDot.length;for(let t=0;t<o;t+=1)e.ref.allDot[t].classList.contains("done")&&e.ref.allDot[t].classList.remove("done")}const l=e=>o(e);exports.onDoneDotExp=l;const i=e=>r(e);exports.removeOldActiveDotExp=i;const c=()=>n();exports.removeDoneDotExp=c;
},{"./quiz-ref":"CXGo"}],"wFNr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.clearDoneLineExp=exports.onDoneLineExp=void 0;var e=require("./quiz-ref");function n(n,r){const o=e.ref.lineWrap.getBoundingClientRect(),i=(o.right-o.left-20)/r*(n-1)+20;e.ref.line.classList.add("progress-bar__line-done--calc"),e.ref.line.style.width=`${i}px`}function r(){e.ref.line.classList.remove("progress-bar__line-done--calc")}const o=(e,r)=>n(e,r);exports.onDoneLineExp=o;const i=()=>r();exports.clearDoneLineExp=i;
},{"./quiz-ref":"CXGo"}],"KUk1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pages=void 0;const e=[{page:1,type:"quiz",name:"Physical activity",question:"Physical activity",answers:["ALMOST NO PHYSICAL ACTIVITY","I OFTEN GO FOR A WALK","I EXERCISE 1 - 2 TIMES A WEEK","I EXERCISE 3 - 5 TIMES A WEEK","I EXERCISE 5 - 7 TIMES A WEEK"],icon:"icon-physical-activity",background:"bg-1",p:""},{page:2,type:"quiz",name:"Energy",question:"Do you have the energy and focus you need to meet your daily challenges?",answers:["YES! TOTALLY ENERGETIC","MY ENERGY LEVELS FALL DURING THE DAY","I USUALLY FEEL WEAK AND LAZY","I FEEL DISTRACTED EVEN AFTER BEING ENERGETIC"],icon:"icon-have-energy",background:"bg-2",p:""},{page:3,type:"quiz",name:"Easy weight",question:"Is it easy for you to lose weight?",answers:["IF I WORK ON IT - QUITE EASY","WEIGHT LOSS IS A LITTLE BIT DIFFICULT FOR ME","IT HAS ALWAYS BEEN HARD"],icon:"icon-easy-to-lose-weight",background:"bg-3",p:""},{page:4,type:"card",name:"Target weight",question:"",answers:"",icon:"",background:"card-target-weight",p:"Keto can be really effective even without excercising. On average people following a keto diet for several months are able to get sustainable results without a yo-yo effect."},{page:5,type:"quiz",name:"Desired weight",question:"How long has it been since you were at your desired weight?",answers:["I AM RIGHT NOW","LESS THAN A YEAR AGO","MORE THAN A YEAR AGO","I CAN’T REMEMBER"],icon:"icon-since-desired-weight",background:"bg-4",p:""},{page:6,type:"quiz",name:"Calories",question:"Do you care about calories?",answers:["YES, I COUNT CALORIES AND MACROS","I HAVE SOME IDEA ABOUT THE CALORIES OF MY DAILY MEALS","I DON’T CARE ABOUT CALORIES"],icon:"icon-care-about-calories",background:"bg-5",p:""},{page:7,type:"card",name:"Target weight",question:"",answers:"",icon:"",background:"card-junk-food",p:"With YourKeto diet you can forget about calorie counting. Each one of your meals is pre-calculated and contains only the products that you've selected during the quiz."},{page:8,type:"choice",name:"Meat",question:"Meat",answers:[{name:"meet",value:"pork",svg:"icon-pork"},{name:"meet",value:"beef",svg:"icon-beef"}],icon:"icon-meat",background:"bg-6",p:"Please select which meat you would like to be included:"}];exports.pages=e;
},{}],"a6HF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addBackgroundExp=exports.addHeaderIconExp=exports.addQuestionExp=exports.addAnswersMarkupExp=void 0;var e=require("./quiz-ref");function r({pages:e,currentPage:r,gender:n}){try{const s=e.find(e=>e.page===Number(r)).answers,o="male"===n?"quiz-list__item--male":"quiz-list__item--female";return s.map(e=>`<li class="quiz-list__item ${o}"><button type="button" class="quiz-list__link" href="">${e}</button></li>`).join("")}catch(t){return t}}function n({pages:n,pageDone:t,gender:s}){const o=r({pages:n,currentPage:t,gender:s});e.ref.heading.style.display="",e.ref.answerList.style.display="",e.ref.choiceForm.style.display="none",e.ref.cardWrap.style.display="none",e.ref.containerHero.classList.remove("hero__container--card"),e.ref.backgroundMask.classList.remove("hero__mask-svg--card"),e.ref.answerList.innerHTML="",e.ref.answerList.insertAdjacentHTML("beforeend",o)}function t(r,n){const t=r.find(e=>e.page===Number(n)).question;e.ref.question.textContent=`${t}`}function s(r,n,t){const s=t[r.find(e=>e.page===Number(n)).background];e.ref.containerHero.style.backgroundImage=`url(${s})`}function o(r,n,t){const s=r[n-1].icon,o=t["symbol-defs"];e.ref.headerLogo.setAttribute("href",`${o}#${s}`)}const a=({pages:e,pageDone:r,gender:t})=>n({pages:e,pageDone:r,gender:t});exports.addAnswersMarkupExp=a;const i=(e,r)=>t(e,r);exports.addQuestionExp=i;const d=(e,r,n)=>o(e,r,n);exports.addHeaderIconExp=d;const c=(e,r,n)=>s(e,r,n);exports.addBackgroundExp=c;
},{"./quiz-ref":"CXGo"}],"v3Z2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addProgressDotMarkupExp=void 0;var e=require("./quiz-ref");function r(e){return e.map(e=>`<div class="progress-bar__circle">\n                  <span class="progress-bar__dot-desc">${e.name}</span>\n                </div>`).join("")}function s(s){const o=r(s);e.ref.dotParent.insertAdjacentHTML("beforeend",o)}const o=e=>s(e);exports.addProgressDotMarkupExp=o;
},{"./quiz-ref":"CXGo"}],"Z2Gu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addCardMarkupExp=void 0;var e=require("./quiz-ref");function r({pages:e,currentPage:r,links:a}){return`<p class="card-wrap__desc">${e[r-1].p}</p>\n              <img class="card-wrap__img" src="${a[e[r-1].background]}" alt="" />`}function a({pages:a,pageDone:s,svg:n,gender:d}){const t=r({pages:a,currentPage:s,links:n});e.ref.heading.style.display="none",e.ref.answerList.style.display="none",e.ref.choiceForm.style.display="none",e.ref.cardWrap.style.display="",e.ref.containerHero.classList.add("hero__container--card"),e.ref.containerHero.style.backgroundImage="",e.ref.backgroundMask.classList.add("hero__mask-svg--card"),"male"===d?e.ref.cardButtonWrap.classList.add("card__button-wrap--male"):e.ref.cardButtonWrap.classList.add("card__button-wrap--female"),e.ref.cardWrapContent.innerHTML="",e.ref.cardWrapContent.insertAdjacentHTML("beforeend",t)}const s=({pages:e,pageDone:r,svg:s,gender:n})=>a({pages:e,pageDone:r,svg:s,gender:n});exports.addCardMarkupExp=s;
},{"./quiz-ref":"CXGo"}],"rDXu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sendFormToStorageExp=exports.addChoiceMarkupExp=void 0;var e=require("./quiz-ref");const o=(e,o)=>{try{const s=JSON.stringify(o);localStorage.setItem(e,s)}catch(r){console.error("Set state error: ",r.message)}};function r({gender:o}){e.ref.heading.style.display="",e.ref.choiceForm.style.display="",e.ref.cardWrap.style.display="none",e.ref.containerHero.classList.remove("hero__container--card"),e.ref.backgroundMask.classList.remove("hero__mask-svg--card"),"male"===o?e.ref.choiceButtonWrap.classList.add("quiz__choice__button-wrap--male"):e.ref.choiceButtonWrap.classList.add("quiz__choice__button-wrap--female")}function s(e,r,s){const t=r[s-1].answers.map(e=>e.value);console.log(t);const a=r[s-1].answers[0].name;console.log(a);const c={};for(let o=0;o<2;o+=1)e.currentTarget[a][o].checked&&(c[t[o]]=!0),c[t[o]]=!1;console.log(c),o(`${s}`,c)}const t=({gender:e})=>r({gender:e});exports.addChoiceMarkupExp=t;const a=(e,o,r)=>s(e,o,r);exports.sendFormToStorageExp=a;
},{"./quiz-ref":"CXGo"}],"EJ9j":[function(require,module,exports) {
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
},{}],"NQhD":[function(require,module,exports) {
module.exports="/keto-diet-test/card-junk-food.b16370f9.svg";
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
module.exports="/keto-diet-test/symbol-defs.6204d5df.svg";
},{}],"uUbn":[function(require,module,exports) {
module.exports={calories:require("./calories.svg"),"card-junk-food":require("./card-junk-food.svg"),"card-target-weight":require("./card-target-weight.svg"),dev:require("./dev.svg"),fast:require("./fast.svg"),"free-profile":require("./free-profile.svg"),"gender-man":require("./gender-man.svg"),"gender-women":require("./gender-women.svg"),gid:require("./gid.svg"),"head-mask":require("./head-mask.svg"),"icon-physical-activity":require("./icon-physical-activity.svg"),"keto-icon":require("./keto-icon.svg"),list:require("./list.svg"),"progress-percentage-bg":require("./progress-percentage-bg.svg"),subscribe:require("./subscribe.svg"),"symbol-defs":require("./symbol-defs.svg")};
},{"./calories.svg":"xscj","./card-junk-food.svg":"NQhD","./card-target-weight.svg":"GkWv","./dev.svg":"qRRe","./fast.svg":"Cpbe","./free-profile.svg":"UmfP","./gender-man.svg":"NzAr","./gender-women.svg":"ydcr","./gid.svg":"pEjg","./head-mask.svg":"HZji","./icon-physical-activity.svg":"ajjJ","./keto-icon.svg":"xF82","./list.svg":"rFnr","./progress-percentage-bg.svg":"okQu","./subscribe.svg":"yKQK","./symbol-defs.svg":"bKpA"}],"rAAd":[function(require,module,exports) {
"use strict";var e=c(require("lodash.throttle")),r=c(require("./js/progress-percent")),t=require("./js/progress-dot"),a=require("./js/progress-line"),n=require("./js/pages"),s=require("./js/add-markup-answers"),d=require("./js/add-markup-progress"),o=require("./js/add-markup-card"),u=require("./js/add-markup-choice"),p=c(require("./images/quiz-bg/*.jpeg")),g=c(require("./images/*.svg")),i=require("./js/quiz-ref");function c(e){return e&&e.__esModule?e:{default:e}}let l=Number(localStorage.getItem("page")),f=localStorage.getItem("gender");const m=n.pages.length;q(l),(0,d.addProgressDotMarkupExp)(n.pages);const E=(0,e.default)(v,700);function v(){if(i.ref.progressStart.getBoundingClientRect().top<=document.documentElement.clientHeight)return(0,r.default)(l,m),(0,t.onDoneDotExp)(l),(0,a.onDoneLineExp)(l,m),window.removeEventListener("scroll",E)}function x(e,r){localStorage.setItem("page",`${e}`),l=localStorage.getItem("page"),(0,t.removeDoneDotExp)(),(0,a.clearDoneLineExp)(),q(e),(0,t.removeOldActiveDotExp)(r),window.addEventListener("scroll",E)}function q(e){"quiz"===n.pages[e-1].type&&((0,s.addBackgroundExp)(n.pages,e,p.default),(0,s.addHeaderIconExp)(n.pages,e,g.default),(0,s.addQuestionExp)(n.pages,e),(0,s.addAnswersMarkupExp)({pages:n.pages,pageDone:e,svg:g.default,gender:f})),"card"===n.pages[e-1].type&&(0,o.addCardMarkupExp)({pages:n.pages,pageDone:e,svg:g.default,gender:f}),"choice"===n.pages[e-1].type&&((0,s.addBackgroundExp)(n.pages,e,p.default),(0,s.addHeaderIconExp)(n.pages,e,g.default),(0,s.addQuestionExp)(n.pages,e),(0,u.addChoiceMarkupExp)({pages:n.pages,pageDone:e,svg:g.default,gender:f}))}function k(){const e=l;x(Number(l)+1,e)}function D(e){e.preventDefault();const r=l;x(Number(l)+1,r)}function j(e){if(1===Number(l))return;e.preventDefault();const r=l;x(Number(l)-1,r)}function L(e){e.preventDefault(),(0,u.sendFormToStorageExp)(e,n.pages,l)}window.addEventListener("scroll",E),i.ref.answerList.addEventListener("click",D),i.ref.backButton.addEventListener("click",j),i.ref.cardNextButton.addEventListener("click",k),i.ref.choiceForm.addEventListener("submit",L);
},{"lodash.throttle":"FNyO","./js/progress-percent":"xtzB","./js/progress-dot":"tuDp","./js/progress-line":"wFNr","./js/pages":"KUk1","./js/add-markup-answers":"a6HF","./js/add-markup-progress":"v3Z2","./js/add-markup-card":"Z2Gu","./js/add-markup-choice":"rDXu","./images/quiz-bg/*.jpeg":"S67B","./images/*.svg":"uUbn","./js/quiz-ref":"CXGo"}]},{},["rAAd"], null)
//# sourceMappingURL=/keto-diet-test/quiz.9f70e268.js.map