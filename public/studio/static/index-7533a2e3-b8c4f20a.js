import{s as P,n as g,P as x,c2 as L,j as o,d as _,N as k,O as B,b_ as w,D as O,at as j,Q as A,af as C,r as v,B as T,f as D,c6 as S}from"./sanity-1be75ff3.js";import{P as H}from"./PaneItem-4c10c750-8f70b38f.js";var I;function W(s,t){return t||(t=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(t)}}))}const G=s=>{let{index:t,menuItems:a,menuItemGroups:i,title:c}=s;const{features:r}=_(),{collapsed:l,isLast:p}=k(),u=p&&!l?-1:0;return o(B,{actions:o(w,{menuItems:a,menuItemGroups:i}),backButton:r.backButton&&t>0&&o(O,{as:j,"data-as":"a",icon:A,mode:"bleed"}),tabIndex:u,title:c})},z=P.hr(I||(I=W([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function E(s){const{childItemId:t,items:a,isActive:i,layout:c,showIcons:r,title:l}=s,{collapsed:p}=C(),u=v.useCallback(e=>{var n;return((n=a==null?void 0:a.find((d,h)=>h===e))==null?void 0:n.type)==="divider"},[a]),f=v.useCallback(e=>{var n;const d=(n=e.displayOptions)==null?void 0:n.showIcon;return typeof d<"u"?d!==!1:r!==!1},[r]),m=v.useCallback((e,n)=>{const{virtualIndex:d}=n;if(e.type==="divider")return o(T,{marginTop:1,marginBottom:2,children:o(z,{})},"divider-".concat(d));const h=!i&&t===e.id,y=i&&t===e.id,b=e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0;return o(H,{icon:f(e)?e.icon:!1,id:e.id,layout:c,marginBottom:1,pressed:h,schemaType:e.schemaType,selected:y,title:e.title,value:b},e.id)},[t,i,c,f]);return o(D,{overflow:p?"hidden":"auto",children:a&&a.length>0&&o(S,{activeItemDataAttr:"data-hovered",ariaLabel:"List of ".concat(l),canReceiveFocus:!0,focusRingOffset:-3,getItemDisabled:u,itemHeight:51,items:a,onlyShowSelectionWhenActive:!0,padding:2,paddingBottom:1,renderItem:m,wrapAround:!1})})}function K(s){const{childItemId:t,index:a,isActive:i,isSelected:c,pane:r,paneKey:l}=s,{defaultLayout:p,displayOptions:u,items:f,menuItems:m,menuItemGroups:e,title:n}=r,d=(u==null?void 0:u.showIcons)!==!1;return g(x,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane","data-ui":"ListPane",id:l,maxWidth:640,minWidth:320,selected:c,children:[L,o(G,{index:a,menuItems:m,menuItemGroups:e,title:n}),o(E,{childItemId:t,isActive:i,items:f,layout:p,showIcons:d,title:n},l)]})}export{K as default};