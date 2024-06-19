<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import Header from '../../Header.svelte';
	import Footer from '../../Footer.svelte';
	import ViewTransition from '../../Navigation.svelte';
	import Theme from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { theme } from '$lib/client/stores/theme';
	import { themeTokens } from '$lib/client/themes/tokens';
	import { catppuccinThemeMap } from '$lib/client/themes/catppuccin';
	import { onMount } from 'svelte';
	import { cursorIcon } from '$lib/client/stores/cursor';
	import { cursorVars } from '$lib/client/themes/cursor';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import NotificationActionButton from 'carbon-components-svelte/src/Notification/NotificationActionButton.svelte';
	import {
		authorName,
		authorUrl,
		datePublished,
		description,
		developmentStage,
		projectName,
		website,
	} from '$lib/constants';
	import { goto } from '$app/navigation';
	import Head from '$lib/client/components/Head.svelte';
	import pageThumbnail from '$lib/client/images/logo.png';
	import Breadcrumb from 'carbon-components-svelte/src/Breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from 'carbon-components-svelte/src/Breadcrumb/BreadcrumbItem.svelte';

	$: tokens = themeTokens[$theme] || themeTokens.default;
	export let data: LayoutData;
	console.log('layout.svelte');

	onMount(() => {
		let themeValue = $theme;
		let cssVarMap =
			catppuccinThemeMap[themeValue] || catppuccinThemeMap.default;
		Object.keys(cssVarMap).forEach((key) => {
			document.documentElement.style.setProperty(key, `var(${cssVarMap[key]})`);
		});

		let cursorValue = $cursorIcon;
		cssVarMap = cursorVars[cursorValue] || cursorVars.default;
		Object.keys(cssVarMap).forEach((key) => {
			document.documentElement.style.setProperty(key, `var(${cssVarMap[key]})`);
		});
	});

	function deslugify(slug: string): string {
		// Replace hyphens with spaces
		const words = slug.split('-');

		// Capitalize the first letter of each word
		const capitalizedWords = words.map(
			(word) => word.charAt(0).toUpperCase() + word.slice(1),
		);

		// Join the words with spaces
		return capitalizedWords.join(' ');
	}

	const pageRouteId = $page.route.id || 'Not Found';

	const routeNameMatch = pageRouteId.match(
		/hunter\-notes\/\(docs\-full\)\/([^\/]+)/,
	);
	const routeName = routeNameMatch ? routeNameMatch[1] : '';

	const customTitle = deslugify(routeName);
	const url = $page.url.toString();

	const breadcrumbItems = [
		{ href: '/', text: 'Home' },
		{ href: '/hunter-notes', text: "Hunter's Notes" },
		{ href: `/hunter-notes/${routeName}`, text: customTitle },
	];
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

<Theme bind:theme={$theme} persist persistKey="__carbon-theme" {tokens} />
<div class="app">
	<ViewTransition />

	<div class="header">
		<Header />
	</div>
	<div class="banner">
		<InlineNotification
			lowContrast
			kind="warning"
			title="Status:"
			subtitle="This site is currently in {developmentStage}."
		>
			<svelte:fragment slot="actions">
				<NotificationActionButton
					on:click={() => goto('/about-development-stages')}
					>Learn more</NotificationActionButton
				>
			</svelte:fragment>
		</InlineNotification>
	</div>
	<main>
		<div class="breadcrumb">
			<Breadcrumb noTrailingSlash>
				{#each breadcrumbItems as item, i}
					<BreadcrumbItem
						href={i === breadcrumbItems.length - 1 ? undefined : item.href}
						isCurrentPage={i === breadcrumbItems.length - 1}
						>{#if i !== breadcrumbItems.length - 1}
							{item.text}
						{/if}
					</BreadcrumbItem>
				{/each}
			</Breadcrumb>
		</div>
		<slot />
	</main>
	{#key $page.url.pathname}
		<Footer gitHubData={data.github} />
	{/key}
</div>

<style lang="scss">
	.breadcrumb {
		padding-left: 1rem;
		padding-bottom: 1rem;
	}

	.banner {
		display: flex;
		justify-content: center;
		background-color: var(--ctp-mantle);
	}

	.app {
		display: flex;
		flex-direction: column;
		background-color: var(--ctp-mantle);
	}

	main {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: var(--cds-spacing-08);
		width: 100%;
		max-width: 100vw;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 90vh;
		background-color: var(--ctp-base);
		border-left: var(--cds-spacing-01) solid var(--ctp-surface0);
		border-right: var(--cds-spacing-01) solid var(--ctp-surface0);
		border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
	}

	.header {
		border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
	}
</style>
