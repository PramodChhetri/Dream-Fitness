import{r as t,j as e}from"./app-BbJUaZt7.js";import{D as L,a as M,b as O,g as s}from"./dropdown-menu-B8xy7AqL.js";import{ViewMemberDialog as A}from"./ViewMemberDialog-BCjnJvyM.js";import{DeleteMemberDialog as v}from"./DeleteMemberDialog-bGFvMW83.js";import{g as P}from"./member-service-DdO9GW06.js";import{SendMessageDialog as R}from"./SendMessageDialog-BE2-q4xB.js";import V from"./RenewPackageDialog-BPw76lVK.js";import{LockerDialog as T}from"./LockerDialog-D2vGxGbH.js";import _ from"./EditLockerDialog-Da16lber.js";import{EditMemberDialog as F}from"./EditMemberDialog-D_XSiVkc.js";import{MemberAccountsDialog as I}from"./MemberAccountsDialog-BH7gOlpf.js";import{ChangePackageDialog as N}from"./ChangePackageDialog-DkqaZ4OO.js";import{ExtendLocker as q}from"./ExtendLocker-DGNYg97P.js";import{E as y}from"./ellipsis-BGv-obPv.js";import"./index-B95Fhcwf.js";import"./index-DJQKv4up.js";import"./index-CXD2mk9O.js";import"./index-BM2NL8vz.js";import"./index-C1KCpwI9.js";import"./x-Dzg8clAH.js";import"./createLucideIcon-CPw1ASD4.js";import"./utils-C-Zvzyq5.js";import"./check-DjI-pqQE.js";import"./badge-CPae2Fh8.js";import"./index-Bb4qSo10.js";import"./button-UwysrHzP.js";import"./index-8PO45I_3.js";import"./card-BdKu3Mnk.js";import"./dialog-JG440Rn_.js";import"./index-BAXoe19z.js";import"./use-toast-DB_HyPaF.js";import"./moment-Cl4UOzQZ.js";import"./textarea-iPGzJA0z.js";import"./select-Dfz_2K3P.js";import"./input-Cqv19wrC.js";import"./label-DsFCVgVZ.js";import"./InputError-NIrKKB-2.js";import"./SingleImageUploader-DEOVZYoh.js";import"./table-BNYudrKQ.js";import"./format-CE4V3joc.js";function Oe({member:o}){const[f,n]=t.useState(!1),[x,r]=t.useState(!1),[g,i]=t.useState(!1),[z,k]=t.useState(!1),[j,p]=t.useState(!1),[C,a]=t.useState(!1),[h,l]=t.useState(!1),[D,c]=t.useState(!1),[E,d]=t.useState(!1),[S,m]=t.useState(!1),[w,u]=t.useState(!1);return e.jsxs("div",{children:[e.jsxs(L,{children:[e.jsx(M,{children:e.jsx(y,{})}),e.jsxs(O,{children:[e.jsx(s,{onClick:()=>n(!0),children:"View"}),o.is_approved==1&&e.jsx(s,{onClick:()=>r(!0),children:"Edit"}),P(o).text.toLowerCase()==="unapproved"&&e.jsx(s,{onClick:()=>k(!0),children:"Approve"}),e.jsx(s,{onClick:()=>c(!0),children:"Renew"}),o.active_locker?e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>m(!0),children:"Edit Locker Number"}),e.jsx(s,{onClick:()=>u(!0),children:"Extend Locker"})]}):e.jsx(s,{onClick:()=>d(!0),children:"Assign Locker"}),e.jsx(s,{onClick:()=>p(!0),children:"Accounts"}),e.jsx(s,{onClick:()=>a(!0),children:"Change Package"}),e.jsx(s,{onClick:()=>l(!0),children:"Message"}),e.jsx(s,{onClick:()=>i(!0),children:"Delete"})]})]}),e.jsx(T,{member:o,open:E,onClose:()=>d(!1)}),e.jsx(R,{member:o,open:h,onClose:()=>l(!1)}),e.jsx(v,{member:o,open:g,onClose:()=>i(!1)}),e.jsx(A,{member:o,open:f,onClose:()=>n(!1)}),e.jsx(V,{member:o,open:D,onClose:()=>c(!1)}),e.jsx(_,{member:o,open:S,onClose:()=>m(!1)}),e.jsx(F,{member:o,open:x,onClose:()=>{r(!1)}}),e.jsx(I,{member:o,open:j,onClose:()=>{p(!1)}}),e.jsx(N,{member:o,open:C,onClose:()=>a(!1)}),e.jsx(q,{member:o,open:w,onClose:()=>u(!1)})]})}export{Oe as default};
