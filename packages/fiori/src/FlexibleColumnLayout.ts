import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import Float from "@ui5/webcomponents-base/dist/types/Float.js";
import type AriaLandmarkRole from "@ui5/webcomponents-base/dist/types/AriaLandmarkRole.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import AnimationMode from "@ui5/webcomponents-base/dist/types/AnimationMode.js";
import { getAnimationMode } from "@ui5/webcomponents-base/dist/config/AnimationMode.js";
import Button from "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-left.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-right.js";
import FCLLayout from "./types/FCLLayout.js";
import type { LayoutConfiguration } from "./fcl-utils/FCLLayout.js";
import {
	getLayoutsByMedia,
	getNextLayoutByStartArrow,
	getNextLayoutByEndArrow,
} from "./fcl-utils/FCLLayout.js";

// Texts
import {
	FCL_START_COLUMN_TXT,
	FCL_MIDDLE_COLUMN_TXT,
	FCL_END_COLUMN_TXT,
	FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP,
	FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP,
	FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP,
	FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP,
} from "./generated/i18n/i18n-defaults.js";

// Template
import FlexibleColumnLayoutTemplate from "./generated/templates/FlexibleColumnLayoutTemplate.lit.js";

// Styles
import FlexibleColumnLayoutCss from "./generated/themes/FlexibleColumnLayout.css.js";

enum MEDIA {
	PHONE = "phone",
	TABLET = "tablet",
	DESKTOP = "desktop",
}

const BREAKPOINTS = {
	"PHONE": 599,
	"TABLET": 1023,
} as const;

type FlexibleColumnLayoutColumnLayout = Array<string | number>;

type FlexibleColumnLayoutLayoutChangeEventDetail = {
	layout: `${FCLLayout}`,
	columnLayout: FlexibleColumnLayoutColumnLayout,
	startColumnVisible: boolean,
	midColumnVisible: boolean,
	endColumnVisible: boolean,
	arrowUsed: boolean,
	arrowsUsed: boolean,
	resize: boolean,
};

type FCLAccessibilityRoles = Extract<Lowercase<AriaLandmarkRole>, "none" | "complementary" | "contentinfo" | "main" | "region">
type FCLAccessibilityAttributes = {
	startColumn?: {
		role: FCLAccessibilityRoles,
		name: string,
	},
	midColumn?: {
		role: FCLAccessibilityRoles,
		name: string,
	},
	endColumn?: {
		role: FCLAccessibilityRoles,
		name: string,
	},
	startArrowContainer?: {
		role: FCLAccessibilityRoles,
		name: string,
	},
	endArrowContainer?: {
		role: FCLAccessibilityRoles,
		name: string,
	},
	startArrowLeft?: {
		name: string,
	},
	startArrowRight?: {
		name: string,
	},
	endArrowLeft?: {
		name: string,
	},
	endArrowRight?: {
		name: string,
	},
}

/**
 * @class
 *
 * ### Overview
 *
 * The `FlexibleColumnLayout` implements the list-detail-detail paradigm by displaying up to three pages in separate columns.
 * There are several possible layouts that can be changed either with the component API, or by pressing the arrows, displayed between the columns.
 *
 * ### Usage
 *
 * Use this component for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.).
 * The Component is flexible in a sense that the application can focus the user's attention on one particular column.
 *
 * ### Responsive Behavior
 *
 * The `FlexibleColumnLayout` automatically displays the maximum possible number of columns based on `layout` property and the window size.
 * The component would display 1 column for window size smaller than 599px, up to two columns between 599px and 1023px,
 * and 3 columns for sizes bigger than 1023px.
 *
 * ### Keyboard Handling
 *
 * #### Basic Navigation
 *
 * - [Space] / [Enter] or [Return] - If focus is on the layout toggle button (arrow button), once activated, it triggers the associated action (such as expand/collapse the column).
 * - This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * #### Fast Navigation
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js";`
 * @constructor
 * @extends UI5Element
 * @public
 * @since 1.0.0-rc.8
 */
@customElement({
	tag: "ui5-flexible-column-layout",
	fastNavigation: true,
	renderer: litRender,
	styles: FlexibleColumnLayoutCss,
	template: FlexibleColumnLayoutTemplate,
	dependencies: [Button],
})

