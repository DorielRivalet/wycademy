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
} else {
	pushNotificationsValue = true;
	notificationsValue = true;
	overlayUpdatesValue = true;
}

export const pushNotificationsStore = writable(pushNotificationsValue);
export const notificationsStore = writable(notificationsValue);
export const overlayUpdatesStore = writable(overlayUpdatesValue);

export function onNotificationPress() {
	if (!browser || !notificationsValue) return;
	Notification.requestPermission().then((result) => {
		if (result === 'granted') {
			pushNotificationsStore.set(true);
			sampleNotification();
		} else {
			pushNotificationsStore.set(false);
		}
	});
}

function sampleNotification() {
	const notifBody = `Created by Doriel Rivalet.`;
	const notifImg = logo;
	const options = {
		body: notifBody,
		icon: notifImg,
	};
	new Notification('Wycademy', options);
}
