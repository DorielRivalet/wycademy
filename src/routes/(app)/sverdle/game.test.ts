/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { describe, it, expect } from 'vitest';
import { Game } from './game';

describe('game test', () => {
	it('returns true when a valid word is entered', () => {
		const game = new Game();
		expect(game.enter('zorro'.split(''))).toBe(true);
	});
});
