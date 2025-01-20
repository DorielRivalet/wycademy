<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Help from 'carbon-icons-svelte/lib/Help.svelte';
	import HomeFollowers from './HomeFollowers.svelte';
	import HomeLatestQuests from './HomeLatestQuests.svelte';
	import UserProfile from 'carbon-icons-svelte/lib/UserProfile.svelte';
	import EmoteWave from '$lib/client/images/icon/emote/wave.webp';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';

	let { data } = $props();
	let { profile } = $derived(data);
</script>

<div>
	<div class="banner">
		<!-- {#if $onboardingEnabledStore}
			<InlineNotification
				lowContrast
				kind="info"
				title="Onboarding:"
				on:close={() => onboardingEnabledStore.set(false)}
				subtitle="Would you like to see a demo of what you can do in Wycademy?"
			>
				{#snippet actions()}
					<NotificationActionButton on:click={() => goto('/onboarding')}
						>See demo</NotificationActionButton
					>
				{/snippet}
			</InlineNotification>
		{/if} -->
	</div>

	{#if profile?.username_set}
		<div class="contents">
			<SectionHeadingTopLevel title="Home" />
			<HomeFollowers />
			<HomeLatestQuests />
			<div class="home-footer">
				<Button kind="primary" href="/onboarding" icon={Help}
					>Go to onboarding page</Button
				>
				<p class="survey-link">
					Enjoying Wycademy? <OutboundLink
						href="https://forms.gle/hfFG7QWNcrCHnDV67"
						>Complete our feedback survey!</OutboundLink
					>
				</p>
			</div>
		</div>
	{:else}
		<div class="setup">
			<SectionHeadingTopLevel
				title={`Welcome to Wycademy, ${profile?.discord_username}`}
			/>
			<div>
				<img alt="Wave" src={EmoteWave} />
				<p>Set up your profile username by going into your settings!</p>
				<p>
					Selecting a profile username will create your profile page, where
					users can see your quest history, guild card, and much more!
				</p>
				<div class="buttons">
					<Button
						kind="primary"
						href="/onboarding/leaderboards"
						icon={UserProfile}>Set up Public Profile</Button
					>
				</div>
			</div>
		</div>
	{/if}
	<!-- {#if session}
		<div class="session-data">
			<code><pre>Session: {JSON.stringify(session, null, 2)}</pre></code>
			<code><pre>User: {JSON.stringify(user, null, 2)}</pre></code>
			<code><pre>Profile: {JSON.stringify(profile, null, 2)}</pre></code>
		</div>
	{/if} -->
</div>

<style lang="scss">
	.banner {
		display: flex;
		justify-content: center;
		background-color: var(--ctp-mantle);
	}

	.session-data {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 100%;
		overflow-x: auto;
		background-color: var(--ctp-mantle);
	}

	.setup {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 90%;
		margin-left: auto;
		margin-right: auto;

		> div {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			align-items: center;
		}
	}

	.contents {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
		width: 90%;
		margin-left: auto;
		margin-right: auto;
	}

	.buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	.home-footer {
		display: flex;
		gap: 1rem;
		align-items: center;
		flex-direction: column;
	}
</style>
