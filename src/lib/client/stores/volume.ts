/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let volumeValue = 0;

if (browser) {
  const localStorageValue = window.localStorage.getItem('__volume');
  volumeValue = localStorageValue ? Number(localStorageValue) : 100;
} else {
  volumeValue = 100;
}

export const volumeStore = writable(volumeValue);

export function onVolumeChange(e: { detail: number }) {
  volumeStore.set(e.detail);
}
