import{d as v,$ as D,al as C,a0 as h,c as p,a as o,w as m,a2 as w,o as n,u as t,aW as E,e as c,aX as g,K as u}from"./index-3e9b5a4f-22e45b7a.js";import{u as x}from"./usePageTitle-9cf51495.js";import{r as d}from"./index-8ec704cb.js";import"./routes-f61735ce.js";import"./meta-26546594.js";const z=v({__name:"DeploymentEdit",setup(S){const a=D(),s=C("deploymentId"),i={interval:3e5},y=h(a.deployments.getDeployment,[s.value],i),e=p(()=>y.response);async function f(l){try{await a.deployments.updateDeployment(s.value,l),u("Deployment updated","success"),d.back()}catch(r){u("Error updating deployment","error"),console.warn(r)}}function _(){d.back()}const b=p(()=>e.value?`Edit Deployment: ${e.value.name}`:"Edit Deployment");return x(b),(l,r)=>{const k=w("p-layout-default");return n(),o(k,{class:"deployment-edit"},{header:m(()=>[t(e)?(n(),o(t(E),{key:0,deployment:t(e)},null,8,["deployment"])):c("",!0)]),default:m(()=>[t(e)?(n(),o(t(g),{key:0,deployment:t(e),onSubmit:f,onCancel:_},null,8,["deployment"])):c("",!0)]),_:1})}}});export{z as default};