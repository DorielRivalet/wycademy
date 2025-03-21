import type { DropdownItemOption } from './types';

export function getLengthAttackValue(
	outputLengthType: string,
	trueRaw: number,
) {
	let result = trueRaw;
	if (outputLengthType === 'Active') {
		result = Math.ceil(trueRaw - (trueRaw * 0.07 + 0.7));
	}
	// else if (outputLengthType === 2) {
	// 	result = Math.ceil(trueRaw - (trueRaw * 0.07 + 1));

	return result;
}

export const blademasterDropdownItems: DropdownItemOption[] = [
	{
		name: 'Red (0.6x)',
		value: 0.6,
	},
	{
		name: 'Orange (0.85x)',
		value: 0.85,
	},
	{
		name: 'Yellow (1.1x)',
		value: 1.1,
	},
	{
		name: 'Green (1.325x)',
		value: 1.325,
	},
	{
		name: 'Blue (1.45x)',
		value: 1.45,
	},
	{
		name: 'White (1.6x)',
		value: 1.6,
	},
	{
		name: 'Purple (1.7x)',
		value: 1.7,
	},
	{
		name: 'Cyan (1.8x)',
		value: 1.8,
	},
] as const;

export const gunnerDropdownItems: DropdownItemOption[] = [
	{ name: 'Not Compressed (0x)', value: 0 },
	{ name: 'Lv1 Norm S. (2.4x Bullets Loaded)', value: 2.4 },
	{ name: 'Lv2 Norm S. (6.0x Bullets Loaded)', value: 6.0 },
	{ name: 'Lv3 Norm S. (6.0x Bullets Loaded x n)', value: 6.0 },
	{ name: 'Lv1 Pierce 1 Hit (5x Bullets Loaded)', value: 5.0 },
	{ name: 'Lv2 Pierce 1 Hit (4.5x Bullets Loaded)', value: 4.5 },
	{ name: 'Lv3 Pierce 1 Hit (3.5x Bullets Loaded)', value: 3.5 },
	{ name: 'Lv1 Pierce 3 Hits (5x Bullets Loaded)', value: 15.0 },
	{ name: 'Lv2 Pierce 4 Hits (4.5x Bullets Loaded)', value: 18.0 },
	{ name: 'Lv3 Pierce 6 Hits (3.5x Bullets Loaded)', value: 21.0 },
	{ name: 'Lv1 Pellet S. (3x Bullets Loaded x 3)', value: 9 },
	{ name: 'Lv2 Pellet S. (3x Bullets Loaded x 4)', value: 12 },
	{ name: 'Lv3 Pellet S. (3x Bullets Loaded x 5)', value: 15 },
	{ name: 'Lv1 Impact S. (5.0x Bullets Loaded x 2)', value: 10 },
	{ name: 'Lv2 Impact S. (4.5x Bullets Loaded x 3)', value: 13.5 },
	{ name: 'Lv3 Impact S. (3.5x Bullets Loaded x 5)', value: 17.5 },
	{ name: 'Lv1 Norm S. (3.6x Bullets Loaded)', value: 3.1 },
	{ name: 'Lv2 Norm S. (8.4x Bullets Loaded)', value: 8.4 },
	{ name: 'Lv3 Norm S. (8.4x Bullets Loaded x n)', value: 8.4 },
	{ name: 'Lv1 Pierce 1 Hit (7x Bullets Loaded)', value: 7 },
	{ name: 'Lv2 Pierce 1 Hit (6.3x Bullets Loaded)', value: 6.3 },
	{ name: 'Lv3 Pierce 1 Hit (4.9x Bullets Loaded)', value: 4.9 },
	{ name: 'Lv1 Pierce 3 Hits (7x Bullets Loaded)', value: 21 },
	{ name: 'Lv2 Pierce 4 Hits (6.3x Bullets Loaded)', value: 25.2 },
	{ name: 'Lv3 Pierce 6 Hits (4.9x Bullets Loaded)', value: 29.4 },
	{ name: 'Lv1 Impact S. (7.0x Bullets Loaded x 2)', value: 14 },
	{ name: 'Lv2 Impact S. (6.3x Bullets Loaded x 3)', value: 18.9 },
	{ name: 'Lv3 Impact S. (4.9x Bullets Loaded x 5)', value: 24.5 },
	{
		name: '1.8x LBG & Bow Crit Distance',
		value: 1.8,
	},
	{
		name: '2.3x HBG 1st Half Crit Distance',
		value: 2.3,
	},
	{
		name: '2.0x HBG 2nd Half Crit Distance',
		value: 2.0,
	},
	{
		name: '1.9x LBG & Bow Crit D. & Z Piece',
		value: 1.9,
	},
	{
		name: '2.45x HBG 1st Half Crit D. & Zenith',
		value: 2.45,
	},
	{
		name: '2.15x HBG 2nd Half Crit D. & Zenith',
		value: 2.15,
	},
	{
		name: '2.4x Z 1st Half Crit D. (HBG Active Feature)',
		value: 2.4,
	},
	{
		name: '2.1x Z 2nd Half Crit D. (HBG Active Feature)',
		value: 2.1,
	},
	{
		name: '2.1x 1st Half Crit D. (HBG Active Feature)',
		value: 2.1,
	},
	{
		name: '1.8x 2nd Half Crit D. (HBG Active Feature)',
		value: 1.8,
	},
	{
		name: '2.0x HBG 1st Half Crit D.',
		value: 2.0,
	},
	{
		name: '1.7x 2nd Half Crit D.',
		value: 1.7,
	},
	{
		name: '1.5x Bow or LBG Crit D.',
		value: 1.5,
	},
	{
		name: '2.2x',
		value: 2.2,
	},
	{
		name: '1.6x',
		value: 1.6,
	},
	{
		name: '1.4x',
		value: 1.4,
	},
	{
		name: '1.3x',
		value: 1.3,
	},
	{
		name: '1.2x',
		value: 1.2,
	},
	{
		name: '1.1x',
		value: 1.1,
	},
	{
		name: '1.0x',
		value: 1.0,
	},
	{
		name: '2.3x Step Shot & Z Piece',
		value: 2.3,
	},
	{
		name: '2.0x Step Shot & Z Piece',
		value: 2.0,
	},
	{
		name: '1.9x S. C. Distance & Z Piece (LBG Active Feature)',
		value: 1.9,
	},
	{
		name: '1.6x Standard C. Distance (LBG Active Feature)',
		value: 1.6,
	},
	{
		name: '2.4x Step Shot & Z Piece (LBG Active Feature)',
		value: 2.4,
	},
	{
		name: '2.1x Step Shot & Z Piece (LBG Active Feature)',
		value: 2.1,
	},
	{
		name: '2.5x',
		value: 2.5,
	},
	{
		name: '2.55x',
		value: 2.55,
	},
	{
		name: '2.60x',
		value: 2.6,
	},
	{
		name: 'Normal / Rapid Up (1.1x)',
		value: 1.1,
	},
	{
		name: 'Pierce Up (1.1x)',
		value: 1.1,
	},
	{
		name: 'Pellet / Scatter Up (1.3x)',
		value: 1.3,
	},
	{
		name: 'Just Shot (1.3x)',
		value: 1.3,
	},
	{
		name: 'Perfect JS (1.4x)',
		value: 1.4,
	},
	{
		name: 'Evade Shot (0.6x)',
		value: 0.6,
	},
	{
		name: 'Finishing Shot (2.0x)',
		value: 2.0,
	},
	{
		name: 'Rapid Fire (0.5x)',
		value: 0.5,
	},
	{
		name: 'Ultra Rapid Lv 1 Pierce S (0.73x)',
		value: 0.73,
	},
	{
		name: 'Normal / Charge Lv 0 (x1)',
		value: 1,
	},
	{
		name: 'Charge Lv 1 (1.15x)',
		value: 1.15,
	},
	{
		name: 'Charge Lv 2 (1.3x)',
		value: 1.3,
	},
	{
		name: 'Charge Lv 3 (1.5x)',
		value: 1.5,
	},
	{
		name: 'Storm Style Lv 0 (0.95x)',
		value: 0.95,
	},
	{
		name: 'Normal (All 1.0x)',
		value: 0,
	},
	{
		name: 'Quick Shot (Lv1 1.0x / Lv2 0.85x / Lv3 0.75x / Lv4 0.65x)',
		value: 1,
	},
	{
		name: `Normal & Quick Combined (Lv1 2.0x / Lv2 1.85x / Lv3 1.75x / Lv4 1.65x)`,
		value: 2,
	},
] as const;

