import{G as r,o as s,q as n,N as y,O as f,u as i,i as o,J as g,C as c,s as b,P as k,M as p,r as S}from"./index.4ea654b0.js";const V=["type","name","value"],v=o("span",{class:"check"},null,-1),x={class:"pl-2"},N={__name:"FormCheckRadio",props:{name:{type:String,required:!0},type:{type:String,default:"checkbox",validator:e=>["checkbox","radio","switch"].includes(e)},label:{type:String,default:null},modelValue:{type:[Array,String,Number,Boolean],default:null},inputValue:{type:[String,Number,Boolean],required:!0}},emits:["update:modelValue"],setup(e,{emit:u}){const a=e,t=r({get:()=>a.modelValue,set:d=>{u("update:modelValue",d)}}),l=r(()=>a.type==="radio"?"radio":"checkbox");return(d,m)=>(s(),n("label",{class:b(e.type)},[y(o("input",{"onUpdate:modelValue":m[0]||(m[0]=h=>g(t)?t.value=h:null),type:i(l),name:e.name,value:e.inputValue},null,8,V),[[f,i(t)]]),v,o("span",x,c(e.label),1)],2))}},_={class:"mb-6 last:mb-0"},B=["for"],C={key:1,class:"text-xs text-gray-500 dark:text-slate-400 mt-1"},$={__name:"FormField",props:{label:{type:String,default:null},labelFor:{type:String,default:null},help:{type:String,default:null}},setup(e){const u=k(),a=r(()=>{const t=[],l=u.default().length;return l>1&&t.push("grid grid-cols-1 gap-3"),l===2&&t.push("md:grid-cols-2"),t});return(t,l)=>(s(),n("div",_,[e.label?(s(),n("label",{key:0,for:e.labelFor,class:"block font-bold mb-2"},c(e.label),9,B)):p("",!0),o("div",{class:b(i(a))},[S(t.$slots,"default")],2),e.help?(s(),n("div",C,c(e.help),1)):p("",!0)]))}};export{$ as _,N as a};
