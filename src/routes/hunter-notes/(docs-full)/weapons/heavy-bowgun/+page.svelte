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
	import Information from 'carbon-icons-svelte/lib/Information.svelte';
	import ToolKit from 'carbon-icons-svelte/lib/ToolKit.svelte';

	const hidenSkills: {
		id: string;
		skill: FrontierArmorSkillName;
		points: string;
		description: string;
	}[] = [
		{
			id: '4',
			skill: 'HBG Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description: 'Attack increased by x1.4 when using HBG Tech 【Gun Sage】.',
		},
		{
			id: '3',
			skill: 'HBG Tech 【Gun Sage】',
			points: '30',
			description: `Gives Super High-Grade Earplugs,
Attack x1.3 when wielding a Heavy Bowgun,
Power (value) of Element/Status ammo x1.2 and
Evade Distance Up.
Melee attacks and Crag/Clust shots all do 15 KO damage, while
Heat Beam does x1.2 damage.
Perfectly-timed compression will result in more attack power for that one salvo.`,
		},
		{
			id: '2',
			skill: 'HBG Tech Kaiden',
			points: '20',
			description:
				'Increases attack power by 1.1x and grants Evade Extender when wielding a Heavy Bowgun.',
		},
		{
			id: '1',
			skill: 'HBG Tech Expert',
			points: '10',
			description: 'Grants Evade Extender when wielding a Heavy Bowgun.',
		},
		{
			id: '0',
			skill: 'HBG Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding Heavy Bowgun.',
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
				'25 seconds uptime. The duration can be refreshed by successfully using i-frames again.',
		},
		{
			id: 3,
			skill: 'Spacing',
			description:
				'40 seconds duration and +0.15x multiplier increase. The meter is hidden and only enhances attacks within critical distance.',
		},
		{
			id: 6,
			skill: 'Ice Age',
			description:
				'1/12/26 hits to reach stage 1/2/3 respectively. All weapons share the same stage decay timer; Ice Age Up only affects the third stage’s decay rate.',
		},
		{
			id: 7,
			skill: 'Rush',
			description:
				'400/20000/? total Motion Value to reach stage 1/2/3 respectively. The third stage, exclusive to Rush Up, has a limited duration.',
		},
		{
			id: 8,
			skill: 'Ceaseless',
			description:
				'13 seconds decay window. 28/76/93 hits required to reach stage 1/2/3 respectively (21/57/93 with Ceaseless Up). The third stage is also exclusive to Ceaseless Up, which decays by stages rather than all at once.',
		},
		{
			id: 9,
			skill: 'Point Breakthrough',
			description:
				'45 seconds duration. 8/5 hits to reach stages 1/2 respectively. The previously hit hitzone is more vulnerable at Stage 2.',
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
			sigil: 'Heat Cannon Add',
			rating: 1,
			// TODO not sure if correct
			description:
				'Adds a Heat Cannon to a Heavy Bowgun. (HBG Only). Can be used alongside a shield. Provides an additional beam for Extreme Style.',
			type: 'Tech Boost',
		},
		{
			id: 5,
			sigil: 'Blunt Bullets',
			rating: 1, // TODO
			description:
				'Changes Pellet Shots to have Impact properties and deal KO damage.',
			type: 'Other',
		},
		{
			id: 6,
			sigil: 'Explosion',
			rating: 1, // TODO
			description:
				'Grants Cluster Shots a low chance to detonate into a giant explosion.',
			type: 'Other',
		},
	];
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Heavy Bowgun'} />
		<div>
			<p class="spaced-paragraph">
				The <InlineTooltip
					text="Heavy Bowgun"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Heavy Bowgun')}
				/> (HBG) is the most powerful of the three ranged weapons but is also the
				slowest in terms of mobility and firing rate. Its gameplay is similar to
				that of MHFU, with enhancements like <strong>Power Barrels</strong> and
				<strong>Shields</strong>, and most available <InlineTooltip
					text="Heavy Bowguns"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Heavy Bowgun')}
				/> can be leveled up to boost attack power.
			</p>
			<p class="spaced-paragraph">
				<strong>Critical Distance</strong> is a key mechanic for all ranged weapons,
				defining the optimal range for different ammo types.
			</p>
			<p class="spaced-paragraph">Here’s a general breakdown:</p>
			<UnorderedList class="spaced-list">
				<ListItem>
					<p>
						<InlineTooltip
							tooltip="Ammo"
							text="Normal Shots"
							icon={getItemIcon('Shot')}
							iconType="component"
						/>: Close to Mid Range
					</p>
				</ListItem>
				<ListItem>
					<p>
						<InlineTooltip
							tooltip="Ammo"
							text="Pierce Shots"
							icon={getItemIcon('Ammo Pierce')}
							iconType="component"
						/>: Mid to Far Range
					</p>
				</ListItem>
				<ListItem>
					<p>
						<InlineTooltip
							tooltip="Ammo"
							text="Pellet Shots"
							icon={getItemIcon('Ammo Spread')}
							iconType="component"
						/>: Short Range
					</p>
				</ListItem>
				<ListItem>
					<p>Other Shots: Fixed damage regardless of distance</p>
				</ListItem>
			</UnorderedList>
			<p class="spaced-paragraph">
				The game provides a visual cue for <strong>Critical Distance</strong>:
				when a shot discards its casing, an expanding circle appears. This
				visual indicator helps you learn proper spacing and positioning.
			</p>
			<p class="spaced-paragraph">
				Hitting within the first half of <strong>Critical Distance</strong> is
				crucial for maximizing DPS with the <InlineTooltip
					text="Heavy Bowgun"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Heavy Bowgun')}
				/>. In this range, the <InlineTooltip
					text="Heavy Bowgun"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Heavy Bowgun')}
				/> applies a 2.3x damage modifier, while the second half applies a 2.0x modifier.
				You’ll know you’re in the right range when the hit animation intensifies
				significantly.
			</p>
			<p class="spaced-paragraph">
				<InlineTooltip
					text="Heavy Bowguns"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Heavy Bowgun')}
				/> can be equipped with <strong>Shields</strong> or
				<strong>Power Barrels</strong>. <strong>Shields</strong> allow for
				guarding but do not benefit from the <InlineTooltip
					text="Guard"
					tooltip="Armor Skill"
					iconType="component"
					icon={getItemIcon('Jewel')}
				/> skill or trigger any guard-related abilities (e.g., <InlineTooltip
					text="Obscurity"
					tooltip="Armor Skill"
					iconType="component"
					icon={getItemIcon('Jewel')}
				/>, <InlineTooltip
					text="Reflect"
					tooltip="Armor Skill"
					iconType="component"
					icon={getItemIcon('Jewel')}
				/>) and are generally <strong>not recommended</strong> as they can become
				a crutch.
			</p>

			<p>
				For an explanation on element damage, see our <Link
					icon={Information}
					href="/hunter-notes/getting-started/elements#damage"
					>Elements page</Link
				>. For more information on motion values, see the <Link
					icon={ToolKit}
					href="/tools/calculator/damage">Damage Calculator</Link
				>.
			</p>

			<section>
				<SectionHeading level={2} title="Earth Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Earth Style</strong> is the basic <InlineTooltip
							text="Heavy Bowgun"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Heavy Bowgun')}
						/> style, providing a straightforward experience without much variation.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Heaven Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Heaven Style</strong> is a slight upgrade from
						<strong>Earth Style</strong>, adding the ability to side-step. While
						it’s generally preferable to <strong>Earth Style</strong>, the
						improvement is minimal.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Storm Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Storm Style</strong> introduces the ability to charge your
						shots. At Level 0, charged shots do slightly less damage than
						uncharged shots in <strong>Heaven Style</strong>, but higher charge
						levels offer greater damage. The charge multipliers are
						0.95x/1.15x/1.30x/1.5x from Level 0 to Level 3.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Extreme Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Extreme Style</strong> builds on
						<strong>Storm Style</strong>, retaining all its features while
						removing the damage penalty for Level 0 shots, which now deal 1.0x
						damage instead of 0.95x.
					</p>
					<p class="spaced-paragraph">
						As with other Extreme Styles, this style allows you to run with your
						weapon unsheathed, significantly increasing <InlineTooltip
							text="Heavy Bowgun's"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Heavy Bowgun')}
						/> mobility. You can also reload while running, which is a major advantage
						since reloading typically immobilizes you for a while. Firing cancels
						the running state, and you can use the charge shot to adjust your aim
						if needed.
					</p>
					<p class="spaced-paragraph">
						<strong>Extreme Style</strong> introduces a
						<strong>Heat Gauge</strong>
						meter for all <InlineTooltip
							text="Heavy Bowguns"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Heavy Bowgun')}
						/> that doesn't require a sigil to use. This meter fills as you fire
						and lets you use the <strong>Blue Heat Cannon</strong> and
						<strong>Blast Avoidance</strong>. The meter is fully extended by
						default and doesn’t need Oils to increase its capacity.
					</p>
					<p class="spaced-paragraph">
						The <strong>Blue Heat Cannon</strong> is an enhanced version found
						on various Gou <InlineTooltip
							text="Heavy Bowguns"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Heavy Bowgun')}
						/>, also obtainable through a sigil. It’s incredibly powerful and
						can take out a large portion of a standard G Rank monster’s HP.
						However, it locks you into a lengthy animation with a forced
						backward movement, leaving you vulnerable, so timing is critical.
					</p>
					<p class="spaced-paragraph">
						<strong>Blast Avoidance</strong> uses a small portion of the same
						meter as the <strong>Blue Heat Cannon</strong> to launch you in a
						manner similar to <InlineTooltip
							text="Tonfa"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Tonfa')}
						/>. It grants extensive iframes and lets you evade many dangerous
						attacks, but it also leaves you vulnerable afterward, as you can
						only run or roll immediately upon landing. You're always launched in
						the opposite direction to where you’re facing, so if you want to
						face the monster afterward, you'll need to perform a 180° turn
						before using this ability.
					</p>
					<p class="spaced-paragraph">
						It’s worth noting that you can have both versions of the <strong
							>Heat Cannon</strong
						>
						active simultaneously if you use a Sigil or weapon with the standard
						<strong>Heat Cannon</strong>, with both gauges appearing side by
						side.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Example Gear with Runs" />
				<div></div>
			</section>

			<section>
				<SectionHeading level={2} title="Active Feature" />
				<div>
					<p>+0.1x Damage increased at <strong>Critical Distance.</strong></p>
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
									on:click={() => downloadDomAsPng('hiden-dom', 'hbg-hiden')}
									>Download</Button
								>
							</div>
						</Toolbar>

						{#snippet cell({ cell })}
											
								{#if cell.value[0] == '-'}
									<p style:color="var(--ctp-red)">{cell.value}</p>
								{:else}
									<p>{cell.value}</p>
								{/if}
							
											{/snippet}
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

							{#snippet cell({ cell })}
													
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
								
													{/snippet}
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

							{#snippet cell({ cell })}
													
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
								
													{/snippet}
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
									text="Heavy Bowgun"
									iconType="component"
									icon={getWeaponIcon('Heavy Bowgun')}
								/> can quickly meet the requirements for various skills.
							</p></ListItem
						>
						<ListItem
							><p>
								Compressed shots are useful against fast-moving targets, but
								mitigating recoil requires extra effort.
							</p></ListItem
						>
						<ListItem
							><p>
								Extreme style’s heat gauge doesn’t require item management.
								Blast dodges use the meter, offering extensive i-frames, and can
								transition into a run or roll after landing.
							</p></ListItem
						>
						<ListItem
							><p>
								Charging shots helps conserve ammo, particularly effective with
								compressed Normal 3 and Element shots.
							</p></ListItem
						>
						<ListItem
							><p>
								Proper spacing increases the size of <InlineTooltip
									tooltip="Armor Skill"
									text="Heavy Bowgun Hiden's"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> 'perfect' window for compression shots when the buff is active.
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Armor Skill"
									text="Bullet Saver"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> considers every shot in a single compression shot salvo, with
								all saved ammo retained in the clip for future use.
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Weapon"
									text="Raviente Heavy Bowgun"
									iconType="component"
									icon={getWeaponIcon('Heavy Bowgun')}
								/> bomb shots are generally ineffective; players use them for their
								strong stat lines instead.
							</p></ListItem
						>
						<ListItem
							><p>
								The shield addon does not benefit from <InlineTooltip
									tooltip="Armor Skill"
									text="Obscurity"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>.
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
