/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
const sw = self as unknown as ServiceWorkerGlobalScope;

import { build, files, prerendered, version } from '$service-worker';
import { precacheAndRoute } from 'workbox-precaching';
//import { NetworkOnly } from 'workbox-strategies';
//import { registerRoute, setDefaultHandler } from 'workbox-routing';
// import { offlineFallback } from 'workbox-recipes';

// Create a unique cache name
const CACHE = `cache-${version}`;

// console.log('Precache candidates:', { build, files, prerendered });

// Helper to check if a URL is auth-related
// Also check hooks.server.ts
const isAuthRelated = (url: string) => {
	return (
		url.startsWith('/auth') ||
		url.startsWith('/callback') ||
		url.startsWith('/login') ||
		url.startsWith('/home') ||
		url.startsWith('/profile') ||
		url.startsWith('/profile/settings') ||
		url.startsWith('/account') ||
		url.startsWith('/account/settings') ||
		url.startsWith('/settings') ||
		url.startsWith('/onboarding') ||
		url.startsWith('/notifications') ||
		url.startsWith('/signup') ||
		url.startsWith('/quest-viewer') ||
		url.startsWith('/moderator-dashboard') ||
		url.startsWith('/dashboard') ||
		url.startsWith('/moderation-history') ||
		url.startsWith('/notice') ||
		url.startsWith('/users') ||
		url.startsWith('/api')
	);
};

// Filter out auth-related URLs from precaching
const precacheList = [...build, ...files, ...prerendered]
	.filter((file) => !isAuthRelated(file))
	.map((file) => ({
		url: file,
		revision: version,
	}));

// console.log('Final precache list:', precacheList);

// TODO does offline work? Does it affect auth routes?
// setDefaultHandler(new NetworkOnly());
// Precache non-auth files
precacheAndRoute(precacheList);
// offlineFallback({ pageFallback: '/offline' });

// Bypass SW for auth-related requests
sw.addEventListener('fetch', (event) => {
	const url = new URL(event.request.url);

	// Bypass Service Worker for auth-related requests
	if (isAuthRelated(url.pathname)) {
		console.log(`Bypassing Service Worker for: ${url.pathname}`);
		return;
	}

	// Handle other requests with cache-first fallback
	event.respondWith(
		caches.match(event.request).then((response) => {
			return (
				response ||
				fetch(event.request).catch((error) => {
					console.error(`Fetch failed for: ${url}`, error);
					return new Response('Network error occurred.', { status: 500 });
				})
			);
		}),
	);
});

sw.addEventListener('notificationclick', (event) => {
	event.notification.close();

	switch (event.notification.tag) {
		case 'notification_test': {
			switch (event.action) {
				case 'ok':
					{
						console.log('User clicked OK button: ', event.notification.data);
					}
					break;
				case 'view_overlay':
					{
						// direct to profile page
						event.waitUntil(
							sw.clients
								.matchAll({
									type: 'window',
									includeUncontrolled: true,
								})
								.then((windowClients) => {
									const matchingClient = windowClients.find(
										(wc) => wc.url === 'https://wycademy.vercel.app',
									);

									if (matchingClient) {
										return matchingClient.focus();
									} else {
										return sw.clients.openWindow(event.notification.data.path);
									}
								}),
						);
					}

					break;
				// Handle other actions ...
			}
		}
	}
});

console.log('Service Worker registered successfully.');
