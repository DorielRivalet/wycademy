<script lang="ts">
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';

	interface Props {
		faq: { question: string; answer: string }[];
		/**in vh*/
		minHeight?: number;
	}

	let { faq, minHeight = 90 }: Props = $props();
</script>

<div class="faq" style="min-height: {minHeight}vh;">
	<Accordion>
		{#each faq as faqEntry, i}
			<AccordionItem open={i === 0}>
				{#snippet title()}
					<p class="question">{faqEntry.question}</p>
				{/snippet}
				<div class="answer paragraph-long-02">{faqEntry.answer}</div>
			</AccordionItem>
		{/each}
	</Accordion>
</div>

<style lang="scss">
	.faq {
		padding: 2rem;
		width: 80vw;
		margin: auto;
	}

	.question {
		font-size: 1.5em;
	}

	.answer {
		padding: 2rem;
	}
</style>
