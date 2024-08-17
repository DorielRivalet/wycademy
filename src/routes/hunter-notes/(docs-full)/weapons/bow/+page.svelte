<script lang="ts">
	import { page } from '$app/stores';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import type { FrontierArmorSkillName, FrontierArmorSkillTree } from 'ezlion';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import { getItemIcon } from '$lib/client/modules/frontier/items';
	import StarRating from '$lib/client/components/StarRating.svelte';
	import { getMonsterIcon } from '$lib/client/modules/frontier/monsters';

	const hidenSkills: {
		id: string;
		skill: FrontierArmorSkillName;
		points: string;
		description: string;
	}[] = [
		{
			id: '4',
			skill: 'Bow Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description:
				'Attack increased by x1.4 when using Bow Tech 【Bow Demon】.',
		},
		{
			id: '3',
			skill: 'Bow Tech 【Bow Demon】',
			points: '30',
			description: `Gives Super High-Grade Earplugs and
Attack x1.3 when wielding a Bow.
Arrows cannot be deflected.
Power Coating modifier increased by an extra 0.2x.
Arc-Shot can be executed at Charge Lv2.`,
		},
		{
			id: '2',
			skill: 'Bow Tech Kaiden',
			points: '20',
			description:
				'Increases attack power by 1.1x and prevents arrows from being deflected when wielding a Bow.',
		},
		{
			id: '1',
			skill: 'Bow Tech Expert',
			points: '10',
			description:
				"Prevents arrows from being deflected when wielding a Bow. Examples: Elder Dragon Auras, Gou Yama Tsukami, and UNKNOWN's Rage Mode Entry Fire Aura",
		},
		{
			id: '0',
			skill: 'Bow Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding Bow.',
		},
	];

	const skillInteractions: {
		id: number;
		skill: FrontierArmorSkillTree;
		description: string;
	}[] = [
		{
			id: 0,
			skill: 'Dissolver',
			description:
				'Adjusts the element hitzones by +5. Determination applies the effects of Dissolver without the need for hitzone requirements, effectively forcing elemental damage or reducing/negating negative hitzones.',
		},
		{
			id: 1,
			skill: 'Vampirism',
			description:
				'+4 True Raw per hit. Up to 80 True Raw can be gained through leeching.',
		},
		{
			id: 2,
			skill: 'Stylish Assault',
			description:
				'20 seconds uptime. The duration can be refreshed by successfully using i-frames again.',
		},
		{
			id: 5,
			skill: 'Lavish Attack',
			description:
				'-1 coating cost. Grants a +0.2x Raw multiplier to all coatings, excluding bombs.',
		},
		{
			id: 3,
			skill: 'Spacing',
			description:
				'30 seconds duration and +0.1x multiplier increase. The meter is hidden and only enhances attacks within critical distance.',
		},
		{
			id: 6,
			skill: 'Ice Age',
			description:
				'1/17/38 hits to reach stage 1/2/3 respectively. All weapons share the same stage decay timer; Ice Age Up only affects the third stage’s decay rate.',
		},
		{
			id: 7,
			skill: 'Rush',
			description:
				'400/20000/? total Motion Value to reach stage 1/2/3 respectively. The third stage, exclusive to Rush Up, has a limited duration. Bow can trigger Rush Up very fast.',
		},
		{
			id: 8,
			skill: 'Ceaseless',
			description:
				'12 seconds decay window. 16/48/60 hits required to reach stage 1/2/3 respectively (12/36/60 with Ceaseless Up). The third stage is also exclusive to Ceaseless Up, which decays by stages rather than all at once.',
		},
		{
			id: 9,
			skill: 'Point Breakthrough',
			description:
				'35 seconds duration. 17/10 hits to reach stages 1/2 respectively. The previously hit hitzone is more vulnerable at Stage 2.',
		},
		{
			id: 10,
			skill: 'Furious',
			description:
				'1/2/5 evasions to reach stage 1/2/3 respectively. These effects apply to both successful evasions and perfect guards (where applicable), but attacking is necessary to advance stages.',
		},
	];

	const sigilsUsabilityRatings: {
		id: number;
		rating: number;
		sigil: string;
		type: string;
		description: string;
	}[] = [
		{
			id: 0,
			sigil: 'Rising Dragon Bow',
			rating: 2,
			description:
				'Increases the Motion Value of the Shoryuken attack with the Bow (12x2･10x2･31･10 > 17x2･15x2･41･15). (Storm and Heaven Style only)',
			type: 'Tech Boost',
		},
		{
			id: 5,
			sigil: 'Piercing Shot',
			rating: 1, // TODO
			description:
				'Changes the final crouching charge level Snipe Shot to a Piercing Shot that hits multiple times. (Storm Style only)',
			type: 'Tech Change',
		},
		{
			id: 6,
			sigil: 'Arc Shot Change',
			rating: 1, // TODO
			description:
				'Changes the Arc Shot type to one of the following: [Wide Pellet Rain] [Narrow Pellet Rain] [Explosive Shell] [Cutting Rain].',
			type: 'Other',
		},
	];
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Bow'} />
		<div>
			<p class="spaced-paragraph">
				<!-- The <InlineTooltip
					tooltip="Weapon"
					text="Switch Axe F"
					iconType="component"
					icon={getWeaponIcon('Switch Axe F')}
				/>, Swaxe for short, is a weapon introduced in <InlineTooltip
					tooltip="Game"
					text="Monster Hunter Frontier G10"
					iconType="file"
					icon={gameInfo.find((e) => e.name === 'Monster Hunter Frontier G')
						?.icon}
				/>. It is unlocked by reaching G Rank. -->
			</p>

			<!-- <CenteredFigure
				figcaption="Triggering Elemental Release."
				alt="Triggering Elemental Release"
				type="file"
				width="100%"
				src={SwaxeExplosion}
			/> -->

			<p>
				For more information on motion values, see the <Link
					inline
					href="/tools/calculator/damage">Damage Calculator.</Link
				>
			</p>

			<section>
				<SectionHeading level={2} title="Example Gear with Runs" />
				<div></div>
			</section>

			<section>
				<SectionHeading level={2} title="Active Feature" />
				<div>
					<p>x0.85 Charge time. Synergizes well with Auto-Reload.</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Hiden" />
				<div>
					<DataTable
						useStaticWidth
						id="hiden-dom"
						sortable
						zebra
						size="medium"
						headers={[
							{ key: 'skill', value: 'Skill' },
							{ key: 'points', value: 'Points' },
							{ key: 'description', value: 'Description' },
						]}
						rows={hidenSkills}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(hidenSkills)}
								/>
								<Button
									kind="tertiary"
									icon={Download}
									on:click={() => downloadDomAsPng('hiden-dom', 'tonfa-hiden')}
									>Download</Button
								>
							</div>
						</Toolbar>

						<svelte:fragment slot="cell" let:cell>
							{#if cell.value[0] == '-'}
								<p style:color="var(--ctp-red)">{cell.value}</p>
							{:else}
								<p>{cell.value}</p>
							{/if}
						</svelte:fragment>
					</DataTable>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Skill Interactions" />
				<div>
					<div>
						<DataTable
							useStaticWidth
							id="skill-interactions-dom"
							sortable
							zebra
							size="medium"
							headers={[
								{ key: 'skill', value: 'Skill' },
								{ key: 'description', value: 'Description' },
							]}
							rows={skillInteractions}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(skillInteractions)}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={() =>
											downloadDomAsPng(
												'skill-interactions-dom',
												'skill-interactions',
											)}>Download</Button
									>
								</div>
							</Toolbar>

							<svelte:fragment slot="cell" let:cell>
								{#if cell.key === 'skill'}
									<InlineTooltip
										text={cell.value}
										tooltip="Armor Skill"
										iconType="component"
										icon={getItemIcon('Jewel')}
									/>
								{:else}
									<p>{cell.value}</p>
								{/if}
							</svelte:fragment>
						</DataTable>
					</div>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Sigils Usability Ratings" />
				<div>
					<div class="table">
						<DataTable
							useStaticWidth
							id="sigils-dom"
							sortable
							zebra
							size="medium"
							headers={[
								{ key: 'sigil', value: 'Sigil' },
								{ key: 'rating', value: 'Rating' },
								{ key: 'description', value: 'Description' },
								{ key: 'type', value: 'Type' },
							]}
							rows={sigilsUsabilityRatings}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(sigilsUsabilityRatings)}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={() => downloadDomAsPng('sigils-dom', 'sigils')}
										>Download</Button
									>
								</div>
							</Toolbar>

							<svelte:fragment slot="cell" let:cell>
								{#if cell.key === 'sigil'}
									<InlineTooltip
										text={cell.value}
										tooltip="Sigil"
										iconType="component"
										icon={getItemIcon('Sigil')}
									/>
								{:else if cell.key === 'rating'}
									<StarRating
										rating={Number.parseFloat(cell.value)}
										maxRating={3}
									/>
								{:else}
									<p>{cell.value}</p>
								{/if}
							</svelte:fragment>
						</DataTable>
					</div>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Tips and Tricks" />
				<div>
					<UnorderedList>
						<ListItem
							><p>
								As a Gunner weapon, the <InlineTooltip
									tooltip="Weapon"
									text="Bow"
									iconType="component"
									icon={getWeaponIcon('Bow')}
								/> can quickly meet the requirements for various skills.
							</p></ListItem
						>
						<ListItem
							><p>
								The <InlineTooltip
									tooltip="Weapon"
									text="Bow"
									iconType="component"
									icon={getWeaponIcon('Bow')}
								/> has several aiming modes in the options, but ultimately uses 2nd
								generation-style controls. While charging, pressing Square (or X)
								allows you to dodge.
							</p></ListItem
						>
						<ListItem
							><p>
								While aiming, the critical distance ranges of your shot are
								visible.
							</p></ListItem
						>
						<ListItem
							><p>
								Holding down L1 while releasing a shot performs a coatingless
								shot, which doesn’t consume or grant the benefits of the loaded
								coating. This technique is based on a glitch from MH2.
							</p></ListItem
						>
						<ListItem
							><p>
								Rapid shot types are recommended. <InlineTooltip
									tooltip="Ammo"
									text="Spread"
									iconType="component"
									icon={getItemIcon('Ammo Spread')}
								/> shots are powerful but awkward, while <InlineTooltip
									tooltip="Ammo"
									text="Spread"
									iconType="component"
									icon={getItemIcon('Ammo Pierce')}
								/> shots work well as a Level 3 charge.
							</p></ListItem
						>
						<ListItem
							><p>
								Crouching shots can be tricky to use, but with the <InlineTooltip
									tooltip="Sigil"
									text="Piercing Shot"
									iconType="component"
									icon={getItemIcon('Sigil')}
								/>
								sigil, they can effectively inflict status.
							</p></ListItem
						>
						<ListItem
							><p>
								Since Sniper’s critical distance bonus is included in both
								<InlineTooltip
									tooltip="Armor Skill"
									text="Steady Hand+2"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> and <InlineTooltip
									tooltip="Armor Skill"
									text="Solid Determination"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>, simply using <InlineTooltip
									tooltip="Armor Skill"
									text="Auto-Reload"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> is sufficient.
							</p></ListItem
						>
					</UnorderedList>
				</div>
			</section>
		</div>

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</section>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.paragraph-with-icon {
		display: flex;
		align-items: center;
		gap: 0.125rem;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.video {
		width: 80%;
		margin: 0 auto;
		margin-bottom: 2rem;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.table {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
</style>
