// import type { LayoutServerLoad } from './$types';

// export const load: LayoutServerLoad = async ({ fetch,	context }) => {
// 	const page = context.page;
// 	const path = '+page';
// 	const encodedPath = path.replace('+', '%2B');
// 	const whitelist = ['/page1', '/page2', '/page3'];
//   const isPageWhitelisted = whitelist.includes(page.path);
//   let lastModifiedDate = '';
//   let commitLink = '#';

// 	const res = await fetch(
// 		`https://api.github.com/repos/DorielRivalet/frontier-compendium/commits?path=src/routes/${encodedPath}.svelte`,
// 	);
// 	if (!res.ok) {
// 		return {
// 			lastModifiedDate: '',
// 			commitLink: '#',
// 		};
// 	}
// 	const commits = await res.json();
// 	const lastCommit = commits[0];
// 	const lastModified: string = lastCommit.commit.author.date;
// 	const link: string = lastCommit['html_url'];
// 	console.log(lastModified, link);
// 	return {
// 		lastModifiedDate: lastModified,
// 		commitLink: link,
// 	};
// };

// export function load() {
// 	throw new Error('yikes');
// }
