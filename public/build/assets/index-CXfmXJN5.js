import{r as o,j as t,d as D}from"./app-BbJUaZt7.js";import{D as E,a as S,b as g,g as s}from"./dropdown-menu-B8xy7AqL.js";import w from"./EditStaffDialog-D5vCTZJi.js";import{t as f}from"./use-toast-DB_HyPaF.js";import C from"./DisableStaffDialog-dctLbWu7.js";import{ViewStaffDialog as h}from"./ViewStaffDialog-CDzNTXQp.js";import{StaffAccountsDialog as V}from"./StaffAccountsDialog-yhSW0aII.js";import{E as k}from"./ellipsis-BGv-obPv.js";import"./index-B95Fhcwf.js";import"./index-DJQKv4up.js";import"./index-CXD2mk9O.js";import"./index-BM2NL8vz.js";import"./index-C1KCpwI9.js";import"./x-Dzg8clAH.js";import"./createLucideIcon-CPw1ASD4.js";import"./utils-C-Zvzyq5.js";import"./check-DjI-pqQE.js";import"./button-UwysrHzP.js";import"./index-8PO45I_3.js";import"./index-Bb4qSo10.js";import"./input-Cqv19wrC.js";import"./label-DsFCVgVZ.js";import"./select-Dfz_2K3P.js";import"./sheet-BMmGqGqr.js";import"./index-BAXoe19z.js";import"./moment-Cl4UOzQZ.js";import"./dialog-JG440Rn_.js";import"./badge-CPae2Fh8.js";import"./card-BdKu3Mnk.js";import"./InputError-NIrKKB-2.js";import"./table-BNYudrKQ.js";import"./textarea-iPGzJA0z.js";import"./format-CE4V3joc.js";function rt({refetch:i,official:e}){const[n,r]=o.useState(!1),[u,a]=o.useState(!1),[p,l]=o.useState(!1),[x,m]=o.useState(!1),[c,d]=o.useState(!1),b=j=>{d(!0),D.put(`/enable-staff/${j}`).then(()=>{f({description:"Staff enabled successfully"}),i()}).catch(()=>{f({description:"Failed to enable staff",variant:"destructive"})}).finally(()=>{d(!1)})};return t.jsxs("div",{children:[t.jsxs(E,{children:[t.jsx(S,{children:t.jsx(k,{})}),t.jsxs(g,{children:[t.jsx(s,{onClick:()=>r(!0),children:"View"}),t.jsx(s,{onClick:()=>a(!0),children:"Edit"}),e.status==="disabled"?t.jsx(s,{disabled:c,onClick:()=>b(e.id),children:c?"Enabling...":"Enable"}):t.jsx(s,{onClick:()=>m(!0),children:"Disable"}),t.jsx(s,{onClick:()=>l(!0),children:"Accounts"})]})]}),n&&t.jsx(h,{official:e,open:n,onClose:()=>r(!1)}),u&&t.jsx(w,{refetch:i,official:e,onClose:()=>a(!1)}),x&&t.jsx(C,{refetch:i,staff:e,onClose:()=>m(!1)}),p&&t.jsx(V,{official:e,open:p,onClose:()=>l(!1),refetch:i})]})}export{rt as default};
