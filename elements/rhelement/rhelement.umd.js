!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.RHElement=t()}(this,function(){"use strict";function e(){console.log("[reveal] web components ready"),console.log("[reveal] elements ready, revealing the body"),window.document.body.removeAttribute("unresolved")}var t=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),n=function(e){function r(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return o.tag=e,o._queue=[],o.template=document.createElement("template"),o.attachShadow({mode:"open"}),t&&o._queueAction({type:"setProperty",data:{name:"rhType",value:t}}),n||o.render(),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,HTMLElement),t(r,[{key:"rhType",get:function(){return this.getAttribute("rh-type")},set:function(e){this.setAttribute("rh-type",e)}}],[{key:"create",value:function(e){window.customElements.define(e.tag,e)}},{key:"RhTypes",get:function(){return{Container:"container",Content:"content",Pattern:"pattern"}}}]),t(r,[{key:"connectedCallback",value:function(){window.ShadyCSS&&ShadyCSS.styleElement(this),this._queue.length&&this._processQueue()}},{key:"_queueAction",value:function(e){this._queue.push(e)}},{key:"_processQueue",value:function(){var t=this;this._queue.forEach(function(e){t["_"+e.type](e.data)}),this._queue=[]}},{key:"_setProperty",value:function(e){var t=e.name,n=e.value;this[t]=n}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}}]),r}();return window.WebComponents.ready?e():window.addEventListener("WebComponentsReady",e),n});
//# sourceMappingURL=rhelement.umd.js.map