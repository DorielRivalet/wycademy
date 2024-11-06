<script lang="ts">
	export let icon: any;
	export let title: string;
	export let description: string;
</script>

<div class="container">
	<div class="icon">
		<svelte:component this={icon} size={32} color="var(--ctp-blue)" />
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
