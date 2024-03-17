/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { frontierColorNames } from '$lib/client/themes/frontier-colors';
import { format } from 'mathjs';
import type {
	FrontierArmorID,
	FrontierElement,
	FrontierItemColor,
	FrontierStatus,
	FrontierWeaponSharpness,
} from './types';
import {
	ArmorTypes,
	ItemColors,
	MonsterIcons,
	TagTypes,
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
} from 'ezlion';

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

export function getTag(value: string) {
	for (const tagType of TagTypes) {
		if (tagType.values.includes(value)) {
			return tagType;
		}
	}
	return TagTypes[0];
}

export function getMonster(name: FrontierMonsterName, rank: string) {
	for (const monster of MonsterIcons) {
		if (
			monster.rank.toLowerCase().includes(rank.toLowerCase()) &&
			monster.name.toLowerCase() === name.toLowerCase()
		) {
			return monster;
		}
	}

	for (const monster of MonsterIcons) {
		if (monster.name.toLowerCase() === name.toLowerCase()) {
			return monster;
		}
	}

	return MonsterIcons[0];
}
