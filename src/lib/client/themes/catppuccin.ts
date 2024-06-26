import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
import { flavors, flavorEntries } from '@catppuccin/palette';
import type { TagColor, TagColors } from '../modules/frontier/types';

type ThemeMap = {
	[key: string]: {
		[key: string]: string;
	};
};

export type CatppuccinFlavorName = 'mocha' | 'macchiato' | 'frappe' | 'latte';

export function getCatppuccinFlavorFromThemeForShiki(
	theme: CarbonTheme,
): string {
	switch (theme) {
		case 'g100':
			return 'catppuccin-mocha';
		case 'g90':
			return 'catppuccin-macchiato';
		case 'g80':
			return 'catppuccin-frappe';
		case 'g10':
			return 'catppuccin-latte';
		default:
			return 'catppuccin-mocha';
	}
}

export function getCatppuccinFlavorFromTheme(
	theme: CarbonTheme,
): CatppuccinFlavorName {
	switch (theme) {
		case 'g100':
			return 'mocha';
		case 'g90':
			return 'macchiato';
		case 'g80':
			return 'frappe';
		case 'g10':
			return 'latte';
		default:
			return 'mocha';
	}
}

export function getHexStringFromCatppuccinColor(
	colorName: string,
	theme: CarbonTheme,
): string {
	// Determine the current flavor based on the theme
	const flavor: CatppuccinFlavorName = getCatppuccinFlavorFromTheme(theme);

	// Access the flavor object
	const flavorObject = flavors[flavor];

	// Iterate over the color entries for the current flavor
	for (const [color, details] of flavorObject.colorEntries) {
		if (color === colorName) {
			// Return the hex string for the matching color name
			return details.hex;
		}
	}

	// If the color name is not found, return white
	return '#ffffff';
}

export function getCatppuccinColorFromTagColor(color: TagColor): string {
	switch (color) {
		case 'red':
			return 'var(--ctp-blue)';
		case 'green':
			return 'var(--ctp-blue)';
		case 'teal':
			return 'var(--ctp-blue)';
		case 'blue':
			return 'var(--ctp-blue)';
		case 'magenta':
			return 'var(--ctp-blue)';
		case 'purple':
			return 'var(--ctp-blue)';
		case 'cyan':
			return 'var(--ctp-blue)';
		case 'warm-gray':
			return 'var(--ctp-blue)';
		case 'cool-gray':
			return 'var(--ctp-blue)';
		case 'gray':
		case 'high-contrast':
		case 'outline':
			return 'var(--ctp-blue)';
		default:
			return 'var(--ctp-blue)';
	}
}

