(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{da76:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",[e("div",{staticClass:"fit row justify-center q-my-lg"},[e("q-form",{staticClass:"col-7 q-gutter-md",on:{submit:t.onSubmit,reset:t.onReset}},["register"===t.tab?e("q-input",{staticClass:"col",attrs:{"bottom-slots":"",label:"Nome",outlined:"",clearable:"",required:""},model:{value:t.formData.nome,callback:function(a){t.$set(t.formData,"nome",a)},expression:"formData.nome"}}):t._e(),e("q-input",{staticClass:"col",attrs:{"bottom-slots":"",label:"Email",outlined:"",clearable:"",required:""},model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}}),e("q-input",{staticClass:"col",attrs:{"bottom-slots":"",label:"Password",type:t.isPwd?"password":"text",outlined:"",clearable:"",required:""},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(a){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}}),e("div",{staticClass:"row justify-end"},[e("q-btn",{attrs:{label:t.tab,type:"submit",color:"primary"}}),e("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)],1)],1)])},r=[],o=e("ded3"),i=e.n(o),l=e("2f62"),n=e("4506"),c={name:"LoginPage",data(){return{formData:{nome:"",email:"",password:""},isPwd:!0}},props:["tab"],methods:i()(i()({},Object(l["b"])("auth",["registerUser","loginUser"])),{},{onReset(){this.formData={nome:"",email:"",password:""}},onSubmit(){"login"==this.tab?this.loginUser(this.formData).then((t=>{Object(n["c"])(t),this.$router.push({name:"listaMovimenti"}).catch((()=>{}))})).catch((t=>Object(n["c"])(t))):this.registerUser(this.formData).then((t=>{Object(n["c"])(t),this.$router.push({name:"listaMovimenti"}).catch((()=>{}))})).catch((t=>Object(n["c"])(t)))}})},b=c,m=e("2877"),u=e("9989"),d=e("0378"),p=e("27f9"),f=e("0016"),g=e("9c40"),q=e("eebe"),h=e.n(q),w=Object(m["a"])(b,s,r,!1,null,null,null);a["default"]=w.exports;h()(w,"components",{QPage:u["a"],QForm:d["a"],QInput:p["a"],QIcon:f["a"],QBtn:g["a"]})},f724:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"flex q-pa-md"},[e("q-card",{staticClass:"full-width"},[e("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{attrs:{name:"login",label:"Login"}}),e("q-tab",{attrs:{name:"register",label:"Register"}})],1),e("q-separator"),e("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"login"}},[e("login-register",{attrs:{tab:t.tab}})],1),e("q-tab-panel",{attrs:{name:"register"}},[e("login-register",{attrs:{tab:t.tab}})],1)],1)],1)],1)},r=[],o={data(){return{tab:"login"}},components:{"login-register":e("da76").default}},i=o,l=e("2877"),n=e("9989"),c=e("f09f"),b=e("429b"),m=e("7460"),u=e("eb85"),d=e("adad"),p=e("823b"),f=e("eebe"),g=e.n(f),q=Object(l["a"])(i,s,r,!1,null,null,null);a["default"]=q.exports;g()(q,"components",{QPage:n["a"],QCard:c["a"],QTabs:b["a"],QTab:m["a"],QSeparator:u["a"],QTabPanels:d["a"],QTabPanel:p["a"]})}}]);