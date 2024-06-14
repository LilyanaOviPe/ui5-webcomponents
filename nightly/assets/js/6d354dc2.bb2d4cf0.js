"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[7082],{88441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=t(31085),l=t(71184);const i={},r="Understanding UI5 Web Components Metadata",d={id:"docs/development/understanding-components-metadata",title:"Understanding UI5 Web Components Metadata",description:"Metadata describes the public interface of a UI5 Web Component (tag name, properties, etc.).",source:"@site/docs/docs/5-development/03-understanding-components-metadata.md",sourceDirName:"docs/5-development",slug:"/docs/development/understanding-components-metadata",permalink:"/ui5-webcomponents/nightly/docs/development/understanding-components-metadata",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Developing Custom UI5 Web Components",permalink:"/ui5-webcomponents/nightly/docs/development/custom-UI5-Web-Components"},next:{title:"Understanding the Handlebars (.hbs) Templates",permalink:"/ui5-webcomponents/nightly/docs/development/understanding-hbs-templates"}},o={},a=[{value:"Tag",id:"tag",level:2},{value:"Example:",id:"example",level:4},{value:"Language-aware components",id:"language-aware-components",level:2},{value:"Theme-aware components",id:"theme-aware-components",level:2},{value:"Form-associated components",id:"form-associated-components",level:2},{value:"Components in fast navigation groups",id:"components-in-fast-navigation-groups",level:2},{value:"Properties / Attributes",id:"properties--attributes",level:2},{value:"Example",id:"example-1",level:4},{value:"@property configuration settings",id:"property-configuration-settings",level:4},{value:"Types",id:"types",level:4},{value:"Examples of prebuilt custom types",id:"examples-of-prebuilt-custom-types",level:4},{value:"Validators",id:"validators",level:4},{value:"Slots",id:"slots",level:2},{value:"Example",id:"example-2",level:4},{value:"Slot configuration settings",id:"slot-configuration-settings",level:4},{value:"Slot types",id:"slot-types",level:4},{value:"Slots and Component Invalidation",id:"slots-and-component-invalidation",level:2}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"understanding-ui5-web-components-metadata",children:"Understanding UI5 Web Components Metadata"}),"\n",(0,s.jsx)(n.p,{children:"Metadata describes the public interface of a UI5 Web Component (tag name, properties, etc.)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Disclaimer: The information below is for UI5 Web Components development only. It is experimental and may change."})}),"\n",(0,s.jsx)(n.h2,{id:"tag",children:"Tag"}),"\n",(0,s.jsx)(n.p,{children:"Defines the HTML tag for the Web Component."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'@customElements({\n\ttag: "my-component",\n})\nclass MyComponent extends UI5Element {};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"language-aware-components",children:"Language-aware components"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"languageAware"})," metadata setting determines if the component should be re-rendered whenever the language changes."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'@customElement({\n\ttag: "my-component",\n\tlanguageAware: true,\n})\nclass MyComponent extends UI5Element {\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"You should use this setting if your component has translatable texts, therefore needs to be re-rendered when the app\nchanges the language."}),"\n",(0,s.jsx)(n.h2,{id:"theme-aware-components",children:"Theme-aware components"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"themeAware"}),"  setting determines if the component should re-render whenever the theme changes."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'@customElement({\n\ttag: "my-component",\n\tthemeAware: true,\n})\nclass MyComponent extends UI5Element {\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Important: You should almost never use this setting."})}),"\n",(0,s.jsxs)(n.p,{children:["Normally components are built in such a way that their structure\nis exactly the same for all themes and whenever the theme changes ",(0,s.jsx)(n.em,{children:"only CSS Variables are changed"})," and the component itself\ndoes not need to be re-rendered - the browser automatically updates the styles when CSS Variables get new values."]}),"\n",(0,s.jsxs)(n.p,{children:["However, there are some very rare cases where a component must behave differently (opposed to just look differently) based on the theme.\nFor example, the ",(0,s.jsx)(n.code,{children:"ui5-icon"})," component must show different versions of the icons based on the theme. Use the ",(0,s.jsx)(n.code,{children:"themeAware"})," setting\nin these exceptional cases to guarantee that your component will be re-rendered on theme change."]}),"\n",(0,s.jsx)(n.h2,{id:"form-associated-components",children:"Form-associated components"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"formAssociated"})," setting defines if the component should support native Form support.\nWhen set, the framework makese use of the ",(0,s.jsx)(n.code,{children:"ElementInternals"})," API to implements the required interfaces to make component working in a native HTML Form\nas standard HTML input element do.\nIt's commonly used in input-type components, such as: Input, ComboBox, MultiComboBox, Select and more."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'@customElement({\n\ttag: "my-component",\n\tformAssociated: true,\n})\nclass MyComponent extends UI5Element {\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"components-in-fast-navigation-groups",children:"Components in fast navigation groups"}),"\n",(0,s.jsxs)(n.p,{children:["The F6 Navigation feature allows users to navigate quickly between groups of DOM elements using keyboard shortcuts.\nThe ",(0,s.jsx)(n.code,{children:"fastNavigation"})," setting defines whether this control supports F6 fast navigation.\nWhen the setting is enabled, the framework will set the ",(0,s.jsx)(n.code,{children:"data-sap-ui-fastnavgroup"})," attribute on the component root element to construct fast navigation group.\nWhen the focus is on the component and the ",(0,s.jsx)(n.code,{children:"F6"})," key is pressed, the focus goes to the first focusable element of the next group, skipping other focusable elements inside the current component. Commonly used by container-type of compoennts like: Tabale, List, Wizard, ShellBar, Panel and more."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'@customElement({\n\ttag: "my-component",\n\tfastNavigation: true,\n})\nclass MyComponent extends UI5Element {\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"properties--attributes",children:"Properties / Attributes"}),"\n",(0,s.jsx)(n.p,{children:"Defines the HTML properties for the Web Component."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note about attributes:"})," By default, for each property an equivalent attribute is supported. Attributes have the same names as properties, but in ",(0,s.jsx)(n.code,{children:"kebab-case"})," rather than ",(0,s.jsx)(n.code,{children:"camelCase"}),".\nProperties of type ",(0,s.jsx)(n.code,{children:"Object"}),", properties with ",(0,s.jsx)(n.code,{children:"multiple"})," set to",(0,s.jsx)(n.code,{children:"true"})," and properties with ",(0,s.jsx)(n.code,{children:"noAttribute"})," set to ",(0,s.jsx)(n.code,{children:"true"})," do not have an attribute equivalent."]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'@customElements({\n\ttag: "my-component",\n})\nclass DemoComponent extends UI5Element {\n\n\t@property({ type: String, defaultValue: "Hello" })\n\tmessage!: string;\n\n\t@property({ type: Boolean, "noAttribute": true })\n\tshown!: boolean;\n\n\t@property({ type: Object })\n\tsettings!: object;\n\n\t@property({ validator: Integer })\n\tanimationDuration!: number;\n\n\t@property({ validator: Integer,  "multiple": true })\n\tnums!: Array<number>;\n};\n'})}),"\n",(0,s.jsx)(n.h4,{id:"property-configuration-settings",children:"@property configuration settings"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Setting"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"type"})}),(0,s.jsx)(n.td,{children:"Property type"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"The type of the property. For more information on types see the table below."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"defaultValue"})}),(0,s.jsx)(n.td,{children:"Any valid value for the type"}),(0,s.jsx)(n.td,{children:"undefined"}),(0,s.jsx)(n.td,{children:'Default value of the property. Cannot be set for type "Boolean". Booleans are always false by default in HTML.'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"multiple"})}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"Indicates whether the property represents a single value or is an array of values of the given type."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"noAttribute"})}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"No attribute equivalent will be created for that property. Always true for properties of type Object."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"validator"})}),(0,s.jsx)(n.td,{children:"Validator type"}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsx)(n.td,{children:"The validator of the property. For more information on validators see the table below"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The ",(0,s.jsx)(n.code,{children:"type"})," setting is required, except these two cases:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"string"})," properties (type: String is considered default)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"@property()\nname!: string;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"validator"})," is provided:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"@property({ validator: Integer })\nanimationDuration!: number;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"types",children:"Types"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Class to Use"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"String value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Boolean"})}),(0,s.jsx)(n.td,{children:"Boolean value - always false by default"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Object"})}),(0,s.jsx)(n.td,{children:"JS Object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"custom type"}),(0,s.jsxs)(n.td,{children:["Extend ",(0,s.jsx)(n.code,{children:"@ui5/webcomponents-base/dist/types/DataType.js"})]}),(0,s.jsx)(n.td,{children:"Used mainly for enumerations"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"examples-of-prebuilt-custom-types",children:"Examples of prebuilt custom types"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Class to Use"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"@ui5/webcomponents-base/dist/types/Integer.js"})}),(0,s.jsx)(n.td,{children:"Integer value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ValueState"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"@ui5/webcomponents-base/dist/types/ValueState.js"})}),(0,s.jsxs)(n.td,{children:["Enumeration with: ",(0,s.jsx)(n.code,{children:"None"}),", ",(0,s.jsx)(n.code,{children:"Error"}),", ",(0,s.jsx)(n.code,{children:"Warning"}),", ",(0,s.jsx)(n.code,{children:"Success"})," values"]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"validators",children:"Validators"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"validator"})," is a custom class that implements ",(0,s.jsx)(n.code,{children:"isValid"})," function that validates the property's value whenever it changes. If value is not valid, the framework will set the proeprty ",(0,s.jsx)(n.code,{children:"defaultValue"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Class to Use"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Integer"})}),(0,s.jsx)(n.td,{children:"Validates the prop value to integer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Float"})}),(0,s.jsx)(n.td,{children:"Validates the prop value to float"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CSSColor"})}),(0,s.jsx)(n.td,{children:"Validates the prop value to valid CSS color"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CSSSize"})}),(0,s.jsx)(n.td,{children:"Validates the prop value to valid CSS size"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"string or HTMLElement"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"DomReference"})}),(0,s.jsx)(n.td,{children:"Validates the prop value is it's a string or HTMLElement"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,s.jsxs)(n.p,{children:["Defines the ",(0,s.jsx)(n.code,{children:"slots"})," that will be provided by this UI5 Web Component."]}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'class MyComponent extends UI5Element {\n   @slot({ type: Node, "default": true })\n   content!: Array<Node>;\n\n   @slot()\n   rows!: Array<HTMLElement>;\n\n   @slot()\n   footer!: Array<HTMLElement>;\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"slot-configuration-settings",children:"Slot configuration settings"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Setting"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"type"})," *"]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"HTMLElement"})," or ",(0,s.jsx)(n.code,{children:"Node"})]}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsx)(n.td,{children:"The type of the children that can go into that slot."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"individualSlots"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Boolean"})}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsxs)(n.td,{children:["If set to ",(0,s.jsx)(n.code,{children:"true"}),", each child will have its own slot, allowing you to arrange/wrap the children arbitrarily."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"propertyName"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsx)(n.td,{children:"Allows to set the name of the property on the Web Component, where the children belonging to this slot will be stored."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"invalidateOnChildChange"})," **"]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"Boolean"})," or ",(0,s.jsx)(n.code,{children:"Object"})]}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Experimental, do not use."})," Defines whether every invalidation of a UI5 Web Component in this slot should trigger an invalidation of the parent UI5 Web Component."]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"*"})," The ",(0,s.jsx)(n.code,{children:"type"})," setting is required."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"**"}),"\n",(0,s.jsx)(n.strong,{children:"Note:"})," ",(0,s.jsx)(n.code,{children:"invalidateOnChildChange"})," is not meant to be used with standard DOM Elements and is not to be confused with ",(0,s.jsx)(n.code,{children:"MutationObserver"}),"-like functionality.\nIt rather targets the use case of components that slot abstract items (",(0,s.jsx)(n.code,{children:"UI5Element"})," instances without a template) and require to be invalidated in turn whenever these items are invalidated."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"invalidateOnChildChange"})," setting can be either a ",(0,s.jsx)(n.code,{children:"Boolean"})," (",(0,s.jsx)(n.code,{children:"true"})," meaning invalidate the component on any change of a child in this slot) or an ",(0,s.jsx)(n.code,{children:"Object"})," with ",(0,s.jsx)(n.code,{children:"properties"})," and ",(0,s.jsx)(n.code,{children:"slots"})," fields. They in turn can be either of\ntype ",(0,s.jsx)(n.code,{children:"Boolean"})," (",(0,s.jsx)(n.code,{children:"true"})," meaning invalidate on any property change or any slot change) or ",(0,s.jsx)(n.code,{children:"Array"})," of strings indicating exactly which properties or slots lead to invalidation."]}),"\n",(0,s.jsx)(n.p,{children:"Examples:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the following example, since ",(0,s.jsx)(n.code,{children:"invalidateOnChildChange"})," is not used (",(0,s.jsx)(n.code,{children:"false"})," by default), the component will be invalidated whenever children are added/removed in the ",(0,s.jsx)(n.code,{children:"tabs"})," slot, but not whenever a child in that slot changes."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"class MyComponent extends UI5Element {\n   @slot()\n   tabs!: Array<HTMLElement>;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Setting ",(0,s.jsx)(n.code,{children:"invalidateOnChildChange"})," to ",(0,s.jsx)(n.code,{children:"true"})," means: invalidate the component whenever a child in the ",(0,s.jsx)(n.code,{children:"tabs"})," slot gets invalidated, regardless of the reason."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'class MyComponent extends UI5Element {\n\t@slot({ type: HTMLElement, invalidateOnChildChange: "true" })\n\ttabs!: Array<HTMLElement>;\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The following example uses the ",(0,s.jsx)(n.code,{children:"Object"})," format again and means: invalidate the component whenever the children in this slot are invalidated due to property changes, but not due to slot changes. Here ",(0,s.jsx)(n.code,{children:'"slots": false'})," is added for completeness (as ",(0,s.jsx)(n.code,{children:"false"})," is the default value for both ",(0,s.jsx)(n.code,{children:"properties"})," and ",(0,s.jsx)(n.code,{children:"slots"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'class MyComponent extends UI5Element {\n\t@slot({ \n\t\ttype: HTMLElement,\n\t\tinvalidateOnChildChange: {\n\t\t\t"properties": true,\n\t\t\t"slots": false\n\t\t}\n\t})\n\ttabs!: Array<HTMLElement>;\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The final example shows the most complex format of ",(0,s.jsx)(n.code,{children:"invalidateOnChildChange"})," which allows to define which slots or properties in the children inside that slot lead to invalidation of the component:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'class MyComponent extends UI5Element {\n   @slot({ \n   \ttype: HTMLElement,\n   \tinvalidateOnChildChange: {\n   \t\t"properties": ["text", "selected", "disabled"],\n   \t\t"slots": ["default"]\n   \t}\n   })\n   tabs!: Array<HTMLElement>;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Notes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Children without a ",(0,s.jsx)(n.code,{children:"slot"})," attribute will be assigned to the ",(0,s.jsx)(n.code,{children:"default"})," slot."]}),"\n",(0,s.jsxs)(n.li,{children:["All HTML text nodes will be assigned to the ",(0,s.jsx)(n.code,{children:"default"})," slot, as they cannot have a ",(0,s.jsx)(n.code,{children:"slot"})," attribute."]}),"\n",(0,s.jsxs)(n.li,{children:['For all slots the Web Component will have a property created, with the name of the slot, to hold a list of all children assigned to this slot.\nFor example, if you have a slot named "rows", "this.rows" will be an array, holding references to all children with ',(0,s.jsx)(n.code,{children:'slot="rows"'}),", or no slot, if rows was default."]}),"\n",(0,s.jsxs)(n.li,{children:["For the ",(0,s.jsx)(n.code,{children:"default"})," slot you can provide an accessor. In the following example, ",(0,s.jsx)(n.code,{children:"this.items"})," will hold all children that were assigned to the default slot."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:' @slot({ \n\ttype: HTMLElement\n\t"default": true,\n})\nitems!: Array<HTMLElement>;\n'})}),"\n",(0,s.jsx)(n.h4,{id:"slot-types",children:"Slot types"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Node"}),(0,s.jsx)(n.td,{children:"Accepts both Text nodes and HTML Elements"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"HTMLElement"}),(0,s.jsx)(n.td,{children:"Accepts HTML Elements only"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"slots-and-component-invalidation",children:"Slots and Component Invalidation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The framework will invalidate this UI5 Web Component, whenever its children are added/removed/rearranged (and additionally when invalidated, if ",(0,s.jsx)(n.code,{children:"invalidateOnChildChange"})," is set)."]}),"\n",(0,s.jsx)(n.li,{children:"If any of this UI5 Web Component's children are custom elements, the framework will await until they are all\ndefined and upgraded, before rendering the component for the first time."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(14041);const l={},i=s.createContext(l);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);