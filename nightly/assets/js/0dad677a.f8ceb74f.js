"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[2573],{52218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(31085),s=n(71184);const i={},o="TypeScript Support",a={id:"docs/getting-started/typescript-support",title:"TypeScript Support",description:"TypeScript Support is enabled for both component development and component consumption.",source:"@site/docs/docs/1-getting-started/07-typescript-support.md",sourceDirName:"docs/1-getting-started",slug:"/docs/getting-started/typescript-support",permalink:"/ui5-webcomponents/nightly/docs/getting-started/typescript-support",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Using Additional Features",permalink:"/ui5-webcomponents/nightly/docs/getting-started/using-features"},next:{title:"Wrapping Up",permalink:"/ui5-webcomponents/nightly/docs/getting-started/wrapping-up"}},p={},c=[{value:"Component properties",id:"component-properties",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"typescript-support",children:"TypeScript Support"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"TypeScript Support is enabled for both component development and component consumption."})}),"\n",(0,r.jsxs)(t.p,{children:["Since version ",(0,r.jsx)(t.code,{children:"1.11.0"}),", we have been providing TypeScript definitions under an experimental flag, and starting from version ",(0,r.jsx)(t.code,{children:"1.19.0"}),", all TypeScript definitions are considered ",(0,r.jsx)(t.code,{children:"stable"}),".\nWith TypeScript definitions you will benefit from static code checks, autocompletion, and other expected features as expected in a TypeScript application."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," In exceptional cases, some of the available TypeScript types may change. In such instances, we will document all changes in a prominent manner within our release change log."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Example:"})," usage of ",(0,r.jsx)(t.code,{children:"setLanguage"})," from ",(0,r.jsx)(t.code,{children:"@ui5/webcomponents-base"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import  { setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";\n\nsetLanguage("de");\n\n'})}),"\n",(0,r.jsx)(t.p,{children:"You will get a proper documentation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"setLanguage(language: string): Promise<void>\n\nChanges the current language, re-fetches all message bundles, updates all language-aware components and returns a promise that resolves when all rendering is done.\n\n@public\n@returns\n"})}),"\n",(0,r.jsx)(t.p,{children:"When you pass a wrong argument:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"setLanguage(false)\n"})}),"\n",(0,r.jsx)(t.p,{children:"You will get a TypeScript error:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"Argument of type 'boolean' is not assignable to parameter of type 'string'.\n"})}),"\n",(0,r.jsx)(t.h3,{id:"component-properties",children:"Component properties"}),"\n",(0,r.jsx)(t.p,{children:"In TypeScript, when a property is declared optional using the ? syntax in an interface, it means that the property can either have a defined value of a certain type or be absent altogether. This doesn't imply that the property can be explicitly set to null or undefined unless explicitly stated."}),"\n",(0,r.jsxs)(t.p,{children:["For instance, if the ",(0,r.jsx)(t.code,{children:"value"})," property of the ",(0,r.jsx)(t.code,{children:"ui5-combobox"})," component is defined as optional with the type string (value?: string). This indicates that the property can be set with a string value or be absent/omitted."]}),"\n",(0,r.jsxs)(t.p,{children:["However, setting it explicitly to null might lead to runtime errors because the component might not handle null values correctly. To ensure proper handling of optional properties, ",(0,r.jsx)(t.strong,{children:'TypeScript offers a feature we suggest enabling called "Exact Optional Property Types"'}),". See ",(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/tsconfig#exactOptionalPropertyTypes",children:"https://www.typescriptlang.org/tsconfig#exactOptionalPropertyTypes"})," .\nWhen enabled, TypeScript enforces stricter rules regarding optional properties, ensuring that they can only be assigned values that are explicitly allowed by the type definition."]}),"\n",(0,r.jsx)(t.p,{children:"For instance, consider the following interface:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'interface UserDefaults { \n    colorThemeOverride?: "dark" | "light"; \n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:['Without "Exact Optional Property Types" enabled, TypeScript allows setting ',(0,r.jsx)(t.code,{children:"colorThemeOverride"})," to ",(0,r.jsx)(t.code,{children:"dark"}),", ",(0,r.jsx)(t.code,{children:"light"}),", or ",(0,r.jsx)(t.code,{children:"undefined"}),'. However, enabling "Exact Optional Property Types" ensures that only these values are permitted, disallowing null or other unexpected values.']}),"\n",(0,r.jsxs)(t.p,{children:["In summary, it's essential to ensure that the a property of type string is handled according to its type definition (for example, by setting empty string, instead of ",(0,r.jsx)(t.code,{children:"null"}),", where type is ",(0,r.jsx)(t.code,{children:"string"}),'), and if necessary, enable "Exact Optional Property Types" in TypeScript to enforce stricter rules regarding optional properties.']})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},71184:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(14041);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);