(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{8180:(e,t,r)=>{Promise.resolve().then(r.bind(r,8974))},8974:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Y});var a=r(5155),n=r(2115),i=r(9561),l=r(4918),o=r(9030),s=r(8222),c=r(1983),m=r(391),d=r(5330),g=r(1644),x=r(4616),p=r(2651),D=r(3691),h=r.n(D),u=r(8998),S=r(2241),f=r(2282),j=r(5295),A=r(1046);let y=(0,r(5974).UU)("https://mrlyfaibilizunhhcbia.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybHlmYWliaWxpenVuaGhjYmlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MzIzNjEsImV4cCI6MjA1NjQwODM2MX0.UOPZw64shWyYdZXZFR2p9tRcL3KUR__qljDN36XWEQw"),I="competitionData",v="competitionDataTimestamp",Y=()=>{let[e,t]=(0,n.useState)([]),[r,D]=(0,n.useState)(!0),[Y,w]=(0,n.useState)(null),[E,b]=(0,n.useState)(null),M=(0,j.A)("(max-width:600px)");(0,n.useEffect)(()=>{(async()=>{D(!0),w(null);let e=Date.now(),r=localStorage.getItem(I),a=localStorage.getItem(v);if(r&&a&&e-parseInt(a,10)<108e5){t(JSON.parse(r).map(e=>({...e,eventStartDate:e.eventStartDate?new Date(e.eventStartDate):null,regStartDate:e.regStartDate?new Date(e.regStartDate):null,regEndDate:e.regEndDate?new Date(e.regEndDate):null}))),D(!1);return}let{data:n,error:i}=await y.from("competition").select("*");if(i)w("데이터를 불러오는 중 오류가 발생했습니다."),console.error("Error fetching competitions:",i);else{let r=n.map(e=>({...e,eventStartDate:e.eventStartDate?new Date(e.eventStartDate):null,regStartDate:e.regStartDate?new Date(e.regStartDate):null,regEndDate:e.regEndDate?new Date(e.regEndDate):null}))||[];t(r),localStorage.setItem(I,JSON.stringify(r)),localStorage.setItem(v,e.toString())}D(!1)})()},[]);let N=e=>{(0,A.sendGTMEvent)({event:"expand_competition_item",category:"competition",action:"toggle",label:e.toString()}),b(t=>t===e?null:e)};return r?(0,a.jsx)(i.A,{children:"Loading..."}):Y?(0,a.jsx)(i.A,{color:"error",children:Y}):(0,a.jsx)(u.A,{sx:{paddingBottom:7},children:(0,a.jsx)(l.A,{children:e.sort((e,t)=>{if(e.regStartDate&&t.regStartDate){let r=e.regStartDate.getTime()-t.regStartDate.getTime();if(0!==r)return r}if(!e.eventStartDate)return 1;if(!t.eventStartDate)return -1;let r=e.eventStartDate.getTime()-t.eventStartDate.getTime();return 0!==r?r:e.upcoming!==t.upcoming?Number(e.upcoming)-Number(t.upcoming):e.id-t.id}).map(e=>{var t;return(0,a.jsxs)(o.A,{disabled:null==e.eventStartDate,expanded:E===e.id,onChange:()=>N(e.id),children:[(0,a.jsx)(s.A,{expandIcon:(0,a.jsx)(g.A,{style:{fontSize:"2rem",color:"#1976d2"}}),sx:{flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper":{marginRight:"10px"}},children:(0,a.jsxs)(c.Ay,{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:0},children:[(0,a.jsx)(m.A,{primary:"".concat(e.name),secondary:"".concat(e.year,"년"),style:{flex:1}}),(0,a.jsx)(S.A,{orientation:"vertical",flexItem:!0,style:{margin:"0 10px"}}),(0,a.jsx)(m.A,{primary:"".concat(e.eventStartDate?e.upcoming?h()(e.eventStartDate).format("YYYY. MM.")+" (예정)":h()(e.eventStartDate).format("YYYY. MM. DD"):"미정"),secondary:"대회일",style:{flex:1}}),(0,a.jsx)(S.A,{orientation:"vertical",flexItem:!0,style:{margin:"0 10px"}}),(0,a.jsx)(m.A,{primary:"".concat(e.regStartDate?h()(e.regStartDate).format("YYYY. MM. DD"):"미정"),secondary:"모집일",style:{flex:1}})]})}),(0,a.jsx)(d.A,{children:(0,a.jsxs)(u.A,{sx:{display:"flex",flexDirection:"column",gap:2.5,px:5},children:[(0,a.jsxs)(i.A,{children:[(0,a.jsx)("strong",{children:"등록 기간:"})," ",e.regStartDate?h()(e.regStartDate).format("YYYY. M. D"):""," ","~"," ",e.regEndDate?h()(e.regEndDate).format("YYYY. M. D"):""]}),(0,a.jsxs)(i.A,{children:[(0,a.jsx)("strong",{children:"참가비:"})," ",e.fee.toLocaleString(),"원"]}),(0,a.jsx)(i.A,{children:e.goal1}),null!=e.goal2&&(0,a.jsx)(i.A,{children:e.goal2}),(0,a.jsxs)(i.A,{children:[(0,a.jsx)("strong",{children:"주최:"})," ",e.host]}),(0,a.jsxs)(i.A,{children:[(0,a.jsx)("strong",{children:"위치:"})," ",e.location]}),(0,a.jsxs)(u.A,{sx:{display:"flex",flexDirection:M?"column":"row",gap:2,mt:2,alignItems:M?"stretch":"center"},children:[e.link&&(0,a.jsx)(f.A,{variant:"contained",color:"info",href:e.link||"#",target:"_blank",rel:"noopener noreferrer",startIcon:(0,a.jsx)(x.A,{}),sx:{flex:1,maxWidth:"200px",textTransform:"none",width:M?"100%":"auto"},children:"대회 사이트 이동"}),(0,a.jsx)(f.A,{variant:"contained",color:"info",href:"https://map.naver.com/p/search/"+e.location+"??c=13.00,0,0,0,dh",target:"_blank",rel:"noopener noreferrer",startIcon:(0,a.jsx)(p.A,{}),sx:{flex:1,maxWidth:"200px",textTransform:"none",width:M?"100%":"auto"},children:"지도 보기"})]}),(null===(t=e.imgs)||void 0===t?void 0:t.length)>0&&(0,a.jsx)("img",{src:e.imgs[0],alt:"".concat(e.name," 이미지"),style:{marginTop:"10px",maxWidth:"100%"}})]})})]},e.id)})})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[586,673,896,275,265,441,517,358],()=>t(8180)),_N_E=e.O()}]);