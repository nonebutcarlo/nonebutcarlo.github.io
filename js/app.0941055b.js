(()=>{"use strict";var e={6441:(e,t,o)=>{var a=o(1957),i=o(1947),r=o(499),s=o(9835);const n={id:"q-app"};function l(e,t,o,a,i,r){const l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(l)])}var c=o(3100),d=o(222);const u={methods:{...(0,c.nv)("auth",["handleAuthStateChanged","logoutUser"]),...(0,c.nv)("movimenti",["firestoreStopGettingMovimenti"])},mounted(){d.Z.auth().setPersistence(d.Z.auth.Auth.Persistence.SESSION).then((()=>this.handleAuthStateChanged())).catch((e=>console.error(e.message)))},beforeUnmount(){this.firestoreStopGettingMovimenti()}};var m=o(1639);const h=(0,m.Z)(u,[["render",l]]),p=h;var f=o(5387),b=o(3340),g=o(8339);const v=[{path:"/",component:()=>Promise.all([o.e(736),o.e(3)]).then(o.bind(o,8003)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(866)]).then(o.bind(o,866)),name:"home"},{path:"auth",component:()=>Promise.all([o.e(736),o.e(824)]).then(o.bind(o,2824)),name:"auth"},{path:"listaMovimenti",component:()=>Promise.all([o.e(736),o.e(7)]).then(o.bind(o,6007)),name:"listaMovimenti",meta:{requiresAuth:!0}},{path:"listaSaldi",component:()=>Promise.all([o.e(736),o.e(461)]).then(o.bind(o,4461)),name:"listaSaldi",meta:{requiresAuth:!0}},{path:"filtri",component:()=>Promise.all([o.e(736),o.e(431)]).then(o.bind(o,5431)),name:"filtri",meta:{requiresAuth:!0}}]},{path:"/:pathMatch(.*)*",component:()=>Promise.all([o.e(736),o.e(164)]).then(o.bind(o,4164))}],D=v,S=(0,b.BC)((function(){const e=g.r5,t=(0,g.p7)({scrollBehavior:()=>({left:0,top:0}),routes:D,history:e("")});return t}));async function w(e,t){const a=e(p);a.use(i.Z,t);const s="function"===typeof f.Z?await(0,f.Z)({}):f.Z,{storeKey:n}=await Promise.resolve().then(o.bind(o,5387)),l=(0,r.Xl)("function"===typeof S?await S({store:s}):S);return s.$router=l,{app:a,store:s,storeKey:n,router:l}}var y=o(6050),P=o(5448),A=o(4462),T=o(4328),I=o(7159);const M={config:{loadingBar:{color:"warning",size:"4px"}},lang:y.Z,iconSet:P.Z,plugins:{Dialog:A.Z,Notify:T.Z,LoadingBar:I.Z}},U="";async function O({app:e,router:t,store:o,storeKey:a},i){let r=!1;const s=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},n=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=s(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let d=0;!1===r&&d<i.length;d++)try{await i[d]({app:e,router:t,store:o,ssrContext:null,redirect:n,urlPath:l,publicPath:U})}catch(c){return c&&c.url?void n(c.url):void console.error("[Quasar] boot error:",c)}!0!==r&&(e.use(t),e.use(o,a),e.mount("#q-app"))}w(a.ri,M).then((e=>{const[t,a]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(o.bind(o,2139)),Promise.resolve().then(o.bind(o,4987))]).then((t=>{const o=a(t).filter((e=>"function"===typeof e));O(e,o)}))}))},4987:(e,t,o)=>{o.r(t),o.d(t,{firebaseAuth:()=>s,firebaseDb:()=>n});var a=o(222),i=(o(2159),o(9226),{apiKey:"AIzaSyC-YNdahqcU3YSBeDv3bbALyKTU5IUrPyY",authDomain:"account-manager-25e69.firebaseapp.com",projectId:"account-manager-25e69",storageBucket:"account-manager-25e69.appspot.com",messagingSenderId:"28082462276",appId:"1:28082462276:web:2da1066ebfc3ddd9e3a611"});const r=a.Z.initializeApp(i),s=r.auth(),n=r.firestore()},2139:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const a=({router:e,store:t,Vue:o})=>{e.beforeEach(((e,o,a)=>{const i=t.getters["auth/isLoggedIn"];e.matched.some((e=>e.meta.requiresAuth))&&!i?a({name:"auth",replace:!0}):a()}))}},6283:(e,t,o)=>{o.d(t,{dK:()=>s,hW:()=>d,ok:()=>u,p6:()=>n,ui:()=>l});var a=o(222),i=o(4170),r=o(4328);const s=e=>{delete e.id;const t=i.ZP.extractDate(e.data,"DD/MM/YYYY");return e.data=a.Z.firestore.Timestamp.fromDate(t),e.entrata=c(e.entrata),e.uscita=c(e.uscita),e},n=e=>i.ZP.extractDate(e,"DD/MM/YYYY"),l=e=>(e.value=c(e.value),e),c=e=>(e="string"===typeof e?Number(e.replace(",",".")):e,e=Number.isNaN(e)?0:e,e),d=(e,t=!1)=>{r.Z.create({message:e,color:t?"negative":"primary",position:"bottom-left"})},u=(e,t)=>{const o=e.split(/[^\w]+/);return o.every((e=>t.includes(e)))}},5387:(e,t,o)=>{o.d(t,{Z:()=>E});var a=o(3340),i=o(3100),r=(o(2879),o(4987));let s=null;const n={userDetails:{}},l={setUserDetails(e,t){e.userDetails=t},updateUser(e,t){Object.assign(e.userDetails,t)}},c={registerUser({},e){return new Promise(((t,o)=>{r.firebaseAuth.createUserWithEmailAndPassword(e.email,e.password).then((a=>{let i=r.firebaseAuth.currentUser.uid;r.firebaseDb.collection("users").doc(i).set({nome:e.nome,email:e.email,saldo:0,saldoTotale:0}).then((()=>t("Registrazione effettuata con successo"))).catch((e=>o(e.message)))})).catch((e=>o(e.message)))}))},loginUser({},e){return new Promise(((t,o)=>{r.firebaseAuth.signInWithEmailAndPassword(e.email,e.password).then((e=>t("Accesso effettuato"))).catch((e=>o(e.message)))}))},logoutUser({}){r.firebaseAuth.signOut()},handleAuthStateChanged({commit:e}){r.firebaseAuth.onAuthStateChanged((t=>{if(t){let t=r.firebaseAuth.currentUser.uid;r.firebaseDb.collection("users").doc(t).get().then((o=>{if(o.exists){const a=o.data();e("setUserDetails",{nome:a.nome,email:a.email,userId:t,saldo:a.saldo,saldoTotale:a.saldoTotale}),this.$router.push({name:"listaMovimenti"}).catch((()=>{}))}})).catch((e=>console.log(e.message)))}else e("setUserDetails",{}),s&&s(),this.$router.replace("/auth").catch((()=>{}))}))},updateSaldo({commit:e,state:t}){let o=r.firebaseAuth.currentUser.uid;r.firebaseDb.collection("users").doc(o).get().then((t=>e("updateUser",t.data()))).catch((e=>console.log("Errore nell'aggiornamento saldo")))}},d={isLoggedIn(e){return e.userDetails.userId},saldo(e){return e.userDetails.saldo},saldoTotale(e){return e.userDetails.saldoTotale},saldoPersonale(e){return e.userDetails.saldoTotale-e.userDetails.saldo}},u={namespaced:!0,state:n,mutations:l,actions:c,getters:d};var m=o(6283);o(4170);let h=null,p=null;const f=10,b={movimenti:{},limite:f,filtri:{tipi:null,descrizione:null,dataInizio:null,dataFine:null,entrata:null}},g={addMovimento(e,t){e.movimenti[t.movimentoId]=t.movimentoDetails},updateMovimento(e,t){Object.assign(e.movimenti[t.movimentoId],t.movimentoDetails)},deleteMovimento(e,t){delete e.movimenti[t]},clearMovimenti(e){e.movimenti={},h=null,p=null},setLimite(e,t){e.limite=t},resetLimite(e){e.limite=f},setFiltri(e,t){e.filtri=t},resetFiltri(e){e.filtri={tipi:null,descrizione:null,dataInizio:null,dataFine:null,entrata:null}}},v={firestoreGetMovimenti({state:e,commit:t,rootGetters:o}){return new Promise(((a,i)=>{const s=o["auth/isLoggedIn"],n=o["movimenti/filtriImpostati"];h=r.firebaseDb.collection("users").doc(s).collection("movimenti"),h=h.orderBy("data","desc"),0==n&&(h=h.limit(e.limite)),p=h.onSnapshot((o=>{o.empty||o.forEach((o=>{const a=o.id;let i=o.data();i.data=o.data().data.toDate(),i.id=a,S(e,i)&&t("addMovimento",{movimentoId:a,movimentoDetails:i})})),a("Dati recuperati")}),(e=>{i(e.message)}))}))},firestoreStopGettingMovimenti({commit:e}){p&&(p(),e("clearMovimenti"),e("resetLimite"))},firestoreSaveMovimento({rootGetters:e,dispatch:t},o){return new Promise(((a,i)=>{let s=r.firebaseAuth.currentUser.uid,n=o;n=(0,m.dK)(n);const l=n.entrata-n.uscita,c=e["auth/saldo"],d=c+l;r.firebaseDb.collection("users").doc(s).collection("movimenti").add(n).then((()=>{r.firebaseDb.collection("users").doc(s).update({saldo:d}).then((()=>{t("auth/updateSaldo",null,{root:!0}),a("Movimento salvato")})).catch((e=>i(e.message)))})).catch((e=>i(e.message)))}))},firestoreAggiornaMovimento({state:e,rootGetters:t,dispatch:o},a){return new Promise(((i,s)=>{let n=r.firebaseAuth.currentUser.uid,l=a;const c=l.id,d=e.movimenti[c],u=d.entrata-d.uscita;l=(0,m.dK)(l);const h=l.entrata-l.uscita,p=t["auth/saldo"],f=p-u+h;r.firebaseDb.collection("users").doc(n).collection("movimenti").doc(c).update(l).then((()=>{r.firebaseDb.collection("users").doc(n).update({saldo:f}).then((()=>{o("auth/updateSaldo",null,{root:!0}),i("Movimento aggiornato")})).catch((e=>s(e.message)))})).catch((e=>s(e.message)))}))},firestoreDeleteMovimento({commit:e,state:t,rootGetters:o,dispatch:a},i){return new Promise(((s,n)=>{let l=r.firebaseAuth.currentUser.uid;const c=t.movimenti[i],d=c.entrata-c.uscita,u=o["auth/saldo"],m=u-d;r.firebaseDb.collection("users").doc(l).collection("movimenti").doc(i).delete().then((t=>{r.firebaseDb.collection("users").doc(l).update({saldo:m}).then((()=>{e("deleteMovimento",i),a("auth/updateSaldo",null,{root:!0}),s("Movimento Cancellato")})).catch((e=>n(e.message)))})).catch((e=>n(e.message)))}))},incrementLimite({state:e,commit:t,dispatch:o},a){return new Promise(((i,r)=>{const s=a?f:e.limite+f;a&&t("resetFiltri"),o("firestoreStopGettingMovimenti"),t("setLimite",s),o("firestoreGetMovimenti").then((()=>{i()})).catch((()=>{r()}))}))},setFiltri({state:e,commit:t},o){t("setFiltri",o)},resetFiltri({state:e,commit:t,dispatch:o}){o("incrementLimite",!0)}},D={filtri(e){return e.filtri},filtriImpostati(e){let t=0;return t+=null!=e.filtri.dataInizio,t+=null!=e.filtri.dataFine,t+=null!=e.filtri.tipi,t+=null!=e.filtri.descrizione,t+=null!=e.filtri.entrata,t}};function S(e,t){const o=Object.values(e.filtri.tipi??[]);if(o.length>0&&!o.includes(t.tipo))return!1;if(null!=e.filtri.entrata){const o=e.filtri.entrata?t.uscita:t.entrata;if(0!=o)return!1}if(null!=e.filtri.dataInizio){const o=(0,m.p6)(e.filtri.dataInizio);if(t.data<o)return!1}if(null!=e.filtri.dataFine){const o=(0,m.p6)(e.filtri.dataFine);if(t.data>o)return!1}return!(null!=e.filtri.descrizione&&!(0,m.ok)(e.filtri.descrizione.toLowerCase(),t.descrizione.toLowerCase()))}const w={namespaced:!0,state:b,mutations:g,actions:v,getters:D};var y=o(499);let P=null,A=null;const T={tipi:{}},I={addTipo(e,t){e.tipi[t.tipoId]=t.tipoDetails},updateTipo(e,t){Object.assign(e.tipi[t.tipoId],t.tipoDetails)},deleteTipo(e,t){delete e.tipi[t.tipoId]},clearTipi(e){e.tipi={},P=null,A=null}},M={firestoreGetTipi({commit:e,rootGetters:t}){const o=t["auth/isLoggedIn"];P=r.firebaseDb.collection("users").doc(o).collection("tipi").orderBy("nome"),A=P.onSnapshot((t=>{t.empty||t.forEach((t=>{const o=t.id;let a=t.data();e("addTipo",{tipoId:o,tipoDetails:a})}))}))},firestoreStopGettingTipi({commit:e}){A&&(A(),e("clearTipi"))},firestoreSaveTipo({},e){let t=r.firebaseAuth.currentUser.uid;const o={nome:e};r.firebaseDb.collection("users").doc(t).collection("tipi").add(o).then((e=>(0,m.hW)("Tipo Salvato"))).catch((e=>(0,m.hW)(e.message)))}},U={getTipi(e){return Object.values((0,y.IU)(e.tipi)).map((e=>e.nome)).sort()},tiponi(e){return e.tipi}},O={namespaced:!0,state:T,mutations:I,actions:M,getters:U};let j=null,G=null;const Z={saldi:{}},C={addSaldo(e,t){e.saldi[t.saldoId]=t.saldoDetails},updateSaldo(e,t){Object.assign(e.saldi[t.saldoId],t.saldoDetails)},deleteSaldo(e,t){delete e.saldi[t]},clearSaldi(e){e.saldi={},j=null,G=null}},L={firestoreGetSaldi({commit:e,rootGetters:t}){return new Promise(((o,a)=>{const i=t["auth/isLoggedIn"];j=r.firebaseDb.collection("users").doc(i).collection("saldi").orderBy("nome"),G=j.onSnapshot((t=>{t.empty||t.forEach((t=>{const o=t.id;let a=t.data();a.data=t.data().data.toDate(),a.id=o,e("addSaldo",{saldoId:o,saldoDetails:a})})),o("Dati recuperati")}),(e=>{a(e.message)}))}))},firestoreStopGettingSaldi({commit:e}){G&&(G(),e("clearSaldi"))},firestoreSaveSaldo({rootGetters:e,dispatch:t},o){return new Promise(((a,i)=>{let s=r.firebaseAuth.currentUser.uid,n=o;n=(0,m.ui)(n);const l=e["saldi/saldoTotale"]+n.value;r.firebaseDb.collection("users").doc(s).collection("saldi").add(n).then((()=>{r.firebaseDb.collection("users").doc(s).update({saldoTotale:l}).then((()=>{t("auth/updateSaldo",null,{root:!0}),a("Saldo aggiunto")})).catch((e=>i(e.message)))})).catch((e=>i(e.message)))}))},firestoreAggiornaSaldo({state:e,rootGetters:t,dispatch:o},a){return new Promise(((i,s)=>{let n=r.firebaseAuth.currentUser.uid,l=a;const c=l.id,d=e.saldi[c].value;l=(0,m.ui)(l);const u=t["saldi/saldoTotale"]-d+l.value;r.firebaseDb.collection("users").doc(n).collection("saldi").doc(c).update(l).then((()=>{r.firebaseDb.collection("users").doc(n).update({saldoTotale:u}).then((()=>{o("auth/updateSaldo",null,{root:!0}),i("Saldo aggiornato")})).catch((e=>s(e.message)))})).catch((e=>s(e.message)))}))},firestoreDeleteSaldo({commit:e,state:t,rootGetters:o,dispatch:a},i){return new Promise(((s,n)=>{let l=r.firebaseAuth.currentUser.uid;const c=t.saldi[i].value,d=o["saldi/saldoTotale"]-c;r.firebaseDb.collection("users").doc(l).collection("saldi").doc(i).delete().then((t=>{r.firebaseDb.collection("users").doc(l).update({saldoTotale:d}).then((()=>{e("deleteSaldo",i),a("auth/updateSaldo",null,{root:!0}),s("Saldo Cancellato")})).catch((e=>n(e.message)))})).catch((e=>n(e.message)))}))}},k={saldoTotale(e){return Object.values(e.saldi).map((e=>e.value)).reduce(((e,t)=>e+t),0)}},z={namespaced:!0,state:Z,mutations:C,actions:L,getters:k},E=(0,a.h)((function(){const e=(0,i.MT)({modules:{auth:u,movimenti:w,tipi:O,saldi:z},strict:!1});return e}))}},t={};function o(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,o),r.exports}o.m=e,(()=>{var e=[];o.O=(t,a,i,r)=>{if(!a){var s=1/0;for(d=0;d<e.length;d++){for(var[a,i,r]=e[d],n=!0,l=0;l<a.length;l++)(!1&r||s>=r)&&Object.keys(o.O).every((e=>o.O[e](a[l])))?a.splice(l--,1):(n=!1,r<s&&(s=r));if(n){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,i,r]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,a)=>(o.f[a](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{3:"4ec615bb",7:"8da7165f",164:"f7bbc674",431:"33b441db",461:"befdd316",824:"7158139a",866:"9fc1afd7"}[e]+".js"})(),(()=>{o.miniCssF=e=>{}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="account-manager:";o.l=(a,i,r,s)=>{if(e[a])e[a].push(i);else{var n,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+r){n=u;break}}n||(l=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,o.nc&&n.setAttribute("nonce",o.nc),n.setAttribute("data-webpack",t+r),n.src=a),e[a]=[i];var m=(t,o)=>{n.onerror=n.onload=null,clearTimeout(h);var i=e[a];if(delete e[a],n.parentNode&&n.parentNode.removeChild(n),i&&i.forEach((e=>e(o))),t)return t(o)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=m.bind(null,n.onerror),n.onload=m.bind(null,n.onload),l&&document.head.appendChild(n)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e={143:0};o.f.j=(t,a)=>{var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var r=new Promise(((o,a)=>i=e[t]=[o,a]));a.push(i[2]=r);var s=o.p+o.u(t),n=new Error,l=a=>{if(o.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;n.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",n.name="ChunkLoadError",n.type=r,n.request=s,i[1](n)}};o.l(s,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,a)=>{var i,r,[s,n,l]=a,c=0;if(s.some((t=>0!==e[t]))){for(i in n)o.o(n,i)&&(o.m[i]=n[i]);if(l)var d=l(o)}for(t&&t(a);c<s.length;c++)r=s[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},a=globalThis["webpackChunkaccount_manager"]=globalThis["webpackChunkaccount_manager"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=o.O(void 0,[736],(()=>o(6441)));a=o.O(a)})();