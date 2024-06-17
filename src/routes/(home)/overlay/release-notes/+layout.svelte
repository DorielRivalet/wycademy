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
	const pageRouteId = $page.route.id || '';

	const overlayVersionMatch = pageRouteId.match(
		/\/\(home\)\/overlay\/release-notes\/([^\/]+)/,
	);
	const overlayVersion = overlayVersionMatch ? overlayVersionMatch[1] : '';

	const customTitle =
		pageRouteId === '/(home)/overlay/release-notes'
			? 'Release Notes'
			: overlayVersion.replaceAll('-', '.');

	const description =
		pageRouteId === '/(home)/overlay/release-notes'
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
