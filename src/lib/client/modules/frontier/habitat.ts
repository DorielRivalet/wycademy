import HabitatImageArena from '$lib/client/images/habitat/arena.webp';
import HabitatImageBattleground from '$lib/client/images/habitat/battleground.webp';
import HabitatImageBambooForest from '$lib/client/images/habitat/bamboo-forest.webp';
import HabitatImageCastleSchrade from '$lib/client/images/habitat/castle-schrade.webp';
import HabitatImageCloudViewingFortress from '$lib/client/images/habitat/cloud-viewing-fortress.webp';
import HabitatImageCompetitionArena from '$lib/client/images/habitat/competition-arena.webp';
import HabitatImageDeepCrater from '$lib/client/images/habitat/deep-crater.webp';
import HabitatImageDesert from '$lib/client/images/habitat/desert.webp';
import HabitatImageDuremudiraEntrance from '$lib/client/images/habitat/duremudira-entrance.webp';
import HabitatImageFlowerFields from '$lib/client/images/habitat/flower-fields.webp';
import HabitatImageForestAndHills from '$lib/client/images/habitat/forest-and-hills.webp';
import HabitatImageFortress from '$lib/client/images/habitat/fortress.webp';
import HabitatImageGorge from '$lib/client/images/habitat/gorge.webp';
import HabitatImageGreatArena from '$lib/client/images/habitat/great-arena.webp';
import HabitatImageGreatForest from '$lib/client/images/habitat/great-forest.webp';
import HabitatImageHighlands from '$lib/client/images/habitat/highlands.webp';
import HabitatImageHistoricalSite from '$lib/client/images/habitat/historical-site.webp';
import HabitatImageHistoricalSiteNight from '$lib/client/images/habitat/historical-site-night.webp';
import HabitatImageInterceptionBase from '$lib/client/images/habitat/interception-base.webp';
import HabitatImageJungle from '$lib/client/images/habitat/jungle.webp';
import HabitatImageLargeExplorationShip from '$lib/client/images/habitat/large-exploration-ship.webp';
import HabitatImageMezeportaSquare from '$lib/client/images/habitat/mezeporta-square.webp';
import HabitatImagePaintedFalls from '$lib/client/images/habitat/painted-falls.webp';
import HabitatImagePolarSea from '$lib/client/images/habitat/polar-sea.webp';
import HabitatImageRoad from '$lib/client/images/habitat/road.webp';
import HabitatImageSacredPinnacle from '$lib/client/images/habitat/sacred-pinnacle.webp';
import HabitatImageSanctuary from '$lib/client/images/habitat/sanctuary.webp';
import HabitatImageSkyCorridor from '$lib/client/images/habitat/sky-corridor.webp';
import HabitatImageSnowyMountains from '$lib/client/images/habitat/snowy_mountains.webp';
import HabitatImageSolitudeIslandDepths from '$lib/client/images/habitat/solitude-island-depths.webp';
import HabitatImageSolitudeIsland from '$lib/client/images/habitat/solitude-island.webp';
import HabitatImageSwamp from '$lib/client/images/habitat/swamp.webp';
import HabitatImageTidalIsland from '$lib/client/images/habitat/tidal-island.webp';
import HabitatImageTopOfGreatForest from '$lib/client/images/habitat/top-of-great-forest.webp';
import HabitatImageTowerNestHole from '$lib/client/images/habitat/tower-nest-hole.webp';
import HabitatImageTower from '$lib/client/images/habitat/tower.webp';
import HabitatImageTown from '$lib/client/images/habitat/town.webp';
import HabitatImageVolcano from '$lib/client/images/habitat/volcano.webp';
import HabitatImageWhiteLake from '$lib/client/images/habitat/white-lake.webp';
import HabitatImageWorldsEnd from '$lib/client/images/habitat/worlds-end.webp';

import LocationIconCattleya from '$lib/client/images/icon/cattleya.webp';
import LocationIconDuremudira from '$lib/client/images/icon/dure2.webp';
import LocationIconFlowerFields from '$lib/client/images/icon/flower_fields.webp';
import LocationIconForestAndHills from '$lib/client/images/icon/forest_and_hills.webp';
import LocationIconGorge from '$lib/client/images/icon/gorge.webp';
import LocationIconGreatForest from '$lib/client/images/icon/great_forest.webp';
import LocationIconHighlands from '$lib/client/images/icon/highlands.webp';
import LocationIconInterception from '$lib/client/images/icon/interception.webp';
import LocationIconJungle from '$lib/client/images/icon/jungle.webp';
import LocationIconRoad from '$lib/client/images/icon/road.webp';
import LocationIconSnowyMountains from '$lib/client/images/icon/snowy_mountains.webp';
import LocationIconTidalIsland from '$lib/client/images/icon/tidal_island.webp';
import LocationIconTower from '$lib/client/images/icon/tower.webp';
import LocationIconVolcano from '$lib/client/images/icon/volcano.webp';
import LocationIconWhiteLake from '$lib/client/images/icon/white_lake.webp';
import LocationIconDesert from '$lib/client/images/icon/desert.webp';
import LocationIconPolarSea from '$lib/client/images/icon/polar_sea.webp';
import LocationIconSwamp from '$lib/client/images/icon/swamp.webp';

