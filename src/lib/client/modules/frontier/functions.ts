/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { frontierColorNames } from '$lib/client/themes/frontier-colors';
import { format } from 'mathjs';
import type {
	FrontierArmorID,
	FrontierDivaPrayerGem,
	FrontierDivaPrayerGemColor,
	FrontierElement,
	FrontierItemColor,
	FrontierMonsterHitzoneRankBand,
	FrontierMonsterHitzoneType,
	FrontierMonsterInfo,
	FrontierMonsterNameExpanded,
	FrontierMonsterPart,
	FrontierMonsterPartInfo,
	FrontierStatus,
	FrontierWeaponSharpness,
} from './types';
import {
	ArmorTypes,
	divaPrayerGemColors,
	hitzoneColors,
	ItemColors,
	itemInfo,
	monsterInfo,
	tagInfo,
	unlistedMonsterNames,
	WeaponTypes,
} from './objects';
import FireIcon from '$lib/client/images/icon/element/fire.webp';
import WaterIcon from '$lib/client/images/icon/element/water.webp';
import ThunderIcon from '$lib/client/images/icon/element/thunder.webp';
import IceIcon from '$lib/client/images/icon/element/ice.webp';
import DragonIcon from '$lib/client/images/icon/element/dragon.webp';
import BurningZeroIcon from '$lib/client/images/icon/element/burning_zero.webp';
import BlackFlameIcon from '$lib/client/images/icon/element/Element_Black_Flame.webp';
import BlazeIcon from '$lib/client/images/icon/element/Element_Blaze.webp';
import CrimsonDemonIcon from '$lib/client/images/icon/element/Element_Crimson_Demon.webp';
import DarkIcon from '$lib/client/images/icon/element/Element_Darkness.webp';
import EmperorsRoarIcon from '$lib/client/images/icon/element/Element_Emperors_Roar.webp';
import OkikoIcon from '$lib/client/images/icon/element/Element_Frozen_Seraphim.webp';
import WindIcon from '$lib/client/images/icon/element/Element_Golden_Dust.webp';
import MusicIcon from '$lib/client/images/icon/element/Element_Kanade.webp';
import LightIcon from '$lib/client/images/icon/element/Element_Light.webp';
import SoundIcon from '$lib/client/images/icon/element/Element_Sound.webp';
import LightningRodIcon from '$lib/client/images/icon/element/Element_Thunder_Pole.webp';
import TenshouIcon from '$lib/client/images/icon/element/Element_Tenshou.webp';
import SleepIcon from '$lib/client/images/icon/status/sleep2.webp';
import PoisonIcon from '$lib/client/images/icon/status/poison.webp';
import ParalysisIcon from '$lib/client/images/icon/status/paralysis.webp';
import DefenseIcon from '$lib/client/images/icon/defense_icon.webp';
import BlastIcon from '$lib/client/images/icon/status/blast.webp';
import type {
	FrontierMonsterName,
	FrontierRankBand,
	FrontierWeaponID,
	FrontierWeaponName,
} from 'ezlion';
import slugify from 'slugify';
import { hitzoneInfo } from './hitzones';

export const frontierMath = {
	calculateEHP: (monsterHP: number, defrate: number) =>
		format(monsterHP / defrate, { precision: 0, notation: 'fixed' }),
} as const;

export const stringReplacements = {
	chaliceDescription: (weapon: string) =>
		`Awarded to those who obtained the #1 spot on a Z4, Musou, Upper Shiten or Conquest Lv9999 quest with ${weapon} at the end of the month.`,
	chaliceTitle: (hiden: string, date: string) =>
		`Chalice of the ${hiden} - ${date}`,
	colorFromRarity: (rarity: number) =>
		rarity <= 3
			? `${frontierColorNames[1].values[0].var}`
			: `${frontierColorNames[1].values[rarity - 3]?.var ?? '--fz-sharpness-white'}`,
	colorFromName: (name: FrontierItemColor) =>
		ItemColors.find((item) => item.name === name)?.value ?? '#000000',
};

export const frontierChecks = {
	isValidSharpness: (sharpnessValues: FrontierWeaponSharpness) => {
		const mappedValues = frontierMappers.mapSharpnessValues(sharpnessValues);
		const isValid =
			mappedValues.reduce((acc, currentValue) => acc + currentValue, 0) <=
				400 &&
			mappedValues.every((value: number) => value >= 0 && value <= 400) &&
			sharpnessValues.some(
				(value, index) => index > 0 && value >= sharpnessValues[index - 1],
			);
		return isValid;
	},
};