/**
 * Fired when the layout changes via user interaction by clicking the arrows
 * or by changing the component size due to resizing.
 * @param {FCLLayout} layout The current layout
 * @param {array} columnLayout The effective column layout, f.e [67%, 33%, 0]
 * @param {boolean} startColumnVisible Indicates if the start column is currently visible
 * @param {boolean} midColumnVisible Indicates if the middle column is currently visible
 * @param {boolean} endColumnVisible Indicates if the end column is currently visible
 * @param {boolean} arrowsUsed Indicates if the layout is changed via the arrows
 * @param {boolean} resize Indicates if the layout is changed via resizing
 * @public
 */
@event<FlexibleColumnLayoutLayoutChangeEventDetail>("layout-change", {
	detail: {
		/**
		* @public
		*/
		layout: { type: FCLLayout },
		/**
		* @public
		*/
		columnLayout: { type: Array },
		/**
		* @public
		*/
		startColumnVisible: { type: Boolean },
		/**
		* @public
		*/
		midColumnVisible: { type: Boolean },
		/**
		* @public
		*/
		endColumnVisible: { type: Boolean },
		/**
		* @public
		*/
		arrowsUsed: { type: Boolean },
		/**
		 * @public
		*/
		resize: { type: Boolean },
		/**
		 * @private
		*/
		arrowUsed: { type: Boolean },
	},
})
class FlexibleColumnLayout extends UI5Element {
	/**
	* Defines the columns layout and their proportion.
	*
	* **Note:** The layout also depends on the screen size - one column for screens smaller than 599px,
	* two columns between 599px and 1023px and three columns for sizes bigger than 1023px.
	*
	* **For example:** layout=`TwoColumnsStartExpanded` means the layout will display up to two columns
	* in 67%/33% proportion.
	* @default "OneColumn"
	* @public
	*/
	@property({ type: FCLLayout, defaultValue: FCLLayout.OneColumn })
	layout!: `${FCLLayout}`;

	/**
	* Defines the visibility of the arrows,
	* used for expanding and shrinking the columns.
	* @default false
	* @public
	* @since 1.0.0-rc.15
	*/
	@property({ type: Boolean })
	hideArrows!: boolean;

	/**
	* Defines additional accessibility attributes on different areas of the component.
	*
	* The accessibilityAttributes object has the following fields,
	* where each field is an object supporting one or more accessibility attributes:
	*
	*  - **startColumn**: `startColumn.role` and `startColumn.name`.
	*  - **midColumn**: `midColumn.role` and `midColumn.name`.
	*  - **endColumn**: `endColumn.role` and `endColumn.name`.
	*  - **startArrowContainer**: `startArrowContainer.role` and `startArrowContainer.name`.
	*  - **endArrowContainer**: `endArrowContainerrole.role` and `endArrowContainer.name`.
	*  - **startArrowLeft**: `startArrowLeft.name`.
	*  - **startArrowRight**: `startArrowRight.name`.
	*  - **endArrowLeft**: `endArrowLeft.name`.
	*  - **endArrowRight**: `endArrowRight.name`.
	*
	* The accessibility attributes support the following values:
	*
	* - **role**: Defines the accessible ARIA landmark role of the area.
	* Accepts the following values: `none`, `complementary`, `contentinfo`, `main` or `region`.
	*
	* - **name**: Defines the accessible ARIA name of the area.
	* Accepts any string.
	*
	* @default {}
	* @public
	* @since 2.0.0
	*/
	@property({ type: Object })
	accessibilityAttributes!: FCLAccessibilityAttributes;

	/**
	* Defines the component width in px.
	* @default 0
	* @private
	*/
	@property({ validator: Float, defaultValue: 0 })
	_width!: number;

	/**
	* Defines the effective columns layout,
	* based on both the `layout` property and the screen size.
	* Example: [67%, 33%, 0], [25%, 50%, 25%], etc.
	* @default undefined
	* @private
	*/
	@property({ type: Object, defaultValue: undefined })
	_columnLayout?: FlexibleColumnLayoutColumnLayout;

	/**
	* Defines the visible columns count - 1, 2 or 3.
	* @default 1
	* @private
	*/
	@property({ validator: Integer, defaultValue: 0 })
	_visibleColumns!: number;

	/**
	* Allows the user to replace the whole layouts configuration
	* @private
	*/
	@property({ type: Object, defaultValue: undefined })
	_layoutsConfiguration?: LayoutConfiguration;

	/**
	* Defines the content in the start column.
	* @public
	*/
	@slot()
	startColumn!: Array<HTMLElement>;

	/**
	* Defines the content in the middle column.
	* @public
	*/
	@slot()
	midColumn!: Array<HTMLElement>;

	/**
	* Defines the content in the end column.
	* @public
	*/
	@slot()
	endColumn!: Array<HTMLElement>;

