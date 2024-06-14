<script lang="ts">
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';

	export let section = 'Section';
	export let sectionIcon;
	export let sectionIconProps;
	export let title = 'Title';
	export let description = 'Description';
	export let imagePosition: 'left' | 'right' | 'center' = 'right';
	export let callToActionButtonText = '';
	export let callToActionButtonLink = '';
	export let callToActionButtonIcon: any = undefined;

	const breakpointSize = breakpointObserver();
	const breakpointLargerThanMedium = breakpointSize.largerThan('md');
</script>

{#if $breakpointLargerThanMedium && imagePosition === 'right'}
	<div class="landing-page-section">
		<div class="content">
			<h2 class="header">
				<div><svelte:component this={sectionIcon} {...sectionIconProps} /></div>
				<div>{section}</div>
			</h2>
			<p class="title">{title}</p>
			<p class="description">{description}</p>
			<div class="button"></div>
			{#if callToActionButtonText !== ''}
				<Button
					class="button"
					icon={callToActionButtonIcon}
					size="lg"
					expressive
					href={callToActionButtonLink}>{callToActionButtonText}</Button
				>
			{/if}
		</div>
		<div class="image">
			<slot />
		</div>
	</div>
{:else if $breakpointLargerThanMedium && imagePosition === 'left'}
	<div class="landing-page-section">
		<div class="image">
			<slot />
		</div>
		<div class="content">
			<h2 class="header">
				<div><svelte:component this={sectionIcon} {...sectionIconProps} /></div>
				<div>{section}</div>
			</h2>
			<p class="title">{title}</p>
			<p class="description">{description}</p>
			<div class="button"></div>
			{#if callToActionButtonText !== ''}
				<Button
					class="button"
					icon={callToActionButtonIcon}
					size="lg"
					expressive
					href={callToActionButtonLink}>{callToActionButtonText}</Button
				>
			{/if}
		</div>
	</div>
{:else}
	<div class="landing-page-section-center">
		<div class="content">
			<h2 class="header">
				<div><svelte:component this={sectionIcon} {...sectionIconProps} /></div>
				<div>{section}</div>
			</h2>
			<p class="title">{title}</p>
			<p class="description">{description}</p>
			<div class="button"></div>
			{#if callToActionButtonText !== ''}
				<Button
					class="button"
					icon={callToActionButtonIcon}
					size="lg"
					expressive
					href={callToActionButtonLink}>{callToActionButtonText}</Button
				>
			{/if}
		</div>
		{#if $breakpointLargerThanMedium}
			<div class="image-small">
				<slot />
			</div>
		{:else}
			<div class="image-center">
				<slot />
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	.landing-page-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		flex-wrap: wrap;
		gap: 4rem;
		padding: 2rem;
		width: 80vw;
		margin: auto;
		min-height: 90vh;
	}

	.landing-page-section-center {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 4rem;
		padding: 2rem;
		width: 80vw;
		margin: auto;
		min-height: 90vh;
	}

	.image {
		width: 100%;
		height: fit-content;
		padding: 0;
		margin: 0;
	}

	.image-center {
		width: 50%;
		height: fit-content;
		padding: 0;
		margin: auto;
	}

	.image-small {
		width: 50%;
		height: fit-content;
		padding: 0;
		margin: auto;
	}

	.content {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.description {
		max-width: 48ch;
	}

	.header {
		all: unset;
		display: flex;
		align-items: center;
		font-size: 1.5em;
		font-weight: bold;
		gap: 0.5rem;
	}

	.title {
		font-weight: bold;
		font-size: 36px;
		max-width: 32ch;
	}

	.button {
		margin-top: 1rem;
	}
</style>
