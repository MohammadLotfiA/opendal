"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[4649],{2203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var a=t(1527),s=t(2175);function r(e){const n={code:"code",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,a.jsx)(n.p,{children:"This service can be used to:"}),"\n",(0,a.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",disabled:!0})," copy"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",disabled:!0})," rename"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",disabled:!0})," list"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," scan"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",disabled:!0})," presign"]}),"\n",(0,a.jsxs)(n.li,{className:"task-list-item",children:[(0,a.jsx)(n.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"name"}),": Set the name for this cache instance."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"max_capacity"}),": Set the max capacity of the cache."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"time_to_live"}),": Set the time to live of the cache."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"time_to_idle"}),": Set the time to idle of the cache."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"num_segments"}),": Set the segments number of the cache."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can refer to [",(0,a.jsx)(n.code,{children:"MokaBuilder"}),"]'s docs for more information"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust,no_run",children:'use anyhow::Result;\nuse opendal::services::Moka;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Moka::default();\n    builder.name("opendal");\n\n    let op: Operator = Operator::new(builder)?.finish();\n    Ok(())\n}\n'})})]})}function i(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}var l=t(5431),o=t(2860);const c={title:"Moka"},u=void 0,d={id:"services/moka",title:"Moka",description:"Moka services support.",source:"@site/docs/services/moka.mdx",sourceDirName:"services",slug:"/services/moka",permalink:"/docs/services/moka",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/moka.mdx",tags:[],version:"current",lastUpdatedBy:"G-XD",lastUpdatedAt:1693467013,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"Moka"},sidebar:"docs",previous:{title:"Memory",permalink:"/docs/services/memory"},next:{title:"MongoDB",permalink:"/docs/services/mongodb"}},h={},p=[{value:"Via Config",id:"via-config",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/moka-rs/moka",children:"Moka"})," services support."]}),"\n","\n",(0,a.jsx)(i,{components:e.components}),"\n",(0,a.jsx)(n.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(o.Z,{value:"rust",label:"Rust",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("name".to_string(), "your_cache_name".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Moka, map)?;\n    Ok(())\n}\n'})})}),(0,a.jsx)(o.Z,{value:"node.js",label:"Node.js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("moka", {\n    name: "your_cache_name",\n  });\n}\n'})})}),(0,a.jsx)(o.Z,{value:"python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("moka",\n  name="your_cache_name",\n)\n'})})})]})]})}function b(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},2860:(e,n,t)=>{t.d(n,{Z:()=>i});t(959);var a=t(6259);const s={tabItem:"tabItem_CbVR"};var r=t(1527);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,i),hidden:t,children:n})}},5431:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(959),s=t(6259),r=t(2990),i=t(8903),l=t(3133),o=t(563),c=t(351),u=t(3026);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=m({queryString:t,groupId:s}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),f=(()=>{const e=c??b;return p({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,r]),tabValues:r}}var x=t(3499);const f={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var j=t(1527);function k(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),s=l[t].value;s!==a&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(k,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function y(e){const n=(0,x.Z)();return(0,j.jsx)(g,{...e,children:d(e.children)},String(n))}},2175:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(959);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);