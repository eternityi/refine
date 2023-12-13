"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65849],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72220:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={id:"table-search",title:"Table Search"},l=void 0,s={unversionedId:"advanced-tutorials/search/table-search",id:"version-3.xx.xx/advanced-tutorials/search/table-search",title:"Table Search",description:"We can make extensive search / filter operations using the useTable hook on the listing pages.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/search/table-search.md",sourceDirName:"advanced-tutorials/search",slug:"/advanced-tutorials/search/table-search",permalink:"/docs/3.xx.xx/advanced-tutorials/search/table-search",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/search/table-search.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1702485081,formattedLastUpdatedAt:"Dec 13, 2023",frontMatter:{id:"table-search",title:"Table Search"},sidebar:"someSidebar",previous:{title:"Search",permalink:"/docs/3.xx.xx/advanced-tutorials/search/"},next:{title:"Remix",permalink:"/docs/3.xx.xx/advanced-tutorials/ssr/remix"}},p={},u=[{value:"Example",id:"example",level:2}],d=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const f={toc:u};function h(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We can make extensive search / filter operations using the ",(0,n.kt)("inlineCode",{parentName:"p"},"useTable")," hook on the listing pages."),(0,n.kt)("p",null,"First, we create a form by extracting ",(0,n.kt)("inlineCode",{parentName:"p"},"searchFormProps")," from ",(0,n.kt)("inlineCode",{parentName:"p"},"useTable"),". We will use this form for search / filtering."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/list.tsx"',title:'"pages/list.tsx"'},'import {\n    // highlight-start\n    Form,\n    Table,\n    useTable,\n    // highlight-end\n    Row,\n    Col,\n    Icons,\n    List,\n    Button,\n    DatePicker,\n    Space,\n    Input,\n} from "@pankod/refine-antd";\n\nconst { RangePicker } = DatePicker;\n\nexport const ListPage: React.FC = () => {\n    // highlight-next-line\n    const { searchFormProps } = useTable<IPost>();\n\n    return (\n        // highlight-start\n        <Row gutter={[16, 16]}>\n            <Col lg={6} xs={24}>\n                <Form layout="vertical" {...searchFormProps}>\n                    <Form.Item label="Search" name="q">\n                        <Input\n                            placeholder="ID, Title, Content, etc."\n                            prefix={<Icons.SearchOutlined />}\n                        />\n                    </Form.Item>\n                    <Form.Item label="Created At" name="createdAt">\n                        <RangePicker />\n                    </Form.Item>\n                    <Form.Item>\n                        <Button htmlType="submit" type="primary">\n                            Filter\n                        </Button>\n                    </Form.Item>\n                </Form>\n            </Col>\n            <Col lg={18} xs={24}>\n                <List>\n                    <Table>...</Table>\n                </List>\n            </Col>\n        </Row>\n        // highlight-end\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    createdAt: string;\n}\n')),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/table-search/form.png"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"When the form is submitted, the ",(0,n.kt)("inlineCode",{parentName:"p"},"onSearch")," method runs and we get the search form values. We have to return an object of type ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#crudfilters"},(0,n.kt)("inlineCode",{parentName:"a"},"CrudFilters"))," for this method."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/list.tsx"',title:'"pages/list.tsx"'},'...\nimport { HttpError } from "@pankod/refine-core";\nimport { Dayjs } from "dayjs";\n\nconst { searchFormProps } = useTable<IPost, HttpError, { title: string; createdAt: [Dayjs, Dayjs] }>({\n    onSearch: (params) => {\n        const filters: CrudFilters = [];\n        const { q, createdAt } = params;\n\n            filters.push(\n                {\n                    field: "q",\n                    operator: "eq",\n                    value: q,\n                },\n                {\n                    field: "createdAt",\n                    operator: "gte",\n                    value: createdAt ? createdAt[0].toISOString() : undefined,\n                },\n                {\n                    field: "createdAt",\n                    operator: "lte",\n                    value: createdAt ? createdAt[1].toISOString() : undefined,\n                },\n            );\n\n        return filters;\n    },\n});\n...\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"CrudFilters")," types object has ",(0,n.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"operator"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," properties. These properties help us to filter in which field, with which operator, and with which data.")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)(d,{path:"table-antd-table-filter",mdxType:"CodeSandboxExample"}))}h.isMDXComponent=!0}}]);