import{W as n,r as d,j as s,Y as l}from"./app-BbJUaZt7.js";import{G as c}from"./GuestLayout-CktQ5jje.js";import{I as u}from"./InputError-NIrKKB-2.js";import{I as f}from"./InputLabel-uV-0ck0S.js";import{P as x}from"./PrimaryButton-Css527PT.js";import{T as w}from"./TextInput-_IZXHkse.js";import"./card-BdKu3Mnk.js";import"./utils-C-Zvzyq5.js";import"./GlobalLayout-DH3BRBnV.js";import"./toaster-D0flyv3P.js";import"./index-B95Fhcwf.js";import"./index-DJQKv4up.js";import"./index-CXD2mk9O.js";import"./x-Dzg8clAH.js";import"./createLucideIcon-CPw1ASD4.js";import"./index-Bb4qSo10.js";import"./use-toast-DB_HyPaF.js";function L(){const{data:t,setData:o,post:e,processing:a,errors:m,reset:i}=n({password:""});d.useEffect(()=>()=>{i("password")},[]);const p=r=>{r.preventDefault(),e(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:p,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(f,{htmlFor:"password",value:"Password"}),s.jsx(w,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>o("password",r.target.value)}),s.jsx(u,{message:m.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(x,{className:"ms-4",disabled:a,children:"Confirm"})})]})]})}export{L as default};