import{e as S,d as y,y as H,f as L,W as A,_ as I,g as l,C as M,I as O,h as T,l as x,i as N,w as j,m as U}from"./q-f7a3827f.js";import{u as V,t as W,c as Q,a as q,C as z,D as G,b as J,d as X,e as F,f as Y,l as b,g as $,r as B,h as K,i as Z}from"./q-87542aa8.js";const tt=()=>{const t=V();if(!(t!=null&&t.params))throw new Error("Missing Qwik City Env Data");const u=S("url");if(!u)throw new Error("Missing Qwik URL Env Data");const a=new URL(u),s=y({href:a.href,pathname:a.pathname,query:a.searchParams,params:t.params,isNavigating:!1}),n=H(y(t.response.loaders)),R=L(W(a)),_=y(Q),r=y({headings:void 0,menu:void 0}),o=L(),m=t.response.action,p=m?t.response.loaders[m]:void 0,h=L(p?{id:m,data:t.response.formData,output:{result:p,status:t.response.status}}:void 0),P=A(()=>I(()=>Promise.resolve().then(()=>k),void 0),"s_fX0bDjeJa0E",[h,R,s]);return l(q,r),l(z,o),l(G,_),l(J,s),l(X,P),l(F,n),l(Y,h),M(A(()=>I(()=>Promise.resolve().then(()=>k),void 0),"s_02wMImzEAbk",[h,r,o,_,t,n,R,s])),O(T,{},"qY_0")},et=({track:t})=>{const[u,a,s,n,R,_,r,o]=x();async function m(){const[p,h]=t(()=>[r.value,u.value]),P=N("");let e=new URL(p,o.href),v,D=null;{const{routes:g,menus:w,cacheModules:C,trailingSlash:d}=await I(()=>import("./q-496134e3.js"),["build/q-496134e3.js","build/q-f7a3827f.js"]);let i=b(g,w,C,e.pathname);const E=v=await $(e.href,!0,h);if(!E){r.untrackedValue=o.pathname;return}const c=E.href,f=new URL(c,e.href);f.pathname!==e.pathname&&(e=f,i=b(g,w,C,e.pathname)),e.pathname.endsWith("/")?d||(e.pathname=e.pathname.slice(0,-1)):d&&(e.pathname+="/"),D=await i}if(D){const[g,w,C]=D,d=e.pathname,i=w,E=i[i.length-1];o.href=e.href,o.pathname=d,o.params={...g},o.query=e.searchParams,r.untrackedValue=d;const c=B(v,o,i,P);a.headings=E.headings,a.menu=C,s.value=j(i),n.links=c.links,n.meta=c.meta,n.styles=c.styles,n.title=c.title,n.frontmatter=c.frontmatter;{const f=v==null?void 0:v.loaders;f&&Object.assign(_,f),K.clear(),Z(window,d,r),o.isNavigating=!1}}}m()},at=async t=>{const[u,a,s]=x(),n=a.value;if(t){if(n===t)return;a.value=t}else a.value="",a.value=n;u.value=void 0,s.isNavigating=!0},k=Object.freeze(Object.defineProperty({__proto__:null,_hW:U,s_02wMImzEAbk:et,s_TxCFOy819ag:tt,s_fX0bDjeJa0E:at},Symbol.toStringTag,{value:"Module"}));export{U as _hW,et as s_02wMImzEAbk,tt as s_TxCFOy819ag,at as s_fX0bDjeJa0E};