export function getWeaponIcon(weaponName: FrontierWeaponName) {
	const icon = WeaponTypes[4].icon;

	const found = WeaponTypes.find((w) => w.name === weaponName);
	if (!found) {
		return icon;
	}

	return found.icon;
}

export function getMonsterIcon(monsterName: FrontierMonsterNameExpanded) {
	const icon = monsterInfo[0].component;

	const found = monsterInfo.find((w) => w.displayName === monsterName);
	if (!found) {
		return icon;
	}

	return found.component;
}

export function getItemIcon(iconName: string) {
	const icon = itemInfo[5].icon;

	const found = itemInfo.find((w) => w.name === iconName);
	if (!found) {
		return icon;
	}

	return found.icon;
}

export const frontierMappers = {
	mapSharpnessValues: (sharpnessValues: FrontierWeaponSharpness) => {
		const mappedValues = sharpnessValues.map((value, i) =>
			i === 0 ? value : value - sharpnessValues[i - 1],
		);
		return mappedValues;
	},
	getWeaponNameById: (weaponId: number | string) => {
		const weapon = WeaponTypes.find(
			(weapon) => weapon.id.toString() === weaponId.toString(),
		);
		return weapon ? weapon.name : null;
	},
	getArmorNameById: (id: number | string) => {
		const result = ArmorTypes.find(
			(obj) => obj.id.toString() === id.toString(),
		);
		return result ? result.name : null;
	},
	getWeaponClassById: (weaponId: number | string) => {
		const weapon = WeaponTypes.find(
			(weapon) => weapon.id.toString() === weaponId.toString(),
		);
		return weapon ? weapon.class : null;
	},
	getWeaponIdFromString(id: string): FrontierWeaponID {
		if (parseInt(id) < 0 || parseInt(id) >= 14) return 0;
		return parseInt(id) as FrontierWeaponID;
	},
	getArmorIdFromString(id: string): FrontierArmorID {
		if (parseInt(id) < 0 || parseInt(id) >= 5) return 0;
		return parseInt(id) as FrontierArmorID;
	},
	getElementIcon(name: FrontierElement) {
		switch (name) {
			case 'Fire':
				return FireIcon;
			case 'Water':
				return WaterIcon;
			case 'Thunder':
				return ThunderIcon;
			case 'Ice':
				return IceIcon;
			case 'Dragon':
				return DragonIcon;
			case 'Light':
				return LightIcon;
			case 'Blaze':
				return BlazeIcon;
			case 'Tenshou':
				return TenshouIcon;
			case 'L. Rod':
				return LightningRodIcon;
			case 'Okiko':
				return OkikoIcon;
			case 'B. Flame':
				return BlackFlameIcon;
			case 'C. Demon':
				return CrimsonDemonIcon;
			case 'Dark':
				return DarkIcon;
			case 'Music':
				return MusicIcon;
			case 'Sound':
				return SoundIcon;
			case 'Wind':
				return WindIcon;
			case 'B. Zero':
				return BurningZeroIcon;
			case 'E. Roar':
				return EmperorsRoarIcon;
			default:
				return FireIcon;
		}
	},
	getStatusIcon(name: FrontierStatus) {
		switch (name) {
			case 'Sleep':
				return SleepIcon;
			case 'Poison':
				return PoisonIcon;
			case 'Paralysis':
				return ParalysisIcon;
			case 'Def':
				return DefenseIcon;
			case 'Blast':
				return BlastIcon;
			default:
				return PoisonIcon;
		}
	},
};

export function getDivaPrayerGemColor(
	color: FrontierDivaPrayerGemColor | 'Inactive',
) {
	return divaPrayerGemColors.find((e) => e.name === color)?.color ?? '#ffffff';
}

export function getUniqueMonsters() {
	const names: string[] = [];
	const result: FrontierMonsterInfo[] = [];
	monsterInfo.forEach((element) => {
		if (!names.find((e) => element.displayName === e)) {
			if (!unlistedMonsterNames.find((e) => e === element.displayName)) {
				names.push(element.displayName);
				result.push(element);
			}
		}
	});

	return result;
}

export function getMonsterByPathName(pathName: string) {
	return monsterInfo.find((e) => e.link === pathName);
}

