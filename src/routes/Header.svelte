<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import Settings from 'carbon-icons-svelte/lib/Settings.svelte';
	import Banner from '$lib/client/components/Banner.svelte';
	import UserAvatar from 'carbon-icons-svelte/lib/UserAvatar.svelte';
	import WycademySearch from '$lib/client/components/frontier/WycademySearch.svelte';
	import ThemeChanger from './ThemeChanger.svelte';
	import Notification from 'carbon-icons-svelte/lib/Notification.svelte';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import NotificationNew from 'carbon-icons-svelte/lib/NotificationNew.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import HeaderNavigationMenuButton from './HeaderNavigationMenuButton.svelte';
	import HeaderNavigationButton from './HeaderNavigationButton.svelte';
	import HeaderHamburgerMenu from './HeaderHamburgerMenu.svelte';

	const breakpointSize = breakpointObserver();
	const breakpointLargerThanSmall = breakpointSize.largerThan('sm');
	const breakpointLargerThanMedium = breakpointSize.largerThan('md');

	// Shared state to track which menu is open
	let openMenu: null | MenuId = null;

	// TODO bugged
	type MenuId = 'guides' | 'tools' | 'support';

	const handleToggle = ({ detail }) => {
		// Update openMenu based on received id
		openMenu = detail.id !== null ? detail.id : null;
	};
</script>

<header>
	<div class="left">
		{#if !$breakpointLargerThanMedium}
			<HeaderHamburgerMenu />
		{/if}
		<div class="banner">
			<Banner />
		</div>
		<div class="banner-border"></div>
	</div>

	<nav class="right">
		<ul>
			{#if $breakpointLargerThanMedium}
				<div class="container-link">
					<HeaderNavigationButton
						path="/leaderboard"
						description="Leaderboards"
					/>
				</div>
				<div class="container-link">
					<HeaderNavigationMenuButton
						path="/hunter-notes"
						description="Guides"
						id="guides"
						{openMenu}
						on:toggle={handleToggle}
					/>
				</div>
				<div class="container-link">
					<HeaderNavigationMenuButton
						path="/tools"
						description="Tools"
						id="tools"
						{openMenu}
						on:toggle={handleToggle}
					/>
				</div>
				<div class="container-link">
					<HeaderNavigationMenuButton
						path="/support"
						description="Support"
						id="support"
						{openMenu}
						on:toggle={handleToggle}
					/>
				</div>
				<!-- TODO only show when an event is active or recently active <div class="container-link">
					<HeaderNavigationButton path="/events" description="Events" />
				</div> -->
			{/if}
		</ul>

		<div class="container-header-action">
			<WycademySearch />
		</div>

		{#if $breakpointLargerThanMedium}
			<div class="container-header-action">
				<ThemeChanger />
			</div>
		{/if}
		<div class="container-header-action">
			<!-- TODO only show when logged in, give mini guide when logged in showing that this is
			 for notifications, or as first notification message upon sign up.
			<Button
				tooltipPosition="left"
				kind="ghost"
				on:click={() => {
					notificationSeenStore.set(true);
				}}
				iconDescription={!$notificationSeenStore &&
				$notificationsStore &&
				newVersionAvailable !== ''
					? `New overlay version available')}`
					: 'You have no unread notifications'}
				href="/notifications"
			>
				<span slot="icon">
					{#if !$notificationSeenStore && $notificationsStore && newVersionAvailable !== ''}
						<NotificationNew size={20} color="var(--ctp-peach)" />
					{:else}
						<Notification size={20} color="var(--ctp-text)" />
					{/if}</span
				>
			</Button> -->
		</div>
		<!-- TODO: profile disclosure-->
		{#if $breakpointLargerThanSmall}
			<div class="container-header-action">
				<Button
					kind="ghost"
					href="/site-preferences"
					tooltipPosition="left"
					iconDescription="Site Preferences"
				>
					<span slot="icon"><Settings size={20} color="var(--ctp-text)" /></span
					>
				</Button>
			</div>
		{/if}
		<div class="container-header-action">
			<Button
				kind="ghost"
				href="/signup"
				tooltipPosition="left"
				iconDescription="Account"
				><span slot="icon">
					<UserAvatar size={20} color="var(--ctp-text" /></span
				>
			</Button>
		</div>
	</nav>
</header>

<style lang="scss">
	@use '@carbon/type' as type;

	header {
		display: flex;
		justify-content: space-between;
		height: 3rem;
		width: 100%;
		padding: 0;
		margin: 0;
		background-color: var(--ctp-crust);
	}

	.banner {
		height: 100%;
		padding-left: var(--cds-spacing-05);
		padding-right: var(--cds-spacing-07);
	}

	.banner-border {
		border-right: 1px solid var(--ctp-surface1);
		height: 50%;
		display: flex;
		transform: translateY(50%);
	}

	.container-link {
		padding-left: var(--cds-spacing-05);
		padding-right: var(--cds-spacing-05);
	}

	.container-header-action {
		height: 48px;
		width: 100%;

		span {
			height: 20px;
			width: 20px;
		}
	}

	.left {
		display: flex;
		height: 100%;
	}

	.right {
		display: flex;
		height: 100%;
	}

	ul {
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		list-style: none;
		height: 100%;
	}
</style>
