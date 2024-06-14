/* eslint no-unused-vars: 0 */
import { html, repeat, classMap, styleMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-responsive-popover", tags, suffix)} placement="Bottom" horizontal-align="Start" class="${classMap(this.classes.popover)}" hide-arrow prevent-initial-focus style="${styleMap(this.styles.suggestionsPopover)}" @ui5-selection-change=${ifDefined(this._listSelectionChange)} @ui5-close=${ifDefined(this._afterClosePicker)} @ui5-before-open=${ifDefined(this._beforeOpen)} @ui5-open=${ifDefined(this._afterOpenPicker)}>${this._isPhone ? block1.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block8.call(this, context, tags, suffix) : undefined}${this.filterSelected ? block14.call(this, context, tags, suffix) : block20.call(this, context, tags, suffix)}${this._isPhone ? block26.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-responsive-popover", tags, suffix)}>${this.hasValueStateMessage ? block27.call(this, context, tags, suffix) : undefined} ` : html `<ui5-responsive-popover placement="Bottom" horizontal-align="Start" class="${classMap(this.classes.popover)}" hide-arrow prevent-initial-focus style="${styleMap(this.styles.suggestionsPopover)}" @ui5-selection-change=${ifDefined(this._listSelectionChange)} @ui5-close=${ifDefined(this._afterClosePicker)} @ui5-before-open=${ifDefined(this._beforeOpen)} @ui5-open=${ifDefined(this._afterOpenPicker)}>${this._isPhone ? block1.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block8.call(this, context, tags, suffix) : undefined}${this.filterSelected ? block14.call(this, context, tags, suffix) : block20.call(this, context, tags, suffix)}${this._isPhone ? block26.call(this, context, tags, suffix) : undefined}</ui5-responsive-popover>${this.hasValueStateMessage ? block27.call(this, context, tags, suffix) : undefined} `; }
function block1(context, tags, suffix) { return suffix ? html `<div slot="header" class="ui5-responsive-popover-header" style="${styleMap(this.styles.popoverHeader)}"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.handleCancel}"></${scopeTag("ui5-button", tags, suffix)}></div><div class="row"><${scopeTag("ui5-input", tags, suffix)} @ui5-input="${ifDefined(this._handleMobileInput)}" @ui5-change="${ifDefined(this._mobileInputChange)}" placeholder="${ifDefined(this.placeholder)}" value-state="${ifDefined(this._dialogInputValueState)}" ?show-clear-icon="${this.showClearIcon}" ?no-typeahead="${this.noTypeahead}">${repeat(this._filteredItems, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-input", tags, suffix)}><${scopeTag("ui5-toggle-button", tags, suffix)} slot="header" class="ui5-multi-combobox-toggle-button" icon="multiselect-all" design="Transparent" ?pressed=${this._showAllItemsButtonPressed} @click="${this.filterSelectedItems}" accessible-name="${ifDefined(this._showSelectedButtonAccessibleNameText)}"></${scopeTag("ui5-toggle-button", tags, suffix)}></div></div>${this.hasValueStateMessage ? block3.call(this, context, tags, suffix) : undefined}${this.showSelectAll ? block7.call(this, context, tags, suffix) : undefined}` : html `<div slot="header" class="ui5-responsive-popover-header" style="${styleMap(this.styles.popoverHeader)}"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.handleCancel}"></ui5-button></div><div class="row"><ui5-input @ui5-input="${ifDefined(this._handleMobileInput)}" @ui5-change="${ifDefined(this._mobileInputChange)}" placeholder="${ifDefined(this.placeholder)}" value-state="${ifDefined(this._dialogInputValueState)}" ?show-clear-icon="${this.showClearIcon}" ?no-typeahead="${this.noTypeahead}">${repeat(this._filteredItems, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</ui5-input><ui5-toggle-button slot="header" class="ui5-multi-combobox-toggle-button" icon="multiselect-all" design="Transparent" ?pressed=${this._showAllItemsButtonPressed} @click="${this.filterSelectedItems}" accessible-name="${ifDefined(this._showSelectedButtonAccessibleNameText)}"></ui5-toggle-button></div></div>${this.hasValueStateMessage ? block3.call(this, context, tags, suffix) : undefined}${this.showSelectAll ? block7.call(this, context, tags, suffix) : undefined}`; }
function block2(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-suggestion-item", tags, suffix)} text="${ifDefined(item.text)}" additional-text="${ifDefined(item.additionalText)}"></${scopeTag("ui5-suggestion-item", tags, suffix)}>` : html `<ui5-suggestion-item text="${ifDefined(item.text)}" additional-text="${ifDefined(item.additionalText)}"></ui5-suggestion-item>`; }
function block3(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverValueStateMessage)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block4.call(this, context, tags, suffix) : block5.call(this, context, tags, suffix)}</div>` : html `<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block4.call(this, context, tags, suffix) : block5.call(this, context, tags, suffix)}</div>`; }
function block4(context, tags, suffix) { return html `${ifDefined(this.valueStateDefaultText)}`; }
function block5(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block6.call(this, context, tags, suffix, item, index))}`; }
function block6(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
function block7(context, tags, suffix) { return suffix ? html `<div class="ui5-mcb-select-all-header" @keydown="${this._onListHeaderKeydown}" tabindex="0"><${scopeTag("ui5-checkbox", tags, suffix)} ?checked=${this._allSelected} class="ui5-mcb-select-all-checkbox" text="${ifDefined(this.selectAllCheckboxLabel)}" @ui5-change="${ifDefined(this._handleSelectAllCheckboxClick)}"></${scopeTag("ui5-checkbox", tags, suffix)}></div>` : html `<div class="ui5-mcb-select-all-header" @keydown="${this._onListHeaderKeydown}" tabindex="0"><ui5-checkbox ?checked=${this._allSelected} class="ui5-mcb-select-all-checkbox" text="${ifDefined(this.selectAllCheckboxLabel)}" @ui5-change="${ifDefined(this._handleSelectAllCheckboxClick)}"></ui5-checkbox></div>`; }
function block8(context, tags, suffix) { return html `${this.hasValueStateMessage ? block9.call(this, context, tags, suffix) : undefined}${this.showSelectAll ? block13.call(this, context, tags, suffix) : undefined}`; }
function block9(context, tags, suffix) { return suffix ? html `<div slot="header" @keydown="${this._onListHeaderKeydown}" tabindex="0" class="ui5-responsive-popover-header ${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.popoverValueStateMessage)}><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block10.call(this, context, tags, suffix) : block11.call(this, context, tags, suffix)}</div>` : html `<div slot="header" @keydown="${this._onListHeaderKeydown}" tabindex="0" class="ui5-responsive-popover-header ${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.popoverValueStateMessage)}><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block10.call(this, context, tags, suffix) : block11.call(this, context, tags, suffix)}</div>`; }
function block10(context, tags, suffix) { return html `${ifDefined(this.valueStateDefaultText)}`; }
function block11(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block12.call(this, context, tags, suffix, item, index))}`; }
function block12(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
function block13(context, tags, suffix) { return suffix ? html `<div class="ui5-mcb-select-all-header" @keydown="${this._onListHeaderKeydown}" tabindex="0"><${scopeTag("ui5-checkbox", tags, suffix)} ?checked=${this._allSelected} class="ui5-mcb-select-all-checkbox" text="${ifDefined(this.selectAllCheckboxLabel)}" @ui5-change="${ifDefined(this._handleSelectAllCheckboxClick)}"></${scopeTag("ui5-checkbox", tags, suffix)}></div>` : html `<div class="ui5-mcb-select-all-header" @keydown="${this._onListHeaderKeydown}" tabindex="0"><ui5-checkbox ?checked=${this._allSelected} class="ui5-mcb-select-all-checkbox" text="${ifDefined(this.selectAllCheckboxLabel)}" @ui5-change="${ifDefined(this._handleSelectAllCheckboxClick)}"></ui5-checkbox></div>`; }
function block14(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-list", tags, suffix)} separators="None" selection-mode="Multiple" class="ui5-multi-combobox-all-items-list">${repeat(this.selectedItems, (item, index) => item._id || index, (item, index) => block15.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}>` : html `<ui5-list separators="None" selection-mode="Multiple" class="ui5-multi-combobox-all-items-list">${repeat(this.selectedItems, (item, index) => item._id || index, (item, index) => block15.call(this, context, tags, suffix, item, index))}</ui5-list>`; }
function block15(context, tags, suffix, item, index) { return html `${item.isGroupItem ? block16.call(this, context, tags, suffix, item, index) : block19.call(this, context, tags, suffix, item, index)}`; }
function block16(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li-group", tags, suffix)} header-text="${ifDefined(item.text)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${repeat(item.items, (item, index) => item._id || index, (item, index) => block17.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-li-group", tags, suffix)}>` : html `<ui5-li-group header-text="${ifDefined(item.text)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${repeat(item.items, (item, index) => item._id || index, (item, index) => block17.call(this, context, tags, suffix, item, index))}</ui5-li-group>`; }
function block17(context, tags, suffix, item, index) { return html `${item._isVisible ? block18.call(this, context, tags, suffix, item, index) : undefined}`; }
function block18(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</ui5-li>`; }
function block19(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</ui5-li>`; }
function block20(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-list", tags, suffix)} separators="None" selection-mode="Multiple" class="ui5-multi-combobox-all-items-list">${repeat(this._filteredItems, (item, index) => item._id || index, (item, index) => block21.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}>` : html `<ui5-list separators="None" selection-mode="Multiple" class="ui5-multi-combobox-all-items-list">${repeat(this._filteredItems, (item, index) => item._id || index, (item, index) => block21.call(this, context, tags, suffix, item, index))}</ui5-list>`; }
function block21(context, tags, suffix, item, index) { return html `${item.isGroupItem ? block22.call(this, context, tags, suffix, item, index) : block25.call(this, context, tags, suffix, item, index)}`; }
function block22(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li-group", tags, suffix)} header-text="${ifDefined(item.text)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${repeat(item.items, (item, index) => item._id || index, (item, index) => block23.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-li-group", tags, suffix)}>` : html `<ui5-li-group header-text="${ifDefined(item.text)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${repeat(item.items, (item, index) => item._id || index, (item, index) => block23.call(this, context, tags, suffix, item, index))}</ui5-li-group>`; }
function block23(context, tags, suffix, item, index) { return html `${item._isVisible ? block24.call(this, context, tags, suffix, item, index) : undefined}`; }
function block24(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</ui5-li>`; }
function block25(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</ui5-li>`; }
function block26(context, tags, suffix) { return suffix ? html `<div slot="footer" class="ui5-responsive-popover-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this.handleOK}">${ifDefined(this._dialogOkButton)}</${scopeTag("ui5-button", tags, suffix)}></div>` : html `<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this.handleOK}">${ifDefined(this._dialogOkButton)}</ui5-button></div>`; }
function block27(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-popover", tags, suffix)} skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}" tabindex="-1"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block28.call(this, context, tags, suffix) : block29.call(this, context, tags, suffix)}</div></${scopeTag("ui5-popover", tags, suffix)}>` : html `<ui5-popover skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}" tabindex="-1"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block28.call(this, context, tags, suffix) : block29.call(this, context, tags, suffix)}</div></ui5-popover>`; }
function block28(context, tags, suffix) { return html `${ifDefined(this.valueStateDefaultText)}`; }
function block29(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block30.call(this, context, tags, suffix, item, index))}`; }
function block30(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
export default block0;
//# sourceMappingURL=MultiComboBoxPopoverTemplate.lit.js.map