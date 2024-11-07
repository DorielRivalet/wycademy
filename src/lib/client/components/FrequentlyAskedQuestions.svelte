<script lang="ts">
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';

	export let faq: { question: string; answer: string }[];
	export let minHeight: number = 90;
</script>

<div class="faq" style="min-height: {minHeight}vh;">
	<Accordion>
		{#each faq as faqEntry, i}
			<AccordionItem open={i === 0}>
				<svelte:fragment slot="title">
					<p class="question">{faqEntry.question}</p>
				</svelte:fragment>
				<p class="answer">{faqEntry.answer}</p>
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
