import{d as C,$ as x,bj as N,al as P,c,az as m,u as e,a as n,w as u,e as p,a2 as w,a3 as z,o as k,b as A,bk as D,bl as F,bm as K,a9 as V,bn as $,K as f,bo as j}from"./index-3e9b5a4f-22e45b7a.js";import{u as H}from"./usePageTitle-9cf51495.js";import"./index-8ec704cb.js";import{r as J}from"./routes-f61735ce.js";import"./meta-26546594.js";const I=C({__name:"BlocksCatalogCreate",setup(R){const r=x(),a=z(),b=N("redirect"),i=P("blockTypeSlug"),y=c(()=>i.value?[i.value]:null),d=m(r.blockTypes.getBlockTypeBySlug,y),o=c(()=>d.response),S=c(()=>o.value?[o.value.id]:null),h=m(r.blockSchemas.getBlockSchemaForBlockType,S),l=c(()=>h.response);function _(s){r.blockDocuments.createBlockDocument(s).then(({id:t})=>B(t)).catch(t=>{f("Failed to create block","error"),console.error(t)})}function g(){a.back()}function B(s){if(f("Block created successfully","success"),b.value){const t=a.resolve(j(b.value));a.push(t);return}a.push(J.block(s))}const v=c(()=>o.value?`Create ${o.value.name} Block`:"Create Block");return H(v),(s,t)=>{const T=w("p-layout-default");return e(o)?(k(),n(T,{key:0,class:"blocks-catalog-create"},{header:u(()=>[A(e(D),{"block-type":e(o)},null,8,["block-type"])]),default:u(()=>[e(o)?(k(),n(e(F),{key:0,"block-type":e(o)},{default:u(()=>[e(l)?(k(),n(e(K),V({key:e(l).id,"block-schema":e(l)},$({submit:_,cancel:g})),null,16,["block-schema"])):p("",!0)]),_:1},8,["block-type"])):p("",!0)]),_:1})):p("",!0)}}});export{I as default};