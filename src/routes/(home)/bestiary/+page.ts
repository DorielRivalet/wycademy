import { redirect } from '@sveltejs/kit';

export const load = async () => {
	throw redirect(308, `/hunter-notes/monsters/overview`); // Redirect to the new URL
};
