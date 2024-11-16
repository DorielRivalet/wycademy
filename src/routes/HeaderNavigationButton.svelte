<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	interface Props {
		path: string;
		description: string;
	}

	let { path, description }: Props = $props();
</script>

<li>
	<Button as  kind="ghost" iconDescription="Leaderboards">
		{#snippet children({ props })}
				<a href={path}
				><p {...props}>
					<button class="button">
						<span>{description}</span>
					</button>
				</p></a
			>
					{/snippet}
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
		@include type.type-style('body-compact-01');
	}
</style>
