!function(){"use strict";var n=document.querySelector(".nav-container"),i=document.querySelector(".nav-toggle");i.addEventListener("click",function(e){if(i.classList.contains("is-active"))return r(e);var t=document.documentElement;t.classList.add("is-clipped--nav"),i.classList.add("is-active"),n.classList.add("is-active"),t.addEventListener("click",r),l(e)}),n.addEventListener("click",l);var e=n.querySelector("[data-panel=menu]");if(e){var t,a,c=n.querySelector(".nav"),s=e.querySelector(".is-current-page");s?(function(e){var t,n=e.parentNode;for(;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}(s),function(e,t){var n=e.getBoundingClientRect(),i=n.height,a=window.getComputedStyle(c);"sticky"===a.position&&(i-=n.top-parseFloat(a.top));e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-i)+t.offsetTop)}(e,s.querySelector(".nav-link"))):e.scrollTop=0,(t=e,a=".nav-item-toggle",[].slice.call(t.querySelectorAll(a))).forEach(function(e){var t=e.parentElement;e.addEventListener("click",o.bind(t));var n=function(e,t){var n;if("nextElementSibling"in e)n=e.nextElementSibling;else for(n=e;(n=n.nextSibling)&&1!==n.nodeType;);return n&&t?n[n.matches?"matches":"msMatchesSelector"](t)&&n:n}(e,".nav-text");n&&(n.style.cursor="pointer",n.addEventListener("click",o.bind(t)))}),c.querySelector(".context").addEventListener("click",function(){var e=c.querySelector(".is-active[data-panel]"),t="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),c.querySelector("[data-panel="+t+"]").classList.toggle("is-active")}),e.addEventListener("mousedown",function(e){1<e.detail&&e.preventDefault()})}function o(){this.classList.toggle("is-active")}function r(e){var t=document.documentElement;t.classList.remove("is-clipped--nav"),i.classList.remove("is-active"),n.classList.remove("is-active"),t.removeEventListener("click",r),l(e)}function l(e){e.stopPropagation()}}();
!function(){"use strict";var o=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function i(e){e&&(window.location.hash="#"+this.id,e.preventDefault()),window.scrollTo(0,function e(t,n){return o.contains(t)?e(t.offsetParent,t.offsetTop+n):n}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var n,o;(n=window.location.hash)&&(o=document.getElementById(n.slice(1)))&&(i.bind(o)(),setTimeout(i.bind(o),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t,n;(t=e.hash.slice(1))&&(n=document.getElementById(t))&&e.addEventListener("click",i.bind(n))})}();
!function(){"use strict";var e=document.querySelector(".page-versions .version-menu-toggle");if(e){var t=document.querySelector(".page-versions");e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")})}}();
document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&t.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("is-active"),document.getElementById(e.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})})});
!function(){"use strict";for(var e=document.getElementsByTagName("code"),t=0;t<e.length;t++){l(e[t])}var n=document.getElementsByTagName("pre");for(t=0;t<n.length;t++){var o=n[t],a=o.firstChild;a&&"CODE"!==a.tagName&&l(o)}function l(e){var t=document.createElement("button");t.innerHTML='<span class="copy-label">copy</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0909 14.5457H16.3636V4.54559C16.3636 4.04376 15.9564 3.63649 15.4545 3.63649H5.45447V0.909196C5.45447 0.407375 5.86174 9.91821e-05 6.36356 9.91821e-05H19.0909C19.5927 9.91821e-05 20 0.407375 20 0.909196V13.6366C20 14.1384 19.5927 14.5457 19.0909 14.5457Z" fill="#333333"/><path d="M13.6365 5.45444H0.909097C0.406366 5.45444 0 5.86081 0 6.36354V19.0909C0 19.5927 0.406366 20 0.909097 20H13.6365C14.1392 20 14.5456 19.5927 14.5456 19.0909V6.36354C14.5456 5.86081 14.1392 5.45444 13.6365 5.45444Z" fill="#333333"/></svg>',t.classList="copy-button",e.appendChild(t),e.addEventListener("click",c)}function c(e){var t=e&&e.target,n=t.parentNode.innerText,o=t.querySelector(".copy-label"),a=document.createElement("textarea");a.value=n,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a);var l=0<document.getSelection().rangeCount&&document.getSelection().getRangeAt(0);a.select(),document.execCommand("copy"),document.body.removeChild(a),l&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(l)),o.innerHTML="copied",setTimeout(function(){o.innerHTML="copy"},3e3)}}();
//# sourceMappingURL=site.js.map