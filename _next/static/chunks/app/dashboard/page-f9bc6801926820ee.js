(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{37967:(e,t,a)=>{Promise.resolve().then(a.bind(a,29717))},1466:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(67401).A)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},92823:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(67401).A)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])},29717:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var s=a(95155),l=a(12115),r=a(67396),n=a(22130),d=a(62884);function i(e){let{children:t,onValueChange:a,defaultValue:l}=e;return(0,s.jsx)("div",{className:"relative w-full",children:(0,s.jsx)("select",{defaultValue:l,onChange:e=>a(e.target.value),className:"w-full py-2 px-4 bg-white border border-gray-300 rounded-lg text-gray-700",children:t})})}function c(e){let{value:t,children:a}=e;return(0,s.jsx)("option",{value:t,className:"text-gray-700",children:a})}var o=a(17548),x=a(67401);let h=(0,x.A)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);var u=a(1466),m=a(92823);let j=(0,x.A)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),p=(0,x.A)("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);var f=a(54633),y=a(13383);let b={totalStudents:1e4,atRiskStudents:1500,dropoutRate:15};function v(){let[e,t]=(0,l.useState)("All India"),[a,x]=(0,l.useState)("insights");return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("header",{className:"flex justify-between items-center p-4 bg-white shadow-md",children:[(0,s.jsx)("div",{className:"flex items-center space-x-8",children:(0,s.jsxs)(r.default,{href:"/dashboard",className:"flex items-center space-x-2",children:[(0,s.jsx)(o.A,{className:"h-8 w-8 text-black"}),(0,s.jsx)("span",{className:"text-2xl text-black font-semibold",children:"EduDrop"})]})}),(0,s.jsxs)("div",{className:"flex items-center space-x-6 text-black",children:[(0,s.jsxs)(r.default,{href:"/student-dashboard",className:"flex items-center text-lg hover:text-indigo-300 transition-colors",children:[(0,s.jsx)("span",{className:"mr-2",children:"DashLearn"}),(0,s.jsx)(h,{className:"h-5 w-5"})]}),(0,s.jsx)(r.default,{href:"/profile",className:"flex items-center",children:(0,s.jsx)(u.A,{className:"h-8 w-8 text-black hover:text-indigo-300 transition-colors"})})]})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-center space-y-4 p-6 shadow-lg bg-gray-100",children:[(0,s.jsxs)(i,{defaultValue:e,onValueChange:t,children:[(0,s.jsx)(c,{value:"All India",children:"All India"}),(0,s.jsx)(c,{value:"Maharashtra",children:"Maharashtra"}),(0,s.jsx)(c,{value:"Karnataka",children:"Karnataka"}),(0,s.jsx)(c,{value:"Tamil Nadu",children:"Tamil Nadu"})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[(0,s.jsxs)(n.Zp,{children:[(0,s.jsxs)(n.aR,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,s.jsx)(n.ZB,{className:"text-sm font-medium text-black",children:"Total Students"}),(0,s.jsx)(m.A,{className:"h-4 w-4 text-black"})]}),(0,s.jsx)(n.Wu,{children:(0,s.jsx)("div",{className:"text-3xl font-bold text-black",children:b.totalStudents.toLocaleString()})})]}),(0,s.jsxs)(n.Zp,{children:[(0,s.jsxs)(n.aR,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,s.jsx)(n.ZB,{className:"text-sm font-medium text-black",children:"At-Risk Students"}),(0,s.jsx)(j,{className:"h-4 w-4 text-yellow-600"})]}),(0,s.jsxs)(n.Wu,{children:[(0,s.jsx)("div",{className:"text-3xl font-bold text-black",children:b.atRiskStudents.toLocaleString()}),(0,s.jsxs)("p",{className:"text-xs text-black",children:[(b.atRiskStudents/b.totalStudents*100).toFixed(1),"% of total"]})]})]}),(0,s.jsxs)(n.Zp,{children:[(0,s.jsxs)(n.aR,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,s.jsx)(n.ZB,{className:"text-sm font-medium text-black",children:"Dropout Rate"}),(0,s.jsx)(p,{className:"h-4 w-4 text-red-500"})]}),(0,s.jsxs)(n.Wu,{children:[(0,s.jsxs)("div",{className:"text-3xl font-bold text-black",children:[b.dropoutRate,"%"]}),(0,s.jsxs)("p",{className:"text-xs text-black",children:[b.dropoutRate>10?"Above":"Below"," national average"]})]})]})]}),(0,s.jsxs)(d.tU,{value:a,onValueChange:x,className:"space-y-4",children:[(0,s.jsx)("div",{className:"flex justify-center space-x-4",children:(0,s.jsxs)(d.j7,{children:[(0,s.jsx)(d.Xi,{value:"insights",isSelected:"insights"===a,onClick:()=>x("insights"),className:"text-lg font-medium ".concat("insights"===a?"text-blue-600":"text-black"),children:"Dropout Insights"}),(0,s.jsx)(d.Xi,{value:"solutions",isSelected:"solutions"===a,onClick:()=>x("solutions"),className:"text-lg font-medium ".concat("solutions"===a?"text-blue-600":"text-black"),children:"Solution Pathways"})]})}),(0,s.jsx)(d.av,{isActive:"insights"===a,children:"insights"===a&&(0,s.jsx)(f.default,{})}),(0,s.jsx)(d.av,{isActive:"solutions"===a,children:"solutions"===a&&(0,s.jsx)(y.default,{})})]})]}),(0,s.jsxs)("footer",{className:"flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white",children:[(0,s.jsx)("p",{className:"text-xs text-gray-500",children:"\xa9 2024 EduDrop."}),(0,s.jsxs)("nav",{className:"sm:ml-auto flex gap-4 sm:gap-6",children:[(0,s.jsx)(r.default,{className:"text-xs text-blue-600 hover:underline",href:"#",children:"Terms of Service"}),(0,s.jsx)(r.default,{className:"text-xs text-blue-600 hover:underline",href:"#",children:"Privacy"})]})]})]})}},54633:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>y});var s=a(95155),l=a(12115),r=a(22130),n=a(58581),d=a(394),i=a(15255),c=a(12800),o=a(66963),x=a(27112),h=a(86354),u=a(23021),m=a(94973),j=a(16161),p=a(62884);let f={gender:[{name:"Male",dropoutRate:16},{name:"Female",dropoutRate:14},{name:"Other",dropoutRate:15}],area:[{name:"Urban",dropoutRate:12},{name:"Semi-Urban",dropoutRate:15},{name:"Rural",dropoutRate:18}],caste:[{name:"General",dropoutRate:10},{name:"OBC",dropoutRate:15},{name:"SC",dropoutRate:18},{name:"ST",dropoutRate:20}],standard:[{name:"5th",dropoutRate:5},{name:"6th",dropoutRate:7},{name:"7th",dropoutRate:10},{name:"8th",dropoutRate:12},{name:"9th",dropoutRate:15},{name:"10th",dropoutRate:18}]};function y(){let[e,t]=(0,l.useState)("gender");return(0,s.jsx)("div",{className:"space-y-6",children:(0,s.jsxs)(r.Zp,{children:[(0,s.jsxs)(r.aR,{children:[(0,s.jsx)(r.ZB,{children:"Detailed Dropout Analysis"}),(0,s.jsx)(r.BT,{children:"Segmented by various demographic factors"})]}),(0,s.jsx)(r.Wu,{children:(0,s.jsxs)(p.tU,{value:e,onValueChange:t,className:"your-tabs-class",children:[(0,s.jsxs)(p.j7,{children:[(0,s.jsx)(p.Xi,{value:"gender",onClick:()=>t("gender"),isSelected:"gender"===e,children:"Gender"}),(0,s.jsx)(p.Xi,{value:"area",onClick:()=>t("area"),isSelected:"area"===e,children:"Area"}),(0,s.jsx)(p.Xi,{value:"caste",onClick:()=>t("caste"),isSelected:"caste"===e,children:"Caste"}),(0,s.jsx)(p.Xi,{value:"standard",onClick:()=>t("standard"),isSelected:"standard"===e,children:"Standard/Age"})]}),"gender"===e&&(0,s.jsx)(b,{data:f.gender,title:"Dropout Rate by Gender"}),"area"===e&&(0,s.jsx)(b,{data:f.area,title:"Dropout Rate by Area"}),"caste"===e&&(0,s.jsx)(b,{data:f.caste,title:"Dropout Rate by Caste"}),"standard"===e&&(0,s.jsx)(b,{data:f.standard,title:"Dropout Rate by Standard",chartType:"line"})]})})]})})}function b(e){let{data:t,title:a,chartType:l="bar"}=e;return(0,s.jsxs)("div",{className:"h-[300px]",children:[(0,s.jsx)("h3",{className:"text-black font-medium mb-2",children:a}),(0,s.jsx)(n.u,{width:"100%",height:"100%",children:"bar"===l?(0,s.jsxs)(d.E,{data:t,children:[(0,s.jsx)(i.d,{strokeDasharray:"3 3"}),(0,s.jsx)(c.W,{dataKey:"name"}),(0,s.jsx)(o.h,{}),(0,s.jsx)(x.m,{}),(0,s.jsx)(h.s,{}),(0,s.jsx)(u.y,{dataKey:"dropoutRate",fill:"#1C4E80"})]}):(0,s.jsxs)(m.b,{data:t,children:[(0,s.jsx)(i.d,{strokeDasharray:"3 3"}),(0,s.jsx)(c.W,{dataKey:"name"}),(0,s.jsx)(o.h,{}),(0,s.jsx)(x.m,{}),(0,s.jsx)(h.s,{}),(0,s.jsx)(j.N,{type:"monotone",dataKey:"dropoutRate",stroke:"#1C4E80"})]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[908,184,726,383,441,517,358],()=>t(37967)),_N_E=e.O()}]);