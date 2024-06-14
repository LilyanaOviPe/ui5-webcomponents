"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[3539],{66277:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=n(31085),o=n(71184);const r={},i="UI5 Web Components i18n for Apps",a={id:"docs/advanced/using-i18n-for-apps",title:"UI5 Web Components i18n for Apps",description:"*This section explains how to use the UI5 Web Components i18n functionality for the purpose of your app's translatable texts.",source:"@site/docs/docs/2-advanced/06-using-i18n-for-apps.md",sourceDirName:"docs/2-advanced",slug:"/docs/advanced/using-i18n-for-apps",permalink:"/ui5-webcomponents/nightly/docs/advanced/using-i18n-for-apps",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Using the Framework",permalink:"/ui5-webcomponents/nightly/docs/advanced/other-framework-level-APIs"},next:{title:"Accessibility in UI5 Web Components",permalink:"/ui5-webcomponents/nightly/docs/advanced/accessibility"}},d={},l=[{value:"Step-by-Step Tutorial",id:"step-by-step-tutorial",level:2},{value:"1. Start by creating some <code>i18n</code> resources in <code>.properties</code> format in a directory that can be served, for example:",id:"1-start-by-creating-some-i18n-resources-in-properties-format-in-a-directory-that-can-be-served-for-example",level:3},{value:"2. Import the following <code>i18n</code>-related modules to your app:",id:"2-import-the-following-i18n-related-modules-to-your-app",level:3},{value:"3. Register a loader function that can retrieve and process the actual content of your message bundles:",id:"3-register-a-loader-function-that-can-retrieve-and-process-the-actual-content-of-your-message-bundles",level:3},{value:"4. Get and use the bundle:",id:"4-get-and-use-the-bundle",level:3},{value:"5. Test your page using different languages, e.g. set <code>?sap-ui-language=de</code> in the URL or change the configuration.",id:"5-test-your-page-using-different-languages-eg-set-sap-ui-languagede-in-the-url-or-change-the-configuration",level:3},{value:"Summary",id:"summary",level:2},{value:"Tips and Tricks",id:"tips-and-tricks",level:2}];function c(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"ui5-web-components-i18n-for-apps",children:"UI5 Web Components i18n for Apps"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:["This section explains how to use the UI5 Web Components ",(0,t.jsx)(s.code,{children:"i18n"})," functionality for the purpose of your app's translatable texts.\nNone of the code below implies or requires the usage of UI5 Web Components, and can be used completely stand-alone."]})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"@ui5/webcomponents-base"})," package allows the usage of ",(0,t.jsx)(s.code,{children:"i18n"})," functionality not just for UI5 Web Components,\nbut for apps as well."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Note:"})," This section is dedicated to apps. For information on how to set up ",(0,t.jsx)(s.code,{children:"i18n"})," for your custom components, please see ",(0,t.jsx)(s.a,{href:"/ui5-webcomponents/nightly/docs/development/custom-UI5-Web-Components",children:"Developing Web Components"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"step-by-step-tutorial",children:"Step-by-Step Tutorial"}),"\n",(0,t.jsxs)(s.p,{children:["This tutorial will show you how to use the UI5 Web Components ",(0,t.jsx)(s.code,{children:"i18n"})," functionality for the purpose of your apps."]}),"\n",(0,t.jsxs)(s.h3,{id:"1-start-by-creating-some-i18n-resources-in-properties-format-in-a-directory-that-can-be-served-for-example",children:["1. Start by creating some ",(0,t.jsx)(s.code,{children:"i18n"})," resources in ",(0,t.jsx)(s.code,{children:".properties"})," format in a directory that can be served, for example:"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"File"}),(0,t.jsx)(s.th,{children:"Content"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"assets/messagebundle_de.properties"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"PLEASE_WAIT=Bitte warten"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"assets/messagebundle_fr.properties"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"PLEASE_WAIT=Patientez."})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"assets/messagebundle_es.properties"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"PLEASE_WAIT=Espere"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"assets/messagebundle_en.properties"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"PLEASE_WAIT=Please wait"})})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"(This example demonstrates just one translatable text per file for simplicity. You can have any number of texts per file, each on a new line.)"}),"\n",(0,t.jsxs)(s.h3,{id:"2-import-the-following-i18n-related-modules-to-your-app",children:["2. Import the following ",(0,t.jsx)(s.code,{children:"i18n"}),"-related modules to your app:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'import parseProperties from "@ui5/webcomponents-base/dist/PropertiesFileFormat.js";\nimport { registerI18nLoader, getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The first one provides support for ",(0,t.jsx)(s.code,{children:".properties"})," files, as used in the example, and the second one - the functions\nthat will allow you to take advantage of the ",(0,t.jsx)(s.code,{children:"i18n"})," functionality."]}),"\n",(0,t.jsx)(s.h3,{id:"3-register-a-loader-function-that-can-retrieve-and-process-the-actual-content-of-your-message-bundles",children:"3. Register a loader function that can retrieve and process the actual content of your message bundles:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'const supportedLocales = ["en", "fr", "de", "es"];\nsupportedLocales.forEach(localeToRegister => {\n\tregisterI18nLoader("myApp", localeToRegister, async (localeId) => {\n\t\tconst props = await (await fetch(`./assets/messagebundle_${localeId}.properties`)).text();\n\t\treturn parseProperties(props);\n\t});\n});\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The first argument to ",(0,t.jsx)(s.code,{children:"registerI18nLoader"})," is an ID that will be used to reference this message bundle, the second is the locale this loader can load, and the third is a function that can load and process the content for the specified package/locale combination."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Note:"})," For more assets, a loop is used to register a loader for each package/locale combination. The same loader function can be registered and its parameter can be used to distinguish which locale resource is requested."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Note:"})," This step takes care of registering assets only, no data will be fetched at this point."]}),"\n",(0,t.jsx)(s.h3,{id:"4-get-and-use-the-bundle",children:"4. Get and use the bundle:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'const bundle = await getI18nBundle("myApp");\nconst pleaseWait = bundle.getText("PLEASE_WAIT");\nconsole.log("Please wait in the current language is: ", pleaseWait);\n'})}),"\n",(0,t.jsxs)(s.p,{children:["You can pass multiple additional values to ",(0,t.jsx)(s.code,{children:"getText"})," for texts with placeholders."]}),"\n",(0,t.jsx)(s.p,{children:"If your text looks like this"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"CAROUSEL_DOT_TEXT=Item {0} of {1} displayed"})}),"\n",(0,t.jsxs)(s.p,{children:["you can call ",(0,t.jsx)(s.code,{children:"getText"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:'bundle.getText("CAROUSEL_DOT_TEXT", 5, 20);'})}),"\n",(0,t.jsx)(s.p,{children:"which will finally result in"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Item 5 of 20 displayed"}),"."]}),"\n",(0,t.jsxs)(s.h3,{id:"5-test-your-page-using-different-languages-eg-set-sap-ui-languagede-in-the-url-or-change-the-configuration",children:["5. Test your page using different languages, e.g. set ",(0,t.jsx)(s.code,{children:"?sap-ui-language=de"})," in the URL or change the configuration."]}),"\n",(0,t.jsx)(s.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(s.p,{children:"The whole code would look like this:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'import parseProperties from "@ui5/webcomponents-base/dist/PropertiesFileFormat.js";\nimport { registerI18nLoader, getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";\n\nconst supportedLocales = ["en", "fr", "de", "es"];\nsupportedLocales.forEach(localeToRegister => {\n\tregisterI18nLoader("myApp", localeToRegister, async (localeId) => {\n\t\tconst props = await (await fetch(`./assets/messagebundle_${localeId}.properties`)).text();\n\t\treturn parseProperties(props);\n\t});\n});\n\nconst bundle = await getI18nBundle("myApp");\n\nconst pleaseWait = bundle.getText("PLEASE_WAIT");\nconsole.log("Please wait in the current language is: ", pleaseWait);\n'})}),"\n",(0,t.jsxs)(s.p,{children:["You register your assets for all supported languages, then you fetch the data for the currently active language,\nget a reference to the bundle and call the ",(0,t.jsx)(s.code,{children:"getText"})," method to get texts for your app."]}),"\n",(0,t.jsx)(s.h2,{id:"tips-and-tricks",children:"Tips and Tricks"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["You can skip the ",(0,t.jsx)(s.code,{children:".properties"})," format support import"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"return await (await fetch(`./assets/messagebundle_${localeId}.json`)).json();\n"})}),"\n",(0,t.jsxs)(s.p,{children:["and return the data directly in ",(0,t.jsx)(s.code,{children:".json"})," format if you want to load a little bit less code in the runtime."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"File"}),(0,t.jsx)(s.th,{children:"Content"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"assets/messagebundle_de.json"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'{"PLEASE_WAIT": "Bitte warten"}'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"assets/messagebundle_fr.json"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'{"PLEASE_WAIT": "Patientez."}'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"assets/messagebundle_es.json"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'{"PLEASE_WAIT": "Espere"}'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"assets/messagebundle_en.json"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'{"PLEASE_WAIT": "Please wait"}'})})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},71184:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var t=n(14041);const o={},r=t.createContext(o);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);