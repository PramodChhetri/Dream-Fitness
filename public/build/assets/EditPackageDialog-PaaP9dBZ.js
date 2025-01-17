import{q as j,r as c,W as f,j as e,y as v}from"./app-BbJUaZt7.js";import{B as N}from"./button-UwysrHzP.js";import{D as C,a as S,b as q,c as k,d as D}from"./dialog-JG440Rn_.js";import{I as l}from"./input-Cqv19wrC.js";import{L as r}from"./label-DsFCVgVZ.js";import{t as u}from"./use-toast-DB_HyPaF.js";import{C as A}from"./checkbox-D4co0-9i.js";import{P as F}from"./pencil-DXmseSrC.js";import"./index-8PO45I_3.js";import"./index-Bb4qSo10.js";import"./utils-C-Zvzyq5.js";import"./index-BAXoe19z.js";import"./index-B95Fhcwf.js";import"./index-DJQKv4up.js";import"./index-C1KCpwI9.js";import"./x-Dzg8clAH.js";import"./createLucideIcon-CPw1ASD4.js";import"./check-DjI-pqQE.js";const X=({pkg:n})=>{const h=j().props.accessControls,[m,y]=c.useState(JSON.parse(n.access_control_ids||"[]")),[_,d]=c.useState(!1);console.log(n);const{data:a,setData:i,put:P,processing:o,reset:E,errors:t}=f({package_name:n.package_name,admission_amount:n.admission_amount.toString(),months:n.months.toString(),monthly_amount:n.monthly_amount.toString(),discount_quarterly:n.discount_quarterly.toString(),discount_half_yearly:n.discount_half_yearly.toString(),discount_yearly:n.discount_quarterly.toString()}),x=s=>{s.preventDefault(),console.log({...a,access_control_ids:m}),a.package_name.trim()||(t.package_name="Package name is required."),(!a.admission_amount||isNaN(Number(a.admission_amount))||Number(a.admission_amount)<0)&&(t.admission_amount="Admission amount must be a valid non-negative number."),(!a.months||isNaN(Number(a.months))||Number(a.months)<=0)&&(t.months="Months must be a valid number greater than 0."),a.monthly_amount&&(isNaN(Number(a.monthly_amount))||Number(a.monthly_amount)<0)&&(t.monthly_amount="Monthly amount must be a valid non-negative number."),a.discount_quarterly&&(isNaN(Number(a.discount_quarterly))||Number(a.discount_quarterly)<0)&&(t.discount_quarterly="Quarterly discount must be a valid non-negative number."),a.discount_half_yearly&&(isNaN(Number(a.discount_half_yearly))||Number(a.discount_half_yearly)<0)&&(t.discount_half_yearly="Half-yearly discount must be a valid non-negative number."),a.discount_yearly&&(isNaN(Number(a.discount_yearly))||Number(a.discount_yearly)<0)&&(t.discount_yearly="Yearly discount must be a valid non-negative number."),v.put(route("settings.updatePackage",n.id),{...a,access_control_ids:m},{onSuccess:()=>{u({description:"Package updated successfully..."}),d(!1)},onError:()=>{u({description:"Failed to update package...",variant:"destructive"})}})},p=s=>{const g=m.includes(s)?m.filter(b=>b!==s):[...m,s];y(g)};return e.jsxs(C,{open:_,onOpenChange:d,children:[e.jsx(S,{asChild:!0,children:e.jsx("button",{className:"text-sm me-5 text-muted-foreground flex gap-1",children:e.jsx(F,{size:15})})}),e.jsxs(q,{children:[e.jsx(k,{children:e.jsxs(D,{children:["Edit Package ",n.package_name]})}),e.jsxs("form",{onSubmit:x,className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx(r,{htmlFor:"package_name",children:"Package Name"}),e.jsx(l,{id:"package_name",value:a.package_name,onChange:s=>i("package_name",s.target.value),placeholder:"Enter package name",disabled:o,className:"w-full"}),t.package_name&&e.jsx("p",{className:"text-red-500 text-sm",children:t.package_name})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"months",children:"Total Months"}),e.jsx(l,{id:"months",value:a.months,onChange:s=>i("months",s.target.value),type:"number",disabled:o}),t.months&&e.jsx("p",{className:"text-red-500 text-sm",children:t.months})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"admission_amount",children:"Admission Amount"}),e.jsx(l,{id:"admission_amount",value:a.admission_amount,onChange:s=>i("admission_amount",s.target.value),type:"number",disabled:o}),t.admission_amount&&e.jsx("p",{className:"text-red-500 text-sm",children:t.admission_amount})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"monthly_amount",children:"Monthly Amount"}),e.jsx(l,{id:"monthly_amount",value:a.monthly_amount,onChange:s=>i("monthly_amount",s.target.value),type:"number",disabled:o}),t.monthly_amount&&e.jsx("p",{className:"text-red-500 text-sm",children:t.monthly_amount})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"discount_quarterly",children:"Quarterly Discount"}),e.jsx(l,{id:"discount_quarterly",value:a.discount_quarterly,onChange:s=>i("discount_quarterly",s.target.value),type:"number",disabled:o}),t.discount_quarterly&&e.jsx("p",{className:"text-red-500 text-sm",children:t.discount_quarterly})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"discount_half_yearly",children:"Half-Yearly Discount"}),e.jsx(l,{id:"discount_half_yearly",value:a.discount_half_yearly,onChange:s=>i("discount_half_yearly",s.target.value),type:"number",disabled:o}),t.discount_half_yearly&&e.jsx("p",{className:"text-red-500 text-sm",children:t.discount_half_yearly})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"discount_yearly",children:"Yearly Discount"}),e.jsx(l,{id:"discount_yearly",value:a.discount_yearly,onChange:s=>i("discount_yearly",s.target.value),type:"number",disabled:o}),t.discount_yearly&&e.jsx("p",{className:"text-red-500 text-sm",children:t.discount_yearly})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx(r,{children:"Access Controls"}),e.jsx("div",{className:"border border-border rounded-lg p-3 max-h-[200px] overflow-y-auto grid grid-cols-2 gap-4",children:h.map(s=>e.jsx("div",{children:e.jsxs(r,{className:"flex items-center space-x-2 cursor-pointer",children:[e.jsx(A,{checked:m.includes(s.id),onCheckedChange:()=>p(s.id)}),e.jsx("span",{children:s.name})]})},s.id))})]}),e.jsx("div",{className:"col-span-2",children:e.jsx(N,{type:"submit",disabled:o,className:"w-full mt-4",children:o?"Saving...":"Save"})})]})]})]})};export{X as default};
