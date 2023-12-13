"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16810],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=o.createContext({}),u=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},c=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},y=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),y=u(r),d=n,m=y["".concat(l,".").concat(d)]||y[d]||s[d]||i;return r?o.createElement(m,a(a({ref:e},c),{},{components:r})):o.createElement(m,a({ref:e},c))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,a=new Array(i);a[0]=y;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:n,a[1]=p;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},54102:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>s});r(67294);var o=r(3905);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function a(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const p={id:"store-your-repository",title:"5. Storing your repository online",tutorial:{prev:"tutorial/getting-started/{preferredUI}/generate-crud-pages",next:"tutorial/getting-started/deploy-project"}},l=void 0,u={unversionedId:"tutorial/getting-started/store-your-repository",id:"tutorial/getting-started/store-your-repository",title:"5. Storing your repository online",description:"In this tutorial, we will use GitHub to store and manage our repository, and to connect to a web host. If you prefer to use a different online git provider, feel free to do so.",source:"@site/docs/tutorial/1-getting-started/4-store-your-repository.md",sourceDirName:"tutorial/1-getting-started",slug:"/tutorial/getting-started/store-your-repository",permalink:"/docs/tutorial/getting-started/store-your-repository",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/1-getting-started/4-store-your-repository.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1702485081,formattedLastUpdatedAt:"Dec 13, 2023",sidebarPosition:4,frontMatter:{id:"store-your-repository",title:"5. Storing your repository online",tutorial:{prev:"tutorial/getting-started/{preferredUI}/generate-crud-pages",next:"tutorial/getting-started/deploy-project"}}},c={},s=[{value:"Create a repository on GitHub",id:"create-a-repository-on-github",level:2},{value:"Commit your local code to GitHub",id:"commit-your-local-code-to-github",level:2},{value:"See your project on GitHub",id:"see-your-project-on-github",level:2}],y=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)},d=y("Checklist"),m=y("ChecklistItem"),g={toc:s};function f(t){var{components:e}=t,r=a(t,["components"]);return(0,o.kt)("wrapper",i(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(e){n(t,e,r[e])}))}return t}({},g,r),{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we will use GitHub to store and manage our repository, and to connect to a web host. If you prefer to use a different online git provider, feel free to do so."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you are already proficient in git, and have your own preferred workflow, you can create a new GitHub repository for your project using your method of choice. Once you have done so, you can move on to the next page: ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/deploy-project"},'"Deploy your app to the Web"'),".")),(0,o.kt)("h2",{id:"create-a-repository-on-github"},"Create a repository on GitHub"),(0,o.kt)("p",null,"To create a repository on GitHub, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub.com")," and log in with your account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click the plus icon in the top right corner of the page and select "New repository".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a name for your repository and a brief description (optional).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose whether you want your repository to be public or private.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click "Create repository".'))),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/create-a-repo"},"GitHub documentation")," if you want to learn more and see more detailed instructions and options."),(0,o.kt)("h2",{id:"commit-your-local-code-to-github"},"Commit your local code to GitHub"),(0,o.kt)("p",null,"After you have created a repository on GitHub, you will need to commit your local code to the repository. This will allow you to store and manage your project's code on GitHub."),(0,o.kt)("p",null,"To commit your code to GitHub, you will need to use git commands in the terminal. If you are not familiar with git, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs"},"git documentation")," or follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to your project directory in the terminal.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Initialize git by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"git init -b main"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect your local repository to the remote repository on GitHub by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"git remote add origin <url>"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"<url>")," is the URL of your GitHub repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add your changes to the staging area by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"git add ."),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Commit your changes by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},'git commit -m "Initial commit"'),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Push your changes to GitHub by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"git push -u origin master"),"."))),(0,o.kt)("p",null,"For more detailed instructions and options, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git"},"GitHub documentation"),"."),(0,o.kt)("h2",{id:"see-your-project-on-github"},"See your project on GitHub"),(0,o.kt)("p",null,"To confirm that your project has been successfully stored on GitHub, go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub.com")," and navigate to your list of repositories. Select the new repository you created, and verify that it contains your project files."),(0,o.kt)(d,{mdxType:"Checklist"},(0,o.kt)(m,{id:"store-your-repo",mdxType:"ChecklistItem"},"I have created a repository on GitHub."),(0,o.kt)(m,{id:"store-your-repo-2",mdxType:"ChecklistItem"},"I have uploaded my project to GitHub.")))}f.isMDXComponent=!0}}]);