/**If this is the wrong dropdown try elementalSkillsDropdownItems (possible rename) */
export const elementDropdownItems: DropdownItemOption[] = [
	{
		name: 'Not Compressed (0x)',
		value: 0,
	},
	{
		name: 'Lv1 Norm S. (2.4x Bullets Loaded)', // TODO
		value: 0,
	},
	{
		name: 'Lv2 Norm S. (6.0x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Norm S. (6.0x Bullets Loaded x n)',
		value: 0,
	},
	{
		name: 'Lv1 Pierce 1 Hit (5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Pierce 1 Hit (4.5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Pierce 1 Hit (3.5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv1 Pierce 3 Hits (5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Pierce 4 Hits (4.5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Pierce 6 Hits (3.5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv1 Pellet S. (3x Bullets Loaded x 3)',
		value: 0,
	},
	{
		name: 'Lv2 Pellet S. (3x Bullets Loaded x 4)',
		value: 0,
	},
	{
		name: 'Lv3 Pellet S. (3x Bullets Loaded x 5)',
		value: 0,
	},
	{
		name: 'Lv1 Impact S. (5.0x Bullets Loaded x 2)',
		value: 0,
	},
	{
		name: 'Lv2 Impact S. (4.5x Bullets Loaded x 3)',
		value: 0,
	},
	{
		name: 'Lv3 Impact S. (3.5x Bullets Loaded x 5)',
		value: 0,
	},
	{
		name: 'Lv1 Norm S. (3.6x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Norm S. (8.4x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Norm S. (8.4x Bullets Loaded x n)',
		value: 0,
	},
	{
		name: 'Lv1 Pierce 1 Hit (7x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Pierce 1 Hit (6.3x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Pierce 1 Hit (4.9x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv1 Pierce 3 Hits (7x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Pierce 4 Hits (6.3x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Pierce 6 Hits (4.9x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv1 Impact S. (7.0x Bullets Loaded x 2)',
		value: 0,
	},
	{
		name: 'Lv2 Impact S. (6.3x Bullets Loaded x 3)',
		value: 0,
	},
	{
		name: 'Lv3 Impact S. (4.9x Bullets Loaded x 5)',
		value: 0,
	},
	{
		name: 'Power Bottle (1.5x)',
		value: 1.5,
	},
	{
		name: 'Status Bottle (1.4x)',
		value: 1.4,
	},
	{
		name: 'Non-G Rank',
		value: 0,
	},
	{
		name: 'Hiden (+0.1)',
		value: 0.1,
	},
	{
		name: 'G Rank (+0.1)',
		value: 0.1,
	},
	{
		name: 'Origin/Zenith (+0.1)',
		value: 0.1,
	},

	// removed bowchargemodifier
	{
		name: 'Normal (All 1.0x)',
		value: 1.0,
	},
	{
		name: 'Swaxe Sword Mode Elemental Phial (1.3x)',
		value: 1.3,
	},
	{
		name: 'Maxed Transcend (2.0x)',
		value: 2.0,
	},
	{
		name: 'Swaxe Ele Phial & Maxed Transcend (2.6x)',
		value: 2.6,
	},
] as const;

