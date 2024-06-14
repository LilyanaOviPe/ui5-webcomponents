import { isLegacyThemeFamilyAsync } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav1, ltr, accData } from "./v1/segment-preview-reference-objects.js";
import { pathData as pathDatav2 } from "./v2/segment-preview-reference-objects.js";

const getPathData = async() => {
	return await isLegacyThemeFamilyAsync() ? pathDatav4 : pathDatav5;
};

export default "business-suite/segment-preview-reference-objects";
export { getPathData, ltr, accData };