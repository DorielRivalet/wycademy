<script lang="ts">
	import Star from 'carbon-icons-svelte/lib/Star.svelte';
	import StarHalf from 'carbon-icons-svelte/lib/StarHalf.svelte';
	import StarFilled from 'carbon-icons-svelte/lib/StarFilled.svelte';

	interface Props {
		rating: number;
		maxRating: number;
	}

	let { rating, maxRating }: Props = $props();

	let stars = $derived(Array(maxRating)
		.fill(0)
		.map((_, index) => {
			const value = index + 1;
			if (value <= rating) return 'full';
			if (value - 0.5 <= rating) return 'half';
			return 'empty';
		}));
</script>

<div class="star-rating">
	{#each stars as star}
		{#if star === 'full'}
			<StarFilled color="var(--ctp-yellow)" stroke="black" />
		{:else if star === 'half'}
			<StarHalf color="var(--ctp-yellow)" stroke="black" />
		{:else}
			<Star />
		{/if}
	{/each}
</div>

<style lang="scss">
	.star-rating {
		display: flex;
		align-items: center;
	}
</style>
