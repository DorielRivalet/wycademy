<script lang="ts">
	import { page } from '$app/stores';
	import ImageDialog from '$lib/client/components/ImageDialog.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	// import { wikiaMonsterKeyMap } from '$lib/client/modules/frontier/objects.js';
	// import type { WikiaMonster } from '$lib/client/modules/frontier/types.js';
	import slugify from 'slugify';

	export let data;

	// function getFilteredWikiaMonsterData(data: WikiaMonster) {
	// 	const result: WikiaMonster = {
	// 		englishTitle: data?.englishTitle,
	// 		monsterType: data?.monsterType,
	// 		element: data?.element,
	// 		ailments: data?.ailments,
	// 		weakestTo: data?.weakestTo,
	// 		habitats: data?.habitats,
	// 		monsterSize: data?.monsterSize,
	// 		monsterRelations: data?.monsterRelations,
	// 		generation: data?.generation,
	// 	};

	// 	return result;
	// }

	// let filteredWikiaMonsterData = getFilteredWikiaMonsterData(data.wikiaMonster);

	// function transformMonsterData(wikiaData: WikiaMonster) {
	// 	const newData: WikiaMonster = {};

	// 	// Iterate over each entry in the legacy data
	// 	for (const [wikiaKey, wikiaValue] of Object.entries(wikiaData)) {
	// 		// Find the corresponding new key based on the mapping
	// 		const newKey = wikiaMonsterKeyMap[wikiaKey];

	// 		if (newKey === '') {
	// 			continue;
	// 		}

	// 		// Check if a direct mapping exists
	// 		if (newKey) {
	// 			// Assign the transformed value to the new key
	// 			newData[newKey] = wikiaValue;
	// 		}
	// 	}

	// 	return newData;
	// }

	// let transformedWikiaMonster = transformMonsterData(filteredWikiaMonsterData);

	$: monster = data.monsterInfo.find(
		(monster) =>
			$page.params.monster.toLowerCase() ===
			slugify(monster.displayName).toLowerCase(),
	);
</script>

{#if monster}
	<div class="container">
		<div class="description">
			<SectionHeadingTopLevel title={monster.displayName} />

			<!-- <code>{JSON.stringify(transformedWikiaMonster, null, 2)}</code> -->

			<div
				class="monster-icon"
				style:--monster-icon="monster-icon-{slugify(monster.displayName, {
					lower: true,
				})}"
			>
				{#if monster.unusedComponent}
					<ImageDialog
						src={monster.icon}
						alt={monster.displayName}
						width={256}
						height={256}
						type="file"
					/>
				{:else}
					<ImageDialog
						src={monster.component}
						alt={monster.displayName}
						componentSize={'100%'}
						type="component"
					/>
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
