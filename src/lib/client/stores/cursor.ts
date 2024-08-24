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
		case '1':
			return cursor1;
		case '2':
			return cursor2;
		case '3':
			return cursor3;
		default:
			return cursor1;
	}
}

export function getCursorId(cursorName: string) {
	switch (cursorName) {
		case 'Classic':
			return '1';
		case 'Modern':
			return '2';
		case 'None':
			return '3';
		default:
			return '1';
	}
}

export function getCursorNameFromId(id: string) {
	switch (id) {
		case '1':
			return 'Classic';
		case '2':
			return 'Modern';
		case '3':
			return 'None';
		default:
			return 'Classic';
	}
}

export function setCursor(cursorIcon: Writable<string>, id: string) {
	cursorIcon.set(getCursorNameFromId(id));
}
