import{k as H,h as r,l as ge,p as bt,N as De,g as z,t as me,x as Se,c,r as N,w as V,aY as Me,o as Ee,a_ as mt,aZ as St,n as je,a2 as yt,a3 as Be,a9 as Ne,an as ht,ao as _t,ba as wt,bb as Oe,bc as be,bd as Fe,aE as qt,B as Ae,be as Pt,ax as fe,aH as A,Q as J,bf as Ct}from"./index.ce7ea90d.js";import{Q as kt}from"./QList.8b3bec6d.js";import{c as Rt,d as xt,e as Qe,a as Tt}from"./QSelect.6c45d970.js";var Bt=H({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:n}){const v=z(),{proxy:{$q:o}}=v,g=u=>{n("click",u)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:g},ge(a.default));let u,s;const d=v.vnode.key;if(d){if(u=e.props.colsMap[d],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const l=u.align==="right"?"unshift":"push";s=bt(a.default,[]),s[l](r(De,{class:u.__iconClass,name:o.iconSet.table.arrowUp}))}else s=ge(a.default);const S={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:l=>{u.sortable===!0&&e.props.sort(u),g(l)}};return r("th",S,s)}}});const Ot=["horizontal","vertical","cell","none"];var Ft=H({name:"QMarkupTable",props:{...me,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Ot.includes(e)}},setup(e,{slots:a}){const n=z(),v=Se(e,n.proxy.$q),o=c(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(v.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>r("div",{class:o.value},[r("table",{class:"q-table"},ge(a.default))])}});function He(e,a){return r("div",e,[r("table",{class:"q-table"},a)])}const $t={list:kt,table:Ft},Lt=["list","table","__qtable"];var Vt=H({name:"QVirtualScroll",props:{...Rt,type:{type:String,default:"list",validator:e=>Lt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:n}){let v;const o=N(null),g=c(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:s,padVirtualScroll:d,onVirtualScrollEvt:S}=xt({virtualScrollLength:g,getVirtualScrollTarget:P,getVirtualScrollEl:q}),l=c(()=>{if(g.value===0)return[];const O=(F,R)=>({index:u.value.from+R,item:F});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map(O):e.itemsFn(u.value.from,u.value.to-u.value.from).map(O)}),b=c(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=c(()=>e.scrollTarget!==void 0?{}:{tabindex:0});V(g,()=>{s()}),V(()=>e.scrollTarget,()=>{y(),_()});function q(){return o.value.$el||o.value}function P(){return v}function _(){v=yt(q(),e.scrollTarget),v.addEventListener("scroll",S,Be.passive)}function y(){v!==void 0&&(v.removeEventListener("scroll",S,Be.passive),v=void 0)}function B(){let O=d(e.type==="list"?"div":"tbody",l.value.map(a.default));return a.before!==void 0&&(O=a.before().concat(O)),Ne(a.after,O)}return Me(()=>{s()}),Ee(()=>{_()}),mt(()=>{_()}),St(()=>{y()}),je(()=>{y()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?He({ref:o,class:"q-table__middle "+b.value},B()):r($t[e.type],{...n,ref:o,class:[n.class,b.value],...w.value},B)}}});const Dt={xs:2,sm:4,md:6,lg:10,xl:14};function $e(e,a,n){return{transform:a===!0?`translateX(${n.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Mt=H({name:"QLinearProgress",props:{...me,...ht,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:n}=z(),v=Se(e,n.$q),o=_t(e,Dt),g=c(()=>e.indeterminate===!0||e.query===!0),u=c(()=>e.reverse!==e.query),s=c(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),d=c(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),S=c(()=>$e(e.buffer!==void 0?e.buffer:1,u.value,n.$q)),l=c(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=c(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${l.value} q-linear-progress__track--${v.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=c(()=>$e(g.value===!0?1:e.value,u.value,n.$q)),q=c(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${l.value} q-linear-progress__model--${g.value===!0?"in":""}determinate`),P=c(()=>({width:`${e.value*100}%`})),_=c(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${l.value}`);return()=>{const y=[r("div",{class:b.value,style:S.value}),r("div",{class:q.value,style:w.value})];return e.stripe===!0&&g.value===!1&&y.push(r("div",{class:_.value,style:P.value})),r("div",{class:d.value,style:s.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ne(a.default,y))}}});let Q=0;const Et={fullscreen:Boolean,noRouteFullscreenExit:Boolean},jt=["update:fullscreen","fullscreen"];function Nt(){const e=z(),{props:a,emit:n,proxy:v}=e;let o,g,u;const s=N(!1);wt(e)===!0&&V(()=>v.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&l()}),V(()=>a.fullscreen,b=>{s.value!==b&&d()}),V(s,b=>{n("update:fullscreen",b),n("fullscreen",b)});function d(){s.value===!0?l():S()}function S(){s.value!==!0&&(s.value=!0,u=v.$el.parentNode,u.replaceChild(g,v.$el),document.body.appendChild(v.$el),Q++,Q===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:l},Oe.add(o))}function l(){s.value===!0&&(o!==void 0&&(Oe.remove(o),o=void 0),u.replaceChild(v.$el,g),s.value=!1,Q=Math.max(0,Q-1),Q===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),v.$el.scrollIntoView!==void 0&&setTimeout(()=>{v.$el.scrollIntoView()})))}return Me(()=>{g=document.createElement("span")}),Ee(()=>{a.fullscreen===!0&&S()}),je(l),Object.assign(v,{toggleFullscreen:d,setFullscreen:S,exitFullscreen:l}),{inFullscreen:s,toggleFullscreen:d}}function At(e,a){return new Date(e)-new Date(a)}const Qt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Ht(e,a,n,v){const o=c(()=>{const{sortBy:s}=a.value;return s&&n.value.find(d=>d.name===s)||null}),g=c(()=>e.sortMethod!==void 0?e.sortMethod:(s,d,S)=>{const l=n.value.find(q=>q.name===d);if(l===void 0||l.field===void 0)return s;const b=S===!0?-1:1,w=typeof l.field=="function"?q=>l.field(q):q=>q[l.field];return s.sort((q,P)=>{let _=w(q),y=w(P);return l.rawSort!==void 0?l.rawSort(_,y,q,P)*b:_==null?-1*b:y==null?1*b:l.sort!==void 0?l.sort(_,y,q,P)*b:be(_)===!0&&be(y)===!0?(_-y)*b:Fe(_)===!0&&Fe(y)===!0?At(_,y)*b:typeof _=="boolean"&&typeof y=="boolean"?(_-y)*b:([_,y]=[_,y].map(B=>(B+"").toLocaleString().toLowerCase()),_<y?-1*b:_===y?0:b)})});function u(s){let d=e.columnSortOrder;if(qt(s)===!0)s.sortOrder&&(d=s.sortOrder),s=s.name;else{const b=n.value.find(w=>w.name===s);b!==void 0&&b.sortOrder&&(d=b.sortOrder)}let{sortBy:S,descending:l}=a.value;S!==s?(S=s,l=d==="da"):e.binaryStateSort===!0?l=!l:l===!0?d==="ad"?S=null:l=!1:d==="ad"?l=!0:S=null,v({sortBy:S,descending:l,page:1})}return{columnToSort:o,computedSortMethod:g,sort:u}}const zt={filter:[String,Object],filterMethod:Function};function pt(e,a){const n=c(()=>e.filterMethod!==void 0?e.filterMethod:(v,o,g,u)=>{const s=o?o.toLowerCase():"";return v.filter(d=>g.some(S=>{const l=u(S,d)+"";return(l==="undefined"||l==="null"?"":l.toLowerCase()).indexOf(s)!==-1}))});return V(()=>e.filter,()=>{Ae(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function Ut(e,a){for(const n in a)if(a[n]!==e[n])return!1;return!0}function Le(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const It={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Kt(e,a){const{props:n,emit:v}=e,o=N(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length!==0?n.rowsPerPageOptions[0]:5},n.pagination)),g=c(()=>{const l=n["onUpdate:pagination"]!==void 0?{...o.value,...n.pagination}:o.value;return Le(l)}),u=c(()=>g.value.rowsNumber!==void 0);function s(l){d({pagination:l,filter:n.filter})}function d(l={}){Ae(()=>{v("request",{pagination:l.pagination||g.value,filter:l.filter||n.filter,getCellValue:a})})}function S(l,b){const w=Le({...g.value,...l});if(Ut(g.value,w)===!0){u.value===!0&&b===!0&&s(w);return}if(u.value===!0){s(w);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?v("update:pagination",w):o.value=w}return{innerPagination:o,computedPagination:g,isServerSide:u,requestServerInteraction:d,setPagination:S}}function Wt(e,a,n,v,o,g){const{props:u,emit:s,proxy:{$q:d}}=e,S=c(()=>v.value===!0?n.value.rowsNumber||0:g.value),l=c(()=>{const{page:R,rowsPerPage:x}=n.value;return(R-1)*x}),b=c(()=>{const{page:R,rowsPerPage:x}=n.value;return R*x}),w=c(()=>n.value.page===1),q=c(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/n.value.rowsPerPage))),P=c(()=>b.value===0?!0:n.value.page>=q.value),_=c(()=>(u.rowsPerPageOptions.includes(a.value.rowsPerPage)?u.rowsPerPageOptions:[a.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(x=>({label:x===0?d.lang.table.allRows:""+x,value:x})));V(q,(R,x)=>{if(R===x)return;const p=n.value.page;R&&!p?o({page:1}):R<p&&o({page:R})});function y(){o({page:1})}function B(){const{page:R}=n.value;R>1&&o({page:R-1})}function O(){const{page:R,rowsPerPage:x}=n.value;b.value>0&&R*x<S.value&&o({page:R+1})}function F(){o({page:q.value})}return u["onUpdate:pagination"]!==void 0&&s("update:pagination",{...n.value}),{firstRowIndex:l,lastRowIndex:b,isFirstPage:w,isLastPage:P,pagesNumber:q,computedRowsPerPageOptions:_,computedRowsNumber:S,firstPage:y,prevPage:B,nextPage:O,lastPage:F}}const Gt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Xt=["update:selected","selection"];function Yt(e,a,n,v){const o=c(()=>{const P={};return e.selected.map(v.value).forEach(_=>{P[_]=!0}),P}),g=c(()=>e.selection!=="none"),u=c(()=>e.selection==="single"),s=c(()=>e.selection==="multiple"),d=c(()=>n.value.length!==0&&n.value.every(P=>o.value[v.value(P)]===!0)),S=c(()=>d.value!==!0&&n.value.some(P=>o.value[v.value(P)]===!0)),l=c(()=>e.selected.length);function b(P){return o.value[P]===!0}function w(){a("update:selected",[])}function q(P,_,y,B){a("selection",{rows:_,added:y,keys:P,evt:B});const O=u.value===!0?y===!0?_:[]:y===!0?e.selected.concat(_):e.selected.filter(F=>P.includes(v.value(F))===!1);a("update:selected",O)}return{hasSelectionMode:g,singleSelection:u,multipleSelection:s,allRowsSelected:d,someRowsSelected:S,rowsSelectedNumber:l,isRowSelected:b,clearSelection:w,updateSelection:q}}function Ve(e){return Array.isArray(e)?e.slice():[]}const Zt={expanded:Array},Jt=["update:expanded"];function el(e,a){const n=N(Ve(e.expanded));V(()=>e.expanded,u=>{n.value=Ve(u)});function v(u){return n.value.includes(u)}function o(u){e.expanded!==void 0?a("update:expanded",u):n.value=u}function g(u,s){const d=n.value.slice(),S=d.indexOf(u);s===!0?S===-1&&(d.push(u),o(d)):S!==-1&&(d.splice(S,1),o(d))}return{isRowExpanded:v,setExpanded:o,updateExpanded:g}}const tl={visibleColumns:Array};function ll(e,a,n){const v=c(()=>{if(e.columns!==void 0)return e.columns;const s=e.rows[0];return s!==void 0?Object.keys(s).map(d=>({name:d,label:d.toUpperCase(),field:d,align:be(s[d])?"right":"left",sortable:!0})):[]}),o=c(()=>{const{sortBy:s,descending:d}=a.value;return(e.visibleColumns!==void 0?v.value.filter(l=>l.required===!0||e.visibleColumns.includes(l.name)===!0):v.value).map(l=>{const b=l.align||"right",w=`text-${b}`;return{...l,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:w+(l.headerClasses!==void 0?" "+l.headerClasses:"")+(l.sortable===!0?" sortable":"")+(l.name===s?` sorted ${d===!0?"sort-desc":""}`:""),__tdStyle:l.style!==void 0?typeof l.style!="function"?()=>l.style:l.style:()=>null,__tdClass:l.classes!==void 0?typeof l.classes!="function"?()=>w+" "+l.classes:q=>w+" "+l.classes(q):()=>w}})}),g=c(()=>{const s={};return o.value.forEach(d=>{s[d.name]=d}),s}),u=c(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(n.value===!0?1:0));return{colList:v,computedCols:o,computedColsMap:g,computedColspan:u}}const ee="q-table__bottom row items-center",ze={};Qe.forEach(e=>{ze[e]={}});var ol=H({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...ze,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...me,...Et,...tl,...zt,...It,...Zt,...Gt,...Qt},emits:["request","virtualScroll",...jt,...Jt,...Xt],setup(e,{slots:a,emit:n}){const v=z(),{proxy:{$q:o}}=v,g=Se(e,o),{inFullscreen:u,toggleFullscreen:s}=Nt(),d=c(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=N(null),l=N(null),b=c(()=>e.grid!==!0&&e.virtualScroll===!0),w=c(()=>" q-table__card"+(g.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=c(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(g.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),P=c(()=>q.value+(e.loading===!0?" q-table--loading":""));V(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{b.value===!0&&l.value!==null&&l.value.reset()});const{innerPagination:_,computedPagination:y,isServerSide:B,requestServerInteraction:O,setPagination:F}=Kt(v,E),{computedFilterMethod:R}=pt(e,F),{isRowExpanded:x,setExpanded:p,updateExpanded:pe}=el(e,n),te=c(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:i,descending:f}=y.value;return e.filter&&(t=R.value(t,e.filter,$.value,E)),Ge.value!==null&&(t=Xe.value(e.rows===t?t.slice():t,i,f)),t}),ye=c(()=>te.value.length),D=c(()=>{let t=te.value;if(B.value===!0)return t;const{rowsPerPage:i}=y.value;return i!==0&&(I.value===0&&e.rows!==t?t.length>K.value&&(t=t.slice(0,K.value)):t=t.slice(I.value,K.value)),t}),{hasSelectionMode:M,singleSelection:Ue,multipleSelection:he,allRowsSelected:Ie,someRowsSelected:_e,rowsSelectedNumber:le,isRowSelected:ae,clearSelection:Ke,updateSelection:U}=Yt(e,n,D,d),{colList:We,computedCols:$,computedColsMap:we,computedColspan:qe}=ll(e,y,M),{columnToSort:Ge,computedSortMethod:Xe,sort:ne}=Ht(e,y,We,F),{firstRowIndex:I,lastRowIndex:K,isFirstPage:re,isLastPage:oe,pagesNumber:W,computedRowsPerPageOptions:Ye,computedRowsNumber:G,firstPage:ie,prevPage:ue,nextPage:se,lastPage:ce}=Wt(v,_,y,B,F,ye),Ze=c(()=>D.value.length===0),Je=c(()=>{const t={};return Qe.forEach(i=>{t[i]=e[i]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function et(){b.value===!0&&l.value.reset()}function tt(){if(e.grid===!0)return ft();const t=e.hideHeader!==!0?xe:null;if(b.value===!0){const f=a["top-row"],m=a["bottom-row"],h={default:k=>Ce(k.item,a.body,k.index)};if(f!==void 0){const k=r("tbody",f({cols:$.value}));h.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(h.before=t);return m!==void 0&&(h.after=()=>r("tbody",m({cols:$.value}))),r(Vt,{ref:l,class:e.tableClass,style:e.tableStyle,...Je.value,scrollTarget:e.virtualScrollTarget,items:D.value,type:"__qtable",tableColspan:qe.value,onVirtualScroll:at},h)}const i=[nt()];return t!==null&&i.unshift(t()),He({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function lt(t,i){if(l.value!==null){l.value.scrollTo(t,i);return}t=parseInt(t,10);const f=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(f!==null){const m=S.value.querySelector(".q-table__middle.scroll"),h=f.offsetTop-e.virtualScrollStickySizeStart,k=h<m.scrollTop?"decrease":"increase";m.scrollTop=h,n("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:k})}}function at(t){n("virtualScroll",t)}function Pe(){return[r(Mt,{class:"q-table__linear-progress",color:e.color,dark:g.value,indeterminate:!0,trackColor:"transparent"})]}function Ce(t,i,f){const m=d.value(t),h=ae(m);if(i!==void 0)return i(ke({key:m,row:t,pageIndex:f,__trClass:h?"selected":""}));const k=a["body-cell"],C=$.value.map(T=>{const Y=a[`body-cell-${T.name}`],Z=Y!==void 0?Y:k;return Z!==void 0?Z(rt({key:m,row:t,pageIndex:f,col:T})):r("td",{class:T.__tdClass(t),style:T.__tdStyle(t)},E(T,t))});if(M.value===!0){const T=a["body-selection"],Y=T!==void 0?T(ot({key:m,row:t,pageIndex:f})):[r(fe,{modelValue:h,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(Z,gt)=>{U([m],[t],Z,gt)}})];C.unshift(r("td",{class:"q-table--col-auto-width"},Y))}const L={key:m,class:{selected:h}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=T=>{n("RowClick",T,t,f)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=T=>{n("RowDblclick",T,t,f)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=T=>{n("RowContextmenu",T,t,f)}),r("tr",L,C)}function nt(){const t=a.body,i=a["top-row"],f=a["bottom-row"];let m=D.value.map((h,k)=>Ce(h,t,k));return i!==void 0&&(m=i({cols:$.value}).concat(m)),f!==void 0&&(m=m.concat(f({cols:$.value}))),r("tbody",m)}function ke(t){return de(t),t.cols=t.cols.map(i=>A({...i},"value",()=>E(i,t.row))),t}function rt(t){return de(t),A(t,"value",()=>E(t.col,t.row)),t}function ot(t){return de(t),t}function de(t){Object.assign(t,{cols:$.value,colsMap:we.value,sort:ne,rowIndex:I.value+t.pageIndex,color:e.color,dark:g.value,dense:e.dense}),M.value===!0&&A(t,"selected",()=>ae(t.key),(i,f)=>{U([t.key],[t.row],i,f)}),A(t,"expand",()=>x(t.key),i=>{pe(t.key,i)})}function E(t,i){const f=typeof t.field=="function"?t.field(i):i[t.field];return t.format!==void 0?t.format(f,i):f}const j=c(()=>({pagination:y.value,pagesNumber:W.value,isFirstPage:re.value,isLastPage:oe.value,firstPage:ie,prevPage:ue,nextPage:se,lastPage:ce,inFullscreen:u.value,toggleFullscreen:s}));function it(){const t=a.top,i=a["top-left"],f=a["top-right"],m=a["top-selection"],h=M.value===!0&&m!==void 0&&le.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:k},[t(j.value)]);let C;if(h===!0?C=m(j.value).slice():(C=[],i!==void 0?C.push(r("div",{class:"q-table__control"},[i(j.value)])):e.title&&C.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),f!==void 0&&(C.push(r("div",{class:"q-table__separator col"})),C.push(r("div",{class:"q-table__control"},[f(j.value)]))),C.length!==0)return r("div",{class:k},C)}const Re=c(()=>_e.value===!0?null:Ie.value);function xe(){const t=ut();return e.loading===!0&&a.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:qe.value},Pe())])),r("thead",t)}function ut(){const t=a.header,i=a["header-cell"];if(t!==void 0)return t(ve({header:!0})).slice();const f=$.value.map(m=>{const h=a[`header-cell-${m.name}`],k=h!==void 0?h:i,C=ve({col:m});return k!==void 0?k(C):r(Bt,{key:m.name,props:C},()=>m.label)});if(Ue.value===!0&&e.grid!==!0)f.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(he.value===!0){const m=a["header-selection"],h=m!==void 0?m(ve({})):[r(fe,{color:e.color,modelValue:Re.value,dark:g.value,dense:e.dense,"onUpdate:modelValue":Te})];f.unshift(r("th",{class:"q-table--col-auto-width"},h))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},f)]}function ve(t){return Object.assign(t,{cols:$.value,sort:ne,colsMap:we.value,color:e.color,dark:g.value,dense:e.dense}),he.value===!0&&A(t,"selected",()=>Re.value,Te),t}function Te(t){_e.value===!0&&(t=!1),U(D.value.map(d.value),D.value,t)}const X=c(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function st(){if(e.hideBottom===!0)return;if(Ze.value===!0){if(e.hideNoData===!0)return;const f=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,m=a["no-data"],h=m!==void 0?[m({message:f,icon:o.iconSet.table.warning,filter:e.filter})]:[r(De,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),f];return r("div",{class:ee+" q-table__bottom--nodata"},h)}const t=a.bottom;if(t!==void 0)return r("div",{class:ee},[t(j.value)]);const i=e.hideSelectedBanner!==!0&&M.value===!0&&le.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(le.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:ee+" justify-end"},dt(i));if(i.length!==0)return r("div",{class:ee},i)}function ct(t){F({page:1,rowsPerPage:t.value})}function dt(t){let i;const{rowsPerPage:f}=y.value,m=e.paginationLabel||o.lang.table.pagination,h=a.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),k===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),r(Tt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:f,options:Ye.value,displayValue:f===0?o.lang.table.allRows:f,dark:g.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ct})])),h!==void 0)i=h(j.value);else if(i=[r("span",f!==0?{class:"q-table__bottom-item"}:{},[f?m(I.value+1,Math.min(K.value,G.value),G.value):m(1,ye.value,G.value)])],f!==0&&W.value>1){const C={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(C.size="sm"),W.value>2&&i.push(r(J,{key:"pgFirst",...C,icon:X.value[0],disable:re.value,onClick:ie})),i.push(r(J,{key:"pgPrev",...C,icon:X.value[1],disable:re.value,onClick:ue}),r(J,{key:"pgNext",...C,icon:X.value[2],disable:oe.value,onClick:se})),W.value>2&&i.push(r(J,{key:"pgLast",...C,icon:X.value[3],disable:oe.value,onClick:ce}))}return t.push(r("div",{class:"q-table__control"},i)),t}function vt(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[xe()])]:e.loading===!0&&a.loading===void 0?Pe():void 0;return r("div",{class:"q-table__middle"},t)}function ft(){const t=a.item!==void 0?a.item:i=>{const f=i.cols.map(h=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[h.label]),r("div",{class:"q-table__grid-item-value"},[h.value])]));if(M.value===!0){const h=a["body-selection"],k=h!==void 0?h(i):[r(fe,{modelValue:i.selected,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(C,L)=>{U([i.key],[i.row],C,L)}})];f.unshift(r("div",{class:"q-table__grid-item-row"},k),r(Ct,{dark:g.value}))}const m={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(m.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(m.onClick=h=>{n("RowClick",h,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(m.onDblclick=h=>{n("RowDblclick",h,i.row,i.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[r("div",m,f)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},D.value.map((i,f)=>t(ke({key:d.value(i),row:i,pageIndex:f}))))}return Object.assign(v.proxy,{requestServerInteraction:O,setPagination:F,firstPage:ie,prevPage:ue,nextPage:se,lastPage:ce,isRowSelected:ae,clearSelection:Ke,isRowExpanded:x,setExpanded:p,sort:ne,resetVirtualScroll:et,scrollTo:lt,getCellValue:E}),Pt(v.proxy,{filteredSortedRows:()=>te.value,computedRows:()=>D.value,computedRowsNumber:()=>G.value}),()=>{const t=[it()],i={ref:S,class:P.value};return e.grid===!0?t.push(vt()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),t.push(tt(),st()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),r("div",i,t)}}});export{ol as Q,Bt as a};
