<script lang="ts">
	import { page } from '$app/stores';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import { gameInfo } from '$lib/client/modules/frontier/objects';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import Youtube from 'svelte-youtube-embed';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import type { FrontierArmorSkillName, FrontierArmorSkillTree } from 'ezlion';
	import { getItemIcon } from '$lib/client/modules/frontier/items';
	import StarRating from '$lib/client/components/StarRating.svelte';
	import { getMonsterIcon } from '$lib/client/modules/frontier/monsters';
	import Information from 'carbon-icons-svelte/lib/Information.svelte';
	import ToolKit from 'carbon-icons-svelte/lib/ToolKit.svelte';
	import {
		activeFeatures,
		getActiveFeature,
	} from '$lib/client/modules/frontier/active-feature';

	const hidenSkills: {
		id: string;
		skill: FrontierArmorSkillName;
		points: string;
		description: string;
	}[] = [
		{
			id: '4',
			skill: 'Swaxe Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description:
				'Sharpness level +1 is added to Swaxe Tech 【Edge Marshal】.',
		},
		{
			id: '3',
			skill: 'Swaxe Tech 【Edge Marshal】',
			points: '30',
			description: `Gives Super High-Grade Earplugs,
Attack x1.2 when wielding a Switch Axe and
Fencing+1.
Successfully using certain actions increases attack by 1.05x for a short time (Morphing in Earth Style, Sword Attacks in Heaven Style, and Guarding in Storm Style).
Stamina consumption for infinite swing combo is halved.
Attacking in axe mode increases phial gauge by x1.2 (from 6 units to 7 units of energy regained).
Attacks utilizing the phial consume less meter (around 20% less).`,
		},
		{
			id: '2',
			skill: 'Swaxe Tech Kaiden',
			points: '20',
			description:
				'Increases attack by 1.1 and grants Fencing+1 when wielding Switch Axe F.',
		},
		{
			id: '1',
			skill: 'Swaxe Tech Expert',
			points: '10',
			description: 'Fencing+1 when wielding Switch Axe F.',
		},
		{
			id: '0',
			skill: 'Swaxe Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding Switch Axe F.',
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
				'Max stack of 225 True Raw. Obscurity Up maxes out after two perfect guards, allowing subsequent guards to restore 4 or 10 sharpness depending on timing.',
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
				'40 seconds duration. 8/5 hits to reach stages 1/2 respectively (7/4 with Fencing+2). The previously hit hitzone is more vulnerable at Stage 2, and Fencing +2 slightly eases activation.',
		},
		{
			id: 10,
			skill: 'Furious',
			description:
				'1/3/6 evasions or perfects guards to reach stage 1/2/3 respectively. These effects apply to both successful evasions and perfect guards (where applicable), but attacking is necessary to advance stages.',
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
			sigil: 'Stunning Blast',
			rating: 1,
			description:
				'Boosts the stun values on the Elemental Discharge and Absorption Release: Early Ele. Discharge 20 > 40, Ele. Discharge 50 > 80, Early Abs. Release 40 > 50, Abs. Release 150 > 220.',
			type: 'Tech Boost',
		},
		{
			id: 1,
			sigil: 'Guard',
			rating: 3,
			description:
				"Widens the guarding window by a few degrees and causes you to regain 15 health while guarding. Doesn't stack and doesn't increase guarding frames.",
			type: 'Tech Boost',
		},
		{
			id: 2,
			sigil: 'Charge Movement Speed',
			rating: 1,
			description: 'Increases movement speed while charging.',
			type: 'Tech Boost',
		},
	];
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Switch Axe F'} />
		<div>
			<div class="video">
				<Youtube id="rXTdfrs9QjQ" />
			</div>
			<p class="spaced-paragraph">
				The <InlineTooltip
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
				/>. It is unlocked by reaching G Rank.
			</p>

			<div>
				{#await import('$lib/player/Player.svelte') then { default: Player }}
					<svelte:component
						this={Player}
						{...{
							title: 'Switch',
							src: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/saf-switch.webm',
						}}
					/>
				{/await}
			</div>

			<div>
				{#await import('$lib/player/Player.svelte') then { default: Player }}
					<svelte:component
						this={Player}
						{...{
							title: 'Run',
							src: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/saf-run.webm',
						}}
					/>
				{/await}
			</div>

			<div>
				{#await import('$lib/player/Player.svelte') then { default: Player }}
					<svelte:component
						this={Player}
						{...{
							title: 'Lightsword Mode',
							src: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/saf-lightsword.webm',
						}}
					/>
				{/await}
			</div>

			<div>
				{#await import('$lib/player/Player.svelte') then { default: Player }}
					<svelte:component
						this={Player}
						{...{
							title: 'Elemental Release',
							src: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/saf-explosion.webm',
						}}
					/>
				{/await}
			</div>

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
				<div></div>
			</section>

			<section>
				<SectionHeading level={2} title="Heaven Style" />
				<div></div>
			</section>

			<section>
				<SectionHeading level={2} title="Storm Style" />
				<div></div>
			</section>

			<section>
				<SectionHeading level={2} title="Extreme Style" />
				<div></div>
			</section>

			<section>
				<SectionHeading level={2} title="Example Gear with Runs" />
				<div></div>
			</section>

			<section>
				<SectionHeading level={2} title="Active Feature" />
				<div>
					<p>
						{getActiveFeature('Switch Axe F')}
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
									on:click={() => downloadDomAsPng('hiden-dom', 'saf-hiden')}
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
								If you don't have <InlineTooltip
									tooltip="Armor Skill"
									text="Switch Axe Hiden"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>, consider using <InlineTooltip
									tooltip="Armor Skill"
									text="Focus+2"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								A power phial doesn't directly increase raw damage; instead, it
								enhances the motion values of phial attacks by approximately
								10%. It's still regarded as the best type, though it's less
								common among <InlineTooltip
									tooltip="Weapon Type"
									text="Switch Axe F"
									iconType="component"
									icon={getWeaponIcon('Switch Axe F')}
								/> weapons.
							</p></ListItem
						>
						<ListItem
							><p>
								Elemental phials are the most prevalent on Zenith weapons and
								can still provide a significant boost in certain cases.
							</p></ListItem
						>
						<ListItem
							><p>
								Having <InlineTooltip
									tooltip="Armor Skill"
									text="Guard+2"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> is more critical for <InlineTooltip
									tooltip="Weapon Type"
									text="Switch Axe F"
									iconType="component"
									icon={getWeaponIcon('Switch Axe F')}
								/> compared to its counterparts, <InlineTooltip
									tooltip="Weapon Type"
									text="Long Sword"
									iconType="component"
									icon={getWeaponIcon('Long Sword')}
								/> and <InlineTooltip
									tooltip="Weapon Type"
									text="Magnet Spike"
									iconType="component"
									icon={getWeaponIcon('Magnet Spike')}
								/>, because <InlineTooltip
									tooltip="Weapon Type"
									text="Switch Axe F"
									iconType="component"
									icon={getWeaponIcon('Switch Axe F')}
								/> relies on parries to maintain its meter, not just <InlineTooltip
									tooltip="Armor Skill"
									text="Obscurity"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> stacks.
							</p></ListItem
						>
						<ListItem
							><p>
								With <InlineTooltip
									tooltip="Armor Skill"
									text="Hiden"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>, two parries are required to fill the meter and activate
								Light Sword mode, but if the <InlineTooltip
									tooltip="Weapon Type"
									text="Switch Axe F"
									iconType="component"
									icon={getWeaponIcon('Switch Axe F')}
								/> Active Feature is enabled, only one parry is needed.
							</p></ListItem
						>
						<ListItem
							><p>
								The elemental discharge from Earth Style can still be executed
								in Extreme Style; just tap the other button after the initial
								thrust.
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Weapon Type"
									text="Switch Axe F's"
									iconType="component"
									icon={getWeaponIcon('Switch Axe F')}
								/> healing from the guard sigil is beneficial for mitigating chip
								damage from parrying, especially when at low HP levels due to <InlineTooltip
									tooltip="Armor Skill"
									text="Adrenaline"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								Using the finisher move without having inflicted any Dragon
								Spirit will result in minimal damage and leave the hunter
								vulnerable. This move also consumes a significant amount of
								sharpness, regardless of whether it hits anything.
							</p></ListItem
						>
						<ListItem
							><p>
								Since <InlineTooltip
									tooltip="Weapon Type"
									text="Switch Axe F's"
									iconType="component"
									icon={getWeaponIcon('Switch Axe F')}
								/> unsheathed running and other various actions uses the phial instead
								of stamina, skills like
								<InlineTooltip
									tooltip="Armor Skill"
									text="Starving Wolf"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> or <InlineTooltip
									tooltip="Armor Skill"
									text="Combat Supremacy"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> can be easier to use.
							</p></ListItem
						>
						<ListItem
							><p>
								Earth, Heaven and Extreme Style gauges have 100 units of energy
								maximum. Storm and Extreme Style Light Sword gauges have 300
								units of energy maximum.
							</p></ListItem
						>
						<ListItem
							><p>
								The recovery rate of the gauge is 5 units of energy every 5
								seconds. Extreme Style Light Sword gauge does not have natural
								recovery of energy.
							</p></ListItem
						>
						<ListItem
							><p>
								The <InlineTooltip
									tooltip="Armor Skill"
									text="Focus"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> skill provides the following benefits: Increased natural recovery
								of gauges, increase in gauge recovery from axe attacks and parries,
								and x1.1 fill rate for gauges (x1.2 with Focus+2).
							</p></ListItem
						>
						<ListItem
							><p>
								Successful parries with Light Sword gives 50 units of energy
								with Storm Style and 75 with Extreme Style, doubled on Active
								Feature.
							</p></ListItem
						>
						<ListItem
							><p>
								Attacking during Axe Mode recovers 6 units of energy.
							</p></ListItem
						>
						<ListItem><p>Switch Axe running consumes phial energy.</p></ListItem
						>
						<ListItem
							><p>
								The second stage of <InlineTooltip
									tooltip="Armor Skill"
									text="Rush"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> eliminates all meter drain while running.
							</p></ListItem
						><ListItem
							><p>
								Some monsters, like <InlineTooltip
									tooltip="Monster"
									text="Zenith Rukodiora"
									iconType="file"
									icon={getMonsterIcon('Zenith Rukodiora')}
								/>, may start fights with two consecutive hits that can both be
								parried, allowing you to enter Light Sword mode immediately. If
								you're using a Prayer <InlineTooltip
									tooltip="Weapon Type"
									text="Switch Axe F"
									iconType="component"
									icon={getWeaponIcon('Switch Axe F')}
								/> with the buff active, only one parry is necessary.
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
