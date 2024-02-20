import{k as Q,S as U,i as X,e as C,s as V,t as T,c as I,a as E,f as D,B as G,b as N,d as y,p as u,C as L,g as P,h as w,u as z,q as Y,j as K}from"./index.aguW_r_3.js";import{r as O,s as x,n as R,c as W}from"./scheduler.A2lyj9IH.js";import{w as $}from"./entry.v6S-nSfy.js";import{p as ee}from"./stores.O_Cbg1IR.js";function ue(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function de(s,e){s.d(1),e.delete(s.key)}function he(s,e,t,n,c,l,a,i,r,g,v,j){let p=s.length,b=l.length,_=p;const f={};for(;_--;)f[s[_].key]=_;const d=[],o=new Map,h=new Map,A=[];for(_=b;_--;){const m=j(c,l,_),k=t(m);let q=a.get(k);q?n&&A.push(()=>q.p(m,e)):(q=g(k,m),q.c()),o.set(k,d[_]=q),k in f&&h.set(k,Math.abs(_-f[k]))}const H=new Set,B=new Set;function M(m){Q(m,1),m.m(i,v),a.set(m.key,m),v=m.first,b--}for(;p&&b;){const m=d[b-1],k=s[p-1],q=m.key,S=k.key;m===k?(v=m.first,p--,b--):o.has(S)?!a.has(q)||H.has(q)?M(m):B.has(S)?p--:h.get(q)>h.get(S)?(B.add(q),M(m)):(H.add(S),p--):(r(k,a),p--)}for(;p--;){const m=s[p];o.has(m.key)||r(m,a)}for(;b;)M(d[b-1]);return O(A),d}const Z=$("IT");function te(s){let e,t='<a href="javascript:history.back()" class="svelte-1gyfbq3"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M256-192.348 192.348-256l224-224-224-224L256-767.652l224 224 224-224L767.652-704l-224 224 224 224L704-192.348l-224-224-224 224Z"></path></svg></a>';return{c(){e=C("div"),e.innerHTML=t,this.h()},l(n){e=I(n,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-2xdpbp"&&(e.innerHTML=t),this.h()},h(){u(e,"class","svelte-1gyfbq3")},m(n,c){P(n,e,c)},p:R,d(n){n&&y(e)}}}function se(s){let e,t,n=s[6]=="IT"?"Progetti":"Projects",c,l,a,i=s[1]&&s[2]&&F(s);return{c(){e=C("div"),t=C("a"),c=T(n),l=V(),i&&i.c(),this.h()},l(r){e=I(r,"DIV",{style:!0,class:!0});var g=E(e);t=I(g,"A",{style:!0,href:!0,class:!0});var v=E(t);c=N(v,n),v.forEach(y),l=D(g),i&&i.l(g),g.forEach(y),this.h()},h(){Y(t,"gird-column","1"),u(t,"href","/projects"),u(t,"class","svelte-1gyfbq3"),u(e,"style",a=s[2]&&!s[0]?"grid-column: 1 / 3; display: grid; grid-template-columns: 1fr 1fr":""),u(e,"class","svelte-1gyfbq3")},m(r,g){P(r,e,g),w(e,t),w(t,c),w(e,l),i&&i.m(e,null)},p(r,g){g&64&&n!==(n=r[6]=="IT"?"Progetti":"Projects")&&K(c,n),r[1]&&r[2]?i?i.p(r,g):(i=F(r),i.c(),i.m(e,null)):i&&(i.d(1),i=null),g&5&&a!==(a=r[2]&&!r[0]?"grid-column: 1 / 3; display: grid; grid-template-columns: 1fr 1fr":"")&&u(e,"style",a)},d(r){r&&y(e),i&&i.d()}}}function F(s){let e,t=s[6]=="IT"?"Registrati":"Register",n,c;return{c(){e=C("a"),n=T(t),this.h()},l(l){e=I(l,"A",{style:!0,href:!0,target:!0,class:!0});var a=E(e);n=N(a,t),a.forEach(y),this.h()},h(){u(e,"style",c="gird-column: 2; "+(s[2]&&!s[0]?"padding: 0;":"")),u(e,"href","https://www.eventbrite.it/e/registrazione-opening-api-glicini-cemento-811326638817"),u(e,"target","_blank"),u(e,"class","svelte-1gyfbq3")},m(l,a){P(l,e,a),w(e,n)},p(l,a){a&64&&t!==(t=l[6]=="IT"?"Registrati":"Register")&&K(n,t),a&5&&c!==(c="gird-column: 2; "+(l[2]&&!l[0]?"padding: 0;":""))&&u(e,"style",c)},d(l){l&&y(e)}}}function J(s){let e,t;function n(a,i){return a[0]?ie:le}let c=n(s),l=c(s);return{c(){e=C("div"),t=C("a"),l.c(),this.h()},l(a){e=I(a,"DIV",{id:!0,class:!0});var i=E(e);t=I(i,"A",{href:!0,class:!0});var r=E(t);l.l(r),r.forEach(y),i.forEach(y),this.h()},h(){u(t,"href","/"),u(t,"class","svelte-1gyfbq3"),u(e,"id","home"),u(e,"class","svelte-1gyfbq3")},m(a,i){P(a,e,i),w(e,t),l.m(t,null)},p(a,i){c!==(c=n(a))&&(l.d(1),l=c(a),l&&(l.c(),l.m(t,null)))},d(a){a&&y(e),l.d()}}}function le(s){let e;return{c(){e=T("Api, Glicini, Cemento")},l(t){e=N(t,"Api, Glicini, Cemento")},m(t,n){P(t,e,n)},d(t){t&&y(e)}}}function ie(s){let e;return{c(){e=T("AGC")},l(t){e=N(t,"AGC")},m(t,n){P(t,e,n)},d(t){t&&y(e)}}}function ne(s){let e,t,n,c,l,a="IT",i,r,g="EN",v,j,p;function b(o,h){if(o[2]||o[4])return se;if(o[5])return te}let _=b(s),f=_&&_(s),d=(s[5]||s[4])&&J(s);return{c(){e=C("nav"),f&&f.c(),t=V(),d&&d.c(),n=V(),c=C("div"),l=C("span"),l.textContent=a,i=T(`
        /
        `),r=C("span"),r.textContent=g,this.h()},l(o){e=I(o,"NAV",{style:!0,class:!0});var h=E(e);f&&f.l(h),t=D(h),d&&d.l(h),n=D(h),c=I(h,"DIV",{style:!0,class:!0});var A=E(c);l=I(A,"SPAN",{id:!0,class:!0,"data-svelte-h":!0}),G(l)!=="svelte-1unrjc5"&&(l.textContent=a),i=N(A,`
        /
        `),r=I(A,"SPAN",{id:!0,class:!0,"data-svelte-h":!0}),G(r)!=="svelte-1pw894x"&&(r.textContent=g),A.forEach(y),h.forEach(y),this.h()},h(){u(l,"id","it"),u(l,"class","lang svelte-1gyfbq3"),L(l,"bold",s[6]==="IT"),u(r,"id","en"),u(r,"class","lang svelte-1gyfbq3"),L(r,"bold",s[6]==="EN"),u(c,"style",v=s[2]&&!s[0]?"grid-column: 12":""),u(c,"class","svelte-1gyfbq3"),u(e,"style",s[3]),u(e,"class","svelte-1gyfbq3")},m(o,h){P(o,e,h),f&&f.m(e,null),w(e,t),d&&d.m(e,null),w(e,n),w(e,c),w(c,l),w(c,i),w(c,r),j||(p=[z(l,"click",s[10]),z(r,"click",s[11])],j=!0)},p(o,[h]){_===(_=b(o))&&f?f.p(o,h):(f&&f.d(1),f=_&&_(o),f&&(f.c(),f.m(e,t))),o[5]||o[4]?d?d.p(o,h):(d=J(o),d.c(),d.m(e,n)):d&&(d.d(1),d=null),h&64&&L(l,"bold",o[6]==="IT"),h&64&&L(r,"bold",o[6]==="EN"),h&5&&v!==(v=o[2]&&!o[0]?"grid-column: 12":"")&&u(c,"style",v),h&8&&u(e,"style",o[3])},i:R,o:R,d(o){o&&y(e),f&&f.d(),d&&d.d(),j=!1,O(p)}}}function ae(s,e,t){let n,c,l,a,i,r;W(s,ee,f=>t(9,i=f)),W(s,Z,f=>t(6,r=f));let{menu:g=!1}=e,{mobile:v=!1}=e,{register:j=!1}=e;function p(f){Z.set(f)}const b=()=>p("IT"),_=()=>p("EN");return s.$$set=f=>{"menu"in f&&t(8,g=f.menu),"mobile"in f&&t(0,v=f.mobile),"register"in f&&t(1,j=f.register)},s.$$.update=()=>{s.$$.dirty&512&&t(2,n=i.url.pathname==="/"),s.$$.dirty&512&&t(5,c=i.url.pathname==="/projects"),s.$$.dirty&512&&t(4,l=i.url.pathname.startsWith("/projects/")&&i.url.pathname.length>10),s.$$.dirty&261&&t(3,a=`grid-template-columns: repeat(${n?n&&!v?12:2:3}, 1fr); ${g?"background: none":""}`)},[v,j,n,a,l,c,r,p,g,i,b,_]}class ge extends U{constructor(e){super(),X(this,e,ae,ne,x,{menu:8,mobile:0,register:1})}}export{ge as N,de as d,ue as e,Z as l,he as u};
