<script lang="ts">
	import FrequentlyAskedQuestions from '$lib/client/components/FrequentlyAskedQuestions.svelte';
	import SectionHeadingCentered from '$lib/client/components/SectionHeadingCentered.svelte';
	import QuestionAnswering from 'carbon-icons-svelte/lib/QuestionAnswering.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';

	interface Props {
		faq: { question: string; answer: string }[];
	}

	let { faq }: Props = $props();
</script>

<section class="container">
	<SectionHeadingCentered
		title="Frequently Asked Questions"
		section="FAQ"
		level={2}
		icon={QuestionAnswering}
	/>
	<div class="faq">
		<FrequentlyAskedQuestions {faq} minHeight={10} />
		<p>
			Still have questions? See our <Link inline href="/support"
				>Support Center.</Link
			>
		</p>
	</div>
</section>

<style lang="scss">
	.container {
		padding-top: var(--cds-spacing-10);
		padding-bottom: var(--cds-spacing-10);
		margin: auto;
		width: 90vw;
		display: flex;
		gap: 2rem;
		flex-direction: column;
	}

	.faq {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}
</style>
