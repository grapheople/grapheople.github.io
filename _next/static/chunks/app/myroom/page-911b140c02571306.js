(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{8510:(e,t,i)=>{Promise.resolve().then(i.bind(i,4956))},4956:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>p});var r=i(5155),s=i(2115),n=i(8998),a=i(2282),l=i(9142),o=i(6292),d=i(778);i(8638);var c=i(8301);class h{constructor(e,t,i){this.id=e,this.url=t,this.blob=i}}let p=()=>{let e=(0,s.useRef)(null),[t,i]=(0,s.useState)(null),[p,u]=(0,s.useState)(1),[x,m]=(0,s.useState)([]),g=(0,l.Ay)("input")({clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});return(0,r.jsxs)(n.A,{sx:{textAlign:"center",maxWidth:600,margin:"auto"},children:[(0,r.jsxs)(a.A,{component:"label",role:void 0,variant:"contained",tabIndex:-1,sx:{width:100,height:100,padding:0,minWidth:0,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"primary.main","&:hover":{backgroundColor:"primary.dark"}},children:[(0,r.jsx)(d.A,{sx:{fontSize:60,color:"white"}}),(0,r.jsx)(g,{type:"file",accept:"image/*",onChange:e=>{var t;let r=null===(t=e.target.files)||void 0===t?void 0:t[0];if(r){let e=new FileReader;e.onload=()=>{i(e.result)},e.readAsDataURL(r)}},multiple:!0})]}),t&&(0,r.jsxs)(n.A,{children:[(0,r.jsx)(o.I,{src:t,style:{height:400,width:"100%"},initialAspectRatio:1,aspectRatio:1,guides:!0,ref:e}),(0,r.jsx)(a.A,{variant:"contained",color:"primary",onClick:()=>{var t;let r=null===(t=e.current)||void 0===t?void 0:t.cropper;r&&r.getCroppedCanvas({width:1080,height:1080}).toBlob(e=>{e&&(m([...x,new h(p,URL.createObjectURL(e),e)]),u(p+1),i(null))},"image/webp",.8)},sx:{marginTop:2},children:"Crop & Convert to WebP"})]}),x&&(0,r.jsx)(n.A,{sx:{flexGrow:1},children:(0,r.jsx)(c.A,{container:!0,spacing:{xs:1,md:1},columns:{xs:4,sm:8,md:12},children:x.map((e,t)=>(0,r.jsx)(c.A,{size:{xs:2,sm:4,md:4},children:(0,r.jsx)("img",{src:e.url,alt:"Cropped Preview",style:{width:"100%",height:"auto"}})},t))})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[439,282,81,441,517,358],()=>t(8510)),_N_E=e.O()}]);