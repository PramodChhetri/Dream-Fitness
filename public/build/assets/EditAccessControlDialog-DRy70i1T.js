import{r as h,W as u,j as e,y as j}from"./app-3SIRTf-5.js";import{B as g}from"./button-mE5Zer4v.js";import{D as v,a as f,b as w,c as N,d as b}from"./dialog-HXmWLQJG.js";import{I as d}from"./input-B_VqwVNS.js";import{L as o}from"./label-sM4Vfyun.js";import{t as p}from"./use-toast-D1Qu1tBf.js";import{P as C}from"./pencil-Hsy6qljt.js";import"./index-C3fbTtBW.js";import"./index-Bb4qSo10.js";import"./utils-C-Zvzyq5.js";import"./index-SipnJt1m.js";import"./index-YuXTghCy.js";import"./index-Cqu9cwS9.js";import"./index-BVcS-tUL.js";import"./x-ZThs6_Gk.js";import"./createLucideIcon-a0XJ54KJ.js";const k=({control:l})=>{const[c,n]=h.useState(!1),{data:t,setData:i,post:D,processing:a,reset:E,errors:r,clearErrors:m}=u({name:l.name,ip_address:l.ip_address.toString(),username:l.username,password:"",port:"80",description:l.description}),x=s=>{s.preventDefault(),m(),j.put(route("settings.updateAccessControl",l.id),{...t},{onSuccess:()=>{p({title:"Success",description:"Access Control updated successfully"}),n(!1),i("password","")},onError:()=>{p({title:"Error",description:"Failed to update Access Control",variant:"destructive"})}})};return e.jsxs(v,{open:c,onOpenChange:n,children:[e.jsx(f,{asChild:!0,children:e.jsx("button",{className:"text-sm me-5 text-muted-foreground flex gap-1",children:e.jsx(C,{size:15})})}),e.jsxs(w,{children:[e.jsx(N,{children:e.jsx(b,{children:"Update Access Control"})}),e.jsxs("form",{onSubmit:x,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(o,{htmlFor:"name",children:"Name"}),e.jsx(d,{id:"name",value:t.name,onChange:s=>i("name",s.target.value),placeholder:"Enter name",disabled:a}),r.name&&e.jsx("p",{className:"text-red-500 text-sm",children:r.name})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("div",{className:"grow",children:[e.jsx(o,{htmlFor:"ip_address",children:"IP Address"}),e.jsx(d,{id:"ip_address",value:t.ip_address,onChange:s=>i("ip_address",s.target.value),placeholder:"192.168.0.1",disabled:a}),r.ip_address&&e.jsx("p",{className:"text-red-500 text-sm",children:r.ip_address})]}),e.jsxs("div",{className:"grow max-w-28",children:[e.jsx(o,{htmlFor:"port",children:"Port"}),e.jsx(d,{id:"port",value:t.port,onChange:s=>i("port",s.target.value),placeholder:"80",type:"number",disabled:a}),r.port&&e.jsx("p",{className:"text-red-500 text-sm",children:r.port})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("div",{className:"grow",children:[e.jsx(o,{htmlFor:"username",children:"Username"}),e.jsx(d,{id:"username",value:t.username,onChange:s=>i("username",s.target.value),placeholder:"admin",disabled:a}),r.username&&e.jsx("p",{className:"text-red-500 text-sm",children:r.username})]}),e.jsxs("div",{className:"grow",children:[e.jsx(o,{htmlFor:"password",children:"Password"}),e.jsx(d,{id:"password",type:"text",value:t.password,onChange:s=>i("password",s.target.value),placeholder:"Enter password",disabled:a}),r.password&&e.jsx("p",{className:"text-red-500 text-sm",children:r.password})]})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"description",children:"Description"}),e.jsx(d,{id:"description",value:t.description,onChange:s=>i("description",s.target.value),placeholder:"Description",disabled:a}),r.description&&e.jsx("p",{className:"text-red-500 text-sm",children:r.description})]}),e.jsx(g,{type:"submit",disabled:a,className:"w-full mt-4",children:a?"Saving...":"Save"})]})]})]})};export{k as default};
