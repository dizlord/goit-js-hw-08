function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(E,t),l?b(e):a}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function E(){var e=g();if(T(e))return j(e);f=setTimeout(E,function(e){var n=t-(e-u);return s?d(n,i-(e-c)):n}(e))}function j(e){return f=void 0,v&&r?b(e):(r=o=void 0,a)}function w(){var e=g(),n=T(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(E,t),b(u)}return void 0===f&&(f=setTimeout(E,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:j(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const b=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},h=e=>{try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}};let T=null;const E={formEl:document.querySelector(".feedback-form")};E.formEl.addEventListener("input",e(t)((function(e){T={email:e.currentTarget.email.value,message:e.currentTarget.message.value},b("feedback-form-state",T)}),500)),E.formEl.addEventListener("submit",(function(e){e.preventDefault(),T&&(console.log(T),e.currentTarget.reset(),h("feedback-form-state"),T=null)}));const{email:j,message:w}=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state");E.formEl.email.value=j,E.formEl.message.value=w,T={email:j,message:w};
//# sourceMappingURL=03-feedback.349a92d7.js.map
