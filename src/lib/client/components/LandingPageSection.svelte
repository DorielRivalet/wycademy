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
	export let headingLevel: 2 | 3 = 3;

	const tag = 'h' + headingLevel;
	const subheaderTag = 'h' + (headingLevel + 1);

	const breakpointSize = breakpointObserver();
	const breakpointLargerThanMedium = breakpointSize.largerThan('md');
</script>

{#if $breakpointLargerThanMedium && imagePosition === 'right'}
	<div class="landing-page-section">
		<div class="content">
			<svelte:element this={subheaderTag} class="header">
				<div><svelte:component this={sectionIcon} {...sectionIconProps} /></div>
				<div class="header-text">{section}</div>
			</svelte:element>
			<svelte:element this={tag} class="title">{title}</svelte:element>
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
			<svelte:element this={subheaderTag} class="header">
				<div><svelte:component this={sectionIcon} {...sectionIconProps} /></div>
				<div class="header-text">{section}</div>
			</svelte:element>
			<svelte:element this={tag} class="title">{title}</svelte:element>
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
			<svelte:element this={subheaderTag} class="header">
				<div><svelte:component this={sectionIcon} {...sectionIconProps} /></div>
				<div class="header-text">{section}</div>
			</svelte:element>
			<svelte:element this={tag} class="title">{title}</svelte:element>
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
	@use '@carbon/motion' as motion;
	@use '@carbon/type' as type;

	.landing-page-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		flex-wrap: wrap;
		gap: 4rem;
		padding-top: var(--cds-spacing-10);
		width: 80vw;
		margin: auto;
		min-height: 90vh;
	}

	.landing-page-section-center {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 4rem;
		padding-top: var(--cds-spacing-10);
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
	}

	.description {
		max-width: 48ch;
		margin-top: 1rem;
		@include type.type-style('fluid-paragraph-01', true);
	}

	.header {
		all: unset;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.title {
		max-width: 32ch;
	}

	.button {
		margin-top: 2rem;
	}

	h2 {
		@include type.type-style('fluid-heading-05', true);
	}

	h3 {
		@include type.type-style('fluid-heading-04', true);
	}

	h4 > .header-text {
		color: var(--ctp-subtext0);
		@include type.type-style('fluid-heading-03', true);
	}
</style>