export function convertHitzoneInfo(
	selectedName: FrontierMonsterNameExpanded,
	selectedRankBand: FrontierMonsterHitzoneRankBand,
	selectedMonsterState: string,
): FrontierMonsterPartInfo[] {
	// Filter HitzoneInfo by selectedName and selectedRankBand
	const filteredHitzoneInfo = hitzoneInfo.filter(
		(info) =>
			info.displayName === selectedName &&
			info.rankBand === selectedRankBand &&
			info.monsterState === selectedMonsterState,
	);

	// Group by monsterState and displayName
	const groupedInfo = filteredHitzoneInfo.reduce((acc, curr) => {
		const key = `${curr.monsterState}-${curr.displayName}`;
		if (!acc[key]) {
			acc[key] = {
				monsterState: curr.monsterState,
				displayName: curr.displayName,
				rankBand: curr.rankBand,
				parts: [],
			};
		}

		acc[key].parts.push({
			part: curr.part,
			values: [
				{ type: 'Cutting', value: curr.cutting },
				{ type: 'Impact', value: curr.impact },
				{ type: 'Shot', value: 0 }, // Assuming shot value is missing in HitzoneInfo
				{ type: 'Fire', value: curr.fire },
				{ type: 'Water', value: 0 }, // Assuming water value is missing in HitzoneInfo
				{ type: 'Thunder', value: 0 }, // Assuming thunder value is missing in HitzoneInfo
				{ type: 'Dragon', value: curr.dragon },
				{ type: 'Ice', value: curr.ice },
				{ type: 'Stun', value: curr.stun },
			],
		});
		return acc;
	}, {});

	// Convert grouped info to the desired format
	const FrontierMonsterPartInfo: FrontierMonsterPartInfo[] =
		Object.values(groupedInfo);

	return FrontierMonsterPartInfo;
}

export function getHitzoneValuesObject(
	hitzones: FrontierMonsterPartInfo[],
	selectedMonsterState: string,
	selectedRankBand: FrontierMonsterHitzoneRankBand,
): { [key in FrontierMonsterHitzoneType]: [number, number] } {
	// Step 1: Create the initial object
	const hitzoneValuesObject: {
		[key in FrontierMonsterHitzoneType]: [number, number];
	} = {
		Cutting: [0, 0],
		Impact: [0, 0],
		Shot: [0, 0],
		Fire: [0, 0],
		Water: [0, 0],
		Thunder: [0, 0],
		Dragon: [0, 0],
		Ice: [0, 0],
		Stun: [0, 0],
	};

	// Step 2: Filter the hitzones array
	const filteredHitzones = hitzones.filter(
		(hitzone) =>
			hitzone.monsterState === selectedMonsterState &&
			hitzone.rankBand === selectedRankBand,
	);

	// Step 3: Convert parts structure to a new structure
	const newStructure = filteredHitzones.flatMap(({ parts }) =>
		parts.flatMap(({ part, values }) =>
			values.map((v) => ({ type: v.type, part, value: v.value })),
		),
	);

	// Step 4: Update the object with highest and second highest values
	newStructure.forEach(({ type, value }) => {
		const [highest, secondHighest] = hitzoneValuesObject[type];

		if (value > highest) {
			hitzoneValuesObject[type] = [value, highest];
		} else if (value > secondHighest && value !== highest) {
			// Check for different values
			hitzoneValuesObject[type][1] = value;
		}
	});

	// Step 5: Return the object
	return hitzoneValuesObject;
}

export function getHitzoneColorsForHitzones(
	hitzones: FrontierMonsterPartInfo[],
	selectedHitzoneType: FrontierMonsterHitzoneType,
	selectedMonsterState: string,
	selectedRankBand: FrontierMonsterHitzoneRankBand,
): { [key: string]: string } {
	// Filter hitzones to include only the selected monster state
	const filteredHitzones = hitzones.filter(
		(hitzone) =>
			hitzone.monsterState === selectedMonsterState &&
			hitzone.rankBand === selectedRankBand,
	);

	// Flatten the parts array for easier processing, considering only the selected monster state
	const flattenedParts = filteredHitzones.flatMap(({ parts }) =>
		parts.map((part) => ({
			part: part.part,
			value:
				part.values.find((value) => value.type === selectedHitzoneType)
					?.value ?? 0,
		})),
	);

	// Group parts by their values
	const groupedByValue = flattenedParts.reduce(
		(groups, { part, value }) => {
			if (!groups[value]) {
				groups[value] = [];
			}
			groups[value].push(part);
			return groups;
		},
		{} as Record<number, string[]>,
	);

	// Get all unique values and sort them in descending order
	const sortedValues = Object.keys(groupedByValue)
		.map(Number)
		.sort((a, b) => b - a);

	// Assign colors based on the sorted values
	const hitzoneColorsMap: { [key: string]: string } = {};
	sortedValues.forEach((value, index) => {
		const parts = groupedByValue[value];
		if (index === 0) {
			// Highest value(s)
			parts.forEach((part) => (hitzoneColorsMap[part] = hitzoneColors[3]));
		} else if (index === 1) {
			// Second highest value(s)
			parts.forEach((part) => (hitzoneColorsMap[part] = hitzoneColors[2]));
		} else if (index === 2) {
			// Third highest value(s)
			parts.forEach((part) => (hitzoneColorsMap[part] = hitzoneColors[1]));
		} else {
			// The rest
			parts.forEach((part) => (hitzoneColorsMap[part] = hitzoneColors[0]));
		}
	});

	return hitzoneColorsMap;
}

