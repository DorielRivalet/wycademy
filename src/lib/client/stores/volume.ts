/*
 * © 2023-2025 Open Frontiers
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { type Writable } from 'svelte/store';

export function onVolumeChange(
	volumeStore: Writable<number>,
	e: { detail: number },
) {
	volumeStore.set(e.detail);
}
