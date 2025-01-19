import { frontierColorNames } from '$lib/client/themes/frontier-colors';
import { ItemColors } from './items';
import type { FrontierItemColor } from './types';

// TODO Chalices
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

/**
 * Converts a JSON string to { [index: number]: { [index: number]: number }[] }[]
 * Example: PlayerInventoryDictionary
 */
export function convertDictionaryIntIntArray(
	jsonString: string,
): { [index: number]: { [index: number]: number }[] }[] {
	if (!jsonString) return [];
	const parsedData = JSON.parse(jsonString);

	return Object.entries(parsedData).map(([time, items]) => {
		const itemArray: { [index: number]: number }[] = (items as any[]).map(
			(item) => {
				const [itemID, quantity] = Object.entries(item)[0];
				return { [parseInt(itemID)]: quantity as number };
			},
		);
		return { [parseInt(time)]: itemArray };
	});
}

/**
 * Converts a JSON string to { [index: number]: number }[]
 * Example: AttackBuffDictionary
 */
export function convertDictionaryIntInt(
	jsonString: string,
): { [index: number]: number }[] {
	if (!jsonString) return [];
	const parsedData = JSON.parse(jsonString);

	return Object.entries(parsedData).map(([time, value]) => ({
		[parseInt(time)]: value as number,
	}));
}

/**
 * Converts a JSON string to { [index: number]: string }[]
 * Example: KeystrokesDictionary
 */
export function convertDictionaryIntString(
	jsonString: string,
): { [index: number]: string }[] {
	if (!jsonString) return [];
	const parsedData = JSON.parse(jsonString);

	return Object.entries(parsedData).map(([time, value]) => ({
		[parseInt(time)]: value as string,
	}));
}

/**
 * Converts a JSON string to { [index: number]: { [index: number]: number } }[]
 * Example: Monster1HPDictionary
 */
export function convertDictionaryIntIntInt(
	jsonString: string,
): { [index: number]: { [index: number]: number } }[] {
	if (!jsonString) return [];
	const parsedData = JSON.parse(jsonString);

	return Object.entries(parsedData).map(([time, values]) => ({
		[parseInt(time)]: values as { [index: number]: number },
	}));
}

/**
 * Converts a JSON string to { [index: number]: { [index: number]: [number, number, number, number, number, number, number, number, number, number] } }[]
 * Example: Monster1PartThresholdDictionary
 */
export function convertDictionaryMonsterPartThreshold(jsonString: string): {
	[index: number]: {
		[index: number]: [
			number,
			number,
			number,
			number,
			number,
			number,
			number,
			number,
			number,
			number,
		];
	};
}[] {
	if (!jsonString) return [];
	const parsedData = JSON.parse(jsonString);

	return Object.entries(parsedData).map(([time, values]) => ({
		[parseInt(time)]: values as {
			[index: number]: [
				number,
				number,
				number,
				number,
				number,
				number,
				number,
				number,
				number,
				number,
			];
		},
	}));
}

/**
 * Converts a JSON string to { [index: number]: number }[] or null
 * Example: DualSwordsSharpensDictionary
 */
export function convertDictionaryIntIntOrNull(
	jsonString: string,
): { [index: number]: number }[] | null {
	if (!jsonString) return null;
	const parsedData = JSON.parse(jsonString);

	return Object.entries(parsedData).map(([time, value]) => ({
		[parseInt(time)]: value as number,
	}));
}
