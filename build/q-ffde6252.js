import{k as p,i as d,F as i,_ as g,X as r,D as f,Y as m,E as h}from"./q-7644004b.js";import{c as L,u as v,a as E,d as $,$ as I}from"./q-ab37f029.js";import{k as P,j as z}from"./q-83efbee8.js";const S=async o=>{const[e]=p();return await e(o.target)},w=async o=>{const[e,n,s]=p(),l=e.supportedLocales.find(t=>t.lang===o.value)||e.defaultLocale;let a=n.pathname;n.params.lang?l.lang!==e.defaultLocale.lang?a=a.replace(n.params.lang,l.lang):a=a.replace(new RegExp(`(/${n.params.lang}/)|(/${n.params.lang}$)`),"/"):l.lang!==e.defaultLocale.lang&&(a=`/${l.lang}${a}`),console.log(a,l,n),s(a)},x=async({track:o})=>{const[e,n,s,l]=p();o(()=>s.params.lang);const a=e.supportedLocales.find(t=>t.lang===s.params.lang)||e.defaultLocale;a.lang!==l.lang&&await L(a,n)},k=()=>{const o=P(),e=z(),n=v(),s=E(),l=$(),a={it:"Italian 🇮🇹",en:"English 🇺🇸"};return d(i(()=>g(()=>Promise.resolve().then(()=>_),void 0),"s_j9tozU0vi88",[l,n,o,s])),r("div",{class:"change-locale",children:r("select",{class:"select w-full max-w-xs",onChange$:i(()=>g(()=>Promise.resolve().then(()=>_),void 0),"s_HEIYrP80IRE",[i(()=>g(()=>Promise.resolve().then(()=>_),void 0),"s_aI27l070Sz0",[l,o,e])]),children:[r("option",{disabled:!0,selected:!0,children:I("app.changeLocale")}),l.supportedLocales.map(c=>{const u=c.lang==="it"?"it":(c.lang==="en","en");return r("option",{get value(){return c.lang},children:a[u],[f]:{value:m(c,"lang")}},"BF_0")})]})},"BF_1")},_=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_HEIYrP80IRE:S,s_SW0umC7ufd8:k,s_aI27l070Sz0:w,s_j9tozU0vi88:x},Symbol.toStringTag,{value:"Module"}));export{h as _hW,S as s_HEIYrP80IRE,k as s_SW0umC7ufd8,w as s_aI27l070Sz0,x as s_j9tozU0vi88};
