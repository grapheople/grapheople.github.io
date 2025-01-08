"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{8998:(e,t,r)=>{r.d(t,{A:()=>m});var n=r(2115),o=r(3463),a=r(3166),i=r(1157),l=r(2611),s=r(6307),d=r(5155),c=r(2795),u=r(3717),p=r(6366);let f=(0,r(1045).A)("MuiBox",["root"]),g=(0,u.A)(),m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{themeId:t,defaultTheme:r,defaultClassName:c="MuiBox-root",generateClassName:u}=e,p=(0,a.Ay)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(i.A);return n.forwardRef(function(e,n){let a=(0,s.A)(r),{className:i,component:f="div",...g}=(0,l.A)(e);return(0,d.jsx)(p,{as:f,ref:n,className:(0,o.A)(i,u?u(c):c),theme:t&&a[t]||a,...g})})}({themeId:p.A,defaultTheme:g,defaultClassName:f.root,generateClassName:c.A.generate})},4156:(e,t,r)=>{r.d(t,{A:()=>h});var n=r(2115),o=r(3463),a=r(7123),i=r(7280),l=r(9142),s=r(8330),d=r(2567),c=r(1045),u=r(7157);function p(e){return(0,u.Ay)("MuiDivider",e)}(0,c.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var f=r(5155);let g=e=>{let{absolute:t,children:r,classes:n,flexItem:o,light:i,orientation:l,textAlign:s,variant:d}=e;return(0,a.A)({root:["root",t&&"absolute",d,i&&"light","vertical"===l&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===l&&"withChildrenVertical","right"===s&&"vertical"!==l&&"textAlignRight","left"===s&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]},p,n)},m=(0,l.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((0,s.A)(e=>{let{theme:t}=e;return{margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,i.X4)(t.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:t.spacing(1),marginBottom:t.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:e=>{let{ownerState:t}=e;return!!t.children},style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:e=>{let{ownerState:t}=e;return t.children&&"vertical"!==t.orientation},style:{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider),borderTopStyle:"inherit"}}},{props:e=>{let{ownerState:t}=e;return"vertical"===t.orientation&&t.children},style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider),borderLeftStyle:"inherit"}}},{props:e=>{let{ownerState:t}=e;return"right"===t.textAlign&&"vertical"!==t.orientation},style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:e=>{let{ownerState:t}=e;return"left"===t.textAlign&&"vertical"!==t.orientation},style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}})),y=(0,l.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((0,s.A)(e=>{let{theme:t}=e;return{display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)"),whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")}}]}})),b=n.forwardRef(function(e,t){let r=(0,d.b)({props:e,name:"MuiDivider"}),{absolute:n=!1,children:a,className:i,orientation:l="horizontal",component:s=a||"vertical"===l?"div":"hr",flexItem:c=!1,light:u=!1,role:p="hr"!==s?"separator":void 0,textAlign:b="center",variant:h="fullWidth",...v}=r,w={...r,absolute:n,component:s,flexItem:c,light:u,orientation:l,role:p,textAlign:b,variant:h},_=g(w);return(0,f.jsx)(m,{as:s,className:(0,o.A)(_.root,i),role:p,ref:t,ownerState:w,"aria-orientation":"separator"===p&&("hr"!==s||"vertical"===l)?l:void 0,...v,children:a?(0,f.jsx)(y,{className:_.wrapper,ownerState:w,children:a}):null})});b&&(b.muiSkipListHighlight=!0);let h=b},1983:(e,t,r)=>{r.d(t,{Ay:()=>O});var n=r(2115),o=r(3463),a=r(7123),i=r(4877),l=r(9142),s=r(8330),d=r(2567),c=r(5579),u=r(9328),p=r(2762),f=r(1045),g=r(7157);function m(e){return(0,g.Ay)("MuiListItem",e)}(0,f.A)("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);var y=r(139);function b(e){return(0,g.Ay)("MuiListItemSecondaryAction",e)}(0,f.A)("MuiListItemSecondaryAction",["root","disableGutters"]);var h=r(5155);let v=e=>{let{disableGutters:t,classes:r}=e;return(0,a.A)({root:["root",t&&"disableGutters"]},b,r)},w=(0,l.Ay)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:e=>{let{ownerState:t}=e;return t.disableGutters},style:{right:0}}]}),_=n.forwardRef(function(e,t){let r=(0,d.b)({props:e,name:"MuiListItemSecondaryAction"}),{className:a,...i}=r,l=n.useContext(p.A),s={...r,disableGutters:l.disableGutters},c=v(s);return(0,h.jsx)(w,{className:(0,o.A)(c.root,a),ownerState:s,ref:t,...i})});_.muiName="ListItemSecondaryAction";let A=e=>{let{alignItems:t,classes:r,dense:n,disableGutters:o,disablePadding:i,divider:l,hasSecondaryAction:s}=e;return(0,a.A)({root:["root",n&&"dense",!o&&"gutters",!i&&"padding",l&&"divider","flex-start"===t&&"alignItemsFlexStart",s&&"secondaryAction"],container:["container"]},m,r)},x=(0,l.Ay)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.dense&&t.dense,"flex-start"===r.alignItems&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters,!r.disablePadding&&t.padding,r.hasSecondaryAction&&t.secondaryAction]}})((0,s.A)(e=>{let{theme:t}=e;return{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:e=>{let{ownerState:t}=e;return!t.disablePadding},style:{paddingTop:8,paddingBottom:8}},{props:e=>{let{ownerState:t}=e;return!t.disablePadding&&t.dense},style:{paddingTop:4,paddingBottom:4}},{props:e=>{let{ownerState:t}=e;return!t.disablePadding&&!t.disableGutters},style:{paddingLeft:16,paddingRight:16}},{props:e=>{let{ownerState:t}=e;return!t.disablePadding&&!!t.secondaryAction},style:{paddingRight:48}},{props:e=>{let{ownerState:t}=e;return!!t.secondaryAction},style:{["& > .".concat(y.A.root)]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:e=>{let{ownerState:t}=e;return t.divider},style:{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"}},{props:e=>{let{ownerState:t}=e;return t.button},style:{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:e=>{let{ownerState:t}=e;return t.hasSecondaryAction},style:{paddingRight:48}}]}})),j=(0,l.Ay)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),O=n.forwardRef(function(e,t){let r=(0,d.b)({props:e,name:"MuiListItem"}),{alignItems:a="center",children:l,className:s,component:f,components:g={},componentsProps:m={},ContainerComponent:y="li",ContainerProps:{className:b,...v}={},dense:w=!1,disableGutters:O=!1,disablePadding:M=!1,divider:I=!1,secondaryAction:S,slotProps:P={},slots:L={},...E}=r,T=n.useContext(p.A),G=n.useMemo(()=>({dense:w||T.dense||!1,alignItems:a,disableGutters:O}),[a,T.dense,w,O]),k=n.useRef(null),C=n.Children.toArray(l),R=C.length&&(0,c.A)(C[C.length-1],["ListItemSecondaryAction"]),N={...r,alignItems:a,dense:G.dense,disableGutters:O,disablePadding:M,divider:I,hasSecondaryAction:R},D=A(N),H=(0,u.A)(k,t),B=L.root||g.Root||x,Y=P.root||m.root||{},q={className:(0,o.A)(D.root,Y.className,s),...E},F=f||"li";return R?(F=q.component||f?F:"div","li"===y&&("li"===F?F="div":"li"===q.component&&(q.component="div")),(0,h.jsx)(p.A.Provider,{value:G,children:(0,h.jsxs)(j,{as:y,className:(0,o.A)(D.container,b),ref:H,ownerState:N,...v,children:[(0,h.jsx)(B,{...Y,...!(0,i.A)(B)&&{as:F,ownerState:{...N,...Y.ownerState}},...q,children:C}),C.pop()]})})):(0,h.jsx)(p.A.Provider,{value:G,children:(0,h.jsxs)(B,{...Y,as:F,ref:H,...!(0,i.A)(B)&&{ownerState:{...N,...Y.ownerState}},...q,children:[C,S&&(0,h.jsx)(_,{children:S})]})})})},139:(e,t,r)=>{r.d(t,{A:()=>i,Y:()=>a});var n=r(1045),o=r(7157);function a(e){return(0,o.Ay)("MuiListItemButton",e)}let i=(0,n.A)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"])},2738:(e,t,r)=>{r.d(t,{A:()=>h});var n=r(2115),o=r(3463),a=r(7123),i=r(9251),l=r(9561),s=r(2762),d=r(9142),c=r(2567),u=r(1045),p=r(7157);function f(e){return(0,p.Ay)("MuiListItemText",e)}let g=(0,u.A)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var m=r(5155);let y=e=>{let{classes:t,inset:r,primary:n,secondary:o,dense:i}=e;return(0,a.A)({root:["root",r&&"inset",i&&"dense",n&&o&&"multiline"],primary:["primary"],secondary:["secondary"]},f,t)},b=(0,d.Ay)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[{["& .".concat(g.primary)]:t.primary},{["& .".concat(g.secondary)]:t.secondary},t.root,r.inset&&t.inset,r.primary&&r.secondary&&t.multiline,r.dense&&t.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[".".concat(i.A.root,":where(& .").concat(g.primary,")")]:{display:"block"},[".".concat(i.A.root,":where(& .").concat(g.secondary,")")]:{display:"block"},variants:[{props:e=>{let{ownerState:t}=e;return t.primary&&t.secondary},style:{marginTop:6,marginBottom:6}},{props:e=>{let{ownerState:t}=e;return t.inset},style:{paddingLeft:56}}]}),h=n.forwardRef(function(e,t){let r=(0,c.b)({props:e,name:"MuiListItemText"}),{children:a,className:i,disableTypography:d=!1,inset:u=!1,primary:p,primaryTypographyProps:f,secondary:g,secondaryTypographyProps:h,...v}=r,{dense:w}=n.useContext(s.A),_=null!=p?p:a,A=g,x={...r,disableTypography:d,inset:u,primary:!!_,secondary:!!A,dense:w},j=y(x);return null==_||_.type===l.A||d||(_=(0,m.jsx)(l.A,{variant:w?"body2":"body1",className:j.primary,component:(null==f?void 0:f.variant)?void 0:"span",...f,children:_})),null==A||A.type===l.A||d||(A=(0,m.jsx)(l.A,{variant:"body2",className:j.secondary,color:"textSecondary",...h,children:A})),(0,m.jsxs)(b,{className:(0,o.A)(j.root,i),ownerState:x,ref:t,...v,children:[_,A]})})},3479:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{html:t,height:r=null,width:a=null,children:i,dataNtpc:l=""}=e;return(0,o.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(l)}})},[l]),(0,n.jsxs)(n.Fragment,{children:[i,t?(0,n.jsx)("div",{style:{height:null!=r?"".concat(r,"px"):"auto",width:null!=a?"".concat(a,"px"):"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:t}}):null]})};let n=r(5155),o=r(2115)},766:(e,t,r)=>{let n;Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=function(e){let{gaId:t,debugMode:r,dataLayerName:l="dataLayer",nonce:s}=e;return void 0===n&&(n=l),(0,a.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(l,"'] = window['").concat(l,"'] || [];\n          function gtag(){window['").concat(l,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"' ").concat(r?",{ 'debug_mode': true }":"",");")},nonce:s}),(0,o.jsx)(i.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t),nonce:s})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(void 0===n){console.warn("@next/third-parties: GA has not been initialized");return}window[n]?window[n].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(n," does not exist"))};let o=r(5155),a=r(2115),i=function(e){return e&&e.__esModule?e:{default:e}}(r(6584))},8239:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{apiKey:t,...r}=e,n={...r,key:t},{html:l}=(0,a.GoogleMapsEmbed)(n);return(0,o.jsx)(i.default,{height:n.height||null,width:n.width||null,html:l,dataNtpc:"GoogleMapsEmbed"})};let o=r(5155),a=r(7949),i=n(r(3479))},96:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=void 0,t.GoogleTagManager=function(e){let{gtmId:t,gtmScriptUrl:r="https://www.googletagmanager.com/gtm.js",dataLayerName:l="dataLayer",auth:s,preview:d,dataLayer:c,nonce:u}=e;i=l;let p="dataLayer"!==l?"&l=".concat(l):"";return(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(c?"w[l].push(".concat(JSON.stringify(c),")"):"","\n      })(window,'").concat(l,"');")},nonce:u}),(0,n.jsx)(a.default,{id:"_next-gtm","data-ntpc":"GTM",src:"".concat(r,"?id=").concat(t).concat(p).concat(s?"&gtm_auth=".concat(s):"").concat(d?"&gtm_preview=".concat(d,"&gtm_cookies_win=x"):""),nonce:u})]})};let n=r(5155),o=r(2115),a=function(e){return e&&e.__esModule?e:{default:e}}(r(6584)),i="dataLayer";t.sendGTMEvent=(e,t)=>{let r=t||i;window[r]=window[r]||[],window[r].push(e)}},1046:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var o=r(8239);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return n(o).default}});var a=r(2175);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return n(a).default}});var i=r(96);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return i.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return i.sendGTMEvent}});var l=r(766);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return l.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return l.sendGAEvent}})},2175:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{html:t,scripts:r,stylesheets:n}=(0,i.YouTubeEmbed)(e);return(0,o.jsx)(l.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==r?void 0:r.map(e=>(0,o.jsx)(a.default,{src:e.url,strategy:s[e.strategy],stylesheets:n},e.url))})};let o=r(5155),a=n(r(6584)),i=r(7949),l=n(r(3479)),s={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"}},6584:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o.a});var n=r(3704),o=r.n(n),a={};for(let e in n)"default"!==e&&(a[e]=()=>n[e]);r.d(t,a)},8571:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3704:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return y}});let n=r(306),o=r(9955),a=r(5155),i=n._(r(7650)),l=o._(r(2115)),s=r(1147),d=r(2815),c=r(8571),u=new Map,p=new Set,f=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},g=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:i="",strategy:l="afterInteractive",onError:s,stylesheets:c}=e,g=r||t;if(g&&p.has(g))return;if(u.has(t)){p.add(g),u.get(t).then(n,s);return}let m=()=>{o&&o(),p.add(g)},y=document.createElement("script"),b=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),n&&n.call(this,t),m()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});a?(y.innerHTML=a.__html||"",m()):i?(y.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",m()):t&&(y.src=t,u.set(t,b)),(0,d.setAttributesFromProps)(y,e),"worker"===l&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",l),c&&f(c),document.body.appendChild(y)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>g(e))}):g(e)}function y(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");p.add(t)})}function b(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:o=null,strategy:d="afterInteractive",onError:u,stylesheets:f,...m}=e,{updateScripts:y,scripts:b,getIsSsr:h,appDir:v,nonce:w}=(0,l.useContext)(s.HeadManagerContext),_=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||r;_.current||(o&&e&&p.has(e)&&o(),_.current=!0)},[o,t,r]);let A=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!A.current&&("afterInteractive"===d?g(e):"lazyOnload"===d&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>g(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>g(e))})),A.current=!0)},[e,d]),("beforeInteractive"===d||"worker"===d)&&(y?(b[d]=(b[d]||[]).concat([{id:t,src:r,onLoad:n,onReady:o,onError:u,...m}]),y(b)):h&&h()?p.add(t||r):h&&!h()&&g(e)),v){if(f&&f.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===d)return r?(i.default.preload(r,m.integrity?{as:"script",integrity:m.integrity,nonce:w,crossOrigin:m.crossOrigin}:{as:"script",nonce:w,crossOrigin:m.crossOrigin}),(0,a.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===d&&r&&i.default.preload(r,m.integrity?{as:"script",integrity:m.integrity,nonce:w,crossOrigin:m.crossOrigin}:{as:"script",nonce:w,crossOrigin:m.crossOrigin})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let h=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2815:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},n=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function o(e){return["async","defer","noModule"].includes(e)}function a(e,t){for(let[a,i]of Object.entries(t)){if(!t.hasOwnProperty(a)||n.includes(a)||void 0===i)continue;let l=r[a]||a.toLowerCase();"SCRIPT"===e.tagName&&o(l)?e[l]=!!i:e.setAttribute(l,String(i)),(!1===i||"SCRIPT"===e.tagName&&o(l)&&(!i||"false"===i))&&(e.setAttribute(l,""),e.removeAttribute(l))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7949:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var n=r(243);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return n.GoogleAnalytics}});var o=r(4440);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return o.GoogleMapsEmbed}});var a=r(9088);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return a.YouTubeEmbed}})},243:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let a=o(r(3817)),i=r(7151);t.GoogleAnalytics=e=>{var t=n(e,[]);return(0,i.formatData)(a.default,t)}},4440:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let a=o(r(6802)),i=r(7151);t.GoogleMapsEmbed=e=>{var t=n(e,[]);return(0,i.formatData)(a.default,t)}},9088:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let a=o(r(8246)),i=r(7151);t.YouTubeEmbed=e=>{var t=n(e,[]);return(0,i.formatData)(a.default,t)}},7151:(e,t)=>{function r(e,t,n=!1){return t?Object.keys(e).filter(e=>n?!t.includes(e):t.includes(e)).reduce((t,r)=>(t[r]=e[r],t),{}):{}}function n(e,t,r,n){let o=n&&Object.keys(n).length>0?new URL(Object.values(n)[0],e):new URL(e);return t&&r&&t.forEach(e=>{r[e]&&o.searchParams.set(e,r[e])}),o.toString()}function o(e,t,r,o,a){var i;if(!t)return`<${e}></${e}>`;let l=(null===(i=t.src)||void 0===i?void 0:i.url)?Object.assign(Object.assign({},t),{src:n(t.src.url,t.src.params,o,a)}):t,s=Object.keys(Object.assign(Object.assign({},l),r)).reduce((e,t)=>{let n=null==r?void 0:r[t],o=l[t],a=null!=n?n:o,i=!0===a?t:`${t}="${a}"`;return a?e+` ${i}`:e},"");return`<${e}${s}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=n,t.createHtml=o,t.formatData=function(e,t){var a,i,l,s,d;let c=r(t,null===(a=e.scripts)||void 0===a?void 0:a.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[])),u=r(t,null===(l=null===(i=e.html)||void 0===i?void 0:i.attributes.src)||void 0===l?void 0:l.params),p=r(t,[null===(d=null===(s=e.html)||void 0===s?void 0:s.attributes.src)||void 0===d?void 0:d.slugParam]),f=r(t,[...Object.keys(c),...Object.keys(u),...Object.keys(p)],!0);return Object.assign(Object.assign({},e),{html:e.html?o(e.html.element,e.html.attributes,f,u,p):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:n(e.url,e.params,c)})):null})}},3817:e=>{e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},6802:e=>{e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},8246:e=>{e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}}]);