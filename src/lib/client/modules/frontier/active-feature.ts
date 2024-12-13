import type { FrontierWeaponName } from 'ezlion';

export enum ActiveFeature {
	None = 0,
	GreatSword = 1,
	HeavyBowgun = 2,
	Hammer = 4,
	Lance = 8,
	SwordAndShield = 16,
	LightBowgun = 32,
	DualSwords = 64,
	LongSword = 128,
	HuntingHorn = 256,
	Gunlance = 512,
	Bow = 1024,
	Tonfa = 2048,
	SwitchAxeF = 4096,
	MagnetSpike = 8192,
	All = GreatSword |
		HeavyBowgun |
		Hammer |
		Lance |
		SwordAndShield |
		LightBowgun |
		DualSwords |
		LongSword |
		HuntingHorn |
		Gunlance |
		Bow |
		Tonfa |
		SwitchAxeF |
		MagnetSpike,
}

export const activeFeatures = [
	{
		id: 'Sword and Shield',
		weapon: 'Sword and Shield',
		effect: 'x1.2 Status and Element (internal).',
		bitfield: '16',
	},
	{
		id: 'Dual Swords',
		weapon: 'Dual Swords',
		effect:
			'Reduces the speed at which the HP bar decreases when in true demon mode. Stamina gauge depletion speed is reduced to x0.5 when in demon mode (equivalent to Marathon Runner). When Marathon Runner is activated, it is reduced to x0.33.',
		bitfield: '64',
	},
	{
		id: 'Great Sword',
		weapon: 'Great Sword',
		effect:
			'+100% Affinity for unsheathe attacks, stacking with any existing affinity. Pairs well with Critical Conversion. This bonus also applies to attacks from Parries and grants the raw damage increase from Critical Conversion (excluding the +30%) during these actions. It does not activate with Shining Sword.',
		bitfield: '1',
	},
	{
		id: 'Long Sword',
		weapon: 'Long Sword',
		bitfield: '128',
		effect:
			'Full spirit bar buff effect increased (from +10 attack to +40 attack).',
	},
	{
		id: 'Hammer',
		weapon: 'Hammer',
		bitfield: '4',
		effect: 'x1.5 Stun damage. Synergizes well with Sigil and Caravan Skills.',
	},
	{
		id: 'Hunting Horn',
		weapon: 'Hunting Horn',
		bitfield: '256',
		effect: 'x2 Song duration. Synergizes well with Flute Expert.',
	},
	{
		id: 'Lance',
		weapon: 'Lance',
		bitfield: '8',
		effect:
			'Guard Skill goes up by 1 level. Grants Reflect+3. Does not work with Reflect Up nor Guard Up.',
	},
	{
		id: 'Gunlance',
		weapon: 'Gunlance',
		bitfield: '512',
		effect: 'x1.5 Wyvern Fire and Shelling Damage.',
	},

	{
		id: 'Tonfa',
		weapon: 'Tonfa',
		bitfield: '2048',
		effect:
			'All Ryuuki finisher (i.e. explosion) effects buffed. Head: KO duration from 20s to 30s. Tail: Bleeding 1.5x damage. Body: Sharpness return from 15 to 20. Gunner Attack Up from 25 to 50.',
	},
	{
		id: 'Switch Axe F',
		weapon: 'Switch Axe F',
		bitfield: '4096',
		effect:
			'Increases Phial Meter Recovery by primary recovery mechanic (either by reloading or guarding). Parries recover 100 units with Storm Style and 150 units with Extreme Style (from 50 and 75 units respectively).',
	},
	{
		id: 'Magnet Spike',
		weapon: 'Magnet Spike',
		bitfield: '8192',
		effect:
			'Increases Pin finisher multiplier by 1.25x (from 600 motion value to 750 motion value). x1.1 Cutting damage to the tail in cutting mode. x1.3 Stun value in impact mode.',
	},
	{
		id: 'Light Bowgun',
		weapon: 'Light Bowgun',
		effect: '+0.1x Damage increased at critical distance. x1.2 Status damage.',
		bitfield: '32',
	},

	{
		id: 'Heavy Bowgun',
		weapon: 'Heavy Bowgun',
		effect: '+0.1x Damage increased at critical distance.',
		bitfield: '2',
	},
	{
		id: 'Bow',
		weapon: 'Bow',
		effect: 'x0.85 Charge time. Synergizes well with Auto-Reload.',
		bitfield: '1024',
	},
] as const;

export function getActiveFeature(weapon: FrontierWeaponName) {
	return (
		activeFeatures.find((e) => e.weapon === weapon)?.effect ??
		'Active Feature not found.'
	);
}
