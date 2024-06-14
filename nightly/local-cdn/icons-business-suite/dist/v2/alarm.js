import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "alarm";
const pathData = "M95.857 373h322c-15-26-28-61-28-105v-54c0-105-44-158-132-158s-134 53-134 158v54c0 44-13 79-28 105zm393 8c8 8 9 20 5 30-4 9-13 16-24 16h-138c-10 30-40 53-74 53-35 0-64-23-75-53h-139c-11 0-20-7-24-16-4-10-3-22 5-30 0 0 46-47 46-113v-54c0-134 69-212 187-212 117 0 185 78 185 212v54c0 66 46 113 46 113z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/alarm";
export { pathData, ltr, accData };