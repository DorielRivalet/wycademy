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

// TODO may need to double check for updated variables
export const legacyCalculatorKeysMap: { [key: string]: string } = {
	// weaponclass: '',
	AffinitySharp: 'inputMeleeSharpnessAffinity',
	AffinityDrink: 'inputAffinityItems',
	ACfood: 'inputFoodConsumables',
	ACsigil2: 'inputNumberSigil2Attack',
	rawhb: 'inputNumberCuttingHitzone',
	ACconsumption: 'inputConsumptionSlayer',
	AffinityNatural: 'inputNumberNaturalAffinity',
	elementtype: 'inputElement',
	bulletstrengthmod: 'inputBulletStrengthModifier',
	ACbondhunter: 'inputBondMaleHunter',
	HBGshotstocompress: 'inputNumberCompressedShot',
	firemulti: 'inputFireMultipliers',
	AffinityGSAF: 'inputGsActiveFeature',
	ACweapontype: 'inputWeaponType',
	ACdstonfa: 'inputWeaponSpecific',
	ACarmour1: 'inputArmor1',
	ACstylishass: 'inputStylishAssault',
	customMotion: 'inputNumberTotalMotionValue',
	AffinityExpert: 'inputExpertSkills',
	fakeelement: 'inputNumberElementalValueReplacement',
	Absdef: 'inputAbsoluteDefense',
	thunderclad: 'inputThunderClad',
	ACrush: 'inputRush',
	//weapontype: '',
	ACpassives: 'inputPassiveItems',
	icemulti: 'inputIceMultipliers',
	defenseratemod: 'inputNumberMonsterRage',
	elehb2: 'inputNumberThunderHitzone',
	exweak: 'inputExploitWeakness',
	ACseeds: 'inputSeedsFlutesCat',
	ACadren: 'inputAdrenalineVigorous',
	watermulti: 'inputWaterMultipliers',
	//rangedfakeelement: '',
	statusvalue: 'inputNumberStatusValue',
	sniperraw: 'inputPrecisionSniperCritS',
	ACarmour2: 'inputOriginArmor',
	critmulti: 'inputCritMode',
	AClonewolf: 'inputLoneWolf',
	HBGcompressedshots: 'inputCompressedShotMultiplier',
	quickshotchargemodifier: 'inputQuickShot',
	//WeaponStyle: '',
	ACsoul: 'inputRedSoul',
	acidShot: 'inputAcidShots',
	additional: 'inputNumberOtherAdditional',
	ACsigil: 'inputNumberSigil1Attack',
	ACsecrettech: 'inputGsr999SecretTech',
	rangeddistancemulti: 'inputCriticalDistanceMultiplier',
	ACassist: 'inputAssistance',
	ACdure: 'inputDuremudiraAttack',
	eleHalk: 'inputElementalAttackMultiplier',
	AClengthup: 'inputLengthUp',
	ACadvlvl: 'inputRoadAdvLvFlr',
	elehb3: 'inputNumberIceHitzone',
	sharpness: 'inputSharpness',
	HBGshotstocompressEle: 'inputNumberCompressedElementShot',
	//tonfamode: '',
	statusSigil: 'inputStatusSigil',
	Premium: 'inputPremiumBoost',
	ACVamp: 'inputNumberVampirism',
	defenserate: 'inputNumberDefenseRate',
	dragonmulti: 'inputDragonMultipliers',
	customElemental: 'inputNumberElementalMultiplier',
	AffinityStylerank: 'inputStyleRankAffinity',
	drugknowledgeupToggle: 'inputDrugKnowledge',
	ACtower: 'inputRoadAttack',
	statusAssaultToggle: 'inputStatusAssault',
	ACvigup: 'inputVigorousUp',
	//displayedattack: '',
	bowbottles: 'inputBowCoatingsMultiplier',
	//minrawhb: '',
	AClance: 'inputLanceHbg',
	AffinityIssen: 'inputIssenSkills',
	statusGuildpugi: 'inputGuildPoogie',
	statusStatusattack: 'inputStatusAttackUp',
	AffinityFlash: 'inputFlashConversion',
	eleSwaxe: 'inputWeaponElementMultipliers',
	fencingtoggle: 'inputFencing',
	//rangedelementtypeBow: '',
	//maxrawhb: '',
	AChiden: 'inputHidenSkills',
	AffinitySigils3: 'inputNumberSigil3Affinity',
	bowgunshotmodifier: 'inputShotMultiplier',
	ACcomsup: 'inputCombatSupremacy',
	pbreak: 'inputPointBreakthrough',
	ACrising: 'inputShiriagari',
	AffinitySW: 'inputStarvingWolf',
	AffinitySigils2: 'inputNumberSigil2Affinity',
	ACcaravan: 'inputCaravanSkills',
	ACcritup: 'inputCritConversionUp',
	ACpatient: 'inputObscurity',
	customHit: 'inputNumberHitCount',
	elehb0: 'inputNumberFireHitzone',
	ACroadlast: 'inputRoadLastStand',
	hhweak: 'inputHuntingHornDebuff',
	ACincite: 'inputIncitement',
	// ACcritconv: 'inputCritConversionUp',
	ACpartnyaabond: 'inputPartnyaaBond',
	eleex: 'inputElementalExploiter',
	ACsrattack: 'inputNumberStyleRankAttack',
	trueraw: 'inputNumberTrueRaw',
	ACconqpot: 'inputAttackMedicine',
	//drugknowledgeToggle: '',
	ACadvfloor: 'inputNumberRoadFloor',
	elehb1: 'inputNumberWaterHitzone',
	statusPhial: 'inputWeaponStatusModifiers',
	AffinityCeaseless: 'inputCeaseless',
	ACfurious: 'inputFurious',
	ACarmourG: 'inputGArmorPieces',
	ACatkskill: 'inputAttackSkills',
	thundermulti: 'inputThunderMultipliers',
	HBGchargemulti: 'inputHbgChargeShot',
	ACconqatk: 'inputNumberConquestAttack',
	AffinitySigils: 'inputNumberSigil1Affinity',
	defenseratemod2: 'inputNumberHCModifiers',
	statusmulti: 'inputMonsterStatus',
	AChh: 'inputHhAttackSongs',
	eleHH: 'inputHhElementalUp',
	averaging: 'inputCritMode',
	ACsigil3: 'inputNumberSigil3Attack',
	bowchargemodifier: 'inputChargeMultiplier',
	ssmulti: 'inputNumberTranscendRawMultiplier',
	HBGcompressedshotEle: 'inputCompressedElementShot',
	elehb4: 'inputNumberDragonHitzone',
};

