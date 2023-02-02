"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[7915],{6341:function(t,e,n){n.d(e,{A:function(){return z},B:function(){return u},C:function(){return H},D:function(){return B},E:function(){return R},F:function(){return A},G:function(){return p},H:function(){return E},I:function(){return o},J:function(){return m},K:function(){return g},W:function(){return s},a:function(){return P},b:function(){return k},c:function(){return Z},d:function(){return Y},e:function(){return b},f:function(){return h},g:function(){return I},h:function(){return y},i:function(){return F},j:function(){return M},k:function(){return O},l:function(){return J},m:function(){return d},n:function(){return i},o:function(){return _},p:function(){return q},q:function(){return j},r:function(){return Q},s:function(){return S},t:function(){return V},u:function(){return x},v:function(){return C},w:function(){return L},x:function(){return w},y:function(){return T},z:function(){return X}});var r=n(9455),i=["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],o={XS:576,S:768,M:992,L:1200,XL:99999},a=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],c=["ic-alert"],l={"ic-alert":["ic-link"]},u=136.701,s=130,d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return e.forEach((function(e){t.hasAttribute(e)&&(null!==t.getAttribute(e)&&(n[e]=t.getAttribute(e)),t.removeAttribute(e))})),n},p=function(t,e){var n=t._original||t;return{_original:t,emit:f(n.emit.bind(n),e)}},f=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];e=setTimeout.apply(void 0,[t,n].concat(i))}},b=function(t,e,n,r,i){if(void 0!==n&&(t||v(e))){var o=e.querySelectorAll("input.ic-input"),a=Array.from(o).filter((function(t){return e===t.parentElement}))[0];null==a&&((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("ic-input"),e.appendChild(a)),a.disabled=i,a.name=n,a.value=r||""}},h=function(t){var e=t.querySelectorAll("input.ic-input"),n=Array.from(e).filter((function(e){return t===e.parentElement}))[0];null==n||n.remove()},v=function(t){return!!t.shadowRoot&&!!t.attachShadow},m=function(t){return t+"-helper-text"},g=function(t){return t+"-validation-text"},y=function(t,e,n){return"".concat(e?m(t):""," ").concat(n?g(t):"").trim()},k=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=t.parentElement||t.getRootNode().host.parentElement,o=i.closest(a.join(","));if(null!==o){var u=o.tagName.toLowerCase(),s=t.tagName.toLowerCase();return(null===(e=l[u])||void 0===e?void 0:e.includes(s))?r.I.Default:null===n||c.includes(u)?o.classList.contains(r.I.Dark)?r.I.Dark:r.I.Light:n}return r.I.Default},w=function(){var t=!1;return"maxTouchPoints"in navigator&&(t=navigator.maxTouchPoints>0),t},x=function(t,e){var n=document.createElement("button");n.setAttribute("type",e.type),n.style.display="none",t.appendChild(n),n.click(),n.remove()},E=function(t){return 0===t.trim().length},L=function(t,e){var n,r=[];if(e.length>0)return e.map((function(t){t.children?t.children.map((function(t){return r.push(t)})):r.push(t)})),null===(n=r.find((function(e){return e.value===t})))||void 0===n?void 0:n.label},C=function(t,e,n,r){return"anywhere"===r?t.filter((function(t){var r;return e?t.label.toLowerCase().includes(n.toLowerCase())||(null===(r=t.description)||void 0===r?void 0:r.toLowerCase().includes(n.toLowerCase())):t.label.toLowerCase().includes(n.toLowerCase())})):t.filter((function(t){var r;return e?t.label.toLowerCase().startsWith(n.toLowerCase())||(null===(r=t.description)||void 0===r?void 0:r.toLowerCase().startsWith(n.toLowerCase())):t.label.toLowerCase().startsWith(n.toLowerCase())}))},N=function(t){return window.matchMedia("(max-width: ".concat(t,"px)")).matches},I=function(){return N(B.S)?B.S:N(B.M)?B.M:N(B.L)?B.L:N(B.XL)?B.XL:B.UNDEFINED},T=function(t){return getComputedStyle(document.documentElement).getPropertyValue(t)},z=function(){var t=T("--ic-theme-primary-r"),e=T("--ic-theme-primary-g"),n=T("--ic-theme-primary-b");return(299*parseInt(t)+587*parseInt(e)+114*parseInt(n))/1e3},O=function(){return z()>133.3505?r.I.Dark:r.I.Light},A=function(t,e){return t&&t.querySelector?t.querySelector('[slot="'.concat(e,'"]')):null},S=function(t,e){return null!==A(t,e)},V=function(t,e){var n=A(t,e);return n?D(n):null},D=function(t){var e=t.firstElementChild;if(null!==e){var n=e.assignedElements?e.assignedElements():e.childNodes;return n.length?n:null}return null===t?null:[t]},q=function t(e){var n={navType:"",parent:null};switch(j(e)){case"IC-NAVIGATION-GROUP":n=t(e.parentElement);break;case"IC-TOP-NAVIGATION":n={navType:"top",parent:U(e)};break;case"IC-SIDE-NAVIGATION":n={navType:"side",parent:U(e)};break;case"IC-PAGE-HEADER":n={navType:"page-header",parent:null}}return n},B={XS:Number(T("--ic-breakpoint-xs").replace("px","")),S:Number(T("--ic-breakpoint-sm").replace("px","")),M:Number(T("--ic-breakpoint-md").replace("px","")),L:Number(T("--ic-breakpoint-lg").replace("px","")),XL:Number(T("--ic-breakpoint-xl").replace("px","")),UNDEFINED:1200},M=function(t,e){return""!==t&&!e},F=function(t,e){return Array.from(t.children).some((function(t){return t.getAttribute("slot")===e}))},_=function(t,e,n){void 0===t&&e!==t&&n()},P=function(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=r.prop,o=r.propName;null==i&&console.error("No ".concat(o," specified for ").concat(e," component - prop '").concat(o,"' (web components) / '").concat(W(o),"' (react) required"))}},W=function(t){for(var e=(t=t.toLowerCase()).split("-"),n=e[0],r=1;r<e.length;r++)n+=e[r].substring(0,1).toUpperCase()+e[r].substring(1);return n},Z=function(t){"undefined"!=typeof window&&void 0!==window.ResizeObserver&&t()},G=function(t){return parseInt(t,16)},H=function(t){var e;return 4===t.length?(e=t.replace("#","").split(""),{r:G(e[0]+e[0]),g:G(e[1]+e[1]),b:G(e[2]+e[2]),a:1}):{r:G(t.slice(1,3)),g:G(t.slice(3,5)),b:G(t.slice(5)),a:1}},R=function(t){var e;if("a"===t.slice(3,4).toLowerCase()){e={r:null,g:null,b:null,a:null};var n=t.substring(5,t.length-1).replace(/ /g,"").split(",");e.r=Number(n[0]),e.g=Number(n[1]),e.b=Number(n[2]),e.a=Number(n[3])}else{e={r:null,g:null,b:null,a:1};var r=t.substring(4,t.length-1).replace(/ /g,"").split(",");e.r=Number(r[0]),e.g=Number(r[1]),e.b=Number(r[2])}return e},X=function(t){return t.scrollWidth>t.clientWidth},j=function(t){return t.parentElement.tagName},U=function(t){return t.parentElement},J=function(){return!!document.querySelector("ic-classification-banner:not([inline='true'])")},K=function(t){return t.closest("FORM")},Y=function(t,e){var n=K(t);null!==n&&n.addEventListener("reset",e)},Q=function(t,e){var n=K(t);null!==n&&n.removeEventListener("reset",e)}},7915:function(t,e,n){n.r(e),n.d(e,{ic_back_to_top:function(){return u}});var r=n(4942),i=n(5671),o=n(3144),a=n(6902),c=n(6341),l=(n(9455),"Back to top"),u=function(){function t(e){var n=this;(0,i.Z)(this,t),(0,a.r)(this,e),this.topObserver=null,this.setTargetElVisible=function(t){n.targetElVisible=t},this.setFooterVisible=function(t){n.checkForClassificationBanner(),"undefined"!=typeof window&&0===window.scrollY?n.footerVisible=!1:n.footerVisible=t},this.targetElObserverCallback=function(t){n.setTargetElVisible(t[0].isIntersecting)},this.footerObserverCallback=function(t){n.setFooterVisible(t[0].isIntersecting)},this.findTargetEl=function(t){var e=null;return null==t?console.log("Error: No target ID specified for back to top component - defaulting to top of page"):null===(e=document.querySelector(0===t.indexOf("#")?t:"#"+t))&&console.log("Error: Back to top target element '".concat(t,"' not found - defaulting to top of page")),e},this.createTopObserver=function(t){var e;if(n.targetEl=n.findTargetEl(t),null!==n.topObserver){var r=document.querySelector("#ic-back-to-top-target");null!==r&&(n.topObserver.unobserve(r),r.remove())}null===n.targetEl?(e=document.body,n.targetEl=e.firstElementChild,n.isTargetElNull=!0):(e=n.targetEl.parentNode,n.isTargetElNull=!1);var i=document.createElement("div");i.setAttribute("id","ic-back-to-top-target"),e.insertBefore(i,n.targetEl);var o=getComputedStyle(n.targetEl).marginTop;n.topObserver=new IntersectionObserver(n.targetElObserverCallback,{threshold:[0],rootMargin:"".concat(o," 0px 0px 0px")}),n.topObserver.observe(i)},this.handleClick=function(){n.isTargetElNull?window.scrollTo(0,0):n.targetEl.scrollIntoView()},this.checkForClassificationBanner=function(){var t=document.querySelectorAll("ic-classification-banner:not([inline='true'])");n.bannerOffset=t.length>0},this.target=void 0,this.bannerOffset=!1,this.targetElVisible=!0,this.footerVisible=!1}return(0,o.Z)(t,[{key:"watchPropHandler",value:function(t,e){var n=this;(0,c.o)(e,t,(function(){n.createTopObserver(t)}))}},{key:"componentWillLoad",value:function(){this.createTopObserver(this.target),this.checkForClassificationBanner();var t=document.querySelectorAll("ic-footer");if(0===t.length&&(t=document.querySelectorAll("footer")),t.length){var e=t[t.length-1],n=this.bannerOffset?.15:0;new IntersectionObserver(this.footerObserverCallback,{threshold:[n]}).observe(e)}}},{key:"componentDidLoad",value:function(){(0,c.a)([{prop:this.target,propName:"target"}],"Back to Top")}},{key:"render",value:function(){var t,e=this.bannerOffset,n=this.targetElVisible,i=this.footerVisible;return(0,a.h)("button",{class:(t={},(0,r.Z)(t,"ic-back-to-top-link",!0),(0,r.Z)(t,"offset-banner",e),(0,r.Z)(t,"show",!n),(0,r.Z)(t,"by-footer",i),t),"aria-label":l,onClick:this.handleClick},(0,a.h)("span",{class:"ic-back-to-top-icon",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 16 16" width="16px" aria-hidden="true">\n    <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z"/>\n</svg>'}),(0,a.h)("ic-typography",{variant:"subtitle-small"},(0,a.h)("span",null,l)))}},{key:"el",get:function(){return(0,a.g)(this)}}],[{key:"watchers",get:function(){return{target:["watchPropHandler"]}}}]),t}();u.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;position:absolute;right:0}button{position:fixed;right:var(--ic-space-md);bottom:var(--ic-space-md);height:40px;align-items:center;padding:var(--ic-space-xs) var(--ic-space-md) var(--ic-space-xs)\n    var(--ic-space-sm);margin:0;gap:var(--ic-space-xs);display:flex;background-color:var(--ic-architectural-white);border:1px solid var(--ic-action-default);outline-width:inherit;box-sizing:border-box;box-shadow:var(--ic-elevation-overlay);border-radius:80px;text-decoration:none;visibility:hidden;opacity:0;transition:visibility 0s linear var(--ic-transition-duration-slow),\n    opacity var(--ic-transition-duration-slow);cursor:pointer;z-index:var(--ic-z-index-overlay)}button:hover{text-decoration:none;background-color:var(--ic-action-default-bg-hover-no-alpha);border:1px solid var(--ic-action-default-hover)}button:active{text-decoration:none;background-color:var(--ic-action-default-bg-active-no-alpha);border:1px solid var(--ic-action-default-active)}button:focus{box-shadow:var(--ic-border-focus)}.ic-back-to-top-link.show{visibility:visible;opacity:1;transition:visibility 0s linear 0s,\n    opacity var(--ic-transition-duration-slow),\n    box-shadow var(--ic-easing-transition-fast)}.ic-back-to-top-link.by-footer{position:relative;right:var(--ic-space-md);bottom:56px}.ic-back-to-top-link.offset-banner{margin-bottom:var(--ic-space-lg)}.ic-back-to-top-icon{fill:var(--ic-action-default);padding-left:var(--ic-space-xxs);padding-top:var(--ic-space-xxxs)}.ic-back-to-top-link span{color:var(--ic-action-default)}.ic-back-to-top-link:hover .ic-back-to-top-icon{fill:var(--ic-action-default-hover)}.ic-back-to-top-link:hover span{color:var(--ic-action-default-hover)}@media (forced-colors: active){.ic-back-to-top-icon{fill:currentcolor}}'},9455:function(t,e,n){var r,i;n.d(e,{I:function(){return i},a:function(){return r}}),function(t){t.Warning="warning",t.Error="error",t.Success="success"}(r||(r={})),function(t){t.Default="default",t.Dark="dark",t.Light="light"}(i||(i={}))}}]);
//# sourceMappingURL=7915-74e142f8a9b33a26194f.js.map