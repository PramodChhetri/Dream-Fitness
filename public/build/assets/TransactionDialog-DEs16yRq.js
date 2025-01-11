import{W as y,r as m,j as e}from"./app-MbUP1EQI.js";import{I as r}from"./InputError-BAx_On6R.js";import{B as p}from"./button-CzAhYwEo.js";import{D as C,a as b,b as D,c as S,d as T,e as E}from"./dialog-Bcf4xQSo.js";import{I as l}from"./input-BPMtujBP.js";import{L as n}from"./label-DUXNj4de.js";import{S as u,a as h,b as x,c as j,d as i}from"./select-DuLVWfqX.js";import{T as N}from"./textarea-BUeE_V5k.js";import{t as I}from"./use-toast-BPI7qPE7.js";import"./index-DHdUJXuL.js";import"./index-Bb4qSo10.js";import"./utils-C-Zvzyq5.js";import"./index-DrAYGk9J.js";import"./index-50k3gDpb.js";import"./index-ynk8XwVw.js";import"./index-B2Mnvzit.js";import"./x-BkjT11oR.js";import"./createLucideIcon-DhDSKE00.js";import"./index-CrW0pUbx.js";import"./index-BBBSSME7.js";import"./check-BQwKtKwj.js";const P=()=>{const{data:o,setData:s,errors:t,post:g,processing:c,reset:v}=y({name:"",transaction_type:"",description:"",total_amount:"",paid_amount:"",payment_date:"",payment_mode:"",bill_number:""}),[f,d]=m.useState(!1);m.useEffect(()=>{const a=new Date().toISOString().split("T")[0];s("payment_date",a)},[]);const _=a=>{a.preventDefault(),g("/transactions/store",{onSuccess:()=>{I({description:"Transaction created successfully..."}),d(!1),v()}})};return e.jsxs(C,{open:f,onOpenChange:d,children:[e.jsx(b,{children:e.jsx(p,{children:"Create Transaction"})}),e.jsxs(D,{children:[e.jsxs(S,{children:[e.jsx(T,{children:"Create Transaction"}),e.jsx(E,{children:"Create miscellaneous transactions for non-registered or registered members."})]}),e.jsxs("form",{onSubmit:_,children:[e.jsx("div",{className:"grid grid-cols-1 gap-4",children:e.jsxs("div",{children:[e.jsx(n,{children:"Person Name"}),e.jsx(l,{required:!0,placeholder:"Enter Full Name of a person",value:o.name,onChange:a=>s("name",a.target.value)}),e.jsx(r,{message:t.name})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-4",children:[e.jsxs("div",{children:[e.jsx(n,{children:"Transaction Type"}),e.jsxs(u,{value:o.transaction_type,onValueChange:a=>s("transaction_type",a),children:[e.jsx(h,{children:e.jsx(x,{placeholder:"Select transaction type"})}),e.jsxs(j,{children:[e.jsx(i,{value:"service",children:"Service"}),e.jsx(i,{value:"product",children:"Product"}),e.jsx(i,{value:"refund",children:"Refund"}),e.jsx(i,{value:"others",children:"Others"})]})]}),e.jsx(r,{message:t.transaction_type})]}),e.jsxs("div",{children:[e.jsx(n,{children:"Total Amount"}),e.jsx(l,{type:"number",placeholder:"Enter total amount",value:o.total_amount,onChange:a=>s("total_amount",a.target.value)}),e.jsx(r,{message:t.total_amount})]}),e.jsxs("div",{children:[e.jsx(n,{children:"Paid Amount"}),e.jsx(l,{type:"number",placeholder:"Enter paid amount",value:o.paid_amount,onChange:a=>s("paid_amount",a.target.value)}),e.jsx(r,{message:t.paid_amount})]}),e.jsxs("div",{children:[e.jsx(n,{children:"Payment Mode"}),e.jsxs(u,{value:o.payment_mode,onValueChange:a=>s("payment_mode",a),children:[e.jsx(h,{children:e.jsx(x,{placeholder:"Select payment mode"})}),e.jsxs(j,{children:[e.jsx(i,{value:"Cash",children:"Cash"}),e.jsx(i,{value:"QR",children:"QR"}),e.jsx(i,{value:"Cash + QR",children:"Cash + QR"}),e.jsx(i,{value:"Cheque",children:"Cheque"})]})]}),e.jsx(r,{message:t.payment_mode})]}),e.jsxs("div",{children:[e.jsx(n,{children:"Payment Date"}),e.jsx(l,{type:"date",value:o.payment_date,onChange:a=>s("payment_date",a.target.value)}),e.jsx(r,{message:t.payment_date})]}),e.jsxs("div",{children:[e.jsx(n,{children:"Bill Number (optional)"}),e.jsx(l,{placeholder:"Enter bill number (if applicable)",onChange:a=>s("bill_number",a.target.value)}),e.jsx(r,{message:t.bill_number})]})]}),e.jsx("div",{className:"grid grid-cols-1 gap-4 mt-4",children:e.jsxs("div",{children:[e.jsx(n,{children:"Description"}),e.jsx(N,{placeholder:"Enter Description of the transaction",value:o.description,onChange:a=>s("description",a.target.value)}),e.jsx(r,{message:t.description})]})}),e.jsx(p,{type:"submit",className:"mt-4 w-full",disabled:c,children:c?"Processing...":"Create Transaction"})]})]})]})},Y=P;export{Y as default};