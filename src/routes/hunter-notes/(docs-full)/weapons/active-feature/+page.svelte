<script lang="ts">
	import { page } from '$app/stores';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import {
		LocationIcons,
		WeaponTypes,
	} from '$lib/client/modules/frontier/objects';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';

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
				<p>
					The Active Feature system is a daily effect to weapon types. These
					effects last from 12 PM to 12 PM the next day, at which time a new
					weapon type will be chosen. You can see up to one day in advance by
					looking behind the main Active Feature bar at the top of your screen
					while in <InlineTooltip
						text="Mezeporta"
						tooltip="Location"
						icon={LocationIcons.find((e) => e.name === 'Mezeporta')?.icon}
						iconType={'file'}
					/>.
				</p>
				<p>
					Final Bitfield Value: {activeFeatureFinalBitfieldValue}
				</p>
			</div>
			<div class="active-feature-table">
				<DataTable
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
					rows={[
						{
							id: 'Sword and Shield',
							weapon: 'Sword and Shield',
							effect: 'x1.2 Status and Element (internal).',
							bitfield: '16',
						},
						{
							id: 'Dual Swords',
							weapon: 'Dual Swords',
							effect:
								'Reduces the speed at which the HP bar decreases when in true demon mode. Stamina gauge depletion speed is reduced to x0.5 when in demon mode (equivalent to Marathon Runner). When Marathon Runner is activated, it is reduced to x0.33.',
							bitfield: '64',
						},
						{
							id: 'Great Sword',
							weapon: 'Great Sword',
							effect:
								"+100% Affinity when using an unsheathe attack. This is additional and goes on top of any existing affinity. Synergizes well with Critical Conversion. This also applies to attacks from Parries and also gives the raw increasing effect of skill Critical Conversion (no +30%) while you are performing these actions. This doesn't activate with Shining Sword.",
							bitfield: '1',
						},
						{
							id: 'Long Sword',
							weapon: 'Long Sword',
							bitfield: '128',
							effect:
								'Full spirit bar buff effect increased (from +10 attack to +40 attack)',
						},
						{
							id: 'Hammer',
							weapon: 'Hammer',
							bitfield: '4',
							effect:
								'x1.5 Stun damage. Synergizes well with Sigil and Caravan Skills.',
						},
						{
							id: 'Hunting Horn',
							weapon: 'Hunting Horn',
							bitfield: '256',
							effect: 'x2 Song duration. Synergizes well with Flute Expert.',
						},
						{
							id: 'Lance',
							weapon: 'Lance',
							bitfield: '8',
							effect:
								'Guard Skill goes up by 1 level. Grants Reflect+3. Does not work with Reflect Up nor Guard Up.',
						},
						{
							id: 'Gunlance',
							weapon: 'Gunlance',
							bitfield: '512',
							effect: 'x1.5 Wyvern Fire and Shelling Damage.',
						},

						{
							id: 'Tonfa',
							weapon: 'Tonfa',
							bitfield: '2048',
							effect:
								'All Ryuuki finisher (i.e. explosion) effects buffed. Head: KO duration from 20s to 30s. Tail: Bleeding 1.5x damage. Body: Sharpness return from 15 to 20. Gunner Attack Up from 25 to 50.',
						},
						{
							id: 'Switch Axe F',
							weapon: 'Switch Axe F',
							bitfield: '4096',
							effect:
								'Increases Phial Meter Recovery by primary recovery mechanic (either by reloading or guarding)',
						},
						{
							id: 'Magnet Spike',
							weapon: 'Magnet Spike',
							bitfield: '8192',
							effect:
								'Increases Pin finisher multiplier by 1.25x (from 600 motion value to 750 motion value). x1.1 Cutting damage to the tail in cutting mode. x1.3 Stun value in impact mode.',
						},
						{
							id: 'Light Bowgun',
							weapon: 'Light Bowgun',
							effect:
								'+0.1x Damage increased at critical distance. x1.2 Status damage.',
							bitfield: '32',
						},

						{
							id: 'Heavy Bowgun',
							weapon: 'Heavy Bowgun',
							effect: '+0.1x Damage increased at critical distance.',
							bitfield: '2',
						},
						{
							id: 'Bow',
							weapon: 'Bow',
							effect: 'x0.85 Charge time. Synergizes well with Auto-Reload.',
							bitfield: '1024',
						},
					]}
					><Toolbar
						><div class="toolbar">
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray([
									{
										id: 'Sword and Shield',
										weapon: 'Sword and Shield',
										effect: 'x1.2 Status and Element (internal).',
										bitfield: '16',
									},
									{
										id: 'Dual Swords',
										weapon: 'Dual Swords',
										effect:
											'Reduces the speed at which the HP bar decreases when in true demon mode. Stamina gauge depletion speed is reduced to x0.5 when in demon mode (equivalent to Marathon Runner). When Marathon Runner is activated, it is reduced to x0.33.',
										bitfield: '64',
									},
									{
										id: 'Great Sword',
										weapon: 'Great Sword',
										effect:
											'+100% Affinity when using an unsheathe attack. This is additional and goes on top of any existing affinity. Synergizes well with Critical Conversion. This also applies to attacks from Parries and also gives the raw increasing effect of skill Critical Conversion (no +30%) while you are performing these actions.',
										bitfield: '1',
									},
									{
										id: 'Long Sword',
										weapon: 'Long Sword',
										bitfield: '128',
										effect:
											'Full spirit bar buff effect increased (from +10 attack to +40 attack)',
									},
									{
										id: 'Hammer',
										weapon: 'Hammer',
										bitfield: '4',
										effect:
											'x1.5 Stun damage. Synergizes well with Sigil and Caravan Skills.',
									},
									{
										id: 'Hunting Horn',
										weapon: 'Hunting Horn',
										bitfield: '256',
										effect:
											'x2 Song duration. Synergizes well with Flute Expert.',
									},
									{
										id: 'Lance',
										weapon: 'Lance',
										bitfield: '8',
										effect:
											'Guard Skill goes up by 1 level. Grants Reflect+3. Does not work with Reflect Up nor Guard Up.',
									},
									{
										id: 'Gunlance',
										weapon: 'Gunlance',
										bitfield: '512',
										effect: 'x1.5 Wyvern Fire and Shelling Damage.',
									},

									{
										id: 'Tonfa',
										weapon: 'Tonfa',
										bitfield: '2048',
										effect:
											'All Ryuuki finisher (i.e. explosion) effects buffed. Head: KO duration from 20s to 30s. Tail: Bleeding 1.5x damage. Body: Sharpness return from 15 to 20. Gunner Attack Up from 25 to 50.',
									},
									{
										id: 'Switch Axe F',
										weapon: 'Switch Axe F',
										bitfield: '4096',
										effect:
											'Increases Phial Meter Recovery by primary recovery mechanic (either by reloading or guarding)',
									},
									{
										id: 'Magnet Spike',
										weapon: 'Magnet Spike',
										bitfield: '8192',
										effect:
											'Increases Pin finisher multiplier by 1.25x (from 600 motion value to 750 motion value). x1.1 Cutting damage to the tail in cutting mode. x1.3 Stun value in impact mode.',
									},
									{
										id: 'Light Bowgun',
										weapon: 'Light Bowgun',
										effect:
											'+0.1x Damage increased at critical distance. x1.2 Status damage.',
										bitfield: '32',
									},

									{
										id: 'Heavy Bowgun',
										weapon: 'Heavy Bowgun',
										effect: '+0.1x Damage increased at critical distance.',
										bitfield: '2',
									},
									{
										id: 'Bow',
										weapon: 'Bow',
										effect:
											'x0.85 Charge time. Synergizes well with Auto-Reload.',
										bitfield: '1024',
									},
								])}
							/>
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
		<div class="page-turn">
			<PageTurn pageRouteId={$page.route.id} />
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
