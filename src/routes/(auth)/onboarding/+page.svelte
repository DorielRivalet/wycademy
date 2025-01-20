<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import OnboardingPageCard from './OnboardingPageCard.svelte';
	import TrophyWhite from '$lib/client/components/frontier/icon/TrophyWhite.svelte';
	import type { Component } from 'svelte';

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

<div class="container">
	<SectionHeadingTopLevel title="Onboarding" />
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
</style>
