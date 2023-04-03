(()=>{"use strict";var e={800:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"*,*::before,*::after{box-sizing:border-box;padding:0;margin:0}html{font-size:62.5%}body{font-size:2rem;font-family:system-ui, BlinkMacSystemFont, 'Segoe UI';background-color:#2e8ae6}.main{display:flex;flex-direction:column;margin:20% 15%;background-color:white;box-shadow:1px 18px 13px 1px rgba(0,0,0,0.3)}.main__h2{font-size:2rem;color:#545862}.list{list-style:none}.list__item{display:flex;justify-content:space-between}.main__input{font-style:italic;border:none}.ul_li:not(:last-child){border-bottom:1px solid grey}.main__elements{border-bottom:1px solid rgba(0,0,0,0.511);padding:10px 1rem;font-weight:100}.main__anchor{text-align:center;background-color:#f6f6f6;text-decoration:none;padding:2rem;color:#545862}.main__anchor:hover{color:black;text-decoration:underline}.main__input-wrapper{display:flex;justify-content:space-between;align-items:center;padding:1rem}.main__button,.remove-button{background-color:#2e8ae6;color:white;border:none;padding:1rem;font-size:1.5rem;margin:0.2rem;cursor:pointer}.completed{text-decoration:line-through}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};(()=>{n.d(r,{A:()=>E,K:()=>k});var e=n(379),t=n.n(e),o=n(795),a=n.n(o),i=n(569),c=n.n(i),s=n(565),l=n.n(s),d=n(216),u=n.n(d),p=n(589),f=n.n(p),m=n(800),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),t()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;var h=document.querySelector(".main__anchor"),g=document.querySelector(".main__button"),y=document.querySelector(".main__input"),b=document.querySelector(".list"),x=JSON.parse(localStorage.getItem("tasks"))||[];function _(e){var t=e.querySelector(".list__item-description");t.addEventListener("click",(function(){var n=prompt("Edit task");if(null!==n&&""!==n){t.textContent=n;var r=Array.from(e.parentNode.children).indexOf(e);x[r].description=n,localStorage.setItem("tasks",JSON.stringify(x))}}))}function S(e){var t=document.createElement("li");t.classList.add("list__item");var n=document.createElement("input");n.type="checkbox",n.classList.add("list__item-checkbox"),t.appendChild(n);var r=document.createElement("span");r.classList.add("list__item-description"),r.textContent=e.description,t.appendChild(r);var o=document.createElement("button");return o.textContent="Remove",o.classList.add("remove-button"),t.appendChild(o),t}function k(){b.innerHTML="",x.filter((function(e){return!e.completed})).forEach((function(e){var t=S(e);b.appendChild(t),_(t)}))}function E(){return x}b.addEventListener("click",(function(e){e.target.classList.contains("remove-button")&&function(e){var t=e.target.closest("li");if(t){var n=Array.from(t.parentNode.children).indexOf(t);x.splice(n,1),t.remove();for(var r=n;r<x.length;r+=1)x[r].index=r+1;localStorage.setItem("tasks",JSON.stringify(x))}}(e)})),g.addEventListener("click",(function(){var e=y.value.trim();if(e){var t={description:e,completed:!1,index:x.length+1};x.push(t);var n=S(t);b.appendChild(n),_(n),y.value="",localStorage.setItem("tasks",JSON.stringify(x));var r=n.querySelector(".list__item-checkbox");r.addEventListener("change",(function(){r.checked?(n.classList.add("completed"),t.completed=!0):(n.classList.remove("completed"),t.completed=!1),localStorage.setItem("tasks",JSON.stringify(x))}))}})),k(),h.addEventListener("click",(function(){var e=E().filter((function(e){return!e.completed}));localStorage.setItem("tasks",JSON.stringify(e)),k()}))})()})();