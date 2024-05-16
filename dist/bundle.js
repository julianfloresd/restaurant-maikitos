(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),a=n.n(o),c=n(645),d=n.n(c)()(a());d.push([e.id,".nav-container {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\nul {\n    display: flex;\n    justify-content: space-between;\n    gap: 3rem\n}\n\nli {\n    list-style: none;\n    margin-left: 0;\n}\n\n.logo {\n    font-size: x-large;\n    font-weight: bold;\n}\n\n.homePageContent {\n    text-align: center;\n}\n\nspan {\n    float:right\n}",""]);const s=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,c){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(d[r]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);o&&d[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},d=[],s=0;s<e.length;s++){var r=e[s],i=o.base?r[0]+o.base:r[0],l=c[i]||0,p="".concat(i," ").concat(l);c[i]=l+1;var u=n(p),m={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var C=a(m,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:C,references:1})}d.push(p)}return d}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var c=o(e=e||[],a=a||{});return function(e){e=e||[];for(var d=0;d<c.length;d++){var s=n(c[d]);t[s].references--}for(var r=o(e,a),i=0;i<c.length;i++){var l=n(c[i]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=r}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),c=n(569),d=n.n(c),s=n(565),r=n.n(s),i=n(216),l=n.n(i),p=n(589),u=n.n(p),m=n(28),C={};C.styleTagTransform=u(),C.setAttributes=r(),C.insert=d().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=l(),t()(m.Z,C),m.Z&&m.Z.locals&&m.Z.locals;const h=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("pageContent"),e.appendChild(t);const n=document.createElement("h1");n.textContent="Food & Share!",t.appendChild(n);const o=document.createElement("p");o.textContent="Tienes un antojo? Nosotros te los cumplimos!!",t.appendChild(o);const a=document.createElement("button");a.textContent="Order Now!",t.appendChild(a);const c=document.createElement("button");c.textContent="Make a Reservation!",t.appendChild(c)},f=()=>{const e=document.querySelector("#content"),t=document.querySelector(".pageContent");t&&e.removeChild(t)};(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("nav-container"),e.appendChild(t);const n=document.createElement("span");n.classList.add("logo"),n.textContent="Maikitos",t.appendChild(n);const o=document.createElement("ul");t.appendChild(o);const a=document.createElement("li");a.textContent="Home",a.id="home-tab",o.appendChild(a);const c=document.createElement("li");c.textContent="Menu",c.id="menu-tab",o.appendChild(c);const d=document.createElement("li");d.textContent="Contact Us",d.id="contact-tab",o.appendChild(d),a.addEventListener("click",(()=>{f(),h()})),c.addEventListener("click",(()=>{f(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("pageContent"),e.appendChild(t);const n=document.createElement("div");n.classList.add("menu-category"),t.appendChild(n);const o=document.createElement("h2");o.classList.add("category-header"),o.textContent="ENTRADAS",n.appendChild(o);const a=document.createElement("h3");a.classList.add("menu-item");const c=document.createElement("span");c.classList.add("precio"),a.textContent="GUACAMOLE TRADICIONAL",c.textContent="$265",n.appendChild(a),a.appendChild(c);const d=document.createElement("h3");d.classList.add("menu-item");const s=document.createElement("span");s.classList.add("precio"),d.textContent="TAQUITOS DORADOS",s.textContent="$325",n.appendChild(d),d.appendChild(s);const r=document.createElement("h3");r.classList.add("menu-item");const i=document.createElement("span");i.classList.add("precio"),r.textContent="CANASTITAS DE CHICHARRON",i.textContent="$425",n.appendChild(r),r.appendChild(i);const l=document.createElement("h3");l.classList.add("menu-item");const p=document.createElement("span");p.classList.add("precio"),l.textContent="MONTADITOS DE CAMARON",p.textContent="$695",n.appendChild(l),l.appendChild(p);const u=document.createElement("h3");u.classList.add("menu-item");const m=document.createElement("span");m.classList.add("precio"),u.textContent="CROQUETAS DE POLLO",m.textContent="$265",n.appendChild(u),u.appendChild(m);const C=document.createElement("h3");C.classList.add("menu-item");const h=document.createElement("span");h.classList.add("precio"),C.textContent="BOLITAS DE QUESO",h.textContent="$265",n.appendChild(C),C.appendChild(h);const f=document.createElement("h3");f.classList.add("menu-item");const E=document.createElement("span");E.classList.add("precio"),f.textContent="SALCHICHAS A LA PARRILLA",E.textContent="$325",n.appendChild(f),f.appendChild(E);const v=document.createElement("h3");v.classList.add("menu-item");const x=document.createElement("span");x.classList.add("precio"),v.textContent="SATAY CRISPY DE POLLO",x.textContent="$325",n.appendChild(v),v.appendChild(x);const L=document.createElement("h3");L.classList.add("menu-item");const y=document.createElement("span");y.classList.add("precio"),L.textContent="MAIKIROLLS",y.textContent="$265",n.appendChild(L),L.appendChild(y)})()})),d.addEventListener("click",(()=>{f(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("pageContent"),e.appendChild(t);const n=document.createElement("div");n.classList.add("address"),t.appendChild(n);const o=document.createElement("h2");o.textContent="Direcciones:",n.appendChild(o);const a=document.createElement("h3");a.textContent="San Fco.: ";const c=document.createElement("p");c.textContent="Av. Pdte. Ant. Guzmán. Plaza Edith",n.appendChild(a),n.appendChild(c);const d=document.createElement("h3");d.textContent="Santiago: ";const s=document.createElement("p");s.textContent="Ave. Rafael Vidal, frente a Lumijor",n.appendChild(d),n.appendChild(s);const r=document.createElement("div");r.classList.add("hours"),t.appendChild(r);const i=document.createElement("h2");i.textContent="Horarios:",r.appendChild(i);const l=document.createElement("h3");l.textContent="San Fco.: ";const p=document.createElement("p");p.textContent="12:00PM-11:00PM - Todos los días",r.appendChild(l),r.appendChild(p);const u=document.createElement("h3");u.textContent="San Fco.: ";const m=document.createElement("p");m.textContent="Lun Mie y Jue:6:00PM-11:00PM, Vie-Sab:6:00PM-12:00AM, Dom 1:00PM-11:00PM - MARTES NO LABORAMOS",r.appendChild(u),r.appendChild(m);const C=document.createElement("div");C.classList.add("phone"),t.appendChild(C);const h=document.createElement("h2");h.textContent="Numeros telefonicos:",C.appendChild(h);const f=document.createElement("h3");f.textContent="San Fco.: ";const E=document.createElement("p");E.textContent="Tel: (809) 588-6111",C.appendChild(f),C.appendChild(E);const v=document.createElement("h3");v.textContent="Santiago: ";const x=document.createElement("p");x.textContent="Tel: 809-708-4661",C.appendChild(v),C.appendChild(x)})()}))})(),h()})()})();