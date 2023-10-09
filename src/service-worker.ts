/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
const sw = self as unknown as ServiceWorkerGlobalScope;
// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

// /// <reference types='@sveltejs/kit'/>
// import { build, files, version } from '$service-worker';
// import fetchEvent from './fetchEvent';
// import installEvent from './installEvent';
import { build, files, prerendered, version } from '$service-worker';
import { offlineFallback } from 'workbox-recipes';
import { precacheAndRoute } from 'workbox-precaching';
import { NetworkOnly } from 'workbox-strategies';
import { setDefaultHandler } from 'workbox-routing';

setDefaultHandler(new NetworkOnly());

const precache_list = [
	...build, // the app itself
	...files, // everything in static folder
	...prerendered,
].map((file) => ({
	url: file,
	revision: version,
}));

precacheAndRoute(precache_list); // this has to run early.
offlineFallback(); // ONE LINE OF CODE

// sw.addEventListener('activate', (event) => {
// 	event.waitUntil(
// 		caches.keys().then((cacheNames) => {
// 			return Promise.all(
// 				cacheNames
// 					.filter((cacheName) => {
// 						return cacheName !== CACHE;
// 					})
// 					.map((cacheName) => {
// 						return caches.delete(cacheName);
// 					}),
// 			);
// 		}),
// 	);
// });

// sw.addEventListener('fetch', (event) => {
// 	event.respondWith(
// 		caches.match(event.request).then((response) => {
// 			return response || fetch(event.request);
// 		}),
// 	);
// });
