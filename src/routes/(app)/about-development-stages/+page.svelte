<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script>
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import pageThumbnail from '$lib/client/images/logo.png';
	import {
		authorName,
		authorUrl,
		datePublished,
		description,
		projectName,
		website,
	} from '$lib/constants';
	import Head from '$lib/client/components/Head.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	let url = $page.url.toString();
</script>

<Head
	title={'About Development Stages'}
	{description}
	image={pageThumbnail}
	{url}
	{website}
	{authorName}
	{datePublished}
	{authorUrl}
	contentType="WebPage"
	name={projectName}
	siteName={projectName}
/>

<div>
	<SectionHeadingTopLevel title="About Development Stages" />

	<p>
		Since this website intends to host many potential features, it is best to
		detail a clear development process so users can know what to expect during
		each development phase. For the specifics of when a stage finishes and the
		next one starts, see the milestones <OutboundLink
			href="https://github.com/DorielRivalet/wycademy/milestones"
			>in our repository</OutboundLink
		>.
	</p>

	<section>
		<SectionHeading title={'Alpha'} level={2} />
		<p>
			During <em>alpha</em>, anything in the website can drastically change at
			any moment and everything is potentially ephemeral.
		</p>
		<ul>
			<li>
				<strong>Accounts: </strong>they do not provide any substantial features
				or perks, and can be deleted at any moment, potentially right after
				account creation.
			</li>
			<li>
				<strong>Settings: </strong>the currently saved settings can be cleared
				and/or not be available anymore.
			</li>
			<li>
				<strong>Stability: </strong>the website should be considered unstable
				and its whole structure may be different at any moment.
			</li>
		</ul>
		<p>
			This development phase is to set the stage for establishing consistent
			page layouts and a more stable project structure in the next phase. This
			phase sacrifices adaptability and performance for velocity.
		</p>
	</section>

	<section>
		<SectionHeading title={'Beta'} level={2} />
		<p>
			During this phase, any feature related to accounts can be considered
			unstable, and may change at any moment.
		</p>
		<ul>
			<li>
				Features not related to accounts should have a established structure and
				aim to be stable.
			</li>
			<li>Major bugs from any source may still occur.</li>
			<li>
				<strong>Settings: </strong>they should be established and not be
				cleared, if possible.
			</li>
		</ul>
	</section>
	<p>
		The <em>beta</em> stage paves the road for v1.0.0. This phase sacrifices velocity
		for adaptability.
	</p>

	<section>
		<SectionHeading title={'v1.0.0'} level={2} />
		<p>
			The first non-beta release of the website should be considered stable.
			Should major changes occur, it would become v2, and so on.
		</p>
		<ul>
			<li>Major bugs should be fixed for the most part.</li>
			<li>
				Features related to accounts should present minor bugs at worst case
				scenario.
			</li>
		</ul>
		<p>
			When v1 is released, the warning notice at the top of the home page will
			be removed. Should any major issues arise in future versions, users would
			be notified in the website itself.
		</p>
	</section>

	<section>
		<SectionHeading title={'Closing Notes'} level={2} />
		<ul>
			<li>
				In the <em>alpha</em> stage, users should expect that the site might be unstable
				and change frequently.
			</li>

			<li>
				In the <em>beta</em> stage, users can start using the site for regular activities,
				but they should still expect some changes and potential issues.
			</li>

			<li>
				In v1.0.0 and beyond, users can use the site normally and expect a
				stable experience.
			</li>
		</ul>
	</section>
</div>