export const legacyCalculatorNumberInputs = [
	'ACdisplayedattack',
	'ACtrueraw',
	'ACcritconv',
	'ACdrug',
	'ACVamp',
	'ACadvfloor',
	'ACconqatk',
	'customMotion',
	'customHit',
	'customElemental',
	'displayedattack',
	'trueraw',
	'ulSigil',
	'ACsrattack',
	'ACsigil',
	'ACsigil2',
	'ACsigil3',
	'zeniAtk',
	'aoeAtk',
	'AffinityNatural',
	'AffinitySigils',
	'AffinitySigils2',
	'AffinitySigils3',
	'aoeAff',
	'critmulti',
	'wcorrection',
	'ssmulti',
	'rangedmotionvalue',
	'HBGshotstocompress',
	'consumptionS',
	'motionvalue',
	'fakeelement',
	'eleSigil1',
	'eleSigil2',
	'eleSigil3',
	'zeniEle',
	'aoeEle',
	'HBGshotstocompressEle',
	'compressedshotpower',
	'rangedfakeelement',
	'rangedEleSigil1',
	'rangedEleSigil2',
	'rangedEleSigil3',
	'zeniEleRanged',
	'aoeEleRanged',
	'statusvalue',
	'statusassault',
	'drugknowledge',
	'additional',
	'gunlanceraw',
	'ACtrueoutHolder',
	'arbitrary',
	'affinityvalue',
	'arbitraryRanged',
	'rangedaffinityvalue',
	'defenserate',
	'defenseratemod2',
	'defenseratemod',
	'rawhb',
	'minrawhb',
	'maxrawhb',
	'elehb0',
	'elehb1',
	'elehb2',
	'elehb3',
	'elehb4',
];

