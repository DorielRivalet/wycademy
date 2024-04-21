import { MonsterIcons as monsters } from '$lib/client/modules/frontier/objects';

export const prerender = true;

export async function load() {
	return { monsters };
}