export const monsterStatusDropdownOptions: DropdownItemOption[] = [
	{
		name: 'Paralysed (1.1x)',
		value: 1.1,
	},
	{
		name: 'Sleeping (3.0x)',
		value: 3.0,
	},
] as const;

export const hitzoneValueModifiersDropdownItems: DropdownItemOption[] = [
	{
		name: 'Active (+5 on raw hitzones)',
		value: 5,
	},
	{
		name: 'Exploit Weakness (+5 on 35+ raw hitzones)',
		value: 5,
	},
	{
		name: 'Determination (+5 on raw hitzones)',
		value: 5,
	},
	{
		name: 'ZZ Exploit Weakness (+5 on 30+ raw hitzones)',
		value: 5,
	},
	{
		name: 'Active (+5 Raw Hitzones)',
		value: 5,
	},
	{
		name: 'Raviente (+2 Raw Hitzones)',
		value: 2,
	},
	{
		name: 'Raw Acid (+10 raw hitzones)',
		value: 10,
	},
	{
		name: 'Elemental Exploit (+X to 20+ ele hitzones)', // TODO
		value: 0,
	},
	{
		name: 'Dissolver Up (+X to 15+ ele hitzones)',
		value: 0,
	},
	{
		name: 'Determination (+X to ele hitzones)',
		value: 0,
	},
	{
		name: 'Raw Weakness (+2 on Raw Hitzones)',
		value: 2.0,
	},
	{
		name: 'Elemental Weakness (+4 on all Elemental Hitzones)',
		value: 4.0,
	},
	{
		name: 'Both (+4 on Elemental, +2 on Raw)', // TODO
		value: 0,
	},
	{
		name: 'In Crit Distance (+5 on raw hitzones)',
		value: 5,
	},
] as const;

