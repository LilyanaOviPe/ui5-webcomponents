/* eslint no-unused-vars: 0 */
import { html, repeat, classMap, styleMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div class="ui5-multi-combobox-root ui5-input-focusable-element"><span id="ui5-multi-combobox-hiddenText-nMore" class="ui5-hidden-text">${ifDefined(this._tokensCountText)}</span>${this.hasValueState ? block1.call(this, context, tags, suffix) : undefined}<${scopeTag("ui5-tokenizer", tags, suffix)} slot="_beginContent" prevent-popover-open hide-popover-arrow class="ui5-multi-combobox-tokenizer" ?disabled="${this.disabled}" @ui5-show-more-items-press="${ifDefined(this._showFilteredItems)}" .opener=${ifDefined(this.morePopoverOpener)} .popoverMinWidth=${ifDefined(this._inputWidth)} @ui5-token-delete="${ifDefined(this._tokenDelete)}" @ui5-before-more-popover-open="${ifDefined(this.handleBeforeTokenizerPopoverOpen)}" @focusout="${this._tokenizerFocusOut}" @focusin="${this._tokenizerFocusIn}" @click=${this._click} @paste=${this._handlePaste} @keydown="${this._onTokenizerKeydown}" ?expanded="${this._tokenizerExpanded}">${repeat(this.items, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-tokenizer", tags, suffix)}><input id="ui5-multi-combobox-input" .value="${ifDefined(this.value)}" inner-input placeholder=${ifDefined(this._getPlaceholder)} ?disabled=${this.disabled} ?readonly=${this.readonly} value-state="${ifDefined(this.valueState)}" @input="${this._inputLiveChange}" @change=${this._inputChange} @keydown="${this._onkeydown}" @click=${this._click} @focusin=${this.inputFocusIn} @focusout=${this.inputFocusOut} @paste=${this._handlePaste} role="combobox" aria-haspopup="dialog" aria-expanded="${ifDefined(this.open)}" aria-autocomplete="both" aria-describedby="${ifDefined(this.ariaDescribedByText)}" aria-required="${ifDefined(this.required)}" aria-label="${ifDefined(this.ariaLabelText)}" autocomplete="off" data-sap-focus-ref />${this._effectiveShowClearIcon ? block8.call(this, context, tags, suffix) : undefined}${this.icon ? block9.call(this, context, tags, suffix) : undefined}${!this.readonly ? block10.call(this, context, tags, suffix) : undefined}</div><${scopeTag("ui5-responsive-popover", tags, suffix)} placement="Bottom" horizontal-align="Start" class="${classMap(this.classes.popover)}" hide-arrow prevent-initial-focus style="${styleMap(this.styles.suggestionsPopover)}" @ui5-selection-change=${ifDefined(this._listSelectionChange)} @ui5-close=${ifDefined(this._afterClosePicker)} @ui5-before-open=${ifDefined(this._beforeOpen)} @ui5-open=${ifDefined(this._afterOpenPicker)}>${this._isPhone ? block11.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block18.call(this, context, tags, suffix) : undefined}${this.filterSelected ? block24.call(this, context, tags, suffix) : block30.call(this, context, tags, suffix)}${this._isPhone ? block36.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-responsive-popover", tags, suffix)}>${this.hasValueStateMessage ? block37.call(this, context, tags, suffix) : undefined} ` : html `<div class="ui5-multi-combobox-root ui5-input-focusable-element"><span id="ui5-multi-combobox-hiddenText-nMore" class="ui5-hidden-text">${ifDefined(this._tokensCountText)}</span>${this.hasValueState ? block1.call(this, context, tags, suffix) : undefined}<ui5-tokenizer slot="_beginContent" prevent-popover-open hide-popover-arrow class="ui5-multi-combobox-tokenizer" ?disabled="${this.disabled}" @ui5-show-more-items-press="${ifDefined(this._showFilteredItems)}" .opener=${ifDefined(this.morePopoverOpener)} .popoverMinWidth=${ifDefined(this._inputWidth)} @ui5-token-delete="${ifDefined(this._tokenDelete)}" @ui5-before-more-popover-open="${ifDefined(this.handleBeforeTokenizerPopoverOpen)}" @focusout="${this._tokenizerFocusOut}" @focusin="${this._tokenizerFocusIn}" @click=${this._click} @paste=${this._handlePaste} @keydown="${this._onTokenizerKeydown}" ?expanded="${this._tokenizerExpanded}">${repeat(this.items, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</ui5-tokenizer><input id="ui5-multi-combobox-input" .value="${ifDefined(this.value)}" inner-input placeholder=${ifDefined(this._getPlaceholder)} ?disabled=${this.disabled} ?readonly=${this.readonly} value-state="${ifDefined(this.valueState)}" @input="${this._inputLiveChange}" @change=${this._inputChange} @keydown="${this._onkeydown}" @click=${this._click} @focusin=${this.inputFocusIn} @focusout=${this.inputFocusOut} @paste=${this._handlePaste} role="combobox" aria-haspopup="dialog" aria-expanded="${ifDefined(this.open)}" aria-autocomplete="both" aria-describedby="${ifDefined(this.ariaDescribedByText)}" aria-required="${ifDefined(this.required)}" aria-label="${ifDefined(this.ariaLabelText)}" autocomplete="off" data-sap-focus-ref />${this._effectiveShowClearIcon ? block8.call(this, context, tags, suffix) : undefined}${this.icon ? block9.call(this, context, tags, suffix) : undefined}${!this.readonly ? block10.call(this, context, tags, suffix) : undefined}</div><ui5-responsive-popover placement="Bottom" horizontal-align="Start" class="${classMap(this.classes.popover)}" hide-arrow prevent-initial-focus style="${styleMap(this.styles.suggestionsPopover)}" @ui5-selection-change=${ifDefined(this._listSelectionChange)} @ui5-close=${ifDefined(this._afterClosePicker)} @ui5-before-open=${ifDefined(this._beforeOpen)} @ui5-open=${ifDefined(this._afterOpenPicker)}>${this._isPhone ? block11.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block18.call(this, context, tags, suffix) : undefined}${this.filterSelected ? block24.call(this, context, tags, suffix) : block30.call(this, context, tags, suffix)}${this._isPhone ? block36.call(this, context, tags, suffix) : undefined}</ui5-responsive-popover>${this.hasValueStateMessage ? block37.call(this, context, tags, suffix) : undefined} `; }
function block1(context, tags, suffix) { return html `<span id="ui5-multi-combobox-valueStateDesc" class="ui5-hidden-text">${ifDefined(this.ariaValueStateHiddenText)}</span>`; }
function block2(context, tags, suffix, item, index) { return html `${item.isGroupItem ? block3.call(this, context, tags, suffix, item, index) : block6.call(this, context, tags, suffix, item, index)}`; }
function block3(context, tags, suffix, item, index) { return html `${repeat(item.items, (item, index) => item._id || index, (item, index) => block4.call(this, context, tags, suffix, item, index))}`; }
function block4(context, tags, suffix, item, index) { return html `${item.selected ? block5.call(this, context, tags, suffix, item, index) : undefined}`; }
function block5(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-token", tags, suffix)} ?readonly="${this.readonly}" class="ui5-multi-combobox-token" data-ui5-id="${ifDefined(item._id)}" part="token-${index}" text="${ifDefined(item.text)}">` : html `<ui5-token ?readonly="${this.readonly}" class="ui5-multi-combobox-token" data-ui5-id="${ifDefined(item._id)}" part="token-${index}" text="${ifDefined(item.text)}">`; }
function block6(context, tags, suffix, item, index) { return html `${item.selected ? block7.call(this, context, tags, suffix, item, index) : undefined}`; }
function block7(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-token", tags, suffix)} ?readonly="${this.readonly}" class="ui5-multi-combobox-token" data-ui5-id="${ifDefined(item._id)}" part="token-${index}" text="${ifDefined(item.text)}"></${scopeTag("ui5-token", tags, suffix)}>` : html `<ui5-token ?readonly="${this.readonly}" class="ui5-multi-combobox-token" data-ui5-id="${ifDefined(item._id)}" part="token-${index}" text="${ifDefined(item.text)}"></ui5-token>`; }
function block8(context, tags, suffix) { return suffix ? html `<div @click=${this._clear} class="ui5-input-clear-icon-wrapper inputIcon" tabindex="-1" @mousedown=${this._iconMouseDown}><${scopeTag("ui5-icon", tags, suffix)} tabindex="-1" class="ui5-input-clear-icon" name="decline" accessible-name="${ifDefined(this.clearIconAccessibleName)}"></${scopeTag("ui5-icon", tags, suffix)}></div>` : html `<div @click=${this._clear} class="ui5-input-clear-icon-wrapper inputIcon" tabindex="-1" @mousedown=${this._iconMouseDown}><ui5-icon tabindex="-1" class="ui5-input-clear-icon" name="decline" accessible-name="${ifDefined(this.clearIconAccessibleName)}"></ui5-icon></div>`; }
function block9(context, tags, suffix) { return html `<slot name="icon"></slot>`; }
function block10(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} name="slim-arrow-down" class="inputIcon" slot="icon" tabindex="-1" @click="${this.togglePopoverByDropdownIcon}" @mousedown="${this._onIconMousedown}" @focusin="${this._forwardFocusToInner}" ?pressed="${this.open}" accessible-name="${ifDefined(this._iconAccessibleNameText)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon name="slim-arrow-down" class="inputIcon" slot="icon" tabindex="-1" @click="${this.togglePopoverByDropdownIcon}" @mousedown="${this._onIconMousedown}" @focusin="${this._forwardFocusToInner}" ?pressed="${this.open}" accessible-name="${ifDefined(this._iconAccessibleNameText)}"></ui5-icon>`; }
function block11(context, tags, suffix) { return suffix ? html `<div slot="header" class="ui5-responsive-popover-header" style="${styleMap(this.styles.popoverHeader)}"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.handleCancel}"></${scopeTag("ui5-button", tags, suffix)}></div><div class="row"><${scopeTag("ui5-input", tags, suffix)} @ui5-input="${ifDefined(this._handleMobileInput)}" @ui5-change="${ifDefined(this._mobileInputChange)}" placeholder="${ifDefined(this.placeholder)}" value-state="${ifDefined(this._dialogInputValueState)}" ?show-clear-icon="${this.showClearIcon}" ?no-typeahead="${this.noTypeahead}">${repeat(this._filteredItems, (item, index) => item._id || index, (item, index) => block12.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-input", tags, suffix)}><${scopeTag("ui5-toggle-button", tags, suffix)} slot="header" class="ui5-multi-combobox-toggle-button" icon="multiselect-all" design="Transparent" ?pressed=${this._showAllItemsButtonPressed} @click="${this.filterSelectedItems}" accessible-name="${ifDefined(this._showSelectedButtonAccessibleNameText)}"></${scopeTag("ui5-toggle-button", tags, suffix)}></div></div>${this.hasValueStateMessage ? block13.call(this, context, tags, suffix) : undefined}${this.showSelectAll ? block17.call(this, context, tags, suffix) : undefined}` : html `<div slot="header" class="ui5-responsive-popover-header" style="${styleMap(this.styles.popoverHeader)}"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.handleCancel}"></ui5-button></div><div class="row"><ui5-input @ui5-input="${ifDefined(this._handleMobileInput)}" @ui5-change="${ifDefined(this._mobileInputChange)}" placeholder="${ifDefined(this.placeholder)}" value-state="${ifDefined(this._dialogInputValueState)}" ?show-clear-icon="${this.showClearIcon}" ?no-typeahead="${this.noTypeahead}">${repeat(this._filteredItems, (item, index) => item._id || index, (item, index) => block12.call(this, context, tags, suffix, item, index))}</ui5-input><ui5-toggle-button slot="header" class="ui5-multi-combobox-toggle-button" icon="multiselect-all" design="Transparent" ?pressed=${this._showAllItemsButtonPressed} @click="${this.filterSelectedItems}" accessible-name="${ifDefined(this._showSelectedButtonAccessibleNameText)}"></ui5-toggle-button></div></div>${this.hasValueStateMessage ? block13.call(this, context, tags, suffix) : undefined}${this.showSelectAll ? block17.call(this, context, tags, suffix) : undefined}`; }
function block12(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-suggestion-item", tags, suffix)} text="${ifDefined(item.text)}" additional-text="${ifDefined(item.additionalText)}"></${scopeTag("ui5-suggestion-item", tags, suffix)}>` : html `<ui5-suggestion-item text="${ifDefined(item.text)}" additional-text="${ifDefined(item.additionalText)}"></ui5-suggestion-item>`; }
function block13(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverValueStateMessage)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block14.call(this, context, tags, suffix) : block15.call(this, context, tags, suffix)}</div>` : html `<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block14.call(this, context, tags, suffix) : block15.call(this, context, tags, suffix)}</div>`; }
function block14(context, tags, suffix) { return html `${ifDefined(this.valueStateDefaultText)}`; }
function block15(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block16.call(this, context, tags, suffix, item, index))}`; }
function block16(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
function block17(context, tags, suffix) { return suffix ? html `<div class="ui5-mcb-select-all-header" @keydown="${this._onListHeaderKeydown}" tabindex="0"><${scopeTag("ui5-checkbox", tags, suffix)} ?checked=${this._allSelected} class="ui5-mcb-select-all-checkbox" text="${ifDefined(this.selectAllCheckboxLabel)}" @ui5-change="${ifDefined(this._handleSelectAllCheckboxClick)}"></${scopeTag("ui5-checkbox", tags, suffix)}></div>` : html `<div class="ui5-mcb-select-all-header" @keydown="${this._onListHeaderKeydown}" tabindex="0"><ui5-checkbox ?checked=${this._allSelected} class="ui5-mcb-select-all-checkbox" text="${ifDefined(this.selectAllCheckboxLabel)}" @ui5-change="${ifDefined(this._handleSelectAllCheckboxClick)}"></ui5-checkbox></div>`; }
function block18(context, tags, suffix) { return html `${this.hasValueStateMessage ? block19.call(this, context, tags, suffix) : undefined}${this.showSelectAll ? block23.call(this, context, tags, suffix) : undefined}`; }
function block19(context, tags, suffix) { return suffix ? html `<div slot="header" @keydown="${this._onListHeaderKeydown}" tabindex="0" class="ui5-responsive-popover-header ${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.popoverValueStateMessage)}><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block20.call(this, context, tags, suffix) : block21.call(this, context, tags, suffix)}</div>` : html `<div slot="header" @keydown="${this._onListHeaderKeydown}" tabindex="0" class="ui5-responsive-popover-header ${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.popoverValueStateMessage)}><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block20.call(this, context, tags, suffix) : block21.call(this, context, tags, suffix)}</div>`; }
function block20(context, tags, suffix) { return html `${ifDefined(this.valueStateDefaultText)}`; }
function block21(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block22.call(this, context, tags, suffix, item, index))}`; }
function block22(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
function block23(context, tags, suffix) { return suffix ? html `<div class="ui5-mcb-select-all-header" @keydown="${this._onListHeaderKeydown}" tabindex="0"><${scopeTag("ui5-checkbox", tags, suffix)} ?checked=${this._allSelected} class="ui5-mcb-select-all-checkbox" text="${ifDefined(this.selectAllCheckboxLabel)}" @ui5-change="${ifDefined(this._handleSelectAllCheckboxClick)}"></${scopeTag("ui5-checkbox", tags, suffix)}></div>` : html `<div class="ui5-mcb-select-all-header" @keydown="${this._onListHeaderKeydown}" tabindex="0"><ui5-checkbox ?checked=${this._allSelected} class="ui5-mcb-select-all-checkbox" text="${ifDefined(this.selectAllCheckboxLabel)}" @ui5-change="${ifDefined(this._handleSelectAllCheckboxClick)}"></ui5-checkbox></div>`; }
function block24(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-list", tags, suffix)} separators="None" selection-mode="Multiple" class="ui5-multi-combobox-all-items-list">${repeat(this.selectedItems, (item, index) => item._id || index, (item, index) => block25.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}>` : html `<ui5-list separators="None" selection-mode="Multiple" class="ui5-multi-combobox-all-items-list">${repeat(this.selectedItems, (item, index) => item._id || index, (item, index) => block25.call(this, context, tags, suffix, item, index))}</ui5-list>`; }
function block25(context, tags, suffix, item, index) { return html `${item.isGroupItem ? block26.call(this, context, tags, suffix, item, index) : block29.call(this, context, tags, suffix, item, index)}`; }
function block26(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li-group", tags, suffix)} header-text="${ifDefined(item.text)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${repeat(item.items, (item, index) => item._id || index, (item, index) => block27.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-li-group", tags, suffix)}>` : html `<ui5-li-group header-text="${ifDefined(item.text)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${repeat(item.items, (item, index) => item._id || index, (item, index) => block27.call(this, context, tags, suffix, item, index))}</ui5-li-group>`; }
function block27(context, tags, suffix, item, index) { return html `${item._isVisible ? block28.call(this, context, tags, suffix, item, index) : undefined}`; }
function block28(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</ui5-li>`; }
function block29(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</ui5-li>`; }
function block30(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-list", tags, suffix)} separators="None" selection-mode="Multiple" class="ui5-multi-combobox-all-items-list">${repeat(this._filteredItems, (item, index) => item._id || index, (item, index) => block31.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}>` : html `<ui5-list separators="None" selection-mode="Multiple" class="ui5-multi-combobox-all-items-list">${repeat(this._filteredItems, (item, index) => item._id || index, (item, index) => block31.call(this, context, tags, suffix, item, index))}</ui5-list>`; }
function block31(context, tags, suffix, item, index) { return html `${item.isGroupItem ? block32.call(this, context, tags, suffix, item, index) : block35.call(this, context, tags, suffix, item, index)}`; }
function block32(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li-group", tags, suffix)} header-text="${ifDefined(item.text)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${repeat(item.items, (item, index) => item._id || index, (item, index) => block33.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-li-group", tags, suffix)}>` : html `<ui5-li-group header-text="${ifDefined(item.text)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${repeat(item.items, (item, index) => item._id || index, (item, index) => block33.call(this, context, tags, suffix, item, index))}</ui5-li-group>`; }
function block33(context, tags, suffix, item, index) { return html `${item._isVisible ? block34.call(this, context, tags, suffix, item, index) : undefined}`; }
function block34(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</ui5-li>`; }
function block35(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li", tags, suffix)} wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html `<ui5-li wrapping-type="Normal" type="${ifDefined(this._listItemsType)}" additional-text=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}" @keydown="${this._onItemKeydown}">${ifDefined(item.text)}</ui5-li>`; }
function block36(context, tags, suffix) { return suffix ? html `<div slot="footer" class="ui5-responsive-popover-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this.handleOK}">${ifDefined(this._dialogOkButton)}</${scopeTag("ui5-button", tags, suffix)}></div>` : html `<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this.handleOK}">${ifDefined(this._dialogOkButton)}</ui5-button></div>`; }
function block37(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-popover", tags, suffix)} skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}" tabindex="-1"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block38.call(this, context, tags, suffix) : block39.call(this, context, tags, suffix)}</div></${scopeTag("ui5-popover", tags, suffix)}>` : html `<ui5-popover skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}" tabindex="-1"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block38.call(this, context, tags, suffix) : block39.call(this, context, tags, suffix)}</div></ui5-popover>`; }
function block38(context, tags, suffix) { return html `${ifDefined(this.valueStateDefaultText)}`; }
function block39(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block40.call(this, context, tags, suffix, item, index))}`; }
function block40(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
export default block0;
//# sourceMappingURL=MultiComboBoxTemplate.lit.js.map