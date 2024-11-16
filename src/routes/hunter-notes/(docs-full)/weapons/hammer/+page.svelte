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
	import { getAilmentIcon } from '$lib/client/modules/frontier/ailments';
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
			skill: 'Hammer Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description:
				'Sharpness level +1 is added to Hammer Tech 【Blunt Beast】.',
		},
		{
			id: '3',
			skill: 'Hammer Tech 【Blunt Beast】',
			points: '30',
			description: `Gives Super High-Grade Earplugs,
Attack x1.2 when wielding a Hammer,
Fencing+1 and
Attack x1.3 when releasing a perfectly timed charge attack for that entire combo (includes infinite).`,
		},
		{
			id: '2',
			skill: 'Hammer Tech Kaiden',
			points: '20',
			description:
				'Increases attack by 1.1 and grants Fencing+1 when wielding Hammer.',
		},
		{
			id: '1',
			skill: 'Hammer Tech Expert',
			points: '10',
			description: 'Fencing+1 when wielding Hammer.',
		},
		{
			id: '0',
			skill: 'Hammer Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding Hammer.',
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
				'+5 True Raw per hit. Up to 80 True Raw can be gained through leeching.',
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
				'+3 sharpness recovery. When using Stylish Up get 3 free hits before sharpness is reduced.',
		},
		{
			id: 4,
			skill: 'Lavish Attack',
			description:
				'-4 sharpness per hit. Lavish Attack reduces the free hits granted by Stylish Up to 1.',
		},
		// {
		// 	id: 5,
		// 	skill: 'Obscurity',
		// 	description:
		// 		'Max stack of 225 True Raw. Obscurity Up maxes out after two perfect guards, allowing subsequent guards to restore 4 or 10 sharpness depending on timing.',
		// },
		{
			id: 6,
			skill: 'Ice Age',
			description:
				'1/9/21 hits to reach stage 1/2/3 respectively. All weapons share the same stage decay timer; Ice Age Up only affects the third stage’s decay rate.',
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
				'15 seconds decay window. 8/28/36 hits required to reach stage 1/2/3 respectively (6/21/36 with Ceaseless Up). The third stage is also exclusive to Ceaseless Up, which decays by stages rather than all at once.',
		},
		{
			id: 9,
			skill: 'Point Breakthrough',
			description:
				'50 seconds duration. 6/4 hits to reach stages 1/2 respectively (5/3 with Fencing+2). The previously hit hitzone is more vulnerable at Stage 2, and Fencing +2 slightly eases activation.',
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
			sigil: 'Baseball Swing',
			rating: 1,
			description: 'Boosts the Motion Value of the Baseball Swing (100 > 130).',
			type: 'Tech Boost',
		},
		{
			id: 1,
			sigil: 'Charging Movement',
			rating: 2,
			description:
				'Boosts movement speed while holding a charge attack. Stacks for further increased speed, only affects non-running charges.',
			type: 'Tech Boost',
		},
		{
			id: 2,
			sigil: 'Unsheathe Upswing',
			rating: 1,
			description:
				'Boosts the Motion Value of the Unsheathe Upswing (32 > 48).',
			type: 'Tech Boost',
		},
		{
			id: 4,
			sigil: 'Hammer Length Up',
			rating: 1,
			description:
				'Increases the length of your weapon and decreases your True Raw by 25. Does not affect the True Raw decrease if multiple of this sigil are used.',
			type: 'Other',
		},
		{
			id: 5,
			sigil: 'Stun Value',
			rating: 3,
			description:
				'Increases KO damage by 1.1x. Only one sigil applies. Stacks with Caravan Skill (1.1x) and Active Feature (1.5x) for a maximum of 1.815x.',
			type: 'Other',
		},
	];
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Hammer'} />
		<div>
			<p class="spaced-paragraph">
				Frontier's <InlineTooltip
					text="Hammer"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Hammer')}
				/> remains true to its original design, with the addition of several new
				moves to enhance its flow and versatility. It continues to excel at delivering
				high <InlineTooltip
					text="Stun"
					tooltip="Ailment"
					iconType="component"
					icon={getAilmentIcon('Stun')}
				/> damage and KOing monsters, while also dealing substantial damage with
				its charged attacks.
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
						<strong>Earth Style</strong> is the traditional <InlineTooltip
							text="Hammer"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Hammer')}
						/> base. It allows for charges that lead into either a
						<strong>Super Pound</strong> or a <strong>Spin Attack</strong>,
						along with all the standard and new attacks introduced in Frontier.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Heaven Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Heaven Style</strong> is a more niche option, replacing the
						Level 3 moving charge (the spin) with an infinite swipe attack. This
						locks you in place, making it effective for targeting specific
						hitzones, but it is generally less useful unless you have an endgame
						Hiden setup for the <InlineTooltip
							text="Hammer"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Hammer')}
						/>.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Storm Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Storm Style</strong> introduces a Level 4 charge that
						functions similarly to a Shoryuken. This attack hits three times and
						delivers a total of 140 <InlineTooltip
							text="Stun"
							tooltip="Ailment"
							iconType="component"
							icon={getAilmentIcon('Stun')}
						/> damage in one instance (with the initial <InlineTooltip
							text="Stun"
							tooltip="Ailment"
							iconType="component"
							icon={getAilmentIcon('Stun')}
						/> resistance typically around 300+). However, if you mistime the Level
						4 charge, it will downgrade to a Level 2 charge.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Extreme Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Extreme Style</strong> builds on
						<strong>Storm Style</strong>
						by adding the ability to run with the <InlineTooltip
							text="Hammer"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Hammer')}
						/> unsheathed, new charge options, and the ability to charge while moving.
						While dash charging, you can only perform charges while moving, and stopping
						will cause you to lose your charge, meaning you cannot use a normal
						<strong>Super Pound.</strong>
					</p>
					<p class="spaced-paragraph">
						This style also adds a Level 5 charge, a front flip that deals
						60･45･145 or 250 motion value and at least 200 <InlineTooltip
							text="Stun"
							tooltip="Ailment"
							iconType="component"
							icon={getAilmentIcon('Stun')}
						/> damage, making it the highest damage and best <InlineTooltip
							text="Stun"
							tooltip="Ailment"
							iconType="component"
							icon={getAilmentIcon('Stun')}
						/> option available.
					</p>
					<p class="spaced-paragraph">
						Additionally, there is a new Swinging attack similar to the infinite
						swipes combo. This attack does not consume stamina and leads to an
						alternative Level 4 charge that deals variable damage based on the
						number of swings, with a maximum motion value of 230.
					</p>
					<p class="spaced-paragraph">
						Normal attacks are also enhanced, allowing you to continue a combo
						after the <strong>Baseball Swing</strong>, significantly increasing
						its utility compared to other styles.
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
						x1.5 <InlineTooltip
							text="Stun"
							tooltip="Ailment"
							iconType="component"
							icon={getAilmentIcon('Stun')}
						/> damage. Synergizes well with Sigil and Caravan Skills.
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
									on:click={() => downloadDomAsPng('hiden-dom', 'hammer-hiden')}
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
								Golf swing attacks are practically obsolete; it’s better to
								focus on charging your attacks. <InlineTooltip
									tooltip="Armor Skill"
									text="Focus+2"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> is highly recommended.
							</p></ListItem
						>
						<ListItem
							><p>
								Length preference for <InlineTooltip
									tooltip="Weapon"
									text="Hammer"
									iconType="component"
									icon={getWeaponIcon('Hammer')}
								/> is up to taste. Level 4-5 charge attacks are mostly vertical,
								so the shifted hitzone isn’t usually an issue and can reach specific
								hitzones on different monsters. However, the Level 3 infinite combo
								is less cumbersome with shorter lengths.
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Armor Skill"
									text="Three Worlds Protection"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> is highly effective for creating openings. Consider using Zenith
								cuffs for specific resistances depending on the hunt.
							</p></ListItem
						>
						<ListItem
							><p>
								Unlike in the mainline games, every source of additional stun/KO
								damage (like Caravan Skill + Stun Sigil) is recommended, as they
								stack and significantly contribute to <InlineTooltip
									tooltip="Ailment"
									text="Stun"
									iconType="component"
									icon={getAilmentIcon('Stun')}
								/> damage.
							</p></ListItem
						>
						<ListItem
							><p>
								Due to the increased raw damage from timed charges with <InlineTooltip
									tooltip="Armor Skill"
									text="Hiden"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>, you should aim for an overhead attack with the appropriate
								attack ceiling from My Missions.
							</p></ListItem
						>
						<ListItem
							><p>
								You can dodge some very low-profile attacks with the leap from
								the Level 5 charge.
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
