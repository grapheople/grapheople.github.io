(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[806],{6544:(e,l,a)=>{Promise.resolve().then(a.bind(a,3080))},3080:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>y});var t=a(5155),n=a(2115),r=a(4918),o=a(9030),g=a(8222),s=a(1983),i=a(391),u=a(5330),d=a(9561),c=a(1644),m=a(4616),D=a(3691),x=a.n(D),h=a(8998),p=a(2241),f=a(2282),S=a(9430);let y=()=>{let[e,l]=(0,n.useState)(null),a=e=>{l(l=>l===e?null:e)};return(0,t.jsx)(h.A,{children:(0,t.jsx)(r.A,{children:S.y.sort((e,l)=>x()(e.eventStartDate).valueOf()-x()(l.eventStartDate).valueOf()).map(l=>(0,t.jsxs)(o.A,{disabled:null==l.eventStartDate,expanded:e===l.id,onChange:()=>a(l.id),children:[(0,t.jsx)(g.A,{expandIcon:(0,t.jsx)(c.A,{style:{fontSize:"2rem",color:"#1976d2"}}),sx:{flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper":{marginRight:"10px"}},children:(0,t.jsxs)(s.Ay,{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:0},children:[(0,t.jsx)(i.A,{primary:"".concat(l.name),secondary:"".concat(l.year,"년"),style:{flex:1}}),(0,t.jsx)(p.A,{orientation:"vertical",flexItem:!0,style:{margin:"0 10px",height:"24px"}}),(0,t.jsx)(i.A,{primary:"".concat(l.eventStartDate?x()(l.eventStartDate).format("YYYY. MM. DD"):"미정"),secondary:"대회일",style:{flex:1}}),(0,t.jsx)(p.A,{orientation:"vertical",flexItem:!0,style:{margin:"0 10px",height:"24px"}}),(0,t.jsx)(i.A,{primary:"".concat(l.regStartDate?x()(l.regStartDate).format("YYYY. MM. DD"):"미정"),secondary:"모집일",style:{flex:1}}),(0,t.jsx)(i.A,{primary:"".concat(l.goal1?"거리 "+l.goal1:""),secondary:"".concat(l.goal2?"획득고도 "+l.goal2:""),style:{flex:1}})]})}),(0,t.jsx)(u.A,{children:(0,t.jsxs)(h.A,{sx:{display:"flex",flexDirection:"column",gap:2.5,px:5},children:[(0,t.jsxs)(d.A,{children:[(0,t.jsx)("strong",{children:"등록 기간:"})," ",l.regStartDate?x()(l.regStartDate).format("YYYY. M. D"):""," ~ ",l.regEndDate?x()(l.regEndDate).format("YYYY. M. D"):""]}),(0,t.jsxs)(d.A,{children:[(0,t.jsx)("strong",{children:"참가비:"})," ",l.fee.toLocaleString(),"원"]}),(0,t.jsxs)(d.A,{children:[(0,t.jsx)("strong",{children:"거리:"})," ",l.goal1]}),null!=l.goal2&&(0,t.jsxs)(d.A,{children:[(0,t.jsx)("strong",{children:"획득고도:"})," ",l.goal2]}),(0,t.jsxs)(d.A,{children:[(0,t.jsx)("strong",{children:"주최:"})," ",l.host]}),(0,t.jsxs)(d.A,{children:[(0,t.jsx)("strong",{children:"위치:"})," ",l.location]}),(0,t.jsx)(d.A,{children:(0,t.jsx)(f.A,{className:"text-white",variant:"contained",color:"info",href:l.link||"#",target:"_blank",rel:"noopener noreferrer",startIcon:(0,t.jsx)(m.A,{}),sx:{borderRadius:"20px",padding:"5px 20px",textTransform:"none",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",transition:"transform 0.2s ease, box-shadow 0.2s ease","&:hover":{backgroundColor:"rgba(0, 123, 255, 0.8)",transform:"scale(1.05)",boxShadow:"0px 6px 12px rgba(0, 0, 0, 0.2)"}},children:"대회 사이트 이동"})}),l.imgs.length>0&&(0,t.jsx)("img",{src:l.imgs[0],alt:"".concat(l.name," 이미지"),style:{marginTop:"10px",maxWidth:"100%"}})]})})]},l.id))})})}},9430:(e,l,a)=>{"use strict";a.d(l,{y:()=>t});let t=[{id:1,year:"2025",name:"공룡나라 그란폰도",host:"고성군자전거연맹",location:"경상남도 고성군 종합운동장",eventStartDate:new Date("2025-03-29T07:30:00"),regStartDate:new Date("2024-12-27T10:00:00"),regEndDate:null,link:"http://speedagency.kr/parti_more.html?game_code=73",fee:7e4,goal1:"119km",goal2:"1500m",goal3:null,goal4:null,imgs:[]},{id:2,year:"2025",name:"홍천 그란폰도",host:"홍천군자전거연맹",location:"강원도 홍천, 홍천 종합운동장",eventStartDate:new Date("2025-04-19T08:00:00"),regStartDate:new Date("2024-12-31T10:00:00"),regEndDate:new Date("2025-01-17T23:59:59"),link:"http://speedbike.kr/0101_prologue.htm",fee:7e4,goal1:"122km",goal2:"1594m",goal3:null,goal4:null,imgs:[]},{id:3,year:"2025",name:"예천 저수령 그란폰도",host:"예천군체육회 / XCWORKS",location:"경상북도 예천군, 예천스타디움 및 예천군 일원",eventStartDate:new Date("2025-04-05T08:00:00"),regStartDate:new Date("2025-01-07T10:00:00"),regEndDate:null,link:"https://jsrgf.com/bri/sub.php?sub=sub_10&snb=1&menu=10",fee:7e4,goal1:"103.6km",goal2:null,goal3:null,goal4:null,imgs:[]},{id:4,year:"2025",name:"양양 그란폰도",host:"양양군",location:"강원도 양양, 남대천체육공원 주차장",eventStartDate:new Date("2025-04-26T07:30:00"),regStartDate:new Date("2025-01-07T10:00:00"),regEndDate:null,link:"http://ygranfondo.com/info1",fee:7e4,goal1:"151km",goal2:"2380m",goal3:null,goal4:null,imgs:[]},{id:5,year:"2025",name:"영산강 그란폰도",host:"광주MBC",location:"전라남도 나주, 영산강 둔치체육공원",eventStartDate:new Date("2025-04-26T08:00:00"),regStartDate:new Date("2025-01-14T10:00:00"),regEndDate:new Date("2025-01-28T23:59:59"),link:"https://www.granfondokorea.com/0101_prologue.htm",fee:7e4,goal1:"121.4km",goal2:"1000m",goal3:null,goal4:null,imgs:[]},{id:6,year:"2025",name:"설악 그란폰도",host:"인제군",location:"강원도 인제군 상남면",eventStartDate:new Date("2025-04-26T08:00:00"),regStartDate:null,regEndDate:null,link:"http://granfondo.kr/info1",fee:7e4,goal1:"208km",goal2:"3670m",goal3:null,goal4:null,imgs:[]},{id:7,year:"2025",name:"화천DMZ랠리",host:"화천군",location:"화천생활체육공원 주경기장",eventStartDate:new Date("2025-05-11T09:00:00"),regStartDate:new Date("2025-01-14T10:00:00"),regEndDate:null,link:"http://dmzbike.com/info1",fee:6e4,goal1:"73km",goal2:null,goal3:null,goal4:null,imgs:[]},{id:8,year:"2025",name:"가평 자라섬 그란폰도",host:"",location:"",eventStartDate:null,regStartDate:null,regEndDate:null,link:"",fee:0,goal1:null,goal2:null,goal3:null,goal4:null,imgs:[]},{id:9,year:"2025",name:"춘천 캄파놀로 그란폰도",host:"",location:"",eventStartDate:null,regStartDate:null,regEndDate:null,link:"",fee:0,goal1:null,goal2:null,goal3:null,goal4:null,imgs:[]},{id:10,year:"2025",name:"무주 그란폰도",host:"",location:"",eventStartDate:null,regStartDate:null,regEndDate:null,link:"",fee:0,goal1:null,goal2:null,goal3:null,goal4:null,imgs:[]},{id:11,year:"2025",name:"통영 그란폰도",host:"",location:"",eventStartDate:null,regStartDate:null,regEndDate:null,link:"",fee:0,goal1:null,goal2:null,goal3:null,goal4:null,imgs:[]},{id:12,year:"2025",name:"지리산 그란폰도",host:"",location:"",eventStartDate:null,regStartDate:null,regEndDate:null,link:"",fee:0,goal1:null,goal2:null,goal3:null,goal4:null,imgs:[]},{id:13,year:"2025",name:"섬섬 여수 그란폰도",host:"",location:"",eventStartDate:null,regStartDate:null,regEndDate:null,link:"",fee:0,goal1:null,goal2:null,goal3:null,goal4:null,imgs:[]}]}},e=>{var l=l=>e(e.s=l);e.O(0,[586,534,494,246,292,441,517,358],()=>l(6544)),_N_E=e.O()}]);