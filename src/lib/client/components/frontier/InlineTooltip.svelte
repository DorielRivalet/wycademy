<!--
@component
Shows text next to an icon inline. You can use either a component or a image import as the icon.-->
<script lang="ts">
	import Popover from 'carbon-components-svelte/src/Popover/Popover.svelte';
	import QuestionMarkIconWhite from './icon/item/Question_Mark_Icon_White.svelte';
	export let text: string;
	export let tooltip: string;
	/**default: component*/
	export let iconType: 'component' | 'file' = 'component';
	/**default: QuestionMarkIconWhite*/
	export let icon: any = QuestionMarkIconWhite;
	/**default: #ffffff*/
	export let iconColor = '#ffffff';
	/**For component. default: 100%*/
	export let iconSize = '100%';
	/**For component. default: auto*/
	export let gap = 'auto';
	/**default: true*/
	export let background = true;

	let iconProps = {
		color: iconColor,
		size: iconSize,
		background: background,
	};

	let open = false;
</script>

<span class="container" style="line-height: {iconSize}">
	<span
		style:position="relative"
		on:mouseenter={(e) => (open = true)}
		on:mouseleave={(e) => (open = false)}
		role="tooltip"
		><Popover bind:open caret align={'top'}>
			<div class="popover-content">
				{tooltip}
			</div></Popover
		>
		{#if icon === ''}
			<span></span>
		{:else if iconType === 'file'}
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
				style="margin-right: {gap}"
				on:mouseenter={(e) => (open = true)}
				on:mouseleave={(e) => (open = false)}
				role="button"
				tabindex="0"
				on:keypress={(e) => open != open}
			>
				<svelte:component this={icon} {...iconProps} />
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

	.popover-content {
		color: var(--ctp-text);
		text-shadow: none;
		padding: var(--cds-spacing-03);
		font-family: var(--font-body);
		font-size: 1rem;
		font-weight: normal;
	}
</style>
