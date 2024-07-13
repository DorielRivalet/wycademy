<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import {
		LocationIcons,
		divaPrayerGems,
	} from '$lib/client/modules/frontier/objects';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import ezlion from 'ezlion';
	import { page } from '$app/stores';
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Diva Defense'} />
		<section>
			<SectionHeading level={2} title="Diva Prayer Gems" />
			<div>
				<p class="spaced-paragraph">
					During the <InlineTooltip
						text="Diva Defense"
						tooltip="Event"
						icon={LocationIcons.find((e) => e.name === 'Interception')?.icon}
						iconType="file"
					/> event, there are up to four different colors of Prayer gems, each of
					these will have a different effect based on the skills currently assigned
					to the individual colors.
				</p>
				<p class="spaced-paragraph">
					The buffs are only available in the second week of the event. The
					total number of times they can be used is based on the global server's
					Song Spheres. When Prayers are maxed out you will be forced to choose
					another color, locking you from contributing to it.
				</p>
				<p class="spaced-paragraph">
					You select your color each day by talking to the Blue Guild Girl who
					handles things such as Arena quests. You can change this color once a
					day after 12 PM. Selecting your first color does not count as changing
					it, allowing you to contribute to two different colors on the first
					day.
				</p>
				<p class="spaced-paragraph">
					There are a number of different possible effects for each of these
					gems, and which is assigned to which color will change on each cycle,
					which should be verified in game.
				</p>
				<p class="spaced-paragraph">
					Each day at some point after 12 PM the most popular prayer is ranked
					up. This is based on server wide contributions and thus cannot be
					manipulated to be something based on what you would personally prefer.
					The total level of prayers cannot exceed 7. If there are four prayers
					up each with three levels levels it's very likely that the two most
					popular ones will get max levels, the third most popular will get a
					single level and then the least popular will get no levels.
				</p>
				<p class="spaced-paragraph">
					You can check your currently equipped gem names in Overlay Settings >
					Hunter Notes > Gear Info (Text)
				</p>
				<div class="diva-prayer-gems-table">
					<DataTable
						useStaticWidth
						sortable
						zebra
						size="medium"
						headers={[
							{ key: 'name', value: 'Prayer Gem' },
							{ key: 'description', value: 'Effects' },
							{ key: 'maxLevel', value: 'Max Level' },
							{ key: 'unused', value: 'Unused' },
							{ key: 'partyEffect', value: 'Party Effect' },
						]}
						rows={divaPrayerGems
							.filter((e) => e.name !== 'None')
							.map((e) => {
								return {
									...e,
									unused: e.unused ? '✅' : '❌',
									partyEffect: e.partyEffect ? '✅' : '❌',
								};
							})}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray([
										{
											id: '1',
											gem: ezlion.SkillDivaPrayerGem[1],
											effects:
												'Sharpness does not decrease with blademaster weapons. Works for 5, 10 or 20 quests depending on level during the prayer active window.',
											maxLevel: '3',
											unused: '❌',
											partyEffect: '❌',
										},
										{
											id: '2',
											gem: ezlion.SkillDivaPrayerGem[2],
											effects:
												'Reduces the recoil and reload speed of Gunner weapons.',
											maxLevel: '7',
											unused: '✅',
											partyEffect: '✅',
										},
										{
											id: '3',
											gem: ezlion.SkillDivaPrayerGem[3],
											effects: 'Tails can be cut with any damage type.',
											maxLevel: '1',
											unused: '❌',
											partyEffect: '❌',
										},
										{
											id: '4',
											gem: ezlion.SkillDivaPrayerGem[4],
											effects: 'Adds passive HP recovery to all quests.',
											maxLevel: '2',
											unused: '❌',
											partyEffect: '✅',
										},
										{
											id: '5',
											gem: ezlion.SkillDivaPrayerGem[5],
											effects:
												'Makes it easier to scare monsters by attacking with Earth Style.',
											maxLevel: '4',
											unused: '✅',
											partyEffect: '❌',
										},
										{
											id: '6',
											gem: ezlion.SkillDivaPrayerGem[6],
											effects:
												'Makes it easier to scare monsters by attacking with Heaven Style.',
											maxLevel: '4',
											unused: '✅',
											partyEffect: '❌',
										},
										{
											id: '7',
											gem: ezlion.SkillDivaPrayerGem[7],
											effects:
												'Makes it easier to scare monsters by attacking with Storm Style.',
											maxLevel: '4',
											unused: '✅',
											partyEffect: '❌',
										},
										{
											id: '8',
											gem: ezlion.SkillDivaPrayerGem[8],
											effects:
												'Increases the amount of raw damage dealt by a cutting weapon by adjusting hitboxes to be weaker against the damage type.',
											maxLevel: '3',
											unused: '❌',
											partyEffect: '❌',
										},
										{
											id: '9',
											gem: ezlion.SkillDivaPrayerGem[9],
											effects:
												'Increases the amount of raw damage dealt by an impact weapon by adjusting hitboxes to be weaker against the damage type.',
											maxLevel: '3',
											unused: '❌',
											partyEffect: '❌',
										},
										{
											id: '10',
											gem: ezlion.SkillDivaPrayerGem[10],
											effects:
												'Increases the amount of raw damage dealt by a ranged weapon by adjusting hitboxes to be weaker against the damage type.',
											maxLevel: '3',
											unused: '❌',
											partyEffect: '❌',
										},
										{
											id: '11',
											gem: ezlion.SkillDivaPrayerGem[11],
											effects:
												'Increases the duration of status effects on monsters.',
											maxLevel: '3',
											unused: '❌',
											partyEffect: '✅',
										},
										{
											id: '12',
											gem: ezlion.SkillDivaPrayerGem[12],
											effects:
												'Monsters are more susceptible to status ailments.',
											maxLevel: '3',
											unused: '✅',
											partyEffect: '✅',
										},
										{
											id: '13',
											gem: ezlion.SkillDivaPrayerGem[13],
											effects:
												'Increases damage when striking body parts upon which your attacks are highly effective. However, element damage does not change.',
											maxLevel: '3',
											unused: '✅',
											partyEffect: '❌',
										},
										{
											id: '14',
											gem: ezlion.SkillDivaPrayerGem[14],
											effects: 'Elemental damage increases based on level.',
											maxLevel: '3',
											unused: '❌',
											partyEffect: '❌',
										},
										{
											id: '15',
											gem: ezlion.SkillDivaPrayerGem[15],
											effects:
												'Monsters cannot flee if in the same area as a hunter.',
											maxLevel: '3',
											unused: '❌',
											partyEffect: '✅',
										},
										{
											id: '16',
											gem: ezlion.SkillDivaPrayerGem[16],
											effects:
												'Adds new items to the GCP store based on level.',
											maxLevel: '1',
											unused: '❌',
											partyEffect: '❌',
										},
										{
											id: '17',
											gem: ezlion.SkillDivaPrayerGem[17],
											effects:
												'Attack will go up based on the number of human hunters in a quest.',
											maxLevel: '3',
											unused: '❌',
											partyEffect: '✅',
										},
										{
											id: '18',
											gem: ezlion.SkillDivaPrayerGem[18],
											effects:
												"Gives Divine Protection, Goddess' Embrace or Soul Revival based on level.",
											maxLevel: '3',
											unused: '❌',
											partyEffect: '❌',
										},
										{
											id: '19',
											gem: ezlion.SkillDivaPrayerGem[19],
											effects:
												'Increases affinity of all weapons based on the level of the song.',
											maxLevel: '3',
											unused: '❌',
											partyEffect: '❌',
										},
										{
											id: '20',
											gem: ezlion.SkillDivaPrayerGem[20],
											effects: 'Increases fire resistance.',
											maxLevel: '3',
											unused: '✅',
											partyEffect: '❌',
										},
										{
											id: '21',
											gem: ezlion.SkillDivaPrayerGem[21],
											effects: 'Increases water resistance.',
											maxLevel: '3',
											unused: '✅',
											partyEffect: '❌',
										},
										{
											id: '22',
											gem: ezlion.SkillDivaPrayerGem[22],
											effects: 'Increases thunder resistance.',
											maxLevel: '3',
											unused: '✅',
											partyEffect: '❌',
										},
										{
											id: '23',
											gem: ezlion.SkillDivaPrayerGem[23],
											effects: 'Increases dragon resistance.',
											maxLevel: '3',
											unused: '✅',
											partyEffect: '❌',
										},
										{
											id: '24',
											gem: ezlion.SkillDivaPrayerGem[24],
											effects: 'Increases ice resistance.',
											maxLevel: '3',
											unused: '✅',
											partyEffect: '❌',
										},
										{
											id: '25',
											gem: ezlion.SkillDivaPrayerGem[25],
											effects: 'Increases resistance to all elements.',
											maxLevel: '2',
											unused: '✅',
											partyEffect: '❌',
										},
									])}
								/>
							</div>
						</Toolbar>

						<svelte:fragment slot="cell" let:cell>
							<p>{cell.value}</p>
						</svelte:fragment>
					</DataTable>
				</div>
			</div>
		</section>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
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

	.diva-prayer-gems-table {
		display: flex;
		flex-wrap: wrap;
		overflow-x: auto;
		max-width: 90vw;
	}
</style>
