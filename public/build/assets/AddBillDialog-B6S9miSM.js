import{W as p,j as r}from"./app-BbJUaZt7.js";import{I as u}from"./InputError-NIrKKB-2.js";import{B as s}from"./button-UwysrHzP.js";import{D as c,b as d,c as x,d as h,e as j}from"./dialog-JG440Rn_.js";import{I as f}from"./input-Cqv19wrC.js";import{L as g}from"./label-DsFCVgVZ.js";import"./index-8PO45I_3.js";import"./index-Bb4qSo10.js";import"./utils-C-Zvzyq5.js";import"./index-BAXoe19z.js";import"./index-B95Fhcwf.js";import"./index-DJQKv4up.js";import"./index-C1KCpwI9.js";import"./x-Dzg8clAH.js";import"./createLucideIcon-CPw1ASD4.js";function O({member:m,refetch:D,open:o,onClose:i}){const{put:_,data:t,setData:a,errors:b,setError:l}=p({bill_number:0}),n=async e=>{if(e.preventDefault(),l("bill_number",""),Number(t.bill_number)===0||!t.bill_number)return l("bill_number","Invalid bill number")};return r.jsx(c,{open:o,onOpenChange:i,children:r.jsxs(d,{className:"max-w-md",children:[r.jsxs(x,{children:[r.jsx(h,{children:"Set Bill Number"}),r.jsxs(j,{children:["This will apply to the latest payment of ",r.jsx("b",{children:m.name})]})]}),r.jsxs("form",{onSubmit:n,children:[r.jsx(g,{htmlFor:"bill_number",children:"Bill Number"}),r.jsx(f,{type:"number",id:"bill_number",onChange:e=>a("bill_number",parseInt(e.target.value))}),r.jsx(u,{message:b.bill_number}),r.jsxs("div",{className:"flex justify-end gap-2 mt-4",children:[r.jsx(s,{type:"button",variant:"secondary",onClick:i,children:"Cancel"}),r.jsx(s,{type:"submit",onClick:n,children:"Assign"})]})]})]})})}export{O as AddBillDialog};