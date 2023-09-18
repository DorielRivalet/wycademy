/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import slugify from 'slugify';

// TODO: make username param checker
export function match(param) {
	return param === slugify(param, { lower: true });
}
