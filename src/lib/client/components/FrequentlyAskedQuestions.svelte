<script lang="ts">
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';

	export let faq: { question: string; answer: string }[];
</script>

<div class="faq">
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
		min-height: 90vh;
	}

	.question {
		font-size: 1.5em;
	}

	.answer {
		padding: 2rem;
	}
</style>
