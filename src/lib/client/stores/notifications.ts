/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import logo from '$lib/client/images/logo.webp';

let pushNotificationsValue = false;
let notificationsValue = false;
let overlayUpdatesValue = false;
let notificationSeenValue = false;

if (browser) {
	const localStoragePushNotificationsValue = window.localStorage.getItem(
		'__push-notifications-enabled',
	);
	pushNotificationsValue = localStoragePushNotificationsValue
		? localStoragePushNotificationsValue === 'true'
		: true;

	const localStorageNotificationsValue = window.localStorage.getItem(
		'__notifications-enabled',
	);
	notificationsValue = localStorageNotificationsValue
		? localStorageNotificationsValue === 'true'
		: true;

	const localStorageOverlayUpdatesValue = window.localStorage.getItem(
		'overlay-updates-enabled',
	);
	overlayUpdatesValue = localStorageOverlayUpdatesValue
		? localStorageOverlayUpdatesValue === 'true'
		: true;

	const localStorageNotificationSeenValue = window.localStorage.getItem(
		'notification-seen-enabled',
	);
	notificationSeenValue = localStorageNotificationSeenValue
		? localStorageNotificationSeenValue === 'true'
		: true;
} else {
	pushNotificationsValue = true;
	notificationsValue = true;
	overlayUpdatesValue = true;
	notificationSeenValue = true;
}

export const pushNotificationsStore = writable(pushNotificationsValue);
export const notificationsStore = writable(notificationsValue);
export const overlayUpdatesStore = writable(overlayUpdatesValue);
export const notificationSeenStore = writable(notificationSeenValue);

export function onNotificationPress(notificationsEnabled: boolean) {
	if (!browser || !notificationsValue) return;
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
