import LocationIconBento from '$lib/client/images/icon/bento.webp';
import LocationIconBerserkRavienteRaid from '$lib/client/images/icon/berserk_raviente_raid.webp';
import LocationIconBlacksmith from '$lib/client/images/icon/blacksmith.webp';
import LocationIconCattleya from '$lib/client/images/icon/cattleya.webp';
import LocationIconPrayerFountain from '$lib/client/images/icon/prayer_fountain.webp';
import LocationIconDivaNote from '$lib/client/images/icon/diva_note.webp';
import LocationIconDivaPrayerGem from '$lib/client/images/icon/diva_prayer_gem.webp';
import LocationIconDiva from '$lib/client/images/icon/diva.webp';
import LocationIconDuremudira from '$lib/client/images/icon/dure2.webp';
import LocationIconEntrance from '$lib/client/images/icon/entrance.webp';
import LocationIconFesti from '$lib/client/images/icon/festi.webp';
import LocationIconFlowerFields from '$lib/client/images/icon/flower_fields.webp';
import LocationIconForestAndHills from '$lib/client/images/icon/forest_and_hills.webp';
import LocationIconGorge from '$lib/client/images/icon/gorge.webp';
import LocationIconGreatForest from '$lib/client/images/icon/great_forest.webp';
import LocationIconGuildHall from '$lib/client/images/icon/guild_hall.webp';
import LocationIconHighlands from '$lib/client/images/icon/highlands.webp';
import LocationIconHouse from '$lib/client/images/icon/house.webp';
import LocationIconHunterContest from '$lib/client/images/icon/hunter_contest.webp';
import LocationIconInterceptionMonster from '$lib/client/images/icon/interception_monster.webp';
import LocationIconInterception from '$lib/client/images/icon/interception.webp';
import LocationIconJungle from '$lib/client/images/icon/jungle.webp';
import LocationIconMezfes from '$lib/client/images/icon/mezfes.webp';
import LocationIconMyGallery from '$lib/client/images/icon/my_gallery.webp';
import LocationIconMyGarden from '$lib/client/images/icon/my_garden.webp';
import LocationIconMyHouse from '$lib/client/images/icon/my_house.webp';
import LocationIconMyMissions from '$lib/client/images/icon/my_missions.webp';
import LocationIconMySupport from '$lib/client/images/icon/my_support.webp';
import LocationIconMyTore from '$lib/client/images/icon/my_tore.webp';
import LocationIconPvP from '$lib/client/images/icon/pvp.webp';
import LocationIconRastaBar from '$lib/client/images/icon/rasta_bar.webp';
import LocationIconRavienteRaid from '$lib/client/images/icon/raviente_raid.webp';
import LocationIconRoad from '$lib/client/images/icon/road.webp';
import LocationIconSnowyMountains from '$lib/client/images/icon/snowy_mountains.webp';
import LocationIconTent from '$lib/client/images/icon/tent.webp';
import LocationIconTidalIsland from '$lib/client/images/icon/tidal_island.webp';
import LocationIconTower from '$lib/client/images/icon/tower.webp';
import LocationIconTranscend from '$lib/client/images/icon/transcend.webp';
import LocationIconViolentRavienteRaid from '$lib/client/images/icon/violent_raviente_raid.webp';
import LocationIconVolcano from '$lib/client/images/icon/volcano.webp';
import LocationIconWhiteLake from '$lib/client/images/icon/white_lake.webp';
import LocationIconWorld from '$lib/client/images/icon/world.webp';
import LocationIconBurst from '$lib/client/images/icon/burst.webp';
import LocationIconCaravan from '$lib/client/images/icon/pallone_caravan.webp';
import LocationIconDesert from '$lib/client/images/icon/desert.webp';
import LocationIconPolarSea from '$lib/client/images/icon/polar_sea.webp';
import LocationIconSwamp from '$lib/client/images/icon/swamp.webp';

