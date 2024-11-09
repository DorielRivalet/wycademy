<script lang="ts">
	import ProgressBar from 'carbon-components-svelte/src/ProgressBar/ProgressBar.svelte';
	import { onMount, onDestroy } from 'svelte';

	export let title: string;
	export let description: string;
	export let progressPosition: 'top' | 'bottom' = 'bottom';
	export let progressBarValue: number;
	export let titleColor: string;

	let progressBarInterval: ReturnType<typeof setInterval> | null = null;

	onMount(() => {
		progressBarInterval = setInterval(() => {
			progressBarValue += 100 / 50; // Increment progress bar by 2% every 50ms
			if (progressBarValue >= 100) {
				progressBarValue = 0; // Reset progress bar to 0
				clearInterval(progressBarInterval!);
			}
		}, 50);
	});

	onDestroy(() => {
		if (progressBarInterval) {
			clearInterval(progressBarInterval);
		}
	});
</script>

<div class="container">
	{#if progressPosition === 'top'}
		<div>
			<ProgressBar
				hideLabel
				value={progressBarValue}
				labelText="Feature progress"
				helperText=""
			/>
		</div>
	{/if}
	<div class="icon"><slot /></div>
	<p class="title" style="color: {titleColor};">
		{title}
	</p>
	<p class="description">{description}</p>
	{#if progressPosition === 'bottom'}
		<div>
			<ProgressBar
				size="sm"
				hideLabel
				value={progressBarValue}
				labelText="Feature progress"
				helperText=""
			/>
		</div>
	{/if}
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		gap: 1rem;
	}

	.title {
		font-weight: bold;
		font-size: 1.25em;
	}

	.icon {
		padding: 1rem;
		background-color: var(--ctp-surface0);
		border-radius: 100%;
		border: 2px solid var(--ctp-surface1);
		width: 64px;
		margin: auto;
	}
</style>
