<script lang='ts'>
  import type { FrontierWeaponSharpness } from "$lib/client/modules/frontier-types";
  import { frontierColorNames } from "$lib/client/themes/frontier-colors";

  export let sharpnessValues: FrontierWeaponSharpness = [10, 20, 30, 40, 50, 60, 70, 80,];
  /** Shows the boost border effect.*/
  export let sharpnessBoost: boolean = true;
</script>

<div class='bar'>
  {#each sharpnessValues as value, i}
    <div style='background-color: var({frontierColorNames[0].values[i].var}); width: {value}px; height: 100%'/>
  {/each}
</div>

<style>
.bar{
  display: flex;
  border: 2px solid black;
  height: 100%;
  width: 100%;
}
</style>