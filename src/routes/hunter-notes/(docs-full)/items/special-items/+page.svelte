<script lang="ts">
	import { page } from '$app/stores';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import {
		getItemIcon,
		getItemColor,
	} from '$lib/client/modules/frontier/items';
	import { gameInfo } from '$lib/client/modules/frontier/objects';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import DataTable, {
		type DataTableCell,
	} from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import { Download, Image } from 'carbon-icons-svelte';
	import type { ComponentType, SvelteComponent } from 'svelte';

	const specialItems: {
		demo?: string;
		item: string;
		icon: ComponentType<SvelteComponent>;
		iconColor: string;
		description: string;
		source: string;
		type: string;
	}[] = [
		{
			item: 'Halk Pot',
			icon: getItemIcon('Flask'),
			iconColor: getItemColor('Orange'),
			description: `Significantly reduces damage taken during quests. You can use up to 5 per day.`,
			source: 'Given daily in the Halk area.',
			type: 'Special Consumable',
		},
		{
			item: 'Legendary Rasta Ticket',
			icon: getItemIcon('Ticket'),
			iconColor: getItemColor('Purple'),
			description: `Allows you to bring a Legendary Rasta on a quest without requiring a premium subscription.`,
			source: 'Completing Hunter Navigation tasks and during special events.',
			type: 'Special Ticket',
		},
		{
			item: 'Guts Tickets',
			icon: getItemIcon('Ticket'),
			iconColor: getItemColor('Red'),
			description: `These tickets prevent death when your HP reaches 0. The Great Guts Ticket not only stops death but also restores your health to full, while the Guts Ticket just prevents you from dying. These tickets are effective in situations where the Guts skill wouldn’t normally work, including when at low HP.`,
			type: 'Special Ticket',
			source: 'Hunter Navigation tasks.', // TODO
		},
		{
			item: 'Status Tickets',
			icon: getItemIcon('Ticket'),
			iconColor: getItemColor('Purple'),
			description: `These tickets protect you from the standard versions of Poison, Paralysis, and Sleep status effects. However, they do not provide protection against the Zenith variants of these statuses.`,
			source: '?',
			type: 'Special Ticket',
		},
		{
			item: '4,000 GRP Ticket',
			icon: getItemIcon('Ticket'),
			iconColor: getItemColor('Blue'),
			description: `When used on a quest, this ticket grants you an additional 4,000 GRP and GSRP upon completion, excluding gathering and simple quests. You can also assign these to your AI companions, though it’s not the most efficient use. They do not stack with other GRP tickets or themselves.`,
			source:
				'Daily bonuses, for completing Hunter Navigation tasks, and during events.',
			type: 'Points Ticket',
		},
		{
			item: '20,000 GRP Ticket',
			icon: getItemIcon('Ticket'),
			iconColor: getItemColor('Blue'),
			description: `This ticket grants you an additional 20,000 GRP and GSRP when used on a quest, excluding gathering and simple quests. Like the 4,000 GRP Ticket, it can be assigned to AI companions, but this is generally wasteful. They do not stack with other GRP tickets or themselves.`,
			source:
				'Daily bonuses, for completing Hunter Navigation tasks, and during events.',
			type: 'Points Ticket',
		},
		{
			item: '4,000 PRP Ticket',
			icon: getItemIcon('Ticket'),
			iconColor: getItemColor('White'),
			description: `When used on a quest, this ticket grants your partner 4,000 PRP upon completion, excluding gathering and simple quests. You can assign these to your AI companions. They do not stack with other PRP tickets or themselves.`,
			source:
				'Quest completion stamps. Can also be claimed from the Blacksmith at the Guildie in Glasses who wears Brown and Yellow by choosing her last option.',
			type: 'Points Ticket',
		},
		{
			item: '20,000 PRP Ticket',
			icon: getItemIcon('Ticket'),
			iconColor: getItemColor('Gray'),
			description: `This ticket grants you 20,000 PRP when used on a quest, excluding gathering and simple quests. It can be assigned to AI companions. They do not stack with other PRP tickets.`,
			source:
				'Completing Hunter Navigation tasks, during events, and as Caravan Festival rewards.',
			type: 'Points Ticket',
		},
		{
			item: 'Sword Crystals',
			icon: getItemIcon('Sword Crystal'),
			iconColor: getItemColor('Red'),
			description: `These crystals function as ammunition for Blademaster weapons, requiring specific skills to use effectively. Reaching level +3 in these skills guarantees maximum damage or status effect output.`,
			source: 'General Store NPC.',
			type: 'Tool',
		},
		{
			item: 'Gook Pickaxe',
			icon: getItemIcon('Pickaxe'),
			iconColor: getItemColor('Yellow'),
			description: `A pickaxe that has the potential to double the items mined.`,
			source:
				'Crafted from items occasionally obtained at the Guuku Farm after acquiring a Guuku.',
			type: 'Tool',
		},
		{
			item: 'Gook Fishing Bait',
			icon: getItemIcon('Bait'),
			iconColor: getItemColor('Yellow'),
			description: `Fishing bait that can potentially double the number of fish caught.`,
			source:
				'Made from items occasionally gained from the Guuku Farm after acquiring a Guuku.',
			type: 'Tool',
		},
		{
			item: 'Gook Bug Net',
			icon: getItemIcon('Bugnet'),
			iconColor: getItemColor('Yellow'),
			description: `A bug net that can potentially double the number of insects gathered.`,
			source:
				'Made from items occasionally gained from the Guuku Farm after acquiring a Guuku.',
			type: 'Tool',
		},
		{
			item: 'Gook Gloves',
			icon: getItemIcon('Question Mark'),
			iconColor: getItemColor('Yellow'),
			description: `Gloves that can potentially double the items gathered.`,
			source:
				'Crafted from items occasionally gained from the Guuku Farm after acquiring a Guuku.',
			type: 'Tool',
		},
		{
			item: 'Toxin',
			icon: getItemIcon('Flask'),
			iconColor: getItemColor('Purple'),
			description: `A purchasable consumable that reduces your health by 10 when used. It’s extremely useful for triggering the Adrenaline skill, as it works based on total HP rather than a percentage, allowing you to reach Adrenaline range by simply consuming a meal that reduces HP by 50. This item does not lower your maximum HP, meaning that Vampirism and armor with HC regen effects can interfere with maintaining Adrenaline health levels.`,
			source: '?',
			type: 'Consumable Item',
		},
		{
			item: 'Starving Wolf Potion',
			icon: getItemIcon('Flask'),
			iconColor: getItemColor('Yellow'),
			description: `A consumable that instantly sets your Maximum Stamina to 25, allowing you to trigger the Starving Wolf skill.`,
			source:
				'Given from being on NetCafe course or from the Guild Cat at a specific daily rate.',
			type: 'Consumable Item',
		},
		{
			item: 'Adrenaline Potion',
			icon: getItemIcon('Flask'),
			iconColor: getItemColor('Green'),
			description: `A consumable that instantly sets your Health to 40, enabling the Adrenaline skill. Like the Toxin, this item doesn’t reduce your maximum HP, so Vampirism can prevent you from maintaining Adrenaline health levels.`,
			source:
				'Given from being on NetCafe course or from the Guild Cat at a specific daily rate.',
			type: 'Consumable Item',
		},
		{
			item: 'L.Sword Spirit Drug',
			icon: getItemIcon('Medicine'),
			iconColor: getItemColor('Red'),
			description: `A consumable that instantly sets the Long Sword Spirit Meter to full. It’s quite niche due to how easy it is to fill the meter naturally and isn’t common enough for regular use.`,
			source:
				'Given from being on NetCafe course or from the Guild Cat at a specific daily rate.',
			type: 'Consumable Item',
		},
		{
			// TODO Gacha Lucky Charm?
			item: 'Carving Charm',
			icon: getItemIcon('Sac'),
			iconColor: getItemColor('Green'),
			description: `A charm that allows for an additional carve from any creature that can be carved, consumed at the start of a quest.`,
			source: '?',
			type: 'Consumable Charm',
		},
		{
			item: 'Large Lucky Charm',
			icon: getItemIcon('Sac'),
			iconColor: getItemColor('Pink'),
			description: `A charm that increases the chances of earning more reward rolls and potentially doubling the rewards after completing a quest.`,
			source: 'Hunter Navigation tasks.',
			type: 'Consumable Charm',
		},
		{
			item: 'Super Lucky Charm',
			icon: getItemIcon('Sac'),
			iconColor: getItemColor('Pink'),
			description: `An improved version of the Large Lucky Charm, offering better chances for additional and doubled reward rolls in post-quest rewards.`,
			source: '?',
			type: 'Consumable Charm',
		},
		{
			item: 'White Festival Gem',
			icon: getItemIcon('Ball'),
			iconColor: getItemColor('White'),
			description: `A 20P Festival Gem that grants 20 extra souls when used on successful hunts during a Hunter Festival. The G version is identical to the non-G version, only differing in branding when performing G Rank tasks.`,
			source: 'Hunter Festival.',
			type: 'Hunter Festival Gem',
		},
		{
			item: 'Green Festival Gem',
			icon: getItemIcon('Ball'),
			iconColor: getItemColor('Green'),
			description: `A 40P Festival Gem that grants 40 extra souls when used on successful hunts during a Hunter Festival. Like the White Gem, the G version is identical to the non-G version, differing only in branding when performing G Rank tasks.`,
			source: 'Hunter Festival.',
			type: 'Hunter Festival Gem',
		},
		{
			item: 'Red Festival Gem',
			icon: getItemIcon('Ball'),
			iconColor: getItemColor('Red'),
			description: `An 80P Festival Gem that grants 80 extra souls when used on successful hunts during a Hunter Festival. The G and non-G versions are functionally the same, differing only in branding during G Rank tasks.`,
			source: 'Hunter Festival.',
			type: 'Hunter Festival Gem',
		},
	];

	function changeModal(cell: DataTableCell, section: string) {
		modalOpen = true;
		modalHeading = cell.value;
		modalLabel = section || '';

		switch (section) {
			default:
				modalImage = '';
				modalNotes = '';
				break;
			case 'Special Items':
				modalImage =
					specialItems.find((e) => e.item === cell.value)?.demo || '';
				modalNotes =
					specialItems.find((e) => e.item === cell.value)?.description || '';
				break;
		}
	}

	let modalHeading = '';
	let modalLabel = '';
	let modalOpen = false;
	let modalImage = '';
	let modalNotes = '';

	// TODO Needed?
	let modalPopoverIconType = 'file';
	let modalPopoverIcon: any;

	$: modalBlurClass = modalOpen ? 'modal-open-blur' : 'modal-open-noblur';
