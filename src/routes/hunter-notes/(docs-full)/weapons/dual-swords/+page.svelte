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
	import { getLocationIcon } from '$lib/client/modules/frontier/locations';
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
			skill: 'DS Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description: 'Sharpness level +1 is added to DS Tech 【Dual Dragon】.',
		},
		{
			id: '3',
			skill: 'DS Tech 【Dual Dragon】',
			points: '30',
			description: `Gives Super High-Grade Earplugs, Attack x1.2 when wielding Dual Swords, Fencing+1 and Always recover 3 units of stamina per hit while attacking in either Demon Mode. Faster activation of Demon Modes.`,
		},
		{
			id: '2',
			skill: 'DS Tech Kaiden',
			points: '20',
			description:
				'Increases attack by 1.1 and grants Fencing+1 when wielding Dual Swords.',
		},
		{
			id: '1',
			skill: 'DS Tech Expert',
			points: '10',
			description: 'Fencing+1 when wielding Dual Swords.',
		},
		{
			id: '0',
			skill: 'DS Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding Dual Swords.',
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
				'Adjusts the element hitzones by +10. Determination applies the effects of Dissolver without the need for hitzone requirements, effectively forcing element damage or reducing/negating negative hitzones.',
		},
		{
			id: 1,
			skill: 'Vampirism',
			description:
				'+3 True Raw per hit. Up to 80 True Raw can be gained through leeching.',
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
				'+12 sharpness recovery. When using Stylish Up, get 5 free hits before sharpness is reduced.',
		},
		{
			id: 4,
			skill: 'Lavish Attack',
			description:
				'-2 sharpness per hit. Lavish Attack reduces the free hits granted by Stylish Up to 2.',
		},
		// {
		// 	id: 5,
		// 	skill: 'Obscurity',
		// 	description:
		// 		'Max stack of 300 True Raw. Obscurity Up maxes out after two perfect guards, allowing subsequent guards to restore 4 or 12 sharpness depending on timing.',
		// },
		{
			id: 6,
			skill: 'Ice Age',
			description:
				'1/32/75 hits to reach stage 1/2/3 respectively. All weapons share the same stage decay timer; Ice Age Up only affects the third stage’s decay rate.',
		},
		{
			id: 7,
			skill: 'Rush',
			description:
				'17/850/? total Motion Value to reach stage 1/2/3 respectively. The third stage, exclusive to Rush Up, has a limited duration.',
		},
		{
			id: 8,
			skill: 'Ceaseless',
			description:
				'11 seconds decay window. 16/38/45 hits required to reach stage 1/2/3 respectively (12/29/45 with Ceaseless Up). The third stage is also exclusive to Ceaseless Up, which decays by stages rather than all at once.',
		},
		{
			id: 9,
			skill: 'Point Breakthrough',
			description:
				'30 seconds duration. 20/12 hits to reach stages 1/2 respectively (17/10 with Fencing+2). The previously hit hitzone is more vulnerable at Stage 2, and Fencing +2 slightly eases activation.',
		},
		{
			id: 10,
			skill: 'Furious',
			description:
				'2/3/7 evasions to reach stage 1/2/3 respectively. These effects apply to both successful evasions and perfect guards (where applicable), but attacking is necessary to advance stages.',
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
			sigil: 'Frontflip Slash',
			rating: 1,
			description:
				'Boosts the Motion Value of the Frontflip Slash Attack (11･15 > 16･22). Storm Style Only.',
			type: 'Tech Boost',
		},
		{
			id: 1,
			sigil: 'Rush Slash',
			rating: 1,
			description:
				'Boosts the Motion Value of the Dash Attack (11･5 > 16･7 and 14･6 > 21･9 in Demon Mode). Earth and Heaven Style Only',
			type: 'Tech Boost',
		},
		{
			id: 2,
			sigil: 'Sharpening Technique',
			rating: 2,
			description:
				'Causes the first sharpen in a combo to count as two sharpens for multiplier building (Max 4 sharpens for a 1.20x attack multiplier).',
			type: 'Tech Boost',
		},
		{
			id: 4,
			sigil: 'DS Length Up',
			rating: 2,
			description:
				'Increases the length of your weapon and decreases your True Raw by 25. Does not affect the True Raw decrease if multiple of this sigil are used.',
			type: 'Other',
		},
	];
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Dual Swords'} />
		<div>
			<p class="spaced-paragraph">
				<InlineTooltip
					text="Dual Swords"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Dual Swords')}
				/> (DS) are high-speed weapons designed for relentless offense, trading the
				<InlineTooltip
					text="Sword and Shield’s"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Sword and Shield')}
				/> (SnS) ability to block and use items for some of the highest DPS in the
				game. While their motion values are relatively low, they excel when paired
				with appropriate elemental or status-inflicting weapons.
			</p>
			<p class="spaced-paragraph">
				<InlineTooltip
					text="Dual Swords"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Dual Swords')}
				/> offers multiple <strong>Demon Modes</strong>, with the optimal
				playstyle revolving around using <strong>True Demon Mode</strong>, which
				drains health but enhances attacks, combined with the sharpening buff
				detailed below.
			</p>

			<p class="spaced-paragraph">
				Pressing the Kick button while using <InlineTooltip
					text="Dual Swords"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Dual Swords')}
				/> allows you to quickly sharpen your weapon, granting a 5% attack boost.
				Each successive sharpen, up to four times, increases this bonus to a total
				of 20%. Mastering this mechanic is key to maximizing <InlineTooltip
					text="Dual Swords"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Dual Swords')}
				/> performance, as it requires constant use during combos and strategic evades.
			</p>
			<p class="spaced-paragraph">
				The sharpen buff expires as soon as a combo ends. However, as long as
				you keep attacking, evading, or sharpening, the combo continues,
				allowing you to maintain the 1.20x buff indefinitely without <InlineTooltip
					text="Combat Supremacy"
					tooltip="Armor Skill"
					iconType="component"
					icon={getItemIcon('Jewel')}
				/> active, provided you don’t make a mistake.
			</p>

			<section>
				<SectionHeading title="Demon Modes" level={2} />
				<div>
					<p class="spaced-paragraph">
						In Frontier, <InlineTooltip
							text="Dual Swords"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Dual Swords')}
						/> has two Demon Modes: <strong>Demon Mode</strong> and
						<strong>True Demon Mode</strong>. <strong>Demon Mode</strong>
						continuously drains Stamina, while <strong>True Demon Mode</strong>
						drains Health. Both modes significantly increase motion values, but
						<strong>True Demon Mode</strong> also introduces a fast evade that can
						be used to extend combos and maintain the sharpening buff.
					</p>
					<p class="spaced-paragraph">
						<strong>True Demon Mode</strong> won’t directly kill you; when your health
						reaches 1, it depletes any remaining Red Health and further boosts your
						attack power.
					</p>
					<p class="spaced-paragraph">
						In terms of performance, both modes increase motion values by
						approximately 1.25x, with <strong>True Demon Mode</strong> attacks
						being about 1.1x faster than those in Demon Mode. However,
						<strong>True Demon Mode</strong> also increases Red Health loss by about
						1.375x, making it a challenging but rewarding mode for skilled players.
					</p>
				</div>
			</section>

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
						<strong>Earth Style</strong> is the base style for <InlineTooltip
							text="Dual Swords"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Dual Swords')}
						/> and includes all the core features, including
						<strong>True Demon Mode</strong>. The main difference between this
						style and the Heaven and Storm Styles is the
						<strong>Demon Dance</strong> move, a long combo that locks you in place.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Heaven Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Heaven Style</strong> is similar to
						<strong>Earth Style</strong>
						but replaces <strong>Demon Dance</strong> with
						<strong>Flurry Swipes</strong>, a quick set of three pokes that can
						be followed by a <strong>Flurry Rotation</strong> for three
						additional hits. In
						<strong>True Demon Mode</strong>, these attacks have a total motion
						value of 144, slightly higher than <strong>Demon Dance</strong> in
						physical damage but with two fewer elemental hits. Both the
						<strong>Demon Dance</strong> and Flurry combos deal only 70% elemental
						damage.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Storm Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Storm Style</strong> is nearly identical to
						<strong>Heaven Style</strong>, with the main difference being the
						replacement of the Rush Slash (unsheath action) with a forward flip.
						This move is useful for hitting tails but can be tricky to execute.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Extreme Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Extreme Style</strong> builds on
						<strong>Heaven Style</strong>, introducing new moves and the
						powerful <strong>Extreme Demon Mode</strong>.
					</p>
					<p class="spaced-paragraph">
						This style allows you to run with your <InlineTooltip
							text="Dual Swords"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Dual Swords')}
						/> unsheathed and adds the <strong>Sky Slash</strong>, an acrobatic
						combo that hits five times for a total motion value of 30, ending
						with a two-hit finisher dealing 20 motion each.
					</p>
					<p class="spaced-paragraph">
						<strong>Extreme Demon Mode</strong> is an enhanced version of
						<strong>True Demon Mode</strong>. It consumes Green Health first,
						followed by Red Health, and shares the same increased attack speed
						and motion values. However, it introduces a new evade that deals 32
						motion across two hits when evading forward or backward, and four
						hits when evading left or right, effectively doubling the elemental
						damage when moving sideways. Additionally,
						<strong>Extreme Demon Mode</strong> includes a unique
						<strong>Rising Slash</strong>, a more practical version of the
						forward flip found in <strong>Storm Style</strong>.
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
						Reduces the speed at which the HP bar decreases when in <strong
							>True Demon Mode</strong
						>. Stamina gauge depletion speed is reduced to x0.5 when in
						<strong>Demon Mode</strong>
						(equivalent to <InlineTooltip
							text="Marathon Runner"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/>). When <InlineTooltip
							text="Marathon Runner"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/> is activated, it is reduced to x0.33.
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
									on:click={() => downloadDomAsPng('hiden-dom', 'ds-hiden')}
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
								Like <InlineTooltip
									tooltip="Weapon"
									text="Sword and Shield"
									iconType="component"
									icon={getWeaponIcon('Sword and Shield')}
								/>, long length is generally an upgrade and is often found on
								modern weapons.
							</p></ListItem
						>
						<ListItem
							><p>
								There’s no reason to use any demonization mode other than
								Extreme Demon Mode nowadays. However, in this state, you cannot
								receive any healing except from <InlineTooltip
									tooltip="Armor Skill"
									text="Vampirism"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>. This means that <InlineTooltip
									tooltip="Weapon"
									text="Lance"
									iconType="component"
									icon={getWeaponIcon('Lance')}
								/> users cannot heal you either while its active.
							</p></ListItem
						>
						<ListItem
							><p>
								Each sharpen in a combo increases raw damage by 1.05x, stacking
								up to four times for a maximum of 1.20x. The attack evades in
								True/Extreme Demon modes maintain this combo state. The overlay
								has a counter for this.
							</p></ListItem
						>
						<ListItem
							><p>
								When demonized, healing is entirely blocked, with <InlineTooltip
									tooltip="Armor Skill"
									text="Vampirism"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>
								leeching being the only exception. This is especially noticeable
								on <InlineTooltip
									tooltip="Location"
									text="Hunter's Road"
									iconType="file"
									icon={getLocationIcon('Road')}
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
