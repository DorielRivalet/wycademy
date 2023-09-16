<script lang='ts'>
  import { WeaponTypes } from "$lib/client/modules/frontier/objects";
  import type { 
    FrontierElement, 
    FrontierEquipmentRank, 
    FrontierRarity, 
    FrontierStatus, 
    FrontierWeaponID, 
    FrontierWeaponLength, 
    FrontierWeaponSharpness,} from "$lib/client/modules/frontier/types";

  import FrontierWeaponSharpnessBar from "$lib/client/components/frontier/SharpnessBar.svelte";
  import DecoratedBorder from "./DecoratedBorder.svelte";

  /** Truncated to 18 characters.*/
  export let name: string = 'Name';
  export let level: number = 100;
  export let weaponType: FrontierWeaponID = 0;
  export let attack: number = 100;
  export let element: number = 0;
  export let status: number = 0;
  export let elementType: FrontierElement = 'Fire';
  export let statusType: FrontierStatus = 'Poison';
  export let length: FrontierWeaponLength = 'V. Long';
  export let sharpnessValues: FrontierWeaponSharpness = [20, 20, 20, 20, 20, 20, 20, 20];
  export let sharpnessBoost: boolean = true;

  /** The overlay icon in the bottom left corner.*/
  export let rank: FrontierEquipmentRank = 'G';

  // TODO ids
  export let zenithSkill: string = 'Skills Slots Up+1';

  // page 2
  export let description: string = 'Description.';
  export let rarity: FrontierRarity = 1;
  export let affinity: number = 0;

  const weaponClass = WeaponTypes[weaponType].class;
  const weaponTypeName = WeaponTypes[weaponType].name;
  let sharpnessBoostValue: string = sharpnessBoost ? '+1' : '';
  
  // TODO gunner
  // TODO pages
  // TODO sigils, decos
  // TODO types

  // TODO defense
  // TODO gou/automatic
</script>

<DecoratedBorder>
  <div class='container'>
    <div class='page-1'>
      <div class='header'>
        <img src={WeaponTypes[weaponType].icon} alt='Weapon icon'/>
        <div>
          <div>{name}</div>
          <div class='weapon-level'>Lv. {level}</div>
        </div>
      </div>
      <div class='attack'>
        <span class='text-yellow'>Attack: </span>{attack}
      </div>
      <div class='length'><span class='text-yellow'>Length: </span>{length}</div>
      <div class='sharpness'>Sharpness</div>
      <div class='bar'>
        <FrontierWeaponSharpnessBar {sharpnessValues} {sharpnessBoost}/>
        <div class='text-cyan'>{sharpnessBoostValue}</div>
      </div>
      <div class='element'>{elementType}: {element}</div>
      <div class='zenith'>«{zenithSkill}»</div>
      <div class='status'>{statusType}: {status}</div>
      <div class='pages'>1/6</div>
    </div>
  </div>
</DecoratedBorder>


<style>

div {
  color: var(--ctp-mocha-text);
  font-family: var(--font-game);
  font-size: 18px;
  font-weight: 500;
}

.text-yellow{
  color: var(--fz-text-yellow)
}

.text-cyan{
  color: var(--fz-text-cyan)
}

.header img {
  margin: 0;
  padding: 0;
  width: auto;
  height: 75%;
}

.zenith { 
  color: var(--fz-rare-12);
  text-align: end;
}

.weapon-level{
  text-align: end;
}

.header { 
  grid-area: header;
  display: flex;
  margin: 0px;
  padding: 0px;
  flex-direction: row;
  gap: 1rem;
}

.attack { 
  grid-area: attack; 
}

.length {
  text-align: center;
  grid-area: length; 
}

.sharpness {
  color: var(--fz-text-yellow);
  grid-area: sharpness; 
}

.bar {
  grid-area: bar;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.element {
  grid-area: element; 
}

.zenith {
  grid-area: zenith;
}

.status 
{ 
  grid-area: status;
}

.pages {
  text-align: end;
  grid-area: pages;
}

.page-1 {
  display: grid;
  grid-template-areas:
    'header header header'
    'attack length length'
    'sharpness bar bar'
    'element zenith zenith'
    'status pages pages';
  gap: .5rem;
}

.container{
  padding: .5rem;
  background-color: #11111b7f;
  aspect-ratio: 2.5;
}
</style>