import{W as n,j as e,Y as m,a}from"./app-3SIRTf-5.js";import{G as d}from"./GuestLayout-DutgF9jd.js";import{P as l}from"./PrimaryButton-BynJBPE3.js";import"./card-CBtJbqk1.js";import"./utils-C-Zvzyq5.js";import"./GlobalLayout-CMcNHiVS.js";import"./toaster-Dw7QYiKI.js";import"./index-YuXTghCy.js";import"./index-Cqu9cwS9.js";import"./index-BwJKMgpa.js";import"./x-ZThs6_Gk.js";import"./createLucideIcon-a0XJ54KJ.js";import"./index-Bb4qSo10.js";import"./use-toast-D1Qu1tBf.js";function N({status:t}){const{post:i,processing:o}=n({}),r=s=>{s.preventDefault(),i(route("verification.send"))};return e.jsxs(d,{children:[e.jsx(m,{title:"Email Verification"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx("form",{onSubmit:r,children:e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx(l,{disabled:o,children:"Resend Verification Email"}),e.jsx(a,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Log Out"})]})})]})}export{N as default};