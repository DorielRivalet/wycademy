<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import Settings from 'carbon-icons-svelte/lib/Settings.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Banner from '$lib/client/components/Banner.svelte';
	import UserAvatar from 'carbon-icons-svelte/lib/UserAvatar.svelte';
	import NavigationItem from './NavigationItem.svelte';
	import WycademySearch from '$lib/client/components/frontier/WycademySearch.svelte';
	import ThemeChanger from './ThemeChanger.svelte';
	import Notification from 'carbon-icons-svelte/lib/Notification.svelte';
	import OverflowMenu from 'carbon-components-svelte/src/OverflowMenu/OverflowMenu.svelte';
	import OverflowMenuItem from 'carbon-components-svelte/src/OverflowMenu/OverflowMenuItem.svelte';
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import NotificationNew from 'carbon-icons-svelte/lib/NotificationNew.svelte';
	import { onMount } from 'svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import {
		notificationSeenStore,
		notificationsStore,
		overlayUpdatesStore,
	} from '$lib/client/stores/notifications';
	import { overlayVersion } from '$lib/constants';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';

	const breakpointSize = breakpointObserver();
	const breakpointLargerThanSmall = breakpointSize.largerThan('sm');
	const breakpointLargerThanMedium = breakpointSize.largerThan('md');

	let newVersionAvailable = '';

	async function checkForNewRelease() {
		try {
			const response = await fetch('/api/webhook/overlay');
			const data = await response.json();

			//TODO
			console.log(data);
			console.log(data?.tag_name);

			if (data && data.tag_name && data.tag_name !== overlayVersion) {
				console.log(`New version available: ${JSON.stringify(data)}`);
				newVersionAvailable = data.tag_name;
			} else {
				console.log(`No new version found: ${JSON.stringify(data)}`);
			}
		} catch (error) {
			console.error('Failed to fetch the latest release:', error);
		}
	}

	onMount(checkForNewRelease);
</script>

<LocalStorage
	bind:value={$notificationSeenStore}
	key="notification-seen-enabled"
/>

<header>
	<div class="left">
		{#if !$breakpointLargerThanMedium}
			<OverflowMenu icon={Menu}>
				<OverflowMenuItem href="/leaderboard" text="Leaderboard" />
				<OverflowMenuItem href="/hunter-notes" text="Hunter's Notes" />
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
					<NavigationItem path="/leaderboard" description="Leaderboards" />
				{/if}
				{#if $breakpointLargerThanMedium}
					<NavigationItem path="/hunter-notes" description="Guides" />
					<NavigationItem path="/arena" description="Arena" />
					<NavigationItem path="/smithy" description="Tools" />
					<!-- <NavigationItem path="/" description="Events" /> -->
					<NavigationItem path="/support" description="Support" />
				{/if}
			</ul>
		</nav>
	</div>

	<nav class="right">
		<div class="search-button">
			<WycademySearch />
		</div>

		{#if $breakpointLargerThanMedium}
			<div class="theme-changer">
				<ThemeChanger />
			</div>
		{/if}
		{#if $breakpointLargerThanSmall}
			<div class="container-button">
				<Link
					on:click={() => {
						notificationSeenStore.set(true);
					}}
					title={!$notificationSeenStore &&
					$notificationsStore &&
					$overlayUpdatesStore &&
					newVersionAvailable !== ''
						? `New overlay version available')}`
						: 'You have no unread notifications'}
					href="/notifications"
				>
					{#if !$notificationSeenStore && $notificationsStore && $overlayUpdatesStore && newVersionAvailable !== ''}
						<NotificationNew size={48} color="var(--ctp-peach)" />
					{:else}
						<Notification size={48} color="var(--ctp-text)" />
					{/if}
				</Link>
			</div>
			<!-- TODO: profile disclosure-->
			<div class="container-link">
				<Link title="Site Preferences" href="/site-preferences">
					<Settings size={48} color="var(--ctp-text)" />
				</Link>
			</div>
			<div>
				<Button href="/user-demo" size="field">Log In</Button>
			</div>
		{/if}
	</nav>
</header>

<style lang="scss">
	.container-link {
		margin-right: 1rem;
	}

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
		gap: 0;
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

	.banner {
		height: 100%;
		transform: scale(60%) translateX(-30%);
	}

	ul {
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		list-style: none;
	}

	.search-button {
		padding-right: 1rem;
		margin: 0;
	}

	.theme-changer {
		margin-right: 0.5rem;
	}
</style>