export const otherDropdownItems: DropdownItemOption[] = [
	{
		name: 'Active (1.0x)',
		value: 1.0,
	},
	{
		name: 'Downtime (0.8x)',
		value: 0.8,
	},
	{
		name: 'Inactive (1x)',
		value: 1.0,
	},
	{
		name: 'Active (1.25x)',
		value: 1.25,
	},
] as const;

export const affinityBaseCritMultiplierBonusDropdownItems: DropdownItemOption[] =
	[
		{
			name: 'Issen +1 (+5% / +0.10x)',
			value: 0.1,
		},
		{
			name: 'Issen +2 (+10% / +0.15x)',
			value: 0.15,
		},
		{
			name: 'Issen +3 (+20% / +0.25x)',
			value: 0.25,
		},
		{
			name: 'Ceaseless 1st Stage (+35% / +0.10x)',
			value: 0.1,
		},
		{
			name: 'Ceaseless 2nd Stage (+50% / +0.15x)',
			value: 0.15,
		},
		{
			name: 'Ceaseless Up 3rd Stage (+60% / +0.20x)',
			value: 0.2,
		},
		{
			name: 'Starving Wolf+2 (+50% / +0.10x)',
			value: 0.1,
		},
		{
			name: 'Determination (+100%)',
			value: 0.25,
		},

		// {
		// 	name: '1.8x LBG & Bow Crit Distance',
		// 	value: 1.8,
		// },
	];

export const affinityDropdownItems: DropdownItemOption[] = [
	{
		name: 'None',
		value: 0,
	},
	{
		name: 'None (+0)',
		value: 0,
	},
	{
		name: 'None (+0 / +0.00x)',
		value: 0,
	},
	{
		name: 'None (x1 Ele & Status)',
		value: 0,
	},
	{
		name: 'Affinity +20% (+20%)',
		value: 20,
	},
	{
		name: 'Affinity +22% (+22%)',
		value: 22,
	},
	{
		name: 'Affinity +24% (+24%)',
		value: 24,
	},
	{
		name: 'Affinity +26% (+26%)',
		value: 26,
	},

	{
		name: 'Below Blue or Gunners (+0%)',
		value: 0,
	},
	{
		name: 'Blue (+5%)',
		value: 5,
	},
	{
		name: 'White Upwards (+10%)',
		value: 10,
	},

	{
		name: 'Expert +1 (+10%)',
		value: 10,
	},
	{
		name: 'Expert +2 (+20%)',
		value: 20,
	},
	{
		name: 'Expert +3 (+30%)',
		value: 30,
	},
	{
		name: 'Expert +4 (+40%)',
		value: 40,
	},
	{
		name: 'Expert +5 (+50%)',
		value: 50,
	},
	{
		name: 'Determination (+100%)',
		value: 100,
	},

	{
		name: 'Critical Conversion (+30%)',
		value: 30,
	},

	{
		name: 'None or Determination',
		value: 0,
	},
	{
		name: 'Issen +1 (+5% / +0.10x)',
		value: 5,
	},
	{
		name: 'Issen +2 (+10% / +0.15x)',
		value: 10,
	},
	{
		name: 'Issen +3 (+20% / +0.25x)',
		value: 20,
	},

	{
		name: 'Ceaseless 1st Stage (+35% / +0.10x)',
		value: 35,
	},
	{
		name: 'Ceaseless 2nd Stage (+50% / +0.15x)',
		value: 50,
	},
	{
		name: 'Ceaseless Up 3rd Stage (+60% / +0.20x)',
		value: 60,
	},

	{
		name: 'Starving Wolf+1 (+50% / +0.00x)',
		value: 50,
	},
	{
		name: 'Starving Wolf+2 (+50% / +0.10x)',
		value: 50,
	},

	// {
	// 	name: '1.8x LBG & Bow Crit Distance',
	// 	value: 1.8,
	// },

	{
		name: 'Caravan Whetstone (+10%)',
		value: 10,
	},
	{
		name: 'Halk Drink (+30%)',
		value: 30,
	},
	{
		name: 'Both (+40%)',
		value: 40,
	},
	{
		name: 'Unsheathe and Parry Attacks (+100%)',
		value: 100,
	},

	{
		name: '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)',
		value: 10,
	},
	{
		name: '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
		value: 25,
	},
	{
		name: '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
		value: 40,
	},
] as const;

