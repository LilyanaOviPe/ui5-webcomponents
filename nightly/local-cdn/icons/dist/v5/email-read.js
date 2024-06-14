import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "email-read";
const pathData = "M457 82q25 10 40 32.5t15 49.5v258q0 38-26 64t-64 26H90q-38 0-64-26T0 422V164q0-27 15-49.5T55 82L246 2q6-2 10-2t10 2zM75 129q-7 2-11.5 7T56 146l179 116q10 7 21 7 13 0 21-7l179-116q-6-12-19-17L256 53zm347 332q17 0 28-11t11-28V204L305 305q-22 15-49 15-26 0-49-15L51 204v218q0 17 11 28t28 11h332z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/email-read";
export { pathData, ltr, accData };