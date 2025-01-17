import{q as Y,r as c,W as $,j as e}from"./app-D3xhd7x4.js";import{C as f,a as _,b as v,d as b}from"./card-XJZW572Q.js";import{D as z,b as J,c as K,d as U,e as X,f as Z}from"./dialog-CoUukDiU.js";import{S as w,a as N,b as D,c as C,d as l}from"./select-U6-rirhH.js";import{I as p}from"./input-B5jvm_hA.js";import{B as ee}from"./button-kSVH6inc.js";import{L as m}from"./label-B7b8UO_Y.js";import{I as h}from"./InputError-DKuUmmK1.js";import{t as se}from"./use-toast-CeK-EtdP.js";import"./utils-C-Zvzyq5.js";import"./index-BA9ojx9c.js";import"./index-BkFfMWl8.js";import"./index-CHWu3Xan.js";import"./index-D_4hUVl6.js";import"./x-n02M-ldN.js";import"./createLucideIcon-RljSjpz3.js";import"./index-DjfCHU90.js";import"./index-CQ59I0Dq.js";import"./check-CcE03I2l.js";import"./index-BN1U6-Hz.js";import"./index-Bb4qSo10.js";const te=({member:d,open:R,onClose:y})=>{const n=Y().props.packages.find(s=>s.id===d.membership_package_id),j=c.useRef(null),{data:t,setData:a,reset:S,errors:x,post:E,processing:M,clearErrors:A}=$({selected_months:1,extra_discount:0,paid_amount:0,bill_number:"",payment_mode:"",new_payment_expiry:""}),[k,F]=c.useState(0),[q,I]=c.useState(0),[P,B]=c.useState(0),[T,Q]=c.useState(0),[i,L]=c.useState(0),O=s=>{const o=new Date,r=new Date(d.payment_expiry_date),u=o>r?o:r;return new Date(u.setMonth(u.getMonth()+s)).toISOString().split("T")[0]};c.useEffect(()=>{if(n){const s=Number(n.monthly_amount)||0,o=s*t.selected_months;let r=0;t.selected_months===3?r=Number(n.discount_quarterly)||0:t.selected_months===6?r=Number(n.discount_half_yearly)||0:t.selected_months===12&&(r=Number(n.discount_yearly)||0);const u=o,g=u-r-t.extra_discount;F(s),I(o),B(u),Q(r),L(Math.max(g,0));const W=O(t.selected_months);a("new_payment_expiry",W)}},[t.selected_months,t.extra_discount,n]);const V=()=>t.paid_amount>i?"Advance Amount":"Credit Amount",G=()=>t.paid_amount>i?t.paid_amount-i:i-t.paid_amount,H=s=>{if(s.preventDefault(),M)return!1;console.log("Form Data:",t),A(),E(route("renewal.store",d.id),{onSuccess:o=>{console.log(o),se({description:"Package Renewed Successfully..."}),y(),S()}})};return e.jsx(z,{open:R,onOpenChange:y,children:e.jsxs(J,{className:"max-w-4xl w-[95vw] mx-auto rounded-lg p-6 shadow-lg overflow-auto max-h-[95vh]",children:[e.jsxs(K,{children:[e.jsx(U,{className:"text-xl font-semibold",children:"Package Renewal"}),e.jsxs(X,{className:"text-sm",children:["Renew membership package of ",e.jsx("strong",{children:d.name}),"."]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-4",children:[e.jsxs(f,{children:[e.jsx(_,{children:e.jsx(v,{className:"text-lg font-semibold",children:"Pricing Summary"})}),e.jsxs(b,{children:[e.jsx("b",{children:n==null?void 0:n.package_name}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Current Expiry Date"}),e.jsx("strong",{children:d.payment_expiry_date})]}),e.jsx("hr",{className:"my-2"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Renewal Months"}),e.jsxs("span",{children:[t.selected_months," ",t.selected_months===1?"Month":"Months"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Monthly Fees"}),e.jsxs("span",{children:["Rs ",k]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Calculated Monthly Fees"}),e.jsxs("span",{children:["Rs ",q]})]}),e.jsx("div",{className:"border-t my-2"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Gross Amount"}),e.jsxs("span",{children:["Rs ",P]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Discount"}),e.jsxs("span",{children:["- Rs ",T]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Extra Discount"}),e.jsxs("span",{children:["- Rs ",t.extra_discount]})]}),e.jsx("div",{className:"border-t my-2"}),e.jsxs("div",{className:"flex justify-between font-bold",children:[e.jsx("span",{children:"Net Amount"}),e.jsxs("span",{className:"cursor-pointer",onClick:()=>{j.current&&(a("paid_amount",i),j.current.value=i.toString())},children:["Rs ",i]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:V()}),e.jsxs("span",{children:["Rs ",G()]})]})]})]}),e.jsxs(f,{children:[e.jsx(_,{children:e.jsx(v,{className:"text-lg",children:"Renewal Information"})}),e.jsx(b,{className:"space-y-4",children:e.jsxs("form",{onSubmit:H,className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(m,{children:"Renewal Period"}),e.jsxs(w,{value:t.selected_months.toString(),onValueChange:s=>a("selected_months",Number(s)),children:[e.jsx(N,{id:"months",children:e.jsx(D,{placeholder:"Select extension period"})}),e.jsxs(C,{children:[e.jsx(l,{value:"1",children:"1 Month"}),e.jsx(l,{value:"3",children:"3 Months"}),e.jsx(l,{value:"6",children:"6 Months"}),e.jsx(l,{value:"12",children:"1 Year"})]})]}),e.jsx(h,{message:x.selected_months})]}),e.jsxs("div",{children:[e.jsx(m,{children:"Payment Expiry Date"}),e.jsx(p,{type:"date",value:new Date(t.new_payment_expiry||d.payment_expiry_date).toISOString().split("T")[0],onChange:s=>a("new_payment_expiry",s.target.value),required:!0})]}),e.jsxs("div",{children:[e.jsx(m,{children:"Payment Method"}),e.jsxs(w,{value:t.payment_mode,onValueChange:s=>a("payment_mode",s),children:[e.jsx(N,{id:"payment-method",children:e.jsx(D,{placeholder:"Select payment method"})}),e.jsxs(C,{children:[e.jsx(l,{value:"Cash",children:"Cash"}),e.jsx(l,{value:"QR",children:"QR"}),e.jsx(l,{value:"Cash + QR",children:"Cash + QR"}),e.jsx(l,{value:"Cheque",children:"Cheque"})]})]}),e.jsx(h,{message:x.payment_mode})]}),e.jsxs("div",{children:[e.jsx(m,{children:"Bill Number"}),e.jsx(p,{type:"text",placeholder:"Enter bill number",onChange:s=>a("bill_number",s.target.value),required:!0}),e.jsx(h,{message:x.bill_number})]}),e.jsxs("div",{children:[e.jsx(m,{children:"Extra Discount (Rs)"}),e.jsx(p,{type:"number",placeholder:"Enter extra discount",onChange:s=>a("extra_discount",Number(s.target.value)),required:!0}),e.jsx(h,{message:x.extra_discount})]}),e.jsxs("div",{children:[e.jsx(m,{children:"Paid Amount (Rs)"}),e.jsx(p,{type:"number",placeholder:"Enter amount paid",ref:j,onChange:s=>a("paid_amount",Number(s.target.value)),required:!0}),e.jsx(h,{message:x.paid_amount})]})]}),e.jsx(ee,{children:"Confirm Renewal"})]})})]})]}),e.jsx(Z,{})]})})},De=te;export{De as default};