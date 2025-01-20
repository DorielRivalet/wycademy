<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import UserProfile from 'carbon-icons-svelte/lib/UserProfile.svelte';
	import EmoteWave from '$lib/client/images/icon/emote/wave.webp';
</script>

<div class="container">
	<SectionHeadingTopLevel title="Your Profile" />
	<div class="contents">
		<img alt="Wave" src={EmoteWave} />

		<p>Set up your profile username by going into your settings!</p>
		<p>
			Selecting a profile username will create your profile page, where users
			can see your quest history, guild card, and much more!
		</p>
		<div class="buttons">
			<Button kind="primary" href="/onboarding/leaderboards" icon={UserProfile}
				>Set up Public Profile</Button
			>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 2rem;
		width: 90%;
		margin-left: auto;
		margin-right: auto;
	}

	.contents {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}
</style>
