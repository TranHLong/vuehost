import{o as r,l as u,m as i}from"./index-CFIuHd6L.js";function y(n,t){return r(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"})])}let c;const a=new Uint8Array(16);function l(){if(!c&&(c=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(a)}const e=[];for(let n=0;n<256;++n)e.push((n+256).toString(16).slice(1));function p(n,t=0){return e[n[t+0]]+e[n[t+1]]+e[n[t+2]]+e[n[t+3]]+"-"+e[n[t+4]]+e[n[t+5]]+"-"+e[n[t+6]]+e[n[t+7]]+"-"+e[n[t+8]]+e[n[t+9]]+"-"+e[n[t+10]]+e[n[t+11]]+e[n[t+12]]+e[n[t+13]]+e[n[t+14]]+e[n[t+15]]}const m=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),d={randomUUID:m};function g(n,t,h){if(d.randomUUID&&!t&&!n)return d.randomUUID();n=n||{};const o=n.random||(n.rng||l)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,p(o)}export{y as r,g as v};
