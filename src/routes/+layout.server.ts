// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types';
import type { DrizzleClient } from '$lib/db/drizzle';
import type { SelectProfile } from '$lib/db/schema';
import { isUserAuthenticated } from '$lib/db/workarounds';
import { getUserProfile } from '$lib/db/queries/select';

export const load: LayoutServerLoad = async ({ locals, cookies, depends }) => {
	depends('supabase:db:profiles'); // TODO unsure if this should be here

	const user = locals.user;
	const session = locals.session;

	// TODO what if i make the client here instead of in hooks? Should be safe because we are using session/user data from hooks which is how we create the client. The client without proper creds thats not admin doesnt work anyways.

	// TODO just use admin client for now and
	// do checks in code instead of policies
	// because it refuses to work
	// also, when impersonating in dashboard i do see the correct policies being applied, so idk whats up.
	// and this only happens in prod, not even in build mode
	// const drizzleClient = await createDrizzleSupabaseClient(session);

	const drizzleClient = locals.drizzleClient as DrizzleClient;

	// TODO remove
	// console.log(JSON.stringify({ session, user }, null, 2));

	// TODO
	try {
		let profile: SelectProfile | null = null;
		if (isUserAuthenticated(user)) {
			profile = await getUserProfile(user, drizzleClient);
			console.log('Got profile data from authenticated user (can be null).');
		} else {
			console.log('Unauthenticated user, skipping profile check.');
		}

		// const { data: profile } = await supabase.from('test_profiles').select();
		return {
			profile: profile ?? null,
			session,
			cookies: cookies.getAll(),
		};
	} catch (error) {
		console.error('Error with supabase profile fetch');
		return {
			profile: null,
			session,
			cookies: cookies.getAll(),
		};
	}
};

// const getUserProfile = async (
// 	user: User | null,
// 	drizzleClient: DrizzleClient,
// ) => {
// 	if (!user) {
// 		console.log('User not found, returning null profile.');
// 		return null;
// 	}

// 	console.log('Finding current profile...');
// 	// console.log(`${profilesTable.id}, ${user.id}`);

// 	// TODO do not use admin db client.
// 	// TODO idk how to fix types :/. maybe fixed
// 	// test types does work.
// 	//const test = await drizzleClient.drizzlePostgresAdmin.query.titlesTable.findFirst();
// 	// console.log(`drizzleClient: ${drizzleClient.rls}`);

// 	// 1. this doesnt work
// 	// const curProfile = await drizzleClient.rls(async (tx) => {
// 	// 	const p = await tx.query.profilesTable.findFirst({
// 	// 		where: eq(profilesTable.id, user.id),
// 	// 	});
// 	// 	return p;
// 	// });

// 	// 2. this works
// 	const curProfile =
// 		await drizzleClient.drizzlePostgresAdmin.query.profilesTable.findFirst({
// 			where: eq(profilesTable.id, user.id),
// 		});

// 	// 3. doesnt work
// 	// const [curProfile] = await drizzleClient.rls((tx) =>
// 	// 	tx.select().from(profilesTable).where(eq(profilesTable.id, user.id)),
// 	// );

// 	// 4. we set drizzleClient in layout instead of hooks.
// 	// Doesnt work
// 	// const curProfile = await drizzleClient.rls((tx) => {
// 	// 	return tx.query.profilesTable.findFirst({
// 	// 		where: eq(profilesTable.id, user.id),
// 	// 	});
// 	// });

// 	// console.log(`curProfile: ${curProfile}`);
// 	console.log('Queried profiles table');

// 	// if profile found, return it
// 	if (curProfile) {
// 		console.log('Found profile in backend!');
// 		return curProfile as SelectProfile;
// 	} else {
// 		console.error('Could not get profile.');
// 		throw new Error('Could not get profile.');
// 	}

// 	// console.log('Creating a profile...');

// 	// // otherwise create a profile
// 	// // TODO triggers?
// 	// await db.insert(profilesTable).values({
// 	// 	id: user.id,
// 	// 	discord_username: user.user_metadata.full_name,
// 	// 	discord_avatar:
// 	// 		user.user_metadata.discord_avatar ??
// 	// 		'https://cdn.discordapp.com/embed/avatars/0.png',
// 	// 	// avatar: 'None',
// 	// 	// username: '',
// 	// });

// 	// console.log('Finding created profile');

// 	// // test new profile insertion
// 	// const newProfile = await db.query.profilesTable.findFirst({
// 	// 	where: eq(profilesTable.id, user.id),
// 	// });

// 	// if (!newProfile) {
// 	// 	error(500, 'Could not create profile');
// 	// }

// 	// console.log('Returning new profile');

// 	// return newProfile;
// };
