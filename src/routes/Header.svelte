<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import Settings from 'carbon-icons-svelte/lib/Settings.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Logo from '$lib/client/components/Logo.svelte';
	import Blacksmith from '$lib/client/components/frontier/icon/Blacksmith.svelte';
	import UserAvatar from 'carbon-icons-svelte/lib/UserAvatar.svelte';
	import PvP from '$lib/client/components/frontier/icon/PvP.svelte';
	import MySupport from '$lib/client/components/frontier/icon/MySupport.svelte';
	import BookIconWhite from '$lib/client/components/frontier/icon/item/Book_Icon_White.svelte';
	import MonsterPartIconWhite from '$lib/client/components/frontier/icon/item/Monster_Part_Icon_White.svelte';
	import TicketIconWhite from '$lib/client/components/frontier/icon/item/Ticket_Icon_White.svelte';
	import { getHexStringFromCatppuccinColor } from '$lib/client/themes/catppuccin';
	import { theme } from '$lib/client/stores/theme';
	import NavigationItem from './NavigationItem.svelte';
	import Search from 'carbon-components-svelte/src/Search/Search.svelte';

	let closed = false;
	let expanded = false;

	function close() {
		close = true;
	}
</script>

<header>
	<div class="left">
		<Logo />
		<div class="search">
			<Search
				expandable
				bind:expanded
				autocomplete={'on'}
				on:expand
				on:collapse
			/>
		</div>
	</div>

	<div class="middle">
		<nav>
			<ul>
				<NavigationItem color="yellow" path="/" description="Leaderboard">
					<TicketIconWhite
						color={getHexStringFromCatppuccinColor('yellow', $theme)}
					/>
				</NavigationItem>
				<NavigationItem color="rosewater" path="/" description="Hunter's Notes">
					<BookIconWhite
						color={getHexStringFromCatppuccinColor('rosewater', $theme)}
					/>
				</NavigationItem>
				<NavigationItem color="flamingo" path="/" description="Bestiary">
					<MonsterPartIconWhite
						color={getHexStringFromCatppuccinColor('flamingo', $theme)}
					/>
				</NavigationItem>
				<NavigationItem color="pink" path="/arena" description="Arena">
					<PvP color={getHexStringFromCatppuccinColor('pink', $theme)} />
				</NavigationItem>
				<NavigationItem color="mauve" path="/smithy" description="Smithy">
					<Blacksmith color={getHexStringFromCatppuccinColor('mauve', $theme)} />
				</NavigationItem>
				<NavigationItem color="red" path="/" description="Support">
					<MySupport color={getHexStringFromCatppuccinColor('red', $theme)} />
				</NavigationItem>
			</ul>
		</nav>
	</div>

	<nav class="right">
		<div class="container-link">
			<Link href="/site-preferences" class="link" aria-label="Site preferences">
				<UserAvatar size={48} />
			</Link>
		</div>
		<div class="container-link">
			<Link href="/site-preferences" class="link" aria-label="Site preferences">
				<Settings size={48} />
			</Link>
		</div>
	</nav>
</header>

<style>
	.left {
		margin-left: var(--cds-spacing-02);
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.middle {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.right {
		display: flex;
		justify-content: space-between;
		gap: var(--cds-spacing-04);
	}

	header {
		display: flex;
		justify-content: space-between;
		min-height: 10vh;
		border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
		background-color: var(--ctp-crust);
		align-items: center;
		padding: 0.5rem;
	}

	.container-link {
		padding-block: 0.5rem;
	}

	.search {
		height: fit-content;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		list-style: none;
	}
</style>
