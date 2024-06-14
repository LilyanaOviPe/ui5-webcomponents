"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[7295],{4397:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>y,contentTitle:()=>j,default:()=>L,frontMatter:()=>x,metadata:()=>w,toc:()=>b});var n=i(31085),o=i(71184);const s='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-notification-list>\n        <ui5-li-notification\n            id="firstNotificationListItem"\n            title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n            state="Positive"\n            importance="Important"\n            show-close>\n            <ui5-avatar size="XS" slot="avatar">\n                <img src="../assets/images/avatars/woman_avatar_1.png">\n            </ui5-avatar>\n            <span slot="footnotes">Monique Legrand</span>\n            <span slot="footnotes">2 Days</span>\n            And with a very long description - Lorem ipsum dolor sit amet, consectetur\n            adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec\n            elementum\n            lectus turpis at nunc.\n            <ui5-menu id="menuWithActions"  slot="menu">\n                <ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>\n                <ui5-menu-item icon="message-error" text="Reject"></ui5-menu-item>\n            </ui5-menu>\n        </ui5-li-notification>\n        <ui5-li-notification show-close title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." state="Critical">\n            <ui5-avatar size="XS" slot="avatar">\n                <img src="../assets/images/avatars/man_avatar_1.png">\n            </ui5-avatar>\n            <span slot="footnotes">Alain Chevalier</span>\n            <span slot="footnotes">2 Days</span>\n            And with a very long description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n        <ui5-li-notification show-close title-text="New order (#2525) With a short title" state="Information" read>\n            <ui5-avatar size="XS" slot="avatar">\n                <img src="../assets/images/avatars/man_avatar_2.png">\n            </ui5-avatar>\n            <span slot="footnotes">John Doe</span>\n            <span slot="footnotes">2 Days</span>\n            And with a very long description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n    </ui5-notification-list>\n    <ui5-toast id="wcToast" duration="2000"></ui5-toast>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',a='import "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/List.js";\nimport "@ui5/webcomponents/dist/Menu.js";\nimport "@ui5/webcomponents/dist/Toast.js";\n\nimport "@ui5/webcomponents-fiori/dist/NotificationList.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationListItem.js";\n\nvar notificationList = document.querySelector("ui5-notification-list");\n\nnotificationList.addEventListener("item-close", e => {\n    e.detail.item.hidden = true;\n});\n\nmenuWithActions.addEventListener("ui5-item-click", function(event) {\n    wcToast.textContent = "Menu button \'" + event.detail.text + "\' pressed" + " on Notification List Item with id \'" + event.target.parentElement.id + "\'.";\n    wcToast.show();\n});';function r(t){const{Editor:e}={...(0,o.R)(),...t.components};return e||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsx)(e,{html:s,js:a})}function l(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}const c='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-notification-list>\n        <ui5-li-notification-group title-text="Orders" >\n            <ui5-li-notification show-close\n                importance="Important"\n                title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n                state="Positive">\n                <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n                <span slot="footnotes">Office Notifications</span>\n                <span slot="footnotes">3 Days</span>\n                <ui5-menu slot="menu">\n\t\t\t\t\t<ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>\n\t\t\t\t\t<ui5-menu-item icon="message-error" text="Reject"></ui5-menu-item>\n\t\t\t\t</ui5-menu>\n                And with a very long description - Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula\n                dolor,\n                nec elementum lectus turpis at nunc.\n            </ui5-li-notification>\n            <ui5-li-notification show-close\n                title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n                state="Critical">\n                <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n                <span slot="footnotes">Office Notifications</span>\n                <span slot="footnotes">3 Days</span>\n                <ui5-menu slot="menu">\n                    <ui5-menu-item icon="message-error" text="Reject"></ui5-menu-item>\n\t\t\t\t\t<ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>\n\t\t\t\t</ui5-menu>\n                And with a very long description - Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula\n                dolor,\n                nec elementum lectus turpis at nunc.\n            </ui5-li-notification>\n        </ui5-li-notification-group>\n        <ui5-li-notification-group title-text="Deliveries" collapsed>\n            <ui5-li-notification show-close\n                title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n                state="Information">\n                <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n                <span slot="footnotes">Office Notifications</span>\n                <span slot="footnotes">3 Days</span>\n                <ui5-menu slot="menu">\n\t\t\t\t\t<ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>\n\t\t\t\t</ui5-menu>\n                And with a very long description - Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula\n                dolor,\n                nec elementum lectus turpis at nunc.\n            </ui5-li-notification>\n\n            <ui5-li-notification show-close\n                title-text="New Delivery (#29001) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n                state="None">\n                <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n                <span slot="footnotes">Office Notifications</span>\n                <span slot="footnotes">3 Days</span>\n                <ui5-menu slot="menu">\n\t\t\t\t\t<ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>\n\t\t\t\t</ui5-menu>\n                And with a very long description - Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula\n                dolor,\n                nec elementum lectus turpis at nunc.\n            </ui5-li-notification>\n        </ui5-li-notification-group>\n\n        <ui5-li-notification-group collapsed\n            title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">\n            <ui5-li-notification show-close title-text="New meeting at Building (#35001)" state="Positive" read>\n                <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n                <span slot="footnotes">Office Notifications</span>\n                <span slot="footnotes">3 Days</span>\n                And with a very long description  - Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula\n                dolor,\n                nec elementum lectus turpis at nunc.\n            </ui5-li-notification>\n\n            <ui5-li-notification show-close title-text="New meeting at Building (#35001)" state="Information" read>\n                <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n                <span slot="footnotes">Office Notifications</span>\n                <span slot="footnotes">3 Days</span>\n                And with a very long description - Lorem ipsum dolor sit amet,\n                consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula\n                dolor,\n                nec elementum lectus turpis at nunc.\n            </ui5-li-notification>\n        </ui5-li-notification-group>\n    </ui5-notification-list>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',u='import "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/List.js";\nimport "@ui5/webcomponents/dist/Menu.js";\n\nimport "@ui5/webcomponents-fiori/dist/NotificationList.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationListGroupItem.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationListItem.js";\n\nimport "@ui5/webcomponents-icons/dist/employee.js";\nimport "@ui5/webcomponents-icons/dist/message-error.js";\nimport "@ui5/webcomponents-icons/dist/accept.js";\nimport "@ui5/webcomponents-icons/dist/accept.js";\n\nvar notificationList = document.querySelector("ui5-notification-list");\n\nnotificationList.addEventListener("item-close", e => {\n    var visibleItems = 0;\n\n    // hide the closed Notification item\n    e.detail.item.hidden = true;\n\n    Array.from(e.detail.item.parentElement.childNodes).forEach((element) => {\n        if (element.nodeName === "UI5-LI-NOTIFICATION" && !element.hidden) {\n            visibleItems++;\n        }\n    });\n\n    // hide the Notification group if empty\n    if (visibleItems === 0) {\n        e.detail.item.parentElement.hidden = true;\n    }\n});';function d(t){const{Editor:e}={...(0,o.R)(),...t.components};return e||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsx)(e,{html:c,js:u})}function p(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}const m='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 350px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-shellbar\n\tprimary-title="Corporate Portal"\n\tlogo="../assets/images/sap-logo-svg.svg"\n\tshow-notifications\n\tnotifications-count="6"\n></ui5-shellbar>\n<ui5-popover\n\tplacement="Bottom"\n\thorizontal-align="End"\n\tid="popover-with-notifications"\n>\n<ui5-bar id="notificationsPopoverBar" design="Header">\n    <ui5-title level="H5" slot="startContent">Notifications</ui5-title>\n    <ui5-button design="Transparent" slot="endContent">Clear All</ui5-button>\n    <ui5-button design="Transparent" icon="sort" tooltip="Sort" slot="endContent"></ui5-button>\n    <ui5-button design="Transparent" icon="action-settings" tooltip="Go to settings" slot="endContent"></ui5-button>\n</ui5-bar>\n<ui5-notification-list>\n    <ui5-li-notification-group title-text="Orders" >\n        <ui5-li-notification show-close\n            title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n            state="Positive">\n            <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n            <span slot="footnotes">Office Notifications</span>\n            <span slot="footnotes">3 Days</span>\n            <ui5-menu slot="menu">\n                <ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>\n                <ui5-menu-item icon="message-error" text="Reject"></ui5-menu-item>\n            </ui5-menu>\n            And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,\n            nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n\n        <ui5-li-notification show-close\n            title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n            state="Critical">\n            <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n            <span slot="footnotes">Office Notifications</span>\n            <span slot="footnotes">3 Days</span>\n            <ui5-menu slot="menu">\n                <ui5-menu-item icon="message-error" text="Reject"></ui5-menu-item>\n                <ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>\n            </ui5-menu>\n            And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,\n            nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n    </ui5-li-notification-group>\n    <ui5-li-notification-group title-text="Deliveries" collapsed>\n        <ui5-li-notification show-close\n            title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n            state="Information">\n            <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n            <span slot="footnotes">Office Notifications</span>\n            <span slot="footnotes">3 Days</span>\n            <ui5-menu slot="menu">\n                <ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>\n            </ui5-menu>\n            And with a very long description - Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,\n            nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n\n        <ui5-li-notification show-close\n            title-text="New Delivery (#29001) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."\n            state="None">\n            <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n            <span slot="footnotes">Office Notifications</span>\n            <span slot="footnotes">3 Days</span>\n            <ui5-menu slot="menu">\n                <ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>\n            </ui5-menu>\n            And with a very long description - Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,\n            nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n    </ui5-li-notification-group>\n\n    <ui5-li-notification-group collapsed\n        title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">\n        <ui5-li-notification show-close title-text="New meeting at Building (#35001)" state="Positive" read>\n            <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n            <span slot="footnotes">Office Notifications</span>\n            <span slot="footnotes">3 Days</span>\n            And with a very long description - Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,\n            nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n\n        <ui5-li-notification show-close title-text="New meeting at Building (#35001)" state="Negative"read>\n            <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>\n            <span slot="footnotes">Office Notifications</span>\n            <span slot="footnotes">3 Days</span>\n            And with a very long description - Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,\n            nec elementum lectus turpis at nunc.\n        </ui5-li-notification>\n    </ui5-li-notification-group>\n</ui5-notification-list>\n</ui5-popover>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',h='import "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/List.js";\nimport "@ui5/webcomponents/dist/Popover.js";\nimport "@ui5/webcomponents/dist/Title.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Menu.js";\nimport "@ui5/webcomponents/dist/Bar.js";\nimport "@ui5/webcomponents-icons/dist/action-settings.js"\nimport "@ui5/webcomponents-icons/dist/sort.js"\n\nimport "@ui5/webcomponents-fiori/dist/ShellBar.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationList.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationListGroupItem.js";\nimport "@ui5/webcomponents-fiori/dist/NotificationListItem.js";\n\nimport "@ui5/webcomponents-icons/dist/employee.js";\nimport "@ui5/webcomponents-icons/dist/message-error.js";\nimport "@ui5/webcomponents-icons/dist/accept.js";\n\nvar shellbar = document.querySelector("ui5-shellbar");\nvar notificationsPopover = document.querySelector("ui5-popover");\nvar notificationList = document.querySelector("ui5-notification-list");\n\nnotificationList.addEventListener("item-close", e => {\n    var visibleItems = 0;\n\n    // hide the closed Notification item\n    e.detail.item.hidden = true;\n\n    Array.from(e.detail.item.parentElement.childNodes).forEach((element) => {\n        if (element.nodeName === "UI5-LI-NOTIFICATION" && !element.hidden) {\n            visibleItems++;\n        }\n    });\n\n    // hide the Notification group if empty\n    if (visibleItems === 0) {\n        e.detail.item.parentElement.hidden = true;\n    }\n});\n\nshellbar.addEventListener("notifications-click", e => {\n    e.preventDefault();\n    notificationsPopover.opener = e.detail.targetRef;\n\tnotificationsPopover.open = true;\n});',f="#popover-with-notifications {\n    max-width: 27rem;\n    max-height: 40rem;\n}\n\n#popover-with-notifications::part(content) {\n    padding: 0;\n}\n\n#notificationsPopoverBar::part(bar) {\n    box-shadow: none;\n}";function v(t){const{Editor:e}={...(0,o.R)(),...t.components};return e||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsx)(e,{html:m,js:h,css:f})}function g(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(v,{...t})}):v(t)}const x={},j=void 0,w={id:"components/fiori/NotificationList/NotificationList",title:"NotificationList",description:"The ui5-notification-list web component represents",source:"@site/docs/components/fiori/NotificationList/NotificationList.mdx",sourceDirName:"components/fiori/NotificationList",slug:"/components/fiori/NotificationList/",permalink:"/ui5-webcomponents/nightly/components/fiori/NotificationList/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"MediaGalleryItem",permalink:"/ui5-webcomponents/nightly/components/fiori/MediaGalleryItem"},next:{title:"NotificationListGroupItem",permalink:"/ui5-webcomponents/nightly/components/fiori/NotificationListGroupItem"}},y={},b=[{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"Basic Navigation",id:"basic-navigation",level:4},{value:"Fast Navigation",id:"fast-navigation",level:4},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"noDataText",id:"nodatatext",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"item-click",id:"item-click",level:3},{value:"item-close",id:"item-close",level:3},{value:"item-toggle",id:"item-toggle",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Notification List with Group Items",id:"notification-list-with-group-items",level:3},{value:"Notifications in ShellBar",id:"notifications-in-shellbar",level:3}];function N(t){const e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"ui5-notification-list"})," web component represents\na container for ",(0,n.jsx)(e.code,{children:"ui5-li-notification-group"})," and ",(0,n.jsx)(e.code,{children:"ui5-li-notification"}),"."]}),"\n",(0,n.jsx)(e.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,n.jsx)(e.h4,{id:"basic-navigation",children:"Basic Navigation"}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"ui5-notification-list"})," provides advanced keyboard handling.\nWhen a list is focused the user can use the following keyboard\nshortcuts in order to perform a navigation:"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"[Up] or [Left] - Navigates up the items"}),"\n",(0,n.jsx)(e.li,{children:"[Down] or [Right] - Navigates down the items"}),"\n",(0,n.jsx)(e.li,{children:"[Home] - Navigates to first item"}),"\n",(0,n.jsx)(e.li,{children:"[End] - Navigates to the last item"}),"\n"]}),"\n",(0,n.jsx)(e.h4,{id:"fast-navigation",children:"Fast Navigation"}),"\n",(0,n.jsxs)(e.p,{children:["This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].\nIn order to use this functionality, you need to import the following module:\n",(0,n.jsx)(e.code,{children:'import "@ui5/webcomponents-base/dist/features/F6Navigation.js"'})]}),"\n",(0,n.jsx)(e.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,n.jsx)(e.p,{children:'`import "@ui5/webcomponents-fiori/dist/NotificationList.js";``'}),"\n",(0,n.jsx)(e.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,n.jsx)(l,{}),"\n",(0,n.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(e.h3,{id:"nodatatext",children:"noDataText"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsx)(e.td,{children:"Defines the text that is displayed when the component contains no items."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"string"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Default"}),(0,n.jsx)(e.td,{children:'""'})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsx)(e.h3,{id:"default",children:"default"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsx)(e.td,{children:"Defines the items of the component."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"Array<NotificationListItemBase>"})})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(e.h3,{id:"item-click",children:"item-click"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsx)(e.td,{children:"Fired when an item is clicked."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"CustomEvent<NotificationItemClickEventDetail>"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Parameters"}),(0,n.jsxs)(e.td,{children:[(0,n.jsx)(e.strong,{children:"item"}),": ",(0,n.jsx)(e.code,{children:"HTMLElement"}),(0,n.jsx)("br",{}),"The clicked item."]})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"item-close",children:"item-close"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsxs)(e.td,{children:["Fired when the ",(0,n.jsx)(e.code,{children:"Close"})," button of any item is clicked."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"CustomEvent<NotificationItemCloseEventDetail>"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Parameters"}),(0,n.jsxs)(e.td,{children:[(0,n.jsx)(e.strong,{children:"item"}),": ",(0,n.jsx)(e.code,{children:"HTMLElement"}),(0,n.jsx)("br",{}),"the item about to be closed."]})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"item-toggle",children:"item-toggle"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Description"}),(0,n.jsx)(e.td,{children:"Fired when an item is toggled."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Type"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"CustomEvent<NotificationItemToggleEventDetail>"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Parameters"}),(0,n.jsxs)(e.td,{children:[(0,n.jsx)(e.strong,{children:"item"}),": ",(0,n.jsx)(e.code,{children:"HTMLElement"}),(0,n.jsx)("br",{}),"the toggled item."]})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(e.p,{children:"No methods available for this component."}),"\n",(0,n.jsx)(e.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsx)(e.p,{children:"No CSS parts available for this component."}),"\n",(0,n.jsx)(e.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,n.jsx)(e.h3,{id:"notification-list-with-group-items",children:"Notification List with Group Items"}),"\n",(0,n.jsx)(p,{}),"\n",(0,n.jsx)(e.h3,{id:"notifications-in-shellbar",children:"Notifications in ShellBar"}),"\n",(0,n.jsx)(e.p,{children:'The main usage of the Notifications is in the ShellBar.\nPress the "notifications" icon on the right side of the ShellBar to show the Notifications.'}),"\n",(0,n.jsx)(g,{})]})}function L(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(N,{...t})}):N(t)}},71184:(t,e,i)=>{i.d(e,{R:()=>a,x:()=>r});var n=i(14041);const o={},s=n.createContext(o);function a(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);