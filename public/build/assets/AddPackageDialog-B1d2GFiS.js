import{q as j,r as d,W as N,j as e,y as v}from"./app-D3xhd7x4.js";import{B as c}from"./button-kSVH6inc.js";import{D as f,a as C,b as k,c as q,d as D}from"./dialog-CoUukDiU.js";import{I as i}from"./input-B5jvm_hA.js";import{L as r}from"./label-B7b8UO_Y.js";import{t as A}from"./use-toast-CeK-EtdP.js";import{C as S}from"./checkbox-DYYB3Whi.js";import"./index-BN1U6-Hz.js";import"./index-Bb4qSo10.js";import"./utils-C-Zvzyq5.js";import"./index-BA9ojx9c.js";import"./index-BkFfMWl8.js";import"./index-CHWu3Xan.js";import"./index-D_4hUVl6.js";import"./x-n02M-ldN.js";import"./createLucideIcon-RljSjpz3.js";import"./check-CcE03I2l.js";const K=()=>{const u=j().props.accessControls,[l,h]=d.useState([]),[y,m]=d.useState(!1);d.useState({});const{data:a,setData:o,post:F,processing:n,reset:_,errors:t}=N({package_name:"",admission_amount:"",months:"",monthly_amount:"",discount_quarterly:"",discount_half_yearly:"",discount_yearly:""}),p=s=>{s.preventDefault(),a.package_name.trim()||(t.package_name="Package name is required."),(!a.admission_amount||isNaN(Number(a.admission_amount))||Number(a.admission_amount)<0)&&(t.admission_amount="Admission amount must be a valid non-negative number."),(!a.months||isNaN(Number(a.months))||Number(a.months)<=0)&&(t.months="Months must be a valid number greater than 0."),a.monthly_amount&&(isNaN(Number(a.monthly_amount))||Number(a.monthly_amount)<0)&&(t.monthly_amount="Monthly amount must be a valid non-negative number."),a.discount_quarterly&&(isNaN(Number(a.discount_quarterly))||Number(a.discount_quarterly)<0)&&(t.discount_quarterly="Quarterly discount must be a valid non-negative number."),a.discount_half_yearly&&(isNaN(Number(a.discount_half_yearly))||Number(a.discount_half_yearly)<0)&&(t.discount_half_yearly="Half-yearly discount must be a valid non-negative number."),a.discount_yearly&&(isNaN(Number(a.discount_yearly))||Number(a.discount_yearly)<0)&&(t.discount_yearly="Yearly discount must be a valid non-negative number."),v.post(route("settings.storePackage"),{...a,access_control_ids:l},{onSuccess:()=>{A({title:"Success",description:"Package added successfully"}),_(),m(!1)},onError:()=>{}})},x=s=>{const g=l.includes(s)?l.filter(b=>b!==s):[...l,s];h(g)};return e.jsxs(f,{open:y,onOpenChange:m,children:[e.jsx(C,{asChild:!0,children:e.jsx(c,{children:"Add Package"})}),e.jsxs(k,{children:[e.jsx(q,{children:e.jsx(D,{children:"Add New Package"})}),e.jsxs("form",{onSubmit:p,className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx(r,{htmlFor:"package_name",children:"Package Name"}),e.jsx(i,{id:"package_name",value:a.package_name,onChange:s=>o("package_name",s.target.value),placeholder:"Enter package name",disabled:n,className:"w-full"}),t.package_name&&e.jsx("p",{className:"text-red-500 text-sm",children:t.package_name})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"months",children:"Total Months"}),e.jsx(i,{id:"months",value:a.months,onChange:s=>o("months",s.target.value),type:"number",disabled:n}),t.months&&e.jsx("p",{className:"text-red-500 text-sm",children:t.months})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"admission_amount",children:"Admission Amount"}),e.jsx(i,{id:"admission_amount",value:a.admission_amount,onChange:s=>o("admission_amount",s.target.value),type:"number",disabled:n}),t.admission_amount&&e.jsx("p",{className:"text-red-500 text-sm",children:t.admission_amount})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"monthly_amount",children:"Monthly Amount"}),e.jsx(i,{id:"monthly_amount",value:a.monthly_amount,onChange:s=>o("monthly_amount",s.target.value),type:"number",disabled:n}),t.monthly_amount&&e.jsx("p",{className:"text-red-500 text-sm",children:t.monthly_amount})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"discount_quarterly",children:"Quarterly Discount"}),e.jsx(i,{id:"discount_quarterly",value:a.discount_quarterly,onChange:s=>o("discount_quarterly",s.target.value),type:"number",disabled:n}),t.discount_quarterly&&e.jsx("p",{className:"text-red-500 text-sm",children:t.discount_quarterly})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"discount_half_yearly",children:"Half-Yearly Discount"}),e.jsx(i,{id:"discount_half_yearly",value:a.discount_half_yearly,onChange:s=>o("discount_half_yearly",s.target.value),type:"number",disabled:n}),t.discount_half_yearly&&e.jsx("p",{className:"text-red-500 text-sm",children:t.discount_half_yearly})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"discount_yearly",children:"Yearly Discount"}),e.jsx(i,{id:"discount_yearly",value:a.discount_yearly,onChange:s=>o("discount_yearly",s.target.value),type:"number",disabled:n}),t.discount_yearly&&e.jsx("p",{className:"text-red-500 text-sm",children:t.discount_yearly})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx(r,{children:"Access Controls"}),e.jsx("div",{className:"border border-border rounded-lg p-3 max-h-[200px] overflow-y-auto grid grid-cols-2 gap-4",children:u.map(s=>e.jsx("div",{children:e.jsxs(r,{className:"flex items-center space-x-2 cursor-pointer",children:[e.jsx(S,{checked:l.includes(s.id),onCheckedChange:()=>x(s.id)}),e.jsx("span",{children:s.name})]})},s.id))})]}),e.jsx("div",{className:"col-span-2",children:e.jsx(c,{type:"submit",disabled:n,className:"w-full mt-4",children:n?"Saving...":"Save"})})]})]})]})};export{K as default};