<script lang="ts">
	import { run } from 'svelte/legacy';

	import { onMount, onDestroy } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	/**https://stackoverflow.com/questions/68235936/how-to-use-two-svelte-transitions-on-the-same-togglable-element*/
	function slidefade(
		node: Element,
		params: { delay?: any; duration: any; easing: any },
	) {
		const existingTransform = getComputedStyle(node).transform.replace(
			'none',
			'',
		);

		return {
			delay: params.delay || 0,
			duration: params.duration || 400,
			easing: params.easing || cubicInOut,
			css: (t: any, u: any) =>
				`transform-origin: center; transform: ${existingTransform} scale(${t}); opacity: ${t}; `,
		};
	}

	
	interface Props {
		type: 'component' | 'file';
		src: any;
		alt?: string;
		componentSize?: string;
		background?: boolean;
		color?: string;
		width?: string | number;
		height?: string | number;
		/**TODO*/
		currentMonster?: string;
	}

	let {
		type,
		src,
		alt = 'Dialog',
		componentSize = '100%',
		background = true,
		color = '#ffffff',
		width = 0,
		height = 0,
		currentMonster = ''
	}: Props = $props();

	let componentProps = {
		size: componentSize,
		background: background,
		color: color,
		currentMonster: currentMonster,
	};

	let svgComponent: any = $state();

	let dialogElement: HTMLDialogElement = $state();
	let showModal = $state(false);

	function openDialog(event: MouseEvent) {
		event.stopPropagation();
		showModal = true;
		dialogElement.showModal();
	}

	function closeDialog() {
		showModal = false;
		dialogElement.close();
	}

	onMount(() => {
		document.addEventListener('click', closeDialog);
		return () => {
			document.removeEventListener('click', closeDialog);
		};
	});

	onDestroy(() => {
		if (dialogElement && showModal) {
			dialogElement.close();
		}
	});

	let dialogClass = $derived(showModal ? 'dialog open' : 'dialog');

	run(() => {
		if (type === 'component') {
			svgComponent = src;
		}
	});
</script>

{#if showModal}
	<div in:fade={{ duration: 150 }} class="overlay"></div>
{/if}

<button onclick={openDialog}>
	{#if type === 'file'}
		<img
			{src}
			{alt}
			width={width !== 0 ? width : 128}
			height={height !== 0 ? height : 128}
		/>
	{:else if type === 'component'}
		{@const SvelteComponent = svgComponent}
		<SvelteComponent {...componentProps} />
	{/if}
</button>

<dialog bind:this={dialogElement} class={dialogClass}>
	{#if showModal}
		<div
			class="dialog-content"
			in:slidefade={{
				duration: 150,
				easing: cubicInOut,
			}}
		>
			{#if type === 'file'}
				<img {src} {alt} class="dialog-image" />
			{:else if type === 'component'}
				{@const SvelteComponent_1 = svgComponent}
				<div class="dialog-image">
					<SvelteComponent_1
						{...{
							size: 'clamp(50vh, 50vw, 50%)',
							currentMonster: currentMonster,
							background: false,
						}}
					/>
				</div>
			{/if}
		</div>
	{/if}
</dialog>

<style lang="scss">
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: black;
		opacity: 20%;
		z-index: 999;
	}

	.dialog {
		position: fixed;
		z-index: 1000;
		border-color: transparent;
		background: none;
		padding: 0;
		width: 100%;
		height: 100%;
	}

	.dialog.open {
		filter: drop-shadow(0px 0px 0.5rem black);
	}

	.dialog.open:hover {
		display: block;
		cursor: var(--cursor-icon-pointer) !important;
	}

	.dialog-content {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.dialog-image {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		object-position: center;
	}

	button {
		all: unset;
		cursor: pointer;
	}

	.dialog::backdrop {
		animation: backdropFade 0.15s forwards;
	}

	@keyframes backdropFade {
		0% {
			backdrop-filter: blur(0) brightness(100%) contrast(100%);
		}
		100% {
			backdrop-filter: blur(4px) brightness(105%) contrast(110%);
		}
	}
</style>