// TODO ezlion
export type FrontierHabitat =
	| 'Arena'
	| 'Battleground'
	| 'Bamboo Forest'
	| 'Castle Schrade'
	| 'Cloud Viewing Fortress'
	| 'Competition Arena'
	| 'Deep Crater'
	| 'Desert'
	| 'Duremudira Entrance'
	| 'Flower Field'
	| 'Fortress'
	| 'Gorge'
	| 'Great Arena'
	| 'Great Forest'
	| 'Forest and Hills'
	| 'Highlands' // TODO or highland???
	| 'Historical Site'
	| 'Historical Site - Night'
	| 'Interception Base'
	| 'Jungle'
	| 'Large Exploration Ship'
	| 'Mezeporta Square'
	| 'Painted Falls' // TODO or Waterfalls???
	| 'Polar Sea'
	| "Hunter's Road"
	| 'Sacred Pinnacle'
	| 'Sanctuary'
	| 'Sky Corridor'
	| 'Snowy Mountains'
	| 'Solitude Island Depths'
	| 'Solitude Island'
	| 'Swamp'
	| 'Tidal Island'
	| 'Top of Great Forest' // TODO or Great Forest Peak???
	| 'Tower Nest Hole' // TODO or Nest Hole???
	| 'Tower'
	| 'Town'
	| 'Tower 2'
	| 'Volcano'
	| 'White Lake'
	| "World's End"
	| 'Tower 3'
	| 'Cosmopolitan';

// TODO icons
export const Habitats: {
	name: FrontierHabitat;
	image: any;
	icon: string;
}[] = [
	{ name: 'Arena', image: HabitatImageArena, icon: '' },
	{ name: 'Battleground', image: HabitatImageBattleground, icon: '' },
	{ name: 'Bamboo Forest', image: HabitatImageBambooForest, icon: '' },
	{ name: 'Castle Schrade', image: HabitatImageCastleSchrade, icon: '' },
	{
		name: 'Cloud Viewing Fortress',
		image: HabitatImageCloudViewingFortress,
		icon: '',
	},
	{ name: 'Competition Arena', image: HabitatImageCompetitionArena, icon: '' },
	{ name: 'Deep Crater', image: HabitatImageDeepCrater, icon: '' },
	{ name: 'Desert', image: HabitatImageDesert, icon: LocationIconDesert },
	{
		name: 'Duremudira Entrance',
		image: HabitatImageDuremudiraEntrance,
		icon: LocationIconDuremudira,
	},
	{
		name: 'Flower Field',
		image: HabitatImageFlowerFields,
		icon: LocationIconFlowerFields,
	},
	{
		name: 'Forest and Hills',
		image: HabitatImageForestAndHills,
		icon: LocationIconForestAndHills,
	},
	{ name: 'Fortress', image: HabitatImageFortress, icon: '' },
	{ name: 'Gorge', image: HabitatImageGorge, icon: LocationIconGorge },
	{ name: 'Great Arena', image: HabitatImageGreatArena, icon: '' },
	{
		name: 'Great Forest',
		image: HabitatImageGreatForest,
		icon: LocationIconGreatForest,
	},
	{
		name: 'Highlands',
		image: HabitatImageHighlands,
		icon: LocationIconHighlands,
	},
	{ name: 'Historical Site', image: HabitatImageHistoricalSite, icon: '' },
	{
		name: 'Historical Site - Night',
		image: HabitatImageHistoricalSiteNight,
		icon: '',
	},
	{
		name: 'Interception Base',
		image: HabitatImageInterceptionBase,
		icon: LocationIconInterception,
	},
	{ name: 'Jungle', image: HabitatImageJungle, icon: LocationIconJungle },
	{
		name: 'Large Exploration Ship',
		image: HabitatImageLargeExplorationShip,
		icon: '',
	},
	{
		name: 'Mezeporta Square',
		image: HabitatImageMezeportaSquare,
		icon: LocationIconCattleya,
	},
	{ name: 'Painted Falls', image: HabitatImagePaintedFalls, icon: '' },
	{
		name: 'Polar Sea',
		image: HabitatImagePolarSea,
		icon: LocationIconPolarSea,
	},
	{ name: "Hunter's Road", image: HabitatImageRoad, icon: LocationIconRoad },
	{ name: 'Sacred Pinnacle', image: HabitatImageSacredPinnacle, icon: '' },
	{ name: 'Sanctuary', image: HabitatImageSanctuary, icon: '' },
	{
		name: 'Sky Corridor',
		image: HabitatImageSkyCorridor,
		icon: LocationIconTower, // TODO check
	},
	{
		name: 'Snowy Mountains',
		image: HabitatImageSnowyMountains,
		icon: LocationIconSnowyMountains,
	},
	{
		name: 'Solitude Island Depths',
		image: HabitatImageSolitudeIslandDepths,
		icon: '',
	},
	{ name: 'Solitude Island', image: HabitatImageSolitudeIsland, icon: '' },
	{ name: 'Swamp', image: HabitatImageSwamp, icon: LocationIconSwamp },
	{
		name: 'Tidal Island',
		image: HabitatImageTidalIsland,
		icon: LocationIconTidalIsland,
	},
	{
		name: 'Top of Great Forest',
		image: HabitatImageTopOfGreatForest,
		icon: '',
	},
	{ name: 'Tower Nest Hole', image: HabitatImageTowerNestHole, icon: '' },
	{ name: 'Tower', image: HabitatImageTower, icon: LocationIconTower },
	{ name: 'Town', image: HabitatImageTown, icon: '' },
	{ name: 'Volcano', image: HabitatImageVolcano, icon: LocationIconVolcano },
	{
		name: 'White Lake',
		image: HabitatImageWhiteLake,
		icon: LocationIconWhiteLake,
	},
	{ name: "World's End", image: HabitatImageWorldsEnd, icon: '' },
];

export function getHabitatIcon(name: FrontierHabitat) {
	return Habitats.find((e) => e.name === name)?.icon || '';
}
