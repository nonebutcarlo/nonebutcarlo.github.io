"use strict";(globalThis["webpackChunkaccount_manager"]=globalThis["webpackChunkaccount_manager"]||[]).push([[219],{8663:(e,t,i)=>{i.d(t,{Z:()=>k});var o=i(9835),a=i(6970),n=i(1957);const l={class:"text-h6 q-mb-lg"},s={class:"row items-center justify-end"},m=(0,o._)("div",{class:"text-h6"},"Nuovo Tipo",-1);function r(e,t,i,r,d,u){const p=(0,o.up)("q-card-section"),c=(0,o.up)("q-btn"),v=(0,o.up)("q-date"),h=(0,o.up)("q-popup-proxy"),f=(0,o.up)("q-icon"),g=(0,o.up)("q-input"),w=(0,o.up)("q-item-section"),W=(0,o.up)("q-item"),M=(0,o.up)("q-select"),y=(0,o.up)("q-card-actions"),b=(0,o.up)("q-form"),_=(0,o.up)("q-card"),q=(0,o.up)("q-dialog"),D=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(_,{class:"full-width"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o._)("div",l,(0,a.zw)(i.title),1)])),_:1}),(0,o.Wm)(p,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{onSubmit:(0,n.iM)(u.inviaDati,["prevent"]),onReset:u.onReset,ref:"formDati",dense:""},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{outlined:"",class:"q-mb-sm",modelValue:d.movimento.data,"onUpdate:modelValue":t[1]||(t[1]=e=>d.movimento.data=e),required:""},{append:(0,o.w5)((()=>[(0,o.Wm)(f,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{modelValue:d.movimento.data,"onUpdate:modelValue":t[0]||(t[0]=e=>d.movimento.data=e),"today-btn":"",mask:"DD/MM/YYYY"},{default:(0,o.w5)((()=>[(0,o._)("div",s,[(0,o.wy)((0,o.Wm)(c,{label:"Close",color:"primary",flat:""},null,512),[[D]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(M,{class:"col q-mb-sm",outlined:"","use-input":"","input-debounce":"0",modelValue:d.movimento.tipo,"onUpdate:modelValue":t[3]||(t[3]=e=>d.movimento.tipo=e),options:d.tipiOptions,onFilter:u.filterFn,label:"Tipo",rules:[u.myRule],"hide-bottom-space":"",clearable:""},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{class:"text-grey"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Nessun risultato ")])),_:1})])),_:1})])),append:(0,o.w5)((()=>[(0,o.Wm)(c,{round:"",dense:"",flat:"",icon:"add",onClick:t[2]||(t[2]=(0,n.iM)((e=>d.prompt=!0),["stop"]))})])),_:1},8,["modelValue","options","onFilter","rules"]),(0,o.Wm)(g,{class:"col q-mb-sm",modelValue:d.movimento.descrizione,"onUpdate:modelValue":t[4]||(t[4]=e=>d.movimento.descrizione=e),label:"Descrizione",outlined:"",clearable:""},null,8,["modelValue"]),(0,o.Wm)(g,{class:"col q-mb-sm",modelValue:d.movimento.entrata,"onUpdate:modelValue":t[5]||(t[5]=e=>d.movimento.entrata=e),label:"Entrata",outlined:"",clearable:""},null,8,["modelValue"]),(0,o.Wm)(g,{class:"col q-mb-sm",modelValue:d.movimento.uscita,"onUpdate:modelValue":t[6]||(t[6]=e=>d.movimento.uscita=e),label:"Uscita",outlined:"",clearable:""},null,8,["modelValue"]),(0,o.Wm)(y,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(c,{label:"Annulla",outline:"",color:"primary"},null,512),[[D]]),(0,o.Wm)(c,{type:"submit",unelevated:"",label:"Salva",color:"primary"})])),_:1})])),_:1},8,["onSubmit","onReset"])])),_:1}),(0,o.Wm)(q,{modelValue:d.prompt,"onUpdate:modelValue":t[9]||(t[9]=e=>d.prompt=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{style:{"min-width":"350px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[m])),_:1}),(0,o.Wm)(p,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{dense:"",modelValue:d.nuovoTipo,"onUpdate:modelValue":t[7]||(t[7]=e=>d.nuovoTipo=e),autofocus:"",onKeyup:t[8]||(t[8]=(0,n.D2)((e=>(u.addTipo(),d.prompt=!1)),["enter"]))},null,8,["modelValue"])])),_:1}),(0,o.Wm)(y,{align:"right",class:"text-primary"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(c,{flat:"",label:"Annulla"},null,512),[[D]]),(0,o.wy)((0,o.Wm)(c,{flat:"",label:"Aggiungi Tipo",onClick:u.addTipo},null,8,["onClick"]),[[D]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var d=i(4170),u=i(3100);const p={name:"DialogAddEdit",computed:{...(0,u.rn)("tipi",["tipi"]),tipiArray(){return Object.values(this.tipi).map((e=>e.nome)).sort()}},data(){return{oggi:new Date,movimento:this.editMovimento||{tipo:null,descrizione:"",data:d.ZP.formatDate(Date.now(),"DD/MM/YYYY"),entrata:"",uscita:""},prompt:!1,nuovoTipo:"",tipiOptions:[]}},props:{title:{type:String,default:"Missing"},editMovimento:{type:Object,default:null}},methods:{...(0,u.nv)("tipi",["firestoreSaveTipo"]),onReset(){},myRule(e){if(null===e)return"Devi selezionare un elemento"},inviaDati(){this.$refs.formDati.validate().then((e=>{e&&(this.$emit("movimento",this.movimento),this.$emit("close"))}))},filterFn(e,t){t(""!==e?()=>{const t=e.toLowerCase();this.tipiOptions=this.tipiArray.filter((e=>e.toLowerCase().indexOf(t)>-1))}:()=>{this.tipiOptions=this.tipiArray})},addTipo(){this.firestoreSaveTipo(this.nuovoTipo).then((()=>{this.movimento.tipo=this.nuovoTipo,this.nuovoTipo="",this.tipiOptions=this.tipiArray}))}}};var c=i(1639),v=i(4458),h=i(3190),f=i(8326),g=i(6611),w=i(2857),W=i(2765),M=i(7088),y=i(4455),b=i(8379),_=i(490),q=i(6749),D=i(1821),Z=i(7743),T=i(2146),V=i(9984),A=i.n(V);const Q=(0,c.Z)(p,[["render",r]]),k=Q;A()(p,"components",{QCard:v.Z,QCardSection:h.Z,QForm:f.Z,QInput:g.Z,QIcon:w.Z,QPopupProxy:W.Z,QDate:M.Z,QBtn:y.Z,QSelect:b.Z,QItem:_.Z,QItemSection:q.Z,QCardActions:D.Z,QDialog:Z.Z}),A()(p,"directives",{ClosePopup:T.Z})},7219:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Q});var o=i(9835),a=i(6970);const n={class:"row q-ma-lg justify-start"},l=(0,o._)("div",{class:"text-primary text-start text-h5 q-mr-md"},"Saldo",-1),s={class:"q-ma-sm"},m={class:"text-primary"},r={class:"text-center"};function d(e,t,i,d,u,p){const c=(0,o.up)("q-space"),v=(0,o.up)("q-btn"),h=(0,o.up)("q-icon"),f=(0,o.up)("q-badge"),g=(0,o.up)("q-item-section"),w=(0,o.up)("q-item-label"),W=(0,o.up)("q-item"),M=(0,o.up)("q-slide-item"),y=(0,o.up)("q-list"),b=(0,o.up)("showAdd-dialog"),_=(0,o.up)("q-dialog"),q=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(q,null,{default:(0,o.w5)((()=>[(0,o._)("div",n,[l,(0,o._)("div",{class:(0,a.C_)(["text-start text-h5",e.saldo>0?"text-positive":"text-negative"])},(0,a.zw)(p.currency(e.saldo)),3),(0,o.Wm)(c),(0,o.Wm)(v,{class:"",icon:"add",rounded:"",color:"primary",onClick:t[0]||(t[0]=e=>u.showAdd=!u.showAdd)})]),(0,o._)("div",s,[(0,o.Wm)(y,{separator:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(p.movimentiArray,(e=>((0,o.wg)(),(0,o.j4)(M,{onRight:t=>p.slideDelete(t,e),onLeft:t=>p.slideEdit(t,e),"left-color":"orange","right-color":"red",key:e.id,style:{}},{left:(0,o.w5)((()=>[(0,o.Wm)(h,{name:"edit"})])),right:(0,o.w5)((()=>[(0,o.Wm)(h,{name:"delete"})])),default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{color:"primary text-center",innerHTML:p.splitData(e.data)},null,8,["innerHTML"])])),_:2},1024),(0,o.Wm)(g,{class:""},{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.tipo),1)])),_:2},1024),(0,o.Wm)(w,{caption:"",lines:"1"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.descrizione),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(g,{class:"",side:""},{default:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o.Wm)(v,{flat:"",dense:"",size:"sm",round:"",icon:"edit",onClick:t=>p.editMovimento(e)},null,8,["onClick"]),(0,o.Wm)(v,{flat:"",dense:"",size:"sm",round:"",icon:"delete",onClick:t=>p.deleteMovimento(e)},null,8,["onClick"])]),(0,o.Wm)(f,{class:"text-weight-bold",color:e.entrata-e.uscita>0?"positive":"negative"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(p.currency(e.entrata-e.uscita)),1)])),_:2},1032,["color"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["onRight","onLeft"])))),128))])),_:1}),(0,o._)("div",r,[(0,o.Wm)(v,{class:"q-mt-lg justify-center",flat:"",color:"primary",onClick:p.mostraAltri},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(u.reset||p.limiteRaggiunto?"Ripristina":"Mostra Altri"),1)])),_:1},8,["onClick"])])]),(0,o.Wm)(_,{modelValue:u.showAdd,"onUpdate:modelValue":t[2]||(t[2]=e=>u.showAdd=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{title:"Aggiungi Movimento",onMovimento:p.aggiungiMovimento,onClose:t[1]||(t[1]=e=>u.showAdd=!1)},null,8,["onMovimento"])])),_:1},8,["modelValue"]),(0,o.Wm)(_,{modelValue:u.showEdit,"onUpdate:modelValue":t[4]||(t[4]=e=>u.showEdit=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{title:"Modifica Movimento",editMovimento:this.movToEdit,onClose:t[3]||(t[3]=e=>u.showEdit=!1),onMovimento:p.aggiornaMovimento},null,8,["editMovimento","onMovimento"])])),_:1},8,["modelValue"])])),_:1})}i(2879);var u=i(3100),p=i(4170),c=(i(2100),i(6283));const v={name:"ListaMovimenti",data(){return{showAdd:!1,showEdit:!1,movToEdit:null,confirm:!1,reset:!1}},mounted(){this.firestoreGetMovimenti().then((e=>(0,c.hW)(e))).catch((e=>{(0,c.hW)(e,!0),this.$router.push({name:"home"}).catch((()=>{}))})),this.firestoreGetTipi()},unmounted(){this.firestoreStopGettingMovimenti(),this.firestoreStopGettingTipi()},computed:{...(0,u.rn)("movimenti",["movimenti","limite"]),...(0,u.Se)("auth",["saldo"]),movimentiArray(){return Object.values(this.movimenti).sort(((e,t)=>e.data===t.data?0:e.data<t.data?1:-1))},limiteRaggiunto(){return this.movimentiArray.length<this.limite}},methods:{...(0,u.nv)("movimenti",["firestoreGetMovimenti","firestoreStopGettingMovimenti","firestoreSaveMovimento","firestoreAggiornaMovimento","firestoreDeleteMovimento","incrementLimite"]),...(0,u.nv)("tipi",["firestoreSaveTipo","firestoreGetTipi","firestoreStopGettingTipi"]),currency(e){return new Intl.NumberFormat("it-IT",{style:"currency",currency:"EUR"}).format(e)},splitData(e){return p.ZP.formatDate(e,"DD")+"<br>"+p.ZP.formatDate(e,"MMM")+"<br>"+p.ZP.formatDate(e,"YYYY")},formattaData(e){return p.ZP.formatDate(e,"DD/MM/YYYY")},aggiornaMovimento(e){this.movToEdit=null,this.firestoreAggiornaMovimento(e).then((e=>(0,c.hW)(e))).catch((e=>(0,c.hW)(e,!0)))},aggiungiMovimento(e){this.firestoreSaveMovimento(e).then((e=>(0,c.hW)(e))).catch((e=>(0,c.hW)(e,!0)))},slideEdit({reset:e},t){this.editMovimento(t),e()},editMovimento(e){const t={...e};this.movToEdit=t,this.movToEdit.data=this.formattaData(this.movToEdit.data),this.showEdit=!0},slideDelete({reset:e},t){this.deleteMovimento(t),e()},deleteMovimento(e){this.$q.dialog({persistent:!0,message:"Rimuovo il movimento definitivamente?",ok:{label:"Rimuovi",color:"negative"},cancel:{label:"Annulla"}}).onOk((()=>{this.firestoreDeleteMovimento(e.id).then((e=>(0,c.hW)(e))).catch((e=>(0,c.hW)(e,!0)))}))},mostraAltri(){let e=this.movimentiArray.length;this.incrementLimite(this.reset).then((()=>{let t=this.movimentiArray.length;t===e||this.limiteRaggiunto?this.reset=!0:this.reset=!1}))}},components:{"showAdd-dialog":i(8663).Z}};var h=i(1639),f=i(9885),g=i(136),w=i(4455),W=i(3246),M=i(8713),y=i(2857),b=i(490),_=i(6749),q=i(990),D=i(3115),Z=i(7743),T=i(9984),V=i.n(T);const A=(0,h.Z)(v,[["render",d]]),Q=A;V()(v,"components",{QPage:f.Z,QSpace:g.Z,QBtn:w.Z,QList:W.Z,QSlideItem:M.Z,QIcon:y.Z,QItem:b.Z,QItemSection:_.Z,QBadge:q.Z,QItemLabel:D.Z,QDialog:Z.Z})}}]);