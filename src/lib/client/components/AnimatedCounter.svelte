<script lang="ts">
	import NumberTicker from './NumberTicker.svelte';

	interface Props {
		value: number;
		text: string;
		color: string;
		href: string;
		children?: import('svelte').Snippet;
	}

	let {
		value,
		text,
		color,
		href,
		children
	}: Props = $props();
</script>

<div class="container">
	<a {href}>
		<button class="icon">
			{@render children?.()}
		</button></a
	>
	<p class="value" style:color>
		<NumberTicker {value} />
	</p>
	<p class="text">{text}</p>
</div>

<style lang="scss">
	@use '@carbon/type' as type;
	@use '@carbon/motion' as motion;

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		@include type.type-style('code-02');
	}

	.icon {
		all: unset;
		padding: 1rem;
		background-color: var(--ctp-surface0);
		border: 4px outset var(--ctp-surface1);
		border-radius: 100%;
		filter: drop-shadow(0 0 4px var(--ctp-text));
	}

	.icon:hover {
		transition:
			background-color motion.$duration-fast-02
				motion.motion(standard, expressive),
			filter motion.$duration-fast-02 motion.motion(standard, expressive),
			transform motion.motion(standard, expressive);
		filter: drop-shadow(0 0 8px var(--ctp-blue));
		transform: scale(1.1);
		background-color: var(--ctp-surface2);
	}

	.value {
		font-size: 1.5em;
	}
</style>
