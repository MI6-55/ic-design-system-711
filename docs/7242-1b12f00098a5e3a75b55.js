"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[7242],{7242:function(i,s,e){e.r(s),e.d(s,{ic_toast_region:function(){return n}});var t=e(3660);const n=class{constructor(i){(0,t.r)(this,i),this.pendingVisibility=[]}handleDismissedToast(){var i;this.pendingVisibility.length>0?(this.pendingVisibility[0].setVisible().then((i=>this.previouslyFocused=i)),this.pendingVisibility.shift()):this.previouslyFocused&&"setFocus"in this.previouslyFocused?this.previouslyFocused.setFocus():null===(i=this.previouslyFocused)||void 0===i||i.focus()}async setVisible(i){const s=Array.from(document.querySelectorAll("ic-toast")).filter((i=>"none"!==window.getComputedStyle(i).display));-1===s.indexOf(i)&&s.length<=0&&i.setVisible().then((i=>this.previouslyFocused=i)),s.length>0&&this.pendingVisibility.push(i)}render(){return(0,t.h)("slot",null)}get el(){return(0,t.g)(this)}}}}]);