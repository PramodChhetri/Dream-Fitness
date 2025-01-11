import{j as e,q as I,r as f,y as P}from"./app-3SIRTf-5.js";import{I as g}from"./input-B_VqwVNS.js";import{B as x}from"./button-mE5Zer4v.js";import{P as E,a as T,b as A}from"./popover-jqHnf68I.js";import{L as p}from"./label-sM4Vfyun.js";import{a as b}from"./utils-C-Zvzyq5.js";import{S as L,a as M,b as U,c as z,d as _}from"./select-BAAnM0MM.js";import{F as O}from"./filter-DydOf_4B.js";import"./index-C3fbTtBW.js";import"./index-Bb4qSo10.js";import"./index-v8WOfFnQ.js";import"./createLucideIcon-a0XJ54KJ.js";import"./index-YuXTghCy.js";import"./index-Cqu9cwS9.js";import"./index-BVcS-tUL.js";import"./index-BwJKMgpa.js";function S({items:u,value:m,onChange:l,className:t}){return e.jsx("div",{className:b("inline-flex rounded-md border border-muted bg-muted p-1 overflow-hidden w-full",t),children:u.map((s,o)=>e.jsxs(x,{variant:m===s.value?"default":"ghost",size:"sm",className:b("px-4 py-2 text-sm font-medium flex items-center space-x-2 grow",m===s.value&&"shadow"),onClick:()=>l(s.value),children:[s.startAdornment&&e.jsx("span",{className:"mr-2",children:s.startAdornment}),e.jsx("span",{children:s.label})]},s.value))})}function B(u){const m=new URLSearchParams(u.split("?")[1]),l={},t=(s,o,d)=>{o.reduce((c,r,h)=>(h===o.length-1?c[r]=d:c[r]=c[r]||{},c[r]),s)};for(const[s,o]of m.entries())if(s.startsWith("filter[")){const d=s.match(/filter\[(.+?)\]/);if(d&&d[1]){const r=d[1].split(/\[|\]/).filter(Boolean);t(l,r,o)}}return l}function se({packages:u}){var v,y,D,R;const m=I().url,l=B(m),[t,s]=f.useState({id:l.id||"",name:l.name||"",phone:l.phone||"",membership_package_id:l.membership_package_id||"all",gender:l.gender||"all",status:l.status||"all",joiningDateRange:{start:((v=l.joiningDateRange)==null?void 0:v.start)||"",end:((y=l.joiningDateRange)==null?void 0:y.end)||""},expiryDateRange:{start:((D=l.expiryDateRange)==null?void 0:D.start)||"",end:((R=l.expiryDateRange)==null?void 0:R.end)||""}}),[o,d]=f.useState(t.gender),[c,r]=f.useState(t.status),h=f.useRef(null);f.useEffect(()=>{d(t.gender),r(t.status)},[t.gender,t.status]);const j=a=>{const{name:n,value:i}=a.target;s(F=>({...F,[n]:i}))},N=()=>{const a=new URLSearchParams;t.id&&a.append("filter[id]",t.id),t.name&&a.append("filter[name]",t.name),t.phone&&a.append("filter[phone]",t.phone),t.membership_package_id!=="all"&&a.append("filter[membership_package_id]",t.membership_package_id),t.gender!=="all"&&a.append("filter[gender]",t.gender),t.status!=="all"&&a.append("filter[status]",t.status),t.joiningDateRange.start&&a.append("filter[start_date][start]",t.joiningDateRange.start),t.joiningDateRange.end&&a.append("filter[start_date][end]",t.joiningDateRange.end),t.expiryDateRange.start&&a.append("filter[payment_expiry_date][start]",t.expiryDateRange.start),t.expiryDateRange.end&&a.append("filter[payment_expiry_date][end]",t.expiryDateRange.end);const n=`/members?${a.toString()}`;P.visit(n)},w=()=>{s({id:"",name:"",phone:"",membership_package_id:"all",gender:"all",status:"all",joiningDateRange:{start:"",end:""},expiryDateRange:{start:"",end:""}}),d("all"),r("all")},C=()=>{const a=new Date,n=new Date(a);n.setDate(a.getDate()-10),s(i=>({...i,status:"expired",expiryDateRange:{start:n.toISOString().split("T")[0],end:a.toISOString().split("T")[0]}})),setTimeout(()=>{var i;(i=h.current)==null||i.click()},20)},k=()=>{const a=new Date,n=new Date(a);n.setDate(a.getDate()+10),s(i=>({...i,status:"active",expiryDateRange:{start:a.toISOString().split("T")[0],end:n.toISOString().split("T")[0]}})),setTimeout(()=>{var i;(i=h.current)==null||i.click()},20)};return e.jsxs(E,{children:[e.jsx(T,{asChild:!0,children:e.jsxs(x,{variant:"secondary",className:"border",children:[e.jsx(O,{size:14}),"   Filter"]})}),e.jsxs(A,{className:"p-4 space-y-4 w-fit max-w-full overflow-auto",children:[e.jsx("h3",{className:"font-bold text-lg",children:"Filter Members"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex col-span-full gap-4",children:[e.jsxs("div",{className:"col-span-full",children:[e.jsx(p,{htmlFor:"id",children:"ID"}),e.jsx(g,{type:"text",value:t.id,onChange:j,name:"id",id:"id",placeholder:"Membership ID",className:"mt-1 w-full"})]}),e.jsxs("div",{className:"col-span-full grow",children:[e.jsx(p,{htmlFor:"name",children:"Name"}),e.jsx(g,{type:"text",value:t.name,onChange:j,name:"name",id:"name",placeholder:"Start Typing Member Name...",className:"mt-1 w-full"})]})]}),e.jsxs("div",{children:[e.jsx(p,{children:"Gender"}),e.jsx(S,{items:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"All",value:"all"}],value:o,onChange:a=>{d(a),s(n=>({...n,gender:a}))}})]}),e.jsxs("div",{children:[e.jsx(p,{htmlFor:"membership-package",children:"Membership Package"}),e.jsxs(L,{value:t.membership_package_id,onValueChange:a=>s(n=>({...n,membership_package_id:a})),children:[e.jsx(M,{children:e.jsx(U,{placeholder:"Select membership package"})}),e.jsxs(z,{children:[e.jsx(_,{value:"all",children:"All"}),u.map(a=>e.jsx(_,{value:a.id.toString(),children:a.package_name},a.id))]})]})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx(p,{children:"Joining Date Range"}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(g,{type:"date",name:"joining_start_date",value:t.joiningDateRange.start,onChange:a=>{s(n=>({...n,joiningDateRange:{...n.joiningDateRange,start:a.target.value}}))},className:"w-full"}),e.jsx("span",{children:"-"}),e.jsx(g,{type:"date",name:"joining_end_date",value:t.joiningDateRange.end,onChange:a=>s(n=>({...n,joiningDateRange:{...n.joiningDateRange,end:a.target.value}})),className:"w-full"})]})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx(p,{children:"Payment Expiry Date Range"}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(g,{type:"date",name:"expiry_start_date",value:t.expiryDateRange.start,onChange:a=>s(n=>({...n,expiryDateRange:{...n.expiryDateRange,start:a.target.value}})),className:"w-full"}),e.jsx("span",{children:"-"}),e.jsx(g,{type:"date",name:"expiry_end_date",value:t.expiryDateRange.end,onChange:a=>s(n=>({...n,expiryDateRange:{...n.expiryDateRange,end:a.target.value}})),className:"w-full"})]})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx(p,{children:"Status"}),e.jsx(S,{items:[{label:"Active",value:"active"},{label:"Expired",value:"expired"},{label:"Unapproved",value:"unapproved"},{label:"All",value:"all"}],value:c,onChange:a=>{r(a),s(n=>({...n,status:a}))}})]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(x,{size:"sm",variant:"outline",onClick:C,children:"Expired in last 10 days"}),e.jsx(x,{size:"sm",variant:"outline",onClick:k,children:"Expiring in 10 days"})]}),e.jsxs("div",{className:"flex justify-end space-x-2 mt-4",children:[e.jsx(x,{variant:"outline",onClick:w,children:"Clear"}),e.jsx(x,{onClick:N,ref:h,children:"Apply"})]})]})]})}export{se as default};