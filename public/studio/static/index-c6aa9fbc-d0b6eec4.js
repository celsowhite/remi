import{s as U,B as D,r as o,d as ke,N as he,j as r,O as je,b_ as Ne,D as fe,at as Be,Q as $e,a1 as Qe,b$ as We,t as ye,an as ne,a8 as Ye,c0 as qe,c1 as Ue,a9 as ze,n as B,P as Ve,c2 as He,x as Ge,c3 as Ke,c4 as Xe,c5 as Je,af as Ze,aD as et,A as tt,F as W,aB as nt,T as Y,z as X,a4 as ge,b6 as st,G as rt,bo as at,c6 as ot,f as it,bU as ct,c7 as lt,c8 as ut,aA as Se,a$ as dt,c9 as re,ca as J,aE as mt,ba as be,cb as pt,cc as Ie,cd as Z,aC as q,b0 as ht,ce as ft,h as yt,bk as ae,cf as gt,cg as St,bC as bt,bD as It,ch as Tt,ci as vt,cj as Lt,ck as Rt,cl as Et,cm as _t,cn as Ct,co as wt,cp as Pt}from"./sanity-7c18ea8b.js";import{useDeskToolSetting as oe}from"./index-26656574-aa8b17d0.js";import{P as xt}from"./PaneItem-4c10c750-7cce72e0.js";import"./index-946eebcc.js";var ie,ce,le,ue,de;function $(s,e){return e||(e=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(e)}}))}const me=100,ee=2e3,Te={by:[{field:"_updatedAt",direction:"desc"}]},At={};function Ot(s){return Tt(s).map(e=>({...e.draft||e.published,hasPublished:!!e.published,hasDraft:!!e.draft}))}const Mt=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function ve(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=s.match(Mt);if(!n)return null;const t=(n[1]||n[2]).trim().replace(/^["']|["']$/g,"");if(t[0]==="$"){const a=t.slice(1),d=e[a];return typeof d=="string"?d:null}return t}function Dt(s){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(s.trim())}function Ft(s,e){const n=s.by.map(t=>{if(t.mapWith)return t;const a=kt(e,t.field);return a?Nt(a,"datetime")?{...t,mapWith:"dateTime"}:a.jsonType==="string"?{...t,mapWith:"lower"}:t:t});return n.every((t,a)=>t===s.by[a])?s:{...s,by:n}}function kt(s,e){const n=Ge(e);let t=s;for(const a of n){if(!t)return;if(typeof a=="string"){t=jt(t,a);continue}if(!(Ke(a)||Xe(a))||t.jsonType!=="array")return;const[c,u]=t.of||[];if(u||!c)return;if(!Je(c)){t=c;continue}const[l,p]=c.to||[];if(p||!l)return;t=l}return t}function jt(s,e){if(!("fields"in s))return;const n=s.fields.find(t=>t.name===e);return n?n.type:void 0}function Nt(s,e){let n=s.type;for(;n;){if(n.name===e||!n.type&&n.jsonType===e)return!0;n=n.type}return!1}const Bt=U(D)(ie||(ie=$([`
  position: relative;
`]))),$t=U(D)(ce||(ce=$([`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`]))),Qt=[...Array(30).keys()];function Wt(s){const{layout:e}=s;return r(ge,{padding:2,space:1,children:Qt.map(n=>r(ye,{padding:2,children:r(vt,{isPlaceholder:!0,layout:e})},n))})}function Yt(s){const{childItemId:e,error:n,filterIsSimpleTypeConstraint:t,hasMaxItems:a,hasSearchQuery:d,isActive:c,isLazyLoading:u,isLoading:l,items:p,layout:g,loadingVariant:f,onListChange:S,onRetry:R,paneTitle:m,searchInputElement:y,showIcons:E}=s,_=ne(),{collapsed:h}=Ze(),{collapsed:b,index:v}=he(),[L,P]=o.useState(!1),F=o.useCallback(()=>{l||u||!L||S()},[u,l,S,L]);o.useEffect(()=>{if(b)return;const i=setTimeout(()=>{P(!0)},0);return()=>{clearTimeout(i)}},[b,p]);const C=o.useCallback((i,x)=>{let{activeIndex:A}=x;const O=et(i._id),I=e===O,T=!c&&I,z=c&&I,M=A===p.length-1,V=M&&u,H=M&&a;return B(tt,{children:[r(xt,{icon:E===!1?!1:void 0,id:O,layout:g,marginBottom:1,pressed:T,schemaType:_.get(i._type),selected:z,value:i}),V&&r(W,{align:"center",justify:"center",padding:4,children:r(nt,{muted:!0})}),H&&r(D,{marginY:1,paddingX:3,paddingY:4,children:B(Y,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",ee," documents"]})})]})},[e,c,p.length,g,_,E,a,u]),k=o.useMemo(()=>d?r(W,{align:"center",direction:"column",height:"fill",justify:"center",children:r(X,{width:1,children:r(D,{paddingX:4,paddingY:5,children:r(Y,{align:"center",muted:!0,children:"No results found"})})})}):r(W,{align:"center",direction:"column",height:"fill",justify:"center",children:r(X,{width:1,children:r(D,{paddingX:4,paddingY:5,children:r(Y,{align:"center",muted:!0,children:t?"No documents of this type":"No matching documents"})})})}),[t,d]),w=o.useMemo(()=>{if(!L)return null;if(n)return r(W,{align:"center",direction:"column",height:"fill",justify:"center",children:r(X,{width:1,children:B(ge,{paddingX:4,paddingY:5,space:4,children:[r(st,{as:"h3",children:"Could not fetch list items"}),B(Y,{as:"p",children:["Error: ",r("code",{children:n.message})]}),R&&r(D,{children:r(fe,{icon:rt,onClick:R,text:"Retry",tone:"primary"})})]})})});if(!l&&p.length===0)return k;if(f==="initial"&&l)return r(at,{ms:300,children:r(Wt,{layout:g})});if(f==="spinner"&&l)return null;const i="".concat(v,"-").concat(b);return r(Bt,{overflow:"hidden",height:"fill",children:r($t,{children:r(ot,{activeItemDataAttr:"data-hovered",ariaLabel:m,canReceiveFocus:!0,focusRingOffset:-3,inputElement:y,itemHeight:51,items:p,onEndReached:F,onlyShowSelectionWhenActive:!0,overscan:10,padding:2,paddingBottom:1,renderItem:C,wrapAround:!1},i)})})},[b,n,F,v,l,p,g,f,R,C,y,L]);return r(it,{overflow:h||f==="initial"?"hidden":"auto",children:w})}const Le=o.memo(s=>{let{contentAfter:e,index:n,initialValueTemplates:t=[],menuItemGroups:a=[],menuItems:d=[],setLayout:c,setSortOrder:u,title:l}=s;const{features:p}=ke(),{collapsed:g,isLast:f}=he(),S=f&&!g?-1:0,R=o.useMemo(()=>({setLayout:m=>{let{layout:y}=m;c(y)},setSortOrder:m=>{u(m)}}),[c,u]);return r(je,{actions:r(Ne,{initialValueTemplateItems:t,actionHandlers:R,menuItemGroups:a,menuItems:d}),backButton:p.backButton&&n>0&&r(fe,{as:Be,"data-as":"a",icon:$e,mode:"bleed"}),contentAfter:e,tabIndex:S,title:l})});Le.displayName="DocumentListPaneHeader";function qt(s){const{client:e,schema:n,sort:t,limit:a,params:d,filter:c,searchQuery:u,staticTypeNames:l}=s,p=t.by,g=t==null?void 0:t.extendedProjection,f=Lt(()=>e.listen("*[".concat(c,"]"),d,{events:["welcome","mutation","reconnect"],includeResult:!1,visibility:"query"})).pipe(Z((m,y)=>y===0&&m.type!=="welcome"?J(()=>new Error(m.type==="reconnect"?"Could not establish EventSource connection":'Received unexpected type of first event "'.concat(m.type,'"'))):q(m)),Rt()),[S,R]=Et(f,m=>m.type==="welcome");return be(S.pipe(Ie(1)),R.pipe(_t(1e3,wt,{leading:!0,trailing:!0}))).pipe(Ct(()=>(l?q(l):e.observable.fetch("array::unique(*[".concat(c,"][]._type)"),d)).pipe(Z(y=>{const E=y.flatMap(L=>n.get(L)||[]),_={filter:c,query:u||"",types:E},h={__unstable_extendedProjection:g,comments:["findability-source: ".concat(u?"list-query":"list")],limit:a,params:d,sort:p},{query:b,params:v}=Pt(_,h);return e.observable.fetch(b,v)}))))}const Ut=[],pe={error:null,onRetry:void 0,result:null},zt={result:null,error:null};function Vt(s){const{filter:e,params:n,sortOrder:t,searchQuery:a}=s,d=ct(lt),c=ne(),[u,l]=o.useState(pe),{onRetry:p,error:g,result:f}=u,S=f==null?void 0:f.documents,R=o.useMemo(()=>S?Ot(S):Ut,[S]),[m,y]=o.useState(!1),[E,_]=o.useState(!1),[h,b]=o.useState(!1),v=o.useMemo(()=>ve(e,n),[e,n]),L=f===null&&!g,P=(S==null?void 0:S.length)===ee,F=o.useCallback(()=>{L||E||h||b(!0)},[L,E,h]),C=o.useCallback(i=>{var x,A;if(i.error){l(i);return}const O=((A=(x=i.result)==null?void 0:x.documents)==null?void 0:A.length)||0;if(!i.error&&(i==null?void 0:i.result)===null&&h){y(!0);return}if(O<me&&O!==0&&!h&&_(!0),(i==null?void 0:i.result)===null){l(T=>({...T.error?i:T}));return}y(!1),l(i)},[h]),k=o.useMemo(()=>{const i=new ut,x=()=>i.next();return qt({client:d,filter:e,limit:h?ee:me,params:n,schema:c,searchQuery:a||"",sort:t||Te,staticTypeNames:v?[v]:void 0}).pipe(Se(I=>({result:{documents:I},error:null})),dt(zt),re(I=>I instanceof ProgressEvent?J(()=>new Error("Request error")):J(()=>I)),re((I,T)=>mt(q({result:null,error:I}),be(pt(window,"online"),i).pipe(Ie(1),Z(()=>T)))),ht((I,T)=>({...I,...T,onRetry:x})))},[d,e,n,c,a,h,t,v]);o.useEffect(()=>{const i=k.subscribe(C);return()=>{i.unsubscribe()}},[C,k]);const w=o.useCallback(()=>{_(!1),y(!1),l(pe),b(!1)},[]);return o.useEffect(()=>{w()},[w,e,n,t,a]),{error:g,hasMaxItems:P,isLazyLoading:m,isLoading:L,isSearchReady:!g,items:R,onListChange:F,onRetry:p}}const te=[],Ht=Qe(le||(le=$([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]))),Gt=U(We)(ue||(ue=$([`
  animation: `,` 500ms linear infinite;
`])),Ht),Kt=U(ye)(de||(de=$([`
  [data-ui='TextInput'] {
    border-radius: inherit;
  }
`])));function Xt(s){const e=o.useRef(s);return ft(e.current,s)||(e.current=s),e.current}const Jt=s=>{const{menuItems:e,sortOrderRaw:n,layout:t}=s;return e==null?void 0:e.map(a=>{var d,c,u,l;return(d=a.params)!=null&&d.layout?{...a,selected:t===((c=a.params)==null?void 0:c.layout)}:(u=a==null?void 0:a.params)!=null&&u.by?{...a,selected:yt(n==null?void 0:n.by,((l=a==null?void 0:a.params)==null?void 0:l.by)||te)}:{...a,selected:!1}})},sn=o.memo(function(e){const{childItemId:n,index:t,isActive:a,isSelected:d,pane:c,paneKey:u}=e,l=ne(),{name:p}=Ye(),{defaultLayout:g="default",displayOptions:f,initialValueTemplates:S=te,menuItemGroups:R,menuItems:m,options:y,title:E}=c,{apiVersion:_,defaultOrdering:h=te,filter:b}=y,v=Xt(y.params||At),L=c.source,P=o.useMemo(()=>ve(b,v),[b,v]),F=(f==null?void 0:f.showIcons)!==!1,[C,k]=oe(P,"layout",g),[w,i]=o.useState(""),[x,A]=o.useState(""),[O,I]=o.useState(null),T=o.useRef(!1),z=o.useMemo(()=>(h==null?void 0:h.length)>0?{by:h}:Te,[h]),[M,V]=oe(P,"sortOrder",z),H=P&&M?Ft(M,l.get(P)):M,Re=qe(H),Ee=Dt(b),{error:_e,hasMaxItems:Ce,isLazyLoading:we,isLoading:j,isSearchReady:Pe,items:G,onListChange:xe,onRetry:Ae}=Vt({apiVersion:_,filter:b,params:v,searchQuery:w==null?void 0:w.trim(),sortOrder:Re}),Oe=o.useMemo(()=>Jt({menuItems:m,sortOrderRaw:M,layout:C}),[C,m,M]),Me=Ue(Q=>Q.pipe(Se(K=>K.target.value),ae(A),gt(K=>K===""?q(""):St(300)),ae(i)),[]),N=o.useCallback(()=>{i(""),A("")},[]),De=o.useCallback(Q=>{Q.key==="Escape"&&N()},[N]);o.useEffect(()=>(T.current===!1&&!j&&(T.current=!0),()=>{T.current=!1}),[j]),o.useEffect(()=>{N(),T.current=!1},[u,N]);const se=o.useMemo(()=>j&&G.length===0&&T.current?"spinner":"initial",[j,G.length]),Fe=r(D,{paddingX:2,paddingBottom:2,children:r(Kt,{radius:4,tone:"transparent",children:r(bt,{"aria-label":"Search list",autoComplete:"off",border:!1,clearButton:Boolean(w),disabled:!Pe,fontSize:[2,2,1],icon:se==="spinner"?Gt:It,onChange:Me,onClear:N,onKeyDown:De,placeholder:"Search list",radius:2,ref:I,spellCheck:!1,value:x})})});return r(ze,{name:L||p,children:B(Ve,{currentMaxWidth:350,"data-ui":"DocumentListPane",id:u,maxWidth:640,minWidth:320,selected:d,children:[He,r(Le,{contentAfter:Fe,index:t,initialValueTemplates:S,menuItemGroups:R,menuItems:Oe,setLayout:k,setSortOrder:V,title:E}),r(Yt,{childItemId:n,error:_e,filterIsSimpleTypeConstraint:Ee,hasMaxItems:Ce,hasSearchQuery:Boolean(w),isActive:a,isLazyLoading:we,isLoading:j,items:G,layout:C,loadingVariant:se,onListChange:xe,onRetry:Ae,paneTitle:E,searchInputElement:O,showIcons:F},u)]})})});export{sn as default};
