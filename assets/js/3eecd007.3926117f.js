"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18676],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},79905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});t(67294);var r=t(3905);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={id:"date",title:"Date",swizzle:!0},l=void 0,c={unversionedId:"api-reference/chakra-ui/components/fields/date",id:"version-3.xx.xx/api-reference/chakra-ui/components/fields/date",title:"Date",description:"This field is used to display dates. It uses Day.js to display date format.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/fields/date.md",sourceDirName:"api-reference/chakra-ui/components/fields",slug:"/api-reference/chakra-ui/components/fields/date",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/fields/date",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/fields/date.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Bozhen",lastUpdatedAt:1711348831,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{id:"date",title:"Date",swizzle:!0},sidebar:"someSidebar",previous:{title:"Boolean",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/fields/boolean"},next:{title:"Email",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/fields/email"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},f=u("DocThumbsUpDownFeedbackWidget"),m=u("PropsTable"),h={toc:d};function b(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},h,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = RefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n  routerProvider,\n  dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n  Layout: RefineChakra.Layout,\n  Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <RefineChakra.ChakraProvider theme={RefineChakra.refineTheme}>\n      {children}\n    </RefineChakra.ChakraProvider>\n  );\n};\n')),(0,r.kt)("p",null,"This field is used to display dates. It uses ",(0,r.kt)("a",{parentName:"p",href:"https://day.js.org/docs/en/display/format"},(0,r.kt)("inlineCode",{parentName:"a"},"Day.js"))," to display date format."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(f,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"Let's see how we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"<DateField>")," with the example in the post list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport {\n  List,\n  TableContainer,\n  Table,\n  Thead,\n  Tr,\n  Th,\n  Tbody,\n  Td,\n  // highlight-next-line\n  DateField,\n} from "@pankod/refine-chakra-ui";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\n\nconst PostList: React.FC = () => {\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n      },\n      {\n        id: "createdAt",\n        header: "Created At",\n        accessorKey: "createdAt",\n        cell: function render({ getValue }) {\n          return (\n            // highlight-next-line\n            <DateField format="LLL" value={getValue()} />\n          );\n        },\n      },\n    ],\n    [],\n  );\n\n  const { getHeaderGroups, getRowModel } = useTable({\n    columns,\n  });\n\n  return (\n    <List>\n      <TableContainer>\n        <Table variant="simple" whiteSpace="pre-line">\n          <Thead>\n            {getHeaderGroups().map((headerGroup) => (\n              <Tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => {\n                  return (\n                    <Th key={header.id}>\n                      {!header.isPlaceholder &&\n                        flexRender(\n                          header.column.columnDef.header,\n                          header.getContext(),\n                        )}\n                    </Th>\n                  );\n                })}\n              </Tr>\n            ))}\n          </Thead>\n          <Tbody>\n            {getRowModel().rows.map((row) => {\n              return (\n                <Tr key={row.id}>\n                  {row.getVisibleCells().map((cell) => {\n                    return (\n                      <Td key={cell.id}>\n                        {flexRender(\n                          cell.column.columnDef.cell,\n                          cell.getContext(),\n                        )}\n                      </Td>\n                    );\n                  })}\n                </Tr>\n              );\n            })}\n          </Tbody>\n        </Table>\n      </TableContainer>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      notificationProvider={RefineChakra.notificationProvider()}\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(f,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)(m,{module:"@pankod/refine-chakra-ui/DateField","format-default":"`L`",mdxType:"PropsTable"}),(0,r.kt)("admonition",{title:"External Props",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It also accepts all props of Chakra UI ",(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/text/usage"},"Text"),"."))))}b.isMDXComponent=!0}}]);