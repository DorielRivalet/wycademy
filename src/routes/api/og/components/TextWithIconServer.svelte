<!--
@component
Shows text next to an icon inline. You can use either a component or a image import as the icon.-->

<script lang="ts">
	import QuestionMarkIconWhite from '$lib/client/components/frontier/icon/item/Question_Mark_Icon_White.svelte';
	export let text: string;
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

<span
	class="container"
	style="display: flex;
	line-height: {iconSize};
	color: #cdd6f4;
	font-weight: bold;
	font-size: 32px;"
>
	<span
		style="display:flex;"
		style:position="relative"
		on:mouseenter={(e) => (open = true)}
		on:mouseleave={(e) => (open = false)}
		role="tooltip"
	>
		{#if icon === ''}
			<span style="display:flex;"></span>
		{:else if iconType === 'file'}
			<span style="display:flex;" class="image" role="button" tabindex="0">
				<img
					style="display: flex; 	max-width: 4ch;
		vertical-align: bottom;"
					width="64"
					height="auto"
					src={icon}
					alt={text}
				/>
			</span>
		{:else}
			<span
				class="icon"
				style="display: flex;
				margin-right: {gap};
		vertical-align: text-bottom;
		height: 1.5rem;"
				role="button"
				tabindex="0"
			>
				<svelte:component this={icon} {...iconProps} />
			</span>
		{/if}

		<span
			style="display:flex; font-weight: bold;"
			class="description"
			role="button"
			tabindex="0"
		>
			{text}
		</span>
	</span>
</span>

<style lang="scss">
</style>
