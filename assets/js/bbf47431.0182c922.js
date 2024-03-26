"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12096],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,c(c({ref:r},l),{},{components:t})):n.createElement(m,c({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45954:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>u});t(67294);var n=t(3905);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>",source:"packages/core/src/components/canAccess/index.tsx"},i=void 0,p={unversionedId:"api-reference/core/components/accessControl/can-access",id:"version-3.xx.xx/api-reference/core/components/accessControl/can-access",title:"<CanAccess>",description:"` is the component form of useCan`.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/components/accessControl/canAccess.md",sourceDirName:"api-reference/core/components/accessControl",slug:"/api-reference/core/components/accessControl/can-access",permalink:"/docs/3.xx.xx/api-reference/core/components/accessControl/can-access",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/components/accessControl/canAccess.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1711454188,formattedLastUpdatedAt:"Mar 26, 2024",frontMatter:{id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>",source:"packages/core/src/components/canAccess/index.tsx"},sidebar:"someSidebar",previous:{title:"<Authenticated>",permalink:"/docs/3.xx.xx/api-reference/core/components/auth/authenticated"},next:{title:"Interface References",permalink:"/docs/3.xx.xx/api-reference/core/interfaceReferences"}},l={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>fallback</code>",id:"fallback",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",r)},f=d("DocThumbsUpDownFeedbackWidget"),m=d("PropsTable"),b={toc:u};function k(e){var{components:r}=e,t=c(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},b,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"<CanAccess>")," is the component form of ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/accessControl/useCan/"},(0,n.kt)("inlineCode",{parentName:"a"},"useCan")),"."),(0,n.kt)("p",null,"It internally uses ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/accessControl/useCan/"},(0,n.kt)("inlineCode",{parentName:"a"},"useCan")),"'s return values to provide its functionality."),(0,n.kt)("p",null,"Passes the given properties to the ",(0,n.kt)("inlineCode",{parentName:"p"},"can")," method from your ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider/"},"access control provider"),". After, if it returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"true"),", it renders the children."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"false"),", it renders ",(0,n.kt)("a",{parentName:"li",href:"#fallback"},(0,n.kt)("inlineCode",{parentName:"a"},"fallback"))," prop if provided. Otherwise, it renders ",(0,n.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider/"},"Refer to Access Control Provider for more information. ","\u2192")),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)(f,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CanAccess } from "@pankod/refine-core";\n\nconst MyComponent = () => (\n  <CanAccess\n    resource="posts"\n    action="edit"\n    params={{ id: 1 }}\n    fallback={<CustomFallback />}\n  >\n    <YourComponent />\n  </CanAccess>\n);\n'))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)(f,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"It's also accepts all the properties of ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/accessControl/useCan/#properties"},(0,n.kt)("inlineCode",{parentName:"a"},"useCan")),".")),(0,n.kt)("h3",{id:"fallback"},(0,n.kt)("inlineCode",{parentName:"h3"},"fallback")),(0,n.kt)(f,{id:"fallback",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"Component to render if ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/accessControl/useCan/"},(0,n.kt)("inlineCode",{parentName:"a"},"useCan"))," returns false. If ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),", it renders ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"<CanAccess fallback={<div>You cannot access this section</div>}>\n  <YourComponent />\n</CanAccess>\n"))),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("h3",{id:"properties-1"},"Properties"),(0,n.kt)(f,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)(m,{module:"@pankod/refine-core/CanAccess",mdxType:"PropsTable"})))}k.isMDXComponent=!0}}]);