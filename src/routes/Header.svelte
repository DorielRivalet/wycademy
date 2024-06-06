<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import Settings from 'carbon-icons-svelte/lib/Settings.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Banner from '$lib/client/components/Banner.svelte';
	import Blacksmith from '$lib/client/components/frontier/icon/location/Blacksmith.svelte';
	import UserAvatar from 'carbon-icons-svelte/lib/UserAvatar.svelte';
	import PvP from '$lib/client/components/frontier/icon/location/PvP.svelte';
	import MySupport from '$lib/client/components/frontier/icon/location/MySupport.svelte';
	import BookIconWhite from '$lib/client/components/frontier/icon/item/Book_Icon_White.svelte';
	import MonsterPartIconWhite from '$lib/client/components/frontier/icon/item/Monster_Part_Icon_White.svelte';
	import TrophyWhite from '$lib/client/components/frontier/icon/TrophyWhite.svelte';
	import { getHexStringFromCatppuccinColor } from '$lib/client/themes/catppuccin';
	import { theme } from '$lib/client/stores/theme';
	import NavigationItem from './NavigationItem.svelte';
	import WycademySearch from '$lib/client/components/WycademySearch.svelte';
	import ThemeChanger from './ThemeChanger.svelte';
	import Notification from 'carbon-icons-svelte/lib/Notification.svelte';
	import OverflowMenu from 'carbon-components-svelte/src/OverflowMenu/OverflowMenu.svelte';
	import OverflowMenuItem from 'carbon-components-svelte/src/OverflowMenu/OverflowMenuItem.svelte';
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';

	// let searchState: 'idle' | 'load' | 'ready' = 'idle';
	// let searchTerm = '';
	// let results: SearchResult[] = [];

	const breakpointSize = breakpointObserver();
	const breakpointLargerThanSmall = breakpointSize.largerThan('sm');
	const breakpointLargerThanMedium = breakpointSize.largerThan('md');

	// let posts: SearchItem[] = [];

	// async function onSearchPressed() {
	// 	searchOpen = !searchOpen;

	// 	if (searchState === 'ready' || searchState === 'load') {
	// 		return;
	// 	}

	// 	searchState = 'load';
	// 	posts = await fetch('/api/search').then((res) => res.json());
	// 	createPostsIndex(posts);
	// 	searchState = 'ready';
	// }

	// let searchOpen = false;

	// $: if (searchState === 'ready') {
	// 	results = searchPostsIndex(searchTerm);
	// }
</script>

<header>
	<div class="left">
		{#if !$breakpointLargerThanMedium}
			<OverflowMenu icon={Menu}>
				<OverflowMenuItem href="/leaderboard" text="Leaderboard" />
				<OverflowMenuItem href="/hunter-notes" text="Hunter's Notes" />
				<OverflowMenuItem href="/bestiary" text="Bestiary" />
				<OverflowMenuItem href="/arena" text="Arena" />
				<OverflowMenuItem href="/smithy" text="Smithy" />
				<OverflowMenuItem href="/support" text="Support" />
				<OverflowMenuItem href="/site-preferences" text="Notifications" />
				<OverflowMenuItem href="/site-preferences" text="Profile" />
				<OverflowMenuItem href="/site-preferences" text="Site Preferences" />
			</OverflowMenu>
		{/if}
		<div class="banner">
			<Banner />
		</div>
	</div>

	<div class="middle">
		<nav>
			<ul>
				{#if $breakpointLargerThanSmall}
					<NavigationItem
						color="yellow"
						path="/leaderboard"
						description="Leaderboard"
					>
						<TrophyWhite
							color={getHexStringFromCatppuccinColor('yellow', $theme)}
						/>
					</NavigationItem>
				{/if}
				{#if $breakpointLargerThanMedium}
					<NavigationItem
						color="rosewater"
						path="/hunter-notes"
						description="Hunter's Notes"
					>
						<BookIconWhite
							color={getHexStringFromCatppuccinColor('rosewater', $theme)}
						/>
					</NavigationItem>

					<NavigationItem
						color="flamingo"
						path="/bestiary"
						description="Bestiary"
					>
						<MonsterPartIconWhite
							color={getHexStringFromCatppuccinColor('flamingo', $theme)}
						/>
					</NavigationItem>

					<NavigationItem color="pink" path="/arena" description="Arena">
						<PvP color={getHexStringFromCatppuccinColor('pink', $theme)} />
					</NavigationItem>
					<NavigationItem color="mauve" path="/smithy" description="Smithy">
						<Blacksmith
							color={getHexStringFromCatppuccinColor('mauve', $theme)}
						/>
					</NavigationItem>
					<NavigationItem color="red" path="/support" description="Support">
						<MySupport color={getHexStringFromCatppuccinColor('red', $theme)} />
					</NavigationItem>
				{/if}
			</ul>
		</nav>
	</div>

	<nav class="right">
		<WycademySearch />

		{#if $breakpointLargerThanMedium}
			<ThemeChanger />
		{/if}
		{#if $breakpointLargerThanSmall}
			<div class="container-link">
				<Link href="/site-preferences" class="link" aria-label="Notifications">
					<Notification size={48} />
				</Link>
			</div>
			<div class="container-link">
				<Link href="/site-preferences" class="link" aria-label="Profile">
					<UserAvatar size={48} />
				</Link>
			</div>
			<div class="container-link">
				<Link
					href="/site-preferences"
					class="link"
					aria-label="Site preferences"
				>
					<Settings size={48} />
				</Link>
			</div>
		{/if}
	</nav>
</header>

<style lang="scss">
	.left {
		margin-left: var(--cds-spacing-02);
		display: flex;
		gap: 1rem;
		align-items: center;
		height: 100%;
	}

	.middle {
		display: flex;
		align-items: center;
		gap: 1rem;
		height: 100%;
	}

	.right {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--cds-spacing-04);
		height: 100%;
	}

	header {
		display: flex;
		justify-content: space-between;
		min-height: 10vh;
		background-color: var(--ctp-crust);
		align-items: center;
		padding: var(--cds-spacing-02);
		max-height: var(--cds-spacing-11);
	}

	.container-link {
		padding-block: 0.5rem;
	}

	.banner {
		height: 100%;
		transform: scale(60%) translateX(-30%);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		list-style: none;
	}

	.search {
		z-index: 999;
		width: 90vw;
		max-width: 600px;
		position: fixed;
		left: 50%;
		top: 20%;
		translate: -50% -0%;
		border-radius: 0.5rem;
		box-shadow: 0px 0px 20px hsl(0 0% 0% / 40%);
		overflow: hidden;

		& input {
			width: 100%;
			padding: 1.5rem;
			color: var(--ctp-text);
			background-color: var(--ctp-surface0);
			font: inherit;
			border: none;
			outline: none;
		}
	}

	.results {
		max-height: 48vh;
		padding: 1.5rem;
		background-color: var(--ctp-surface0);
		overflow-y: auto;
		scrollbar-width: thin;

		& ul {
			display: grid;
			gap: 1rem;
			padding: 0px;
			margin: 0px;
			list-style: none;

			& li:not(:last-child) {
				padding-block: 0.5rem;
				border-bottom: 1px solid var(--ctp-overlay0);
			}
		}

		& a {
			display: block;
			font-size: 1.5rem;
			color: var(--ctp-text);
			text-decoration: none;
			transition: color 0.3s ease;

			&:hover {
				color: var(--ctp-sky);
			}
		}
	}
</style>
