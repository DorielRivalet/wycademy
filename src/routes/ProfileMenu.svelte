<script lang="ts">
	import Avatar from '$lib/client/components/Avatar.svelte';
	import DefaultAvatar from '$lib/client/images/icon/transcend.webp';
	import { type SelectProfile } from '$lib/db/schema';
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';
	import ThemeChanger from './ThemeChanger.svelte';
	import Popover from 'carbon-components-svelte/src/Popover/Popover.svelte';
	import Logout from 'carbon-icons-svelte/lib/Logout.svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import { slide } from 'svelte/transition';
	import Home from 'carbon-icons-svelte/lib/Home.svelte';
	import Settings from 'carbon-icons-svelte/lib/Settings.svelte';
	import ColorPalette from 'carbon-icons-svelte/lib/ColorPalette.svelte';
	import Information from 'carbon-icons-svelte/lib/Information.svelte';
	import UserFeedback from 'carbon-icons-svelte/lib/UserFeedback.svelte';
	import UserProfile from 'carbon-icons-svelte/lib/UserProfile.svelte';
	import { driver } from 'driver.js';
	import 'driver.js/dist/driver.css';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { OnboardingType } from '$lib/client/types/onboarding';

	// TODO
	const onboardingTypeStore = getContext(
		Symbol.for('onboardingType'),
	) as Writable<OnboardingType>;

	const onboardingStepStore = getContext(
		Symbol.for('onboardingStep'),
	) as Writable<number>;

	interface Props {
		profile: SelectProfile;
	}

	let { profile }: Props = $props();

	let open = $state(false);
	let ref: HTMLDivElement | null = $state(null);
	let inWalkthrough = $state(false);

	const delay = (ms: number | undefined) =>
		new Promise((res) => setTimeout(res, ms));

	async function setUsernameWalkthrough() {
		if (!browser) return;
		if ($onboardingStepStore !== 3) return;
		open = true;
		inWalkthrough = true;

		const driverObj = driver({
			popoverClass: 'driverjs-theme',
			allowClose: false,
			disableActiveInteraction: true,
			onDestroyed: () => {
				open = false;
				inWalkthrough = false;
			},
			steps: [
				{
					element: '.driverjs-0-3',
					popover: {
						title: 'Username Set!',
						description: 'Now you can navigate to your public profile.',
						onNextClick: async () => {
							// .. load element dynamically
							// .. and then call
							open = true;
							await delay(150);

							driverObj.moveNext();
						},
					},
				},
				{
					element: '.driverjs-1-3',
					popover: {
						title: 'Public Profile',
						description:
							'You can navigate to your Public Profile via the Profile Menu.',
						onNextClick: async () => {
							// .. load element dynamically
							// .. and then call
							open = true;
							driverObj.moveNext();
						},
					},
					onHighlightStarted: () => {
						open = true;
					},
				},
				{
					element: '.driverjs-2-3',
					popover: {
						title: 'Submit Quests',
						description: 'Navigate to the Submit Quests option.',
						onNextClick: async () => {
							// .. load element dynamically
							// .. and then call
							open = true;
							$onboardingStepStore = 4;
							goto('/quest-viewer');
							driverObj.moveNext();
						},
					},
					onHighlightStarted: () => {
						open = true;
					},
				},
			],
		});

		driverObj.drive();
	}

	async function startWalkthrough() {
		if (!browser) return;
		if ($onboardingStepStore !== 1) return;
		open = true;
		inWalkthrough = true;

		const driverObj = driver({
			popoverClass: 'driverjs-theme',
			allowClose: false,
			disableActiveInteraction: true,
			onDestroyed: () => {
				open = false;
				inWalkthrough = false;
			},
			steps: [
				{
					element: '.driverjs-profile-menu',
					popover: {
						title: 'Profile Menu',
						description: 'Open your profile menu',
						onNextClick: async () => {
							// .. load element dynamically
							// .. and then call
							open = true;
							await delay(150);

							driverObj.moveNext();
						},
					},
				},
				{
					element: '.driverjs-1-1',
					popover: {
						title: 'Select an Option',
						description: 'Navigate to your Public Profile Settings.',
						onNextClick: async () => {
							// .. load element dynamically
							// .. and then call
							open = true;
							$onboardingStepStore = 2;
							goto('/settings/profile');
							driverObj.moveNext();
						},
					},
					onHighlightStarted: () => {
						open = true;
					},
				},
			],
		});

		driverObj.drive();
	}

	$effect(() => {
		if ($onboardingTypeStore === 'leaderboards' && $onboardingStepStore === 1) {
			open = true;
			startWalkthrough();
		} else if (
			$onboardingTypeStore === 'leaderboards' &&
			$onboardingStepStore === 3
		) {
			open = true;
			setUsernameWalkthrough();
		}
	});

	// $inspect(open);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div style:height="100%" bind:this={ref} style:position="relative">
	<div
		style:height="100%"
		onclick={() => (open = !open)}
		class="driverjs-profile-menu driverjs-0-3 avatar"
	>
		<Avatar height={'100%'} src={profile.discord_avatar ?? DefaultAvatar} />
	</div>
	<Popover
		bind:open
		align="bottom-right"
		on:click:outside={({ detail }) => {
			open = inWalkthrough ? open : ref.contains(detail.target);
		}}
	>
		{#if open}
			<div class="popover-content" transition:slide={{ duration: 150 }}>
				<div class="header">
					<div class="header-avatar">
						<Avatar
							height={'64px'}
							src={profile.discord_avatar ?? DefaultAvatar}
						/>
					</div>
					<div class="header-text">
						<p><strong>{profile.discord_username}</strong></p>
						<p>{profile.username}</p>
						{#if profile.private}
							<p class="subtle">Private</p>
						{:else if !profile.username_set}
							<p class="subtle">Newcomer</p>
						{/if}
					</div>
				</div>
				<ClickableTile
					on:click={(e) => (open = false)}
					href={inWalkthrough
						? undefined
						: profile.username_set
							? '/profile'
							: '/onboarding/leaderboards'}
				>
					<div class="tile-contents lavender driverjs-1-3">
						<p>
							{profile.username_set ? 'View Profile' : 'Set up Public Profile'}
						</p>
						<div>
							<UserProfile size={24} />
						</div>
					</div>
				</ClickableTile>
				<hr />
				<ClickableTile href={'/home'} on:click={(e) => (open = false)}>
					<div class="tile-contents blue">
						<p>Home</p>
						<div>
							<Home size={24} />
						</div>
					</div>
				</ClickableTile>
				<ClickableTile
					on:click={(e) => (open = false)}
					href={inWalkthrough ? undefined : '/quest-viewer'}
				>
					<div class="tile-contents sapphire driverjs-2-3">
						<p>Submit Quests</p>
						<div>
							<Add size={24} />
						</div>
					</div>
				</ClickableTile>
				<hr />
				<ClickableTile
					on:click={(e) => (open = false)}
					href={'/site-preferences'}
				>
					<div class="tile-contents sky">
						<p>Site Preferences</p>
						<div>
							<ColorPalette size={24} />
						</div>
					</div>
				</ClickableTile>
				<ClickableTile
					on:click={(e) => (open = false)}
					href={inWalkthrough ? undefined : '/settings/profile'}
				>
					<div class="tile-contents teal driverjs-1-1">
						<p>Account Settings</p>
						<div>
							<Settings size={24} />
						</div>
					</div>
				</ClickableTile>
				<ClickableTile
					on:click={(e) => (open = false)}
					href={'/support/website/feedback'}
				>
					<div class="tile-contents green">
						<p>Feedback</p>
						<div>
							<UserFeedback size={24} />
						</div>
					</div>
				</ClickableTile>
				<ClickableTile
					on:click={(e) => (open = false)}
					href={'/support/website/about'}
				>
					<div class="tile-contents maroon">
						<p>About</p>
						<div>
							<Information size={24} />
						</div>
					</div>
				</ClickableTile>
				<ClickableTile>
					<div class="tile-contents mauve">
						<p>Change Theme:</p>
						<div class="theme-changer-icon">
							<ThemeChanger />
						</div>
					</div>
				</ClickableTile>
				<hr />

				<ClickableTile on:click={(e) => (open = false)} href={'/auth/signout'}>
					<div class="tile-contents red">
						<p>Log out</p>
						<div>
							<Logout size={24} />
						</div>
					</div>
				</ClickableTile>
			</div>
		{/if}
	</Popover>
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;

	.red:hover {
		color: var(--ctp-red);
		filter: brightness(110%) drop-shadow(0 0 8px var(--ctp-text));
		transition:
			filter motion.$duration-slow-02 motion.motion(standard, expressive),
			color motion.$duration-slow-02 motion.motion(standard, expressive);
	}

	.blue:hover {
		color: var(--ctp-blue);
		transition:
			filter motion.$duration-slow-02 motion.motion(standard, expressive),
			color motion.$duration-slow-02 motion.motion(standard, expressive);
	}

	.green:hover {
		color: var(--ctp-green);
		transition:
			filter motion.$duration-slow-02 motion.motion(standard, expressive),
			color motion.$duration-slow-02 motion.motion(standard, expressive);
	}

	.yellow:hover {
		color: var(--ctp-yellow);
		transition:
			filter motion.$duration-slow-02 motion.motion(standard, expressive),
			color motion.$duration-slow-02 motion.motion(standard, expressive);
	}

	.mauve:hover {
		color: var(--ctp-mauve);
		transition:
			filter motion.$duration-slow-02 motion.motion(standard, expressive),
			color motion.$duration-slow-02 motion.motion(standard, expressive);
	}

	.peach:hover {
		color: var(--ctp-peach);
		transition:
			filter motion.$duration-slow-02 motion.motion(standard, expressive),
			color motion.$duration-slow-02 motion.motion(standard, expressive);
	}

	.sky:hover {
		color: var(--ctp-sky);
		transition:
			filter motion.$duration-slow-02 motion.motion(standard, expressive),
			color motion.$duration-slow-02 motion.motion(standard, expressive);
	}

	.sapphire:hover {
		color: var(--ctp-sapphire);
		transition:
			filter motion.$duration-slow-02 motion.motion(standard, expressive),
			color motion.$duration-slow-02 motion.motion(standard, expressive);
	}

	.teal:hover {
		color: var(--ctp-teal);
		transition:
			filter motion.$duration-slow-02 motion.motion(standard, expressive),
			color motion.$duration-slow-02 motion.motion(standard, expressive);
	}

	.popover-content {
		display: flex;
		flex-direction: column;
		max-height: 85vh;
		overflow-y: auto;
	}

	.header {
		padding: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	hr {
		width: 100%;
		height: 1px;
		background-color: var(--ctp-surface1);
		margin: 0;
	}

	.theme-changer-icon {
		padding: 0.5rem;
		border-radius: 8px;
		border: 1px solid var(--ctp-overlay0);
	}

	.tile-contents {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
	}

	.avatar {
		transition: filter motion.$duration-moderate-02
			motion.motion(standard, expressive);
	}

	.avatar:hover {
		cursor: var(--cursor-icon-pointer);
		filter: brightness(110%);
	}
</style>
