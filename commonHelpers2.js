import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o=document.querySelector(".feedback-form");o.addEventListener("input",()=>{const e=new FormData(o),t=e.get("email"),a=e.get("message");n("formData",{email:t,message:a})});window.addEventListener("DOMContentLoaded",()=>{const e=m("formData");o.elements.email.value=(e==null?void 0:e.email)||"",o.elements.message.value=(e==null?void 0:e.message)||""});o.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(o),a=t.get("email"),s=t.get("message");a===""||s===""?alert("All form fields must be filled in"):(console.log({email:a,message:s}),o.reset(),localStorage.removeItem("formData"))});function n(e,t){const a=JSON.stringify(t);localStorage.setItem(e,a)}function m(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}
//# sourceMappingURL=commonHelpers2.js.map
