import{q as v,r as m,W as f,j as e,y as b}from"./app-MbUP1EQI.js";import{B as C}from"./button-CzAhYwEo.js";import{D as N,a as S,b as D,c as q,d as k}from"./dialog-Bcf4xQSo.js";import{I as i}from"./input-BPMtujBP.js";import{L as r}from"./label-DUXNj4de.js";import{t as u}from"./use-toast-BPI7qPE7.js";import{C as F}from"./checkbox-CoZo_njf.js";import{P as A}from"./pencil-DMp0N1wW.js";import"./index-DHdUJXuL.js";import"./index-Bb4qSo10.js";import"./utils-C-Zvzyq5.js";import"./index-DrAYGk9J.js";import"./index-50k3gDpb.js";import"./index-ynk8XwVw.js";import"./index-B2Mnvzit.js";import"./x-BkjT11oR.js";import"./createLucideIcon-DhDSKE00.js";import"./check-BQwKtKwj.js";const X=({pkg:t})=>{const h=v().props.accessControls,[c,p]=m.useState(JSON.parse(t.access_control_ids||"[]")),[x,d]=m.useState(!1);console.log(t);const{data:n,setData:l,put:P,processing:o,reset:E,errors:a}=f({package_name:t.package_name,admission_amount:t.admission_amount.toString(),months:t.months.toString(),monthly_amount:t.monthly_amount.toString(),discount_quarterly:t.discount_quarterly.toString(),discount_half_yearly:t.discount_half_yearly.toString(),discount_yearly:t.discount_quarterly.toString()}),_=s=>{s.preventDefault(),console.log({...n,access_control_ids:c}),b.put(route("settings.updatePackage",t.id),{...n,access_control_ids:c},{onSuccess:()=>{u({description:"Package updated successfully..."}),d(!1)},onError:()=>{u({description:"Failed to update package...",variant:"destructive"})}})},y=s=>{const g=c.includes(s)?c.filter(j=>j!==s):[...c,s];p(g)};return e.jsxs(N,{open:x,onOpenChange:d,children:[e.jsx(S,{asChild:!0,children:e.jsx("button",{className:"text-sm me-5 text-muted-foreground flex gap-1",children:e.jsx(A,{size:15})})}),e.jsxs(D,{children:[e.jsx(q,{children:e.jsxs(k,{children:["Edit Package ",t.package_name]})}),e.jsxs("form",{onSubmit:_,className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx(r,{htmlFor:"package_name",children:"Package Name"}),e.jsx(i,{id:"package_name",value:n.package_name,onChange:s=>l("package_name",s.target.value),placeholder:"Enter package name",disabled:o,className:"w-full"}),a.package_name&&e.jsx("p",{className:"text-red-500 text-sm",children:a.package_name})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"months",children:"Total Months"}),e.jsx(i,{id:"months",value:n.months,onChange:s=>l("months",s.target.value),placeholder:"0.00",type:"number",disabled:o}),a.months&&e.jsx("p",{className:"text-red-500 text-sm",children:a.months})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"admission_amount",children:"Admission Amount"}),e.jsx(i,{id:"admission_amount",value:n.admission_amount,onChange:s=>l("admission_amount",s.target.value),placeholder:"0.00",type:"number",disabled:o}),a.admission_amount&&e.jsx("p",{className:"text-red-500 text-sm",children:a.admission_amount})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"monthly_amount",children:"Monthly Amount"}),e.jsx(i,{id:"monthly_amount",value:n.monthly_amount,onChange:s=>l("monthly_amount",s.target.value),placeholder:"0.00",type:"number",disabled:o}),a.monthly_amount&&e.jsx("p",{className:"text-red-500 text-sm",children:a.monthly_amount})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"discount_quarterly",children:"Quarterly Discount"}),e.jsx(i,{id:"discount_quarterly",value:n.discount_quarterly,onChange:s=>l("discount_quarterly",s.target.value),placeholder:"0.00",type:"number",disabled:o}),a.discount_quarterly&&e.jsx("p",{className:"text-red-500 text-sm",children:a.discount_quarterly})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"discount_half_yearly",children:"Half-Yearly Discount"}),e.jsx(i,{id:"discount_half_yearly",value:n.discount_half_yearly,onChange:s=>l("discount_half_yearly",s.target.value),placeholder:"0.00",type:"number",disabled:o}),a.discount_half_yearly&&e.jsx("p",{className:"text-red-500 text-sm",children:a.discount_half_yearly})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"discount_yearly",children:"Yearly Discount"}),e.jsx(i,{id:"discount_yearly",value:n.discount_yearly,onChange:s=>l("discount_yearly",s.target.value),placeholder:"0.00",type:"number",disabled:o}),a.discount_yearly&&e.jsx("p",{className:"text-red-500 text-sm",children:a.discount_yearly})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx(r,{children:"Access Controls"}),e.jsx("div",{className:"border border-border rounded-lg p-3 max-h-[200px] overflow-y-auto grid grid-cols-2 gap-4",children:h.map(s=>e.jsx("div",{children:e.jsxs(r,{className:"flex items-center space-x-2 cursor-pointer",children:[e.jsx(F,{checked:c.includes(s.id),onCheckedChange:()=>y(s.id)}),e.jsx("span",{children:s.name})]})},s.id))})]}),e.jsx("div",{className:"col-span-2",children:e.jsx(C,{type:"submit",disabled:o,className:"w-full mt-4",children:o?"Saving...":"Save"})})]})]})]})};export{X as default};
