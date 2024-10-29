<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import type { PartnerSkill } from '$lib/client/modules/frontier/types';
	import Tile from 'carbon-components-svelte/src/Tile/Tile.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	import Grid from 'carbon-components-svelte/src/Grid/Grid.svelte';
	import Row from 'carbon-components-svelte/src/Grid/Row.svelte';
	import Column from 'carbon-components-svelte/src/Grid/Column.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Pagination from 'carbon-components-svelte/src/Pagination/Pagination.svelte';
	import Locked from 'carbon-icons-svelte/lib/Locked.svelte';
	import Unlocked from 'carbon-icons-svelte/lib/Unlocked.svelte';
	import AddAlt from 'carbon-icons-svelte/lib/AddAlt.svelte';
	import Delete from 'carbon-icons-svelte/lib/Delete.svelte';
	import { Download } from 'carbon-icons-svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import { writable, type Writable } from 'svelte/store';
	import {
		getItemColor,
		getItemIcon,
	} from '$lib/client/modules/frontier/items';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import { type Node, type Edge, SvelteFlowProvider } from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';
	import SvelteFlowElk from '$lib/client/components/SvelteFlowElk.svelte';
	import { getHexStringFromCatppuccinColor } from '$lib/client/themes/catppuccin';
	import { tweenColor } from '$lib/client/modules/color-blend';
	import { getRatioForValue } from '$lib/client/modules/math';

	// TODO remove console statements

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	const edgeType = 'bezier';

	const MAX_COST = 260;
	const MAX_SLOTS = 12;

	const skillIndex: PartnerSkill[] = [
		{
			name: {
				en: 'Health+50',
				zh: '體力+50',
			},
			gcp: 6000,
			tree: 'Health',
			cost: 15,
			pr: 50,
			prerequisites: ['Health+40'],
		},
		{
			name: {
				en: 'Health+40',
				zh: '體力+40',
			},
			gcp: 2500,
			tree: 'Health',
			cost: 10,
			pr: 30,
			prerequisites: ['Health+30'],
		},
		{
			name: {
				en: 'Health+30',
				zh: '體力+30',
			},
			gcp: 400,
			tree: 'Health',
			cost: 10,
			pr: 10,
			prerequisites: ['Health+20'],
		},
		{
			name: {
				en: 'Health+20',
				zh: '體力+20',
			},
			gcp: 100,
			tree: 'Health',
			cost: 5,
			pr: 0,
			prerequisites: ['Health+10'],
		},
		{
			name: {
				en: 'Health+10',
				zh: '體力+10',
			},
			tree: 'Health',
			gcp: 10,
			cost: 5,
			pr: 0,
			prerequisites: [],
		},
		{
			name: {
				en: 'Health-10',
				zh: '體力-10',
			},
			gcp: 100,
			tree: 'Health',
			cost: 5,
			pr: 0,
			prerequisites: ['Health+10'],
		},
		{
			name: {
				en: 'Health-20',
				zh: '體力-20',
			},
			gcp: 200,
			tree: 'Health',
			cost: 10,
			pr: 0,
			prerequisites: ['Health-10'],
		},
		{
			name: {
				en: 'Health-30',
				zh: '體力-30',
			},
			gcp: 400,
			tree: 'Health',
			cost: 10,
			pr: 10,
			prerequisites: ['Health-20'],
		},
		{
			name: {
				en: 'Medical Sage',
				zh: '藥草學',
			},
			gcp: 30000,
			tree: 'Herbal Science',
			cost: 30,
			pr: 999,
			prerequisites: ['Speed Eating', 'Wide Area+2', 'Encourage+1'],
		},
		{
			name: {
				en: 'Recovery Items Improved',
				zh: '體力回復道具強化',
			},
			gcp: 4000,
			tree: 'Recovery',
			cost: 15,
			pr: 50,
			prerequisites: ['Health+20'],
		},
		{
			name: {
				en: 'Speed Eating',
				zh: '快吃',
			},
			gcp: 3000,
			tree: 'Eating',
			cost: 10,
			pr: 100,
			prerequisites: ['Health+40', 'Recovery Items Improved'],
		},
		// Offensive Tree

		{
			name: {
				en: 'Strong Attack+5',
				zh: '剛擊+5',
			},
			gcp: 40000,
			tree: 'Strong Attack',
			cost: 40,
			pr: 999,
			prerequisites: ['Strong Attack+4'],
		},
		{
			name: {
				en: 'Strong Attack+4',
				zh: '剛擊+4',
			},
			gcp: 25000,
			tree: 'Strong Attack',
			cost: 30,
			pr: 999,
			prerequisites: ['Strong Attack+3'],
		},
		{
			name: {
				en: 'Strong Attack+3',
				zh: '剛擊+3',
			},
			gcp: 15000,
			tree: 'Strong Attack',
			cost: 20,
			pr: 999,
			prerequisites: ['Strong Attack+2', 'Attack Up Absolute'],
		},
		{
			name: {
				en: 'Strong Attack+2',
				zh: '剛擊+2',
			},
			gcp: 10000,
			tree: 'Strong Attack',
			cost: 15,
			pr: 999,
			prerequisites: ['Strong Attack+1', 'Attack Up Very Large'],
		},
		{
			name: {
				en: 'Strong Attack+1',
				zh: '剛擊+1',
			},
			gcp: 8500,
			tree: 'Strong Attack',
			cost: 15,
			pr: 999,
			prerequisites: ['Attack Up Large'],
		},

		{
			name: {
				en: 'Attack Up Absolute',
				zh: '攻撃力UP [絶大]',
			},
			gcp: 6000,
			tree: 'Attack',
			cost: 20,
			pr: 300,
			prerequisites: ['Attack Up Very Large'],
		},
		{
			name: {
				en: 'Attack Up Very Large',
				zh: '攻撃力UP [特大]',
			},
			gcp: 2500,
			tree: 'Attack',
			cost: 15,
			pr: 100,
			prerequisites: ['Attack Up Large'],
		},
		{
			name: {
				en: 'Attack Up Large',
				zh: '攻撃力UP [大]',
			},
			gcp: 400,
			tree: 'Attack',
			cost: 15,
			pr: 50,
			prerequisites: ['Attack Up Medium'],
		},
		{
			name: {
				en: 'Attack Up Medium',
				zh: '攻撃力UP [中]',
			},
			gcp: 100,
			tree: 'Attack',
			cost: 10,
			pr: 0,
			prerequisites: ['Attack Up Small'],
		},
		{
			name: {
				en: 'Attack Up Small',
				zh: '攻撃力UP [小]',
			},
			gcp: 10,
			tree: 'Attack',
			cost: 5,
			pr: 0,
			prerequisites: [],
		},
		// Expert Series

		{
			name: {
				en: 'Critical Eye+5',
				zh: '看破+5',
			},
			gcp: 6000,
			tree: 'Expert',
			cost: 20,
			pr: 300,
			prerequisites: ['Critical Eye+4'],
		},
		{
			name: {
				en: 'Critical Eye+4',
				zh: '看破+4',
			},
			gcp: 2500,
			tree: 'Expert',
			cost: 15,
			pr: 100,
			prerequisites: ['Critical Eye+3'],
		},
		{
			name: {
				en: 'Critical Eye+3',
				zh: '看破+3',
			},
			gcp: 400,
			tree: 'Expert',
			cost: 15,
			pr: 50,
			prerequisites: ['Critical Eye+2'],
		},
		{
			name: {
				en: 'Critical Eye+2',
				zh: '看破+2',
			},
			gcp: 100,
			tree: 'Expert',
			cost: 10,
			pr: 0,
			prerequisites: ['Critical Eye+1'],
		},
		{
			name: {
				en: 'Critical Eye+1',
				zh: '看破+1',
			},
			gcp: 10,
			tree: 'Expert',
			cost: 5,
			pr: 0,
			prerequisites: [],
		},
		{
			name: {
				en: 'Exploit Weakness',
				zh: '弱點特效',
			},
			gcp: 40000,
			tree: 'Exploit Weakness',
			cost: 40,
			pr: 999,
			prerequisites: ['Sharpness+1', 'Strong Attack+2', 'Focus+2'],
		},
		{
			name: {
				en: 'Status Pursuit',
				zh: '狀態異常追撃',
			},
			gcp: 9500,
			tree: 'Status Assault',
			cost: 40,
			pr: 500,
			prerequisites: [
				'Attack Up Absolute',
				'Status Immunity (Myriad)',
				'Status Attack Up',
			],
		},
		{
			name: {
				en: 'Status Attack Up',
				zh: '狀態異常攻撃強化',
			},
			gcp: 4800,
			tree: 'Status',
			cost: 20,
			pr: 200,
			prerequisites: ['Status Halved', 'Elemental Attack Up'],
		},
		// Elemental Attack Skills

		{
			name: {
				en: 'Fire Attack Large',
				zh: '火屬性攻撃強化 [大]',
			},
			gcp: 800,
			tree: 'Fire Attack',
			cost: 15,
			pr: 30,
			prerequisites: ['Fire Attack Small', 'Fire Res+20'],
		},
		{
			name: {
				en: 'Fire Attack Small',
				zh: '火屬性攻撃強化 [小]',
			},
			gcp: 300,
			tree: 'Fire Attack',
			cost: 10,
			pr: 10,
			prerequisites: ['Fire Res+10'],
		},

		{
			name: {
				en: 'Water Attack Large',
				zh: '水屬性攻撃強化 [大]',
			},
			gcp: 800,
			tree: 'Water Attack',
			cost: 15,
			pr: 30,
			prerequisites: ['Water Attack Small', 'Water Res+20'],
		},
		{
			name: {
				en: 'Water Attack Small',
				zh: '水屬性攻撃強化 [小]',
			},
			gcp: 300,
			tree: 'Water Attack',
			cost: 10,
			pr: 10,
			prerequisites: ['Water Res+10'],
		},

		{
			name: {
				en: 'Thunder Attack Large',
				zh: '雷屬性攻撃強化 [大]',
			},
			gcp: 800,
			tree: 'Thunder Attack',
			cost: 15,
			pr: 30,
			prerequisites: ['Thunder Attack Small', 'Thunder Res+20'],
		},
		{
			name: {
				en: 'Thunder Attack Small',
				zh: '雷屬性攻撃強化 [小]',
			},
			gcp: 300,
			tree: 'Thunder Attack',
			cost: 10,
			pr: 10,
			prerequisites: ['Thunder Res+10'],
		},

		{
			name: {
				en: 'Ice Attack Large',
				zh: '冰屬性攻撃強化 [大]',
			},
			gcp: 800,
			tree: 'Ice Attack',
			cost: 15,
			pr: 30,
			prerequisites: ['Ice Attack Small', 'Ice Res+20'],
		},
		{
			name: {
				en: 'Ice Attack Small',
				zh: '冰屬性攻撃強化 [小]',
			},
			gcp: 300,
			tree: 'Ice Attack',
			cost: 10,
			pr: 10,
			prerequisites: ['Ice Res+10'],
		},

		{
			name: {
				en: 'Dragon Attack Large',
				zh: '龍屬性攻撃強化 [大]',
			},
			gcp: 800,
			tree: 'Dragon Attack',
			cost: 15,
			pr: 30,
			prerequisites: ['Dragon Attack Small', 'Dragon Res+20'],
		},
		{
			name: {
				en: 'Dragon Attack Small',
				zh: '龍屬性攻撃強化 [小]',
			},
			gcp: 300,
			tree: 'Dragon Attack',
			cost: 10,
			pr: 10,
			prerequisites: ['Dragon Res+10'],
		},
		{
			name: {
				en: 'Elemental Attack Up',
				zh: '屬性攻撃強化',
			},
			gcp: 4800,
			tree: 'Elemental Attack',
			cost: 15,
			pr: 200,
			prerequisites: [
				'Fire Attack Large',
				'Water Attack Large',
				'Thunder Attack Large',
				'Ice Attack Large',
				'Dragon Attack Large',
			],
		},
		{
			name: {
				en: 'Bomber',
				zh: '炸彈客',
			},
			gcp: 1000,
			tree: 'Bomb Boost',
			cost: 10,
			pr: 100,
			prerequisites: ['Artillery God'],
		},
		{
			name: {
				en: 'Artillery God',
				zh: '砲術神',
			},
			gcp: 8000,
			tree: 'Gunnery',
			cost: 20,
			pr: 100,
			prerequisites: ['Gunnery', 'Fire Attack Large'],
		},
		{
			name: {
				en: 'Artillery Expert',
				zh: '砲術王',
			},
			gcp: 3500,
			tree: 'Gunnery',
			cost: 15,
			pr: 50,
			prerequisites: ['Gunnery'],
		},
		{
			name: {
				en: 'Gunnery',
				zh: '砲術師',
			},
			gcp: 1000,
			tree: 'Gunnery',
			cost: 10,
			pr: 10,
			prerequisites: ['Attack Up Medium', 'Fire Attack Small'],
		},
		{
			name: {
				en: 'Flute Expert',
				zh: '笛吹名人',
			},
			gcp: 2500,
			tree: 'Flute Expert',
			cost: 10,
			pr: 0,
			prerequisites: ['Critical Eye+2'],
		},
		{
			name: {
				en: 'Adrenaline+2',
				zh: '火事場力+2',
			},
			gcp: 8500,
			tree: 'Adrenaline',
			cost: 15,
			pr: 300,
			prerequisites: ['Adrenaline+1', 'Attack Up Absolute', 'Health-30'],
		},
		{
			name: {
				en: 'Adrenaline+1',
				zh: '火事場力+1',
			},
			gcp: 1200,
			tree: 'Adrenaline',
			cost: 10,
			pr: 100,
			prerequisites: ['Health-20', 'Attack Up Very Large'],
		},
		{
			name: {
				en: 'Focus+2',
				zh: '集中+2',
			},
			gcp: 4800,
			tree: 'Focus',
			cost: 15,
			pr: 150,
			prerequisites: ['Focus+1'],
		},
		{
			name: {
				en: 'Focus+1',
				zh: '集中+1',
			},
			gcp: 2500,
			tree: 'Focus',
			cost: 10,
			pr: 100,
			prerequisites: ['Critical Eye+4'],
		},
		{
			name: {
				en: 'Weapon Handling',
				zh: '武器技術',
			},
			gcp: 3000,
			tree: 'Weapon Handling',
			cost: 10,
			pr: 50,
			prerequisites: ['Critical Eye+3'],
		},
		{
			name: {
				en: 'Shiriagari',
				zh: '漸入佳境',
			},
			gcp: 25000,
			tree: 'Shiriagari',
			cost: 30,
			pr: 999,
			prerequisites: ['Attack Up Absolute', 'Focus+2'],
		},
		{
			name: {
				en: 'Kickboxing King',
				zh: '格闘王',
			},
			gcp: 5000,
			tree: 'Martial Arts',
			cost: 15,
			pr: 100,
			prerequisites: ['Critical Eye+4', 'Taijutsu'],
		},
		{
			name: {
				en: 'Taijutsu',
				zh: '體術',
			},
			gcp: 3000,
			tree: 'Martial Arts',
			cost: 10,
			pr: 50,
			prerequisites: ['Critical Eye+3', 'Attack Up Large'],
		},
		{
			name: {
				en: 'Drug Knowledge',
				zh: '危險品處理師',
			},
			gcp: 9500,
			tree: 'Drug Knowledge',
			cost: 20,
			pr: 999,
			prerequisites: ['Status Attack Up', 'Attack Up Absolute'],
		},
		{
			name: {
				en: 'Encourage+2',
				zh: '激勵+2',
			},
			gcp: 40000,
			tree: 'Encourage',
			cost: 40,
			pr: 999,
			prerequisites: ['Evasion+2', 'Status Immunity', 'Encourage+1'],
		},
		{
			name: {
				en: 'Encourage+1',
				zh: '激勵+1',
			},
			gcp: 30000,
			tree: 'Encourage',
			cost: 35,
			pr: 999,
			prerequisites: ['Evasion+1', 'Flute Expert', 'Status Halved'],
		},
		{
			name: {
				en: 'Charge Attack UP+2',
				zh: '蓄力威力ＵＰ+2',
			},
			gcp: 20000,
			tree: 'Charge Attack Up',
			cost: 25,
			pr: 999,
			prerequisites: ['Focus+2', 'Charge Attack UP+1'],
		},
		{
			name: {
				en: 'Charge Attack UP+1',
				zh: '蓄力威力ＵＰ+1',
			},
			gcp: 10000,
			tree: 'Charge Attack Up',
			cost: 20,
			pr: 999,
			prerequisites: ['Focus+1', 'Weapon Handling'],
		},
		{
			name: {
				en: 'Adaptation+2',
				zh: '適應擊+2',
			},
			gcp: 20000,
			tree: 'Adaptation',
			cost: 30,
			pr: 500,
			prerequisites: ['Adaptation+1', 'Kickboxing King'],
		},
		{
			name: {
				en: 'Adaptation+1',
				zh: '適應擊+1',
			},
			gcp: 10000,
			tree: 'Adaptation',
			cost: 20,
			pr: 500,
			prerequisites: ['Health+50', 'Sharpness+1'], // sniper?
		},
		{
			name: {
				en: 'Issen+3',
				zh: '一閃+3',
			},
			gcp: 60000,
			tree: 'Issen',
			cost: 40,
			pr: 999,
			prerequisites: ['Strong Attack+5', 'Issen+2'],
		},
		{
			name: {
				en: 'Issen+2',
				zh: '一閃+2',
			},
			gcp: 40000,
			tree: 'Issen',
			cost: 30,
			pr: 999,
			prerequisites: ['Strong Attack+4', 'Issen+1'],
		},
		{
			name: {
				en: 'Issen+1',
				zh: '一閃+1',
			},
			gcp: 20000,
			tree: 'Issen',
			cost: 20,
			pr: 999,
			prerequisites: ['Strong Attack+3', 'Critical Eye+5'],
		},
		{
			name: {
				en: 'Flash Conversion',
				zh: '閃轉',
			},
			gcp: 60000,
			tree: 'Flash Conversion',
			cost: 30,
			pr: 999,
			prerequisites: ['Issen+3'],
		},
		{
			name: {
				en: 'Defense+120',
				zh: '防禦+120',
			},
			gcp: 6500,
			tree: 'Defense',
			cost: 20,
			pr: 300,
			prerequisites: ['Defense+90'],
		},
		{
			name: {
				en: 'Defense+90',
				zh: '防禦+90',
			},
			gcp: 3000,
			tree: 'Defense',
			cost: 15,
			pr: 100,
			prerequisites: ['Defense+60'],
		},
		{
			name: {
				en: 'Defense+60',
				zh: '防禦+60',
			},
			gcp: 400,
			tree: 'Defense',
			cost: 15,
			pr: 50,
			prerequisites: ['Defense+30'],
		},
		{
			name: {
				en: 'Defense+30',
				zh: '防禦+30',
			},
			gcp: 100,
			tree: 'Defense',
			cost: 10,
			pr: 0,
			prerequisites: ['Defense+20'],
		},
		{
			name: {
				en: 'Defense+20',
				zh: '防禦+20',
			},
			gcp: 10,
			tree: 'Defense',
			cost: 5,
			pr: 0,
			prerequisites: [],
		},
		{
			name: {
				en: 'Guard+2',
				zh: '防禦性能+2',
			},
			gcp: 5000,
			tree: 'Guard',
			cost: 15,
			pr: 200,
			prerequisites: ['Defense+90', 'Guard+1'],
		},
		{
			name: {
				en: 'Guard+1',
				zh: '防禦性能+1',
			},
			gcp: 2000,
			tree: 'Guard',
			cost: 10,
			pr: 30,
			prerequisites: ['Defense+30'],
		},
		{
			name: {
				en: 'Reflect+3',
				zh: '反射+3',
			},
			gcp: 0,
			tree: 'Reflect',
			cost: 30,
			pr: 999,
			prerequisites: ['All Res UP+20', 'Reflect+2'],
		},
		{
			name: {
				en: 'Reflect+2',
				zh: '反射+2',
			},
			gcp: 0,
			tree: 'Reflect',
			cost: 20,
			pr: 999,
			prerequisites: ['All Res UP+10', 'Reflect+1'],
		},
		{
			name: {
				en: 'Reflect+1',
				zh: '反射+1',
			},
			gcp: 0,
			tree: 'Reflect',
			cost: 10,
			pr: 999,
			prerequisites: ['Guard+2', 'Defense+120'],
		},
		{
			name: {
				en: 'Sharpening Artisan',
				zh: '砥匠',
			},
			gcp: 3000,
			tree: 'Sharpening',
			cost: 15,
			pr: 200,
			prerequisites: ['Speed Sharpening'],
		},
		{
			name: {
				en: 'Speed Sharpening',
				zh: '砥石使用高速化',
			},
			gcp: 2500,
			tree: 'Sharpening',
			cost: 10,
			pr: 50,
			prerequisites: [],
		},
		{
			name: {
				en: 'Sharpness+1',
				zh: '鋒利度等級+1',
			},
			gcp: 9500,
			tree: 'Sharpness',
			cost: 20,
			pr: 500,
			prerequisites: ['Sharpening Artisan', 'Fencing+2', 'Adrenaline+2'],
		},
		{
			name: {
				en: 'Fencing+2',
				zh: '劍術+2',
			},
			gcp: 8000,
			tree: 'Fencing',
			cost: 15,
			pr: 200,
			prerequisites: ['Fencing+1', 'Weapon Handling'],
		},
		{
			name: {
				en: 'Fencing+1',
				zh: '劍術+1',
			},
			gcp: 3500,
			tree: 'Fencing',
			cost: 10,
			pr: 100,
			prerequisites: ['Speed Sharpening'],
		},
		{
			name: {
				en: 'Honed Blade+3',
				zh: '真打+3',
			},
			gcp: 20000,
			tree: 'Edgemaster',
			cost: 35,
			pr: 999,
			prerequisites: ['Honed Blade+2'],
		},
		{
			name: {
				en: 'Honed Blade+2',
				zh: '真打+2',
			},
			gcp: 15000,
			tree: 'Edgemaster',
			cost: 30,
			pr: 999,
			prerequisites: ['Honed Blade+1'],
		},
		{
			name: {
				en: 'Honed Blade+1',
				zh: '真打+1',
			},
			gcp: 10000,
			tree: 'Edgemaster',
			cost: 30,
			pr: 999,
			prerequisites: ['Sharpness+1'],
		},
		{
			name: {
				en: 'Sword God+2',
				zh: '劍神+2',
			},
			gcp: 30000,
			tree: 'Sword God',
			cost: 30,
			pr: 999,
			prerequisites: ['Sword God+1', 'Focus+2', 'True Guts'],
		},
		{
			name: {
				en: 'Sword God+1',
				zh: '劍神+1',
			},
			gcp: 15000,
			tree: 'Sword God',
			cost: 20,
			pr: 999,
			prerequisites: ['Sharpness+1', 'Weapon Handling', 'Focus+1'],
		},
		{
			name: {
				en: 'Normal/Rapid UP',
				zh: '通常彈・連射矢威力UP',
			},
			gcp: 2500,
			tree: 'Normal Shot Up',
			cost: 10,
			pr: 100,
			prerequisites: ['Normal S Lv1 Add'],
		},
		{
			name: {
				en: 'Pierce/Pierce UP',
				zh: '貫通彈・貫通矢威力UP',
			},
			gcp: 2500,
			tree: 'Pierce Shot Up',
			cost: 10,
			pr: 100,
			prerequisites: ['Pierce S Lv1 Add'],
		},
		{
			name: {
				en: 'Pellet/Spread UP',
				zh: '散彈・擴散矢威力UP',
			},
			gcp: 2500,
			tree: 'Pellet Shot Up',
			cost: 10,
			pr: 100,
			prerequisites: ['Attack Up Medium'],
		},
		{
			name: {
				en: 'Normal S Lv1 Add',
				zh: '通常彈全等級追加',
			},
			gcp: 600,
			tree: 'Normal Shot Add',
			cost: 5,
			pr: 30,
			prerequisites: ['Attack Up Medium'],
		},
		{
			name: {
				en: 'Pierce S Lv1&2 Add',
				zh: '貫通彈ＬＶ1&2追加',
			},
			gcp: 600,
			tree: 'Pierce Shot Add',
			cost: 10,
			pr: 30,
			prerequisites: ['Pierce S Lv1 Add'],
		},
		{
			name: {
				en: 'Pierce S Lv1 Add',
				zh: '貫通彈ＬＶ１追加',
			},
			gcp: 200,
			tree: 'Pierce Shot Add',
			cost: 5,
			pr: 10,
			prerequisites: [],
		},
		{
			name: {
				en: 'Load UP',
				zh: '裝填数UP',
			},
			gcp: 5000,
			tree: 'Loading',
			cost: 10,
			pr: 100,
			prerequisites: ['Normal S Lv1 Add'],
		},
		{
			name: {
				en: 'Auto Reload',
				zh: '連射',
			},
			gcp: 6000,
			tree: 'Auto-Reload',
			cost: 15,
			pr: 150,
			prerequisites: ['Load UP', 'Recoil Reduction+1', 'Normal/Rapid UP'],
		},
		{
			name: {
				en: 'Recoil Reduction+2',
				zh: '反動輕減+2',
			},
			gcp: 6000,
			tree: 'Recoil',
			cost: 15,
			pr: 150,
			prerequisites: ['Recoil Reduction+1', 'Auto Reload'],
		},
		{
			name: {
				en: 'Recoil Reduction+1',
				zh: '反動輕減+1',
			},
			gcp: 2800,
			tree: 'Recoil',
			cost: 10,
			pr: 100,
			prerequisites: ['Pierce/Pierce UP', 'Pellet/Spread UP'],
		},
		{
			name: {
				en: 'Precision+2',
				zh: '準確射擊',
			},
			gcp: 6500,
			tree: 'Precision',
			cost: 20,
			pr: 200,
			prerequisites: ['Deviation DOWN', 'Recoil Reduction+2'],
		},
		{
			name: {
				en: 'Deviation DOWN',
				zh: '偏離幅度DOWN',
			},
			gcp: 3500,
			tree: 'Precision',
			cost: 10,
			pr: 200,
			prerequisites: ['Auto Reload'],
		},
		{
			name: {
				en: 'Steady Hand+1',
				zh: '剛彈',
			},
			gcp: 0, // TODO
			tree: 'Steady Hand',
			cost: 30,
			pr: 999,
			prerequisites: ['Strong Attack+3', 'Precision+2'],
		},
		{
			name: { en: 'All Res UP+20', zh: '各耐性+20' },
			gcp: 6500,
			tree: 'All Res Up',
			cost: 20,
			pr: 100,
			prerequisites: ['All Res UP+10'],
		},
		{
			name: { en: 'All Res UP+10', zh: '各耐性+10' },
			gcp: 3500,
			tree: 'All Res Up',
			cost: 15,
			pr: 50,
			prerequisites: ['All Res UP+5'],
		},
		{
			name: { en: 'All Res UP+5', zh: '各耐性+5' },
			gcp: 500,
			tree: 'All Res Up',
			cost: 10,
			pr: 30,
			prerequisites: [],
		},
		{
			name: { en: 'Fire Res+30', zh: '火耐性+30' },
			gcp: 2500,
			tree: 'Fire Res',
			cost: 15,
			pr: 50,
			prerequisites: ['Fire Res+20'],
		},
		{
			name: { en: 'Fire Res+20', zh: '火耐性+20' },
			gcp: 800,
			tree: 'Fire Res',
			cost: 10,
			pr: 30,
			prerequisites: ['Fire Res+10'],
		},
		{
			name: { en: 'Fire Res+10', zh: '火耐性+10' },
			gcp: 200,
			tree: 'Fire Res',
			cost: 5,
			pr: 10,
			prerequisites: ['Defense+30'],
		},
		{
			name: { en: 'Water Res+30', zh: '水耐性+30' },
			gcp: 2500,
			tree: 'Water Res',
			cost: 15,
			pr: 50,
			prerequisites: ['Water Res+20'],
		},
		{
			name: { en: 'Water Res+20', zh: '水耐性+20' },
			gcp: 800,
			tree: 'Water Res',
			cost: 10,
			pr: 30,
			prerequisites: ['Water Res+10'],
		},
		{
			name: { en: 'Water Res+10', zh: '水耐性+10' },
			gcp: 200,
			tree: 'Water Res',
			cost: 5,
			pr: 10,
			prerequisites: ['Defense+30'],
		},
		{
			name: { en: 'Ice Res+30', zh: '冰耐性+30' },
			gcp: 2500,
			tree: 'Ice Res',
			cost: 15,
			pr: 50,
			prerequisites: ['Ice Res+20'],
		},
		{
			name: { en: 'Ice Res+20', zh: '冰耐性+20' },
			gcp: 800,
			tree: 'Ice Res',
			cost: 10,
			pr: 30,
			prerequisites: ['Ice Res+10'],
		},
		{
			name: { en: 'Ice Res+10', zh: '冰耐性+10' },
			gcp: 200,
			tree: 'Ice Res',
			cost: 5,
			pr: 10,
			prerequisites: ['Defense+30'],
		},
		{
			name: { en: 'Thunder Res+30', zh: '雷耐性+30' },
			gcp: 2500,
			tree: 'Thunder Res',
			cost: 15,
			pr: 50,
			prerequisites: ['Thunder Res+20'],
		},
		{
			name: { en: 'Thunder Res+20', zh: '雷耐性+20' },
			gcp: 800,
			tree: 'Thunder Res',
			cost: 10,
			pr: 30,
			prerequisites: ['Thunder Res+10'],
		},
		{
			name: { en: 'Thunder Res+10', zh: '雷耐性+10' },
			gcp: 200,
			tree: 'Thunder Res',
			cost: 5,
			pr: 10,
			prerequisites: ['Defense+30'],
		},
		{
			name: { en: 'Dragon Res+30', zh: '龍耐性+30' },
			gcp: 2500,
			tree: 'Dragon Res',
			cost: 15,
			pr: 50,
			prerequisites: ['Dragon Res+20'],
		},
		{
			name: { en: 'Dragon Res+20', zh: '龍耐性+20' },
			gcp: 800,
			tree: 'Dragon Res',
			cost: 10,
			pr: 30,
			prerequisites: ['Dragon Res+10'],
		},
		{
			name: { en: 'Dragon Res+10', zh: '龍耐性+10' },
			gcp: 200,
			tree: 'Dragon Res',
			cost: 5,
			pr: 10,
			prerequisites: ['Defense+30'],
		},
		{
			name: { en: 'Negate Poison', zh: '毒無效' },
			gcp: 1000,
			tree: 'Poison Res',
			cost: 15,
			pr: 50,
			prerequisites: ['Poison Halved'],
		},
		{
			name: { en: 'Poison Halved', zh: '毒半減' },
			gcp: 300,
			tree: 'Poison Res',
			cost: 10,
			pr: 10,
			prerequisites: ['Defense+20'],
		},
		{
			name: { en: 'Negate Paralysis', zh: '麻痺無效' },
			gcp: 1000,
			tree: 'Paralysis Res',
			cost: 15,
			pr: 50,
			prerequisites: ['Paralysis Halved'],
		},
		{
			name: { en: 'Paralysis Halved', zh: '麻痺半減' },
			gcp: 300,
			tree: 'Paralysis Res',
			cost: 10,
			pr: 10,
			prerequisites: ['Defense+20'],
		},
		{
			name: { en: 'Negate Sleep', zh: '睡眠無效' },
			gcp: 1000,
			tree: 'Sleep Res',
			cost: 15,
			pr: 50,
			prerequisites: ['Sleep Halved'],
		},
		{
			name: { en: 'Sleep Halved', zh: '睡眠半減' },
			gcp: 300,
			tree: 'Sleep Res',
			cost: 10,
			pr: 10,
			prerequisites: ['Defense+20'],
		},
		{
			name: { en: 'Status Immunity (Myriad)', zh: '狀態異常無效【多種】' },
			gcp: 9500,
			tree: 'Status Res',
			cost: 25,
			pr: 300,
			prerequisites: [
				'Status Immunity',
				'Def Lock',
				'Crystal Res',
				'Blast Resistance',
				'Freeze Res',
			],
		},
		{
			name: { en: 'Status Immunity', zh: '狀態異常無效' },
			gcp: 5000,
			tree: 'Status Res',
			cost: 20,
			pr: 100,
			prerequisites: [
				'Negate Poison',
				'Negate Paralysis',
				'Negate Sleep',
				'Status Halved',
			],
		},
		{
			name: { en: 'Status Halved', zh: '狀態異常半減' },
			gcp: 1000,
			tree: 'Status Res',
			cost: 15,
			pr: 50,
			prerequisites: ['Poison Halved', 'Paralysis Halved', 'Sleep Halved'],
		},
		{
			name: { en: 'Negate Stun', zh: '暈眩無效' },
			gcp: 2000,
			tree: 'Stun Res',
			cost: 15,
			pr: 100,
			prerequisites: ['Stun Halved'],
		},
		{
			name: { en: 'Stun Halved', zh: '暈眩確率半減' },
			gcp: 1000,
			tree: 'Stun Res',
			cost: 10,
			pr: 50,
			prerequisites: ['Status Halved'],
		},
		{
			name: { en: 'Deoderant', zh: '除臭' },
			gcp: 500,
			tree: 'Deoderant',
			cost: 10,
			pr: 30,
			prerequisites: ['Defense+30'],
		},
		{
			name: { en: 'Snowball Res', zh: '耐雪' },
			gcp: 500,
			tree: 'Snowball Res',
			cost: 10,
			pr: 30,
			prerequisites: ['Defense+30'],
		},
		{
			name: { en: 'Def Lock', zh: '厚皮' },
			gcp: 3000,
			tree: 'Def Lock',
			cost: 15,
			pr: 50,
			prerequisites: ['Negate Poison', 'Negate Paralysis', 'Negate Sleep'],
		},
		{
			name: { en: 'Blast Resistance', zh: '爆破耐性' },
			gcp: 3000,
			tree: 'Blast Res',
			cost: 15,
			pr: 100,
			prerequisites: [
				'Negate Poison',
				'Negate Paralysis',
				'Negate Sleep',
				'Deoderant',
			],
		},
		{
			name: { en: 'Crystal Res', zh: '結晶耐性' },
			gcp: 3000,
			tree: 'Crystal Res',
			cost: 15,
			pr: 50,
			prerequisites: ['Negate Poison', 'Negate Paralysis', 'Negate Sleep'],
		},
		{
			name: { en: 'Freeze Res', zh: '凍結耐性' },
			gcp: 3000,
			tree: 'Freeze Res',
			cost: 15,
			pr: 100,
			prerequisites: [
				'Negate Poison',
				'Negate Paralysis',
				'Negate Sleep',
				'Snowball Res',
			],
		},
		{
			name: { en: 'Unaffected+3', zh: '豪放+3' },
			gcp: 35000,
			tree: 'Three Worlds Protection',
			cost: 40,
			pr: 999,
			prerequisites: [
				'Super High-Grade Earplugs',
				'Violent Wind Breaker',
				'Quake Res+2',
				'Unaffected+2',
			],
		},
		{
			name: { en: 'Unaffected+2', zh: '豪放+2' },
			gcp: 25000,
			tree: 'Three Worlds Protection',
			cost: 30,
			pr: 999,
			prerequisites: [
				'High Grade Earplugs',
				'Dragon Wind Breaker',
				'Unaffected+1',
			],
		},
		{
			name: { en: 'Unaffected+1', zh: '豪放+1' },
			gcp: 15000,
			tree: 'Three Worlds Protection',
			cost: 20,
			pr: 999,
			prerequisites: ['Earplugs', 'Wind Res Large', 'Quake Res+1'],
		},
		{
			name: { en: 'Super High-Grade Earplugs', zh: '超高級耳栓' },
			gcp: 6500,
			tree: 'Hearing Protection',
			cost: 20,
			pr: 150,
			prerequisites: ['High Grade Earplugs'],
		},
		{
			name: { en: 'High Grade Earplugs', zh: '高級耳栓' },
			gcp: 1000,
			tree: 'Hearing Protection',
			cost: 15,
			pr: 50,
			prerequisites: ['Earplugs'],
		},
		{
			name: { en: 'Earplugs', zh: '耳栓' },
			gcp: 100,
			tree: 'Hearing Protection',
			cost: 10,
			pr: 10,
			prerequisites: ['Defense+30'],
		},
		{
			name: { en: 'Quake Res+2', zh: '耐震+2' },
			gcp: 3500,
			tree: 'Quake Res',
			cost: 15,
			pr: 100,
			prerequisites: ['Quake Res+1'],
		},
		{
			name: { en: 'Quake Res+1', zh: '耐震+1' },
			gcp: 500,
			tree: 'Quake Res',
			cost: 10,
			pr: 10,
			prerequisites: ['Defense+30'],
		},
		{
			name: { en: 'Violent Wind Breaker', zh: '暴風壓無效' },
			gcp: 6500,
			tree: 'Wind Pressure',
			cost: 20,
			pr: 300,
			prerequisites: ['Dragon Wind Breaker'],
		},
		{
			name: { en: 'Dragon Wind Breaker', zh: '龍風壓無效' },
			gcp: 2800,
			tree: 'Wind Pressure',
			cost: 15,
			pr: 150,
			prerequisites: ['Wind Res Large'],
		},
		{
			name: { en: 'Wind Res Large', zh: '風壓【大】無效' },
			gcp: 1000,
			tree: 'Wind Pressure',
			cost: 10,
			pr: 50,
			prerequisites: ['Wind Res Small'],
		},
		{
			name: { en: 'Wind Res Small', zh: '風壓【小】無效' },
			gcp: 100,
			tree: 'Wind Pressure',
			cost: 5,
			pr: 10,
			prerequisites: ['Defense+30'],
		},
		{
			name: { en: 'Evasion+2', zh: '回避性能+2' },
			gcp: 6500,
			tree: 'Evasion',
			cost: 20,
			pr: 150,
			prerequisites: ['Evasion+1'],
		},
		{
			name: { en: 'Evasion+1', zh: '回避性能+1' },
			gcp: 3000,
			tree: 'Evasion',
			cost: 15,
			pr: 100,
			prerequisites: ['Critical Eye+3'],
		},
		{
			name: { en: 'Passive', zh: '守勢' },
			gcp: 3500,
			tree: 'Passive',
			cost: 5,
			pr: 100,
			prerequisites: ['Evasion+1', 'Quake Res+1'],
		},
		{
			// TODO change ezlion
			name: { en: "Goddess' Embrace", zh: '女神の抱擁' },
			gcp: 8000,
			tree: 'Protection',
			cost: 20,
			pr: 500,
			prerequisites: ['Divine Protection'],
		},
		{
			name: { en: 'Divine Protection', zh: '女神の赦し' },
			gcp: 4000,
			tree: 'Protection',
			cost: 15,
			pr: 300,
			prerequisites: ['Evasion+2', 'Guts'],
		},
		{
			name: { en: 'True Guts', zh: '超強毅力' },
			gcp: 8500,
			tree: 'Guts',
			cost: 20,
			pr: 500,
			prerequisites: ['Great Guts', 'Defense+120'],
		},
		{
			name: { en: 'Great Guts', zh: '堅毅力' },
			gcp: 4800,
			tree: 'Guts',
			cost: 15,
			pr: 300,
			prerequisites: ['Guts', 'Health-30'],
		},
		{
			name: { en: 'Guts', zh: '毅力' },
			gcp: 3000,
			tree: 'Guts',
			cost: 10,
			pr: 100,
			prerequisites: ['Passive', 'Health+50'],
		},
		{
			name: { en: 'Evade Distance UP', zh: '迴避距離ＵＰ' },
			gcp: 0,
			tree: 'Evade Extender',
			cost: 15,
			pr: 999,
			prerequisites: ['Movement Speed UP+2', "Goddess' Embrace"],
		},
		{
			name: { en: 'Item Duration UP', zh: '道具使用強化' },
			gcp: 6500,
			tree: 'Everlasting',
			cost: 15,
			pr: 100,
			prerequisites: ['Recovery Items Improved'],
		},
		{
			name: { en: 'Wide Area+2', zh: '廣域化+2' },
			gcp: 3000,
			tree: 'Wide-Area',
			cost: 10,
			pr: 150,
			prerequisites: ['Wide Area+1'],
		},
		{
			name: { en: 'Wide Area+1', zh: '廣域化+1' },
			gcp: 1500,
			tree: 'Wide-Area',
			cost: 5,
			pr: 100,
			prerequisites: ['Item Duration UP'],
		},
		{
			name: { en: 'Throwing Distance UP', zh: '投擲技術UP' },
			gcp: 1200,
			tree: 'Throwing',
			cost: 10,
			pr: 100,
			prerequisites: ['Attack Up Large', 'Weapon Handling'],
		},
		{
			name: { en: 'Strong Arm+2', zh: '強肩+2' },
			gcp: 4300,
			tree: 'Strong Arm',
			cost: 15,
			pr: 150,
			prerequisites: ['Strong Arm+1'],
		},
		{
			name: { en: 'Strong Arm+1', zh: '強肩+1' },
			gcp: 2500,
			tree: 'Strong Arm',
			cost: 10,
			pr: 100,
			prerequisites: ['Throwing Distance UP'],
		},
		{
			name: { en: 'Trap Master', zh: '罠匠' },
			gcp: 6500,
			tree: 'Capture Proficiency',
			cost: 15,
			pr: 150,
			prerequisites: ['Trap Expert'],
		},
		{
			name: { en: 'Trap Expert', zh: '罠師' },
			gcp: 3000,
			tree: 'Capture Proficiency',
			cost: 10,
			pr: 100,
			prerequisites: ['Weapon Handling', 'Item Duration UP'],
		},
		{
			name: { en: 'Iron Arm+2', zh: '鐵腕+2' },
			gcp: 15000,
			tree: 'Iron Arm',
			cost: 30,
			pr: 999,
			prerequisites: ['Iron Arm+1', 'Strong Arm+2', 'Item Duration UP'],
		},
		{
			name: { en: 'Iron Arm+1', zh: '鐵腕+1' },
			gcp: 10000,
			tree: 'Iron Arm',
			cost: 20,
			pr: 999,
			prerequisites: ['Strong Arm+1', 'Throwing Knives+1'],
		},
		{
			name: { en: 'Throwing Knives+1', zh: '飛刀+1' },
			gcp: 2500,
			tree: 'Throwing',
			cost: 10,
			pr: 100,
			prerequisites: ['Throwing Distance UP'],
		},
		{
			name: { en: 'Taunt', zh: '挑撥' },
			gcp: 2000,
			tree: 'Pressure',
			cost: 15,
			pr: 100,
			prerequisites: ['Sneak', 'Flute Expert'],
		},
		{
			name: { en: 'Sneak', zh: '隱密' },
			gcp: 2000,
			tree: 'Stealth',
			cost: 15,
			pr: 100,
			prerequisites: ['Evasion+1'],
		},
		{
			name: { en: 'Incitement', zh: '煽動' },
			gcp: 30000,
			tree: 'Incitement',
			cost: 30,
			pr: 500,
			prerequisites: [
				'Taunt',
				'Evasion+2',
				'Guard+2',
				'Defense+120',
				'Passive',
			],
		},
		{
			name: { en: 'Bond', zh: '羈絆' },
			gcp: 2300,
			tree: 'Bond',
			cost: 5,
			pr: 50,
			prerequisites: [],
		},
		{
			name: { en: 'Caring+1', zh: '慰勞+1' },
			gcp: 3000,
			tree: 'Caring',
			cost: 10,
			pr: 100,
			prerequisites: ['Bond', 'Guts', 'Negate Stun'],
		},
		{
			name: { en: 'Movement Speed UP+2', zh: '移動速度ＵＰ+2' },
			gcp: 15000,
			tree: 'Movement Speed',
			cost: 20,
			pr: 999,
			prerequisites: ['Movement Speed UP+1', 'Violent Wind Breaker'],
		},
		{
			name: { en: 'Movement Speed UP+1', zh: '移動速度ＵＰ+1' },
			gcp: 10000,
			tree: 'Movement Speed',
			cost: 15,
			pr: 999,
			prerequisites: ['Weapon Handling', 'Speed Eating'],
		},
		{
			name: { en: 'Compensation', zh: '代償' },
			gcp: 30000,
			tree: 'Compensation',
			cost: 50,
			pr: 999,
			prerequisites: ['Sharpness+1', 'Critical Eye+4', 'Evasion+2'],
		},
		{
			name: { en: 'Assistance', zh: '支援' },
			gcp: 9500,
			tree: 'Assistance',
			cost: 30,
			pr: 500,
			prerequisites: [
				'Caring+1',
				'Status Immunity',
				'Attack Up Absolute',
				'Defense+120',
				'Wide Area+2',
			],
		},
		{
			name: { en: 'Red Soul', zh: '赤魂' },
			gcp: 6500,
			tree: 'Inspiration',
			cost: 15,
			pr: 999,
			prerequisites: ['Great Guts', 'Attack Up Large', 'Negate Stun'],
		},
		{
			name: { en: 'Blue Soul', zh: '青魂' },
			gcp: 6500,
			tree: 'Inspiration',
			cost: 15,
			pr: 999,
			prerequisites: ['Great Guts', 'Defense+60', 'Status Halved'],
		},
		{
			name: { en: 'Blazing Majesty+2', zh: '紅焰的威光+2' },
			gcp: 30000,
			tree: 'Grace',
			cost: 30,
			pr: 999,
			prerequisites: [
				'Blazing Majesty+1',
				'Adrenaline+2',
				'Fire Attack Large',
				'Artillery God',
			],
		},
		{
			name: { en: 'Blazing Majesty+1', zh: '紅焰的威光+1' },
			gcp: 15000,
			tree: 'Grace',
			cost: 20,
			pr: 999,
			prerequisites: [
				'Red Soul',
				'Adrenaline+1',
				'Fire Attack Small',
				'Bomber',
				'Artillery Expert',
			],
		},
		{
			name: { en: 'Drawing Arts+2', zh: '拔納術+2' },
			gcp: 0, // TODO
			tree: 'Drawing Arts',
			cost: 25,
			pr: 999,
			prerequisites: ['Drawing Arts+1', 'Sword God+2', 'Movement Speed UP+2'],
		},
		{
			name: { en: 'Drawing Arts+1', zh: '拔納術+1' },
			gcp: 0, // TODO
			tree: 'Drawing Arts',
			cost: 20,
			pr: 999,
			prerequisites: ['Weapon Handling', 'Sword God+1', 'Evasion+2'],
		},
		{
			name: { en: 'Skilled', zh: '熟練' },
			gcp: 0, // TODO
			tree: 'Skilled',
			cost: 30,
			pr: 999,
			prerequisites: ['Movement Speed UP+2', 'True Guts', 'Speed Eating'],
		},
	];

	const skillTreeData = generateSkillTreeData();

	const nodeData: Node[] = skillTreeData.nodeData;
	const edgeData: Edge[] = skillTreeData.edgeData;

	let unlockedSkills = new Set<string>(['Health+10']);
	let equippedSkills: string[] = [];
	let currentGCP = 10;
	let currentCost = 0;

	// Pagination for skill list
	let paginationPageSize = 10;
	let paginationPage = 1;

	function generateSkillTreeData() {
		const nodeData: Node[] = [];
		const edgeData: Edge[] = [];

		let nodeIndex = 1;
		for (const skill of skillIndex) {
			const isUsedAsPrerequisite = skillIndex.some((s) =>
				s.prerequisites.includes(skill.name.en),
			);

			let nodeType = '';
			if (skill.prerequisites.length === 0) {
				nodeType = isUsedAsPrerequisite
					? 'input-horizontal'
					: 'output-horizontal'; // TODO doesnt seem to work
			} else {
				nodeType = 'default-horizontal';
			}

			const node: Node = {
				id: `node-${nodeIndex}`,
				type: 'inline-tooltip',
				data: {
					tooltip: writable(skill.prerequisites.join(', ')),
					text: writable(skill.name.en),
					icon: writable(getItemIcon('Jewel')),
					iconColor: writable(getItemColor('White')),
					iconType: writable('component'),
					nodeType: writable(nodeType),
					tags: writable([
						{ text: `PR${skill.pr}`, icon: '', color: 'green' },
						{ text: `GCP: ${skill.gcp}`, icon: '', color: 'blue' },
						{ text: `Cost: ${skill.cost}`, icon: '', color: 'red' },
					]),
					backgroundColor: writable(
						tweenColor(
							getHexStringFromCatppuccinColor('surface0', $carbonThemeStore),
							getHexStringFromCatppuccinColor(
								$carbonThemeStore === 'g10' ? 'red' : 'blue',
								$carbonThemeStore,
							),
							getRatioForValue(skill.pr, 0, 999),
						),
					),
				},
				position: { x: 0, y: 0 },
			};
			nodeData.push(node);

			for (const prerequisite of skill.prerequisites) {
				const prerequisiteIndex = skillIndex.findIndex(
					(s) => s.name.en === prerequisite,
				);
				if (prerequisiteIndex !== -1) {
					const edge: Edge = {
						id: `edge-${nodeIndex}-${prerequisiteIndex + 1}`,
						source: `node-${prerequisiteIndex + 1}`,
						target: `node-${nodeIndex}`,
						type: edgeType,
						animated: true,
					};
					edgeData.push(edge);
				} else {
					console.warn(
						`Prerequisite '${prerequisite}' not found in skillIndex.`,
					);
				}
			}

			nodeIndex++;
		}

		return { nodeData, edgeData };
	}

	/**
	 * Calculates total GCP required for equipped skills including prerequisites
	 * @param equippedSkills Array of equipped skill names
	 * @param skillIndex Array of all available skills
	 * @returns Total GCP cost including prerequisites
	 */
	function calculateTotalGCP(
		equippedSkills: string[],
		skillIndex: PartnerSkill[],
	): number {
		// Set to keep track of all required skills (including prerequisites)
		const requiredSkills = new Set<string>();

		// Queue for processing skills and their prerequisites
		const skillQueue: string[] = [...equippedSkills];

		// Process all equipped skills and their prerequisites
		while (skillQueue.length > 0) {
			const currentSkillName = skillQueue.pop();
			if (!currentSkillName || requiredSkills.has(currentSkillName)) continue;

			// Add current skill to required skills set
			requiredSkills.add(currentSkillName);

			// Find the skill object
			const currentSkill = skillIndex.find(
				(skill) => skill.name.en === currentSkillName,
			);

			if (!currentSkill) continue;

			// Add prerequisites to queue
			currentSkill.prerequisites.forEach((skillName) => {
				if (!requiredSkills.has(skillName)) {
					skillQueue.push(skillName);
				}
			});
		}

		// Calculate total GCP for all required skills
		let totalGCP = 0;
		requiredSkills.forEach((skillName) => {
			const skill = skillIndex.find((s) => s.name.en === skillName);
			if (skill) {
				totalGCP += skill.gcp;
			}
		});

		// Debug: Log the calculation details
		console.log('Required skills:', Array.from(requiredSkills));
		console.log('Total GCP:', totalGCP);

		return totalGCP;
	}

	/**
	 * Helper function to get all prerequisites for a skill recursively
	 * @param skillName Name of the skill to check
	 * @param skillIndex Array of all available skills
	 * @returns Set of all prerequisite skill names
	 */
	function getAllPrerequisites(
		skillName: string,
		skillIndex: PartnerSkill[],
	): Set<string> {
		const prerequisites = new Set<string>();
		const skillQueue: string[] = [skillName];

		while (skillQueue.length > 0) {
			const currentSkillName = skillQueue.pop();
			if (!currentSkillName) continue;

			const currentSkill = skillIndex.find(
				(skill) => skill.name.en === currentSkillName,
			);
			if (!currentSkill) continue;

			currentSkill.prerequisites.forEach((prereqSkillName) => {
				if (!prerequisites.has(prereqSkillName)) {
					prerequisites.add(prereqSkillName);
					skillQueue.push(prereqSkillName);
				}
			});
		}

		return prerequisites;
	}

	function checkPrerequisites(skill: PartnerSkill): boolean {
		// Debug: Log prerequisites check
		console.log(`Checking prerequisites for ${skill.name.en}`);

		// If no prerequisites, skill can be unlocked
		if (!skill.prerequisites.length) return true;

		// Check if all prerequisites are met
		const allPrerequisitesMet = skill.prerequisites.every((skillName) =>
			unlockedSkills.has(skillName),
		);

		// Debug: Log result of prerequisite check
		console.log(
			`Prerequisites for ${skill.name.en} met: ${allPrerequisitesMet}`,
		);

		return allPrerequisitesMet;
	}

	function equipSkill(skillName: string) {
		const skill = skillIndex.find((s) => s.name.en === skillName);
		if (!skill) return;

		if (equippedSkills.includes(skillName)) {
			equippedSkills = equippedSkills.filter((s) => s !== skillName);
			currentCost -= skill.cost;
		} else {
			if (equippedSkills.length >= MAX_SLOTS) {
				alert('Maximum skill slots reached!');
				return;
			}
			if (currentCost + skill.cost > MAX_COST) {
				alert('Exceeds maximum cost!');
				return;
			}
			equippedSkills = [...equippedSkills, skillName];
			currentCost += skill.cost;
		}
	}

	function unlockSkill(skill: PartnerSkill) {
		if (unlockedSkills.has(skill.name.en)) return;

		// Debug: Log skill unlocking
		console.log(`Unlocking skill: ${skill.name.en}`);

		// Create a new Set for reactivity
		const newUnlockedSkills = new Set(unlockedSkills);
		newUnlockedSkills.add(skill.name.en);

		// Update the state
		unlockedSkills = newUnlockedSkills;
		currentGCP += skill.gcp;

		// Debug: Confirm skill added to unlockedSkills
		console.log(`Unlocked skills set updated:`, Array.from(unlockedSkills));
	}

	function lockSkill(skill: PartnerSkill) {
		// Debug: Log locking attempt
		console.log(`Attempting to lock skill: ${skill.name.en}`);

		const dependentSkills = checkDependentSkills(skill.name.en);

		// Debug: Log dependent skills check
		console.log(
			`Dependent skills for ${skill.name.en}: ${dependentSkills.join(', ')}`,
		);

		if (dependentSkills.length > 0) {
			alert(
				`Cannot lock this skill as it is required for: ${dependentSkills.join(', ')}`,
			);
			return;
		}

		// Proceed with locking the skill
		if (equippedSkills.includes(skill.name.en)) {
			equipSkill(skill.name.en); // Unequip the skill if it's currently equipped
		}

		// Create a new Set for reactivity
		const newUnlockedSkills = new Set(unlockedSkills);
		newUnlockedSkills.delete(skill.name.en);
		unlockedSkills = newUnlockedSkills;

		// Deduct GCP
		currentGCP -= skill.gcp;

		// Debug: Log successful locking
		console.log(`Skill ${skill.name.en} has been locked`);
	}

	function checkDependentSkills(skillName: string): string[] {
		// Debug: Log dependent skills check initiation
		console.log(`Checking for skills dependent on: ${skillName}`);

		return skillIndex
			.filter(
				(skill) =>
					skill.prerequisites.some((prereq) => prereq.includes(skillName)) &&
					unlockedSkills.has(skill.name.en),
			)
			.map((skill) => skill.name.en);
	}

	function unlockAllSkills() {
		// Debug: Log start of mass unlock
		console.log('Starting mass unlock of all skills');

		// Keep track of previously unlocked skills count to check for progress
		let previousUnlockedCount = 0;
		let currentUnlockedCount = unlockedSkills.size;

		// Continue trying to unlock skills until we can't unlock any more
		// or until all skills are unlocked
		while (currentUnlockedCount > previousUnlockedCount) {
			previousUnlockedCount = currentUnlockedCount;

			// Try to unlock each skill
			skillIndex.forEach((skill) => {
				if (!unlockedSkills.has(skill.name.en) && checkPrerequisites(skill)) {
					unlockSkill(skill);
				}
			});

			currentUnlockedCount = unlockedSkills.size;
		}

		// Debug: Log results
		console.log(
			`Unlock all completed. Total skills unlocked: ${unlockedSkills.size}`,
		);
	}

	// Helper function to calculate total cost of equipped skills
	const calculateEquippedCost = (equippedSkills: any[], skillIndex: any[]) => {
		return equippedSkills.reduce((total: any, skillName: any) => {
			const skill = skillIndex.find(
				(s: { name: { en: any } }) => s.name.en === skillName,
			);
			return total + (skill?.cost || 0);
		}, 0);
	};

	// Helper function to check if adding a skill would exceed cost limit
	const wouldExceedCostLimit = (
		skillToAdd: any,
		equippedSkills: string[],
		skillIndex: PartnerSkill[],
	) => {
		const currentCost = calculateEquippedCost(equippedSkills, skillIndex);
		const skillToAddCost =
			skillIndex.find((s: { name: { en: any } }) => s.name.en === skillToAdd)
				?.cost || 0;
		return currentCost + skillToAddCost > MAX_COST;
	};

	// Modify the reactive statement to include all skills
	$: paginatedSkills = skillIndex.slice(
		(paginationPage - 1) * paginationPageSize,
		paginationPage * paginationPageSize,
	);
	$: canEquipMore = equippedSkills.length < MAX_SLOTS && currentCost < MAX_COST;
	$: totalGCPRequired = calculateTotalGCP(equippedSkills, skillIndex);
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Partner Skills'} />
		<p>
			An overview of Partners can be found <Link
				inline
				href="/hunter-notes/locations/rasta-bar#partner"
				>on Hunter's Notes.</Link
			>
		</p>
		<div class="buttons">
			<Button
				kind="tertiary"
				icon={Download}
				on:click={() =>
					downloadDomAsPng('partner-skills-dom', 'partner-skills')}
				>Download</Button
			>
			<Button
				kind="tertiary"
				icon={Unlocked}
				iconDescription="Unlock All"
				on:click={unlockAllSkills}
			>
				Unlock All Skills
			</Button>
		</div>

		<Grid>
			<Row>
				<!-- Equipped Skills Panel -->
				<Column lg={6} id="partner-skills-dom">
					<Tile class="equipped-skills">
						<header class="panel-header">
							<h2>Equipped Skills</h2>
							<Tag type="blue">GCP: {totalGCPRequired}</Tag>
							<div class="cost-display">
								<span>Cost</span>
								<span class={currentCost > MAX_COST ? 'over-cost' : ''}>
									{currentCost}/{MAX_COST}
								</span>
							</div>
						</header>

						<div class="equipped-list">
							{#each equippedSkills as skillName}
								{@const skill = skillIndex.find((s) => s.name.en === skillName)}
								{#if skill}
									<div class="equipped-skill">
										<p>{skill.name.en}</p>
										<div>
											<p>{skill.cost}</p>
											<div>
												<Button
													size="small"
													kind="danger"
													iconDescription="Remove"
													icon={Delete}
													on:click={() => equipSkill(skillName)}
												/>
											</div>
										</div>
									</div>
								{/if}
							{/each}

							{#each Array(MAX_SLOTS - equippedSkills.length) as _}
								<div class="empty-slot">
									<span>---------------</span>
									<span>0</span>
								</div>
							{/each}
						</div>
					</Tile>
				</Column>

				<!-- Skill List Panel -->
				<Column lg={8}>
					<Tile class="skill-list">
						<header class="panel-header">
							<h2>Skill List</h2>
							<Tag type="blue">GCP: {currentGCP}</Tag>
						</header>

						<!-- Use {#key} to force re-render based on changes -->
						{#key unlockedSkills.size + paginationPage}
							<DataTable
								class="table"
								headers={[
									{ key: 'name', value: 'Skill' },
									{ key: 'cost', value: 'Cost' },
									{ key: 'gcp', value: 'GCP' },
									{ key: 'actions', value: '' },
								]}
								rows={paginatedSkills.map((skill) => ({
									id: skill.name.en,
									name: skill.name.en,
									cost: skill.cost,
									gcp: skill.gcp,
									skill: skill,
								}))}
							>
								<svelte:fragment slot="cell" let:row let:cell>
									{#if cell.key === 'actions'}
										<div class="skill-actions">
											{#if !unlockedSkills.has(row.skill.name.en)}
												<Button
													size="small"
													kind="secondary"
													disabled={!checkPrerequisites(row.skill)}
													on:click={() => unlockSkill(row.skill)}
													icon={Locked}
													iconDescription="Unlock"
												/>
											{:else}
												<Button
													size="small"
													kind="danger-tertiary"
													icon={Unlocked}
													iconDescription="Lock"
													on:click={() => lockSkill(row.skill)}
													disabled={checkDependentSkills(row.skill.name.en)
														.length > 0}
												/>
												<Button
													size="small"
													kind={equippedSkills.includes(row.skill.name.en)
														? 'danger'
														: 'primary'}
													icon={equippedSkills.includes(row.skill.name.en)
														? Delete
														: AddAlt}
													iconDescription={equippedSkills.includes(
														row.skill.name.en,
													)
														? 'Remove'
														: 'Equip'}
													disabled={(!canEquipMore &&
														!equippedSkills.includes(row.skill.name.en)) ||
														!unlockedSkills.has(row.skill.name.en) ||
														equippedSkills.some((equippedSkillName) => {
															const equippedSkill = skillIndex.find(
																(s) => s.name.en === equippedSkillName,
															);
															return (
																equippedSkill &&
																equippedSkill.tree === row.skill.tree
															);
														}) ||
														(!equippedSkills.includes(row.skill.name.en) &&
															wouldExceedCostLimit(
																row.skill.name.en,
																equippedSkills,
																skillIndex,
															))}
													on:click={() => equipSkill(row.skill.name.en)}
												/>
											{/if}
										</div>
									{:else if (unlockedSkills.has(row.skill.name.en) && !canEquipMore && !equippedSkills.includes(row.skill.name.en)) || equippedSkills.some( (equippedSkillName) => {
												const equippedSkill = skillIndex.find((s) => s.name.en === equippedSkillName);
												return equippedSkill && equippedSkill.tree === row.skill.tree;
											}, ) || (!equippedSkills.includes(row.skill.name.en) && wouldExceedCostLimit(row.skill.name.en, equippedSkills, skillIndex))}
										<p class="locked-skill">{cell.value}</p>
									{:else}
										<p>{cell.value}</p>
									{/if}
								</svelte:fragment>
							</DataTable>
						{/key}

						<Pagination
							totalItems={skillIndex.length}
							pageSize={paginationPageSize}
							pageSizes={[5, 10, 15]}
							pageSizeInputDisabled={true}
							bind:page={paginationPage}
						/>
					</Tile>
				</Column>
			</Row>
		</Grid>
		<section>
			<SectionHeading level={2} title="Skill Tree" />
			<div>
				<p class="spaced-paragraph">
					You can hover over a skill in order to view its prerequisites.
				</p>
				<div>
					<SvelteFlowProvider
						><SvelteFlowElk
							fileName="partner-skill-tree"
							initialNodes={nodeData}
							initialEdges={edgeData}
							colorMode={$carbonThemeStore === 'g10' ? 'light' : 'dark'}
						/></SvelteFlowProvider
					>
				</div>
			</div>
		</section>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.panel-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid var(--ctp-surface1);
	}

	.cost-display {
		font-family: monospace;
		font-size: 1.2rem;
	}

	.over-cost {
		color: var(--ctp-red);
	}

	.equipped-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.equipped-skill,
	.empty-slot {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		border: 1px solid var(--ctp-surface2);
		background: var(--ctp-surface1);

		div {
			display: flex;
			gap: 1rem;
			align-items: center;
		}
	}

	.empty-slot {
		color: var(--ctp-overlay0);
		background: var(--ctp-surface0);
	}

	.skill-actions {
		display: flex;
		gap: 0.5rem;
	}

	.table {
		display: flex;
	}

	.locked-skill {
		color: var(--ctp-overlay0);
	}

	.buttons {
		display: flex;
		margin-bottom: 2rem;
		margin-top: 2rem;
		gap: 2rem;
	}
</style>
