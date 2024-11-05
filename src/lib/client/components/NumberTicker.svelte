<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';

	export let value;
	export let initial = 0;
	export let duration = 6000;
	let num = tweened(initial, {
		duration: duration,
		easing: cubicOut,
	});

	onMount(() => {
		num.set(value);
	});
</script>

<div class="number-ticker">
	{$num.toFixed(0)}+
</div>

<style lang="scss">
	.number-ticker {
		display: inline-block;
		font-feature-settings: 'normal';
	}
</style>
