// export async function getGitHubDataForPath(path: string) {
// 	if (res.ok) {
// 		return await res.json();
// 	} else {
// 		// Sometimes the API will fail!
// 		throw new Error('Request for GitHub Data failed');
// 	}
// }

const whitelist = [
	'/',
	'/about',
	'/about-development-stages',
	'/site-preferences',
];

/**TODO: error handling */
export const getGitHubDataForPath = async (path: string) => {
	let lastModifiedDate: string = '';
	let commitLink: string = '#';
	let timesChanged: number = 0;

	if (!whitelist.includes(path)) {
		console.warn('Page not on GitHub paths whitelist');
		return { lastModifiedDate, commitLink, timesChanged };
	}

	const res = await fetch(
		`https://api.github.com/repos/DorielRivalet/frontier-compendium/commits?path=src/routes${path}/%2Bpage.svelte`,
	);

	const commits = await res.json();
	const lastCommit = (await commits[0]) ?? undefined;
	lastModifiedDate = lastCommit?.commit?.author?.date ?? undefined;
	commitLink = lastCommit?.html_url ?? undefined;
	timesChanged = (await commits?.length) || 0;
	if (lastModifiedDate) {
		lastModifiedDate = stringToCustomDateFormat(lastModifiedDate);
	}
	return { lastModifiedDate, commitLink, timesChanged };
};

// if (whitelist.includes($page.url.pathname)) {
//
// 	let data = await fetch(
// 		`https://api.github.com/repos/{owner}/{repo}/commits?path=src/routes/${encodedPath}.svelte`,
// 	)
// 		.then((response) => response.json())
// 		.then((commits) => {
// 			lastModifiedDate = commits[0].commit.author.date;
// 			commitLink = commits[0].html_url;
// 		});
// }

/*
= new Date(lastModifiedDate)
		.toISOString()
		.substring(0, 16)
		.replace('T', ' ');
*/
function stringToCustomDateFormat(date: string): string {
	return new Date(date).toISOString().substring(0, 16).replace('T', ' ');
}
