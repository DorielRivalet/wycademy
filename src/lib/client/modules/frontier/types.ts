/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

// TODO this will need to support i18n later on. same for any other strings. prefer numbers or IDs.
export type FrontierWeaponID =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13;
export type FrontierWeaponName =
  | 'Great Sword'
  | 'Long Sword'
  | 'Dual Swords'
  | 'Sword and Shield'
  | 'Hammer'
  | 'Hunting Horn'
  | 'Lance'
  | 'Gunlance'
  | 'Heavy Bowgun'
  | 'Light Bowgun'
  | 'Bow'
  | 'Tonfa'
  | 'Switch Axe F'
  | 'Magnet Spike';
export type FrontierRarity = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type FrontierElement =
  | ''
  | 'Fire'
  | 'Water'
  | 'Thunder'
  | 'Ice'
  | 'Dragon'
  | 'Light'
  | 'Blaze'
  | 'Tenshou'
  | 'L. Rod'
  | 'Okiko'
  | 'B. Flame'
  | 'C. Demon'
  | 'Dark'
  | 'Music'
  | 'Sound'
  | 'Wind'
  | 'B. Zero'
  | 'E. Roar';
export type FrontierStatus = '' | 'Poison' | 'Para' | 'Sleep' | 'Blast';
export type FrontierWeaponLength =
  | 'V. Short'
  | 'Short'
  | 'Normal'
  | 'Long'
  | 'V. Long';
export type FrontierWeaponClass = 'Blademaster' | 'Gunner';
export type FrontierEquipmentRank = '' | 'G' | 'Z';
export type FrontierWeaponSharpness = [
  Red: number,
  Orange: number,
  Yellow: number,
  Green: number,
  Blue: number,
  White: number,
  Purple: number,
  Cyan: number,
];
export type UICornerStyle = 0 | 1 | 2 | 3;
