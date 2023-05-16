"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[3913],{3913:function(e,t,o){o.r(t),o.d(t,{ic_popover_menu:function(){return r}});var n=o(3795),i=o(9801),s=o(9070);o(9455);const r=class{constructor(e){(0,n.r)(this,e),this.setButtonFocus=()=>{var e;null===(e=this.popoverMenuEls[this.currentFocus])||void 0===e||e.focus()},this.popoverMenuEls=[],this.findAnchorEl=e=>{let t=null;return null==e?void 0===this.submenuId&&console.error("No anchor specified for popover component"):(t=document.querySelector(0===e.indexOf("#")?e:"#"+e),null===t&&console.error("Popover anchor element '".concat(e,"' not found"))),t},this.isNotPopoverMenuEl=e=>{const t=e.target;return t.id!==this.anchor&&"IC-MENU-ITEM"!==t.tagName&&"IC-MENU-GROUP"!==t.tagName&&"IC-POPOVER-MENU"!==t.tagName},this.closeMenu=()=>{var e;this.open=!1,null===(e=this.anchorEl)||void 0===e||e.focus()},this.getNextItemToSelect=(e,t)=>{const o=this.popoverMenuEls.length-1;e<1&&(e=0);let n=t?e+1:e-1;return n<0?n=o:n>o&&(n=0),n},this.addMenuItems=e=>{for(let t=0;t<e.length;t++){const o=e[t];if("IC-MENU-ITEM"===o.tagName)this.popoverMenuEls.push(o);else if("IC-MENU-GROUP"===o.tagName){const e=o.shadowRoot.querySelector("ul"),t=(0,i.t)(e);this.addMenuItems(t)}}},this.getMenuAriaLabel=()=>{const e=this.host.getAttribute("aria-label");return void 0!==this.submenuId?"".concat(e,", within nested level ").concat(this.submenuLevel," ").concat(this.parentLabel," submenu,"):e},this.handleBackButtonClick=()=>{this.parentPopover.openFromChild(),this.open=!1},this.anchor=void 0,this.submenuId=void 0,this.open=void 0,this.parentPopover=void 0,this.submenuLevel=1,this.parentLabel=void 0,this.openingFromChild=!1,this.openingFromParent=!1}handleMenuItemClick(e){e.detail.hasSubMenu||"Back"===e.detail.label||this.closeMenu()}handleSubmenuChange(e){const t=e.target;this.open=!1;const o=document.querySelector("ic-popover-menu[submenu-id=".concat(t.submenuTriggerFor,"]"));o.parentPopover=this.host,o.anchor=this.anchor,o.ariaLabel=this.host.getAttribute("aria-label"),o.openFromParent(),o.submenuLevel=this.submenuLevel+1,o.parentLabel=t.label}watchOpenHandler(){this.open&&(void 0===this.parentPopover||this.popoverMenuEls.some((e=>e.id))||this.popoverMenuEls.unshift(this.backButton),this.currentFocus=void 0!==this.submenuId?1:0,setTimeout(this.setButtonFocus,50))}handleClick(e){e.preventDefault(),this.open&&this.isNotPopoverMenuEl(e)&&this.closeMenu()}async openFromChild(){this.open=!0,this.openingFromChild=!0,setTimeout((()=>this.openingFromChild=!1),1e3)}async openFromParent(){this.open=!0,this.openingFromParent=!0,setTimeout((()=>this.openingFromParent=!1),1e3)}handleKeyDown(e){switch(e.key){case"ArrowDown":e.preventDefault(),this.currentFocus=this.getNextItemToSelect(this.currentFocus,!0),this.setButtonFocus();break;case"ArrowUp":e.preventDefault(),this.currentFocus=this.getNextItemToSelect(this.currentFocus,!1),this.setButtonFocus();break;case"Home":this.currentFocus=0,this.setButtonFocus();break;case"End":this.currentFocus=this.popoverMenuEls.length-1,this.setButtonFocus();break;case"Escape":case"Tab":this.open&&(this.closeMenu(),this.host.blur())}}componentDidRender(){this.open&&(0,s.c)(this.anchorEl,this.host,{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,4]}}]})}componentWillRender(){this.anchorEl=this.findAnchorEl(this.anchor)}componentDidLoad(){const e=this.host.shadowRoot.querySelector("ul.button"),t=(0,i.t)(e);null!==t&&this.addMenuItems(t),void 0===this.submenuId&&null===this.host.getAttribute("aria-label")&&console.error("No aria-label specified for popover menu component - aria-label required")}render(){return(0,n.h)(n.H,{class:{open:this.open}},(0,n.h)("div",{id:void 0===this.parentPopover?"ic-popover-submenu-".concat(this.submenuId):"",class:{menu:!0},tabindex:open?"0":"-1"},(0,n.h)("div",{class:{"opening-from-parent":this.openingFromParent,"opening-from-child":this.openingFromChild}},void 0!==this.submenuId&&(0,n.h)("div",null,(0,n.h)("ic-menu-item",{class:"ic-popover-submenu-back-button",ref:e=>this.backButton=e,label:"Back",onClick:this.handleBackButtonClick,id:"ic-popover-submenu-back-button-".concat(this.submenuLevel)},(0,n.h)("svg",{slot:"icon",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"submenu-back-icon"},(0,n.h)("path",{d:"M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z",fill:"currentColor"}))),(0,n.h)("ic-typography",{variant:"subtitle-small",class:"parent-label"},this.parentLabel)),(0,n.h)("ul",{class:"button","aria-label":this.getMenuAriaLabel(),role:"menu","aria-owns":void 0!==this.submenuId&&"ic-popover-submenu-back-button-".concat(this.submenuLevel),"aria-controls":void 0!==this.submenuId&&"ic-popover-submenu-back-button-".concat(this.submenuLevel)},(0,n.h)("slot",null)))))}static get delegatesFocus(){return!0}get host(){return(0,n.g)(this)}static get watchers(){return{open:["watchOpenHandler"]}}};r.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}@media (prefers-reduced-motion: no-preference){:host .opening-from-parent{animation:slide-in var(--ic-transition-duration-slow) ease-in-out}:host .opening-from-child{animation:slide-out var(--ic-transition-duration-slow) ease-in-out}}:host{border-radius:var(--ic-border-radius);color:var(--ic-color-primary-text);background-color:var(--ic-architectural-white);position:relative;z-index:var(--ic-z-index-popover);box-sizing:border-box;box-shadow:var(--ic-elevation-overlay);display:none}.menu{border:0.063rem solid var(--ic-architectural-400);border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);visibility:hidden;height:0}.button{text-decoration:none;list-style-type:none}:host(:focus-within){box-shadow:var(--ic-border-focus)}.menu:focus-visible{outline:none}:host(.open){display:block;min-width:calc(20rem - var(--ic-space-xl));width:var(--popover-width, 20rem);max-width:calc(100vw - var(--ic-space-xl))}:host(.open) .menu{visibility:visible;height:-moz-fit-content;height:fit-content;max-height:var(--max-height, -moz-fit-content);max-height:var(--max-height, fit-content);overflow-y:auto;overflow-x:hidden}.parent-label{color:var(--ic-color-tertiary-text);margin:var(--ic-space-xs) var(--ic-space-xs) 0}@keyframes slide-in{from{opacity:0;transform:translateX(10rem)}to{opacity:1;transform:translateX(0)}}@keyframes slide-out{from{opacity:0;transform:translateX(-10rem)}to{opacity:1;transform:translateX(0)}}'}}]);
//# sourceMappingURL=3913-1e9b3328c5fb2b56c406.js.map