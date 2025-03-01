(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8362:(e,t,r)=>{Promise.resolve().then(r.bind(r,278))},278:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ex});var n=r(5155),i=r(2115),o=r(9561),a=r(3463),l=r(4581),s=r(7157),c=r(7123),p=r(4577),u=r(4413),d=r(6307),m=r(2611),g=r(5212);let x=(e,t)=>e.filter(e=>t.includes(e)),f=(e,t,r)=>{let n=e.keys[0];Array.isArray(t)?t.forEach((t,n)=>{r((t,r)=>{n<=e.keys.length-1&&(0===n?Object.assign(t,r):t[e.up(e.keys[n])]=r)},t)}):t&&"object"==typeof t?(Object.keys(t).length>e.keys.length?e.keys:x(e.keys,Object.keys(t))).forEach(i=>{if(e.keys.includes(i)){let o=t[i];void 0!==o&&r((t,r)=>{n===i?Object.assign(t,r):t[e.up(i)]=r},o)}}):("number"==typeof t||"string"==typeof t)&&r((e,t)=>{Object.assign(e,t)},t)};function h(e){return`--Grid-${e}Spacing`}function y(e){return`--Grid-parent-${e}Spacing`}let v="--Grid-columns",b="--Grid-parent-columns",A=({theme:e,ownerState:t})=>{let r={};return f(e.breakpoints,t.size,(e,t)=>{let n={};"grow"===t&&(n={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===t&&(n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof t&&(n={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${t} / var(${b}) - (var(${b}) - ${t}) * (var(${y("column")}) / var(${b})))`}),e(r,n)}),r},k=({theme:e,ownerState:t})=>{let r={};return f(e.breakpoints,t.offset,(e,t)=>{let n={};"auto"===t&&(n={marginLeft:"auto"}),"number"==typeof t&&(n={marginLeft:0===t?"0px":`calc(100% * ${t} / var(${b}) + var(${y("column")}) * ${t} / var(${b}))`}),e(r,n)}),r},w=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={[v]:12};return f(e.breakpoints,t.columns,(e,t)=>{let n=t??12;e(r,{[v]:n,"> *":{[b]:n}})}),r},S=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return f(e.breakpoints,t.rowSpacing,(t,n)=>{let i="string"==typeof n?n:e.spacing?.(n);t(r,{[h("row")]:i,"> *":{[y("row")]:i}})}),r},j=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return f(e.breakpoints,t.columnSpacing,(t,n)=>{let i="string"==typeof n?n:e.spacing?.(n);t(r,{[h("column")]:i,"> *":{[y("column")]:i}})}),r},C=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return f(e.breakpoints,t.direction,(e,t)=>{e(r,{flexDirection:t})}),r},M=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},gap:`var(${h("row")}) var(${h("column")})`}}),D=e=>{let t=[];return Object.entries(e).forEach(([e,r])=>{!1!==r&&void 0!==r&&t.push(`grid-${e}-${String(r)}`)}),t},W=(e,t="xs")=>{function r(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(r(e))return[`spacing-${t}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let t=[];return Object.entries(e).forEach(([e,n])=>{r(n)&&t.push(`spacing-${e}-${String(n)}`)}),t}return[]},I=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,t])=>`direction-${e}-${t}`):[`direction-xs-${String(e)}`],R=(0,g.A)(),E=(0,p.A)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function $(e){return(0,u.A)({props:e,name:"MuiGrid",defaultTheme:R})}var N=r(9142),G=r(2567),O=r(5761);let T=function(e={}){let{createStyledComponent:t=E,useThemeProps:r=$,useTheme:o=d.A,componentName:p="MuiGrid"}=e,u=(e,t)=>{let{container:r,direction:n,spacing:i,wrap:o,size:a}=e,l={root:["root",r&&"container","wrap"!==o&&`wrap-xs-${String(o)}`,...I(n),...D(a),...r?W(i,t.breakpoints.keys[0]):[]]};return(0,c.A)(l,e=>(0,s.Ay)(p,e),{})};function g(e,t,r=()=>!0){let n={};return null===e||(Array.isArray(e)?e.forEach((e,i)=>{null!==e&&r(e)&&t.keys[i]&&(n[t.keys[i]]=e)}):"object"==typeof e?Object.keys(e).forEach(t=>{let i=e[t];null!=i&&r(i)&&(n[t]=i)}):n[t.keys[0]]=e),n}let x=t(w,j,S,A,C,M,k),f=i.forwardRef(function(e,t){let s=o(),c=r(e),p=(0,m.A)(c),{className:d,children:f,columns:h=12,container:y=!1,component:v="div",direction:b="row",wrap:A="wrap",size:k={},offset:w={},spacing:S=0,rowSpacing:j=S,columnSpacing:C=S,unstable_level:M=0,...D}=p,W=g(k,s.breakpoints,e=>!1!==e),I=g(w,s.breakpoints),R=e.columns??(M?void 0:h),E=e.spacing??(M?void 0:S),$=e.rowSpacing??e.spacing??(M?void 0:j),N=e.columnSpacing??e.spacing??(M?void 0:C),G={...p,level:M,columns:R,container:y,direction:b,wrap:A,spacing:E,rowSpacing:$,columnSpacing:N,size:W,offset:I},O=u(G,s);return(0,n.jsx)(x,{ref:t,as:v,ownerState:G,className:(0,a.A)(O.root,d),...D,children:i.Children.map(f,e=>i.isValidElement(e)&&(0,l.A)(e,["Grid"])&&y&&e.props.container?i.cloneElement(e,{unstable_level:e.props?.unstable_level??M+1}):e)})});return f.muiName="Grid",f}({createStyledComponent:(0,N.Ay)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.container&&t.container]}}),componentName:"MuiGrid2",useThemeProps:e=>(0,G.b)({props:e,name:"MuiGrid2"}),useTheme:O.A});var _=r(293),z=r(7410),P=r(6398),B=r(9883),H=r(8562),F=r(1045);function J(e){return(0,s.Ay)("MuiDialog",e)}let L=(0,F.A)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),X=i.createContext({});var V=r(4522),Y=r(8330);let Q=(0,N.Ay)(V.A,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),K=e=>{let{classes:t,scroll:r,maxWidth:n,fullWidth:i,fullScreen:o}=e,a={root:["root"],container:["container","scroll".concat((0,z.A)(r))],paper:["paper","paperScroll".concat((0,z.A)(r)),"paperWidth".concat((0,z.A)(String(n))),i&&"paperFullWidth",o&&"paperFullScreen"]};return(0,c.A)(a,J,t)},U=(0,N.Ay)(P.A,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),Z=(0,N.Ay)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.container,t["scroll".concat((0,z.A)(r.scroll))]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),q=(0,N.Ay)(H.A,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.paper,t["scrollPaper".concat((0,z.A)(r.scroll))],t["paperWidth".concat((0,z.A)(String(r.maxWidth)))],r.fullWidth&&t.paperFullWidth,r.fullScreen&&t.paperFullScreen]}})((0,Y.A)(e=>{let{theme:t}=e;return{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:e=>{let{ownerState:t}=e;return!t.maxWidth},style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:"px"===t.breakpoints.unit?Math.max(t.breakpoints.values.xs,444):"max(".concat(t.breakpoints.values.xs).concat(t.breakpoints.unit,", 444px)"),["&.".concat(L.paperScrollBody)]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(t.breakpoints.values).filter(e=>"xs"!==e).map(e=>({props:{maxWidth:e},style:{maxWidth:"".concat(t.breakpoints.values[e]).concat(t.breakpoints.unit),["&.".concat(L.paperScrollBody)]:{[t.breakpoints.down(t.breakpoints.values[e]+64)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:e=>{let{ownerState:t}=e;return t.fullWidth},style:{width:"calc(100% - 64px)"}},{props:e=>{let{ownerState:t}=e;return t.fullScreen},style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,["&.".concat(L.paperScrollBody)]:{margin:0,maxWidth:"100%"}}}]}})),ee=i.forwardRef(function(e,t){let r=(0,G.b)({props:e,name:"MuiDialog"}),o=(0,O.A)(),l={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{"aria-describedby":s,"aria-labelledby":c,"aria-modal":p=!0,BackdropComponent:u,BackdropProps:d,children:m,className:g,disableEscapeKeyDown:x=!1,fullScreen:f=!1,fullWidth:h=!1,maxWidth:y="sm",onBackdropClick:v,onClick:b,onClose:A,open:k,PaperComponent:w=H.A,PaperProps:S={},scroll:j="paper",TransitionComponent:C=B.A,transitionDuration:M=l,TransitionProps:D,...W}=r,I={...r,disableEscapeKeyDown:x,fullScreen:f,fullWidth:h,maxWidth:y,scroll:j},R=K(I),E=i.useRef(),$=(0,_.A)(c),N=i.useMemo(()=>({titleId:$}),[$]);return(0,n.jsx)(U,{className:(0,a.A)(R.root,g),closeAfterTransition:!0,components:{Backdrop:Q},componentsProps:{backdrop:{transitionDuration:M,as:u,...d}},disableEscapeKeyDown:x,onClose:A,open:k,ref:t,onClick:e=>{b&&b(e),E.current&&(E.current=null,v&&v(e),A&&A(e,"backdropClick"))},ownerState:I,...W,children:(0,n.jsx)(C,{appear:!0,in:k,timeout:M,role:"presentation",...D,children:(0,n.jsx)(Z,{className:(0,a.A)(R.container),onMouseDown:e=>{E.current=e.target===e.currentTarget},ownerState:I,children:(0,n.jsx)(q,{as:w,elevation:24,role:"dialog","aria-describedby":s,"aria-labelledby":$,"aria-modal":p,...S,className:(0,a.A)(R.paper,S.className),ownerState:I,children:(0,n.jsx)(X.Provider,{value:N,children:m})})})})})});function et(e){return(0,s.Ay)("MuiDialogContent",e)}(0,F.A)("MuiDialogContent",["root","dividers"]);let er=(0,F.A)("MuiDialogTitle",["root"]),en=e=>{let{classes:t,dividers:r}=e;return(0,c.A)({root:["root",r&&"dividers"]},et,t)},ei=(0,N.Ay)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.dividers&&t.dividers]}})((0,Y.A)(e=>{let{theme:t}=e;return{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:e=>{let{ownerState:t}=e;return t.dividers},style:{padding:"16px 24px",borderTop:"1px solid ".concat((t.vars||t).palette.divider),borderBottom:"1px solid ".concat((t.vars||t).palette.divider)}},{props:e=>{let{ownerState:t}=e;return!t.dividers},style:{[".".concat(er.root," + &")]:{paddingTop:0}}}]}})),eo=i.forwardRef(function(e,t){let r=(0,G.b)({props:e,name:"MuiDialogContent"}),{className:i,dividers:o=!1,...l}=r,s={...r,dividers:o},c=en(s);return(0,n.jsx)(ei,{className:(0,a.A)(c.root,i),ownerState:s,ref:t,...l})});function ea(e){return(0,s.Ay)("MuiDialogActions",e)}(0,F.A)("MuiDialogActions",["root","spacing"]);let el=e=>{let{classes:t,disableSpacing:r}=e;return(0,c.A)({root:["root",!r&&"spacing"]},ea,t)},es=(0,N.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:e=>{let{ownerState:t}=e;return!t.disableSpacing},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),ec=i.forwardRef(function(e,t){let r=(0,G.b)({props:e,name:"MuiDialogActions"}),{className:i,disableSpacing:o=!1,...l}=r,s={...r,disableSpacing:o},c=el(s);return(0,n.jsx)(es,{className:(0,a.A)(c.root,i),ownerState:s,ref:t,...l})});var ep=r(2282),eu=r(8998),ed=r(8342),em=r(6046),eg=r(1046);let ex=()=>{let e=(0,em.useRouter)(),{sport:t,setSport:r,selectedLanguage:a,setSelectedLanguage:l}=(0,ed.S)(),[s,c]=(0,i.useState)(!1),p=t=>{t.preventDefault(),(0,eg.sendGTMEvent)({event:"home_hiking_click",category:"competition",action:"toggle",label:"hiking"}),r("hiking"),e.push("/hiking/mountain-top-100")},u=t=>{t.preventDefault(),(0,eg.sendGTMEvent)({event:"home_cycle_click",category:"competition",action:"toggle",label:"cycle"}),r("cycling"),e.push("/cycling/competition")},d=()=>{c(!1)};return(0,n.jsxs)(eu.A,{sx:{padding:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:2},children:[(0,n.jsxs)(o.A,{sx:{marginBottom:4,fontSize:30,textAlign:"center"},children:["한국어"===a?"운동을 선택하세요!":"Choose your workout!","\uD83C\uDFC3‍♂️\uD83D\uDEB4‍♂️"]}),(0,n.jsxs)(T,{container:!0,spacing:2,sx:{maxWidth:"100%",flexWrap:"nowrap",overflowX:"auto"},children:[(0,n.jsx)(T,{size:{xs:12,sm:6},sx:{flex:"1 1 0",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)(eu.A,{sx:{textAlign:"center"},children:[(0,n.jsx)("a",{href:"/hiking/mountain-top-100",onClick:p,children:(0,n.jsx)("img",{src:"https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/hiking_2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJncmFwaHkvaGlraW5nXzIud2VicCIsImlhdCI6MTc0MDg0MzEzMCwiZXhwIjoxNzcyMzc5MTMwfQ.eEFAeVDD0SHuAKiwWkddPfY0ZQgBlanr2L6QK0_2sbw",alt:"Running Thumbnail",style:{width:"100%",maxWidth:"512px",height:"auto",maxHeight:"500px",borderRadius:"8px",cursor:"pointer"}})}),(0,n.jsx)(o.A,{variant:"subtitle1",sx:{marginTop:1},onClick:p,children:"한국어"===a?"등산":"Hiking"})]})}),(0,n.jsx)(T,{size:{xs:12,sm:6},sx:{flex:"1 1 0",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)(eu.A,{sx:{textAlign:"center"},children:[(0,n.jsx)("a",{href:"/cycling/competition",onClick:u,children:(0,n.jsx)("img",{src:"https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/cycling_2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJncmFwaHkvY3ljbGluZ18yLndlYnAiLCJpYXQiOjE3NDA4NDI5ODAsImV4cCI6MTc3MjM3ODk4MH0.Ixh6drF3ag3Uf3rV2_BavHH01l1nbAWGEmQ4i9O71Qk",alt:"Cycling Thumbnail",style:{width:"100%",maxWidth:"512px",height:"auto",maxHeight:"500px",borderRadius:"8px",cursor:"pointer"}})}),(0,n.jsx)(o.A,{variant:"subtitle1",sx:{marginTop:1},onClick:u,children:"한국어"===a?"싸이클":"Cycling"})]})})]}),(0,n.jsxs)(eu.A,{sx:{marginTop:"100px"},children:["Contact ",(0,n.jsx)("a",{className:"cursor-pointer text-blue-500",href:"mailto:grapheople@gmail.com",children:"grapheople@gmail.com"})]}),(0,n.jsxs)(ee,{open:s,onClose:d,sx:{"& .MuiDialog-paper":{borderRadius:"16px",padding:"20px",backgroundColor:"#f9f9f9",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.2)"}},children:[(0,n.jsx)(eo,{children:(0,n.jsx)(o.A,{sx:{textAlign:"center",fontSize:"1.5rem"},children:"준비 중입니다! \uD83D\uDEA7"})}),(0,n.jsx)(ec,{sx:{justifyContent:"center"},children:(0,n.jsx)(ep.A,{onClick:d,variant:"contained",sx:{padding:"8px 16px",borderRadius:"8px",textTransform:"none",backgroundColor:"#f57c00",color:"#fff","&:hover":{backgroundColor:"#e65100"}},children:"닫기"})})]})]})}},8342:(e,t,r)=>{"use strict";r.d(t,{E:()=>a,S:()=>l});var n=r(5155),i=r(2115);let o=(0,i.createContext)(void 0);function a(e){let{children:t}=e,[r,a]=(0,i.useState)("home"),[l,s]=(0,i.useState)("한국어");return(0,i.useEffect)(()=>{{let e=window.location.pathname;if(e.split("/").length>1){let t=e.split("/")[1];"hiking"===t?a("hiking"):"cycling"===t?a("cycling"):a("home")}}},[]),(0,n.jsx)(o.Provider,{value:{sport:r,setSport:a,selectedLanguage:l,setSelectedLanguage:s},children:t})}function l(){let e=(0,i.useContext)(o);if(!e)throw Error("useSport 훅은 SportProvider 안에서만 사용 가능합니다.");return e}},4577:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(9225).Ay)()},2326:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(4151);function i(e){let{theme:t,name:r,props:i}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?(0,n.A)(t.components[r].defaultProps,i):i}},4413:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(2326),i=r(6307);function o(e){let{props:t,name:r,defaultTheme:o,themeId:a}=e,l=(0,i.A)(o);return a&&(l=l[a]||l),(0,n.A)({theme:l,name:r,props:t})}},4581:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(2115);function i(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName??e.type?._payload?.value?.muiName)}},293:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n,i=r(2115);let o=0,a={...n||(n=r.t(i,2))}.useId;function l(e){if(void 0!==a){let t=a();return null!=e?e:t}return function(e){let[t,r]=i.useState(e),n=e||t;return i.useEffect(()=>{null==t&&(o+=1,r("mui-".concat(o)))},[t]),n}(e)}},6046:(e,t,r)=>{"use strict";var n=r(6658);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useServerInsertedHTML")&&r.d(t,{useServerInsertedHTML:function(){return n.useServerInsertedHTML}})}},e=>{var t=t=>e(e.s=t);e.O(0,[673,398,441,517,358],()=>t(8362)),_N_E=e.O()}]);