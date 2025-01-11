import{W as q,q as O,r as i,j as e}from"./app-MbUP1EQI.js";import{I as _}from"./InputError-BAx_On6R.js";import{B}from"./button-CzAhYwEo.js";import{D as I,b as P,c as T,d as M,e as Q}from"./dialog-Bcf4xQSo.js";import{I as h}from"./input-BPMtujBP.js";import{L as o}from"./label-DUXNj4de.js";import{S as k,a as v,b as S,c as C,d as l}from"./select-DuLVWfqX.js";import{t as V}from"./use-toast-BPI7qPE7.js";import"./index-DHdUJXuL.js";import"./index-Bb4qSo10.js";import"./utils-C-Zvzyq5.js";import"./index-DrAYGk9J.js";import"./index-50k3gDpb.js";import"./index-ynk8XwVw.js";import"./index-B2Mnvzit.js";import"./x-BkjT11oR.js";import"./createLucideIcon-DhDSKE00.js";import"./index-CrW0pUbx.js";import"./index-BBBSSME7.js";import"./check-BQwKtKwj.js";function ae({member:u,open:y,onClose:p}){const{put:D,data:s,setData:n,errors:x,setError:j}=q({locker_id:"",bill_number:"",locker_discount:"",paid_amount:"",payment_mode:"Cash"}),b=O().props.lockers,[t,E]=i.useState(null),[a,f]=i.useState(null),[L,g]=i.useState(0),[c,R]=i.useState(0);i.useEffect(()=>{if(s.locker_id){const r=b.find(d=>d.id.toString()===s.locker_id)||null;E(r),r&&(n("paid_amount",r.price.toString()),g(r.price))}},[s.locker_id]),i.useEffect(()=>{if(t&&s.locker_discount){const r=Number(s.locker_discount);if(r>t.price)f("Discount cannot exceed the locker price.");else{f(null);const d=t.price-r;g(d);const N=Number(s.paid_amount)-d;R(N)}}},[s.locker_discount,s.paid_amount,t]);const A=async r=>{if(r.preventDefault(),j("bill_number",""),!s.bill_number)return j("bill_number","Bill number is required.");a||D(`/member/${u.id}/locker/${s.locker_id}`,{onSuccess:()=>{p(),V({description:`Locker assigned to ${u.name} has been extended successfully`,dir:"left"})}})},m=c<0?{label:"Outstanding Amount",amount:Math.abs(c)}:c>0?{label:"Advance Amount",amount:c}:null;return e.jsx(I,{open:y,onOpenChange:p,children:e.jsxs(P,{className:"max-w-md",children:[e.jsxs(T,{children:[e.jsx(M,{children:"Extend Locker Subscription"}),e.jsxs(Q,{children:["Extend a locker subscription for ",e.jsx("b",{children:u.name})]})]}),e.jsxs("form",{onSubmit:A,children:[e.jsxs("div",{children:[e.jsx(o,{children:"Choose Locker Duration"}),e.jsxs(k,{onValueChange:r=>n("locker_id",r),value:s.locker_id,children:[e.jsx(v,{children:e.jsx(S,{placeholder:"Select Locker Duration"})}),e.jsx(C,{children:b.map(r=>e.jsxs(l,{value:r.id.toString(),children:[r.months," Months - Rs. ",r.price]},r.id))})]})]}),e.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(o,{children:"Payment Mode"}),e.jsxs(k,{defaultValue:"Cash",onValueChange:r=>n("payment_mode",r),value:s.payment_mode,children:[e.jsx(v,{children:e.jsx(S,{placeholder:"Select Payment Mode"})}),e.jsxs(C,{children:[e.jsx(l,{value:"Cash",children:"Cash"}),e.jsx(l,{value:"QR",children:"QR"}),e.jsx(l,{value:"Cash + QR",children:"Cash + QR"}),e.jsx(l,{value:"Free",children:"Free"}),e.jsx(l,{value:"Cheque",children:"Cheque"})]})]})]}),e.jsxs("div",{children:[e.jsx(o,{children:"Bill Number"}),e.jsx(h,{onChange:r=>n("bill_number",r.target.value),placeholder:"Enter bill number",required:!0}),x.bill_number&&e.jsx(_,{message:x.bill_number})]}),e.jsxs("div",{children:[e.jsx(o,{children:"Discount"}),e.jsx(h,{type:"number",onChange:r=>n("locker_discount",r.target.value),placeholder:"Enter discount (if any)"}),a&&e.jsx(_,{message:a})]}),e.jsxs("div",{children:[e.jsx(o,{children:"Paid Amount"}),e.jsx(h,{type:"number",value:s.paid_amount,onChange:r=>n("paid_amount",r.target.value),placeholder:"Enter paid amount",required:!0})]})]}),t&&e.jsxs("div",{className:"mt-4 p-4 bg-muted rounded-lg",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Payment Summary"}),e.jsxs("p",{children:[e.jsx("b",{children:"Locker Duration:"})," ",t.months," months"]}),e.jsxs("p",{children:[e.jsx("b",{children:"Price:"})," Rs. ",t.price]}),e.jsxs("p",{children:[e.jsx("b",{children:"Discount:"})," Rs. ",s.locker_discount||0]}),e.jsxs("p",{children:[e.jsx("b",{children:"Total Amount:"})," Rs ",L]}),m&&e.jsxs("p",{children:[e.jsxs("b",{children:[m.label,":"]})," Rs ",m.amount]})]}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(B,{type:"submit",disabled:!!a||!s.bill_number||!t,children:"Extend Locker"})})]})]})})}export{ae as ExtendLocker};
