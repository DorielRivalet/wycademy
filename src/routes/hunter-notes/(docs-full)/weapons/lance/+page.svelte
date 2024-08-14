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
				'Adjusts the element hitzones by +15. Determination applies the effects of Dissolver without the need for hitbox requirements, effectively forcing elemental damage or reducing/negating negative hitzones.',
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
				'35 seconds duration. 10/6 hits to reach stages 1/2 respectively (8/5 with Fencing+2). The previously hit hitbox is more vulnerable at Stage 2, and Fencing +2 slightly eases activation.',
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
					<p>
						Guard Skill goes up by 1 level. Grants Reflect+3. Does not work with
						Reflect Up nor Guard Up.
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
								Long length is the most common on Zenith Lances for good reason.
								Very Long may have its uses, but it can be unwieldy (and even
								ridiculous).
							</p></ListItem
						>
						<ListItem
							><p>
								Lance retains its cutting/impact hitzone adjustment modifier; if
								0.72x of the impact hitzone is superior to cutting, Lance uses
								the impact value as cutting damage. (Carapaceons are a good
								example of this.)
							</p></ListItem
						>
						<ListItem
							><p>
								With Lance Hiden, Guard/Fortification +2, and Guard Up, only a
								few attacks in the game cannot be blocked safely. This list
								mainly includes modern nukes, DOTs, Barioth's snowman effect,
								etc.
							</p></ListItem
						>
						<ListItem
							><p>
								Zenith-level hazards will always cause pushback unless you’re
								using heavy guard, guard advance, or running shield bash.
							</p></ListItem
						>
						<ListItem
							><p>
								The shield bash while running prevents any pushback from
								guarding and has innate Guard +2. The only equivalent from a
								neutral stance is Storm’s guard advance, which is much more
								rigid.
							</p></ListItem
						>
						<ListItem
							><p>
								The ranged guard works by blocking the hit yourself to protect
								other players.
							</p></ListItem
						>
						<ListItem
							><p>
								Backhop thrusts return to guarding faster, and you can perform
								them from a neutral stance.
							</p></ListItem
						>
						<ListItem
							><p>
								Actual time attack play mostly favors an evasive playstyle,
								although Perfect Guard reflects are used, and shield bashes
								still build Obscurity and shield phial charges.
							</p></ListItem
						>
						<ListItem
							><p>
								Guard lancing can be a useful way to learn parrying with other
								weapons.
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
