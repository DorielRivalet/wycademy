import pageThumbnail from '$lib/client/images/logo.png';

import thumbnailLightActiveFeature from '$lib/client/images/page-thumbnail/light/active-feature.png';
import thumbnailLightGuildPoogies from '$lib/client/images/page-thumbnail/light/guild-poogies.png';
import thumbnailLightRecipes from '$lib/client/images/page-thumbnail/light/recipes.png';
import thumbnailLightElements from '$lib/client/images/page-thumbnail/light/elements.png';
import thumbnailLightMSHiden from '$lib/client/images/page-thumbnail/light/magnet-spike-hiden.png';
import thumbnailLightMSIFrames from '$lib/client/images/page-thumbnail/light/magnet-spike-iframes.png';
import thumbnailLightMS from '$lib/client/images/page-thumbnail/light/magnet-spike.png';
import thumbnailLightArmorColors from '$lib/client/images/page-thumbnail/light/armor-colors.png';
import thumbnailLightSharpness from '$lib/client/images/page-thumbnail/light/sharpness.png';
import thumbnailLightWeaponMultipliers from '$lib/client/images/page-thumbnail/light/weapon-multipliers.png';
import thumbnailLightSRStats from '$lib/client/images/page-thumbnail/light/style-rank-stats.png';
import thumbnailLightWeaponTech from '$lib/client/images/page-thumbnail/light/weapons-tech-skills.png';
import thumbnailLightTranscendElementalBursts from '$lib/client/images/page-thumbnail/light/elemental-bursts.png';
import thumbnailLightSwordAndShieldMotionValues from '$lib/client/images/page-thumbnail/light/sword-and-shield-motion-values.png';
import thumbnailLightTowerWeapon from '$lib/client/images/page-thumbnail/light/tower-weapon.png';
import thumbnailLightSharedMotionValues from '$lib/client/images/page-thumbnail/light/shared-motion-values.png';
import thumbnailLightFlashConversion from '$lib/client/images/page-thumbnail/light/flash-conversion.png';
import thumbnailLightIceAge from '$lib/client/images/page-thumbnail/light/ice-age.png';
import thumbnailLightCaravanGemUpgrade from '$lib/client/images/page-thumbnail/light/caravan-gem-upgrade.png';

import thumbnailDarkActiveFeature from '$lib/client/images/page-thumbnail/dark/active-feature.png';
import thumbnailDarkGuildPoogies from '$lib/client/images/page-thumbnail/dark/guild-poogies.png';
import thumbnailDarkRecipes from '$lib/client/images/page-thumbnail/dark/recipes.png';
import thumbnailDarkElements from '$lib/client/images/page-thumbnail/dark/elements.png';
import thumbnailDarkMSHiden from '$lib/client/images/page-thumbnail/dark/magnet-spike-hiden.png';
import thumbnailDarkMSIFrames from '$lib/client/images/page-thumbnail/dark/magnet-spike-iframes.png';
import thumbnailDarkMS from '$lib/client/images/page-thumbnail/dark/magnet-spike.png';
import thumbnailDarkArmorColors from '$lib/client/images/page-thumbnail/dark/armor-colors.png';
import thumbnailDarkSharpness from '$lib/client/images/page-thumbnail/dark/sharpness.png';
import thumbnailDarkWeaponMultipliers from '$lib/client/images/page-thumbnail/dark/weapon-multipliers.png';
import thumbnailDarkSRStats from '$lib/client/images/page-thumbnail/dark/style-rank-stats.png';
import thumbnailDarkWeaponTech from '$lib/client/images/page-thumbnail/dark/weapons-tech-skills.png';
import thumbnailDarkTranscendElementalBursts from '$lib/client/images/page-thumbnail/dark/elemental-bursts.png';
import thumbnailDarkSwordAndShieldMotionValues from '$lib/client/images/page-thumbnail/dark/sword-and-shield-motion-values.png';
import thumbnailDarkTowerWeapon from '$lib/client/images/page-thumbnail/dark/tower-weapon.png';
import thumbnailDarkSharedMotionValues from '$lib/client/images/page-thumbnail/dark/shared-motion-values.png';
import thumbnailDarkFlashConversion from '$lib/client/images/page-thumbnail/dark/flash-conversion.png';
import thumbnailDarkIceAge from '$lib/client/images/page-thumbnail/dark/ice-age.png';
import thumbnailDarkItemGenerator from '$lib/client/images/page-thumbnail/dark/item-generator.png';
import thumbnailDarkArmorGenerator from '$lib/client/images/page-thumbnail/dark/armor-generator.png';
import thumbnailDarkWeaponGenerator from '$lib/client/images/page-thumbnail/dark/weapon-generator.png';
import thumbnailDarkCaravanGemUpgrade from '$lib/client/images/page-thumbnail/dark/caravan-gem-upgrade.png';

