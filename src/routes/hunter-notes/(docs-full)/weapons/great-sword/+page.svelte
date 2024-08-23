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
	import {
		getItemColor,
		getItemIcon,
	} from '$lib/client/modules/frontier/items';
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
			skill: 'GS Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description: 'Sharpness level +1 is added to GS Tech 【Sword King】.',
		},
		{
			id: '3',
			skill: 'GS Tech 【Sword King】',
			points: '30',
			description: `Gives Super High-Grade Earplugs, Attack x1.2 when wielding a Great Sword, Fencing +1 and Guard slash counter block recovers half the sharpness that would be lost. Also grants Faster charging (stacks with Focus), charge remains at level 4 longer before dropping to level 2 charge (Storm Style). Perfectly timed blocks cause no knockback, can be evaded out of, drain no stamina, and recover half the sharpness that would be lost. Sharpness recovery effect works while using Sharp Sword and allows you to recover sharpness with +2.`,
		},
		{
			id: '2',
			skill: 'GS Tech Kaiden',
			points: '20',
			description:
				'Increases attack by 1.1 and grants Fencing+1 when wielding Great Sword.',
		},
		{
			id: '1',
			skill: 'GS Tech Expert',
			points: '10',
			description: 'Fencing+1 when wielding Great Sword.',
		},
		{
			id: '0',
			skill: 'GS Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding Great Sword.',
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
				'Adjusts the element hitzones by +15. Determination applies the effects of Dissolver without the need for hitzone requirements, effectively forcing element damage or reducing/negating negative hitzones.',
		},
		{
			id: 1,
			skill: 'Vampirism',
			description:
				'+7 True Raw per hit. Up to 80 True Raw can be gained through leeching.',
		},
		{
			id: 2,
			skill: 'Stylish Assault',
			description:
				'120 seconds uptime. The duration can be refreshed by successfully using i-frames again.',
		},
		{
			id: 3,
			skill: 'Stylish',
			description:
				'+5 sharpness recovery. When using Stylish Up, get 2 free hits before sharpness is reduced.',
		},
		{
			id: 4,
			skill: 'Lavish Attack',
			description:
				'-6 sharpness per hit. Lavish Attack reduces the free hits granted by Stylish Up to 1.',
		},
		{
			id: 5,
			skill: 'Obscurity',
			description:
				'Max stack of 225 True Raw. Obscurity Up maxes out after two perfect guards, allowing subsequent guards to restore 5 or 15 sharpness depending on timing.',
		},
		{
			id: 6,
			skill: 'Ice Age',
			description:
				'1/8/17 hits to reach stage 1/2/3 respectively. All weapons share the same stage decay timer; Ice Age Up only affects the third stage’s decay rate.',
		},
		{
			id: 7,
			skill: 'Rush',
			description:
				'34/1700/? total Motion Value to reach stage 1/2/3 respectively. The third stage, exclusive to Rush Up, has a limited duration.',
		},
		{
			id: 8,
			skill: 'Ceaseless',
			description:
				'15 seconds decay window. 7/21/26 hits required to reach stage 1/2/3 respectively (5/16/26 with Ceaseless Up). The third stage is also exclusive to Ceaseless Up, which decays by stages rather than all at once.',
		},
		{
			id: 9,
			skill: 'Point Breakthrough',
			description:
				'55 seconds duration. 6/3 hits to reach stages 1/2 respectively (5/3 with Fencing+2). The previously hit hitzone is more vulnerable at Stage 2, and Fencing +2 slightly eases activation.',
		},
		{
			id: 10,
			skill: 'Furious',
			description:
				'1/2/5 evasions or 1/3/6 perfect guards to reach stage 1/2/3 respectively. These effects apply to both successful evasions and perfect guards (where applicable), but attacking is necessary to advance stages.',
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
			sigil: 'Upswing',
			rating: 1,
			description:
				'Boosts the Motion Value of the Upswing Attack (56 > 72). Does not affect Upswing Charges.',
			type: 'Tech Boost',
		},
		{
			id: 2,
			sigil: 'Rotation Slash',
			rating: 1,
			description:
				'Boosts the Motion Value of the Horizontal Slash Attack (44 > 57).',
			type: 'Tech Boost',
		},
		{
			id: 3,
			sigil: 'Guard Slash',
			rating: 1,
			description:
				"Allows the Guard Slash to block an additional hit, increasing the counter's damage. Heaven and Storm Style Only. Max of two additional blocked attacks for a total of three (up to 2 sigils are useful).",
			type: 'Tech Boost',
		},
		{
			id: 4,
			sigil: 'GS Length Up',
			rating: 2,
			description:
				'Increases the length of your weapon and decreases your True Raw by 25. Does not affect the True Raw decrease if multiple of this sigil are used.',
			type: 'Other',
		},
	];
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Great Sword'} />
		<div>
			<p class="spaced-paragraph">
				The <InlineTooltip
					text="Great Sword"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Great Sword')}
				/> (GS) in Frontier retains its core mechanics from the mainline series—slow
				but powerful, with charge attacks that capitalize on openings and precise
				timing. With this weapon, <strong>raw damage</strong> reigns supreme, while
				elemental or status effects are secondary.
			</p>
			<p class="spaced-paragraph">
				The <InlineTooltip
					text="Great Sword"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Great Sword')}
				/> can generate <strong>Super Armor</strong>, which completely negates
				knockback. This can be a double-edged sword. For instance, if you
				activate it while a <InlineTooltip
					text="Rathalos"
					tooltip="Monster"
					iconType="file"
					icon={getMonsterIcon('Rathalos')}
				/> is launching a fireball, you can absorb the hit without flinching and
				potentially land a charged attack on its face. However, if you try to tank
				a multi-hit attack, like a <InlineTooltip
					text="Yian Kut-Ku's"
					tooltip="Monster"
					iconType="file"
					icon={getMonsterIcon('Yian Kut-Ku')}
				/> pecking, you'll take damage from each hit, potentially far exceeding the
				damage of a single hit due to the loss of iframes from the knockdown.
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
						<strong>Earth Style</strong> is the classic <InlineTooltip
							text="Great Sword"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Great Sword')}
						/> moveset, similar to the one used since MH Dos. It includes a charge
						on the vertical downswing, which you should use to hit monsters with
						powerful strikes.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Heaven Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Heaven Style</strong> is a unique approach that replaces all
						charge attacks with a counter. This counter resembles a horizontal
						slash but raises the <InlineTooltip
							text="Great Sword"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Great Sword')}
						/> in front of you, allowing you to block any attack that would be blockable
						with <InlineTooltip
							text="Guard+2"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/> without taking chip damage. While this counter is highly effective,
						it doesn’t offer the consistent damage output of a fully charged attack.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Storm Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Storm Style</strong> modifies the charging mechanic, placing
						it on the upswing rather than the downswing, with a fourth level of
						charge available. This level can deal significantly higher damage,
						but it's more challenging to land accurately. If mistimed, the
						charge downgrades to a level 2, which reduces its effectiveness.
						This style also includes the counter from
						<strong>Heaven Style</strong>, making it a more skill-based option,
						as it removes the ability to manually guard, offering stronger
						charges and a more dynamic guarding method instead.
					</p>
					<p class="spaced-paragraph">
						The charge levels in <strong>Storm Style</strong> are as follows:
					</p>
					<UnorderedList>
						<ListItem>
							<p>Lv1: 92</p>
						</ListItem>
						<ListItem>
							<p>Lv2: 112 x1.1</p>
						</ListItem>
						<ListItem>
							<p>Lv3: 157 x1.2</p>
						</ListItem>
						<ListItem>
							<p>
								Lv4: 200 x1.3 (downgrades to Lv2: 112 x1.1 if mistimed). <strong
									>Proper timing for the Level 4 charge is crucial, as missing
									it can waste up to 136 motion value.</strong
								>
							</p>
						</ListItem>
					</UnorderedList>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Extreme Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Extreme Style</strong> combines elements of Storm and Earth
						Styles, replacing the <strong>Counter Slash</strong> with a
						<strong>Parry</strong> mechanic. This allows you to chain into
						powerful downslashes or faster but weaker horizontal slashes.
						Additionally, you can build up an invisible meter to unleash a
						<strong>Shining Sword</strong> attack, a 15-hit combo dealing around
						455-467 total motion.
					</p>
					<p class="spaced-paragraph">
						As with the other Extreme Styles, you can run with your <InlineTooltip
							text="Great Sword"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Great Sword')}
						/>
						unsheathed, which is a significant upgrade since the weapon was previously
						limited by its slow movement and reliance on rolls for closing distance.
						You can perform a horizontal slash with iframes or a charged upswing
						from a dash, providing versatility in combat.
					</p>
					<p class="spaced-paragraph">
						This style allows you to use charges from both Earth and Storm
						Styles interchangeably and even combo them, making it particularly
						<strong>effective for hitting tails</strong>.
					</p>
					<p class="spaced-paragraph">
						The <strong>Parry</strong> mechanic absorbs any guardable attack
						without consuming stamina or causing knockback. Some attacks may
						still deal chip damage. From a parry, you can evade, perform a
						downslash (200 motion), or execute a horizontal slash (125 motion),
						all of which deliver high damage with ease. After successfully
						<strong>parrying three times</strong>, you can unleash the
						<strong>Shining Sword</strong>
						attack, which has a motion value of around 456 and hits 15 times, making
						it one of the few instances where the <InlineTooltip
							text="Great Sword"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Great Sword')}
						/> excels in elemental and status output.
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
					<p>
						+100% Affinity for unsheathe attacks, stacking with any existing
						affinity. Pairs well with <InlineTooltip
							text="Critical Conversion"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/>. This bonus also applies to attacks from <strong>Parries</strong>
						and grants the raw damage increase from <InlineTooltip
							text="Critical Conversion"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/> (excluding the +30%) during these actions.
						<strong>It does not activate with Shining Sword.</strong>
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
								You can be a liability when it comes to friendly fire. The item <InlineTooltip
									tooltip="Item"
									text="Elixir of Peace"
									iconType="component"
									icon={getItemIcon('Sac')}
								/> can prevent this.
							</p></ListItem
						>
						<ListItem
							><p>
								Hold R1 before unsheathing to perform a regular overhead attack;
								otherwise, you’ll execute a special wide slash (which can still
								combo into any charged slash). You can also perform upswing
								charges and parries (Storm, Extreme) from a sheathed state.
							</p></ListItem
						>
						<ListItem
							><p>
								Very Long length is the most popular choice due to its vertical
								slices and the added flexibility in maintaining distance. Long
								length is still quite usable.
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Armor Skill"
									text="Combat Supremacy"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> is the Frontier equivalent of Critical Draw for <InlineTooltip
									tooltip="Weapon"
									text="Great Sword"
									iconType="component"
									icon={getWeaponIcon('Great Sword')}
								/>, making it ideal for hit-and-run strategies with its stamina
								drain and 1.20x raw damage increase. <InlineTooltip
									tooltip="Armor Skill"
									text="Starving Wolf+2"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> with <InlineTooltip
									tooltip="Armor Skill"
									text="Rush"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>
								is a good alternative for continuous unsheathed play.
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Weapon"
									text="Great Sword"
									iconType="component"
									icon={getWeaponIcon('Great Sword')}
								/> benefits the most from <InlineTooltip
									tooltip="Item"
									text="Power Crystal"
									iconType="component"
									iconColor={getItemColor('Red')}
									icon={getItemIcon('Sword Crystal')}
								/> (from <InlineTooltip
									tooltip="Monster"
									text="Raviente"
									iconType="file"
									icon={getMonsterIcon('Raviente')}
								/>), although they don’t work on the shining attack.
								Fortunately, they aren’t consumed in the process.
							</p></ListItem
						>
						<ListItem
							><p>
								The unsheathed running hop attack has a few invincibility frames
								at the start, but it’s rarely used.
							</p></ListItem
						>
						<ListItem
							><p>
								Well-timed parries with <InlineTooltip
									tooltip="Item"
									text="Great Sword Hiden"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> and <InlineTooltip
									tooltip="Zenith Skill"
									text="Obscurity Up"
									iconType="component"
									icon={getItemIcon('Jewel')}
									iconColor={getItemColor('Red')}
								/> effectively manage sharpness when paired with <InlineTooltip
									tooltip="Item"
									text="Lavish Attack"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								Utilizing large amounts of hitstop can be a valid strategy for
								avoiding certain attacks.
							</p></ListItem
						>
						<ListItem
							><p>
								If you have 30 <InlineTooltip
									tooltip="Item"
									text="Power Crystals"
									iconType="component"
									icon={getItemIcon('Sword Crystal')}
									iconColor={getItemColor('Red')}
								/> with a <InlineTooltip
									tooltip="Weapon"
									text="Raviente Great Sword"
									iconType="component"
									icon={getWeaponIcon('Great Sword')}
								/> and the hunt isn’t over by the time they’re all used up, something
								is wrong.
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
