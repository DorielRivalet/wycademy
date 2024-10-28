<script lang="ts">
	import Breadcrumb from 'carbon-components-svelte/src/Breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from 'carbon-components-svelte/src/Breadcrumb/BreadcrumbItem.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import CallToActionBanner from '$lib/client/components/CallToActionBanner.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';

	const breadCrumbItems = [
		{ href: '/', text: 'Home' },
		{ href: '/overlay', text: 'Overlay' },
		{ href: '/overlay/release-notes', text: 'Release Notes' },
		{ href: '/overlay/release-notes/v0-41-0', text: 'v0.41.0' },
	];
</script>

<div class="release-notes-page">
	<div class="breadcrumb">
		<Breadcrumb noTrailingSlash>
			{#each breadCrumbItems as item, i}
				<BreadcrumbItem
					href={i === breadCrumbItems.length - 1 ? undefined : item.href}
					isCurrentPage={i === breadCrumbItems.length - 1}
					>{#if i !== breadCrumbItems.length - 1}
						{item.text}
					{/if}
				</BreadcrumbItem>
			{/each}
		</Breadcrumb>
	</div>
	<section>
		<div class="headline">
			<h1>v0.41.0</h1>
			<p class="date">October 27, 2024</p>
			<hr />
		</div>

		<div class="summary">
			<p class="spaced-paragraph">
				This update brings exciting new features and improvements to the
				overlay, plus some important bug fixes to enhance your experience.
			</p>
		</div>
		<section>
			<h2>New Features</h2>
			<hr />
			<UnorderedList class="spaced-list">
				<ListItem>
					<div class="list-item">
						<strong>Hotkeys Window:</strong> Now you can easily access all available
						hotkeys with a handy new window. You can access this new window by right-clicking
						the overlay icon in your system tray. 🔥🚀
					</div>
				</ListItem>
				<ListItem>
					<div class="list-item">
						<strong>Party Size Adjustments:</strong> Planning your next hunt? We’ve
						added a new party size dictionary field in the database. Now your stats
						will be more accurate. 🏹🛡️
					</div>
				</ListItem>
				<ListItem>
					<div class="list-item">
						<strong>Database Overhaul:</strong> The database has been reduced in
						size, making everything load faster so you can focus more on hunting
						and less on waiting. Depending on how many hunts you had and how
						long each lasted, your database size can be
						<strong>reduced by 50%</strong> or more! 🏃‍♂️💨
					</div>
				</ListItem>
			</UnorderedList>
		</section>
		<section>
			<h2>Improvements</h2>
			<hr />
			<UnorderedList class="spaced-list">
				<ListItem>
					<div class="list-item">
						<strong>Updated Monster Images:</strong> Enjoy new, sharper visuals for
						your favorite (and not-so-favorite) monsters. Get ready to see them in
						stunning detail! 🖼️✨
					</div>
				</ListItem>
			</UnorderedList>
		</section>
		<section>
			<h2>Fixes</h2>
			<hr />
			<UnorderedList class="spaced-list">
				<ListItem>
					<div class="list-item">
						<strong>Achievement Fixes:</strong> We’ve resolved an issue with <InlineTooltip
							text="Dual Swords"
							icon={getWeaponIcon('Dual Swords')}
							tooltip="Weapon"
						/> achievements not working correctly. Your accomplishments are now properly
						recognized! 🏆✔️
					</div>
				</ListItem>
			</UnorderedList>
		</section>
	</section>
	<section class="call-to-action-section">
		<p class="spaced-paragraph">
			See our upcoming changes in <OutboundLink
				href="https://github.com/DorielRivalet/mhfz-overlay/milestones"
				>the milestones page.</OutboundLink
			>
		</p>

		<CallToActionBanner
			bodyText="Are you ready to upgrade your Frontier experience?"
			buttonText="Download Now"
			buttonLink="https://github.com/DorielRivalet/mhfz-overlay?tab=readme-ov-file#installation"
		/>
	</section>
</div>

<style lang="scss">
	.release-notes-page {
		width: 100%;
		padding-top: 2rem;
		padding-bottom: 2rem;

		section > section {
			padding: 1rem;
			min-height: 90vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-top: var(--cds-spacing-10);
		}
	}

	.release-notes-page > section > section:nth-child(odd) {
		background-color: var(--ctp-base); /* Light grey for odd-numbered divs */
	}

	.release-notes-page > section > section:nth-child(even) {
		background-color: var(
			--ctp-mantle
		); /* Darker grey for even-numbered divs */
	}

	hr {
		opacity: 1;
		width: 100%;
		border: none;
		height: 1px;
		background: radial-gradient(
			circle,
			color-mix(in srgb, var(--ctp-blue), transparent 50%) 0%,
			rgba(0, 0, 0, 0) 50%
		);
	}

	h1,
	h2 {
		text-align: center;
	}

	.breadcrumb {
		padding-left: 1rem;
		padding-bottom: 1rem;
	}

	.summary {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 1rem;
		align-items: center;
		padding-bottom: 2rem;
	}

	.list-item {
		max-width: 80ch;
		font-size: 16px;
	}

	.call-to-action-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
	}

	.headline {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
	}

	.date {
		color: var(--ctp-subtext0);
	}
</style>
