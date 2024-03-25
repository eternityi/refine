"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34327],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>d,toc:()=>c});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"prepare-env",title:"2. Prepare your dev environment",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/index",next:"3.xx.xx/tutorial/getting-started/{preferredUI}/create-project"}},s=void 0,d={unversionedId:"tutorial/getting-started/prepare-env",id:"version-3.xx.xx/tutorial/getting-started/prepare-env",title:"2. Prepare your dev environment",description:"Get the dev tools you need",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/1-prepare-env.md",sourceDirName:"tutorial/1-getting-started",slug:"/tutorial/getting-started/prepare-env",permalink:"/docs/3.xx.xx/tutorial/getting-started/prepare-env",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/1-prepare-env.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Bozhen",lastUpdatedAt:1711348831,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:1,frontMatter:{id:"prepare-env",title:"2. Prepare your dev environment",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/index",next:"3.xx.xx/tutorial/getting-started/{preferredUI}/create-project"}}},p={},c=[{value:"Get the dev tools you need",id:"get-the-dev-tools-you-need",level:2},{value:"Terminal",id:"terminal",level:3},{value:"Code Editor",id:"code-editor",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=u("DocThumbsUpDownFeedbackWidget"),y=u("Checklist"),f=u("ChecklistItem"),g={toc:c};function v(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-the-dev-tools-you-need"},"Get the dev tools you need"),(0,n.kt)(m,{id:"get-the-dev-tools-you-need",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"Before you can create a ",(0,n.kt)("strong",{parentName:"p"},"refine")," app, you need to set up a development environment on your local machine. This includes installing a few tools that you will use to create your project and run key commands to build, develop, and test your site.")),(0,n.kt)("h3",{id:"terminal"},"Terminal"),(0,n.kt)(m,{id:"terminal",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"You will use a terminal (also known as a command line interface) to run these commands and interact with your operating system. You can access the terminal through a local program for your operating system, such as Terminal (MacOS/Linux) or Command Prompt (Windows)."),(0,n.kt)("p",null,"In order to run ",(0,n.kt)("strong",{parentName:"p"},"refine")," applications on your system, you will also need to have ",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," installed. Node.js is a JavaScript runtime that allows developers to run JavaScript code outside of a web browser. It is required to run ",(0,n.kt)("strong",{parentName:"p"},"refine")," applications because it is a JavaScript-based tool."),(0,n.kt)("p",null,"To check if you already have a compatible version of Node.js (v.16.0.0 or higher) installed:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Launch your terminal and type the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you do not have a compatible version of Node.js installed, follow these instructions to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"install Node.js")," via the terminal.")))),(0,n.kt)("h3",{id:"code-editor"},"Code Editor"),(0,n.kt)(m,{id:"code-editor",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"In addition to a terminal, you will also need a code editor to write and edit your code. A code editor is a software application that allows you to write and edit code for various programming languages."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This tutorial will use ",(0,n.kt)("strong",{parentName:"p"},"VS Code"),", but you can use any code editor that is compatible with your operating system. Some other popular code editors include ",(0,n.kt)("strong",{parentName:"p"},"Sublime Text"),", ",(0,n.kt)("strong",{parentName:"p"},"Atom"),", and ",(0,n.kt)("strong",{parentName:"p"},"Eclipse"),".")),(0,n.kt)("p",null,"To install a code editor:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download and install the code editor of your choice from the Internet."),(0,n.kt)("li",{parentName:"ol"},"Follow the prompts to complete the installation process.")),(0,n.kt)(y,{mdxType:"Checklist"},(0,n.kt)(f,{id:"has-access-to-terminal",mdxType:"ChecklistItem"},"I am able to access the command line via a terminal."),(0,n.kt)(f,{id:"installed-nodejs",mdxType:"ChecklistItem"},"Node.js has been installed on my device."),(0,n.kt)(f,{id:"installed-vscode",mdxType:"ChecklistItem"},"I am using a code editor similar to Visual Studio Code."))))}v.isMDXComponent=!0}}]);