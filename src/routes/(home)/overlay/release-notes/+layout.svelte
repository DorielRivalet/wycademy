<script lang="ts">
	import { page } from '$app/state';
	import Head from '$lib/client/components/Head.svelte';
	import {
		overlayDescription,
		website,
		authorName,
		datePublished,
		authorUrl,
		projectName,
	} from '$lib/constants';
	import pageThumbnail from '$lib/client/images/wycademy-og.png';
	import { getReleaseNotesSummary } from '$lib/client/modules/overlay-release-notes';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const url = page.url.toString();
	const pageUrlPathName = page.url.pathname || '';

	const overlayVersionMatch = pageUrlPathName.match(
		/\/overlay\/release-notes\/([^\/]+)/,
	);
	const overlayVersion = overlayVersionMatch ? overlayVersionMatch[1] : '';

	const customTitle =
		pageUrlPathName === '/overlay/release-notes'
			? "Release Notes — Frontier's Wycademy"
			: overlayVersion.replaceAll('-', '.') + " — Frontier's Wycademy";

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

{@render children?.()}
