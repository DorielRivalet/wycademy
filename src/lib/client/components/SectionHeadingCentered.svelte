<script lang="ts">
	// https://stackoverflow.com/questions/61303237/how-to-set-dynamic-html-tag-according-to-props-in-svelte
	import slugify from 'slugify';

	interface Props {
		/** The name of the section heading*/
		title: string;
		/** The name of the section tag*/
		section: string;
		/** The level of the section heading*/
		level: 2 | 3 | 4 | 5 | 6;
		icon: any;
	}

	let { title, section, level, icon }: Props = $props();
	const tag = 'h' + level;
	//https://stackoverflow.com/questions/4502633/how-to-affect-other-elements-when-one-element-is-hovered

	const slug = slugify(section, { lower: true });

	const SvelteComponent = $derived(icon);
</script>

<div class="container">
	<div class="subheader">
		<SvelteComponent />
		<p>{section}</p>
	</div>
	<svelte:element this={tag} id={slug}>{title}</svelte:element>
	<hr />
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;
	@use '@carbon/type' as type;

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.subheader {
		display: flex;
		gap: 0.25rem;
		align-items: center;
		color: var(--ctp-subtext0);
		margin-bottom: 1rem;

		p {
			@include type.type-style('fluid-heading-03', true);
		}
	}

	hr {
		opacity: 1;
		width: 100%;
		border: none;
		height: 1px;
		background: radial-gradient(
			circle,
			color-mix(in srgb, var(--ctp-blue), transparent 50%) 0%,
			rgba(0, 0, 0, 0) 50%
		);
	}
</style>
