import{j as e,r as u,q as U,W,y as C}from"./app-BbJUaZt7.js";import{b as V,B as g}from"./button-UwysrHzP.js";import{C as q,a as J,b as K,c as Q,d as X}from"./card-BdKu3Mnk.js";import{T as M,a as k,b as p,c as o,d as I,e as i}from"./table-BNYudrKQ.js";import{A as Z}from"./AuthenticatedLayout-DVjcb06X.js";import{h as c}from"./moment-Cl4UOzQZ.js";import{P as ee,a as ae,b as te}from"./popover-DSf0TO8L.js";import{c as j}from"./utils-C-Zvzyq5.js";import{c as se}from"./createLucideIcon-CPw1ASD4.js";import{C as re,D as ne,a as ie,b as le,c as oe,d as ce,e as me,f as de}from"./dropdown-menu-B8xy7AqL.js";import{L as b}from"./label-DsFCVgVZ.js";import{I as S}from"./input-Cqv19wrC.js";import{F as P}from"./filter-DPe8JBzu.js";import"./index-8PO45I_3.js";import"./index-Bb4qSo10.js";import"./GlobalLayout-DH3BRBnV.js";import"./toaster-D0flyv3P.js";import"./index-B95Fhcwf.js";import"./index-DJQKv4up.js";import"./index-CXD2mk9O.js";import"./x-Dzg8clAH.js";import"./use-toast-DB_HyPaF.js";import"./sheet-BMmGqGqr.js";import"./index-BAXoe19z.js";import"./index-C1KCpwI9.js";import"./index-BM2NL8vz.js";import"./check-DjI-pqQE.js";/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=se("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Y=({className:r,...s})=>e.jsx("nav",{role:"navigation","aria-label":"pagination",className:j("mx-auto flex w-full justify-center",r),...s});Y.displayName="Pagination";const L=u.forwardRef(({className:r,...s},d)=>e.jsx("ul",{ref:d,className:j("flex flex-row items-center gap-1",r),...s}));L.displayName="PaginationContent";const R=u.forwardRef(({className:r,...s},d)=>e.jsx("li",{ref:d,className:j("",r),...s}));R.displayName="PaginationItem";const w=({className:r,isActive:s,size:d="icon",...f})=>e.jsx("a",{"aria-current":s?"page":void 0,className:j(V({variant:s?"outline":"ghost",size:d}),r),...f});w.displayName="PaginationLink";const A=({className:r,...s})=>e.jsxs(w,{"aria-label":"Go to previous page",size:"default",className:j("gap-1 pl-2.5",r),...s,children:[e.jsx(he,{className:"h-4 w-4"}),e.jsx("span",{children:"Previous"})]});A.displayName="PaginationPrevious";const _=({className:r,...s})=>e.jsxs(w,{"aria-label":"Go to next page",size:"default",className:j("gap-1 pr-2.5",r),...s,children:[e.jsx("span",{children:"Next"}),e.jsx(re,{className:"h-4 w-4"})]});_.displayName="PaginationNext";function Ge({auth:r,events:s,devices:d,selectedDevice:f}){const[E,F]=u.useState(f.id),[$,xe]=u.useState(f.name),O=a=>{F(a);const t=new URLSearchParams(window.location.search);t.set("device_id",a.toString()),t.set("page","1"),C.get(`${window.location.pathname}?${t.toString()}`)},[N,z]=u.useState(localStorage.getItem("mode")||"checkins"),{data:y,current_page:pe,total:B,per_page:je}=s,{url:H}=U(),h=new URLSearchParams(H.split("?")[1]),{data:l,setData:D}=W({name:h.get("name")||"",employeeNoString:h.get("employeeNoString")||"",startTime:h.get("startTime")&&c(Number(h.get("startTime"))).format("YYYY-MM-DD")||"",endTime:h.get("endTime")&&c(h.get("endTime")).format("YYYY-MM-DD")||""}),T=a=>{z(a),localStorage.setItem("mode",a)},v=N==="attendance"?(a=>{const t={};return a.forEach(n=>{const m=c(n.time).format("YYYY/MM/DD"),x=`${n.employeeNoString}-${m}`;t[x]?(c(n.time).isBefore(t[x].checkIn)&&(t[x].checkIn=n.time),c(n.time).isAfter(t[x].checkOut)&&(t[x].checkOut=n.time)):t[x]={checkIn:n.time,checkOut:n.time,name:n.name,employeeNoString:n.employeeNoString,date:m}}),console.log(t),Object.values(t)})(y):[],G=a=>{a.preventDefault();const t=l.startTime?new Date(l.startTime+"T00:00:00+05:45").getTime():"",n=l.endTime?new Date(l.endTime+"T23:59:59+05:45").getTime():"",m=new URLSearchParams;l.name&&m.set("name",l.name),l.employeeNoString&&m.set("employeeNoString",l.employeeNoString),t&&m.set("startTime",t.toString()),n&&m.set("endTime",n.toString()),m.set("page","1"),C.get(`${window.location.pathname}?${m.toString()}`)};return e.jsx(Z,{user:r.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Events"}),children:e.jsxs(q,{children:[e.jsxs(J,{className:"flex flex-row justify-between items-center flex-wrap",children:[e.jsxs("div",{children:[e.jsx(K,{children:"Daily Check-Ins"}),e.jsxs(Q,{children:["Analyse events of gym members for ",$]})]}),e.jsxs("div",{className:"flex justify-end mt-2 gap-2",children:[e.jsx("div",{children:e.jsxs(ne,{children:[e.jsx(ie,{asChild:!0,children:e.jsx(g,{variant:"outline",children:"Select Device"})}),e.jsxs(le,{className:"w-56",children:[e.jsx(oe,{children:"Devices"}),e.jsx(ce,{}),e.jsx(me,{value:E.toString(),onValueChange:a=>O(Number(a)),children:d.map(a=>e.jsx(de,{value:a.id.toString(),children:a.name},a.ip_address))})]})]})}),e.jsxs(ee,{children:[e.jsx(ae,{asChild:!0,children:e.jsxs(g,{variant:"secondary",className:"flex items-center",children:[e.jsx(P,{className:"size-4 me-2"})," Filter"]})}),e.jsx(te,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsx("h3",{className:"font-bold",children:"Filter Check-in events"}),e.jsxs("form",{className:"space-y-2",onSubmit:G,children:[e.jsxs("div",{children:[e.jsx(b,{children:"Full Name"}),e.jsx(S,{placeholder:"Enter Full Name of Member",type:"text",value:l.name,onChange:a=>D("name",a.target.value)})]}),e.jsxs("div",{children:[e.jsx(b,{children:"Member ID"}),e.jsx(S,{placeholder:"Enter Member ID",type:"text",value:l.employeeNoString,onChange:a=>D("employeeNoString",a.target.value)})]}),e.jsxs("div",{children:[e.jsx(b,{children:"Start Date"}),e.jsx(S,{type:"date",value:l.startTime,onChange:a=>D("startTime",a.target.value)})]}),e.jsxs("div",{children:[e.jsx(b,{children:"End Date"}),e.jsx(S,{type:"date",value:l.endTime,onChange:a=>D("endTime",a.target.value)})]}),e.jsxs(g,{type:"submit",className:"w-full",children:[e.jsx(P,{className:"size-4 me-2"}),"  Filter Search"]})]})]})})]}),e.jsxs("div",{className:"flex rounded-lg overflow-hidden",children:[e.jsx(g,{variant:"outline",onClick:()=>T("checkins"),className:`rounded-none rounded-s-lg ${N==="checkins"?"text-primary hover:text-primary font-bold bg-primary/5 border-primary":""}`,children:"Check-Ins"}),e.jsx(g,{variant:"outline",onClick:()=>T("attendance"),className:`rounded-none rounded-e-lg ${N==="attendance"?"text-primary hover:text-primary font-bold bg-primary/5 border-primary":""}`,children:"Attendance"})]})]})]}),e.jsxs(X,{children:[N==="checkins"?e.jsxs(M,{className:"table-auto w-full text-left",children:[e.jsx(k,{children:e.jsxs(p,{children:[e.jsx(o,{children:"Member ID"}),e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Date"}),e.jsx(o,{children:"Check - In Time"}),e.jsx(o,{children:"Week Day"})]})}),e.jsx(I,{children:y&&y.length>0?y.map((a,t)=>e.jsxs(p,{children:[e.jsx(i,{children:a.employeeNoString}),e.jsx(i,{children:a.name}),e.jsx(i,{children:c(a.time).format("YYYY/MM/DD")}),e.jsx(i,{children:c(a.time).format("hh:mm A")}),e.jsx(i,{children:c(a.time).format("dddd")})]},t)):e.jsx(p,{children:e.jsx(i,{colSpan:5,className:"text-center",children:"No events found"})})})]}):e.jsxs(M,{className:"table-auto w-full text-left",children:[e.jsx(k,{children:e.jsxs(p,{children:[e.jsx(o,{children:"Member ID"}),e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Date"}),e.jsx(o,{children:"Check - In Time"}),e.jsx(o,{children:"Check - Out Time"}),e.jsx(o,{children:"Week Day"})]})}),e.jsx(I,{children:v&&v.length>0?v.map((a,t)=>e.jsxs(p,{children:[e.jsx(i,{children:a.employeeNoString}),e.jsx(i,{children:a.name}),e.jsx(i,{children:a.date}),e.jsx(i,{children:c(a.checkIn).format("hh:mm A")}),e.jsx(i,{children:c(a.checkOut).format("hh:mm A")}),e.jsx(i,{children:c(a.date,"YYYY/MM/DD").format("dddd")})]},t)):e.jsx(p,{children:e.jsx(i,{colSpan:6,className:"text-center",children:"No attendance records found"})})})]}),e.jsxs("div",{className:"flex justify-between w-full items-center",children:[e.jsxs("span",{children:["Showing Results ",s.data.length," of ",B]}),e.jsx(Y,{className:"w-fit mx-0",children:e.jsxs(L,{children:[e.jsx(A,{href:s.prev_page_url}),s.links.slice(1,-1).map((a,t)=>e.jsx(R,{children:e.jsx(w,{href:a.url,isActive:a.active,dangerouslySetInnerHTML:{__html:a.label}})},t)),e.jsx(_,{href:s.next_page_url})]})})]})]})]})})}export{Ge as default};