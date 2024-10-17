/**If a format is not chosen, selects the appropiate format based on the other properties.
 * Available formats are: single solution, multiple solutions, true/false, ranking, multiple true/false.
 */
export type MultipleChoiceItem = {
	stem: string | string[];
	options: number[] | string[] | null | [string[], string[]];
	solutions:
		| number
		| string
		| string[]
		| boolean
		| boolean[]
		| [string, string][];
	format?: 'best answer' | 'assertion-reason' | 'matching' | 'ranking';
};

export let questionBank: { category: string; items: MultipleChoiceItem[] }[] = [
	{
		category: 'Style Rank',
		items: [
			{
				stem: 'How many weapon styles are available?',
				options: [3, 4, 5],
				solutions: 4,
			},
			{
				stem: 'What does the process of obtaining a Hardcore Carve look like?',
				options: [
					'You hear a special jingle if you carved it.',
					'Very grindy.',
					'When you carve a monster, you first roll for the pool from which you get an item and then for the item itself.',
				],
				solutions:
					'When you carve a monster, you first roll for the pool from which you get an item and then for the item itself.',
				format: 'best answer',
			},
			{
				stem: 'In which order do you obtain the following items? Put the first one available at the top.',
				options: ['Souls', 'Ribbons', 'Merits'],
				solutions: ['Souls', 'Ribbons', 'Merits'],
				format: 'ranking',
			},
			{
				stem: 'What is the last Style Rank skill unlocked?',
				options: ['Soul Revival', 'Secret Technique', 'Passive Master'],
				solutions: 'Soul Revival',
			},
			{
				stem: 'Why you should complete My Mission tasks?',
				options: [
					'Better damage reduction',
					'Increase attack ceiling',
					'Increase health recovery',
					'Reduce the duration of monster ailments',
				],
				solutions: 'Increase attack ceiling',
				format: 'best answer',
			},
			{
				stem: 'How to obtain a Hardcore Carve?',
				options: [
					'Carving a HC monster',
					'Event quests',
					'Partner rewards',
					'Legendary Pugi rewards',
					'N Points',
					'Festival Points',
					'GCP',
					'Diva Defense',
					'Lotto Coins',
					'Master Carver',
					'Mezfes Points',
				],
				solutions: [
					'Carving a HC monster',
					'Event quests',
					'Partner rewards',
					'Legendary Pugi rewards',
					'N Points',
					'Festival Points',
					'GCP',
					'Diva Defense',
					'Master Carver',
				],
			},
		],
	},
	{
		category: 'Weapons Overview',
		items: [
			{
				stem: 'Match the weapon type with its multiplier:',
				options: [
					[
						'Sword and Shield',
						'Dual Swords',
						'Great Sword',
						'Long Sword',
						'Hammer',
						'Hunting Horn',
						'Lance',
						'Gunlance',
						'Tonfa',
						'Switch Axe F',
						'Magnet Spike',
						'Light Bowgun',
						'Heavy Bowgun',
						'Bow',
					],
					['1.4', '4.8', '5.2', '2.3', '1.8', '5.4', '1.2'],
				],
				solutions: [
					['Sword and Shield', '1.4'],
					['Dual Swords', '1.4'],
					['Great Sword', '4.8'],
					['Long Sword', '4.8'],
					['Heavy Bowgun', '1.2'],
					['Light Bowgun', '1.2'],
					['Bow', '1.2'],
					['Hammer', '5.2'],
					['Hunting Horn', '5.2'],
					['Lance', '2.3'],
					['Gunlance', '2.3'],
					['Switch Axe F', '5.4'],
					['Tonfa', '1.8'],
					['Magnet Spike', '5.4'],
				],
				format: 'matching',
			},
			{
				stem: 'Your damage does not change if the attack bounced.',
				options: null,
				solutions: false,
			},

			{
				stem: 'How many weapon types are in the game?',
				options: [12, 13, 14, 15],
				solutions: 14,
			},
			{
				stem: 'How many sharpness tiers are in the game?',
				options: [6, 7, 8, 9],
				solutions: 8,
			},
			{
				stem: 'How many weapon types are available at the start of the game?',
				options: [10, 11, 12, 13, 14, 15],
				solutions: 11,
			},
			{
				stem: 'How many units of sharpness can a weapon have?',
				options: [100, 200, 300, 400, 500, 1000],
				solutions: 400,
			},
			{
				stem: 'At what sharpness tier do you get extra affinity, and how much do you get?',
				options: [
					'Green, and you get 10% for green, blue, white, purple and cyan tiers.',
					'Blue, and you get 10% for blue, white, purple and cyan tiers.',
					'Blue, and you get 5% for blue, white, purple and cyan tiers.',
					'White, and you get 10% for blue, white, purple and cyan tiers.',
					'White, and you get 5% for white, purple and cyan tiers.',
					'Purple, and you get 10% for blue, white, purple and cyan tiers.',
					'Cyan, and you get 10% for blue, white, purple and cyan tiers.',
					'You get 10% extra affinity at blue sharpness, with +5% extra affinity for each sharpness tier above it.',
				],
				solutions:
					'Blue, and you get 10% for blue, white, purple and cyan tiers.',
			},
			{
				stem: 'What are sharpness tables?',
				options: [
					'The possible combinations of sharpness values for a weapon, separated by weapon type (e.g. Dual Swords).',
					'The possible combinations of sharpness values for a weapon, separated by weapon class (e.g. Blademaster).',
					'The possible combinations of sharpness values for a weapon, separated by weapon rank (e.g. G Rank).',
				],
				solutions:
					'The possible combinations of sharpness values for a weapon, separated by weapon type (e.g. Dual Swords).',
			},
			{
				stem: 'Rank from highest to lowest the weapons by the damage they would deal.',
				options: [
					'1500 Attack Sword and Shield',
					'2000 Attack Dual Swords',
					'1000 Attack Long Sword',
					'1000 Attack Magnet Spike',
				],
				solutions: [
					'1000 Attack Magnet Spike',
					'1000 Attack Long Sword',
					'2000 Attack Dual Swords',
					'1500 Attack Sword and Shield',
				],
				format: 'ranking',
			},
		],
	},
];