export const catppuccinThemeMap: ThemeMap = {
	default: {
		'--ctp-rosewater': '--ctp-mocha-rosewater',
		'--ctp-flamingo': '--ctp-mocha-flamingo',
		'--ctp-pink': '--ctp-mocha-pink',
		'--ctp-mauve': '--ctp-mocha-mauve',
		'--ctp-red': '--ctp-mocha-red',
		'--ctp-maroon': '--ctp-mocha-maroon',
		'--ctp-peach': '--ctp-mocha-peach',
		'--ctp-yellow': '--ctp-mocha-yellow',
		'--ctp-green': '--ctp-mocha-green',
		'--ctp-teal': '--ctp-mocha-teal',
		'--ctp-sky': '--ctp-mocha-sky',
		'--ctp-sapphire': '--ctp-mocha-sapphire',
		'--ctp-blue': '--ctp-mocha-blue',
		'--ctp-lavender': '--ctp-mocha-lavender',
		'--ctp-text': '--ctp-mocha-text',
		'--ctp-subtext1': '--ctp-mocha-subtext1',
		'--ctp-subtext0': '--ctp-mocha-subtext0',
		'--ctp-overlay2': '--ctp-mocha-overlay2',
		'--ctp-overlay1': '--ctp-mocha-overlay1',
		'--ctp-overlay0': '--ctp-mocha-overlay0',
		'--ctp-surface2': '--ctp-mocha-surface2',
		'--ctp-surface1': '--ctp-mocha-surface1',
		'--ctp-surface0': '--ctp-mocha-surface0',
		'--ctp-base': '--ctp-mocha-base',
		'--ctp-mantle': '--ctp-mocha-mantle',
		'--ctp-crust': '--ctp-mocha-crust',
	},
	g100: {
		'--ctp-rosewater': '--ctp-mocha-rosewater',
		'--ctp-flamingo': '--ctp-mocha-flamingo',
		'--ctp-pink': '--ctp-mocha-pink',
		'--ctp-mauve': '--ctp-mocha-mauve',
		'--ctp-red': '--ctp-mocha-red',
		'--ctp-maroon': '--ctp-mocha-maroon',
		'--ctp-peach': '--ctp-mocha-peach',
		'--ctp-yellow': '--ctp-mocha-yellow',
		'--ctp-green': '--ctp-mocha-green',
		'--ctp-teal': '--ctp-mocha-teal',
		'--ctp-sky': '--ctp-mocha-sky',
		'--ctp-sapphire': '--ctp-mocha-sapphire',
		'--ctp-blue': '--ctp-mocha-blue',
		'--ctp-lavender': '--ctp-mocha-lavender',
		'--ctp-text': '--ctp-mocha-text',
		'--ctp-subtext1': '--ctp-mocha-subtext1',
		'--ctp-subtext0': '--ctp-mocha-subtext0',
		'--ctp-overlay2': '--ctp-mocha-overlay2',
		'--ctp-overlay1': '--ctp-mocha-overlay1',
		'--ctp-overlay0': '--ctp-mocha-overlay0',
		'--ctp-surface2': '--ctp-mocha-surface2',
		'--ctp-surface1': '--ctp-mocha-surface1',
		'--ctp-surface0': '--ctp-mocha-surface0',
		'--ctp-base': '--ctp-mocha-base',
		'--ctp-mantle': '--ctp-mocha-mantle',
		'--ctp-crust': '--ctp-mocha-crust',
	},
	g90: {
		'--ctp-rosewater': '--ctp-macchiato-rosewater',
		'--ctp-flamingo': '--ctp-macchiato-flamingo',
		'--ctp-pink': '--ctp-macchiato-pink',
		'--ctp-mauve': '--ctp-macchiato-mauve',
		'--ctp-red': '--ctp-macchiato-red',
		'--ctp-maroon': '--ctp-macchiato-maroon',
		'--ctp-peach': '--ctp-macchiato-peach',
		'--ctp-yellow': '--ctp-macchiato-yellow',
		'--ctp-green': '--ctp-macchiato-green',
		'--ctp-teal': '--ctp-macchiato-teal',
		'--ctp-sky': '--ctp-macchiato-sky',
		'--ctp-sapphire': '--ctp-macchiato-sapphire',
		'--ctp-blue': '--ctp-macchiato-blue',
		'--ctp-lavender': '--ctp-macchiato-lavender',
		'--ctp-text': '--ctp-macchiato-text',
		'--ctp-subtext1': '--ctp-macchiato-subtext1',
		'--ctp-subtext0': '--ctp-macchiato-subtext0',
		'--ctp-overlay2': '--ctp-macchiato-overlay2',
		'--ctp-overlay1': '--ctp-macchiato-overlay1',
		'--ctp-overlay0': '--ctp-macchiato-overlay0',
		'--ctp-surface2': '--ctp-macchiato-surface2',
		'--ctp-surface1': '--ctp-macchiato-surface1',
		'--ctp-surface0': '--ctp-macchiato-surface0',
		'--ctp-base': '--ctp-macchiato-base',
		'--ctp-mantle': '--ctp-macchiato-mantle',
		'--ctp-crust': '--ctp-macchiato-crust',
	},
	g80: {
		'--ctp-rosewater': '--ctp-frappe-rosewater',
		'--ctp-flamingo': '--ctp-frappe-flamingo',
		'--ctp-pink': '--ctp-frappe-pink',
		'--ctp-mauve': '--ctp-frappe-mauve',
		'--ctp-red': '--ctp-frappe-red',
		'--ctp-maroon': '--ctp-frappe-maroon',
		'--ctp-peach': '--ctp-frappe-peach',
		'--ctp-yellow': '--ctp-frappe-yellow',
		'--ctp-green': '--ctp-frappe-green',
		'--ctp-teal': '--ctp-frappe-teal',
		'--ctp-sky': '--ctp-frappe-sky',
		'--ctp-sapphire': '--ctp-frappe-sapphire',
		'--ctp-blue': '--ctp-frappe-blue',
		'--ctp-lavender': '--ctp-frappe-lavender',
		'--ctp-text': '--ctp-frappe-text',
		'--ctp-subtext1': '--ctp-frappe-subtext1',
		'--ctp-subtext0': '--ctp-frappe-subtext0',
		'--ctp-overlay2': '--ctp-frappe-overlay2',
		'--ctp-overlay1': '--ctp-frappe-overlay1',
		'--ctp-overlay0': '--ctp-frappe-overlay0',
		'--ctp-surface2': '--ctp-frappe-surface2',
		'--ctp-surface1': '--ctp-frappe-surface1',
		'--ctp-surface0': '--ctp-frappe-surface0',
		'--ctp-base': '--ctp-frappe-base',
		'--ctp-mantle': '--ctp-frappe-mantle',
		'--ctp-crust': '--ctp-frappe-crust',
	},
	g10: {
		'--ctp-rosewater': '--ctp-latte-rosewater',
		'--ctp-flamingo': '--ctp-latte-flamingo',
		'--ctp-pink': '--ctp-latte-pink',
		'--ctp-mauve': '--ctp-latte-mauve',
		'--ctp-red': '--ctp-latte-red',
		'--ctp-maroon': '--ctp-latte-maroon',
		'--ctp-peach': '--ctp-latte-peach',
		'--ctp-yellow': '--ctp-latte-yellow',
		'--ctp-green': '--ctp-latte-green',
		'--ctp-teal': '--ctp-latte-teal',
		'--ctp-sky': '--ctp-latte-sky',
		'--ctp-sapphire': '--ctp-latte-sapphire',
		'--ctp-blue': '--ctp-latte-blue',
		'--ctp-lavender': '--ctp-latte-lavender',
		'--ctp-text': '--ctp-latte-text',
		'--ctp-subtext1': '--ctp-latte-subtext1',
		'--ctp-subtext0': '--ctp-latte-subtext0',
		'--ctp-overlay2': '--ctp-latte-overlay2',
		'--ctp-overlay1': '--ctp-latte-overlay1',
		'--ctp-overlay0': '--ctp-latte-overlay0',
		'--ctp-surface2': '--ctp-latte-surface2',
		'--ctp-surface1': '--ctp-latte-surface1',
		'--ctp-surface0': '--ctp-latte-surface0',
		'--ctp-base': '--ctp-latte-base',
		'--ctp-mantle': '--ctp-latte-mantle',
		'--ctp-crust': '--ctp-latte-crust',
	},
	white: {
		'--ctp-rosewater': '--ctp-latte-rosewater',
		'--ctp-flamingo': '--ctp-latte-flamingo',
		'--ctp-pink': '--ctp-latte-pink',
		'--ctp-mauve': '--ctp-latte-mauve',
		'--ctp-red': '--ctp-latte-red',
		'--ctp-maroon': '--ctp-latte-maroon',
		'--ctp-peach': '--ctp-latte-peach',
		'--ctp-yellow': '--ctp-latte-yellow',
		'--ctp-green': '--ctp-latte-green',
		'--ctp-teal': '--ctp-latte-teal',
		'--ctp-sky': '--ctp-latte-sky',
		'--ctp-sapphire': '--ctp-latte-sapphire',
		'--ctp-blue': '--ctp-latte-blue',
		'--ctp-lavender': '--ctp-latte-lavender',
		'--ctp-text': '--ctp-latte-text',
		'--ctp-subtext1': '--ctp-latte-subtext1',
		'--ctp-subtext0': '--ctp-latte-subtext0',
		'--ctp-overlay2': '--ctp-latte-overlay2',
		'--ctp-overlay1': '--ctp-latte-overlay1',
		'--ctp-overlay0': '--ctp-latte-overlay0',
		'--ctp-surface2': '--ctp-latte-surface2',
		'--ctp-surface1': '--ctp-latte-surface1',
		'--ctp-surface0': '--ctp-latte-surface0',
		'--ctp-base': '--ctp-latte-base',
		'--ctp-mantle': '--ctp-latte-mantle',
		'--ctp-crust': '--ctp-latte-crust',
	},
};

