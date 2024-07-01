<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	export let path: string;
	export let description: string;
</script>

<li>
	<Button as let:props kind="ghost" iconDescription="Leaderboards">
		<a href={path}
			><p {...props}>
				<button class="button">
					<span>{description}</span>
				</button>
			</p></a
		>
	</Button>
</li>

<style lang="scss">
	@use '@carbon/type' as type;

	button {
		all: unset;
	}

	.button {
		display: flex;
		flex-direction: row;
		color: var(--ctp-text);
		align-items: center;
		gap: 0.5rem;
		@include type.type-style('body-compact-02');
	}
</style>
