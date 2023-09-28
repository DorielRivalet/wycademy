console.log('page.server.ts');

// import type { PageServerData, PageServerLoad } from './$types';

// // / -> Home
// // /about -> About
// // /about/ -> About
// // about -> About
// // about/ -> About
// // /about-development-stages --> About Development Stages
// // /about/development-stages -> Development Stages
// //
// function deslugify(slug: string): string {
// 	if (slug === '/') return `Home`;

// 	const parts = slug.split('-');
// 	const deslugifiedTitle = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');

// 	return deslugifiedTitle;
// }

// export const load: PageServerLoad = async ({ url }) => {
// 	console.log('async page server load');
// 	const titleName = `Frontier Compendium - ${deslugify(url.pathname)}`;
// 	return {
// 		title: titleName,
// 	};
// };
