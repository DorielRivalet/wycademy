// if bitfields are not needed, make an object instead.

import type {
  FrontierWeaponClass,
  FrontierWeaponID,
  FrontierWeaponName,
} from './types';
import GreatSwordIcon from '$lib/client/images/weapon/svg/Great_Sword_Icon_White.svelte';
import LongSwordIcon from '$lib/client/images/weapon/svg/Long_Sword_Icon_White.svelte';
import DualSwordsIcon from '$lib/client/images/weapon/svg/Dual_Blades_Icon_White.svelte';
import SwordAndShieldIcon from '$lib/client/images/weapon/svg/Sword_and_Shield_Icon_White.svelte';
import GunlanceIcon from '$lib/client/images/weapon/svg/Gunlance_Icon_White.svelte';
import LanceIcon from '$lib/client/images/weapon/svg/Lance_Icon_White.svelte';
import HammerIcon from '$lib/client/images/weapon/svg/Hammer_Icon_White.svelte';
import HuntingHornIcon from '$lib/client/images/weapon/svg/Hunting_Horn_Icon_White.svelte';
import LightBowgunIcon from '$lib/client/images/weapon/svg/Light_Bowgun_Icon_White.svelte';
import HeavyBowgunIcon from '$lib/client/images/weapon/svg/Heavy_Bowgun_Icon_White.svelte';
import BowIcon from '$lib/client/images/weapon/svg/Bow_Icon_White.svelte';
import TonfaIcon from '$lib/client/images/weapon/svg/Tonfa_Icon_White.svelte';
import SwitchAxeFIcon from '$lib/client/images/weapon/svg/Switch_Axe_Icon_White.svelte';
import MagnetSpikeIcon from '$lib/client/images/weapon/svg/Magnet_Spike_Icon_White.svelte';

/*
https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums
The biggest argument in favour of this format over TypeScript’s enum is that it keeps your codebase aligned with the state of JavaScript, and when/if enums are added to JavaScript then you can move to the additional syntax.
*/
export const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

export const Sharpness = {
  Red: 0,
  Orange: 1,
  Yellow: 2,
  Green: 3,
  Blue: 4,
  White: 5,
  Purple: 6,
  Cyan: 7,
} as const;

// TODO svg
export const WeaponTypes = [
  {
    id: 0 as FrontierWeaponID,
    name: 'Great Sword' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: GreatSwordIcon,
    hiden: 'Sword King',
  },
  {
    id: 1 as FrontierWeaponID,
    name: 'Heavy Bowgun' as FrontierWeaponName,
    class: 'Gunner' as FrontierWeaponClass,
    icon: HeavyBowgunIcon,
    hiden: 'Gun Sage',
  },
  {
    id: 2 as FrontierWeaponID,
    name: 'Hammer' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: HammerIcon,
    hiden: 'Blunt Beast',
  },
  {
    id: 3 as FrontierWeaponID,
    name: 'Lance' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: LanceIcon,
    hiden: 'Heavenly Spear',
  },
  {
    id: 4 as FrontierWeaponID,
    name: 'Sword and Shield' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: SwordAndShieldIcon,
    hiden: 'Sword Saint',
  },
  {
    id: 5 as FrontierWeaponID,
    name: 'Light Bowgun' as FrontierWeaponName,
    class: 'Gunner' as FrontierWeaponClass,
    icon: LightBowgunIcon,
    hiden: 'Gun Prodigy',
  },
  {
    id: 6 as FrontierWeaponID,
    name: 'Dual Swords' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: DualSwordsIcon,
    hiden: 'Dual Dragon',
  },
  {
    id: 7 as FrontierWeaponID,
    name: 'Long Sword' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: LongSwordIcon,
    hiden: 'Katana God',
  },
  {
    id: 8 as FrontierWeaponID,
    name: 'Hunting Horn' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: HuntingHornIcon,
    hiden: 'Flamboyant Emperor',
  },
  {
    id: 9 as FrontierWeaponID,
    name: 'Gunlance' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: GunlanceIcon,
    hiden: 'Cannon Emperor',
  },
  {
    id: 10 as FrontierWeaponID,
    name: 'Bow' as FrontierWeaponName,
    class: 'Gunner' as FrontierWeaponClass,
    icon: BowIcon,
    hiden: 'Bow Demon',
  },
  {
    id: 11 as FrontierWeaponID,
    name: 'Tonfa' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: TonfaIcon,
    hiden: 'Piercing Phoenix',
  },
  {
    id: 12 as FrontierWeaponID,
    name: 'Switch Axe F' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: SwitchAxeFIcon,
    hiden: 'Edge Marshal',
  },
  {
    id: 13 as FrontierWeaponID,
    name: 'Magnet Spike' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: MagnetSpikeIcon,
    hiden: 'Magnetic Star',
  },
] as const;

export const SharpnessNames = Object.keys(Sharpness) as readonly string[];
/*
// It requires an extra line to pull out the values
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

run(ODirection.Right);


public enum FrontierWeaponType
{
    GreatSword,
    HeavyBowgun,
    Hammer,
    Lance,
    SwordAndShield,
    LightBowgun,
    DualSwords,
    LongSword,
    HuntingHorn,
    Gunlance,
    Bow,
    Tonfa,
    SwitchAxeF,
    MagnetSpike,
}

public enum FrontierSharpness
{
    Red,
    Orange,
    Yellow,
    Green,
    Blue,
    White,
    Purple,
    Cyan,
}
*/