export const multipliedBaseDropdownItems: DropdownItemOption[] = [
	{
		name: 'None',
		value: 0,
	},
	{
		name: 'None (+0)',
		value: 0,
	},
	{
		name: 'None (+0 / +0.00x)',
		value: 0,
	},
	{
		name: 'None (1x)',
		value: 1,
	},
	{
		name: 'Strong Attack +1 (+20)',
		value: 20,
	},
	{
		name: 'Strong Attack +2 (+35)',
		value: 35,
	},
	{
		name: 'Strong Attack +3 (+50)',
		value: 50,
	},
	{
		name: 'Strong Attack +4 (+80)',
		value: 80,
	},
	{
		name: 'Determination (+100)',
		value: 100,
	},
	{
		name: 'Strong Attack +5 (+150)',
		value: 50,
	},
	{
		name: 'Strong Attack +6 (+200)',
		value: 200,
	},
	{
		name: 'Shooting Rampage (x1.1) (Ranged Only)',
		value: 0.1,
	},
	{
		name: 'Weapons Art Small (x1.01)',
		value: 0.01,
	},
	{
		name: 'Weapons Art Medium (x1.025)',
		value: 0.025,
	},
	{
		name: 'Weapons Art Large (x1.05)',
		value: 0.05,
	},
	{
		name: 'Power Charm (+6)',
		value: 6,
	},
	{
		name: 'Power Talon (+9)',
		value: 9,
	},
	{
		name: 'Both (+15)',
		value: 15,
	},
	{
		name: 'Demon Drug / Halk D. Drug (+3)',
		value: 3,
	},
	{
		name: 'Mega Demon Drug (+5)',
		value: 5,
	},
	{
		name: 'Small Atk Food (+3)',
		value: 3,
	},
	{
		name: 'Med Atk Food(+5)',
		value: 5,
	},
	{
		name: 'SR Med Atk Food (+10)',
		value: 10,
	},
	{
		name: 'SR Lg Atk Food (+15)',
		value: 15,
	},
	{
		name: 'Power Seed(+10)',
		value: 10,
	},
	{
		name: 'Demon Horn (+10)',
		value: 10,
	},
	{
		name: 'Art of Dancing (+10)',
		value: 10,
	},
	{
		name: 'Tonfa Body Aura (Ranged Only) (+25)',
		value: 25,
	},
	{
		name: 'Tonfa B. Aura A. Feature (Ranged Only) (+50)',
		value: 50,
	},
	{
		name: 'Long Sword Attack Up (+10)',
		value: 10,
	},
	{
		name: 'Long Sword Active Feature Attack Up (+40)',
		value: 40,
	},
	{
		name: '(Cat) Demon Horn (No Skill) (+10)',
		value: 10,
	},
	{
		name: '(Cat) Demon Horn +1 (+20)',
		value: 20,
	},
	{
		name: '(Cat) Demon Horn +2 (+40)',
		value: 40,
	},
	{
		name: '(Cat) D. Horn (No Skill) & Encourage+1 (+20)',
		value: 20,
	},
	{
		name: '(Cat) D. Horn (No Skill) & Encourage+2 (+30)',
		value: 30,
	},
	{
		name: '(Cat) Demon Horn+1 & Encourage+1 (+30)',
		value: 30,
	},
	{
		name: '(Cat) Demon Horn+2 & Encourage+1 (+50)',
		value: 50,
	},
	{
		name: '(Cat) Demon Horn+1 & Encourage+2 (+40)',
		value: 40,
	},
	{
		name: '(Cat) Demon Horn+2 & Encourage+2 (+60)',
		value: 60,
	},
	{
		name: 'HBG Power Barrel (+20)',
		value: 20,
	},
	{
		name: 'Lance Self Buff (+50)',
		value: 50,
	},
	{
		name: 'Active (+100)',
		value: 100,
	},
	{
		name: 'S. Assault Up (+120) (Z1)',
		value: 120,
	},
	{
		name: 'S. Assault Up (+140) (Z1)',
		value: 140,
	},
	{
		name: 'S. Assault Up (+160) (Z1)',
		value: 160,
	},
	{
		name: 'S. Assault Up (+180) (Z1)',
		value: 180,
	},
	{
		name: 'S. Assault Up (+200) (Z1)',
		value: 200,
	},
	{
		name: 'S. Assault Up (+220) (Z1)',
		value: 220,
	},
	{
		name: '1st Stage (+50)',
		value: 50,
	},
	{
		name: '2nd Stage (+130)',
		value: 130,
	},
	{
		name: '3rd Stage (+200) (Rush Up)',
		value: 200,
	},
	{
		name: '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)', // TODO
		value: 70,
	},
	{
		name: '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
		value: 100,
	},
	{
		name: '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
		value: 180,
	},
	{
		name: '1 Minute (+20)',
		value: 20,
	},
	{
		name: '3 Minutes (+50)',
		value: 50,
	},
	{
		name: '5 Minutes (+80)',
		value: 80,
	},
	{
		name: '10 Minutes (+130)',
		value: 130,
	},
	{
		name: '15 Minutes (+180)',
		value: 180,
	},
	{
		name: '20 Minutes (+200)',
		value: 200,
	},
	{
		name: 'Active (+40)',
		value: 40,
	},
	{
		name: 'Road Attack Lv 1 (+10)',
		value: 10,
	},
	{
		name: 'Road Attack Lv 2 (+20)',
		value: 20,
	},
	{
		name: 'Road Attack Lv 3 (+30)',
		value: 30,
	},
	{
		name: 'Road Attack Lv 4 (+50)',
		value: 50,
	},
	{
		name: 'Road Attack Lv 5 (+70)',
		value: 70,
	},
	{
		name: 'Lv 1 (+20 / +10)',
		value: 20,
	},
	{
		name: 'Lv 2 (+40 / +10)',
		value: 40,
	},
	{
		name: 'Lv 3 (+60 / +10)',
		value: 60,
	},
	{
		name: 'Last Stand Lv 1 (+80)',
		value: 80,
	},
	{
		name: 'Last Stand Lv 2 (+120)',
		value: 120,
	},
	{
		name: 'Dure Attack Lv 1 (+50)',
		value: 50,
	},
	{
		name: 'Dure Attack Lv 2 (+75)',
		value: 75,
	},
	{
		name: 'Dure Attack Lv 3 (+100)',
		value: 100,
	},
	{
		name: 'Dure Attack Lv 4 (+150)',
		value: 15,
	},
	{
		name: 'Dure Attack Lv 5 (+200)',
		value: 200,
	},
	{
		name: 'Active (+100)',
		value: 100,
	},

	{ name: 'None', value: 0 }, // TODO
	{
		name: '1 Block (+40 / +30 / +20)',
		value: 1,
	},
	{
		name: '2 Blocks (+80 / +60 / +40)',
		value: 2,
	},
	{
		name: '3 Blocks (+120 / +90 / +60)',
		value: 3,
	},
	{
		name: '4 Blocks (+160 / +120 / +80)',
		value: 4,
	},
	{
		name: '5 Blocks (+200 / +150 / +100)',
		value: 5,
	},
	{
		name: '6 Blocks (+220 / +165 / +110)',
		value: 6,
	},
	{
		name: '7 Blocks (+240 / +180 / +120)',
		value: 7,
	},
	{
		name: '8 Blocks (+260 / +195 / +130)',
		value: 8,
	},
	{
		name: '9 Blocks (+280 / +210 / +140)',
		value: 9,
	},
	{
		name: '10 Blocks (+300 / +225 / +150)',
		value: 10,
	},
	{
		name: '1 Block (+70 / +50 / +30)',
		value: 11,
	},
	{
		name: '2 Blocks (+140 / +100 / +60)',
		value: 12,
	},
	{
		name: '3 Blocks (+210 / +150 / +90)',
		value: 13,
	},
	{
		name: '4 Blocks (+240 / +175 / +110)',
		value: 14,
	},
	{
		name: '5 Blocks (+270 / +200 / +130)',
		value: 15,
	},
	{
		name: '6 Blocks (+300 / +225 / +150)',
		value: 16,
	},
] as const;

