<script lang="ts">
	import Breadcrumb from 'carbon-components-svelte/src/Breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from 'carbon-components-svelte/src/Breadcrumb/BreadcrumbItem.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import { releaseNotesSummaries } from '$lib/client/modules/overlay-release-notes';
	import { formatDateWithRelativeTime } from '$lib/client/modules/time';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';

	function getLinkFromVersion(version: string) {
		return `/overlay/release-notes/${version.replaceAll('.', '-')}`;
	}

	function getVersionDate(date: string) {
		let date1 = new Date(
			Number(date.split('-')[0]),
			Number(date.split('-')[1]) - 1,
			Number(date.split('-')[2]),
		);
		let date2 = new Date();
		return [date1, date2];
	}

	const breadCrumbItems = [
		{ href: '/', text: 'Home' },
		{ href: '/overlay', text: 'Overlay' },
		{ href: '/overlay/release-notes', text: 'Release Notes' },
	];
</script>

<div class="release-notes-page">
	<div class="breadcrumb">
		<Breadcrumb noTrailingSlash>
			{#each breadCrumbItems as item, i}
				<BreadcrumbItem
					href={i === breadCrumbItems.length - 1 ? undefined : item.href}
					isCurrentPage={i === breadCrumbItems.length - 1}
					>{#if i !== breadCrumbItems.length - 1}
						{item.text}
					{/if}
				</BreadcrumbItem>
			{/each}
		</Breadcrumb>
	</div>
	<h1>Release Notes</h1>
	<hr />
	<div class="summary">
		<p>
			Below is a list of all release notes for <strong>mhfz-overlay </strong>,
			which are different from the <OutboundLink
				href="https://github.com/DorielRivalet/mhfz-overlay/blob/main/CHANGELOG.md"
				>changelog.</OutboundLink
			>
		</p>

		<UnorderedList>
			{#each releaseNotesSummaries as summary}
				<ListItem>
					<Link inline href={getLinkFromVersion(summary.version)}
						>{summary.version.replaceAll('-', '.')}:</Link
					>
					<span class="date">
						{formatDateWithRelativeTime(
							getVersionDate(summary.date)[0],
							getVersionDate(summary.date)[1],
						)}
					</span>
				</ListItem>
			{/each}
		</UnorderedList>
	</div>
	<div class="achievements-container"></div>
</div>

<style lang="scss">
	.release-notes-page {
		width: 100%;
		padding-top: 2rem;
		padding-bottom: 2rem;
	}

	.date {
		color: var(--ctp-subtext0);
	}

	hr {
		opacity: 1;
		width: 100%;
		border: none;
		height: 1px;
		background: radial-gradient(
			circle,
			color-mix(in srgb, var(--ctp-blue), transparent 50%) 0%,
			rgba(0, 0, 0, 0) 50%
		);
	}

	.centered-paragraph {
		text-align: center;
	}

	h1,
	h2 {
		text-align: center;
	}

	.breadcrumb {
		padding-left: 1rem;
		padding-bottom: 1rem;
	}

	.summary {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 80%;
		margin: auto;
		padding-top: 1rem;
		padding-bottom: 2rem;
	}
</style>