import { getMonsterIcon } from './frontier/monsters';

const lightThumbnailInfo: {
	link: string;
	thumbnail: string;
	embed: string | null;
}[] = [
	{
		link: '/hunter-notes/weapons/active-feature',
		embed: null,
		thumbnail: thumbnailLightActiveFeature,
	},
	{
		embed: 'recipes',
		link: '/hunter-notes/locations/guild-hall',
		thumbnail: thumbnailLightRecipes,
	},
	{
		embed: 'guild-poogie-skills',
		link: '/hunter-notes/locations/guild-hall',
		thumbnail: thumbnailLightGuildPoogies,
	},
	{
		embed: null,
		link: '/hunter-notes/getting-started/elements',
		thumbnail: thumbnailLightElements,
	},
	{
		embed: null,
		link: '/hunter-notes/weapons/magnet-spike',
		thumbnail: thumbnailLightMS,
	},
	{
		embed: 'active-feature',
		link: '/hunter-notes/weapons/magnet-spike',
		thumbnail: thumbnailLightActiveFeature,
	},
	{
		embed: 'hiden',
		link: '/hunter-notes/weapons/magnet-spike',
		thumbnail: thumbnailLightMSHiden,
	},
	{
		embed: 'iframes',
		link: '/hunter-notes/weapons/magnet-spike',
		thumbnail: thumbnailLightMSIFrames,
	},
	{
		embed: null,
		link: '/hunter-notes/armor/colors',
		thumbnail: thumbnailLightArmorColors,
	},
	{
		embed: 'sharpness',
		link: '/hunter-notes/weapons/overview',
		thumbnail: thumbnailLightSharpness,
	},
	{
		embed: 'weapon-multipliers',
		link: '/hunter-notes/weapons/overview',
		thumbnail: thumbnailLightWeaponMultipliers,
	},
	{
		embed: 'weapon-tech-skills',
		link: '/hunter-notes/getting-started/style-rank',
		thumbnail: thumbnailLightWeaponTech,
	},
	{
		embed: 'style-rank-stats',
		link: '/hunter-notes/getting-started/style-rank',
		thumbnail: thumbnailLightSRStats,
	},
	{
		embed: null,
		link: '/hunter-notes/getting-started/transcend',
		thumbnail: thumbnailLightTranscendElementalBursts,
	},
	{
		embed: null,
		link: '/tools/calculator/damage',
		thumbnail: thumbnailLightSharedMotionValues,
	},
	{
		embed: null,
		link: '/tools/simulator/tower-weapon',
		thumbnail: thumbnailLightTowerWeapon,
	},
	{
		embed: null,
		link: '/tools/calculator/crit-conversion',
		thumbnail: thumbnailLightFlashConversion,
	},
	{
		embed: null,
		link: '/tools/calculator/ice-age',
		thumbnail: thumbnailLightIceAge,
	},
	{
		embed: null,
		link: '/tools/generator/armor',
		thumbnail: thumbnailDarkArmorGenerator,
	},
	{
		embed: null,
		link: '/tools/generator/item',
		thumbnail: thumbnailDarkItemGenerator,
	},
	{
		embed: null,
		link: '/tools/generator/weapon',
		thumbnail: thumbnailDarkWeaponGenerator,
	},
	{
		embed: null,
		link: '/tools/generator/icon',
		thumbnail: getMonsterIcon('Burning Freezing Elzelion'),
	},
	{
		embed: null,
		link: '/tools/generator/thumbnail',
		thumbnail: pageThumbnail, // TODO change when fixed
	},
	{
		embed: null,
		link: '/tools/external/overlay',
		thumbnail: pageThumbnail,
	},
	{
		embed: null,
		link: '/tools/external/ezlion',
		thumbnail:
			'https://raw.githubusercontent.com/DorielRivalet/ezlion/main/app/src/lib/assets/logo-alt.webp',
	},
	{
		embed: 'caravan-skills',
		link: '/hunter-notes/locations/caravan',
		thumbnail: thumbnailLightCaravanGemUpgrade,
	},
	{
		embed: null,
		link: '/hunter-notes/locations/caravan',
		thumbnail: thumbnailLightCaravanGemUpgrade,
	},
];

