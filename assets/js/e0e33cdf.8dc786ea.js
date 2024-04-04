"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5044],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),g=o,y=p["".concat(c,".").concat(g)]||p[g]||d[g]||a;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},32630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});t(96540);var r=t(15680);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"useTranslation"},c=void 0,s={unversionedId:"i18n/hooks/use-translation/index",id:"i18n/hooks/use-translation/index",title:"useTranslation",description:"The useTranslation hook, allows you to use call translate, changeLocale, and getLocale methods from the i18nProvider that you provided. It can be used to translate texts, change the locale, and get the current locale in your own components.",source:"@site/docs/i18n/hooks/use-translation/index.md",sourceDirName:"i18n/hooks/use-translation",slug:"/i18n/hooks/use-translation/",permalink:"/docs/i18n/hooks/use-translation/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/i18n/hooks/use-translation/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1712240164,formattedLastUpdatedAt:"Apr 4, 2024",frontMatter:{title:"useTranslation"},sidebar:"mainSidebar",previous:{title:"i18n Provider",permalink:"/docs/i18n/i18n-provider/"},next:{title:"Next.js",permalink:"/docs/examples/i18n/i18n-nextjs"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"translate",id:"translate",level:2},{value:"changeLocale",id:"changelocale",level:2},{value:"getLocale",id:"getlocale",level:2}],d=(g="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var g;const y={toc:p},m="wrapper";function h(e){var{components:n}=e,t=l(e,["components"]);return(0,r.yg)(m,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"useTranslation")," hook, allows you to use call ",(0,r.yg)("inlineCode",{parentName:"p"},"translate"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"changeLocale"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"getLocale")," methods from the ",(0,r.yg)("a",{parentName:"p",href:"/docs/i18n/i18n-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"i18nProvider"))," that you provided. It can be used to translate texts, change the locale, and get the current locale in your own components."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(d,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This hook can only be used if ",(0,r.yg)("a",{parentName:"p",href:"/docs/i18n/i18n-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"i18nProvider"))," is provided.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useTranslation } from "@refinedev/core";\n\nexport const MyComponent = () => {\n  const { translate, getLocale, changeLocale } = useTranslation();\n  const currentLocale = getLocale();\n\n  return (\n    <div>\n      <h1>{translate("languages")}</h1>\n      <button\n        onClick={() => changeLocale("en")}\n        disabled={currentLocale === "en"}\n      >\n        English\n      </button>\n      <button\n        onClick={() => changeLocale("de")}\n        disabled={currentLocale === "de"}\n      >\n        German\n      </button>\n    </div>\n  );\n};\n'))),(0,r.yg)("h2",{id:"translate"},"translate"),(0,r.yg)(d,{id:"translate",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you need to translate the texts in your own components, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"translate")," method. It calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"translate")," method from ",(0,r.yg)("a",{parentName:"p",href:"/docs/i18n/i18n-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"i18nProvider"))," under the hood."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useTranslate } from "@refinedev/core";\n\nexport const MyComponent = () => {\n  const { translate } = useTranslate();\n\n  return <button>{translate("my.translate.text")}</button>;\n};\n'))),(0,r.yg)("h2",{id:"changelocale"},"changeLocale"),(0,r.yg)(d,{id:"changelocale",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you need to change the locale at runtime, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"changeLocale")," method. It calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"changeLocale")," method from ",(0,r.yg)("a",{parentName:"p",href:"/docs/i18n/i18n-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"i18nProvider"))," under the hood."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useSetLocale } from "@refinedev/core";\n\nexport const LanguageSwicher = () => {\n  const { changeLocale } = useTranslation();\n\n  return (\n    <div>\n      <span>Languages</span>\n      <button onClick={() => changeLanguage("en")}>English</button>\n      <button onClick={() => changeLanguage("es")}>Spanish</button>\n    </div>\n  );\n};\n'))),(0,r.yg)("h2",{id:"getlocale"},"getLocale"),(0,r.yg)(d,{id:"getlocale",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you need to know the current locale, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"getLocale")," method. It calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"getLocale")," method from ",(0,r.yg)("a",{parentName:"p",href:"/docs/i18n/i18n-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"i18nProvider"))," under the hood."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useSetLocale } from "@refinedev/core";\n\nexport const LanguageSwicher = () => {\n  const { getLocale } = useTranslation();\n\n  return <h1>Current Locale: {getLocale()}</h1>;\n};\n'))))}h.isMDXComponent=!0}}]);