export function getHitzoneValuesForHitzones(
	hitzones: FrontierMonsterPartInfo[],
	selectedHitzoneType: FrontierMonsterHitzoneType,
	selectedMonsterState: string,
	selectedRankBand: FrontierMonsterHitzoneRankBand,
): { [key: string]: number } {
	// Filter hitzones to include only the selected monster state
	const filteredHitzones = hitzones.filter(
		(hitzone) =>
			hitzone.monsterState === selectedMonsterState &&
			hitzone.rankBand === selectedRankBand,
	);

	// Initialize an empty object to store the part values
	const hitzoneValuesMap: { [key: string]: number } = {};

	// Iterate over each hitzone info and its parts
	filteredHitzones.forEach(({ parts }) => {
		parts.forEach(({ part, values }) => {
			// Find the value for the selected hitzone type
			const value =
				values.find((v) => v.type === selectedHitzoneType)?.value ?? 0;

			// Store the value in the map, keyed by the part name
			hitzoneValuesMap[part] = value;
		});
	});

	return hitzoneValuesMap;
}

export function getAllHitzoneValuesForHitzones(
	hitzones: FrontierMonsterPartInfo[],
	selectedMonsterState: string,
	selectedRankBand: FrontierMonsterHitzoneRankBand,
): { [key: string]: { [type: string]: number } } {
	// Define all possible FrontierMonsterHitzoneType values
	const allHitzoneTypes: FrontierMonsterHitzoneType[] = [
		'Cutting',
		'Impact',
		'Shot',
		'Fire',
		'Water',
		'Thunder',
		'Dragon',
		'Ice',
		'Stun',
	]; // Add any other types as needed

	// Filter hitzones to include only the selected monster state and rank band
	const filteredHitzones = hitzones.filter(
		(hitzone) =>
			hitzone.monsterState === selectedMonsterState &&
			hitzone.rankBand === selectedRankBand,
	);

	// Initialize an empty object to store the part values for all hitzone types
	const allHitzoneValuesMap: { [key: string]: { [type: string]: number } } = {};

	// Iterate over each hitzone info and its parts
	filteredHitzones.forEach(({ parts }) => {
		parts.forEach(({ part, values }) => {
			// For each part, initialize an object to hold values for all hitzone types
			if (!allHitzoneValuesMap[part]) {
				allHitzoneValuesMap[part] = {};
			}

			// Iterate through all possible hitzone types
			allHitzoneTypes.forEach((hitzoneType) => {
				// Find the value for the current hitzone type
				const value = values.find((v) => v.type === hitzoneType)?.value ?? 0;

				// Store the value in the map, keyed by the part name and hitzone type
				allHitzoneValuesMap[part][hitzoneType] = value;
			});
		});
	});

	return allHitzoneValuesMap;
}

/** https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value*/
export function getKeyByValue(object: { [x: string]: any }, value: any) {
	return Object.keys(object).find(
		(key) => slugify(object[key], { lower: true }) === value,
	);
}

export function isFieldEmpty(field: string | undefined | null) {
	return (
		field === undefined ||
		field === null ||
		field === '' ||
		field === 'N/A' ||
		field === '(?)' ||
		field === 'None' ||
		field === 'Not found'
	);
}

export function getTag(value: string) {
	for (const tagType of tagInfo) {
		if (tagType.values.includes(value)) {
			return tagType;
		}
	}
	return tagInfo[0];
}

export function getMonster(name: FrontierMonsterName, rank: string) {
	for (const monster of monsterInfo) {
		if (
			monster.rank.toLowerCase().includes(rank.toLowerCase()) &&
			monster.name.toLowerCase() === name.toLowerCase()
		) {
			return monster;
		}
	}

	for (const monster of monsterInfo) {
		if (monster.name.toLowerCase() === name.toLowerCase()) {
			return monster;
		}
	}

	return monsterInfo[0];
}
