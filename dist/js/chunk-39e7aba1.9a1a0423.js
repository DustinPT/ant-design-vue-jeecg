(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39e7aba1","chunk-68ff8a58"],{"58e3":function(t,s,a){"use strict";var e=a("7d19"),i=a.n(e);i.a},"7d19":function(t,s,a){},"876f":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("a-form",{staticStyle:{margin:"40px auto 0"}},[a("result",{attrs:{title:"操作成功","is-success":!0,description:"预计两小时内到账"}},[a("div",{staticClass:"information"},[a("a-row",[a("a-col",{attrs:{sm:8,xs:24}},[t._v("付款账户：")]),a("a-col",{attrs:{sm:16,xs:24}},[t._v("ant-design@alipay.com")])],1),a("a-row",[a("a-col",{attrs:{sm:8,xs:24}},[t._v("收款账户：")]),a("a-col",{attrs:{sm:16,xs:24}},[t._v("test@example.com")])],1),a("a-row",[a("a-col",{attrs:{sm:8,xs:24}},[t._v("收款人姓名：")]),a("a-col",{attrs:{sm:16,xs:24}},[t._v("辉夜")])],1),a("a-row",[a("a-col",{attrs:{sm:8,xs:24}},[t._v("转账金额：")]),a("a-col",{attrs:{sm:16,xs:24}},[a("span",{staticClass:"money"},[t._v("500")]),t._v(" 元")])],1)],1),a("div",{attrs:{slot:"action"},slot:"action"},[a("a-button",{attrs:{type:"primary"},on:{click:t.finish}},[t._v("再转一笔")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.toOrderList}},[t._v("查看账单")])],1)])],1)],1)},i=[],c=a("9a3d"),n={name:"Step3",components:{Result:c["default"]},data:function(){return{loading:!1}},methods:{finish:function(){this.$emit("finish")},toOrderList:function(){this.$router.push("/list/query-list")}}},o=n,r=(a("ef03"),a("2877")),l=Object(r["a"])(o,e,i,!1,null,"55d570a4",null);s["default"]=l.exports},9382:function(t,s,a){},"9a3d":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"result"},[a("div",[a("a-icon",{class:[t.isSuccess?"success":"error","icon"],attrs:{type:t.isSuccess?"check-circle":"close-circle"}})],1),t.title?a("div",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),t.description?a("div",{staticClass:"description"},[t._v(t._s(t.description))]):t._e(),t.content?a("div",{staticClass:"content"},[t._t("default")],2):t._e(),a("div",{staticClass:"action"},[t._t("action")],2)])},i=[],c={name:"Result",props:{isSuccess:{type:Boolean,default:!1},title:{type:String,default:""},description:{type:String,default:""},content:{type:Boolean,default:!0}}},n=c,o=(a("58e3"),a("2877")),r=Object(o["a"])(n,e,i,!1,null,"6732bfa0",null);s["default"]=r.exports},ef03:function(t,s,a){"use strict";var e=a("9382"),i=a.n(e);i.a}}]);