import "@ui5/webcomponents-base/dist/features/OpenUI5Support.js";
import "./Assets.js";
import "@ui5/webcomponents-icons/dist/Assets.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-icons-tnt/dist/Assets.js";
import "@ui5/webcomponents-icons-tnt/dist/AllIcons.js";
import "@ui5/webcomponents-icons-business-suite/dist/Assets.js";
import "@ui5/webcomponents-icons-business-suite/dist/AllIcons.js";
import "@ui5/webcomponents-base/dist/features/F6Navigation.js";
import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";
import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";
import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";
import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import * as defaultTexts from "./generated/i18n/i18n-defaults.js";
declare const testAssets: {
    configuration: {
        getAnimationMode: () => "none" | "full" | "basic" | "minimal";
        setAnimationMode: (animationMode: "none" | "full" | "basic" | "minimal") => void;
        getTheme: () => string;
        setTheme: (theme: string) => Promise<void>;
        getThemeRoot: () => string | undefined;
        setThemeRoot: (themeRoot: string) => Promise<void> | undefined;
        isLegacyThemeFamily: () => boolean;
        getLanguage: () => string | undefined;
        setLanguage: (language: string) => Promise<void>;
        setNoConflict: (noConflictData: boolean | {
            events: string[];
        }) => void;
        getFirstDayOfWeek: () => number | undefined;
        getTimezone: () => string | undefined;
        setTimezone: (timezone: string) => void;
    };
    invisibleMessage: {
        announce: (message: string, mode: import("@ui5/webcomponents-base/dist/types/InvisibleMessageMode.js").default) => void;
    };
    getLocaleData: (lang: string) => Promise<import("@ui5/webcomponents-localization/dist/LocaleData.js").default>;
    applyDirection: () => Promise<void>;
    attachDirectionChange: (listener: () => void) => void;
    ResizeHandler: typeof ResizeHandler;
    addCustomCSS: (tag: string, css: string) => Promise<void>;
    attachThemeLoaded: (listener: (theme: string) => void) => void;
    detachThemeLoaded: (listener: (theme: string) => void) => void;
    getIconNames: () => Promise<string[]>;
    getIconAccessibleName: (name: string) => Promise<string | undefined>;
    renderFinished: () => Promise<void>;
    defaultTexts: typeof defaultTexts;
    getEffectiveIconCollection: (collectionName?: string | undefined) => string;
    ignoreCustomElements: (tagPrefix: string) => void;
    shouldIgnoreCustomElement: (tag: string) => boolean;
};
export default testAssets;
