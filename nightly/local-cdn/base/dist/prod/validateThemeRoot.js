"use strict";const i=e=>{const t=document.querySelector(`META[name="${e}"]`);return t&&t.getAttribute("content")},o=e=>{const t=i("sap-allowedThemeOrigins");return t&&t.split(",").some(n=>n==="*"||e===n.trim())},s=(e,t)=>{const n=new URL(e).pathname;return new URL(n,t).toString()},a=e=>{let t;try{if(e.startsWith(".")||e.startsWith("/"))t=new URL(e,window.location.href).toString();else{const n=new URL(e),r=n.origin;r&&o(r)?t=n.toString():t=s(n.toString(),window.location.href)}return t.endsWith("/")||(t=`${t}/`),`${t}UI5/`}catch{}};export default a;
//# sourceMappingURL=validateThemeRoot.js.map