export const legacyCalculatorValuesMap: {
	[key: string]: { [key: string]: string };
}[] = [
	{
		ACweapontype: {
			'1': 'Sword and Shield',
			'2': 'Dual Swords',
			'3': 'Great Sword',
			'4': 'Long Sword',
			'5': 'Hammer',
			'6': 'Hunting Horn',
			'7': 'Lance',
			'8': 'Gunlance',
			'9': 'Tonfa',
			'10': 'Switch Axe F',
			'11': 'Light Bowgun',
			'12': 'Heavy Bowgun',
			'13': 'Bow',
			'14': 'Magnet Spike',
		},

		AffinityStylerank: {
			'0': 'None',
			'20': 'Affinity +20% (+20%)',
			'24': 'Affinity +24% (+24%)',
			'26': 'Affinity +26% (+26%)',
		},
		AffinitySharp: {
			'0': 'Below Blue or Gunners (+0%)',
			'5': 'Blue (+5%)',
			'10': 'White Upwards (+10%)',
		},
		AffinityExpert: {
			'0': 'None',
			'10': 'Expert +1 (+10%)',
			'20': 'Expert +2 (+20%)',
			'30': 'Expert +3 (+30%)',
			'40': 'Expert +4 (+40%)',
			'50': 'Expert +5 (+50%)',
			'100': 'Determination (+100%)',
		},
		AffinityFlash: { '0': 'None', '30': 'Critical Conversion (+30%)' },
		AffinityIssen: {
			'0': 'None or Determination',
			'5': 'Issen +1 (+5% / +0.10x)',
			'10': 'Issen +2 (+10% / +0.15x)',
			'20': 'Issen +3 (+20% / +0.25x)',
		},
		AffinityCeaseless: {
			'0': 'None (1x)',
			'1': 'Ceaseless 1st Stage (+35% / +0.10x)',
			'2': 'Ceaseless 2nd Stage (+50% / +0.15x)',
			'3': 'Ceaseless Up 3rd Stage (+60% / +0.20x)',
		},
		AffinitySW: {
			'0': 'None (1x)',
			'1': 'Starving Wolf+1 (+50% / +0.00x)',
			'2': 'Starving Wolf+2 (+50% / +0.10x)',
		},
		AffinityDrink: {
			'0': 'None',
			'30': 'Halk Drink (+30%)',
			'10': 'Caravan Whetstone (+10%)',
			'40': 'Both (+40%)',
		},
		AffinityGSAF: { '0': 'None', '100': 'Unsheathe and Parry Attacks (+100%)' },
		ACatkskill: {
			'0': 'None',
			'50.0': 'Attack Absolute (+50)',
			'100': 'Determination (+100)',
			'20': 'Strong Attack +1 (+20)',
			'35': 'Strong Attack +2 (+35)',
			'50': 'Strong Attack +3 (+50)',
			'80': 'Strong Attack +4 (+80)',
			'150': 'Strong Attack +5 (+150)',
			'200': 'Strong Attack +6 (+200)',
		},
		ACcaravan: {
			'0': 'None',
			'0.1': 'Shooting Rampage (x1.1) (Ranged Only)',
			'0.01': 'Weapons Art Small (x1.01)',
			'0.025': 'Weapons Art Medium (x1.025)',
			'0.05': 'Weapons Art Large (x1.05)',
		},
		ACpassives: {
			'0': 'None',
			'6': 'Power Charm (+6)',
			'9': 'Power Talon (+9)',
			'15': 'Both (+15)',
		},
		ACfood: {
			'0': 'None',
			'3': 'Demon Drug / Halk D. Drug (+3)',
			'5': 'Mega Demon Drug (+5)',
			'3.0': 'Small Atk Food (+3)',
			'5.0': 'Med Atk Food(+5)',
			'10': 'SR Med Atk Food (+10)',
			'15': 'SR Lg Atk Food (+15)',
		},
		ACseeds: {
			'0': 'None',
			'10': 'Demon Horn (+10)', // todo
			'25': 'Power Pill (+25)',
			'40': 'Long Sword Active Feature Attack Up (+40)',
			'20': '(Cat) Demon Horn +1 (+20)',
			'30': '(Cat) Demon Horn+1 & Encourage+1 (+30)',
			'50': '(Cat) Demon Horn+2 & Encourage+1 (+50)',
			'60': '(Cat) Demon Horn+2 & Encourage+2 (+60)',
		},
		AClance: {
			'0': 'None',
			'20': 'HBG Power Barrel (+20)',
			'50': 'Lance Self Buff (+50)',
		},
		AClonewolf: {
			'0': 'None',
			'100': 'Active (+100)',
		},
		ACcritup: {
			'0': 'None',
			'1': 'Crit C. Up +1 (Z1)',
			'2': 'Crit C. Up +2 (Z1)',
		},
		ACstylishass: {
			'0': 'None',
			'100': 'Active (+100)',
			'120': 'S. Assault Up (+120) (Z1)',
			'140': 'S. Assault Up (+140) (Z1)',
			'160': 'S. Assault Up (+160) (Z1)',
			'180': 'S. Assault Up (+180) (Z1)',
			'200': 'S. Assault Up (+200) (Z1)',
			'220': 'S. Assault Up (+220) (Z1)',
		},
		ACconsumption: { '0': 'None', '100': 'Active (+100)' },
		ACpatient: {
			'0': 'None',
			'1': '1 Block (+40 / +30 / +20)',
			'2': '2 Blocks (+80 / +60 / +40)',
			'3': '3 Blocks (+120 / +90 / +60)',
			'4': '4 Blocks (+160 / +120 / +80)',
			'5': '5 Blocks (+200 / +150 / +100)',
			'6': '6 Blocks (+220 / +165 / +110)',
			'7': '7 Blocks (+240 / +180 / +120)',
			'8': '8 Blocks (+260 / +195 / +130)',
			'9': '9 Blocks (+280 / +210 / +140)',
			'10': '10 Blocks (+300 / +225 / +150)',
			'11': '1 Block (+70 / +50 / +30)',
			'12': '2 Blocks (+140 / +100 / +60)',
			'13': '3 Blocks (+210 / +150 / +90)',
			'14': '4 Blocks (+240 / +175 / +110)',
			'15': '5 Blocks (+270 / +200 / +130)',
			'16': '6 Blocks (+300 / +225 / +150)',
		},
		ACrush: {
			'0': 'None',
			'50': '1st Stage (+50)',
			'130': '2nd Stage (+130)',
			'200': '3rd Stage (+200) (Rush Up)',
		},
		ACfurious: {
			'0': 'None (x1 Ele & Status)',
			'70': '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)',
			'100': '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
			'180': '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
		},
		ACrising: {
			'0': 'None',
			'20': '1 Minute (+20)',
			'50': '3 Minutes (+50)',
			'80': '5 Minutes (+80)',
			'130': '10 Minutes (+130)',
			'180': '15 Minutes (+180)',
			'200': '20 Minutes (+200)',
		},
		ACincite: { '0': 'None', '40': 'Active (+40)' },
		AClengthup: { '0': 'None', '1': 'Active' },
		ACtower: {
			'0': 'None',
			'10': 'Road Attack Lv 1 (+10)',
			'20': 'Road Attack Lv 2 (+20)',
			'30': 'Road Attack Lv 3 (+30)',
			'50': 'Road Attack Lv 4 (+50)',
			'70': 'Road Attack Lv 5 (+70)',
		},
		ACadvlvl: {
			'0': 'None',
			'20': 'Lv 1 (+20 / +10)',
			'40': 'Lv 2 (+40 / +10)',
			'60': 'Lv 3 (+60 / +10)',
		},
		ACroadlast: {
			'0': 'None',
			'80': 'Last Stand Lv 1 (+80)',
			'120': 'Last Stand Lv 2 (+120)',
		},
		ACdure: {
			'0': 'None',
			'50': 'Dure Attack Lv 1 (+50)',
			'75': 'Dure Attack Lv 2 (+75)',
			'100': 'Dure Attack Lv 3 (+100)',
			'150': 'Dure Attack Lv 4 (+150)',
			'200': 'Dure Attack Lv 5 (+200)',
		},
		ACconqpot: {
			'0': 'None',
			'100': 'Active (+100)',
		},
		AChh: {
			'1.0': 'None (1x)',
			'1.1': 'G Rank Atk Sm (x1.10)',
			'1.150': 'G Rank Atk Sm Bonus (x1.15)',
			'1.1500': 'G Rank Atk Lg (x1.15)',
			'1.200': 'G Rank Atk Lg Bonus (x1.2)',
		},
		ACadren: {
			'1.0': 'None (1x)',
			'1.15': 'Vigorous (x1.15)',
			'0.7': 'Worry (x0.70)',
			'1.3': 'Bowguns (x1.3)',
			'1.5': 'Melee / Bows (x1.5)',
		},
		ACvigup: { '0': 'None', '1': 'Active (+50 Ranged, +100 Melee)' },
		AChiden: {
			'1.0': 'None (1x)',
			'1.4': 'Ranged Large Hiden (x1.4)',
			'1.3': 'SnS or Ranged (x1.3)',
			'1.2': 'Other Weapons (x1.2)',
		},
		ACdstonfa: {
			'1': 'None (1x)',
			'1.05': '1 Sharpen (x1.05)',
			'1.1': '2 Sharpens (x1.10)',
			'1.15': '3 Sharpens (x1.15)',
			'1.2': '4 Sharpens (x1.20)',
			'1.100': '1 Bar (x1.10)',
			'1.200': '2 Bar (x1.20)',
			'1.300': '3 Bar (x1.30)',
			'1.400': '4 Bar (x1.40)',
			'1.500': '5 Bar (x1.50)',
			'1.600': '6 Bar (x1.60)',
			'1.30': 'Hammer Perfect Charge (x1.30)',
			'1.2375': 'Long Sword Maxed Gauge (x1.2375)',
			// todo
			'1.050': 'Swaxe Hiden Boost (x1.05)',
		},
		// todo? AChammer: { '1': 'None', '1': 'Perfect Charge (Hiden) (x1.3)' },
		ACcomsup: {
			'1': 'None (1x)',
			'1.2': 'Yes (x1.2)',
		},
		ACarmour1: {
			'0': 'None',
			'15': '1 Storm / Suprem / Burst Piece (+15)',
			'30': '2 Storm / Suprem / Burst Pieces (+30)',
			'45': '3 Storm / Suprem / Burst Pieces (+45)',
			'60': '4 Storm / Suprem / Burst Pieces (+60)',
			'80': '5 Storm / Suprem / Burst Pieces (+80)',
		},
		ACarmour2: {
			'0': 'None',
			'20': '1 Origin Piece (+20)',
			'40': '2 Origin Pieces (+40)',
			'60': '3 Origin Pieces (+60)',
			'80': '4 Origin Pieces (+80)',
			'110': '5 Origin Pieces (+110)',
		},
		ACarmourG: {
			'0': 'None',
			'30': '3+ G Rank Pieces (+30)',
		},
		ACsecrettech: { '0': 'None', '320': 'Secret Technique Used (+320)' },
		ACsoul: {
			'0': 'None',
			'15': 'On Self (+15)',
			'30': 'Hit by Other (+30)',
			'100': 'Red Soul Up (+100)',
		},
		ACassist: { '0': 'None', '20': 'Active (+20)' },
		ACbondhunter: { '0': 'None', '5': 'Active (+5)' },
		ACpartnyaabond: {
			'0': 'None',
			'0.0': 'Bond Level 1(+0)',
			'10': 'Bond Level 2(+10)',
			'20': 'Bond Level 3(+20)',
			'30': 'Bond Level 4(+30)',
		},
		firemulti: {
			'1': 'None (1x)',
			'1.1': 'Small or Halk Drink (1.1x)',
			'1.2': 'Large (1.2x)',
			'1.21': 'Small and Halk Drink (1.21x)',
			'1.331': 'Large and Halk Drink (1.331x)',
		},
		watermulti: {
			'1': 'None (1x)',
			'1.1': 'Small or Halk Drink (1.1x)',
			'1.2': 'Large (1.2x)',
			'1.21': 'Small and Halk Drink (1.21x)',
			'1.331': 'Large and Halk Drink (1.331x)',
		},
		thundermulti: {
			'1': 'None (1x)',
			'1.1': 'Small or Halk Drink (1.1x)',
			'1.2': 'Large (1.2x)',
			'1.21': 'Small and Halk Drink (1.21x)',
			'1.331': 'Large and Halk Drink (1.331x)',
		},
		icemulti: {
			'1': 'None (1x)',
			'1.1': 'Small or Halk Drink (1.1x)',
			'1.2': 'Large (1.2x)',
			'1.21': 'Small and Halk Drink (1.21x)',
			'1.331': 'Large and Halk Drink (1.331x)',
		},
		dragonmulti: {
			'1': 'None (1x)',
			'1.1': 'Small or Halk Drink (1.1x)',
			'1.2': 'Large (1.2x)',
			'1.21': 'Small and Halk Drink (1.21x)',
			'1.331': 'Large and Halk Drink (1.331x)',
		},
		eleHalk: {
			'1': 'None (1x)',
			'1.1': 'Active (1.1x)',
			'1.2': 'SnS Active Feature (1.2x)',
			'1.32': 'Both (1.32x)',
		},
		eleHH: {
			'1': 'None (1x)',
			'1.1': 'Ele Up Song (1.1x)',
		},
		abnormalityToggle: { '0': 'Off', '1': 'On' },
		// drugknowledgeToggle: {
		// 	'0': 'Off',
		// 	'1': 'On',
		// },
		drugknowledgeupToggle: {
			'0.38': 'Standard (0.38x Status)',
			'0.42': 'Drug Knowledge Up (0.42x Status)',
		},
		statusAssaultToggle: {
			'0': 'None',
			'1': 'On (For Sleep add +10 raw hitzone)',
		},
		statusStatusattack: {
			'1': 'None (1x)',
			'1.125': 'On (1.125x)',
		},
		statusGuildpugi: {
			'1.0': 'None (1x)',
			'1.125': 'On (1.125x)',
		},
		statusSigil: {
			'1.0': 'None (1x)',
			'1.1': 'Normal (1.1x)',
			'1.5': 'Zenith (1.5x)',
			'1,65': 'Both (1.65x)',
		},
		statusPhial: {
			'1.0': 'None (1x)',
			'1.2': 'SnS Active Feature (1.2x)',
			'1.3': 'Swaxe Status Phial Active (1.3x)',
		},
		// weaponclass: {
		// 	'0': 'None (+0)',
		// 	'20': 'Affinity +20% (+20%)',
		// 	'24': ' Affinity +24% (+24%)',
		// 	'26': 'Affinity +26% (+26%)',
		// },
		weapontype: {
			'1': 'Sword and Shield',
			'2': 'Dual Swords',
			'3': 'Great Sword',
			'4': 'Long Sword',
			'5': 'Hammer',
			'6': 'Hunting Horn',
			'7': 'Lance',
			'8': 'Gunlance',
			'9': 'Tonfa',
			'10': 'Switch Axe F',
			'11': 'Magnet Spike',
		},
		rangedweapontype: {
			'1': 'Light Bowgun',
			'2': 'Heavy Bowgun',
			'3': 'Bows',
		},
		WeaponStyle: {
			'.earthstyle': 'Earth Style',
			'.heavenstyle': 'Heaven Style',
			'.stormstyle': 'Storm Style',
			'.extremestyle': 'Extreme Style',
		},
		aoeAtkCount: {
			'0': 'None',
			'1': '1 Sigil',
			'2': '2 Sigils',
			'3': '3 Sigils',
			'4': '4 Sigils',
		},
		aoeAffCount: {
			'0': 'None',
			'1': '1 Sigil',
			'2': '2 Sigils',
			'3': '3 Sigils',
			'4': '4 Sigils',
		},
		averaging: {
			'0': 'All Crits',
			'1': 'Averaged',
			'2': 'No Crits',
		},
		sharpness: {
			'0': 'Red (0.6x)',
			'1': 'Orange (0.85x)',
			'2': 'Yellow (1.1x)',
			'3': 'Green (1.325x)',
			'4': 'Blue (1.45x)',
			'5': 'White (1.6x)',
			'6': 'Purple (1.7x)',
			'7': 'Cyan (1.8x)',
		},
		fencingtoggle: {
			'0': 'None',
			'1': '+2',
		},
		rangeddistancemulti: {
			'1.8': '1.8x LBG & Bow Crit Distance',
			'2.3': '2.3x HBG 1st Half Crit Distance',
			'2.00': '2.0x HBG 2nd Half Crit Distance',
			'1.9': '1.9x LBG & Bow Crit D. & Z Piece',
			'2.45': '2.45x HBG 1st Half Crit D. & Zenith',
			'2.15': '2.15x HBG 2nd Half Crit D. & Zenith',
			'2.4': '2.4x Z 1st Half Crit D. (HBG Active Feature)',
			'2.10': '2.1x Z 2nd Half Crit D. (HBG Active Feature)',
			'2.1': '2.1x 1st Half Crit D. (HBG Active Feature)',
			'1.80': '1.8x 2nd Half Crit D. (HBG Active Feature)',
			'2.0': '2.0x HBG 1st Half Crit D.',
			'1.7': '1.7x 2nd Half Crit D.',
			'1.5': '1.5x Bow or LBG Crit D. ',
			'2.2': '2.2x',
			'1.6': '1.6x',
			'1.4': '1.4x',
			'1.3': '1.3x',
			'1.2': '1.2x',
			'1.1': '1.1x',
			'1': '1.0x',
			'2.30': '2.3x Step Shot & Z Piece',
			// todo '2.0': '',
			// '1.9': '',
			// '1.6': '',
			'2.40': '2.4x Step Shot & Z Piece (LBG Active Feature)',
			// '2.10': '',
			'2.50': '2.5x',
			'2.55': '2.55x',
			'2.60': '2.60x',
		},
		bulletstrengthmod: {
			'0': 'None (1x)',
			steady: 'Steady Hand (All Below)',
			rapid: 'Normal / Rapid Up (1.1x)',
			pierce: 'Pierce Up (1.1x)',
			scatter: 'Pellet / Scatter Up (1.3x)',
		},
		HBGchargemulti: {
			'1.0': 'Normal / Charge Lv 0 (1x)',
			'1.15': 'Charge Lv 1 (1.15x)',
			'1.3': 'Charge Lv 2 (1.3x)',
			'1.5': 'Charge Lv 3 (1.5x)',
			'0.95': 'Storm Style Lv 0 (0.95x)',
		},
		HBGcompressedshots: {
			'0': 'Not Compressed (0x)',
			'2.4': 'Lv1 Norm S. (2.4x Bullets Loaded)',
			'6.0': 'Lv2 Norm S. (6.0x Bullets Loaded)',
			// todo '6.0': '',
			'5.0': 'Lv1 Pierce 1 Hit (5x Bullets Loaded)',
			'4.5': 'Lv2 Pierce 1 Hit (4.5x Bullets Loaded)',
			'3.5': 'Lv3 Pierce 1 Hit (3.5x Bullets Loaded)',
			'15.0': 'Lv1 Pierce 3 Hits (5x Bullets Loaded)',
			'18.0': 'Lv2 Pierce 4 Hits (4.5x Bullets Loaded)',
			'21.0': 'Lv3 Pierce 6 Hits (3.5x Bullets Loaded)',
			'9': 'Lv1 Pellet S. (3x Bullets Loaded x 3)',
			'12': 'Lv2 Pellet S. (3x Bullets Loaded x 4)',
			'15': 'Lv3 Pellet S. (3x Bullets Loaded x 5)',
			'10': 'Lv1 Impact S. (5.0x Bullets Loaded x 2)',
			'13.5': 'Lv2 Impact S. (4.5x Bullets Loaded x 3)',
			'17.5': 'Lv3 Impact S. (3.5x Bullets Loaded x 5)',
			'3.1': 'Lv1 Norm S. (3.6x Bullets Loaded)',
			'8.4': 'Lv2 Norm S. (8.4x Bullets Loaded)',
			//'8.4': '',
			'7': 'Lv1 Pierce 1 Hit (7x Bullets Loaded)',
			'6.3': 'Lv2 Pierce 1 Hit (6.3x Bullets Loaded)',
			'4.9': 'Lv3 Pierce 1 Hit (4.9x Bullets Loaded)',
			'21': 'Lv1 Pierce 3 Hits (7x Bullets Loaded)',
			'25.2': 'Lv2 Pierce 4 Hits (6.3x Bullets Loaded)',
			'29.4': 'Lv3 Pierce 6 Hits (4.9x Bullets Loaded)',
			'14': 'Lv1 Impact S. (7.0x Bullets Loaded x 2)',
			'18.9': 'Lv2 Impact S. (6.3x Bullets Loaded x 3)',
			'24.5': 'Lv3 Impact S. (4.9x Bullets Loaded x 5)',
		},
		bowbottles: {
			'1.0': 'None (1x)',
			'1.6': 'Power Bottle (1.5x)',
			// '1.8': 'P. Bottle + Bow Hiden (1.8x)',
			// '1.7': 'P. + Origin (1.7x)',
			// '1.9': 'P. + Origin + Hiden (1.9x)',
			'1.5': 'Status Bottle (1.4x)',
			//todo '1.7': '',
			//'1.6': '',
			//'1.8': '',
			//'1.5': '',
			//'1.5': '',
		},
		bowchargemodifier: {
			'0': 'Lv1 (0.4x / 0.7x)',
			'1': 'Lv2 (1.0x / 0.95x) ', // todo theres an extra space
			'2': 'Lv3 (1.5x / 1.2x)',
			'3': 'Lv4 (1.85x / 1.334x)',
			'4': 'Sniper Lv4 (1.0x / 1.0x)',
			'5': 'Sniper Lv5 (1.125x / 1.1x)',
			'10': 'Uncharged Rising Shot (0.4x / 1.0x)',
			'11': 'Charged Rising Shot (1.0x / 1.5x)',
			'6': 'Crouched Lv1 (0.48x / 0.7x)',
			'7': 'Crouched Lv2 (1.3x / 0.8x) ',
			'8': 'Crouched Lv3 (2.1x / 1.2x)',
			'9': 'Crouched Lv4 (2.59x / 1.334x)',
		},
		bowgunshotmodifier: {
			'1.30': 'Just Shot (1.3x)',
			'1.40': 'Perfect JS (1.4x)',
			'0.6': 'Evade Shot (0.6x)',
			'2.0': 'Finishing Shot (2.0x)',
			'1.0': 'None (1x)',
			'0.5': 'Rapid Fire (0.5x)',
			'0.73': 'Ultra Rapid Lv 1 Pierce S (0.73x)',
		},
		quickshotchargemodifier: {
			'0': 'Normal (All 1.0x)',
			'1': 'Quick Shot (Lv1 1.0x / Lv2 0.85x / Lv3 0.75x / Lv4 0.65x)',
			'2': 'Normal & Quick Combined (Lv1 2.0x / Lv2 1.85x / Lv3 1.75x / Lv4 1.65x)',
		},
		elementtype: {
			'16': 'None',
			'0': 'Fire',
			'1': 'Water',
			'2': 'Thunder',
			'4': 'Ice',
			'3': 'Dragon',
			'5': 'Light',
			'6': 'Blaze',
			'7': 'Tenshou',
			'8': 'Lightning Rod',
			'9': 'Okiko',
			'10': 'Black Flame',
			'11': 'Crimson Demon',
			'12': 'Dark',
			'13': 'Music',
			'14': 'Sound',
			'15': 'Wind',
			'17': 'Burning Zero',
			'18': "Emperor's Roar",
		},
		aoeEleCount: {
			'0': 'None',
			'1': '1 Sigil',
			'2': '2 Sigils',
			'3': '3 Sigils',
			'4': '4 Sigils',
		},
		eleSwaxe: {
			'1': 'None (1x)',
			'1.3': 'Swaxe Sword Mode Elemental Phial (1.3x)',
			'2.0': 'Maxed Transcend (2.0x)',
			'2.6': 'Swaxe Ele Phial & Maxed Transcend (2.6x)',
		},
		HBGcompressedshotEle: {
			'0': 'Not Compressed',
			compFireS: 'Fire Shot',
			compWaterS: 'Water Shot',
			compThunderS: 'Thunder Shot',
			compIceS: 'Ice Shot',
			compDragonS: 'Dragon Shot',
			pcompFireS: 'Perfect Fire Shot',
			pcompWaterS: 'Perfect Water Shot',
			pcompThunderS: 'Perfect Thunder Shot',
			pcompIceS: 'Perfect Ice Shot',
			pcompDragonS: 'Perfect Dragon Shot',
		},
		rangedelementtypeBowgun: {
			'0': 'None',
			'1': 'Fire (火)',
			'2': 'Water (水)',
			'3': 'Thunder (雷)',
			'5': 'Ice (冰)',
			'4': 'Dra (龍)',
		},
		rangedelementtypeBow: {
			'0': 'None',
			'1': 'Fire (火)',
			'2': 'Water (水)',
			'3': 'Thunder (雷)',
			'5': 'Ice (冰)',
			'4': 'Dra (龍)',
			'6': 'Light (光) (70% Fir, 70% Tnd)',
			'7': 'Blaze (炎) (70% Fir, 70% Dra)',
			'8': 'Tenshou (天翔) (30% Fir, 100% Wat, 70% Tnd)',
			'9': 'Lightning R. (雷棰) (70% Tnd, 70% Dra)',
			'10': 'Okiko (熾凍) (80% Fir, 80% Ice, 40% Dra)',
			'11': 'Black Flame (黑焰) (50% Fir, 150% Dra)',
			'12': 'Crimson D. (紅魔) (50% Dra, 150% Fir)',
			'13': 'Dark (闇) (80% Ice, 80% Dra)',
			'14': 'Music (奏) (100% Wat, 100% Ice)',
			'15': 'Sound (響) (100% Wat, 100% Dra)',
			'16': 'Wind (風) (80% Tnd, 80% Ice)',
			'17': 'Burning Zero (灼零) (125% Fire, 125% Ice)',
			'18': 'Emp. Roar (皇鳴) (150% Tnd, 50% Dragon)',
		},
		aoeEleCountRanged: {
			'0': '0 Sigils',
			'1': '1 Sigil',
			'2': '2 Sigils',
			'3': '3 Sigils',
			'4': '4 Sigils',
		},
		statustype: {
			'0': 'None / Sleep',
			'1': 'Poison',
			'2': 'Paralysis',
		},
		shellingtype: {
			'1': 'Normal Lv1',
			'2': 'Normal Lv2',
			'3': 'Normal Lv3',
			'4': 'Normal Lv4',
			'5': 'Normal Lv5',
			'6': 'Normal Lv6',
			'7': 'Normal Lv7',
			'8': 'Normal Lv8',
			'9': 'Normal Lv9',
			'10': 'Long Lv1',
			'11': 'Long Lv2',
			'12': 'Long Lv3',
			'13': 'Long Lv4',
			'14': 'Long Lv5',
			'15': 'Long Lv6',
			'16': 'Long Lv7',
			'17': 'Long Lv8',
			'18': 'Long Lv9',
			'19': 'Spread Lv1',
			'20': 'Spread Lv2',
			'21': 'Spread Lv3',
			'22': 'Spread Lv4',
			'23': 'Spread Lv5',
			'24': 'Spread Lv6',
			'25': 'Spread Lv7',
			'26': 'Spread Lv8',
			'27': 'Spread Lv9',
		},
		tonfamode: {
			'1': 'Long',
			'2': 'Short',
		},
		statusmulti: {
			'1': 'None (1x)',
			'1.1': 'Paralysed (1.1x)',
			'3': 'Sleeping (3.0x)',
		},
		thunderclad: {
			'0': 'None',
			'5': 'Active (+5 on raw hitzones)',
		},
		exweak: {
			'0': 'None',
			'1': 'Exploit Weakness (+5 on 35+ raw hitzones)',
			'2': 'Determination (+5 on raw hitzones)',
			'3': 'ZZ Exploit Weakness (+5 on 30+ raw hitzones)',
		},
		pbreak: {
			'0': 'None',
			'1': 'Active (+5 Raw Hitzones)',
			'2': 'Raviente (+2 Raw Hitzones)',
		},
		acidShot: {
			'0': 'None',
			'1': 'Raw Acid (+10 raw hitzones)',
		},
		eleex: {
			'0': 'None',
			'20': 'Elemental Exploit (+X to 20+ ele hitzones)',
			'15': 'Dissolver Up (+X to 15+ ele hitzones)',
			'-100': 'Determination (+X to ele hitzones)',
		},
		hhweak: {
			'0': 'None',
			rawhb: 'Raw Weakness (+2 on Raw Hitzones)',
			allelehb: 'Elemental Weakness (+4 on all Elemental Hitzones)',
			hhstack: 'Both (+4 on Elemental, +2 on Raw)',
		},
		sniperraw: {
			'0': 'None',
			'5': 'In Crit Distance (+5 on raw hitzones)',
		},
		Absdef: {
			'1.0': 'Active (1.0x)',
			'0.8': 'Downtime (0.8x)',
		},
		Premium: {
			'1.0': 'Inactive (1x)',
			'1.25': 'Active (1.25x)',
		},
	},
];
