/*
 * © 2024 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

// TODO split into more files
import { format } from 'mathjs';
import type {
	FrontierArmorID,
	FrontierElement,
	FrontierStatus,
	FrontierWeaponSharpness,
} from './types';
import FireIcon from '$lib/client/images/icon/element/fire.webp';
import WaterIcon from '$lib/client/images/icon/element/water.webp';
import ThunderIcon from '$lib/client/images/icon/element/thunder.webp';
import IceIcon from '$lib/client/images/icon/element/ice.webp';
import DragonIcon from '$lib/client/images/icon/element/dragon.webp';
import SleepIcon from '$lib/client/images/icon/status/sleep2.webp';
import PoisonIcon from '$lib/client/images/icon/status/poison.webp';
import ParalysisIcon from '$lib/client/images/icon/status/paralysis.webp';
import DefenseIcon from '$lib/client/images/icon/defense_icon.webp';
import BlastIcon from '$lib/client/images/icon/status/blast.webp';
import type { FrontierWeaponID } from 'ezlion';
import slugify from 'slugify';
import { weaponTypeInfo } from './weapons';
import { ArmorTypes } from './armor';
import MonsterRandom from '$lib/client/images/monster/official/random.webp';

export const frontierMath = {
	calculateEHP: (monsterHP: number, defrate: number) =>
		format(monsterHP / defrate, { precision: 0, notation: 'fixed' }),
} as const;

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

export const frontierMappers = {
	mapSharpnessValues: (sharpnessValues: FrontierWeaponSharpness) => {
		const mappedValues = sharpnessValues.map((value, i) =>
			i === 0 ? value : value - sharpnessValues[i - 1],
		);
		return mappedValues;
	},
	getWeaponNameById: (weaponId: number | string) => {
		const weapon = weaponTypeInfo.find(
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
		const weapon = weaponTypeInfo.find(
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
			// case 'Light':
			// 	return LightIcon;
			// case 'Blaze':
			// 	return BlazeIcon;
			// case 'Tenshou':
			// 	return TenshouIcon;
			// case 'L. Rod':
			// 	return LightningRodIcon;
			// case 'Okiko':
			// 	return OkikoIcon;
			// case 'B. Flame':
			// 	return BlackFlameIcon;
			// case 'C. Demon':
			// 	return CrimsonDemonIcon;
			// case 'Dark':
			// 	return DarkIcon;
			// case 'Music':
			// 	return MusicIcon;
			// case 'Sound':
			// 	return SoundIcon;
			// case 'Wind':
			// 	return WindIcon;
			// case 'B. Zero':
			// 	return BurningZeroIcon;
			// case 'E. Roar':
			// 	return EmperorsRoarIcon;
			default:
				return MonsterRandom;
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
