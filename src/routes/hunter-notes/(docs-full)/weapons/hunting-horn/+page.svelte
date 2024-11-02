<script lang="ts">
	import { page } from '$app/stores';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import {
		getWeaponIcon,
		huntingHornSongs,
		huntingHornWeaponNotesCombinations,
	} from '$lib/client/modules/frontier/weapons';
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
	import Information from 'carbon-icons-svelte/lib/Information.svelte';
	import ToolKit from 'carbon-icons-svelte/lib/ToolKit.svelte';
	import ColorfulButtonToggle from '$lib/client/components/ColorfulButtonToggle.svelte';
	import type { FrontierHuntingHornNote } from '$lib/client/modules/frontier/types';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import HuntingHornRainbowNoteIcon from '$lib/client/components/frontier/icon/HuntingHornRainbowNoteIcon.svelte';
	import SimonGame from '$lib/client/components/SimonGame.svelte';

	function handleToggle(index: number, enabled: boolean) {
		huntingHornSelectedNotes[index].enabled = enabled;
		huntingHornSelectedNotes = [...huntingHornSelectedNotes]; // Trigger reactivity
	}

	function getHuntingHornAvailableSongs(
		selectedNotes: {
			color: FrontierHuntingHornNote;
			enabled: boolean;
		}[],
		strategy: string,
	) {
		const enabledNotes = selectedNotes
			.filter((note) => note.enabled)
			.map((note) => note.color);

		return huntingHornSongs.filter((song) => {
			if (strategy === 'atLeastOne') {
				// Strategy 1: At least one selected note
				return song.notes.some((note) => enabledNotes.includes(note));
			} else {
				// Strategy 2: Only using selected notes
				return song.notes.every((note) => enabledNotes.includes(note));
			}
		});
	}

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

	const huntingHornValidNotesCombinations =
		huntingHornWeaponNotesCombinations.map((e, i) => {
			return {
				id: i,
				notes: `${e[0]} ${e[1]} ${e[2]}`,
			};
		});

	// Initial notes state
	let huntingHornSelectedNotes: {
		color: FrontierHuntingHornNote;
		enabled: boolean;
	}[] = [
		{ color: 'White', enabled: true },
		{ color: 'Blue', enabled: true },
		{ color: 'Cyan', enabled: true },
		{ color: 'Green', enabled: false },
		{ color: 'Red', enabled: false },
		{ color: 'Yellow', enabled: false },
		{ color: 'Purple', enabled: false },
		{ color: 'Pink', enabled: true },
	];

	let filteringStrategy: 'atLeastOne' | 'onlySelected' = 'onlySelected';

	/**For simon game start/restart*/
	let rainbowNoteState: boolean = false;
	/**Player notes*/
	let currentSequence: FrontierHuntingHornNote[] = [];
	/**Requires notes to advance, grows if succeded in each sequence required.*/
	let targetSequence: FrontierHuntingHornNote[] = [];
	/**For making the start button show*/
	let didReleaseAllNotes = false;
	/**Fpr making the start button show*/
	let didPressAllNotes = false;
	/**Game score*/
	let simonScore = 0;

	/**List of available notes to play*/
	let simonNotes: FrontierHuntingHornNote[] = [
		'White',
		'Blue',
		'Cyan',
		'Green',
		'Red',
		'Yellow',
		'Purple',
		'Pink',
	];

	function checkIfReleasedAllNotes(
		notes: {
			color: FrontierHuntingHornNote;
			enabled: boolean;
		}[],
	) {
		if (didReleaseAllNotes) return true;
		return notes.every((e) => e.enabled === false);
	}

	function checkIfPressedAllNotes(
		allNotesReleased: boolean,
		notes: {
			color: FrontierHuntingHornNote;
			enabled: boolean;
		}[],
	) {
		if (didPressAllNotes) return true;
		if (!allNotesReleased) return false;
		return notes.every((e) => e.enabled === true);
	}

	$: huntingHornAvailableSongs = getHuntingHornAvailableSongs(
		huntingHornSelectedNotes,
		filteringStrategy,
	);

	$: didReleaseAllNotes = checkIfReleasedAllNotes(huntingHornSelectedNotes);
	$: didPressAllNotes = checkIfPressedAllNotes(
		didReleaseAllNotes,
		huntingHornSelectedNotes,
	);
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Hunting Horn'} />
		<div>
			<p class="spaced-paragraph">
				Frontier's <InlineTooltip
					text="Hunting Horn"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Hunting Horn')}
				/> (HH) is based on the classic MHFU moveset. While it can be challenging
				to use effectively as an offensive weapon, it truly shines in a support role.
			</p>
			<p class="spaced-paragraph">
				However, a support role does not mean standing on a ledge playing songs.
				You should manage your song uptime carefully, learn song durations, and
				use the time between performances to attack. High-level players can even
				use performances as attacks during windows of opportunity.
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
				<SectionHeading level={2} title="Songs" />
				<p class="spaced-paragraph">
					There are a total of {huntingHornSongs.length} songs available.
				</p>
				<div class="dropdown">
					<Dropdown
						titleText="Filtering Strategy"
						bind:selectedId={filteringStrategy}
						items={[
							{ id: 'atLeastOne', text: 'At least one' },
							{ id: 'onlySelected', text: 'Only selected' },
						]}
					/>
				</div>
				<!--TODO: easter eggs-->

				<div class="hunting-horn-note-buttons">
					{#if didPressAllNotes && didReleaseAllNotes && rainbowNoteState}
						<SimonGame
							{simonNotes}
							bind:currentSequence
							bind:targetSequence
							bind:simonScore
						/>
					{:else}
						{#each huntingHornSelectedNotes as note, i}
							<ColorfulButtonToggle
								enabled={note.enabled}
								on:toggle={(e) => handleToggle(i, e.detail.enabled)}
								backgroundColor={'var(--ctp-surface0)'}
							>
								<HuntingHornNoteIcon color={note.color} size={'100%'} />
							</ColorfulButtonToggle>
						{/each}
					{/if}
					{#if didPressAllNotes && didReleaseAllNotes}
						<ColorfulButtonToggle
							enabled={rainbowNoteState}
							backgroundColor={'var(--ctp-surface0)'}
							on:toggle={(e) => (rainbowNoteState = !rainbowNoteState)}
						>
							<HuntingHornRainbowNoteIcon size={'100%'} />
						</ColorfulButtonToggle>
					{/if}
				</div>
				<div class="table table-with-scrollbar">
					<DataTable
						sortable
						id="hunting-horn-songs-dom"
						zebra
						size="medium"
						headers={[
							{ key: 'notes', value: 'Notes' },
							{ key: 'song', value: 'Song' },
							{ key: 'repeatSong', value: 'Repeat Song' },
							{ key: 'songDuration', value: 'Song Duration' },
							{ key: 'repeatSongDuration', value: 'Repeat Song Duration' },
							{ key: 'maxDuration', value: 'Max Duration' },
							{ key: 'category', value: 'Category' },
						]}
						rows={huntingHornAvailableSongs.map((e, i) => {
							return {
								id: i,
								notes: e.notes.toString(),
								song: e.song,
								repeatSong: e.repeatSong,
								songDuration: e.songDuration,
								repeatSongDuration: e.repeatSongDuration,
								maxDuration: e.maxDuration,
								category: e.category,
							};
						})}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(
										huntingHornAvailableSongs.map((e, i) => {
											return {
												id: i,
												notes: e.notes.toString(),
												song: e.song,
												repeatSong: e.repeatSong,
												songDuration: e.songDuration,
												repeatSongDuration: e.repeatSongDuration,
												maxDuration: e.maxDuration,
												category: e.category,
											};
										}),
									)}
								/>
								<Button
									kind="tertiary"
									icon={Download}
									on:click={() =>
										downloadDomAsPng(
											'hunting-horn-songs-dom',
											'hunting-horn-songs',
										)}>Download</Button
								>
							</div>
						</Toolbar>
						<svelte:fragment slot="cell" let:cell>
							{#if cell.key === 'notes'}
								<span class="hh-notes">
									{#each cell.value.split(',') as note}
										<HuntingHornNoteIcon size={20} color={note} />
									{/each}
									<p>{cell.value.replaceAll(',', ', ')}</p>
								</span>
							{:else}
								<p>{cell.value}</p>
							{/if}
						</svelte:fragment>
					</DataTable>
				</div>
				<p>The durations are in seconds.</p>

				<div class="table table-with-scrollbar">
					<DataTable
						title="Hunting Horn Weapons Valid Notes Combinations"
						sortable
						id="hunting-horn-valid-notes-combinations-dom"
						zebra
						size="medium"
						headers={[{ key: 'notes', value: 'Notes' }]}
						rows={huntingHornValidNotesCombinations}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(huntingHornValidNotesCombinations)}
								/>
								<Button
									kind="tertiary"
									icon={Download}
									on:click={() =>
										downloadDomAsPng(
											'hunting-horn-valid-notes-combinations-dom',
											'hunting-horn-valid-notes-combinations',
										)}>Download</Button
								>
							</div>
						</Toolbar>
						<svelte:fragment slot="cell" let:cell>
							{#if cell.key === 'notes'}
								<span class="hh-notes">
									<HuntingHornNoteIcon
										size={20}
										color={[
											cell.value.split(' ')[0],
											cell.value.split(' ')[1],
											cell.value.split(' ')[2],
										][0]}
									/>
									<HuntingHornNoteIcon
										size={20}
										color={[
											cell.value.split(' ')[0],
											cell.value.split(' ')[1],
											cell.value.split(' ')[2],
										][1]}
									/>
									<HuntingHornNoteIcon
										size={20}
										color={[
											cell.value.split(' ')[0],
											cell.value.split(' ')[1],
											cell.value.split(' ')[2],
										][2]}
									/>
									<p>{cell.value}</p>
								</span>
							{:else}
								<p>{cell.value}</p>{/if}
						</svelte:fragment>
					</DataTable>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Earth Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Earth Style</strong> is the standard <InlineTooltip
							text="Hunting Horn"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Hunting Horn')}
						/> base. It includes the typical three notes listed on the <InlineTooltip
							text="Hunting Horn"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Hunting Horn')}
						/> and allows you to perform a sonic bomb effect by pressing the Kick
						button.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Heaven Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Heaven Style</strong> replaces the ground pound with an
						upthrust attack. This upthrust is one of the best and most reliable
						DPS options for the
						<InlineTooltip
							text="Hunting Horn"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Hunting Horn')}
						/> and should be used whenever possible. The attack has three hits, and
						you can repeat the input to infinitely spam the second part (the actual
						upthrust), which is very effective when used correctly. The new attack
						has a motion value of 60(24)･30(24)×n･38(30).
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Storm Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Storm Style</strong> retains the new upthrust attack and
						replaces the ability to use a Sonic Bomb with a new light pink note.
						This note adds several new songs, including ones that boost
						elemental damage by 1.10x for all players and provide
						<strong>Paralysis Immunity</strong>. With
						<strong>Storm Style</strong>, it's ideal to use a <InlineTooltip
							text="Hunting Horn"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Hunting Horn')}
						/> with <InlineTooltip
							tooltip="Hunting Horn Note"
							text="Purple"
							iconType="component"
							icon={HuntingHornNoteIcon}
							iconColor="Purple"
						/>, <InlineTooltip
							tooltip="Hunting Horn Note"
							text="Cyan"
							iconType="component"
							icon={HuntingHornNoteIcon}
							iconColor="Cyan"
						/>, and <InlineTooltip
							tooltip="Hunting Horn Note"
							text="Red"
							iconType="component"
							icon={HuntingHornNoteIcon}
							iconColor="Red"
						/> notes, as this combination allows you to play
						<strong>Attack Up Large</strong>,
						<strong>Paralysis Immunity</strong>, and
						<strong>Elemental Attack Up</strong>.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Extreme Style" />
				<div>
					<p class="spaced-paragraph">
						<strong>Extreme Style</strong> combines features from all previous styles
						and adds extra mobility and a new debuff mechanic.
					</p>
					<p class="spaced-paragraph">
						In <strong>Extreme Style</strong>, you can run with your <InlineTooltip
							text="Hunting Horn"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Hunting Horn')}
						/> unsheathed, which can be comboed into a double swing attack with a
						40x2 motion value.
					</p>
					<p class="spaced-paragraph">
						Additionally, <strong>Extreme Style</strong> introduces a Sonic Bomb
						that can inflict various debuffs on monsters. To unlock this, you
						need to attack monsters until the <InlineTooltip
							text="Hunting Horn"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Hunting Horn')}
						/> icon next to the stave bars turns bright red and flashes. Once activated,
						your notes will gain a square icon around them, indicating that you can
						perform a Sonic Bomb that will apply one of three debuffs based on the
						notes used. If the meter is not built up, you'll perform a standard Sonic
						Bomb with normal effects, which is still useful for applying <InlineTooltip
							text="Red Soul"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/>
						and <InlineTooltip
							text="Blue Soul"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/> to all players within a radius.
					</p>
					<p class="spaced-paragraph">
						The available debuffs include increasing physical hitzones by +2,
						increasing elemental hitzones by +4, and preventing monsters from
						fleeing. These are significant buffs, especially for team play, so
						it's important to maintain them as much as possible. This encourages
						a more aggressive playstyle rather than simply staying on the
						sidelines.
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
									on:click={() => downloadDomAsPng('hiden-dom', 'hh-hiden')}
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
								/> in the game has <strong>Attack Up Large</strong>, thanks to
								Storm style's pink notes.
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
								/> notes, avoid crossing streams from
								<strong>Attack Up Large</strong>
								to <strong>Defense Up Large</strong> without first encoring the
								former, especially if there are
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

	.table-with-scrollbar {
		height: 80vh;
		overflow-y: auto;
	}

	.hh-notes {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.75rem;
	}

	.hunting-horn-note-buttons {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 2rem;
	}

	.dropdown {
		display: flex;
		margin-bottom: 1rem;
		margin-top: 1rem;
	}
</style>
