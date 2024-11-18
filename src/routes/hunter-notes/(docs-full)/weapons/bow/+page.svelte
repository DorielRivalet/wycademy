<script lang="ts">
	import { page } from '$app/stores';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
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
	import {
		getItemColor,
		getItemIcon,
	} from '$lib/client/modules/frontier/items';
	import StarRating from '$lib/client/components/StarRating.svelte';
	import { getMonsterIcon } from '$lib/client/modules/frontier/monsters';
	import Information from 'carbon-icons-svelte/lib/Information.svelte';
	import ToolKit from 'carbon-icons-svelte/lib/ToolKit.svelte';

	function getCoatingColor(coating: string) {
		switch (coating) {
			default:
				return 'White';
			case 'Power Coating':
			case 'Impact Coating':
			case 'Bomb Coating':
				return 'Red';
			case 'Sleep Coating':
				return 'Blue';
			case 'Paralysis Coating':
				return 'Yellow';
			case 'Poison Coating':
				return 'Purple';
		}
	}

	const bowCoatings: {
		id: number;
		coating: string;
		multiplier: number;
	}[] = [
		{ id: 0, coating: 'Power Coating', multiplier: 1.5 },
		{ id: 1, coating: 'Sleep Coating', multiplier: 1.4 },
		{ id: 2, coating: 'Paralysis Coating', multiplier: 1.4 },
		{ id: 3, coating: 'Poison Coating', multiplier: 1.4 },
		{ id: 4, coating: 'Impact Coating', multiplier: 1.4 },
		{ id: 5, coating: 'Bomb Coating', multiplier: 1.4 },
	];

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

<TableOfContentsPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Bow'} />
		<div>
			<div class="spaced-paragraph">
				The <InlineTooltip
					text="Bow"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Bow')}
				/> in this game closely resembles its original mainline implementation, where
				you charge shots and apply <InlineTooltip
					text="coatings"
					tooltip="Item"
					iconType="component"
					icon={getItemIcon('Coating')}
				/> to enhance your attacks.
			</p>
			<div class="spaced-paragraph">
				<strong>Critical Distance</strong> is a mechanic shared by all ranged
				weapons and refers to the optimal range for each type of shot. When
				using a <InlineTooltip
					text="Bow"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Bow')}
				/>, a visual indicator will appear while aiming, helping you position
				yourself at the ideal distance.
			</p>
			<div class="spaced-paragraph">
				Bows typically have three levels of charge by default, but you can
				unlock a fourth level with the <InlineTooltip
					text="Armor Skill"
					tooltip="Load Up"
					iconType="component"
					icon={getItemIcon('Jewel')}
				/> armor skill. Additionally, the <InlineTooltip
					text="Armor Skill"
					tooltip="Auto-Reload"
					iconType="component"
					icon={getItemIcon('Jewel')}
				/> skill can reduce the charge time for each shot.
			</p>
			<div class="spaced-paragraph">
				<strong>Arc Shots</strong> from the mainline games are also available,
				with the most notable being the <strong>Cutting Shot</strong>. Although
				it uses the weakness value for ranged attacks to calculate damage, it
				deals cutting damage, allowing it to sever tails.
				<strong>Arc Shots</strong> are unaffected by critical range or charge
				levels, so skills that enhance those attributes won't benefit these
				attacks. If you hit a target in the air before the
				<strong>Arc Shot</strong> transitions to its actual hit type, you won't trigger
				the projectile rain effect, wasting the shot.
			</p>

			<div>
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
					<div class="spaced-paragraph">
						<strong>Earth Style</strong> is the fundamental <InlineTooltip
							text="Bow"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Bow')}
						/> style, nearly identical to the version in MHFU. It has 3-4 charge
						levels depending on whether you have the <InlineTooltip
							text="Armor Skill"
							tooltip="Load Up"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/> skill, and its melee attack is relatively weak.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Heaven Style" />
				<div>
					<div class="spaced-paragraph">
						<strong>Heaven Style</strong> is a variation of
						<strong>Earth Style</strong> with the addition of a shoryuken-style
						melee attack that deals cutting damage. This style is generally the
						best option until you unlock <strong>Extreme Style</strong>, as the
						benefits of <strong>Storm Style</strong> are debatable and it adds a
						17% increase to charge time. <strong>Heaven Style</strong> is a
						solid choice until you can access <strong>Extreme Style</strong>.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Storm Style" />
				<div>
					<div class="spaced-paragraph">
						<strong>Storm Style</strong> retains the shoryuken attack and
						introduces the ability to crouch, which further enhances charge
						levels and adds a <strong>Sniper Shot</strong>. The
						<strong>Sniper Shot</strong> is a single, powerful arrow that acts
						as a fourth or fifth charge level when using <InlineTooltip
							text="Load Up"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/>. However, this shot takes 10% longer to charge and isn't
						particularly powerful, especially when used with <InlineTooltip
							text="Load Up"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/>. If you plan to use
						<strong>Sniper Mode</strong>, it's better to avoid bows that rely on
						the fourth charge level and skip the <InlineTooltip
							text="Load Up"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/> skill.
						<strong>Storm Style</strong> also suffers from a 17% longer charge
						time compared to Earth or Heaven Style, making
						<strong>Heaven Style</strong> the preferred choice until you unlock
						<strong>Extreme Style.</strong>
					</p>
					<div class="spaced-paragraph">
						Ultimately, the new features in <strong>Storm Style</strong> are
						rarely used, making its advantages over
						<strong>Heaven Style</strong> negligible when considering the downside
						of increased charge times.
					</div>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Extreme Style" />
				<div>
					<div class="spaced-paragraph">
						<strong>Extreme Style</strong> builds upon
						<strong>Storm Style</strong>, retaining the crouch shot but without
						the extended charge times, making it a straightforward upgrade.
					</div>
					<div class="spaced-paragraph">
						This style allows you to run with your <InlineTooltip
							text="Bow"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Bow')}
						/> unsheathed, enabling you to charge shots and load coatings on the
						move. You can also roll while charging without losing your charge level
						and perform a Quick Shot, similar to the Power Shot mechanic from 4U.
						The Quick Shot duplicates your previous shot with a lower final multiplier—Lv1
						charges deal 100% of the previous shot, Lv2 deals 85%, Lv3 deals 75%,
						and Lv4 deals 65%. This second shot is treated as a separate action,
						consuming <InlineTooltip
							text="coatings"
							tooltip="Item"
							iconType="component"
							icon={getItemIcon('Coating')}
						/> accordingly, and interacts with skills like <InlineTooltip
							tooltip="Armor Skill"
							text="Consumption Slayer"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/> and <InlineTooltip
							tooltip="Armor Skill"
							text="Bullet Saver"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/> individually.
					</p>
					<div class="spaced-paragraph">
						A new shot type, <strong>Rising Arrow</strong>, is also introduced.
						It flies horizontally to a fixed point before switching to a
						vertical descent. This shot ignores standard charge level properties
						and deals fixed damage regardless of the Bow’s shot type. It is
						about 16% weaker than a perfectly spaced Lv3 Rapid Shot at charge
						level 4, with all arrows landing accurately.
					</p>
					<div class="spaced-paragraph">
						Rising Arrow shots are always considered within <strong
							>Critical Distance</strong
						>
						for the vertical portion, meaning the Critical Shot weakness value and
						any related multipliers apply. However, because it’s not a Rapid, Spread,
						or Scatter shot, skills like <InlineTooltip
							tooltip="Armor Skill"
							text="Steady Hand"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/> or individual Shot Up skills won’t apply their multipliers.
					</p>
					<div class="spaced-paragraph">
						<strong>Extreme Style</strong> is the best Bow style overall, and there’s
						little reason to switch to other styles once you have access to it.
					</div>
					<div class="table">
						<DataTable
							useStaticWidth
							id="bow-coatings-dom"
							title="Bow Coatings"
							sortable
							zebra
							size="medium"
							headers={[
								{ key: 'coating', value: 'Coating' },
								{ key: 'multiplier', value: 'Multiplier' },
							]}
							rows={bowCoatings}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(bowCoatings)}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={() =>
											downloadDomAsPng('bow-coatings-dom', 'bow-coatings')}
										>Download</Button
									>
								</div>
							</Toolbar>

							{#snippet cell({ cell })}
								{#if cell.key === 'coating'}
									<InlineTooltip
										text={cell.value}
										tooltip="Item"
										iconType="component"
										icon={getItemIcon('Coating')}
										iconColor={getItemColor(getCoatingColor(cell.value))}
									/>
								{:else}
									<div>{cell.value}</div>
								{/if}
							{/snippet}
						</DataTable>
					</div>
					<div>
						To increase the Bow coating multipliers, you can use <InlineTooltip
							tooltip="Armor Skill"
							text="Hiden"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/> (+0.2), at least one Zenith or Origin armor piece (+0.1), and <InlineTooltip
							tooltip="Armor Skill"
							text="Consumption Slayer"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/>
						(+0.2), for a maximum multiplier of 2 with <InlineTooltip
							tooltip="Item"
							text="Power Coating"
							iconType="component"
							iconColor={getItemColor('Red')}
							icon={getItemIcon('Coating')}
						/> (1.5). To see more information on how Bow coatings work, see the <Link
							href="/tools/calculator/damage"
							icon={ToolKit}>Damage Calculator.</Link
						>
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
					<div>
						x0.85 Charge time. Synergizes well with <InlineTooltip
							tooltip="Armor Skill"
							text="Auto-Reload"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/>.
					</p>
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
									on:click={() => downloadDomAsPng('hiden-dom', 'bow-hiden')}
									>Download</Button
								>
							</div>
						</Toolbar>

						{#snippet cell({ cell })}
							{#if cell.value[0] == '-'}
								<p style:color="var(--ctp-red)">{cell.value}</p>
							{:else}
								<div>{cell.value}</div>
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
									<div>{cell.value}</div>
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
									<div>{cell.value}</div>
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
							><div>
								As a Gunner weapon, the <InlineTooltip
									tooltip="Weapon"
									text="Bow"
									iconType="component"
									icon={getWeaponIcon('Bow')}
								/> can quickly meet the requirements for various skills.
							</div></ListItem
						>
						<ListItem
							><div>
								The <InlineTooltip
									tooltip="Weapon"
									text="Bow"
									iconType="component"
									icon={getWeaponIcon('Bow')}
								/> has several aiming modes in the options, but ultimately uses 2nd
								generation-style controls. While charging, pressing Square (or X)
								allows you to dodge.
							</div></ListItem
						>
						<ListItem
							><div>
								While aiming, the critical distance ranges of your shot are
								visible.
							</div></ListItem
						>
						<ListItem
							><div>
								Holding down L1 while releasing a shot performs a coatingless
								shot, which doesn’t consume or grant the benefits of the loaded
								<InlineTooltip
									text="coating"
									tooltip="Item"
									iconType="component"
									icon={getItemIcon('Coating')}
								/>. This technique is based on a glitch from MH2.
							</div></ListItem
						>
						<ListItem
							><div>
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
							</div></ListItem
						>
						<ListItem
							><div>
								Crouching shots can be tricky to use, but with the <InlineTooltip
									tooltip="Sigil"
									text="Piercing Shot"
									iconType="component"
									icon={getItemIcon('Sigil')}
								/>
								sigil, they can effectively inflict status.
							</div></ListItem
						>
						<ListItem
							><div>
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
							</div></ListItem
						>
					</UnorderedList>
				</div>
			</section>
		</div>

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</section>
</TableOfContentsPage>

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