export const multipliersDropdownItems: DropdownItemOption[] = [
	{
		name: 'None (1x)',
		value: 1,
	},
	{ name: 'Crit C. Up +1 (Z1)', value: 5 },
	{ name: 'Crit C. Up +2 (Z1)', value: 10 },
	{
		name: '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)',
		value: 1.05,
	},
	{
		name: '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
		value: 1.1,
	},
	{
		name: '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
		value: 1.2,
	},
	{
		name: 'G Rank Atk Sm (x1.10)',
		value: 1.1,
	},
	{
		name: 'G Rank Atk Sm Bonus (x1.15)',
		value: 1.15,
	},
	{
		name: 'G Rank Atk Lg (x1.15)',
		value: 1.15,
	},
	{
		name: 'G Rank Atk Lg Bonus (x1.2)',
		value: 1.2,
	},
	{
		name: 'Vigorous (x1.15)',
		value: 1.15,
	},
	{
		name: 'Worry (x0.70)',
		value: 0.7,
	},
	{
		name: 'Bowguns (x1.3)',
		value: 1.3,
	},
	{
		name: 'Melee / Bows (x1.5)',
		value: 1.5,
	},
	{
		name: 'Active (+50 Ranged, +100 Melee)',
		value: 0, // TODO
	},
	{
		name: 'Ranged Large Hiden (x1.4)',
		value: 1.4,
	},
	{
		name: 'SnS or Ranged (x1.3)',
		value: 1.3,
	},
	{
		name: 'Other Weapons (x1.2)',
		value: 1.2,
	},
	{
		name: '1 Sharpen (x1.05)',
		value: 1.05,
	},
	{
		name: '2 Sharpens (x1.10)',
		value: 1.1,
	},
	{
		name: '3 Sharpens (x1.15)',
		value: 1.15,
	},
	{
		name: '4 Sharpens (x1.20)',
		value: 1.2,
	},
	{
		name: '1 Bar (x1.10)',
		value: 1.1,
	},
	{
		name: '2 Bar (x1.20)',
		value: 1.2,
	},
	{
		name: '3 Bar (x1.30)',
		value: 1.3,
	},
	{
		name: '4 Bar (x1.40)',
		value: 1.4,
	},
	{
		name: '5 Bar (x1.50)',
		value: 1.5,
	},
	{
		name: '6 Bar (x1.60)',
		value: 1.6,
	},
	{
		name: 'Hammer Perfect Charge (x1.30)',
		value: 1.3,
	},
	{
		name: 'Long Sword Maxed Gauge (x1.2375)',
		value: 1.2375,
	},
	{
		name: 'Swaxe Hiden Boost (x1.05)',
		value: 1.05,
	},
	{
		name: 'MS Hiden Boost (x1.03)',
		value: 1.05, // TODO this is legacy value
	},
	{
		name: 'Yes (x1.2)',
		value: 1.2,
	},
] as const;

