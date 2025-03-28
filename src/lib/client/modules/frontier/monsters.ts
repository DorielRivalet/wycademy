import type { FrontierMonsterName } from 'ezlion';
import type { FrontierMonsterInfo } from './types';

export const unlistedMonsterNames = ['Random', 'Cactus']; // TODO Rock???

export const wikiaMonsters = [
	'Anteka',
	'Apceros',
	'Aptonoth',
	'Burukku',
	'Erupe',
	'Kelbi',
	'Mosswine',
	'Popo',
	'Bullfango',
	'Blango',
	'Conga',
	'Bulldrome',
	'Blangonga',
	'Zenith Blangonga',
	'Congalala',
	'Gogomoa',
	'Kamu Orugaron',
	'Midogaron',
	'Zenith Midogaron',
	'Lolo Gougarf',
	'Ray Gougarf',
	'Nono Orugaron',
	'Rajang',
	'Voljang',
	'Felyne',
	'Melynx',
	'Shakalaka',
	'Uruki',
	'King Shakalaka',
	'Great Thunderbug',
	'Hornetaur',
	'Vespoid',
	'Ceanataur',
	'Hermitaur',
	'Kusubami',
	'Akura Vashimu',
	'Zenith Akura Vashimu',
	'Akura Jebia',
	'Daimyo Hermitaur',
	'Zenith Daimyo Hermitaur',
	'Shen Gaoren',
	'Shogun Ceanataur',
	'Taikun Zamuza',
	'Zenith Taikun Zamuza',
	'Genprey',
	'Giaprey',
	'Ioprey',
	'Velociprey',
	'Farunokku',
	'Forokururu',
	'Gendrome',
	'Gypceros',
	'Purple Gypceros',
	'Hypnocatrice',
	'Zenith Hypnocatrice',
	'Breeding Season Hypnocatrice',
	'Silver Hypnocatrice',
	'Iodrome',
	'Toridcless',
	'Zenith Toridcless',
	'Velocidrome',
	'Yian Garuga',
	'Yian Kut-Ku',
	'Blue Yian Kut-Ku',
	'Abiorugu',
	'Giaorugu',
	'Zenith Giaorugu',
	'Brachydios',
	'Deviljho',
	'Savage Deviljho',
	'Starving Deviljho',
	'Gasurabazura',
	'Zenith Gasurabazura',
	'Uragaan',
	'Cephalos',
	'Aruganosu',
	'Cephadrome',
	'Goruganosu',
	'Lavasioth',
	'Lavasioth Subspecies',
	'Plesioth',
	'Zenith Plesioth',
	'Green Plesioth',
	'Pokara',
	'Barlagual',
	'Zenith Barlagual',
	'Kuarusepusu',
	'Pokaradon',
	'Remobra',
	'Zinogre',
	'Howling Zinogre',
	'Stygian Zinogre',
	'Egyurasu',
	'Akantor',
	'Anorupatisu',
	'Zenith Anorupatisu',
	'Barioth',
	'Basarios',
	'Berukyurosu',
	'Bogabadorumu',
	'Bombardier Bogabadorumu',
	'Doragyurosu',
	'Zenith Doragyurosu',
	'Dyuragaua',
	'Diablos',
	'Black Diablos',
	'Diorekkusu',
	'Espinas',
	'Zenith Espinas',
	'Flaming Espinas',
	'Espinas Rare Species',
	'Gravios',
	'Zenith Gravios',
	'Black Gravios',
	'Gurenzeburu',
	'Gureadomosu',
	'Hyujikiki',
	'Zenith Hyujikiki',
	'Khezu',
	'Zenith Khezu',
	'Red Khezu',
	'Meraginasu',
	'Mi Ru',
	'Mysterious Mi Ru',
	'Monoblos',
	'White Monoblos',
	'Nargacuga',
	'Blinking Nargacuga',
	'Odibatorasu',
	'Pariapuria',
	'Thirsty Pariapuria',
	'Poborubarumu',
	'Rathalos',
	'Zenith Rathalos',
	'Azure Rathalos',
	'Silver Rathalos',
	'Rathian',
	'Pink Rathian',
	'Gold Rathian',
	'Tigrex',
	'Zenith Tigrex',
	'Unknown (Black Flying Wyvern)',
	'Varusaburosu',
	'Zenaserisu',
	'Zerureusu',
	'Sparkling Zerureusu',
	'Amatsu',
	'Chameleos',
	'Disufiroa',
	'Duremudira',
	'Arrogant Duremudira',
	'Eruzerion',
	'Burning Freezing Eruzerion',
	'Fatalis',
	'Crimson Fatalis',
	'White Fatalis',
	'Garuba Daora',
	'Guanzorumu',
	'Ruler Guanzorumu',
	'Harudomerugu',
	'Zenith Harudomerugu',
	'Inagami',
	'Zenith Inagami',
	'Keoaruboru',
	'Kirin',
	'Kushala Daora',
	'Rusted Kushala Daora',
	'Lao-Shan Lung',
	'Ashen Lao-Shan Lung',
	'Lunastra',
	'Rukodiora',
	'Zenith Rukodiora',
	'Rebidiora',
	'Shagaru Magala',
	'Shantien',
	'Teostra',
	'Toa Tesukatora',
	'Yama Kurai',
	'Yama Tsukami',
	'Gore Magala',
	'Laviente',
	'Violent Laviente',
	'Berserk Laviente',
] as const;

export const wikiaMonsterKeyMap = {
	englishTitle: 'titles',
	monsterType: 'class',
	element: 'elements',
	ailments: 'ailments',
	weakestTo: 'weaknesses',
	habitats: 'habitats',
	monsterSize: 'sizes',
	monsterRelations: 'relatedMonsters',
	generation: 'generation',
};

