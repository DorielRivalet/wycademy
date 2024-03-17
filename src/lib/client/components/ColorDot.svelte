<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import Popover from 'carbon-components-svelte/src/Popover/Popover.svelte';

	export let color: string;
	export let name: string;

	let showPopover = false;

	function copyColorToClipboard() {
		const styles = getComputedStyle(document.documentElement);
		const colorValue = styles.getPropertyValue(color);
		navigator.clipboard.writeText(colorValue);

		showPopover = true;

		setTimeout(function () {
			showPopover = false;
		}, 2000);
	}
</script>

<div class="container">
	<p class="title">{name}</p>
	<div>
		<button
			on:click={copyColorToClipboard}
			type="button"
			class="dot"
			aria-label={name}
			style="background-color: var({color})"
		/>
		<Popover caret relative open={showPopover}>
			<div style="padding: var(--cds-spacing-03)">Copied to clipboard!</div>
		</Popover>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.dot {
		width: 2em;
		height: 2em;
		border-color: var(--ctp-mantle);
		border-width: 2px;
		border-radius: 50%;
		border-style: outset;
		box-shadow: 0 2px 0 var(--ctp-crust);
	}

	.dot:hover {
		cursor: var(--cursor-icon-pointer);
	}

	.title {
		font-size: 1em;
	}

	.dot:active {
		box-shadow: none;
		border-style: inset;
		transform: translateY(2px);
	}
</style>
