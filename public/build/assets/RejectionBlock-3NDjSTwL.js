import{j as s,y as t}from"./app-BbJUaZt7.js";import{B as i}from"./button-UwysrHzP.js";import{D as a,a as o,b as c,c as l,d as n,e as m,f as d,g as p}from"./dialog-JG440Rn_.js";import{t as h}from"./use-toast-DB_HyPaF.js";import{c as x}from"./createLucideIcon-CPw1ASD4.js";import"./index-8PO45I_3.js";import"./index-Bb4qSo10.js";import"./utils-C-Zvzyq5.js";import"./index-BAXoe19z.js";import"./index-B95Fhcwf.js";import"./index-DJQKv4up.js";import"./index-C1KCpwI9.js";import"./x-Dzg8clAH.js";/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=x("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),S=({rejectionType:e,applicationId:r})=>s.jsxs(a,{children:[s.jsx(o,{children:s.jsx(i,{variant:"ghost",size:"icon",children:s.jsx(j,{className:"text-destructive"})})}),s.jsxs(c,{children:[s.jsxs(l,{children:[s.jsxs(n,{children:["Are You Sure To Delete This ",s.jsx("span",{className:"capitalize",children:e})]}),s.jsxs(m,{children:["This action cannot be undo, but applicants can resubmit the ",e," form."]})]}),s.jsxs(d,{children:[s.jsx(p,{children:s.jsx(i,{variant:"secondary",children:"Cancel"})}),s.jsx(i,{variant:"destructive",onClick:()=>t.get(`/reject/${e}/${r}`,{},{onSuccess:()=>{h({description:s.jsxs("span",{className:"capitalize",children:[e," rejected successfully..."]})})}}),children:"Delete"})]})]})]});export{S as default};