export const flatAdditionsDropdownItems: DropdownItemOption[] = [
	{
		name: 'None',
		value: 0,
	},
	{
		name: '1 Storm / Suprem / Burst Piece (+15)',
		value: 15,
	},
	{
		name: '2 Storm / Suprem / Burst Pieces (+30)',
		value: 30,
	},
	{
		name: '3 Storm / Suprem / Burst Pieces (+45)',
		value: 45,
	},
	{
		name: '4 Storm / Suprem / Burst Pieces (+60)',
		value: 60,
	},
	{
		name: '5 Storm / Suprem / Burst Pieces (+80)',
		value: 80,
	},
	{
		name: '1 Origin Piece (+20)',
		value: 20,
	},
	{
		name: '2 Origin Pieces (+40)',
		value: 40,
	},
	{
		name: '3 Origin Pieces (+60)',
		value: 60,
	},
	{
		name: '4 Origin Pieces (+80)',
		value: 80,
	},
	{
		name: '5 Origin Pieces (+110)',
		value: 110,
	},
	{
		name: '3+ G Rank Pieces (+30)',
		value: 30,
	},
	{
		name: 'Secret Technique Used (+320)',
		value: 320,
	},
	{
		name: 'On Self (+15)',
		value: 15,
	},
	{
		name: 'Hit by Other (+30)',
		value: 30,
	},
	{
		name: 'Red Soul Up (+100)',
		value: 100,
	},
	{
		name: 'Active (+20)',
		value: 20,
	},
	{
		name: 'Active (+5)',
		value: 5,
	},
	{
		name: 'Bond Level 1(+0)', // TODO
		value: 0,
	},
	{
		name: 'Bond Level 2(+10)',
		value: 10,
	},
	{
		name: 'Bond Level 3(+20)',
		value: 20,
	},
	{
		name: 'Bond Level 4(+30)',
		value: 30,
	},
] as const;