	initialRendering: boolean;
	_handleResize: () => void;
	static i18nBundle: I18nBundle;
	_prevLayout: `${FCLLayout}` | null;

	constructor() {
		super();

		this._prevLayout = null;
		this.initialRendering = true;
		this._handleResize = this.handleResize.bind(this);
	}

	static async onDefine() {
		FlexibleColumnLayout.i18nBundle = await getI18nBundle("@ui5/webcomponents-fiori");
	}

	static get ANIMATION_DURATION() {
		return getAnimationMode() !== AnimationMode.None ? 560 : 0;
	}

	onEnterDOM() {
		ResizeHandler.register(this, this._handleResize.bind(this));
	}

	onExitDOM() {
		ResizeHandler.deregister(this, this._handleResize);
	}

	onAfterRendering() {
		if (this.initialRendering) {
			this.handleInitialRendering();
			return;
		}

		this.syncLayout();
	}

	handleInitialRendering() {
		this._prevLayout = this.layout;
		this.updateLayout();
		this.initialRendering = false;
	}

	handleResize() {
		if (this.initialRendering) {
			return;
		}

		// store the previous layout
		const prevLayoutHash = this.columnLayout!.join();

		// update the column layout, based on the current width
		this.updateLayout();

		// fire layout-change if the column layout changed
		if (prevLayoutHash !== this.columnLayout!.join()) {
			this.fireLayoutChange(false, true);
		}
	}

	startArrowClick() {
		this.arrowClick({ start: true, end: false });
	}

	endArrowClick() {
		this.arrowClick({ start: false, end: true });
	}

	arrowClick(options: { start: boolean, end: boolean }) {
		// update public property
		this.layout = this.nextLayout(this.layout, { start: options.start, end: options.end })!;

		// update layout
		this.updateLayout();

		// fire layout-change
		this.fireLayoutChange(true, false);
	}

	updateLayout() {
		this._width = this.widthDOM;
		this._columnLayout = this.nextColumnLayout(this.layout);
		this._visibleColumns = this.calcVisibleColumns(this._columnLayout);
		this.toggleColumns();
	}

	syncLayout() {
		if (this._prevLayout !== this.layout) {
			this.updateLayout();
			this._prevLayout = this.layout;
		}
	}

	toggleColumns() {
		this.toggleColumn("start");
		this.toggleColumn("mid");
		this.toggleColumn("end");
	}

	toggleColumn(column: string) {
		let columnWidth;
		let columnDOM;

		if (column === "start") {
			columnWidth = this.startColumnWidth;
			columnDOM = this.startColumnDOM;
		} else if (column === "mid") {
			columnWidth = this.midColumnWidth;
			columnDOM = this.midColumnDOM;
		} else {
			columnWidth = this.endColumnWidth;
			columnDOM = this.endColumnDOM;
		}

		const currentlyHidden = this._isColumnHidden(columnWidth);
		const previouslyHidden = this._isColumnHidden(columnDOM.style.width);

		// no change
		if (currentlyHidden && previouslyHidden) {
			return;
		}

		// column resizing: from 33% to 67%, from 25% to 50%, etc.
		if (!currentlyHidden && !previouslyHidden) {
			columnDOM.style.width = typeof columnWidth === "number" ? `${columnWidth}px` : columnWidth;
			return;
		}

		// hide column: 33% to 0, 25% to 0, etc .
		if (currentlyHidden) {
			// animate the width
			columnDOM.style.width = typeof columnWidth === "number" ? `${columnWidth}px` : columnWidth;

			// hide column with delay to allow the animation runs entirely
			columnDOM.addEventListener("transitionend", this.columnResizeHandler);

			return;
		}

		// show column: from 0 to 33%, from 0 to 25%, etc.
		if (previouslyHidden) {
			columnDOM.removeEventListener("transitionend", this.columnResizeHandler);
			columnDOM.classList.remove("ui5-fcl-column--hidden");
			columnDOM.style.width = typeof columnWidth === "number" ? `${columnWidth}px` : columnWidth;
		}
	}

	columnResizeHandler = (e: Event) => {
		(e.target as HTMLElement).classList.add("ui5-fcl-column--hidden");
	}

	nextLayout(layout: `${FCLLayout}`, arrowsInfo: { start: boolean, end: boolean }) {
		if (!arrowsInfo) {
			return;
		}

		if (arrowsInfo.start) {
			return getNextLayoutByStartArrow()[layout as keyof typeof getNextLayoutByStartArrow];
		}

		if (arrowsInfo.end) {
			return getNextLayoutByEndArrow()[layout as keyof typeof getNextLayoutByEndArrow];
		}
	}