/**TODO: violent raviente? */
export const monsterInfo: FrontierMonsterInfo[] = [
	{
		id: 0,
		name: '',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/random',
		rank: '',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/random',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/random',
		type: 'Small',
		unusedComponent: true,
		displayName: 'Random',
		class: 'Unknown',
		generation: 'First Generation',
	},
	{
		id: 1,
		name: 'Rathian',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/rathian',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/rathian',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/rathian',
		unusedComponent: true,
		displayName: 'Rathian',
		type: 'Large',
		link: '/hunter-notes/monsters/overview/rathian',
		ecology:
			'Flying Wyverns widely known as "Queens of the Land." With powerful legs and venomous tails, they are powerful predators and are especially dangerous during the breeding season. Legend holds there exists a rare golden variant.',
		titles: ['Female Fire Wyvern', 'Queen of the Land'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Poison'],
		weaknesses: ['Dragon', 'Thunder', 'Water'],
		habitats: [
			'Forest and Hills',
			'Jungle',
			'Desert',
			'Swamp',
			'Great Forest',
			'Tower',
			'Tower 3',
			'Top of Great Forest',
			'Gorge',
			'Highlands',
			'Interception Base',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 2303.8', 'Gold Crown Small: 1151.9'],
		relatedMonsters: [
			'Pink Rathian',
			'Gold Rathian',
			'Rathalos',
			'Azure Rathalos',
			'Silver Rathalos',
			'Zenith Rathalos',
			'Zerureusu',
			'Sparkling Zerureusu',
		],
		generation: 'First Generation',
	},
	{
		id: 2,
		name: 'Fatalis',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/fatalis',
		rank: '',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/fatalis',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/fatalis',

		unusedComponent: true,

		displayName: 'Fatalis',
		type: 'Large',
		link: '/hunter-notes/monsters/overview/fatalis',
		ecology:
			'A legendary black dragon said to have prowled these lands from the days of old. Many skilled hunters have sought to challenge it, but none ever return. A monster shrouded in mystery...',
		titles: ['Black Dragon', 'The Dark Demise'],
		class: 'Elder Dragon',
		elements: ['Dragon', 'Fire'],
		ailments: [],
		weaknesses: ['Dragon', 'Fire'],
		habitats: ['Castle Schrade'],
		sizes: ['4110.6 cm [1st - 4th Gen]', '4137.17 cm [MHW:I]'],
		relatedMonsters: [
			'Crimson Fatalis',
			'White Fatalis',
			'Conquest Crimson Fatalis',
			'Road White Fatalis',
			'Conquest Fatalis',
		],
		generation: 'First Generation',
	},
	{
		id: 3,
		name: 'Kelbi',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/kelbi',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/kelbi',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/kelbi',

		unusedComponent: true,
		displayName: 'Kelbi',
		type: 'Small',
		link: '/hunter-notes/monsters/overview/kelbi',

		ecology:
			'Small and docile Herbivores thier horns are famously used in a variety of medicines. The best way to harvest said horns is with a blunt weapon. During the evening or inclement weather, they will retreat into caves.',
		titles: [],
		class: 'Herbivore',
		elements: [],
		ailments: [],
		weaknesses: ['Fire', 'Water', 'Thunder', 'Ice'],
		habitats: [
			'Forest and Hills',

			'Snowy Mountains',
			'Jungle',
			'Swamp',
			'Volcano',
			'Great Forest',

			'Flower Field',
		],
		sizes: ['236.15cm'],
		relatedMonsters: [],
		generation: 'First Generation',
	},
	{
		id: 4,
		name: 'Mosswine',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/mosswine',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/mosswine',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/mosswine',

		unusedComponent: true,
		displayName: 'Mosswine',
		link: '/hunter-notes/monsters/overview/mosswine',

		type: 'Small',
		ecology:
			'Wild pigs covered in Moss and various fungus. Occasionally, whole mushrooms can be found on them as well. Their meat is also a famous delicacy. Normally docile towards hunters they will charge if provoked!',
		titles: [],
		class: 'Herbivore',
		elements: [],
		ailments: [],
		weaknesses: ['Fire', 'Water', 'Thunder', 'Ice'],
		habitats: [
			'Forest and Hills',

			'Jungle',
			'Swamp',
			'Great Forest',
			'Gorge',
			'Highlands',
			'Flower Field',
			'Painted Falls',
		],
		sizes: ['212.44cm'],
		relatedMonsters: ['Bullfango', 'Bulldrome'],
		generation: 'First Generation',
	},
	{
		id: 5,
		name: 'Bullfango',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/bullfango',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/bullfango',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/bullfango',

		unusedComponent: true,
		displayName: 'Bullfango',
		link: '/hunter-notes/monsters/overview/bullfango',

		type: 'Small',
		ecology:
			'Foul-tempered wild boars that charge toward hunters the moment they spot them. Fertile and with a huge range, they often form large herds. Their meat is beloved by hunters.',
		titles: [],
		class: 'Fanged Beast',
		elements: [],
		ailments: [],
		weaknesses: ['Fire', 'Thunder'],
		habitats: [
			'Forest and Hills',
			'Snowy Mountains',
			'Jungle',
			'Swamp',
			'Volcano',
			'Great Forest',
			'Tower Nest Hole',
			'Flower Field',
		],
		sizes: ['367cm'],
		relatedMonsters: ['Bulldrome', 'Mosswine'],
		generation: 'First Generation',
	},
	{
		id: 6,
		name: 'Yian Kut-Ku',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/yian_kut-ku',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/yian_kut-ku',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/yian-kut-ku',

		unusedComponent: true,
		displayName: 'Yian Kut-Ku',
		link: '/hunter-notes/monsters/overview/yian-kut-ku',

		type: 'Large',
		ecology:
			'A Bird Wyvern with a Large beak and larger ears. Common in warm, humid areas, they have extremely sensitive hearing and as a result, can be stunned by loud noises. When enraged they will use fire based attacks.',
		titles: ['Strange Bird'],
		class: 'Bird Wyvern',
		elements: ['Fire'],
		ailments: [],
		weaknesses: ['Water', 'Ice'],
		habitats: [
			'Forest and Hills',

			'Jungle',
			'Swamp',

			'Tidal Island',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 1204.9', 'Gold Crown Small: 449.3'],
		relatedMonsters: ['Blue Yian Kut-Ku', 'Yian Garuga'],
		generation: 'First Generation',
	},
	{
		id: 7,
		name: 'Lao-Shan Lung',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/lao-shan_lung',
		rank: 'G Rank',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/lao-shan_lung',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/lao-shan-lung',

		unusedComponent: true,
		displayName: 'Lao-Shan Lung',
		link: '/hunter-notes/monsters/overview/lao-shan-lung',

		type: 'Large',
		ecology:
			'A giant dragon few have  seen and lived to tell the tale. When on the rampage it wreaks havoc on all in its path. The Guild has built a fortress to repel the beast, but will it hold?',
		titles: ['Old Mountain Dragon'],
		class: 'Elder Dragon',
		elements: ['Dragon'],
		ailments: [],
		weaknesses: ['Dragon'],
		habitats: ['Fortress'],
		sizes: ['6960 cm'],
		relatedMonsters: ['Ashen Lao-Shan Lung'],
		generation: 'First Generation',
	},
	{
		id: 8,
		name: 'Cephadrome',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/cephadrome',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/cephadrome',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/cephadrome',

		unusedComponent: true,
		displayName: 'Cephadrome',
		link: '/hunter-notes/monsters/overview/cephadrome',

		type: 'Large',
		ecology:
			'The alpha leader of Cephalos Packs. Much larger than their kin and with darker scales, these beasts possess enhanced paralytic saliva.',
		titles: ['Sand Wyvern'],
		class: 'Piscine Wyvern',
		elements: ['Water'],
		ailments: ['Paralysis'],
		weaknesses: ['Ice', 'Thunder'],
		habitats: ['Desert'],
		sizes: ['Gold Crown Large: 2097.00', 'Gold Crown Small: 889.13'],
		relatedMonsters: [
			'Cephalos',
			'Plesioth',
			'Green Plesioth',
			'Zenith Plesioth',
			'Goruganosu',
			'Lavasioth',
			'Aruganosu',
			'Red Lavasioth',
		],
		generation: 'First Generation',
	},
	{
		id: 9,
		name: 'Felyne',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/felyne',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/felyne',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/felyne',

		unusedComponent: true,
		displayName: 'Felyne',
		link: '/hunter-notes/monsters/overview/felyne',

		type: 'Small',
		ecology:
			'Bipedal creatures resembling cats with white fur. Though normally docile, they will attack viciously provoked. Naturally curious, they often enter society and co-exist with humans and wyvernians. They are naturally attracted to Felvine and follow it anywhere.',
		titles: [],
		class: 'Lynian',
		elements: [],
		ailments: [],
		weaknesses: ['Fire', 'Water', 'Thunder', 'Ice'],
		habitats: ['Cosmopolitan'],
		sizes: ['103.37cm'],
		relatedMonsters: ['Melynx'],
		generation: 'First Generation',
	},
	{
		id: 11,
		name: 'Rathalos',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721616517/monster/rathalos.webp',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/rathalos',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/rathalos',

		link: '/hunter-notes/monsters/overview/rathalos',

		unusedComponent: true,
		displayName: 'Rathalos',
		type: 'Large',
		ecology: `Terrible Wyvern's also known as the "Kings of the Sky". Together with Rathian, they  claim large and diverse territories. Rathalos descend upon prey and foe alike from high altitudes, striking with poison talons and fire.`,
		titles: ['Fire Wyvern', 'King of the Skies'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Stun', 'Poison'],
		weaknesses: ['Ice', 'Water', 'Dragon', 'Thunder'],
		habitats: [
			'Forest and Hills',

			'Volcano',
			'Tower',
			'Tower 3',
			'Gorge',
			'Highlands',
			'Interception Base',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 2248.6', 'Gold Crown Small: 1140.6'],
		relatedMonsters: [
			'Azure Rathalos',
			'Silver Rathalos',
			'Zenith Rathalos',
			'Zerureusu',
			'Rathian',
			'Pink Rathian',
			'Gold Rathian',
		],
		generation: 'First Generation',
	},
	{
		id: 12,
		name: 'Aptonoth',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/aptonoth',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/aptonoth',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/aptonoth',

		unusedComponent: true,
		link: '/hunter-notes/monsters/overview/aptonoth',

		displayName: 'Aptonoth',
		type: 'Small',
		ecology:
			'Docile Herbivores characterized by their large crests. They live in herds and raise their young communally, and are popular pack animals. Very adaptable, they are also raised for their nutritious meat. They are wary of Large Monsters.',
		titles: [],
		class: 'Herbivore',
		elements: [],
		ailments: [],
		weaknesses: ['Fire', 'Water', 'Thunder', 'Ice'],
		habitats: [
			'Forest and Hills',

			'Snowy Mountains',
			'Jungle',
			'Swamp',
			'Great Forest',
			'Tower',
		],
		sizes: ['1002.25cm'],
		relatedMonsters: ['Apceros'],
		generation: 'First Generation',
	},
	{
		id: 13,
		name: 'Genprey',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/genprey',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/genprey',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/genprey',

		unusedComponent: true,
		displayName: 'Genprey',
		link: '/hunter-notes/monsters/overview/genprey',

		type: 'Small',
		ecology:
			'Close relatives of Velociprey like their cousins they dwell in packs, but can easily be differentiated by their yellow and green hides. Found in arid places, Genprey use their fangs to administer a potent neurotoxin.',
		titles: [],
		class: 'Bird Wyvern',
		elements: [],
		ailments: ['Paralysis'],
		weaknesses: ['Water', 'Thunder', 'Ice'],
		habitats: ['Desert', 'Swamp', 'Great Forest', 'Gorge'],
		sizes: ['635.71cm'],
		relatedMonsters: [
			'Gendrome',
			'Ioprey',
			'Iodrome',
			'Giaprey',
			'Velociprey',
			'Velocidrome',
		],
		generation: 'First Generation',
	},
	{
		id: 14,
		name: 'Diablos',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/diablos',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/diablos',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/diablos',

		unusedComponent: true,
		displayName: 'Diablos',
		link: '/hunter-notes/monsters/overview/diablos',

		type: 'Large',
		ecology:
			'Large Wyverns with a pair of massive horns. Though they feed exclusively on desert cacti, they are violently territorial and are capable of burrowing through sand, as well as charging at high speed. Approach with caution.',
		titles: ['Horned Wyvern', 'Tyrant of the Desert'],
		class: 'Flying Wyvern',
		elements: [],
		ailments: [],
		weaknesses: ['Ice'],
		habitats: ['Desert', 'Interception Base'],
		sizes: ['Gold Crown Large: 3030.0', 'Gold Crown Small: 1796.26'],
		relatedMonsters: [
			'Black Diablos',
			'Varusaburosu',
			'Monoblos',
			'White Monoblos',
			'Gravios',
			'Black Gravios',
			'Zenith Gravios',
			'Basarios',
			'Gureadomosu',
			'Espinas',
			'Orange Espinas',
			'White Espinas',
			'Zenith Espinas',
			'Meraginasu',
		],
		generation: 'First Generation',
	},
	{
		id: 15,
		name: 'Khezu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/khezu',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/khezu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/khezu',

		unusedComponent: true,
		displayName: 'Khezu',
		link: '/hunter-notes/monsters/overview/khezu',

		type: 'Large',
		ecology:
			'Horrifying Wyverns Found in cold regions during the Breeding season and more temperate areas during the Cold Season. Nearly blind they rely on scent to hunt prey, which they paralyze with electric attacks.',
		titles: ['Charging Wyvern', 'Strange Wyvern', 'Blank Stare'],
		class: 'Flying Wyvern',
		elements: ['Thunder'],
		ailments: ['Paralysis', 'Stun'],
		weaknesses: ['Fire'],
		habitats: ['Snowy Mountains', 'Swamp', "Hunter's Road"],
		sizes: ['Gold Crown Large: 1225.5', 'Gold Crown Small: 436.6'],
		relatedMonsters: ['Red Khezu', 'Zenith Khezu'],
		generation: 'First Generation',
	},
	{
		id: 16,
		name: 'Velociprey',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/velociprey',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/velociprey',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/velociprey',

		unusedComponent: true,
		displayName: 'Velociprey',
		link: '/hunter-notes/monsters/overview/velociprey',

		type: 'Small',
		ecology:
			'Pack-dwelling Bird-Wyverns known for their aggression. They are regarded by most hunters as a nuisance. They are found in most temperate enviroments during warmer seasons.',
		titles: ['Cunning Raiders'],
		class: 'Bird Wyvern',
		elements: [],
		ailments: [],
		weaknesses: ['Ice'],
		habitats: [
			'Forest and Hills',

			'Snowy Mountains',
			'Jungle',
			'Great Forest',

			'Tidal Island',
			'Sky Corridor',
			'Solitude Island Depths',
			'Painted Falls',
		],
		sizes: ['635.71cm'],
		relatedMonsters: [
			'Velocidrome',
			'Giaprey',
			'Genprey',
			'Gendrome',
			'Ioprey',
			'Iodrome',
		],
		generation: 'First Generation',
	},
	{
		id: 17,
		name: 'Gravios',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/gravios',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/gravios',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/gravios',

		unusedComponent: true,
		link: '/hunter-notes/monsters/overview/gravios',

		displayName: 'Gravios',
		type: 'Large',
		ecology:
			'Large Wyverns with a rock hard carapace and the ability to emit powerful heat beams. They are found in volcanic and marshy areas where they feed on various minerals for nutrients. They gather en masse during the Breeding Season.',
		titles: ['Armor Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Sleep'],
		weaknesses: ['Water'],
		habitats: ['Swamp', 'Volcano', 'Interception Base', 'Sky Corridor'],
		sizes: ['Gold Crown Large: 3065.9', 'Gold Crown Small: 1049.35'],
		relatedMonsters: [
			'Zenith Gravios',
			'Black Gravios',
			'Basarios',
			'Gureadomosu',
			'Diablos',
			'Black Diablos',
			'Monoblos',
			'White Monoblos',
			'Varusaburosu',
			'Espinas',
			'Zenith Espinas',
			'Orange Espinas',
			'White Espinas',
			'Meraginasu',
		],
		generation: 'First Generation',
	},
	{
		id: 19,
		name: 'Vespoid',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/vespoid',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/vespoid',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/vespoid',

		unusedComponent: true,
		displayName: 'Vespoid',
		link: '/hunter-notes/monsters/overview/vespoid',

		type: 'Small',
		ecology:
			'An enormous, wasp-like Neopeteron with a paralytic sting. Easily damaged, there are rarely any usable materials left after dispatching one. It has been reported however that using poison on them yields better results.',
		titles: [],
		class: 'Neopteron',
		elements: [],
		ailments: ['Paralysis'],
		weaknesses: ['Fire', 'Poison'],
		habitats: [
			'Forest and Hills',

			'Snowy Mountains',
			'Jungle',
			'Desert',
			'Swamp',
			'Volcano',
			'Great Forest',

			'Gorge',
			'Highlands',
			'Flower Field',
			'Painted Falls',
		],
		sizes: ['136.64cm'],
		relatedMonsters: [],
		generation: 'First Generation',
	},
	{
		id: 20,
		name: 'Gypceros',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/gypceros',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/gypceros',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/gypceros',

		unusedComponent: true,
		displayName: 'Gypceros',
		link: '/hunter-notes/monsters/overview/gypceros',

		type: 'Large',
		ecology:
			'Odd Wyverns capable of disorientating hunters by emitting a bright flash from their crest. Their rubbery skin resists impacts and shock traps. Though timid, their saliva hides a vicious toxin. They prefer warm and marshy habitats.',
		titles: ['Strange Poison Bird'],
		class: 'Bird Wyvern',
		elements: [],
		ailments: ['Poison', 'Stun'],
		weaknesses: ['Fire'],
		habitats: [
			'Forest and Hills',

			'Jungle',
			'Swamp',

			"Hunter's Road",
			'Sky Corridor',
		],
		sizes: ['Gold Crown Large: 1348.2', 'Gold Crown Small: 811.0'],
		relatedMonsters: ['Purple Gypceros'],
		generation: 'First Generation',
	},
	{
		id: 21,
		name: 'Plesioth',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/plesioth',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/plesioth',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/plesioth',

		unusedComponent: true,
		displayName: 'Plesioth',
		link: '/hunter-notes/monsters/overview/plesioth',

		type: 'Large',
		ecology:
			'Huge Piscine Wyverns famous for their great strength. Like most Piscine Wyverns their wings have evolved into powerful fins. Despite appearences, Plesioth are as deadly on land as they are in water.',
		titles: ['Water Wyvern'],
		class: 'Piscine Wyvern',
		elements: ['Water'],
		ailments: ['Sleep'],
		weaknesses: ['Thunder', 'Fire'],
		habitats: ['Jungle', 'Desert'],
		sizes: ['Gold Crown Large: 3877.9', 'Gold Crown Small: 1991.11'],
		relatedMonsters: [
			'Green Plesioth',
			'Zenith Plesioth',
			'Cephalos',
			'Cephadrome',
			'Lavasioth',
			'Red Lavasioth',
		],
		generation: 'First Generation',
	},
	{
		id: 22,
		name: 'Basarios',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/basarios',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/basarios',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/basarios',

		unusedComponent: true,
		displayName: 'Basarios',
		link: '/hunter-notes/monsters/overview/basarios',

		type: 'Large',
		ecology:
			'Juvenile Gravios famous for their rock-like carapaces. Often mistaken for large rocks when sleeping, their shells are weak to explosives. They are also able to emit poisonous gas and are dormant during Cold Seasons',
		titles: ['Rock Wyvern', 'Bellowing Boulder'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Poison', 'Sleep'],
		weaknesses: ['Dragon', 'Water'],
		habitats: ['Swamp', 'Volcano', 'Sky Corridor'],
		sizes: ['Gold Crown Large: 1754.6', 'Gold Crown Small: 1154.9'],
		relatedMonsters: [
			'Gravios',
			'Black Gravios',
			'Zenith Gravios',
			'Diablos',
			'Black Diablos',
			'Varusaburosu',
			'Monoblos',
			'White Monoblos',
			'Espinas',
			'Orange Espinas',
			'White Espinas',
			'Meraginasu',
			'Zenith Espinas',
		],
		generation: 'First Generation',
	},
	{
		id: 23,
		name: 'Melynx',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/melynx',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/melynx',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/melynx',

		link: '/hunter-notes/monsters/overview/melynx',

		unusedComponent: true,
		displayName: 'Melynx',
		type: 'Small',
		ecology:
			'Bipedal creatures resembling cats with black fur. More aggressive than Felynes and possessed by kleptomania, Melynxes will steal any items they can and bring them back to their dens. If you can find their dens however, you may be able to recover your items. Like Felynes, they are obssessed with Felvine.',
		titles: [],
		class: 'Lynian',
		elements: [],
		ailments: [],
		weaknesses: ['Fire', 'Water', 'Thunder', 'Ice'],
		habitats: ['Cosmopolitan'],
		sizes: ['103.37cm'],
		relatedMonsters: ['Felyne'],
		generation: 'First Generation',
	},
	{
		id: 24,
		name: 'Hornetaur',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/hornetaur',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/hornetaur',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/hornetaur',

		unusedComponent: true,
		displayName: 'Hornetaur',
		link: '/hunter-notes/monsters/overview/hornetaur',

		type: 'Small',
		ecology:
			'A large Neopeteron related to Vespoids. They primarily dwell on the ground of damp and dark places. However, like their cousins, they are easily destroyed by most weapons. It is reported that they are extremely susceptible to poisons.',
		titles: ['The Hidden Jungle Clouds'],
		class: 'Neopteron',
		elements: [],
		ailments: [],
		weaknesses: ['Fire', 'Water'],
		habitats: [
			'Flower Field',
			'Gorge',
			'Great Forest',
			'Highlands',
			'Jungle',
			'Swamp',
			'Tidal Island',
		],
		sizes: ['185.56cm'],
		relatedMonsters: [],
		generation: 'First Generation',
	},
	{
		id: 25,
		name: 'Apceros',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/apceros',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/apceros',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/apceros',

		unusedComponent: true,
		displayName: 'Apceros',
		link: '/hunter-notes/monsters/overview/apceros',

		type: 'Small',
		ecology:
			'Desert-dwelling Herbivores covered in armor-like hide. Though edible, obtaining meat from them is difficult due to their territorial nature. They are especially violent towards any hunter who would steal their eggs.',
		titles: [],
		class: 'Herbivore',
		elements: [],
		ailments: [],
		weaknesses: ['Fire', 'Thunder'],
		habitats: ['Desert', 'Volcano', 'Gorge', 'White Lake'],
		sizes: ['988.42cm'],
		relatedMonsters: ['Aptonoth'],
		generation: 'First Generation',
	},
	{
		id: 26,
		name: 'Monoblos',
		displayName: 'Monoblos',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/monoblos',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/monoblos',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/monoblos',

		link: '/hunter-notes/monsters/overview/monoblos',
		type: 'Large',
		class: 'Flying Wyvern',
		generation: 'First Generation',
		unusedComponent: true,
		ecology:
			'A large, desert-dwelling Wyvern with a single massive horn. Although they lack any form of breath attack, they can shierk loud enough to shatter eardrums. Despite their appearence they are actually herbivorous.',
	},
	{
		id: 27,
		name: 'Velocidrome',
		displayName: 'Velocidrome',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/velocidrome',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/velocidrome',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/velocidrome',

		link: '/hunter-notes/monsters/overview/velocidrome',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'The alpha leaders of Velociprey packs. Larger than their kin, and marked by more prominent crests Velocidrome use their powerful legs and sharp claws to slash and leap at prey. They are common during warm seasons.',
		titles: ['Alpha Raptor'],
		class: 'Bird Wyvern',
		elements: [],
		ailments: ['Stench', 'Defense Down', 'Farcaster'],
		weaknesses: ['Thunder'],
		habitats: ['Forest and Hills', 'Jungle', 'Great Forest', 'Sky Corridor'],
		sizes: ['Gold Crown Small: 590.7', 'Gold Crown Large: 1736.4'],
		relatedMonsters: [
			'Velociprey',
			'Genprey',
			'Gendrome',
			'Ioprey',
			'Iodrome',
			'Giaprey',
		],
		generation: 'First Generation',
	},
	{
		id: 28,
		name: 'Gendrome',
		displayName: 'Gendrome',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/gendrome',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/gendrome',
		link: '/hunter-notes/monsters/overview/gendrome',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/gendrome',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'The Alpha leaders of Genprey packs, identified by their larger crests. Found in arid places their venom glands house especially potent neurotoxins.',
		titles: ['Alpha Raptor'],
		class: 'Bird Wyvern',
		elements: [],
		ailments: ['Paralysis', 'Stun'],
		weaknesses: ['Water'],
		habitats: ['Desert', 'Swamp', 'Tower 3'],
		sizes: ['Gold Crown Small: 615'],
		relatedMonsters: [
			'Genprey',
			'Giaprey',

			'Ioprey',
			'Iodrome',
			'Velociprey',
			'Velocidrome',
		],
		generation: 'First Generation',
	},
	{
		id: 30,
		name: 'Ioprey',
		displayName: 'Ioprey',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/ioprey',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/ioprey',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/ioprey',

		unusedComponent: true,
		link: '/hunter-notes/monsters/overview/ioprey',

		type: 'Small',
		ecology:
			'Vivid-red Bird Wyverns found in sub-tropical areas. Specialized organs in their throats produce a potent toxin, which they spit at their prey.',
		titles: [],
		class: 'Bird Wyvern',
		elements: [],
		ailments: ['Poison'],
		weaknesses: ['Water'],
		habitats: [
			'Fortress',
			'Swamp',
			'Volcano',
			'Great Forest',

			'Interception Base',
			'Solitude Island Depths',
		],
		sizes: ['639.17cm'],
		relatedMonsters: [
			'Iodrome',
			'Giaprey',

			'Velociprey',
			'Velocidrome',
			'Genprey',
			'Gendrome',
		],
		generation: 'First Generation',
	},
	{
		id: 31,
		name: 'Iodrome',
		displayName: 'Iodrome',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/iodrome',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/iodrome',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/iodrome',

		link: '/hunter-notes/monsters/overview/iodrome',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'The Alpha-leaders of Ioprey Packs. Larger than their brethren, they can also be identified by their more prominent crest. They are extremely venomous.',
		titles: ['The Ioprey Leader'],
		class: 'Bird Wyvern',
		elements: [],
		ailments: ['Poison'],
		weaknesses: ['Thunder', 'Water'],
		habitats: ['Swamp', 'Volcano'],
		sizes: ['Gold Crown Large: 1641.06', 'Gold Crown Small: 619.7'],
		relatedMonsters: [
			'Ioprey',
			'Genprey',
			'Gendrome',
			'Velociprey',
			'Velocidrome',
			'Giaprey',
		],
		generation: 'First Generation',
	},
	{
		id: 33,
		name: 'Kirin',
		displayName: 'Kirin',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/kirin',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/kirin',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/kirin',

		link: '/hunter-notes/monsters/overview/kirin',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'Elder dragons so rarely sighted that little is known of their ecology, though everyone knows of the high prices their parts fetch. They are said to control lightning itself, enrobing themselves in it during battle.',
		titles: ['Phantom Beast'],
		class: 'Elder Dragon',
		elements: ['Thunder'],
		ailments: ['Paralysis'],
		weaknesses: ['Fire', 'Water'],
		habitats: [
			'Snowy Mountains',
			'Jungle',
			'Swamp',
			'Tower',
			'Tower 3',

			'Battleground',

			'Interception Base',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 989.64', 'Gold Crown Small: 371.4'],
		relatedMonsters: [],
		generation: 'First Generation',
	},
	{
		id: 34,
		name: 'Cephalos',
		displayName: 'Cephalos',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/cephalos',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/cephalos',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/cephalos',
		link: '/hunter-notes/monsters/overview/cephalos',

		unusedComponent: true,
		type: 'Small',
		ecology:
			'Piscine Wyverns related to Plesioth, but adapted to "swim" through sand instead of water. They locate prey through sound, and are sensitive to Sonic Bombs as a result.',
		titles: ['Sand Wyvern'],
		class: 'Piscine Wyvern',
		elements: ['Water'],
		ailments: ['Paralysis'],
		weaknesses: ['Ice', 'Thunder'],
		habitats: ['Desert', 'White Lake'],
		sizes: ['908.7cm'],
		relatedMonsters: [
			'Green Plesioth',
			'Zenith Plesioth',
			'Cephadrome',
			'Lavasioth',
			'Red Lavasioth',
			'Plesioth',
		],
		generation: 'First Generation',
	},
	{
		id: 35,
		name: 'Giaprey', // TODO
		displayName: 'Giaprey',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/giaprey',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/giaprey',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/giaprey',

		link: '/hunter-notes/monsters/overview/giaprey',

		unusedComponent: true,
		type: 'Small',
		ecology:
			'A pale white species of Bird Wyvern Endemic to cold areas Their white scales help them blend into their enviroment. They are known to spit icy fluids at hunters.',
		titles: ['The Carnivore'],
		class: 'Bird Wyvern',
		elements: ['Ice'],
		ailments: ['Snowman'],
		weaknesses: ['Fire'],
		habitats: ['Snowy Mountains', 'Great Forest', 'Tower', 'Polar Sea'],
		sizes: ['577cm'],
		relatedMonsters: [
			'Genprey',
			'Gendrome',
			'Ioprey',
			'Iodrome',
			'Velociprey',
			'Velocidrome',
		],
		generation: 'First Generation',
	},
	{
		id: 36,
		name: 'Crimson Fatalis',
		displayName: 'Crimson Fatalis',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/crimson_fatalis',
		rank: '',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/crimson_fatalis',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/crimson-fatalis',

		link: '/hunter-notes/monsters/overview/crimson-fatalis',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'A legendary black dragon said to have prowled these lands from the days of old. Many skilled hunters have sought to challenge it, but none ever return. A monster shrouded in mystery...',
		titles: ['Crimson Dragon'],
		class: 'Elder Dragon',
		elements: ['Dragon', 'Fire'],
		ailments: [],
		weaknesses: ['Dragon', 'Ice'],
		habitats: ['Battleground', 'Deep Crater'],
		sizes: ['4110.6cm'],
		relatedMonsters: [
			'Fatalis',
			'White Fatalis',
			'Conquest Crimson Fatalis',
			'Road White Fatalis',
			'Conquest Fatalis',
		],
		generation: 'First Generation',
	},
	{
		id: 37,
		name: 'Pink Rathian',
		displayName: 'Pink Rathian',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/pink_rathian',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/pink_rathian',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/pink-rathian',

		link: '/hunter-notes/monsters/overview/pink-rathian',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'A Sub-Species of Rathian with striking pink scales. Pink Rathian are far more adept at aerial combat than thier green cousins and will incorporate their venomous tails into more attacks. They are extremely aggressive.',
		titles: ['Cherry Blossom Fire Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Poison'],
		weaknesses: ['Dragon', 'Thunder'],
		habitats: ['Forest and Hills', 'Jungle', 'Desert', 'Tower', 'Tower 3'],
		sizes: ['Gold Crown Small: 1151.9', 'Gold Crown Large: 2303.8'],
		relatedMonsters: [
			'Rathian',
			'Gold Rathian',
			'Azure Rathalos',
			'Rathalos',
			'Silver Rathalos',
			'Zenith Rathalos',
			'Zerureusu',
			'Sparkling Zerureusu',
			'UNKNOWN',
		],
		generation: 'First Generation',
	},
	{
		id: 38,
		name: 'Blue Yian Kut-Ku',
		displayName: 'Blue Yian Kut-Ku',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/blue_yian_kut-ku',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/blue_yian_kut-ku',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/blue-yian-kut-ku',

		link: '/hunter-notes/monsters/overview/blue-yian-kut-ku',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'A smaller and more aggressive Subspecies of Yian Kut-Ku. Like their cousins, they enjoy warm humid areas, like the Jungle. While they are just as susceptible to loud noises as their pink brethren, they are faster and more vicious.',
		titles: ['Blue Strange Bird'],
		class: 'Bird Wyvern',
		elements: ['Fire'],
		ailments: [],
		weaknesses: ['Water', 'Thunder'],
		habitats: ['Forest and Hills', 'Jungle', 'Swamp', 'Tidal Island'],
		sizes: ['Gold Crown Large: 1195.7', 'Gold Crown Small: 449.3'],
		relatedMonsters: ['Yian Kut-Ku', 'Yian Garuga'],
		generation: 'First Generation',
	},
	{
		id: 39,
		name: 'Purple Gypceros',
		displayName: 'Purple Gypceros',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/purple_gypceros',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/purple_gypceros',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/purple-gypceros',

		link: '/hunter-notes/monsters/overview/purple-gypceros',

		unusedComponent: true,
		type: 'Large',
		ecology: `A variant of Gypceros with a striking purple hide. They are more aggressive than normal Gypceros and are virtually immune to most poisons. Like their kin, they will attempt to steal hunter's items and can secrete a horrific venom.`,
		titles: ['Strange Poison Bird'],
		class: 'Bird Wyvern',
		elements: [],
		ailments: ['Poison', 'Stun'],
		weaknesses: ['Water'],
		habitats: ['Jungle', 'Swamp', 'Sky Corridor'],
		sizes: ['Gold Crown Large: 1348.2'],
		relatedMonsters: ['Gypceros'],
		generation: 'First Generation',
	},
	{
		id: 40,
		name: 'Yian Garuga',
		displayName: 'Yian Garuga',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/yian_garuga',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/yian_garuga',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/yian-garuga',

		link: '/hunter-notes/monsters/overview/yian-garuga',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'A close relative of the Yian Kut-Ku known for their hard black shells and white, tufted manes.Far deadlier than their cousins, in addition to fire based attacks, they wield a potent venom in their tails, and resistance to sonic bombs.',
		titles: ['Black Wolf Bird'],
		class: 'Bird Wyvern',
		elements: ['Fire'],
		ailments: ['Poison'],
		weaknesses: ['Water'],
		habitats: [
			'Forest and Hills',
			'Jungle',
			'Swamp',
			'Great Forest',

			'Gorge',
			'Interception Base',
			'Sky Corridor',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 1744.50', 'Gold Crown Small: 887.3'],
		relatedMonsters: ['Yian Kut-Ku', 'Blue Yian Kut-Ku'],
		generation: 'Second Generation',
	},
	{
		id: 41,
		name: 'Silver Rathalos',
		displayName: 'Silver Rathalos',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721616757/monster/silver_rathalos.webp',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/silver_rathalos',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/silver-rathalos',

		link: '/hunter-notes/monsters/overview/silver-rathalos',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'A legendary and rare variant of Rathalos with shining, silver scales. Often referred to as the "Silver Sun", little is known of their ecology, including the nature of their appearence. Their deadliness however, is well documented.',
		titles: ['Silver Fire Wyvern', 'Silver Sun', 'Argent Emperor'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Stun', 'Poison'],
		weaknesses: ['Water', 'Thunder'],
		habitats: ['Forest and Hills', 'Tower', 'Tower 3'],
		sizes: ['Gold Crown Large: 2248.6', 'Gold Crown Small: 1140.6'],
		relatedMonsters: [
			'Rathalos',
			'Azure Rathalos',
			'Zerureusu',
			'Sparkling Zerureusu',
			'Rathian',
			'Pink Rathian',
			'Gold Rathian',
		],
		generation: 'First Generation',
	},
	{
		id: 42,
		name: 'Gold Rathian',
		displayName: 'Gold Rathian',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721616489/monster/gold_rathian.webp',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/gold_rathian',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/gold-rathian',

		link: '/hunter-notes/monsters/overview/gold-rathian',

		unusedComponent: true,
		type: 'Large',
		ecology: `A legendary and rare variant of Rathian with glittering, golden scales. Often referred to as the "Golden Moon", little is known of this Wyvern's ecology, save for it's ability to dispatch unwary hunters with ease.`,
		titles: ['Gold Fire Wyvern', 'Golden Moon', 'Illustrious Queen'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Poison'],
		weaknesses: ['Thunder', 'Water'],
		habitats: ['Forest and Hills', 'Jungle', 'Tower', 'Tower 3'],
		sizes: ['Gold Crown Large: 2303.8', 'Gold Crown Small: 1151.9'],
		relatedMonsters: [
			'Rathian',
			'Pink Rathian',
			'Rathalos',
			'Azure Rathalos',
			'Silver Rathalos',
			'Zenith Rathalos',
			'Zerureusu',
			'Sparkling Zerureusu',
		],
		generation: 'First Generation',
	},
	{
		id: 43,
		name: 'Black Diablos',
		displayName: 'Black Diablos',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/black_diablos',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/black_diablos',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/black-diablos',

		unusedComponent: true,
		link: '/hunter-notes/monsters/overview/black-diablos',

		type: 'Large',
		ecology:
			'These black-shelled Diablos are not actually a true Sub-Species, but rather are female Diablos in heat. Their shells turn black to warn other creatures as they become incredibly violent and territorial, even for a Diablos.',
		titles: ['Black Horn Wyvern'],
		class: 'Flying Wyvern',
		elements: [],
		ailments: ['Stun'],
		weaknesses: ['Ice'],
		habitats: ['Desert', 'White Lake'],
		sizes: ['Gold Crown Large: 2930.3 cm', 'Gold Crown Small: 1865.66 cm'],
		relatedMonsters: [
			'Diablos',

			'Monoblos',

			'White Monoblos',
			'Varusaburosu',
			'Gravios',
			'Black Gravios',
			'Basarios',

			'Gureadomosu',
			'Espinas',
			'Zenith Espinas',
			'Orange Espinas',
			'White Espinas',
			'Meraginasu',
		],
		generation: 'First Generation',
	},
	{
		id: 44,
		name: 'White Monoblos',
		displayName: 'White Monoblos',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/white_monoblos',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/white_monoblos',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/white-monoblos',

		unusedComponent: true,
		link: '/hunter-notes/monsters/overview/white-monoblos',

		type: 'Large',
		ecology:
			'A Sub-Species of Monoblos with chalk-white scales. Highly territorial, they will charge at any intruder without hesitation. They are capable of running at a great speed and are quite powerful.',
		titles: ['White One Horn Wyvern'],
		class: 'Flying Wyvern',
		elements: [],
		ailments: [],
		weaknesses: ['Thunder'],
		habitats: ['Desert', 'White Lake'],
		sizes: ['Gold Crown Small: 1849.2', 'Gold Crown Large: 2810.7'],
		relatedMonsters: [
			'Monoblos',

			'Diablos',
			'Black Diablos',
			'Varusaburosu',
			'Gravios',
			'Black Gravios',
			'Basarios',
		],
		generation: 'First Generation',
	},
	{
		id: 45,
		name: 'Red Khezu',
		displayName: 'Red Khezu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/red_khezu',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/red_khezu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/red-khezu',

		link: '/hunter-notes/monsters/overview/red-khezu',

		unusedComponent: true,
		ecology:
			'A Khezu variant with a ghastly red hide. Much more aggressive than normal Khezu, their electrical organs are also more developed and can deliver deadly shocks to careless hunters.',
		type: 'Large',
		titles: ['Charging Wyvern', 'Red Strange Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Thunder'],
		ailments: ['Paralysis'],
		weaknesses: ['Water'],
		habitats: ['Forest and Hills', 'Snowy Mountains', 'Swamp'],
		sizes: ['Gold Crown Small: 436.6', 'Gold Crown Large: 1205.0'],
		relatedMonsters: ['Khezu', 'Zenith Khezu'],
		generation: 'First Generation',
	},
	{
		id: 46,
		name: 'Green Plesioth',
		displayName: 'Green Plesioth',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/green_plesioth',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/green_plesioth',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/green-plesioth',

		unusedComponent: true,
		link: '/hunter-notes/monsters/overview/green-plesioth',

		type: 'Large',
		ecology:
			'A Plesioth Sub-Species with deep Jad-green scales. While physically similiar to standard Plesioth, these individuals are much more aggressive and are much more accurate with their water beam attacks.',
		titles: ['Green Water Wyvern', 'The Tide', 'Master of the Giant Lake'],
		class: 'Piscine Wyvern',
		elements: ['Water'],
		ailments: ['Sleep'],
		weaknesses: ['Thunder', 'Fire'],
		habitats: ['Jungle', 'Desert'],
		sizes: ['Gold Crown Small: 2125.3', 'Gold Crown Large: 3877.9'],
		relatedMonsters: [
			'Plesioth',
			'Zenith Plesioth',
			'Cephalos',
			'Cephadrome',
			'Lavasioth',
			'Red Lavasioth',
		],
		generation: 'First Generation',
	},
	{
		id: 47,
		name: 'Black Gravios',
		displayName: 'Black Gravios',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/black_gravios',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/black_gravios',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/black-gravios',

		link: '/hunter-notes/monsters/overview/black-gravios',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'Gravios who generate an abnormal amount of heat causing their shells to turn black. As a result they can unleash even more powerful attacks, though they must constantly vent  excess heat as a result.',
		titles: ['Black Armor Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Sleep', 'Poison'],
		weaknesses: ['Water'],
		habitats: ['Swamp', 'Volcano', 'Interception Base'],
		sizes: ['Gold Crown Small: 1946.3', 'Gold Crown Large: 3065.9'],
		relatedMonsters: [
			'Gravios',
			'Basarios',

			'Gureadomosu',
			'Diablos',
			'Black Diablos',
			'Monoblos',

			'White Monoblos',
			'Varusaburosu',
			'Espinas',
			'Zenith Espinas',
			'Orange Espinas',
			'White Espinas',
			'Meraginasu',
		],
		generation: 'First Generation',
	},
	{
		id: 48,
		name: 'Daimyo Hermitaur',
		displayName: 'Daimyo Hermitaur',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/daimyo_hermitaur',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/daimyo_hermitaur',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/daimyo-hermitaur',

		link: '/hunter-notes/monsters/overview/daimyo-hermitaur',

		unusedComponent: true,
		type: 'Large',
		ecology: `A large carapaceon with a big monster's skull on it's back. Found in warm, sandy areas, they attack prey with bubble breath and their massive, rock-hard pincers. They will also use their pincers for defense.`,
		titles: ['Shield Crab', 'Shelled Sovereign'],
		class: 'Carapaceon',
		elements: ['Water'],
		ailments: [],
		weaknesses: ['Thunder'],
		habitats: [
			'Jungle',
			'Desert',
			'Interception Base',
			'Tidal Island',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 1451.2', 'Gold Crown Small: 450.45'],
		relatedMonsters: [
			'Hermitaur',
			'Zenith Daimyo Hermitaur',
			'Ceanataur',
			'Shogun Ceanataur',
		],
		generation: 'Second Generation',
	},
	{
		id: 49,
		name: 'Azure Rathalos',
		displayName: 'Azure Rathalos',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/azure_rathalos',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/azure_rathalos',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/azure-rathalos',

		link: '/hunter-notes/monsters/overview/azure-rathalos',

		unusedComponent: true,
		type: 'Large',
		ecology: `Terrible Wyvern's also known as the "Kings of the Sky". Together with Rathian, they claim large and diverse territories. Rathalos descend upon prey and foe alike from high altitudes, striking with poison talons and fire.`,
		titles: ['Azure Fire Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Stun', 'Poison'],
		weaknesses: ['Dragon', 'Ice', 'Water'],
		habitats: ['Forest and Hills', 'Volcano', 'Tower', 'Tower 3'],
		sizes: ['Gold Crown Small: 1140.6', 'Gold Crown Large: 2248.6'],
		relatedMonsters: [
			'Rathalos',
			'Silver Rathalos',
			'Rathian',
			'Pink Rathian',
			'Gold Rathian',
			'Zerureusu',
		],
		generation: 'First Generation',
	},
	{
		id: 50,
		name: 'Ashen Lao-Shan Lung',
		displayName: 'Ashen Lao-Shan Lung',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/ashen_lao-shan_lung',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/ashen_lao-shan_lung',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/ashen-lao-shan-lung',

		unusedComponent: true,
		link: '/hunter-notes/monsters/overview/ashen-lao-shan-lung',

		type: 'Large',
		ecology:
			'An enormous dragon few have ever seen. It is not a true Sub-Species, but rather An older Lao-Shan Lung that has become encased in hardened ash from years of dwelling in a volcanic area. The Guild believes something has driven it from its native range.',
		titles: ['Rock Mountain Dragon'],
		class: 'Elder Dragon',
		elements: ['Dragon'],
		ailments: [],
		weaknesses: ['Dragon', 'Fire'],
		habitats: ['Fortress'],
		sizes: ['6960cm'],
		relatedMonsters: ['Lao-Shan Lung'],
		generation: 'First Generation',
	},
	{
		id: 51,
		name: 'Blangonga',
		displayName: 'Blangonga',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/blangonga',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/blangonga',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/blangonga',

		unusedComponent: true,
		link: '/hunter-notes/monsters/overview/blangonga',

		ecology:
			'Leader of a Blango pack it is twice as large and recognized by its giant fangs whiskers, and head-crown. It sends its pack to attack any trespassers. Its jumping power allows it  great mobility in its home range of the snowy mountains.',
		type: 'Large',
		titles: ['Snow Lion'],
		class: 'Fanged Beast',
		elements: ['Ice'],
		ailments: ['Snowman'],
		weaknesses: ['Fire'],
		habitats: ['Snowy Mountains', 'Interception Base', "Hunter's Road"],
		sizes: ['Gold Crown Small: 791.12', 'Gold Crown Large: 1221.2'],
		relatedMonsters: [
			'Blango',
			'Zenith Blangonga',
			'Rajang',
			'Furious Rajang',
			'Twinhead Rajang',
			'Conga',
			'Congalala',
		],
		generation: 'Second Generation',
	},
	{
		id: 52,
		name: 'Congalala',
		displayName: 'Congalala',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/congalala',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/congalala',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/congalala',

		link: '/hunter-notes/monsters/overview/congalala',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'A large fanged beast with pink fur, often found in warm, humid regions. They are fond of mushrooms. Guild research indicates that the type of mushroom they consume can affect the type of breath attack they utilize. They can be very pungent.',
		titles: ['Pink Fur Beast'],
		class: 'Fanged Beast',
		elements: [],
		ailments: ['Sleep', 'Stench', 'Poison', 'Paralysis'],
		weaknesses: ['Fire'],
		habitats: ['Jungle', 'Swamp', 'Flower Field', "Hunter's Road"],
		sizes: ['Gold Crown Large: 1670.76', 'Gold Crown Small: 491.40'],
		relatedMonsters: [
			'Conga',

			'Blango',
			'Blangonga',

			'Rajang',
			'Furious Rajang',
			'Twinhead Rajang',
		],
		generation: 'Second Generation',
	},
	{
		id: 53,
		name: 'Rajang',
		displayName: 'Rajang',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/rajang',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/rajang',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/rajang',
		link: '/hunter-notes/monsters/overview/rajang',

		unusedComponent: true,
		ecology:
			'An ultra-aggressive creature that is rarely sighted and seldom survived. Survivors report it exhibits a strange attack. The Rajang s said to be a loner and this isolated life has made it difficult to pin down its territorial leanings.',
		type: 'Large',
		titles: ['Gold Lion', 'Destruction Incarnate', 'Golden Mane'],
		class: 'Fanged Beast',
		elements: ['Thunder'],
		ailments: [],
		weaknesses: ['Ice'],
		habitats: [
			'Forest and Hills',

			'Snowy Mountains',
			'Desert',
			'Volcano',
			'Town',
			'Tower 3',

			'Sanctuary',

			'Gorge',
			'Interception Base',
			'Sky Corridor',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 1631.2', 'Gold Crown Small: 729.62'],
		relatedMonsters: [
			'Furious Rajang',
			'Twinhead Rajang',
			'Voljang',
			'Blango',
			'Blangonga',
			'Zenith Blangonga',
			'Conga',
			'Congalala',
			'Gougarf',
		],
		generation: 'Second Generation',
	},
	{
		id: 54,
		name: 'Kushala Daora',
		displayName: 'Kushala Daora',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/kushala_daora',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/kushala_daora',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/kushala-daora',

		link: '/hunter-notes/monsters/overview/kushala-daora',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'A metal plated dragon known as the tempest of wind. Eyewitnesses report violent storms rage in its presence and numerous attacks on cities within its extensive territory have been documented. It has been sighted everywhere  from deserts to polar regions.',
		titles: ['Steel Dragon', 'Shadow Upon the Tempest'],
		class: 'Elder Dragon',
		elements: ['Dragon'],
		ailments: ['Defense Down'],
		weaknesses: ['Dragon', 'Thunder', 'Fire'],
		habitats: [
			'Snowy Mountains',
			'Jungle',
			'Desert',
			'Town',
			'Tower',

			'Flower Field',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 2391.41 cm', 'Gold Crown Small: 1261.6 cm'],
		relatedMonsters: [
			'Rusted Kushala Daora',
			'Garuba Daora',
			'Rukodiora',
			'Zenith Rukodiora',
			'Rebidiora',
		],
		generation: 'Second Generation',
	},
	{
		id: 55,
		name: 'Shen Gaoren',
		displayName: 'Shen Gaoren',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721616633/monster/shen_gaoren.webp',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/shen_gaoren',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/shen-gaoren',
		link: '/hunter-notes/monsters/overview/shen-gaoren',

		unusedComponent: true,
		type: 'Large',
		ecology: `A giant Carapaceon with an an equally giant monster's skull on it's back. Prone to roaming and with a nearly impenetrable shell, nearby forts and towns must be alerted to its movements or potentially face total annihilation.`,
		titles: ['Fortress Crab'],
		class: 'Carapaceon',
		elements: [],
		ailments: [],
		weaknesses: ['Fire', 'Dragon'],
		habitats: ['Fortress', 'Town', 'Interception Base'],
		sizes: ['3388cm'],
		relatedMonsters: [],
		generation: 'Second Generation',
	},
	{
		id: 56,
		name: 'Great Thunderbug',
		displayName: 'Great Thunderbug',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/great_thunderbug',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/great_thunderbug',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/great-thunderbug',

		unusedComponent: true,
		type: 'Small',
		ecology:
			'Abnormaly large Thunderbugs raised inside of certain Elder Dragons. Often found in the same areas as thier former hosts their electric attacks are deadly. Despite this, they have many uses in crafting.',
		titles: [],
		class: 'Neopteron',
		elements: ['Thunder'],
		ailments: ['Paralysis'],
		weaknesses: ['Water'],
		habitats: [
			'Forest and Hills',

			'Snowy Mountains',
			'Jungle',
			'Desert',
			'Swamp',
			'Great Forest',
			'Tower',
			'Tower 2',

			'Gorge',
			'Polar Sea',
			'Flower Field',
		],
		sizes: ['80cm'],
		relatedMonsters: ['Vespoid', 'Hornetaur'],
		generation: 'Second Generation',
	},
	{
		id: 57,
		name: 'Shakalaka',
		displayName: 'Shakalaka',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/shakalaka',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/shakalaka',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/shakalaka',
		link: '/hunter-notes/monsters/overview/shakalaka',

		unusedComponent: true,
		type: 'Small',
		ecology:
			'Small, humanoid Lynians known for always wearing masks. Masters of camouflage, by the time you spot them its usually too late! Both aggressive and highly social they are lead by a King Shakalaka identified by a larger mask.',
		titles: [],
		class: 'Lynian',
		elements: [],
		ailments: ['Sleep', 'Poison'],
		weaknesses: ['Ice'],
		habitats: [
			'Forest and Hills',
			'Snowy Mountains',
			'Desert',
			'Volcano',
			'Great Forest',
			'Tower',
			"Hunter's Road",
		],
		sizes: ['110cm'],
		relatedMonsters: ['Felyne', 'King Shakalaka', 'Melynx'],
		generation: 'Second Generation',
	},
	{
		id: 58,
		name: 'Yama Tsukami',
		displayName: 'Yama Tsukami',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/yama_tsukami',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/yama_tsukami',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/yama-tsukami',

		link: '/hunter-notes/monsters/overview/yama-tsukami',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'An Elder Dragon that floats through the sky. A bite of earth, a drink of forest, it’s a veritable god of the sky made of the richest soil. Ancient trees grow thick on its back like on a mountain. It’s rumored to live near a forlorn remote tower.',
		titles: ['Floating Mountain Dragon'],
		class: 'Elder Dragon',
		elements: ['Fire'],
		ailments: ['Paralysis'],
		weaknesses: ['Dragon', 'Ice'],
		habitats: ['Town', 'Tower', 'Tower 2', 'Interception Base'],
		sizes: ['4137cm'],
		relatedMonsters: ['Yama Kurai'],
		generation: 'Second Generation',
	},
	{
		id: 59,
		name: 'Chameleos',
		displayName: 'Chameleos',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/chameleos',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/chameleos',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/chameleos',
		link: '/hunter-notes/monsters/overview/chameleos',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'Eyewitness sightings of this Elder Dragon are extremely rare due to its ability to literally vanish; however, details of this are unclear. It is thought that shocking it may make it reappear. When sightings do occur they are generally in  warm, humid regions.',
		titles: ['Mist Dragon', 'Ancient Phantom', 'Phantom of the Deep'],
		class: 'Elder Dragon',
		elements: ['Dragon'],
		ailments: ['Poison', 'Fatigue', 'Defense Down', 'Vocal Cord Paralysis'],
		weaknesses: ['Dragon', 'Fire', 'Thunder'],
		habitats: ['Forest and Hills', 'Jungle', 'Swamp', 'Town', 'Tower 3'],
		sizes: ['Gold Crown Large: 2811.32', 'Gold Crown Small: 1395.2'],
		relatedMonsters: [],
		generation: 'Second Generation',
	},
	{
		id: 60,
		name: 'Rusted Kushala Daora',
		displayName: 'Rusted Kushala Daora',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/rusted_kushala_daora',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/rusted_kushala_daora',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/rusted-kushala-daora',

		link: '/hunter-notes/monsters/overview/rusted-kushala-daora',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'Periodically Kushala Daora must shed their metallic scales, prior to this, they take on a rusted appearence. While waiting to molt they become extremely irratable and may target human settlments. While their shed husks are common on mountain peaks no one has witnessed a molt in person.',
		titles: ['Steel Dragon'],
		class: 'Elder Dragon',
		elements: ['Dragon', 'Ice'],
		ailments: ['Defense Down'],
		weaknesses: ['Water', 'Dragon'],
		habitats: ['Snowy Mountains', 'Town', 'Interception Base'],
		sizes: ['Gold Crown Large: 2129.0', 'Gold Crown Small: 1261.6'],
		relatedMonsters: [
			'Kushala Daora',

			'Garuba Daora',
			'Rukodiora',
			'Zenith Rukodiora',
			'Rebidiora',
		],
		generation: 'Second Generation',
	},
	{
		id: 61,
		name: 'Blango',
		displayName: 'Blango',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/blango',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/blango',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/blango',

		link: '/hunter-notes/monsters/overview/blango',

		unusedComponent: true,
		type: 'Small',
		ecology:
			'Fanged beasts with white fur, native to frigid enviroments. They operate in small groups under the direction of a Blongonga Leader and will answer its call whenevr it may come.',
		titles: [],
		class: 'Fanged Beast',
		elements: ['Ice'],
		ailments: ['Snowman'],
		weaknesses: ['Fire'],
		habitats: ['Snowy Mountains'],
		sizes: ['370cm'],
		relatedMonsters: [
			'Blangonga',
			'Zenith Blangonga',
			'Conga',
			'Congalala',
			'Rajang',
			'Furious Rajang',
			'Twinhead Rajang',
		],
		generation: 'Second Generation',
	},
	{
		id: 62,
		name: 'Conga',
		displayName: 'Conga',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/conga',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/conga',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/conga',
		link: '/hunter-notes/monsters/overview/conga',

		unusedComponent: true,
		type: 'Small',
		ecology:
			'Ape-like fanged beasts with pink fur. Conga rarely gather in large groups, preferring to remain in small troups. Particularly fond of mushrooms, they can be found in warm humid areas.',
		titles: [],
		class: 'Fanged Beast',
		elements: [],
		ailments: ['Stench'],
		weaknesses: ['Fire'],
		habitats: ['Jungle', 'Swamp', 'Great Forest', 'Flower Field'],
		sizes: ['Small'],
		relatedMonsters: [
			'Congalala',

			'Blango',
			'Blangonga',

			'Rajang',
			'Furious Rajang',
			'Twinhead Rajang',
		],
		generation: 'Second Generation',
	},
	{
		id: 63,
		name: 'Remobra',
		displayName: 'Remobra',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/remobra',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/remobra',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/remobra',
		link: '/hunter-notes/monsters/overview/remobra',

		unusedComponent: true,
		ecology:
			'Flying, serpentine Wyverns that attack with poisonous saliva. Though found in a wide variety of enviroments , such as deserts and volcanos, they often accompany Elder Dragons and are seen as omens of destruction.',
		type: 'Small',
		titles: ['Snake Wyvern', 'Winged Snake Wyvern'],
		class: 'Flying Wyvern',
		elements: [],
		ailments: ['Poison'],
		weaknesses: ['Dragon', 'Water'],
		habitats: [
			'Jungle',
			'Desert',
			'Swamp',
			'Volcano',
			'Tower',

			'Gorge',
			'Interception Base',
			'Painted Falls',
		],
		sizes: ['406.56cm'],
		relatedMonsters: [],
		generation: 'Second Generation',
	},
	{
		id: 64,
		name: 'Lunastra',
		displayName: 'Lunastra',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/lunastra',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/lunastra',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/lunastra',
		link: '/hunter-notes/monsters/overview/lunastra',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'A brutal female Elder Dragon with breath of flame and expert control over fire. It is said that this control comes from the crown-like horns on its head, but this has not been officially confirmed. Often sighted near Volcanoes and ancient ruins.',
		titles: ['Flame Queen Dragon'],
		class: 'Elder Dragon',
		elements: ['Fire', 'Dragon'],
		ailments: [],
		weaknesses: ['Dragon', 'Ice'],
		habitats: ['Volcano', 'Desert', 'Tower'],
		sizes: ['Gold Crown Large: 2575.2', 'Gold Crown Small: 1444.2'],
		relatedMonsters: ['Teostra', 'Toa Tesukatora'],
		generation: 'Second Generation',
	},
	{
		id: 65,
		name: 'Teostra',
		displayName: 'Teostra',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/teostra',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/teostra',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/teostra',
		link: '/hunter-notes/monsters/overview/teostra',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'A brutal male Elder Dragon with breath of flame and expert control over fire. Its vile temperament means anyone who approaches is subject to fire and brimstone. Known to attack cities, the Guild attentively documents all of their movements.',
		titles: ['Flame King Dragon', 'Emperor of Flame', 'Ruler of the Flame'],
		class: 'Elder Dragon',
		elements: ['Dragon', 'Fire'],
		ailments: ['Stun'],
		weaknesses: ['Dragon', 'Water', 'Ice'],
		habitats: [
			'Desert',
			'Swamp',
			'Volcano',
			'Town',
			'Tower',

			'Interception Base',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 2610.0', 'Gold Crown Small: 1479.0'],
		relatedMonsters: ['Lunastra', 'Toa Tesukatora'],
		generation: 'Second Generation',
	},
	{
		id: 66,
		name: 'Hermitaur',
		displayName: 'Hermitaur',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/hermitaur',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/hermitaur',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/hermitaur',

		link: '/hunter-notes/monsters/overview/hermitaur',

		unusedComponent: true,
		type: 'Small',
		ecology:
			'A small Carapaceon with a very hard shell. They are common in tropical and desert areas during warmer months where they will often ambush prey from undrground. Their brains are a prized delicacy.',
		titles: [],
		class: 'Carapaceon',
		elements: [],
		ailments: [],
		weaknesses: ['Thunder'],
		habitats: [
			'Jungle',
			'Desert',
			'Swamp',
			'Great Forest',

			'Solitude Island Depths',
			'Painted Falls',
		],
		sizes: ['156.1cm'],
		relatedMonsters: [
			'Daimyo Hermitaur',

			'Zenith Daimyo Hermitaur',
			'Ceanataur',
			'Shogun Ceanataur',
		],
		generation: 'Second Generation',
	},
	{
		id: 67,
		name: 'Shogun Ceanataur',
		displayName: 'Shogun Ceanataur',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/shogun_ceanataur',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/shogun_ceanataur',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/shogun-ceanataur',

		link: '/hunter-notes/monsters/overview/shogun-ceanataur',

		unusedComponent: true,
		type: 'Large',
		ecology: `A large Carapaceon with a giant monster's skull on its back. Its long, sharp pincers allow it to pierce stone and even travel along rock ceilings. They are native to marshy and volcanic areas and occasionally they develop a precious, rare pearl.`,
		titles: ['Sickle Crab', 'Final Flash'],
		class: 'Carapaceon',
		elements: ['Water'],
		ailments: ['Poison'],
		weaknesses: ['Thunder', 'Ice'],
		habitats: [
			'Swamp',
			'Volcano',

			'Interception Base',
			'Tidal Island',
			'Sky Corridor',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 1294.5', 'Gold Crown Small: 586.03'],
		relatedMonsters: [
			'Ceanataur',
			'Hermitaur',
			'Daimyo Hermitaur',
			'Zenith Daimyo Hermitaur',
		],
		generation: 'Second Generation',
	},
	{
		id: 68,
		name: 'Bulldrome',
		displayName: 'Bulldrome',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/bulldrome',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/bulldrome',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/bulldrome',

		link: '/hunter-notes/monsters/overview/bulldrome',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'The imposing leaders of Bullfango herds, they are far more aggressive than normal Bullfango and are better at tracking their targets. normally found in warm regions, they will migrate to the Snowy Mountains during warmer months.',
		titles: ['Great Boar'],
		class: 'Fanged Beast',
		elements: [],
		ailments: [],
		weaknesses: ['Thunder'],
		habitats: [
			'Snowy Mountains',
			'Jungle',
			'Swamp',
			'Tower 3',

			'Tower Nest Hole',
			'Flower Field',
			'Sky Corridor',
		],
		sizes: ['Gold Crown Large: 1188.6', 'Gold Crown Small: 509.26'],
		relatedMonsters: ['Bullfango'],
		generation: 'Second Generation',
	},
	{
		id: 69,
		name: 'Anteka',
		displayName: 'Anteka',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/anteka',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/anteka',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/anteka',
		link: '/hunter-notes/monsters/overview/anteka',

		unusedComponent: true,
		type: 'Small',
		ecology:
			'Herbivores that dwell in cold climates. Generally docile, they will charge if threatened.  Their pelts are highly prized by the Guild as are their antlers. They can be located in snowy areas regardless of the season.',
		titles: [],
		class: 'Herbivore',
		elements: [],
		ailments: [],
		weaknesses: ['Fire', 'Water', 'Thunder', 'Ice'],
		habitats: ['Snowy Mountains'],
		sizes: ['285.56cm'],
		relatedMonsters: ['Burukku'],
		generation: 'Second Generation',
	},
	{
		id: 70,
		name: 'Popo',
		displayName: 'Popo',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/popo',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/popo',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/popo',
		link: '/hunter-notes/monsters/overview/popo',

		unusedComponent: true,
		type: 'Small',
		ecology:
			'Herd-forming herbivores covered in thick fur to endure the cold. Popo are normally quite gentle, but will use their massive tusks to defend their young. Their tongues are a delicacy.',
		titles: [],
		class: 'Herbivore',
		elements: [],
		ailments: [],
		weaknesses: ['Fire'],
		habitats: ['Snowy Mountains'],
		sizes: ['Small'],
		relatedMonsters: [],
		generation: 'Second Generation',
	},
	{
		id: 71,
		name: 'White Fatalis',
		displayName: 'White Fatalis',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/white_fatalis',
		link: '/hunter-notes/monsters/overview/white-fatalis',

		rank: '',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/white_fatalis',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/white-fatalis',

		unusedComponent: true,
		type: 'Large',
		titles: ['Ancestral Dragon'],
		class: 'Elder Dragon',
		elements: ['Thunder', 'Dragon'],
		ailments: [],
		weaknesses: ['Dragon', 'Fire'],
		habitats: ['Tower', 'Castle Schrade'],
		sizes: ['4119.2 cm'],
		relatedMonsters: [
			'Fatalis',
			'Crimson Fatalis',
			'Conquest Crimson Fatalis',
			'Road White Fatalis',
			'Conquest Fatalis',
		],
		generation: 'Second Generation',
	},
	{
		id: 73,
		name: 'Ceanataur',
		displayName: 'Ceanataur',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/ceanataur',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/ceanataur',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/ceanataur',

		unusedComponent: true,
		type: 'Small',
		link: '/hunter-notes/monsters/overview/ceanataur',

		ecology: `An adolescent Carapaceon with an organic shell firmly placed on it's back. Once grown their original shell falls off and is rplaced by a large monster's skull. Common in volcanic areas.`,
		titles: [],
		class: 'Carapaceon',
		elements: [],
		ailments: ['Poison'],
		weaknesses: ['Thunder'],
		habitats: ['Swamp', 'Volcano', 'Solitude Island Depths'],
		sizes: ['283cm'],
		relatedMonsters: [
			'Shogun Ceanataur',
			'Hermitaur',
			'Daimyo Hermitaur',
			'Zenith Daimyo Hermitaur',
		],
		generation: 'Second Generation',
	},
	{
		id: 74,
		name: 'Hypnocatrice',
		displayName: 'Hypnocatrice',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/hypnoc',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/hypnoc',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/hypnoc',

		link: '/hunter-notes/monsters/overview/hypnocatrice',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'A rust-coloured bird Wyvern with magnificent tail feathers. Native to temperate, forested areas, they are normally quite passive. If threatened they can emit a sleep- -inducing gas and kick hunters viciously with their powerful legs.',
		titles: ['Sleep Bird'],
		class: 'Bird Wyvern',
		elements: [],
		ailments: ['Sleep'],
		weaknesses: ['Fire'],
		habitats: [
			'Forest and Hills',

			'Jungle',
			'Desert',
			'Great Forest',
			'Interception Base',
			'Sky Corridor',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 1485.8', 'Gold Crown Small: 751.4'],
		relatedMonsters: [
			'Bright Hypnoc',

			'Silver Hypnoc',
			'Zenith Hypnocatrice',
			'Farunokku',
		],
		generation: 'Second Generation',
	},
	{
		id: 75,
		name: 'Lavasioth',
		displayName: 'Lavasioth',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721616506/monster/lavasioth.webp',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/lavasioth',
		link: '/hunter-notes/monsters/overview/lavasioth',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/lavasioth',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'Lavasioth are thermophilic Wyverns that utilize hardened magma as a sort of armour. These beasts spend much of their time immersed in molten rock, making them a favourite research target for scholars.',
		titles: ['Lava Wyvern'],
		class: 'Piscine Wyvern',
		elements: ['Fire'],
		ailments: [],
		weaknesses: ['Water'],
		habitats: ['Volcano', 'Sky Corridor'],
		sizes: ['Gold Crown Large: 3476.6 cm', 'Gold Crown Small: 1581.57 cm'],
		relatedMonsters: [
			'Red Lavasioth',
			'Aruganosu',
			'Goruganosu',

			'Plesioth',
			'Green Plesioth',
			'Zenith Plesioth',

			'Cephalos',
			'Cephadrome',
		],
		generation: 'Second Generation',
	},
	{
		id: 76,
		name: 'Tigrex',
		displayName: 'Tigrex',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/tigrex',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/tigrex',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/tigrex',
		link: '/hunter-notes/monsters/overview/tigrex',

		unusedComponent: true,
		type: 'Large',
		ecology: `A primitive looking Wyvern found in such disperate locations as the Desert and the Snowy Mountains. While their wings don't allow for great aerial agility, their powerful jaws and legs allow them to easily overpower prey.`,
		titles: ['Roaring Wyvern', 'Absolute Power'],
		class: 'Flying Wyvern',
		elements: ['Dragon'],
		ailments: [],
		weaknesses: ['Thunder', 'Dragon'],
		habitats: [
			'Snowy Mountains',
			'Desert',

			'Sanctuary',

			'Gorge',
			'Interception Base',
			'Sky Corridor',
			'Flower Field',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 2914.8', 'Gold Crown Small: 1388.2'],
		relatedMonsters: ['Zenith Tigrex', 'Diorex'],
		generation: 'Second Generation',
	},
	{
		id: 77,
		name: 'Akantor',
		displayName: 'Akantor',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/akantor',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/akantor',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/akantor',

		link: '/hunter-notes/monsters/overview/akantor',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'A massive,yet mysterious Wyvern studded with jagged spikes. It is an apex predator, rivaling some Elder Dragons in strength. Some cultures refer to this creature as the "Black God" however its official Guild name is Akantor.',
		titles: ['Supremacy Wyvern', 'Infernal Black God'],
		class: 'Flying Wyvern',
		elements: ['Fire', 'Dragon'],
		ailments: ['Defense Down'],
		weaknesses: ['Dragon', 'Thunder', 'Ice'],
		habitats: ['Battleground'],
		sizes: ['3049cm'],
		relatedMonsters: ['Odibatorasu'],
		generation: 'Second Generation',
	},
	{
		id: 78,
		name: 'Bright Hypnoc',
		displayName: 'Bright Hypnoc',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/bright_hypnoc',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/bright_hypnoc',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/bright-hypnoc',

		link: '/hunter-notes/monsters/overview/bright-hypnoc',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'During the breeding season certain Hypnocs will develop brighter plumage for courtship displays. They also become extremely territorial and will viciously attack anything entering their territory.',
		titles: ['Blue Sleep Bird'],
		class: 'Bird Wyvern',
		elements: [],
		ailments: ['Sleep', 'Stun'],
		weaknesses: ['Thunder'],
		habitats: ['Great Forest'],
		sizes: ['Gold Crown Large: 1485.8', 'Gold Crown Small: 751.4'],
		relatedMonsters: [
			'Hypnocatrice',
			'Silver Hypnoc',
			'Zenith Hypnocatrice',
			'Farunokku',
		],
		generation: 'Frontier',
	},
	{
		id: 79,
		name: 'Red Lavasioth',
		displayName: 'Red Lavasioth',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721616520/monster/red_lavasioth.webp',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/red_lavasioth',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/red-lavasioth',

		unusedComponent: true,
		type: 'Large',
		link: '/hunter-notes/monsters/overview/red-lavasioth',

		ecology:
			'A Lavasioth Sub-Species which has melted rare ores into its molten armor, causing it to remain red even when cooled. A more developed lava-storage organ allows them to utilize additional attacks.',
		titles: ['Crimson Lava Wyvern'],
		class: 'Piscine Wyvern',
		elements: ['Fire'],
		ailments: [],
		weaknesses: ['Dragon'],
		habitats: ['Volcano'],
		sizes: ['Gold Crown Large: 3646.8', 'Gold Crown Small: 1920.6'],
		relatedMonsters: [
			'Lavasioth',
			'Aruganosu',
			'Goruganosu',
			'Green Plesioth',
			'Zenith Plesioth',
			'Cephalos',
			'Cephadrome',
			'Plesioth',
		],
		generation: 'Frontier',
	},
	{
		id: 80,
		name: 'Espinas',
		displayName: 'Espinas',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/espinas',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/espinas',
		link: '/hunter-notes/monsters/overview/espinas',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/espinas',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'Large, passive Wyverns who sleep for large portions of the day. Their scales are covered in numerous poison-laced spikes leading to the nickname of "Thorn Wyvern" Once angered, Espinas can become incredibly violent.',
		titles: ['Forbidden Venom', 'Lord of the Forest', 'Thorny Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Poison', 'Paralysis'],
		weaknesses: ['Ice'],
		habitats: [
			'Tower',
			'Tower 3',
			'Great Forest',
			'Interception Base',
			'Flower Field',
			'Sky Corridor',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 2477.2', 'Gold Crown Small: 836.9'],
		relatedMonsters: [
			'Orange Espinas',
			'White Espinas',
			'Zenith Espinas',
			'Meraginasu',
			'Gravios',
			'Black Gravios',
			'Zenith Gravios',
			'Basarios',
			'Gureadomosu',
			'Diablos',
			'Black Diablos',
			'Varusaburosu',
			'Monoblos',
			'White Monoblos',
		],
		generation: 'Frontier',
	},
	{
		id: 81,
		name: 'Orange Espinas',
		displayName: 'Orange Espinas',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/orange_espinas',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/orange_espinas',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/orange-espinas',
		link: '/hunter-notes/monsters/overview/orange-espinas',
		unusedComponent: true,
		type: 'Large',
		ecology: `Orange-coloured Espinas variants which prefer to live in more arid areas compared to their green kin. While just as passive as normal Espinas, they possess acidic saliva that can rapidly corrode armour.`,
		titles: ['Brown Thorny Wyvern', 'Passionate Poisoner'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Poison', 'Defense Down'],
		weaknesses: ['Water'],
		habitats: [
			'Tower',
			'Tower 3',
			'Top of Great Forest',
			'Gorge',
			'Interception Base',
			'Sky Corridor',
		],
		sizes: ['Gold Crown Large: 2812.0', 'Gold Crown Small: 1489.7'],
		relatedMonsters: [
			'Espinas',
			'White Espinas',
			'Zenith Espinas',
			'Meraginasu',
			'Gravios',
			'Black Gravios',
			'Zenith Gravios',
			'Basarios',
			'Gureadomosu',
			'Diablos',
			'Black Diablos',
			'Varusaburosu',
			'Monoblos',
			'White Monoblos',
		],
		generation: 'Frontier',
	},
	{
		id: 82,
		name: 'Silver Hypnoc',
		displayName: 'Silver Hypnoc',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/silver_hypnoc',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/silver_hypnoc',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/silver-hypnoc',

		link: '/hunter-notes/monsters/overview/silver-hypnoc',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'An extremely rare Hypnoc varient covered in silver and white plumage. Limited research conducted by the Guild has confirmed these rare Wyverns behave differently compared to their kin, but more data is needed.',
		titles: ['Pale Sleep Bird'],
		class: 'Bird Wyvern',
		elements: [],
		ailments: ['Sleep'],
		weaknesses: ['Ice'],
		habitats: ['Forest and Hills', 'Top of Great Forest'],
		sizes: ['Gold Crown Large: 1648.1', 'Gold Crown Small: 751.4'],
		relatedMonsters: [
			'Hypnocatrice',
			'Bright Hypnoc',
			'Zenith Hypnocatrice',

			'Farunokku',
		],
		generation: 'Frontier',
	},
	{
		id: 83,
		name: 'Akura Vashimu',
		displayName: 'Akura Vashimu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/akura_vashimu',
		rank: 'G Rank',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/akura_vashimu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/akura-vashimu',

		unusedComponent: true,
		link: '/hunter-notes/monsters/overview/akura-vashimu',

		titles: ['Tail Crystal Scorpion'],
		class: 'Carapaceon',
		elements: [],
		ailments: ['Crystal', 'Paralysis'],
		weaknesses: [],
		habitats: ['Desert', 'Swamp', 'Interception Base', "Hunter's Road"],
		sizes: ['Gold Crown Large: 2631.4', 'Gold Crown Small: 1607.0'],
		relatedMonsters: ['Zenith Akura Vashimu', 'Akura Jebia', 'Kusubami'],
		generation: 'Frontier',
		ecology: `A large Carapaceon with a crystal-adorned black shell. These beasts possess unique blood, which changes colour in response to their mood. Highly aggressive and opportunistic predators, they attack with a unique crystallizing body fluid.`,
		type: 'Large',
	},
	{
		id: 84,
		name: 'Akura Jebia',
		displayName: 'Akura Jebia',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/akura_jebia',
		rank: 'G Rank',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/akura_jebia',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/akura-jebia',

		link: '/hunter-notes/monsters/overview/akura-jebia',

		unusedComponent: true,
		ecology:
			'Closely related to Akura Vashimu, these Carapaceons use their crystal-covered tails to lure curious prey into striking distance. Research indicates that if their tails are injured, they will use their crystalizing fluid to patch the wound.',
		type: 'Large',
		titles: ['Ash Crystal Scorpion'],
		class: 'Carapaceon',
		elements: [],
		ailments: ['Crystal', 'Paralysis'],
		weaknesses: [],
		habitats: ['Swamp', 'Desert'],
		sizes: ['Gold Crown Large: 2600 cm', 'Gold Crown Small: 1600 cm'],
		relatedMonsters: ['Akura Vashimu', 'Zenith Akura Vashimu', 'Kusubami'],
		generation: 'Frontier',
	},
	{
		id: 85,
		name: 'Berukyurosu',
		displayName: 'Berukyurosu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/berukyurosu',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/berukyurosu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/berukyurosu',
		link: '/hunter-notes/monsters/overview/berukyurosu',

		unusedComponent: true,
		ecology:
			'Magnificent Wyverns adept at creating and utilizing electricity. Rarely found outside of remote canyons, research on their biology is lacking however it has been claimed that if sufficiently injured, they may lose control of their electrical organs.',
		type: 'Large',
		titles: ['Dancing Thunder Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Thunder'],
		ailments: ['Paralysis'],
		weaknesses: ['Ice', 'Water'],
		habitats: ['Gorge', 'Tower', 'Forest and Hills'],
		sizes: ['Gold Crown Large: 2052.2', 'Gold Crown Small: 1234.4'],
		relatedMonsters: ['Doragyurosu', 'Zenith Doragyurosu', 'Zenaserisu'],
		generation: 'Frontier',
	},
	{
		id: 86,
		name: 'Cactus',
		displayName: 'Cactus',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/cactus',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/cactus',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/cactus',

		link: '/hunter-notes/monsters/overview/cactus',
		class: 'Unknown',
		generation: 'Frontier',
		unusedComponent: true,
		type: 'Small',
		ecology:
			'This species of cactus has been found to give various restorative effects to hunters. They are found all throughout the Gorge.',
	},
	{
		id: 89,
		name: 'Pariapuria',
		displayName: 'Pariapuria',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/pariapuria',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/pariapuria',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/pariapuria',

		link: '/hunter-notes/monsters/overview/pariapuria',

		unusedComponent: true,
		ecology: `Foul Wyverns with a ceaseless appetite. They will devour any form of meat they find. Hunters may utilize this by placing meat of certain types near these beasts, causing them to over eat and vomit rare materials they've eaten.`,
		type: 'Large',
		titles: ['Swallowing Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Water'],
		ailments: ['Poison', 'Paralysis', 'Sleep', 'Stench', 'Stun'],
		weaknesses: ['Fire', 'Thunder'],
		habitats: ['Gorge', 'Highlands', 'Tidal Island', 'Sky Corridor'],
		sizes: ['Gold Crown Large: 2672.5', 'Gold Crown Small: 1406.6'],
		relatedMonsters: ['Supremacy Pariapuria'],
		generation: 'Frontier',
	},
	{
		id: 90,
		name: 'White Espinas',
		displayName: 'White Espinas',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/white_espinas',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/white_espinas',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/white-espinas',
		link: '/hunter-notes/monsters/overview/white-espinas',

		unusedComponent: true,
		ecology:
			'Extremely rare Espinas which possess snow white scales and violet thorns. They are far more aggressive than regular Espinas and will fly into a rage if awakened from sleep. They can produce enormous toxic fireballs while attacking.',
		type: 'Large',
		titles: ['White Thorny Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Poison', 'Paralysis', 'Defense Down'],
		weaknesses: ['Sound', 'Dragon'],
		habitats: ['Top of Great Forest'],
		sizes: ['Gold Crown Large: 2110.0', 'Gold Crown Small: 1339.0'],
		relatedMonsters: [
			'Espinas',
			'Orange Espinas',
			'Zenith Espinas',
			'Meraginasu',
			'Gravios',
			'Black Gravios',
			'Zenith Gravios',
			'Basarios',

			'Gureadomosu',
			'Diablos',
			'Black Diablos',
			'Varusaburosu',
			'Monoblos',
			'White Monoblos',
		],
		generation: 'Frontier',
	},
	{
		id: 91,
		name: 'Kamu Orugaron',
		displayName: 'Kamu Orugaron',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/kamu_orugaron',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/kamu_orugaron',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/kamu-orugaron',

		unusedComponent: true,
		link: '/hunter-notes/monsters/overview/kamu-orugaron',

		type: 'Large',
		ecology:
			'Nomadic, male Fanged Beasts with bristling grey coats. They are never far from their mate, the Nono Orugaron. Research shows these beasts have advanced respiratory systems allowing them to unleash deadly wind-based attacks.',
		titles: ['Male Sound Wolf'],
		class: 'Fanged Beast',
		elements: ['Ice'],
		ailments: ['Stun', 'Snowman'],
		weaknesses: ['Water'],
		habitats: ['Swamp', 'Tower 3', "Hunter's Road"],
		sizes: ['Gold Crown Large: 1225.0', 'Gold Crown Small: 750.0'],
		relatedMonsters: ['Nono Orugaron', 'Midogaron', 'Zenith Midogaron'],
		generation: 'Frontier',
	},
	{
		id: 92,
		name: 'Nono Orugaron',
		displayName: 'Nono Orugaron',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/nono_orugaron',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/nono-orugaron',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/nono_orugaron',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/nono-orugaron',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'Nomadic, female Fanged Beasts with snowy, white coats. They are never far from their mate, the Kamu Orugaron. Research shows these beasts may use caves to amplify their calls, allowing them to summon their mates from great distances.',
		titles: ['Female Sound Wolf'],
		class: 'Fanged Beast',
		elements: ['Ice'],
		ailments: ['Stun', 'Snowman'],
		weaknesses: ['Water'],
		habitats: ['Swamp', 'Tower 3', "Hunter's Road"],
		sizes: ['Gold Crown Large: 1150.0', 'Gold Crown Small: 736.0'],
		relatedMonsters: ['Kamu Orugaron', 'Midogaron', 'Zenith Midogaron'],
		generation: 'Frontier',
	},
	{
		id: 93,
		name: 'Raviente',
		displayName: 'Raviente',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721616519/monster/raviente.webp',
		link: '/hunter-notes/monsters/overview/raviente',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/raviente',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/raviente',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'These powerful colossal monsters are known for their aggressiveness, and they can easily consume nearly everything in their vicinity in little time during actitivity periods. When not looking for food, they seem to spend most of their time hibernating deep underground and underwater.',
		titles: ['Great Crag Wyvern'],
		class: 'Unclassified Monster',
		elements: ['Fire'],
		ailments: ['Stun', 'Paralysis'],
		weaknesses: [],
		habitats: ['Solitude Island'],
		sizes: ['45000cm'],
		relatedMonsters: ['Violent Raviente', 'Berserk Raviente'],
		generation: 'Frontier',
	},
	{
		id: 93,
		name: 'Violent Raviente',
		displayName: 'Violent Raviente',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721616900/monster/violent_raviente.webp',
		link: '/hunter-notes/monsters/overview/violent-raviente',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/violent_raviente',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/violent-raviente',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'A monster in a state of near starvation, hence their deadly off-white color schemes. They are more aggressive than their normal counterpart and will seek to devour any living thing they see.',
		titles: ['Great Crag Wyvern'],
		class: 'Unclassified Monster',
		elements: ['Fire'],
		ailments: ['Stun', 'Paralysis'],
		weaknesses: [],
		habitats: ['Solitude Island'],
		sizes: ['45000cm'],
		relatedMonsters: ['Raviente', 'Berserk Raviente'],
		generation: 'Frontier',
	},
	{
		id: 94,
		name: 'Dyuragaua',
		displayName: 'Dyuragaua',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/dyuragaua',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/dyuragaua',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/dyuragaua',

		link: '/hunter-notes/monsters/overview/dyuragaua',

		unusedComponent: true,
		ecology:
			'Enigmatic creatures only found near ancient ruins. Little has been documented of their ecology, but reports claim they are able to cloak themselves in an armour of frost when engraged. It is also said to despise loud noises.',
		type: 'Large',
		titles: ['Ice Fox Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Ice'],
		ailments: ['Frostbite', 'Sleep', 'Stun'],
		weaknesses: ['Dragon'],
		habitats: [
			'Gorge',
			'Tower Nest Hole',
			'Highlands',
			'Interception Base',
			'Sky Corridor',
		],
		sizes: ['Gold Crown Large: 1735', 'Gold Crown Small: 1110.4'],
		relatedMonsters: ['Mi Ru', 'Shifting Mi Ru'],
		generation: 'Frontier',
	},
	{
		id: 95,
		name: 'Doragyurosu',
		displayName: 'Doragyurosu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/doragyurosu',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/doragyurosu',
		link: '/hunter-notes/monsters/overview/doragyurosu',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/doragyurosu',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'Deadly Wyverns adept at creating and utilizing the Dragon Element. Native to cold and mountainous areas these beasts are as adept with ground combat as they are aerial. Their Dragon Element attacks can also paralyze hunters.',
		titles: ['Dark Thunder Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Dragon'],
		ailments: ['Paralysis', 'Stun'],
		weaknesses: ['Fire', 'Water'],
		habitats: [
			'Snowy Mountains',
			'Highlands',
			'Top of Great Forest',
			"Hunter's Road",
		],
		sizes: ['Silver Crown Large: 1882.5', 'Gold Crown Small: 1173.6'],
		relatedMonsters: ['Zenith Doragyurosu', 'Berukyurosu', 'Zenaserisu'],
		generation: 'Frontier',
	},
	{
		id: 96,
		name: 'Gurenzeburu',
		displayName: 'Gurenzeburu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/gurenzeburu',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/gurenzeburu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/gurenzeburu',
		link: '/hunter-notes/monsters/overview/gurenzeburu',

		unusedComponent: true,
		ecology:
			'Also known as "Barbarian Wyverns", these large, horned creatures are famously brutal. Interestingly though, reports indicate they guide and protect herds of Burukku in their native range, defending them from any  potential threat.',
		type: 'Large',
		titles: ['Barbarian Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Water'],
		ailments: ['Paralysis', 'Stun'],
		weaknesses: ['Thunder', 'Dragon'],
		habitats: ['Highlands', 'Forest and Hills'],
		sizes: ['Gold Crown Large: 2322.5', 'Gold Crown Small: 1486.4'],
		relatedMonsters: [],
		generation: 'Frontier',
	},
	{
		id: 97,
		name: 'Burukku',
		displayName: 'Burukku',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/burukku',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/burukku',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/burukku',

		link: '/hunter-notes/monsters/overview/burukku',
		type: 'Small',
		class: 'Herbivore',
		generation: 'Frontier',
		unusedComponent: true,
		ecology:
			'Peaceful Herbivores with shaggy coats of fur. They are found in herds roaming the Highlands. Normally docile they will attack as a group if threatened. It is reported that they are often shepherded by a Gurenzeburu.',
	},
	{
		id: 98,
		name: 'Erupe',
		displayName: 'Erupe',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/erupe',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/erupe',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/erupe',

		link: '/hunter-notes/monsters/overview/erupe',

		unusedComponent: true,
		ecology:
			'Small Herbivores native to the Highlands. They are quite peaceful and curious towards hunters. Their hooves are uniquely adapted to live in steep, rocky enviroments. During harsh weather, or if threatened they will quickly flee to safety.',
		type: 'Small',
		titles: [],
		class: 'Herbivore',
		elements: [],
		ailments: [],
		weaknesses: ['Fire'],
		habitats: ['Highlands'],
		sizes: ['Small'],
		relatedMonsters: ['Kelbi', 'Anteka'],
		generation: 'Frontier',
	},
	{
		id: 99,
		name: 'Rukodiora',
		displayName: 'Rukodiora',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/rukodiora',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/rukodiora',
		link: '/hunter-notes/monsters/overview/rukodiora',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/rukodiora',

		unusedComponent: true,
		ecology:
			'An Elder Dragon with beautiful shining wings. While mentions of its existance are found in various ancient texts, only after it appeared and began attacking settlments, was it officially documented. It is reported to possess a strange power.',
		type: 'Large',
		titles: ['Magnetic Dragon', 'Pole Dragon'],
		class: 'Elder Dragon',
		elements: ['Dragon'],
		ailments: ['Magnetism'],
		weaknesses: ['Dragon', 'Ice'],
		habitats: ['Interception Base', 'Desert', 'White Lake'],
		sizes: ['Gold Crown Large: 2108.8', 'Gold Crown Small: 1349.6'],
		relatedMonsters: [
			'Zenith Rukodiora',
			'Rebidiora',
			'Kushala Daora',
			'Rusted Kushala Daora',

			'Garuba Daora',
		],
		generation: 'Frontier',
	},
	{
		id: 100,
		name: 'UNKNOWN',
		displayName: 'UNKNOWN',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/unknown',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/unknown',
		link: '/hunter-notes/monsters/overview/unknown',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/unknown',

		unusedComponent: true,
		type: 'Large',
		ecology: `A Wyvern with pitch-black scales and crimson talons occasionally seen at ancient towers. The abilities of this Wyvern seems to vary between witnesses and so little is known of it's biology, that it has yet to be officially named.`,
		titles: ['Black Flying Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Poison', 'Defense Down'],
		weaknesses: ['Water', 'Thunder', 'Ice', 'Dragon'],
		habitats: [
			'Forest and Hills',
			'Jungle',
			'Desert',
			'Swamp',
			'Great Forest',
			'Tower',
			'Tower 3',
			'Gorge',
		],
		sizes: ['Gold Crown Large: 2303.8'],
		relatedMonsters: ['Shiten UNKNOWN'], // TODO
		generation: 'Frontier',
	},
	{
		id: 100,
		name: 'Unknown',
		displayName: 'UNKNOWN',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/unknown',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/unknown',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/unknown',
		link: '/hunter-notes/monsters/overview/unknown',

		unusedComponent: true,
		ecology: `A Wyvern with pitch-black scales and crimson talons occasionally seen at ancient towers. The abilities of this Wyvern seems to vary between witnesses and so little is known of it's biology, that it has yet to be officially named.`,
		type: 'Large',
		titles: ['Black Flying Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Poison', 'Defense Down'],
		weaknesses: ['Water', 'Thunder', 'Ice', 'Dragon'],
		habitats: [
			'Forest and Hills',
			'Jungle',
			'Desert',
			'Swamp',
			'Great Forest',
			'Tower',
			'Tower 3',
			'Gorge',
		],
		sizes: ['Gold Crown Large: 2303.8'],
		relatedMonsters: ['Rathian'],
		generation: 'Frontier',
	},
	{
		id: 101,
		name: 'Gogomoa',
		displayName: 'Gogomoa',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/gogomoa',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/gogomoa',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/gogomoa',

		link: '/hunter-notes/monsters/overview/gogomoa',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'Fanged Beasts native to the Tidal Island, which possess characteristic white and beige fur with long claws and tail. They secret a unique webbing like substance to aid in movement and often carry their young on their backs.',
		titles: ['Jumping Cardinal Beast'],
		class: 'Fanged Beast',
		elements: [],
		ailments: ['Poison', 'Sleep'],
		weaknesses: ['Fire', 'Ice'],
		habitats: ['Tidal Island'],
		sizes: ['Gold Crown Large: 1329.3', 'Gold Crown Small: 857.6'],
		relatedMonsters: [],
		generation: 'Frontier',
	},
	{
		id: 103,
		name: 'Taikun Zamuza',
		displayName: 'Taikun Zamuza',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/taikun_zamuza',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/taikun_zamuza',
		link: '/hunter-notes/monsters/overview/taikun-zamuza',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/taikun-zamuza',

		unusedComponent: true,
		ecology:
			'Strange cave dwelling creatures that cover their carapaces with rocks and fungi for camouflage. Leveraging their unique claws, these Carapaceons can both slash and crush foes with ease. Hunt with caution.',
		type: 'Large',
		titles: ['Multi-Shell Crab'],
		class: 'Carapaceon',
		elements: ['Thunder'],
		ailments: ['Poison', 'Paralysis'],
		weaknesses: ['Fire', 'Ice', 'Water'],
		habitats: ['Tidal Island'],
		sizes: ['Gold Crown Large: 1163.9 cm', 'Gold Crown Small: 757 cm'],
		relatedMonsters: ['Zenith Taikun Zamuza'],
		generation: 'Frontier',
	},
	{
		id: 104,
		name: 'Abiorugu',
		displayName: 'Abiorugu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/abiorugu',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/abiorugu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/abiorugu',
		link: '/hunter-notes/monsters/overview/abiorugu',

		unusedComponent: true,
		ecology:
			'Brute Wyverns that utilize their bladed tails and sharp claws to dispatch prey. When angered the plates covering their backs will flush with blood to further intimidate their foes. They are known to possess extremely acidic saliva.',
		type: 'Large',
		titles: ['Ferocious Wyvern'],
		class: 'Brute Wyvern',
		elements: ['Fire'],
		ailments: ['Stun', 'Defense Down'],
		weaknesses: ['Ice', 'Water', 'Thunder'],
		habitats: [
			'Forest and Hills',
			'Snowy Mountains',
			'Jungle',
			'Swamp',
			'Great Forest',
		],
		sizes: ['Gold Crown Large: 2106.4', 'Gold Crown Small: 1069.6'],
		relatedMonsters: [
			'Giaorugu',
			'Zenith Giaorugu',
			'Deviljho',
			'Starving Deviljho',
			'Golden Deviljho',
			'Four Heavenly King Deviljho',
		],
		generation: 'Frontier',
	},
	{
		id: 105,
		name: 'Kuarusepusu',
		displayName: 'Kuarusepusu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/kuarusepusu',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/kuarusepusu',
		link: '/hunter-notes/monsters/overview/kuarusepusu',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/kuarusepusu',

		unusedComponent: true,
		ecology:
			'Leviathans adapted to terrestrial life, they are rather cautious preferring to scatter some of the many dangerous crystals covering their bodies to harm unwary attackers. The organic crystals they grow also allow them to harness sunlight and lightning depending on the weather.',
		type: 'Large',
		titles: ['Crystal Wyvern'],
		class: 'Leviathan',
		elements: ['Fire', 'Thunder'],
		ailments: ['Paralysis', 'Stun'],
		weaknesses: ['Light', 'Fire'],
		habitats: [
			'Desert',
			'Top of Great Forest',
			'Highlands',
			'Interception Base',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 3655.0', 'Gold Crown Small: 2358.1'],
		relatedMonsters: [],
		generation: 'Frontier',
	},
	{
		id: 106,
		name: 'Odibatorasu',
		displayName: 'Odibatorasu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/odibatorasu',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/odibatorasu',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/odibatorasu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/odibatorasu',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'Hulking relatives of Akantor found in desert regions, their shells are often mistaken for mountains. Voracious predators, that will consume any smaller creature within reach little else is known of their biology.',
		titles: ['Cannon Rock Wyvern'],
		class: 'Flying Wyvern',
		elements: [],
		ailments: [],
		weaknesses: ['Dragon', 'Thunder'],
		habitats: ['Desert'],
		sizes: ['Very Large'],
		relatedMonsters: ['Akantor'],
		generation: 'Frontier',
	},
	{
		id: 107,
		name: 'Disufiroa',
		displayName: 'Disufiroa',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/disufiroa',

		ecology: `Mysterious, yet overwhelmingly powerful, this dragon dwells in an area dubbed the "World's End", which was previously thought to be incapable of supporting life. Ominously, no records of this beast exist and its ecology is a mystery. '`,
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/disufiroa',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/disufiroa',

		link: '/hunter-notes/monsters/overview/disufiroa',

		unusedComponent: true,
		type: 'Large',
		titles: ['Frozen Seraphim Dragon'],
		class: 'Elder Dragon',
		elements: ['Okiko'],
		ailments: [],
		weaknesses: ['Fire', 'Water', 'Thunder', 'Dragon'],
		habitats: ["World's End"],
		sizes: ['Gold Crown Large: 2057.0', 'Gold Crown Small: 1316.5'],
		relatedMonsters: [],
		generation: 'Frontier',
	},
	{
		id: 108,
		name: 'Rebidiora',
		displayName: 'Rebidiora',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/rebidiora',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/rebidiora',
		link: '/hunter-notes/monsters/overview/rebidiora',
		type: 'Large',
		class: 'Elder Dragon',
		generation: 'Frontier',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/rebidiora',
		elements: ['Thunder', 'Dragon', 'Lightning Rod'],
		ailments: ['Magnetism'],
		weaknesses: ['Water', 'Dragon', 'Ice'],
		unusedComponent: true,
		ecology: `A powerful dragon clad in purple scales and shining wings. It's origin is unknown but scholars believe it may be a Sub-Species of Rukodiora. It is able to generate far more powerful magnetic fields than its relative. `,
	},
	{
		id: 109,
		name: 'Anorupatisu',
		displayName: 'Anorupatisu',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/anorupatisu',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/anorupatisu',
		link: '/hunter-notes/monsters/overview/anorupatisu',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/anorupatisu',

		unusedComponent: true,
		ecology:
			'Flying Wyverns adapted to life in cold, marine enviroments. They utilize their strange barbed snouts and body spikes for traversal as well as offense. They are also able to expel a freezing substance.',
		type: 'Large',
		titles: ['Violent Saw Wyvern', 'King of the Polar Sea'],
		class: 'Flying Wyvern',
		elements: ['Ice', 'Dragon'],
		ailments: ['Snowman', 'Stun'],
		weaknesses: ['Thunder', 'Fire'],
		habitats: ['Polar Sea'],
		sizes: ['Gold Crown Small: 1481.0', 'Gold Crown Large: 2155.7'],
		relatedMonsters: ['Zenith Anorupatisu'],
		generation: 'Frontier',
	},
	{
		id: 110,
		name: 'Hyujikiki',
		displayName: 'Hyujikiki',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/hyujikiki',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/hyujikiki',
		link: '/hunter-notes/monsters/overview/hyujikiki',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/hyujikiki',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'Cunning predators that utilize their many spines as projectiles to wound and trap prey. Capable of secreting a variety of neurotoxins from their skin, their oily fur is extremely vulnerable to fire based attacks.',
		titles: ['Needle Wyvern'],
		class: 'Flying Wyvern',
		elements: [],
		ailments: ['Paralysis', 'Poison', 'Sleep'],
		weaknesses: ['Fire', 'Thunder'],
		habitats: ['Desert', 'Highlands', 'Interception Base', "Hunter's Road"],
		sizes: ['Gold Crown Large: 1834.1', 'Gold Crown Small: 1183.3'],
		relatedMonsters: ['Zenith Hyujikiki'],
		generation: 'Frontier',
	},
	{
		id: 111,
		name: 'Midogaron',
		ecology:
			'Rare and violent variants of Kamu Orugaron, known to inhabit volcanic regions. Unlike their standard cousins, they are solitary hunters and have been know to even harrass Nono Orugaron during the breeding season. Their bright orange fur is highly fire-resistant.',
		displayName: 'Midogaron',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/midogaron',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/midogaron',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/midogaron',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/midogaron',

		unusedComponent: true,
		type: 'Large',
		titles: ['Explosion Wolf'],
		class: 'Fanged Beast',
		elements: ['Fire'],
		ailments: ['Stun'],
		weaknesses: ['Ice', 'Water'],
		habitats: ['Swamp', 'Volcano', 'Interception Base', "Hunter's Road"],
		sizes: ['Gold Crown Large: 1768.5', 'Gold Crown Small: 1080.0'],
		relatedMonsters: ['Zenith Midogaron', 'Kamu Orugaron', 'Nono Orugaron'],
		generation: 'Frontier',
	},
	{
		id: 112,
		name: 'Giaorugu',
		displayName: 'Giaorugu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/giaorugu',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/giaorugu',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/giaorugu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/giaorugu',

		unusedComponent: true,
		ecology:
			'Closely related to Abiorugu, they inhabit freezing enviroments such as the Polar Sea, where they utilize ice to increase the power of their attacks. They are able to shoot beams of pressurized ice water at targets.',
		type: 'Large',
		titles: ['Ice Ferocious Wyvern'],
		class: 'Brute Wyvern',
		elements: ['Ice'],
		ailments: ['Snowman', 'Defense Down'],
		weaknesses: ['Fire'],
		habitats: ['Polar Sea', "Hunter's Road"],
		sizes: ['Silver Crown Large: 1908.9cm', 'Gold Crown Small: 1316.5cm'],
		relatedMonsters: [
			'Zenith Giaorugu',
			'Abiorugu',
			'Deviljho',
			'Starving Deviljho',
			'Golden Deviljho',
			'Four Heavenly King Deviljho',
		],
		generation: 'Frontier',
	},
	{
		id: 113,
		name: 'Mi Ru',
		displayName: 'Mi Ru',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/mi_ru',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/mi_ru',
		link: '/hunter-notes/monsters/overview/mi-ru',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/mi-ru',

		unusedComponent: true,
		ecology:
			'Mi Ru is very territorial and will attempt to kill anything that enters its territory. From this only a limited few hunters are actually allowed to hunt Mi Ru from how dangerous and rare it is.',
		type: 'Large',
		titles: ['Black Fox Wyvern'],
		class: 'Unclassified Monster',
		elements: ['Fire'],
		ailments: ['Crystal', 'Stun'],
		weaknesses: ['Fire', 'Water', 'Thunder', 'Ice', 'Dragon'],
		habitats: ['Tower Nest Hole'],
		sizes: ['Large'],
		relatedMonsters: ['Shifting Mi Ru', 'Dyuragaua'],
		generation: 'Frontier',
	},
	{
		id: 114,
		name: 'Farunokku',
		displayName: 'Farunokku',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/farunokku',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/farunokku',

		ecology:
			'Closely related to Hypnocatrice, these Wyverns possess extremely bright plumage, not to warn predators, but to attract potential mates. Naturally being highly visible to potential threats, these Wyverns are quite capable of defending themselves and are not to be taken lightly.',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/farunokku',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/farunokku',

		unusedComponent: true,
		type: 'Large',
		titles: ['Thunder Bird'],
		class: 'Bird Wyvern',
		elements: ['Thunder'],
		ailments: [],
		weaknesses: ['Water', 'Ice'],
		habitats: ['Great Forest', 'Desert', "Hunter's Road"],
		sizes: ['Gold Crown Large: 1634.4', 'Gold Crown Small: 930.2'],
		relatedMonsters: [
			'Hypnocatrice',
			'Bright Hypnoc',
			'Silver Hypnoc',
			'Zenith Hypnocatrice',
		],
		generation: 'Frontier',
	},
	{
		id: 115,
		name: 'Pokaradon',
		displayName: 'Pokaradon',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/pokaradon',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/pokaradon',
		link: '/hunter-notes/monsters/overview/pokaradon',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/pokaradon',

		unusedComponent: true,
		ecology:
			'Male Leviathans native to the Polar Sea. Twice the size of their female counterparts they possess massive fangs used to intimidate rivals and predators alike. Though aggressive towards percieved threats, they are known to play with their mates and offspring.',
		type: 'Large',
		titles: ['Frozen Sea Beast'],
		class: 'Leviathan',
		elements: ['Water'],
		ailments: ['Snowman', 'Stun'],
		weaknesses: ['Thunder', 'Fire'],
		habitats: ['Polar Sea'],
		sizes: ['Gold Crown Large: 2955.1', 'Gold Crown Small: 1984.8'],
		relatedMonsters: ['Pokara'],
		generation: 'Frontier',
	},
	{
		id: 116,
		name: 'Shantien',
		displayName: 'Shantien',
		link: '/hunter-notes/monsters/overview/shantien',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/shantien',
		ecology:
			'An elusive Elder Dragon previously known only from ancient legends. It dwells high in the atmosphere, far above most other creatures, but will rarely descend to ground level. It was classified by the Guild after its discovery by the Large Exploration Ship.',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/shantien',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/shantien',

		unusedComponent: true,
		type: 'Large',
		titles: ['Heavenly Flying Dragon'],
		class: 'Elder Dragon',
		elements: ['Tenshou'],
		ailments: ['Paralysis'],
		weaknesses: ['Ice', 'Dragon'],
		habitats: ['Large Exploration Ship'],
		sizes: ['Gold Crown Large: 3625.5', 'Gold Crown Small: 2358.1'],
		relatedMonsters: [],
		generation: 'Frontier',
	},
	{
		id: 117,
		name: 'Pokara',
		displayName: 'Pokara',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/pokara',
		ecology:
			'Female Leviathans found in the Polar Sea. Roughly half the size of their male counterparts, they also possess smaller fangs, more suited to catching fish than for display. If their children or mate is threatened, they will attack ferociously.',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/pokara',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/pokara',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/pokara',

		unusedComponent: true,
		type: 'Small',
		titles: [],
		class: 'Leviathan',
		elements: ['Ice'],
		ailments: [],
		weaknesses: ['Thunder'],
		habitats: ['Polar Sea'],
		sizes: [],
		relatedMonsters: ['Pokaradon'],
		generation: 'Frontier',
	},
	{
		id: 119,
		name: 'Goruganosu',
		displayName: 'Goruganosu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721616491/monster/goruganosu.webp',
		link: '/hunter-notes/monsters/overview/goruganosu',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/goruganosu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/goruganosu',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'Goruganosu are incredibly territorial creatures that are mostly known for their near endless fights with their silver cousins, though they will cooperate with one another if something else enters the vicinity.',
		titles: ['Golden Piscine Wyvern'],
		class: 'Piscine Wyvern',
		elements: ['Thunder'],
		ailments: ['Sleep'],
		weaknesses: ['Ice', 'Dragon'],
		habitats: ['Tower 3'],
		sizes: ['Gold Crown Large: ?', 'Gold Crown Small: ?'],
		relatedMonsters: [
			'Aruganosu',
			'Lavasioth',
			'Red Lavasioth',

			'Cephalos',
			'Cephadrome',
			'Plesioth',
			'Green Plesioth',
			'Zenith Plesioth',
		],
		generation: 'Frontier',
	},
	{
		id: 120,
		name: 'Aruganosu',
		displayName: 'Aruganosu',
		link: '/hunter-notes/monsters/overview/aruganosu',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721616411/monster/aruganosu.webp',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/aruganosu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/aruganosu',

		unusedComponent: true,
		type: 'Large',
		ecology: `Aruganosu are extremely territorial monsters that are mostly known for the constant fights with their gilded cousins, although if anything disturbs these fights they'll put things aside to take down the intruder.`,
		titles: ['Silver Piscine Wyvern'],
		class: 'Piscine Wyvern',
		elements: ['Ice'],
		ailments: ['Paralysis'],
		weaknesses: ['Thunder', 'Dragon'],
		habitats: ['Tower 3'],
		sizes: ['Large'],
		relatedMonsters: [
			'Goruganosu',
			'Lavasioth',
			'Red Lavasioth',

			'Cephalos',
			'Cephadrome',
			'Plesioth',
			'Green Plesioth',
			'Zenith Plesioth',
		],
		generation: 'Frontier',
	},
	{
		id: 121,
		name: 'Baruragaru',
		displayName: 'Baruragaru',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/baruragaru',

		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/baruragaru',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/baruragaru',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/baruragaru',

		unusedComponent: true,
		ecology:
			'A foreign Leviathan which was discovered following reports of a large number of montsers drained of blood. They seem to prefer areas near the ocean or underground, where they stalk and overpower any creature smaller than themselves before draining them of blood.',
		type: 'Large',
		titles: ['Blood Eating Wyvern'],
		class: 'Leviathan',
		elements: ['Water'],
		ailments: ['Poison', 'Paralysis', 'Defense Down'],
		weaknesses: ['Fire', 'Thunder'],
		habitats: ['Swamp', 'Desert', 'Jungle', "Hunter's Road"],
		sizes: ['Gold Crown Small: 2345.6', 'Gold Crown Large: 2814.7'],
		relatedMonsters: ['Zenith Baruragaru'],
		generation: 'Frontier',
	},
	{
		id: 122,
		name: 'Zerureusu',
		displayName: 'Zerureusu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/zerureusu',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/zerureusu',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zerureusu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zerureusu',

		unusedComponent: true,
		ecology:
			'A Wyvern seemingly related to Rathalos, but with shining white scales and flickering blue flames. While painfully rare ancient texts from various cultures describe them as everything from divine messengers, to unholy envoys of death and suffering.',
		type: 'Large',
		titles: ['Bright Field Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Light'],
		ailments: [],
		weaknesses: ['Dark', 'Dragon'],
		habitats: ['Tower', "Hunter's Road"],
		sizes: ['Gold Crown Large: 2428.3cm', 'Gold Crown Small: 1579.4cm'],
		relatedMonsters: [
			'Sparkling Zerureusu',
			'Rathalos',
			'Azure Rathalos',
			'Silver Rathalos',

			'Rathian',
			'Pink Rathian',
			'Gold Rathian',
		],
		generation: 'Frontier',
	},
	{
		id: 123,
		name: 'Gougarf',
		link: '/hunter-notes/monsters/overview/ray-gougarf',
		displayName: 'Ray Gougarf',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/gougarf',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/ray_gougarf',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/ray-gougarf',

		unusedComponent: true,
		type: 'Large',
		ecology: `Social creatures always observed as a pair. The colour difference often seen between them isn't sexual dimorphism as originally thought, but rather simple genetic variation, with the red variety being more common. They fight as a team and can generate magnetic fields.`,
		titles: ['Fighting Beast'],
		class: 'Fanged Beast',
		elements: [],
		ailments: ['Magnetism', 'Stun'],
		weaknesses: ['Water', 'Fire'],
		habitats: ['Gorge', 'Bamboo Forest', "Hunter's Road"],
		sizes: ['Gold Crown Large: 1132.8', 'Gold Crown Small: 768.0'],
		relatedMonsters: [
			'Rajang',
			'Furious Rajang',
			'Twinhead Rajang',
			'Voljang',
			'Lolo Gougarf',
		],
		generation: 'Frontier',
	},
	{
		id: 123,
		name: 'Gougarf',
		link: '/hunter-notes/monsters/overview/lolo-gougarf',
		displayName: 'Lolo Gougarf',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/gougarf',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/lolo_gougarf',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/lolo-gougarf',

		unusedComponent: true,
		type: 'Large',
		ecology: `Social creatures always observed as a pair. The colour difference often seen between them isn't sexual dimorphism as originally thought, but rather simple genetic variation, with the red variety being more common. They fight as a team and can generate magnetic fields.`,
		titles: ['Fighting Beast'],
		class: 'Fanged Beast',
		elements: [],
		ailments: ['Magnetism', 'Stun'],
		weaknesses: ['Water', 'Fire'],
		habitats: ['Gorge', 'Bamboo Forest', "Hunter's Road"],
		sizes: ['Gold Crown Large: 1132.8', 'Gold Crown Small: 768.0'],
		relatedMonsters: [
			'Rajang',
			'Furious Rajang',
			'Twinhead Rajang',
			'Voljang',
			'Ray Gougarf',
		],
		generation: 'Frontier',
	},
	{
		id: 124,
		name: 'Uruki',
		displayName: 'Uruki',
		link: '/hunter-notes/monsters/overview/uruki',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/uruki',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/uruki',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/uruki',

		unusedComponent: true,
		ecology: `Bipedal creatures native to the Flower Field. Though uncommon, research suggests that they are quite peaceful, unless attacked by a  large monster. In such a situation, they've been observed working together to defeat said monster. The Guild has received reports that Uruki will seemingly assist hunters as well.`,
		type: 'Small',
		titles: [],
		class: 'Lynian',
		elements: [],
		ailments: [],
		weaknesses: [],
		habitats: ['Flower Field'],
		sizes: ['Small'],
		relatedMonsters: [],
		generation: 'Frontier',
	},
	{
		id: 125,
		name: 'Forokururu',
		displayName: 'Forokururu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/forokururu',
		link: '/hunter-notes/monsters/overview/forokururu',

		ecology:
			'Majestic Bird Wyverns native to the Flower Field. They possess a highly evolved beak, which allows them to feed from the various flowers in their habitat. Attention should be paid to the color of their wings and tail feathers.',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/forokururu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/forokururu',

		unusedComponent: true,
		type: 'Large',
		titles: ['Flower Phoenix Bird'],
		class: 'Bird Wyvern',
		elements: ['Fire'],
		ailments: [
			'Blind',
			'Poison',
			'Paralysis',
			'Sleep',
			'Stench',
			'Defense Down',
		],
		weaknesses: ['Thunder', 'Ice'],
		habitats: ['Flower Field'],
		sizes: ['Gold Crown Large: 1913.3', 'Gold Crown Small: 1234.4'],
		relatedMonsters: [],
		generation: 'Frontier',
	},
	{
		id: 126,
		name: 'Meraginasu',
		displayName: 'Meraginasu',
		ecology:
			'Previously known only from fossils and believed to be extinct until living specimens were sighted by the Guild. These black and gold Wyverns are seemingly blind and navigate their underground territories through sound.',
		link: '/hunter-notes/monsters/overview/meraginasu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/meraginasu',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/meraginasu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/meraginasu',

		unusedComponent: true,
		type: 'Large',
		titles: ['Black Drill Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Dark'],
		ailments: [],
		weaknesses: ['Light', 'Fire'],
		habitats: ['Tidal Island'],
		sizes: ['Gold Crown Large: 2566.5', 'Gold Crown Small: 1697.8'],
		relatedMonsters: [
			'Espinas',
			'Orange Espinas',
			'White Espinas',
			'Zenith Espinas',
			'Diablos',
			'Black Diablos',

			'Varusaburosu',

			'Monoblos',

			'White Monoblos',
			'Gravios',
			'Black Gravios',
			'Zenith Gravios',
			'Basarios',

			'Gureadomosu',
		],
		generation: 'Frontier',
	},
	{
		id: 127,
		name: 'Diorex',
		displayName: 'Diorex',
		link: '/hunter-notes/monsters/overview/diorex',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/diorex',
		rank: 'G Rank',
		ecology:
			'Despite appearences, these Wyverns are not actually blue, but rather use magnetic organs to attach ores to themselves as armour. Like their cousin the Tigrex they are brutally aggressive predators.',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/diorex',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/diorex',

		unusedComponent: true,
		type: 'Large',
		titles: ['Thunder Roaring Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Thunder'],
		ailments: [],
		weaknesses: ['Dragon', 'Ice'],
		habitats: ['Top of Great Forest', "Hunter's Road"],
		sizes: ['Gold Crown Large: 2151.8', 'Gold Crown Small: 1457.7'],
		relatedMonsters: ['Tigrex', 'Zenith Tigrex'],
		generation: 'Frontier',
	},
	{
		id: 128,
		name: 'Garuba Daora',
		displayName: 'Garuba Daora',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/garuba_daora',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/garuba-daora',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/garuba_daora',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/garuba-daora',

		unusedComponent: true,
		ecology:
			'A shimmering dragon of golden scale and precious crystal, its existance was revealed rather recently. While its natural habitat is currently unknown, research indicates it may be descended from Kushala Daora that ingested gold-bearing minerals over many years.',
		type: 'Large',
		titles: ['Gold Dust Dragon'],
		class: 'Elder Dragon',
		elements: ['Wind'],
		ailments: ['Crystal'],
		weaknesses: ['Thunder'],
		habitats: ['Large Exploration Ship', 'Interception Base', "Hunter's Road"],
		sizes: ['Gold Crown Large: 2050.1', 'Gold Crown Small: 1340.4'],
		relatedMonsters: [
			'Kushala Daora',
			'Rusted Kushala Daora',

			'Rukodiora',
			'Zenith Rukodiora',
			'Rebidiora',
		],
		generation: 'Frontier',
	},
	{
		id: 129,
		name: 'Inagami',
		link: '/hunter-notes/monsters/overview/inagami',

		displayName: 'Inagami',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/inagami',
		ecology:
			'A dignified and powerful dragon with an unmistakable tail. Found in Bamboo forests to the east, it is reported to possess a strange symbiotic relationship with the Bamboo, which it is seemingly able to manipulate at will. It also reportedly produces Sleep-gas.',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/inagami',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/inagami',

		unusedComponent: true,
		type: 'Large',
		titles: ['Elegant Elderly Dragon'],
		class: 'Elder Dragon',
		elements: [],
		ailments: ['Sleep'],
		weaknesses: ['Fire'],
		habitats: ['Bamboo Forest'],
		sizes: ['Gold Crown Large: 2365.5', 'Gold Crown Small: 1513.9'],
		relatedMonsters: ['Zenith Inagami'],
		generation: 'Frontier',
	},
	{
		id: 130,
		name: 'Varusaburosu',
		displayName: 'Varusaburosu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/varusaburosu',
		link: '/hunter-notes/monsters/overview/varusaburosu',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/varusaburosu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/varusaburosu',

		unusedComponent: true,
		ecology: `Only recently being discovered following an attack on Guild researchers, little is known of this Wyvern's biology. It has however been hypothesized that its flames are the result of it consuming a unique type of thermophilic cactus.`,
		type: 'Large',
		titles: ['Flame Horn Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: [],
		weaknesses: ['Sound', 'Water'],
		habitats: ['Battleground'],
		sizes: ['Large'],
		relatedMonsters: [
			'Diablos',
			'Black Diablos',

			'Monoblos',

			'White Monoblos',
			'Gravios',
			'Zenith Gravios',
			'Black Gravios',
			'Basarios',

			'Gureadomosu',
		],
		generation: 'Frontier',
	},
	{
		id: 131,
		name: 'Poborubarumu',
		displayName: 'Poborubarumu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/poborubarumu',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/poborubarumu',
		link: '/hunter-notes/monsters/overview/poborubarumu',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/poborubarumu',

		unusedComponent: true,
		ecology:
			'An enormous Wyvern only recently discovered by the Guild. It was discovered after reports from the Highlands of strange sounds driving hunters to madness. These voracious beasts can emit sounds with odd properties from various organs.',
		type: 'Large',
		titles: ['Creation Sound Wyvern'],
		class: 'Flying Wyvern',
		elements: [], // todo correct?
		ailments: ['Confusion'],
		weaknesses: ['Thunder', 'Fire'],
		habitats: ['Highlands'],
		sizes: ['Large'],
		relatedMonsters: [],
		generation: 'Frontier',
	},
	{
		id: 132,
		name: 'Duremudira',
		displayName: 'Duremudira',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/duremudira',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/duremudira',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/duremudira',
		link: '/hunter-notes/monsters/overview/duremudira',

		unusedComponent: true,
		ecology:
			'Duremudira are very aggressive monsters and will attack any hunters that enter the Sky Corridor. These monsters were left by the Ancient Civilization to guard the Sky Corridor from any intruders that dare enter the tower for its treasures and secrets.',
		type: 'Large',
		titles: ['Emperor Ice Dragon'],
		class: 'Elder Dragon',
		elements: ['Ice'],
		ailments: ['Frostbite', 'Corrupted Poison'],
		weaknesses: ['Dragon', 'Fire'],
		habitats: ['Sky Corridor'],
		sizes: ['Large'],
		relatedMonsters: ['Arrogant Duremudira'],
		generation: 'Frontier',
	},
	{
		id: 139,
		name: 'Gureadomosu',
		displayName: 'Gureadomosu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/gureadomosu',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/gureadomosu',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/gureadomosu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/gureadomosu',

		unusedComponent: true,
		ecology:
			'A newly discovered Wyvern that is speculated to be a more primitive cousin of Gravios. They possess numerous tube-like structures from which they can eject water at deadly speeds. Research on these creatures is ongoing.',
		type: 'Large',
		titles: ['Water Fortress Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Water'],
		ailments: [],
		weaknesses: ['Thunder', 'Fire'],
		habitats: ['Desert', "Hunter's Road"],
		sizes: ['Gold Crown Large: 2603.7', 'Gold Crown Small: 1679.9'],
		relatedMonsters: [
			'Gravios',
			'Black Gravios',
			'Zenith Gravios',
			'Basarios',

			'Diablos',
			'Black Diablos',

			'Varusaburosu',

			'Monoblos',

			'White Monoblos',
		],
		generation: 'Frontier',
	},
	{
		id: 140,
		name: 'Harudomerugu',
		displayName: 'Harudomerugu',
		link: '/hunter-notes/monsters/overview/harudomerugu',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/harudomerugu',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/harudomerugu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/harudomerugu',

		ecology:
			'Often enrobed in a strange liquid metal, which it is seemingly able to control at a whim; this dragon is a curious beast. First hand accounts claim it is highly intelligent, being able to learn and counter a hunters combat techniques with ease.',
		unusedComponent: true,
		type: 'Large',
		titles: ['Silver Controlling Dragon'],
		class: 'Elder Dragon',
		elements: [],
		ailments: [],
		weaknesses: ['Black Flame', 'Dragon'],
		habitats: ['Snowy Mountains', 'Interception Base'],
		sizes: ['Gold Crown Large: 2106.4', 'Gold Crown Small: 1381.6'],
		relatedMonsters: ['Zenith Harudomerugu'],
		generation: 'Frontier',
	},
	{
		id: 141,
		name: 'Toridcless',
		displayName: 'Toridcless',
		link: '/hunter-notes/monsters/overview/toridcless',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/toridcless',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/toridcless',
		ecology:
			'Powerful Bird Wyverns found in the Highlands, they are violently territorial and will attack any intruder with impunity. Possessing unique feathers and scales they can gather sunlight and convert it into deadly electrical attacks.',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/toridcless',

		unusedComponent: true,
		type: 'Large',
		titles: ['Shining Thunder Bird'],
		class: 'Bird Wyvern',
		elements: ['Thunder'],
		ailments: ['Stun', 'Paralysis'],
		weaknesses: ['Water', 'Dragon'],
		habitats: [
			'Gorge',
			'Highlands',
			'Interception Base',
			'Bamboo Forest',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 2326.6', 'Gold Crown Small: 1410.1'],
		relatedMonsters: ['Zenith Toridcless'],
		generation: 'Frontier',
	},
	{
		id: 142,
		name: 'Gasurabazura',
		ecology: `Large Brute Wyverns endemic to White Lake, research shows they were previously semi aquatic, until the lake's waters receeded, forcing them to re-adapt to terrestrial life. They are able to store lagre quantities of poison gained from their prey.`,
		displayName: 'Gasurabazura',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/gasurabazura',
		link: '/hunter-notes/monsters/overview/gasurabazura',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/gasurabazura',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/gasurabazura',

		unusedComponent: true,
		type: 'Large',
		titles: ['Angry Appearance Wyvern'],
		class: 'Brute Wyvern',
		elements: [],
		ailments: ['Poison', 'Stun'],
		weaknesses: ['Thunder', 'Ice'],
		habitats: ['White Lake'],
		sizes: ['Gold Crown Large: 2040.5', 'Gold Crown Small: 1316.5'],
		relatedMonsters: ['Zenith Gasurabazura'],
		generation: 'Frontier',
	},
	{
		id: 143,
		name: 'Kusubami',
		link: '/hunter-notes/monsters/overview/kusubami',

		displayName: 'Kusubami',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/kusubami',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/kusubami',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/kusubami',

		unusedComponent: true,
		ecology:
			'Small Carapaceons native to the White Lake, they normally remain buried beneath the sand, only rising when they detect potential prey. Their tails possess a well developed venom gland, allowing them to easily dispatch prey.',
		type: 'Small',
		titles: [],
		class: 'Carapaceon',
		elements: [],
		ailments: ['Poison'],
		weaknesses: [],
		habitats: ['White Lake'],
		sizes: ['Small'],
		relatedMonsters: ['Akura Vashimu', 'Akura Jebia', 'Zenith Akura Vashimu'],
		generation: 'Frontier',
	},
	{
		id: 144,
		name: 'Yama Kurai',
		displayName: 'Yama Kurai',
		link: '/hunter-notes/monsters/overview/yama-kurai',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/yama_kurai',
		rank: 'G Rank',
		ecology: `An Elder Dragon that floats through the sky and has been sighted in the Highlands. While it seems to share relation with Yama Tsukami, Guild research is still ongoing. It's body is home to a veritable ecosystem of unique and dangerous flora.`,
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/yama_kurai',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/yama-kurai',

		unusedComponent: true,
		type: 'Large',
		titles: ['Floating Peak Dragon'],
		class: 'Elder Dragon',
		elements: [],
		ailments: ['Poison', 'Paralysis', 'Sleep'],
		weaknesses: ['Fire'],
		habitats: ['Highlands'],
		sizes: ['Large'],
		relatedMonsters: ['Yama Tsukami'],
		generation: 'Frontier',
	},
	{
		id: 146,
		name: 'Zinogre',
		displayName: 'Zinogre',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/zinogre',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zinogre',
		link: '/hunter-notes/monsters/overview/zinogre',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zinogre',

		unusedComponent: true,
		ecology:
			'Fanged wyverns whose bodies are streaked with electricity. Sharp claws and strong limbs allow them to thrive in mountainous terrain. During hunts, they gather numerous Thunderbugs to boost their power and enter a supercharged state. They house their Thunderbugs within their dorsal shells.',
		type: 'Large',
		titles: ['Thunder Wolf Wyvern', 'Spark of Blue', 'Lord of Lightning'],
		class: 'Fanged Wyvern',
		elements: ['Thunder'],
		ailments: [],
		weaknesses: ['Ice'],
		habitats: [
			'Forest and Hills',
			'Jungle',
			'Great Forest',

			'Sacred Pinnacle',

			'Sanctuary',

			'Interception Base',
			'Sky Corridor',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 2144.49', 'Gold Crown Small: 1217.4'],
		relatedMonsters: ['Stygian Zinogre', 'Howling Zinogre'],
		generation: 'Third Generation',
	},
	{
		id: 147,
		name: 'Deviljho',
		displayName: 'Deviljho',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/deviljho',
		link: '/hunter-notes/monsters/overview/deviljho',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/deviljho',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/deviljho',
		ecology:
			'The dreaded, nomadic Deviljho have no specific territory of their own. Their muscles swell if provoked, revealing old wounds. Needing to feed constantly due to their extremely high metabolism they can easily hunt nearby animals to extinction. Hunt with extreme caution.',

		unusedComponent: true,
		type: 'Large',
		titles: ['Violent Wyvern'],
		class: 'Brute Wyvern',
		elements: ['Dragon', 'Water'],
		ailments: ['Defense Down'],
		weaknesses: ['Dragon', 'Thunder'],
		habitats: [
			'Forest and Hills',
			'Snowy Mountains',
			'Jungle',
			'Desert',
			'Swamp',
			'Volcano',

			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 4097.8 cm', 'Gold Crown Small: 1803.0 cm'],
		relatedMonsters: [
			'Starving Deviljho',
			'Golden Deviljho',
			'Four Heavenly King Deviljho',

			'Abiorugu',
			'Giaorugu',
			'Zenith Giaorugu',
		],
		generation: 'Third Generation',
	},
	{
		id: 148,
		name: 'Brachydios',
		displayName: 'Brachydios',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/brachydios',
		link: '/hunter-notes/monsters/overview/brachydios',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/brachydios',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/brachydios',

		ecology: `Brute wyverns coated with an explosive green substance. The material is thought to be a unique myxomycete--or slime mold that is primed to explode by the Brachydios's own saliva. Note that these crafty creatures can also deliver powerful foreleg strikes. Fond of volcanic areas.`,
		unusedComponent: true,
		type: 'Large',
		titles: ['Crushing Wyvern'],
		class: 'Brute Wyvern',
		elements: ['Fire'],
		ailments: ['Blast'],
		weaknesses: ['Water', 'Ice'],
		habitats: ['Snowy Mountains', 'Volcano', 'Polar Sea', "Hunter's Road"],
		sizes: ['Gold Crown Large: 1932.69 cm', 'Gold Crown Small: 1339.18 cm'],
		relatedMonsters: [],
		generation: 'Third Generation',
	},
	{
		id: 149,
		name: 'Berserk Raviente',
		displayName: 'Berserk Raviente',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721686109/monster/berserk_raviente.webp',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/berserk_raviente',
		link: '/hunter-notes/monsters/overview/berserk-raviente',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/berserk-raviente',

		unusedComponent: true,
		type: 'Large',
		ecology: `Berserk Ravientes are ancient individuals of Ravientes. Their color is the result of spending many hibernation periods sleeping near underwater volcanoes. These colossal creatures are the most destructive type of Raviente.`,
		titles: ['Great Crag Wyvern'],
		class: 'Unclassified Monster',
		elements: ['Fire'],
		ailments: ['Paralysis', 'Stun'],
		weaknesses: [],
		habitats: ['Solitude Island Depths'],
		sizes: ['45000cm'],
		relatedMonsters: ['Raviente', 'Violent Raviente'],
		generation: 'Frontier',
	},
	{
		id: 150,
		name: 'Toa Tesukatora',
		ecology: `Recently documented by Guild researchers exploring an arctic region, this proud dragon is believed to be an ancestor of Teostra and Lunastra. While much of it's biology is still unknown, it is speculated to be the source of some intense blizzards.`,
		displayName: 'Toa Tesukatora',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/toa_tesukatora',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/toa-tesukatora',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/toa_tesukatora',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/toa-tesukatora',

		unusedComponent: true,
		type: 'Large',
		titles: ['Frozen King Dragon'],
		class: 'Elder Dragon',
		elements: ['Ice'],
		ailments: ['Frostbite'],
		weaknesses: ['Fire', 'Dragon'],
		habitats: ['Snowy Mountains', 'Polar Sea', "Hunter's Road"],
		sizes: ['Gold Crown Large: 2189.1', 'Gold Crown Small: 1401.0'],
		relatedMonsters: ['Lunastra', 'Teostra'],
		generation: 'Frontier',
	},
	{
		id: 151,
		name: 'Barioth',
		displayName: 'Barioth',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/barioth',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/barioth',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/barioth',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/barioth',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'Agile Wyverns that inhabit polar enviroments. They utilize the various spikes lining their wings and tail for easy traversal of icy surfaces. They are skilled predators and will dispatch trapped prey with their large amber tusks.',
		titles: ['Ice Tusk Wyvern', 'Flurry of Frosted Fangs'],
		class: 'Flying Wyvern',
		elements: ['Ice'],
		ailments: ['Snowman'],
		weaknesses: ['Fire', 'Thunder'],
		habitats: ['Polar Sea', 'Snowy Mountains', "Hunter's Road"],
		sizes: ['Gold Crown Large: 2580.91 cm', 'Gold Crown Small: 1888.47 cm'],
		relatedMonsters: ['Nargacuga', 'Blinking Nargacuga'],
		generation: 'Third Generation',
	},
	{
		id: 152,
		name: 'Uragaan',
		displayName: 'Uragaan',
		link: '/hunter-notes/monsters/overview/uragaan',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/uragaan',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/uragaan',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/uragaan',

		unusedComponent: true,
		ecology:
			'Brute wyverns that feed on ore, using their mighty jaws to crush bedrock into powder. They cleverly affix rock and ore to themselves with lava, then spread them about, using vibrations to make them explode. They are also capable of releasing seering hot gases.',
		type: 'Large',
		titles: ['Burst Hammer Wyvern'],
		class: 'Brute Wyvern',
		elements: ['Fire'],
		ailments: ['Sleep'],
		weaknesses: ['Water', 'Dragon'],
		habitats: ['Volcano', "Hunter's Road"],
		sizes: ['Gold Crown Large: 3344.48 cm', 'Gold Crown Small: 410.06 cm'],
		relatedMonsters: [],
		generation: 'Third Generation',
	},
	{
		id: 153,
		name: 'Stygian Zinogre',
		displayName: 'Stygian Zinogre',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/stygian_zinogre',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/stygian-zinogre',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/stygian_zinogre',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/stygian-zinogre',

		unusedComponent: true,
		ecology:
			'A subspecies of Zinogre with a jet-black body. It gathers Dracophage bugs which eat Dragonfell Berries and uses their Dragon Element energy to dramatically boost its power. Perhaps this is why it can survive in such varied enviroments as the Snowy Mountains and ancient towers.',
		type: 'Large',
		titles: ['Hell Wolf Wyvern', 'Emperor of Hell'],
		class: 'Fanged Wyvern',
		elements: ['Dragon'],
		ailments: ['Dracophage Erosion'],
		weaknesses: ['Thunder'],
		habitats: ['Snowy Mountains', 'Tower', 'Tower Nest Hole', "Hunter's Road"],
		sizes: ['Gold Crown Large: 1887.00 cm', 'Gold Crown Small: 1397.18 cm'],
		relatedMonsters: ['Zinogre', 'Howling Zinogre'],
		generation: 'Third Generation',
	},
	{
		id: 154,
		name: 'Guanzorumu',
		displayName: 'Guanzorumu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/guanzorumu',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/guanzorumu',
		link: '/hunter-notes/monsters/overview/guanzorumu',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/guanzorumu',

		unusedComponent: true,
		ecology: `Spoken of in ancient texts as the " Dragon of Conquest", this imposing creature has been sighted at the Cloud Viewing Fortress. Never without an entourage of Egyurasu It's claws spawn tremors and its breath immolates everything before it.`,
		type: 'Large',
		titles: ['Emperor Conqueror Dragon'],
		class: 'Elder Dragon',
		elements: ['Fire', 'Dragon'],
		ailments: [],
		weaknesses: ['Water', 'Dragon'],
		habitats: ['Cloud Viewing Fortress'],
		sizes: ['Large'],
		relatedMonsters: ['Ruling Guanzorumu'],
		generation: 'Frontier',
	},
	{
		id: 155,
		name: 'Starving Deviljho',
		displayName: 'Starving Deviljho',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/starving_deviljho',
		rank: 'Musou 1',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/starving_deviljho',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/savage-deviljho',
		link: '/hunter-notes/monsters/overview/starving-deviljho',

		unusedComponent: true,
		type: 'Large',
		ecology:
			'A Deviljho that is even more brutal and aggressive than its normal counterpart, owing to its constant starvation keeping it in a permanent maddened frenzy. It will indiscriminately attack anything on sight no matter its size or strength, and will attempt to depopulate entire ecosystems to feed its hunger.',
		titles: ['Terrifying Violent Wyvern'],
		class: 'Brute Wyvern',
		elements: ['Dragon', 'Water'],
		ailments: ['Defense Down'],
		weaknesses: ['Dragon', 'Thunder'],
		habitats: ['Great Arena', 'Volcano', 'Desert'],
		sizes: ['Gold Crown Large: 4097.8 cm', 'Gold Crown Small: 1803.0 cm'],
		relatedMonsters: [
			'Deviljho',
			'Abiorugu',
			'Giaorugu',
			'Starving Deviljho',
			'Four Heavenly King Deviljho',
			'Zenith Giaorugu',
			'Golden Deviljho',
		],
		generation: 'Third Generation',
	},
	{
		id: 158,
		name: 'Voljang',
		displayName: 'Voljang',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/voljang',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/voljang',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/voljang',
		link: '/hunter-notes/monsters/overview/voljang',

		unusedComponent: true,
		ecology:
			'Brutal creatures recently found in certain volcanic areas. Utilizing flint-like growths on their arms, they are able to wield vicious, flaming punches. Research indicates these beasts are closely related to Rajang, but their exact relationship is still unknown.',
		type: 'Large',
		titles: ['Crimson Lotus Lion'],
		class: 'Fanged Beast',
		elements: ['Fire'],
		ailments: [],
		weaknesses: ['Ice', 'Water'],
		habitats: ['Battleground', "Hunter's Road"],
		sizes: ['Gold Crown Large: 1532.2', 'Gold Crown Small: 1276.8'],
		relatedMonsters: ['Rajang', 'Furious Rajang', 'Twinhead Rajang', 'Gougarf'],
		generation: 'Frontier',
	},
	{
		id: 159,
		name: 'Nargacuga',
		displayName: 'Nargacuga',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/nargacuga',
		rank: 'G Rank',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/nargacuga',
		link: '/hunter-notes/monsters/overview/nargacuga',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/nargacuga',

		unusedComponent: true,
		ecology:
			'Flying Wyverns that have evolved to live in densely wooded areas. These sly beasts stalk their prey from the shadows with ferocious speed. Their massive tails are extremely deadly and can kill small monsters with a single strike.',
		type: 'Large',
		titles: ['Swift Wyvern', 'Red Glare in the Darkness', 'Pouncing Shadow'],
		class: 'Flying Wyvern',
		elements: ['Water'],
		ailments: ['Bleed', 'Poison'],
		weaknesses: ['Thunder', 'Fire'],
		habitats: [
			'Forest and Hills',

			'Jungle',
			'Swamp',
			'Great Forest',
			'Tower 3',

			'Sanctuary',

			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 2355.13', 'Gold Crown Small: 1602.19'],
		relatedMonsters: ['Blinking Nargacuga', 'Barioth'],
		generation: 'Second Generation',
	},
	{
		id: 160,
		name: 'Keoaruboru',
		displayName: 'Keoaruboru',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/keoaruboru',
		link: '/hunter-notes/monsters/overview/keoaruboru',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/keoaruboru',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/keoaruboru',

		unusedComponent: true,
		type: 'Large',
		ecology: `Enormous and incredibly violent the immense stature and magma like heat produced by this Elder Dragon have earned it the moniker of "living volcano". The Guild fears the incredible destruction this beast could wreak, should it destroy the Inteceptor's Base.`,
		titles: ['Blazing Peak Dragon'],
		class: 'Elder Dragon',
		elements: ['Fire'],
		ailments: [],
		weaknesses: ['Dragon', 'Ice'],
		habitats: ['Interception Base'],
		sizes: ['Giant'],
		relatedMonsters: [],
		generation: 'Frontier',
	},
	{
		id: 161,
		name: 'Zenaserisu',
		displayName: 'Zenaserisu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/zenaserisu',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenaserisu',
		link: '/hunter-notes/monsters/overview/zenaserisu',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenaserisu',

		unusedComponent: true,
		ecology:
			'Wyverns native to the Painted Falls, they are characterized by their sharp black scales and long whip-like wing appendages. In addition to water based attacks, their claws are capable of cutting stone. Parts of their bodies turn red enraged.',
		type: 'Large',
		titles: ['Cracking Water Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Water'],
		ailments: [],
		weaknesses: ['Thunder'],
		habitats: ['Painted Falls'],
		sizes: ['Gold Crown Large: 1495.7', 'Gold Crown Small: 1246.4'],
		relatedMonsters: ['Berukyurosu', 'Doragyurosu', 'Zenith Doragyurosu'],
		generation: 'Frontier',
	},
	{
		id: 162,
		name: 'Gore Magala',
		displayName: 'Gore Magala',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/gore_magala',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/gore_magala',
		link: '/hunter-notes/monsters/overview/gore-magala',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/gore-magala',

		unusedComponent: true,
		ecology:
			'A curious, and unnerving monster that, when threatened, scatters pollen like scales that heighten its own senses while causing detrimental effects to any other creatures that inhale them. Elusive and mysterious, much about their biology remains unknown.',
		type: 'Large',
		titles: ['Black Eclipse Wyvern', 'Stalking Shadow', 'Dark Eclipse'],
		class: '???',
		elements: [],
		ailments: ['Frenzy Virus'],
		weaknesses: ['Fire', 'Thunder', 'Dragon', 'Ice'],
		habitats: ['Sanctuary', 'Tower', 'Tower 3', 'Painted Falls'],
		sizes: ['Gold Crown Large: 2201.12', 'Gold Crown Small: 1549.59'],
		relatedMonsters: ['Shagaru Magala'],
		generation: 'Fourth Generation',
	},
	{
		id: 163,
		name: 'Blinking Nargacuga',
		displayName: 'Blinking Nargacuga',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/blinking_nargacuga',
		link: '/hunter-notes/monsters/overview/blinking-nargacuga',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/blinking_nargacuga',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/blinking-nargacuga',

		unusedComponent: true,
		type: 'Large',
		ecology: `Blinking Nargacuga is extremely aggressive. It will fight with unrivaled, swift ferocity, barely giving hunters any time to catch their breath. It is prone to combine attacks in quick succession in order to hit hunters as much as possible in short time windows.`,
		titles: ['Swift Wyvern'],
		class: 'Flying Wyvern',
		elements: [],
		ailments: ['Poison'],
		weaknesses: ['Thunder'],
		habitats: ['Top of Great Forest', 'Historical Site'],
		sizes: ['Large'],
		relatedMonsters: ['Nargacuga', 'Barioth'],
		generation: 'Frontier',
	},
	{
		id: 164,
		name: 'Shagaru Magala',
		displayName: 'Shagaru Magala',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/shagaru_magala',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/shagaru_magala',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/shagaru-magala',

		link: '/hunter-notes/monsters/overview/shagaru-magala',

		unusedComponent: true,
		ecology: `The distinctive radiant light of the mature Gore Magala has has been seen in the Sanctuary of Heaven's Mount. Some believe Shagaru Magala was the "foul wind that withered a mountain," a calamity spoken of in ancient texts.`,
		type: 'Large',
		titles: ['Heavenly Revolving Dragon', "Heaven's Wheel", 'Bright Eclipse'],
		class: 'Elder Dragon',
		elements: [],
		ailments: ['Frenzy Virus'],
		weaknesses: ['Dragon', 'Fire', 'Ice'],
		habitats: ['Sanctuary', 'Tower 3'],
		sizes: ['Gold Crown Small: 1564.73', 'Gold Crown Large: 2187.06'],
		relatedMonsters: ['Gore Magala'],
		generation: 'Fourth Generation',
	},
	{
		id: 165,
		name: 'Amatsu',
		displayName: 'Amatsu',
		link: '/hunter-notes/monsters/overview/amatsu',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721703436/monster/amatsu.webp',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/amatsu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/amatsu',

		ecology: `A legendary elder dragon spotted on Sacred Pinnacle. An avatar of storms in the folklore of a certain village, Amatsu's appearance is accompanied by furious cyclones and horrific storms. Its fearsome power is said to outscale that of natural disasters.`,
		unusedComponent: true,
		type: 'Large',
		titles: [
			'Storm Dragon',
			"Heaven's Catastrophe",
			'Looming Calamity',
			'Dragon God',
			'Wind Dragon God',
		],
		class: 'Elder Dragon',
		elements: ['Water', 'Dragon'],
		ailments: [],
		weaknesses: ['Dragon', 'Fire'],
		habitats: ['Sacred Pinnacle'],
		sizes: ['3133.8cm'],
		relatedMonsters: [],
		generation: 'Third Generation',
	},
	{
		id: 166,
		name: 'Elzelion',
		displayName: 'Elzelion',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/elzelion',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/elzelion',
		link: '/hunter-notes/monsters/overview/elzelion',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/elzelion',

		unusedComponent: true,
		ecology: `Discovered after assaulting a Guild expedition exploring an ancient Tower, it is also known as the "Burning Ice" dragon, due to it's unique physiology. While it possesses control over ice and fire, it segregates control over each element to one side of it's body. A fascinating creature.`,
		type: 'Large',
		titles: ['Burning Zero Dragon'],
		class: 'Elder Dragon',
		elements: ['Fire', 'Ice', 'Burning Zero'],
		ailments: [],
		weaknesses: ['Fire', 'Ice', 'Burning Zero'],
		habitats: ['Tower'],
		sizes: ['Large'],
		relatedMonsters: ['Burning Freezing Elzelion'],
		generation: 'Frontier',
	},
	{
		id: 167,
		name: 'Arrogant Duremudira',
		displayName: 'Arrogant Duremudira',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/arrogant_duremudira',
		link: '/hunter-notes/monsters/overview/arrogant-duremudira',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/arrogant_duremudira',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/arrogant-duremudira2',

		unusedComponent: true,
		ecology: `Arrogant Duremudira, much like the standard one, is incredibly aggressive, attacking anything that enters the Sky Corridor immediately on sight. Possesses even greater speed and tenacity than its normal counterpart.`,
		type: 'Large',
		titles: ['Guardian of the Sky Corridor'],
		class: 'Elder Dragon',
		elements: ['Thunder'],
		ailments: ['Corrupted Poison'],
		weaknesses: ['Dragon', 'Fire'],
		habitats: ['Sky Corridor'],
		sizes: ['Large'],
		relatedMonsters: ['Duremudira'],
		generation: 'Frontier',
	},
	{
		id: 169,
		name: 'Seregios',
		displayName: 'Seregios',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/seregios',
		link: '/hunter-notes/monsters/overview/seregios',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/seregios',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/seregios',

		unusedComponent: true,
		ecology:
			'Invasive Wyverns native to distant lands, they are marked by lustrus, golden scales as sharp as blades. They are extremely agile and can launch their razor sharp scales at prey before shredding it with their talons.',
		type: 'Large',
		titles: ['Thousand Blade Wyvern', 'Slicing Scales'],
		class: 'Flying Wyvern',
		elements: [],
		ailments: ['Bleed'],
		weaknesses: ['Thunder', 'Ice'],
		habitats: ['Desert', 'Sanctuary', 'Painted Falls'],
		sizes: ['Gold Crown Large: 2246.53 cm', 'Gold Crown Small: 1520.73 cm'],
		relatedMonsters: [],
		generation: 'Fourth Generation',
	},
	{
		id: 170,
		name: 'Bogabadorumu',
		displayName: 'Bogabadorumu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685613/monster/zenith_bogabadorumu.gif',
		rank: 'Zenith★4',
		link: '/hunter-notes/monsters/overview/bogabadorumu',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_bogabadorumu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-bogabadorumu',

		unusedComponent: true,
		ecology:
			'Strange Wyverns found near areas with fast moving water. While rather sluggish they utilize explosive mist generated from specialized organs to kill potential prey. Despite their lack of agility, they are stubborn, vicious predators.',
		type: 'Large',
		titles: ['Explosive Mist Wyvern'],
		class: 'Flying Wyvern',
		elements: [],
		ailments: ['Blast'],
		weaknesses: ['Ice', 'Water'],
		habitats: ['White Lake', 'Painted Falls'],
		sizes: ['Large'],
		relatedMonsters: ['Bombardier Bogabadorumu'],
		generation: 'Frontier',
	},
	{
		id: 172,
		name: 'Bombardier Bogabadorumu',
		displayName: 'Bombardier Bogabadorumu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/bombardier_bogabadorumu',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/bombardier-bogabadorumu',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/bombardier_bogabadorumu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/bombardier-bogabadorumu',

		unusedComponent: true,
		type: 'Large',
		ecology: `Bombardier Bogabadorumu retains the aggressive behavior of the normal ones, attacking anything in sight.`,
		titles: ['Explosive Mist Wyvern'],
		class: 'Flying Wyvern',
		elements: [],
		ailments: ['Blast'],
		weaknesses: ['Ice', 'Water'],
		habitats: ['Historical Site'],
		sizes: ['Large'],
		relatedMonsters: ['Bogabadorumu'],
		generation: 'Frontier',
	},
	{
		id: 174,
		name: 'Sparkling Zerureusu',
		displayName: 'Sparkling Zerureusu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/sparkling_zerureusu',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/sparkling-zerureusu',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/sparkling_zerureusu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/sparkling-zerureusu',

		unusedComponent: true,
		type: 'Large',
		ecology: `Much like the standard Zerureusu, Sparkling Zerureusu are quite hostile. They seem to be less reliant on the use of their crystal producing abilities compared to the standard versions, replacing it with crimson-colored forcefields and explosions.`,
		titles: ['Bright Field Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Light'],
		ailments: [],
		weaknesses: ['Dark', 'Dragon'],
		habitats: ['Historical Site'],
		sizes: [],
		relatedMonsters: [
			'Zerureusu',
			'Rathalos',
			'Zenith Rathalos',
			'Azure Rathalos',
			'Silver Rathalos',
			'Rathian',
			'Pink Rathian',
			'Gold Rathian',
		],
		generation: 'Frontier',
	},
	{
		id: 175,
		name: 'PSO2 Rappy',
		displayName: 'PSO2 Rappy',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/pso2_rappy',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/pso2_rappy',
		link: '/hunter-notes/monsters/overview/pso2-rappy',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/pso2-rappy',
		class: 'Lynian',
		generation: 'Frontier',
		unusedComponent: true,
		ecology: `The Rappy is a large, fluffy bird-like creature present in another dimension. Appears to be the representative of that dimension as a whole.`,
		type: 'Small',
	},
	{
		id: 176,
		name: 'King Shakalaka',
		displayName: 'King Shakalaka',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/king_shakalaka',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/king_shakalaka',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/king-shakalaka',
		link: '/hunter-notes/monsters/overview/king-shakalaka',

		unusedComponent: true,
		ecology: `A crown-like object sits upon this leader of the Shakalaka's brow. Many a skilled hunter have been frustrated by the minions it attracts to its side. But be wary, for it's one powerful foe. When infuriated, it will unleash an unimaginably strong attack.`,
		type: 'Large',
		titles: ['The Strange Masked Leader'],
		class: 'Lynian',
		elements: ['Fire'],
		ailments: ['Sleep'],
		weaknesses: ['Ice'],
		habitats: ['Forest and Hills', 'Great Forest'],
		sizes: [],
		relatedMonsters: ['Shakalaka'],
		generation: 'Second Generation',
	},
	{
		id: 83,
		name: 'Akura Vashimu',
		displayName: 'Zenith Akura Vashimu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685435/monster/zenith_akura_vashimu.gif',
		link: '/hunter-notes/monsters/overview/zenith-akura-vashimu',
		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_akura_vashimu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-akura-vashimu',

		unusedComponent: true,
		ecology: `Zenith Akura Vashimu has become more persistent in hunting down prey. Once it has a prey item in its pincers, Zenith Akura Vashimu is known to constantly stab the prey item with one of them until the creature dies.`,
		type: 'Large',
		titles: [],
		class: 'Carapaceon',
		elements: [],
		ailments: ['Crystal', 'Extreme Paralysis'],
		weaknesses: [],
		habitats: [
			'Swamp',
			'Desert',
			'White Lake',
			"Hunter's Road",
			'Interception Base',
		],
		sizes: ['Large'],
		relatedMonsters: ['Akura Vashimu', 'Akura Jebia', 'Kusubami'],
		generation: 'Frontier',
	},
	{
		id: 109,
		name: 'Anorupatisu',
		displayName: 'Zenith Anorupatisu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685571/monster/zenith_anorupatisu.gif',
		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_anorupatisu',
		link: '/hunter-notes/monsters/overview/zenith-anorupatisu',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-anorupatisu',

		unusedComponent: true,
		ecology: `Zenith Anorupatisu behave relatively the same as normal individuals but overall more aggressive. Resembles a torpedo.`,
		type: 'Large',
		titles: ['Violent Saw Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Ice', 'Dragon'],
		ailments: ['Extreme Iceblight'],
		weaknesses: ['Thunder', 'Fire'],
		habitats: ['Polar Sea'],
		sizes: ['Gold Crown Small: 1481.0', 'Gold Crown Large: 2155.7'],
		relatedMonsters: ['Anorupatisu'],
		generation: 'Frontier',
	},
	{
		id: 121,
		name: 'Baruragaru',
		displayName: 'Zenith Baruragaru',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685601/monster/zenith_baruragaru.gif',
		link: '/hunter-notes/monsters/overview/zenith-baruragaru',
		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_baruragaru',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-baruragaru',

		unusedComponent: true,
		ecology: `Evolved Baruragaru that are larger and intimidating than their counterpart. Their head developed to become huge with a pair of thin plate-like appendages growing on the sides of their lower jaws. They even grew large and small teeth on their face while the fins on their head grew large. Its tongue developed to have protrusions overlap each other making them thicker.`,
		type: 'Large',
		titles: ['Blood Eating Wyvern'],
		class: 'Leviathan',
		elements: ['Water'],
		ailments: ['Extreme Waterblight', 'Bleed'],
		weaknesses: ['Fire', 'Thunder'],
		habitats: ['Swamp'],
		sizes: ['Large'],
		relatedMonsters: ['Baruragaru'],
		generation: 'Frontier',
	},
	{
		id: 51,
		name: 'Blangonga',
		displayName: 'Zenith Blangonga',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685607/monster/zenith_blangonga.gif',
		link: '/hunter-notes/monsters/overview/zenith-blangonga',
		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_blangonga',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-blangonga',

		ecology: `Zenith Blangonga are kings amongst leaders even commanding normal Blangonga as if they were Blango. They retain the hyper aggressive behavior of normal individuals only amplified, trying to take down any foe as quickly as possible to protect themselves and their troops.`,
		unusedComponent: true,
		type: 'Large',
		titles: ['Snow Lion'],
		class: 'Fanged Beast',
		elements: ['Ice'],
		ailments: ['Extreme Iceblight'],
		weaknesses: ['Fire'],
		habitats: [
			'Snowy Mountains',
			'Polar Sea',
			'Interception Base',
			"Hunter's Road",
		],
		sizes: ['Large'],
		relatedMonsters: [
			'Blango',
			'Blangonga',
			'Rajang',
			'Furious Rajang',
			'Twinhead Rajang',
			'Conga',
			'Congalala',
		],
		generation: 'Frontier',
	},
	{
		id: 48,
		name: 'Daimyo Hermitaur',
		displayName: 'Zenith Daimyo Hermitaur',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685623/monster/zenith_daimyo_hermitaur.gif',
		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_daimyo_hermitaur',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-daimyo-hermitaur',
		link: '/hunter-notes/monsters/overview/zenith-daimyo-hermitaur',

		unusedComponent: true,
		ecology: `Zenith Daimyo Hermitaur is usually calm when left undisturbed, but will quickly become aggressive if attacked by a foe. Strangely, Zenith Daimyo Hermitaur have only been reported living in the White Lake.`,
		type: 'Large',
		titles: ['Shield Crab'],
		class: 'Carapaceon',
		elements: ['Water'],
		ailments: ['Extreme Waterblight'],
		weaknesses: ['Thunder', 'Ice'],
		habitats: [
			'White Lake',
			'Interception Base',
			"Hunter's Road",
			'Painted Falls',
		],
		sizes: ['Large'],
		relatedMonsters: [
			'Hermitaur',
			'Daimyo Hermitaur',
			'Hermitaur',
			'Ceanataur',
			'Shogun Ceanataur',
		],
		generation: 'Frontier',
	},
	{
		id: 95,
		name: 'Doragyurosu',
		displayName: 'Zenith Doragyurosu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685618/monster/zenith_doragyurosu.gif',
		rank: 'Zenith★4',
		link: '/hunter-notes/monsters/overview/zenith-doragyurosu',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_doragyurosu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-doragyurosu',

		unusedComponent: true,
		ecology: `Zenith Doragyurosu is much more aggressive than Doragyurosu, so great care should be taken while hunting one. Zenith Doragyurosu are quite careless with their powerful beam attacks. If hunters manage to go underneath them, when they shoot their powerful beam attacks, they will land on the ground to sink in the huge chunk of melting ground leaving them open for hunters to attack them.`,
		type: 'Large',
		titles: [],
		class: 'Flying Wyvern',
		elements: ['Dragon'],
		ailments: ['Extreme Dragonblight'],
		weaknesses: ['Fire', 'Water'],
		habitats: ['Top of Great Forest'],
		sizes: ['Large'],
		relatedMonsters: ['Doragyurosu', 'Berukyurosu', 'Zenaserisu'],
		generation: 'Frontier',
	},
	{
		id: 80,
		name: 'Espinas',
		displayName: 'Zenith Espinas',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685628/monster/zenith_espinas.gif',
		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_espinas',
		link: '/hunter-notes/monsters/overview/zenith-espinas',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-espinas',

		unusedComponent: true,
		ecology: `Like normal Espinas, Zenith Espinas are fairly docile until awakened. When awakened, Zenith Espinas are known for violently flying in the air and raining globs of poison around them for defense. Once they land, Zenith Espinas will attack and try to eliminate the threat. Occasionally, Zenith Espinas have been seen wandering side by side with other Espinas.`,
		type: 'Large',
		titles: ['Thorny Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Extreme Poison', 'Paralysis'],
		weaknesses: ['Ice'],
		habitats: [
			'Great Forest',
			'Flower Field',
			'Interception Base',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 2360.1', 'Gold Crown Small: 1238.6'],
		relatedMonsters: [
			'Espinas',
			'Orange Espinas',
			'White Espinas',
			'Meraginasu',
			'Gravios',
			'Black Gravios',
			'Zenith Gravios',
			'Basarios',
			'Gureadomosu',
			'Diablos',
			'Black Diablos',
			'Varusaburosu',
			'Monoblos',
			'White Monoblos',
		],
		generation: 'Frontier',
	},
	{
		id: 142,
		name: 'Gasurabazura',
		displayName: 'Zenith Gasurabazura',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685633/monster/zenith_gasurabazura.gif',
		rank: 'Zenith★4',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_gasurabazura',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-gasurabazura',
		link: '/hunter-notes/monsters/overview/zenith-gasurabazura',

		unusedComponent: true,
		ecology: `A stronger, more powerful counterpart of Gasurabazura. They are reported to feint attacks in order to catch hunters off-guard. It is said that when enraged, their arms grow to incredible sizes, destroying everything in sight. Their poison is known to be one of the most potent in the world.`,
		type: 'Large',
		titles: ['Angry Appearance Wyvern'],
		class: 'Brute Wyvern',
		elements: [],
		ailments: ['Extreme Poison', 'Stun'],
		weaknesses: ['Thunder', 'Ice'],
		habitats: ['White Lake'],
		sizes: ['Large'],
		relatedMonsters: ['Gasurabazura'],
		generation: 'Frontier',
	},
	{
		id: 112,
		name: 'Giaorugu',
		displayName: 'Zenith Giaorugu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685669/monster/zenith_giaorugu.gif',

		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_giaorugu',
		link: '/hunter-notes/monsters/overview/zenith-giaorugu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-giaorugu',

		unusedComponent: true,
		ecology: `Like its normal counterpart, Zenith Giaorugu can only be found at the Polar Sea, where its ice tail attacks depend on the frozen ground. However, it can also be encountered in Road. Similar to Glavenus, Zenith Giaorugu would stay in its current spot, hold its tail up in the air sideways, and then unleash tail spin attacks on hunters. It can also make a combo attack with the tail.`,
		type: 'Large',
		titles: ['Ice Ferocious Wyvern'],
		class: 'Brute Wyvern',
		elements: ['Ice'],
		ailments: ['Extreme Iceblight', 'Snowman', 'Defense Down'],
		weaknesses: ['Fire'],
		habitats: ['Polar Sea', "Hunter's Road"],
		sizes: ['Gold Crown Large: 2007.6cm', 'Gold Crown Small: 1448.1cm'],
		relatedMonsters: [
			'Giaorugu',
			'Abiorugu',
			'Deviljho',
			'Starving Deviljho',
			'Golden Deviljho',
			'Four Heavenly King Deviljho',
		],
		generation: 'Frontier',
	},
	{
		id: 17,
		name: 'Gravios',
		displayName: 'Zenith Gravios',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685658/monster/zenith_gravios.gif',

		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_gravios',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-gravios',
		link: '/hunter-notes/monsters/overview/zenith-gravios',

		unusedComponent: true,
		ecology: `Zenith Gravios are known to inhabit the Volcano, and can be found in the Battleground. It can use it's tail for swings and explosion-causing slams, the later of which it can use to propel itself towards a foe.`,
		type: 'Large',
		titles: ['Armor Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Extreme Fireblight'],
		weaknesses: ['Water'],
		habitats: ['Volcano', 'Battleground'],
		sizes: ['Large'],
		relatedMonsters: [
			'Gravios',
			'Black Diablos',
			'Monoblos',
			'White Monoblos',
			'Varusaburosu',
			'Black Gravios',
			'Basarios',
			'Gureadomosu',
			'Espinas',
			'Zenith Espinas',
			'Orange Espinas',
			'White Espinas',
			'Meraginasu',
		],
		generation: 'Frontier',
	},
	{
		id: 140,
		name: 'Harudomerugu',
		displayName: 'Zenith Harudomerugu',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685664/monster/zenith_harudomerugu.gif',
		link: '/hunter-notes/monsters/overview/zenith-harudomerugu',
		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_harudomerugu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-harudomerugu',

		unusedComponent: true,
		ecology: `Beneath the silver armor Zenith Harudomerugu appear mostly identical to standard Harudomerugu individuals. The biggest exception is the head. The upper half has an overall red tint, the organ in the center has grown larger, with an extra horn extending from it straight forward, while the existing horns at the back of the head have also grown larger, with the central one having two smaller extensions growing from its sides. Zenith Harudomerugu have been sighted atop the Tower and have been reported attacking the Interception Base.`,
		type: 'Large',
		titles: ['Silver Controlling Dragon'],
		class: 'Elder Dragon',
		elements: [],
		ailments: [],
		weaknesses: ['Dragon', 'Fire'],
		habitats: ['Tower 3', 'Interception Base'],
		sizes: [],
		relatedMonsters: ['Harudomerugu'],
		generation: 'Frontier',
	},
	{
		id: 74,
		name: 'Hypnocatrice',
		displayName: 'Zenith Hypnocatrice',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685678/monster/zenith_hypnoc.gif',
		link: '/hunter-notes/monsters/overview/zenith-hypnocatrice',
		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_hypnoc',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-hypnoc',

		unusedComponent: true,
		ecology: `The Zenith Hypnocatrice is a variant of a Hypnocatrice and is an older individual who has undergone a few changes. The Zenith Hypnocatrice still has dark brown feathers, although now the feathers are gray near the tips- most prominently the wings. Most noticeably the Zenith Hypnocatrice's beak has changed. It is now larger and thicker, as well as curved. It has a spike on its forehead, just above its beak. It is rumored that they are capable of producing a lullaby so enticing that they could put even the most strong-willed hunter to sleep.`,
		type: 'Large',
		titles: ['Sleep Bird'],
		class: 'Bird Wyvern',
		elements: [],
		ailments: ['Extreme Sleep'],
		weaknesses: ['Fire'],
		habitats: [
			'Forest and Hills',
			'Great Forest',
			'Bamboo Forest',
			'Interception Base',
			"Hunter's Road",
		],
		sizes: ['Large'],
		relatedMonsters: [
			'Hypnocatrice',
			'Bright Hypnoc',
			'Silver Hypnoc',
			'Farunokku',
		],
		generation: 'Frontier',
	},
	{
		id: 110,
		name: 'Hyujikiki',
		displayName: 'Zenith Hyujikiki',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685716/monster/zenith_hyujikiki.gif',
		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_hyujikiki',
		link: '/hunter-notes/monsters/overview/zenith-hyujikiki',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-hyujikiki',

		ecology: `Zenith Hyujikiki share much of the same abilities as the normal ones, but the most noteworthy change is the heavier semi-metallic needles. Due to the changes to become like this the twisters no longer carry the needles, and Zenith Hyujikiki cannot use its venom anymore. To make up for this the needles Zenith Hyujikiki throws are much sharper piercing and inducing severe bleeding onto those struck by them, it also makes use of a few new attacks such as a roll which leaves clumps of needles in its wake, although some attacks normal Hyujikiki has are absent. Notably the needles will be stuck in the hunters that are struck by, or walk over the clumps of them.`,
		unusedComponent: true,
		type: 'Large',
		titles: ['Needle Wyvern'],
		class: 'Flying Wyvern',
		elements: [],
		ailments: ['Paralysis', 'Bleed'],
		weaknesses: ['Fire'],
		habitats: ['Highlands', "Hunter's Road"],
		sizes: ['Gold Crown Large: 1834.1', 'Gold Crown Small: 1183.3'],
		relatedMonsters: ['Hyujikiki'],
		generation: 'Frontier',
	},
	{
		id: 129,
		name: 'Inagami',
		displayName: 'Zenith Inagami',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685754/monster/zenith_inagami.gif',
		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_inagami',
		link: '/hunter-notes/monsters/overview/zenith-inagami',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-inagami',

		unusedComponent: true,
		ecology: `An evolved Inagami with a unique appearance. The tufts of orange fur have a slight white tint to them, while also generally being longer. Zenith Inagami's legs and tail are covered in the same special substances that normal individuals use to cover their wounds. The developed claws are a white tipped, deep indigo color, while - together with the monster's ears - also appearing to be longer.`,
		type: 'Large',
		titles: ['Elegant Elderly Dragon'],
		class: 'Elder Dragon',
		elements: [],
		ailments: ['Extreme Sleep'],
		weaknesses: ['Fire'],
		habitats: ['Bamboo Forest'],
		sizes: ['Gold Crown Large: ?', 'Gold Crown Small: ?'],
		relatedMonsters: ['Inagami'],
		generation: 'Frontier',
	},
	{
		id: 15,
		name: 'Khezu',
		displayName: 'Zenith Khezu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685761/monster/zenith_khezu.gif',
		link: '/hunter-notes/monsters/overview/zenith-khezu',
		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_khezu',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-khezu',

		unusedComponent: true,
		ecology: `Evolved Khezu that are unique and more terrifying than their counterparts. Zenith Khezu's faces develop throughout the years to become an odd shape, and have crest-like structures on the top. A single ridge of knobby bumps is present along the spine.`,
		type: 'Large',
		titles: ['Charging Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Thunder'],
		ailments: ['Extreme Thunderblight'],
		weaknesses: ['Fire'],
		habitats: [
			'Snowy Mountains',
			'Swamp',
			"Hunter's Road",
			'Interception Base',
		],
		sizes: ['Large'],
		relatedMonsters: ['Khezu', 'Red Khezu'],
		generation: 'Frontier',
	},
	{
		id: 111,
		name: 'Midogaron',
		displayName: 'Zenith Midogaron',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685771/monster/zenith_midogaron.gif',
		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_midogaron',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-midogaron',

		link: '/hunter-notes/monsters/overview/zenith-midogaron',

		unusedComponent: true,
		ecology: `An evolved Midogaron that are slightly larger and fierce than their counterpart. The mohawk-like mane that extended from their heads through tails has further developed to have longer violet hairs instead of an orange short ones. The quills on their heads grew longer with a pinkish color, while the rest of them on their necks through tails grew slightly larger with the same color as the ones on their heads. Zenith Midogaron's fur on its face and legs has the same violet color as the developed extended mane. Their claws heavy developed to have longer violet ones instead orange short ones with violet flame-like spikes on the back of their legs. Zenith Midogaron's tusks have also grown a bit longer.`,
		type: 'Large',
		titles: ['Explosion Wolf'],
		class: 'Fanged Beast',
		elements: ['Fire'],
		ailments: ['Extreme Fireblight'],
		weaknesses: ['Ice', 'Water'],
		habitats: ['Volcano', 'Battleground'],
		sizes: ['Gold Crown Large: 5670.0', 'Gold Crown Small: 1080.0'],
		relatedMonsters: ['Midogaron', 'Kamu Orugaron', 'Nono Orugaron'],
		generation: 'Frontier',
	},
	{
		id: 21,
		name: 'Plesioth',
		displayName: 'Zenith Plesioth',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685799/monster/zenith_plesioth.gif',
		rank: 'Zenith★4',

		link: '/hunter-notes/monsters/overview/zenith-plesioth',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_plesioth',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-plesioth',
		ecology: `Evolved Plesioth that are larger and more intimidating than their counterparts. Their heads in addition to having lighter scales have also heavily developed, now sporting a large, light blue tipped head fin with several light blue hooked spikes lining each side of it. Additionally, they have developed five long and jagged tusks located on the side of their lower jaws. Lastly, they have short and spiked appendages instead of normal fins on the side of their heads.`,

		unusedComponent: true,
		type: 'Large',
		titles: ['Water Wyvern'],
		class: 'Piscine Wyvern',
		elements: ['Water'],
		ailments: ['Extreme Waterblight'],
		weaknesses: ['Thunder', 'Fire'],
		habitats: ['Desert'],
		sizes: ['Large'],
		relatedMonsters: [
			'Plesioth',
			'Green Plesioth',
			'Cephalos',
			'Cephadrome',
			'Lavasioth',
			'Red Lavasioth',
		],
		generation: 'Frontier',
	},
	{
		id: 11,
		name: 'Rathalos',
		displayName: 'Zenith Rathalos',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685792/monster/zenith_rathalos.gif',
		rank: 'Zenith★4',
		link: '/hunter-notes/monsters/overview/zenith-rathalos',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_rathalos',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-rathalos',

		unusedComponent: true,
		ecology: `Zenith Rathalos is far more dangerous than others of its kind. From this Rathalos constantly trying to annihilate enemies with its immense firepower, few hunters are actually allowed to hunt down this rarely seen individual. Their manipulation of fire is so powerful that anyone near the monster's presence can feel the scorching heat.`,
		type: 'Large',
		titles: ['Fire Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Extreme Fireblight', 'Poison'],
		weaknesses: ['Water', 'Ice'],
		habitats: ['Volcano', 'Interception Base', "Hunter's Road"],
		sizes: ['Gold Crown Large: 2411.5', 'Gold Crown Small: 1303.5'],
		relatedMonsters: [
			'Rathalos',
			'Azure Rathalos',
			'Silver Rathalos',
			'Zerureusu',
			'Rathian',
			'Pink Rathian',
			'Gold Rathian',
		],
		generation: 'Frontier',
	},
	{
		id: 99,
		name: 'Rukodiora',
		displayName: 'Zenith Rukodiora',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685979/monster/zenith_rukodiora.gif',
		link: '/hunter-notes/monsters/overview/zenith-rukodiora',
		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_rukodiora',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-rukodiora',

		unusedComponent: true,
		ecology: `Unlike Rukodiora, Zenith Rukodiora are capable of lifting large boulders surrounding them with their advance magnetic fields while flying. When spotting hunters, Zenith Rukodiora will land on the ground to trap the hunters beside them with the boulders. After a while, They will let out a powerful roar that hurt the hunters and break the boulders trapping them. They are capable of producing a fountain of dragon element with energy so condensed it can break even the most durable of armors.`,
		type: 'Large',
		titles: ['Magnetic Dragon'],
		class: 'Elder Dragon',
		elements: ['Dragon'],
		ailments: ['Magnetism', 'Extreme Dragonblight'],
		weaknesses: ['Dragon', 'Ice'],
		habitats: ['Interception Base', 'Desert', "Hunter's Road"],
		sizes: ['Large'],
		relatedMonsters: [
			'Rukodiora',
			'Rebidiora',
			'Kushala Daora',
			'Rusted Kushala Daora',
			'Garuba Daora',
		],
		generation: 'Frontier',
	},
	{
		id: 103,
		name: 'Taikun Zamuza',
		displayName: 'Zenith Taikun Zamuza',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685985/monster/zenith_taikun_zamuza.gif',
		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_taikun_zamuza',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-taikun-zamuza',
		link: '/hunter-notes/monsters/overview/zenith-taikun-zamuza',

		unusedComponent: true,
		ecology: `Zenith Taikun Zamuza are much more prone to attack compared to their kin, lacking the environmental armor they don't seem to try and hide as much, if at all. In the unarmored state, the spikes on the legs and claws are noticeably absent, with blue bulb-like electric organs present in their place. The claws are also quite a bit thicker, longer, and overall bigger compared to that of a standard unarmored Taikun Zamuza.`,
		type: 'Large',
		titles: ['Multi-Shell Crab'],
		class: 'Carapaceon',
		elements: ['Thunder'],
		ailments: ['Extreme Thunderblight'],
		weaknesses: ['Ice', 'Fire', 'Water'],
		habitats: ['Tidal Island'],
		sizes: [],
		relatedMonsters: ['Taikun Zamuza'],
		generation: 'Frontier',
	},
	{
		id: 76,
		name: 'Tigrex',
		displayName: 'Zenith Tigrex',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685991/monster/zenith_tigrex.gif',
		link: '/hunter-notes/monsters/overview/zenith-tigrex',

		rank: 'Zenith★4',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_tigrex',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-tigrex',

		ecology: `Zenith Tigrex might very well be the most brutal and vicious Flying Wyverns of all time. When attacking a hunter or prey, they focus on heavily wounding their target. If successful, the prey will start to bleed and Zenith Tigrex will, much like sharks, go into a feeding frenzy and become even more dangerous and relentless than they already are.`,
		unusedComponent: true,
		type: 'Large',
		titles: ['Roaring Wyvern'],
		class: 'Flying Wyvern',
		elements: [],
		ailments: ['Bleed'],
		weaknesses: ['Thunder', 'Dragon'],
		habitats: [
			'Desert',
			'Snowy Mountains',
			'Polar Sea',
			'Interception Base',
			"Hunter's Road",
		],
		sizes: ['Gold Crown Large: 2464.1', 'Gold Crown Small: 1388.2'],
		relatedMonsters: ['Tigrex', 'Diorex'],
		generation: 'Frontier',
	},
	{
		id: 141,
		name: 'Toridcless',
		displayName: 'Zenith Toridcless',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721685526/monster/zenith_toridcless.gif',
		rank: 'Zenith★4',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/zenith_toridcless',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/zenith-toridcless',
		link: '/hunter-notes/monsters/overview/zenith-toridcless',

		unusedComponent: true,
		type: 'Large',
		ecology: `Evolved Toridcless that are larger and more elegant than their counterpart. Their wings heavily developed to have longer spikes as well as advance sky blue feathers on their wings. The two long blue feathers on their heads further developed to be longer and an orange whitish horn-like feather grew in the center of their heads. Also, the feathers on their back hind legs grew longer. They are capable of producing a beam of light that can annihilate anything in its path, even if only making contact for a fraction of a second.`,
		titles: ['Shining Thunder Bird'],
		class: 'Bird Wyvern',
		elements: ['Thunder'],
		ailments: ['Extreme Thunderblight', 'Stun', 'Paralysis'],
		weaknesses: ['Water', 'Dragon'],
		habitats: ['Highlands', 'Painted Falls', "Hunter's Road"],
		sizes: ['Gold Crown Large: 2326.6', 'Gold Crown Small: 1410.1'],
		relatedMonsters: ['Toridcless'],
		generation: 'Frontier',
	},
	{
		id: 2,
		name: 'Fatalis',
		displayName: 'Conquest Fatalis',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/conquest_fatalis',
		rank: 'G Rank',
		link: '/hunter-notes/monsters/overview/conquest-fatalis',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/conquest_fatalis',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/conquest-fatalis',

		unusedComponent: true,
		ecology: `Apart from a few key differences from its standard counterpart, it has six horns instead of the Fatalis's four horns, and the chest now is glowing faint blue, which is possibly a new element never found before. It utilizes new and unique attacks, one among them said to be capable of ravaging a whole kingdom instantly.`,
		type: 'Large',
		titles: ['Black Flame'],
		class: 'Elder Dragon',
		elements: ['Black Flame'],
		ailments: ['Sleep', 'Stench', 'Poison', 'Paralysis'],
		weaknesses: ['Dragon', 'Fire'],
		habitats: ['Castle Schrade'],
		sizes: ['4110.6cm'],
		relatedMonsters: [
			'Crimson Fatalis',
			'White Fatalis',
			'Conquest Crimson Fatalis',
			'Road White Fatalis',
			'Fatalis',
		],
		generation: 'Frontier',
	},
	{
		id: 116,
		name: 'Shantien',
		displayName: 'Conquest Shantien',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/conquest_shantien',

		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/shantien',
		link: '/hunter-notes/monsters/overview/conquest-shantien',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/shantien',

		unusedComponent: true,
		ecology: `Shantien have been sighted flying around far above in the skies, often over oceans or around volcanic areas. Usually the only way to get anywhere near them is with a Large Exploration Ship. Shantien is enormously powerful when fully enraged and will attack with reckless abandon. This can also be its undoing, as attempting to use some of its strongest attacks while severely injured may cause them to implode inside its body, accomplishing its own demise.`,
		type: 'Large',
		titles: ['Heavenly Flying Dragon'],
		class: 'Elder Dragon',
		elements: ['Tenshou'],
		ailments: ['Paralysis'],
		weaknesses: ['Ice', 'Dragon'],
		habitats: ['Large Exploration Ship'],
		sizes: ['Gold Crown Large: 3625.5', 'Gold Crown Small: 2358.1'],
		relatedMonsters: ['Shantien'],
		generation: 'Frontier',
	},
	{
		id: 36,
		name: 'Crimson Fatalis',
		displayName: 'Conquest Crimson Fatalis',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/conquest_crimson_fatalis',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/conquest_crimson_fatalis',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/conquest-crimson-fatalis',
		link: '/hunter-notes/monsters/overview/conquest-crimson-fatalis',

		unusedComponent: true,
		type: 'Large',
		ecology: `A monster with unparalleled hatred for humanity, it is an inhabitant of the Deep Crater. It is the only known monster to use the new Crimson Demon Element.`,
		titles: ['Crimson Demon'],
		class: 'Elder Dragon',
		elements: ['Crimson Demon'],
		ailments: [],
		weaknesses: ['Dragon', 'Ice'],
		habitats: ['Deep Crater'],
		sizes: ['4110.6cm'],
		relatedMonsters: [
			'Fatalis',
			'White Fatalis',
			'Crimson Fatalis',
			'Road White Fatalis',
			'Conquest Fatalis',
		],
		generation: 'Frontier',
	},
	{
		id: 107,
		name: 'Disufiroa',
		displayName: 'Shiten Disufiroa',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/shiten_disufiroa',

		rank: 'Upper Shiten',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/shiten_disufiroa',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/disufiroa',
		link: '/hunter-notes/monsters/overview/shiten-disufiroa',

		unusedComponent: true,
		ecology: `According to one account from a lucky hunter, when it freezes itself at the end of the fight, instead of dying, it will break out and gain a new appearance which its chest protrusions become purple in addition to the blue stripes on its underbelly and the webbing of its wings. Its red scales also turn black in color and its attacks become much fiercer, as well as some new devastating large attacks utilizing its elements.`,
		type: 'Large',
		titles: ['Frozen Seraphim Dragon'],
		class: 'Elder Dragon',
		elements: ['Okiko'],
		ailments: [],
		weaknesses: ['Fire', 'Water', 'Thunder', 'Dragon'],
		habitats: ["World's End"],
		sizes: ['Gold Crown Large: 2057.0', 'Gold Crown Small: 1316.5'],
		relatedMonsters: [],
		generation: 'Frontier',
	},
	{
		id: 100,
		name: 'UNKNOWN',
		displayName: 'Shiten UNKNOWN',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721687221/monster/shiten_unknown.gif',
		link: '/hunter-notes/monsters/overview/shiten-unknown',
		rank: 'Upper Shiten',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/shiten_unknown',

		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/shiten-unknown',

		unusedComponent: true, // TODO fix component
		ecology: `For those lucky enough to witness it, it is said that upon reaching unthinkable rage, it creates an area wide black cloud of gas that leaves only its eyes completely visible, during this time the Unknown will be quickly moving all around the hunters, occasionally taking to the air and flying towards them. Afterwards, it will stop moving, inhale all the gas towards its mouth, before releasing it all at once in a huge shockwave, it will then finish with a roar in the typical Rathian fashion.`,
		type: 'Large',
		titles: ['Black Flying Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Fire'],
		ailments: ['Poison', 'Defense Down'],
		weaknesses: ['Water', 'Thunder', 'Ice', 'Dragon'],
		habitats: [
			'Forest and Hills',
			'Jungle',
			'Desert',
			'Swamp',
			'Great Forest',
			'Tower',
			'Tower 3',
			'Gorge',
		],
		sizes: ['Gold Crown Large: 2303.8'],
		relatedMonsters: ['UNKNOWN'],
		generation: 'Frontier',
	},
	{
		id: 166,
		name: 'Elzelion',
		displayName: 'Burning Freezing Elzelion',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/burning_freezing_elzelion',
		rank: 'Musou 1',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/burning_freezing_elzelion',
		link: '/hunter-notes/monsters/overview/burning-freezing-elzelion',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/burning-freezing-elzelion',

		unusedComponent: true,
		ecology: `Burning Freezing Elzelion greatly resembles the standard Elzelion, but has some color changes to set itself apart. Its teeth, claws and small spines are golden, along with some gold streaks being present on the head, and certain much of each of its horns are also the color of gold. Its scales are also notably much darker, being dark grey as opposed to silver. It is the only known monster able to fully master more than one element.`,
		type: 'Large',
		titles: ['Burning Zero Dragon'],
		class: 'Elder Dragon',
		elements: ['Fire', 'Ice', 'Burning Zero'],
		ailments: ['Extreme Fireblight', 'Extreme Iceblight'],
		weaknesses: ['Fire', 'Ice', 'Burning Zero'],
		habitats: ['Historical Site', 'Tower'],
		sizes: ['Large'],
		relatedMonsters: ['Elzelion'],
		generation: 'Frontier',
	},
	{
		id: 146,
		name: 'Zinogre',
		displayName: 'Howling Zinogre',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/howling_zinogre',
		rank: 'Musou 1',
		link: '/hunter-notes/monsters/overview/howling-zinogre',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/howling_zinogre',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/howling-zinogre2',

		unusedComponent: true,
		ecology: `Similarly to Thunderlord Zinogre, Howling Zinoge also has an "Ultra Charged State" it can enter by using a certain move a few times. In this state the electrical aura is even larger, with green and blue colors mixed in with the white, along with a swarm of Fulgur Bugs flying around it.`,
		type: 'Large',
		titles: ['Thunder Wolf Wyvern'],
		class: 'Fanged Wyvern',
		elements: ['Thunder'],
		ailments: ['Paralysis'],
		weaknesses: ['Ice'],
		habitats: ['Top of Great Forest', 'Historical Site'],
		sizes: ['Large'],
		relatedMonsters: ['Zinogre', 'Stygian Zinogre'],
		generation: 'Frontier',
	},
	{
		id: 89,
		name: 'Pariapuria',
		displayName: 'Supremacy Pariapuria',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721616853/monster/thirsty_pariapuria.webp',
		link: '/hunter-notes/monsters/overview/supremacy-pariapuria',
		rank: 'Musou 1',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/thirsty_pariapuria',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/supremacy-pariapuria',

		unusedComponent: true,
		ecology: `Supremacy Pariapuria's appearance has changed considerably compared to its standard counterpart; it has a glowing red eye trail similar to an enraged Nargacuga's, a mouth slathered in what could very well be blood, and scars all over its body. Bloodstains cover its body, most notably on its front claws. It also has tinges of purple on various places of its body.`,
		type: 'Large',
		titles: ['Swallowing Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Water'],
		ailments: ['Poison', 'Paralysis', 'Sleep', 'Stench', 'Stun'],
		weaknesses: ['Fire', 'Thunder'],
		habitats: ['Gorge', 'Highlands', 'Tidal Island', 'Sky Corridor'],
		sizes: ['Gold Crown Large: 2672.5', 'Gold Crown Small: 1406.6'],
		relatedMonsters: ['Pariapuria'],
		generation: 'Frontier',
	},
	{
		id: 95,
		name: 'Doragyurosu',
		displayName: 'Supremacy Doragyurosu',
		link: '/hunter-notes/monsters/overview/supremacy-doragyurosu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/supremacy_doragyurosu',
		rank: 'Musou 1',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/supremacy_doragyurosu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/supremacy-doragyurosu',

		unusedComponent: true,
		ecology: `This overpowering monster is one of the most deadly monsters the guild has found, with completely unbelievable power. So much power that the reason for parts of it turning red in rage is from it burning its own skin. Appearance changes are burnt red tail spikes, claws, feet and horns. Green wing webbing, dark end of its beak and bright yellow eyes. In rage, it becomes burnt and overflowing with Dragon Element from head to tail and its eyes turn red.`,
		type: 'Large',
		titles: ['Dark Thunder Wyvern'],
		class: 'Flying Wyvern',
		elements: ['Dragon'],
		ailments: ['Paralysis', 'Stun'],
		weaknesses: ['Fire', 'Water'],
		habitats: [
			'Snowy Mountains',
			'Highlands',
			'Top of Great Forest',
			"Hunter's Road",
		],
		sizes: ['Silver Crown Large: 1882.5', 'Gold Crown Small: 1173.6'],
		relatedMonsters: ['Zenith Doragyurosu', 'Berukyurosu', 'Zenaserisu'],
		generation: 'Frontier',
	},
	{
		id: 65,
		name: 'Teostra',
		displayName: 'Supremacy Teostra',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/supremacy_teostra',
		rank: 'Musou 1',
		link: '/hunter-notes/monsters/overview/supremacy-teostra',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/supremacy_teostra',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/supremacy-teostra',

		ecology: `A more fiery counterpart of the standard Teostra, the Supremacy Teostra has an aura of unrelenting heat. If not careful, Supremacy Teostra can end the battle with a few powerful fire explosions. Capable of producing a huge fire tornado when enraged.`,
		unusedComponent: true,
		type: 'Large',
		titles: ['Flame King Dragon', 'Emperor of Flame', 'Ruler of the Flame'],
		class: 'Elder Dragon',
		elements: ['Dragon', 'Fire'],
		ailments: ['Stun'],
		weaknesses: ['Dragon', 'Water', 'Ice'],
		habitats: ['Tower'],
		sizes: ['Gold Crown Large: 2610.0', 'Gold Crown Small: 1479.0'],
		relatedMonsters: ['Lunastra', 'Toa Tesukatora'],
		generation: 'Frontier',
	},
	{
		id: 106,
		name: 'Odibatorasu',
		displayName: 'Odibatorasu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/odibatorasu',
		link: '/hunter-notes/monsters/overview/supremacy-odibatorasu',
		rank: 'Musou 1',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/supremacy_odibatorasu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/supremacy-odibatorasu',

		unusedComponent: true,
		ecology: `Relatively docile when undisturbed, Odibatorasu spend a vast majority of their time burrowing and searching for food. But due to their large size and strength they can cause massive and powerful sandstorms that are capable of destroying entire villages or towns. Where as Akantor is called the "Black God" and Ukanlos the "White God", the Odibatorasu is known as the "Sand God".`,
		type: 'Large',
		titles: ['Cannon Rock Wyvern'],
		class: 'Flying Wyvern',
		elements: [],
		ailments: [],
		weaknesses: ['Dragon', 'Thunder'],
		habitats: ['Desert'],
		sizes: ['Very Large'],
		relatedMonsters: ['Akantor'],
		generation: 'Frontier',
	},
	{
		id: 155,
		name: 'Starving Deviljho',
		displayName: 'Golden Deviljho',

		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/golden_deviljho',
		rank: 'Musou 2',
		link: '/hunter-notes/monsters/overview/golden-deviljho',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/golden_deviljho',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/golden-deviljho',

		unusedComponent: true,
		type: 'Large',
		ecology: `In its normal state, it behaves the same as Savage Deviljho. When enraged however, its attacks are infused with Dragon element. Unlike Deviljho or Savage Deviljho, Starving Deviljho can shoot three balls of Dragon energy that explode upon impact. When Starving Deviljho does its stomp attack during rage mode, the stomp will create a burst of Dragon energy around the impact, sending hunters flying. It can throw three boulders at once when not enraged. When enraged however, it will throw a giant boulder instead.`,
		titles: ['Violent Wyvern'],
		class: 'Brute Wyvern',
		elements: ['Dragon'],
		ailments: ['Defense Down'],
		weaknesses: ['Thunder', 'Dragon'],
		habitats: ['Historical Site', 'Competition Arena'],
		sizes: [],
		relatedMonsters: [
			'Deviljho',
			'Four Heavenly King Deviljho',
			'Abiorugu',
			'Giaorugu',
			'Zenith Giaorugu',
			'Starving Deviljho',
		],
		generation: 'Frontier',
	},
	{
		id: 53,
		name: 'Rajang',
		displayName: 'Furious Rajang',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/furious_rajang',

		rank: 'Musou 1',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/hc_rajang', // TODO
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/furious-rajang',
		link: '/hunter-notes/monsters/overview/furious-rajang',

		unusedComponent: true,
		ecology: `Furious Rajang is a standard Rajang that has grown extremely powerful, and has lost its tail either by it falling off naturally or by tearing it off itself, allowing it to fully harness its abilities. Furious Rajang's appearance resembles that of an enraged Rajang by default. Its Rage mode shows that its fur stands up and it is visibly electrified by an electric aura.`,
		type: 'Large',
		titles: ['Gold Lion', 'Super Simian'],
		class: 'Fanged Beast',
		elements: ['Thunder'],
		ailments: ['Bleed'],
		weaknesses: ['Ice'],
		habitats: ['Jungle', 'Volcano', 'Tower 3', 'Sacred Pinnacle', 'Sanctuary'],
		sizes: ['Gold Crown Large: 1188.18 cm', 'Gold Crown Small: 869.40 cm'],
		relatedMonsters: [
			'Rajang',
			'Voljang',
			'Blango',
			'Blangonga',
			'Zenith Blangonga',
			'Conga',
			'Congalala',
			'Gougarf',
			'Twinhead Rajang',
		],
		generation: 'Second Generation',
	},
	{
		id: 154,
		name: 'Guanzorumu',
		displayName: 'Ruling Guanzorumu',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/ruling_guanzorumu',

		rank: 'Musou 1',
		link: '/hunter-notes/monsters/overview/ruling-guanzorumu',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/ruling_guanzorumu',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/ruling-guanzorumu',

		unusedComponent: true,
		ecology: `Ruling Guanzorumu, much like his relative, is extremely aggressive and will not hesitate to use it's Golden Flame to scorch the hunter. Instead of using fire and dragon seperately, it combines them into a golden flame. The Egyurasu are also capable of breathing this Golden Flame.`,
		type: 'Large',
		titles: ['Emperor Conqueror Dragon'],
		class: 'Elder Dragon',
		elements: ['Fire', 'Dragon'],
		ailments: [],
		weaknesses: ['Water', 'Dragon'],
		habitats: ['Cloud Viewing Fortress'],
		sizes: ['Large'],
		relatedMonsters: ['Guanzorumu'],
		generation: 'Frontier',
	},
	{
		id: 113,
		name: 'Mi Ru',
		displayName: 'Shifting Mi Ru',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/v1721616679/monster/shifting_mi_ru.webp',
		rank: 'Musou 1',
		link: '/hunter-notes/monsters/overview/shifting-mi-ru',

		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/shifting_mi_ru',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/shifting-mi-ru',

		unusedComponent: true,
		ecology: `Shifting Mi Ru has much more control over its various forms, and thus stays in each form much longer than its standard counterpart. Each form is also significantly stronger, and its abilities far surpass those of a regular Mi Ru.`,
		type: 'Large',
		titles: [],
		class: 'Unclassified Monster',
		elements: ['Fire'],
		ailments: ['Crystal', 'Stun'],
		weaknesses: ['Fire', 'Water', 'Thunder', 'Ice', 'Dragon'],
		habitats: ['Tower Nest Hole'],
		sizes: ['Large'],
		relatedMonsters: ['Mi Ru', 'Dyuragaua'],
		generation: 'Frontier',
	},
	{
		id: 53,
		name: 'Rajang',
		displayName: 'Twinhead Rajang',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/twinhead_rajang',
		rank: 'Twinhead 1',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/hc_rajang',

		link: '/hunter-notes/monsters/overview/twinhead-rajang',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/hc-rajang',

		unusedComponent: true,
		type: 'Large',
		ecology: `A Rajang who is capable of fiercer attacks including one where it raises its arms and creates a large electrical sphere that Rajang will leap into the air and send towards the ground when fully-charged, it slowly descends to the ground and causes a large electrical explosion upon impact. It should be mentioned that finding a Phantom Rajang really is rare and is a low chance to find when choosing to fight a Rajang. This Rajang has blue eyes and very long hair on its back with a golden aura when enraged.`,
		titles: ['Gold Lion', 'Super Simian'],
		class: 'Fanged Beast',
		elements: ['Thunder'],
		ailments: [],
		weaknesses: ['Ice'],
		habitats: ['Jungle', 'Volcano', 'Tower 3', 'Arena'],
		sizes: ['Gold Crown Large: 1188.18 cm', 'Gold Crown Small: 869.40 cm'],
		relatedMonsters: [
			'Rajang',
			'Voljang',
			'Blango',
			'Blangonga',
			'Zenith Blangonga',
			'Conga',
			'Congalala',
			'Gougarf',
			'Furious Rajang',
		],
		generation: 'Frontier',
	},
	{
		id: 71,
		name: 'White Fatalis', // TODO
		displayName: 'Road White Fatalis',
		icon: 'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/road_white_fatalis',
		rank: 'G Rank',
		render:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/road_white_fatalis',
		fullRender:
			'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/monster/render/full/white-fatalis', // TODO
		link: '/hunter-notes/monsters/overview/road-white-fatalis',

		// todo?

		unusedComponent: true,
		ecology: `This version of White Fatalis is exclusive to the Hunting Road, only appearing every tenth stage. Many of its attacks are with a mixed element called Emperor's Roar, but it can also create area-wide tremors and tremendous wind gusts to damage foes, rivaling that of a Zenith species. After some time during an intense battle, White Fatalis' spikes and horns will glow from blue to red.

		Throughout the battle, G-Rank White Fatalis will occasionally fire a powerful breath attack into the sky, causing beams of light to rain down upon the players in the area. Contact with this attack will cause the hunter to be vaporized. The only way to avoid this attack is by sheltering underneath the White Fatalis itself.`,
		type: 'Large',
		titles: ['Ancestral Dragon'],
		class: 'Elder Dragon',
		elements: ['Thunder', 'Dragon', "Emperor's Roar"],
		ailments: [],
		weaknesses: ['Dragon', 'Fire'],
		habitats: ["Hunter's Road"],
		sizes: ['4119.2 cm'],
		relatedMonsters: [
			'Fatalis',
			'Crimson Fatalis',
			'Conquest Crimson Fatalis',
			'White Fatalis',
			'Conquest Fatalis',
		],
		generation: 'Frontier',
	},
];

export function getUniqueMonsters() {
	const names: string[] = [];
	const result: FrontierMonsterInfo[] = [];
	monsterInfo.forEach((element) => {
		if (!names.find((e) => element.displayName === e)) {
			if (!unlistedMonsterNames.find((e) => e === element.displayName)) {
				names.push(element.displayName);
				result.push(element);
			}
		}
	});

	return result;
}

export function getMonsterByPathName(pathName: string) {
	return monsterInfo.find((e) => e.link === pathName);
}

export function getMonster(name: FrontierMonsterName, rank: string) {
	for (const monster of monsterInfo) {
		if (
			monster.rank.toLowerCase().includes(rank.toLowerCase()) &&
			monster.name.toLowerCase() === name.toLowerCase()
		) {
			return monster;
		}
	}

	for (const monster of monsterInfo) {
		if (monster.name.toLowerCase() === name.toLowerCase()) {
			return monster;
		}
	}

	return monsterInfo[0];
}

export function getMonsterIcon(displayName: string) {
	const icon = monsterInfo[0].icon;

	const found = monsterInfo.find((w) => w.displayName === displayName);
	if (!found) {
		return icon;
	}

	return found.icon;
}
