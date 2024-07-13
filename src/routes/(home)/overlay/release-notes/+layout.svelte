<script lang="ts">
	import { page } from '$app/stores';
	import Head from '$lib/client/components/Head.svelte';
	import {
		overlayDescription,
		website,
		authorName,
		datePublished,
		authorUrl,
		projectName,
	} from '$lib/constants';
	import pageThumbnail from '$lib/client/images/logo.png';
	import { getReleaseNotesSummary } from '$lib/client/modules/overlay-release-notes';

	const url = $page.url.toString();
	const pageUrlPathName = $page.url.pathname || '';

	const overlayVersionMatch = pageUrlPathName.match(
		/\/overlay\/release-notes\/([^\/]+)/,
	);
	const overlayVersion = overlayVersionMatch ? overlayVersionMatch[1] : '';

	const customTitle =
		pageUrlPathName === '/overlay/release-notes'
			? 'Release Notes'
			: overlayVersion.replaceAll('-', '.');

	const description =
		pageUrlPathName === '/overlay/release-notes'
			? overlayDescription
			: getReleaseNotesSummary(overlayVersion);
</script>

<Head
	title={customTitle}
	{description}
	image={pageThumbnail}
	{url}
	{website}
	{authorName}
	{datePublished}
	{authorUrl}
	contentType="SoftwareApplication"
	name={projectName}
	siteName={projectName}
/>

<slot />
