/*
 * © 2024 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { browser } from '$app/environment';
import logo from '$lib/client/images/wycademy-logo-small.webp';
import type { Writable } from 'svelte/store';

export function onNotificationPress(
	pushNotificationsStore: Writable<boolean>,
	notificationsEnabled: boolean,
) {
	if (!browser || !notificationsEnabled) return;
	Notification.requestPermission().then((result) => {
		if (result === 'granted') {
			pushNotificationsStore.set(true);
			sendNotification(
				`Created by Doriel Rivalet.`,
				logo,
				{ path: 'overlay' },
				[
					{
						action: 'ok',
						title: 'OK',
					},
					{
						action: 'view_overlay',
						title: 'Go to Overlay Page',
					},
				],
				'notification_test',
				'Wycademy',
				notificationsEnabled,
			);
		} else {
			pushNotificationsStore.set(false);
		}
	});
}

export const sendNotification = async (
	body: string,
	icon: string,
	data: object,
	actions: Array<{ action: string; title: string }>,
	tag: string,
	title: string,
	notificationsEnabled: boolean,
) => {
	if (!notificationsEnabled) {
		return;
	}

	const options = {
		body: body,
		icon: icon,
		data: data,
		actions: actions,
		tag: tag,
	};
	// Check if a service worker is registered
	navigator.serviceWorker.ready
		.then((registration) => {
			// Use the registered service worker to show the notification
			registration.showNotification(title, options);
		})
		.catch((error) => {
			console.error('Service worker not found:', error);
			// Handle the case where no service worker is registered
			// For example, you could log an error, show a fallback UI, etc.
		});
};
