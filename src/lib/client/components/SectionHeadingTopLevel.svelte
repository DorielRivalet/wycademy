<script lang="ts">
  export let title: string;
  export let withSeparator = true;
</script>

<div class="container">
  <h1>{title}</h1>
  {#if withSeparator}
    <hr />
  {/if}
</div>

<style>
  .container {
    margin-bottom: 2rem;
  }
</style>
