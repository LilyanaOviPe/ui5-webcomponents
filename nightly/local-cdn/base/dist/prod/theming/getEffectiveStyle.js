"use strict";import{getCustomCSS as i,attachCustomCSSChange as f}from"./CustomStyle.js";import r from"./getStylesString.js";import{getFeature as p}from"../FeaturesRegistry.js";const e=new Map;f(t=>{e.delete(`${t}_normal`)});const y=t=>{const o=t.getMetadata().getTag(),n=`${o}_normal`,s=p("OpenUI5Enablement");if(!e.has(n)){let l="";s&&(l=r(s.getBusyIndicatorStyles()));const a=i(o)||"",m=`${r(t.styles)} ${a} ${l}`;e.set(n,m)}return e.get(n)};export default y;
//# sourceMappingURL=getEffectiveStyle.js.map
