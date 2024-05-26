<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { cubicInOut } from 'svelte/easing';

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

	export let type;
	export let src: any;
	export let alt = 'Dialog';
	export let componentSize = '100%';
	export let background = true;
	export let color = '#ffffff';
	export let width = 0;
	export let height = 0;

	let componentProps = {
		size: componentSize,
		background: background,
		color: color,
	};

	let svgComponent: any;

	let dialogElement: HTMLDialogElement;
	let showModal = false;

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

	$: dialogClass = showModal ? 'dialog open' : 'dialog';

	$: {
		if (type === 'component') {
			svgComponent = src;
		}
	}
</script>

{#if showModal}
	<div class="overlay"></div>
{/if}

<button on:click={openDialog}>
	{#if type === 'file'}
		<img
			{src}
			{alt}
			width={width !== 0 ? width : 128}
			height={height !== 0 ? height : 128}
		/>
	{:else if type === 'component'}
		<svelte:component this={svgComponent} {...componentProps} />
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
				<div class="dialog-image">
					<svelte:component
						this={svgComponent}
						{...{ size: 'clamp(50vh, 50vw, 50%)' }}
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
		background: none;
		width: 100%;
		height: 100%;
	}

	.dialog.open {
		filter: drop-shadow(0px 0px 0.5rem black);
	}

	.dialog.open:hover {
		display: block;
		cursor: var(--curson-icon-pointer) !important;
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
