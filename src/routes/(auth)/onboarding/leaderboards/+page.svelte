<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Play from 'carbon-icons-svelte/lib/Play.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { OnboardingType } from '$lib/client/types/onboarding';
	import PreviousFilled from 'carbon-icons-svelte/lib/PreviousFilled.svelte';

	const onboardingTypeStore = getContext(
		Symbol.for('onboardingType'),
	) as Writable<OnboardingType>;

	const onboardingStepStore = getContext(
		Symbol.for('onboardingStep'),
	) as Writable<number>;

	function onOnboardingStart() {
		$onboardingTypeStore = '';
		$onboardingStepStore = 0;

		$onboardingTypeStore = 'leaderboards';
		$onboardingStepStore = 1;
	}
</script>

<div class="container">
	<div class="back-button">
		<Button kind="tertiary" icon={PreviousFilled} href="/onboarding"
			>Go Back</Button
		>
	</div>
	<SectionHeadingTopLevel title="Onboarding: Public Profile & Leaderboards" />
	<div>
		<p class="spaced-paragraph">
			On Wycademy, hunters are able to share their hunt times and statistics. In
			order to be able to share quests, you need to create a public profile.
		</p>
		<p class="spaced-paragraph">
			You can come back to this onboarding page at anytime. The onboarding page
			can be visited by clicking the "Go to onboarding page" button at the
			bottom of your homepage. Alternatively, you can search for "onboarding" in
			the Wycademy search bar.
		</p>
		<p class="spaced-paragraph">
			Pressing "Start" resets your onboarding steps progress if it was already
			set. Your progress is saved locally.
		</p>
		<Button kind="primary" icon={Play} on:click={(e) => onOnboardingStart()}
			>Start</Button
		>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		width: 90%;
		margin: 0px auto;
		margin-top: 2rem;
	}

	.back-button {
		display: flex;
		margin-bottom: 1rem;
	}
</style>
