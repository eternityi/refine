"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18759],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},w={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(r),h=n,m=c["".concat(p,".").concat(h)]||c[h]||w[h]||o;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},16508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>w});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={title:"How do you wrap text content in CSS?",description:"We'll look at the CSS features that allow us to wrap overflowing text in containers.",slug:"css-text-wrap",authors:"peter_osah",tags:["css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-05-css-wrap-text/social.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/blog/css-text-wrap",source:"@site/blog/2024-03-05-css-wrap-text.md",title:"How do you wrap text content in CSS?",description:"We'll look at the CSS features that allow us to wrap overflowing text in containers.",date:"2024-03-05T00:00:00.000Z",formattedDate:"March 5, 2024",tags:[{label:"css",permalink:"/blog/tags/css"}],readingTime:7.6,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"How do you wrap text content in CSS?",description:"We'll look at the CSS features that allow us to wrap overflowing text in containers.",slug:"css-text-wrap",authors:"peter_osah",tags:["css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-05-css-wrap-text/social.png",hide_table_of_contents:!1},prevItem:{title:"Developing Internal Tools in 2024",permalink:"/blog/internal-tools"},nextItem:{title:"TypeScript Mapped Types in Depth",permalink:"/blog/typescript-mapped-types"},relatedPosts:[{title:"Material UI Grid System in React",description:"We'll discover the Material UI Grid system with React examples",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.01,date:"2022-09-18T00:00:00.000Z"},{title:"rem vs em - Everything you need to know",description:"We'll look at everything em and rem, their differences, when and how to use them, and practical examples of em and rem in action",permalink:"/blog/rem-vs-em",formattedDate:"December 21, 2022",authors:[{name:"Fimber Elemuwa",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"fimber_elemuwa"}],readingTime:7.195,date:"2022-12-21T00:00:00.000Z"},{title:"CSS Rounded Corners Examples",description:"We'll examine CSS rounded corners in this article.",permalink:"/blog/css-rounded-corners",formattedDate:"February 15, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:7.015,date:"2024-02-15T00:00:00.000Z"}],authorPosts:[{title:"Building a React Admin Dashboard with Refine",description:"We will be building a Complete React CRUD application using Refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/building-react-admin-dashboard",formattedDate:"April 6, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:37.59,date:"2023-04-06T00:00:00.000Z"},{title:"10 Methods for Vertical Alignment Using CSS",description:"We'll look at different techniques to vertically align HTML content using CSS.",permalink:"/blog/css-vertical-align",formattedDate:"February 13, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.41,date:"2024-02-13T00:00:00.000Z"},{title:"How to Hide Scrollbar Using CSS?",description:"We'll demonstrate how to hide scrollbars using CSS.",permalink:"/blog/css-hide-scrollbar",formattedDate:"February 20, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:4.805,date:"2024-02-20T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},w=[{value:"Introduction",id:"introduction",level:2},{value:"How does content wrapping work in browsers?",id:"how-does-content-wrapping-work-in-browsers",level:2},{value:"What&#39;s the distinction between a soft word wrap break and forceful line breaks?",id:"whats-the-distinction-between-a-soft-word-wrap-break-and-forceful-line-breaks",level:2},{value:"Explore the values of the overflow-wrap property",id:"explore-the-values-of-the-overflow-wrap-property",level:2},{value:"<code>normal</code>:",id:"normal",level:3},{value:"<code>break-word</code>:",id:"break-word",level:3},{value:"<code>anywhere</code>:",id:"anywhere",level:3},{value:"Explore the values of the word-break property",id:"explore-the-values-of-the-word-break-property",level:2},{value:"<code>normal</code>:",id:"normal-1",level:3},{value:"<code>keep-all</code>:",id:"keep-all",level:2},{value:"<code>break-all</code>:",id:"break-all",level:2},{value:"<code>break-word</code>:",id:"break-word-1",level:2},{value:"What makes a word-break different from an overflow-wrap?",id:"what-makes-a-word-break-different-from-an-overflow-wrap",level:2},{value:"Wrap text using word-break and overflow-wrap properties",id:"wrap-text-using-word-break-and-overflow-wrap-properties",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:w};function h(e){var{components:t}=e,r=l(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},c,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Text overflow happens when text does not fit completely within its container element. As a result, it goes outside of its boundaries, which might lead to broken layouts. However minor, this issue has been common among web developers. Fortunately, CSS has supplied certain CSS attributes that can control text-overflow. In this article, we'll look at the CSS features that allow us to wrap overflowing text in containers."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-does-content-wrapping-work-in-browsers"},"How does content wrapping work in browsers?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#whats-the-distinction-between-a-soft-word-wrap-break-and-forceful-line-breaks"},"What's the distinction between a soft word wrap break and forceful line breaks?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#explore-the-values-of-the-overflow-wrap-property"},"Explore the values of the overflow-wrap property")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#explore-the-values-of-the-word-break-property"},"Explore the values of the word-break property")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-makes-a-word-break-different-from-an-overflow-wrap"},"What makes a word-break different from an overflow-wrap?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#wrap-text-using-word-break-and-overflow-wrap-properties"},"Wrap text using word-break and overflow-wrap properties"))),(0,a.kt)("h2",{id:"how-does-content-wrapping-work-in-browsers"},"How does content wrapping work in browsers?"),(0,a.kt)("p",null,'Content (like words) are often wrapped at "',(0,a.kt)("strong",{parentName:"p"},"soft wrap opportunities"),"\", which are places in content where you'd expect it to break naturally, like after a hyphen or in between words like with spaces or punctuation. When browsers and ",(0,a.kt)("a",{parentName:"p",href:"https://www.link-assistant.com/seo-wiki/user-agent/"},"user-agents")," notice soft text wrap opportunities, they wrap text to minimize content overflow.\nSoft wrap opportunities vary between languages and it is determined by the language system that is being utilized in your HTML document (the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"lang")," attribute that you supply on the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTML")," element or the default language)."),(0,a.kt)("h2",{id:"whats-the-distinction-between-a-soft-word-wrap-break-and-forceful-line-breaks"},"What's the distinction between a soft word wrap break and forceful line breaks?"),(0,a.kt)("p",null,"A soft wrap break is any content wrap that takes place during a soft wrap opportunity. For this to happen, ensure that wrapping is enabled on the element (For example, setting the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"white-space")," ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"nowrap")," will disable wrapping therefore, ensure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"white-space")," ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS")," property is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"normal"),")."),(0,a.kt)("p",null,"On the other hand, Forced line breaks are created by explicit line-breaking controls (line or new line breaking intentionally done using ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS"),") or line breaks (line breaks done directly on the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTML")," element) and not a soft wrap opportunity."),(0,a.kt)("h2",{id:"explore-the-values-of-the-overflow-wrap-property"},"Explore the values of the overflow-wrap property"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap")," ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS")," property was previously known as ",(0,a.kt)("inlineCode",{parentName:"p"},"word-wrap"),". For legacy reasons, browsers see ",(0,a.kt)("inlineCode",{parentName:"p"},"word-wrap")," as a legacy name alias for the ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap")," property.\nThis property determines whether the browser may break at disallowed points within a line to prevent overflow when an ordinarily unbreakable ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," is too long to fit within the line box.\nIn order or an element to set an ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap")," value, it should have a ",(0,a.kt)("inlineCode",{parentName:"p"},"white-space")," property that is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"normal")," (which is the default for elements)."),(0,a.kt)("p",null,"The following are the values of the ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap")," property:"),(0,a.kt)("h3",{id:"normal"},(0,a.kt)("inlineCode",{parentName:"h3"},"normal"),":"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap: break-word")," value causes the browser to utilize the system's default line-breaking behavior."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".text {\n  overflow-wrap: normal;\n}\n")),(0,a.kt)("p",null,"We will illustrate the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap: normal")," value with a Codepen."),(0,a.kt)("p",null,"In the codepen example below, a word that is longer than its container appears in the text. The word overflows its container because there is no soft wrap opportunity(due to the presence of a very long word) and the ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap"),"property value is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"normal"),".This is the system's default line-breaking behavior."),(0,a.kt)("blockquote",null),(0,a.kt)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"overflow-wrap-normal example",src:"https://codepen.io/Necati-zmen/embed/ZEZGopL?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen/pen/ZEZGopL"},"overflow-wrap-normal example")," by Necati \xd6zmen (",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen"},"@Necati-zmen"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"break-word"},(0,a.kt)("inlineCode",{parentName:"h3"},"break-word"),":"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap: break-word")," value on text wraps an element allows text to only break words in mid-word if necessary. It will first try to maintain a word unbroken by moving it to the next line, but will subsequently break the word if there is still not enough space."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".text {\n  overflow-wrap: break-word;\n}\n")),(0,a.kt)("p",null,"We will illustrate the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap: break-word")," value with a Codepen. in the example, the long word is wrapped to the next line due to the ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap"),"property value set to ",(0,a.kt)("inlineCode",{parentName:"p"},"break-word"),"."),(0,a.kt)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"overflow-wrap-break-word-example",src:"https://codepen.io/Necati-zmen/embed/zYXGjKd?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen/pen/zYXGjKd"},"overflow-wrap-break-word-example")," by Necati \xd6zmen (",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen"},"@Necati-zmen"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,a.kt)("h3",{id:"anywhere"},(0,a.kt)("inlineCode",{parentName:"h3"},"anywhere"),":"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap: anywhere")," value which breaks words in the same way as the ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap: break-word")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".text {\n  overflow-wrap: anywhere;\n}\n")),(0,a.kt)("p",null,"An example is illustrated on the Codepen below"),(0,a.kt)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"overflow-wrap-anywhere-example",src:"https://codepen.io/Necati-zmen/embed/mdgJLrv?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen/pen/mdgJLrv"},"overflow-wrap-anywhere-example")," by Necati \xd6zmen (",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen"},"@Necati-zmen"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,a.kt)("br",null)," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"One thing to note is while the ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap: break-word")," value and the ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap: anywhere")," value breaks words in the same manner by default, The distinction lies in its impact on the elements ",(0,a.kt)("inlineCode",{parentName:"p"},"min-content")," width computation. When the width of the elements is both set to ",(0,a.kt)("inlineCode",{parentName:"p"},"min-content"),", it is rather obvious."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".text-anywhere {\n  width: min-content;\n  overflow-wrap: anywhere;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".text-break-word {\n  width: min-content;\n  overflow-wrap: anywhere;\n}\n")),(0,a.kt)("p",null,"An example of this is illustrated in the Codepen below."),(0,a.kt)("p",null,"The element(with class ",(0,a.kt)("inlineCode",{parentName:"p"},"text-break-word"),") with ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap:break-word"),", makes its ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," equal to the longest word by calculating ",(0,a.kt)("inlineCode",{parentName:"p"},"min-content")," as if no words were broken."),(0,a.kt)("p",null,"The other element(with class ",(0,a.kt)("inlineCode",{parentName:"p"},"text-anywhere"),") with ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap: anywhere")," uses all possible breaks to compute ",(0,a.kt)("inlineCode",{parentName:"p"},"min-content"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," of a single character is what happens to ",(0,a.kt)("inlineCode",{parentName:"p"},"min-content")," because a line break can occur anywhere."),(0,a.kt)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"difference-between-overflow-wrap-breakword-and-overflow-wrap-anywhere",src:"https://codepen.io/Necati-zmen/embed/WNWvJov?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen/pen/WNWvJov"},"difference-between-overflow-wrap-breakword-and-overflow-wrap-anywhere")," by Necati \xd6zmen (",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen"},"@Necati-zmen"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,a.kt)("h2",{id:"explore-the-values-of-the-word-break-property"},"Explore the values of the word-break property"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"word-break")," property is another ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS")," property that determines how long words should break at the end of a line."),(0,a.kt)("p",null,"The following are the values of the ",(0,a.kt)("inlineCode",{parentName:"p"},"word-break")," property:"),(0,a.kt)("h3",{id:"normal-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"normal"),":"),(0,a.kt)("p",null,"Setting the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"word-break")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"normal")," will apply the default word-break rules."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".text {\n  word-break: normal;\n}\n")),(0,a.kt)("p",null,"The following Codepen example shows what happens when you apply the styling ",(0,a.kt)("inlineCode",{parentName:"p"},"word-break: normal")," to a block of text that contains a word longer than its container."),(0,a.kt)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"word-break-normal-example",src:"https://codepen.io/Necati-zmen/embed/MWRwGbb?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen/pen/MWRwGbb"},"word-break-normal-example")," by Necati \xd6zmen (",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen"},"@Necati-zmen"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,a.kt)("h2",{id:"keep-all"},(0,a.kt)("inlineCode",{parentName:"h2"},"keep-all"),":"),(0,a.kt)("p",null,"Setting the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"word-break")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"keep-all")," will also apply the default word-break rules. Additionally, it should not be used in Chinese, Japanese, or Korean (CJK) texts as the browser will not apply word breaks to it even if there is an overflow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".text {\n  word-break: keep-all;\n}\n")),(0,a.kt)("p",null,"An example is illustrated on the Codepen below"),(0,a.kt)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"word-break-keep-all-example",src:"https://codepen.io/Necati-zmen/embed/abxOGBE?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen/pen/abxOGBE"},"word-break-keep-all-example")," by Necati \xd6zmen (",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen"},"@Necati-zmen"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,a.kt)("h2",{id:"break-all"},(0,a.kt)("inlineCode",{parentName:"h2"},"break-all"),":"),(0,a.kt)("p",null,"Setting the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"word-break")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"break-all")," will break a word at any character to prevent overflow of the word out of its container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".text {\n  word-break: break-all;\n}\n")),(0,a.kt)("p",null,"An example is illustrated on the Codepen below:"),(0,a.kt)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"word-break-break-all-example",src:"https://codepen.io/Necati-zmen/embed/LYvVmbr?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen/pen/LYvVmbr"},"word-break-break-all-example")," by Necati \xd6zmen (",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen"},"@Necati-zmen"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,a.kt)("h2",{id:"break-word-1"},(0,a.kt)("inlineCode",{parentName:"h2"},"break-word"),":"),(0,a.kt)("p",null,"Setting the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"word-break")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"break-word")," will break a word at soft wrap opportunities (like hyphens or in between words like with spaces or punctuation) to prevent overflow of the word out of its container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".text {\n  word-break: break-word;\n}\n")),(0,a.kt)("p",null,"An example is illustrated on the Codepen below:"),(0,a.kt)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"word-break-break-word-example",src:"https://codepen.io/Necati-zmen/embed/GRLJdNL?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen/pen/GRLJdNL"},"word-break-break-word-example")," by Necati \xd6zmen (",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen"},"@Necati-zmen"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,a.kt)("h2",{id:"what-makes-a-word-break-different-from-an-overflow-wrap"},"What makes a word-break different from an overflow-wrap?"),(0,a.kt)("p",null,"The differences between these properties are listed below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"overflow-wrap")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"word-break")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"overflow-wrap: break-word"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"overflow-wrap: anywhere")," properties will wrap the full overflowing word wrap break even at soft wrap opportunities if the content exceeds its container."),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"Word-break: break-all")," property will break word between two characters, even if placing it on its own line eliminates the need for word break. ",(0,a.kt)("br",null)," Also, the",(0,a.kt)("inlineCode",{parentName:"td"},"Word-break: break-word")," property is similar to the ",(0,a.kt)("inlineCode",{parentName:"td"},"overflow-wrap: break-word"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"overflow-wrap: anywhere")," properties as it wraps break words at soft wrap opportunities as well.")))),(0,a.kt)("h2",{id:"wrap-text-using-word-break-and-overflow-wrap-properties"},"Wrap text using word-break and overflow-wrap properties"),(0,a.kt)("p",null,"As previously stated, the ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap")," property (legacy called ",(0,a.kt)("inlineCode",{parentName:"p"},"word-wrap"),") is your best option for wrapping text or breaking a word that has overflowed its box or container. However, you can also consider using the ",(0,a.kt)("inlineCode",{parentName:"p"},"word-break")," property if the ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap")," property does not work for you.\nHowever, keep in mind the distinctions between ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"word-break"),", as discussed above."),(0,a.kt)("p",null,"Here's a Codepen example of the ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-wrap")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"word-wrap")," properties in use. You can experiment with it to understand its effects:"),(0,a.kt)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"text-wrap-with-css-example",src:"https://codepen.io/Necati-zmen/embed/NWmqMdq?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen/pen/NWmqMdq"},"text-wrap-with-css-example")," by Necati \xd6zmen (",(0,a.kt)("a",{href:"https://codepen.io/Necati-zmen"},"@Necati-zmen"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article, we looked at ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS"),"-based content wrapping. We also looked at the numerous ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS")," properties for efficiently wrapping content in any form. With this article, you should be able to effortlessly manage the presentation style of contents (words) on your webpages or web applications using ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS"),"."))}h.isMDXComponent=!0}}]);