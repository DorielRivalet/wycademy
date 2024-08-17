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
	import HuntingHornNoteIcon from '$lib/client/components/frontier/icon/HuntingHornNoteIcon.svelte';

	const hidenSkills: {
		id: string;
		skill: FrontierArmorSkillName;
		points: string;
		description: string;
	}[] = [
		{
			id: '4',
			skill: 'HH Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description:
				'Sharpness level +1 is added to HH Tech 【Flamboyant Emperor】.',
		},
		{
			id: '3',
			skill: 'HH Tech 【Flamboyant Emperor】',
			points: '30',
			description: `Gives Super High-Grade Earplugs, Attack x1.2 when wielding a Hunting Horn and Fencing+1. Performance mode note color decision is made 34% faster.`,
		},
		{
			id: '2',
			skill: 'HH Tech Kaiden',
			points: '20',
			description:
				'Increases attack by 1.1 and grants Fencing+1 when wielding Hunting Horn.',
		},
		{
			id: '1',
			skill: 'HH Tech Expert',
			points: '10',
			description: 'Fencing+1 when wielding Hunting Horn.',
		},
		{
			id: '0',
			skill: 'HH Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding Hunting Horn.',
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
				'+5 sharpness recovery. When using Stylish Up get 2 free hits before sharpness is reduced.',
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
				'14 seconds decay window. 11/32/40 hits required to reach stage 1/2/3 respectively (8/24/40 with Ceaseless Up). The third stage is also exclusive to Ceaseless Up, which decays by stages rather than all at once.',
		},
		{
			id: 9,
			skill: 'Point Breakthrough',
			description:
				'40 seconds duration. 7/4 hits to reach stages 1/2 respectively (6/4 with Fencing+2). The previously hit hitzone is more vulnerable at Stage 2, and Fencing +2 slightly eases activation.',
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
			sigil: 'Beatdown',
			rating: 1,
			description: 'Boosts the Motion Value of the Jab Attack (16 > 27).',
			type: 'Tech Boost',
		},
		{
			id: 1,
			sigil: 'Musical Attacks',
			rating: 1,
			description:
				'Boosts the Motion Value of all attacks related to playing song notes: Start Playing (26 > 39), Note 1 (50 > 75), Note 2 (43 > 64), Note 3 (49 > 73), Stop Playing (31 > 46).',
			type: 'Tech Boost',
		},
		{
			id: 2,
			sigil: 'Note Change',
			rating: 2,
			description:
				'Allows you to modify the color of the selected note slot to match the sigil.',
			type: 'Tech Boost',
		},
		{
			id: 3,
			sigil: 'Stun Value',
			rating: 3,
			description:
				'Increases KO damage by 1.1x. Only one sigil applies. Stacks with Caravan Skill (1.1x) and Active Feature (1.5x) for a maximum of 1.815x.',
			type: 'Other',
		},
		{
			id: 4,
			sigil: 'Sonic Bomb Range',
			rating: 2,
			description: 'Increases the range of the sonic bomb effect.',
			type: 'Other',
		},
	];
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Hunting Horn'} />
		<div>
			<section>
				<SectionHeading level={2} title="Songs" />
				<div></div>
			</section>
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
					<p>x2 Song duration. Synergizes well with Flute Expert.</p>
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
								The <InlineTooltip
									tooltip="Weapon"
									text="Hunting Horn"
									iconType="component"
									icon={getWeaponIcon('Hunting Horn')}
								/> uses a modified version of recital mode from Monster Hunter 2.
								The main difference is that notes are retained until you perform
								an encore, play a debuff melody, or sheathe your weapon.
							</p></ListItem
						>
						<ListItem
							><p>
								Always equip <InlineTooltip
									tooltip="Armor Skill"
									text="Encourage+2"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> for <InlineTooltip
									tooltip="Armor Skill"
									text="Horn Maestro"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> and party-wide <InlineTooltip
									tooltip="Armor Skill"
									text="Evasion+2"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>. <InlineTooltip
									tooltip="Zenith Skill"
									text="Encourage Up"
									iconType="component"
									icon={getItemIcon('Jewel')}
									iconColor={getItemColor('Red')}
								/> provides party-wide stamina benefits if you have it.
							</p></ListItem
						>
						<ListItem
							><p>
								Every <InlineTooltip
									tooltip="Weapon"
									text="Hunting Horn"
									iconType="component"
									icon={getWeaponIcon('Hunting Horn')}
								/> in the game has Attack Up Large, thanks to Storm style's pink
								notes.
							</p></ListItem
						>
						<ListItem
							><p>
								Chaining attacks into recitals plays the notes faster than
								usual. If you start a melody with <InlineTooltip
									tooltip="Hunting Horn Note"
									text="Purple"
									iconType="component"
									icon={HuntingHornNoteIcon}
									iconColor="Purple"
								/>, Hilt Stab > Recital is the quickest way to begin your song.
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Weapon"
									text="Hunting Horn"
									iconType="component"
									icon={getWeaponIcon('Hunting Horn')}
								/> has the lowest hit requirement of all weapons to prepare a <InlineTooltip
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
								<InlineTooltip
									tooltip="Weapon"
									text="Hunting Horn"
									iconType="component"
									icon={getWeaponIcon('Hunting Horn')}
								/> is a valuable but challenging tool for learning how to fight <InlineTooltip
									tooltip="Monster"
									text="Raviente"
									iconType="file"
									icon={getMonsterIcon('Raviente')}
								/>
								as part of a combat team, especially regarding animation lock.
							</p></ListItem
						>
						<ListItem
							><p>
								If using <InlineTooltip
									tooltip="Hunting Horn Note"
									text="Cyan"
									iconType="component"
									icon={HuntingHornNoteIcon}
									iconColor="Cyan"
								/> + <InlineTooltip
									tooltip="Hunting Horn Note"
									text="Red"
									iconType="component"
									icon={HuntingHornNoteIcon}
									iconColor="Red"
								/> notes, avoid crossing streams from Attack Up Large to Defense
								Up Large without first encoring the former, especially if there are
								<InlineTooltip
									tooltip="Armor Skill"
									text="Adrenaline"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> users in your party. Otherwise, you risk playing a Health Increase
								melody, which will deactivate <InlineTooltip
									tooltip="Armor Skill"
									text="Adrenaline"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								Opting for a healing-focused playstyle with items isn't
								recommended, as you'll already be juggling buffs and damage on a
								relatively slow weapon. It’s not worth the effort.
							</p></ListItem
						>
						<ListItem
							><p>
								The sonic bomb and debuff song motions can reliably apply the
								effects of the <InlineTooltip
									tooltip="Armor Skill"
									text="Red Soul"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> and <InlineTooltip
									tooltip="Armor Skill"
									text="Blue Soul"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> skills to other hunters.
							</p></ListItem
						>
						<ListItem
							><p>
								The benefits of <InlineTooltip
									tooltip="Zenith Skill"
									text="Soul Up"
									iconType="component"
									icon={getItemIcon('Jewel')}
									iconColor={getItemColor('Red')}
								/> are reasonable, so it's common for <InlineTooltip
									tooltip="Weapon"
									text="Hunting Horn"
									iconType="component"
									icon={getWeaponIcon('Hunting Horn')}
								/>
								users to opt for both <InlineTooltip
									tooltip="Armor Skill"
									text="Red Soul"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> (via <InlineTooltip
									tooltip="Armor Skill"
									text="Blazing Majesty"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> and <InlineTooltip
									tooltip="Armor Skill"
									text="Blue Soul"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> for extra buffs.
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
