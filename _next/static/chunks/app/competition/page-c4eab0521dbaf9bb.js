(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[806],{6544:(e,t,n)=>{Promise.resolve().then(n.bind(n,4012))},4012:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>el});var a=n(5155),r=n(2115),o=n(4918);n(5356);var l=n(3463),i=n(7123),s=n(9142),d=n(8330),c=n(2567),u=n(5542),p=n(1093),g=n(5761),m=n(5255),h=n(3444),x=n(9328),f=n(1045),y=n(7157);function v(e){return(0,y.Ay)("MuiCollapse",e)}(0,f.A)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);let A=e=>{let{orientation:t,classes:n}=e;return(0,i.A)({root:["root","".concat(t)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(t)],wrapperInner:["wrapperInner","".concat(t)]},v,n)},D=(0,s.Ay)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((0,d.A)(e=>{let{theme:t}=e;return{height:0,overflow:"hidden",transition:t.transitions.create("height"),variants:[{props:{orientation:"horizontal"},style:{height:"auto",width:0,transition:t.transitions.create("width")}},{props:{state:"entered"},style:{height:"auto",overflow:"visible"}},{props:{state:"entered",orientation:"horizontal"},style:{width:"auto"}},{props:e=>{let{ownerState:t}=e;return"exited"===t.state&&!t.in&&"0px"===t.collapsedSize},style:{visibility:"hidden"}}]}})),b=(0,s.Ay)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})({display:"flex",width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),S=(0,s.Ay)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})({width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),w=r.forwardRef(function(e,t){let n=(0,c.b)({props:e,name:"MuiCollapse"}),{addEndListener:o,children:i,className:s,collapsedSize:d="0px",component:f,easing:y,in:v,onEnter:w,onEntered:j,onEntering:k,onExit:R,onExited:M,onExiting:E,orientation:T="vertical",style:C,timeout:I=m.p0.standard,TransitionComponent:N=u.Ay,...Y}=n,z={...n,orientation:T,collapsedSize:d},_=A(z),W=(0,g.A)(),V=(0,p.A)(),H=r.useRef(null),G=r.useRef(),B="number"==typeof d?"".concat(d,"px"):d,O="horizontal"===T,L=O?"width":"height",P=r.useRef(null),q=(0,x.A)(t,P),F=e=>t=>{if(e){let n=P.current;void 0===t?e(n):e(n,t)}},K=()=>H.current?H.current[O?"clientWidth":"clientHeight"]:0,X=F((e,t)=>{H.current&&O&&(H.current.style.position="absolute"),e.style[L]=B,w&&w(e,t)}),Z=F((e,t)=>{let n=K();H.current&&O&&(H.current.style.position="");let{duration:a,easing:r}=(0,h.c)({style:C,timeout:I,easing:y},{mode:"enter"});if("auto"===I){let t=W.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(t,"ms"),G.current=t}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style[L]="".concat(n,"px"),e.style.transitionTimingFunction=r,k&&k(e,t)}),J=F((e,t)=>{e.style[L]="auto",j&&j(e,t)}),Q=F(e=>{e.style[L]="".concat(K(),"px"),R&&R(e)}),U=F(M),$=F(e=>{let t=K(),{duration:n,easing:a}=(0,h.c)({style:C,timeout:I,easing:y},{mode:"exit"});if("auto"===I){let n=W.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),G.current=n}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style[L]=B,e.style.transitionTimingFunction=a,E&&E(e)});return(0,a.jsx)(N,{in:v,onEnter:X,onEntered:J,onEntering:Z,onExit:Q,onExited:U,onExiting:$,addEndListener:e=>{"auto"===I&&V.start(G.current||0,e),o&&o(P.current,e)},nodeRef:P,timeout:"auto"===I?null:I,...Y,children:(e,t)=>(0,a.jsx)(D,{as:f,className:(0,l.A)(_.root,s,{entered:_.entered,exited:!v&&"0px"===B&&_.hidden}[e]),style:{[O?"minWidth":"minHeight"]:B,...C},ref:q,...t,ownerState:{...z,state:e},children:(0,a.jsx)(b,{ownerState:{...z,state:e},className:_.wrapper,ref:H,children:(0,a.jsx)(S,{ownerState:{...z,state:e},className:_.wrapperInner,children:i})})})})});w&&(w.muiSupportAuto=!0);var j=n(8562);let k=r.createContext({});var R=n(4807),M=n(8827);function E(e){return(0,y.Ay)("MuiAccordion",e)}let T=(0,f.A)("MuiAccordion",["root","heading","rounded","expanded","disabled","gutters","region"]),C=e=>{let{classes:t,square:n,expanded:a,disabled:r,disableGutters:o}=e;return(0,i.A)({root:["root",!n&&"rounded",a&&"expanded",r&&"disabled",!o&&"gutters"],heading:["heading"],region:["region"]},E,t)},I=(0,s.Ay)(j.A,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[{["& .".concat(T.region)]:t.region},t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((0,d.A)(e=>{let{theme:t}=e,n={duration:t.transitions.duration.shortest};return{position:"relative",transition:t.transitions.create(["margin"],n),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(t.vars||t).palette.divider,transition:t.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&::before":{display:"none"}},["&.".concat(T.expanded)]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},["&.".concat(T.disabled)]:{backgroundColor:(t.vars||t).palette.action.disabledBackground}}}),(0,d.A)(e=>{let{theme:t}=e;return{variants:[{props:e=>!e.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:e=>!e.disableGutters,style:{["&.".concat(T.expanded)]:{margin:"16px 0"}}}]}})),N=(0,s.Ay)("h3",{name:"MuiAccordion",slot:"Heading",overridesResolver:(e,t)=>t.heading})({all:"unset"}),Y=r.forwardRef(function(e,t){let n=(0,c.b)({props:e,name:"MuiAccordion"}),{children:o,className:i,defaultExpanded:s=!1,disabled:d=!1,disableGutters:u=!1,expanded:p,onChange:g,square:m=!1,slots:h={},slotProps:x={},TransitionComponent:f,TransitionProps:y,...v}=n,[A,D]=(0,R.A)({controlled:p,default:s,name:"Accordion",state:"expanded"}),b=r.useCallback(e=>{D(!A),g&&g(e,!A)},[A,g,D]),[S,...j]=r.Children.toArray(o),E=r.useMemo(()=>({expanded:A,disabled:d,disableGutters:u,toggle:b}),[A,d,u,b]),T={...n,square:m,disabled:d,disableGutters:u,expanded:A},Y=C(T),z={slots:{transition:f,...h},slotProps:{transition:y,...x}},[_,W]=(0,M.A)("heading",{elementType:N,externalForwardedProps:z,className:Y.heading,ownerState:T}),[V,H]=(0,M.A)("transition",{elementType:w,externalForwardedProps:z,ownerState:T});return(0,a.jsxs)(I,{className:(0,l.A)(Y.root,i),ref:t,ownerState:T,square:m,...v,children:[(0,a.jsx)(_,{...W,children:(0,a.jsx)(k.Provider,{value:E,children:S})}),(0,a.jsx)(V,{in:A,timeout:"auto",...H,children:(0,a.jsx)("div",{"aria-labelledby":S.props.id,id:S.props["aria-controls"],role:"region",className:Y.region,children:j})})]})});var z=n(2761);function _(e){return(0,y.Ay)("MuiAccordionSummary",e)}let W=(0,f.A)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),V=e=>{let{classes:t,expanded:n,disabled:a,disableGutters:r}=e;return(0,i.A)({root:["root",n&&"expanded",a&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]},_,t)},H=(0,s.Ay)(z.A,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((0,d.A)(e=>{let{theme:t}=e,n={duration:t.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:t.spacing(0,2),transition:t.transitions.create(["min-height","background-color"],n),["&.".concat(W.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(W.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["&:hover:not(.".concat(W.disabled,")")]:{cursor:"pointer"},variants:[{props:e=>!e.disableGutters,style:{["&.".concat(W.expanded)]:{minHeight:64}}}]}})),G=(0,s.Ay)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((0,d.A)(e=>{let{theme:t}=e;return{display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:e=>!e.disableGutters,style:{transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest}),["&.".concat(W.expanded)]:{margin:"20px 0"}}}]}})),B=(0,s.Ay)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((0,d.A)(e=>{let{theme:t}=e;return{display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest}),["&.".concat(W.expanded)]:{transform:"rotate(180deg)"}}})),O=r.forwardRef(function(e,t){let n=(0,c.b)({props:e,name:"MuiAccordionSummary"}),{children:o,className:i,expandIcon:s,focusVisibleClassName:d,onClick:u,...p}=n,{disabled:g=!1,disableGutters:m,expanded:h,toggle:x}=r.useContext(k),f={...n,expanded:h,disabled:g,disableGutters:m},y=V(f);return(0,a.jsxs)(H,{focusRipple:!1,disableRipple:!0,disabled:g,component:"div","aria-expanded":h,className:(0,l.A)(y.root,i),focusVisibleClassName:(0,l.A)(y.focusVisible,d),onClick:e=>{x&&x(e),u&&u(e)},ref:t,ownerState:f,...p,children:[(0,a.jsx)(G,{className:y.content,ownerState:f,children:o}),s&&(0,a.jsx)(B,{className:y.expandIconWrapper,ownerState:f,children:s})]})});var L=n(1983),P=n(2738);function q(e){return(0,y.Ay)("MuiAccordionDetails",e)}(0,f.A)("MuiAccordionDetails",["root"]);let F=e=>{let{classes:t}=e;return(0,i.A)({root:["root"]},q,t)},K=(0,s.Ay)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((0,d.A)(e=>{let{theme:t}=e;return{padding:t.spacing(1,2,2)}})),X=r.forwardRef(function(e,t){let n=(0,c.b)({props:e,name:"MuiAccordionDetails"}),{className:r,...o}=n,i=F(n);return(0,a.jsx)(K,{className:(0,l.A)(i.root,r),ref:t,ownerState:n,...o})});var Z=n(9561),J=n(2983);let Q=(0,J.A)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),U=(0,J.A)((0,a.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew");var $=n(3691),ee=n.n($),et=n(8998),en=n(4156),ea=n(2282),er=n(1046);let eo=[{id:1,year:"2025",name:"공룡나라 그란폰도",host:"고성군자전거연맹",location:"경상남도 고성군 종합운동장",eventStartDate:new Date("2025-03-29T07:30:00"),regStartDate:new Date("2024-12-27T10:00:00"),regEndDate:null,link:"http://speedagency.kr/parti_more.html?game_code=73",fee:7e4,goal1:"거리 119km",goal2:"획득고도 1500m",goal3:null,goal4:null,imgs:[]},{id:2,year:"2025",name:"홍천 그란폰도",host:"홍천군자전거연맹",location:"강원도 홍천, 홍천 종합운동장",eventStartDate:new Date("2025-04-19T08:00:00"),regStartDate:new Date("2024-12-31T10:00:00"),regEndDate:new Date("2025-01-17T23:59:59"),link:"http://speedbike.kr/0101_prologue.htm",fee:7e4,goal1:"거리 122km",goal2:"획득고도 1594m",goal3:null,goal4:null,imgs:[]},{id:3,year:"2025",name:"예천 저수령 그란폰도",host:"예천군체육회 / XCWORKS",location:"경상북도 예천군, 예천스타디움 및 예천군 일원",eventStartDate:new Date("2025-04-05T08:00:00"),regStartDate:new Date("2025-01-07T10:00:00"),regEndDate:null,link:"https://jsrgf.com/bri/sub.php?sub=sub_10&snb=1&menu=10",fee:7e4,goal1:"거리 103.6km",goal2:null,goal3:null,goal4:null,imgs:[]},{id:4,year:"2025",name:"양양 그란폰도",host:"양양군",location:"강원도 양양, 남대천체육공원 주차장",eventStartDate:new Date("2025-04-26T07:30:00"),regStartDate:new Date("2025-01-07T10:00:00"),regEndDate:null,link:"http://ygranfondo.com/info1",fee:7e4,goal1:"거리 151km",goal2:"획득고도 2380m",goal3:null,goal4:null,imgs:[]},{id:5,year:"2025",name:"영산강 그란폰도",host:"광주MBC",location:"전라남도 나주, 영산강 둔치체육공원",eventStartDate:new Date("2025-04-26T08:00:00"),regStartDate:new Date("2025-01-14T10:00:00"),regEndDate:new Date("2025-01-28T23:59:59"),link:"https://www.granfondokorea.com/0101_prologue.htm",fee:7e4,goal1:"거리 121.4km",goal2:"획득고도 1000m",goal3:null,goal4:null,imgs:[]},{id:6,year:"2025",name:"설악 그란폰도",host:"인제군",location:"강원도 인제군 상남면",eventStartDate:new Date("2025-04-26T08:00:00"),regStartDate:null,regEndDate:null,link:"http://granfondo.kr/info1",fee:7e4,goal1:"거리 208km",goal2:"획득고도 3670m",goal3:null,goal4:null,imgs:[]},{id:7,year:"2025",name:"화천DMZ랠리",host:"화천군",location:"화천생활체육공원 주경기장",eventStartDate:new Date("2025-05-11T09:00:00"),regStartDate:new Date("2025-01-14T10:00:00"),regEndDate:null,link:"http://dmzbike.com/info1",fee:6e4,goal1:"거리 73km",goal2:null,goal3:null,goal4:null,imgs:[]},{id:8,year:"2025",name:"가평 자라섬 그란폰도",host:"",location:"",eventStartDate:null,regStartDate:null,regEndDate:null,link:"",fee:0,goal1:null,goal2:null,goal3:null,goal4:null,imgs:[]},{id:9,year:"2025",name:"춘천 캄파놀로 그란폰도",host:"",location:"",eventStartDate:null,regStartDate:null,regEndDate:null,link:"",fee:0,goal1:null,goal2:null,goal3:null,goal4:null,imgs:[]},{id:10,year:"2025",name:"무주 그란폰도",host:"",location:"",eventStartDate:null,regStartDate:null,regEndDate:null,link:"",fee:0,goal1:null,goal2:null,goal3:null,goal4:null,imgs:[]},{id:11,year:"2025",name:"통영 그란폰도",host:"",location:"",eventStartDate:null,regStartDate:null,regEndDate:null,link:"",fee:0,goal1:null,goal2:null,goal3:null,goal4:null,imgs:[]},{id:12,year:"2025",name:"지리산 그란폰도",host:"",location:"",eventStartDate:null,regStartDate:null,regEndDate:null,link:"",fee:0,goal1:null,goal2:null,goal3:null,goal4:null,imgs:[]},{id:13,year:"2025",name:"섬섬 여수 그란폰도",host:"",location:"",eventStartDate:null,regStartDate:null,regEndDate:null,link:"",fee:0,goal1:null,goal2:null,goal3:null,goal4:null,imgs:[]}],el=()=>{let[e,t]=(0,r.useState)(null),n=e=>{(0,er.sendGTMEvent)({event:"expand_competition_item",category:"competition",action:"toggle",label:e.toString()}),t(t=>t===e?null:e)};return(0,a.jsx)(et.A,{children:(0,a.jsx)(o.A,{children:eo.sort((e,t)=>ee()(e.eventStartDate).valueOf()-ee()(t.eventStartDate).valueOf()).map(t=>(0,a.jsxs)(Y,{disabled:null==t.eventStartDate,expanded:e===t.id,onChange:()=>n(t.id),children:[(0,a.jsx)(O,{expandIcon:(0,a.jsx)(Q,{style:{fontSize:"2rem",color:"#1976d2"}}),sx:{flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper":{marginRight:"10px"}},children:(0,a.jsxs)(L.Ay,{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:0},children:[(0,a.jsx)(P.A,{primary:"".concat(t.name),secondary:"".concat(t.year,"년"),style:{flex:1}}),(0,a.jsx)(en.A,{orientation:"vertical",flexItem:!0,style:{margin:"0 10px",height:"24px"}}),(0,a.jsx)(P.A,{primary:"".concat(t.eventStartDate?ee()(t.eventStartDate).format("YYYY. MM. DD"):"미정"),secondary:"대회일",style:{flex:1}}),(0,a.jsx)(en.A,{orientation:"vertical",flexItem:!0,style:{margin:"0 10px",height:"24px"}}),(0,a.jsx)(P.A,{primary:"".concat(t.regStartDate?ee()(t.regStartDate).format("YYYY. MM. DD"):"미정"),secondary:"모집일",style:{flex:1}}),(0,a.jsx)(P.A,{primary:"".concat(t.goal1?t.goal1:""),secondary:"".concat(t.goal2?t.goal2:""),style:{flex:1}})]})}),(0,a.jsx)(X,{children:(0,a.jsxs)(et.A,{sx:{display:"flex",flexDirection:"column",gap:2.5,px:5},children:[(0,a.jsxs)(Z.A,{children:[(0,a.jsx)("strong",{children:"등록 기간:"})," ",t.regStartDate?ee()(t.regStartDate).format("YYYY. M. D"):""," ~ ",t.regEndDate?ee()(t.regEndDate).format("YYYY. M. D"):""]}),(0,a.jsxs)(Z.A,{children:[(0,a.jsx)("strong",{children:"참가비:"})," ",t.fee.toLocaleString(),"원"]}),(0,a.jsx)(Z.A,{children:t.goal1}),null!=t.goal2&&(0,a.jsx)(Z.A,{children:t.goal2}),(0,a.jsxs)(Z.A,{children:[(0,a.jsx)("strong",{children:"주최:"})," ",t.host]}),(0,a.jsxs)(Z.A,{children:[(0,a.jsx)("strong",{children:"위치:"})," ",t.location]}),(0,a.jsx)(Z.A,{children:(0,a.jsx)(ea.A,{className:"text-white",variant:"contained",color:"info",href:t.link||"#",target:"_blank",rel:"noopener noreferrer",startIcon:(0,a.jsx)(U,{}),sx:{borderRadius:"20px",padding:"5px 20px",textTransform:"none",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",transition:"transform 0.2s ease, box-shadow 0.2s ease","&:hover":{backgroundColor:"rgba(0, 123, 255, 0.8)",transform:"scale(1.05)",boxShadow:"0px 6px 12px rgba(0, 0, 0, 0.2)"}},children:"대회 사이트 이동"})}),t.imgs.length>0&&(0,a.jsx)("img",{src:t.imgs[0],alt:"".concat(t.name," 이미지"),style:{marginTop:"10px",maxWidth:"100%"}})]})})]},t.id))})})}},4807:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var a=n(2115);let r=function(e){let{controlled:t,default:n,name:r,state:o="value"}=e,{current:l}=a.useRef(void 0!==t),[i,s]=a.useState(n),d=a.useCallback(e=>{l||s(e)},[]);return[l?t:i,d]}}},e=>{var t=t=>e(e.s=t);e.O(0,[586,944,578,561,66,441,517,358],()=>t(6544)),_N_E=e.O()}]);