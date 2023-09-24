// export async function getGitHubDataForPath(path: string) {
// 	if (res.ok) {
// 		return await res.json();
// 	} else {
// 		// Sometimes the API will fail!
// 		throw new Error('Request for GitHub Data failed');
// 	}
// }

export const getGitHubDataForPath = async (path: string) => {
	// console.log(`path: ${path}`);
	// const encodedPath = path.replace('+', '%2B');
	// console.log(`encodedPath: ${encodedPath}`);
	path = '';
	const res = await fetch(
		`${path}https://api.github.com/repos/DorielRivalet/frontier-compendium/commits?path=src/routes/%2Bpage.svelte`,
	);
	let lastModifiedDate: string = '';
	let commitLink: string = '#';
	const commits = await res.json();
	console.log(`commits: ${await commits}`);
	const lastCommit = (await commits[0]) ?? undefined;
	lastModifiedDate = lastCommit?.commit?.author?.date ?? undefined;
	commitLink = lastCommit?.html_url ?? undefined;
	console.log(`commits:${await commits?.length}`);

	return { lastModifiedDate, commitLink };
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
