import{s as be,d as ke,e as S,c as we,f as je,r as Ie,n as Se}from"../chunks/scheduler.A2lyj9IH.js";import{S as ye,i as Oe,m as Pe,s as M,e as f,t as Te,n as pe,o as Ee,f as V,c as h,a as O,d as u,b as Ae,p as a,q as te,r as De,g as G,h as m,u as U,j as Me,k as Ve,l as Re,v as $e,w as _e,H as qe,x as Ge}from"../chunks/index.aguW_r_3.js";import{N as Xe,e as le,l as Ye}from"../chunks/Navbar.SvoTw9a4.js";import{p as se}from"../chunks/data_master.A1dWg69L.js";function ge(s,t,i){const e=s.slice();return e[11]=t[i],e}function fe(s,t,i){const e=s.slice();return e[11]=t[i],e}function he(s){let t,i,e,o=s[11].title[s[3].toLowerCase()]+"",n,c,w;return{c(){t=f("div"),i=f("a"),e=new qe(!1),n=M(),this.h()},l(g){t=h(g,"DIV",{class:!0});var p=O(t);i=h(p,"A",{class:!0,href:!0});var R=O(i);e=Ge(R,!1),R.forEach(u),n=V(p),p.forEach(u),this.h()},h(){e.a=null,a(i,"class",je(s[11].slug)+" svelte-1jkaggp"),a(i,"href","/projects/"+s[11].slug),a(t,"class",s[11].slug+" wrapper svelte-1jkaggp")},m(g,p){G(g,t,p),m(t,i),e.m(o,i),m(t,n),c||(w=[U(i,"mousemove",s[4]),U(t,"mouseover",Ne),U(t,"mouseleave",ze),U(t,"mousemove",s[4])],c=!0)},p(g,p){p&8&&o!==(o=g[11].title[g[3].toLowerCase()]+"")&&e.p(o)},d(g){g&&u(t),c=!1,Ie(w)}}}function de(s){let t,i=le(se),e=[];for(let o=0;o<i.length;o+=1)e[o]=ve(ge(s,i,o));return{c(){t=f("div");for(let o=0;o<e.length;o+=1)e[o].c();this.h()},l(o){t=h(o,"DIV",{class:!0});var n=O(t);for(let c=0;c<e.length;c+=1)e[c].l(n);n.forEach(u),this.h()},h(){a(t,"class","image-container svelte-1jkaggp")},m(o,n){G(o,t,n);for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(t,null)},p(o,n){if(n&0){i=le(se);let c;for(c=0;c<i.length;c+=1){const w=ge(o,i,c);e[c]?e[c].p(w,n):(e[c]=ve(w),e[c].c(),e[c].m(t,null))}for(;c<e.length;c+=1)e[c].d(1);e.length=i.length}},d(o){o&&u(t),_e(e,o)}}}function ve(s){let t,i;return{c(){t=f("img"),this.h()},l(e){t=h(e,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){a(t,"class","spotlight-image "+s[11].slug+" svelte-1jkaggp"),S(t.src,i="./projects/"+s[11].slug+"/spotlight/"+(1+Math.floor(Math.random()*s[11].spotlight_images))+".webp")||a(t,"src",i),a(t,"alt","spotlight")},m(e,o){G(e,t,o)},p:Se,d(e){e&&u(t)}}}function Ce(s){let t,i,e,o,n,c,w,g,p,R,N,X,P,v,A,T,j,Y,J,C,y,L,z,$,E,B,H,_,q,K=s[3]=="IT"?"Progetti":"Projects",Z,ae,x,F,I,ie,oe;ke(s[5]),t=new Xe({props:{mobile:s[2],menu:Le}});let W=le(se),d=[];for(let l=0;l<W.length;l+=1)d[l]=he(fe(s,W,l));let b=!s[2]&&de(s);return{c(){Pe(t.$$.fragment),i=M(),e=f("div"),o=f("div"),n=f("img"),w=M(),g=f("div"),p=f("img"),N=M(),X=f("div"),P=f("img"),A=M(),T=f("div"),j=f("img"),J=M(),C=f("div"),y=f("img"),z=M(),$=f("div"),E=f("img"),H=M(),_=f("div"),q=f("div"),Z=Te(K),ae=M();for(let l=0;l<d.length;l+=1)d[l].c();x=M(),b&&b.c(),F=pe(),this.h()},l(l){Ee(t.$$.fragment,l),i=V(l),e=h(l,"DIV",{id:!0,style:!0,class:!0});var r=O(e);o=h(r,"DIV",{class:!0});var D=O(o);n=h(D,"IMG",{src:!0,alt:!0,class:!0}),D.forEach(u),w=V(r),g=h(r,"DIV",{class:!0});var k=O(g);p=h(k,"IMG",{src:!0,alt:!0,class:!0}),k.forEach(u),N=V(r),X=h(r,"DIV",{class:!0});var Q=O(X);P=h(Q,"IMG",{src:!0,alt:!0,class:!0}),Q.forEach(u),A=V(r),T=h(r,"DIV",{class:!0});var ce=O(T);j=h(ce,"IMG",{src:!0,alt:!0,class:!0}),ce.forEach(u),J=V(r),C=h(r,"DIV",{class:!0});var ne=O(C);y=h(ne,"IMG",{src:!0,alt:!0,class:!0}),ne.forEach(u),z=V(r),$=h(r,"DIV",{class:!0});var me=O($);E=h(me,"IMG",{src:!0,alt:!0,class:!0}),me.forEach(u),r.forEach(u),H=V(l),_=h(l,"DIV",{class:!0,style:!0});var ee=O(_);q=h(ee,"DIV",{class:!0});var ue=O(q);Z=Ae(ue,K),ue.forEach(u),ae=V(ee);for(let re=0;re<d.length;re+=1)d[re].l(ee);ee.forEach(u),x=V(l),b&&b.l(l),F=pe(),this.h()},h(){S(n.src,c="./map/"+(s[2]?"mobile":"desktop")+"/SOPRA4.webp")||a(n,"src",c),a(n,"alt",""),a(n,"class","svelte-1jkaggp"),a(o,"class","map higher svelte-1jkaggp"),S(p.src,R="./map/"+(s[2]?"mobile":"desktop")+"/SOPRA3.webp")||a(p,"src",R),a(p,"alt",""),a(p,"class","svelte-1jkaggp"),a(g,"class","map higher svelte-1jkaggp"),S(P.src,v="./map/"+(s[2]?"mobile":"desktop")+"/SOPRA2.webp")||a(P,"src",v),a(P,"alt",""),a(P,"class","svelte-1jkaggp"),a(X,"class","map higher svelte-1jkaggp"),S(j.src,Y="./map/"+(s[2]?"mobile":"desktop")+"/SOPRA1.webp")||a(j,"src",Y),a(j,"alt",""),a(j,"class","svelte-1jkaggp"),a(T,"class","map higher svelte-1jkaggp"),S(y.src,L="./map/"+(s[2]?"mobile":"desktop")+"/SOTTO1.webp")||a(y,"src",L),a(y,"alt",""),a(y,"class","svelte-1jkaggp"),a(C,"class","map lower svelte-1jkaggp"),S(E.src,B="./map/"+(s[2]?"mobile":"desktop")+"/SOTTO2.webp")||a(E,"src",B),a(E,"alt",""),a(E,"class","svelte-1jkaggp"),a($,"class","map lower svelte-1jkaggp"),a(e,"id","backdrop"),te(e,"height",s[1]+"px"),a(e,"class","svelte-1jkaggp"),a(q,"class","title wrapper svelte-1jkaggp"),a(_,"class","project-container svelte-1jkaggp"),te(_,"height",s[1]+"px")},m(l,r){De(t,l,r),G(l,i,r),G(l,e,r),m(e,o),m(o,n),m(e,w),m(e,g),m(g,p),m(e,N),m(e,X),m(X,P),m(e,A),m(e,T),m(T,j),m(e,J),m(e,C),m(C,y),m(e,z),m(e,$),m($,E),G(l,H,r),G(l,_,r),m(_,q),m(q,Z),m(_,ae);for(let D=0;D<d.length;D+=1)d[D]&&d[D].m(_,null);G(l,x,r),b&&b.m(l,r),G(l,F,r),I=!0,ie||(oe=U(window,"resize",s[5]),ie=!0)},p(l,[r]){const D={};if(r&4&&(D.mobile=l[2]),t.$set(D),(!I||r&4&&!S(n.src,c="./map/"+(l[2]?"mobile":"desktop")+"/SOPRA4.webp"))&&a(n,"src",c),(!I||r&4&&!S(p.src,R="./map/"+(l[2]?"mobile":"desktop")+"/SOPRA3.webp"))&&a(p,"src",R),(!I||r&4&&!S(P.src,v="./map/"+(l[2]?"mobile":"desktop")+"/SOPRA2.webp"))&&a(P,"src",v),(!I||r&4&&!S(j.src,Y="./map/"+(l[2]?"mobile":"desktop")+"/SOPRA1.webp"))&&a(j,"src",Y),(!I||r&4&&!S(y.src,L="./map/"+(l[2]?"mobile":"desktop")+"/SOTTO1.webp"))&&a(y,"src",L),(!I||r&4&&!S(E.src,B="./map/"+(l[2]?"mobile":"desktop")+"/SOTTO2.webp"))&&a(E,"src",B),(!I||r&2)&&te(e,"height",l[1]+"px"),(!I||r&8)&&K!==(K=l[3]=="IT"?"Progetti":"Projects")&&Me(Z,K),r&24){W=le(se);let k;for(k=0;k<W.length;k+=1){const Q=fe(l,W,k);d[k]?d[k].p(Q,r):(d[k]=he(Q),d[k].c(),d[k].m(_,null))}for(;k<d.length;k+=1)d[k].d(1);d.length=W.length}(!I||r&2)&&te(_,"height",l[1]+"px"),l[2]?b&&(b.d(1),b=null):b?b.p(l,r):(b=de(l),b.c(),b.m(F.parentNode,F))},i(l){I||(Ve(t.$$.fragment,l),I=!0)},o(l){Re(t.$$.fragment,l),I=!1},d(l){l&&(u(i),u(e),u(H),u(_),u(x),u(F)),$e(t,l),_e(d,l),b&&b.d(l),ie=!1,oe()}}}const He=5;let Le=!0;function Ne(s){let t=s.target.classList[0],i=document.querySelector(`.spotlight-image.${t}`),e=document.querySelector(".image-container");i.style.opacity=1,+e.style.left==0&&(e.style.left=s.clientX+200+"px",e.style.top=s.clientY+"px")}function ze(s){let t=s.target.classList[0],i=document.querySelector(`.spotlight-image.${t}`);i.style.opacity=0}function Be(s,t,i){let e,o;we(s,Ye,v=>i(3,o=v));let n=0,c=0,w=null,g=!1,p;function R(v,A){w&&(g||requestAnimationFrame(()=>N(v,A)))}function N(v,A){g=!0;let T=w,j=v.getBoundingClientRect().left,Y=v.getBoundingClientRect().top,J=T.clientX+A,C=T.clientY,y=J-j,L=C-Y,z=35,$=1,E=y*$,B=L*$,H=0,_=0,q=.8;H+=E/z,_+=B/z,H*=q,_*=q,j+=H,Y+=_,v.style.left=`${j}px`,v.style.top=`${Y}px`,Math.abs(y)>.5||Math.abs(L)>.5?requestAnimationFrame(()=>N(v,A)):g=!1}function X(v){w=v;let A=document.querySelector(".image-container"),T=200;clearTimeout(p),p=setTimeout(()=>{R(A,T)},He)}function P(){i(0,n=window.innerWidth),i(1,c=window.innerHeight)}return s.$$.update=()=>{s.$$.dirty&1&&i(2,e=n<1024)},[n,c,e,o,X,P]}class Qe extends ye{constructor(t){super(),Oe(this,t,Be,Ce,be,{})}}export{Qe as component};
