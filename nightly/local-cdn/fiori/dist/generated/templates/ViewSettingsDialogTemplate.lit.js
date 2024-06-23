/* eslint no-unused-vars: 0 */
import { html, repeat, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-dialog", tags, suffix)} prevent-initial-focus aria-label="${ifDefined(this._dialogTitle)}" @ui5-open=${ifDefined(this._focusRecentlyUsedControl)} @ui5-before-close=${ifDefined(this._restoreConfirmedOnEscape)} ?stretch=${this._isPhone}><div slot="header" class="ui5-vsd-header"><div class="ui5-vsd-header-container"><div class="ui5-vsd-header-start">${this.showBackButton ? block1.call(this, context, tags, suffix) : undefined}<${scopeTag("ui5-title", tags, suffix)} wrapping-type="None" class="ui5-vsd-title" id="${ifDefined(this._id)}-label">${ifDefined(this._title)}</${scopeTag("ui5-title", tags, suffix)}></div><div class="ui5-vsd-header-end"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this._resetSettings}" ?disabled=${this._disableResetButton}>${ifDefined(this._resetButtonLabel)}</${scopeTag("ui5-button", tags, suffix)}></div></div>${!this.showBackButton ? block2.call(this, context, tags, suffix) : undefined}</div><div class="ui5-vsd-content" ?expand-content="${this.expandContent}">${this.shouldBuildSort ? block4.call(this, context, tags, suffix) : undefined}${this.shouldBuildFilter ? block8.call(this, context, tags, suffix) : undefined}</div><div slot="footer" class="ui5-vsd-footer"><${scopeTag("ui5-button", tags, suffix)} design="Emphasized" @click="${this._confirmSettings}">${ifDefined(this._okButtonLabel)}</${scopeTag("ui5-button", tags, suffix)}><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this._cancelSettings}">${ifDefined(this._cancelButtonLabel)}</${scopeTag("ui5-button", tags, suffix)}></div></${scopeTag("ui5-dialog", tags, suffix)}>` : html `<ui5-dialog prevent-initial-focus aria-label="${ifDefined(this._dialogTitle)}" @ui5-open=${ifDefined(this._focusRecentlyUsedControl)} @ui5-before-close=${ifDefined(this._restoreConfirmedOnEscape)} ?stretch=${this._isPhone}><div slot="header" class="ui5-vsd-header"><div class="ui5-vsd-header-container"><div class="ui5-vsd-header-start">${this.showBackButton ? block1.call(this, context, tags, suffix) : undefined}<ui5-title wrapping-type="None" class="ui5-vsd-title" id="${ifDefined(this._id)}-label">${ifDefined(this._title)}</ui5-title></div><div class="ui5-vsd-header-end"><ui5-button design="Transparent" @click="${this._resetSettings}" ?disabled=${this._disableResetButton}>${ifDefined(this._resetButtonLabel)}</ui5-button></div></div>${!this.showBackButton ? block2.call(this, context, tags, suffix) : undefined}</div><div class="ui5-vsd-content" ?expand-content="${this.expandContent}">${this.shouldBuildSort ? block4.call(this, context, tags, suffix) : undefined}${this.shouldBuildFilter ? block8.call(this, context, tags, suffix) : undefined}</div><div slot="footer" class="ui5-vsd-footer"><ui5-button design="Emphasized" @click="${this._confirmSettings}">${ifDefined(this._okButtonLabel)}</ui5-button><ui5-button design="Transparent" @click="${this._cancelSettings}">${ifDefined(this._cancelButtonLabel)}</ui5-button></div></ui5-dialog>`; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} design="Transparent" icon="nav-back" class="ui5-vsd-back-button" @click="${this._navigateToFilters}"></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button design="Transparent" icon="nav-back" class="ui5-vsd-back-button" @click="${this._navigateToFilters}"></ui5-button>`; }
function block2(context, tags, suffix) { return html `${this.hasPagination ? block3.call(this, context, tags, suffix) : undefined}`; }
function block3(context, tags, suffix) { return suffix ? html `<div class="ui5-vsd-sub-header-container"><div class="ui5-vsd-sub-header"><${scopeTag("ui5-segmented-button", tags, suffix)} @ui5-selection-change="${ifDefined(this._handleModeChange)}"><${scopeTag("ui5-segmented-button-item", tags, suffix)} ?selected="${this.isModeSort}" icon="sort" mode="Sort"></${scopeTag("ui5-segmented-button-item", tags, suffix)}><${scopeTag("ui5-segmented-button-item", tags, suffix)} ?selected="${this.isModeFilter}" icon="filter" mode="Filter"></${scopeTag("ui5-segmented-button-item", tags, suffix)}></${scopeTag("ui5-segmented-button", tags, suffix)}></div></div>` : html `<div class="ui5-vsd-sub-header-container"><div class="ui5-vsd-sub-header"><ui5-segmented-button @ui5-selection-change="${ifDefined(this._handleModeChange)}"><ui5-segmented-button-item ?selected="${this.isModeSort}" icon="sort" mode="Sort"></ui5-segmented-button-item><ui5-segmented-button-item ?selected="${this.isModeFilter}" icon="filter" mode="Filter"></ui5-segmented-button-item></ui5-segmented-button></div></div>`; }
function block4(context, tags, suffix) { return html `${this.isModeSort ? block5.call(this, context, tags, suffix) : undefined}`; }
function block5(context, tags, suffix) { return suffix ? html `<div class="ui5-vsd-sort"><${scopeTag("ui5-list", tags, suffix)} selection-mode="SingleStart" @ui5-item-click="${ifDefined(this._onSortOrderChange)}" sort-order accessible-name-ref="${ifDefined(this._id)}-label"><${scopeTag("ui5-li-group", tags, suffix)} header-text="${ifDefined(this._sortOrderLabel)}">${repeat(this._currentSettings.sortOrder, (item, index) => item._id || index, (item, index) => block6.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-li-group", tags, suffix)}></${scopeTag("ui5-list", tags, suffix)}><${scopeTag("ui5-list", tags, suffix)} selection-mode="SingleStart" @ui5-item-click=${ifDefined(this._onSortByChange)} sort-by><${scopeTag("ui5-li-group", tags, suffix)} header-text="${ifDefined(this._sortByLabel)}">${repeat(this._currentSettings.sortBy, (item, index) => item._id || index, (item, index) => block7.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-li-group", tags, suffix)}></${scopeTag("ui5-list", tags, suffix)}></div>` : html `<div class="ui5-vsd-sort"><ui5-list selection-mode="SingleStart" @ui5-item-click="${ifDefined(this._onSortOrderChange)}" sort-order accessible-name-ref="${ifDefined(this._id)}-label"><ui5-li-group header-text="${ifDefined(this._sortOrderLabel)}">${repeat(this._currentSettings.sortOrder, (item, index) => item._id || index, (item, index) => block6.call(this, context, tags, suffix, item, index))}</ui5-li-group></ui5-list><ui5-list selection-mode="SingleStart" @ui5-item-click=${ifDefined(this._onSortByChange)} sort-by><ui5-li-group header-text="${ifDefined(this._sortByLabel)}">${repeat(this._currentSettings.sortBy, (item, index) => item._id || index, (item, index) => block7.call(this, context, tags, suffix, item, index))}</ui5-li-group></ui5-list></div>`; }
function block6(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} ?selected="${item.selected}">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li ?selected="${item.selected}">${ifDefined(item.text)}</ui5-li>`; }
function block7(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} data-ui5-external-action-item-index="${index}" ?selected="${item.selected}">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li data-ui5-external-action-item-index="${index}" ?selected="${item.selected}">${ifDefined(item.text)}</ui5-li>`; }
function block8(context, tags, suffix) { return html `${this.isModeFilter ? block9.call(this, context, tags, suffix) : undefined}`; }
function block9(context, tags, suffix) { return html `${this._filterStepTwo ? block10.call(this, context, tags, suffix) : block14.call(this, context, tags, suffix)}`; }
function block10(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-list", tags, suffix)} accessible-name-ref="${ifDefined(this._id)}-label" selection-mode="Multiple" @ui5-item-click="${ifDefined(this._handleFilterValueItemClick)}">${repeat(this._currentSettings.filters, (item, index) => item._id || index, (item, index) => block11.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}>` : html `<ui5-list accessible-name-ref="${ifDefined(this._id)}-label" selection-mode="Multiple" @ui5-item-click="${ifDefined(this._handleFilterValueItemClick)}">${repeat(this._currentSettings.filters, (item, index) => item._id || index, (item, index) => block11.call(this, context, tags, suffix, item, index))}</ui5-list>`; }
function block11(context, tags, suffix, item, index) { return html `${item.selected ? block12.call(this, context, tags, suffix, item, index) : undefined}`; }
function block12(context, tags, suffix, item, index) { return html `${repeat(item.filterOptions, (item, index) => item._id || index, (item, index) => block13.call(this, context, tags, suffix, item, index))}`; }
function block13(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} ?selected=${item.selected}>${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li ?selected=${item.selected}>${ifDefined(item.text)}</ui5-li>`; }
function block14(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-list", tags, suffix)} @ui5-item-click="${ifDefined(this._changeCurrentFilter)}" accessible-name-ref="${ifDefined(this._id)}-label"><${scopeTag("ui5-li-group", tags, suffix)} header-text="${ifDefined(this._filterByLabel)}">${repeat(this.filterItems, (item, index) => item._id || index, (item, index) => block15.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-li-group", tags, suffix)}></${scopeTag("ui5-list", tags, suffix)}>` : html `<ui5-list @ui5-item-click="${ifDefined(this._changeCurrentFilter)}" accessible-name-ref="${ifDefined(this._id)}-label"><ui5-li-group header-text="${ifDefined(this._filterByLabel)}">${repeat(this.filterItems, (item, index) => item._id || index, (item, index) => block15.call(this, context, tags, suffix, item, index))}</ui5-li-group></ui5-list>`; }
function block15(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} class="ui5-vsd-filterItemList" ?selected=${item.selected} additional-text=${ifDefined(item.additionalText)}>${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li class="ui5-vsd-filterItemList" ?selected=${item.selected} additional-text=${ifDefined(item.additionalText)}>${ifDefined(item.text)}</ui5-li>`; }
export default block0;
//# sourceMappingURL=ViewSettingsDialogTemplate.lit.js.map