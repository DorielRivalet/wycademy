/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
const sw = self as unknown as ServiceWorkerGlobalScope;

// /// <reference types='@sveltejs/kit'/>
// import { build, files, version } from '$service-worker';
// import fetchEvent from './fetchEvent';
// import installEvent from './installEvent';
import { build, files, prerendered, version } from '$service-worker';
//import { offlineFallback } from 'workbox-recipes';
//import { precacheAndRoute } from 'workbox-precaching';
// import { NetworkOnly } from 'workbox-strategies';
// import { setDefaultHandler } from 'workbox-routing';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

// setDefaultHandler(new NetworkOnly());

const precache_list = [
	...build, // the app itself
	...files, // everything in static folder
	...prerendered,
];
// ].map((file) => ({
// 	url: file,
// 	revision: version,
// }));

//precacheAndRoute(precache_list); // this has to run early.
//offlineFallback(); // ONE LINE OF CODE

sw.addEventListener('install', (event) => {
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(precache_list);
	}

	event.waitUntil(addFilesToCache());
});

sw.addEventListener('activate', (event) => {
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) {
				await caches.delete(key);
			}
		}
	}

	event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET') {
		return;
	}

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		if (precache_list.includes(url.pathname)) {
			const cachedResponse = await cache.match(url.pathname);
			if (cachedResponse) {
				return cachedResponse;
			}
		}

		try {
			const response = await fetch(event.request);
			const isNotExtension = url.protocol === 'http';
			const isSuccess = response.status === 200;

			if (isNotExtension && isSuccess) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch (err) {
			const cachedResponse = await cache.match(url.pathname);
			if (cachedResponse) {
				return cachedResponse;
			}
		}

		const offlineResponse = await cache.match('/offline.html');
		return offlineResponse || new Response('Network error', { status: 500 });
	}

	event.respondWith(respond());
});

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
