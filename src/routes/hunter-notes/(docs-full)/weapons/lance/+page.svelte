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
	import { getAilmentIcon } from '$lib/client/modules/frontier/ailments';
	import CaravanGem from '$lib/client/components/frontier/icon/CaravanGem.svelte';

	const hidenSkills: {
		id: string;
		skill: FrontierArmorSkillName;
		points: string;
		description: string;
	}[] = [
		{
			id: '4',
			skill: 'Lance Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description:
				'Sharpness level +1 is added to Lance Tech 【Heavenly Spear】.',
		},
		{
			id: '3',
			skill: 'Lance Tech 【Heavenly Spear】',
			points: '30',
			description: `Gives Super High-Grade Earplugs, Attack x1.2 when wielding a Lance and Fencing+1. No damage taken when successfully blocking attacks. Able to perform 4 hops instead of 3. Motion Value +10 for final (3rd or 4th) Normal, Diagonal, and Sky-Stabs.`,
		},
		{
			id: '2',
			skill: 'Lance Tech Kaiden',
			points: '20',
			description:
				'Increases attack by 1.1 and grants Fencing+1 when wielding Lance.',
		},
		{
			id: '1',
			skill: 'Lance Tech Expert',
			points: '10',
			description: 'Fencing+1 when wielding Lance.',
		},
		{
			id: '0',
			skill: 'Lance Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding Lance.',
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
				'Adjusts the element hitzones by +15. Determination applies the effects of Dissolver without the need for hitzone requirements, effectively forcing elemental damage or reducing/negating negative hitzones.',
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
			id: 3,
			skill: 'Stylish',
			description:
				'+5 sharpness recovery. When using Stylish Up get 3 free hits before sharpness is reduced.',
		},
		{
			id: 4,
			skill: 'Lavish Attack',
			description:
				'-3 sharpness per hit. Lavish Attack reduces the free hits granted by Stylish Up to 1.',
		},
		{
			id: 5,
			skill: 'Obscurity',
			description:
				'Max stack of 300 True Raw. Obscurity Up maxes out after two perfect guards, allowing subsequent guards to restore 2 or 10 sharpness depending on timing.',
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
				'27/1350/? total Motion Value to reach stage 1/2/3 respectively. The third stage, exclusive to Rush Up, has a limited duration.',
		},
		{
			id: 8,
			skill: 'Ceaseless',
			description:
				'12 seconds decay window. 13/36/44 hits required to reach stage 1/2/3 respectively (10/27/44 with Ceaseless Up). The third stage is also exclusive to Ceaseless Up, which decays by stages rather than all at once.',
		},
		{
			id: 9,
			skill: 'Point Breakthrough',
			description:
				'35 seconds duration. 10/6 hits to reach stages 1/2 respectively (8/5 with Fencing+2). The previously hit hitzone is more vulnerable at Stage 2, and Fencing +2 slightly eases activation.',
		},
		{
			id: 10,
			skill: 'Furious',
			description:
				'1/2/5 evasions or perfects guards to reach stage 1/2/3 respectively. These effects apply to both successful evasions and perfect guards (where applicable), but attacking is necessary to advance stages.',
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
			sigil: 'Shield Attack',
			rating: 1,
			description:
				'Boosts the Motion Value of the Shield Rush (3･25 > 4･37). Only for Storm and Extreme Styles.',
			type: 'Tech Boost',
		},
		{
			id: 2,
			sigil: 'Charge Finisher',
			rating: 1,
			description:
				'Boosts the Motion Value of the Charge Finisher Attack (50 > 75). Earth Style Only.',
			type: 'Tech Boost',
		},
		{
			id: 3,
			sigil: 'Drill Charge',
			rating: 1,
			description:
				'Changes the Charge into a Drill Charge attack (25 x Hits > (31･16) x Hits). Earth Style Only.',
			type: 'Tech Change',
		},
		{
			id: 4,
			sigil: 'Lance Length Up',
			rating: 2,
			description:
				'Increases the length of your weapon and decreases your True Raw by 25. Does not affect the True Raw decrease if multiple of this sigil are used.',
			type: 'Other',
		},
		{
			id: 5,
			sigil: 'Draw Strength',
			rating: 1,
			description:
				'Increases the motion value of all unsheathe attacks with a Lance by a 1.50x multiplier.',
			type: 'Other',
		},
	];
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Lance'} />
		<div>
			<p class="spaced-paragraph">
				The <InlineTooltip
					text="Lance"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Lance')}
				/> in Frontier is an enhanced version of the traditional <InlineTooltip
					text="Lance"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Lance')}
				/>, retaining its core forward and upward thrusts, with the final hit in
				a combo dealing extra damage. Frontier introduces new features, such as
				guarding a small area, performing a strong guard that grants <InlineTooltip
					text="Guard+2"
					tooltip="Armor Skill"
					iconType="component"
					icon={getItemIcon('Jewel')}
				/>, and the ability to move without altering the shield's guard angle.
				While counters are absent across all styles, skills like <InlineTooltip
					text="Reflect"
					tooltip="Armor Skill"
					iconType="component"
					icon={getItemIcon('Jewel')}
				/> can help fill that gap.
			</p>
			<p class="spaced-paragraph">
				<InlineTooltip
					text="Lances"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Lance')}
				/> in Frontier automatically adjust between <strong>Impact</strong> and
				<strong>Cutting</strong>
				hitzones to select the most effective damage type. This adjustment applies
				a 0.72x multiplier to the <strong>Impact</strong> damage before deciding
				which hitbox to use. For instance, if you have a 20 Cutting hitbox and a
				35 Impact hitbox, the lance would choose the Impact hitbox, as 0.72 x 35
				(which equals 25.2) is greater than 20, resulting in
				<strong>Impact</strong> damage being dealt instead of
				<strong>Cutting</strong>.
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
						<strong>Earth Style</strong> is the standard <InlineTooltip
							text="Lance"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Lance')}
						/> style, featuring the basic forward and upward thrusts along with all
						the new original motions introduced in Frontier.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Heaven Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Heaven Style</strong> replaces the
						<strong>Lance Charge</strong> with the <strong>Sky Stab</strong>,
						allowing you to combo all thrusts up to four times instead of three.
						<strong>Sky Stabs</strong> are vertical thrusts with a motion value of
						38 for the first three stabs and 43 for the last, making them as powerful
						as the final hit in a normal upthrust combo.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Storm Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Storm Style</strong> retains the changes from
						<strong>Heaven Style</strong>
						but replaces the guard poke with a shield charge. The shield charge uses
						Guard Point frames, meaning you take no damage during its blocking duration
						and gain the benefits of <InlineTooltip
							text="Guard+2"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/>. This move deals <strong>Impact</strong> damage and can inflict <InlineTooltip
							text="Stun"
							tooltip="Ailment"
							iconType="component"
							icon={getAilmentIcon('Stun')}
						/>, though it’s not particularly effective for that purpose. The
						shield charge can only be followed up with either evades or a
						<strong>Charge Thrust.</strong>
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Extreme Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Extreme Style</strong> is an upgraded version of
						<strong>Storm Style</strong>. It lacks the
						<strong>Lance Charge</strong> but retains all three basic thrust types.
					</p>
					<p class="spaced-paragraph">
						While running, the <InlineTooltip
							text="Lance"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Lance')}
						/> behaves like any other weapon. You can perform a dash guard with short
						guarding frames and no knockback, followed by either a normal thrust
						(50 motion) or a <strong>Jump Thrust</strong>, which covers more
						distance but also has a higher motion value of 50.
					</p>
					<p class="spaced-paragraph">
						In addition to running actions, <strong>Extreme Style</strong>
						introduces two significant new thrusts:
						<strong>Finishing Thrusts</strong> and
						<strong>Evasion Thrusts</strong>. The
						<strong>Finishing Thrust</strong> is a powerful attack with a motion
						value of 91 but doesn’t count as a regular thrust. The
						<strong>Evasion Thrust</strong>
						is similar to other weapons' offensive evades, dealing 30 motion while
						jumping backward with iframes. You can chain up to seven hits in a combo
						by performing a <strong>Dash Jump Thrust</strong>, followed by four
						<strong>Standard Thrusts</strong>, a
						<strong>Finishing Thrust</strong>, and an
						<strong>Evasion Thrust</strong>.
					</p>
					<p class="spaced-paragraph">
						<strong>Extreme Style</strong> also features a new
						<strong>Guard Gauge</strong> interface with three
						<strong>Shield Phials</strong>. These phials fill up as you guard,
						and using a special action consumes all filled phials at once. The
						first phial is White and provides the effect of <InlineTooltip
							text="Lifepowder"
							tooltip="Item"
							iconType="component"
							icon={getItemIcon('Sac')}
						/>, the second is Yellow and grants the effects of <InlineTooltip
							text="Mega Dash Juice"
							tooltip="Item"
							iconType="component"
							iconColor={getItemColor('Yellow')}
							icon={getItemIcon('Medicine')}
						/>, and the final phial is Red and boosts <strong>True Raw</strong>
						by +50. These effects apply to the entire party, so be cautious not to
						disrupt teammates who might be relying on
						<InlineTooltip
							text="Adrenaline"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/>.
					</p>

					<div>
						{#await import('$lib/player/Player.svelte') then { default: Player }}
							<svelte:component
								this={Player}
								{...{
									title: 'Lance Phials',
									src: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/lance-phials.webm',
								}}
							/>
						{/await}
					</div>

					<div>
						{#await import('$lib/player/Player.svelte') then { default: Player }}
							<svelte:component
								this={Player}
								{...{
									title: 'Area Guard',
									src: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/lance-area-guard.webm',
								}}
							/>
						{/await}
					</div>
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
						<InlineTooltip
							text="Guard"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/> skill goes up by 1 level. Grants <InlineTooltip
							text="Reflect+3"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/>. Does not work with <InlineTooltip
							text="Reflect Up"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
							iconColor={getItemColor('Red')}
						/> nor <InlineTooltip
							text="Guard Up"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
							iconColor={getItemColor('Red')}
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
								Long length is the most common on Zenith Lances, although Very
								Long length can be useful too.
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Weapon"
									text="Lance"
									iconType="component"
									icon={getWeaponIcon('Lance')}
								/> retains its cutting/impact hitzone adjustment modifier; if 0.72x
								of the impact hitzone is superior to cutting, <InlineTooltip
									tooltip="Weapon"
									text="Lance"
									iconType="component"
									icon={getWeaponIcon('Lance')}
								/> uses the impact value as <strong>Cutting</strong> damage. (Carapaceons
								are a good example of this.)
							</p></ListItem
						>
						<ListItem
							><p>
								With <InlineTooltip
									text="Lance Hiden"
									tooltip="Armor Skill"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>, <InlineTooltip
									text="Guard/Fortification+2"
									tooltip="Armor Skill"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>, and <InlineTooltip
									text="Guard Up"
									tooltip="Zenith Skill"
									iconType="component"
									iconColor={getItemColor('Red')}
									icon={getItemIcon('Jewel')}
								/>, only a few attacks in the game cannot be blocked safely.
								This list mainly includes modern nukes, DOTs, <InlineTooltip
									text="Barioth's"
									tooltip="Monster"
									iconType="file"
									icon={getMonsterIcon('Barioth')}
								/>
								<InlineTooltip
									text="Snowman effect"
									tooltip="Ailment"
									iconType="component"
									icon={getAilmentIcon('Snowman')}
								/>, etc.
							</p></ListItem
						>
						<ListItem
							><p>
								Zenith-level hazards will always cause pushback unless you’re
								using <strong>Heavy Guard</strong>,
								<strong>Guard Advance</strong>, or
								<strong>Running Shield Bash</strong>.
							</p></ListItem
						>
						<ListItem
							><p>
								The <strong>Shield Bash</strong> while running prevents any
								pushback from guarding and has innate <InlineTooltip
									text="Guard+2"
									tooltip="Armor Skill"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>. The only equivalent from a neutral stance is Storm’s
								<strong>Guard Advance</strong>, which is much more rigid.
							</p></ListItem
						>
						<ListItem
							><p>
								The <strong>Ranged Guard</strong> works by blocking the hit yourself
								to protect other players.
							</p></ListItem
						>
						<ListItem
							><p>
								Blocking <InlineTooltip
									text="Heavy Bowgun's"
									tooltip="Weapon"
									iconType="component"
									icon={getWeaponIcon('Heavy Bowgun')}
								/> <strong>Heat Beam</strong> can fill all of your phials almost
								instantly.
							</p></ListItem
						>
						<ListItem
							><p>
								In order to deal the most damage with <InlineTooltip
									text="Reflect"
									tooltip="Armor Skill"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>, try blocking monsters' laser attacks with <InlineTooltip
									text="Reflect Up"
									tooltip="Zenith Skill"
									iconColor={getItemColor('Red')}
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> and <InlineTooltip
									text="Perfect Defense"
									tooltip="Caravan Skill"
									iconType="component"
									icon={CaravanGem}
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								<strong>Backhop thrusts</strong> return to guarding faster, and you
								can perform them from a neutral stance.
							</p></ListItem
						>
						<ListItem
							><p>
								Guard lancing can be a useful way to learn parrying with other
								weapons.
							</p></ListItem
						>
						<ListItem
							><p>
								The stamina buff varies in duration depending on how much
								stamina you are using.
							</p></ListItem
						>
						<ListItem
							><p>
								With a <strong>Heavy Guard</strong>, <InlineTooltip
									text="Guard+2"
									tooltip="Armor Skill"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> and <InlineTooltip
									text="Guard Up"
									iconColor={getItemColor('Red')}
									tooltip="Zenith Skill"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> you can block many monsters' ultimate attacks, for example <InlineTooltip
									tooltip="Monster"
									text="Stygian Zinogre"
									iconType="file"
									icon={getMonsterIcon('Stygian Zinogre')}
								/>.
							</p></ListItem
						>
						<ListItem><p>The attack buff lasts 3 minutes.</p></ListItem>
						<ListItem
							><p>
								The area guard can block more attacks than guard shields
								available. It will continue blocking attacks, including after
								all guard shields are consumed and before the animation ends.
							</p></ListItem
						>

						<ListItem
							><p>
								The area guard is capable of blocking the needle from <InlineTooltip
									tooltip="Monster"
									text="Zenith Hyujikiki"
									iconType="file"
									icon={getMonsterIcon('Zenith Hyujikiki')}
								/> ultimate attack, <InlineTooltip
									tooltip="Monster"
									text="Conquest Fatalis"
									iconType="file"
									icon={getMonsterIcon('Conquest Fatalis')}
								/> nukes, etc.
							</p></ListItem
						>

						<ListItem
							><p>
								You cannot heal <InlineTooltip
									tooltip="Weapon"
									text="Dual Swords"
									iconType="component"
									icon={getWeaponIcon('Dual Swords')}
								/> users that are in <strong>Extreme Demon Mode</strong>, except
								in periods where they got hit and thus lost the mode.
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
