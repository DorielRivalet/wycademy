import { browser } from '$app/environment';
import BugIconWhite from '$lib/client/components/frontier/icon/item/Bug_Icon_White.svelte';
import CarapaceIconWhite from '$lib/client/components/frontier/icon/item/Carapace_Icon_White.svelte';
import FishIconWhite from '$lib/client/components/frontier/icon/item/Fish_Icon_White.svelte';
import HerbIconWhite from '$lib/client/components/frontier/icon/item/Herb_Icon_White.svelte';
import MeatIconWhite from '$lib/client/components/frontier/icon/item/Meat_Icon_White.svelte';
import MushroomIconWhite from '$lib/client/components/frontier/icon/item/Mushroom_Icon_White.svelte';
import SacIconWhite from '$lib/client/components/frontier/icon/item/Sac_Icon_White.svelte';
import SeedIconWhite from '$lib/client/components/frontier/icon/item/Seed_Icon_White.svelte';
import VegetableIconWhite from '$lib/client/components/frontier/icon/item/Vegetable_Icon_White.svelte';
import type { FrontierArmorSkillName } from 'ezlion';
import type { ComponentType } from 'svelte';
import { ItemColors } from './objects';

// Function to simulate parsing HTML and filling the recipes array
function parseRecipes(htmlContent: string): Recipe[] {
	if (!browser) return [];
	const parser = new DOMParser();
	const doc = parser.parseFromString(htmlContent, 'text/html');
	const rows = doc.querySelectorAll('table tbody tr');

	const recipes: Recipe[] = [];
	let currentDish = '';
	let currentId: number | null = null;
	let rowSpanCount = 0;

	rows.forEach((row) => {
		const columns = row.querySelectorAll('td');

		if (columns.length > 0) {
			// Check if the first column has a rowspan attribute
			if (columns[0].hasAttribute('rowspan')) {
				rowSpanCount = parseInt(columns[0].getAttribute('rowspan')!, 10);
				currentId = parseInt(columns[0].textContent!.trim(), 10) || null;
				currentDish = columns[1].textContent!.trim();
			} else if (rowSpanCount === 0) {
				// Update currentId and currentDish for rows without rowspan
				currentId = parseInt(columns[0].textContent!.trim(), 10) || null;
				currentDish = columns[1].textContent!.trim();
			}

			// Decrease rowSpanCount if it is greater than 0
			if (rowSpanCount > 0) {
				rowSpanCount--;
			}

			// Helper function to split the text content into an array of strings
			const getArrayFromColumn = (column: Element | null): string[] => {
				if (!column) return [];
				return column.innerHTML
					.split(/<br\s*\/?>/i)
					.map((text) => text.trim())
					.filter((text) => text);
			};

			// Extract recipe details
			const recipe: Recipe = {
				id: currentId,
				dish: currentDish,
				base: getArrayFromColumn(columns[2]),
				auxiliary1: getArrayFromColumn(columns[3]),
				auxiliary2: getArrayFromColumn(columns[4]),
				auxiliary3: getArrayFromColumn(columns[5]),
				greatFailure: columns[6]?.textContent!.trim() || '',
				failure: columns[7]?.textContent!.trim() || '',
				success: columns[8]?.textContent!.trim() || '',
				greatSuccess: columns[9]?.textContent!.trim() || '',
			};
			recipes.push(recipe);
		}
	});

	return recipes;
}

type Ingredient =
	| 'Miracle Herb'
	| 'Rainbow Mint'
	| 'Onion Sticks'
	| 'Bright Grain'
	| 'Millenium Peach' //Millennium Peach
	| 'Monochrome Mushroom'
	| 'Iron Cannon Fish'
	| 'Star Pineapple'
	| 'Ancient Algae'
	| 'Snow Kiwi'
	| 'Goemon Frog'
	| 'Magma Mango'
	| 'Blk and Wht Drgnfly' //Bicolour Skimmer
	| 'Large Blly Shlfish'
	| 'Deep Sea Chub'
	| 'Lava King Crab'
	| 'Ice Salmon' //Arctic Salmon
	| 'Acid Pepper'
	| 'Snow Powder'
	| 'Wabisabi Wasabi'
	| 'Dangerous Melon'
	| 'Mimic Vines'
	| 'Demon Pepper'
	| 'Whole Vanilla' //Ultra Vanilla Bean
	| 'Taiko Olive'
	| 'Gutsy Meat'
	| '';

