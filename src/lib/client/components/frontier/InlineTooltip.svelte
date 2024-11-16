<!--
@component
Shows text next to an icon inline. You can use either a component or a image import as the icon.-->
<script lang="ts">
	import Popover from 'carbon-components-svelte/src/Popover/Popover.svelte';
	import QuestionMarkIconWhite from './icon/item/Question_Mark_Icon_White.svelte';
	
	
	
	
	
	
	interface Props {
		text: string;
		tooltip: string;
		/**default: component*/
		iconType?: 'component' | 'file';
		/**default: QuestionMarkIconWhite*/
		icon?: any;
		/**default: #ffffff*/
		iconColor?: string;
		/**For component. default: 100%*/
		iconSize?: string;
		/**For component. default: auto*/
		gap?: string;
		/**default: true*/
		background?: boolean;
	}

	let {
		text,
		tooltip,
		iconType = 'component',
		icon = QuestionMarkIconWhite,
		iconColor = '#ffffff',
		iconSize = '100%',
		gap = 'auto',
		background = true
	}: Props = $props();

	let iconProps = {
		color: iconColor,
		size: iconSize,
		background: background,
	};

	let open = $state(false);
</script>

<span class="container" style="line-height: {iconSize}">
	<span
		style:position="relative"
		onmouseenter={(e) => (open = true)}
		onmouseleave={(e) => (open = false)}
		role="tooltip"
	>
		<Popover bind:open caret align={'top'}>
			<div class="popover-content">
				{tooltip}
			</div></Popover
		>
		{#if icon === ''}
			<span></span>
		{:else if iconType === 'file'}
			<span
				class="image"
				onmouseenter={(e) => (open = true)}
				onmouseleave={(e) => (open = false)}
				role="button"
				tabindex="0"
				onkeypress={(e) => open != open}
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
			{@const SvelteComponent = icon}
			<span
				class="icon"
				style="margin-right: {gap}"
				onmouseenter={(e) => (open = true)}
				onmouseleave={(e) => (open = false)}
				role="button"
				tabindex="0"
				onkeypress={(e) => open != open}
			>
				<SvelteComponent {...iconProps} />
			</span>
		{/if}

		<span
			class="description"
			onmouseenter={(e) => (open = true)}
			onmouseleave={(e) => (open = false)}
			role="button"
			tabindex="0"
			onkeypress={(e) => open != open}
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