/**If this is the wrong dropdown try elementDropdownItems (possible rename) */
export const elementalSkillsDropdownItems: DropdownItemOption[] = [
	{
		name: 'None (1x)',
		value: 1,
	},
	{
		name: 'Small or Halk Drink (1.1x)',
		value: 1.1,
	},
	{
		name: 'Large (1.2x)',
		value: 1.2,
	},
	{
		name: 'Small and Halk Drink (1.21x)',
		value: 1.21,
	},
	{
		name: 'Large and Halk Drink (1.331x)',
		value: 1.331,
	},
	{
		name: 'Active (1.1x)',
		value: 1.1,
	},
	{
		name: 'SnS Active Feature (1.2x)',
		value: 1.2,
	},
	{
		name: 'Both (1.32x)',
		value: 1.32,
	},
	{
		name: 'Ele Up Song (1.1x)',
		value: 1.1,
	},
] as const;

export const statusSkillsDropdownItems: DropdownItemOption[] = [
	{ name: 'None (1x)', value: 1 },
	{
		name: 'Standard (0.38x Status)',
		value: 0.38,
	},
	{
		name: 'Drug Knowledge Up (0.42x Status)',
		value: 0.42,
	},
	{
		name: 'On (1.125x)',
		value: 1.125,
	},
	// { TODO? name: 'On (For Sleep add +10 raw hitzone)', value: 1 },
	{
		name: 'Normal (1.1x)',
		value: 1.1,
	},
	{
		name: 'Zenith (1.5x)',
		value: 1.5,
	},
	{
		name: 'Both (1.65x)',
		value: 1.65,
	},
	{
		name: 'SnS Active Feature (1.2x)',
		value: 1.2,
	},
	{
		name: 'Swaxe Status Phial Active (1.3x)',
		value: 1.3,
	},
] as const;

export const divaPrayerGemsDropdownItems: DropdownItemOption[] = [
	{
		name: 'None',
		value: 0,
	},
	{
		name: 'Affinity UP Lv1',
		value: 25,
	},
	{
		name: 'Affinity UP Lv2',
		value: 50,
	},
	{
		name: 'Affinity UP Lv3',
		value: 100,
	},
	{
		name: 'Cutting UP Lv1',
		value: 1,
	},
	{
		name: 'Cutting UP Lv2',
		value: 2,
	},
	{
		name: 'Cutting UP Lv3',
		value: 3,
	},
	{
		name: 'Impact UP Lv1',
		value: 1,
	},
	{
		name: 'Impact UP Lv2',
		value: 2,
	},
	{
		name: 'Impact UP Lv3',
		value: 3,
	},
	{
		name: 'Shot UP Lv1',
		value: 1,
	},
	{
		name: 'Shot UP Lv2',
		value: 2,
	},
	{
		name: 'Shot UP Lv3',
		value: 3,
	},
	{
		name: 'Element UP Lv1',
		value: 1,
	},
	{
		name: 'Element UP Lv2',
		value: 2,
	},
	{
		name: 'Element UP Lv3',
		value: 3,
	},
	{
		name: 'Friendship UP Lv1',
		value: 10,
	},
	{
		name: 'Friendship UP Lv2',
		value: 20,
	},
	{
		name: 'Friendship UP Lv3',
		value: 30,
	},
];

export const sigilDropdownItems: DropdownItemOption[] = [
	{
		name: 'None',
		value: 0,
	},
	{
		name: '0 Sigils',
		value: 0,
	},
	{
		name: '1 Sigil',
		value: 1,
	},
	{
		name: '2 Sigils',
		value: 2,
	},
	{
		name: '3 Sigils',
		value: 3,
	},
	{
		name: '4 Sigils',
		value: 4,
	},
] as const;
