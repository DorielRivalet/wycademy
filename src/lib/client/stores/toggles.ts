/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import type { Writable } from 'svelte/store';

export function onStoreToggle(
	store: Writable<boolean>,
	e: { detail: { toggled: boolean } },
) {
	store.set(e.detail.toggled);
}
