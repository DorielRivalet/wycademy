/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
const sw = self as unknown as ServiceWorkerGlobalScope;

// /// <reference types='@sveltejs/kit'/>
import { build, files, prerendered, version } from '$service-worker';
import { offlineFallback } from 'workbox-recipes';
import { precacheAndRoute } from 'workbox-precaching';
import { NetworkOnly } from 'workbox-strategies';
import { setDefaultHandler } from 'workbox-routing';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const precache_list = [
	...build, // the app itself
	...files, // everything in static folder
	...prerendered,
].map((file) => ({
	url: file,
	revision: version,
}));

precacheAndRoute(precache_list); // this has to run early.

setDefaultHandler(new NetworkOnly());
offlineFallback();
