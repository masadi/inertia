import{W as d,j as s,F as u,a as e,b as c}from"./app-19c81405.js";import{G as p}from"./guest-layout-d79a8963.js";import{I as g,a as f}from"./input-fcf89efb.js";import{B as w}from"./button-ade09c89.js";import"./application-logo-7679dc8f.js";import"./section-title-e9255691.js";import"./index-d3ff7fd6.js";import"./theme-toggle-28eb38ae.js";function h({status:t}){const{data:o,setData:r,post:m,processing:i,errors:l}=d({email:""}),n=a=>{r(a.target.name,a.target.value)};return s(u,{children:[e(c,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm leading-normal text-slate-500",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e("div",{className:"mb-4 text-sm font-medium text-green-600",children:t}),s("form",{onSubmit:a=>{a.preventDefault(),m("/forgot-password")},children:[e(g,{type:"text",name:"email",value:o.email,autoFocus:!0,onChange:n}),e(f,{message:l.email,className:"mt-2"}),e("div",{className:"mt-4 flex items-center justify-end",children:e(w,{type:"submit",className:"ml-4",disabled:i,children:"Email Password Reset Link"})})]})]})}h.layout=t=>e(p,{children:t});export{h as default};
