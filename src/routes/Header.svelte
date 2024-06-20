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
				<Button
					kind="ghost"
					iconDescription={!$notificationSeenStore &&
					$notificationsStore &&
					$overlayUpdatesStore &&
					newVersionAvailable !== ''
						? `New overlay version available')}`
						: 'Notifications'}
					on:click={() => {
						notificationSeenStore.set(true);
					}}
				>
					<span slot="icon">
						{#if !$notificationSeenStore && $notificationsStore && $overlayUpdatesStore && newVersionAvailable !== ''}
							<NotificationNew size={48} />
						{:else}
							<Notification size={48} />
						{/if}
					</span>
				</Button>
			</div>
			<div class="container-button">
				<Button
					kind="ghost"
					iconDescription={'Profile'}
					on:click={(e) => console.log('Profile')}
				>
					<span slot="icon">
						<UserAvatar size={48} />
					</span>
				</Button>
			</div>
			<div class="container-link">
				<Link title="Site Preferences" href="/site-preferences">
					<span slot="icon">
						<Settings size={48} />
					</span>
				</Link>
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
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
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
