import{r as d,j as e,Y as _,y}from"./app-3SIRTf-5.js";import{A}from"./AuthenticatedLayout-CJJr-twT.js";import{C,a as M,b as N,c as R,d as h}from"./card-CBtJbqk1.js";import{T as x,a as p,b as t,c as i,d as j,e as s}from"./table-EyrCOfFI.js";import{T as v,a as w,b as l,L as D}from"./loader-CyaN__OE.js";import k from"./RenewalApprovalBlock-N88ETBc2.js";import P from"./RegistrationApprovalBlock-Ze-XXUtN.js";import f from"./RejectionBlock-BDqXQF4t.js";import{f as m}from"./format-CE4V3joc.js";import"./GlobalLayout-CMcNHiVS.js";import"./toaster-Dw7QYiKI.js";import"./index-YuXTghCy.js";import"./index-Cqu9cwS9.js";import"./index-BwJKMgpa.js";import"./x-ZThs6_Gk.js";import"./createLucideIcon-a0XJ54KJ.js";import"./index-Bb4qSo10.js";import"./utils-C-Zvzyq5.js";import"./use-toast-D1Qu1tBf.js";import"./sheet-Dncmpnv9.js";import"./index-SipnJt1m.js";import"./index-BVcS-tUL.js";import"./button-mE5Zer4v.js";import"./index-C3fbTtBW.js";import"./dropdown-menu-CVU-zAeu.js";import"./index-v8WOfFnQ.js";import"./dialog-HXmWLQJG.js";import"./select-BAAnM0MM.js";import"./input-B_VqwVNS.js";import"./label-sM4Vfyun.js";import"./InputError-BCZ6gpxT.js";import"./popover-jqHnf68I.js";import"./circle-check-big-DgSCYnqd.js";function pe({auth:n,applications:r,activeTab:g}){const[a,u]=d.useState(g||"registration_applications"),[b,o]=d.useState(!0),T=c=>{o(!0),u(c),y.get(route("applications.index"),{tab:c},{onFinish:()=>o(!1)})};return d.useEffect(()=>{o(!1)},[]),e.jsxs(A,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Applications"}),children:[e.jsx(_,{title:"Applications"}),e.jsxs(C,{children:[e.jsx(M,{className:"flex justify-between flex-row",children:e.jsxs("div",{children:[e.jsx(N,{children:"Applications"}),e.jsx(R,{children:"View and manage gym applications"})]})}),e.jsx(h,{children:e.jsxs(v,{value:a,onValueChange:T,children:[e.jsxs(w,{children:[e.jsx(l,{value:"registration_applications",children:"Registration Applications"}),e.jsx(l,{value:"renewal_applications",children:"Renewal Applications"})]}),b?e.jsx("div",{className:"flex justify-center items-center my-10",children:e.jsx(D,{size:"lg"})}):e.jsxs(e.Fragment,{children:[a==="registration_applications"&&S(r),a==="renewal_applications"&&L(r)]})]})})]})]})}function S(n){return e.jsx("div",{children:e.jsxs(x,{children:[e.jsx(p,{children:e.jsxs(t,{children:[e.jsx(i,{})," ",e.jsx(i,{children:"Name"}),e.jsx(i,{children:"Phone"}),e.jsx(i,{children:"Occupation"}),e.jsx(i,{children:"Gender"}),e.jsx(i,{children:"Date of Birth"}),e.jsx(i,{children:"Address"}),e.jsx(i,{children:"Package"}),e.jsx(i,{children:"Duration"}),e.jsx(i,{})]})}),e.jsx(j,{children:n.data.length>0?n.data.map(r=>e.jsxs(t,{children:[e.jsx(s,{children:e.jsx("img",{src:r.photo,className:"w-14 h-14 object-cover rounded-full border-2 border-primary p-0.5"})}),e.jsx(s,{children:r.name}),e.jsx(s,{children:r.phone}),e.jsx(s,{children:r.occupation}),e.jsx(s,{children:r.gender.charAt(0).toUpperCase()+r.gender.slice(1)}),e.jsx(s,{children:new Date(r.date_of_birth).toLocaleDateString()}),e.jsx(s,{children:r.address}),e.jsx(s,{children:r.membership_package.package_name}),e.jsxs(s,{children:[r.months," Months"]}),e.jsxs(s,{children:[e.jsx(P,{application:r}),e.jsx(f,{rejectionType:"admission",applicationId:r.id})]})]},r.id)):e.jsx(t,{children:e.jsx(s,{className:"text-center",colSpan:100,children:"No applications found."})})})]})})}function L(n){return e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(p,{children:e.jsxs(t,{children:[e.jsx(i,{}),e.jsx(i,{children:"Member Name"}),e.jsx(i,{children:"Membership Package"}),e.jsx(i,{children:"Is Expiring On"}),e.jsx(i,{children:"Months"}),e.jsx(i,{children:"Submitted On"}),e.jsx(i,{children:"Payment Proof"}),e.jsx(i,{})]})}),e.jsx(j,{children:n.data.length>0?n.data.map(r=>e.jsxs(t,{children:[e.jsx(s,{children:e.jsx("img",{src:r.member.photo,className:"size-16 min-w-16 object-cover rounded-full border-2 border-primary p-0.5"})}),e.jsx(s,{children:r.member.name}),e.jsx(s,{children:r.member.membership_package.package_name}),e.jsx(s,{children:m(new Date(r.member.payment_expiry_date),"MMMM d")}),e.jsxs(s,{children:[r.months," Months"]}),e.jsx(s,{children:m(new Date(r.created_at),"MMMM d 'at' h:mm aaa")}),e.jsx(s,{children:r.payment_proof_path?e.jsx("a",{href:r.payment_proof_path,target:"_blank",rel:"noopener noreferrer",children:"View Payment Proof"}):e.jsx("span",{className:"text-muted-foreground",children:"Not Available"})}),e.jsxs(s,{children:[e.jsx(k,{application:r}),e.jsx(f,{rejectionType:"renewal",applicationId:r.id})]})]},r.id)):e.jsx(t,{children:e.jsx(s,{className:"text-center",colSpan:100,children:"No Renewal Applications found."})})})]})})}export{pe as default};
