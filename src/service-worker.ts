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

setDefaultHandler(new NetworkOnly());
precacheAndRoute(precache_list); // this has to run early.
offlineFallback({ pageFallback: '/offline' });

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
