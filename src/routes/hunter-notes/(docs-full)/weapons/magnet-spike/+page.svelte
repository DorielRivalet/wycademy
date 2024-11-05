<script lang="ts">
	import { page } from '$app/stores';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import Weapon from '$lib/client/components/frontier/Weapon.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import {
		getLocationIcon,
		LocationIcons,
	} from '$lib/client/modules/frontier/locations';
	import { monsterInfo } from '$lib/client/modules/frontier/monsters';
	import { gameInfo } from '$lib/client/modules/frontier/objects';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import OrderedList from 'carbon-components-svelte/src/OrderedList/OrderedList.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import Youtube from 'svelte-youtube-embed';
	import { onMount } from 'svelte';
	import mermaid from 'mermaid';
	import { browser } from '$app/environment';
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
	import Information from 'carbon-icons-svelte/lib/Information.svelte';
	import ToolKit from 'carbon-icons-svelte/lib/ToolKit.svelte';
	import { getContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import type { FrontierWeaponMove } from '$lib/client/modules/frontier/types';
	import { SvelteFlowProvider, type Edge, type Node } from '@xyflow/svelte';
	import SvelteFlowElk from '$lib/client/components/SvelteFlowElk.svelte';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	const edgeType = 'bezier';
	const edgeDataStyle: string = 'stroke: var(--ctp-blue);';

	const hidenSkills: {
		id: string;
		skill: FrontierArmorSkillName;
		points: string;
		description: string;
	}[] = [
		{
			id: '4',
			skill: 'Magspike Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description:
				'Sharpness level +1 is added to Magspike Tech 【Magnetic Star】.',
		},
		{
			id: '3',
			skill: 'Magspike Tech 【Magnetic Star】',
			points: '30',
			description: `Increases attack by 1.2, grants Fencing+1 and Super High-Grade Earplugs when wielding a Magnet Spike. Successful evasive motions boost attacks by 1.03 and  increases gauge recovery by 1.5 for 30 seconds. Increases movement speed by 1.2. Magnetic target marker does not disappear.`,
		},
		{
			id: '2',
			skill: 'Magspike Tech Kaiden',
			points: '20',
			description:
				'Increases attack by 1.1 and grants Fencing+1 when wielding a Magnet Spike.',
		},
		{
			id: '1',
			skill: 'Magspike Tech Expert',
			points: '10',
			description: 'Fencing+1 when wielding a Magnet Spike.',
		},
		{
			id: '0',
			skill: 'Magspike Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding a Magnet Spike.',
		},
	];

	const iframes = [
		{
			id: '0',
			motion: 'Magnetic Attraction',
			iframes: '17',
			mode: 'Cutting',
		},
		{
			id: '1',
			motion: 'Magnetic Repulsion',
			iframes: '24',
			mode: 'Cutting',
		},
		{
			id: '2',
			motion: 'Falling Slash',
			iframes: '?',
			mode: 'Cutting',
		},
		{
			id: '3',
			motion: 'Magnetic Evasion',
			iframes: '17',
			mode: 'Cutting',
		},
		{
			id: '4',
			motion: 'Retreat Slash',
			iframes: '17',
			mode: 'Cutting',
		},
		{
			id: '5',
			motion: 'Magnetic Assault',
			iframes: '17',
			mode: 'Cutting',
		},
		{
			id: '6',
			motion: 'Magnetic Double Slash',
			iframes: '17',
			mode: 'Cutting',
		},
		{
			id: '7',
			motion: 'Magnetic Attraction',
			iframes: '17',
			mode: 'Impact',
		},
		{
			id: '8',
			motion: 'Magnetic Repulsion',
			iframes: '24',
			mode: 'Impact',
		},
		{
			id: '9',
			motion: 'Falling Swipe',
			iframes: '?',
			mode: 'Impact',
		},
		{
			id: '10',
			motion: 'Just Guard',
			iframes: '19',
			mode: 'Impact',
		},
		{
			id: '11',
			motion: 'Guard Assault',
			iframes: '17',
			mode: 'Impact',
		},
		{
			id: '12',
			motion: 'Magnetic Force',
			iframes: '17',
			mode: 'Impact',
		},
		{
			id: '13',
			motion: 'Magnetic Evasion',
			iframes: '17',
			mode: 'Impact',
		},
		{
			id: '14',
			motion: 'Magnetic Assault',
			iframes: '17',
			mode: 'Impact',
		},
		{
			id: '15',
			motion: 'Magnetic Double Slash',
			iframes: '17',
			mode: 'Impact',
		},
	];

	const moveset: FrontierWeaponMove[] = [
		{
			name: 'Magnetic Marker',
			controls: ['L2', 'Circle'],
			state: 'Magnetic Field',
			connectsTo: ['Magnetic Attraction'],
		},
		{
			name: 'Magnetic Attraction',
			controls: ['L2', 'Triangle'],
			state: 'Magnetic Field',
			frames: 17,
			connectsTo: ['Falling Slash/Swipe', 'Approach Cancel'],
		},
		{
			name: 'Magnetic Repulsion',
			controls: ['L2', 'Cross'],
			state: 'Magnetic Field',
			frames: 24,
			connectsTo: ['Magnetic Attraction'],
		},
		{
			name: 'Falling Slash/Swipe',
			controls: ['Triangle'],
			state: 'Magnetic Field',
			connectsTo: [],
		},
		{
			name: 'Approach Cancel',
			controls: ['Cross'],
			state: 'Magnetic Field',
			connectsTo: [],
		},

		// Cutting Mode - Basic Moves
		{
			name: 'Vertical 1',
			controls: ['Triangle'],
			state: 'Cutting',
			connectsTo: ['Upslash', 'Horizontal 1C'],
		},
		{
			name: 'Upslash',
			controls: ['Triangle'],
			state: 'Cutting',
			connectsTo: ['Vertical 2', 'Horizontal 1C'],
		},
		{
			name: 'Vertical 2',
			controls: ['Triangle'],
			state: 'Cutting',
			connectsTo: ['Horizontal 2C', 'Horizontal 3C'],
		},
		{
			name: 'Horizontal 1C',
			controls: ['Circle'],
			state: 'Cutting',
			connectsTo: ['Horizontal 2C', 'Vertical 1'],
		},
		{
			name: 'Horizontal 2C',
			controls: ['Circle'],
			state: 'Cutting',
			connectsTo: ['Horizontal 3C', 'Vertical 2'],
		},
		{
			name: 'Horizontal 3C',
			controls: ['Circle'],
			state: 'Cutting',
			connectsTo: ['Finishing Slash', 'Horizontal 1C', 'Vertical 2'],
		},

		// Cutting Mode - Special Moves
		{
			name: 'Guard Counter',
			controls: ['R1'],
			state: 'Cutting',
			connectsTo: ['Finishing Slash'],
		},
		{
			name: 'Finishing Slash',
			controls: ['Circle', 'Triangle'],
			state: 'Cutting',
			connectsTo: [],
		},
		{
			name: 'Magnetic Evade',
			controls: ['R1', 'Square'],
			state: 'Cutting',
			frames: 17,
			connectsTo: [],
		},
		{
			name: 'Retreat Slash',
			controls: ['R1', 'Cross'],
			state: 'Cutting',
			frames: 17,
			connectsTo: [],
		},
		{
			name: 'Magnetic Assault (Cutting)',
			controls: ['R1', 'Circle', 'Triangle'],
			state: 'Cutting',
			frames: 17,
			connectsTo: [],
		},
		{
			name: 'Magnetic Double Slash',
			controls: ['R1', 'Triangle'],
			state: 'Cutting',
			frames: 17,
			connectsTo: ['Magnetic Pin'],
		},

		// Impact Mode - Basic Moves
		{
			name: 'Horizontal 1I',
			controls: ['LS', 'Circle'],
			state: 'Impact',
			connectsTo: ['Horizontal 2I', 'Downswipe'],
		},
		{
			name: 'Horizontal 2I',
			controls: ['Circle'],
			state: 'Impact',
			connectsTo: ['Overhead Horizontal', 'Downswipe', 'Triple Slash 1'],
		},
		{
			name: 'Overhead Horizontal',
			controls: ['LS', 'Circle', 'Triangle'],
			state: 'Impact',
			connectsTo: ['Suplex', 'Horizontal 1I', 'Downswipe'],
		},
		{
			name: 'Downswipe',
			controls: ['Triangle'],
			state: 'Impact',
			connectsTo: ['Triple Slash 1', 'Overhead Horizontal'],
		},
		{
			name: 'Charged Slash',
			controls: ['Circle'],
			state: 'Impact',
			connectsTo: ['Suplex'],
		},
		{
			name: 'Triple Slash 1',
			controls: ['Circle'],
			state: 'Impact',
			connectsTo: ['Triple Slash 2'],
		},
		{
			name: 'Triple Slash 2',
			controls: ['Circle'],
			state: 'Impact',
			connectsTo: ['Triple Slash 3', 'Charged Slash'],
		},
		{
			name: 'Triple Slash 3',
			controls: ['Circle'],
			state: 'Impact',
			connectsTo: ['Suplex'],
		},

		// Impact Mode - Special Moves
		{
			name: 'Just Guard',
			controls: ['R2'],
			state: 'Impact',
			frames: 19,
			connectsTo: ['Guard Assault'],
		},
		{
			name: 'Guard Assault',
			controls: ['Triangle'],
			state: 'Impact',
			frames: 17,
			connectsTo: [],
		},
		{
			name: 'Magnetic Double S.',
			controls: ['L2', 'Triangle'],
			state: 'Impact',
			frames: 17,
			connectsTo: ['Magnetic Pin', 'Suplex'],
		},
		{
			name: 'Magnetic Force',
			controls: ['Circle', 'Triangle'],
			state: 'Impact',
			frames: 17,
			connectsTo: ['Suplex'],
		},
		{
			name: 'Magnetic Assault',
			controls: ['R1', 'Circle', 'Triangle'],
			state: 'Impact',
			frames: 17,
			connectsTo: ['Suplex'],
		},
		{
			name: 'Magnetic Evasion',
			controls: ['R1', 'Square'], // R1 + (Circle | Triangle | Square)
			state: 'Impact',
			frames: 17,
			connectsTo: ['Magnetic Force'],
		},
		{
			name: 'Suplex',
			controls: ['Circle', 'Triangle'],
			state: 'Impact',
			connectsTo: [],
		},

		// Shared Moves
		{
			name: 'Transform Attack',
			controls: ['Select'],
			connectsTo: [
				'Horizontal 1C',
				'Horizontal 2C',
				'Horizontal 3C',
				'Horizontal 1I',
				'Horizontal 2I',
				'Overhead Horizontal',
			],
		},
		{
			name: 'Switch',
			controls: ['Select'],
			connectsTo: [],
		},
		{
			name: 'Magnetise',
			controls: ['R1', 'Select'],
			connectsTo: [],
		},
		{
			name: 'Magnetic Pin',
			controls: ['R1', 'Circle', 'Triangle'],
			connectsTo: ['Pin Finisher'],
		},
		{
			name: 'Pin Finisher',
			controls: ['R2'],
			connectsTo: [],
		},
		{
			name: 'Recovery',
			controls: ['Cross'],
			connectsTo: [],
		},
		{
			name: 'Unsheathed Running',
			controls: ['LS'],
			connectsTo: [],
		},
	];

	function getDiagram(mermaidTheme: string) {
		return `\
	%%{init: {'theme':'${mermaidTheme}'}}%%

graph LR
    subgraph Cutting[Cutting Mode]
				subgraph CuttingMagneticField[Magnetic Field]
					A[Magnetic Marker]
					B[Magnetic Attraction] -->|falling| D[Falling Slash]
					B -->|falling| E[Approach Cancel]
					C[Magnetic Repulsion] --> B
				end

        F[Vertical 1] --> G[Upslash]
        G --> H[Vertical 2]
        I[Horizontal 1] --> J[Horizontal 2]
        J --> K[Horizontal 3]
				F <--> I
				G --> I
				J --> H
				K <--> H
				K --> I

				CuttingGuard[Guard Counter] --> CuttingFinish[Finishing Slash]
				CuttingMagnetize[Magnetize]
				K --> CuttingFinish
				H --> CuttingFinish
				CuttingEvasion[Magnetic Evasion]
				CuttingRetreat[Retreat Slash]
				CuttingAssault[Magnetic Assault]
				CuttingDouble[Magnetic Double Slash]

				CuttingAssault --> G
    end

		subgraph Impact[Impact Mode]
			subgraph ImpactMagneticField[Magnetic Field]
        O[Magnetic Marker]
        P[Magnetic Attraction] -->|falling| R[Falling Swipe]
				P -->|falling| S[Approach Cancel]
        Q[Magnetic Repulsion] --> P
			end

        T[Horizontal 1] --> U[Horizontal 2]
        U --> V[Overhead Horizontal]
        V --> W[Suplex]

				Z[Triple Slash 1] --> AA[Triple Slash 2]
        AA --> AB[Triple Slash 3]


        X[Downswipe] <--> V
				X --> Z
				T --> X
				U --> Z
				U <--> X


        AC[Magnetize]
				ImpactGuard[Guard Assault]
				ImpactJustGuard[Just Guard]
        AD[Magnetic Double Slash] --> W
				AE[Magnetic Force] --> W
				ImpactEvasion[Magnetic Evasion] --> AE
				ImpactAssault[Magnetic Assault] --> W

				V --> T
				AB --> W
				ImpactJustGuard --> ImpactGuard
				AA -->|timed release| Y
				Y[Charged Slash] --> W
    end

		L[Transform Attack] --> I
		L --> J
		L --> K
		L --> T
		L --> U
		L --> V
		M[Switch] --> Cutting
		M[Switch] --> Impact
		N[Magnetic Pin]
		AD --> N
		H --> F
		CuttingDouble --> N

		AF[Recovery]
		Run[Unsheated Running]
		PinFinisher[Pin Finisher]
		N --> PinFinisher
`;
	}

	let container: { innerHTML: string };

	let mermaidTheme = $carbonThemeStore === 'g10' ? 'default' : 'dark';

	// The default diagram
	let diagram = getDiagram(mermaidTheme);

	$: diagram && renderDiagram($carbonThemeStore, mermaidTheme);

	onMount(() => {
		mermaid.initialize({
			startOnLoad: false,
			flowchart: { useMaxWidth: false },
			fontFamily: 'IBM Plex Sans',
		});
		mermaid.contentLoaded();
	});

	async function renderDiagram(siteTheme: string, mermaidTheme: string) {
		if (!browser) return;
		mermaidTheme = siteTheme === 'g10' ? 'default' : 'dark';
		const { svg } = await mermaid.render('mermaid', getDiagram(mermaidTheme));
		container.innerHTML = svg;
	}

	const skillInteractions: {
		id: number;
		skill: FrontierArmorSkillTree;
		description: string;
	}[] = [
		{
			id: 0,
			skill: 'Dissolver',
			description:
				'Adjusts the element hitzones by +15. Determination applies the effects of Dissolver without the need for hitzone requirements, effectively forcing element damage or reducing/negating negative hitzones.',
		},
		{
			id: 1,
			skill: 'Vampirism',
			description:
				'+6 True Raw per hit. Up to 80 True Raw can be gained through leeching.',
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
				'+10 sharpness recovery (+9 with Magnetic Evade). When using Stylish Up, get 3 free hits before sharpness is reduced.',
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
				'Max stack of 225 True Raw. Obscurity Up maxes out after two perfect guards, allowing subsequent guards to restore 5 or 10 sharpness depending on timing.',
		},
		{
			id: 6,
			skill: 'Ice Age',
			description:
				'1/10/22 hits to reach stage 1/2/3 respectively. All weapons share the same stage decay timer; Ice Age Up only affects the third stage’s decay rate.',
		},
		{
			id: 7,
			skill: 'Rush',
			description:
				'?/?/? total Motion Value to reach stage 1/2/3 respectively. The third stage, exclusive to Rush Up, has a limited duration.',
		},
		{
			id: 8,
			skill: 'Ceaseless',
			description:
				'12 seconds decay window. 11/30/38 hits required to reach stage 1/2/3 respectively (8/23/38 with Ceaseless Up). The third stage is also exclusive to Ceaseless Up, which decays by stages rather than all at once.',
		},
		{
			id: 9,
			skill: 'Point Breakthrough',
			description:
				'40 seconds duration. 7/5 hits to reach stages 1/2 respectively (6/4 with Fencing+2). The previously hit hitzone is more vulnerable at Stage 2, and Fencing +2 slightly eases activation.',
		},
		{
			id: 10,
			skill: 'Furious',
			description:
				'1/3/6 evasions or perfect guards to reach stage 1/2/3 respectively. These effects apply to both successful evasions and perfect guards (where applicable), but attacking is necessary to advance stages.',
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
			id: 5,
			sigil: 'Stun Value',
			rating: 2,
			description:
				'Increases KO damage by 1.1x. Only one sigil applies. Stacks with Caravan Skill (1.1x) and Active Feature (1.5x) for a maximum of 1.815x. Useful when using Impact Mode.',
			type: 'Other',
		},
	];

	function getControlGlyph(control: string) {
		switch (control) {
			default:
				return control;
			case 'Triangle':
				return '△';
			case 'Circle':
				return '◯';
			case 'Cross':
				return 'X';
			case 'Square':
				return '◻';
		}
	}

	function getWeaponMoveTags(move: FrontierWeaponMove) {
		let result: { text: string; icon: any; color: string }[] = [];

		if (move.state) {
			result.push({ text: move.state, icon: '', color: 'blue' });
		}

		if (move.controls[0] !== '') {
			result.push({
				text: move.controls.map((e) => getControlGlyph(e)).join('+'),
				icon: '',
				color: 'outline',
			});
		}

		if (move.frames) {
			result.push({
				text: move.frames.toString() + 'f',
				icon: '',
				color: 'green',
			});
		}

		return result;
	}

	function generateWeaponMovesetData(moveset: FrontierWeaponMove[]) {
		const nodeData: Node[] = [];
		const edgeData: Edge[] = [];
		const weaponMap = new Map<string, number>();

		// // Get unique states from moveset
		// const states = Array.from(
		// 	new Set(
		// 		moveset
		// 			.map((move) => move.state)
		// 			.filter((state): state is string => state !== undefined),
		// 	),
		// );
		// // Create parent nodes for each state
		// const parentNodes: Node[] = states.map((state) => ({
		// 	id: state,
		// 	type: 'group',
		// 	data: {},
		// 	position: { x: 0, y: 0 },
		// }));

		// Add parent nodes to the beginning of nodeData
		// nodeData.push(...parentNodes);

		moveset.forEach((weapon, index) => {
			const nodeIndex = index + 1;
			weaponMap.set(weapon.name, nodeIndex);

			const isEndNode = weapon.connectsTo.length === 0;
			const isStartNode = !moveset.some((w) =>
				w.connectsTo.includes(weapon.name),
			);

			let nodeType = 'default-horizontal';
			if (isEndNode) nodeType = 'output-horizontal';
			if (isStartNode) nodeType = 'input-horizontal';

			const node: Node = {
				id: `node-${nodeIndex}`,
				type: 'inline-tooltip',
				data: {
					tooltip: writable(weapon.connectsTo.join(', ')),
					text: writable(weapon.name),
					icon: writable(getWeaponIcon('Magnet Spike')),
					iconColor: writable(getItemColor('White')),
					iconType: writable('component'),
					nodeType: writable(nodeType),
					tags: writable(getWeaponMoveTags(weapon)),
					backgroundColor: writable('var(--surface0)'),
				},
				// parentId: weapon.state || undefined,
				// extent: weapon.state ? 'parent' : undefined,
				position: { x: 0, y: 0 }, // Positions will be handled externally
			};

			nodeData.push(node);
		});

		moveset.forEach((weapon) => {
			const sourceIndex = weaponMap.get(weapon.name);

			if (sourceIndex === undefined) return;

			weapon.connectsTo.forEach((targetName) => {
				const targetIndex = weaponMap.get(targetName);

				if (targetIndex === undefined) {
					console.warn(`Target weapon not found: ${targetName}`);
					return;
				}

				const edge: Edge = {
					id: `edge-${sourceIndex}-${targetIndex}`,
					source: `node-${sourceIndex}`,
					target: `node-${targetIndex}`,
					type: edgeType,
					animated: true,
					style: edgeDataStyle,
				};
				edgeData.push(edge);
			});
		});

		return { nodeData, edgeData };
	}

	const weaponMovesetData = generateWeaponMovesetData(moveset);

	const nodeData: Node[] = weaponMovesetData.nodeData;
	const edgeData: Edge[] = weaponMovesetData.edgeData;
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Magnet Spike'} />
		<div>
			<div class="video">
				<Youtube id="rqfFAXVW-dw" />
			</div>
			<p class="spaced-paragraph">
				A versatile weapon, first introduced in <InlineTooltip
					tooltip="Game"
					text="Monster Hunter Frontier Z Zenith"
					iconType="file"
					icon={gameInfo.find(
						(e) => e.name === 'Monster Hunter Frontier Z Zenith',
					)?.icon}
				/>, with two modes: cutting and impact. Each mode deals the
				corresponding type of damage and have different reach. The key feature
				of the <InlineTooltip
					tooltip="Weapon"
					text="Magnet Spike"
					iconType="component"
					icon={getWeaponIcon('Magnet Spike')}
				/> is its magnetism abilities, derived from the large red and blue phials
				inside the weapon. Despite being a large and heavy weapon, the manipulation
				of magnetic forces lifts most of the weight, allowing for unnaturally fast
				movement.
			</p>
			<p class="spaced-paragraph">
				Resembling the magnetic abilities of a <InlineTooltip
					tooltip="Monster"
					text="Rukodiora"
					iconType="file"
					icon={monsterInfo.find((e) => e.displayName === 'Rukodiora')?.icon}
				/>, the <InlineTooltip
					tooltip="Weapon"
					text="Magnet Spike"
					iconType="component"
					icon={getWeaponIcon('Magnet Spike')}
				/> can quickly close or create distances using attraction and repulsion forces,
				with well-timed evades for counterattacks and guard points to create greater
				openings. Unlike other form-changing weapons like the <InlineTooltip
					tooltip="Weapon"
					text="Switch Axe F"
					iconType="component"
					icon={getWeaponIcon('Switch Axe F')}
				/> and Charge Blade, the <InlineTooltip
					tooltip="Weapon"
					text="Magnet Spike"
					iconType="component"
					icon={getWeaponIcon('Magnet Spike')}
				/> can use most of its moveset in either form at any time, allowing the user
				to choose the most useful form as needed.
			</p>
			<p class="spaced-paragraph">
				The user is also equipped with a "Magnetic Field Gun", which fires a
				small magnetic sphere that sticks to monsters. This allows the user to
				lock onto a specific location and use magnetic attraction to travel from
				a much greater distance or use repulsion force for a long-distance
				evade.
			</p>
			<p class="spaced-paragraph">
				<InlineTooltip
					tooltip="Weapon"
					text="Magnet Spikes"
					iconType="component"
					icon={getWeaponIcon('Magnet Spike')}
				/> do not have any non-standard elements compared to other weapons; they
				lack phials and length. Their attack multiplier is 5.4, rounded up.
			</p>
			<section>
				<SectionHeading level={2} title="Unlocking" />
				<div>
					<p class="spaced-paragraph">
						To unlock <InlineTooltip
							icon={getWeaponIcon('Magnet Spike')}
							tooltip="Weapon"
							text="Magnet Spikes"
							iconType="component"
						/>, you must complete a series of solo-only G Rank quests. These
						quests are not particularly difficult, but you might need the first
						free GR set to finish them efficiently. Here's a brief guide to the
						unlocking process:
					</p>
					<OrderedList class="spaced-list">
						<ListItem
							><p>
								Talk to the <InlineTooltip
									icon={LocationIcons.find((e) => e.name === 'Blacksmith')
										?.icon}
									tooltip="Location"
									text="Smithy"
									iconType="file"
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								Visit the <InlineTooltip
									icon={LocationIcons.find((e) => e.name === 'Rasta Bar')?.icon}
									tooltip="Location"
									text="Rasta Bar"
									iconType="file"
								/> and speak with the NPC equipped with a Magnet Spike, Graham.
							</p></ListItem
						>
						<ListItem
							><p>
								Talk to the Apprentice Cat found at the entrance of <InlineTooltip
									icon={LocationIcons.find((e) => e.name === 'Mezeporta')?.icon}
									tooltip="Location"
									text="Mezeporta"
									iconType="file"
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								Go back and talk to Graham, then talk to the combiner in the
								town square.
							</p></ListItem
						>
						<ListItem
							><p>
								Speak with Graham again, then the combiner in the town square.
							</p></ListItem
						>
						<ListItem
							><p>
								Talk to the G Rank quest receptionist, giving you a quest to
								hunt G Rank <InlineTooltip
									icon={monsterInfo.find((e) => e.name === 'Gougarf')?.icon}
									tooltip="Monster"
									text="Gougarf"
									iconType="file"
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								Talk to Graham again then the combiner found by the store.
							</p></ListItem
						>
						<ListItem
							><p>
								Hunt the <InlineTooltip
									icon={monsterInfo.find((e) => e.displayName === 'Rebidiora')
										?.icon}
									tooltip="Monster"
									text="Rebidiora"
									iconType="file"
								/> at the top of the quest list.
							</p></ListItem
						>
						<ListItem
							><p>
								Talk to Graham, then <InlineTooltip
									icon={LocationIcons.find((e) => e.name === 'Blacksmith')
										?.icon}
									tooltip="Location"
									text="Smithy"
									iconType="file"
								/>, then Graham again, then the <InlineTooltip
									icon={LocationIcons.find((e) => e.name === 'Road')?.icon}
									tooltip="Location"
									text="Road"
									iconType="file"
								/> quest receptionist.
							</p></ListItem
						>
						<ListItem
							><p>
								Post the GHC <InlineTooltip
									icon={monsterInfo.find((e) => e.displayName === 'Rukodiora')
										?.icon}
									tooltip="Monster"
									text="Rukodiora"
									iconType="file"
								/> quest and hunt it.
							</p></ListItem
						>
						<ListItem
							><p>
								Talk to Graham and then the <InlineTooltip
									icon={LocationIcons.find((e) => e.name === 'Blacksmith')
										?.icon}
									tooltip="Location"
									text="Smithy"
									iconType="file"
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								After all that you’ve unlocked magnet spike! 🎉 You should get a
								material to make the <InlineTooltip
									icon={getWeaponIcon('Magnet Spike')}
									tooltip="Weapon"
									text="Protospike α"
									iconType="component"
								/> Magnet Spike.
							</p></ListItem
						>
					</OrderedList>
					<div class="weapon-container">
						<Weapon
							name="Protospike α"
							level={0}
							sharpnessBoost={false}
							weaponType="G Rank"
							weaponID={13}
							attack={2970}
							length="Medium"
							affinity={36}
							rarity={9}
							element=""
							sigils={[
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
							]}
							sigilPoints={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
							rank="G"
							status=""
							sharpnessValues={[100, 100, 100, 130, 160, 230, 310, 310]}
						/>
					</div>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Usage" />
				<div>
					<p class="spaced-paragraph">
						The Magnet Spike's magnetism grants it high versatility and a high
						skill ceiling. While most actions are shared between both forms,
						some offer unique options. Attacking with this weapon gradually
						magnetizes it, entering a "Magnetic Boost" state that increases
						attack power. Landing attacks also magnetizes monsters; once fully
						magnetized, the "Magnetic Bind" attack can be used. This binds the
						monster in a strong magnetic field, with the hunter sustaining the
						field by repeatedly pressing select buttons. Holding it long enough
						allows for a powerful finishing attack.
					</p>
					<p class="spaced-paragraph">
						Magnet Spikes feature two modes: Cutting and Impact. You can switch
						between these modes at any time, even while unsheathed. Each mode
						has its own attack style:
					</p>
					<UnorderedList>
						<ListItem
							><p>
								<strong>Cutting Mode:</strong> Fast attacks and evasions similar
								to <InlineTooltip
									icon={getWeaponIcon('Dual Swords')}
									tooltip="Weapon"
									text="Dual Swords"
									iconType="component"
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								<strong>Impact Mode:</strong>
								Slower, heavy-hitting single attacks with quick swipes and a fast
								charge.
							</p></ListItem
						>
					</UnorderedList>
					<p class="spaced-paragraph">
						At any time in either mode, you can toggle aiming mode, which allows
						you to shoot a Magnetic Marker on a monster or attract toward or
						repel away from an already placed marker.
					</p>

					<CenteredFigure
						figcaption="The markers from left to right: Unmarked, repulsion, attraction."
						alt="Magnet Spike markers"
						type="file"
						width="100%"
						src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/ms-markers.webp'}
					/>
					<CenteredFigure
						figcaption="A marked Pokara."
						alt="Magnet Spike mark"
						type="file"
						width="100%"
						src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/ms-mark.webp'}
					/>
					<p class="spaced-paragraph">
						Whether you attract or repel depends on your distance from the
						monster. If you are too close, you can only repel (Blue). If you are
						too far, no action is possible (White). Being at the proper distance
						allows you to attract (Red). Attraction will chase the monster as
						long as you follow a linear path toward it and can be canceled into
						an evade or a powerful falling attack.
					</p>

					<CenteredFigure
						figcaption="The gauges from top to bottom: repulsion, attraction, not attracted."
						alt="Magnet Spike gauges"
						type="file"
						width="100%"
						src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/ms-gauges.webp'}
					/>

					<p class="spaced-paragraph">
						Both modes charge as you use them. When their icon turns red, you
						can magnetize the weapon, which buffs all attacks by 1.1x, similar
						to a power phial, and adds additional hits to select attacks for 80
						seconds.
					</p>

					<div>
						{#await import('$lib/player/Player.svelte') then { default: Player }}
							<svelte:component
								this={Player}
								{...{
									title: 'Parry & Magnetize',
									src: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/ms-magnetize.webm',
								}}
							/>
						{/await}
					</div>

					<p class="spaced-paragraph">
						After the magnetism mode expires, you will be locked out of gaining
						progress towards it for a short period. Both modes charge
						independently and can be left at the red charge level indefinitely,
						to be activated whenever you wish.
					</p>
					<p class="spaced-paragraph">
						Each mode has a gauge used for actions such as evasion, attracting
						and repelling from a monster, and initiating the Magnetic Pin attack
						(covered below). This gauge recharges over time and while attacking
						a monster.
					</p>
					<p class="spaced-paragraph">
						The gauge also indicates if you can use the Attract and Repel
						functions, which launch you into the air to chase the magnetic
						marker on a monster. Every action that consumes gauge will use a
						single bar.
					</p>
					<p class="spaced-paragraph">
						The magnetic pin is similar to a standard status effect. If you hit
						the monster with enough attacks, it will get a moving magnetism
						effect on its body, indicating it is ready to be pinned.
					</p>

					<div>
						{#await import('$lib/player/Player.svelte') then { default: Player }}
							<svelte:component
								this={Player}
								{...{
									title: 'Pin Ready',
									src: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/ms-pin-ready.webm',
								}}
							/>
						{/await}
					</div>

					<p class="spaced-paragraph">
						Pinning can be done from either Magnetic Double Slash or Double
						Swipe. This causes you to leap into the air and slam down your
						Magnet Spike, pinning the monster and initiating a Quick Time Event
						that keeps the monster in place until you either perform the pin or
						fail the Quick Time Event.
					</p>

					<p class="spaced-paragraph">
						The Quick Time Event will indicate what you have to mash
						directionally and button-wise. Mashing well enough will cause the
						monster icon's face to turn red, allowing you to perform a Pin
						Finisher. This move has a very high motion value, causes the monster
						to fall over, and extends the time the monster is trapped due to the
						finisher's lengthy animation.
					</p>

					<div>
						{#await import('$lib/player/Player.svelte') then { default: Player }}
							<svelte:component
								this={Player}
								{...{
									title: 'Pin',
									src: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/ms-pin.webm',
								}}
							/>
						{/await}
					</div>

					<p class="spaced-paragraph">
						The finisher is notable because it targets the spot where you have
						attached the magnetic marker. This allows you to select the best
						hitzone or the most desirable parts to break on a monster. For
						tails, this deals cutting damage but can only reduce a tail to 1HP,
						allowing any single cutting damage hit to sever it immediately.
					</p>

					<section>
						<SectionHeading level={3} title="Shared Traits" />
						<div>
							<UnorderedList>
								<ListItem
									><p>
										After using the Magnetic Field Gun on a monster, hunters can
										perform "Magnetic Field Approach" and "Magnetic Field
										Withdrawal" actions in either form to attack or evade over
										great distances.
									</p></ListItem
								>
								<ListItem
									><p>
										Both forms can execute the "Magnetic Force Evade" for quick
										short-distance evasion.
									</p>
								</ListItem>
								<ListItem
									><p>
										"Magnetic Field Assault" is a mid-distance attack that
										launches hunters toward a target.
									</p>
								</ListItem>
								<ListItem
									><p>Guarding and countering are possible in either form.</p>
								</ListItem>
								<ListItem
									><p>
										Attacking in either form contributes to entering the
										Magnetic Boost state and magnetizing monsters.
									</p>
								</ListItem>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Cutting Mode" />
						<div>
							<UnorderedList>
								<ListItem
									><p>
										Two standard 4-hit combos: one focused on vertical swings
										and the other on horizontal swings.
									</p>
								</ListItem>
								<ListItem
									><p>
										The Magnetic Force Evade can be used to evade and attack
										simultaneously with a Double Slash forward or a Fade Slash
										backward. Left and right evasions have no attack actions.
									</p>
								</ListItem>
								<ListItem
									><p>
										Hunters can guard at any point, automatically performing a
										light counter hit.
									</p>
								</ListItem>
								<ListItem
									><p>
										Guarding a monster attack charges the Magnet Spike and
										boosts the counter hit.
									</p>
								</ListItem>
								<ListItem
									><p>
										Magnetic Bind is usable once a monster is fully magnetized.
									</p>
								</ListItem>
							</UnorderedList>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Impact Mode" />
						<div>
							<UnorderedList>
								<ListItem
									><p>
										A standard 4-hit combo consisting of slow, wide swings that
										end with a suplex, which can also be used as a standalone
										attack.
									</p>
								</ListItem>
								<ListItem
									><p>
										A triple pound attack that can be initiated from idle or
										mid-combo.
									</p>
								</ListItem>
								<ListItem
									><p>
										The Magnetic Force Evade can be used to evade and attack
										simultaneously when performed in front of the hunter. A
										counterattack can be launched after evading to the side or
										behind.
									</p>
								</ListItem>
								<ListItem
									><p>
										Evading a monster attack charges up for a stronger
										counterattack.
									</p>
								</ListItem>
								<ListItem
									><p>
										Performing a well-timed guard charges the Magnet Spike for a
										powerful counterattack.
									</p>
								</ListItem>
							</UnorderedList>
						</div>
					</section>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Moveset" />
				<div>
					<p class="spaced-paragraph">
						The flowchart below is based on the official manual. When hovering
						over a move, you can see the available moves from it.
					</p>
					<div>
						<SvelteFlowProvider
							><SvelteFlowElk
								fileName="magnet-spike-moveset"
								initialNodes={nodeData}
								initialEdges={edgeData}
								colorMode={$carbonThemeStore === 'g10' ? 'light' : 'dark'}
							/></SvelteFlowProvider
						>
					</div>
					<p>
						For more information on motion values, see the <Link
							inline
							href="/tools/calculator/damage">Damage Calculator.</Link
						>
					</p>
					<section>
						<SectionHeading level={3} title="Iframes" />
						<div>
							<p class="spaced-paragraph">
								Cutting Mode moves with invincibility frames: Magnetic Double
								Slash, Retreat Slash, Magnetic Assault and Falling Downslash.
							</p>
							<p class="spaced-paragraph">
								Impact Mode moves with invincibility frames: Guard Assault,
								Magnetic Double Swipe, Magnetic Assault and Falling Swipe.
							</p>
							<div class="table">
								<DataTable
									useStaticWidth
									id="iframes-dom"
									sortable
									zebra
									size="medium"
									headers={[
										{ key: 'motion', value: 'Motion' },
										{ key: 'iframes', value: 'I-frames' },
										{ key: 'mode', value: 'Mode' },
									]}
									rows={iframes}
									><Toolbar
										><div class="toolbar">
											<CopyButton
												iconDescription={'Copy as CSV'}
												text={getCSVFromArray(iframes)}
											/>
											<Button
												kind="tertiary"
												icon={Download}
												on:click={() =>
													downloadDomAsPng(
														'iframes-dom',
														'magnet-spike-iframes',
													)}>Download</Button
											>
										</div>
									</Toolbar>

									<svelte:fragment slot="cell" let:cell>
										<p>{cell.value}</p>
									</svelte:fragment>
								</DataTable>
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
						</div>
					</section>
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
						Increases Pin finisher multiplier by 1.25x (from 600 motion value to
						750 motion value). x1.1 Cutting damage to the tail in cutting mode.
						x1.3 Stun value in impact mode.
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
									on:click={() =>
										downloadDomAsPng('hiden-dom', 'magnet-spike-hiden')}
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
								The pin attack applies damage to the spot where you've placed a
								marker on a monster, allowing for quicker part breaks.
							</p></ListItem
						>
						<ListItem
							><p>
								The reliability of pinning depends on the current area host. If
								you are not the host, there is a chance it can fail. NPCs are
								tied to their host player in this context.
							</p></ListItem
						>
						<ListItem
							><p>
								Pay attention to whether you are running unsheathed, as this can
								limit your attack options.
							</p></ListItem
						>
						<ListItem
							><p>
								Falling attacks via magnetic attraction have generous motion
								values and invincibility frames (i-frames).
							</p></ListItem
						>
						<ListItem
							><p>
								Basic cutting attacks have a large window between each, allowing
								for roll cancellations or delayed attacks.
							</p></ListItem
						>
						<ListItem
							><p>
								The cutting mode's guard motion acts as a guard point attack. It
								can chain into the Finishing Slash, a magnetic dodge for more
								intangibility, or another guard attack.
							</p></ListItem
						>
						<ListItem
							><p>
								The impact mode's guard has fixed knockback. The rebounding
								attack is similar to Magnetic Assault but doesn’t chain into any
								meter attacks. It can be roll canceled and has i-frames.
							</p></ListItem
						>
						<ListItem
							><p>
								There is an official second control bindings menu for the
								weapon, but only the approach cancel is bound by default for PSP
								controls in that menu.
							</p></ListItem
						>
						<ListItem
							><p>
								The <InlineTooltip
									tooltip="Weapon"
									text="Magnet Spike"
									icon={getWeaponIcon('Magnet Spike')}
									iconType="component"
								/> lacks an elemental multiplier for <InlineTooltip
									tooltip="Armor Skill"
									text="Charge Attack Up"
									icon={getItemIcon('Jewel')}
									iconType="component"
								/>. The skill only significantly boosts the impact charged
								strike.
							</p></ListItem
						>
						<ListItem
							><p>
								Due to the ample amount of innate i-frames, it can be practical
								to forgo a source of <InlineTooltip
									tooltip="Armor Skill"
									text="Evasion+2"
									icon={getItemIcon('Jewel')}
									iconType="component"
								/> entirely.
							</p></ListItem
						>
						<ListItem
							><p>
								There are no Magnet Spike-specific sigils outside of Unlimited
								(UL) sigils. The <InlineTooltip
									tooltip="Sigil Skill"
									text="Stun"
									icon={getItemIcon('Sigil')}
									iconType="component"
								/> sigil can be relevant for Impact Mode centric runs.
							</p></ListItem
						>
						<ListItem
							><p>
								The Magnetic Pin Finisher attack presents the highest motion
								value in the game, at 600 without Active Feature and 750 with
								Active Feature.
							</p></ListItem
						><ListItem
							><p>
								This weapon type is generally seen in <InlineTooltip
									tooltip="Location"
									text="Hunter's Road"
									icon={getLocationIcon('Road')}
									iconType="file"
								/> teams. It is common for teams to use multiple Magnet Spikes.
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

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.weapon-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.weapon-description {
		display: flex;
		flex-direction: column; /* Stacks children vertically */
		gap: 2rem;
	}

	.weapon-container {
		display: flex;
		justify-content: center;
	}

	.video {
		width: 80%;
		margin: 0 auto;
		margin-bottom: 2rem;
	}

	.mermaid-container {
		max-width: 80vw;
		overflow-x: auto;
		margin: 0 auto;
		margin-bottom: 2rem;
		margin-top: 2rem;
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