	nextColumnLayout(layout: `${FCLLayout}`) {
		return this._effectiveLayoutsByMedia[this.media][layout].layout;
	}

	calcVisibleColumns(colLayout: FlexibleColumnLayoutColumnLayout) {
		return colLayout.filter(colWidth => !this._isColumnHidden(colWidth)).length;
	}

	fireLayoutChange(arrowUsed: boolean, resize: boolean) {
		this.fireEvent<FlexibleColumnLayoutLayoutChangeEventDetail>("layout-change", {
			layout: this.layout,
			columnLayout: this._columnLayout!,
			startColumnVisible: this.startColumnVisible,
			midColumnVisible: this.midColumnVisible,
			endColumnVisible: this.endColumnVisible,
			arrowUsed, // for backwards compatibility
			arrowsUsed: arrowUsed, // as documented
			resize,
		});
	}

	/**
	 * Checks if a column is hidden based on its width.
	 */
	private _isColumnHidden(columnWidth: number | string): boolean {
		return columnWidth === 0 || columnWidth === "0px";
	}

	/**
	* Returns the current column layout, based on both the `layout` property and the screen size.
	*
	* **For example:** ["67%", "33%", 0], ["100%", 0, 0], ["25%", "50%", "25%"], etc,
	* where the numbers represents the width of the start, middle and end columns.
	* @default undefined
	* @public
	*/
	get columnLayout(): FlexibleColumnLayoutColumnLayout | undefined {
		return this._columnLayout;
	}

	/**
	* Returns if the `start` column is visible.
	* @default true
	* @public
	*/
	get startColumnVisible(): boolean {
		if (this._columnLayout) {
			return !this._isColumnHidden(this._columnLayout[0]);
		}

		return false;
	}

	/**
	* Returns if the `middle` column is visible.
	* @default false
	* @public
	*/
	get midColumnVisible(): boolean {
		if (this._columnLayout) {
			return !this._isColumnHidden(this._columnLayout[1]);
		}

		return false;
	}

	/**
	* Returns if the `end` column is visible.
	* @default false
	* @public
	*/
	get endColumnVisible(): boolean {
		if (this._columnLayout) {
			return !this._isColumnHidden(this._columnLayout[2]);
		}

		return false;
	}

	/**
	* Returns the number of currently visible columns.
	* @default 1
	* @public
	*/
	get visibleColumns(): number {
		return this._visibleColumns;
	}

	get classes() {
		const hasAnimation = getAnimationMode() !== AnimationMode.None;

		return {
			root: {
				"ui5-fcl-root": true,
			},
			columns: {
				start: {
					"ui5-fcl-column": true,
					"ui5-fcl-column-animation": hasAnimation,
					"ui5-fcl-column--start": true,
				},
				middle: {
					"ui5-fcl-column": true,
					"ui5-fcl-column-animation": hasAnimation,
					"ui5-fcl-column--middle": true,
				},
				end: {
					"ui5-fcl-column": true,
					"ui5-fcl-column-animation": hasAnimation,
					"ui5-fcl-column--end": true,
				},
			},
		};
	}

	get styles() {
		return {
			arrowsContainer: {
				start: {
					display: this.showStartSeparator ? "flex" : "none",
				},
				end: {
					display: this.showEndSeparator ? "flex" : "none",
				},
			},
			arrows: {
				start: {
					display: this.showStartArrow ? "inline-block" : "none",
					transform: this.startArrowDirection === "mirror" ? "rotate(180deg)" : "",
				},
				end: {
					display: this.showEndArrow ? "inline-block" : "none",
					transform: this.endArrowDirection === "mirror" ? "rotate(180deg)" : "",
				},
			},
		};
	}

	get startColumnWidth() {
		return this._columnLayout ? this._columnLayout[0] : "100%";
	}

	get midColumnWidth() {
		return this._columnLayout ? this._columnLayout[1] : "0px";
	}

	get endColumnWidth() {
		return this._columnLayout ? this._columnLayout[2] : "0px";
	}

	get showStartSeparator() {
		return this.effectiveArrowsInfo[0].separator || this.startArrowVisibility;
	}

	get showEndSeparator() {
		return this.effectiveArrowsInfo[1].separator || this.endArrowVisibility;
	}

	get showStartArrow() {
		return this.hideArrows ? false : this.startArrowVisibility;
	}

	get showEndArrow() {
		return this.hideArrows ? false : this.endArrowVisibility;
	}

