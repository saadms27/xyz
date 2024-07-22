import{a as g}from"./QSelect.6c45d970.js";import{Q as c}from"./QSpace.28cd6bbf.js";import{_ as D,d as N,J as Y,G as r,H as m,P as S,R as n,j as o,Q as p,O as s,K as d,aa as y,M as u,N as V,aI as q,bp as Q,bq as A,L as b,br as $}from"./index.ce7ea90d.js";import{Q as h}from"./QDate.d6b9f846.js";import{Q as U}from"./QItemLabel.c0d04a15.js";import{a as B,c as L,Q as F,d as f}from"./auth.fdd9f60a.js";import{Q as T}from"./QTd.4bd4834f.js";import{Q as G}from"./QTable.0202606a.js";import{w as M}from"./working-component.b009b899.js";import{u as P}from"./vue-i18n.9cee7702.js";import"./QField.ebc53bc9.js";import"./selection.0b8105e5.js";import"./use-render-cache.1a7235d4.js";import"./axios.1ff92d29.js";import"./index.8e8f3c06.js";import"./_commonjsHelpers.4e997714.js";import"./QList.8b3bec6d.js";import"./QCircularProgress.f0d12216.js";const j=N({components:{workingWidget:M},data(){const e=B(),{locale:l,t:C}=P({useScope:"global"}),w=L();return{authS:e,attendanceS:w,locale:l,t:C,pagination:{sortBy:"date",descending:!1,page:1,rowsPerPage:50},fdateVisibility:!1,tdateVisibility:!1}}}),O={key:1,class:"q-pa-md"},W={class:"row"},E={class:"col"},z={class:"row full-width q-ma-md"},H=n("br",null,null,-1),J={class:"row full-width justify-between"},K={class:"col"},X={class:"col-1 text-center q-ma-md text-primary"},Z=n("div",{class:"col"},null,-1),_={class:"col"},x={class:"col-1 text-center q-ma-md text-primary"},ee={class:"row justify-between"},te={key:0,class:"row full-width q-my-md"},le={key:1,class:"row full-width q-my-md"},oe={class:"row full-width q-ma-lg"},ne={class:"col-4 text-center text-weight-bold text-primary"},ae={class:"col-4 text-center text-weight-bold text-negative"},de={class:"row full-width q-ma-lg"},se={class:"col-4 text-center text-weight-bold text-primary"},re={class:"col-4 text-center text-weight-bold text-negative"},ie={class:"row full-width q-ma-lg"},ue={class:"col-4 text-center text-weight-bold text-primary"},pe={class:"col-4 text-center text-weight-bold text-negative"},me={class:"row"},ce={class:"row"},Se={key:2,class:"row"};function fe(e,l,C,w,ve,ge){var k;const R=Y("workingWidget");return e.attendanceS.working?(r(),m(R,{key:0})):(r(),S("div",O,[n("div",W,[n("div",E,[n("div",z,[o(g,{outlined:"",class:"col q-my-md",modelValue:e.attendanceS.reportSelectedCourse,"onUpdate:modelValue":l[0]||(l[0]=t=>e.attendanceS.reportSelectedCourse=t),"emit-value":"","map-options":"",options:(k=e.authS.user)==null?void 0:k.courseOptions},null,8,["modelValue","options"]),o(c),o(p,{class:"q-ma-md",color:"primary",label:e.t("generate report"),onClick:l[1]||(l[1]=t=>e.attendanceS.getAttendanceReport())},null,8,["label"])])])]),H,n("div",J,[n("div",K,[n("strong",X,s(e.t("From")),1),o(y,{outlined:"",modelValue:e.attendanceS.fdate,"onUpdate:modelValue":l[6]||(l[6]=t=>e.attendanceS.fdate=t),class:"col"},{append:d(()=>[o(V,{name:"event",class:"cursor-pointer",onClick:l[5]||(l[5]=t=>e.fdateVisibility=!0)},{default:d(()=>[n("div",null,[o(q,{modelValue:e.fdateVisibility,"onUpdate:modelValue":l[4]||(l[4]=t=>e.fdateVisibility=t)},{default:d(()=>[o(h,{modelValue:e.attendanceS.fdate,"onUpdate:modelValue":[l[2]||(l[2]=t=>e.attendanceS.fdate=t),l[3]||(l[3]=t=>e.fdateVisibility=!1)],mask:"YYYY-MM-DD"},null,8,["modelValue"])]),_:1},8,["modelValue"])])]),_:1})]),_:1},8,["modelValue"])]),Z,n("div",_,[n("strong",x,s(e.t("To")),1),o(y,{outlined:"",modelValue:e.attendanceS.tdate,"onUpdate:modelValue":l[11]||(l[11]=t=>e.attendanceS.tdate=t),class:"col"},{append:d(()=>[o(V,{name:"event",class:"cursor-pointer",onClick:l[10]||(l[10]=t=>e.tdateVisibility=!0)},{default:d(()=>[n("div",null,[o(q,{modelValue:e.tdateVisibility,"onUpdate:modelValue":l[9]||(l[9]=t=>e.tdateVisibility=t)},{default:d(()=>[o(h,{modelValue:e.attendanceS.tdate,"onUpdate:modelValue":[l[7]||(l[7]=t=>e.attendanceS.tdate=t),l[8]||(l[8]=t=>e.tdateVisibility=!1)],mask:"YYYY-MM-DD"},null,8,["modelValue"])]),_:1},8,["modelValue"])])]),_:1})]),_:1},8,["modelValue"])])]),n("div",ee,[n("div",null,[e.attendanceS.reportSelectedCourse!=null&&e.attendanceS.reportAttendance.length>0?(r(),m(p,{key:0,label:e.t("export CSV"),color:"primary",class:"q-pa-md q-ma-md",onClick:l[12]||(l[12]=t=>e.attendanceS.exportReportCSV(e.attendanceS.reportAttendance,e.attendanceS.reportColumns))},null,8,["label"])):u("",!0),e.attendanceS.reportSelectedCourse!=null&&e.attendanceS.reportAttendance.length>0?(r(),m(p,{key:1,label:e.t("export CSV - Filtered Data"),color:"primary",class:"q-pa-md q-ma-md",onClick:l[13]||(l[13]=t=>e.attendanceS.exportReportCSV(e.attendanceS.reportFilteredAttendance,e.attendanceS.reportColumns))},null,8,["label"])):u("",!0)]),n("div",null,[e.attendanceS.reportSelectedCourse!=null&&e.attendanceS.reportAttendance.length>0?(r(),m(p,{key:0,class:"q-pa-md q-ma-md",color:"negative",label:e.t("Copy Numbers"),onClick:l[14]||(l[14]=t=>e.attendanceS.copyFromReportAttendance(!1))},null,8,["label"])):u("",!0),e.attendanceS.reportSelectedCourse!=null&&e.attendanceS.reportAttendance.length>0?(r(),m(p,{key:1,color:"negative",class:"q-pa-md q-ma-md",label:e.t("Copy Numbers - Filtered"),onClick:l[15]||(l[15]=t=>e.attendanceS.copyFromReportAttendance(!0))},null,8,["label"])):u("",!0)])]),e.attendanceS.reportSelectedCourse!=null?(r(),S("div",te,[o(g,{options:e.attendanceS.reportSelectedCourse.lessonOptions,multiple:"",outlined:"","emit-value":"","map-options":"",label:"Lessons",class:"col q-my-md",modelValue:e.attendanceS.reportSelectedLessons,"onUpdate:modelValue":l[16]||(l[16]=t=>e.attendanceS.reportSelectedLessons=t)},{option:d(({itemProps:t,opt:a,selected:i,toggleOption:v})=>[o(F,Q(A(t)),{default:d(()=>[o(f,null,{default:d(()=>[o(U,null,{default:d(()=>[b(s(a.value.title),1)]),_:2},1024)]),_:2},1024),o(f,{side:""},{default:d(()=>[o($,{"model-value":i,"onUpdate:modelValue":I=>v(a)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024)]),_:2},1040)]),_:1},8,["options","modelValue"]),e.attendanceS.reportSelectedCourse!=null?(r(),m(p,{key:0,label:e.t("select all"),onClick:l[17]||(l[17]=t=>{var a,i;return e.attendanceS.reportSelectedLessons=(i=(a=e.attendanceS.reportSelectedCourse)==null?void 0:a.lessons)!=null?i:[]}),color:"primary",class:"q-ma-md"},null,8,["label"])):u("",!0)])):u("",!0),e.attendanceS.reportSelectedCourse!=null?(r(),S("div",le,[o(g,{options:e.attendanceS.reportSelectedCourse.groups,multiple:"",outlined:"",label:"Groups",class:"col q-my-md",modelValue:e.attendanceS.reportSelectedGroups,"onUpdate:modelValue":l[18]||(l[18]=t=>e.attendanceS.reportSelectedGroups=t)},{option:d(({itemProps:t,opt:a,selected:i,toggleOption:v})=>[o(F,Q(A(t)),{default:d(()=>[o(f,null,{default:d(()=>[o(U,null,{default:d(()=>[b(s(a),1)]),_:2},1024)]),_:2},1024),o(f,{side:""},{default:d(()=>[o($,{"model-value":i,"onUpdate:modelValue":I=>v(a)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024)]),_:2},1040)]),_:1},8,["options","modelValue"]),e.attendanceS.reportSelectedCourse!=null?(r(),m(p,{key:0,label:e.t("select all"),onClick:l[19]||(l[19]=t=>{var a,i;return e.attendanceS.reportSelectedGroups=(i=(a=e.attendanceS.reportSelectedCourse)==null?void 0:a.groups)!=null?i:[]}),color:"primary",class:"q-ma-md"},null,8,["label"])):u("",!0)])):u("",!0),n("div",oe,[n("div",ne,s(e.t("Rows Count"))+": "+s(e.attendanceS.reportAttendance.length),1),o(c),n("div",ae,s(e.t("Filtered Rows Count"))+": "+s(e.attendanceS.reportFilteredAttendance.length),1)]),n("div",de,[n("div",se,s(e.t("Active Students only Rows Count"))+": "+s(e.attendanceS.reportAttendance.filter(t=>{var a;return((a=t==null?void 0:t.subscription)==null?void 0:a.active)!=!1}).length),1),o(c),n("div",re,s(e.t("Filtered Rows Active students only Count"))+": "+s(e.attendanceS.reportFilteredAttendance.filter(t=>{var a;return((a=t==null?void 0:t.subscription)==null?void 0:a.active)!=!1}).length),1)]),n("div",ie,[n("div",ue,s(e.t("Inactive Students only Rows Count"))+": "+s(e.attendanceS.reportAttendance.filter(t=>{var a;return((a=t==null?void 0:t.subscription)==null?void 0:a.active)==!1}).length),1),o(c),n("div",pe,s(e.t("Filtered Rows inactive students only Count"))+": "+s(e.attendanceS.reportFilteredAttendance.filter(t=>{var a;return((a=t==null?void 0:t.subscription)==null?void 0:a.active)==!1}).length),1)]),n("div",me,[o(G,{flat:"",bordered:"",class:"full-width",rows:e.attendanceS.reportFilteredAttendance,columns:e.attendanceS.reportColumns,pagination:e.pagination},{"top-right":d(()=>[n("div",ce,[o(y,{outlined:"",dense:"",debounce:"300",modelValue:e.attendanceS.filter,"onUpdate:modelValue":l[20]||(l[20]=t=>e.attendanceS.filter=t),placeholder:e.t("Search")},{append:d(()=>[o(V,{name:"fa-solid fa-magnifying-glass"})]),_:1},8,["modelValue","placeholder"]),o(p,{onClick:l[21]||(l[21]=t=>e.attendanceS.filter=""),icon:"fa-solid fa-square-xmark",color:"negative",flat:""})])]),"body-cell":d(t=>[o(T,{props:t,onClick:a=>e.attendanceS.filter=t.value},{default:d(()=>[b(s(t.value),1)]),_:2},1032,["props","onClick"])]),_:1},8,["rows","columns","pagination"])]),e.attendanceS.reportAttendance.length==0?(r(),S("div",Se,s(e.t("No Elements To Display")),1)):u("",!0)]))}var Be=D(j,[["render",fe]]);export{Be as default};
