<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	interface Props {
		title: string;
		withSeparator?: boolean;
	}

	let { title, withSeparator = true }: Props = $props();
</script>

<div class="container">
	<h1>{title}</h1>
	{#if withSeparator}
		<hr />
	{/if}
</div>

<style lang="scss">
	.container {
		margin-bottom: var(--cds-spacing-08);
	}
</style>
