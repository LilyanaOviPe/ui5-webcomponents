import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "lab";
const pathData = "M485 350q27 29 27 64v7q0 38-26.5 64.5T421 512H91q-38 0-64.5-26.5T0 421v-7q0-35 27-64l121-125q12-12 12-28V51h-38q-11 0-18.5-7T96 26t7.5-18.5T122 0h64q11 0 18 7.5t7 18.5v171q0 35-27 64L64 386q-13 13-13 28v7q0 17 11.5 28.5T91 461h330q17 0 28.5-11.5T461 421v-7q0-14-12-28L329 261q-13-14-20.5-30.5T301 197V26q0-11 7-18.5T326 0h63q11 0 19 7.5t8 18.5-8 18-19 7h-37v146q0 14 12 28zm-229 2q-14 0-23-9t-9-23 9-23 23-9 23 9 9 23-9 23-23 9zm64 64q-14 0-23-9t-9-23 9-23 23-9 23 9 9 23-9 23-23 9zm-160-32q0-14 9-23t23-9 23 9 9 23-9 23-23 9-23-9-9-23z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/lab";
export { pathData, ltr, accData };