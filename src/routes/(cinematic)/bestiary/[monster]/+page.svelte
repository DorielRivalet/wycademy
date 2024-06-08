<script lang="ts">
	import { page } from '$app/stores';
	import ImageDialog from '$lib/client/components/ImageDialog.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
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
	import ezlion from 'ezlion';
	import type { FrontierMonsterInfo } from '$lib/client/modules/frontier/types';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import EspinasSleeping from '$lib/client/images/splash.gif';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import PreviousOutline from 'carbon-icons-svelte/lib/PreviousOutline.svelte';
	import { goto } from '$app/navigation';

	function findMonster(params: string) {
		let found: FrontierMonsterInfo | undefined = monsterInfo.find(
			(monster) =>
				$page.params.monster.toLowerCase() ===
				slugify(monster.displayName).toLowerCase(),
		);

		if (found) {
			return found;
		} else {
			let foundKey = Object.keys(ezlion.Monster).find(
				(e) => `${e}` === $page.params.monster,
			);
			if (foundKey) {
				return monsterInfo.find((m) => m.id === Number(foundKey));
			} else {
				return undefined;
			}
		}
	}

	function findMonsterInfo(name: string) {
		return monsterInfo.find(
			(e) => e.displayName.toLowerCase() === name.toLowerCase(),
		);
	}

	function findMonsterID(monster: FrontierMonsterInfo | undefined) {
		if (monster === undefined) {
			return 'Not found';
		}
		return monster?.id ?? 'Not found';
	}

	$: monster = findMonster($page.params.monster);
	$: monsterID = findMonsterID(monster);
</script>

{#if monster}
	<div class="container">
		<SectionHeadingTopLevel title={monster.displayName} />
		<div class="overview">
			<div>
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
					</div>
				</BestiaryMonsterGameInfo>
			</div>
			<div class="monster-properties">
				<div>
					<div class="elements">
						<strong>Elements: </strong>
						{#if monster.elements !== undefined && monster.elements.length > 0}
							{#each monster.elements as element}
								<InlineTooltip
									text={element}
									tooltip="Element"
									iconType="component"
									icon={ElementIcons.find((e) => e.displayName === element)
										?.icon}
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
					<p>
						<strong>ID: </strong>{monsterID} (0x{Number.parseInt(`${monsterID}`)
							.toString(16)
							.toUpperCase()
							.padStart(2, '0')})
					</p>
					<p>
						<strong>Size Type: </strong>{monster.type}
					</p>
					<p>
						<strong>Sizes: </strong>
						{#if monster.sizes && monster.sizes.length > 0}
							<UnorderedList class="spaced-list">
								{#each monster.sizes as size}
									<ListItem>{size}</ListItem>
								{/each}
							</UnorderedList>
						{:else}
							<p>Not found.</p>
						{/if}
					</p>
					<p>
						<strong>Rank: </strong>{monster.rank}
					</p>
					<p>
						<strong>Render (click to expand): </strong>
						<ImageDialog
							type="file"
							src={monster.fullRender}
							alt="Monster Render"
							width={32}
							height={32}
						/>
					</p>
					<p>
						<strong>Generation: </strong>{monster.generation}
					</p>
				</div>
				<div>
					<p>
						<strong>Habitats: </strong>
						{#if monster.habitats && monster.habitats.length > 0}
							<UnorderedList class="spaced-list">
								{#each monster.habitats as habitat}
									<ListItem>{habitat}</ListItem>
								{/each}
							</UnorderedList>
						{:else}
							<p>Not found.</p>
						{/if}
					</p>
				</div>
				<div>
					<p>
						<strong>Related Monsters: </strong>
					</p>

					{#if monster.relatedMonsters && monster.relatedMonsters.length > 0}
						<UnorderedList class="spaced-list">
							{#each monster.relatedMonsters as relatedMonster}
								<ListItem>
									{#if findMonsterInfo(relatedMonster)}
										<Link
											href={`/bestiary/${slugify(findMonsterInfo(relatedMonster)?.displayName ?? '/bestiary', { lower: true })}`}
										>
											{#if findMonsterInfo(relatedMonster)?.unusedComponent}
												<InlineTooltip
													iconType="file"
													tooltip={relatedMonster}
													text={relatedMonster}
													gap={'.5rem'}
													iconSize={'32px'}
													icon={findMonsterInfo(relatedMonster)?.icon}
												/>
											{:else}
												<InlineTooltip
													iconType="component"
													gap={'.5rem'}
													tooltip={relatedMonster}
													text={relatedMonster}
													iconSize={'32px'}
													icon={findMonsterInfo(relatedMonster)?.component}
												/>
											{/if}
										</Link>
									{:else}
										{relatedMonster}
									{/if}
								</ListItem>
							{/each}
						</UnorderedList>
					{:else}
						<p>Not found.</p>
					{/if}
				</div>
			</div>
		</div>
		<section>
			<SectionHeading title="Hitzone Values" level={2} />
		</section>
		<section>
			<SectionHeading title="Fastest Hunts" level={2} />
		</section>
	</div>
{:else}
	<div class="not-found-container">
		<p>Monster not found</p>
		<img src={EspinasSleeping} alt="Espinas sleeping" width="128" />
		<Button icon={PreviousOutline} on:click={() => goto('/bestiary')}
			>Go to Bestiary</Button
		>
	</div>
{/if}

<style lang="scss">
	.not-found-container {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.monster-icon {
		view-transition-name: var(--monster-icon);
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.overview {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.monster-properties {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 4rem;
	}

	.monster-properties > div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		flex-wrap: wrap;
	}
</style>
