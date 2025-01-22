(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6247:(e,r,t)=>{Promise.resolve().then(t.bind(t,4212))},4212:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>v});var n=t(5155),i=t(2115),o=t(9561),s=t(6123),a=t(9142),l=t(2567),u=t(5761);let c=(0,s.A)({createStyledComponent:(0,a.Ay)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,t.container&&r.container]}}),componentName:"MuiGrid2",useThemeProps:e=>(0,l.b)({props:e,name:"MuiGrid2"}),useTheme:u.A});var p=t(8416),d=t(7753),f=t(6214),x=t(2282),g=t(8998),h=t(8342),m=t(6046);let v=()=>{let e=(0,m.useRouter)(),{sport:r,setSport:t}=(0,h.S)(),[s,a]=(0,i.useState)(!1),l=()=>{a(!1)};return(0,n.jsxs)(g.A,{sx:{padding:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:2},children:[(0,n.jsx)(o.A,{sx:{marginBottom:4,fontSize:30,textAlign:"center"},children:"운동을 선택하세요!\uD83C\uDFC3‍♂️\uD83D\uDEB4‍♂️"}),(0,n.jsxs)(c,{container:!0,spacing:2,sx:{maxWidth:"100%",flexWrap:"nowrap",overflowX:"auto"},children:[(0,n.jsx)(c,{size:{xs:12,sm:6},sx:{flex:"1 1 0",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)(g.A,{sx:{textAlign:"center"},children:[(0,n.jsx)("a",{onClick:r=>{t("hiking"),e.push("/hiking/mountain-top-100")},children:(0,n.jsx)("img",{src:"/hiking_2.webp",alt:"Running Thumbnail",style:{width:"100%",maxWidth:"512px",height:"auto",maxHeight:"500px",borderRadius:"8px",cursor:"pointer"}})}),(0,n.jsx)(o.A,{variant:"subtitle1",sx:{marginTop:1},children:"Hiking"})]})}),(0,n.jsx)(c,{size:{xs:12,sm:6},sx:{flex:"1 1 0",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)(g.A,{sx:{textAlign:"center"},children:[(0,n.jsx)("a",{onClick:r=>{r.preventDefault(),t("cycling"),e.push("/cycling/competition")},children:(0,n.jsx)("img",{src:"/cycling_2.webp",alt:"Cycling Thumbnail",style:{width:"100%",maxWidth:"512px",height:"auto",maxHeight:"500px",borderRadius:"8px",cursor:"pointer"}})}),(0,n.jsx)(o.A,{variant:"subtitle1",sx:{marginTop:1},children:"Cycling"})]})})]}),(0,n.jsxs)(p.A,{open:s,onClose:l,sx:{"& .MuiDialog-paper":{borderRadius:"16px",padding:"20px",backgroundColor:"#f9f9f9",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.2)"}},children:[(0,n.jsx)(d.A,{children:(0,n.jsx)(o.A,{sx:{textAlign:"center",fontSize:"1.5rem"},children:"준비 중입니다! \uD83D\uDEA7"})}),(0,n.jsx)(f.A,{sx:{justifyContent:"center"},children:(0,n.jsx)(x.A,{onClick:l,variant:"contained",sx:{padding:"8px 16px",borderRadius:"8px",textTransform:"none",backgroundColor:"#f57c00",color:"#fff","&:hover":{backgroundColor:"#e65100"}},children:"닫기"})})]})]})}},8342:(e,r,t)=>{"use strict";t.d(r,{E:()=>s,S:()=>a});var n=t(5155),i=t(2115);let o=(0,i.createContext)(void 0);function s(e){let{children:r}=e,[t,s]=(0,i.useState)("home"),[a,l]=(0,i.useState)("한국어");return(0,i.useEffect)(()=>{{let e=window.location.pathname;if(e.split("/").length>1){let r=e.split("/")[1];"hiking"===r?s("hiking"):"cycling"===r?s("cycling"):s("home")}}},[]),(0,n.jsx)(o.Provider,{value:{sport:t,setSport:s,selectedLanguage:a,setSelectedLanguage:l},children:r})}function a(){let e=(0,i.useContext)(o);if(!e)throw Error("useSport 훅은 SportProvider 안에서만 사용 가능합니다.");return e}},8998:(e,r,t)=>{"use strict";t.d(r,{A:()=>g});var n=t(2115),i=t(3463),o=t(3166),s=t(1157),a=t(2611),l=t(6307),u=t(5155),c=t(2795),p=t(3717),d=t(6366);let f=(0,t(1045).A)("MuiBox",["root"]),x=(0,p.A)(),g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{themeId:r,defaultTheme:t,defaultClassName:c="MuiBox-root",generateClassName:p}=e,d=(0,o.Ay)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(s.A);return n.forwardRef(function(e,n){let o=(0,l.A)(t),{className:s,component:f="div",...x}=(0,a.A)(e);return(0,u.jsx)(d,{as:f,ref:n,className:(0,i.A)(s,p?p(c):c),theme:r&&o[r]||o,...x})})}({themeId:d.A,defaultTheme:x,defaultClassName:f.root,generateClassName:c.A.generate})},6123:(e,r,t)=>{"use strict";t.d(r,{A:()=>M});var n=t(2115),i=t(3463),o=t(4581),s=t(7157),a=t(7123),l=t(4577),u=t(4413),c=t(6307),p=t(2611),d=t(5212);let f=(e,r)=>e.filter(e=>r.includes(e)),x=(e,r,t)=>{let n=e.keys[0];Array.isArray(r)?r.forEach((r,n)=>{t((r,t)=>{n<=e.keys.length-1&&(0===n?Object.assign(r,t):r[e.up(e.keys[n])]=t)},r)}):r&&"object"==typeof r?(Object.keys(r).length>e.keys.length?e.keys:f(e.keys,Object.keys(r))).forEach(i=>{if(e.keys.includes(i)){let o=r[i];void 0!==o&&t((r,t)=>{n===i?Object.assign(r,t):r[e.up(i)]=t},o)}}):("number"==typeof r||"string"==typeof r)&&t((e,r)=>{Object.assign(e,r)},r)};function g(e){return`--Grid-${e}Spacing`}function h(e){return`--Grid-parent-${e}Spacing`}let m="--Grid-columns",v="--Grid-parent-columns",b=({theme:e,ownerState:r})=>{let t={};return x(e.breakpoints,r.size,(e,r)=>{let n={};"grow"===r&&(n={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===r&&(n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof r&&(n={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${r} / var(${v}) - (var(${v}) - ${r}) * (var(${h("column")}) / var(${v})))`}),e(t,n)}),t},y=({theme:e,ownerState:r})=>{let t={};return x(e.breakpoints,r.offset,(e,r)=>{let n={};"auto"===r&&(n={marginLeft:"auto"}),"number"==typeof r&&(n={marginLeft:0===r?"0px":`calc(100% * ${r} / var(${v}) + var(${h("column")}) * ${r} / var(${v}))`}),e(t,n)}),t},A=({theme:e,ownerState:r})=>{if(!r.container)return{};let t={[m]:12};return x(e.breakpoints,r.columns,(e,r)=>{let n=r??12;e(t,{[m]:n,"> *":{[v]:n}})}),t},k=({theme:e,ownerState:r})=>{if(!r.container)return{};let t={};return x(e.breakpoints,r.rowSpacing,(r,n)=>{let i="string"==typeof n?n:e.spacing?.(n);r(t,{[g("row")]:i,"> *":{[h("row")]:i}})}),t},j=({theme:e,ownerState:r})=>{if(!r.container)return{};let t={};return x(e.breakpoints,r.columnSpacing,(r,n)=>{let i="string"==typeof n?n:e.spacing?.(n);r(t,{[g("column")]:i,"> *":{[h("column")]:i}})}),t},w=({theme:e,ownerState:r})=>{if(!r.container)return{};let t={};return x(e.breakpoints,r.direction,(e,r)=>{e(t,{flexDirection:r})}),t},S=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},gap:`var(${g("row")}) var(${g("column")})`}}),$=e=>{let r=[];return Object.entries(e).forEach(([e,t])=>{!1!==t&&void 0!==t&&r.push(`grid-${e}-${String(t)}`)}),r},C=(e,r="xs")=>{function t(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(t(e))return[`spacing-${r}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let r=[];return Object.entries(e).forEach(([e,n])=>{t(n)&&r.push(`spacing-${e}-${String(n)}`)}),r}return[]},E=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,r])=>`direction-${e}-${r}`):[`direction-xs-${String(e)}`];var G=t(5155);let R=(0,d.A)(),N=(0,l.A)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>r.root});function D(e){return(0,u.A)({props:e,name:"MuiGrid",defaultTheme:R})}function M(e={}){let{createStyledComponent:r=N,useThemeProps:t=D,useTheme:l=c.A,componentName:u="MuiGrid"}=e,d=(e,r)=>{let{container:t,direction:n,spacing:i,wrap:o,size:l}=e,c={root:["root",t&&"container","wrap"!==o&&`wrap-xs-${String(o)}`,...E(n),...$(l),...t?C(i,r.breakpoints.keys[0]):[]]};return(0,a.A)(c,e=>(0,s.Ay)(u,e),{})};function f(e,r,t=()=>!0){let n={};return null===e||(Array.isArray(e)?e.forEach((e,i)=>{null!==e&&t(e)&&r.keys[i]&&(n[r.keys[i]]=e)}):"object"==typeof e?Object.keys(e).forEach(r=>{let i=e[r];null!=i&&t(i)&&(n[r]=i)}):n[r.keys[0]]=e),n}let x=r(A,j,k,b,w,S,y),g=n.forwardRef(function(e,r){let s=l(),a=t(e),u=(0,p.A)(a),{className:c,children:g,columns:h=12,container:m=!1,component:v="div",direction:b="row",wrap:y="wrap",size:A={},offset:k={},spacing:j=0,rowSpacing:w=j,columnSpacing:S=j,unstable_level:$=0,...C}=u,E=f(A,s.breakpoints,e=>!1!==e),R=f(k,s.breakpoints),N=e.columns??($?void 0:h),D=e.spacing??($?void 0:j),M=e.rowSpacing??e.spacing??($?void 0:w),O=e.columnSpacing??e.spacing??($?void 0:S),_={...u,level:$,columns:N,container:m,direction:b,wrap:y,spacing:D,rowSpacing:M,columnSpacing:O,size:E,offset:R},T=d(_,s);return(0,G.jsx)(x,{ref:r,as:v,ownerState:_,className:(0,i.A)(T.root,c),...C,children:n.Children.map(g,e=>n.isValidElement(e)&&(0,o.A)(e,["Grid"])&&m&&e.props.container?n.cloneElement(e,{unstable_level:e.props?.unstable_level??$+1}):e)})});return g.muiName="Grid",g}},293:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});var n,i=t(2115);let o=0,s={...n||(n=t.t(i,2))}.useId;function a(e){if(void 0!==s){let r=s();return null!=e?e:r}return function(e){let[r,t]=i.useState(e),n=e||r;return i.useEffect(()=>{null==r&&(o+=1,t("mui-".concat(o)))},[r]),n}(e)}},6046:(e,r,t)=>{"use strict";var n=t(6658);t.o(n,"useRouter")&&t.d(r,{useRouter:function(){return n.useRouter}}),t.o(n,"useServerInsertedHTML")&&t.d(r,{useServerInsertedHTML:function(){return n.useServerInsertedHTML}})}},e=>{var r=r=>e(e.s=r);e.O(0,[277,282,578,363,547,441,517,358],()=>r(6247)),_N_E=e.O()}]);