const darkThumbnailInfo: {
	link: string;
	thumbnail: string;
	embed: string | null;
}[] = [
	{
		link: '/hunter-notes/weapons/active-feature',
		embed: null,
		thumbnail: thumbnailDarkActiveFeature,
	},
	{
		embed: 'recipes',
		link: '/hunter-notes/locations/guild-hall',
		thumbnail: thumbnailDarkRecipes,
	},
	{
		embed: 'guild-poogie-skills',
		link: '/hunter-notes/locations/guild-hall',
		thumbnail: thumbnailDarkGuildPoogies,
	},
	{
		embed: null,
		link: '/hunter-notes/getting-started/elements',
		thumbnail: thumbnailDarkElements,
	},
	{
		embed: null,
		link: '/hunter-notes/weapons/magnet-spike',
		thumbnail: thumbnailDarkMS,
	},
	{
		embed: 'active-feature',
		link: '/hunter-notes/weapons/magnet-spike',
		thumbnail: thumbnailDarkActiveFeature,
	},
	{
		embed: 'hiden',
		link: '/hunter-notes/weapons/magnet-spike',
		thumbnail: thumbnailDarkMSHiden,
	},
	{
		embed: 'iframes',
		link: '/hunter-notes/weapons/magnet-spike',
		thumbnail: thumbnailDarkMSIFrames,
	},
	{
		embed: null,
		link: '/hunter-notes/armor/colors',
		thumbnail: thumbnailDarkArmorColors,
	},
	{
		embed: 'sharpness',
		link: '/hunter-notes/weapons/overview',
		thumbnail: thumbnailDarkSharpness,
	},
	{
		embed: 'weapon-multipliers',
		link: '/hunter-notes/weapons/overview',
		thumbnail: thumbnailDarkWeaponMultipliers,
	},
	{
		embed: 'weapon-tech-skills',
		link: '/hunter-notes/getting-started/style-rank',
		thumbnail: thumbnailDarkWeaponTech,
	},
	{
		embed: 'style-rank-stats',
		link: '/hunter-notes/getting-started/style-rank',
		thumbnail: thumbnailDarkSRStats,
	},
	{
		embed: null,
		link: '/hunter-notes/getting-started/transcend',
		thumbnail: thumbnailDarkTranscendElementalBursts,
	},
	{
		embed: null,
		link: '/tools/calculator/damage',
		thumbnail: thumbnailDarkSharedMotionValues,
	},
	{
		embed: null,
		link: '/tools/simulator/tower-weapon',
		thumbnail: thumbnailDarkTowerWeapon,
	},
	{
		embed: null,
		link: '/tools/calculator/crit-conversion',
		thumbnail: thumbnailDarkFlashConversion,
	},
	{
		embed: null,
		link: '/tools/calculator/ice-age',
		thumbnail: thumbnailDarkIceAge,
	},
	{
		embed: null,
		link: '/tools/generator/armor',
		thumbnail: thumbnailDarkArmorGenerator,
	},
	{
		embed: null,
		link: '/tools/generator/item',
		thumbnail: thumbnailDarkItemGenerator,
	},
	{
		embed: null,
		link: '/tools/generator/weapon',
		thumbnail: thumbnailDarkWeaponGenerator,
	},
	{
		embed: null,
		link: '/tools/generator/icon',
		thumbnail: getMonsterIcon('Burning Freezing Elzelion'),
	},
	{
		embed: null,
		link: '/tools/generator/thumbnail',
		thumbnail: pageThumbnail, // TODO change when fixed
	},
	{
		embed: null,
		link: '/tools/external/overlay',
		thumbnail: pageThumbnail,
	},
	{
		embed: null,
		link: '/tools/external/ezlion',
		thumbnail:
			'https://raw.githubusercontent.com/DorielRivalet/ezlion/main/app/src/lib/assets/logo-alt.webp',
	},
	{
		embed: 'caravan-skills',
		link: '/hunter-notes/locations/caravan',
		thumbnail: thumbnailDarkCaravanGemUpgrade,
	},
	{
		embed: null,
		link: '/hunter-notes/locations/caravan',
		thumbnail: thumbnailDarkCaravanGemUpgrade,
	},
];

export function getPageThumbnail(
	link: string,
	query: string | null,
	embedTheme: string | null,
) {
	if (embedTheme === 'light') {
		for (const entry of lightThumbnailInfo) {
			if (entry.link === link && entry.embed === query) {
				return entry.thumbnail;
			}
		}
	} else {
		for (const entry of darkThumbnailInfo) {
			if (entry.link === link && entry.embed === query) {
				return entry.thumbnail;
			}
		}
	}

	return pageThumbnail;
}
