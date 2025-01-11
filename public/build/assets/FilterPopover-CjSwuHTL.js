import{q as k,r as x,j as e,y as I}from"./app-MbUP1EQI.js";import{I as m}from"./input-BPMtujBP.js";import{B as u}from"./button-CzAhYwEo.js";import{P,a as E,b as T}from"./popover-BLZzaaGK.js";import{L as p}from"./label-DUXNj4de.js";import{S as _}from"./segmented-control-C3eN58Ia.js";import{S as A,a as L,b as M,c as U,d as S}from"./select-DuLVWfqX.js";import{F as O}from"./filter-VlUK-Cb0.js";import"./utils-C-Zvzyq5.js";import"./index-DHdUJXuL.js";import"./index-Bb4qSo10.js";import"./index-BBBSSME7.js";import"./index-50k3gDpb.js";import"./index-ynk8XwVw.js";import"./index-B2Mnvzit.js";import"./index-CrW0pUbx.js";import"./createLucideIcon-DhDSKE00.js";import"./check-BQwKtKwj.js";function z(h){const f=new URLSearchParams(h.split("?")[1]),i={},t=(s,c,d)=>{c.reduce((o,r,g)=>(g===c.length-1?o[r]=d:o[r]=o[r]||{},o[r]),s)};for(const[s,c]of f.entries())if(s.startsWith("filter[")){const d=s.match(/filter\[(.+?)\]/);if(d&&d[1]){const r=d[1].split(/\[|\]/).filter(Boolean);t(i,r,c)}}return i}function ie({packages:h}){var y,v,D,R;const f=k().url,i=z(f),[t,s]=x.useState({id:i.id||"",name:i.name||"",phone:i.phone||"",membership_package_id:i.membership_package_id||"all",gender:i.gender||"all",status:i.status||"all",joiningDateRange:{start:((y=i.joiningDateRange)==null?void 0:y.start)||"",end:((v=i.joiningDateRange)==null?void 0:v.end)||""},expiryDateRange:{start:((D=i.expiryDateRange)==null?void 0:D.start)||"",end:((R=i.expiryDateRange)==null?void 0:R.end)||""}}),[c,d]=x.useState(t.gender),[o,r]=x.useState(t.status),g=x.useRef(null);x.useEffect(()=>{d(t.gender),r(t.status)},[t.gender,t.status]);const j=a=>{const{name:n,value:l}=a.target;s(F=>({...F,[n]:l}))},b=()=>{const a=new URLSearchParams;t.id&&a.append("filter[id]",t.id),t.name&&a.append("filter[name]",t.name),t.phone&&a.append("filter[phone]",t.phone),t.membership_package_id!=="all"&&a.append("filter[membership_package_id]",t.membership_package_id),t.gender!=="all"&&a.append("filter[gender]",t.gender),t.status!=="all"&&a.append("filter[status]",t.status),t.joiningDateRange.start&&a.append("filter[start_date][start]",t.joiningDateRange.start),t.joiningDateRange.end&&a.append("filter[start_date][end]",t.joiningDateRange.end),t.expiryDateRange.start&&a.append("filter[payment_expiry_date][start]",t.expiryDateRange.start),t.expiryDateRange.end&&a.append("filter[payment_expiry_date][end]",t.expiryDateRange.end);const n=`/members?${a.toString()}`;I.visit(n)},N=()=>{s({id:"",name:"",phone:"",membership_package_id:"all",gender:"all",status:"all",joiningDateRange:{start:"",end:""},expiryDateRange:{start:"",end:""}}),d("all"),r("all")},C=()=>{const a=new Date,n=new Date(a);n.setDate(a.getDate()-10),s(l=>({...l,status:"expired",expiryDateRange:{start:n.toISOString().split("T")[0],end:a.toISOString().split("T")[0]}})),setTimeout(()=>{var l;(l=g.current)==null||l.click()},20)},w=()=>{const a=new Date,n=new Date(a);n.setDate(a.getDate()+10),s(l=>({...l,status:"active",expiryDateRange:{start:a.toISOString().split("T")[0],end:n.toISOString().split("T")[0]}})),setTimeout(()=>{var l;(l=g.current)==null||l.click()},20)};return e.jsxs(P,{children:[e.jsx(E,{asChild:!0,children:e.jsxs(u,{variant:"secondary",className:"border",children:[e.jsx(O,{size:14}),"   Filter"]})}),e.jsxs(T,{className:"p-4 space-y-4 w-fit max-w-full overflow-auto",children:[e.jsx("h3",{className:"font-bold text-lg",children:"Filter Members"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex col-span-full gap-4",children:[e.jsxs("div",{className:"col-span-full",children:[e.jsx(p,{htmlFor:"id",children:"ID"}),e.jsx(m,{type:"text",value:t.id,onChange:j,name:"id",id:"id",placeholder:"Membership ID",className:"mt-1 w-full"})]}),e.jsxs("div",{className:"col-span-full grow",children:[e.jsx(p,{htmlFor:"name",children:"Name"}),e.jsx(m,{type:"text",value:t.name,onChange:j,name:"name",id:"name",placeholder:"Start Typing Member Name...",className:"mt-1 w-full"})]})]}),e.jsxs("div",{children:[e.jsx(p,{children:"Gender"}),e.jsx(_,{items:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"All",value:"all"}],value:c,onChange:a=>{d(a),s(n=>({...n,gender:a}))}})]}),e.jsxs("div",{children:[e.jsx(p,{htmlFor:"membership-package",children:"Membership Package"}),e.jsxs(A,{value:t.membership_package_id,onValueChange:a=>s(n=>({...n,membership_package_id:a})),children:[e.jsx(L,{children:e.jsx(M,{placeholder:"Select membership package"})}),e.jsxs(U,{children:[e.jsx(S,{value:"all",children:"All"}),h.map(a=>e.jsx(S,{value:a.id.toString(),children:a.package_name},a.id))]})]})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx(p,{children:"Joining Date Range"}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(m,{type:"date",name:"joining_start_date",value:t.joiningDateRange.start,onChange:a=>{s(n=>({...n,joiningDateRange:{...n.joiningDateRange,start:a.target.value}}))},className:"w-full"}),e.jsx("span",{children:"-"}),e.jsx(m,{type:"date",name:"joining_end_date",value:t.joiningDateRange.end,onChange:a=>s(n=>({...n,joiningDateRange:{...n.joiningDateRange,end:a.target.value}})),className:"w-full"})]})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx(p,{children:"Payment Expiry Date Range"}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(m,{type:"date",name:"expiry_start_date",value:t.expiryDateRange.start,onChange:a=>s(n=>({...n,expiryDateRange:{...n.expiryDateRange,start:a.target.value}})),className:"w-full"}),e.jsx("span",{children:"-"}),e.jsx(m,{type:"date",name:"expiry_end_date",value:t.expiryDateRange.end,onChange:a=>s(n=>({...n,expiryDateRange:{...n.expiryDateRange,end:a.target.value}})),className:"w-full"})]})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx(p,{children:"Status"}),e.jsx(_,{items:[{label:"Active",value:"active"},{label:"Expired",value:"expired"},{label:"Unapproved",value:"unapproved"},{label:"All",value:"all"}],value:o,onChange:a=>{r(a),s(n=>({...n,status:a}))}})]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(u,{size:"sm",variant:"outline",onClick:C,children:"Expired in last 10 days"}),e.jsx(u,{size:"sm",variant:"outline",onClick:w,children:"Expiring in 10 days"})]}),e.jsxs("div",{className:"flex justify-end space-x-2 mt-4",children:[e.jsx(u,{variant:"outline",onClick:N,children:"Clear"}),e.jsx(u,{onClick:b,ref:g,children:"Apply"})]})]})]})}export{ie as default};
