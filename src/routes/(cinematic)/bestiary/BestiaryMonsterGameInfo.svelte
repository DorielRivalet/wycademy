<script lang="ts">
	import DecoratedBorder from '$lib/client/components/frontier/DecoratedBorder.svelte';

	export let title;
	export let type;
	export let hunted = 0;
	export let description = 'Description';
</script>

<div style="display: flex;">
	<DecoratedBorder>
		<div class="container">
			<div class="title">
				<span class="text-yellow">Title<span class="double-width">:</span></span
				>{title}
			</div>
			<div class="type">
				<span class="text-yellow">Type<span class="double-width">:</span></span
				>{type}
			</div>
			<div class="hunted">
				<span class="text-yellow"
					>Hunted<span class="double-width">:</span></span
				>{hunted} (global, rank #1)
			</div>
			<div class="image">
				<slot></slot>
			</div>
			<div class="description">{description}</div>
			<div></div>
		</div>
	</DecoratedBorder>
</div>

<style lang="scss">
	.container {
		padding: 0.5rem;
		background-color: #11111b;
		aspect-ratio: 2.5;
		color: var(--ctp-mocha-text);
		font-family: var(--font-game);
		font-size: 18px;
		font-weight: 500;
		width: 39ch;
		line-height: 1.25em;
	}

	.double-width-transform {
		transform: scaleX(2);
		display: inline-block;
		margin-right: var(--cds-spacing-02);
		margin-left: var(--cds-spacing-02);
	}

	.double-width {
		width: 2ch;
		margin-right: var(--cds-spacing-02);
		margin-left: var(--cds-spacing-02);
	}

	.text-yellow {
		color: var(--fz-text-yellow);
	}

	.image {
		margin-top: 1rem;
		margin-bottom: 1rem;
		margin-left: 1rem;
	}
</style>
