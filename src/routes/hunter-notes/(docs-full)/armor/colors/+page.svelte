<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { LocationIcons } from '$lib/client/modules/frontier/locations';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import { page } from '$app/stores';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';

	const colorsInfo = [
		{
			id: '1',
			color: 'Green',
			requirement:
				'Completion of a large number of Delivery Quests. Each Delivery quest adds +3 points, 100 points required. If your total points for Green, Red or White pass 100, the total points required of all three goes down by -30.',
			tips: 'Complete the 3 Iron Ore delivery quest, found at the Main Quest Guild Sweetheart.',
		},
		{
			id: '2',
			color: 'Red',
			requirement:
				'Completion of a large number of Slaying Quests. Slaying a main objective adds +2 points, Sub-quests +1, 100 points required.',
			tips: '-',
		},
		{
			id: '3',
			color: 'White',
			requirement:
				'Capturing a large number of Monsters. Each capture adds +3 points, 100 points required.',
			tips: 'Use Capture Guru armor skill.',
		},
		{
			id: '4',
			color: 'Blue',
			requirement: 'Have 50 Friends at once on your friendlist.',
			tips: '-',
		},
		{
			id: '5',
			color: 'Dark Blue',
			requirement:
				'Have 20 or more Rare-7 weapons or higher of each type (excluding Tonfa, Switch Axe F and Magnet Spike). Duplicate weapons and G Rank weapons do not count.',
			tips: 'Pure raw SP Weapons upgrade to Rare-7.',
		},
		{
			id: '6',
			color: 'Light Green',
			requirement:
				'35 armor pieces, which are needed for the Well Dressed title.',
			tips: '-',
		},
		{
			id: '7',
			color: 'Purple',
			requirement: 'Achieve a single PVP victory.',
			tips: 'Complete the first 3 PVP quests at Blue NPC (Arena quests with preset gear). The quests are hunting 2 Velocidromes, hunting 1 Gypceros and hunting 1 Rathian. Then capture Velocidromes until you can keep one as a pet. Then win a PVP battle from Blue NPC.',
		},
		{
			id: '8',
			color: 'Orange',
			requirement: 'Complete a large number of Hunter Guide (Navi) Challenges.',
			tips: '-',
		},

		{
			id: '9',
			color: 'Yellow',
			requirement: '15 or more Large Gold Crown Monsters.',
			tips: '-',
		},
		{
			id: '10',
			color: 'Gray',
			requirement: 'Eat 100 times in your house.',
			tips: '-',
		},
		{
			id: '11',
			color: 'Pink',
			requirement: 'Contribute 5000 Souls during the festival.',
			tips: '-',
		},
		{
			id: '12',
			color: 'Rainbow',
			requirement: 'Unlock all other colors.',
			tips: '-',
		},
	];
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Colors'} />
		<div>
			<p class="spaced-paragraph">
				Colors are unlocked by doing a number of different tasks. These colors
				are also the color that is displayed behind your weapon icon in <InlineTooltip
					text="Mezeporta"
					tooltip="Location"
					icon={LocationIcons.find((e) => e.name === 'Mezeporta')?.icon}
					iconType={'file'}
				/>.
			</p>
			<p class="spaced-paragraph">
				Colors other than Green, Red and White require that you have reached at
				least HR3 to be used.
			</p>
			<p class="spaced-paragraph">
				The menu to customise the color used is unlocked by creating or
				otherwise obtaining an armor piece that lets you set its color. You can
				do this by buying the T-Shirt that the NPC wearing glasses in the
				<InlineTooltip
					text="Blacksmith"
					tooltip="Location"
					icon={LocationIcons.find((e) => e.name === 'Blacksmith')?.icon}
					iconType={'file'}
				/> sells.
			</p>

			<!-- <CenteredFigure
				width={'100%'}
				type="file"
				src={tshirt}
				alt="T-Shirt"
				figcaption="T-Shirt that can be of many colors."
			/> -->

			<p class="spaced-paragraph">
				If your total points for Green, Red or White pass 100, the total points
				required of all three goes down by -30.
			</p>
		</div>
		<div>
			<DataTable
				useStaticWidth
				id="armor-colors-dom"
				sortable
				zebra
				size="medium"
				headers={[
					{ key: 'color', value: 'Color' },
					{ key: 'requirement', value: 'Requirement' },
					{ key: 'tips', value: 'Tips' },
				]}
				rows={colorsInfo}
				><Toolbar
					><div class="toolbar">
						<CopyButton
							iconDescription={'Copy as CSV'}
							text={getCSVFromArray(colorsInfo)}
						/>
						<Button
							kind="tertiary"
							icon={Download}
							on:click={() =>
								downloadDomAsPng('armor-colors-dom', 'armor-colors')}
							>Download</Button
						>
					</div>
				</Toolbar>

				<svelte:fragment slot="cell" let:cell>
					{#if cell.key === 'color'}
						<div class="color">
							{#if cell.value === 'Red'}
								<button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-red)"
								/>
							{:else if cell.value === 'Green'}
								<button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-green)"
								/>
							{:else if cell.value === 'White'}
								<button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-latte-base)"
								/>
							{:else if cell.value === 'Green'}
								<button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-green)"
								/>
							{:else if cell.value === 'Blue'}
								<button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-sapphire)"
								/>
							{:else if cell.value === 'Dark Blue'}
								<button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-blue)"
								/>
							{:else if cell.value === 'Light Green'}
								<button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-sky)"
								/>
							{:else if cell.value === 'Purple'}
								<button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-mauve)"
								/>
							{:else if cell.value === 'Orange'}
								<button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-peach)"
								/>
							{:else if cell.value === 'Yellow'}
								<button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-yellow)"
								/>
							{:else if cell.value === 'Gray'}
								<button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-surface0)"
								/>
							{:else if cell.value === 'Pink'}
								<button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-pink)"
								/>
							{:else if cell.value === 'Rainbow'}
								<button
									type="button"
									class="dot rainbow-loop"
									aria-label={'Color'}
								/>
							{/if}
							<p>{cell.value}</p>
						</div>
					{:else}
						<p>{cell.value}</p>
					{/if}
				</svelte:fragment>
			</DataTable>
		</div>

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.color {
		display: flex;
		gap: 0.25rem;
		align-items: center;
	}

	.dot {
		width: 1rem;
		height: 1rem;
		margin-right: 0.25rem;
		border-color: var(--ctp-surface1);
		border-radius: 50%;
		border-style: solid;
	}

	.rainbow-loop {
		animation: rainbow 8s linear infinite;
	}

	@keyframes rainbow {
		0%,
		100% {
			background-color: var(--ctp-red);
		}
		10% {
			background-color: var(--ctp-peach);
		}
		20% {
			background-color: var(--ctp-yellow);
		}
		30% {
			background-color: var(--ctp-green);
		}
		40% {
			background-color: var(--ctp-teal);
		}
		50% {
			background-color: var(--ctp-sky);
		}
		60% {
			background-color: var(--ctp-sapphire);
		}
		70% {
			background-color: var(--ctp-blue);
		}
		80% {
			background-color: var(--ctp-lavender);
		}
		90% {
			background-color: var(--ctp-pink);
		}
	}
</style>
