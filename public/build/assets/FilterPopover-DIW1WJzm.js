import{q as S,r as p,j as e,y as N}from"./app-MbUP1EQI.js";import{I as g}from"./input-BPMtujBP.js";import{B as f}from"./button-CzAhYwEo.js";import{P as C,a as F,b as k}from"./popover-BLZzaaGK.js";import{L as c}from"./label-DUXNj4de.js";import{S as y}from"./segmented-control-C3eN58Ia.js";import{S as P,a as w,b as A,c as E,d as _}from"./select-DuLVWfqX.js";import{F as U}from"./filter-VlUK-Cb0.js";import"./utils-C-Zvzyq5.js";import"./index-DHdUJXuL.js";import"./index-Bb4qSo10.js";import"./index-BBBSSME7.js";import"./index-50k3gDpb.js";import"./index-ynk8XwVw.js";import"./index-B2Mnvzit.js";import"./index-CrW0pUbx.js";import"./createLucideIcon-DhDSKE00.js";import"./check-BQwKtKwj.js";function L(m){const u=new URLSearchParams(m.split("?")[1]),l={},t=(n,o,i)=>{o.reduce((d,r,x)=>(x===o.length-1?d[r]=i:d[r]=d[r]||{},d[r]),n)};for(const[n,o]of u.entries())if(n.startsWith("filter[")){const i=n.match(/filter\[(.+?)\]/);if(i&&i[1]){const r=i[1].split(/\[|\]/).filter(Boolean);t(l,r,o)}}return l}function ee({packages:m}){var h,j,v,R;const u=S().url,l=L(u),[t,n]=p.useState({membership_package_id:l.membership_package_id||"all",gender:l.gender||"all",status:l.status||"all",joiningDateRange:{start:((h=l.joiningDateRange)==null?void 0:h.start)||"",end:((j=l.joiningDateRange)==null?void 0:j.end)||""},expiryDateRange:{start:((v=l.expiryDateRange)==null?void 0:v.start)||"",end:((R=l.expiryDateRange)==null?void 0:R.end)||""}}),[o,i]=p.useState(t.gender),[d,r]=p.useState(t.status),x=p.useRef(null);p.useEffect(()=>{i(t.gender),r(t.status)},[t.gender,t.status]);const D=()=>{const a=new URLSearchParams;t.membership_package_id!=="all"&&a.append("filter[membership_package_id]",t.membership_package_id),t.gender!=="all"&&a.append("filter[gender]",t.gender),t.status!=="all"&&a.append("filter[status]",t.status),t.joiningDateRange.start&&a.append("filter[start_date][start]",t.joiningDateRange.start),t.joiningDateRange.end&&a.append("filter[start_date][end]",t.joiningDateRange.end),t.expiryDateRange.start&&a.append("filter[payment_expiry_date][start]",t.expiryDateRange.start),t.expiryDateRange.end&&a.append("filter[payment_expiry_date][end]",t.expiryDateRange.end);const s=`/messenging?${a.toString()}`;N.visit(s)},b=()=>{n({membership_package_id:"all",gender:"all",status:"all",joiningDateRange:{start:"",end:""},expiryDateRange:{start:"",end:""}}),i("all"),r("all")};return e.jsxs(C,{children:[e.jsx(F,{asChild:!0,children:e.jsxs(f,{variant:"secondary",className:"border",children:[e.jsx(U,{size:14}),"   Filter"]})}),e.jsxs(k,{className:"p-4 space-y-4 w-fit max-w-full overflow-auto",children:[e.jsx("h3",{className:"font-bold text-lg",children:"Filter Members"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(c,{children:"Gender"}),e.jsx(y,{items:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"All",value:"all"}],value:o,onChange:a=>{i(a),n(s=>({...s,gender:a}))}})]}),e.jsxs("div",{children:[e.jsx(c,{htmlFor:"membership-package",children:"Membership Package"}),e.jsxs(P,{value:t.membership_package_id,onValueChange:a=>n(s=>({...s,membership_package_id:a})),children:[e.jsx(w,{children:e.jsx(A,{placeholder:"Select membership package"})}),e.jsxs(E,{children:[e.jsx(_,{value:"all",children:"All"}),m.map(a=>e.jsx(_,{value:a.id.toString(),children:a.package_name},a.id))]})]})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx(c,{children:"Joining Date Range"}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(g,{type:"date",name:"joining_start_date",value:t.joiningDateRange.start,onChange:a=>{n(s=>({...s,joiningDateRange:{...s.joiningDateRange,start:a.target.value}}))},className:"w-full"}),e.jsx("span",{children:"-"}),e.jsx(g,{type:"date",name:"joining_end_date",value:t.joiningDateRange.end,onChange:a=>n(s=>({...s,joiningDateRange:{...s.joiningDateRange,end:a.target.value}})),className:"w-full"})]})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx(c,{children:"Payment Expiry Date Range"}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(g,{type:"date",name:"expiry_start_date",value:t.expiryDateRange.start,onChange:a=>n(s=>({...s,expiryDateRange:{...s.expiryDateRange,start:a.target.value}})),className:"w-full"}),e.jsx("span",{children:"-"}),e.jsx(g,{type:"date",name:"expiry_end_date",value:t.expiryDateRange.end,onChange:a=>n(s=>({...s,expiryDateRange:{...s.expiryDateRange,end:a.target.value}})),className:"w-full"})]})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx(c,{children:"Status"}),e.jsx(y,{items:[{label:"Active",value:"active"},{label:"Expired",value:"expired"},{label:"Unapproved",value:"unapproved"},{label:"All",value:"all"}],value:d,onChange:a=>{r(a),n(s=>({...s,status:a}))}})]})]}),e.jsxs("div",{className:"flex justify-end space-x-2 mt-4",children:[e.jsx(f,{variant:"outline",onClick:b,children:"Clear"}),e.jsx(f,{onClick:D,ref:x,children:"Apply"})]})]})]})}export{ee as default};
