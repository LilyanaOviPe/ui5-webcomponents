"use strict";import"@ui5/webcomponents-base/dist/ssr-dom.js";import O from"./thirdparty/merge.js";import{boot as L}from"./Boot.js";import U from"./UI5ElementMetadata.js";import S from"./EventProvider.js";import F from"./updateShadowRoot.js";import{shouldIgnoreCustomElement as V}from"./IgnoreCustomElements.js";import{renderDeferred as N,renderImmediately as j,cancelRender as k}from"./Render.js";import{registerTag as x,isTagRegistered as H,recordTagRegistrationFailure as $}from"./CustomElementsRegistry.js";import{observeDOMNode as z,unobserveDOMNode as W}from"./DOMObserver.js";import{skipOriginalEvent as q}from"./config/NoConflict.js";import B from"./locale/getEffectiveDir.js";import{kebabToCamelCase as I,camelToKebabCase as K}from"./util/StringHelper.js";import D from"./util/isValidPropertyName.js";import{getSlotName as G,getSlottedNodesList as b}from"./util/SlotsHelper.js";import A from"./util/arraysAreEqual.js";import{markAsRtlAware as J}from"./locale/RTLAwareRegistry.js";import Q from"./renderer/executeTemplate.js";import{attachFormElementInternals as X,setFormValue as P}from"./features/InputElementsFormSupport.js";let Y=0;const T=new Map,E=new Map;function y(m){this._suppressInvalidation||(this.onInvalidation(m),this._changedState.push(m),N(this),this._invalidationEventProvider.fireEvent("invalidate",{...m,target:this}))}function Z(m,M){do{const t=Object.getOwnPropertyDescriptor(m,M);if(t)return t;m=Object.getPrototypeOf(m)}while(m&&m!==HTMLElement.prototype)}class C extends HTMLElement{constructor(){super();const t=this.constructor;this._changedState=[],this._suppressInvalidation=!0,this._inDOM=!1,this._fullyConnected=!1,this._childChangeListeners=new Map,this._slotChangeListeners=new Map,this._invalidationEventProvider=new S,this._componentStateFinalizedEventProvider=new S;let e;if(this._domRefReadyPromise=new Promise(o=>{e=o}),this._domRefReadyPromise._deferredResolve=e,this._doNotSyncAttributes=new Set,this._slotsAssignedNodes=new WeakMap,this._state={...t.getMetadata().getInitialState()},this._upgradeAllProperties(),t._needsShadowDOM()){const o={mode:"open"};this.attachShadow({...o,...t.getMetadata().getShadowRootOptions()})}}get _id(){return this.__id||(this.__id=`ui5wc_${++Y}`),this.__id}render(){const t=this.constructor.template;return Q(t,this)}async connectedCallback(){const t=this.constructor;this.setAttribute(t.getMetadata().getPureTag(),""),t.getMetadata().supportsF6FastNavigation()&&this.setAttribute("data-sap-ui-fastnavgroup","true");const e=t.getMetadata().slotsAreManaged();this._inDOM=!0,e&&(this._startObservingDOMChildren(),await this._processChildren()),this._inDOM&&(j(this),this._domRefReadyPromise._deferredResolve(),this._fullyConnected=!0,this.onEnterDOM())}disconnectedCallback(){const e=this.constructor.getMetadata().slotsAreManaged();this._inDOM=!1,e&&this._stopObservingDOMChildren(),this._fullyConnected&&(this.onExitDOM(),this._fullyConnected=!1),this._domRefReadyPromise._deferredResolve(),k(this)}onBeforeRendering(){}onAfterRendering(){}onEnterDOM(){}onExitDOM(){}_startObservingDOMChildren(){const e=this.constructor.getMetadata();if(!e.hasSlots())return;const a=e.canSlotText(),s=Object.keys(e.getSlots()).some(d=>e.getSlots()[d].cloned),i={childList:!0,subtree:a||s,characterData:a};z(this,this._processChildren.bind(this),i)}_stopObservingDOMChildren(){W(this)}async _processChildren(){this.constructor.getMetadata().hasSlots()&&await this._updateSlots()}async _updateSlots(){const t=this.constructor,e=t.getMetadata().getSlots(),o=t.getMetadata().canSlotText(),a=Array.from(o?this.childNodes:this.children),s=new Map,i=new Map;for(const[l,u]of Object.entries(e)){const c=u.propertyName||l;i.set(c,l),s.set(c,[...this._state[c]]),this._clearSlot(l,u)}const d=new Map,n=new Map,r=a.map(async(l,u)=>{const c=G(l),f=e[c];if(f===void 0){if(c!=="default"){const p=Object.keys(e).join(", ");console.warn(`Unknown slotName: ${c}, ignoring`,l,`Valid values are: ${p}`)}return}if(f.individualSlots){const p=(d.get(c)||0)+1;d.set(c,p),l._individualSlot=`${c}-${p}`}if(l instanceof HTMLElement){const p=l.localName;if(p.includes("-")&&!V(p)){if(!customElements.get(p)){const w=customElements.whenDefined(p);let _=T.get(p);_||(_=new Promise(R=>setTimeout(R,1e3)),T.set(p,_)),await Promise.race([w,_])}customElements.upgrade(l)}}if(l=t.getMetadata().constructor.validateSlotValue(l,f),v(l)&&f.invalidateOnChildChange){const p=this._getChildChangeListener(c);l.attachInvalidate.call(l,p)}l instanceof HTMLSlotElement&&this._attachSlotChange(l,c,!!f.invalidateOnChildChange);const g=f.propertyName||c;n.has(g)?n.get(g).push({child:l,idx:u}):n.set(g,[{child:l,idx:u}])});await Promise.all(r),n.forEach((l,u)=>{this._state[u]=l.sort((c,f)=>c.idx-f.idx).map(c=>c.child)});let h=!1;for(const[l,u]of Object.entries(e)){const c=u.propertyName||l;A(s.get(c),this._state[c])||(y.call(this,{type:"slot",name:i.get(c),reason:"children"}),h=!0,t.getMetadata().isFormAssociated()&&P(this))}h||y.call(this,{type:"slot",name:"default",reason:"textcontent"})}_clearSlot(t,e){const o=e.propertyName||t;this._state[o].forEach(s=>{if(v(s)){const i=this._getChildChangeListener(t);s.detachInvalidate.call(s,i)}s instanceof HTMLSlotElement&&this._detachSlotChange(s,t)}),this._state[o]=[]}attachInvalidate(t){this._invalidationEventProvider.attachEvent("invalidate",t)}detachInvalidate(t){this._invalidationEventProvider.detachEvent("invalidate",t)}_onChildChange(t,e){this.constructor.getMetadata().shouldInvalidateOnChildChange(t,e.type,e.name)&&y.call(this,{type:"slot",name:t,reason:"childchange",child:e.target})}attributeChangedCallback(t,e,o){let a;if(this._doNotSyncAttributes.has(t))return;const s=this.constructor.getMetadata().getProperties(),i=t.replace(/^ui5-/,""),d=I(i);if(s.hasOwnProperty(d)){const n=s[d],r=n.type;let h=n.validator;r&&r.isDataTypeClass&&(h=r),h?a=h.attributeToProperty(o):r===Boolean?a=o!==null:a=o,this[d]=a}}formAssociatedCallback(){this.constructor.getMetadata().isFormAssociated()&&X(this)}static get formAssociated(){return this.getMetadata().isFormAssociated()}_updateAttribute(t,e){const o=this.constructor;if(!o.getMetadata().hasAttribute(t))return;const s=o.getMetadata().getProperties()[t],i=s.type;let d=s.validator;const n=K(t),r=this.getAttribute(n);if(i&&i.isDataTypeClass&&(d=i),d){const h=d.propertyToAttribute(e);h===null?(this._doNotSyncAttributes.add(n),this.removeAttribute(n),this._doNotSyncAttributes.delete(n)):this.setAttribute(n,h)}else i===Boolean?e===!0&&r===null?this.setAttribute(n,""):e===!1&&r!==null&&this.removeAttribute(n):typeof e!="object"&&r!==e&&this.setAttribute(n,e)}_upgradeProperty(t){if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this[t]=e}}_upgradeAllProperties(){this.constructor.getMetadata().getPropertiesList().forEach(this._upgradeProperty.bind(this))}_getChildChangeListener(t){return this._childChangeListeners.has(t)||this._childChangeListeners.set(t,this._onChildChange.bind(this,t)),this._childChangeListeners.get(t)}_getSlotChangeListener(t){return this._slotChangeListeners.has(t)||this._slotChangeListeners.set(t,this._onSlotChange.bind(this,t)),this._slotChangeListeners.get(t)}_attachSlotChange(t,e,o){const a=this._getSlotChangeListener(e);t.addEventListener("slotchange",s=>{if(a.call(t,s),o){const i=this._slotsAssignedNodes.get(t);i&&i.forEach(n=>{if(v(n)){const r=this._getChildChangeListener(e);n.detachInvalidate.call(n,r)}});const d=b([t]);this._slotsAssignedNodes.set(t,d),d.forEach(n=>{if(v(n)){const r=this._getChildChangeListener(e);n.attachInvalidate.call(n,r)}})}})}_detachSlotChange(t,e){t.removeEventListener("slotchange",this._getSlotChangeListener(e))}_onSlotChange(t){y.call(this,{type:"slot",name:t,reason:"slotchange"})}onInvalidation(t){}_render(){const t=this.constructor,e=t.getMetadata().hasIndividualSlots();this._suppressInvalidation=!0,this.onBeforeRendering(),this._componentStateFinalizedEventProvider.fireEvent("componentStateFinalized"),this._suppressInvalidation=!1,this._changedState=[],t._needsShadowDOM()&&F(this),e&&this._assignIndividualSlotsToChildren(),this.onAfterRendering()}_assignIndividualSlotsToChildren(){Array.from(this.children).forEach(e=>{e._individualSlot&&e.setAttribute("slot",e._individualSlot)})}_waitForDomRef(){return this._domRefReadyPromise}getDomRef(){if(typeof this._getRealDomRef=="function")return this._getRealDomRef();if(!(!this.shadowRoot||this.shadowRoot.children.length===0))return this.shadowRoot.children[0]}getFocusDomRef(){const t=this.getDomRef();if(t)return t.querySelector("[data-sap-focus-ref]")||t}async getFocusDomRefAsync(){return await this._waitForDomRef(),this.getFocusDomRef()}async focus(t){await this._waitForDomRef();const e=this.getFocusDomRef();e===this?HTMLElement.prototype.focus.call(this,t):e&&typeof e.focus=="function"&&e.focus(t)}fireEvent(t,e,o=!1,a=!0){const s=this._fireEvent(t,e,o,a),i=I(t);return i!==t?s&&this._fireEvent(i,e,o,a):s}_fireEvent(t,e,o=!1,a=!0){const s=new CustomEvent(`ui5-${t}`,{detail:e,composed:!1,bubbles:a,cancelable:o}),i=this.dispatchEvent(s);if(q(t))return i;const d=new CustomEvent(t,{detail:e,composed:!1,bubbles:a,cancelable:o});return this.dispatchEvent(d)&&i}getSlottedNodes(t){return b(this[t])}attachComponentStateFinalized(t){this._componentStateFinalizedEventProvider.attachEvent("componentStateFinalized",t)}detachComponentStateFinalized(t){this._componentStateFinalizedEventProvider.detachEvent("componentStateFinalized",t)}get effectiveDir(){return J(this.constructor),B(this)}get isUI5Element(){return!0}get classes(){return{}}get accessibilityInfo(){return{}}static get observedAttributes(){return this.getMetadata().getAttributesList()}static _needsShadowDOM(){return!!this.template||Object.prototype.hasOwnProperty.call(this.prototype,"render")}static _generateAccessors(){const t=this.prototype,e=this.getMetadata().slotsAreManaged(),o=this.getMetadata().getProperties();for(const[a,s]of Object.entries(o)){if(D(a)||console.warn(`"${a}" is not a valid property name. Use a name that does not collide with DOM APIs`),s.type===Boolean&&s.defaultValue)throw new Error(`Cannot set a default value for property "${a}". All booleans are false by default.`);if(s.type===Array)throw new Error(`Wrong type for property "${a}". Properties cannot be of type Array - use "multiple: true" and set "type" to the single value type, such as "String", "Object", etc...`);if(s.type===Object&&s.defaultValue)throw new Error(`Cannot set a default value for property "${a}". All properties of type "Object" are empty objects by default.`);if(s.multiple&&s.defaultValue)throw new Error(`Cannot set a default value for property "${a}". All multiple properties are empty arrays by default.`);const i=Z(t,a);let d;i?.set&&(d=i.set);let n;i?.get&&(n=i.get),Object.defineProperty(t,a,{get(){if(n)return n.call(this);if(this._state[a]!==void 0)return this._state[a];const r=s.defaultValue;return s.type===Boolean?!1:s.type===String?r:s.multiple?[]:r},set(r){let h;const l=this.constructor;r=l.getMetadata().constructor.validatePropertyValue(r,s);const c=s.type;let f=s.validator;const g=n?n.call(this):this._state[a];c&&c.isDataTypeClass&&(f=c),f?h=!f.valuesAreEqual(g,r):Array.isArray(g)&&Array.isArray(r)&&s.multiple&&s.compareValues?h=!A(g,r):h=g!==r,h&&(d?d.call(this,r):this._state[a]=r,y.call(this,{type:"property",name:a,newValue:r,oldValue:g}),l.getMetadata().isFormAssociated()&&P(this),this._updateAttribute(a,r))}})}if(e){const a=this.getMetadata().getSlots();for(const[s,i]of Object.entries(a)){D(s)||console.warn(`"${s}" is not a valid property name. Use a name that does not collide with DOM APIs`);const d=i.propertyName||s;Object.defineProperty(t,d,{get(){return this._state[d]!==void 0?this._state[d]:[]},set(){throw new Error("Cannot set slot content directly, use the DOM APIs (appendChild, removeChild, etc...)")}})}}}static{this.metadata={}}static{this.styles=""}static get dependencies(){return[]}static getUniqueDependencies(){if(!E.has(this)){const t=this.dependencies.filter((e,o,a)=>a.indexOf(e)===o);E.set(this,t)}return E.get(this)||[]}static whenDependenciesDefined(){return Promise.all(this.getUniqueDependencies().map(t=>t.define()))}static async onDefine(){return Promise.resolve()}static async define(){await L(),await Promise.all([this.whenDependenciesDefined(),this.onDefine()]);const t=this.getMetadata().getTag(),e=H(t),o=customElements.get(t);return o&&!e?$(t):o||(this._generateAccessors(),x(t),customElements.define(t,this)),this}static getMetadata(){if(this.hasOwnProperty("_metadata"))return this._metadata;const t=[this.metadata];let e=this;for(;e!==C;)e=Object.getPrototypeOf(e),t.unshift(e.metadata);const o=O({},...t);return this._metadata=new U(o),this._metadata}get validity(){return this._internals?.validity}get validationMessage(){return this._internals?.validationMessage}checkValidity(){return this._internals?.checkValidity()}reportValidity(){return this._internals?.reportValidity()}}const v=m=>"isUI5Element"in m;export default C;export{v as instanceOfUI5Element};
//# sourceMappingURL=UI5Element.js.map