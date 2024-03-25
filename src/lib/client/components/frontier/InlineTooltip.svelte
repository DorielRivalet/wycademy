<!--
@component
Shows text next to an icon inline. You can use either a component or a image import as the icon.-->
<script lang="ts">
	import Popover from 'carbon-components-svelte/src/Popover/Popover.svelte';
	import QuestionMarkIconWhite from './icon/item/Question_Mark_Icon_White.svelte';
	export let text: string;
	export let tooltip: string;
	export let iconType: 'component' | 'file' = 'component';
	export let icon: any = QuestionMarkIconWhite;

	let open = false;
</script>

<span class="container">
	<span
		style:position="relative"
		on:mouseenter={(e) => (open = true)}
		on:mouseleave={(e) => (open = false)}
		role="tooltip"
	>
		<Popover bind:open caret align={'top'}>
			<div class="popover-content">
				{tooltip}
			</div></Popover
		>
		{#if iconType === 'file'}
			<span
				class="image"
				on:mouseenter={(e) => (open = true)}
				on:mouseleave={(e) => (open = false)}
				role="button"
				tabindex="0"
				on:keypress={(e) => open != open}
			>
				<img
					style="display: inline;"
					width="64"
					height="auto"
					src={icon}
					alt={text}
				/>
			</span>
		{:else}
			<span
				class="icon"
				on:mouseenter={(e) => (open = true)}
				on:mouseleave={(e) => (open = false)}
				role="button"
				tabindex="0"
				on:keypress={(e) => open != open}
			>
				<svelte:component this={icon} />
			</span>
		{/if}

		<span
			class="description"
			on:mouseenter={(e) => (open = true)}
			on:mouseleave={(e) => (open = false)}
			role="button"
			tabindex="0"
			on:keypress={(e) => open != open}
		>
			{text}
		</span>
	</span>
</span>

<style lang="scss">
	.icon {
		display: inline-block;
		vertical-align: text-bottom;
		height: var(--cds-spacing-06);
		max-width: 3ch;
	}

	.description {
		font-weight: bold;
	}

	.image img {
		max-width: 4ch;
		vertical-align: bottom; /* This ensures the image is aligned with the text */
	}

	.popover-image {
		max-width: 100%; /* Ensures the image does not exceed the width of its container */
		max-height: 100%; /* Ensures the image does not exceed the height of its container */
		object-fit: cover; /* Ensures the image covers the area without distorting its aspect ratio */
		display: inline-block; /* Removes any extra space below the image */
	}

	.popover-content {
		color: var(--ctp-text);
		text-shadow: none;
		padding: var(--cds-spacing-03);
		font-family: var(--font-body);
		font-size: 1rem;
		font-weight: normal;
	}
</style>
