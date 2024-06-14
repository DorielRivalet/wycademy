<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';

	export let buttonText: string;
	export let bodyText: string;
	export let buttonLink: string;
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
		display: flex;
		align-items: center;
		border-radius: 4px 4px 4px 4px;
	}

	p {
		padding: 1rem;
	}
</style>
