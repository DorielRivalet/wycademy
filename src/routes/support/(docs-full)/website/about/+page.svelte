<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import BlinkiesSmall from '$lib/client/images/blinkies-wycademy-small.gif';
	import Blinkies from '$lib/client/images/blinkies-wycademy.gif';
	import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'About Us'} />
		<section>
			<SectionHeading level={2} title="Overview" />
			<div>
				<div class="spaced-paragraph">
					Wycademy, or Frontier's Wycademy, is a comprehensive resource for
					hunters of all skill levels playing <cite
						>Monster Hunter Frontier Z</cite
					>.
				</div>
				<p class="spaced-paragraph">
					First released as Monster Hunter Frontier in 2007 and officially
					discontinued in 2019, MHF-Z has cultivated a dedicated community, and
					our website is designed to support that community in every way
					possible. Acting as a <strong>knowledge base</strong>,
					<strong>database</strong>,
					<strong>speedrunning leaderboard</strong>, and a
					<strong>compilation of guides, tutorials and tools</strong>, Wycademy
					is <strong>agnostic to game servers and patches</strong>, ensuring
					that all players can benefit from our resources. We aim to preserve
					historical documentation, which is crucial for preservation.
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Our Mission" />
			<div>
				<div class="spaced-paragraph">
					We are committed to enriching the experience of every hunter. Whether
					you're just starting your journey or are a seasoned speedrunner,
					Wycademy is here to help you become the best hunter you can be.
				</div>
				<p class="spaced-paragraph">
					Our project is Free Libre Open Source Software (FLOSS), hosted on
					<OutboundLink href="https://github.com/Open-Frontiers/wycademy"
						>GitHub</OutboundLink
					>, and open to contributions from anyone. We believe in empowering our
					community and making our resources accessible to all, following the
					best practices in web development and accessibility.
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Our History" />
			<div>
				<p class="spaced-paragraph">
					Wycademy was born out of the development of an overlay for MHF-Z in
					2022 by our main developer, <OutboundLink
						href="https://github.com/DorielRivalet/"
						>Doriel Rivalet</OutboundLink
					>. The overlay quickly became a valuable tool for understanding the
					game's mechanics. However, Doriel saw potential for further
					improvement and, in 2023, began creating Wycademy—a comprehensive
					resource for all things MHF-Z. Since then, the project has continued
					to evolve, and we invite our users to join us on this ongoing journey.
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="What We Offer" />
			<div>
				<div class="spaced-paragraph">
					At Wycademy, we are dedicated to providing high-quality, accurate
					information about MHF-Z. But our commitment goes beyond information;
					we aim to enhance the entire ecosystem around the game. Here’s what
					sets us apart:
				</div>
				<UnorderedList>
					<ListItem
						><p>
							<strong>A Unique Hybrid Approach</strong>: Wycademy isn't just a
							knowledge base or a leaderboard—it’s an amalgamation of
							everything. Inspired by platforms like <OutboundLink
								href="https://www.speedrun.com/">Speedrun.com</OutboundLink
							> (for leaderboards), <OutboundLink
								href="https://www.dustloop.com/w/Main_Page"
								>Dustloop Wiki</OutboundLink
							> (for guides and databases), and various gaming platforms (for events
							and community engagement), Wycademy blends structured knowledge, collaboration,
							competition, and interactivity. We also integrate web app tools for
							deeper analysis, enhancing the experience beyond a static wiki. Additionally,
							we take cues from <OutboundLink
								href="https://carbondesignsystem.com/"
								>modern web design</OutboundLink
							> and the <OutboundLink
								href="https://wiki.melonland.net/web_revival"
								>Web Revival / Indie Web movement</OutboundLink
							>, balancing cutting-edge technology with the accessibility and
							permanence of the old web.
						</p></ListItem
					>
					<ListItem
						><p>
							<strong>Accessibility</strong>: We prioritize accessibility,
							ensuring that our resources are available to all players,
							regardless of their needs.
						</p></ListItem
					>
					<ListItem
						><p>
							<strong>Open Collaboration</strong>: Our project is open-source
							under the MIT license, inviting community contributions and
							collaboration.
						</p></ListItem
					>
					<ListItem
						><p>
							<strong>Community Space</strong>: We offer a platform for the
							MHF-Z community, including speedrun leaderboards, discussion
							spaces, and more.
						</p></ListItem
					>
					<ListItem
						><p>
							<strong>Modern Web Practices</strong>: Built with <OutboundLink
								href="https://kit.svelte.dev">SvelteKit</OutboundLink
							>, our website is fast, user-friendly, and embraces modern web
							technologies, including progressive web app (PWA) functionality
							for offline use.
						</p></ListItem
					>
					<ListItem
						><p>
							<strong>Commitment to Preservation</strong>: We encourage users to
							archive and share our resources, ensuring that this information
							remains available for future generations.
						</p></ListItem
					>
				</UnorderedList>
				<p class="spaced-paragraph">
					What makes Wycademy truly unique is our focus on being
					<strong>platform-independent</strong>, working both
					<strong>online</strong>
					and <strong>offline</strong>, and our
					<strong>user-centric</strong> approach. We actively seek feedback from
					our users to continuously improve and expand our offerings.
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Our Values" />
			<div>
				<div class="spaced-paragraph">
					We align with the philosophy outlined in the <OutboundLink
						href="https://github.com/DorielRivalet/mhfz-overlay/blob/main/docs/philosophy.md"
						>mhfz-overlay's philosophy document.</OutboundLink
					> Our core values include:
				</div>
				<UnorderedList>
					<ListItem
						><p>
							<strong>Educational Opportunities</strong>: We provide a platform
							for learning about web development, specifically using <OutboundLink
								href="https://kit.svelte.dev">SvelteKit</OutboundLink
							>, while offering practical tools for MHF-Z players.
						</p></ListItem
					>
					<ListItem
						><p>
							<strong>Open Access to Information</strong>: We believe that all
							players should have free, open, and inclusive access to
							information about MHF-Z. Our repository and software are FLOSS,
							allowing anyone to modify and distribute them.
						</p></ListItem
					>
					<ListItem
						><p>
							<strong>Community Space</strong>: We offer a platform for the
							MHF-Z community, including speedrun leaderboards, discussion
							spaces, and more.
						</p></ListItem
					>
					<ListItem
						><p>
							<strong>Utility and Inclusivity</strong>: Our tools and utilities
							are designed to be useful and accessible to everyone in the
							community.
						</p></ListItem
					>
				</UnorderedList>

				<section>
					<SectionHeading level={3} title="Stewardship Over Ownership" />
					<div>
						<div class="spaced-paragraph">
							Wycademy is not a personal project in the sense of strict
							ownership—it is a collaborative effort meant to <strong
								>serve the community, preserve knowledge, and remain accessible
								beyond any single person’s involvement.</strong
							> While we maintain and develop Wycademy, we see our role as a steward
							rather than an owner.
						</div>
						<div class="spaced-paragraph">
							The goal is not control, but <strong>facilitation</strong
							>—ensuring that the best tools, resources, and information remain
							available, open, and evolving with the needs of the community.
							Contributions are welcome, and while we have a vision for how
							Wycademy should function, that vision includes
							<strong
								>transparency, open collaboration, and long-term sustainability</strong
							> over personal attachment.
						</div>
						<div class="spaced-paragraph">
							This approach contrasts with how many view projects as personal
							property. Wycademy, instead, is a <strong
								>shared space, structured to endure beyond any individual
								contributor.</strong
							>
							While we do take measures to ensure quality and maintain integrity,
							We encourage participation from those who share the same values of
							<strong>preservation, accessibility, and open knowledge.</strong>
						</div>
					</div>
				</section>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Contact Us" />
			<div>
				<div class="spaced-paragraph">
					If you have any issues or concerns, feel free to reach out to us
					through <OutboundLink
						href="https://github.com/Open-Frontiers/wycademy/issues"
						>GitHub's issue tracker.</OutboundLink
					> If you have found bugs, or want to suggest a new feature in the website,
					you can also submit an issue in there.
				</div>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="It’s Also About You" />
			<div>
				<p class="spaced-paragraph">
					We are here to help you with all things MHF-Z. Whether you're
					interested in <Link inline href="/leaderboard"
						>speedrun leaderboards</Link
					>, <Link inline href="/hunter-notes">guides and tutorials</Link>, or <Link
						inline
						href="/tools">tools and utilities</Link
					>, we want to know how we can best support you. Let us know what
					resources you'd like to see, and we'll do our best to provide them.
				</p>
				<p class="spaced-paragraph">
					We have a <OutboundLink href="https://forms.gle/hfFG7QWNcrCHnDV67"
						>Google Forms</OutboundLink
					> where you can submit your feedback on the website.
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Linking to Wycademy on the web" />
			<div>
				<p>
					If you want to link to Wycademy on your website, you can use the
					following officially endorsed buttons (also called blinkies).
				</p>
				<div class="spaced-paragraph">
					The HTML code for each button is under the image. Save the image and
					edit the <CodeSnippet type="inline" code="src" hideCopyButton /> attribute
					to your image path.
				</div>
				<div class="blinkies-container">
					<div>
						<h3>Small button</h3>
						<img src={BlinkiesSmall} alt="Blinkies small" />
						<CodeSnippet
							code={`<a href='https://wycademy.vercel.app' target='_blank'><img src='${BlinkiesSmall}' alt='Wycademy | MHF-Z Knowledge Base'></a>`}
							type="multi"
						/>
					</div>
					<div>
						<h3>Large button</h3>
						<img src={Blinkies} alt="Blinkies" />
						<CodeSnippet
							code={`<a href='https://wycademy.vercel.app' target='_blank'><img src='${Blinkies}' alt='Wycademy | MHF-Z Knowledge Base'></a>`}
							type="multi"
						/>
					</div>
				</div>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Our Future" />
			<div>
				<div class="spaced-paragraph">
					We use <OutboundLink
						href="https://github.com/Open-Frontiers/wycademy/projects?query=is%3Aopen"
						>GitHub Projects</OutboundLink
					> to keep track of our issues and feature requests.
				</div>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Legal Disclaimer" />
			<div>
				<p class="spaced-paragraph">
					This website is an <strong>unofficial fan project</strong> dedicated
					to preserving and documenting information about Monster Hunter
					Frontier Z. We are
					<strong
						>not affiliated with, endorsed by, or sponsored by CAPCOM Co., Ltd.
						or any of its subsidiaries.</strong
					>
				</p>
				<p class="spaced-paragraph">
					<cite>Monster Hunter Frontier Z</cite> and all related trademarks,
					logos, artwork, and other intellectual property are owned by CAPCOM
					Co., Ltd. This website does
					<strong>not distribute executable game files</strong>
					belonging to CAPCOM. All game-related materials used on this site, including
					screenshots and descriptions, are used under
					<strong>fair use</strong> principles for informational, educational, and
					archival purposes.
				</p>
				<div class="spaced-paragraph">
					For more information, please see our support pages for <Link
						inline
						href="/support/policies/copyright">copyright</Link
					>, <Link inline href="/support/policies/terms-of-service"
						>Terms of Service</Link
					> and <Link inline href="/support/policies/privacy-policy"
						>Privacy Policy</Link
					>.
				</div>
			</div>
		</section>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.blinkies-container {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		div {
			display: flex;
			flex-direction: column;
			width: auto;
			justify-content: start;
			align-items: start;
			gap: 0.5rem;
		}
	}
</style>
