<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import {
		SvelteFlow,
		Background,
		Controls,
		Position,
		type Node,
		type Edge,
		MarkerType,
	} from '@xyflow/svelte';
	import { writable, type Writable } from 'svelte/store';
	import '@xyflow/svelte/dist/style.css';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import {
		getItemColor,
		getItemIcon,
	} from '$lib/client/modules/frontier/items';
	import { getCurrencyIcon } from '$lib/client/modules/frontier/currency';
	import InlineTooltipNode from '$lib/client/components/frontier/InlineTooltipNode.svelte';
	import DownloadImageButton from '$lib/client/components/DownloadImageButton.svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import { getArmorIcon } from '$lib/client/modules/frontier/armor';
	import { type DataTableCell } from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	const nodeDefaults = {
		sourcePosition: Position.Right,
		targetPosition: Position.Left,
	};

	const nodeTypes = {
		'inline-tooltip': InlineTooltipNode,
	};

	const nodeData: Node[] = [
		{
			id: '1', // required and needs to be a string
			position: { x: 0, y: 0 }, // required
			// data: { label: 'Power Charm' }, // required
			data: {
				tooltip: writable('Item'),
				text: writable('Power Charm'),
				icon: writable(getItemIcon('Sac')),
				iconColor: writable(getItemColor('Red')),
				iconType: writable('component'),
				nodeType: writable('input'),
				tags: writable([
					{ text: 'ATK+6', icon: getWeaponIcon('Great Sword'), color: 'red' },
				]),
			},
			type: 'inline-tooltip',
			...nodeDefaults,
		},
		{
			id: '2',
			position: { x: 8, y: 100 },
			...nodeDefaults,
			type: 'inline-tooltip',
			// data is used to store the current color value
			data: {
				tooltip: writable('Item'),
				text: writable('Power Talon'),
				icon: writable(getItemIcon('Claw')),
				iconColor: writable(getItemColor('Red')),
				iconType: writable('component'),
				nodeType: writable('input-horizontal'),
				tags: writable([
					{ text: 'ATK+9', icon: getWeaponIcon('Great Sword'), color: 'red' },
				]),
			},
		},
		{
			id: '3',
			position: { x: 0, y: 200 },
			...nodeDefaults,
			type: 'inline-tooltip',
			data: {
				tooltip: writable('Item'),
				text: writable('Armor Charm'),
				icon: writable(getItemIcon('Sac')),
				iconColor: writable(getItemColor('Orange')),
				iconType: writable('component'),
				nodeType: writable('input-horizontal'),
				tags: writable([
					{ text: 'DEF+16', icon: getArmorIcon('Helm'), color: 'warm-gray' },
				]),
			},
		},
		{
			id: '4',
			position: { x: 8, y: 300 },
			data: {
				tooltip: writable('Item'),
				text: writable('Armor Talon'),
				icon: writable(getItemIcon('Claw')),
				iconColor: writable(getItemColor('Orange')),
				iconType: writable('component'),
				nodeType: writable('input-horizontal'),
				tags: writable([
					{ text: 'DEF+24', icon: getArmorIcon('Helm'), color: 'warm-gray' },
				]),
			},
			...nodeDefaults,
			type: 'inline-tooltip',
		},
		{
			id: '5',
			position: { x: 200, y: 50 },
			type: 'inline-tooltip',
			data: {
				tooltip: writable('Item'),
				text: writable('Power Taloncharm'),
				icon: writable(getItemIcon('Claw')),
				iconColor: writable(getItemColor('Red')),
				iconType: writable('component'),
				nodeType: writable('default-horizontal'),
				tags: writable([
					{ text: 'ATK+15', icon: getWeaponIcon('Great Sword'), color: 'red' },
				]),
			},
			...nodeDefaults,
		},
		{
			id: '6',
			position: { x: 200, y: 250 },
			data: {
				tooltip: writable('Item'),
				text: writable('Armor Taloncharm'),
				icon: writable(getItemIcon('Claw')),
				iconColor: writable(getItemColor('Orange')),
				iconType: writable('component'),
				nodeType: writable('default-horizontal'),
				tags: writable([
					{
						text: 'DEF+40',
						icon: getArmorIcon('Helm'),
						color: 'warm-gray',
					},
				]),
			},
			...nodeDefaults,
			type: 'inline-tooltip',
		},
		{
			id: '7',
			position: { x: 450, y: 150 },
			data: {
				tooltip: writable('Item'),
				text: writable("Hunter's Taloncharm"),
				icon: writable(getItemIcon('Claw')),
				iconColor: writable(getItemColor('Purple')),
				iconType: writable('component'),
				nodeType: writable('output-horizontal'),
				tags: writable([
					{
						text: 'ATK+15',
						icon: getWeaponIcon('Great Sword'),
						color: 'red',
					},
					{
						text: 'DEF+40',
						icon: getArmorIcon('Helm'),
						color: 'warm-gray',
					},
				]),
			},
			...nodeDefaults,
			type: 'inline-tooltip',
		},
	];

	const edgeData: Edge[] = [
		{
			id: 'e1-5',
			source: '1',
			target: '5',
			type: 'step',
			markerEnd: {
				type: MarkerType.Arrow,
				color: 'var(--ctp-red)',
			},
			style: 'stroke-width: 2px; stroke: var(--ctp-red);',
		},
		{
			id: 'e2-5',
			source: '2',
			target: '5',
			type: 'step',
			style: 'stroke-width: 2px; stroke: var(--ctp-red);',
		},
		{
			id: 'e3-6',
			source: '3',
			target: '6',
			type: 'step',
			markerEnd: {
				type: MarkerType.Arrow,
				color: 'var(--ctp-peach)',
			},
			style: 'stroke-width: 2px; stroke: var(--ctp-peach);',
		},
		{
			id: 'e4-6',
			source: '4',
			target: '6',
			type: 'step',

			style: 'stroke-width: 2px; stroke: var(--ctp-peach);',
		},
		{
			id: 'e5-7',
			source: '5',
			target: '7',
			type: 'step',
			markerEnd: {
				type: MarkerType.Arrow,
				color: 'var(--ctp-mauve)',
			},
			style: 'stroke-width: 2px; stroke: var(--ctp-red);',
		},
		{
			id: 'e6-7',
			source: '6',
			target: '7',
			type: 'step',
			style: 'stroke-width: 2px; stroke: var(--ctp-peach);',
		},
	];

	const nodes: Writable<Node[]> = writable(nodeData);

	const edges: Writable<Edge[]> = writable(edgeData);

	let modalPopoverIconType = 'file';
	let modalPopoverIcon: any;
	let modalHeading = $state('');
	let modalLabel = $state('');
	let modalOpen = $state(false);
	let modalImage = $state('');
	let modalNotes = $state('');

	let modalBlurClass = $derived(
		modalOpen ? 'modal-open-blur' : 'modal-open-noblur',
	);

	function changeModal(cell: DataTableCell, section: string) {
		modalOpen = true;
		modalHeading = cell.value;
		modalLabel = section || '';

		switch (section) {
			default:
				modalImage = '';
				modalNotes = '';
				break;
			// case 'Item Presets':
			// 	modalImage =
			// 		selectedItemPresetItems.find((e) => e.name === cell.value)?.demo ||
			// 		'';
			// 	modalNotes =
			// 		selectedItemPresetItems.find((e) => e.name === cell.value)
			// 			?.description || '';
			// 	break;
		}
	}
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
			<img src={modalImage} alt={'caravan'} />
			<p>{modalNotes}</p>
		</div>
	{:else}
		<div class="modal-mobile-container">
			<div class="modal-mobile-contents-top">
				<div class="modal-mobile-image">
					<div>
						{#if modalPopoverIconType === 'component'}
							{@const SvelteComponent = modalPopoverIcon}
							<SvelteComponent />
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

<TableOfContentsPage displayTOC={true}>
	<div class={modalBlurClass}>
		<SectionHeadingTopLevel title={'Your First Hunts'} />
		<div>
			<InlineNotification
				lowContrast
				hideCloseButton
				kind="info"
				title="Info:"
				subtitle="This section is pending an overhaul. We recommend first consulting patch and server specific guides from the community you are in."
			/>
			<section>
				<SectionHeading level={2} title="Item Preset Preparation" />
				<div>
					<div class="spaced-paragraph">
						To create item presets, set up your character's active inventory as
						you want it, then access any box, choose the "Item Presets" option,
						followed by "Register Preset". Select a slot to save your preset and
						optionally name it.
					</div>
					<div class="spaced-paragraph">
						Slots 1 through 4 correspond to pressing L1/L2/R1/R2 or
						F/Ctrl/C/Shift while interacting with a box. This means after a
						quest, you can simply run up to a box, interact, and press L1 or F
						to instantly equip your preset from Slot 1.
					</div>
					<CenteredFigure
						width={'100%'}
						type="file"
						src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/loaded-item-preset.webp'}
						alt="Loaded item preset"
						figcaption="Loaded item preset."
					/>
					<div class="spaced-paragraph">
						If you have a subscription, you’ll have an additional 20 preset
						slots. Access these by going to the "Item Presets" option and
						selecting "Equip Preset". Slots 5 through 24 don’t have keyboard or
						controller shortcuts and must be equipped manually.
					</div>
					<div class="spaced-paragraph">
						Gunners should buy all standard shots and coatings, as well as the
						materials needed to combine into various ammo types and coatings.
						These items are available from both the General Store NPC and the
						Combiner NPC next to her.
					</div>
					<div class="spaced-paragraph">
						The items mentioned cover <InlineTooltip
							text="Normal"
							icon={getItemIcon('Shot')}
							tooltip="Ammo"
							iconType="component"
						/>, <InlineTooltip
							text="Pierce"
							icon={getItemIcon('Ammo Pierce')}
							tooltip="Ammo"
							iconType="component"
						/>, and <InlineTooltip
							text="Pellet"
							icon={getItemIcon('Ammo Spread')}
							tooltip="Ammo"
							iconType="component"
						/> shots up to Lv3. You can use <InlineTooltip
							text="GCP"
							icon={getCurrencyIcon('GCP')}
							tooltip="Currency"
							iconType="file"
						/> to obtain materials for Elemental shots, but generally, after reaching
						G Rank, you should stick to using <InlineTooltip
							text="Pierce"
							icon={getItemIcon('Ammo Pierce')}
							tooltip="Ammo"
							iconType="component"
						/> shots unless you run out of both shots and combination materials.
					</div>
					<div class="spaced-paragraph">
						If this seems unusual based on your experience in other games, it’s
						because elemental damage scales on a set formula based on attack,
						while critical hits and bullet modifiers have a much greater impact
						on raw damage. Typically, using elemental shots will deal about 50%
						of the damage you’d achieve with <InlineTooltip
							text="Pierce"
							icon={getItemIcon('Ammo Pierce')}
							tooltip="Ammo"
							iconType="component"
						/> shots.
					</div>
					<div class="spaced-paragraph">
						If you’re having difficulty at HR5 or higher, make use of tools like
						<InlineTooltip
							text="Halk Pots"
							icon={getItemIcon('Flask')}
							tooltip="Item"
							iconColor={getItemColor('Orange')}
							iconType="component"
						/>, which provide a flat 70% reduction in damage taken, allowing you
						to tank almost anything except the hardest content. You’re limited
						to five uses per day, so use them sparingly as a crutch when truly
						needed.
					</div>
					<div class="spaced-paragraph">
						<InlineTooltip
							text="Halk Pots"
							icon={getItemIcon('Flask')}
							tooltip="Item"
							iconColor={getItemColor('Orange')}
							iconType="component"
						/> can be obtained by claiming your Daily Quest reward from the General
						Store NPC by selecting the last option.
					</div>

					<section>
						<SectionHeading level={3} title="Stamina Items" />
						<div>
							<div class="paragraph-long-02">
								Purchase <InlineTooltip
									icon={getItemIcon('Herb')}
									iconColor={getItemColor('Purple')}
									text="Sunset Herb"
									tooltip="Item"
									iconType="component"
								/> and <InlineTooltip
									icon={getItemIcon('Webbing')}
									iconColor={getItemColor('Yellow')}
									text="Honey"
									tooltip="Item"
									iconType="component"
								/> from the General Store NPC (the lady in pink in the screenshot).
								Combine them in your item box to create an <InlineTooltip
									icon={getItemIcon('Medicine')}
									iconColor={getItemColor('Yellow')}
									text="Energy Drink"
									tooltip="Item"
									iconType="component"
								/>. Then, talk to the Combiner NPC to Bulk Combine more <InlineTooltip
									icon={getItemIcon('Medicine')}
									iconColor={getItemColor('Yellow')}
									text="Energy Drinks"
									tooltip="Item"
									iconType="component"
								/>.
							</div>
							<CenteredFigure
								width={'100%'}
								type="file"
								src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/bulk-combine-energy-drink.webp'}
								alt="Bulk Combine"
								figcaption="You must manually combine an item once for it to appear in
								the Bulk Combine menu at the Combiner NPC."
							/>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Charms and Talons" />
						<div>
							<div class="spaced-paragraph">
								When you reach HR5, you'll receive some <InlineTooltip
									icon={getItemIcon('Ticket')}
									tooltip="Item"
									text="HRP Tkt (4k)"
								/>. You can exchange these tickets for GCP at the General Store
								NPC.
							</div>
							<div class="spaced-paragraph">
								Your first use of GCP should be to purchase 2 <InlineTooltip
									icon={getItemIcon('Claw')}
									tooltip="Item"
									iconType="component"
									iconColor={getItemColor('Red')}
									text="Lao Shan Claws"
								/>, costing <InlineTooltip
									icon={getCurrencyIcon('GCP')}
									tooltip="Currency"
									iconType="file"
									text="90 GCP"
								/> each. Combine these Claws with the Power and Armor Charms to create
								Talons, and then combine those Talons with another set of Charms
								to make Claws. This final combination will give you the benefits
								of all four items in one item slot (Attack+15 and Defense+40).
							</div>
							<div class="paragraph-long-02">
								The items shown in the diagram do not stack. If you want the
								maximum possible buffs, you only need <InlineTooltip
									icon={getItemIcon('Claw')}
									tooltip="Item"
									iconColor={getItemColor('Purple')}
									text="Hunter's Taloncharm"
								/>.
							</div>
							<div class="svelte-flow-container">
								<!-- TODO if u refresh the page it doesnt fit the view-->
								<SvelteFlow
									colorMode={$carbonThemeStore === 'g10' ? 'light' : 'dark'}
									fitView={true}
									{nodes}
									{edges}
									elementsSelectable={false}
									nodesConnectable={false}
									nodesDraggable={false}
									{nodeTypes}
								>
									<Background bgColor={'var(--ctp-mantle)'} />
									<Controls showLock={false} />
									<DownloadImageButton fileName="talon-charm" />
								</SvelteFlow>
							</div>
						</div>
					</section>
				</div>
			</section>
		</div>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

<style lang="scss">
	// button {
	// 	all: unset;
	// }

	// .table-button {
	// 	display: flex;
	// 	align-items: center;
	// 	font-weight: bold;
	// 	gap: 0.25rem;

	// 	img {
	// 		max-width: 4ch;
	// 	}
	// }

	.page-turn {
		margin-top: 4rem;
	}

	.svelte-flow-container {
		height: 80vh;
		margin-top: 2rem;
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

	.data-table-title {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.datatable-bottom {
		margin-top: 2rem;
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

	.paragraph-with-icon {
		display: flex;
		align-items: center;
		gap: 0.125rem;
	}

	.table-with-scrollbar {
		height: 80vh;
		overflow-y: auto;
	}
</style>
