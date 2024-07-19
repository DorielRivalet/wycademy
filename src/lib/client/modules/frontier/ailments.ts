import IconStatusPoison from '$lib/client/components/frontier/icon/status/Poison.svelte';
import IconStatusSleep from '$lib/client/components/frontier/icon/status/Sleep.svelte';
import IconStatusParalysis from '$lib/client/components/frontier/icon/status/Paralysis.svelte';
import IconStatusBlast from '$lib/client/components/frontier/icon/status/Blast.svelte';

import IconAilmentBleed from '$lib/client/components/frontier/icon/ailment/Bleed2.svelte';
import IconAilmentBlind from '$lib/client/components/frontier/icon/ailment/Blind.svelte';
import IconAilmentCorruptedPoison from '$lib/client/components/frontier/icon/ailment/CorruptedPoison.svelte';
import IconAilmentCrystal from '$lib/client/components/frontier/icon/ailment/Crystal.svelte';
import IconAilmentDracophageErosion from '$lib/client/components/frontier/icon/ailment/DracophageErosion.svelte';
import IconAilmentExtremeFireblight from '$lib/client/components/frontier/icon/ailment/ExtremeFireblight.svelte';
import IconAilmentExtremeWaterblight from '$lib/client/components/frontier/icon/ailment/ExtremeWaterblight.svelte';
import IconAilmentExtremeThunderblight from '$lib/client/components/frontier/icon/ailment/ExtremeThunderblight.svelte';
import IconAilmentExtremeIceblight from '$lib/client/components/frontier/icon/ailment/ExtremeIceblight.svelte';
import IconAilmentExtremeDragonblight from '$lib/client/components/frontier/icon/ailment/ExtremeDragonblight.svelte';
import IconAilmentExtremePoison from '$lib/client/components/frontier/icon/ailment/ExtremePoison.svelte';
import IconAilmentExtremeSleep from '$lib/client/components/frontier/icon/ailment/ExtremeSleep.svelte';
import IconAilmentExtremeParalysis from '$lib/client/components/frontier/icon/ailment/ExtremeParalysis.svelte';
import IconAilmentFatigue from '$lib/client/components/frontier/icon/ailment/Fatigue.svelte';
import IconAilmentFrostbite from '$lib/client/components/frontier/icon/ailment/Frostbite.svelte';
import IconAilmentMagnetism from '$lib/client/components/frontier/icon/ailment/Magnetism.svelte';
import IconAilmentSnowman from '$lib/client/components/frontier/icon/ailment/Snowman.svelte';
import IconAilmentStench from '$lib/client/components/frontier/icon/ailment/Stench.svelte';
import IconAilmentStun from '$lib/client/components/frontier/icon/ailment/Stun.svelte';
import IconAilmentVocalCordParalysis from '$lib/client/components/frontier/icon/ailment/VocalCordParalysis.svelte';
import IconAilmentDefenseDown from '$lib/client/components/frontier/icon/ailment/DefenseDown.svelte';
import IconAilmentConfusion from '$lib/client/components/frontier/icon/ailment/Confusion.svelte';
import IconAilmentFrenzyVirus from '$lib/client/components/frontier/icon/ailment/FrenzyVirus.svelte';
import type { FrontierAilment, FrontierStatus } from './types';

export const StatusIcons: { name: FrontierStatus; icon: any }[] = [
	{ name: '', icon: '' },
	{ name: 'None', icon: '' },
	{ name: 'Def', icon: '' }, // TODO
	{
		name: 'Poison',
		icon: IconStatusPoison,
	},
	{
		name: 'Paralysis',
		icon: IconStatusParalysis,
	},
	{
		name: 'Sleep',
		icon: IconStatusSleep,
	},
	{
		name: 'Blast',
		icon: IconStatusBlast,
	},
];

export const AilmentIcons: { name: FrontierAilment; icon: any }[] = [
	{ name: '', icon: '' },
	{ name: 'None', icon: '' },
	{ name: 'Bleed', icon: IconAilmentBleed }, //
	{ name: 'Blind', icon: IconAilmentBlind },
	{ name: 'Corrupted Poison', icon: IconAilmentCorruptedPoison },
	{ name: 'Crystal', icon: IconAilmentCrystal },
	{ name: 'Dracophage Erosion', icon: IconAilmentDracophageErosion },
	{ name: 'Extreme Fireblight', icon: IconAilmentExtremeFireblight },
	{ name: 'Extreme Waterblight', icon: IconAilmentExtremeWaterblight },
	{ name: 'Extreme Thunderblight', icon: IconAilmentExtremeThunderblight },
	{ name: 'Extreme Iceblight', icon: IconAilmentExtremeIceblight },
	{ name: 'Extreme Dragonblight', icon: IconAilmentExtremeDragonblight },
	{ name: 'Extreme Poison', icon: IconAilmentExtremePoison },
	{ name: 'Extreme Sleep', icon: IconAilmentExtremeSleep },
	{ name: 'Extreme Paralysis', icon: IconAilmentExtremeParalysis },
	{ name: 'Fatigue', icon: IconAilmentFatigue },
	{ name: 'Frostbite', icon: IconAilmentFrostbite },
	{ name: 'Magnetism', icon: IconAilmentMagnetism },
	{ name: 'Snowman', icon: IconAilmentSnowman },
	{ name: 'Stench', icon: IconAilmentStench },
	{ name: 'Stun', icon: IconAilmentStun },
	{ name: 'Vocal Cord Paralysis', icon: IconAilmentVocalCordParalysis },
	{ name: 'Defense Down', icon: IconAilmentDefenseDown },
	{ name: 'Confusion', icon: IconAilmentConfusion },
	{ name: 'Frenzy Virus', icon: IconAilmentFrenzyVirus },
	{ name: 'Poison', icon: IconStatusPoison },
	{ name: 'Paralysis', icon: IconStatusParalysis },
	{ name: 'Blast', icon: IconStatusBlast },
	{ name: 'Sleep', icon: IconStatusSleep },
];
