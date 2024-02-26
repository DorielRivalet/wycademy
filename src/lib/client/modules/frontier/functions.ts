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
import { ArmorTypes, ItemColors, WeaponTypes } from './objects';
import FireIcon from '$lib/client/images/icon/element/fire.png';
import WaterIcon from '$lib/client/images/icon/element/water.png';
import ThunderIcon from '$lib/client/images/icon/element/thunder.png';
import IceIcon from '$lib/client/images/icon/element/ice.png';
import DragonIcon from '$lib/client/images/icon/element/dragon.png';
import BurningZeroIcon from '$lib/client/images/icon/element/burning_zero.png';
import BlackFlameIcon from '$lib/client/images/icon/element/Element_Black_Flame.png';
import BlazeIcon from '$lib/client/images/icon/element/Element_Blaze.png';
import CrimsonDemonIcon from '$lib/client/images/icon/element/Element_Crimson_Demon.png';
import DarkIcon from '$lib/client/images/icon/element/Element_Darkness.png';
import EmperorsRoarIcon from '$lib/client/images/icon/element/Element_Emperors_Roar.png';
import OkikoIcon from '$lib/client/images/icon/element/Element_Frozen_Seraphim.png';
import WindIcon from '$lib/client/images/icon/element/Element_Golden_Dust.png';
import MusicIcon from '$lib/client/images/icon/element/Element_Kanade.png';
import LightIcon from '$lib/client/images/icon/element/Element_Light.png';
import SoundIcon from '$lib/client/images/icon/element/Element_Sound.png';
import LightningRodIcon from '$lib/client/images/icon/element/Element_Thunder_Pole.png';
import TenshouIcon from '$lib/client/images/icon/element/Element_Tenshou.png';
import SleepIcon from '$lib/client/images/icon/status/sleep2.png';
import PoisonIcon from '$lib/client/images/icon/status/poison.png';
import ParalysisIcon from '$lib/client/images/icon/status/paralysis.png';
import DefenseIcon from '$lib/client/images/icon/defense_icon.png';
import BlastIcon from '$lib/client/images/icon/status/blast.png';
import type { FrontierWeaponID } from 'ezlion';

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

