import{W as d,j as e}from"./app-MbUP1EQI.js";import{D as u,b as p,c as h,d as x,e as b}from"./dialog-Bcf4xQSo.js";import{B as j}from"./button-CzAhYwEo.js";import{I as f}from"./input-BPMtujBP.js";import{L as k}from"./label-DUXNj4de.js";import{t as g}from"./use-toast-BPI7qPE7.js";import"./index-DrAYGk9J.js";import"./index-50k3gDpb.js";import"./index-ynk8XwVw.js";import"./index-B2Mnvzit.js";import"./x-BkjT11oR.js";import"./createLucideIcon-DhDSKE00.js";import"./utils-C-Zvzyq5.js";import"./index-DHdUJXuL.js";import"./index-Bb4qSo10.js";function T({member:r,open:n,onClose:o}){var s;const{data:a,setData:l,post:m,errors:i}=d({locker_number:((s=r.active_locker)==null?void 0:s.locker_number)||""}),c=t=>{t.preventDefault(),m(`/member/${r.id}/locker/edit`,{onSuccess:()=>{o(),g({description:"Locker number updated successfully..."})}})};return e.jsx(u,{open:n,onOpenChange:o,children:e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx(x,{children:"Edit Locker Number"}),e.jsxs(b,{children:["Edit the locker number for ",r.name,"."]})]}),e.jsxs("form",{onSubmit:c,children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(k,{children:"Locker Number"}),e.jsx(f,{value:a.locker_number,onChange:t=>l("locker_number",t.target.value),placeholder:"Enter new locker number"}),i.locker_number&&e.jsx("div",{className:"text-red-600",children:i.locker_number})]}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsx(j,{type:"submit",children:"Save Changes"})})]})]})})}export{T as default};