<script lang="ts">
	import Breadcrumb from '$lib/client/components/Breadcrumb.svelte';
	import { page } from '$app/stores';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import CallToActionBanner from '$lib/client/components/CallToActionBanner.svelte';
	import LogoDiscord from 'carbon-icons-svelte/lib/LogoDiscord.svelte';
	import ToolKit from 'carbon-icons-svelte/lib/ToolKit.svelte';

	const version = 'v0.39.0';
</script>

<div class="release-notes-page">
	<div class="breadcrumb">
		<Breadcrumb page={$page} />
	</div>
	<section>
		<h1>{version}</h1>
		<hr />
		<div class="summary">
			<div class="spaced-paragraph">Hello!</div>
			<div class="spaced-paragraph">
				Today we are happy to anounce the overlay now has its own pages. <OutboundLink
					href="/overlay">Check them out!</OutboundLink
				>
			</div>
			<div class="spaced-paragraph">
				This update will be very fun to try for <InlineTooltip
					icon={getWeaponIcon('Dual Swords')}
					iconType="component"
					tooltip="Weapon"
					text="Dual Swords"
				/> users, read below to see why!
			</div>
		</div>
		<section>
			<h2>New Features</h2>
			<hr />
			<UnorderedList>
				<ListItem
					><div class="list-item">
						Added <InlineTooltip
							text="Dual Swords"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Dual Swords')}
						/> sharpen combo counter. Includes graphs and achievements related to
						them. Possibly the hardest achievements to ever get! If you want to see
						which ones they are without opening the overlay, you can check them on
						the
						<Link inline href="/overlay/achievements"
							>overlay achievements page.</Link
						>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						Created more weapon-specific achievements, including one for <InlineTooltip
							text="Hunting Horn!"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Hunting Horn')}
						/> 🎵
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						Implemented a link to these overlay release notes when updating the
						overlay. This change will trigger when the next update releases.
					</div></ListItem
				>
			</UnorderedList>
		</section>
		<section>
			<h2>Improvements</h2>
			<hr />
			<UnorderedList class="spaced-list">
				<ListItem
					><div class="list-item">
						Updated Monster icons to be based on the vector graphics ones found
						in <Link inline href="/tools/generator/icon"
							>the Icons Preview page.</Link
						>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						We noticed that certain achievements may cause confusion since they
						are unobtainable, so we decided to hide them until they are
						implemented. Now you can achieve 100% progress completion! 🎉
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						Added a toggle to enable/disable achievements tracking.
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						Added a link to Wycademy's <Link
							icon={ToolKit}
							href="/tools/calculator/damage">Damage Calculator</Link
						>
					</div></ListItem
				>
			</UnorderedList>
		</section>
		<section>
			<h2>Fixes</h2>
			<hr />
			<UnorderedList class="spaced-list">
				<ListItem
					><div class="list-item">
						<div>
							Fixed <span class="icon-text"
								><LogoDiscord size={16} />
								<span>Discord Rich Presence</span></span
							>
							character encoding. Now you can use full-width Japanese characters
							in your hunter and guild name.
						</div>
					</div>
				</ListItem>
			</UnorderedList>
		</section>
		<!-- <section>
			<h2>Other Changes</h2>
			<hr />
		</section> -->
	</section>
	<section class="call-to-action-section">
		<CallToActionBanner
			bodyText="Are you ready to upgrade your Frontier experience?"
			buttonText="Download Now"
			buttonLink="https://github.com/DorielRivalet/mhfz-overlay?tab=readme-ov-file#installation"
		/>
	</section>
	<section class="feedback-section">
		<div class="spaced-paragraph">
			We have a <OutboundLink href="https://forms.gle/hrAVWMcYS5HEo1v7A"
				>Google Forms</OutboundLink
			> where you can submit your feedback on the overlay.
		</div>
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

	.feedback-section {
		display: flex;
		justify-content: center;
		padding: 0px var(--cds-spacing-04);
	}
</style>
