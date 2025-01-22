<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import OnboardingPageCard from './OnboardingPageCard.svelte';
	import TrophyWhite from '$lib/client/components/frontier/icon/TrophyWhite.svelte';
	import type { Component } from 'svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Restart from 'carbon-icons-svelte/lib/Restart.svelte';
	import ToastNotification from 'carbon-components-svelte/src/Notification/ToastNotification.svelte';
	import { fade } from 'svelte/transition';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { OnboardingType } from '$lib/client/types/onboarding';

	const onboardingTypeStore = getContext(
		Symbol.for('onboardingType'),
	) as Writable<OnboardingType>;

	const onboardingStepStore = getContext(
		Symbol.for('onboardingStep'),
	) as Writable<number>;

	function onReset() {
		$onboardingTypeStore = '';
		$onboardingStepStore = 0;

		toastNotificationTitle = 'Success';
		toastNotificationSubtitle = 'Progress reset!';
		toastNotificationKind = 'success';
		toastNotificationTimeout = undefined;
		toastNotificationTimeout = toastNotificationDuration;
	}

	const toastNotificationDuration = 5_000;
	let toastNotificationTimeout: number | undefined = $state(undefined);
	let showToastNotification = $derived(toastNotificationTimeout !== undefined);
	let toastNotificationKind:
		| 'warning'
		| 'info'
		| 'error'
		| 'success'
		| 'info-square'
		| 'warning-alt'
		| undefined = $state('info');
	let toastNotificationTitle = $state('');
	let toastNotificationSubtitle = $state('');

	const pages: {
		title: string;
		description: string;
		href: string;
		src: string | Component;
	}[] = [
		{
			title: 'Leaderboards',
			description: 'Learn how to create a profile and submit quests.',
			href: '/onboarding/leaderboards',
			src: TrophyWhite,
		},
	];
</script>

{#if showToastNotification}
	<div transition:fade class="toast-notification">
		<ToastNotification
			hideCloseButton
			timeout={toastNotificationTimeout}
			kind={toastNotificationKind}
			title={toastNotificationTitle}
			subtitle={toastNotificationSubtitle}
			caption={new Date().toLocaleString()}
			on:close={(e) => {
				toastNotificationTimeout = undefined;
				//console.log(e.detail.timeout); // true if closed via timeout
			}}
		/>
	</div>
{/if}

<div class="container">
	<SectionHeadingTopLevel title="Onboarding" />
	<div class="reset-button">
		<Button kind="tertiary" icon={Restart} on:click={onReset}
			>Reset Onboarding Progress</Button
		>
	</div>
	<div class="cards">
		{#each pages as page}
			<OnboardingPageCard
				click={() => console.log('clicked')}
				href={page.href}
				title={page.title}
				src={page.src}
				description={page.description}
			/>
		{/each}
	</div>
</div>

<style lang="scss">
	.toast-notification {
		position: fixed;
		top: 5vh;
		right: 0;
	}

	.container {
		margin-top: 2rem;
		width: 90%;
		margin-right: auto;
		margin-left: auto;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
		gap: 1rem;
	}

	.reset-button {
		display: flex;
		margin-bottom: 1rem;
	}
</style>
