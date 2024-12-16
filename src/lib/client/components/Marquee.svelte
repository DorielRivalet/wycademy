<script lang="ts">
	
	interface Props {
		pauseOnHover?: boolean;
		vertical?: boolean;
		repeat?: number;
		reverse?: boolean;
		class?: string;
		style: any;
		children?: import('svelte').Snippet;
	}

	let {
		pauseOnHover = false,
		vertical = false,
		repeat = 4,
		reverse = false,
		class: className = '',
		style,
		children
	}: Props = $props();
</script>

<div
	{style}
	class="marquee-container {vertical
		? 'marquee-container--vertical'
		: 'marquee-container--horizontal'}
  {pauseOnHover ? 'pause-on-hover' : ''} {className}"
>
	{#each { length: repeat } as _, i (i)}
		<div
			class="marquee-content
      {vertical ? 'marquee-content--vertical' : 'marquee-content--horizontal'}
      {reverse ? 'reverse' : ''}"
		>
			{#if children}{@render children()}{:else}Default{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	// Variables
	$marquee-duration: 2s;
	$marquee-gap: 1rem;

	.marquee-container {
		display: flex;
		overflow: hidden;
		padding: 0.5rem;
		--duration: #{$marquee-duration};
		--gap: #{$marquee-gap};
		gap: var(--gap);

		&--horizontal {
			flex-direction: row;
		}

		&--vertical {
			flex-direction: column;
		}
	}

	.marquee-content {
		flex-shrink: 0;
		display: flex;
		justify-content: space-around;
		gap: var(--gap);

		&--horizontal {
			flex-direction: row;
			animation: marquee var(--duration) linear infinite;

			&.reverse {
				animation-direction: reverse;
			}
		}

		&--vertical {
			flex-direction: column;
			animation: marquee-vertical var(--duration) linear infinite;

			&.reverse {
				animation-direction: reverse;
			}
		}

		.pause-on-hover:hover & {
			animation-play-state: paused;
		}
	}

	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - var(--gap)));
		}
	}

	@keyframes marquee-vertical {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(calc(-100% - var(--gap)));
		}
	}
</style>
