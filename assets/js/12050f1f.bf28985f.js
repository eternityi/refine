"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57287],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,y=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(y,a(a({ref:t},s),{},{components:r})):n.createElement(y,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={},l=void 0,u={unversionedId:"ui-integrations/material-ui/hooks/use-auto-complete/on-search-live-preview",id:"ui-integrations/material-ui/hooks/use-auto-complete/on-search-live-preview",title:"on-search-live-preview",description:"",source:"@site/docs/ui-integrations/material-ui/hooks/use-auto-complete/on-search-live-preview.md",sourceDirName:"ui-integrations/material-ui/hooks/use-auto-complete",slug:"/ui-integrations/material-ui/hooks/use-auto-complete/on-search-live-preview",permalink:"/docs/ui-integrations/material-ui/hooks/use-auto-complete/on-search-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/material-ui/hooks/use-auto-complete/on-search-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1702307094,formattedLastUpdatedAt:"Dec 11, 2023",frontMatter:{}},s={},p=[],m={toc:p};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=300px",live:!0,url:"http://localhost:3000",previewHeight:"300px"},'setInitialRoutes(["/posts/create"]);\n// visible-block-start\nimport { useAutocomplete } from "@refinedev/mui";\nimport { Autocomplete, TextField } from "@mui/material";\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\nconst PostCreate: React.FC = () => {\n  const { autocompleteProps } = useAutocomplete<ICategory>({\n    resource: "categories",\n    // highlight-start\n    onSearch: (value) => [\n      {\n        field: "title",\n        operator: "contains",\n        value,\n      },\n    ],\n    // highlight-end\n  });\n\n  return (\n    <Autocomplete\n      {...autocompleteProps}\n      getOptionLabel={(item) => item.title}\n      isOptionEqualToValue={(option, value) =>\n        value === undefined || option?.id?.toString() === (value?.id ?? value)?.toString()\n      }\n      placeholder="Select a category"\n      renderInput={(params) => <TextField {...params} label="Category" margin="normal" variant="outlined" required />}\n    />\n  );\n};\n// visible-block-end\nsetRefineProps({\n  resources: [\n    {\n      name: "posts",\n      create: PostCreate,\n    },\n  ],\n});\nrender(<RefineMuiDemo />);\n')))}f.isMDXComponent=!0}}]);