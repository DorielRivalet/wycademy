<script lang="ts">
  export let color: string;
  export let name: string;

  function copyColorToClipboard() {
    const styles = getComputedStyle(document.documentElement);
    const colorValue = styles.getPropertyValue(color);
    navigator.clipboard.writeText(colorValue);
  }
</script>

<div class="container">
  <p class="title">{name}</p>
  <button on:click={copyColorToClipboard} title="Click to copy color to clipboard" class="dot" style="background-color: var({color})"/>
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