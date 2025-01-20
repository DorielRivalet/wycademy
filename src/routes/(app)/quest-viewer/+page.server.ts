// import { supabase } from '$lib/supabaseClient';

// export async function load() {
// 	const { data } = await supabase.from('countries').select();
// 	return {
// 		countries: data ?? [],
// 	};
// }

import type { DrizzleClient } from '$lib/db/drizzle';
import { countriesTable } from '$lib/db/schema';
import type { PageServerLoad } from './$types';
import { desc, asc } from 'drizzle-orm';

// With RLS, this returns empty array.
// export const load: PageServerLoad = async ({ locals: { supabase } }) => {
// 	const { data: countries } = await supabase
// 		.from('countries')
// 		.select('name')
// 		.limit(10)
// 		.order('id');
// 	if (!countries || countries.length === 0) {
// 		console.error('No countries found.'); // This can also show if we disable Data API
// 		return { countries: [] };
// 	}
// 	return { countries: countries };
// };

// With RLS on and Data API off, this returns the data because Drizzle uses a direct server connection. It will show unless we select another role, that is not the admin user.
export const load: PageServerLoad = async ({ locals }) => {
	// const countries = await db.query.countriesTable.findMany({
	// 	columns: {
	// 		name: true,
	// 	},
	// 	limit: 10,
	// 	orderBy: [asc(countriesTable.id)],
	// });
	//or
	const drizzleClient = locals.drizzleClient as DrizzleClient;

	// TODO test
	const countries = await drizzleClient.rls(async (tx) => {
		const r = tx
			.select({ name: countriesTable.name })
			.from(countriesTable)
			.limit(10)
			.orderBy(asc(countriesTable.id));
		return r;
	});

	if (countries.length === 0) {
		// console.error('No countries found.'); // This can also show if we disable Data API
		return { countries: [] };
	}

	return { countries: countries };
};
