// DO NOT CHANGE
export const prerender = false;

// import type { LayoutServerLoad } from '../$types';

// export const load: LayoutServerLoad = async ({
// 	depends,
// 	locals: { supabase },
// }) => {
// 	depends('supabase:db:profiles');
// 	const { data: username } = await supabase.from('profiles').select('username');
// 	return { username: username ?? 'Username not found' };
// };
