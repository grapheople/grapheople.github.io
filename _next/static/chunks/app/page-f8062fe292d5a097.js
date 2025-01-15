(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6247:(e,r,t)=>{Promise.resolve().then(t.bind(t,4212))},4212:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>m});var n=t(5155),i=t(2115),o=t(9561),a=t(6123),s=t(9142),l=t(2567),c=t(5761);let u=(0,a.A)({createStyledComponent:(0,s.Ay)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,t.container&&r.container]}}),componentName:"MuiGrid2",useThemeProps:e=>(0,l.b)({props:e,name:"MuiGrid2"}),useTheme:c.A});var p=t(8416),d=t(7753),x=t(6214),f=t(2282),g=t(8998);let m=()=>{let[e,r]=(0,i.useState)(!1),t=()=>{r(!1)};return(0,n.jsxs)(g.A,{sx:{padding:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:2},children:[(0,n.jsx)(o.A,{sx:{marginBottom:4,fontSize:30,textAlign:"center"},children:"운동을 선택하세요!\uD83C\uDFC3‍♂️\uD83D\uDEB4‍♂️"}),(0,n.jsxs)(u,{container:!0,spacing:2,sx:{maxWidth:"100%",flexWrap:"nowrap",overflowX:"auto"},children:[(0,n.jsx)(u,{size:{xs:12,sm:6},sx:{flex:"1 1 0",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)(g.A,{sx:{textAlign:"center"},children:[(0,n.jsx)("a",{onClick:e=>{e.preventDefault(),r(!0)},children:(0,n.jsx)("img",{src:"/running.webp",alt:"Running Thumbnail",style:{width:"100%",maxWidth:"512px",height:"auto",maxHeight:"500px",borderRadius:"8px",cursor:"pointer"}})}),(0,n.jsx)(o.A,{variant:"subtitle1",sx:{marginTop:1},children:"Running"})]})}),(0,n.jsx)(u,{size:{xs:12,sm:6},sx:{flex:"1 1 0",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)(g.A,{sx:{textAlign:"center"},children:[(0,n.jsx)("a",{href:"/competition",children:(0,n.jsx)("img",{src:"/cycling.webp",alt:"Cycling Thumbnail",style:{width:"100%",maxWidth:"512px",height:"auto",maxHeight:"500px",borderRadius:"8px",cursor:"pointer"}})}),(0,n.jsx)(o.A,{variant:"subtitle1",sx:{marginTop:1},children:"Cycling"})]})})]}),(0,n.jsxs)(p.A,{open:e,onClose:t,sx:{"& .MuiDialog-paper":{borderRadius:"16px",padding:"20px",backgroundColor:"#f9f9f9",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.2)"}},children:[(0,n.jsx)(d.A,{children:(0,n.jsx)(o.A,{sx:{textAlign:"center",fontSize:"1.5rem"},children:"준비 중입니다! \uD83D\uDEA7"})}),(0,n.jsx)(x.A,{sx:{justifyContent:"center"},children:(0,n.jsx)(f.A,{onClick:t,variant:"contained",sx:{padding:"8px 16px",borderRadius:"8px",textTransform:"none",backgroundColor:"#f57c00",color:"#fff","&:hover":{backgroundColor:"#e65100"}},children:"닫기"})})]})]})}},8998:(e,r,t)=>{"use strict";t.d(r,{A:()=>g});var n=t(2115),i=t(3463),o=t(3166),a=t(1157),s=t(2611),l=t(6307),c=t(5155),u=t(2795),p=t(3717),d=t(6366);let x=(0,t(1045).A)("MuiBox",["root"]),f=(0,p.A)(),g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{themeId:r,defaultTheme:t,defaultClassName:u="MuiBox-root",generateClassName:p}=e,d=(0,o.Ay)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(a.A);return n.forwardRef(function(e,n){let o=(0,l.A)(t),{className:a,component:x="div",...f}=(0,s.A)(e);return(0,c.jsx)(d,{as:x,ref:n,className:(0,i.A)(a,p?p(u):u),theme:r&&o[r]||o,...f})})}({themeId:d.A,defaultTheme:f,defaultClassName:x.root,generateClassName:u.A.generate})},6123:(e,r,t)=>{"use strict";t.d(r,{A:()=>O});var n=t(2115),i=t(3463),o=t(4581),a=t(7157),s=t(7123),l=t(4577),c=t(4413),u=t(6307),p=t(2611),d=t(5212);let x=(e,r)=>e.filter(e=>r.includes(e)),f=(e,r,t)=>{let n=e.keys[0];Array.isArray(r)?r.forEach((r,n)=>{t((r,t)=>{n<=e.keys.length-1&&(0===n?Object.assign(r,t):r[e.up(e.keys[n])]=t)},r)}):r&&"object"==typeof r?(Object.keys(r).length>e.keys.length?e.keys:x(e.keys,Object.keys(r))).forEach(i=>{if(e.keys.includes(i)){let o=r[i];void 0!==o&&t((r,t)=>{n===i?Object.assign(r,t):r[e.up(i)]=t},o)}}):("number"==typeof r||"string"==typeof r)&&t((e,r)=>{Object.assign(e,r)},r)};function g(e){return`--Grid-${e}Spacing`}function m(e){return`--Grid-parent-${e}Spacing`}let h="--Grid-columns",b="--Grid-parent-columns",y=({theme:e,ownerState:r})=>{let t={};return f(e.breakpoints,r.size,(e,r)=>{let n={};"grow"===r&&(n={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===r&&(n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof r&&(n={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${r} / var(${b}) - (var(${b}) - ${r}) * (var(${m("column")}) / var(${b})))`}),e(t,n)}),t},A=({theme:e,ownerState:r})=>{let t={};return f(e.breakpoints,r.offset,(e,r)=>{let n={};"auto"===r&&(n={marginLeft:"auto"}),"number"==typeof r&&(n={marginLeft:0===r?"0px":`calc(100% * ${r} / var(${b}) + var(${m("column")}) * ${r} / var(${b}))`}),e(t,n)}),t},v=({theme:e,ownerState:r})=>{if(!r.container)return{};let t={[h]:12};return f(e.breakpoints,r.columns,(e,r)=>{let n=r??12;e(t,{[h]:n,"> *":{[b]:n}})}),t},j=({theme:e,ownerState:r})=>{if(!r.container)return{};let t={};return f(e.breakpoints,r.rowSpacing,(r,n)=>{let i="string"==typeof n?n:e.spacing?.(n);r(t,{[g("row")]:i,"> *":{[m("row")]:i}})}),t},w=({theme:e,ownerState:r})=>{if(!r.container)return{};let t={};return f(e.breakpoints,r.columnSpacing,(r,n)=>{let i="string"==typeof n?n:e.spacing?.(n);r(t,{[g("column")]:i,"> *":{[m("column")]:i}})}),t},k=({theme:e,ownerState:r})=>{if(!r.container)return{};let t={};return f(e.breakpoints,r.direction,(e,r)=>{e(t,{flexDirection:r})}),t},$=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},gap:`var(${g("row")}) var(${g("column")})`}}),S=e=>{let r=[];return Object.entries(e).forEach(([e,t])=>{!1!==t&&void 0!==t&&r.push(`grid-${e}-${String(t)}`)}),r},C=(e,r="xs")=>{function t(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(t(e))return[`spacing-${r}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let r=[];return Object.entries(e).forEach(([e,n])=>{t(n)&&r.push(`spacing-${e}-${String(n)}`)}),r}return[]},G=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,r])=>`direction-${e}-${r}`):[`direction-xs-${String(e)}`];var E=t(5155);let N=(0,d.A)(),D=(0,l.A)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>r.root});function R(e){return(0,c.A)({props:e,name:"MuiGrid",defaultTheme:N})}function O(e={}){let{createStyledComponent:r=D,useThemeProps:t=R,useTheme:l=u.A,componentName:c="MuiGrid"}=e,d=(e,r)=>{let{container:t,direction:n,spacing:i,wrap:o,size:l}=e,u={root:["root",t&&"container","wrap"!==o&&`wrap-xs-${String(o)}`,...G(n),...S(l),...t?C(i,r.breakpoints.keys[0]):[]]};return(0,s.A)(u,e=>(0,a.Ay)(c,e),{})};function x(e,r,t=()=>!0){let n={};return null===e||(Array.isArray(e)?e.forEach((e,i)=>{null!==e&&t(e)&&r.keys[i]&&(n[r.keys[i]]=e)}):"object"==typeof e?Object.keys(e).forEach(r=>{let i=e[r];null!=i&&t(i)&&(n[r]=i)}):n[r.keys[0]]=e),n}let f=r(v,w,j,y,k,$,A),g=n.forwardRef(function(e,r){let a=l(),s=t(e),c=(0,p.A)(s),{className:u,children:g,columns:m=12,container:h=!1,component:b="div",direction:y="row",wrap:A="wrap",size:v={},offset:j={},spacing:w=0,rowSpacing:k=w,columnSpacing:$=w,unstable_level:S=0,...C}=c,G=x(v,a.breakpoints,e=>!1!==e),N=x(j,a.breakpoints),D=e.columns??(S?void 0:m),R=e.spacing??(S?void 0:w),O=e.rowSpacing??e.spacing??(S?void 0:k),W=e.columnSpacing??e.spacing??(S?void 0:$),M={...c,level:S,columns:D,container:h,direction:y,wrap:A,spacing:R,rowSpacing:O,columnSpacing:W,size:G,offset:N},_=d(M,a);return(0,E.jsx)(f,{ref:r,as:b,ownerState:M,className:(0,i.A)(_.root,u),...C,children:n.Children.map(g,e=>n.isValidElement(e)&&(0,o.A)(e,["Grid"])&&h&&e.props.container?n.cloneElement(e,{unstable_level:e.props?.unstable_level??S+1}):e)})});return g.muiName="Grid",g}}},e=>{var r=r=>e(e.s=r);e.O(0,[277,282,578,474,71,441,517,358],()=>r(6247)),_N_E=e.O()}]);