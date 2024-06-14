/* eslint no-unused-vars: 0 */
import { html, repeat, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<div class="ui5-media-gallery-root"><div class="ui5-media-gallery-display-wrapper"><div class="ui5-media-gallery-display" @click="${this._onDisplayAreaClick}">${this._isPhonePlatform ? block1.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</div></div>${this._showThumbnails ? block4.call(this, context, tags, suffix) : undefined}</div>`; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-carousel", tags, suffix)} @ui5-navigate="${ifDefined(this._onCarouselNavigate)}" hide-navigation-arrows>${repeat(this._selectableItems, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-carousel", tags, suffix)}>` : html `<ui5-carousel @ui5-navigate="${ifDefined(this._onCarouselNavigate)}" hide-navigation-arrows>${repeat(this._selectableItems, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</ui5-carousel>`; }
function block2(context, tags, suffix, item, index) { return html `<slot name="${ifDefined(item._individualSlot)}"></slot>`; }
function block3(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-media-gallery-item", tags, suffix)} ?_interactive="${ifDefined(this.interactiveDisplayArea)}" ?_square="${ifDefined(this._shouldHaveSquareDisplay)}" _tab-index="${ifDefined(this._mainItemTabIndex)}"></${scopeTag("ui5-media-gallery-item", tags, suffix)}>` : html `<ui5-media-gallery-item ?_interactive="${ifDefined(this.interactiveDisplayArea)}" ?_square="${ifDefined(this._shouldHaveSquareDisplay)}" _tab-index="${ifDefined(this._mainItemTabIndex)}"></ui5-media-gallery-item>`; }
function block4(context, tags, suffix) { return html `<div class="ui5-media-gallery-thumbnails-wrapper"><ul>${repeat(this._visibleItems, (item, index) => item._id || index, (item, index) => block5.call(this, context, tags, suffix, item, index))}${this._showOverflowBtn ? block6.call(this, context, tags, suffix) : undefined}</ul></div>`; }
function block5(context, tags, suffix, item, index) { return html `<li id="${ifDefined(item.id)}" class="ui5-media-gallery-thumbnail" role="option" @click="${this._onThumbnailClick}" @ui5-click="${ifDefined(this._onThumbnailClick)}"><slot name="${ifDefined(item._individualSlot)}"></slot></li>`; }
function block6(context, tags, suffix) { return suffix ? html `<li class="ui5-media-gallery-overflow"><${scopeTag("ui5-button", tags, suffix)} @click="${this._onOverflowBtnClick}">+${ifDefined(this._overflowSize)}</${scopeTag("ui5-button", tags, suffix)}></li>` : html `<li class="ui5-media-gallery-overflow"><ui5-button @click="${this._onOverflowBtnClick}">+${ifDefined(this._overflowSize)}</ui5-button></li>`; }
export default block0;
//# sourceMappingURL=MediaGalleryTemplate.lit.js.map