import{E as s,_ as r}from"./TableView.vue_vue_type_script_setup_true_lang-4aV2v459.js";import{a as o,aa as p,g as d,d as m,e as u,o as g,l as b,u as _,ab as f,B as a}from"./index-CFIuHd6L.js";import"./CheckIcon-WsWJKFa5.js";import"./keyboard-CoyWbmtg.js";import"./use-outside-click-D9CmvqGo.js";import"./focus-management-sgnnOJAN.js";import"./use-resolve-button-type-Cd1lF7xt.js";import"./vi-DuRjlfyj.js";import"./calculate-active-index-DnI7i1xD.js";import"./use-tree-walker-BajaqjL8.js";import"./hidden-oB0Q24ne.js";import"./EyeIcon-bxy9ydSK.js";import"./ChevronRightIcon-Dy_Q0ADJ.js";import"./TrashIcon-F-g-Wj6M.js";import"./ChevronDownIcon-CG5ymAoP.js";const v=[{text:"table.id",value:"id",width:100},{text:"table.title",value:"title",sortable:!0},{text:"table.content",value:"content"},{text:"table.desc",value:"desc"},{text:"table.createdAt",value:"createdAt"},{text:"table.updatedAt",value:"updatedAt"},{text:"table.slug",value:"slug"}],i=o({pageNumber:1,pageSize:10,enable:s.ALL}),n={pageNumber:1,pageSize:10,firstPage:1,lastPage:1,totalPages:0,totalRecords:0,nextPage:1,previousPage:1},l=o([{id:"1",title:"mock-data",content:"mock-data",desc:"mock-data",slug:"mock-data",type:"mock-data",imageUrl:"",createdAt:"2022-01-01",updatedAt:"2024-01-01",enable:s.ALL}]),c=o(n),e=async()=>{const t=await p("/api/blogs/page",i.value);l.value=(t==null?void 0:t.data.data)||[],c.value=(t==null?void 0:t.data)||n};d(i,async()=>{await e()},{deep:!0});const x={class:"flex flex-col gap-10"},U=m({__name:"BlogView",setup(t){return u(async()=>{await e()}),(h,k)=>(g(),b("div",x,[_(r,f({headers:a(v),items:a(l),pagination:a(c),paginationOptions:a(i),fetch:a(e)},{route:"blogs",key:"blogs"}),null,16)]))}});export{U as default};
