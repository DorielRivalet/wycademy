<script lang="ts">
	import { page } from '$app/stores';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import { LocationIcons } from '$lib/client/modules/frontier/locations';
	import { gameInfo } from '$lib/client/modules/frontier/objects';
	import { WeaponTypes } from '$lib/client/modules/frontier/weapons';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import { activeFeatures } from '$lib/client/modules/frontier/active-feature';

	function getActiveFeatureFinalBitfieldValue(arr: string[]) {
		const initialValue = 0;
		const sumWithInitial = arr.reduce(
			(accumulator, currentValue) =>
				accumulator +
				(WeaponTypes.find((e) => e.name === currentValue)?.activeFeatureValue ??
					0),
			initialValue,
		);

		return sumWithInitial;
	}

	let activeFeatureSelectedRowIds: string[] = [];

	$: activeFeatureFinalBitfieldValue = getActiveFeatureFinalBitfieldValue(
		activeFeatureSelectedRowIds,
	);
</script>

<HunterNotesPage displayTOC={false}>
	<section>
		<SectionHeadingTopLevel title={'Active Feature'} />

		<div class="active-feature-section">
			<div class="active-feature-description">
				<p class="spaced-paragraph">
					The <strong>Active Feature</strong> system, introduced in <InlineTooltip
						tooltip="Game Version"
						iconType="file"
						text="Forward 3"
						icon={gameInfo.find((e) => e.name === 'Monster Hunter Frontier')
							?.icon}
					/> is a daily effect to weapon types. These effects last from 12 PM to
					12 PM the next day, at which time one or more weapon types will be chosen.
					You can see up to one day in advance by looking behind the main
					<strong>Active Feature</strong>
					bar at the top of your screen while in <InlineTooltip
						text="Mezeporta"
						tooltip="Location"
						icon={LocationIcons.find((e) => e.name === 'Mezeporta')?.icon}
						iconType={'file'}
					/>.
				</p>
				<CenteredFigure
					width={'100%'}
					type="file"
					src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/active-feature.webp'}
					alt="Active Feature"
					figcaption="The Active Feature interface."
				/>
				<CenteredFigure
					width={'100%'}
					type="file"
					src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/active-feature-shine.webp'}
					alt="Active Feature"
					figcaption="During a quest with active feature enabled, the weapon icon next to
						the player name will shine."
				/>
				<p>
					Final Bitfield Value: {activeFeatureFinalBitfieldValue}
				</p>
			</div>
			<div class="active-feature-table">
				<DataTable
					id="active-feature-dom"
					useStaticWidth
					batchSelection
					bind:selectedRowIds={activeFeatureSelectedRowIds}
					sortable
					zebra
					size="medium"
					headers={[
						{ key: 'weapon', value: 'Weapon', minWidth: '12rem' },
						{ key: 'effect', value: 'Active Feature Effect' },
						{ key: 'bitfield', value: 'Bitfield Value' },
					]}
					rows={activeFeatures}
					><Toolbar
						><div class="toolbar">
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray(activeFeatures)}
							/>
							<Button
								kind="tertiary"
								icon={Download}
								on:click={() =>
									downloadDomAsPng('active-feature-dom', 'active-feature')}
								>Download</Button
							>
						</div>
					</Toolbar>

					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'weapon'}
							<InlineTooltip
								text={cell.value}
								tooltip={'Weapon'}
								icon={WeaponTypes.find((e) => e.name === cell.value)?.icon}
								iconSize={'2rem'}
								gap={'0.5rem'}
							/>
						{:else}
							<p>{cell.value}</p>
						{/if}
					</svelte:fragment>
				</DataTable>
			</div>
		</div>

		<section>
			<SectionHeading level={2} title="Trivia" />
			<div>
				<UnorderedList>
					<ListItem
						><p>
							The Taiwanese version of the game used to give x1.5 extra damage
							to the weapon, in addition to its other Active Feature effects,
							although the extra damage was later removed. Additionally, it gave
							the <strong>Active Feature</strong> effect to all weapons at the same
							time, during the last day before shutdown.
						</p></ListItem
					>
				</UnorderedList>
			</div>
		</section>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</section>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.active-feature-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.active-feature-description {
		display: flex;
		flex-direction: column; /* Stacks children vertically */
		gap: 2rem;
	}
</style>
