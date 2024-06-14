"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[182],{29581:(e,t,l)=>{l.d(t,{Ay:()=>r});var n=l(31085),i=l(71184);const o='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n\x3c!-- playground-fold-end --\x3e\n\t<ui5-toast id="message"></ui5-toast>\n\t<ui5-table id="table">\n\x3c!-- playground-fold --\x3e\n\t\t<ui5-table-header-row slot="headerRow">\n\t\t\t<ui5-table-header-cell id="produtCol" width="300px"><span>Product</span></ui5-table-header-cell>\n\t\t\t<ui5-table-header-cell id="supplierCol" width="200px">Supplier</ui5-table-header-cell>\n\t\t\t<ui5-table-header-cell id="dimensionsCol" width="300px">Dimensions</ui5-table-header-cell>\n\t\t\t<ui5-table-header-cell id="weightCol" width="100px">Weight</ui5-table-header-cell>\n\t\t\t<ui5-table-header-cell id="priceCol" width="220px">Price</ui5-table-header-cell>\n\t\t</ui5-table-header-row>\n\x3c!-- playground-fold-end --\x3e\n\t\t<ui5-table-row key="a" interactive>\n\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 15</b><br>HT-1000</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.2</b> KG</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label><b>956</b> EUR</ui5-label></ui5-table-cell>\n\t\t</ui5-table-row>\n\t\t<ui5-table-row key="b">\n\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 17</b><br>HT-1001</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label>29 x 17 x 3.1 cm</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.5</b> KG</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label><b>1249</b> EUR</ui5-label></ui5-table-cell>\n\t\t</ui5-table-row>\n\t\t<ui5-table-row key="c" interactive>\n\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 18</b><br>HT-1002</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label><b>29</b> EUR</ui5-label></ui5-table-cell>\n\t\t</ui5-table-row>\n\t</ui5-table>\n\x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',a='import "@ui5/webcomponents/dist/Table.js";\nimport "@ui5/webcomponents/dist/TableHeaderRow.js";\nimport "@ui5/webcomponents/dist/TableHeaderCell.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Toast.js";\n\nconst table = document.getElementById("table");\nconst toast = document.getElementById("message");\n\ntable.addEventListener("row-click", (e) => {\n\ttoast.textContent = `Row with key "${e.detail.row.key}" was pressed!`;\n\ttoast.open = true;\n});';function s(e){const{Editor:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsx)(t,{html:o,js:a})}function r(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},77778:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=l(31085),i=l(71184),o=l(29581);const a={slug:"../../TableRow",sidebar_class_name:"newComponentBadge"},s=void 0,r={id:"components/main/Table/TableRow",title:"TableRow",description:"This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change.",source:"@site/docs/components/main/Table/TableRow.mdx",sourceDirName:"components/main/Table",slug:"/components/TableRow",permalink:"/ui5-webcomponents/nightly/components/TableRow",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../TableRow",sidebar_class_name:"newComponentBadge"},sidebar:"componentsSidebar",previous:{title:"TableHeaderRow",permalink:"/ui5-webcomponents/nightly/components/TableHeaderRow"},next:{title:"TableSelection",permalink:"/ui5-webcomponents/nightly/components/TableSelection"}},c={},d=[{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Properties",id:"properties",level:2},{value:"key",id:"key",level:3},{value:"interactive",id:"interactive",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"Interactive Rows",id:"interactive-rows",level:2}];function b(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change."})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ui5-table-row"})," component represents a row in the ",(0,n.jsx)(t.code,{children:"ui5-table"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/TableRow.js";'})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.h3,{id:"key",children:"key"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Unique identifier of the component."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"interactive",children:"interactive"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Defines the interactive state of the row."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the cells of the component.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," Use ",(0,n.jsx)(t.code,{children:"ui5-table-cell"})," for the intended design."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Array<TableCell>"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(t.p,{children:"No events available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsx)(t.p,{children:"No CSS parts available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"interactive-rows",children:"Interactive Rows"}),"\n",(0,n.jsxs)(t.p,{children:["Create an interactive table by marking ",(0,n.jsx)(t.code,{children:"ui5-table-row"})," components as ",(0,n.jsx)(t.code,{children:"interactive"}),". Pressing on an interactive row\nwill fire the ",(0,n.jsx)(t.code,{children:"row-click"})," event."]}),"\n",(0,n.jsx)(o.Ay,{})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},71184:(e,t,l)=>{l.d(t,{R:()=>a,x:()=>s});var n=l(14041);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);