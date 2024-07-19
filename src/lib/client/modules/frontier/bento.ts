import type { FrontierBento } from './types';

export const bentoValues: FrontierBento[] = [
	{
		name: 'Vigorous',
		values: [
			{
				ingredient1: 'Rainbow Lettuce',
				ingredient2: 'Thin Wyvern Cut',
				dish: 'Sappari Marine',
				health: '+50',
				stamina: '+50',
				attack: '+15',
				defense: '0',
			},
			{
				ingredient1: 'Rainbow Lettuce',
				ingredient2: 'Silver Liver',
				dish: 'Dorri Grill',
				health: '+50',
				stamina: '+50',
				attack: '0',
				defense: '+80',
			},
		],
	},
	{
		name: 'Starving Wolf',
		values: [
			{
				ingredient1: 'Bitter Cheese',
				ingredient2: 'Thin Wyvern Cut',
				dish: 'Meow Noodle',
				health: '+50',
				stamina: '-75',
				attack: '+15',
				defense: '0',
			},
			{
				ingredient1: 'Bitter Cheese',
				ingredient2: 'Silver Liver',
				dish: 'Bee Steak',
				health: '+50',
				stamina: '-75',
				attack: '0',
				defense: '+80',
			},
		],
	},
	{
		name: 'Adrenaline',
		values: [
			{
				ingredient1: 'Queen Parsley',
				ingredient2: 'Thin Wyvern Cut',
				dish: 'Melomeloquiche',
				health: '-60',
				stamina: '+50',
				attack: '+15',
				defense: '0',
			},
			{
				ingredient1: 'Queen Parsley',
				ingredient2: 'Silver Liver',
				dish: 'Fluffy Saute',
				health: '-60',
				stamina: '+50',
				attack: '0',
				defense: '+80',
			},
		],
	},
	{
		name: 'Combo',
		values: [
			{
				ingredient1: 'Dancing Spice',
				ingredient2: 'Thin Wyvern Cut',
				dish: 'Dan Soup',
				health: '-50',
				stamina: '-50',
				attack: '+15',
				defense: '0',
			},
			{
				ingredient1: 'Queen Parsley',
				ingredient2: 'Silver Liver',
				dish: 'Explosion Burger',
				health: '-50',
				stamina: '-50',
				attack: '0',
				defense: '+80',
			},
		],
	},
];
