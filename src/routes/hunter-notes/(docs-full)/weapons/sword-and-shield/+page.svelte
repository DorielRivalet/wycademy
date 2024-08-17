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
	import { getLocationIcon } from '$lib/client/modules/frontier/locations';
	import CaravanGem from '$lib/client/components/frontier/icon/CaravanGem.svelte';
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
			skill: 'SnS Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description: 'Sharpness level +1 is added to SnS Tech 【Sword Saint】.',
		},
		{
			id: '3',
			skill: 'SnS Tech 【Sword Saint】',
			points: '30',
			description: `Gives Super High-Grade Earplugs, Attack x1.3 when wielding a One-handed Sword, All Elemental Sword Stone Skills +3, All Status Sword Stone Skills +2, Bomb Sword +2, Faster movement with SnS unsheathed, and Fencing+1. +3 versions of Crystal skills will overwrite the +2 versions included in this skill if active.`,
		},
		{
			id: '2',
			skill: 'SnS Tech Kaiden',
			points: '20',
			description:
				'Increases attack by 1.1 and grants Fencing+1 when wielding Sword and Shield.',
		},
		{
			id: '1',
			skill: 'SnS Tech Expert',
			points: '10',
			description: 'Fencing+1 when wielding Sword and Shield.',
		},
		{
			id: '0',
			skill: 'SnS Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding Sword and Shield.',
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
				'+4 True Raw per hit. Up to 80 True Raw can be gained through leeching.',
		},
		{
			id: 2,
			skill: 'Stylish Assault',
			description:
				'15 seconds uptime. The duration can be refreshed by successfully using i-frames again.',
		},
		{
			id: 3,
			skill: 'Stylish',
			description:
				'+8 sharpness recovery. When using Stylish Up, get 4 free hits before sharpness is reduced.',
		},
		{
			id: 4,
			skill: 'Lavish Attack',
			description:
				'-2 sharpness per hit. Lavish Attack reduces the free hits granted by Stylish Up to 2.',
		},
		{
			id: 5,
			skill: 'Obscurity',
			description:
				'Max stack of 300 True Raw. Obscurity Up maxes out after two perfect guards, allowing subsequent guards to restore 4 or 12 sharpness depending on timing.',
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
				'16/800/? total Motion Value to reach stage 1/2/3 respectively. The third stage, exclusive to Rush Up, has a limited duration.',
		},
		{
			id: 8,
			skill: 'Ceaseless',
			description:
				'10 seconds decay window. 20/46/54 hits required to reach stage 1/2/3 respectively (15/35/54 with Ceaseless Up). The third stage is also exclusive to Ceaseless Up, which decays by stages rather than all at once.',
		},
		{
			id: 9,
			skill: 'Point Breakthrough',
			description:
				'30 seconds duration. 15/9 hits to reach stages 1/2 respectively (12/8 with Fencing+2). The previously hit hitzone is more vulnerable at Stage 2, and Fencing +2 slightly eases activation.',
		},
		{
			id: 10,
			skill: 'Furious',
			description:
				'2/3/7 evasions or 1/2/5 perfect guards to reach stage 1/2/3 respectively. These effects apply to both successful evasions and perfect guards (where applicable), but attacking is necessary to advance stages.',
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
			sigil: 'Slide Attack',
			rating: 1,
			description: 'Boosts the Motion Value of the Sliding Attack (21 > 31).',
			type: 'Tech Boost',
		},
		{
			id: 1,
			sigil: 'Shield Attack',
			rating: 3,
			description:
				"Boosts the Motion Value of the Shield Attack (13 > 19) and Shield Bash (18 > 27). Does not affect Extreme Style's Continuous Bashing Combo.",
			type: 'Tech Boost',
		},
		{
			id: 2,
			sigil: 'Infinite Slash',
			rating: 1,
			description:
				'Boosts the Motion Value of all three motions of the Infinite Slash (25 > 28).',
			type: 'Tech Boost',
		},
		{
			id: 3,
			sigil: 'Vacuum/Beam Slash',
			rating: 3,
			description:
				'Changes the property of the Horizontal Slash, adding a ranged Red Shockwave. Motion value is 31･16 with the second portion unaffected by Fencing+2. Only for Earth and Extreme Styles.',
			type: 'Tech Change',
		},
		{
			id: 4,
			sigil: 'SnS Length Up',
			rating: 2,
			description:
				'Increases the length of your weapon and decreases your True Raw by 25. Does not affect the True Raw decrease if multiple of this sigil are used.',
			type: 'Other',
		},
		{
			id: 5,
			sigil: 'Strengthen SnS Raw',
			rating: 1,
			description:
				'Adds additional raw damage based on attack strength. Formula: Attack x 0.025 x Sharp Multiplier x Hitzone. Blue: 1.0625x. White: 1.125x. Purple: 1.15x. Cyan: 1.20x. Ignores motion values, Additional 0.2x the extra damage is added by Fencing+2. Does not stack and does not work with SnS with Elemental or Status.',
			type: 'Other',
		},
	];
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Sword and Shield'} />
		<div>
			<p class="spaced-paragraph">
				The Sword and Shield is a versatile weapon known for its quick strikes,
				the ability to block, use items with the weapon unsheathed, and overall
				high mobility.
			</p>

			<p class="spaced-paragraph">
				While its raw damage output is lower due to modest motion values, the
				rapid attack speed makes it highly effective when paired with elemental
				or status-based weapons. To use the Sword and Shield effectively, a
				solid understanding of hitzones is essential, as precision is key to
				maximizing its potential.
			</p>

			<p class="spaced-paragraph">
				Several attacks with the Sword and Shield deal both Stun and Impact
				damage, allowing you to break parts that require impact damage. However,
				this is often impractical in most situations.
			</p>

			<!-- <CenteredFigure
				figcaption="Triggering Elemental Release."
				alt="Triggering Elemental Release"
				type="file"
				width="100%"
				src={SwaxeExplosion}
			/> -->

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
					<p>
						Earth Style is the core style for Sword and Shield users, featuring
						a powerful horizontal slash. At G Rank, this slash can be enhanced
						with a weapon sigil (boosting from 31 to 31･16), causing the slash
						to emit a beam that strikes twice, effectively doubling the
						elemental damage.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Heaven Style" />
				<div>
					<p>
						Heaven Style swaps the horizontal slash for a Jump Slash with a
						motion value of 23･20. This move is especially effective for hitting
						tails, particularly with longer Sword and Shield weapons.
						Additionally, Heaven Style allows you to perform quick side hops
						after attacks instead of rolls, letting you swiftly continue combos
						while evading.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Storm Style" />
				<div>
					<p>
						Storm Style retains the quick side hops and Jump Slash from Heaven
						Style but replaces the standard combo with a series of Thrust
						Attacks. These thrusts are unique in that they carry a 140%
						elemental modifier, enabling significant elemental damage. You can
						cancel out of the thrusts with a hop, resetting back to the first
						thrust and allowing for rapid elemental damage output.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Extreme Style" />
				<div>
					<p>
						Extreme Style builds on the Heaven Style foundation, keeping the
						side hops and Jump Slash while adding the Earth Style horizontal
						attack and introducing new moves that offer greater flexibility in
						combos and evasion. Like all Extreme styles, Sword and Shield users
						can run with the weapon unsheathed in this style.
					</p>
					<p>
						In Extreme Style, Sword and Shield gains two new aerial attacks that
						can be initiated from various actions, including running. The first
						is a frontflip attack that hits twice with a motion value of 18･34
						and is high enough to easily strike tails. The second is a leap into
						a shield bash with a motion value of 34, dealing Impact and KO
						damage. Additionally, there's a new Shield Bash attack that can be
						chained up to three times, each hit having a motion value of 20 and
						dealing both Impact and KO damage.
					</p>
					<p>
						Finally, Extreme Style introduces an Evade Slash, allowing you to
						evade while attacking. This can be integrated into combo strings or
						followed by a hop to continue evading. The Evade Slash has a motion
						value of 17, which is lower than most attacks but still provides a
						safe and efficient way to deal damage.
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
					<p>x1.2 Status and Element (internal).</p>
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
								The slide attack offers a few invincibility frames (~9 with
								<InlineTooltip
									tooltip="Armor Skill"
									text="Evasion+2"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>) and can end with a 180° turning slash.
							</p></ListItem
						>
						<ListItem
							><p>
								Long length is generally a straightforward upgrade due to its
								increased reach. Very Long is viable if you're focusing on
								Roundslash spam but may require some spacing management.
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Weapon"
									text="Sword and Shield"
									iconType="component"
									icon={getWeaponIcon('Sword and Shield')}
								/> has a very forgiving hit requirement to prepare the <InlineTooltip
									tooltip="Buff"
									text="Transcend"
									iconType="file"
									icon={getLocationIcon('Transcend')}
								/>
								burst attack.
							</p></ListItem
						>
						<ListItem
							><p>
								You can technically customize a <InlineTooltip
									tooltip="Buff"
									text="Transcend"
									iconType="file"
									icon={getLocationIcon('Transcend')}
								/> burst to any element by utilizing the <InlineTooltip
									tooltip="Item"
									text="sword crystal"
									iconType="component"
									icon={getItemIcon('Sword Crystal')}
								/> compatibility from the Hiden skill.
							</p></ListItem
						>
						<ListItem
							><p>
								Shield attacks deal impact damage and can stun, but they use
								white sharpness at best.
							</p></ListItem
						>
						<ListItem
							><p>
								The vacuum slash adds an extra hit to the roundslash without
								hitlag or sharpness cost. It's not as significant today, but
								still useful.
							</p></ListItem
						>
						<ListItem
							><p>
								Using items while unsheathed resets <InlineTooltip
									tooltip="Armor Skill"
									text="Rush"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> mode.
							</p></ListItem
						>
						<ListItem
							><p>
								Notably, some speedrunners have found success by dropping
								<InlineTooltip
									tooltip="Armor Skill"
									text="Fencing+2"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> to reduce hitlag.
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Weapon"
									text="Sword and Shield’s"
									iconType="component"
									icon={getWeaponIcon('Sword and Shield')}
								/> blocking isn’t great, but with the <InlineTooltip
									tooltip="Caravan Skill"
									text="Perfect Defense"
									iconType="component"
									icon={CaravanGem}
								/> caravan skill and good timing, you can technically build up 300
								raw attack in two blocks when combined with <InlineTooltip
									tooltip="Armor Skill"
									text="Obscurity Up"
									iconType="component"
									iconColor={getItemColor('Red')}
									icon={getItemIcon('Jewel')}
								/>, maintaining it until you get knocked back.
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
