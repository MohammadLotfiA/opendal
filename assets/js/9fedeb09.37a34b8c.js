"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[9782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9987:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"Podling Status Reports",sidebar_position:4},i=void 0,p={unversionedId:"contributing/podling-report",id:"contributing/podling-report",title:"Podling Status Reports",description:"Podling Status Report provides key updates on your podling's status and helps the ASF Board monitor and support the incubating projects. This guide provides step-by-step instructions on how to prepare and submit Podling Status Report effectively.",source:"@site/docs/contributing/podling-report.md",sourceDirName:"contributing",slug:"/contributing/podling-report",permalink:"/docs/contributing/podling-report",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/docs/contributing/podling-report.md",tags:[],version:"current",lastUpdatedBy:"Xuanwo",lastUpdatedAt:1694105956,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:4,frontMatter:{title:"Podling Status Reports",sidebar_position:4},sidebar:"docs",previous:{title:"Committer Onboarding",permalink:"/docs/contributing/committer"},next:{title:"Reference",permalink:"/docs/category/reference"}},s={},l=[{value:"Frequency of Reporting",id:"frequency-of-reporting",level:3},{value:"Report Preparation",id:"report-preparation",level:3},{value:"Report Writing and Submission",id:"report-writing-and-submission",level:3},{value:"Mentor Sign-off",id:"mentor-sign-off",level:3}],u={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Podling Status Report provides key updates on your podling's status and helps the ASF Board monitor and support the incubating projects. This guide provides step-by-step instructions on how to prepare and submit Podling Status Report effectively."),(0,o.kt)("h3",{id:"frequency-of-reporting"},"Frequency of Reporting"),(0,o.kt)("p",null,"New podlings are required to submit reports monthly for the first three months. After this period, the reporting frequency changes to quarterly. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The current reporting frequency for OpenDAL is once per quarter.")," Stay attentive to ",(0,o.kt)("a",{parentName:"p",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org")," (",(0,o.kt)("a",{parentName:"p",href:"mailto:general-subscribe@incubator.apache.org"},"subscribe"),"), where due dates for these reports are announced."),(0,o.kt)("h3",{id:"report-preparation"},"Report Preparation"),(0,o.kt)("p",null,"It's recommended to discuss the report on ",(0,o.kt)("a",{parentName:"p",href:"mailto:dev@opendal.apache.org"},"dev@opendal.apache.org")," (",(0,o.kt)("a",{parentName:"p",href:"mailto:dev-subscribe@opendal.apache.org"},"subscribe"),"), inviting all members to contribute. Here are the critical points your report should address:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Any concerns that require the attention of the Incubator PMC or ASF Board."),(0,o.kt)("li",{parentName:"ul"},"Legal, infrastructure, cross-project, or personal issues that need addressing."),(0,o.kt)("li",{parentName:"ul"},"Achievements (releases, milestones, etc.) since the last report."),(0,o.kt)("li",{parentName:"ul"},"The activity and helpfulness of mentors."),(0,o.kt)("li",{parentName:"ul"},"Any other significant points or thoughts you think should be included.")),(0,o.kt)("p",null,"You can discuss the issues based on the template or refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/August2023#opendal"},"previous reports")," for preparation."),(0,o.kt)("h3",{id:"report-writing-and-submission"},"Report Writing and Submission"),(0,o.kt)("p",null,"Podling Status Report has its own format. Please fill it out based on your assessment of the project's incubation status and the materials collected during the preparation phase. We should use the existing format and don\u2019t change the subject headers. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Note that IPMC update the template from time to time, so be sure to use the one IPMC provide and not a previous report.")),(0,o.kt)("h3",{id:"mentor-sign-off"},"Mentor Sign-off"),(0,o.kt)("p",null,"Each Podling Status Report must be signed off by a mentor. ",(0,o.kt)("strong",{parentName:"p"},"Without a mentor's sign-off, the IPMC will not accept the report"),", and the podling will need to submit a new report the following month."),(0,o.kt)("p",null,"After submitting the report, you can send a email to ",(0,o.kt)("a",{parentName:"p",href:"mailto:dev@opendal.apache.org"},"dev@opendal.apache.org")," to remind our mentors and the community to review the report and provide feedback."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[ANNOUNCE] OpenDAL's Podling Report of <Month><Year>\n\nHello, everyone!\n\nAs a representative of the OpenDAL community, I am pleased to present our <Month><Year> podling report.\n\nWe appreciate the opportunity to share updates on our progress and\nachievements over the past weeks, and we welcome any feedback or\nsuggestions that may help us continue to grow and succeed as a project.\n\nThank you for your continued support.\n\nLINK: <link-of-report-in-cwiki>\n")))}d.isMDXComponent=!0}}]);