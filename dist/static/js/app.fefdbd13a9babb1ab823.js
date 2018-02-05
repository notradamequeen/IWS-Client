webpackJsonp([1],{"/cfh":function(t,e){},L2gw:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),e("router-view")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Intuitive Web Solution")]),t._v(" "),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item active"},[n("a",{staticClass:"nav-link",attrs:{href:"#/"}},[t._v("Home "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#/add_field"}},[t._v("add fields")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#/add_risk_type"}},[t._v("add risk type")])])]),t._v(" "),n("form",{staticClass:"form-inline my-2 my-lg-0"},[n("input",{staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search"}}),t._v(" "),n("button",{staticClass:"btn btn-secondary my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])])])}]};var s=n("VU/8")({name:"App"},i,!1,function(t){n("/cfh")},null,null).exports,r=n("/ocq"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{id:"exampleSelect1"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.name=e.target.multiple?n:n[0]}}}),t._v("\n    "+t._s(t.options)+"\n")])},staticRenderFns:[]},l={name:"Home",data:function(){return{risk_type_id:null,msg:"test"}},components:{Select:n("VU/8")({props:["riskTypeOptions"],name:"Select",data:function(){return{name:"",options:this.riskTypeOptions}}},o,!1,null,null,null).exports},methods:{},mounted:function(){this.$store.dispatch("GET_RISK_TYPE_LIST")},computed:{riskTypeList:function(){return this.$store.getters.riskTypeList},riskTypeOptions:function(){return this.$store.getters.riskTypeOptions}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"20px"}}),t._v(" "),n("div",{staticClass:"card border-primary mb-3",staticStyle:{"max-width":"65rem","margin-left":"10%","margin-right":"8%"}},[n("div",{staticClass:"card-header"},[t._v("Risk Type")]),t._v(" "),n("div",{staticClass:"card-body text-primary"},[n("h4",{staticClass:"card-title"},[t._v("Please Select your risk type")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.risk_type_id,expression:"risk_type_id"}],staticClass:"form-control",attrs:{name:"risk_type"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.risk_type_id=e.target.multiple?n:n[0]}}},t._l(t.riskTypeOptions,function(e){return n("option",{domProps:{value:e.value}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),t._v(" "),n("br"),t._v(" "),n("a",{staticClass:"btn btn-success",attrs:{href:"/#/form/"+t.risk_type_id}},[t._v("Load form")])])])])},staticRenderFns:[]},u=n("VU/8")(l,c,!1,null,null,null).exports,d=n("mvHQ"),p=n.n(d),m=n("c/Tr"),f=n.n(m),v={name:"addField",data:function(){return{fieldCount:1,data_field:[]}},methods:{addField:function(){data.fieldCount+=1},onFormSubmit:function(t){console.log(t);var e=f()(t.target[0].childNodes).map(function(t){return{field_name:t.childNodes[0].childNodes[3].value,data_type:t.childNodes[2].childNodes[3].value}}),n={method:"POST",headers:{"Content-Type":"application/json"},body:p()(e)};fetch("https://intense-bayou-56091.herokuapp.com/iws/api/field/",n).then(function(t){return t.json()}).then(function(t){200==t.status?window.location.href="/":console.log(t)}).catch(function(t){})}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"20px"}}),t._v(" "),n("div",{staticClass:"card border-primary mb-3",staticStyle:{"max-width":"65rem","margin-left":"10%","margin-right":"8%"}},[n("div",{staticClass:"card-header"},[t._v("Add Fields")]),t._v(" "),n("div",{staticClass:"card-body text-primary"},[n("form",{on:{submit:function(e){e.preventDefault(),t.onFormSubmit(e)}}},[n("fieldset",t._l(t.fieldCount,function(e){return n("div",{staticClass:"form-group row"},[t._m(0,!0),t._v(" "),t._m(1,!0),t._v(" "),n("div",{staticClass:"col-sm-2",staticStyle:{"margin-top":"5px"}},[n("br"),t._v(" "),1==e?n("button",{staticClass:"btn btn-primary",on:{click:function(e){e.preventDefault(),t.fieldCount+=1}}},[t._v("\n                              +\n                          ")]):n("button",{staticClass:"btn btn-primary",on:{click:function(e){e.preventDefault(),t.fieldCount-=1}}},[t._v("\n                              -\n                            ")])])])})),t._v(" "),n("br"),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("submit")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-5"},[e("label",[this._v("Field Name")]),e("br"),this._v(" "),e("input",{staticClass:"form-control",attrs:{name:"field_name",type:"text",palceholder:"field name"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-5"},[n("label",[t._v("Data Type")]),n("br"),t._v(" "),n("select",{staticClass:"form-control",attrs:{name:"data_type"}},[n("option",{attrs:{value:"text"}},[t._v("Text")]),t._v(" "),n("option",{attrs:{value:"date"}},[t._v("Date")]),t._v(" "),n("option",{attrs:{value:"number"}},[t._v("Number")]),t._v(" "),n("option",{attrs:{value:"enum"}},[t._v("Enum")]),t._v(" "),n("option",{attrs:{value:"currency"}},[t._v("Currency")])])])}]},h=n("VU/8")(v,_,!1,null,null,null).exports,y=this,b={name:"addRiskType",data:function(){return{fieldCount:1,data_field:[]}},methods:{addField:function(){data.fieldCount+=1},onFormSubmit:function(t){var e=f()(t.target[0].childNodes).map(function(t){return{name:t.childNodes[2].childNodes[0].value}}),n={method:"POST",headers:{"Content-Type":"application/json"},body:p()(e)};fetch("https://intense-bayou-56091.herokuapp.com/iws/api/risktype/",n).then(function(t){return t.json()}).then(function(t){window.location.href="#/"}).catch(function(t){y.$swal("cannot connect to server")})}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"20px"}}),t._v(" "),n("div",{staticClass:"card border-primary mb-3",staticStyle:{"max-width":"65rem","margin-left":"10%","margin-right":"8%"}},[n("div",{staticClass:"card-header"},[t._v("Add Risk Type")]),t._v(" "),n("div",{staticClass:"card-body text-primary"},[n("form",{on:{submit:function(e){e.preventDefault(),t.onFormSubmit(e)}}},[n("fieldset",t._l(t.fieldCount,function(e){return n("div",{staticClass:"form-group row",staticStyle:{"margin-top":"5px"}},[t._m(0,!0),t._v(" "),t._m(1,!0),t._v(" "),n("div",{staticClass:"col-sm-2"},[1==e?n("button",{staticClass:"btn btn-primary",on:{click:function(e){e.preventDefault(),t.fieldCount+=1}}},[t._v("\n                            +\n                          ")]):n("button",{staticClass:"btn btn-primary",on:{click:function(e){e.preventDefault(),t.fieldCount-=1}}},[t._v("\n                              -\n                            ")])])])})),t._v(" "),n("br"),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("submit")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-5"},[e("label",[this._v("Risk Type Name")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-5"},[e("input",{staticClass:"form-control",attrs:{name:"name",type:"text"}})])}]},T=n("VU/8")(b,C,!1,null,null,null).exports,k={props:["risktype"],name:"createForm",data:function(){return{isActive:!0,fieldCount:1,data_field:[],fieldList:[],field:{}}},methods:{addField:function(){data.fieldCount+=1},test:function(){},onFormSubmit:function(t){console.dir(t);var e={risk_type:t.target[1].value,field:t.target[2].value};console.log(e);var n={method:"POST",headers:{"Content-Type":"application/json"},body:p()(e)};fetch("https://intense-bayou-56091.herokuapp.com/iws/api/form/",n).then(function(t){return t.json()}).then(function(t){location.reload()}).catch(function(t){console.log(t)})}},mounted:function(){var t=this;fetch("https://intense-bayou-56091.herokuapp.com/iws/api/field/",{method:"GET",headers:{Accept:"application/json"}}).then(function(t){return t.json()}).then(function(e){t.fieldList=e})}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-modal",attrs:{id:"id01"}},[n("div",{staticClass:"card border-primary mb-3",staticStyle:{"max-width":"40rem","margin-left":"20%","margin-right":"20%"}},[n("div",{staticClass:"card-header"},[t._v("Add Field")]),t._v(" "),n("span",{staticClass:"w3-button w3-display-topright",attrs:{onclick:"document.getElementById('id01').style.display='none'"}},[t._v("×")]),t._v(" "),n("div",{staticClass:"card-body text-primary"},[n("form",{on:{submit:function(e){e.preventDefault(),t.onFormSubmit(e)}}},[n("fieldset",t._l(t.fieldCount,function(e){return n("div",{staticClass:"form-group row"},[n("div",{staticClass:"col-sm-12"},[n("input",{attrs:{type:"hidden"},domProps:{value:t.risktype.id}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.field,expression:"field"}],staticClass:"form-control",attrs:{name:"field"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.field=e.target.multiple?n:n[0]}}},t._l(t.fieldList,function(e){return n("option",{domProps:{value:e.id}},[t._v("\n                                  "+t._s(e.field_name)+"\n                                  ")])}))])])})),t._v(" "),n("br"),t._v(" "),n("button",{attrs:{type:"submit"},on:{submit:function(e){e.preventDefault(),t.onFormSubmit(e)}}},[t._v("submit")])])])])])},staticRenderFns:[]},x=n("VU/8")(k,g,!1,null,null,null).exports,w=n("XILU"),S=n.n(w),E=n("9VIl"),F={props:["id"],name:"Form",data:function(){return{price:0,money:{decimal:",",thousands:".",prefix:"$ ",suffix:" #",precision:2,masked:!1}}},components:{Datepicker:S.a,Money:E.Money,createForm:x},methods:{show:function(){document.getElementById("id01").style.display="block"}},mounted:function(){this.$store.dispatch("GET_RISK_TYPE_DETAIL",this.id)},computed:{riskTypeDetail:function(){return this.$store.getters.riskTypeDetail}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"20px"}}),t._v(" "),n("div",{staticClass:"card border-primary mb-3",staticStyle:{"max-width":"65rem","margin-left":"10%","margin-right":"8%"}},[n("div",{staticClass:"card-header"},[t._v(t._s(t.riskTypeDetail.name))]),t._v(" "),n("div",{staticClass:"card-body text-primary"},[n("form",t._l(t.riskTypeDetail.fields,function(e){return n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-sm-2 col-form-label"},[t._v(t._s(e.field_name))]),t._v(" "),"text"==e.data_type?n("div",{staticClass:"col-sm-9"},[n("input",{staticClass:"form-control",attrs:{type:"text"}})]):t._e(),t._v(" "),"date"==e.data_type?n("div",{staticClass:"col-sm-9"},[n("datepicker",{attrs:{"input-class":"form-control"}})],1):t._e(),t._v(" "),"currency"==e.data_type?n("div",{staticClass:"col-sm-9"},[n("money",t._b({staticClass:"form-control",model:{value:t.price,callback:function(e){t.price=e},expression:"price"}},"money",t.money,!1))],1):t._e(),t._v(" "),"enum"==e.data_type?n("div",{staticClass:"col-sm-9"},[t._m(0,!0)]):t._e(),t._v(" "),"number"==e.data_type?n("div",{staticClass:"col-sm-9"},[n("input",{staticClass:"form-control",attrs:{type:"number",placeholder:"Ex: 1"}})]):t._e()])}))]),t._v(" "),n("div",{staticClass:"card-footer"},[n("button",{on:{click:t.show}},[t._v("add field")]),t._v(" "),n("createForm",{attrs:{risktype:t.riskTypeDetail}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("select",{staticClass:"form-control"},[e("option")])}]};var L=n("VU/8")(F,I,!1,function(t){n("L2gw")},null,null).exports;a.a.use(r.a);var D=new r.a({routes:[{path:"/",name:"HelloWorld",component:u},{path:"/form/:id",name:"Form",component:L,props:!0},{path:"/add_field/",name:"addField",component:h,props:!0},{path:"/add_risk_type/",name:"addRiskType",component:T,props:!0}]}),A=n("Xxa5"),N=n.n(A),R=n("exGp"),$=n.n(R),O=n("NYxO");a.a.use(O.a);var P=new O.a.Store({state:{riskTypeList:[],riskTypeDetail:{},fieldList:[]},actions:{GET_RISK_TYPE_LIST:function(){var t=$()(N.a.mark(function t(e){var n,a,i=e.commit;return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",headers:{Accept:"application/json"}},t.next=3,fetch("https://intense-bayou-56091.herokuapp.com/iws/api/risktype/",n).then(function(t){return t.json()});case 3:a=t.sent,i("RISK_TYPE_MUTATION",a);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),GET_RISK_TYPE_DETAIL:function(){var t=$()(N.a.mark(function t(e,n){var a,i,s=e.commit;return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"GET",headers:{Accept:"application/json"}},t.next=3,fetch("https://intense-bayou-56091.herokuapp.com/iws/api/risktype/"+n,a).then(function(t){return t.json()});case 3:i=t.sent,s("RISK_TYPE_DETAIL_MUTATION",i);case 5:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),GET_FIELD_LIST:function(){var t=$()(N.a.mark(function t(e){var n,a,i=e.commit;return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",headers:{Accept:"application/json"}},t.next=3,fetch("https://intense-bayou-56091.herokuapp.com/iws/api/",n).then(function(t){return t.json()});case 3:a=t.sent,i("FIELD_LIST_MUTATION",a);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},mutations:{RISK_TYPE_MUTATION:function(t,e){t.riskTypeList=e},RISK_TYPE_DETAIL_MUTATION:function(t,e){t.riskTypeDetail=e},FIELD_LIST_MUTATION:function(t,e){t.filedList=e}},getters:{riskTypeList:function(t){return t.riskTypeList},riskTypeOptions:function(t){return t.riskTypeList.map(function(t){return{value:t.id,text:t.name}})},riskTypeDetail:function(t){return t.riskTypeDetail},fieldList:function(t){return t.fieldList}}}),j=n("f1Fh"),U=n.n(j);a.a.config.productionTip=!1,a.a.use(U.a),new a.a({el:"#app",store:P,router:D,components:{App:s},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.fefdbd13a9babb1ab823.js.map