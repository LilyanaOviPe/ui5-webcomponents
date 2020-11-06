import { getSharedResource, getSharedResourcePolicy } from "./SharedResources.js";
import SharedResourceType from "./types/SharedResourceType.js";
import SharedResourceReusePolicy from "./types/SharedResourceReusePolicy.js";
import {
	getCurrentRuntimeIndex,
	compareCurrentRuntimeWith,
} from "./Runtimes.js";

// Used to store already parsed icon names
const parseCache = new Map();

// Local resources
const localRegistry = new Map();
const localIconCollectionPromises = new Map();

// Global resources
const sharedRegistry = getSharedResource("SVGIcons.registry", new Map());
const sharedIconCollectionPromises = getSharedResource("SVGIcons.promises", new Map());

// Functions that determine the right registry/promises to use depending on policy
const getRegistry = policy => { return policy === SharedResourceReusePolicy.Never ? localRegistry : sharedRegistry; };
const getIconCollectionPromises = policy => { return policy === SharedResourceReusePolicy.Never ? localIconCollectionPromises : sharedIconCollectionPromises; };

const ICON_NOT_FOUND = "ICON_NOT_FOUND";
const DEFAULT_COLLECTION = "SAP-icons";

const parseName = name => {
	if (!parseCache.has(name)) {
		// silently support ui5-compatible URIs
		if (name.startsWith("sap-icon://")) {
			name = name.replace("sap-icon://", "");
		}

		let collection;
		[name, collection] = name.split("/").reverse();
		collection = collection || DEFAULT_COLLECTION;
		// hardcoded alias in case icon explorer is used, resolve `SAP-icons-TNT` to `tnt`
		// aliases can be made a feature in the future if more collections need it or more aliases are needed.
		if (collection === "SAP-icons-TNT") {
			collection = "tnt";
		}
		const registryKey = `${collection}/${name}`;
		parseCache.set(name, { collection, registryKey });
	}

	return parseCache.get(name);
};


const registerIcon = (name, { pathData, ltr, accData, collection } = {}) => { // eslint-disable-line
	if (!collection) {
		collection = DEFAULT_COLLECTION;
	}

	const key = `${collection}/${name}`;
	const policy = getSharedResourcePolicy(SharedResourceType.SVGIcons);
	const registry = getRegistry(policy);

	// Never reuse policy - update the local registry
	if (policy === SharedResourceReusePolicy.Never) {
		registry.set(key, { pathData, ltr, accData });
		return;
	}

	// Policy is Always or OnlyNewer - look for the icon in the shared registry
	const iconData = registry.get(key); // check if the icon is already in the shared registry

	// Update the shared registry only if the icon is not there, or it is there, but the current runtime is newer than the icon's runtime, and the reuse policy is OnlyNewer
	if (!iconData || (policy === SharedResourceReusePolicy.OnlyNewer && compareCurrentRuntimeWith(iconData.runtimeIndex) > 0)) {
		const runtimeIndex = getCurrentRuntimeIndex();
		registry.set(key, {
			pathData,
			ltr,
			accData,
			runtimeIndex,
		});
	}
};

const getIconDataSync = nameProp => {
	const { registryKey } = parseName(nameProp);
	const policy = getSharedResourcePolicy(SharedResourceType.SVGIcons);
	const registry = getRegistry(policy);

	const iconData = registry.get(registryKey);

	// Icon not found in the registry - must fetch it
	if (!iconData) {
		return;
	}

	// Never reuse policy - act as before, return the icon from the local registry
	if (policy === SharedResourceReusePolicy.Never) {
		return iconData;
	}

	// Return the icon if policy is Always reuse (no matter what version) or policy is OnlyNewer and the current runtime is the same version or older than the icon's runtime
	if (policy === SharedResourceReusePolicy.Always || (policy === SharedResourceReusePolicy.OnlyNewer && compareCurrentRuntimeWith(iconData.runtimeIndex) <= 0)) {
		return iconData;
	}
};

const getIconData = async nameProp => {
	const { collection, registryKey } = parseName(nameProp);
	const policy = getSharedResourcePolicy(SharedResourceType.SVGIcons);
	const registry = getRegistry(policy);
	const iconCollectionPromises = getIconCollectionPromises(policy);

	if (!iconCollectionPromises.has(collection)) {
		iconCollectionPromises.set(collection, Promise.resolve(ICON_NOT_FOUND));
	}

	const iconData = await iconCollectionPromises.get(collection);

	if (iconData === ICON_NOT_FOUND) {
		return iconData;
	}

	return registry.get(registryKey);
};

const getRegisteredNames = async () => {
	const policy = getSharedResourcePolicy(SharedResourceType.SVGIcons);
	const registry = getRegistry(policy);
	const iconCollectionPromises = getIconCollectionPromises(policy);

	await Promise.all(Array.from(iconCollectionPromises.values()));
	return Array.from(registry.keys());
};

const registerCollectionPromise = (collection, promise) => {
	const policy = getSharedResourcePolicy(SharedResourceType.SVGIcons);
	const iconCollectionPromises = getIconCollectionPromises(policy);

	// Never reuse policy - use the local registry
	if (policy === SharedResourceReusePolicy.Never) {
		iconCollectionPromises.set(collection, promise);
		return;
	}

	// Always or OnlyNewer - look for the promise in the shared registry
	const registeredPromise = iconCollectionPromises.get(collection);

	// If promise not found, or found, but reuse policy is OnlyNewer and the current runtime is newer than the promise's runtime
	if (!registeredPromise || (policy === SharedResourceReusePolicy.OnlyNewer && compareCurrentRuntimeWith(registeredPromise.runtimeIndex) > 0)) {
		promise.runtimeIndex = getCurrentRuntimeIndex(); // save the version of the runtime that registered this promise for future comparisons
		iconCollectionPromises.set(collection, promise);
	}
};

const fillRegistry = bundleData => {
	Object.keys(bundleData.data).forEach(iconName => {
		const iconData = bundleData.data[iconName];

		registerIcon(iconName, {
			pathData: iconData.path,
			ltr: iconData.ltr,
			accData: iconData.acc,
			collection: bundleData.collection,
		});
	});
};

export {
	getIconData,
	getIconDataSync,
	registerIcon,
	getRegisteredNames,
	registerCollectionPromise,
	fillRegistry,
};
