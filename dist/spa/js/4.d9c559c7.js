(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"07e2":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pa-md",staticStyle:{height:"100%"}},[s("div",{staticClass:"facmain"},[s("q-list",[s("q-item",{staticClass:"h3"},[t._v("设备管理")]),t._l(t.Projectnametlist,(function(e,i){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e,attrs:{clickable:""},on:{click:function(e){return t.clickmenuList(i)}}},[s("q-item-section",[t._v("\n          "+t._s(e)+"\n        ")])],1)}))],2),s("div",{staticClass:"centerpage"},[s("q-breadcrumbs",{staticClass:"text-orange",attrs:{separator:"---","active-color":"secondary"}},[s("q-breadcrumbs-el",{attrs:{label:"首页",icon:"home"}}),s("q-breadcrumbs-el",{attrs:{label:"设备管理",icon:"widgets"}}),t.pctname?s("q-breadcrumbs-el",{attrs:{label:t.pctname,icon:"widgets"}}):t._e()],1),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("q-btn",{staticClass:"sbbtn",attrs:{color:"primary",disabled:t.isdisabled,label:"新建传感器"},on:{click:t.addfacility}})],1),s("div",{staticClass:"col"},[s("span",[t._v("搜索：")]),s("el-select",{attrs:{placeholder:"所有设备组"},model:{value:t.pctFacility_val,callback:function(e){t.pctFacility_val=e},expression:"pctFacility_val"}},[s("el-option",{attrs:{label:"所有设备组",value:"所有设备组"}}),t._l(t.pctFacility,(function(t){return s("el-option",{key:t._id,attrs:{label:t.dev_cn_name,value:t.dev_cn_name}})}))],2)],1),s("div",{staticClass:"col"},[s("q-input",{staticClass:"input",attrs:{outlined:"",placeholder:"搜索传感器ID"},model:{value:t.fID,callback:function(e){t.fID=e},expression:"fID"}})],1),s("div",{staticClass:"col"},[s("q-btn",{attrs:{push:"",color:"primary",round:"",icon:"search"},on:{click:t.searchFacility}})],1)]),s("Facilitytable",{attrs:{"pct-facility":t.pctFacility,Facilitydata:t.Facilitydata},on:{delFacility:t.delFacility,saveCreate:t.saveCreate,setFacility:t.setFacility}}),t.pctFacility[0]?s("CPagination",{attrs:{count:t.count,emitEvent:t.emitEvent,isboolean:t.isboolean},on:{pageChange:t.pageChange}}):t._e()],1)],1),s("q-dialog",{attrs:{title:"新增传感器",center:""},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[s("Getsensor",{attrs:{"pct-facility":t.pctFacility,"faciltity-adata":t.faciltityAdata},on:{saveCreate:t.saveCreate}})],1)],1)},a=[],n=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("f751"),s("9523")),r=s.n(n),o=s("2f62"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main_div",staticStyle:{padding:"10px 0 0 20px"}},t._l(t.newFacilitydata,(function(e){return s("div",{key:e._id},[s("h6",{staticClass:"h6"},[s("i",{staticClass:"el-icon-edit"}),t._v(t._s(e.sensor_facility))]),t._l(e.data,(function(e){return s("el-row",{key:e._id,staticClass:"rowsytle"},[s("span",{staticClass:"MicroChapter"},[s("i",[t._v(" 未连接 ")])]),s("el-col",{attrs:{span:5}},[t._v("序列号："+t._s(e._id))]),s("el-col",{attrs:{span:4}},[t._v("传感器名称："+t._s(e.sensor_name))]),s("el-col",{attrs:{span:3}},[t._v("传感器类型："+t._s(e.sensor_type))]),s("el-col",{attrs:{span:4}},[t._v("传感器ID："+t._s(e.sensor_No))]),s("el-col",{attrs:{span:2}},[t._v("单位："+t._s(e.sensor_unit))]),s("el-col",{staticClass:"czstyle",attrs:{span:6}},[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(s){return t.copyFacility(e)}}},[t._v("复制设备")]),s("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(s){return t.setFacility(e)}}},[t._v("编辑设备")]),s("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(s){return t.delFacility(e._id)}}},[t._v("删除设备")])],1)],1)}))],2)})),0)},l=[];function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){r()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={props:["pctFacility","Facilitydata"],computed:p({},Object(o["d"])({Projectnametlist:function(t){return t.example.Projectnametlist},ProjectFacility:function(t){return t.example.ProjectFacility}})),watch:{Facilitydata:function(){this.getnewFacilitydata(this.Facilitydata)}},data:function(){return{newFacilitydata:[]}},mounted:function(){},methods:{getnewFacilitydata:function(t){var e={},s=[];t.forEach((function(t,i){var a=t;e[a.sensor_facility]?s.forEach((function(t,e){var i=s[e];i.sensor_facility==a.sensor_facility&&i.data.push(a)})):(s.push({sensor_facility:a.sensor_facility,data:[a]}),e[a.sensor_facility]=a)})),this.newFacilitydata=s,console.log(s)},delFacility:function(t){var e=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$emit("delFacility",t)})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},copyFacility:function(t){var e={sensor_name:t.sensor_name,sensor_type:t.sensor_type,sensor_No:t.sensor_No,sensor_unit:t.sensor_unit,sensor_facility:t.sensor_facility};this.$emit("saveCreate",e)},setFacility:function(t){this.$emit("setFacility",t)}}},_=d,f=(s("8d2f"),s("2877")),m=Object(f["a"])(_,c,l,!1,null,null,null),y=m.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-wrap"},[s("q-card",[s("q-card-section",{staticClass:"row items-center q-pb-none btnicon"},[s("div",{staticClass:"text-h6"},[t._v(t._s(t.dialogtitle))]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),s("q-card-section",[s("el-form",{ref:"sensorForm",attrs:{model:t.sensorForm,rules:t.rules}},[s("el-form-item",{attrs:{label:"设备名",prop:"faval","label-width":t.formLabelWidth}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.sensorForm.faval,callback:function(e){t.$set(t.sensorForm,"faval",e)},expression:"sensorForm.faval"}},t._l(t.pctFacility,(function(t){return s("el-option",{key:t._id,attrs:{label:t.dev_cn_name,value:t.dev_cn_name}})})),1)],1),s("el-form-item",{attrs:{label:"传感器名称",prop:"sensor_name","label-width":t.formLabelWidth}},[s("el-input",{model:{value:t.sensorForm.sensor_name,callback:function(e){t.$set(t.sensorForm,"sensor_name",e)},expression:"sensorForm.sensor_name"}})],1),s("el-form-item",{attrs:{label:"传感器类型",prop:"sensor_vaule","label-width":t.formLabelWidth}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.sensorForm.sensor_vaule,callback:function(e){t.$set(t.sensorForm,"sensor_vaule",e)},expression:"sensorForm.sensor_vaule"}},t._l(t.sensor_type,(function(t){return s("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),s("el-form-item",{attrs:{label:"传感器型号",prop:"sensor_No","label-width":t.formLabelWidth}},[s("el-input",{model:{value:t.sensorForm.sensor_No,callback:function(e){t.$set(t.sensorForm,"sensor_No",e)},expression:"sensorForm.sensor_No"}})],1),s("el-form-item",{attrs:{label:"传感器单位",prop:"sensor_unit","label-width":t.formLabelWidth}},[s("el-input",{model:{value:t.sensorForm.sensor_unit,callback:function(e){t.$set(t.sensorForm,"sensor_unit",e)},expression:"sensorForm.sensor_unit"}})],1)],1),s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("sensorForm")}}},[this.faciltityAdata._id?s("span",[t._v("修改")]):s("span",[t._v("创 建")])])],1)],1)],1)},v=[],b=["开关","字符串","视频"],g={sensortype:b},F={props:["pctFacility","faciltityAdata"],data:function(){return{dialogtitle:"新增传感器",formLabelWidth:"120px",sensor_type:g.sensortype,sensorForm:{sensor_name:"",sensor_No:"",sensor_vaule:"",sensor_unit:"",faval:""},rules:{sensor_name:[{required:!0,message:"请输入传感器名称",trigger:"blur"}],sensor_No:[{required:!0,message:"请输入传感器型号",trigger:"blur"}],faval:[{required:!0,message:"请选择设备名",trigger:"change"}],sensor_unit:[{required:!0,message:"请输入传感器单位",trigger:"blur"}],sensor_vaule:[{required:!0,message:"请选择传感器类型",trigger:"change"}]}}},mounted:function(){console.log(this.faciltityAdata),this.faciltityAdata._id?(this.dialogtitle="编辑传感器",this.sensorForm.sensor_name=this.faciltityAdata.sensor_name,this.sensorForm.sensor_vaule=this.faciltityAdata.sensor_type,this.sensorForm.sensor_No=this.faciltityAdata.sensor_No,this.sensorForm.faval=this.faciltityAdata.sensor_facility,this.sensorForm.sensor_unit=this.faciltityAdata.sensor_unit):console.log("无")},methods:{submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;var s={sensor_name:e.sensorForm.sensor_name,sensor_type:e.sensorForm.sensor_vaule,sensor_No:e.sensorForm.sensor_No,sensor_unit:e.sensorForm.sensor_unit,sensor_facility:e.sensorForm.faval};e.faciltityAdata._id&&(s._id=e.faciltityAdata._id),e.$emit("saveCreate",s)}))}}},j=F,w=(s("780e"),Object(f["a"])(j,h,v,!1,null,"6ed76cdd",null)),O=w.exports,C=s("c219");function P(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function k(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?P(Object(s),!0).forEach((function(e){r()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):P(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var x={components:{Getsensor:O,Facilitytable:y,CPagination:C["a"]},computed:k({},Object(o["d"])({Projectnametlist:function(t){return t.example.Projectnametlist},ProjectFacility:function(t){return t.example.ProjectFacility}})),data:function(){return{alert:!1,isdisabled:!0,pctFacility:[],pctname:"",Facilitydata:[],faciltityAdata:{},page_size:10,current_page:1,count:0,emitEvent:!1,isboolean:!0,pctFacility_val:"所有设备组",fID:""}},mounted:function(){console.log(this.ProjectFacility),console.log(this.Projectnametlist)},methods:{clickmenuList:function(t){var e=this;this.isdisabled=!1,this.pctFacility=[],this.pctname=this.Projectnametlist[t],this.ProjectFacility.forEach((function(t){t.project_name==e.pctname&&e.pctFacility.push(t)})),this.getpctFacility()},closedialog:function(){console.log("closedialog")},addfacility:function(){this.faciltityAdata={},this.alert=!0},pageChange:function(t,e){this.getpctFacility(t,e)},getpctFacility:function(t,e,s){var i=this,a=this;this.page_size=t,t||(t=10),this.current_page=e,e=0==e?e+1:e/10+1,e||(e=1);var n={project_name:a.pctFacility[0].project_name,page_size:t,current_page:e};s&&(n=Object.assign(n,s)),this.$axios.post("/api/sensor/list",n).then((function(t){i.count=t.data.total,t.data.extra.length>0?i.Facilitydata=t.data.extra:(i.Facilitydata=[],i.$message({message:i.pctname+"无数据",type:"warning"}))}))},saveCreate:function(t){var e=this;if(t._id)this.setnewFacility(t);else{var s=this.$route.query.id;this.$axios.post("/api/sensor/add",{sensor_name:t.sensor_name,sensor_type:t.sensor_type,sensor_No:t.sensor_No,sensor_unit:t.sensor_unit,sensor_facility:t.sensor_facility,project_name:this.pctFacility[0].project_name,sensor_pct:s}).then((function(t){console.log(t.data.ret_code),200===t.data.ret_code&&(e.$message({message:"添加成功",type:"success"}),e.alert=!1,e.getpctFacility())}))}},delFacility:function(t){var e=this;this.$axios.post("/api/sensor/del",{_id:t}).then((function(t){200===t.data.ret_code&&(e.$message({message:"删除成功",type:"success"}),e.getpctFacility(e.page_size,e.current_page))}))},setFacility:function(t){this.faciltityAdata=t,this.alert=!0},setnewFacility:function(t){var e=this;this.$axios.post("/api/sensor/change",{_id:t._id,sensor_No:t.sensor_No,sensor_name:t.sensor_name,sensor_type:t.sensor_type,sensor_unit:t.sensor_unit,sensor_facility:t.sensor_facility}).then((function(t){console.log(t.data.ret_code),200===t.data.ret_code&&(e.alert=!1,e.getpctFacility(e.page_size,e.current_page))}))},searchFacility:function(t){"所有设备组"!=this.pctFacility_val?this.getpctFacility(this.page_size,this.current_page,{sensor_facility:this.pctFacility_val,sensor_No:this.fID}):""!==this.fID?this.getpctFacility(this.page_size,this.current_page,{sensor_No:this.fID}):this.getpctFacility(this.page_size,this.current_page,{})}}},q=x,$=(s("e164"),Object(f["a"])(q,i,a,!1,null,null,null));e["default"]=$.exports},"76f4":function(t,e,s){},"780e":function(t,e,s){"use strict";var i=s("d354"),a=s.n(i);a.a},"8d2f":function(t,e,s){"use strict";var i=s("76f4"),a=s.n(i);a.a},d1d9:function(t,e,s){},d354:function(t,e,s){},e164:function(t,e,s){"use strict";var i=s("d1d9"),a=s.n(i);a.a}}]);