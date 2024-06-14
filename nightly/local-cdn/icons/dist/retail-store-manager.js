import { isLegacyThemeFamilyAsync } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/retail-store-manager.js";
import { pathData as pathDatav5 } from "./v5/retail-store-manager.js";

const getPathData = async() => {
	return await isLegacyThemeFamilyAsync() ? pathDatav4 : pathDatav5;
};

export default "retail-store-manager";
export { getPathData, ltr, accData };