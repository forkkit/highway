!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){var i;window,i=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){function n(){}n.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function r(){i.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,r=n.length;i<r;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],r=[];if(i&&e)for(var s=0,o=i.length;s<o;s++)i[s].fn!==e&&i[s].fn._!==e&&r.push(i[s]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i);class s{constructor(t){this.view=t.view,this.page=t.page.cloneNode(!0),this.Transition=t.transition?new t.transition(t.view):null}init(){this.onEnter&&this.onEnter(),this.onEnterCompleted&&this.onEnterCompleted()}add(){this.wrapper=document.querySelector("[router-wrapper]"),this.wrapper.appendChild(this.view),document.title=this.page.title,document.body.className=this.page.body.className,document.documentElement.className=this.page.documentElement.className}remove(){this.wrapper=this.view.parentNode,this.wrapper.removeChild(this.view)}show(){return new Promise(async t=>{this.add(),this.onEnter&&this.onEnter(),this.Transition&&await this.Transition.show(),this.onEnterCompleted&&this.onEnterCompleted(),t()})}hide(){return new Promise(async t=>{this.onLeave&&this.onLeave(),this.Transition&&await this.Transition.hide(),this.remove(),this.onLeaveCompleted&&this.onLeaveCompleted(),t()})}}const o=new window.DOMParser;class a{static getOrigin(t){const e=t.match(/(https?:\/\/[\w\-.]+)/);return e?e[1]:null}static getPathname(t){const e=t.match(/https?:\/\/.*?(\/[\w_\-./]+)/);return e?e[1]:null}static getAnchor(t){const e=t.match(/(#.*)$/);return e?e[1]:null}static getParams(t){const e=t.match(/\?([\w_\-.=&]+)/);if(!e)return null;const n=e[1].split("&"),i={};for(let t=0;t<n.length;t++){const e=n[t].split("="),{0:r}=e,{1:s}=e;i[r]=s}return i}static getDOM(t){return"string"==typeof t?o.parseFromString(t,"text/html"):t}static getView(t){return t.querySelector("[router-view]")}static getSlug(t){return t.getAttribute("router-view")}static getRenderer(t,e){return void 0!==e&&e&&t in e?e[t]:s}static getTransition(t,e){return void 0!==e&&e?t in e?e[t]:"default"in e?e.default:null:null}}e.default={Core:class extends r.a{constructor({renderers:t,transitions:e}={}){super(),this.renderers=t,this.transitions=e,this.state=this.getState(window.location.href),this.props=this.getProps(document),this.cache=new Map,this.navigating=!1,this.From=new(a.getRenderer(this.props.slug,this.renderers))(this.props),this.From.init(),window.addEventListener("popstate",this.popState.bind(this)),this.bubble()}getProps(t){const e=a.getDOM(t),n=a.getView(e),i=a.getSlug(n);return{page:e,view:n,slug:i,transition:a.getTransition(i,this.transitions)}}getState(t){return{url:t,anchor:a.getAnchor(t),origin:a.getOrigin(t),params:a.getParams(t),pathname:a.getPathname(t)}}bubble(){document.addEventListener("click",t=>{if("A"===t.target.tagName){const e=a.getAnchor(t.target.href),n=a.getPathname(t.target.href);t.target.target||(t.preventDefault(),this.navigating||n===this.state.pathname?e&&(window.location.href=t.target.href):this.pushState(t))}})}popState(){const t=this.getState(window.location.href);t.pathname!==this.state.pathname&&(this.state=t,this.beforeFetch())}pushState(t){this.state=this.getState(t.target.href),window.history.pushState(this.state,"",this.state.url),this.beforeFetch()}async beforeFetch(){if(this.navigating=!0,this.emit("NAVIGATE_OUT",this.From,this.state),await this.From.hide(),this.cache.has(this.state.pathname))this.props=this.cache.get(this.state.pathname);else{const t=await this.fetch();this.props=this.getProps(t),this.cache.set(this.state.pathname,this.props)}this.afterFetch()}async fetch(){const t=await fetch(this.state.url,{mode:"same-origin",method:"GET",headers:{"X-Requested-With":"Highway"},credentials:"same-origin"});if(t.status>=200&&t.status<300)return t.text();throw this.emit("NAVIGATE_ERROR",t),new Error(t.statusText)}async afterFetch(){window.scrollTo(0,0),this.To=new(a.getRenderer(this.props.slug,this.renderers))(this.props),this.emit("NAVIGATE_IN",this.To,this.state),await this.To.show(),this.navigating=!1,this.emit("NAVIGATE_END",this.From,this.To,this.state),this.From=this.To}},Helpers:a,Renderer:s,Transition:class{constructor(t){this.view=t}show(){return new Promise(t=>{this.in&&"function"==typeof this.in&&this.in(this.view,t)})}hide(){return new Promise(t=>{this.out&&"function"==typeof this.out&&this.out(this.view,t)})}}}}])},t.exports=i()},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i);var s=class extends r.a.Renderer{onEnter(){}onLeave(){}onEnterCompleted(){}onLeaveCompleted(){}};var o=class extends r.a.Renderer{onEnter(){}onLeave(){}onEnterCompleted(){}onLeaveCompleted(){}};new r.a.Core({renderers:{home:s,page:o}})}]);