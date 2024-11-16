<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';

	interface Props {
		value: any;
		initial?: number;
		duration?: number;
	}

	let { value, initial = 0, duration = 6000 }: Props = $props();
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
