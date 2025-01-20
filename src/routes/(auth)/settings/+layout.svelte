<script lang="ts">
	import TreeView from '$lib/client/components/TreeView.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import type { TreeItem } from '$lib/client/types/tree-item';
	import UserProfile from 'carbon-icons-svelte/lib/UserProfile.svelte';
	import Notification from 'carbon-icons-svelte/lib/Notification.svelte';
	import Settings from 'carbon-icons-svelte/lib/Settings.svelte';
	import Avatar from '$lib/client/components/Avatar.svelte';
	import DefaultAvatar from '$lib/client/images/icon/transcend.webp';

	let { children, data } = $props();

	const treeData: TreeItem[] = [
		{
			id: '/settings/profile',
			text: 'Public profile',
			icon: UserProfile,
			href: '/settings/profile',
		},
		{
			id: '/settings/account',
			text: 'Account',
			icon: Settings,
			href: '/settings/account',
		},
		{
			id: '/settings/notifications',
			text: 'Notifications',
			icon: Notification,
			href: '/settings/notifications',
		},
	];
</script>

<div class="container">
	<div class="topbar">
		<div class="user-data">
			<div class="avatar">
				<Avatar
					height="64px"
					src={data.profile?.discord_avatar ?? DefaultAvatar}
					href="/profile"
				/>
			</div>
			<div class="username-container">
				<div class="username">
					<p class="discord-username">
						{data.profile?.discord_username ?? 'discord-username'}
					</p>
					<p class="profile-username">
						({data.profile?.username_set
							? data.profile?.username
							: 'username not set'})
					</p>
				</div>
				<p class="subtle">Your personal account</p>
			</div>
		</div>
		<div class="profile-button">
			<Button icon={UserProfile} href="/profile" kind="tertiary"
				>Go to your personal profile</Button
			>
		</div>
	</div>
	<div class="main-contents">
		<aside class="aside" style="background-color:var(--ctp-surface0)">
			<div class="aside-contents">
				<TreeView items={treeData} />
			</div>
		</aside>
		<div class="children">
			{@render children?.()}
		</div>
	</div>
</div>

<style lang="scss">
	@use '@carbon/type' as type;
	@use '@carbon/motion' as motion;
	// @use '$lib/client/styles/_border-all.scss';

	@media (min-width: 320px) {
		.container {
			display: flex;
			gap: 4rem;
			flex-direction: column;
		}

		.topbar {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding-left: 1rem;
			padding-right: 1rem;
			padding-bottom: 4rem;
			height: var(--cds-spacing-12);
			align-items: center;
		}

		.user-data {
			display: flex;
			gap: 1rem;
			padding-top: 1rem;
			padding-bottom: 1rem;

			.username-container {
				display: flex;
				flex-direction: column;
				gap: 0.25rem;

				.username {
					display: flex;
					gap: 0.5rem;

					.discord-username {
						font-weight: bold;
						@include type.type-style('fluid-heading-03', true);
					}

					.profile-username {
						color: var(--ctp-subtext0);
						@include type.type-style('fluid-heading-03', true);
					}
				}
			}
		}

		.main-contents {
			display: grid;
			gap: 1rem;
			grid-template-columns: auto;
			grid-template-rows: auto auto;
			grid-template-areas:
				'aside'
				'children';
		}

		aside {
			grid-area: aside;
			flex: 0 0 auto;
			background-color: var(--ctp-mantle);
		}

		.children {
			grid-area: children;
			padding-bottom: 2rem;
			width: 90%;
			margin-left: auto;
			margin-right: auto;
		}
	}

	@media (min-width: 1056px) {
		.container {
			display: flex;
			gap: 0rem;
			flex-direction: column;
		}
		.main-contents {
			display: grid;
			gap: 1rem;
			grid-template-columns: 1fr 3fr;
			grid-template-rows: auto;
			grid-template-areas: 'aside children';
		}

		.children {
			width: 90%;
			margin-left: 0px;
			margin-right: 0px;
		}
	}
</style>
