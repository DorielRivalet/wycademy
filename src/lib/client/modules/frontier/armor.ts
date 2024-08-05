import ArmorHelmetIcon from '$lib/client/components/frontier/icon/armor/Helmet_Icon_White.svelte';
import ArmorChestIcon from '$lib/client/components/frontier/icon/armor/Chest_Icon_White.svelte';
import ArmorArmsIcon from '$lib/client/components/frontier/icon/armor/Arm_Icon_White.svelte';
import ArmorWaistIcon from '$lib/client/components/frontier/icon/armor/Waist_Icon_White.svelte';
import ArmorLegsIcon from '$lib/client/components/frontier/icon/armor/Leg_Icon_White.svelte';
import ArmorSetIcon from '$lib/client/components/frontier/icon/armor/Set.svelte';
import ArmorStandIcon from '$lib/client/components/frontier/icon/armor/MHRise_Item_Icon-Armor_Stand_Equipment_White.svelte';
import type { FrontierArmor } from './types';

export const ArmorTypes: FrontierArmor[] = [
	{
		id: 0,
		name: 'Head',
		icon: ArmorHelmetIcon,
	},

	{
		id: 1,
		name: 'Chest',
		icon: ArmorChestIcon,
	},

	{
		id: 2,
		name: 'Arms',
		icon: ArmorArmsIcon,
	},

	{
		id: 3,
		name: 'Waist',
		icon: ArmorWaistIcon,
	},

	{
		id: 4,
		name: 'Legs',
		icon: ArmorLegsIcon,
	},
	{
		id: 5,
		name: 'Set',
		icon: ArmorSetIcon,
	},
	{
		id: 6,
		name: 'Stand',
		icon: ArmorStandIcon,
	},
];

export function getArmorIcon(name: string) {
	return ArmorTypes.find((e) => e.name === name)?.icon || ArmorTypes[0].icon;
}
