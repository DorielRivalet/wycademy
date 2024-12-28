import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const { monster } = params; // Extract the monster name from the URL parameters
	redirect(308, `/hunter-notes/monsters/overview/${monster}`); // Redirect to the new URL
};
