import{U as S,d as h,c as C,o as l,a as p,w as u,b as a,u as e,C as c,e as w,S as M,f as v,z as U,R as F,O as P,p as d,r as K,X as y,g as N,h as A,i as b,q as $,T as B,j as V,k as D,L as T,l as W,m as j,F as q,n as z,M as E,K as H,s as Q,t as X,v as Y,x as G,Y as J}from"./index-3e9b5a4f-22e45b7a.js";import{r as Z}from"./index-8ec704cb.js";import{i as ee}from"./colorMode-75dab46a.js";import{r as i}from"./routes-f61735ce.js";import{U as g,A as te}from"./ApiRoute-3ed0c406.js";import"./meta-26546594.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))_(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&_(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function _(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const I=Symbol("canInjectionKey");function oe(){return S(I)}const se=h({__name:"ContextSidebar",setup(r){const t=oe(),n=C(()=>t.access.work_pools&&t.read.work_pool);return(_,o)=>(l(),p(e(M),{class:"context-sidebar"},{footer:u(()=>[a(e(c),{title:"Settings",icon:"CogIcon",to:e(i).settings()},null,8,["to"])]),default:u(()=>[a(e(c),{title:"Flow Runs",icon:"FlowRun",to:e(i).flowRuns()},null,8,["to"]),a(e(c),{title:"Flows",icon:"Flow",to:e(i).flows()},null,8,["to"]),a(e(c),{title:"Deployments",icon:"LocationMarkerIcon",to:e(i).deployments()},null,8,["to"]),e(n)?(l(),p(e(c),{key:0,title:"Work Pools",icon:"DatabaseIcon",to:e(i).workPools()},null,8,["to"])):w("",!0),e(n)?w("",!0):(l(),p(e(c),{key:1,title:"Work Queues",icon:"DatabaseIcon",to:e(i).workQueues()},null,8,["to"])),a(e(c),{title:"Blocks",icon:"CubeIcon",to:e(i).blocks()},null,8,["to"]),a(e(c),{title:"Notifications",icon:"BellIcon",to:e(i).notifications()},null,8,["to"]),a(e(c),{title:"Task Run Concurrency",icon:"Task",to:e(i).concurrencyLimits()},null,8,["to"])]),_:1}))}}),ne={class:"app-router-view"},ae=h({__name:"AppRouterView",async setup(r){let t,n;const _=([t,n]=v(()=>g.get("apiUrl")),t=await t,n(),t),o=U({baseUrl:_}),s=([t,n]=v(()=>g.get("flags")),t=await t,n(),t),f=F([...P,...s]),x=q();d(I,f),d(T,f),d(W,o),d(j,x);const m=K(!1),k=C(()=>y.lg||m.value);function L(){m.value=!m.value}function O(){m.value=!1}return N(()=>document.body.classList.toggle("body-scrolling-disabled",k.value&&!y.lg)),(fe,_e)=>(l(),A("div",ne,[e(y).lg?w("",!0):(l(),p(e($),{key:0,class:"app-router-view__mobile-menu"},{"upper-links":u(()=>[a(e(b),{icon:"PrefectGradient",class:"app-router-view__prefect-icon"})]),"bottom-links":u(()=>[a(e(b),{icon:"MenuIcon",class:"app-router-view__menu-icon",onClick:L})]),_:1})),e(k)?(l(),p(se,{key:1,class:"app-router-view__sidebar",onClick:O})):w("",!0),a(e(D),{class:"app-router-view__view"},{default:u(({Component:R})=>[a(B,{name:"app-router-view-fade",mode:"out-in"},{default:u(()=>[(l(),p(V(R)))]),_:2},1024)]),_:1})]))}});class re extends te(E){}const ce=z(new re);async function ie(){try{await ce.getHealth()}catch(r){const t=await g.get("apiUrl").then(n=>n);H(`Can't connect to Orion API at ${t}. Check that it's accessible from your machine.`,"error",{timeout:!1}),console.warn(r)}}const le={class:"app","data-teleport-target":"app"},ue=h({__name:"App",setup(r){return ie(),Q(),(t,n)=>(l(),A("div",le,[(l(),p(X,null,{default:u(()=>[a(ae)]),_:1}))]))}});ee();function pe(){const r=Y(ue);r.use(Z),r.use(G),r.use(J),r.mount("#app")}pe();