/*
 * © 2023-2025 Open Frontiers
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { redirect } from '@sveltejs/kit';

export const load = async () => {
	redirect(308, `/support/website/development`);
};
