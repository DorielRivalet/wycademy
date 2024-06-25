<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import { page } from '$app/stores';

	/**TODO: unused?*/
	export let startsWith = false;

	export let path = '/';
	export let description = 'Description';
</script>

{#if startsWith}
	<li aria-current={$page.url.pathname.startsWith(path) ? 'page' : undefined}>
		<a href={path}>
			<div class="description">{description}</div>
		</a>
	</li>
{:else}
	<li aria-current={$page.url.pathname === path ? 'page' : undefined}>
		<a href={path}>
			<div class="description">{description}</div>
		</a>
	</li>
{/if}

<style lang="scss">
	@use '@carbon/motion' as motion;

	a {
		all: unset;
		font-weight: bold;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	a:hover {
		color: var(--ctp-sky);
	}
</style>
