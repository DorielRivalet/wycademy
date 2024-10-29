/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { type Writable } from 'svelte/store';
import cursor1 from '$lib/client/images/ui/svg/cursor-classic.svg';
import cursor2 from '$lib/client/images/ui/svg/cursor-modern.svg';
import cursor3 from '$lib/client/images/ui/svg/cursor-none.svg';

export function getCursorIcon(id: string) {
	switch (id) {
		case 'Classic':
			return cursor1;
		case 'Modern':
			return cursor2;
		case 'None':
			return cursor3;
		default:
			return cursor1;
	}
}

export function setCursor(cursorIcon: Writable<string>, id: string) {
	cursorIcon.set(id);
}
