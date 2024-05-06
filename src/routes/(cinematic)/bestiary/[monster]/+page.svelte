<script lang="ts">
	import { page } from '$app/stores';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import slugify from 'slugify';

	export let data;

	$: monster = data.monsters.find(
		(monster) =>
			$page.params.monster.toLowerCase() ===
			slugify(monster.displayName).toLowerCase(),
	);
</script>

{#if monster}
	<div class="container">
		<div class="description">
			<SectionHeadingTopLevel title={monster.displayName} />

			<div
				class="monster-icon"
				style:--monster-icon="monster-icon-{slugify(monster.displayName, {
					lower: true,
				})}"
			>
				{#if monster.unusedComponent}
					<img src={monster.icon} alt={monster.displayName} width="256px" />
				{:else}
					<svelte:component this={monster.component} {...{ size: '256px' }} />
				{/if}
			</div>

			<p class="details">{monster.displayName}</p>
		</div>
	</div>
{/if}

<style lang="scss">
	.container {
		& .monster-icon {
			width: 256px;
			view-transition-name: var(--monster-icon);
		}
	}

	.description {
		align-self: center;

		& p {
			margin-top: 0.5rem;
		}

		& .details {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			gap: 2rem;
			margin-top: 2rem;
			padding-top: 2rem;

			& .item {
				& :nth-child(1) {
					text-transform: uppercase;
					font-weight: 600;
				}

				& :nth-child(2) {
					font-size: 1.4rem;
					color: hsl(220 40% 90%);
					text-transform: capitalize;
				}
			}
		}
	}
</style>