export const ingredients: {
	name: Ingredient;
	icon: ComponentType;
	color: string;
}[] = [
	{
		name: 'Miracle Herb',
		icon: HerbIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Pink')?.value || ItemColors[0].value,
	},
	{
		name: 'Rainbow Mint',
		icon: HerbIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Purple')?.value || ItemColors[0].value,
	},
	{
		name: 'Onion Sticks',
		icon: VegetableIconWhite,
		color:
			ItemColors.find((e) => e.name === 'White')?.value || ItemColors[0].value,
	},
	{
		name: 'Bright Grain',
		icon: SeedIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Orange')?.value || ItemColors[0].value,
	},
	{
		name: 'Millenium Peach',
		icon: SeedIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Pink')?.value || ItemColors[0].value,
	},
	{
		name: 'Monochrome Mushroom',
		icon: MushroomIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Gray')?.value || ItemColors[0].value,
	},
	{
		name: 'Iron Cannon Fish',
		icon: FishIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Gray')?.value || ItemColors[0].value,
	},
	{
		name: 'Star Pineapple',
		icon: SeedIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Yellow')?.value || ItemColors[0].value,
	},
	{
		name: 'Ancient Algae',
		icon: SeedIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Cyan')?.value || ItemColors[0].value,
	},
	{
		name: 'Snow Kiwi',
		icon: SeedIconWhite,
		color:
			ItemColors.find((e) => e.name === 'White')?.value || ItemColors[0].value,
	},
	{
		name: 'Goemon Frog',
		icon: FishIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Red')?.value || ItemColors[0].value,
	},
	{
		name: 'Magma Mango',
		icon: SeedIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Red')?.value || ItemColors[0].value,
	},
	{
		name: 'Blk and Wht Drgnfly',
		icon: BugIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Gray')?.value || ItemColors[0].value,
	},
	{
		name: 'Large Blly Shlfish',
		icon: FishIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Cyan')?.value || ItemColors[0].value,
	},
	{
		name: 'Deep Sea Chub',
		icon: FishIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Blue')?.value || ItemColors[0].value,
	},
	{
		name: 'Lava King Crab',
		icon: CarapaceIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Red')?.value || ItemColors[0].value,
	},
	{
		name: 'Ice Salmon',
		icon: FishIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Cyan')?.value || ItemColors[0].value,
	},
	{
		name: 'Acid Pepper',
		icon: SeedIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Gray')?.value || ItemColors[0].value,
	},
	{
		name: 'Snow Powder',
		icon: SacIconWhite,
		color:
			ItemColors.find((e) => e.name === 'White')?.value || ItemColors[0].value,
	},
	{
		name: 'Wabisabi Wasabi',
		icon: SeedIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Green')?.value || ItemColors[0].value,
	},
	{
		name: 'Dangerous Melon',
		icon: SeedIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Yellow')?.value || ItemColors[0].value,
	},
	{
		name: 'Mimic Vines',
		icon: VegetableIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Green')?.value || ItemColors[0].value,
	},
	{
		name: 'Demon Pepper',
		icon: SeedIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Red')?.value || ItemColors[0].value,
	},
	{
		name: 'Whole Vanilla',
		icon: HerbIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Orange')?.value || ItemColors[0].value,
	},
	{
		name: 'Taiko Olive',
		icon: SeedIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Green')?.value || ItemColors[0].value,
	},
	{
		name: 'Gutsy Meat',
		icon: MeatIconWhite,
		color:
			ItemColors.find((e) => e.name === 'Red')?.value || ItemColors[0].value,
	},
];

type Dish =
	| 'Spicy Bakudandon'
	| 'Pioneer Exciting Meal'
	| 'Lucky Pancakes'
	| 'Ultimate Sashimi'
	| "Brother's Grill"
	| 'Fiery Tongs Feast Pot'
	| 'Medicinal Porridge'
	| 'Heaven and Earth Rice'
	| 'Goddess Gem Sweets'
	| 'Shellfish Iso-Yaki'
	| 'Holy Seafood Banquet'
	| 'Motivated Noodles'
	| "Hunter's Freaky Pot"
	| 'Skewer Dumplings'
	| 'Crimson BBQ Meat'
	| 'Sweet Wrappings'
	| 'Dawn Sky Toast'
	| 'Five Colored Soup'
	| 'Bloody Sala-Salad'
	| 'Mori Mori Meat Pie'
	| 'Fried Buns'
	| 'Latchberry Cutlet'
	| "Guild's Yaminabe";

