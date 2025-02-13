<script lang="ts">
	import HomeProblemSectionProblem from './HomeProblemSectionProblem.svelte';
	import Book from 'carbon-icons-svelte/lib/Book.svelte';
	import Debug from 'carbon-icons-svelte/lib/Debug.svelte';
	import AccessibilityAlt from 'carbon-icons-svelte/lib/AccessibilityAlt.svelte';
	import Locked from 'carbon-icons-svelte/lib/Locked.svelte';
	import ApplicationWeb from 'carbon-icons-svelte/lib/ApplicationWeb.svelte';
	import Growth from 'carbon-icons-svelte/lib/Growth.svelte';
	import EmoteQuestion from '$lib/client/images/icon/emote/question.webp';
	import SectionHeadingCentered from '$lib/client/components/SectionHeadingCentered.svelte';
	import MisuseOutline from 'carbon-icons-svelte/lib/MisuseOutline.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getGameIcon } from '$lib/client/modules/frontier/objects';
	import { fade } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';

	const problems: { icon: any; title: string; description: string }[] = [
		{
			icon: Book,
			title: 'Outdated Knowledge',
			description:
				'Many resources haven’t been updated in years, leaving players with outdated tips and strategies that don’t match the current state of the game.',
		},
		{
			icon: Debug,
			title: 'Loss of Maintenance',
			description:
				'Unmaintained guides and tools quickly become unusable, providing no support for bugs, new content, or improvements needed by the community.',
		},
		{
			icon: AccessibilityAlt,
			title: 'Limited Accessibility',
			description:
				'Crucial information is often hard to access due to language barriers or poor design, preventing many hunters from finding the help they need.',
		},
		{
			icon: Locked,
			title: 'Locked to Specific Platforms',
			description:
				'Resources are sometimes locked to a single platform like mobile apps or Discord bots, limiting access to players who rely on the web for convenience and reach.',
		},
		{
			icon: ApplicationWeb,
			title: 'Deprecated Web Features',
			description:
				'Old, clunky web standards make information harder to find and interact with, creating frustration for users accustomed to modern web experiences.',
		},
		{
			icon: Growth,
			title: 'Lack of Encouragement for Growth',
			description:
				'Many resources stop at the basics, missing the opportunity to educate and inspire hunters to improve, grow, and engage deeply with the game.',
		},
	];

	let elements: HTMLDivElement[] | undefined[] = $state(
		new Array(problems.length),
	);
</script>

<section class="container">
	<SectionHeadingCentered
		title="Information for Hunters Needs an Upgrade"
		section="Problem"
		level={2}
		icon={MisuseOutline}
	/>
	<div class="summary">
		<img src={EmoteQuestion} alt="Question Emote" />
		<div class="description paragraph-long-02">
			<InlineTooltip
				icon={getGameIcon('Monster Hunter Frontier Z')}
				text="Monster Hunter Frontier Z"
				tooltip="Game"
				iconType="file"
			/> is a challenging game with deep mechanics and extensive content, yet comprehensive,
			accessible resources can be hard to find. Many existing resources are incomplete
			or scattered, leaving players without the support they need.
		</div>
	</div>
	<div class="problems">
		{#each problems as problem, i}
			<IntersectionObserver
				once
				element={elements[i]}
				threshold={1}
				let:intersecting
			>
				<div bind:this={elements[i]}>
					{#if intersecting}
						<div in:fade={{ duration: 250 }}>
							<HomeProblemSectionProblem
								title={problem.title}
								description={problem.description}
								icon={problem.icon}
							/>
						</div>
					{/if}
				</div>
			</IntersectionObserver>
		{/each}
	</div>
</section>

<style lang="scss">
	@use '@carbon/motion' as motion;
	@use '@carbon/type' as type;

	.container {
		padding-top: var(--cds-spacing-08);
		padding-bottom: var(--cds-spacing-10);
		margin: auto;
		width: 90vw;
		display: flex;
		gap: 2rem;
		flex-direction: column;
	}

	.summary {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 0.5rem;

		img {
			object-fit: contain;
		}
	}

	@media (min-width: 320px) {
		.problems {
			display: grid;
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}

	@media (min-width: 1056px) {
		.problems {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 2rem;
		}
	}
</style>
