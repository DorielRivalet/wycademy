/**
 * This file is necessary to ensure protection of all routes in the `profile`
 * directory. It makes the routes in this directory _dynamic_ routes, which
 * send a server request, and thus trigger `hooks.server.ts`.
 **/
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ parent }) => {
	const data = await parent();

	if (!data.profile) {
		redirect(307, '/login');
	} else if (!data.profile.username_set) {
		// load page as normal
	} else {
		// TODO test
		redirect(307, `/users/${data.profile.username}`);
	}
};