type Recipe = {
	id: number;
	dish: Dish;
	base: Ingredient[];
	auxiliary1: Ingredient[];
	auxiliary2: Ingredient[];
	auxiliary3: Ingredient[];
	greatFailure: FrontierArmorSkillName | 'Random';
	failure: FrontierArmorSkillName | 'Random';
	greatSuccess: FrontierArmorSkillName | 'Random';
	success: FrontierArmorSkillName | 'Random';
};

export const recipes: Recipe[] = [
	{
		id: 23,
		dish: "Guild's Yaminabe",
		base: [],
		auxiliary1: [],
		auxiliary2: [],
		auxiliary3: [],
		greatFailure: 'Hunger Up Lg',
		failure: 'Random',
		success: 'Random',
		greatSuccess: 'Random',
	},
	{
		id: 1,
		dish: 'Spicy Bakudandon',
		base: ['Bright Grain', 'Snow Powder'],
		auxiliary1: ['Whole Vanilla', 'Miracle Herb', 'Monochrome Mushroom'],
		auxiliary2: ['Acid Pepper', 'Wabisabi Wasabi', 'Demon Pepper'],
		auxiliary3: [
			'Iron Cannon Fish',
			'Goemon Frog',
			'Large Blly Shlfish',
			'Ice Salmon',
			'Deep Sea Chub',
			'Lava King Crab',
		],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+30',
		success: 'Wrath Awoken',
		greatSuccess: 'Buchigire',
	},
	{
		id: 2,
		dish: 'Pioneer Exciting Meal',
		base: ['Goemon Frog'],
		auxiliary1: ['Acid Pepper', 'Demon Pepper', 'Rainbow Mint'],
		auxiliary2: ['Miracle Herb', 'Monochrome Mushroom', 'Onion Sticks'],
		auxiliary3: ['Mimic Vines', 'Bright Grain', 'Snow Powder'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+30',
		success: 'Unaffected+2',
		greatSuccess: 'Unaffected+3',
	},
	{
		id: 2,
		dish: 'Pioneer Exciting Meal',
		base: ['Dangerous Melon'],
		auxiliary1: ['Acid Pepper', 'Demon Pepper', 'Rainbow Mint'],
		auxiliary2: ['Miracle Herb', 'Monochrome Mushroom', 'Onion Sticks'],
		auxiliary3: ['Mimic Vines', 'Bright Grain', 'Snow Powder'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Wind Res Small',
		success: 'Wind Res Large',
		greatSuccess: 'Dragon Wind Breaker',
	},
	{
		id: 2,
		dish: 'Pioneer Exciting Meal',
		base: ['Dangerous Melon'],
		auxiliary1: ['Acid Pepper'],
		auxiliary2: ['Miracle Herb', 'Monochrome Mushroom', 'Onion Sticks'],
		auxiliary3: ['Mimic Vines', 'Bright Grain', 'Snow Powder'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Earplugs',
		success: 'High Grade Earplugs',
		greatSuccess: 'Super High-Grade Earplugs',
	},
	{
		id: 2,
		dish: 'Pioneer Exciting Meal',
		base: ['Dangerous Melon'],
		auxiliary1: ['Rainbow Mint'],
		auxiliary2: ['Miracle Herb', 'Monochrome Mushroom', 'Onion Sticks'],
		auxiliary3: ['Mimic Vines', 'Bright Grain', 'Snow Powder'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+30',
		success: 'Stun Halved',
		greatSuccess: 'Negate Stun',
	},
	{
		id: 3,
		dish: 'Lucky Pancakes',
		base: ['Star Pineapple', 'Millenium Peach'],
		auxiliary1: [
			'Dangerous Melon',
			'Ancient Algae',
			'Magma Mango',
			'Snow Kiwi',
		],
		auxiliary2: ['Acid Pepper', 'Whole Vanilla', 'Rainbow Mint'],
		auxiliary3: ['Mimic Vines', 'Snow Powder', 'Bright Grain'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+10',
		success: 'Good Luck',
		greatSuccess: 'Great Luck',
	},
	{
		id: 4,
		dish: 'Ultimate Sashimi',
		base: ['Iron Cannon Fish', 'Deep Sea Chub'],
		auxiliary1: ['Demon Pepper', 'Blk and Wht Drgnfly', 'Wabisabi Wasabi'],
		auxiliary2: [
			'Iron Cannon Fish',
			'Goemon Frog',
			'Large Blly Shlfish',
			'Ice Salmon',
			'Deep Sea Chub',
			'Lava King Crab',
		],
		auxiliary3: ['Acid Pepper', 'Whole Vanilla', 'Rainbow Mint'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Earplugs',
		success: 'High Grade Earplugs',
		greatSuccess: 'Super High-Grade Earplugs',
	},
	{
		id: 5,
		dish: "Brother's Grill",
		base: ['Monochrome Mushroom'],
		auxiliary1: ['Goemon Frog', 'Large Blly Shlfish', 'Deep Sea Chub'],
		auxiliary2: ['Iron Cannon Fish', 'Ice Salmon', 'Lava King Crab'],
		auxiliary3: [
			'Mimic Vines',
			'Whole Vanilla',
			'Blk and Wht Drgnfly',
			'Bright Grain',
			'Rainbow Mint',
			'Snow Powder',
		],
		greatFailure: 'Hunger Up Lg',
		failure: 'Caring+1',
		success: 'Caring+2',
		greatSuccess: 'Caring+3',
	},
	{
		id: 6,
		dish: 'Fiery Tongs Feast Pot',
		base: ['Lava King Crab'],
		auxiliary1: [
			'Acid Pepper',
			'Whole Vanilla',
			'Blk and Wht Drgnfly',
			'Wabisabi Wasabi',
			'Demon Pepper',
			'Rainbow Mint',
		],
		auxiliary2: [
			'Star Pineapple',
			'Dangerous Melon',
			'Ancient Algae',
			'Magma Mango',
			'Snow Kiwi',
			'Millenium Peach',
		],
		auxiliary3: ['Mimic Vines', 'Snow Powder', 'Bright Grain'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+20',
		success: 'Adrenaline+1',
		greatSuccess: 'Adrenaline+2',
	},
	{
		id: 7,
		dish: 'Medicinal Porridge',
		base: ['Ancient Algae'],
		auxiliary1: [
			'Star Pineapple',
			'Dangerous Melon',
			'Magma Mango',
			'Miracle Herb',
			'Monochrome Mushroom',
			'Millenium Peach',
		],
		auxiliary2: ['Goemon Frog', 'Deep Sea Chub', 'Lava King Crab'],
		auxiliary3: ['Acid Pepper', 'Wabisabi Wasabi', 'Demon Pepper'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Wind Res Small',
		success: 'Wind Res Large',
		greatSuccess: 'Dragon Wind Breaker',
	},
	{
		id: 7,
		dish: 'Medicinal Porridge',
		base: ['Rainbow Mint'],
		auxiliary1: ['Dangerous Melon', 'Miracle Herb', 'Monochrome Mushroom'],
		auxiliary2: ['Goemon Frog', 'Deep Sea Chub', 'Lava King Crab'],
		auxiliary3: ['Acid Pepper', 'Wabisabi Wasabi', 'Demon Pepper'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Wind Res Small',
		success: 'Dragon Wind Breaker',
		greatSuccess: 'Violent Wind Breaker',
	},
	{
		id: 8,
		dish: 'Heaven and Earth Rice',
		base: ['Acid Pepper'],
		auxiliary1: ['Mimic Vines', 'Bright Grain', 'Snow Powder'],
		auxiliary2: ['Miracle Herb', 'Monochrome Mushroom', 'Onion Sticks'],
		auxiliary3: ['Blk and Wht Drgnfly', 'Demon Pepper', 'Rainbow Mint'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+20',
		success: 'Marathon Runner',
		greatSuccess: 'Peerless',
	},
	{
		id: 9,
		dish: 'Goddess Gem Sweets',
		base: ['Snow Kiwi'],
		auxiliary1: ['Dangerous Melon', 'Star Pineapple', 'Ancient Algae'],
		auxiliary2: ['Whole Vanilla', 'Rainbow Mint', 'Snow Powder'],
		auxiliary3: ['Magma Mango', 'Monochrome Mushroom', 'Millenium Peach'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+20',
		success: 'Divine Protection',
		greatSuccess: 'Goddess Embrace',
	},
	{
		id: 10,
		dish: 'Shellfish Iso-Yaki',
		base: ['Large Blly Shlfish'],
		auxiliary1: [
			'Iron Cannon Fish',
			'Goemon Frog',
			'Ice Salmon',
			'Deep Sea Chub',
		],
		auxiliary2: ['Acid Pepper', 'Whole Vanilla', 'Wabisabi Wasabi'],
		auxiliary3: ['Mimic Vines', 'Bright Grain', 'Snow Powder'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+20',
		success: 'Hunger Halved',
		greatSuccess: 'Hunger Negated',
	},
	{
		id: 11,
		dish: 'Holy Seafood Banquet',
		base: ['Deep Sea Chub'],
		auxiliary1: ['Iron Cannon Fish', 'Large Blly Shlfish', 'Ice Salmon'],
		auxiliary2: ['Whole Vanilla', 'Acid Pepper', 'Wabisabi Wasabi'],
		auxiliary3: ['Mimic Vines', 'Snow Powder', 'Bright Grain'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Wide Area+1',
		success: 'Wide Area+2',
		greatSuccess: 'Wide Area+3',
	},
	{
		id: 12,
		dish: 'Motivated Noodles',
		base: ['Mimic Vines'],
		auxiliary1: ['Onion Sticks', 'Wabisabi Wasabi'],
		auxiliary2: ['Demon Pepper', 'Acid Pepper', 'Blk and Wht Drgnfly'],
		auxiliary3: ['Whole Vanilla', 'Monochrome Mushroom', 'Miracle Herb'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+10',
		success: 'Hazard Res Small',
		greatSuccess: 'Hazard Res Large',
	},
	{
		id: 13,
		dish: "Hunter's Freaky Pot",
		base: ['Ice Salmon'],
		auxiliary1: [
			'Star Pineapple',
			'Dangerous Melon',
			'Ancient Algae',
			'Magma Mango',
		],
		auxiliary2: ['Mimic Vines', 'Bright Grain', 'Snow Powder'],
		auxiliary3: ['Deep Sea Chub', 'Lava King Crab', 'Iron Cannon Fish'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+10',
		success: 'Spirits Whim',
		greatSuccess: 'Divine Whim',
	},
	{
		id: 14,
		dish: 'Skewer Dumplings',
		base: ['Dangerous Melon'],
		auxiliary1: ['Magma Mango', 'Star Pineapple'],
		auxiliary2: ['Whole Vanilla', 'Wabisabi Wasabi', 'Rainbow Mint'],
		auxiliary3: ['Mimic Vines', 'Snow Powder', 'Bright Grain'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+10',
		success: 'Paralysis Halved',
		greatSuccess: 'Negate Paralysis',
	},
	{
		id: 15,
		dish: 'Crimson BBQ Meat',
		base: ['Demon Pepper'],
		auxiliary1: ['Dangerous Melon', 'Star Pineapple'],
		auxiliary2: ['Magma Mango', 'Snow Kiwi', 'Millenium Peach'],
		auxiliary3: ['Mimic Vines', 'Snow Powder', 'Bright Grain'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+10',
		success: 'Sleep Halved',
		greatSuccess: 'Negate Sleep',
	},
	{
		id: 16,
		dish: 'Sweet Wrappings',
		base: ['Magma Mango'],
		auxiliary1: ['Demon Pepper', 'Star Pineapple'],
		auxiliary2: ['Dangerous Melon', 'Ancient Algae', 'Millenium Peach'],
		auxiliary3: ['Mimic Vines', 'Snow Powder', 'Bright Grain'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+10',
		success: 'Poison Halved',
		greatSuccess: 'Negate Poison',
	},
	{
		id: 17,
		dish: 'Dawn Sky Toast',
		base: ['Whole Vanilla'],
		auxiliary1: ['Magma Mango', 'Star Pineapple'],
		auxiliary2: ['Dangerous Melon', 'Snow Kiwi', 'Millenium Peach'],
		auxiliary3: ['Mimic Vines', 'Snow Powder', 'Bright Grain'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+10',
		success: 'Stun Halved',
		greatSuccess: 'Negate Stun',
	},
	{
		id: 18,
		dish: 'Five Colored Soup',
		base: ['Onion Sticks'],
		auxiliary1: ['Bright Grain', 'Acid Pepper'],
		auxiliary2: ['Whole Vanilla', 'Snow Powder', 'Rainbow Mint'],
		auxiliary3: ['Demon Pepper', 'Blk and Wht Drgnfly', 'Wabisabi Wasabi'],
		greatFailure: 'Hunger Up Lg',
		failure: 'All Res UP+5',
		success: 'All Res UP+10',
		greatSuccess: 'All Res UP+20',
	},
	{
		id: 18,
		dish: 'Five Colored Soup',
		base: ['Onion Sticks'],
		auxiliary1: ['Magma Mango'],
		auxiliary2: ['Whole Vanilla', 'Wabisabi Wasabi', 'Rainbow Mint'],
		auxiliary3: [
			'Iron Cannon Fish',
			'Star Pineapple',
			'Large Blly Shlfish',
			'Deep Sea Chub',
			'Millenium Peach',
			'Lava King Crab',
		],
		greatFailure: 'Hunger Up Lg',
		failure: 'Fire Res+10',
		success: 'Fire Res+20',
		greatSuccess: 'Fire Res+30',
	},
	{
		id: 18,
		dish: 'Five Colored Soup',
		base: ['Onion Sticks'],
		auxiliary1: ['Magma Mango'],
		auxiliary2: ['Whole Vanilla', 'Wabisabi Wasabi', 'Rainbow Mint'],
		auxiliary3: [
			'Iron Cannon Fish',
			'Star Pineapple',
			'Large Blly Shlfish',
			'Deep Sea Chub',
			'Millenium Peach',
			'Lava King Crab',
		],
		greatFailure: 'Hunger Up Lg',
		failure: 'Water Res+10',
		success: 'Water Res+20',
		greatSuccess: 'Water Res+30',
	},
	{
		id: 18,
		dish: 'Five Colored Soup',
		base: ['Onion Sticks'],
		auxiliary1: ['Ice Salmon'],
		auxiliary2: ['Whole Vanilla', 'Wabisabi Wasabi', 'Rainbow Mint'],
		auxiliary3: [
			'Iron Cannon Fish',
			'Star Pineapple',
			'Large Blly Shlfish',
			'Deep Sea Chub',
			'Millenium Peach',
			'Lava King Crab',
		],
		greatFailure: 'Hunger Up Lg',
		failure: 'Ice Res+10',
		success: 'Ice Res+20',
		greatSuccess: 'Ice Res+30',
	},
	{
		id: 18,
		dish: 'Five Colored Soup',
		base: ['Onion Sticks'],
		auxiliary1: ['Demon Pepper'],
		auxiliary2: ['Whole Vanilla', 'Wabisabi Wasabi', 'Rainbow Mint'],
		auxiliary3: [
			'Iron Cannon Fish',
			'Star Pineapple',
			'Large Blly Shlfish',
			'Deep Sea Chub',
			'Millenium Peach',
			'Lava King Crab',
		],
		greatFailure: 'Hunger Up Lg',
		failure: 'Thunder Res+10',
		success: 'Thunder Res+20',
		greatSuccess: 'Thunder Res+30',
	},
	{
		id: 18,
		dish: 'Five Colored Soup',
		base: ['Onion Sticks'],
		auxiliary1: ['Mimic Vines'],
		auxiliary2: ['Whole Vanilla', 'Wabisabi Wasabi', 'Rainbow Mint'],
		auxiliary3: [
			'Iron Cannon Fish',
			'Star Pineapple',
			'Large Blly Shlfish',
			'Deep Sea Chub',
			'Millenium Peach',
			'Lava King Crab',
		],
		greatFailure: 'Hunger Up Lg',
		failure: 'Dragon Res+10',
		success: 'Dragon Res+20',
		greatSuccess: 'Dragon Res+30',
	},
	{
		id: 19,
		dish: 'Bloody Sala-Salad',
		base: ['Taiko Olive'],
		auxiliary1: ['Wabisabi Wasabi'],
		auxiliary2: ['Ancient Algae'],
		auxiliary3: ['Whole Vanilla'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+30',
		success: 'Wide Area+3',
		greatSuccess: 'Medical Sage',
	},
	{
		id: 20,
		dish: 'Mori Mori Meat Pie',
		base: ['Gutsy Meat'],
		auxiliary1: ['Onion Sticks'],
		auxiliary2: ['Bright Grain'],
		auxiliary3: ['Snow Powder'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+30',
		success: 'Encourage+1',
		greatSuccess: 'Encourage+2',
	},
	{
		id: 21,
		dish: 'Fried Buns',
		base: ['Taiko Olive'],
		auxiliary1: ['Bright Grain'],
		auxiliary2: ['Blk and Wht Drgnfly'],
		auxiliary3: ['Mimic Vines'],
		greatFailure: 'Hunger Up Lg',
		failure: 'Health+30',
		success: 'Bond',
		greatSuccess: 'Assistance',
	},
	{
		id: 22,
		dish: 'Latchberry Cutlet',
		base: ['Gutsy Meat'],
		auxiliary1: ['Star Pineapple'],
		auxiliary2: ['Snow Kiwi'],
		auxiliary3: ['Magma Mango'],
		greatFailure: 'Blue Soul',
		failure: 'Blue Soul',
		success: 'Incitement',
		greatSuccess: 'Red Soul',
	},
];
