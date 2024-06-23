import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/SideNavigationPopover.css.ts", content: `.ui5-side-navigation-popover{--_ui5-v2-0-0-rc-5_popover_box_shadow: var(--_ui5-v2-0-0-rc-5_side_navigation_popup_box_shadow)}.ui5-side-navigation-popover::part(content){padding:0}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}
` };
export default styleData;
//# sourceMappingURL=SideNavigationPopover.css.js.map