	get startArrowVisibility() {
		return this.effectiveArrowsInfo[0].visible;
	}

	get endArrowVisibility() {
		return this.effectiveArrowsInfo[1].visible;
	}

	get startArrowDirection() {
		return this.effectiveArrowsInfo[0].dir;
	}

	get endArrowDirection() {
		return this.effectiveArrowsInfo[1].dir;
	}

	get effectiveArrowsInfo() {
		return this._effectiveLayoutsByMedia[this.media][this.layout].arrows;
	}

	get media() {
		if (this._width <= BREAKPOINTS.PHONE) {
			return MEDIA.PHONE;
		}

		if (this._width <= BREAKPOINTS.TABLET) {
			return MEDIA.TABLET;
		}

		return MEDIA.DESKTOP;
	}

	get widthDOM() {
		return this.getBoundingClientRect().width;
	}

	get startColumnDOM() {
		return this.shadowRoot!.querySelector<HTMLElement>(".ui5-fcl-column--start")!;
	}

	get midColumnDOM() {
		return this.shadowRoot!.querySelector<HTMLElement>(".ui5-fcl-column--middle")!;
	}

	get endColumnDOM() {
		return this.shadowRoot!.querySelector<HTMLElement>(".ui5-fcl-column--end")!;
	}

	get accStartColumnText() {
		return this.accessibilityAttributes.startColumn?.name || FlexibleColumnLayout.i18nBundle.getText(FCL_START_COLUMN_TXT);
	}

	get accMiddleColumnText() {
		return this.accessibilityAttributes.midColumn?.name || FlexibleColumnLayout.i18nBundle.getText(FCL_MIDDLE_COLUMN_TXT);
	}

	get accEndColumnText() {
		return this.accessibilityAttributes.endColumn?.name || FlexibleColumnLayout.i18nBundle.getText(FCL_END_COLUMN_TXT);
	}

	get accStartArrowContainerText() {
		return this.accessibilityAttributes.startArrowContainer?.name || undefined;
	}

	get accEndArrowContainerText() {
		return this.accessibilityAttributes.endArrowContainer?.name || undefined;
	}

	get accStartColumnRole() {
		if (this.startColumnVisible) {
			return this.accessibilityAttributes.startColumn?.role || "region";
		}
		return undefined;
	}

	get accMiddleColumnRole() {
		if (this.midColumnVisible) {
			return this.accessibilityAttributes.midColumn?.role || "region";
		}
		return undefined;
	}

	get accEndColumnRole() {
		if (this.endColumnVisible) {
			return this.accessibilityAttributes.endColumn?.role || "region";
		}
		return undefined;
	}

	get accStartArrowContainerRole() {
		return this.accessibilityAttributes.startArrowContainer?.role || undefined;
	}

	get accEndArrowContainerRole() {
		return this.accessibilityAttributes.endArrowContainer?.role || undefined;
	}

	get _effectiveLayoutsByMedia() {
		return this._layoutsConfiguration || getLayoutsByMedia();
	}

	get _accAttributes() {
		return {
			columns: {
				start: {
					role: this.accStartColumnRole,
					ariaHidden: !this.startColumnVisible || undefined,
				},
				middle: {
					role: this.accMiddleColumnRole,
					ariaHidden: !this.midColumnVisible || undefined,
				},
				end: {
					role: this.accEndColumnRole,
					ariaHidden: !this.endColumnVisible || undefined,
				},
			},
		};
	}

	get accStartArrowText() {
		const a11yAttrs = this.accessibilityAttributes;

		if (this.startArrowDirection === "mirror") {
			return a11yAttrs.startArrowLeft?.name || FlexibleColumnLayout.i18nBundle.getText(FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP);
		}

		return a11yAttrs.startArrowRight?.name || FlexibleColumnLayout.i18nBundle.getText(FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP);
	}

	get accEndArrowText() {
		const a11yAttrs = this.accessibilityAttributes;

		if (this.endArrowDirection === "mirror") {
			return a11yAttrs.endArrowRight?.name || FlexibleColumnLayout.i18nBundle.getText(FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP);
		}

		return a11yAttrs.endArrowLeft?.name || FlexibleColumnLayout.i18nBundle.getText(FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP);
	}
}

FlexibleColumnLayout.define();

export default FlexibleColumnLayout;

export type {
	MEDIA,
	FlexibleColumnLayoutLayoutChangeEventDetail,
	FCLAccessibilityAttributes,
	FlexibleColumnLayoutColumnLayout,
};
