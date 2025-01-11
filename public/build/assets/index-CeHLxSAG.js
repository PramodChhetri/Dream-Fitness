import{q as c,j as s,Y as v,a as d,y as N}from"./app-MbUP1EQI.js";import{A as w}from"./AuthenticatedLayout-Bj72-yi9.js";import{T as _,a as M,b as h,c as a,d as A,e as i}from"./table-DHAm2W9Q.js";import{h as l}from"./moment-Cl4UOzQZ.js";import{B as n}from"./badge-DvUxnNo1.js";import{B as x}from"./button-CzAhYwEo.js";import k from"./index-BY8zagKq.js";import T from"./FilterPopover-CjSwuHTL.js";import{I as L}from"./input-BPMtujBP.js";import"./GlobalLayout-CpXZCQPR.js";import"./toaster-WtJ9HbpD.js";import"./index-50k3gDpb.js";import"./index-ynk8XwVw.js";import"./index-CrW0pUbx.js";import"./x-BkjT11oR.js";import"./createLucideIcon-DhDSKE00.js";import"./index-Bb4qSo10.js";import"./utils-C-Zvzyq5.js";import"./use-toast-BPI7qPE7.js";import"./card-K8Ff7zdG.js";import"./sheet-CTEoYkxo.js";import"./index-DrAYGk9J.js";import"./index-B2Mnvzit.js";import"./dropdown-menu-B5cVrezE.js";import"./index-BBBSSME7.js";import"./check-BQwKtKwj.js";import"./index-DHdUJXuL.js";import"./ViewMemberDialog-gv5scj3D.js";import"./dialog-Bcf4xQSo.js";import"./member-service-x9YCvO-V.js";import"./DeleteMemberDialog-CaZnwerf.js";import"./SendMessageDialog-BX30mTW9.js";import"./textarea-BUeE_V5k.js";import"./RenewPackageDialog-C6l1O3lP.js";import"./select-DuLVWfqX.js";import"./label-DUXNj4de.js";import"./InputError-BAx_On6R.js";import"./LockerDialog-102DDmso.js";import"./EditLockerDialog-Bp7Z7wuO.js";import"./EditMemberDialog-DmsDaszY.js";import"./SingleImageUploader-INCvSqCo.js";import"./MemberAccountsDialog-Cl_MHMvl.js";import"./format-CE4V3joc.js";import"./ChangePackageDialog-C1KVHid0.js";import"./ExtendLocker-w9NuD0wx.js";import"./ellipsis-B3swzU31.js";import"./popover-BLZzaaGK.js";import"./segmented-control-C3eN58Ia.js";import"./filter-VlUK-Cb0.js";function Mt(){const{auth:j,members:o,packages:u}=c().props,g={currentPage:o.current_page,links:o.links,total:o.total};c().url;const f=t=>{if(t.key==="Enter"){const r=t.target;return N.visit("/members?filter[search]="+r.value)}},y=new URLSearchParams(window.location.search);return s.jsxs(w,{user:j.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Members"}),children:[s.jsx(v,{title:"Members"}),s.jsxs("div",{className:"p-6 space-y-4",children:[s.jsxs("div",{className:"flex justify-between items-center gap-2",children:[s.jsx("div",{className:"grow",children:s.jsx(L,{type:"search",placeholder:"Search Members Here...",onKeyDown:f,defaultValue:y.get("filter[search]")||""})}),s.jsxs("div",{className:"flex gap-1",children:[s.jsx(T,{packages:u}),s.jsx(d,{href:"/members/create",children:s.jsx(x,{children:"Add Member"})})]})]}),s.jsxs(_,{children:[s.jsx(M,{children:s.jsxs(h,{children:[s.jsx(a,{children:"Member Image"}),s.jsx(a,{children:"Membership ID"}),s.jsx(a,{children:"Member Name"}),s.jsx(a,{children:"Phone"}),s.jsx(a,{children:"Joining Date"}),s.jsx(a,{children:"Payment Expiry Date"}),s.jsx(a,{children:"Membership Package"}),s.jsx(a,{children:"Status"}),s.jsx(a,{children:"Actions"})]})}),s.jsx(A,{children:o.data.map(t=>{var r,p,e;return s.jsxs(h,{children:[s.jsx(i,{children:s.jsx("img",{src:t==null?void 0:t.photo,className:"w-14 h-14 sm:w-10 sm:h-10 object-cover rounded-full border-2 border-primary p-0.5",alt:"Member"})}),s.jsx(i,{children:t==null?void 0:t.id}),s.jsx(i,{children:t==null?void 0:t.name}),s.jsx(i,{children:t==null?void 0:t.phone}),s.jsx(i,{children:t!=null&&t.start_date?l(t.start_date).format("LL"):"N/A"}),s.jsxs(i,{children:[t!=null&&t.payment_expiry_date?l(t.payment_expiry_date).format("LL"):"N/A",s.jsx("small",{className:"block text-muted-foreground font-bold",children:t!=null&&t.payment_expiry_date?l(t.payment_expiry_date).fromNow():""})]}),s.jsx(i,{children:((r=t==null?void 0:t.membership_package)==null?void 0:r.package_name)||"N/A"}),s.jsx(i,{children:((p=t==null?void 0:t.status)==null?void 0:p.toLowerCase())==="active"?s.jsx(n,{className:"bg-green-500 hover:bg-green-600",children:"Active"}):((e=t==null?void 0:t.status)==null?void 0:e.toLowerCase())==="unapproved"?s.jsx(n,{className:"bg-orange-500 hover:bg-orange-600",children:"Unapproved"}):s.jsx(n,{className:"bg-red-500 hover:bg-red-600",children:(t==null?void 0:t.status)||"Unknown"})}),s.jsx(i,{children:s.jsx(k,{member:t})})]},t==null?void 0:t.id)})})]}),s.jsx("div",{className:"py-2 flex justify-end space-x-2",children:g.links.map((t,r)=>s.jsx(d,{href:t.url??"#",children:s.jsx(x,{disabled:t.active,variant:t.active?"default":"ghost",children:t.label.replace("&laquo;","«").replace("&raquo;","»")},r)},r))})]})]})}export{Mt as default};
