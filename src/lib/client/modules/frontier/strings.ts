import { frontierColorNames } from '$lib/client/themes/frontier-colors';
import { ItemColors } from './items';
import type { FrontierItemColor } from './types';

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
