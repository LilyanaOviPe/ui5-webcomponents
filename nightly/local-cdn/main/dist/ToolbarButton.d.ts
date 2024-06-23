import type { ButtonAccessibilityAttributes } from "./Button.js";
import ButtonDesign from "./types/ButtonDesign.js";
import ToolbarItem from "./ToolbarItem.js";
import type { IEventOptions } from "./ToolbarItem.js";
import ToolbarButtonTemplate from "./generated/templates/ToolbarButtonTemplate.lit.js";
import ToolbarPopoverButtonTemplate from "./generated/templates/ToolbarPopoverButtonTemplate.lit.js";
type ToolbarButtonAccessibilityAttributes = ButtonAccessibilityAttributes;
/**
 * @class
 *
 * ### Overview
 * The `ui5-toolbar-button` represents an abstract action,
 * used in the `ui5-toolbar`.
 *
 * ### ES6 Module Import
 * `import "@ui5/webcomponents/dist/ToolbarButton.js";`
 * @constructor
 * @abstract
 * @extends ToolbarItem
 * @public
 * @since 1.17.0
 */
declare class ToolbarButton extends ToolbarItem {
    /**
     * Defines if the action is disabled.
     *
     * **Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.
     * @default false
     * @public
     */
    disabled: boolean;
    /**
     * Defines the action design.
     * @default "Default"
     * @public
     */
    design: `${ButtonDesign}`;
    /**
     * Defines the `icon` source URI.
     *
     * **Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
     * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @default ""
     * @public
     */
    icon: string;
    /**
     * Defines the icon, displayed as graphical element within the component after the button text.
     *
     * **Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.
     * Usage of `endIcon` only should be avoided.
     *
     * The SAP-icons font provides numerous options.
     *
     * Example:
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @default ""
     * @public
     */
    endIcon: string;
    /**
     * Defines the tooltip of the component.
     *
     * **Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.
     * @default ""
     * @public
     */
    tooltip: string;
    /**
     * Defines the accessible ARIA name of the component.
     * @default undefined
     * @public
     */
    accessibleName?: string;
    /**
     * Receives id(or many ids) of the elements that label the component.
     * @default ""
     * @public
     */
    accessibleNameRef: string;
    /**
     * Defines the additional accessibility attributes that will be applied to the component.
     *
     * The following fields are supported:
     *
     * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
     * Accepts the following string values: `true` or `false`
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     *
     * - **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
     * Accepts a lowercase string value.
     *
     * @default {}
     * @public
     */
    accessibilityAttributes: ToolbarButtonAccessibilityAttributes;
    /**
     * Button text
     * @public
     * @default ""
     */
    text: string;
    /**
     * Defines the width of the button.
     *
     * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
     * @default undefined
     * @public
     */
    width?: string;
    get styles(): {
        width: string | undefined;
        display: string;
    };
    get containsText(): boolean;
    static get toolbarTemplate(): typeof ToolbarButtonTemplate;
    static get toolbarPopoverTemplate(): typeof ToolbarPopoverButtonTemplate;
    get subscribedEvents(): Map<string, IEventOptions>;
}
export default ToolbarButton;
export type { ToolbarButtonAccessibilityAttributes, };