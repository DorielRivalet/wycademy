/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import logo from '$lib/client/images/logo.webp';

let soundValue = false;
let pushNotificationsValue = false;

if (browser) {
	const localStorageSoundValue = window.localStorage.getItem('__sound-enabled');
	soundValue = localStorageSoundValue
		? localStorageSoundValue === 'true'
		: true;
	const localStoragePushNotificationsValue = window.localStorage.getItem(
		'__push-notifications-enabled',
	);
	pushNotificationsValue = localStoragePushNotificationsValue
		? localStoragePushNotificationsValue === 'true'
		: true;
} else {
	soundValue = true;
	pushNotificationsValue = true;
}

export const soundStore = writable(soundValue);
export const pushNotificationsStore = writable(pushNotificationsValue);

export function onNotificationPress() {
	if (!browser) return;
	Notification.requestPermission().then((result) => {
		if (result === 'granted') {
			pushNotificationsStore.set(true);
			randomNotification();
		} else {
			pushNotificationsStore.set(false);
		}
	});
}

function randomNotification() {
	const notifBody = `Created by Doriel Rivalet.`;
	const notifImg = logo;
	const options = {
		body: notifBody,
		icon: notifImg,
	};
	new Notification('Wycademy', options);
}

export function onSoundToggle(e: { detail: { toggled: boolean } }) {
	soundStore.set(e.detail.toggled);
}
