// if bitfields are not needed, make an object instead.

import type { FrontierWeaponClass, FrontierWeaponID, FrontierWeaponName } from "./frontier-types";
import GreatSwordIcon from '$lib/client/images/Great_Sword_Icon_White.svg'
import LongSwordIcon from '$lib/client/images/Long_Sword_Icon_White.svg'
import DualSwordsIcon from '$lib/client/images/Dual_Blades_Icon_White.svg'
import SwordAndShieldIcon from '$lib/client/images/Sword_and_Shield_Icon_White.svg'
import GunlanceIcon from '$lib/client/images/Gunlance_Icon_White.svg'
import LanceIcon from '$lib/client/images/Lance_Icon_White.svg'
import HammerIcon from '$lib/client/images/Hammer_Icon_White.svg'
import HuntingHornIcon from '$lib/client/images/Hunting_Horn_Icon_White.svg'
import LightBowgunIcon from '$lib/client/images/Light_Bowgun_Icon_White.svg'
import HeavyBowgunIcon from '$lib/client/images/Heavy_Bowgun_Icon_White.svg'
import BowIcon from '$lib/client/images/Bow_Icon_White.svg'
import TonfaIcon from '$lib/client/images/Tonfa_Icon_White.svg'
import SwitchAxeFIcon from '$lib/client/images/Switch_Axe_Icon_White.svg'
import MagnetSpikeIcon from '$lib/client/images/Magnet_Spike_Icon_White.svg'

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
  },
  { 
    id: 1 as FrontierWeaponID,
    name: 'Heavy Bowgun' as FrontierWeaponName,
    class: 'Gunner' as FrontierWeaponClass,
    icon: HeavyBowgunIcon,
  },
  { 
    id: 2 as FrontierWeaponID,
    name: 'Hammer' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: HammerIcon,
  },
  { 
    id: 3 as FrontierWeaponID,
    name: 'Lance' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: LanceIcon,
  },
  { 
    id: 4 as FrontierWeaponID,
    name: 'Sword and Shield' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: SwordAndShieldIcon,
  },
  { 
    id: 5 as FrontierWeaponID,
    name: 'Light Bowgun' as FrontierWeaponName,
    class: 'Gunner' as FrontierWeaponClass,
    icon: LightBowgunIcon,
  },
  { 
    id: 6 as FrontierWeaponID,
    name: 'Dual Swords' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: DualSwordsIcon,
  },
  { 
    id: 7 as FrontierWeaponID,
    name: 'Long Sword' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: LongSwordIcon,
  },
  { 
    id: 8 as FrontierWeaponID,
    name: 'Hunting Horn' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: HuntingHornIcon,
  },
  { 
    id: 9 as FrontierWeaponID,
    name: 'Gunlance' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: GunlanceIcon,
  },
  { 
    id: 10 as FrontierWeaponID,
    name: 'Bow' as FrontierWeaponName,
    class: 'Gunner' as FrontierWeaponClass,
    icon: BowIcon,
  },
  { 
    id: 11 as FrontierWeaponID,
    name: 'Tonfa' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: TonfaIcon,
  },
  { 
    id: 12 as FrontierWeaponID,
    name: 'Switch Axe F' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: SwitchAxeFIcon,
  },
  { 
    id: 13 as FrontierWeaponID,
    name: 'Magnet Spike' as FrontierWeaponName,
    class: 'Blademaster' as FrontierWeaponClass,
    icon: MagnetSpikeIcon,
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