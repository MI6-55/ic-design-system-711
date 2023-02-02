"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[4161],{6341:function(t,n,e){e.d(n,{A:function(){return T},B:function(){return c},C:function(){return Z},D:function(){return F},E:function(){return z},F:function(){return B},G:function(){return h},H:function(){return I},I:function(){return a},J:function(){return g},K:function(){return b},W:function(){return l},a:function(){return q},b:function(){return y},c:function(){return _},d:function(){return Q},e:function(){return f},f:function(){return d},g:function(){return A},h:function(){return w},i:function(){return V},j:function(){return R},k:function(){return S},l:function(){return j},m:function(){return p},n:function(){return r},o:function(){return W},p:function(){return O},q:function(){return H},r:function(){return Y},s:function(){return D},t:function(){return M},u:function(){return x},v:function(){return C},w:function(){return L},x:function(){return N},y:function(){return E},z:function(){return X}});var i=e(9455),r=["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],a={XS:576,S:768,M:992,L:1200,XL:99999},o=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],u=["ic-alert"],s={"ic-alert":["ic-link"]},c=136.701,l=130,p=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e={};return n.forEach((function(n){t.hasAttribute(n)&&(null!==t.getAttribute(n)&&(e[n]=t.getAttribute(n)),t.removeAttribute(n))})),e},h=function(t,n){var e=t._original||t;return{_original:t,emit:v(e.emit.bind(e),n)}},v=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];n=setTimeout.apply(void 0,[t,e].concat(r))}},f=function(t,n,e,i,r){if(void 0!==e&&(t||m(n))){var a=n.querySelectorAll("input.ic-input"),o=Array.from(a).filter((function(t){return n===t.parentElement}))[0];null==o&&((o=n.ownerDocument.createElement("input")).type="hidden",o.classList.add("ic-input"),n.appendChild(o)),o.disabled=r,o.name=e,o.value=i||""}},d=function(t){var n=t.querySelectorAll("input.ic-input"),e=Array.from(n).filter((function(n){return t===n.parentElement}))[0];null==e||e.remove()},m=function(t){return!!t.shadowRoot&&!!t.attachShadow},g=function(t){return t+"-helper-text"},b=function(t){return t+"-validation-text"},w=function(t,n,e){return"".concat(n?g(t):""," ").concat(e?b(t):"").trim()},y=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=t.parentElement||t.getRootNode().host.parentElement,a=r.closest(o.join(","));if(null!==a){var c=a.tagName.toLowerCase(),l=t.tagName.toLowerCase();return(null===(n=s[c])||void 0===n?void 0:n.includes(l))?i.I.Default:null===e||u.includes(c)?a.classList.contains(i.I.Dark)?i.I.Dark:i.I.Light:e}return i.I.Default},N=function(){var t=!1;return"maxTouchPoints"in navigator&&(t=navigator.maxTouchPoints>0),t},x=function(t,n){var e=document.createElement("button");e.setAttribute("type",n.type),e.style.display="none",t.appendChild(e),e.click(),e.remove()},I=function(t){return 0===t.trim().length},L=function(t,n){var e,i=[];if(n.length>0)return n.map((function(t){t.children?t.children.map((function(t){return i.push(t)})):i.push(t)})),null===(e=i.find((function(n){return n.value===t})))||void 0===e?void 0:e.label},C=function(t,n,e,i){return"anywhere"===i?t.filter((function(t){var i;return n?t.label.toLowerCase().includes(e.toLowerCase())||(null===(i=t.description)||void 0===i?void 0:i.toLowerCase().includes(e.toLowerCase())):t.label.toLowerCase().includes(e.toLowerCase())})):t.filter((function(t){var i;return n?t.label.toLowerCase().startsWith(e.toLowerCase())||(null===(i=t.description)||void 0===i?void 0:i.toLowerCase().startsWith(e.toLowerCase())):t.label.toLowerCase().startsWith(e.toLowerCase())}))},k=function(t){return window.matchMedia("(max-width: ".concat(t,"px)")).matches},A=function(){return k(F.S)?F.S:k(F.M)?F.M:k(F.L)?F.L:k(F.XL)?F.XL:F.UNDEFINED},E=function(t){return getComputedStyle(document.documentElement).getPropertyValue(t)},T=function(){var t=E("--ic-theme-primary-r"),n=E("--ic-theme-primary-g"),e=E("--ic-theme-primary-b");return(299*parseInt(t)+587*parseInt(n)+114*parseInt(e))/1e3},S=function(){return T()>133.3505?i.I.Dark:i.I.Light},B=function(t,n){return t&&t.querySelector?t.querySelector('[slot="'.concat(n,'"]')):null},D=function(t,n){return null!==B(t,n)},M=function(t,n){var e=B(t,n);return e?G(e):null},G=function(t){var n=t.firstElementChild;if(null!==n){var e=n.assignedElements?n.assignedElements():n.childNodes;return e.length?e:null}return null===t?null:[t]},O=function t(n){var e={navType:"",parent:null};switch(H(n)){case"IC-NAVIGATION-GROUP":e=t(n.parentElement);break;case"IC-TOP-NAVIGATION":e={navType:"top",parent:K(n)};break;case"IC-SIDE-NAVIGATION":e={navType:"side",parent:K(n)};break;case"IC-PAGE-HEADER":e={navType:"page-header",parent:null}}return e},F={XS:Number(E("--ic-breakpoint-xs").replace("px","")),S:Number(E("--ic-breakpoint-sm").replace("px","")),M:Number(E("--ic-breakpoint-md").replace("px","")),L:Number(E("--ic-breakpoint-lg").replace("px","")),XL:Number(E("--ic-breakpoint-xl").replace("px","")),UNDEFINED:1200},R=function(t,n){return""!==t&&!n},V=function(t,n){return Array.from(t.children).some((function(t){return t.getAttribute("slot")===n}))},W=function(t,n,e){void 0===t&&n!==t&&e()},q=function(t,n){for(var e=0;e<t.length;e++){var i=t[e],r=i.prop,a=i.propName;null==r&&console.error("No ".concat(a," specified for ").concat(n," component - prop '").concat(a,"' (web components) / '").concat(P(a),"' (react) required"))}},P=function(t){for(var n=(t=t.toLowerCase()).split("-"),e=n[0],i=1;i<n.length;i++)e+=n[i].substring(0,1).toUpperCase()+n[i].substring(1);return e},_=function(t){"undefined"!=typeof window&&void 0!==window.ResizeObserver&&t()},U=function(t){return parseInt(t,16)},Z=function(t){var n;return 4===t.length?(n=t.replace("#","").split(""),{r:U(n[0]+n[0]),g:U(n[1]+n[1]),b:U(n[2]+n[2]),a:1}):{r:U(t.slice(1,3)),g:U(t.slice(3,5)),b:U(t.slice(5)),a:1}},z=function(t){var n;if("a"===t.slice(3,4).toLowerCase()){n={r:null,g:null,b:null,a:null};var e=t.substring(5,t.length-1).replace(/ /g,"").split(",");n.r=Number(e[0]),n.g=Number(e[1]),n.b=Number(e[2]),n.a=Number(e[3])}else{n={r:null,g:null,b:null,a:1};var i=t.substring(4,t.length-1).replace(/ /g,"").split(",");n.r=Number(i[0]),n.g=Number(i[1]),n.b=Number(i[2])}return n},X=function(t){return t.scrollWidth>t.clientWidth},H=function(t){return t.parentElement.tagName},K=function(t){return t.parentElement},j=function(){return!!document.querySelector("ic-classification-banner:not([inline='true'])")},J=function(t){return t.closest("FORM")},Q=function(t,n){var e=J(t);null!==e&&e.addEventListener("reset",n)},Y=function(t,n){var e=J(t);null!==e&&e.removeEventListener("reset",n)}},4161:function(t,n,e){e.r(n),e.d(n,{ic_navigation_menu:function(){return s}});var i=e(4942),r=e(5671),a=e(3144),o=e(6902),u=e(6341),s=(e(9455),function(){function t(n){var e=this;(0,r.Z)(this,t),(0,o.r)(this,n),this.icNavigationMenuClose=(0,o.c)(this,"icNavigationMenuClose",7),this.hasButtons=!1,this.hasNavigation=!1,this.navItemAboveButtons=!1,this.navGroupFirst=!1,this.lastTabStop=null,this.closeButton=null,this.closeMenu=function(){e.icNavigationMenuClose.emit()},this.focusCloseButton=function(){e.closeButton.setFocus&&e.closeButton.setFocus()},this.focusLastTabStop=function(){if(null!==e.lastTabStop)switch(e.lastTabStop.tagName){case"IC-NAVIGATION-BUTTON":case"IC-NAVIGATION-ITEM":case"IC-NAVIGATION-GROUP":e.lastTabStop.setFocus();break;case"A":e.lastTabStop.focus()}},this.version="",this.status=""}return(0,a.Z)(t,[{key:"navItemClickHandler",value:function(){this.closeMenu()}},{key:"handleKeyDown",value:function(t){"Tab"===t.key?t.shiftKey?document.activeElement===this.navBarEl&&(t.preventDefault(),this.focusLastTabStop()):document.activeElement!==this.lastTabStop&&null!==this.lastTabStop||(t.preventDefault(),this.focusCloseButton()):"Escape"===t.key&&this.closeMenu()}},{key:"componentWillLoad",value:function(){this.navBarEl=document.querySelector("ic-top-navigation");var t=(0,u.t)(this.el,"navigation");t&&(this.hasNavigation=!0,"IC-NAVIGATION-ITEM"===t[t.length-1].tagName&&(this.navItemAboveButtons=!0),"IC-NAVIGATION-GROUP"===t[0].tagName&&(this.navGroupFirst=!0));var n=(0,u.t)(this.el,"buttons");if(null!==n)this.hasButtons=!0,this.lastTabStop=n[n.length-1];else if(this.hasNavigation){var e=t[t.length-1],i=(0,u.F)(e,"navigation-item");this.lastTabStop=null!==i?i:e}}},{key:"componentDidLoad",value:function(){this.focusCloseButton()}},{key:"componentWillRender",value:function(){this.hasNavigation=(0,u.i)(this.el,"navigation"),this.hasButtons=(0,u.i)(this.el,"buttons")}},{key:"render",value:function(){var t,n,e=this;return(0,o.h)(o.H,null,(0,o.h)("div",{class:"popout-modal",onClick:this.closeMenu}),(0,o.h)("div",{class:"popout-menu",role:"dialog","aria-modal":"true","aria-label":"".concat(this.hasNavigation?"Navigation":"App"," menu")},(0,o.h)("span",{"aria-hidden":"true",id:"navigation-landmark-text",class:"navigation-landmark-text"},"Main navigation"),(0,o.h)("nav",{"aria-labelledby":"navigation-landmark-text","aria-hidden":this.hasNavigation?"false":"true"},(0,o.h)("div",{class:(t={},(0,i.Z)(t,"menu-close-button-container",!0),(0,i.Z)(t,"nav-group-first",this.navGroupFirst),t)},(0,o.h)("ic-button",{ref:function(t){return e.closeButton=t},id:"menu-close-button",class:"menu-close-button",variant:"icon",size:"large","aria-label":"Close ".concat(this.hasNavigation?"navigation":"app"," menu"),onClick:this.closeMenu},(0,o.h)("svg",{slot:"icon",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.h)("path",{d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",fill:"#1759BC"})))),this.hasNavigation&&(0,o.h)("slot",{name:"navigation"})),this.hasButtons&&(0,o.h)("div",{class:(n={},(0,i.Z)(n,"menu-buttons-container",!0),(0,i.Z)(n,"menu-buttons-container-nav-item-above",this.navItemAboveButtons),n)},(0,o.h)("slot",{name:"buttons"})),(""!==this.status||""!==this.version)&&(0,o.h)("div",{class:"menu-status-version-container"},""!==this.status&&(0,o.h)("div",{class:"menu-status"},(0,o.h)("ic-typography",{variant:"label-uppercase","aria-label":"app tag",class:"menu-status-text"},this.status)),""!==this.version&&(0,o.h)("div",{class:"menu-version"},(0,o.h)("ic-typography",{variant:"label",class:"menu-version-text","aria-label":"app version"},this.version)))))}},{key:"el",get:function(){return(0,o.g)(this)}}]),t}());s.style=":host{display:block}.popout-modal{position:absolute;top:0;right:0;bottom:0;left:0}.popout-menu{position:fixed;top:0;right:0;width:256px;bottom:0;background-color:var(--ic-architectural-20);color:var(--ic-color-primary-text);box-shadow:var(--ic-elevation-overlay);overflow-y:auto;overflow-x:hidden;z-index:calc(var(--ic-z-index-overlay) / 2)}:host(.inline) .popout-menu{position:absolute}.menu-close-button-container{position:relative;left:190px;padding:var(--ic-space-md) 0}.nav-group-first{padding-bottom:0}.menu-buttons-container{padding:var(--ic-space-sm) 0;border-bottom:1px solid var(--ic-architectural-200)}.menu-buttons-container-nav-item-above{margin-top:var(--ic-space-md);border-top:1px solid var(--ic-architectural-200)}.menu-status-version-container{display:inline-flex;margin:var(--ic-space-md) var(--ic-space-md) var(--ic-space-xl)}.menu-status{background-color:var(--ic-architectural-500);color:var(--ic-color-white-text);border-radius:80px;width:-moz-fit-content;width:fit-content;padding:var(--ic-space-xxs) var(--ic-space-sm);margin-right:var(--ic-space-xs)}.menu-version{border-radius:16px;background-color:var(--ic-architectural-100);padding:var(--ic-space-xxs) var(--ic-space-sm)}.menu-status-text,.menu-version-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:90px}.navigation-landmark-text{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden}"},9455:function(t,n,e){var i,r;e.d(n,{I:function(){return r},a:function(){return i}}),function(t){t.Warning="warning",t.Error="error",t.Success="success"}(i||(i={})),function(t){t.Default="default",t.Dark="dark",t.Light="light"}(r||(r={}))}}]);
//# sourceMappingURL=4161-4a98809630fd10e52018.js.map