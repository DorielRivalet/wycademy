<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

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
		margin-bottom: var(--cds-spacing-08);
	}
</style>
