import{W as w,r as f,j as s,Y as x}from"./app-BbJUaZt7.js";import{G as j}from"./GuestLayout-CktQ5jje.js";import{I as t}from"./InputError-NIrKKB-2.js";import{I as m}from"./InputLabel-uV-0ck0S.js";import{P as v}from"./PrimaryButton-Css527PT.js";import{T as i}from"./TextInput-_IZXHkse.js";import"./card-BdKu3Mnk.js";import"./utils-C-Zvzyq5.js";import"./GlobalLayout-DH3BRBnV.js";import"./toaster-D0flyv3P.js";import"./index-B95Fhcwf.js";import"./index-DJQKv4up.js";import"./index-CXD2mk9O.js";import"./x-Dzg8clAH.js";import"./createLucideIcon-CPw1ASD4.js";import"./index-Bb4qSo10.js";import"./use-toast-DB_HyPaF.js";function L({token:l,email:p}){const{data:e,setData:r,post:n,processing:d,errors:o,reset:c}=w({token:l,email:p,password:"",password_confirmation:""});f.useEffect(()=>()=>{c("password","password_confirmation")},[]);const u=a=>{a.preventDefault(),n(route("password.store"))};return s.jsxs(j,{children:[s.jsx(x,{title:"Reset Password"}),s.jsxs("form",{onSubmit:u,children:[s.jsxs("div",{children:[s.jsx(m,{htmlFor:"email",value:"Email"}),s.jsx(i,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>r("email",a.target.value)}),s.jsx(t,{message:o.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"password",value:"Password"}),s.jsx(i,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>r("password",a.target.value)}),s.jsx(t,{message:o.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(i,{type:"password",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>r("password_confirmation",a.target.value)}),s.jsx(t,{message:o.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(v,{className:"ms-4",disabled:d,children:"Reset Password"})})]})]})}export{L as default};