/*
TODO

1) Data Mappers
2) Formulas

// Attack Values
// Attack addition is added as either Attack A or Attack B and is before or after Hunting Horn buffs respectively.
// Values that are known to reside in Attack B are Rush, Stylish Assault, Flash Conversion, Obscurity, Incitement, Rush, Vigorous Up and Partnyaa Attack Buffs.
// Final True  = ((Weapon True + Attack A) * HH Buff + Attack B) * Multipliers + Additional

// Elemental Values
// Get true by dividing by 10, floor any decimals and truncate them from value
// Floor(Displayed Elemental / 10 * Hybrid Modifiers)
// e.g. 1150 Black Flame is
// 1150 / 10 * 1.5 = 172.5 = 1720 Dragon
// 1150 / 10 * 0.5 = 57.5 = 570 Fire

// Bowguns
// Both Bowguns use normal attack to work out used elemental value on a shot
// Base Shot Power is always 1
// First multi is always hit count, 1-6 is actual use depending on hits landed

// Heavy Bowgun
// Fire 	(Attack * 0.5) * 1 * Hiden
// Water	(Attack * 0.25) * 3 * Hiden
// Thunder	(Attack * 0.27) * 3 * Hiden
// Ice		(Attack * 0.25) * 3 * Hiden
// Dragon	90 * 6 * Hiden

// Light Bowgun
// Fire 	(Attack * 0.4) * 1
// Water	(Attack * 0.2) * 3
// Thunder	(Attack * 0.2) * 3
// Ice		(Attack * 0.2) * 3
// Dragon	75 * 6


// Damage output
// Hitbox should be final value after all modifiers like TC etc.
// Status multis are 1.10x for Paralysis and the animation of falling into a pitfall, 3.00x on first hit during sleep

// Melee Weapons
// Weapon Modifier is 1.25x for SnS, 0.72x for Lance impact, 1.00x everywhere else
// Raw
// Floor ( Floor ( Floor ( Motion * Affinity ) / 100 * Sharpness * Weapon Modifier * Sweet Spot * Status Multi * Hitbox / 100 ) * Defense Rate)
// Elemental
// Floor ( Floor ( Elemental / 10 * Sharpness * Element Hitbox / 100 * Hybrid Modifier ) * Defense Rate )

// Ranged Damage
// Raw
// Floor(Floor(Floor(Shot Power / 100 * Affinity * Attack) * Critical Distance Multiplier * Coating Modifier * Shot Modifier * Shot Type Multi * Status Multi * Hitbox / 100) * Defense Rate）
// Elemental
// Floor ( Floor ( Elemental / 10 * Charge Modifiers * Element Hitbox / 100 * Hybrid Modifier ) * Defense Rate )

// Status Values
// Displayed Status / 10
//

	totalaffinityOut = AffinityIssen + AffinitySharp + AffinitySigils + AffinitySigils2 + AffinitySigils3 + AffinityStylerank + AffinityExpert + AffinityNatural + AffinityFlash + AffinityGSAF + AffinityDrink + starvingwolfaffinity + ceaselessaffinity + furiousAff + aoeAff;


	missionreq = [1, 3, 5, 6, 7, 9, 12, 13, 15, 17, 18, 20, 22, 23, 24, 25, 28, 30, 31, 33, 36, 37, 38, 39, 41, 42, 44, 46, 47, 48, 49, 51, 53, 54, 55, 57, 59, 60, 62, 64, 65, 66, 67, 70, 72, 73, 75, 76, 78, 79, 81, 83, 84, 86, 88, 89, 90, 91, 94, 95, 96, 97, 99, 101, 102, 104, 106, 107, 108, 109, 112, 113, 114, 115, 117, 118, 120, 121, 123, 125, 126, 128, 130, 131, 132, 133, 135, 137, 138, 139, 141, 143, 144, 146, 148, 150, 151, 153, 154, 156, 157, 159, 160, 161, 162, 164, 166, 167, 169, 170, 171, 172, 173, 174, 175, 176, 177, 179, 180, 181, 182, 183, 184, 185, 187, 188, 189, 190, 191, 192, 193, 195, 196, 197, 198, 199, 200, 201, 203, 204, 205, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216, 217, 219, 220, 221, 222, 223, 224, 225, 227, 228, 229, 230, 231, 232, 233, 235, 236, 237, 238, 239, 240, 241, 243, 244, 245, 246, 247, 248, 249];

	var caravanadd = Math.floor(trueraw * ACcaravan );

	// Crit Conversion
	if (ACcritconv < 101){
		if (ACcritup == 1){
			var critconversion = 0 + Math.floor((Math.sqrt(AffinityNatural)) * 5);
		} else if (ACcritup == 2){
			var critconversion = 0 + Math.floor((Math.sqrt(AffinityNatural)) * 10);
		}else {
			var critconversion = 0;
		}
	} else {
		if (ACcritup == 1){
			var critconversion = Math.floor((Math.sqrt(ACcritconv - 100)) * 7) + Math.floor((Math.sqrt(AffinityNatural)) * 5);
		} else if (ACcritup == 2){
			var critconversion = Math.floor((Math.sqrt(ACcritconv - 100)) * 7) + Math.floor((Math.sqrt(AffinityNatural)) * 10);
		} else {
			var critconversion = Math.floor((Math.sqrt(ACcritconv - 100)) * 7);
		}
	};

	// base to multiply

	// drug knowledge add


	if(drugknowledgeToggle) == 1){
		var furious = furiousMulti();
		var DrugKnowledgeRaw = Math.floor(Math.floor(statusvalue * statusStatusattack * statusGuildpugi *  statusSigil * furious)/10) * drugknowledgeupToggle * 0.658);
	} else {
		var DrugKnowledgeRaw = 0;
	}

	var zeniAtk = 30 + (20 * zeniAtk);
	var aoeAtk = ((25 * aoeAtkCount) + (aoeAtk * 5));

	if(zeniAtk == 0){
		zeniAtk = 0;
	}
	if(aoeAtkCount == 0 || aoeAtk == 0){
		aoeAtk = 0;
	}


	// Rush / Stylish Assault / Vampirism / Flash Conversion / Obscurity / Incitement / Furious / Vigorous Up
	does not get multiplied by horn
	var attackB =  ACrush + ACstylishass + ACfurious + VigAddition + critconversion + ACVamp + patientdefenderAttack + ACincite;

	// takes all multipliers
	var attackA = truerawvalue + ACpassives + ACsigil + ACsigil2 + ACsigil3 + ACconqatk + ACconqpot + ACatkskill + ACfood + ACseeds + ACsrattack + ulSigil + DrugKnowledgeRaw + ACdure + AClonewolf + caravanadd + ACrising + RoadAdvancement  + Math.floor(ACdrug * 0.025) + ACconsumption + ACroadlast + AClance + ACtower + zeniAtk + aoeAtk;



	// multiplication

	// ((weapon + AttackA) * horn + AttackB * multis + addititive

	var multis = Math.floor((Math.floor(attackA * AChh) + attackB) * ACadren * ACcomsup * ACdstonfa * AChiden * AChammer)

	// flat additions
	var additions = ACpartnyaabond + ACbondhunter + ACassist + ACsoul + ACarmour1 + ACarmour2 + ACarmourG + ACsecrettech;

	// output
		ACtrueout Math.floor( additions + multis ));

		ACdisplayout Math.floor((Math.floor(additions + Math.floor(multis ))) * ACweapontypemulti ));

		var roundingcheck = Math.floor((Math.floor(additions + Math.floor(multis))) * ACweapontypemulti );
	};

*/
