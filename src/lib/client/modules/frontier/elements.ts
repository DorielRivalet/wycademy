import IconElementFire from '$lib/client/components/frontier/icon/element/Fire.svelte';
import IconElementWater from '$lib/client/components/frontier/icon/element/Water.svelte';
import IconElementThunder from '$lib/client/components/frontier/icon/element/Thunder.svelte';
import IconElementIce from '$lib/client/components/frontier/icon/element/Ice.svelte';
import IconElementDragon from '$lib/client/components/frontier/icon/element/Dragon.svelte';
import IconElementDark from '$lib/client/components/frontier/icon/element/Dark3.svelte';
import IconElementLight from '$lib/client/components/frontier/icon/element/Light.svelte';
import IconElementLightingRod from '$lib/client/components/frontier/icon/element/LightningRod.svelte';
import IconElementSound from '$lib/client/components/frontier/icon/element/Sound2.svelte';
import IconElementWind from '$lib/client/components/frontier/icon/element/Wind.svelte';
import IconElementMusic from '$lib/client/components/frontier/icon/element/Music2.svelte';
import IconElementBlaze from '$lib/client/components/frontier/icon/element/Blaze.svelte';
import IconElementTenshou from '$lib/client/components/frontier/icon/element/Tenshou2.svelte';
import IconElementOkiko from '$lib/client/components/frontier/icon/element/Okiko2.svelte';
import IconElementBlackFlame from '$lib/client/components/frontier/icon/element/BlackFlame.svelte';
import IconElementCrimsonDemon from '$lib/client/components/frontier/icon/element/CrimsonDemon.svelte';
import IconElementEmperorRoar from '$lib/client/components/frontier/icon/element/EmperorRoar.svelte';
import IconElementBurningZero from '$lib/client/components/frontier/icon/element/BurningZero3.svelte';
import type { FrontierElement, FrontierElementMultiplier } from './types';

export const ElementIcons: {
	name: FrontierElement;
	displayName: FrontierElement;
	icon: any;
}[] = [
	{
		name: '',
		displayName: '',
		icon: '',
	},
	{
		name: 'Raw',
		displayName: 'Raw',
		icon: '',
	},
	{
		name: 'None',
		displayName: 'None',
		icon: '',
	},
	{
		name: 'Fire',
		displayName: 'Fire',
		icon: IconElementFire,
	},
	{
		name: 'Water',
		displayName: 'Water',
		icon: IconElementWater,
	},
	{
		name: 'Thunder',
		displayName: 'Thunder',
		icon: IconElementThunder,
	},
	{
		name: 'Ice',
		displayName: 'Ice',
		icon: IconElementIce,
	},
	{
		name: 'Dragon',
		displayName: 'Dragon',
		icon: IconElementDragon,
	},
	{
		name: 'Light',
		displayName: 'Light',
		icon: IconElementLight,
	},
	{
		name: 'Blaze',
		displayName: 'Blaze',
		icon: IconElementBlaze,
	},
	{
		name: 'Tenshou',
		displayName: 'Tenshou',
		icon: IconElementTenshou,
	},
	{
		name: 'Okiko',
		displayName: 'Okiko',
		icon: IconElementOkiko,
	},
	{
		name: 'L. Rod',
		displayName: 'Lightning Rod',
		icon: IconElementLightingRod,
	},
	{
		name: 'Lightning Rod',
		displayName: 'Lightning Rod',
		icon: IconElementLightingRod,
	},
	{
		name: 'B. Flame',
		displayName: 'Black Flame',
		icon: IconElementBlackFlame,
	},
	{
		name: 'Black Flame',
		displayName: 'Black Flame',

		icon: IconElementBlackFlame,
	},
	{
		name: 'C. Demon',
		displayName: 'Crimson Demon',

		icon: IconElementCrimsonDemon,
	},
	{
		name: 'Crimson Demon',
		displayName: 'Crimson Demon',
		icon: IconElementCrimsonDemon,
	},
	{
		name: 'E. Roar',
		displayName: "Emperor's Roar",
		icon: IconElementEmperorRoar,
	},
	{
		name: "Emperor's Roar",
		displayName: "Emperor's Roar",
		icon: IconElementEmperorRoar,
	},
	{
		name: 'B. Zero',
		displayName: 'Burning Zero',
		icon: IconElementBurningZero,
	},

	{
		name: 'Burning Zero',
		displayName: 'Burning Zero',
		icon: IconElementBurningZero,
	},
	{
		name: 'Dark',
		displayName: 'Dark',
		icon: IconElementDark,
	},
	{
		name: 'Music',
		displayName: 'Music',
		icon: IconElementMusic,
	},
	{
		name: 'Sound',
		displayName: 'Sound',
		icon: IconElementSound,
	},
	{
		name: 'Wind',
		displayName: 'Wind',
		icon: IconElementWind,
	},
];

export const elementMultipliers: FrontierElementMultiplier[] = [
	{
		name: 'None',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Fire',
		fireMultiplier: 1,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Water',
		fireMultiplier: 0,
		waterMultiplier: 1,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Thunder',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 1,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Ice',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 1,
		dragonMultiplier: 0,
	},
	{
		name: 'Dragon',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 1,
	},
	{
		name: 'Light',
		fireMultiplier: 0.7,
		waterMultiplier: 0,
		thunderMultiplier: 0.7,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Blaze',
		fireMultiplier: 0.7,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0.7,
	},
	{
		name: 'Tenshou',
		fireMultiplier: 0.3,
		waterMultiplier: 1,
		thunderMultiplier: 0.7,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Lightning Rod',
		fireMultiplier: 1,
		waterMultiplier: 0,
		thunderMultiplier: 0.7,
		iceMultiplier: 0,
		dragonMultiplier: 0.7,
	},
	{
		name: 'Okiko',
		fireMultiplier: 0.8,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0.8,
		dragonMultiplier: 0.4,
	},
	{
		name: 'Black Flame',
		fireMultiplier: 0.5,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 1.5,
	},
	{
		name: 'Crimson Demon',
		fireMultiplier: 1.5,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0.5,
	},
	{
		name: 'Dark',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0.7,
		dragonMultiplier: 0.7,
	},
	{
		name: 'Music',
		fireMultiplier: 9,
		waterMultiplier: 1,
		thunderMultiplier: 0,
		iceMultiplier: 1,
		dragonMultiplier: 0,
	},
	{
		name: 'Sound',
		fireMultiplier: 0,
		waterMultiplier: 1,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 1,
	},
	{
		name: '',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Wind',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0.8,
		iceMultiplier: 0.8,
		dragonMultiplier: 0,
	},
	{
		name: 'Burning Zero',
		fireMultiplier: 1.25,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 1.25,
		dragonMultiplier: 0,
	},
	{
		name: "Emperor's Roar",
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 1.5,
		iceMultiplier: 0,
		dragonMultiplier: 0.5,
	},
	{
		name: 'Raw',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
] as const;
