<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import type { UICornerStyle } from '$lib/client/modules/frontier/types';
	import corner1 from '$lib/client/images/ui/svg/corner1.svg';
	// TODO
	let cornerStyle: UICornerStyle = 0;
</script>

<div class="corner-decorated-div border">
	<div
		class="corner"
		style="top: 0;
	left: 0;
	background-image: url('{corner1}');"
	/>
	<div
		class="corner"
		style="		top: 0;
	right: 0;
	background-image: url('{corner1}');
	transform: scaleX(-1);"
	/>
	<div
		class="corner"
		style="		bottom: 0;
	left: 0;
	background-image: url('{corner1}');
	transform: scaleY(-1);"
	/>
	<div
		class="corner"
		style="		bottom: 0;
	right: 0;
	background-image: url('{corner1}');
	transform: rotate(180deg);"
	/>
	<slot />
</div>

<style lang="scss">
	.border {
		outline: 2px solid #7d7b7b7f; /* TODO adjust for latte flavor */
		outline-offset: -4px;
	}

	/* Define the size of the corner images */
	.corner-decorated-div {
		position: relative;
		padding: 0px; /* Adjust padding as needed */
	}

	.corner {
		position: absolute;
		width: 0.6rem; /* Adjust the width and height of your corner images */
		height: 0.6rem;
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>
