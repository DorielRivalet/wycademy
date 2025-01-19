import { releaseNotesSummaries } from '$lib/client/modules/overlay-release-notes';
import { redirect } from '@sveltejs/kit';

function getLatestVersion() {
	return `/overlay/release-notes/${releaseNotesSummaries[0]?.version}`;
}

export function load() {
	console.log('Loading redirects...');
	redirect(307, getLatestVersion());
}
