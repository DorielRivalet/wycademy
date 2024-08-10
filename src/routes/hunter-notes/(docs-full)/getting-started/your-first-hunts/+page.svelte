<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
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
	import { theme } from '$lib/client/stores/theme';
	import InlineTooltipNode from '$lib/client/components/frontier/InlineTooltipNode.svelte';
	import DownloadImageButton from '$lib/client/components/DownloadImageButton.svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import { getArmorIcon } from '$lib/client/modules/frontier/armor';

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
				nodeType: writable('input'),
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
				nodeType: writable('input'),
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
				nodeType: writable('input'),
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
				nodeType: writable('default'),
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
				nodeType: writable('default'),
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
				nodeType: writable('output'),
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
</script>

<HunterNotesPage displayTOC={true}>
	<div>
		<SectionHeadingTopLevel title={'Your First Hunts'} />
		<div>
			<section>
				<SectionHeading level={2} title="Charms and Talons" />
				<div>
					<p class="spaced-paragraph">
						When you reach HR5, you'll receive some <InlineTooltip
							icon={getItemIcon('Ticket')}
							tooltip="Item"
							text="HRP Tkt (4k)"
						/>. You can exchange these tickets for GCP at the General Store NPC.
					</p>
					<p class="spaced-paragraph">
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
						Talons, and then combine those Talons with another set of Charms to make
						Claws. This final combination will give you the benefits of all four
						items in one item slot (Attack+14 and Defense+40).
					</p>
					<div class="svelte-flow-container">
						<SvelteFlow
							colorMode={$theme === 'g10' ? 'light' : 'dark'}
							fitView
							{nodes}
							{edges}
							elementsSelectable={false}
							attributionPosition="top-right"
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
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.svelte-flow-container {
		height: 80vh;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
</style>
