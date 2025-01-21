(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[599],{9470:(o,i,e)=>{Promise.resolve().then(e.bind(e,5502))},5502:(o,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>h});var n=e(5155),t=e(2115),l=e(9030),s=e(8222),a=e(9561),r=e(5330),u=e(2282),d=e(1046),c=e(1644),p=e(8998);let v=o=>{let{isOpen:i,onClose:e,title:v,painPoints:m}=o,[h,x]=(0,t.useState)(null);if(!i)return null;let f=o=>{(0,d.sendGTMEvent)({event:"expand_pain_solution_item",category:"painpoint",action:"toggle",label:o.toString()}),x(i=>i===o?null:o)};return(0,n.jsx)("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.4)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},onClick:e,children:(0,n.jsxs)(p.A,{style:{backgroundColor:"#fff",padding:"2rem",borderRadius:"8px",width:"80%",maxWidth:"500px"},onClick:o=>o.stopPropagation(),children:[(0,n.jsxs)("h2",{style:{marginBottom:"1rem",fontWeight:"bold"},children:[v," 부위"]}),(0,n.jsx)("div",{children:m.map((o,i)=>(0,n.jsx)("div",{children:o.causeAndSolution.map((i,e)=>(0,n.jsxs)(l.A,{expanded:h===o.id+e,onChange:()=>f(o.id+e),style:{padding:"0.5rem"},children:[(0,n.jsx)(s.A,{expandIcon:(0,n.jsx)(c.A,{}),children:(0,n.jsx)(a.A,{children:i.cause})}),(0,n.jsx)(r.A,{children:(0,n.jsx)(a.A,{children:i.solution})})]},e))}))}),(0,n.jsx)(u.A,{onClick:e,style:{marginTop:"20px",padding:"5px 20px"},sx:{padding:"5px 20px",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",transition:"transform 0.2s ease, box-shadow 0.2s ease","&:hover":{backgroundColor:"rgba(0, 123, 255, 0.8)",transform:"scale(1.05)",boxShadow:"0px 6px 12px rgba(0, 0, 0, 0.2)"}},children:"닫기"})]})})},m=[{id:"head",name:"머리",x:"50%",y:"5%",painPoints:[{id:"headache",name:"머리 통증",causeAndSolution:[{cause:"헬멧 무게로 인한 목\xb7어깨 근육 긴장",solution:"가벼운 헬멧 사용 및 스트랩 압박 조절"},{cause:"과도하게 숙인 자세로 머리와 경추 정렬이 틀어짐",solution:"목\xb7어깨 스트레칭을 자주 실시"},{cause:"라이딩 중 탈수 또는 저혈당 상태",solution:"수시로 수분 및 탄수화물 보충"}]}]},{id:"neck",name:"목(경추)",x:"50%",y:"15%",painPoints:[{id:"neck",name:"목\xb7경추 통증",causeAndSolution:[{cause:"핸들바가 너무 낮아 목이 과도하게 뒤로 젖혀짐",solution:"핸들바 높이를 조절해 허리\xb7목 무리 최소화"},{cause:"장시간 전방 주시로 인한 목 근육 피로",solution:"주기적으로 목\xb7어깨 돌리기(스트레칭)"}]}]},{id:"shoulder",name:"어깨",x:"30%",y:"20%",painPoints:[{id:"shoulder",name:"어깨 통증",causeAndSolution:[{cause:"과도하게 숙인 자세로 어깨 근육 긴장",solution:"주기적으로 어깨 스트레칭으로 근육 긴장 완화"},{cause:"핸들바 그립\xb7각도가 체형에 맞지 않아 어깨에 부담",solution:"핸들바 높이\xb7폭\xb7각도 재조정 (어깨 부담 최소화)"},{cause:"팔\xb7어깨 근력이 약해 쉽게 피로 누적",solution:"회전근개 스트레칭 및 가벼운 어깨 강화 운동"}]}]},{id:"upper-back",name:"상부 등(흉추)",x:"60%",y:"23%",painPoints:[{id:"upper-back",name:"등(흉추) 통증",causeAndSolution:[{cause:"코어\xb7등 근력 부족으로 자세 유지 어려움",solution:"라이딩 자세 교정(어깨 내리고, 등을 덜 구부리기)"}]}]},{id:"lower-back",name:"허리(요추)",x:"50%",y:"45%",painPoints:[{id:"lower-back",name:"허리(요추) 통증",causeAndSolution:[{cause:"안장\xb7핸들바 간 거리(리치)가 과도하여 허리 과신전",solution:"전문 샵에서 피팅받아 안장 높이/리치 최적화"},{cause:"코어 근력 부족으로 척추 지지 불안정",solution:"복근\xb7척추기립근 강화 (플랭크, 백 익스텐션 등)"},{cause:"장시간 동일 자세 유지로 근육 피로 누적",solution:"중간중간 허리를 펴거나 댄싱 자세로 긴장 완화"}]}]},{id:"pelvis",name:"골반(장요근, 둔근)",x:"65%",y:"50%",painPoints:[{id:"pelvis",name:"골반\xb7장요근 통증",causeAndSolution:[{cause:"안장 높이/각도가 맞지 않아 페달링 각도 부자연스러움",solution:"안장 세팅 재조정 (전후/높이 적절히)"},{cause:"장요근이 짧아져 골반이 당겨지는 현상",solution:"장요근 스트레칭 (런지, 하프 니링 등)"},{cause:"둔근 약화로 골반이 안정적이지 않음",solution:"둔근 강화 운동 (힙 쓰러스트, 스쿼트 등)"}]}]},{id:"buttock",name:"엉덩이(좌골)",x:"38%",y:"50%",painPoints:[{id:"buttock",name:"좌골 부위 통증",causeAndSolution:[{cause:"안장 폭이 좌골 간격에 맞지 않음",solution:"좌골 폭 측정 후 적합한 안장 선택"},{cause:"안장 각도가 과도하게 앞/뒤로 기울어져 압박",solution:"안장 각도 수평에 가깝게 조정"},{cause:"장시간 라이딩으로 좌골부 지속 자극",solution:"패드가 좋은 빕숏 착용, 1~2시간 간격으로 일어서 휴식"}]}]},{id:"thighs",name:"허벅지(대퇴)",x:"65%",y:"60%",painPoints:[{id:"thighs",name:"대퇴사두근\xb7햄스트링 통증",causeAndSolution:[{cause:"너무 무거운 기어로 페달링하여 근육 피로 증가",solution:"적당한 기어 사용(케이던스 80~100rpm 권장)"},{cause:"대퇴 전면\xb7후면 근육이 균형 잡히지 않음",solution:"전후면 근력 균형(스쿼트, 런지, 레그컬, 레그익스텐션)"},{cause:"장시간 고강도 라이딩으로 근육 과부하",solution:"라이딩 전\xb7후 스트레칭(특히 햄스트링)"}]}]},{id:"knee",name:"무릎",x:"35%",y:"76%",painPoints:[{id:"knee",name:"무릎 통증",causeAndSolution:[{cause:"안장 높이가 맞지 않아 무릎 굴곡 과다",solution:"페달 최하점에서 무릎이 약 25~35도 굽혀지도록 세팅"},{cause:"무거운 기어 사용으로 무릎 연골 압박",solution:"가벼운 기어로 페달 회전수(케이던스) 높이기"},{cause:"클릿 세팅 불량으로 무릎 축이 어긋남",solution:"클릿 위치를 발볼 중앙에 맞추고 무릎 정렬 확인"},{cause:"체중이 한쪽 다리에 쏠리는 비대칭 페달링",solution:"자전거 세팅 점검으로 페달링 축 맞추기"},{cause:"대퇴사두근, 햄스트링 근력 불균형",solution:"대퇴\xb7햄스트링 근력 강화 (스쿼트, 런지 등)"},{cause:"장시간 라이딩으로 무릎 주변 조직 피로 누적",solution:"무릎 통증 시 즉시 휴식 및 스트레칭"}]}]},{id:"calf",name:"종아리",x:"64%",y:"80%",painPoints:[{id:"calf",name:"종아리 통증",causeAndSolution:[{cause:"페달링 시 발끝으로만 미는 습관",solution:"발 전체로 페달링하도록 교정"},{cause:"과도한 무거운 기어로 종아리에 무리",solution:"가벼운 기어 사용해 케이던스 높이기"},{cause:"종아리 근육(비복근, 가자미근) 유연성 부족",solution:"라이딩 후 종아리 스트레칭, 폼롤러 활용"},{cause:"신발\xb7클릿 세팅이 맞지 않아 한쪽에 과부하",solution:"클릿 위치 조절 후 재점검"},{cause:"오랜 라이딩으로 근육 경직",solution:"충분한 휴식과 종아리 마사지"}]}]},{id:"ankle-foot",name:"발목\xb7발",x:"35%",y:"95%",painPoints:[{id:"ankle-foot",name:"발목\xb7발 통증",causeAndSolution:[{cause:"클릿 슈즈 세팅 불량으로 발목이 비틀림",solution:"클릿 위치를 발볼 중앙에 맞춰 틀어지지 않게 조정"},{cause:"신발 사이즈가 맞지 않아 발바닥 압박",solution:"본인 발 형태에 맞는 인솔, 적절한 신발 사이즈 선택"},{cause:"발목 과도한 굴곡으로 족저근막 자극",solution:"중간중간 발가락 스트레칭, 발목 돌리기"},{cause:"장시간 라이딩으로 발바닥 피로 누적",solution:"라이딩 후 발목\xb7발 마사지, 충분한 휴식"},{cause:"무거운 기어 사용 시 발목에 부하 집중",solution:"케이던스를 높여 발목 부담 완화"}]}]}],h=()=>{let[o,i]=(0,t.useState)(null),e=o=>{i(o)};return(0,n.jsxs)(p.A,{sx:{display:"flex",justifyContent:"center",position:"relative",minWidth:"150px",height:"calc(100vh - 64px)",paddingTop:"20px",paddingBottom:"20px"},children:[(0,n.jsxs)("div",{style:{position:"absolute",height:"90%"},children:[(0,n.jsx)("img",{src:"/human-body.webp",alt:"인체 이미지",style:{minWidth:"150px",height:"100%",objectFit:"contain",display:"block",margin:"0 auto"}}),m.map(o=>(0,n.jsx)("div",{onClick:()=>e(o),style:{position:"absolute",left:o.x,top:o.y,width:"20px",height:"20px",borderRadius:"50%",border:"2px solid rgba(255, 0, 0, 0.7)",backgroundColor:"rgba(255, 0, 0, 0.3)",transform:"translate(-50%, -50%)",cursor:"pointer"}},o.id))]}),(0,n.jsx)(v,{isOpen:!!o,onClose:()=>{i(null)},title:(null==o?void 0:o.name)||"",painPoints:(null==o?void 0:o.painPoints)||[]})]})}},2983:(o,i,e)=>{"use strict";e.d(i,{A:()=>f});var n=e(2115),t=e(3463),l=e(7123),s=e(7410),a=e(9142),r=e(8330),u=e(2567),d=e(1045),c=e(7157);function p(o){return(0,c.Ay)("MuiSvgIcon",o)}(0,d.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=e(5155);let m=o=>{let{color:i,fontSize:e,classes:n}=o,t={root:["root","inherit"!==i&&"color".concat((0,s.A)(i)),"fontSize".concat((0,s.A)(e))]};return(0,l.A)(t,p,n)},h=(0,a.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,i)=>{let{ownerState:e}=o;return[i.root,"inherit"!==e.color&&i["color".concat((0,s.A)(e.color))],i["fontSize".concat((0,s.A)(e.fontSize))]]}})((0,r.A)(o=>{var i,e,n,t,l,s,a,r,u,d,c,p,v,m,h,x,f,g;let{theme:y}=o;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:null===(t=y.transitions)||void 0===t?void 0:null===(n=t.create)||void 0===n?void 0:n.call(t,"fill",{duration:null===(e=(null!==(h=y.vars)&&void 0!==h?h:y).transitions)||void 0===e?void 0:null===(i=e.duration)||void 0===i?void 0:i.shorter}),variants:[{props:o=>!o.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:(null===(s=y.typography)||void 0===s?void 0:null===(l=s.pxToRem)||void 0===l?void 0:l.call(s,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:(null===(r=y.typography)||void 0===r?void 0:null===(a=r.pxToRem)||void 0===a?void 0:a.call(r,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:(null===(d=y.typography)||void 0===d?void 0:null===(u=d.pxToRem)||void 0===u?void 0:u.call(d,35))||"2.1875rem"}},...Object.entries((null!==(x=y.vars)&&void 0!==x?x:y).palette).filter(o=>{let[,i]=o;return i&&i.main}).map(o=>{var i,e,n;let[t]=o;return{props:{color:t},style:{color:null===(e=(null!==(n=y.vars)&&void 0!==n?n:y).palette)||void 0===e?void 0:null===(i=e[t])||void 0===i?void 0:i.main}}}),{props:{color:"action"},style:{color:null===(p=(null!==(f=y.vars)&&void 0!==f?f:y).palette)||void 0===p?void 0:null===(c=p.action)||void 0===c?void 0:c.active}},{props:{color:"disabled"},style:{color:null===(m=(null!==(g=y.vars)&&void 0!==g?g:y).palette)||void 0===m?void 0:null===(v=m.action)||void 0===v?void 0:v.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),x=n.forwardRef(function(o,i){let e=(0,u.b)({props:o,name:"MuiSvgIcon"}),{children:l,className:s,color:a="inherit",component:r="svg",fontSize:d="medium",htmlColor:c,inheritViewBox:p=!1,titleAccess:x,viewBox:f="0 0 24 24",...g}=e,y=n.isValidElement(l)&&"svg"===l.type,S={...e,color:a,component:r,fontSize:d,instanceFontSize:o.fontSize,inheritViewBox:p,viewBox:f,hasSvgAsChild:y},b={};p||(b.viewBox=f);let A=m(S);return(0,v.jsxs)(h,{as:r,className:(0,t.A)(A.root,s),focusable:"false",color:c,"aria-hidden":!x||void 0,role:x?"img":void 0,ref:i,...b,...g,...y&&l.props,ownerState:S,children:[y?l.props.children:l,x?(0,v.jsx)("title",{children:x}):null]})});function f(o,i){function e(e,n){return(0,v.jsx)(x,{"data-testid":"".concat(i,"Icon"),ref:n,...e,children:o})}return e.muiName=x.muiName,n.memo(n.forwardRef(e))}x.muiName="SvgIcon"}},o=>{var i=i=>o(o.s=i);o.O(0,[919,652,578,443,275,441,517,358],()=>i(9470)),_N_E=o.O()}]);