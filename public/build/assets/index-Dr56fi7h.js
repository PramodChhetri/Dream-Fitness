import{q as c,j as s,Y as v,a as d,y as N}from"./app-D3xhd7x4.js";import{A as w}from"./AuthenticatedLayout-BNoa_9Pl.js";import{T as _,a as M,b as h,c as a,d as A,e as i}from"./table-nOQc-wFK.js";import{h as l}from"./moment-Cl4UOzQZ.js";import{B as n}from"./badge-BnluvayJ.js";import{B as x}from"./button-kSVH6inc.js";import k from"./index-C5JHgK9i.js";import T from"./FilterPopover-Kh7suVex.js";import{I as L}from"./input-B5jvm_hA.js";import"./GlobalLayout-CXzBAGyO.js";import"./toaster-FnjXybNn.js";import"./index-BkFfMWl8.js";import"./index-CHWu3Xan.js";import"./index-DjfCHU90.js";import"./x-n02M-ldN.js";import"./createLucideIcon-RljSjpz3.js";import"./index-Bb4qSo10.js";import"./utils-C-Zvzyq5.js";import"./use-toast-CeK-EtdP.js";import"./card-XJZW572Q.js";import"./sheet-KrgZSENa.js";import"./index-BA9ojx9c.js";import"./index-D_4hUVl6.js";import"./dropdown-menu-DbrUI8SI.js";import"./index-CQ59I0Dq.js";import"./check-CcE03I2l.js";import"./index-BN1U6-Hz.js";import"./ViewMemberDialog-Dw7kIgLk.js";import"./dialog-CoUukDiU.js";import"./member-service-UBpIgmaC.js";import"./DeleteMemberDialog-DgSpH6iZ.js";import"./SendMessageDialog-BVcSecs2.js";import"./textarea-lKWceivU.js";import"./RenewPackageDialog-DdSbCtY3.js";import"./select-U6-rirhH.js";import"./label-B7b8UO_Y.js";import"./InputError-DKuUmmK1.js";import"./LockerDialog-B3TAS-vn.js";import"./EditLockerDialog-55ErYF5A.js";import"./EditMemberDialog-jwClV8b0.js";import"./SingleImageUploader-wXoJOceP.js";import"./MemberAccountsDialog-JBIp0Rt0.js";import"./format-CE4V3joc.js";import"./ChangePackageDialog-CP5JT7n9.js";import"./ExtendLocker-C9kbGcE3.js";import"./ellipsis-EUfqVOPa.js";import"./popover-CpbQxDBy.js";import"./segmented-control-C8-3Qy4a.js";import"./filter-DWFBunVn.js";function Mt(){const{auth:j,members:o,packages:u}=c().props,g={currentPage:o.current_page,links:o.links,total:o.total};c().url;const f=t=>{if(t.key==="Enter"){const r=t.target;return N.visit("/members?filter[search]="+r.value)}},y=new URLSearchParams(window.location.search);return s.jsxs(w,{user:j.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Members"}),children:[s.jsx(v,{title:"Members"}),s.jsxs("div",{className:"p-6 space-y-4",children:[s.jsxs("div",{className:"flex justify-between items-center gap-2",children:[s.jsx("div",{className:"grow",children:s.jsx(L,{type:"search",placeholder:"Search Members Here...",onKeyDown:f,defaultValue:y.get("filter[search]")||""})}),s.jsxs("div",{className:"flex gap-1",children:[s.jsx(T,{packages:u}),s.jsx(d,{href:"/members/create",children:s.jsx(x,{children:"Add Member"})})]})]}),s.jsxs(_,{children:[s.jsx(M,{children:s.jsxs(h,{children:[s.jsx(a,{children:"Member Image"}),s.jsx(a,{children:"Membership ID"}),s.jsx(a,{children:"Member Name"}),s.jsx(a,{children:"Phone"}),s.jsx(a,{children:"Joining Date"}),s.jsx(a,{children:"Payment Expiry Date"}),s.jsx(a,{children:"Membership Package"}),s.jsx(a,{children:"Status"}),s.jsx(a,{children:"Actions"})]})}),s.jsx(A,{children:o.data.map(t=>{var r,p,e;return s.jsxs(h,{children:[s.jsx(i,{children:s.jsx("img",{src:t==null?void 0:t.photo,className:"w-14 h-14 sm:w-10 sm:h-10 object-cover rounded-full border-2 border-primary p-0.5",alt:"Member"})}),s.jsx(i,{children:t==null?void 0:t.id}),s.jsx(i,{children:t==null?void 0:t.name}),s.jsx(i,{children:t==null?void 0:t.phone}),s.jsx(i,{children:t!=null&&t.start_date?l(t.start_date).format("LL"):"N/A"}),s.jsxs(i,{children:[t!=null&&t.payment_expiry_date?l(t.payment_expiry_date).format("LL"):"N/A",s.jsx("small",{className:"block text-muted-foreground font-bold",children:t!=null&&t.payment_expiry_date?l(t.payment_expiry_date).fromNow():""})]}),s.jsx(i,{children:((r=t==null?void 0:t.membership_package)==null?void 0:r.package_name)||"N/A"}),s.jsx(i,{children:((p=t==null?void 0:t.status)==null?void 0:p.toLowerCase())==="active"?s.jsx(n,{className:"bg-green-500 hover:bg-green-600",children:"Active"}):((e=t==null?void 0:t.status)==null?void 0:e.toLowerCase())==="unapproved"?s.jsx(n,{className:"bg-orange-500 hover:bg-orange-600",children:"Unapproved"}):s.jsx(n,{className:"bg-red-500 hover:bg-red-600",children:(t==null?void 0:t.status)||"Unknown"})}),s.jsx(i,{children:s.jsx(k,{member:t})})]},t==null?void 0:t.id)})})]}),s.jsx("div",{className:"py-2 flex justify-end space-x-2",children:g.links.map((t,r)=>s.jsx(d,{href:t.url??"#",children:s.jsx(x,{disabled:t.active,variant:t.active?"default":"ghost",children:t.label.replace("&laquo;","«").replace("&raquo;","»")},r)},r))})]})]})}export{Mt as default};