/** Full list at https://github.com/DorielRivalet/mhfz-overlay/blob/main/docs/palette.md */
export const catppuccinColorNames = [
	{ var: '--ctp-rosewater', name: 'Rosewater' },
	{ var: '--ctp-flamingo', name: 'Flamingo' },
	{ var: '--ctp-pink', name: 'Pink' },
	{ var: '--ctp-mauve', name: 'Mauve' },
	{ var: '--ctp-red', name: 'Red' },
	{ var: '--ctp-maroon', name: 'Maroon' },
	{ var: '--ctp-peach', name: 'Peach' },
	{ var: '--ctp-yellow', name: 'Yellow' },
	{ var: '--ctp-green', name: 'Green' },
	{ var: '--ctp-teal', name: 'Teal' },
	{ var: '--ctp-sky', name: 'Sky' },
	{ var: '--ctp-sapphire', name: 'Sapphire' },
	{ var: '--ctp-blue', name: 'Blue' },
	{ var: '--ctp-lavender', name: 'Lavender' },
	{ var: '--ctp-text', name: 'Text' },
	{ var: '--ctp-subtext1', name: 'Subtext 1' },
	{ var: '--ctp-subtext0', name: 'Subtext 0' },
	{ var: '--ctp-overlay2', name: 'Overlay 2' },
	{ var: '--ctp-overlay1', name: 'Overlay 1' },
	{ var: '--ctp-overlay0', name: 'Overlay 0' },
	{ var: '--ctp-surface2', name: 'Surface 2' },
	{ var: '--ctp-surface1', name: 'Surface 1' },
	{ var: '--ctp-surface0', name: 'Surface 0' },
	{ var: '--ctp-base', name: 'Base' },
	{ var: '--ctp-mantle', name: 'Mantle' },
	{ var: '--ctp-crust', name: 'Crust' },
];
