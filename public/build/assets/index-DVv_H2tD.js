import{r as o,j as t,d as D}from"./app-3SIRTf-5.js";import{D as E,a as S,b as g,g as s}from"./dropdown-menu-CVU-zAeu.js";import w from"./EditStaffDialog-nf223g6g.js";import{t as f}from"./use-toast-D1Qu1tBf.js";import C from"./DisableStaffDialog-Y3YXpT4X.js";import{ViewStaffDialog as h}from"./ViewStaffDialog-BenWRJz0.js";import{StaffAccountsDialog as V}from"./StaffAccountsDialog-D46ZJmiE.js";import{E as k}from"./ellipsis-DOHh4jnl.js";import"./index-YuXTghCy.js";import"./index-Cqu9cwS9.js";import"./index-BwJKMgpa.js";import"./index-v8WOfFnQ.js";import"./createLucideIcon-a0XJ54KJ.js";import"./index-BVcS-tUL.js";import"./x-ZThs6_Gk.js";import"./utils-C-Zvzyq5.js";import"./button-mE5Zer4v.js";import"./index-C3fbTtBW.js";import"./index-Bb4qSo10.js";import"./input-B_VqwVNS.js";import"./label-sM4Vfyun.js";import"./select-BAAnM0MM.js";import"./sheet-Dncmpnv9.js";import"./index-SipnJt1m.js";import"./moment-Cl4UOzQZ.js";import"./dialog-HXmWLQJG.js";import"./badge-N3QcmQek.js";import"./card-CBtJbqk1.js";import"./InputError-BCZ6gpxT.js";import"./table-EyrCOfFI.js";import"./textarea-BAe97Pwd.js";import"./format-CE4V3joc.js";function nt({refetch:i,official:e}){const[n,r]=o.useState(!1),[u,a]=o.useState(!1),[p,l]=o.useState(!1),[x,m]=o.useState(!1),[c,d]=o.useState(!1),b=j=>{d(!0),D.put(`/enable-staff/${j}`).then(()=>{f({description:"Staff enabled successfully"}),i()}).catch(()=>{f({description:"Failed to enable staff",variant:"destructive"})}).finally(()=>{d(!1)})};return t.jsxs("div",{children:[t.jsxs(E,{children:[t.jsx(S,{children:t.jsx(k,{})}),t.jsxs(g,{children:[t.jsx(s,{onClick:()=>r(!0),children:"View"}),t.jsx(s,{onClick:()=>a(!0),children:"Edit"}),e.status==="disabled"?t.jsx(s,{disabled:c,onClick:()=>b(e.id),children:c?"Enabling...":"Enable"}):t.jsx(s,{onClick:()=>m(!0),children:"Disable"}),t.jsx(s,{onClick:()=>l(!0),children:"Accounts"})]})]}),n&&t.jsx(h,{official:e,open:n,onClose:()=>r(!1)}),u&&t.jsx(w,{refetch:i,official:e,onClose:()=>a(!1)}),x&&t.jsx(C,{refetch:i,staff:e,onClose:()=>m(!1)}),p&&t.jsx(V,{official:e,open:p,onClose:()=>l(!1),refetch:i})]})}export{nt as default};