import{k as Q,S as U,i as X,e as I,s as D,t as N,c as j,a as P,f as G,B as R,b as S,d as y,p as o,C as M,g as T,h as w,u as z,q as Y,j as K}from"./index.aguW_r_3.js";import{r as O,s as x,n as H,c as W}from"./scheduler.A2lyj9IH.js";import{w as $}from"./entry.DojSg5Xv.js";import{p as ee}from"./stores.D-_UHF51.js";function oe(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function de(l,e){l.d(1),e.delete(l.key)}function he(l,e,t,n,c,s,a,i,r,m,v,A){let p=l.length,b=s.length,_=p;const u={};for(;_--;)u[l[_].key]=_;const d=[],f=new Map,h=new Map,E=[];for(_=b;_--;){const g=A(c,s,_),k=t(g);let C=a.get(k);C?n&&E.push(()=>C.p(g,e)):(C=m(k,g),C.c()),f.set(k,d[_]=C),k in u&&h.set(k,Math.abs(_-u[k]))}const q=new Set,B=new Set;function V(g){Q(g,1),g.m(i,v),a.set(g.key,g),v=g.first,b--}for(;p&&b;){const g=d[b-1],k=l[p-1],C=g.key,L=k.key;g===k?(v=g.first,p--,b--):f.has(L)?!a.has(C)||q.has(C)?V(g):B.has(L)?p--:h.get(C)>h.get(L)?(B.add(C),V(g)):(q.add(L),p--):(r(k,a),p--)}for(;p--;){const g=l[p];f.has(g.key)||r(g,a)}for(;b;)V(d[b-1]);return O(E),d}const Z=$("IT");function te(l){let e,t='<a href="javascript:history.back()" class="svelte-1uli2e0"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M256-192.348 192.348-256l224-224-224-224L256-767.652l224 224 224-224L767.652-704l-224 224 224 224L704-192.348l-224-224-224 224Z"></path></svg></a>';return{c(){e=I("div"),e.innerHTML=t,this.h()},l(n){e=j(n,"DIV",{class:!0,"data-svelte-h":!0}),R(e)!=="svelte-2xdpbp"&&(e.innerHTML=t),this.h()},h(){o(e,"class","svelte-1uli2e0")},m(n,c){T(n,e,c)},p:H,d(n){n&&y(e)}}}function le(l){let e,t,n=l[6]=="IT"?"Progetti":"Projects",c,s,a,i=l[1]&&l[2]&&F(l);return{c(){e=I("div"),t=I("a"),c=N(n),s=D(),i&&i.c(),this.h()},l(r){e=j(r,"DIV",{style:!0,class:!0});var m=P(e);t=j(m,"A",{style:!0,href:!0,class:!0});var v=P(t);c=S(v,n),v.forEach(y),s=G(m),i&&i.l(m),m.forEach(y),this.h()},h(){Y(t,"gird-column","1"),o(t,"href","/projects"),o(t,"class","svelte-1uli2e0"),o(e,"style",a=l[2]&&!l[0]?"grid-column: 1 / 3; display: grid; grid-template-columns: 1fr 1fr":""),o(e,"class","svelte-1uli2e0")},m(r,m){T(r,e,m),w(e,t),w(t,c),w(e,s),i&&i.m(e,null)},p(r,m){m&64&&n!==(n=r[6]=="IT"?"Progetti":"Projects")&&K(c,n),r[1]&&r[2]?i?i.p(r,m):(i=F(r),i.c(),i.m(e,null)):i&&(i.d(1),i=null),m&5&&a!==(a=r[2]&&!r[0]?"grid-column: 1 / 3; display: grid; grid-template-columns: 1fr 1fr":"")&&o(e,"style",a)},d(r){r&&y(e),i&&i.d()}}}function F(l){let e,t=l[6]=="IT"?"Registrati":"Register",n,c;return{c(){e=I("a"),n=N(t),this.h()},l(s){e=j(s,"A",{style:!0,href:!0,target:!0,class:!0});var a=P(e);n=S(a,t),a.forEach(y),this.h()},h(){o(e,"style",c="gird-column: 2; "+(l[2]&&!l[0]?"padding: 0;":"")),o(e,"href","https://www.eventbrite.it/e/registrazione-opening-api-glicini-cemento-811326638817"),o(e,"target","_blank"),o(e,"class","svelte-1uli2e0")},m(s,a){T(s,e,a),w(e,n)},p(s,a){a&64&&t!==(t=s[6]=="IT"?"Registrati":"Register")&&K(n,t),a&5&&c!==(c="gird-column: 2; "+(s[2]&&!s[0]?"padding: 0;":""))&&o(e,"style",c)},d(s){s&&y(e)}}}function J(l){let e,t;function n(a,i){return a[0]?ie:se}let c=n(l),s=c(l);return{c(){e=I("div"),t=I("a"),s.c(),this.h()},l(a){e=j(a,"DIV",{id:!0,class:!0});var i=P(e);t=j(i,"A",{href:!0,class:!0});var r=P(t);s.l(r),r.forEach(y),i.forEach(y),this.h()},h(){o(t,"href","/"),o(t,"class","svelte-1uli2e0"),o(e,"id","home"),o(e,"class","svelte-1uli2e0")},m(a,i){T(a,e,i),w(e,t),s.m(t,null)},p(a,i){c!==(c=n(a))&&(s.d(1),s=c(a),s&&(s.c(),s.m(t,null)))},d(a){a&&y(e),s.d()}}}function se(l){let e;return{c(){e=N("Api, Glicini, Cemento")},l(t){e=S(t,"Api, Glicini, Cemento")},m(t,n){T(t,e,n)},d(t){t&&y(e)}}}function ie(l){let e;return{c(){e=N("AGC")},l(t){e=S(t,"AGC")},m(t,n){T(t,e,n)},d(t){t&&y(e)}}}function ne(l){let e,t,n,c,s,a="IT",i,r,m="EN",v,A,p;function b(f,h){if(f[2]||f[4])return le;if(f[5])return te}let _=b(l),u=_&&_(l),d=(l[5]||l[4])&&J(l);return{c(){e=I("nav"),u&&u.c(),t=D(),d&&d.c(),n=D(),c=I("div"),s=I("span"),s.textContent=a,i=N(`
        /
        `),r=I("span"),r.textContent=m,this.h()},l(f){e=j(f,"NAV",{style:!0,class:!0});var h=P(e);u&&u.l(h),t=G(h),d&&d.l(h),n=G(h),c=j(h,"DIV",{style:!0,class:!0});var E=P(c);s=j(E,"SPAN",{id:!0,class:!0,"data-svelte-h":!0}),R(s)!=="svelte-1unrjc5"&&(s.textContent=a),i=S(E,`
        /
        `),r=j(E,"SPAN",{id:!0,class:!0,"data-svelte-h":!0}),R(r)!=="svelte-1pw894x"&&(r.textContent=m),E.forEach(y),h.forEach(y),this.h()},h(){o(s,"id","it"),o(s,"class","lang svelte-1uli2e0"),M(s,"bold",l[6]==="IT"),o(r,"id","en"),o(r,"class","lang svelte-1uli2e0"),M(r,"bold",l[6]==="EN"),o(c,"style",v=l[2]&&!l[0]?"grid-column: 12":""),o(c,"class","svelte-1uli2e0"),o(e,"style",l[3]),o(e,"class","svelte-1uli2e0")},m(f,h){T(f,e,h),u&&u.m(e,null),w(e,t),d&&d.m(e,null),w(e,n),w(e,c),w(c,s),w(c,i),w(c,r),A||(p=[z(s,"click",l[10]),z(r,"click",l[11])],A=!0)},p(f,[h]){_===(_=b(f))&&u?u.p(f,h):(u&&u.d(1),u=_&&_(f),u&&(u.c(),u.m(e,t))),f[5]||f[4]?d?d.p(f,h):(d=J(f),d.c(),d.m(e,n)):d&&(d.d(1),d=null),h&64&&M(s,"bold",f[6]==="IT"),h&64&&M(r,"bold",f[6]==="EN"),h&5&&v!==(v=f[2]&&!f[0]?"grid-column: 12":"")&&o(c,"style",v),h&8&&o(e,"style",f[3])},i:H,o:H,d(f){f&&y(e),u&&u.d(),d&&d.d(),A=!1,O(p)}}}function ae(l,e,t){let n,c,s,a,i,r;W(l,ee,u=>t(9,i=u)),W(l,Z,u=>t(6,r=u));let{menu:m=!1}=e,{mobile:v=!1}=e,{register:A=!1}=e;function p(u){Z.set(u)}const b=()=>p("IT"),_=()=>p("EN");return l.$$set=u=>{"menu"in u&&t(8,m=u.menu),"mobile"in u&&t(0,v=u.mobile),"register"in u&&t(1,A=u.register)},l.$$.update=()=>{l.$$.dirty&512&&t(2,n=i.url.pathname==="/"),l.$$.dirty&512&&t(5,c=i.url.pathname==="/projects"),l.$$.dirty&512&&t(4,s=i.url.pathname.startsWith("/projects/")&&i.url.pathname.length>10),l.$$.dirty&261&&t(3,a=`grid-template-columns: repeat(${n?n&&!v?12:2:3}, 1fr); ${m?"background: none":""}`)},[v,A,n,a,s,c,r,p,m,i,b,_]}class me extends U{constructor(e){super(),X(this,e,ae,ne,x,{menu:8,mobile:0,register:1})}}export{me as N,de as d,oe as e,Z as l,he as u};
