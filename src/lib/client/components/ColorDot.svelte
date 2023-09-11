<script lang="ts">
  import { Popover } from "carbon-components-svelte";

  export let color: string;
  export let name: string;

  let showPopover = false;

  function copyColorToClipboard() {
    const styles = getComputedStyle(document.documentElement);
    const colorValue = styles.getPropertyValue(color);
    navigator.clipboard.writeText(colorValue);

    showPopover = true;

    setTimeout(function() {
      showPopover = false;
    }, 2000);
  }
</script>

<div class="container">
  <p class="title">{name}</p>
  <div>
    <button on:click={copyColorToClipboard} type="button" class="dot" aria-label={name} style="background-color: var({color})"/>
    <Popover caret relative open={showPopover}>
      <div style="padding: var(--cds-spacing-03)">Copied to clipboard!</div>
    </Popover>
  </div>
</div>

<style>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .dot {
    width: 2em;
    height: 2em;
    border-color: #11111b7f;
    border-width: 1px;
    border-radius: 50%;
    border-style: solid;
    box-shadow: 0 2px 0 #0000007f;
  }

  .dot:hover {
     cursor: pointer;
   }

  .title{
    font-size: 1em;
  }

  .dot:active {
    box-shadow: none;
    transform: translateY(2px);
  }
</style>