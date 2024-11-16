<script lang="ts">
	interface Props {
		icon: any;
		title: string;
		description: string;
	}

	let { icon, title, description }: Props = $props();

	const SvelteComponent = $derived(icon);
</script>

<div class="container">
	<div class="icon">
		<SvelteComponent size={32} color="var(--ctp-blue)" />
	</div>
	<p class="title">{title}</p>
	<p class="description">{description}</p>
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;
	@use '@carbon/type' as type;

	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.title {
		font-size: 1.25em;
		font-weight: bold;
	}
</style>
