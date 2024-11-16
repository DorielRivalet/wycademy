<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';

	interface Props {
		buttonText: string;
		bodyText: string;
		buttonLink: string;
	}

	let { buttonText, bodyText, buttonLink }: Props = $props();
</script>

<div class="container">
	<Button expressive href={buttonLink} type="primary" size="lg"
		>{buttonText}</Button
	>
	<p>{bodyText}</p>
</div>

<style lang="scss">
	.container {
		border: 2px solid var(--ctp-overlay0);
		background-color: var(--ctp-surface0);
		border-radius: 4px 4px 4px 4px;
		display: grid;
		grid-template-columns: 1fr 3fr;
	}

	p {
		padding: 1rem;
	}
</style>
