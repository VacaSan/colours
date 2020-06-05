(this["webpackJsonpcolor-v2"]=this["webpackJsonpcolor-v2"]||[]).push([[0],{12:function(n,e,t){n.exports=t(21)},14:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var o={};t.r(o),t.d(o,"hex",(function(){return d})),t.d(o,"rgba",(function(){return b})),t.d(o,"hsla",(function(){return f}));t(13),t(14);var r=t(0),i=t.n(r),c=t(3),a=t(11),l=t(2),u=t(1),s=t(4);function d(n){return"#"+[n.red,n.green,n.blue].map((function(n){return n.toString(16).padStart(2,"0")})).join("")}function b(n){var e=n.red,t=n.green,o=n.blue,r=n.alpha,i=void 0===r?1:r;return"rgba(".concat(e,", ").concat(t,", ").concat(o,", ").concat(i,")")}function f(n){var e,t,o=n.red,r=n.green,i=n.blue,c=n.alpha,a=void 0===c?1:c,l=o/255,u=r/255,s=i/255,d=Math.max(l,u,s),b=Math.min(l,u,s),f=(d+b)/2;if(d===b)e=t=0;else{var h=d-b;switch(t=f>.5?h/(2-d-b):h/(d+b),d){case l:e=(u-s)/h+(u<s?6:0);break;case u:e=(s-l)/h+2;break;case s:e=(l-u)/h+4}e/=6}var g=Math.round(360*e),v=Math.round(100*t),m=Math.round(100*f);return"hsla(".concat(g,", ").concat(v,"%, ").concat(m,"%, ").concat(a,")")}var h=t(10),g=t(9);function v(){var n=Object(l.a)(["\n        width: 100%;\n        list-style: none;\n        padding: 0.5rem 0;\n        margin: 0;\n        font-size: 1.5rem;\n        line-height: 2;\n      "]);return v=function(){return n},n}function m(){var n=Object(l.a)(["\n          display: block;\n          width: 100%;\n          min-width: 24ch;\n          height: 2em;\n          padding: 0;\n          margin: 0;\n          color: inherit;\n          font-size: 1.5rem;\n          text-align: left;\n          background: none;\n          border: 0;\n          border-bottom: 1px dashed currentColor;\n          outline: none;\n          cursor: pointer;\n        "]);return m=function(){return n},n}function p(){var n=Object(l.a)(["\n        font-size: 1rem;\n        padding: 0.5em 1em;\n        background-color: white;\n        border-radius: 0.25em;\n        border: 0;\n        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),\n          0 6px 6px rgba(0, 0, 0, 0.23);\n      "]);return p=function(){return n},n}function j(){var n=Object(l.a)(["\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 2px;\n          background-color: currentColor;\n          transform-origin: center bottom;\n          transform: scale(0);\n          transition: transform 120ms;\n          input:focus + & {\n            transform: scale(1);\n          }\n        "]);return j=function(){return n},n}function O(){var n=Object(l.a)(["\n          display: block;\n          width: 100%;\n          min-width: 24ch;\n          height: 2em;\n          padding: 0;\n          color: inherit;\n          font-size: 1.5rem;\n          background: none;\n          border: 0;\n          border-bottom: 1px solid currentColor;\n          border-radius: 0;\n          outline: none;\n          ::placeholder {\n            color: currentColor;\n            opacity: 0.5;\n          }\n        "]);return O=function(){return n},n}function w(){var n=Object(l.a)(["\n          position: absolute;\n          border: 0;\n          clip: rect(0 0 0 0);\n          height: 1px;\n          margin: -1px;\n          overflow: hidden;\n          padding: 0;\n          width: 1px;\n        "]);return w=function(){return n},n}function y(){var n=Object(l.a)(["\n        position: relative;\n      "]);return y=function(){return n},n}function x(){var n=Object(l.a)(["\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex-direction: column;\n          width: 100vw;\n          height: 100vh;\n          padding: 0 1rem;\n        "]);return x=function(){return n},n}function k(){var n=Object(l.a)(["\n          position: fixed;\n          top: 1rem;\n          left: 1rem;\n          margin: 0;\n        "]);return k=function(){return n},n}function C(){var n=Object(l.a)(["\n          font-size: 1.25rem;\n          font-weight: bold;\n          line-height: 2;\n          text-align: center;\n        "]);return C=function(){return n},n}function S(){var n=Object(l.a)(["\n        display: flex;\n        height: 100vh;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        padding: 0 1rem;\n        background-color: #f55;\n      "]);return S=function(){return n},n}function W(n){var e=n.error,t=void 0===e?null:e;return Object(u.b)("div",{css:Object(u.a)(S())},Object(u.b)("p",{css:Object(u.a)(C())},"Whoops! Something went terribly wrong"," ",Object(u.b)("span",{role:"img","aria-label":"sad"},"(\u0e51\u25d5\ufe35\u25d5\u0e51)"),Object(u.b)("br",null),"Try refreshing the app."),Object(u.b)("pre",null,null===t||void 0===t?void 0:t.message))}var E={red:255,green:255,blue:255};function A(n){var e=n.onChange;return Object(u.b)("div",{css:Object(u.a)(y())},Object(u.b)("label",{htmlFor:"color",css:Object(u.a)(w())},"Color:"),Object(u.b)("input",{type:"text",id:"color",onChange:e,placeholder:"hex/rgb(a)/hsl(a)",css:Object(u.a)(O())}),Object(u.b)("div",{css:Object(u.a)(j())}))}function M(n){return Object(u.b)(h.a,{label:"Click to copy",css:Object(u.a)(p())},Object(u.b)("button",Object.assign({css:Object(u.a)(m()),onClick:z},n)))}function R(n){var e=n.color;return Object(u.b)("ul",{css:Object(u.a)(v())},["hex","rgba","hsla"].map((function(n){var t=o[n];return Object(u.b)("li",{key:n},Object(u.b)(M,null,t(e)))})))}function z(n){var e=n.target.textContent,t=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0),o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.position="absolute",o.style.left="-9999px",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),t&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(t))}var U=function(){var n=i.a.useState(E),e=Object(a.a)(n,2),t=e[0],o=e[1],r=Object(s.c)(t),c=Object(s.b)(r,"rgba(0,0,0,0.87)","white");return i.a.useEffect((function(){document.body.style.backgroundColor=r,document.body.style.color=c}),[r,c]),Object(u.b)(g.ErrorBoundary,{FallbackComponent:W},Object(u.b)("h1",{css:Object(u.a)(k())},Object(u.b)("span",{role:"img","aria-label":"unicorn"},"\ud83e\udd84")," ","colours."),Object(u.b)("div",{css:Object(u.a)(x())},Object(u.b)("div",null,Object(u.b)(A,{onChange:function(n){try{var e=Object(s.a)(n.target.value);o(e)}catch(t){}}}),Object(u.b)(R,{color:t}))))},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;var e=function(){var e="".concat("","/service-worker.js");I?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):N(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(e,n)};n&&n.immediate?e():window.addEventListener("load",e)}}function N(n,e){e&&e.immediate?navigator.serviceWorker.getRegistration(n).then((function(n){n&&n.update()})):navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}Object(c.render)(i.a.createElement(i.a.StrictMode,null,i.a.createElement(U,null)),document.getElementById("root")),L({onUpdate:function(n){if(window.confirm("New version available. Update now?")){var e=n.waiting;e&&(e.postMessage({type:"SKIP_WAITING"}),e.addEventListener("statechange",(function(n){"activated"===n.target.state&&window.location.reload()})))}}}),document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&L({immediate:!0})}))}},[[12,1,2]]]);
//# sourceMappingURL=main.2265596e.chunk.js.map