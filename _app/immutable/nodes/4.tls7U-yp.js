import{s as rt,d as Rl,e as X,f as Vl,r as at,c as Ml,n as ot}from"../chunks/scheduler.X2M6FQ5F.js";import{S as it,i as nt,m as P,s as b,e as d,H as Z,t as x,o as O,f as $,c as v,a as w,d as c,x as ee,b as le,p as f,r as R,g as y,h as _,u as Dl,j as cl,k as V,l as M,v as S,w as De,q as Al,n as Ce}from"../chunks/index.FZ1i5vap.js";import{e as K,p as ft}from"../chunks/data_master.MWCv0kZR.js";import{N as ct,l as ut}from"../chunks/Navbar.NpvbMSqg.js";import{p as ht}from"../chunks/stores.-t_TFlsu.js";import{d as _t}from"../chunks/entry.WvBH17n8.js";import{P as J,F as pt}from"../chunks/Parallax.CxoRwy5S.js";function Sl(a,e,l){const s=a.slice();return s[13]=e[l],s}function Yl(a,e,l){const s=a.slice();return s[22]=e[l],s[24]=l,s}function Gl(a,e,l){const s=a.slice();return s[19]=e[l],s}function Ul(a,e,l){const s=a.slice();return s[16]=e[l],s}function ql(a,e,l){const s=a.slice();return s[25]=e[l],s[24]=l,s}function Wl(a,e,l){const s=a.slice();return s[27]=e[l],s}function Xl(a,e,l){const s=a.slice();return s[30]=e[l],s}function Bl(a){let e,l,s;return{c(){e=d("img"),this.h()},l(t){e=v(t,"IMG",{src:!0,height:!0,style:!0,class:!0}),this.h()},h(){X(e.src,l=a[30])||f(e,"src",l),f(e,"height",s=(a[0]<768?100:300)+"px"),Al(e,"position","absolute"),Al(e,"left",15+Math.random()*45+"%"),Al(e,"top",15+Math.random()*45+"%"),f(e,"class","svelte-lzjx1y")},m(t,r){y(t,e,r)},p(t,r){r[0]&32&&!X(e.src,l=t[30])&&f(e,"src",l),r[0]&1&&s!==(s=(t[0]<768?100:300)+"px")&&f(e,"height",s)},d(t){t&&c(e)}}}function mt(a){let e;return{c(){e=x("Authors")},l(l){e=le(l,"Authors")},m(l,s){y(l,e,s)},d(l){l&&c(e)}}}function gt(a){let e;return{c(){e=x("Autori")},l(l){e=le(l,"Autori")},m(l,s){y(l,e,s)},d(l){l&&c(e)}}}function Jl(a){let e,l=a[27]+"",s;return{c(){e=d("li"),s=x(l),this.h()},l(t){e=v(t,"LI",{class:!0});var r=w(e);s=le(r,l),r.forEach(c),this.h()},h(){f(e,"class","svelte-lzjx1y")},m(t,r){y(t,e,r),_(e,s)},p(t,r){r[0]&32&&l!==(l=t[27]+"")&&cl(s,l)},d(t){t&&c(e)}}}function dt(a){let e;return{c(){e=x("Analysis and Catalogue")},l(l){e=le(l,"Analysis and Catalogue")},m(l,s){y(l,e,s)},d(l){l&&c(e)}}}function vt(a){let e;return{c(){e=x("Analisi e Catalogo")},l(l){e=le(l,"Analisi e Catalogo")},m(l,s){y(l,e,s)},d(l){l&&c(e)}}}function wt(a){let e;return{c(){e=x("Installation")},l(l){e=le(l,"Installation")},m(l,s){y(l,e,s)},d(l){l&&c(e)}}}function bt(a){let e;return{c(){e=x("Installazione")},l(l){e=le(l,"Installazione")},m(l,s){y(l,e,s)},d(l){l&&c(e)}}}function $t(a){let e="img",l;return{c(){l=x(e)},l(s){l=le(s,e)},m(s,t){y(s,l,t)},p:ot,d(s){s&&c(l)}}}function yt(a){let e,l=K(a[5].installation.src),s=[];for(let t=0;t<l.length;t+=1)s[t]=Kl(ql(a,l,t));return{c(){e=d("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=v(t,"DIV",{class:!0});var r=w(e);for(let i=0;i<s.length;i+=1)s[i].l(r);r.forEach(c),this.h()},h(){f(e,"class","video-grid svelte-lzjx1y")},m(t,r){y(t,e,r);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(e,null)},p(t,r){if(r[0]&32){l=K(t[5].installation.src);let i;for(i=0;i<l.length;i+=1){const n=ql(t,l,i);s[i]?s[i].p(n,r):(s[i]=Kl(n),s[i].c(),s[i].m(e,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=l.length}},d(t){t&&c(e),De(s,t)}}}function kt(a){let e,l,s;return{c(){e=d("div"),l=d("iframe"),this.h()},l(t){e=v(t,"DIV",{class:!0});var r=w(e);l=v(r,"IFRAME",{class:!0,width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0}),w(l).forEach(c),r.forEach(c),this.h()},h(){f(l,"class","yt-embed svelte-lzjx1y"),f(l,"width","100%"),f(l,"height","100%"),X(l.src,s=a[5].installation.src[a[6].toLowerCase()]+",")||f(l,"src",s),f(l,"title","YouTube video player"),f(l,"frameborder","0"),f(l,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),l.allowFullscreen=!0,f(e,"class","video-wrapper svelte-lzjx1y")},m(t,r){y(t,e,r),_(e,l)},p(t,r){r[0]&96&&!X(l.src,s=t[5].installation.src[t[6].toLowerCase()]+",")&&f(l,"src",s)},d(t){t&&c(e)}}}function jt(a){let e,l,s;return{c(){e=d("div"),l=d("iframe"),this.h()},l(t){e=v(t,"DIV",{class:!0});var r=w(e);l=v(r,"IFRAME",{class:!0,width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0}),w(l).forEach(c),r.forEach(c),this.h()},h(){f(l,"class","yt-embed svelte-lzjx1y"),f(l,"width","100%"),f(l,"height","100%"),X(l.src,s=a[5].installation.src)||f(l,"src",s),f(l,"title","YouTube video player"),f(l,"frameborder","0"),f(l,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),l.allowFullscreen=!0,f(e,"class","video-wrapper svelte-lzjx1y")},m(t,r){y(t,e,r),_(e,l)},p(t,r){r[0]&32&&!X(l.src,s=t[5].installation.src)&&f(l,"src",s)},d(t){t&&c(e)}}}function Kl(a){let e,l,s,t,r,i,n,u,m;return{c(){e=d("div"),l=d("div"),s=d("iframe"),r=b(),i=d("div"),n=d("iframe"),m=b(),this.h()},l(p){e=v(p,"DIV",{class:!0});var h=w(e);l=v(h,"DIV",{class:!0});var k=w(l);s=v(k,"IFRAME",{id:!0,class:!0,width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0}),w(s).forEach(c),k.forEach(c),r=$(h),i=v(h,"DIV",{class:!0});var E=w(i);n=v(E,"IFRAME",{id:!0,class:!0,width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0}),w(n).forEach(c),E.forEach(c),m=$(h),h.forEach(c),this.h()},h(){f(s,"id",`video-${a[24]}-1`),f(s,"class","yt-embed svelte-lzjx1y"),f(s,"width","100%"),f(s,"height","100%"),X(s.src,t=`https://www.youtube.com/embed/${a[25][0]}?enablejsapi=1`)||f(s,"src",t),f(s,"title","YouTube video player"),f(s,"frameborder","0"),f(s,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),s.allowFullscreen=!0,f(l,"class","video-cell-wrapper svelte-lzjx1y"),f(n,"id",`video-${a[24]}-2`),f(n,"class","yt-embed svelte-lzjx1y"),f(n,"width","100%"),f(n,"height","100%"),X(n.src,u=`https://www.youtube.com/embed/${a[25][1]}?enablejsapi=1`)||f(n,"src",u),f(n,"title","YouTube video player"),f(n,"frameborder","0"),f(n,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),n.allowFullscreen=!0,f(i,"class","video-cell-wrapper svelte-lzjx1y"),f(e,"class","video-cell svelte-lzjx1y")},m(p,h){y(p,e,h),_(e,l),_(l,s),_(e,r),_(e,i),_(i,n),_(e,m)},p(p,h){h[0]&32&&!X(s.src,t=`https://www.youtube.com/embed/${p[25][0]}?enablejsapi=1`)&&f(s,"src",t),h[0]&32&&!X(n.src,u=`https://www.youtube.com/embed/${p[25][1]}?enablejsapi=1`)&&f(n,"src",u)},d(p){p&&c(e)}}}function Ql(a){let e,l,s;function t(m,p){return m[6]==="IT"?Et:Ct}let r=t(a),i=r(a),n=K(a[5].process),u=[];for(let m=0;m<n.length;m+=1)u[m]=st(Sl(a,n,m));return{c(){e=d("section"),l=d("h2"),i.c(),s=b();for(let m=0;m<u.length;m+=1)u[m].c();this.h()},l(m){e=v(m,"SECTION",{id:!0,class:!0});var p=w(e);l=v(p,"H2",{class:!0});var h=w(l);i.l(h),h.forEach(c),s=$(p);for(let k=0;k<u.length;k+=1)u[k].l(p);p.forEach(c),this.h()},h(){f(l,"class","svelte-lzjx1y"),f(e,"id","process-content"),f(e,"class","svelte-lzjx1y")},m(m,p){y(m,e,p),_(e,l),i.m(l,null),_(e,s);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(e,null)},p(m,p){if(r!==(r=t(m))&&(i.d(1),i=r(m),i&&(i.c(),i.m(l,null))),p[0]&96){n=K(m[5].process);let h;for(h=0;h<n.length;h+=1){const k=Sl(m,n,h);u[h]?u[h].p(k,p):(u[h]=st(k),u[h].c(),u[h].m(e,null))}for(;h<u.length;h+=1)u[h].d(1);u.length=n.length}},d(m){m&&c(e),i.d(),De(u,m)}}}function Ct(a){let e;return{c(){e=x("Design Process")},l(l){e=le(l,"Design Process")},m(l,s){y(l,e,s)},d(l){l&&c(e)}}}function Et(a){let e;return{c(){e=x("Processo di progettazione")},l(l){e=le(l,"Processo di progettazione")},m(l,s){y(l,e,s)},d(l){l&&c(e)}}}function zt(a){let e,l,s,t,r,i=a[13].content[a[6].toLowerCase()]+"",n;function u(h,k){return h[13].leftCol.length===1?Ht:Ft}let m=u(a),p=m(a);return{c(){e=d("figure"),l=d("table"),p.c(),s=b(),t=d("figcaption"),r=new Z(!1),n=b(),this.h()},l(h){e=v(h,"FIGURE",{class:!0});var k=w(e);l=v(k,"TABLE",{class:!0});var E=w(l);p.l(E),E.forEach(c),s=$(k),t=v(k,"FIGCAPTION",{class:!0});var j=w(t);r=ee(j,!1),j.forEach(c),n=$(k),k.forEach(c),this.h()},h(){f(l,"class","svelte-lzjx1y"),r.a=null,f(t,"class","svelte-lzjx1y"),f(e,"class","process table svelte-lzjx1y")},m(h,k){y(h,e,k),_(e,l),p.m(l,null),_(e,s),_(e,t),r.m(i,t),_(e,n)},p(h,k){m===(m=u(h))&&p?p.p(h,k):(p.d(1),p=m(h),p&&(p.c(),p.m(l,null))),k[0]&96&&i!==(i=h[13].content[h[6].toLowerCase()]+"")&&r.p(i)},d(h){h&&c(e),p.d()}}}function It(a){let e,l,s=a[13].content[a[6].toLowerCase()]+"",t;return{c(){e=d("h3"),l=new Z(!1),t=b(),this.h()},l(r){e=v(r,"H3",{class:!0});var i=w(e);l=ee(i,!1),t=$(i),i.forEach(c),this.h()},h(){l.a=t,f(e,"class","process svelte-lzjx1y")},m(r,i){y(r,e,i),l.m(s,e),_(e,t)},p(r,i){i[0]&96&&s!==(s=r[13].content[r[6].toLowerCase()]+"")&&l.p(s)},d(r){r&&c(e)}}}function Lt(a){let e,l,s=K(a[13].content),t=[];for(let r=0;r<s.length;r+=1)t[r]=tt(Ul(a,s,r));return{c(){e=d("ul");for(let r=0;r<t.length;r+=1)t[r].c();l=b(),this.h()},l(r){e=v(r,"UL",{class:!0});var i=w(e);for(let n=0;n<t.length;n+=1)t[n].l(i);l=$(i),i.forEach(c),this.h()},h(){f(e,"class","process svelte-lzjx1y")},m(r,i){y(r,e,i);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null);_(e,l)},p(r,i){if(i[0]&96){s=K(r[13].content);let n;for(n=0;n<s.length;n+=1){const u=Ul(r,s,n);t[n]?t[n].p(u,i):(t[n]=tt(u),t[n].c(),t[n].m(e,l))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},d(r){r&&c(e),De(t,r)}}}function Tt(a){let e,l,s;return{c(){e=d("video"),l=d("source"),this.h()},l(t){e=v(t,"VIDEO",{class:!0});var r=w(e);l=v(r,"SOURCE",{src:!0,type:!0}),r.forEach(c),this.h()},h(){X(l.src,s=`../projects/${a[5].slug}/${a[13].src}`)||f(l,"src",s),f(l,"type","video/mp4"),f(e,"class","process svelte-lzjx1y"),e.controls=!0},m(t,r){y(t,e,r),_(e,l)},p(t,r){r[0]&32&&!X(l.src,s=`../projects/${t[5].slug}/${t[13].src}`)&&f(l,"src",s)},d(t){t&&c(e)}}}function Dt(a){let e,l,s,t,r,i,n=a[13].content[a[6].toLowerCase()]+"",u,m;return{c(){e=d("figure"),l=d("img"),r=b(),i=d("figcaption"),u=x(n),m=b(),this.h()},l(p){e=v(p,"FIGURE",{class:!0});var h=w(e);l=v(h,"IMG",{src:!0,alt:!0,class:!0}),r=$(h),i=v(h,"FIGCAPTION",{class:!0});var k=w(i);u=le(k,n),k.forEach(c),m=$(h),h.forEach(c),this.h()},h(){X(l.src,s=`../projects/${a[5].slug}/${a[13].src}`)||f(l,"src",s),f(l,"alt",t=a[13].content[a[6].toLowerCase()]),f(l,"class","svelte-lzjx1y"),f(i,"class","svelte-lzjx1y"),f(e,"class","process svelte-lzjx1y")},m(p,h){y(p,e,h),_(e,l),_(e,r),_(e,i),_(i,u),_(e,m)},p(p,h){h[0]&32&&!X(l.src,s=`../projects/${p[5].slug}/${p[13].src}`)&&f(l,"src",s),h[0]&96&&t!==(t=p[13].content[p[6].toLowerCase()])&&f(l,"alt",t),h[0]&96&&n!==(n=p[13].content[p[6].toLowerCase()]+"")&&cl(u,n)},d(p){p&&c(e)}}}function At(a){let e,l,s=a[13].content[a[6].toLowerCase()]+"",t;return{c(){e=d("p"),l=new Z(!1),t=b(),this.h()},l(r){e=v(r,"P",{class:!0});var i=w(e);l=ee(i,!1),t=$(i),i.forEach(c),this.h()},h(){l.a=t,f(e,"class","process svelte-lzjx1y")},m(r,i){y(r,e,i),l.m(s,e),_(e,t)},p(r,i){i[0]&96&&s!==(s=r[13].content[r[6].toLowerCase()]+"")&&l.p(s)},d(r){r&&c(e)}}}function Ft(a){let e,l=K(a[13].leftCol),s=[];for(let t=0;t<l.length;t+=1)s[t]=et(Yl(a,l,t));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=Ce()},l(t){for(let r=0;r<s.length;r+=1)s[r].l(t);e=Ce()},m(t,r){for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(t,r);y(t,e,r)},p(t,r){if(r[0]&96){l=K(t[13].leftCol);let i;for(i=0;i<l.length;i+=1){const n=Yl(t,l,i);s[i]?s[i].p(n,r):(s[i]=et(n),s[i].c(),s[i].m(e.parentNode,e))}for(;i<s.length;i+=1)s[i].d(1);s.length=l.length}},d(t){t&&c(e),De(s,t)}}}function Ht(a){let e,l,s,t=a[13].leftCol[0][a[6].toLowerCase()]+"",r,i,n,u,m=a[13].rightCol[0][a[6].toLowerCase()]+"",p,h,k=K(a[13].rightCol.slice(1)),E=[];for(let j=0;j<k.length;j+=1)E[j]=lt(Gl(a,k,j));return{c(){e=d("tr"),l=d("td"),s=new Z(!1),i=b(),n=d("td"),u=new Z(!1),p=b();for(let j=0;j<E.length;j+=1)E[j].c();h=Ce(),this.h()},l(j){e=v(j,"TR",{class:!0});var I=w(e);l=v(I,"TD",{rowspan:!0,class:!0});var C=w(l);s=ee(C,!1),C.forEach(c),i=$(I),n=v(I,"TD",{class:!0});var Y=w(n);u=ee(Y,!1),Y.forEach(c),I.forEach(c),p=$(j);for(let se=0;se<E.length;se+=1)E[se].l(j);h=Ce(),this.h()},h(){s.a=null,f(l,"rowspan",r=a[13].rightCol.length),f(l,"class","vertical-center svelte-lzjx1y"),u.a=null,f(n,"class","svelte-lzjx1y"),f(e,"class","svelte-lzjx1y")},m(j,I){y(j,e,I),_(e,l),s.m(t,l),_(e,i),_(e,n),u.m(m,n),y(j,p,I);for(let C=0;C<E.length;C+=1)E[C]&&E[C].m(j,I);y(j,h,I)},p(j,I){if(I[0]&96&&t!==(t=j[13].leftCol[0][j[6].toLowerCase()]+"")&&s.p(t),I[0]&32&&r!==(r=j[13].rightCol.length)&&f(l,"rowspan",r),I[0]&96&&m!==(m=j[13].rightCol[0][j[6].toLowerCase()]+"")&&u.p(m),I[0]&96){k=K(j[13].rightCol.slice(1));let C;for(C=0;C<k.length;C+=1){const Y=Gl(j,k,C);E[C]?E[C].p(Y,I):(E[C]=lt(Y),E[C].c(),E[C].m(h.parentNode,h))}for(;C<E.length;C+=1)E[C].d(1);E.length=k.length}},d(j){j&&(c(e),c(p),c(h)),De(E,j)}}}function Nt(a){let e,l,s,t=a[22][a[6].toLowerCase()]+"",r,i,n=a[13].rightCol.length>a[24]&&Zl(a);return{c(){e=d("tr"),l=d("td"),s=new Z(!1),r=b(),n&&n.c(),i=b(),this.h()},l(u){e=v(u,"TR",{class:!0});var m=w(e);l=v(m,"TD",{class:!0});var p=w(l);s=ee(p,!1),p.forEach(c),r=$(m),n&&n.l(m),i=$(m),m.forEach(c),this.h()},h(){s.a=null,f(l,"class","align-to-top svelte-lzjx1y"),f(e,"class","svelte-lzjx1y")},m(u,m){y(u,e,m),_(e,l),s.m(t,l),_(e,r),n&&n.m(e,null),_(e,i)},p(u,m){m[0]&96&&t!==(t=u[22][u[6].toLowerCase()]+"")&&s.p(t),u[13].rightCol.length>u[24]?n?n.p(u,m):(n=Zl(u),n.c(),n.m(e,i)):n&&(n.d(1),n=null)},d(u){u&&c(e),n&&n.d()}}}function Pt(a){let e,l,s,t=a[22][a[6].toLowerCase()]+"",r,i,n=a[13].rightCol.length>a[24]&&xl(a);return{c(){e=d("tr"),l=d("th"),s=new Z(!1),r=b(),n&&n.c(),i=b(),this.h()},l(u){e=v(u,"TR",{class:!0});var m=w(e);l=v(m,"TH",{class:!0});var p=w(l);s=ee(p,!1),p.forEach(c),r=$(m),n&&n.l(m),i=$(m),m.forEach(c),this.h()},h(){s.a=null,f(l,"class","align-to-top svelte-lzjx1y"),f(e,"class","header-row svelte-lzjx1y")},m(u,m){y(u,e,m),_(e,l),s.m(t,l),_(e,r),n&&n.m(e,null),_(e,i)},p(u,m){m[0]&96&&t!==(t=u[22][u[6].toLowerCase()]+"")&&s.p(t),u[13].rightCol.length>u[24]?n?n.p(u,m):(n=xl(u),n.c(),n.m(e,i)):n&&(n.d(1),n=null)},d(u){u&&c(e),n&&n.d()}}}function Zl(a){let e,l,s=a[13].rightCol[a[24]][a[6].toLowerCase()]+"";return{c(){e=d("td"),l=new Z(!1),this.h()},l(t){e=v(t,"TD",{class:!0});var r=w(e);l=ee(r,!1),r.forEach(c),this.h()},h(){l.a=null,f(e,"class","align-to-top svelte-lzjx1y")},m(t,r){y(t,e,r),l.m(s,e)},p(t,r){r[0]&96&&s!==(s=t[13].rightCol[t[24]][t[6].toLowerCase()]+"")&&l.p(s)},d(t){t&&c(e)}}}function xl(a){let e,l,s=a[13].rightCol[a[24]][a[6].toLowerCase()]+"";return{c(){e=d("th"),l=new Z(!1),this.h()},l(t){e=v(t,"TH",{class:!0});var r=w(e);l=ee(r,!1),r.forEach(c),this.h()},h(){l.a=null,f(e,"class","align-to-top svelte-lzjx1y")},m(t,r){y(t,e,r),l.m(s,e)},p(t,r){r[0]&96&&s!==(s=t[13].rightCol[t[24]][t[6].toLowerCase()]+"")&&l.p(s)},d(t){t&&c(e)}}}function et(a){let e;function l(r,i){return r[24]===0?Pt:Nt}let t=l(a)(a);return{c(){t.c(),e=Ce()},l(r){t.l(r),e=Ce()},m(r,i){t.m(r,i),y(r,e,i)},p(r,i){t.p(r,i)},d(r){r&&c(e),t.d(r)}}}function lt(a){let e,l,s,t=a[19][a[6].toLowerCase()]+"",r;return{c(){e=d("tr"),l=d("td"),s=new Z(!1),r=b(),this.h()},l(i){e=v(i,"TR",{class:!0});var n=w(e);l=v(n,"TD",{class:!0});var u=w(l);s=ee(u,!1),u.forEach(c),r=$(n),n.forEach(c),this.h()},h(){s.a=null,f(l,"class","svelte-lzjx1y"),f(e,"class","svelte-lzjx1y")},m(i,n){y(i,e,n),_(e,l),s.m(t,l),_(e,r)},p(i,n){n[0]&96&&t!==(t=i[19][i[6].toLowerCase()]+"")&&s.p(t)},d(i){i&&c(e)}}}function tt(a){let e,l,s=a[16][a[6].toLowerCase()]+"";return{c(){e=d("li"),l=new Z(!1),this.h()},l(t){e=v(t,"LI",{class:!0});var r=w(e);l=ee(r,!1),r.forEach(c),this.h()},h(){l.a=null,f(e,"class","process svelte-lzjx1y")},m(t,r){y(t,e,r),l.m(s,e)},p(t,r){r[0]&96&&s!==(s=t[16][t[6].toLowerCase()]+"")&&l.p(s)},d(t){t&&c(e)}}}function st(a){let e;function l(r,i){if(r[13].type==="paragraph")return At;if(r[13].type==="img")return Dt;if(r[13].type==="video")return Tt;if(r[13].type==="bulletpoint")return Lt;if(r[13].type=="header")return It;if(r[13].type==="table")return zt}let s=l(a),t=s&&s(a);return{c(){t&&t.c(),e=Ce()},l(r){t&&t.l(r),e=Ce()},m(r,i){t&&t.m(r,i),y(r,e,i)},p(r,i){s===(s=l(r))&&t?t.p(r,i):(t&&t.d(1),t=s&&s(r),t&&(t.c(),t.m(e.parentNode,e)))},d(r){r&&c(e),t&&t.d(r)}}}function Ot(a){let e=!1,l=()=>{e=!1},s,t,r,i,n,u,m,p,h,k,E=a[5].title[a[6].toLowerCase()]+"",j,I,C,Y,se,ae,F,Ae,Ke=a[5].description[a[6].toLowerCase()]+"",xe,ul,ce,hl,ue,_l,he,pl,_e,ml,pe,el,L,Ee,gl,ze,G,ll,dl,Fe,Qe,tl=a[5].analysis[a[6].toLowerCase()]+"",vl,me,wl,ge,bl,de,$l,ve,yl,we,sl,T,Ie,kl,oe,rl,jl,He,Ze=a[5].installation[a[6].toLowerCase()]+"",al,Cl,be,El,$e,zl,ye,Il,ke,Ll,je,ol,Ne,Le,Te,te,Tl,Fl;Rl(a[9]),Rl(a[10]),t=new ct({props:{mobile:a[4]}});let Pe=K(a[5].spotlightImages),H=[];for(let o=0;o<Pe.length;o+=1)H[o]=Bl(Xl(a,Pe,o));function Hl(o,g){return o[6]==="IT"?gt:mt}let il=Hl(a),ie=il(a),Oe=K(a[5].authors),N=[];for(let o=0;o<Oe.length;o+=1)N[o]=Jl(Wl(a,Oe,o));ce=new J({props:{start:11,span:2,pos:a[3]*-.3,mobile:a[4],src:"../deco/cyan_02.webp"}}),ue=new J({props:{start:10,span:2,pos:a[3]*-.4,mobile:a[4],src:"../deco/magenta_02.webp"}}),he=new J({props:{start:8,span:1,pos:a[3]*-.1,mobile:a[4],src:"../deco/yellow_02.webp"}}),_e=new J({props:{start:3,span:2,pos:a[3]*-.2,mobile:a[4],src:"../deco/yellow_04.webp"}}),pe=new J({props:{start:2,span:1,pos:a[3]*-.3,mobile:a[4],src:"../deco/magenta_04.webp"}});function Nl(o,g){return o[6]==="IT"?vt:dt}let nl=Nl(a),ne=nl(a);me=new J({props:{start:11,span:2,pos:a[3]*-.2,mobile:a[4],src:"../deco/magenta_02.webp"}}),ge=new J({props:{start:10,span:2,pos:a[3]*-.5,mobile:a[4],src:"../deco/cyan_03.webp"}}),de=new J({props:{start:8,span:1,pos:a[3]*-.3,mobile:a[4],src:"../deco/yellow_02.webp"}}),ve=new J({props:{start:3,span:2,pos:a[3]*-.4,mobile:a[4],src:"../deco/yellow_04.webp"}}),we=new J({props:{start:2,span:1,pos:a[3]*-.2,mobile:a[4],src:"../deco/cyan_04.webp"}});function Pl(o,g){return o[6]==="IT"?bt:wt}let fl=Pl(a),fe=fl(a);function Ol(o,g){if(o[5].installation.type==="video")return jt;if(o[5].installation.type==="video_bilingual")return kt;if(o[5].installation.type==="video_grid")return yt;if(o[5].installation.type==="img")return $t}let Re=Ol(a),U=Re&&Re(a);be=new J({props:{start:11,span:2,pos:a[3]*-.1,mobile:a[4],src:"../deco/magenta_03.webp"}}),$e=new J({props:{start:10,span:2,pos:a[3]*-.3,mobile:a[4],src:"../deco/yellow_01.webp"}}),ye=new J({props:{start:8,span:1,pos:a[3]*-.5,mobile:a[4],src:"../deco/magenta_02.webp"}}),ke=new J({props:{start:3,span:2,pos:a[3]*-.2,mobile:a[4],src:"../deco/yellow_03.webp"}}),je=new J({props:{start:2,span:1,pos:a[3]*-.3,mobile:a[4],src:"../deco/cyan_01.webp"}});let q=a[5].process&&Ql(a);return Te=new pt({}),{c(){P(t.$$.fragment),r=b(),i=d("div"),n=d("div"),u=d("div");for(let o=0;o<H.length;o+=1)H[o].c();m=b(),p=d("section"),h=d("h1"),k=new Z(!1),j=b(),I=d("h2"),ie.c(),C=b(),Y=d("ul");for(let o=0;o<N.length;o+=1)N[o].c();ae=b(),F=d("section"),Ae=d("p"),xe=x(Ke),ul=b(),P(ce.$$.fragment),hl=b(),P(ue.$$.fragment),_l=b(),P(he.$$.fragment),pl=b(),P(_e.$$.fragment),ml=b(),P(pe.$$.fragment),el=b(),L=d("section"),Ee=d("h2"),ne.c(),gl=b(),ze=d("div"),G=d("iframe"),dl=b(),Fe=d("p"),Qe=new Z(!1),vl=b(),P(me.$$.fragment),wl=b(),P(ge.$$.fragment),bl=b(),P(de.$$.fragment),$l=b(),P(ve.$$.fragment),yl=b(),P(we.$$.fragment),sl=b(),T=d("section"),Ie=d("h2"),fe.c(),kl=b(),oe=d("div"),U&&U.c(),jl=b(),He=d("p"),al=x(Ze),Cl=b(),P(be.$$.fragment),El=b(),P($e.$$.fragment),zl=b(),P(ye.$$.fragment),Il=b(),P(ke.$$.fragment),Ll=b(),P(je.$$.fragment),ol=b(),q&&q.c(),Ne=b(),Le=d("section"),P(Te.$$.fragment),this.h()},l(o){O(t.$$.fragment,o),r=$(o),i=v(o,"DIV",{id:!0,style:!0,class:!0});var g=w(i);n=v(g,"DIV",{id:!0,class:!0});var B=w(n);u=v(B,"DIV",{id:!0,class:!0});var Ve=w(u);for(let Q=0;Q<H.length;Q+=1)H[Q].l(Ve);Ve.forEach(c),B.forEach(c),m=$(g),p=v(g,"SECTION",{id:!0,class:!0});var re=w(p);h=v(re,"H1",{class:!0});var Me=w(h);k=ee(Me,!1),Me.forEach(c),j=$(re),I=v(re,"H2",{class:!0});var Se=w(I);ie.l(Se),Se.forEach(c),C=$(re),Y=v(re,"UL",{id:!0,class:!0});var Ye=w(Y);for(let Q=0;Q<N.length;Q+=1)N[Q].l(Ye);Ye.forEach(c),re.forEach(c),g.forEach(c),ae=$(o),F=v(o,"SECTION",{id:!0,class:!0});var W=w(F);Ae=v(W,"P",{class:!0});var Ge=w(Ae);xe=le(Ge,Ke),Ge.forEach(c),ul=$(W),O(ce.$$.fragment,W),hl=$(W),O(ue.$$.fragment,W),_l=$(W),O(he.$$.fragment,W),pl=$(W),O(_e.$$.fragment,W),ml=$(W),O(pe.$$.fragment,W),W.forEach(c),el=$(o),L=v(o,"SECTION",{id:!0,class:!0});var D=w(L);Ee=v(D,"H2",{class:!0});var Ue=w(Ee);ne.l(Ue),Ue.forEach(c),gl=$(D),ze=v(D,"DIV",{id:!0,class:!0});var qe=w(ze);G=v(qe,"IFRAME",{title:!0,src:!0,width:!0,height:!0,frameborder:!0,webkitallowfullscreen:!0,mozallowfullscreen:!0,class:!0}),w(G).forEach(c),qe.forEach(c),dl=$(D),Fe=v(D,"P",{class:!0});var We=w(Fe);Qe=ee(We,!1),We.forEach(c),vl=$(D),O(me.$$.fragment,D),wl=$(D),O(ge.$$.fragment,D),bl=$(D),O(de.$$.fragment,D),$l=$(D),O(ve.$$.fragment,D),yl=$(D),O(we.$$.fragment,D),D.forEach(c),sl=$(o),T=v(o,"SECTION",{id:!0,class:!0});var A=w(T);Ie=v(A,"H2",{class:!0});var Xe=w(Ie);fe.l(Xe),Xe.forEach(c),kl=$(A),oe=v(A,"DIV",{id:!0,class:!0});var Be=w(oe);U&&U.l(Be),Be.forEach(c),jl=$(A),He=v(A,"P",{class:!0});var Je=w(He);al=le(Je,Ze),Je.forEach(c),Cl=$(A),O(be.$$.fragment,A),El=$(A),O($e.$$.fragment,A),zl=$(A),O(ye.$$.fragment,A),Il=$(A),O(ke.$$.fragment,A),Ll=$(A),O(je.$$.fragment,A),A.forEach(c),ol=$(o),q&&q.l(o),Ne=$(o),Le=v(o,"SECTION",{class:!0});var z=w(Le);O(Te.$$.fragment,z),z.forEach(c),this.h()},h(){f(u,"id","images"),f(u,"class","svelte-lzjx1y"),f(n,"id","images-wrapper"),f(n,"class","svelte-lzjx1y"),k.a=null,f(h,"class","svelte-lzjx1y"),f(I,"class","svelte-lzjx1y"),f(Y,"id","authors-list"),f(Y,"class","svelte-lzjx1y"),f(p,"id","spotlight"),f(p,"class","svelte-lzjx1y"),f(i,"id","spotlight-wrapper"),f(i,"style",se=a[2]?`height: ${a[2]}px !important`:""),f(i,"class","svelte-lzjx1y"),f(Ae,"class","svelte-lzjx1y"),f(F,"id","context"),f(F,"class","svelte-lzjx1y"),f(Ee,"class","svelte-lzjx1y"),f(G,"title","catalogue"),X(G.src,ll=a[5].catalogue_permalink)||f(G,"src",ll),f(G,"width","100%"),f(G,"height","100%"),f(G,"frameborder","0"),f(G,"webkitallowfullscreen","true"),f(G,"mozallowfullscreen","true"),G.allowFullscreen=!0,f(G,"class","svelte-lzjx1y"),f(ze,"id","catalogue-embed"),f(ze,"class","catalogue-wrapper svelte-lzjx1y"),Qe.a=null,f(Fe,"class","svelte-lzjx1y"),f(L,"id","catalogue"),f(L,"class","svelte-lzjx1y"),f(Ie,"class","svelte-lzjx1y"),f(oe,"id","installation-spotlight"),f(oe,"class",rl=Vl(a[5].installation.type)+" svelte-lzjx1y"),f(He,"class","svelte-lzjx1y"),f(T,"id","installation"),f(T,"class","svelte-lzjx1y"),f(Le,"class","footer-section svelte-lzjx1y")},m(o,g){R(t,o,g),y(o,r,g),y(o,i,g),_(i,n),_(n,u);for(let B=0;B<H.length;B+=1)H[B]&&H[B].m(u,null);_(i,m),_(i,p),_(p,h),k.m(E,h),_(p,j),_(p,I),ie.m(I,null),_(p,C),_(p,Y);for(let B=0;B<N.length;B+=1)N[B]&&N[B].m(Y,null);y(o,ae,g),y(o,F,g),_(F,Ae),_(Ae,xe),_(F,ul),R(ce,F,null),_(F,hl),R(ue,F,null),_(F,_l),R(he,F,null),_(F,pl),R(_e,F,null),_(F,ml),R(pe,F,null),y(o,el,g),y(o,L,g),_(L,Ee),ne.m(Ee,null),_(L,gl),_(L,ze),_(ze,G),_(L,dl),_(L,Fe),Qe.m(tl,Fe),_(L,vl),R(me,L,null),_(L,wl),R(ge,L,null),_(L,bl),R(de,L,null),_(L,$l),R(ve,L,null),_(L,yl),R(we,L,null),y(o,sl,g),y(o,T,g),_(T,Ie),fe.m(Ie,null),_(T,kl),_(T,oe),U&&U.m(oe,null),_(T,jl),_(T,He),_(He,al),_(T,Cl),R(be,T,null),_(T,El),R($e,T,null),_(T,zl),R(ye,T,null),_(T,Il),R(ke,T,null),_(T,Ll),R(je,T,null),y(o,ol,g),q&&q.m(o,g),y(o,Ne,g),y(o,Le,g),R(Te,Le,null),te=!0,Tl||(Fl=[Dl(window,"resize",a[9]),Dl(window,"scroll",()=>{e=!0,clearTimeout(s),s=setTimeout(l,100),a[10]()}),Dl(u,"click",a[8])],Tl=!0)},p(o,g){g[0]&8&&!e&&(e=!0,clearTimeout(s),scrollTo(window.pageXOffset,o[3]),s=setTimeout(l,100));const B={};if(g[0]&16&&(B.mobile=o[4]),t.$set(B),g[0]&33){Pe=K(o[5].spotlightImages);let z;for(z=0;z<Pe.length;z+=1){const Q=Xl(o,Pe,z);H[z]?H[z].p(Q,g):(H[z]=Bl(Q),H[z].c(),H[z].m(u,null))}for(;z<H.length;z+=1)H[z].d(1);H.length=Pe.length}if((!te||g[0]&96)&&E!==(E=o[5].title[o[6].toLowerCase()]+"")&&k.p(E),il!==(il=Hl(o))&&(ie.d(1),ie=il(o),ie&&(ie.c(),ie.m(I,null))),g[0]&32){Oe=K(o[5].authors);let z;for(z=0;z<Oe.length;z+=1){const Q=Wl(o,Oe,z);N[z]?N[z].p(Q,g):(N[z]=Jl(Q),N[z].c(),N[z].m(Y,null))}for(;z<N.length;z+=1)N[z].d(1);N.length=Oe.length}(!te||g[0]&4&&se!==(se=o[2]?`height: ${o[2]}px !important`:""))&&f(i,"style",se),(!te||g[0]&96)&&Ke!==(Ke=o[5].description[o[6].toLowerCase()]+"")&&cl(xe,Ke);const Ve={};g[0]&8&&(Ve.pos=o[3]*-.3),g[0]&16&&(Ve.mobile=o[4]),ce.$set(Ve);const re={};g[0]&8&&(re.pos=o[3]*-.4),g[0]&16&&(re.mobile=o[4]),ue.$set(re);const Me={};g[0]&8&&(Me.pos=o[3]*-.1),g[0]&16&&(Me.mobile=o[4]),he.$set(Me);const Se={};g[0]&8&&(Se.pos=o[3]*-.2),g[0]&16&&(Se.mobile=o[4]),_e.$set(Se);const Ye={};g[0]&8&&(Ye.pos=o[3]*-.3),g[0]&16&&(Ye.mobile=o[4]),pe.$set(Ye),nl!==(nl=Nl(o))&&(ne.d(1),ne=nl(o),ne&&(ne.c(),ne.m(Ee,null))),(!te||g[0]&32&&!X(G.src,ll=o[5].catalogue_permalink))&&f(G,"src",ll),(!te||g[0]&96)&&tl!==(tl=o[5].analysis[o[6].toLowerCase()]+"")&&Qe.p(tl);const W={};g[0]&8&&(W.pos=o[3]*-.2),g[0]&16&&(W.mobile=o[4]),me.$set(W);const Ge={};g[0]&8&&(Ge.pos=o[3]*-.5),g[0]&16&&(Ge.mobile=o[4]),ge.$set(Ge);const D={};g[0]&8&&(D.pos=o[3]*-.3),g[0]&16&&(D.mobile=o[4]),de.$set(D);const Ue={};g[0]&8&&(Ue.pos=o[3]*-.4),g[0]&16&&(Ue.mobile=o[4]),ve.$set(Ue);const qe={};g[0]&8&&(qe.pos=o[3]*-.2),g[0]&16&&(qe.mobile=o[4]),we.$set(qe),fl!==(fl=Pl(o))&&(fe.d(1),fe=fl(o),fe&&(fe.c(),fe.m(Ie,null))),Re===(Re=Ol(o))&&U?U.p(o,g):(U&&U.d(1),U=Re&&Re(o),U&&(U.c(),U.m(oe,null))),(!te||g[0]&32&&rl!==(rl=Vl(o[5].installation.type)+" svelte-lzjx1y"))&&f(oe,"class",rl),(!te||g[0]&96)&&Ze!==(Ze=o[5].installation[o[6].toLowerCase()]+"")&&cl(al,Ze);const We={};g[0]&8&&(We.pos=o[3]*-.1),g[0]&16&&(We.mobile=o[4]),be.$set(We);const A={};g[0]&8&&(A.pos=o[3]*-.3),g[0]&16&&(A.mobile=o[4]),$e.$set(A);const Xe={};g[0]&8&&(Xe.pos=o[3]*-.5),g[0]&16&&(Xe.mobile=o[4]),ye.$set(Xe);const Be={};g[0]&8&&(Be.pos=o[3]*-.2),g[0]&16&&(Be.mobile=o[4]),ke.$set(Be);const Je={};g[0]&8&&(Je.pos=o[3]*-.3),g[0]&16&&(Je.mobile=o[4]),je.$set(Je),o[5].process?q?q.p(o,g):(q=Ql(o),q.c(),q.m(Ne.parentNode,Ne)):q&&(q.d(1),q=null)},i(o){te||(V(t.$$.fragment,o),V(ce.$$.fragment,o),V(ue.$$.fragment,o),V(he.$$.fragment,o),V(_e.$$.fragment,o),V(pe.$$.fragment,o),V(me.$$.fragment,o),V(ge.$$.fragment,o),V(de.$$.fragment,o),V(ve.$$.fragment,o),V(we.$$.fragment,o),V(be.$$.fragment,o),V($e.$$.fragment,o),V(ye.$$.fragment,o),V(ke.$$.fragment,o),V(je.$$.fragment,o),V(Te.$$.fragment,o),te=!0)},o(o){M(t.$$.fragment,o),M(ce.$$.fragment,o),M(ue.$$.fragment,o),M(he.$$.fragment,o),M(_e.$$.fragment,o),M(pe.$$.fragment,o),M(me.$$.fragment,o),M(ge.$$.fragment,o),M(de.$$.fragment,o),M(ve.$$.fragment,o),M(we.$$.fragment,o),M(be.$$.fragment,o),M($e.$$.fragment,o),M(ye.$$.fragment,o),M(ke.$$.fragment,o),M(je.$$.fragment,o),M(Te.$$.fragment,o),te=!1},d(o){o&&(c(r),c(i),c(ae),c(F),c(el),c(L),c(sl),c(T),c(ol),c(Ne),c(Le)),S(t,o),De(H,o),ie.d(),De(N,o),S(ce),S(ue),S(he),S(_e),S(pe),ne.d(),S(me),S(ge),S(de),S(ve),S(we),fe.d(),U&&U.d(),S(be),S($e),S(ye),S(ke),S(je),q&&q.d(o),S(Te),Tl=!1,at(Fl)}}}function Rt(a,e,l){let s,t;Ml(a,ut,C=>l(6,t=C));let r=0,i=0,n=0,u=0,m=!1,p=0;const h=_t(ht,C=>C.params.slug);Ml(a,h,C=>l(12,s=C));let k=ft.filter(C=>C.slug===s)[0];k.spotlightImages=["../sample-images/0.jpg","../sample-images/1.jpg","../sample-images/2.jpg"];function E(C){p++,C.preventDefault();let Y=C.clientX,se=C.clientY,ae=this.children;ae[p%ae.length].style.left=100*Y/r+"%",ae[p%ae.length].style.top=100*se/i+"%"}function j(){l(0,r=window.innerWidth),l(1,i=window.innerHeight)}function I(){l(3,u=window.pageYOffset)}return a.$$.update=()=>{a.$$.dirty[0]&6&&l(2,n=i&&(n==0||i<n)?i:n),a.$$.dirty[0]&1&&l(4,m=r<768)},[r,i,n,u,m,k,t,h,E,j,I]}class Wt extends it{constructor(e){super(),nt(this,e,Rt,Ot,rt,{},null,[-1,-1])}}export{Wt as component};
