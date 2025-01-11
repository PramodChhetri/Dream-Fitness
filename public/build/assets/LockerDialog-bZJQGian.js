import{W as q,q as O,r as i,j as e}from"./app-3SIRTf-5.js";import{I as x}from"./InputError-BCZ6gpxT.js";import{B as I}from"./button-mE5Zer4v.js";import{D as P,b as T,c as B,d as M,e as Q}from"./dialog-HXmWLQJG.js";import{I as o}from"./input-B_VqwVNS.js";import{L as l}from"./label-sM4Vfyun.js";import{S as f,a as k,b as S,c as C,d as a}from"./select-BAAnM0MM.js";import{t as V}from"./use-toast-D1Qu1tBf.js";import"./index-C3fbTtBW.js";import"./index-Bb4qSo10.js";import"./utils-C-Zvzyq5.js";import"./index-SipnJt1m.js";import"./index-YuXTghCy.js";import"./index-Cqu9cwS9.js";import"./index-BVcS-tUL.js";import"./x-ZThs6_Gk.js";import"./createLucideIcon-a0XJ54KJ.js";import"./index-BwJKMgpa.js";import"./index-v8WOfFnQ.js";function ae({member:h,open:D,onClose:j}){const{post:y,data:s,setData:t,errors:c,setError:b}=q({locker_id:"",locker_number:"",bill_number:"",locker_discount:"0",paid_amount:"",payment_mode:"Cash",start_date:new Date().toISOString().split("T")[0]}),g=O().props.lockers,[n,E]=i.useState(null),[d,_]=i.useState(null),[L,v]=i.useState(0),[u,A]=i.useState(0);i.useEffect(()=>{if(s.locker_id){const r=g.find(m=>m.id.toString()===s.locker_id)||null;E(r),r&&(t("paid_amount",r.price.toString()),v(r.price))}},[s.locker_id]),i.useEffect(()=>{if(n&&s.locker_discount){const r=Number(s.locker_discount);if(r>n.price)_("Discount cannot exceed the locker price.");else{_(null);const m=n.price-r;v(m);const R=Number(s.paid_amount)-m;A(R)}}},[s.locker_discount,s.paid_amount,n]);const N=async r=>{if(r.preventDefault(),b("bill_number",""),!s.bill_number)return b("bill_number","Bill number is required.");d||y(`/member/${h.id}/locker/${s.locker_id}`,{onSuccess:()=>{j(),V({description:`Locker assigned to ${h.name} successfully extended`,dir:"left"})}})},p=u<0?{label:"Outstanding Amount",amount:Math.abs(u)}:u>0?{label:"Advance Amount",amount:u}:null;return e.jsx(P,{open:D,onOpenChange:j,children:e.jsxs(T,{className:"max-w-md",children:[e.jsxs(B,{children:[e.jsx(M,{children:"Assign Locker"}),e.jsxs(Q,{children:["Provide a locker for ",e.jsx("b",{children:h.name})]})]}),e.jsxs("form",{onSubmit:N,children:[e.jsxs("div",{children:[e.jsx(l,{children:"Choose Locker Duration"}),e.jsxs(f,{onValueChange:r=>t("locker_id",r),value:s.locker_id,children:[e.jsx(k,{children:e.jsx(S,{placeholder:"Select Locker Duration"})}),e.jsx(C,{children:g.map(r=>e.jsxs(a,{value:r.id.toString(),children:[r.months," Months - Rs. ",r.price]},r.id))})]})]}),e.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(l,{children:"Payment Mode"}),e.jsxs(f,{defaultValue:"Cash",onValueChange:r=>t("payment_mode",r),value:s.payment_mode,children:[e.jsx(k,{children:e.jsx(S,{placeholder:"Select Payment Mode"})}),e.jsxs(C,{children:[e.jsx(a,{value:"Cash",children:"Cash"}),e.jsx(a,{value:"QR",children:"QR"}),e.jsx(a,{value:"Cash + QR",children:"Cash + QR"}),e.jsx(a,{value:"Free",children:"Free"}),e.jsx(a,{value:"Cheque",children:"Cheque"})]})]})]}),e.jsxs("div",{children:[e.jsx(l,{children:"Start Date"}),e.jsx(o,{type:"date",value:s.start_date,onChange:r=>t("start_date",r.target.value),required:!0})]})]}),e.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(l,{children:"Locker Number"}),e.jsx(o,{value:s.locker_number,onChange:r=>t("locker_number",r.target.value),placeholder:"Enter locker number",required:!0}),c.locker_number&&e.jsx(x,{message:c.locker_number})]}),e.jsxs("div",{children:[e.jsx(l,{children:"Bill Number"}),e.jsx(o,{onChange:r=>t("bill_number",r.target.value),placeholder:"Enter bill number",required:!0}),c.bill_number&&e.jsx(x,{message:c.bill_number})]})]}),e.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(l,{children:"Discount"}),e.jsx(o,{type:"number",onChange:r=>t("locker_discount",r.target.value),placeholder:"Enter discount (if any)"}),d&&e.jsx(x,{message:d})]}),e.jsxs("div",{children:[e.jsx(l,{children:"Paid Amount"}),e.jsx(o,{type:"number",value:s.paid_amount,onChange:r=>t("paid_amount",r.target.value),placeholder:"Enter paid amount",required:!0})]})]}),n&&e.jsxs("div",{className:"mt-4 p-4 bg-muted rounded-lg",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Payment Summary"}),e.jsxs("p",{children:[e.jsx("b",{children:"Locker Duration:"})," ",n.months," months"]}),e.jsxs("p",{children:[e.jsx("b",{children:"Price:"})," Rs. ",n.price]}),e.jsxs("p",{children:[e.jsx("b",{children:"Discount:"})," Rs. ",s.locker_discount||0]}),e.jsxs("p",{children:[e.jsx("b",{children:"Total Amount:"})," Rs ",L]}),p&&e.jsxs("p",{children:[e.jsxs("b",{children:[p.label,":"]})," Rs ",p.amount]})]}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(I,{type:"submit",disabled:!!d||!s.bill_number||!n,children:"Assign Locker"})})]})]})})}export{ae as LockerDialog};
