<script lang="ts">
	export let value: number;
	export let text: string;
	export let color: string;
	export let hoverColor: string = '#ff0000';
</script>

<div class="container">
	<div class="icon"><slot /></div>
	<p class="value" style:color>{value}+</p>
	<p class="text">{text}</p>
</div>

<style lang="scss">
	@use '@carbon/type' as type;
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		@include type.type-style('code-02');
	}

	.icon {
		padding: 1rem;
		background-color: var(--ctp-surface0);
		border: 2px solid var(--ctp-surface1);
		border-radius: 100%;
	}

	.value {
		font-size: 1.5em;
	}
</style>
