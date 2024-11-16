<script lang="ts">
	import ImageLoader from 'carbon-components-svelte/src/ImageLoader/ImageLoader.svelte';
	import InlineLoading from 'carbon-components-svelte/src/InlineLoading/InlineLoading.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import ChevronLeft from 'carbon-icons-svelte/lib/ChevronLeft.svelte';

	interface Props {
		images: Array<string>;
	}

	let { images }: Props = $props();

	let index = $state(0);

	let src = $derived(images[index]);

	function nextImage() {
		index = (index + 1) % images.length;
	}

	function prevImage() {
		index = (index - 1 + images.length) % images.length;
	}
</script>

<div class="image-container">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="arrow left" onclick={prevImage}>
		<ChevronLeft />
	</div>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="arrow right" onclick={nextImage}>
		<ChevronRight />
	</div>
	<div class="image">
		<ImageLoader style="border-radius: 8px 8px 8px 8px;" fadeIn {src} alt={src}>
			{#snippet loading()}
					
					<InlineLoading />
				
					{/snippet}
			{#snippet error()}
						An error occurred.
					{/snippet}
		</ImageLoader>
	</div>
</div>

<style lang="scss">
	.image-container {
		position: relative;
		width: 100%;
		height: fit-content;
	}

	@media (min-width: 320px) {
		.image-container {
			width: 256px; /* Set a fixed width */
			height: 256px;
		}

		.arrow {
			top: 35%;
			transform: translateY(-35%);
		}
	}

	@media (min-width: 672px) {
		.image-container {
			width: 500px; /* Set a fixed width */
			height: 500px;
		}

		.arrow {
			top: 35%;
			transform: translateY(-35%);
		}
	}

	@media (min-width: 1056px) {
		.image-container {
			width: 512px; /* Set a fixed width */
			height: 512px;
		}

		.arrow {
			top: 35%;
			transform: translateY(-35%);
		}
	}

	.image {
		width: 100%;
		padding: 0;
		margin: 0;
	}

	.arrow {
		position: absolute;
		background: rgba(0, 0, 0, 0.5);
		color: var(--ctp-mocha-text);
		padding: 0.5rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}

	.arrow:hover {
		filter: brightness(150%);
	}

	.arrow.left {
		left: 10px;
	}

	.arrow.right {
		right: 10px;
	}
</style>