// TODO to ezlion
export type FrontierLocation =
	| ''
	| 'Jungle'
	| 'Snowy Mountains'
	| 'Desert'
	| 'Volcano'
	| 'Swamp'
	| 'Siege Fortres'
	| 'Arena with Moat'
	| 'Castle Shrade'
	| 'Forest and Hills'
	| 'Arena with Pillar'
	| 'Tower 3'
	| 'Kokoto Village'
	| 'Crimson Battleground'
	| 'Arena with Ledge'
	| 'Dundorma'
	| 'Tower 2'
	| 'Tower 1'
	| 'My House'
	| 'Akantor Battleground'
	| 'Mezeporta'
	| 'Hairdresser'
	| 'Guild Hall'
	| 'My Tore'
	| 'Old Town'
	| 'Private Bar'
	| 'Rasta Bar'
	| 'Great Forest'
	| 'Code Claiming Room'
	| 'Top of Great Forest'
	| 'Highlands'
	| 'Caravan Changing Area'
	| 'Blacksmith'
	| 'Caravan Blimp'
	| 'Caravan Guest House'
	| 'My Gallery'
	| 'My Garden'
	| 'Interception Base'
	| 'Cities'
	| 'My Support'
	| 'PvP Room'
	| 'Gorge'
	| 'Solitude Island'
	| 'Campaign Tent'
	| 'Raviente Baloon'
	| 'Tidas Island'
	| 'My Missions'
	| 'Large Airship'
	| 'Polar Sea'
	| "World's End"
	| 'Flower Field'
	| 'Top of Tower'
	| 'Bamboo Forest'
	| 'Deep Crater'
	| 'Prayer Fountain'
	| 'Tower 01'
	| 'Tower Airship'
	| 'Tower 02'
	| 'Urgent Tower'
	| 'Tower'
	| 'Varusa Battlefield'
	| 'Duremudira Arena'
	| 'Duremudira Doorway'
	| 'White Lake'
	| '4th District Tower'
	| 'Solitude Island Depths'
	| 'Painted Falls'
	| 'Cloud Viewing Fortress'
	| 'Guild Hall (Diva)'
	| 'Sacred Pinnacle'
	| 'Sanctuary'
	| 'Fortress'
	| "Hunter's Road"
	| 'Historical Site'
	| 'Mezeporta Festival'
	| 'Bento'
	| 'Berserk Raviente Raid'
	| 'Caravan'
	| 'Cattleya'
	| 'Diva Note'
	| 'Diva Prayer Gem'
	| 'Diva'
	| 'Diva Defense'
	| 'Duremudira'
	| 'Entrance'
	| 'Festi'
	| 'Hunter Festival'
	| 'Hunter Contest'
	| 'Interception Monster'
	| 'Interception'
	| 'Mezfes'
	| 'PvP'
	| 'Road'
	| 'Raviente Raid'
	| 'Tent'
	| 'Transcend'
	| 'Tidal Island'
	| 'Violent Raviente Raid'
	| 'World'
	| 'Burst'
	| 'House';

// TODO probably put some entries in another array
// merge with habitat array?
export const LocationIcons: { name: FrontierLocation; icon: any }[] = [
	{ name: 'Bento', icon: LocationIconBento },
	{
		name: 'Berserk Raviente Raid',
		icon: LocationIconBerserkRavienteRaid,
	},
	{ name: 'Blacksmith', icon: LocationIconBlacksmith },
	{ name: 'Caravan', icon: LocationIconCaravan },
	{ name: 'Cattleya', icon: LocationIconCattleya },
	{ name: 'Desert', icon: LocationIconDesert },
	{ name: 'Prayer Fountain', icon: LocationIconPrayerFountain },
	{ name: 'Diva Note', icon: LocationIconDivaNote },
	{ name: 'Diva Prayer Gem', icon: LocationIconDivaPrayerGem },
	{ name: 'Diva', icon: LocationIconDiva },
	{ name: 'Diva Defense', icon: LocationIconInterception },
	{ name: 'Duremudira', icon: LocationIconDuremudira },
	{ name: 'Entrance', icon: LocationIconEntrance },
	{ name: 'Festi', icon: LocationIconFesti },
	{ name: 'Hunter Festival', icon: LocationIconFesti },
	{ name: 'Flower Field', icon: LocationIconFlowerFields },
	{ name: 'Forest and Hills', icon: LocationIconForestAndHills },
	{ name: 'Gorge', icon: LocationIconGorge },
	{ name: 'Great Forest', icon: LocationIconGreatForest },
	{ name: 'Guild Hall', icon: LocationIconGuildHall },
	{ name: 'Highlands', icon: LocationIconHighlands },
	{ name: 'House', icon: LocationIconHouse },
	{ name: 'Hunter Contest', icon: LocationIconHunterContest },
	{
		name: 'Interception Monster',
		icon: LocationIconInterceptionMonster,
	},
	{ name: 'Interception', icon: LocationIconInterception },
	{ name: 'Jungle', icon: LocationIconJungle },
	{ name: 'Mezeporta', icon: LocationIconCattleya },
	{ name: 'Mezfes', icon: LocationIconMezfes },
	{ name: 'Mezeporta Festival', icon: LocationIconMezfes },
	{ name: 'My Gallery', icon: LocationIconMyGallery },
	{ name: 'My Garden', icon: LocationIconMyGarden },
	{ name: 'My House', icon: LocationIconMyHouse },
	{ name: 'My Missions', icon: LocationIconMyMissions },
	{ name: 'My Support', icon: LocationIconMySupport },
	{ name: 'My Tore', icon: LocationIconMyTore },
	{ name: 'Polar Sea', icon: LocationIconPolarSea },
	{ name: 'PvP', icon: LocationIconPvP },
	{ name: 'Rasta Bar', icon: LocationIconRastaBar },
	{ name: 'Raviente Raid', icon: LocationIconRavienteRaid },
	{ name: 'Road', icon: LocationIconRoad },
	{ name: 'Snowy Mountains', icon: LocationIconSnowyMountains },
	{ name: 'Swamp', icon: LocationIconSwamp },
	{ name: 'Tent', icon: LocationIconTent },
	{ name: 'Tidal Island', icon: LocationIconTidalIsland },
	{ name: 'Tower', icon: LocationIconTower },
	{ name: 'Transcend', icon: LocationIconTranscend },
	{
		name: 'Violent Raviente Raid',
		icon: LocationIconViolentRavienteRaid,
	},
	{ name: 'Volcano', icon: LocationIconVolcano },
	{ name: 'White Lake', icon: LocationIconWhiteLake },
	{ name: 'World', icon: LocationIconWorld },
	{ name: 'Burst', icon: LocationIconBurst },
];

export function getLocationIcon(name: string) {
	return (
		LocationIcons.find((e) => e.name === name)?.icon || LocationIcons[0].icon
	);
}
