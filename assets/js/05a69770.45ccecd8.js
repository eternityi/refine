"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6574],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||i;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87034:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={title:"usePermissions",description:"usePermissions data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"/packages/core/src/hooks/auth/usePermissions/index.ts"},u=void 0,c={unversionedId:"core/hooks/auth/use-permissions/index",id:"core/hooks/auth/use-permissions/index",title:"usePermissions",description:"usePermissions data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"@site/docs/core/hooks/auth/use-permissions/index.md",sourceDirName:"core/hooks/auth/use-permissions",slug:"/core/hooks/auth/use-permissions/",permalink:"/docs/core/hooks/auth/use-permissions/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/hooks/auth/use-permissions/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1702485081,formattedLastUpdatedAt:"Dec 13, 2023",frontMatter:{title:"usePermissions",description:"usePermissions data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"/packages/core/src/hooks/auth/usePermissions/index.ts"},sidebar:"mainSidebar",previous:{title:"useLogout",permalink:"/docs/core/hooks/auth/use-logout/"},next:{title:"useRegister",permalink:"/docs/core/hooks/auth/use-register/"}},p={},l=[{value:"Usage",id:"usage",level:2}],m={toc:l};function d(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"usePermissions")," calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"getPermissions")," method from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,n.kt)("p",null,"It returns the result of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,n.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"isError"),"."),(0,n.kt)("p",null,"Data that is resolved from the ",(0,n.kt)("inlineCode",{parentName:"p"},"getPermissions")," will be returned as the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"usePermissions")," can be useful when you want to get user's permission's anywhere in your code."),(0,n.kt)("p",null,"For example, if you want only the users with the admin role to see the create button in a list page, we have a logic in ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"getPermissions")," method like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n  // ...\n  // highlight-start\n  getPermissions: async () => {\n    return ["admin"];\n  },\n  // highlight-end\n  // ...\n};\n')),(0,n.kt)("p",null,"Get permissions data in the list page with ",(0,n.kt)("inlineCode",{parentName:"p"},"usePermissions")," and check if the user has ",(0,n.kt)("inlineCode",{parentName:"p"},'"admin'),'" role:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/post/list"',title:'"pages/post/list"'},'// highlight-next-line\nimport { usePermissions } from "@refinedev/core";\nimport { List } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n  // highlight-next-line\n  const { data: permissionsData } = usePermissions();\n\n  return <List canCreate={permissionsData?.includes("admin")}>...</List>;\n};\n')),(0,n.kt)("p",null,"To learn more about the ",(0,n.kt)("inlineCode",{parentName:"p"},"List")," component and CRUD views, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides-concepts/ui-libraries/#views"},"UI Libraries")," guide."))}d.isMDXComponent=!0}}]);