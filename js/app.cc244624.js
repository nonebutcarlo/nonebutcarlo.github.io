(function(e){function t(t){for(var n,r,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},a={1:0},i=[];function r(e){return s.p+"js/"+({}[e]||e)+"."+{2:"5705843f",3:"6616f06d",4:"794f5edc",5:"76b12da6",6:"15cb3b24"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o=a[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}a[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;i.push([0,0]),o()})({0:function(e,t,o){e.exports=o("2f39")},"2f39":function(e,t,o){"use strict";o.r(t);o("e6cf"),o("5319"),o("7d6e"),o("e54f"),o("985d"),o("31cd");var n=o("2b0e"),a=o("a745"),i=o("42d2"),r=o("b05d"),s=o("436b"),c=o("2a19"),l=o("1b3f");n["a"].use(r["a"],{config:{loadingBar:{color:"warning",size:"4px"}},lang:a["a"],iconSet:i["a"],plugins:{Dialog:s["a"],Notify:c["a"],LoadingBar:l["a"]}});var u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"q-app"}},[o("router-view")],1)},d=[],m=o("ded3"),p=o.n(m),h=o("2f62"),f={methods:p()(p()({},Object(h["b"])("auth",["handleAuthStateChanged","logoutUser"])),Object(h["b"])("movimenti",["firestoreStopGettingMovimenti"])),mounted(){this.handleAuthStateChanged()},beforeDestroy(){this.firestoreStopGettingMovimenti(),this.logoutUser()}},g=f,v=o("2877"),b=Object(v["a"])(g,u,d,!1,null,null,null),w=b.exports,y=o("260b"),M=(o("ea7b"),o("e71f"),{apiKey:"AIzaSyC-YNdahqcU3YSBeDv3bbALyKTU5IUrPyY",authDomain:"account-manager-25e69.firebaseapp.com",projectId:"account-manager-25e69",storageBucket:"account-manager-25e69.appspot.com",messagingSenderId:"28082462276",appId:"1:28082462276:web:2da1066ebfc3ddd9e3a611"});const S=y["a"].initializeApp(M),P=S.auth(),D=S.firestore();let j=null;const O={userDetails:{}},U={setUserDetails(e,t){e.userDetails=t},updateUser(e,t){Object.assign(e.userDetails,t)}},I={registerUser({},e){return new Promise(((t,o)=>{P.createUserWithEmailAndPassword(e.email,e.password).then((n=>{let a=P.currentUser.uid;D.collection("users").doc(a).set({nome:e.nome,email:e.email,saldo:0}).then((()=>t("Registrazione effettuata con successo"))).catch((e=>o(e.message)))})).catch((e=>o(e.message)))}))},loginUser({commit:e},t){return new Promise(((e,o)=>{P.signInWithEmailAndPassword(t.email,t.password).then((t=>e("Accesso effettuato"))).catch((e=>o(e.message)))}))},logoutUser({},e){P.signOut()},handleAuthStateChanged({commit:e}){P.onAuthStateChanged((t=>{if(t){let t=P.currentUser.uid;D.collection("users").doc(t).get().then((o=>{if(o.exists){const n=o.data();e("setUserDetails",{nome:n.nome,email:n.email,userId:t,saldo:n.saldo}),this.$router.push({name:"listaMovimenti"}).catch((()=>{}))}})).catch((e=>console.log(e.message)))}else e("setUserDetails",{}),j&&j(),this.$router.replace("/auth").catch((()=>{}))}))},updateSaldo({commit:e,state:t}){let o=P.currentUser.uid;D.collection("users").doc(o).get().then((t=>e("updateUser",t.data()))).catch((e=>console.log("Errore nell'aggiornamento saldo")))}},T={isLoggedIn(e){return e.userDetails.userId},saldo(e){return e.userDetails.saldo}};var A={namespaced:!0,state:O,mutations:U,actions:I,getters:T},G=o("4506");let L=null,x=null;const E=10,N={movimenti:{},limite:E},C={addMovimento(e,t){n["a"].set(e.movimenti,t.movimentoId,t.movimentoDetails)},updateMovimento(e,t){Object.assign(e.movimenti[t.movimentoId],t.movimentoDetails)},deleteMovimento(e,t){n["a"].delete(e.movimenti,t)},clearMovimenti(e){e.movimenti={},L=null,x=null},setLimite(e,t){e.limite=t},resetLimite(e){e.limite=1}},_={firestoreGetMovimenti({state:e,commit:t,rootGetters:o}){return new Promise(((n,a)=>{const i=o["auth/isLoggedIn"];L=D.collection("users").doc(i).collection("movimenti").orderBy("data","desc").limit(e.limite),x=L.onSnapshot((e=>{e.empty||e.forEach((e=>{const o=e.id;let a=e.data();a.data=e.data().data.toDate(),a.id=o,t("addMovimento",{movimentoId:o,movimentoDetails:a}),n("Dati recuperati")}),(e=>{a(e.message)}))}))}))},firestoreStopGettingMovimenti({commit:e}){x&&(x(),e("clearMovimenti"),e("resetLimite"))},firestoreSaveMovimento({rootGetters:e,dispatch:t},o){return new Promise(((n,a)=>{let i=P.currentUser.uid,r=o;r=Object(G["a"])(r);const s=r.entrata-r.uscita,c=e["auth/saldo"],l=c+s;D.collection("users").doc(i).collection("movimenti").add(r).then((()=>{D.collection("users").doc(i).update({saldo:l}).then((()=>{t("auth/updateSaldo",null,{root:!0}),n("Movimento salvato")})).catch((e=>a(e.message)))})).catch((e=>a(e.message)))}))},firestoreAggiornaMovimento({state:e,rootGetters:t,dispatch:o},n){return new Promise(((a,i)=>{let r=P.currentUser.uid,s=n;const c=s.id,l=e.movimenti[c],u=l.entrata-l.uscita;s=Object(G["a"])(s);const d=s.entrata-s.uscita,m=t["auth/saldo"],p=m-u+d;D.collection("users").doc(r).collection("movimenti").doc(c).update(s).then((()=>{D.collection("users").doc(r).update({saldo:p}).then((()=>{o("auth/updateSaldo",null,{root:!0}),a("Movimento aggiornato")})).catch((e=>i(e.message)))})).catch((e=>i(e.message)))}))},firestoreDeleteMovimento({commit:e,state:t,rootGetters:o,dispatch:n},a){return new Promise(((i,r)=>{let s=P.currentUser.uid;const c=t.movimenti[a],l=c.entrata-c.uscita,u=o["auth/saldo"],d=u-l;D.collection("users").doc(s).collection("movimenti").doc(a).delete().then((t=>{D.collection("users").doc(s).update({saldo:d}).then((()=>{e("deleteMovimento",a),n("auth/updateSaldo",null,{root:!0}),i("Movimento Cancellato")})).catch((e=>r(e.message)))})).catch((e=>r(e.message)))}))},incrementLimite({state:e,commit:t,dispatch:o},n){return new Promise(((a,i)=>{const r=n?E:e.limite+E;o("firestoreStopGettingMovimenti"),t("setLimite",r),o("firestoreGetMovimenti").then((()=>{a()})).catch((()=>{i()}))}))}},B={};var Y={namespaced:!0,state:N,mutations:C,actions:_,getters:B};let q=null,k=null;const z={tipi:{}},V={addTipo(e,t){n["a"].set(e.tipi,t.tipoId,t.tipoDetails)},updateTipo(e,t){Object.assign(e.tipo[t.tipoId],t.tipoDetails)},deleteTipo(e,t){n["a"].delete(e.tipi,t.tipoId)},clearTipi(e){e.tipi={},q=null,k=null}},$={firestoreGetTipi({commit:e,rootGetters:t}){const o=t["auth/isLoggedIn"];q=D.collection("users").doc(o).collection("tipi").orderBy("nome"),k=q.onSnapshot((t=>{t.empty||t.forEach((t=>{const o=t.id;let n=t.data();e("addTipo",{tipoId:o,tipoDetails:n})}))}))},firestoreStopGettingTipi({commit:e}){k&&(k(),e("clearTipi"))},firestoreSaveTipo({},e){let t=P.currentUser.uid;const o={nome:e};D.collection("users").doc(t).collection("tipi").add(o).then((e=>Object(G["b"])("Tipo Salvato"))).catch((e=>Object(G["b"])(e.message)))}},J={};var K={namespaced:!0,state:z,mutations:V,actions:$,getters:J};n["a"].use(h["a"]);var W=function(){const e=new h["a"].Store({modules:{auth:A,movimenti:Y,tipi:K},strict:!1});return e},Q=o("8c4f");const R=[{path:"/",component:()=>Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([o.e(0),o.e(6)]).then(o.bind(null,"8b24")),name:"home"},{path:"/auth",component:()=>Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"f724")),name:"auth"},{path:"/listaMovimenti",component:()=>Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"2f3a")),name:"listaMovimenti",meta:{requiresAuth:!0}}]},{path:"*",component:()=>Promise.all([o.e(0),o.e(5)]).then(o.bind(null,"e51e"))}];var F=R;n["a"].use(Q["a"]);var H=function(){const e=new Q["a"]({scrollBehavior:()=>({x:0,y:0}),routes:F,mode:"history",base:"/"});return e},X=async function(){const e="function"===typeof W?await W({Vue:n["a"]}):W,t="function"===typeof H?await H({Vue:n["a"],store:e}):H;e.$router=t;const o={router:t,store:e,render:e=>e(w),el:"#q-app"};return{app:o,store:e,router:t}},Z=({router:e,store:t,Vue:o})=>{e.beforeEach(((e,o,n)=>{const a=t.getters["auth/isLoggedIn"];e.matched.some((e=>e.meta.requiresAuth))&&!a?n({name:"auth",replace:!0}):n()}))};const ee="/";async function te(){const{app:e,store:t,router:o}=await X();let a=!1;const i=e=>{a=!0;const t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},r=window.location.href.replace(window.location.origin,""),s=[Z,void 0];for(let l=0;!1===a&&l<s.length;l++)if("function"===typeof s[l])try{await s[l]({app:e,router:o,store:t,Vue:n["a"],ssrContext:null,redirect:i,urlPath:r,publicPath:ee})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&new n["a"](e)}te()},"31cd":function(e,t,o){},4506:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return s}));var n=o("260b"),a=o("bd4c"),i=o("2a19");const r=e=>{delete e.id;const t=a["b"].extractDate(e.data,"DD/MM/YYYY");return e.data=n["a"].firestore.Timestamp.fromDate(t),e.entrata=Number(e.entrata),e.entrata=Number.isNaN(e.entrata)?0:e.entrata,e.uscita=Number(e.uscita),e.uscita=Number.isNaN(e.uscita)?0:e.uscita,e},s=(e,t=!1)=>{i["a"].create({message:e,color:t?"negative":"primary"})}}});