<script lang="ts">
	import { page } from '$app/stores';
	import ImageDialog from '$lib/client/components/ImageDialog.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	// import { wikiaMonsterKeyMap } from '$lib/client/modules/frontier/objects.js';
	// import type { WikiaMonster } from '$lib/client/modules/frontier/types.js';
	import slugify from 'slugify';
	import BestiaryMonsterGameInfo from '../BestiaryMonsterGameInfo.svelte';
	import { isFieldEmpty } from '$lib/client/modules/frontier/functions';
	import {
		AilmentIcons,
		ElementIcons,
		StatusIcons,
		monsterInfo,
	} from '$lib/client/modules/frontier/objects';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';

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

	$: monster = monsterInfo.find(
		(monster) =>
			$page.params.monster.toLowerCase() ===
			slugify(monster.displayName).toLowerCase(),
	);
</script>

{#if monster}
	<div class="container">
		<SectionHeadingTopLevel title={monster.displayName} />

		<!-- <code>{JSON.stringify(transformedWikiaMonster, null, 2)}</code> -->

		<div class="overview">
			<BestiaryMonsterGameInfo
				description={monster.ecology}
				type={monster.class}
				title={monster.titles !== undefined
					? isFieldEmpty(monster.titles[0])
						? 'None'
						: monster.titles[0]
					: 'None'}
			>
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
				</div></BestiaryMonsterGameInfo
			>

			<div class="elements-ailments-weaknesses">
				<div class="elements">
					<strong>Elements: </strong>
					{#if monster.elements !== undefined && monster.elements.length > 0}
						{#each monster.elements as element}
							<InlineTooltip
								text={element}
								tooltip="Element"
								iconType="component"
								icon={ElementIcons.find((e) => e.displayName === element)?.icon}
							/>
						{/each}
					{:else}
						None
					{/if}
				</div>
				<div class="ailments">
					<strong>Ailments: </strong>
					{#if monster.ailments !== undefined && monster.ailments.length > 0}
						{#each monster.ailments as ailment}
							<InlineTooltip
								text={ailment}
								tooltip="Ailment"
								iconType="component"
								icon={AilmentIcons.find((e) => e.name === ailment)?.icon}
							/>
						{/each}
					{:else}
						None
					{/if}
				</div>
				<div class="weaknesses">
					<strong>Weaknesses: </strong>
					{#if monster.weaknesses !== undefined && monster.weaknesses.length > 0}
						{#each monster.weaknesses as weakness}
							{#if ElementIcons.find((e) => e.name === weakness)}
								<InlineTooltip
									text={weakness}
									tooltip="Element"
									iconType="component"
									icon={ElementIcons.find((e) => e.name === weakness)?.icon}
								/>
							{:else if StatusIcons.find((e) => e.name === weakness)}
								<InlineTooltip
									text={weakness}
									tooltip="Status"
									iconType="component"
									icon={StatusIcons.find((e) => e.name === weakness)?.icon}
								/>
							{/if}
						{/each}
					{:else}
						None
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.monster-icon {
		width: 100%;
		view-transition-name: var(--monster-icon);
	}

	.overview {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.elements-ailments-weaknesses {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