</script>

<Modal
	passiveModal
	bind:open={modalOpen}
	{modalHeading}
	{modalLabel}
	on:open
	on:close
	hasScrollingContent
>
	{#if modalImage !== '' && modalImage}
		<div class="modal-content">
			<img src={modalImage} alt={'style rank'} />
			<div>{modalNotes}</div>
		</div>
	{:else}
		<div class="modal-mobile-container">
			<div class="modal-mobile-contents-top">
				<div class="modal-mobile-image">
					<div>
						{#if modalPopoverIconType === 'component'}
							<svelte:component this={modalPopoverIcon} />
						{:else}
							<img src={modalPopoverIcon} alt={modalHeading} />
						{/if}
					</div>
				</div>
				<div class="modal-mobile-title">
					{modalHeading.substring(0, 64)}
				</div>

				{#if modalLabel !== ''}
					<div class="modal-mobile-subtitle">{modalLabel.substring(0, 64)}</div>
				{/if}
			</div>
		</div>
	{/if}
</Modal>

<HunterNotesPage displayTOC={true}>
	<div class={modalBlurClass}>
		<SectionHeadingTopLevel title={'Special Items'} />
		<div>
			<p>
				The following are items that either alter quest rewards when used or are
				exclusive to <InlineTooltip
					tooltip="Game"
					icon={gameInfo.find(
						(e) => e.name === 'Monster Hunter Frontier Z Zenith',
					)?.icon}
					text="Monster Hunter Frontier"
					iconType="file"
				/>, not found in the mainline games.
			</p>
			<div class="table table-with-scrollbar">
				<DataTable
					id="special-items-dom"
					sortable
					zebra
					size="short"
					headers={[
						{ key: 'item', value: 'Item' },
						{ key: 'description', value: 'Description' },
						{ key: 'source', value: 'Source' },
						{ key: 'type', value: 'Type' },
					]}
					rows={specialItems.map((e) => {
						return {
							id: e.item,
							item: e.item,
							description: e.description,
							source: e.source,
							type: e.type,
						};
					})}
				>
					<Toolbar
						><div class="toolbar">
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray(
									specialItems.map((e) => {
										return {
											item: e.item,
											description: e.description,
											source: e.source,
											type: e.type,
										};
									}),
								)}
							/>
							<Button
								kind="tertiary"
								icon={Download}
								on:click={(e) =>
									downloadDomAsPng('special-items-dom', 'special-items')}
								>Download</Button
							>
						</div>
					</Toolbar>
					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'item'}
							<div class="special-item">
								<InlineTooltip
									text={cell.value}
									tooltip="Item"
									icon={specialItems.find((e) => e.item === cell.value)?.icon}
									iconColor={specialItems.find((e) => e.item === cell.value)
										?.iconColor}
									iconType="component"
								/>
								{#if specialItems.find((e) => e.item === cell.value)?.demo !== undefined}
									<Button
										on:click={() => changeModal(cell, 'Special Items')}
										size="small"
										icon={Image}
										kind="ghost"
									/>
								{/if}
							</div>
						{:else}
							<p>{cell.value}</p>
						{/if}
					</svelte:fragment>
				</DataTable>
			</div>
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

	.special-item {
		dispay: flex;
		gap: 0.125rem;
	}

	.table {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.table-with-scrollbar {
		height: 80vh;
		overflow-y: auto;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.modal-content {
		display: flex;
		gap: var(--cds-spacing-06);
		flex-direction: column;
	}

	.modal-content > img {
		max-width: 60vh;
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	}

	.modal-open-noblur {
		-webkit-filter: blur(0);
		filter: blur(0);
		opacity: 1;
		-webkit-transition:
			opacity 500ms ease,
			-webkit-filter 500ms ease;
		transition:
			opacity 500ms ease,
			-webkit-filter 500ms ease;
		transition:
			filter 500ms ease,
			opacity 500ms ease;
		transition:
			filter 500ms ease,
			opacity 500ms ease,
			-webkit-filter 500ms ease;
	}

	.modal-open-blur {
		-webkit-filter: blur(8px);
		filter: blur(4px);
		opacity: 1;
	}

	.modal-mobile-popover-image {
		max-width: 100%; /* Ensures the image does not exceed the width of its container */
		max-height: 100%; /* Ensures the image does not exceed the height of its container */
		object-fit: cover; /* Ensures the image covers the area without distorting its aspect ratio */
		display: inline-block; /* Removes any extra space below the image */
	}

	.modal-mobile-container {
		display: flex;
		gap: 0.5rem;
		padding: var(--cds-spacing-04);
		flex-direction: column;
		max-width: 48ch;
		overflow: hidden;
	}

	.modal-mobile-link:hover {
		text-decoration: underline;
	}

	.modal-mobile-image {
		grid-area: image;
		display: inline-block;
		max-width: 8ch;
	}

	.modal-mobile-button {
		grid-area: button;
	}

	.modal-mobile-title {
		display: -webkit-box;
		-webkit-line-clamp: 1; /* number of lines to show */
		line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		grid-area: title;
		font-weight: bold;
		height: fit-content;
	}

	.modal-mobile-subtitle {
		display: -webkit-box;
		-webkit-line-clamp: 2; /* number of lines to show */
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		grid-area: subtitle;
		color: var(--ctp-subtext0);
	}

	.modal-mobile-title,
	.modal-mobile-subtitle {
		padding-left: 0.5rem;
		padding-top: 0;
		padding-bottom: 0;
		margin: 0;
	}

	.modal-mobile-description {
		grid-area: description;
		text-wrap: wrap;
		margin-top: 1rem;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* number of lines to show */
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.modal-mobile-contents-top {
		display: grid;
		grid-template-areas:
			'image title button'
			'image subtitle subtitle'
			'description description description';
		gap: 0;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr auto;
	}

	.modal-mobile-contents-bottom {
		display: flex;
		gap: 0.5rem;
	}
</style>
