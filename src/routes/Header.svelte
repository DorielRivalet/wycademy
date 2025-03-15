<!--
  ~ © 2024 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import Banner from '$lib/client/components/Banner.svelte';
	import UserAvatar from 'carbon-icons-svelte/lib/UserAvatar.svelte';
	import WycademySearch from '$lib/client/components/frontier/WycademySearch.svelte';
	import ThemeChanger from './ThemeChanger.svelte';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import HeaderNavigationMenuButton from './HeaderNavigationMenuButton.svelte';
	import HeaderNavigationButton from './HeaderNavigationButton.svelte';
	import HeaderHamburgerMenu from './HeaderHamburgerMenu.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { type SelectProfile } from '$lib/db/schema';
	import ProfileMenu from './ProfileMenu.svelte';
	import NotificationsMenu from './NotificationsMenu.svelte';
	import SettingsMenu from './SettingsMenu.svelte';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	interface Props {
		profile: SelectProfile | null; // TODO
	}

	let { profile }: Props = $props();

	const breakpointSize = breakpointObserver();
	const breakpointLargerThanMedium = breakpointSize.largerThan('md');

	// Shared state to track which menu is open
	let openMenu: MenuId = $state(null);

	// TODO fixed?
	type MenuId = null | 'guides' | 'tools' | 'support';

	const handleToggle = (id: MenuId) => {
		// Update openMenu based on received id
		openMenu = id !== null ? id : null;
		return openMenu;
	};
</script>

<header>
	<div class="left">
		{#if !$breakpointLargerThanMedium}
			<HeaderHamburgerMenu />
		{/if}
		<div class="banner">
			<Banner theme={$carbonThemeStore} />
		</div>
		<div class="banner-border"></div>
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
						toggle={(id) => handleToggle(id)}
					/>
				</div>
				<div class="container-link">
					<HeaderNavigationMenuButton
						path="/tools"
						description="Tools"
						id="tools"
						{openMenu}
						toggle={(id) => handleToggle(id)}
					/>
				</div>
				<div class="container-link">
					<HeaderNavigationMenuButton
						path="/support"
						description="Support"
						id="support"
						{openMenu}
						toggle={(id) => handleToggle(id)}
					/>
				</div>
				<!-- TODO only show when an event is active or recently active <div class="container-link">
					<HeaderNavigationButton path="/events" description="Events" />
				</div> -->
			{/if}
		</ul>
	</div>

	<nav class="right">
		<div class="container-header-action">
			<WycademySearch />
		</div>

		{#if $breakpointLargerThanMedium && !profile}
			<div class="container-header-action">
				<ThemeChanger />
			</div>
		{/if}
		<div class="container-header-action">
			<!-- TODO only show when logged in, give mini guide when logged in showing that this is
			 for notifications, or as first notification message upon sign up. -->
			{#if profile}
				<div class="notification-icon">
					<NotificationsMenu {profile} />
				</div>
			{/if}
		</div>
		<!-- TODO: profile disclosure-->
		<div class="container-header-action">
			<div>
				<SettingsMenu />
			</div>
		</div>

		<div class="container-header-action">
			{#if profile}
				<div class="avatar">
					<ProfileMenu {profile} />
				</div>
			{:else}
				<Button
					kind="ghost"
					href="/signup"
					tooltipPosition="left"
					iconDescription="Sign up"
					><span slot="icon">
						<UserAvatar size={20} color="var(--ctp-text)" /></span
					>
				</Button>
			{/if}
		</div>
	</nav>
</header>

<style lang="scss">
	@use '@carbon/type' as type;
	@use '@carbon/motion' as motion;

	.avatar {
		height: 100%;
		padding: 0.25rem;
	}

	.avatar:hover {
		cursor: var(--cursor-icon-pointer);
	}

	.notification-icon {
		height: 100%;
	}

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
		margin-right: 1rem;
	}

	.container-link {
		padding: 0px;
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
