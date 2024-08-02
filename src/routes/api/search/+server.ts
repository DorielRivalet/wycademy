import { json } from '@sveltejs/kit';
import type { FrontierMonsterInfo } from '$lib/client/modules/frontier/types';
import { getUniqueMonsters } from '$lib/client/modules/frontier/monsters';
import type { SearchItem } from '$lib/search';

export const prerender = true;

type PossibleArrays = FrontierMonsterInfo;

// TODO should this be here or not?
const pageInfo: SearchItem[] = [
	{
		title: 'Advanced Search',
		slug: '/tools/search',
		content: 'Advanced Search: items, weapons, gear, monsters, and much more.',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Tools and Utilities',
		slug: '/tools',
		content: 'Tools and Utilities hub page',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Tower Weapon Simulator',
		slug: '/tools/simulator/tower-weapon',
		content: `A customisable weapon made from materials found by playing through the Sky Corridor Sky Corridor.

You can customize weapon attributes such as Sharpness, Raw, Elemental, Status, Shelling Type, Shot Type, etc. They are comparable to Lv50 G Rank weapons when fully upgraded. You can insert Tower Decorations, which gives skills without using slots, making it a powerful weapon when built correctly. You cannot reverse most of the attribute upgrades.

Light versions of weapons have two sigils slots and a single decoration slot, while Dark versions gives you a single sigil slot and two decoration slots.

Tower Sigils are used to grant Affinity, Status, Elemental, Zenith Skills or Weapon Abilities. You can only have as many of these properties as you have Sigil slots and you can't have two of the same type (for example, two Elemental, Status or Affinity sigils does not stack.)

Tower Decorations grant your weapon a skill. For example, if you have a Tower Decoration for  Expert+5, then it gives you that skill when you slot it into a weapon and equip it. You can have a maximum of two skills on a weapon.

In order to remove a Tower Decoration, you need to buy a  Twr Removal Solution.

The rest of the Tower Weapon materials are available at the Road Shop Road Shop. Alternatively, you can replace them directly at the cost of losing the previously slotted decoration. A  Pulsating Liquid lets you adjust the properties of Tower Hunting Horns, Bows, Bowguns and Gunlances.

Tower Weapons can be crafted by talking to the Cat wearing a backpack in the Blacksmith Blacksmith.

The Blue series of the tower weapons have 3 Tower Sigil slots. They have high enough stats to surpass all weapons (except Evolution, certain Premium weapons and Road). They require Zenith materials to craft, but they do not have the Zenith Partbreaker effect. Zenith Sigils affect any skills granted (including Exotics, Hybrids and from Tower Decorations).`,
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Icons Preview',
		slug: '/tools/generator/icon',
		content:
			'You can find the image for the monster backgrounds in our repository.',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Thumbnail Generator',
		slug: '/tools/generator/thumbnail',
		content: `Here you can download the thumbnail generated below, with the resulting size being 1280x720 pixels, perfect for things such as YouTube thumbnails. Additionally, for text, vector and raster images you can drag and drop them in order to change their position in the thumbnail, as an alternative to the number inputs.`,
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Monsters Overview',
		slug: '/hunter-notes/monsters/overview',
		content:
			'The full list of monsters and their attributes, ecology, hitzone values and more.',
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	// 	{
	// 		title: 'Arena',
	// 		slug: '/arena',
	// 		content: `Welcome to Wycademy's Arena! Here you can calculate various game statistics, such as your total damage, by selecting the gear and weapon values. You can, for example:

	// Select a weapon type such as  Long Sword
	// Calculate  Gunlance Shell and Wyvernfire damage.
	// Calculate  Ice Age damage.
	// Compare your attack values against Blinking Nargacuga Blinking Nargacuga or Zenith Rathalos Zenith Rathalos defense rate.
	// View element damage.
	// And much more!
	// Additionally, you can view motion values animations, graphs of armor skills such as  Flash Conversion, and the formulas for your total damage.`,
	// 		id: 0,
	// 		hex: '0x00',
	// 		category: 'Tool',
	// 	},
	{
		title: 'Damage Calculator',
		slug: '/tools/calculator/damage',
		content: `To load your gear from the game:

Load the overlay.
Go into a quest and open overlay settings.
Go to Hunter's Notes tab, right-click your guild card and select "Copy stats for Wycademy's Damage Calculator".
Paste them here.`,
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Weapon Motion Values',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Shared Motion Values',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Formulas',
		slug: '/tools/calculator/damage',
		content:
			'Below are the formulas for the above damage calculator. Your current inputs values are reflected below each formula.',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Internal True Raw',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Attack A',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Attack B',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Multipliers',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Flat Additions',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Internal Fire',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Internal Water',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Internal Thunder',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Internal Ice',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Internal Dragon',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Internal Status',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Internal Affinity',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Total Affinity',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Drug Knowledge Total True Raw',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Critical Multiplier',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Internal Attack',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Other Multipliers',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Status Assault Total',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Monster Total Defense',
		slug: '/tools/calculator/damage',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Tool',
	}, // TODO missing sections
	{
		title: 'Ice Age',
		slug: '/tools/calculator/ice-age',
		content: `Upon hitting a monster (can be dead), the hunter becomes enveloped in an icy aura, which inflicts damage on all nearby monsters while providing extra skills. This aura progresses through three stages as you deal more hits to a monster. Additionally, it bestows  Stamina Recovery Up and  Razor Sharp to all hunters within its range, with the wielder also gaining  Winter General. Damage occurs in fixed intervals of one second rather than gradually over time.

Typically, damage output ranges between 800 to 1600 per minute, contingent on the level, surpassing the poison output for most G Rank monsters. Within a group of four hunters equipped with  Ice Age, the damage stacks and thus escalates from 800-1600 (1p) to 3200-6400 (4p).

Ice Age's attack power only comes from SR, sigils, weapon base attack and G Rank armor bonus. The following buffs are ignored: items (e.g Seeds, Hunter Powertalon, etc.), meals (e.g. bento, guild food), skills (e.g. Adrenaline, Solid Determination). Buffs that affect weapon base attack like Drug Knowledge does count.

Ice Age's required hits can be reached faster with  Fencing+2.`,
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Critical Conversion / Flash Conversion',
		slug: '/tools/calculator/crit-conversion',
		content: `Adds 30% affinity and converts any excess affinity past 100% into extra true raw.

Critical Conversion Up only uses the base affinity of your weapon (natural affinity). Sigils, Skills, SR Skills and the +5-10% from having above blue sharpness do not count towards the increase. In game, the sharpness bonus is always displayed, so deduct 10% from most weapons for getting the correct value.

The zenith skill does not need you to have over 100% affinity for it to take effect.`,
		id: 0,
		hex: '0x00',
		category: 'Tool',
	},
	{
		title: 'Critical Distance',
		slug: '/hunter-notes/weapons/critical-distance',
		content: `Critical Distance is indicated by the shot expanding fully and creating a circle indicator.

 Heavy Bowgun has a much larger impact animation while in the first half of critical distance on standard shots making it easier to see when you are properly spaced. This adds an extra 0.3x multiplier to damage in that zone (e.g. 2.0 in first half of Normal Shot range, 2.3x with an Origin or Zenith Piece and G Rank Weapon, etc.).

 Holding down the aim button/key will show a rough indication of Critical Distance and hits within critical distance will do a large flash while those outside of it will do a small flash.`,
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Weapon Multipliers',
		slug: '/hunter-notes/weapons/overview#weapon-multipliers',
		content: 'Weapon bloat multipliers.',
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Active Feature',
		slug: '/hunter-notes/weapons/active-feature',
		content:
			'The Active Feature system is a daily effect to weapon types. These effects last from 12 PM to 12 PM the next day, at which time a new weapon type will be chosen. You can see up to one day in advance by looking behind the main Active Feature bar at the top of your screen while in Mezeporta Mezeporta.',
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Tower Weapons Overview',
		slug: '/hunter-notes/weapons/tower',
		content:
			'A customisable weapon made from materials found by playing through the Sky Corridor. You can customize weapon attributes such as Sharpness, Raw, Elemental, Status, Shelling Type, Shot Type, etc. They are comparable to Lv50 G Rank weapons when fully upgraded. You can insert Tower Decorations, which gives skills without using slots, making it a powerful weapon when built correctly. You cannot reverse most of the attribute upgrades.',
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Sharpness',
		slug: '/hunter-notes/weapons/overview#sharpness',
		content: 'Melee weapon sharpness multipliers.',
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Guild Poogie',
		slug: '/hunter-notes/locations/guild-hall#guild-poogie',
		content: `Guild Poogies, found in the Guild Hall Guild Hall, can grant bonuses upon being successfully fed (indicated by them jumping up and down in a white flash), a Guild can have three different Poogie Outfit that each grant a different skill when fed successfully. The easiest way to get the buff is to to mass feed them  Pugi Crackers from the Guild Shop.

You can only have one buff active at a time. You only need to feed once per log in. You can check your current skill in the last page of your equipment menu.

All poogie buffs stack with any similar skills. For example, you can use the Luck effect poogie even if you have  Great Luck or Premium Course active. The Luck poogie has a 12.5% chance to reroll a failed reward roll and a 12.5% chance to add additional reward slots. You can get a maximum of 24 standard reward slots if you are using  Great Luck with the poogie active. The poogie only affects the top 24 Main Reward slots and does not change any of the other types of rewards (Sub Objectives, Additional, Breaks, Partner, etc.).

Only the guild leader can purchase and change clothes.`,
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Guild Store Discount',
		slug: '/hunter-notes/locations/guild-hall#guild-store-discount',
		content: `The discount, from guild rank 5, is activated by successfully completing the "pat on the head" and "it seems pretty happy" responses a specified number of times.

5 times successful: Guild shop 5% discount.
10 times successful: Guild shop 10% discount.
15 times successful: Guild shop 15% discount.
The effect disappears in any of the following events:

12 hours have passed.
Logout.
Petting poogie for a long time and it getting angry`,
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Guild Poogie Skills',
		slug: '/hunter-notes/locations/guild-hall#guild-poogie-skills',
		content: `Guild Poogie Skills are unlocked at Guild Rank 6. Giving food and triggering the alert "seems to love it!" will activate a skill according to the Poogie's clothes with a probability.`,
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Guild Poogie Clothing Materials',
		slug: '/hunter-notes/locations/guild-hall#guild-poogie-clothing-materials',
		content: 'Clothing materials are RARE2 and can be put in the guild box.',
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Armor Colors',
		slug: '/hunter-notes/armor/colors',
		content: `Colors are unlocked by doing a number of different tasks. These colors are also the color that is displayed behind your weapon icon in Mezeporta Mezeporta.

Colors other than Green, Red and White require that you have reached at least HR3 to be used.

The menu to customise the color used is unlocked by creating or otherwise obtaining an armor piece that lets you set its color. You can do this by buying the T-Shirt that the NPC wearing glasses in the Blacksmith Blacksmith sells.

If your total points for Green, Red or White pass 100, the total points of all three goes down by -30.`,
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Diva Prayer Gems',
		slug: '/hunter-notes/events/diva-defense#diva-prayer-gems',
		content: `During the Diva Defense Diva Defense event, there are up to four different colors of Prayer gems, each of these will have a different effect based on the skills currently assigned to the individual colors.

The buffs are only available in the second week of the event. The total number of times they can be used is based on the global server's Song Spheres. When Prayers are maxed out you will be forced to choose another color, locking you from contributing to it.

You select your color each day by talking to the Blue Guild Girl who handles things such as Arena quests. You can change this color once a day after 12 PM. Selecting your first color does not count as changing it, allowing you to contribute to two different colors on the first day.

There are a number of different possible effects for each of these gems, and which is assigned to which color will change on each cycle, which should be verified in game.

Each day at some point after 12 PM the most popular prayer is ranked up. This is based on server wide contributions and thus cannot be manipulated to be something based on what you would personally prefer. The total level of prayers cannot exceed 7. If there are four prayers up each with three levels levels it's very likely that the two most popular ones will get max levels, the third most popular will get a single level and then the least popular will get no levels.

You can check your currently equipped gem names in Overlay Settings > Hunter Notes > Gear Info (Text)`,
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Guild Food',
		slug: '/hunter-notes/locations/guild-hall#guild-food',
		content: `Guild cooking is available at guild rank 15 in the Guild Hall Guild Hall and is a mini-game for up to four people. Cooking can activate effects independent of armor skills.

The skill effect from cooking lasts for 90 minutes. If a new skill is obtained, it overwrites the previous effect.

overlay timers
You can check the duration with the overlay.
Up to 6 dishes can be stored as "leftovers" for 1 hour at the cat in the cooking area.

Yellow ingredients are "base ingredients" and pink ingredients are "auxiliary." These allow you to create dishes via the menu. Selecting any other option results in a Guild's Yaminabe.

Successfully cooking Guild Food grants a skill with three levels of each skill available, and a potential failure option that applies a debuff instead of a buff.

During the minigame, press confirm to keep the icon on a meter within the blue or green bars. Blue produces the best results, and green produces good ones. Cat stamps appear in the top right to indicate your performance until the cooking time expires.

By repeatedly pressing confirm, the cursor moves to the right. Hovering over the green "Success Area" or blue "Great Success Area" accumulates a stamp below the food meter. Green stamps indicate success, and blue stamps indicate great success. More participants increase the chance of a great success.

Upon completion, the food is sent to the Kitchen Cat, who manages cooked food. You will be informed of the buff it grants or asked to replace an existing meal if there are no available spots.

Cooked food is available to all guild members after being posted with the Kitchen Cat for one hour. The buffs last one hour and thirty minutes, giving a maximum of two hours and thirty minutes of skill duration per cooking session.

For food with random results, you can keep eating it at the Cat until you get the desired skill. The skills available depend on the success level, with +20 to elemental resistances in the normal success pool.

Many ingredients can be used for cooking, obtained from the Guild Store or the Adventure Boat. The Guild Store requires payment with either standard Zeny or  Guild Tickets, while the Adventure Boat relies on RNG with rare items needing materials from the Diva Defense Diva Defense Event.

By claiming rewards from Diva Defense Diva Defense, you will obtain some materials for the Adventure Boat.

You can send a Felyne to a specific location using the Adventure Boat, which is the only way to obtain some items for Guild Special Cooking recipes, such as those for the Caring Recipes (prevents hitting other players with attacks). Sending out cats costs RP, gained at a rate of 1 per 30 minutes spent in-game. Rewards depend on several factors and can be increased by using  Guild Tickets through the NPC on land after the boat departs.

After the boat returns, claim rewards in front of it. Results vary from plain boxes and debris to shining treasures, depending on mission success. The boat is out for 6 hours, and all guild members can contribute and claim rewards.

There are different cooking modes: normal mode, which doesn't cost any  Guild Tickets, and six  Guild Ticket options that alter the results and minigame functions.

Recipes exist for each status you might want, with four result states from cooking: Great Failure, Failure, Success, and Great Success. These are indicated by the number of stamps collected during the minigame: no stamps is a Great Failure, red stamps result in failure, green in success, and blue in great success. For fighting Zenith monsters, use the Resistance recipes; 55 resistance is required to avoid extreme blights, and you can get +83 elemental resistance from a combination of SR Skills and Guild Cooking.

Unless you are confident in consistently achieving Great Success, use recipes with red ingredients and the Success Level Up cooking option to upgrade success into Great Success.`,
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Bento',
		slug: '/hunter-notes/locations/bento',
		content: `Lunchboxes (or Bentos) are buffs that you set at the quest counter menu, right before embarking on a quest.

You can pack a Bento at the appropiate NPC:

The dedicated food store in Mezeporta Mezeporta.
The dedicated food store in the Caravan Caravan area.
The Guild Store Cat in the Guild Hall Guild Hall.`,
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Recommended Bento',
		slug: '/hunter-notes/locations/bento#recommended-bento',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Food Types and Locations',
		slug: '/hunter-notes/locations/bento#food-types-and-locations',
		content: `Guild Cat Store:

 Spirit Mushrooms
 Frost Tomatoes
 Poogie Crackers
Lunchbox NPC:

 Hot Oil
 Power Lard
 Fist Rice
 Pepper Bug
 Round Egg
 Predator Honey (Rarely Available)
Town General Store:

 Ancient Bean
 Gold Extract
Poogie Farm General Store Lv3:

 Predator Honey`,
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Exotics',
		slug: '/hunter-notes/monsters/exotics',
		content:
			'Only 1 armor piece is needed to activate the armor skill. All weapons give Speed Eating. Each Exotic monster has a set of associated G Finesse weapon.',
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Origin',
		slug: '/hunter-notes/monsters/origin',
		content:
			'Origin monsters are natural evolutions of the Gou monsters. These are required to upgrade Gou armors and weapons beyond G Supremacy level.',
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Elements',
		slug: '/hunter-notes/getting-started/elements',
		content: `Combo elements are equivalent to having from two to three of them but at a percentage of your elemental value. For visual effects, the element that deals the most damage will take precedence.  Gunlance's heatblade alternates the effect.

With Transcendence bursts, there is a hierarchy on which elements take precedence first. The order is  Fire >  Water >  Thunder >  Ice >  Dragon.

Negative elemental hitzones will still apply their raw penalty normally if the 'wrong' element is involved. Owning  Solid Determination will brute force all elements involved, using the weapon's  Dissolver modifier.`,
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Ailments',
		slug: '/hunter-notes/getting-started/ailments',
		content: '',
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Monster Status Immunities',
		slug: '/hunter-notes/getting-started/ailments#monster-status-immunities',
		content: `Subspecies and Zeniths are also immune, except Doragyurosu Doragyurosu which is immune to these statuses only in G Rank, and also as a Zenith.

Only support can inflict poison to Raviente Raviente.`,
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Style Rank',
		slug: '/hunter-notes/getting-started/style-rank',
		content: `An overview of Weapon Styles, Style Rank Skills, Style Rank Stats, My Mission, Hiden and more.`,
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Transcend',
		slug: '/hunter-notes/getting-started/transcend',
		content: `Learn how to upgrade transcend and see a list of burst effects.`,
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	{
		title: 'Sigils',
		slug: '/hunter-notes/weapons/sigils',
		content: `Sigils are akin to decorations but are exclusively used in G Rank weaponry, crafted by the Cat Smith, who also creates random Gou weapons.`,
		id: 0,
		hex: '0x00',
		category: 'Guide',
	},
	// TODO once im done with everything update this index.
];

const uniqueMonsters = getUniqueMonsters();

function mapToSearchItem(
	input: Array<PossibleArrays>,
	name: string,
): SearchItem[] {
	const result: SearchItem[] = [];
	switch (name) {
		case 'monsterInfo':
			input.map(({ displayName, link, ecology, id }) => {
				result.push({
					title: displayName,
					slug: link!,
					content: ecology!,
					id: id,
					hex: `0x${id.toString(16).toUpperCase().padStart(2, '0')}`,
					category: 'Monster',
				});
			});
			break;
		default:
			return [];
	}

	return result;
}

export async function GET() {
	const jsonResult = [
		...pageInfo,
		...mapToSearchItem(uniqueMonsters, 'monsterInfo'),
	];
	return json(jsonResult);
}
