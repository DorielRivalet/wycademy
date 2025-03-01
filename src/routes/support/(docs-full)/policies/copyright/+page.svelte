<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import OrderedList from 'carbon-components-svelte/src/OrderedList/OrderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Copyright'} />
		<section>
			<SectionHeading level={2} title="Overview" />
			<div>
				<div class="spaced-paragraph">
					This document, or page, aims to clarify the state of copyright and the
					legal basis for the content hosted on this website. Its purposes are:
				</div>
				<OrderedList class="spaced-list">
					<ListItem
						><div class="paragraph-long-02">
							<strong>Transparency</strong>: To demonstrate our commitment to
							respecting intellectual property rights and adhering to
							open-source principles, particularly under the MIT license.
						</div></ListItem
					>
					<ListItem
						><div class="paragraph-long-02">
							<strong>Clarification</strong>: To clearly state the legal basis
							for the content on this site, emphasizing that our works are
							original, and to address and refute any meritless claims made by
							other parties, with explanations as to how and why this is the
							case.
						</div></ListItem
					>
					<ListItem
						><div class="paragraph-long-02">
							<strong>Defensive Measure</strong>: In instances where
							misinformation is spread about our works, this document serves as
							a clear, well-documented statement that can counteract such
							misinformation and proactively provide a reference point for those
							who might be misled.
						</div></ListItem
					>
				</OrderedList>
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="Summary" />
			<div>
				<UnorderedList class="spaced-list">
					<ListItem
						><p>
							<strong>Our Code:</strong> MIT-licensed (free to use with attribution).
						</p></ListItem
					><ListItem
						><p>
							<strong>Our Content: </strong> Independently created, respects copyright
							law.
						</p></ListItem
					><ListItem
						><p>
							<strong>Icons:</strong> Our vector-based icons are original and different
							from Capcom’s raster icons.
						</p></ListItem
					><ListItem
						><p>
							<strong>Concerns?</strong> Contact us via GitHub Issues, not Discord
							or other channels.
						</p></ListItem
					>
					<ListItem
						><p>
							<strong
								>We reject meritless or bad-faith copyright claims.
							</strong>
						</p></ListItem
					>
				</UnorderedList>
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="Definitions" />
			<div>
				<p class="spaced-paragraph">
					To ensure clarity in attribution, copyright, and artistic discussions,
					the following terms are defined:
				</p>

				<UnorderedList>
					<ListItem
						><p>
							<strong>Raster Image:</strong> A digital image composed of pixels (e.g.,
							PNG, JPG). Raster images lose quality when resized.
						</p></ListItem
					><ListItem
						><p>
							<strong>Vector Image:</strong> A digital image based on mathematical
							paths (e.g., SVG, AI). Vector images can be scaled without losing quality.
						</p></ListItem
					><ListItem
						><p>
							<strong>Vectorization:</strong> The process of converting a raster
							image into a vector image, either manually (tracing) or automatically
							(software-assisted).
						</p></ListItem
					><ListItem
						><p>
							<strong>Derivative Work:</strong> A new creation based on or adapted
							from an existing work. Depending on copyright laws, derivative works
							may require permission from the original creator.
						</p></ListItem
					><ListItem
						><p>
							<strong>Raster Image:</strong> A digital image composed of pixels (e.g.,
							PNG, JPG).
						</p></ListItem
					><ListItem
						><p>
							<strong>Original Work:</strong> A piece of art, design, or text created
							from scratch without directly copying or modifying an existing work.
						</p></ListItem
					><ListItem
						><p>
							<strong>Inspired Work:</strong> A creation that takes inspiration from
							another work but does not closely replicate its composition, lines,
							or structure.
						</p></ListItem
					><ListItem
						><p>
							<strong>Attribution:</strong> The act of crediting the original creator
							of a work. Attribution does not automatically grant permission for
							reuse.
						</p></ListItem
					><ListItem
						><p>
							<strong>Permission:</strong> Getting explicit approval from the creator
							to use their work.
						</p></ListItem
					><ListItem
						><p>
							<strong>License:</strong> A legal agreement that dictates how you can
							use the work (e.g., Creative Commons, MIT, etc.)
						</p></ListItem
					><ListItem
						><p>
							<strong>Public Domain:</strong> Works not protected by copyright, either
							due to age or explicit release by the creator, and are free to use
							without restriction.
						</p></ListItem
					><ListItem
						><p>
							<strong>Fair Use/Fair Dealing:</strong> Legal doctrines allowing limited
							use of copyrighted material under specific circumstances (e.g., commentary,
							education, parody). These rules vary by country.
						</p></ListItem
					>
				</UnorderedList>
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="Our License" />
			<div>
				<p>Our website’s code is licensed under the MIT License.</p>
				<section>
					<SectionHeading level={3} title="MIT License Full Text" />
					<div>
						<p class="spaced-paragraph">
							As shown in our <OutboundLink
								href="https://github.com/DorielRivalet/wycademy?tab=MIT-1-ov-file"
								>GitHub repository:</OutboundLink
							>
						</p>
						<div class="license">
							<p class="spaced-paragraph">MIT License</p>
							<p class="spaced-paragraph">Copyright (c) 2023 Doriel Rivalet</p>
							<p class="spaced-paragraph">
								Permission is hereby granted, free of charge, to any person
								obtaining a copy of this software and associated documentation
								files (the "Software"), to deal in the Software without
								restriction, including without limitation the rights to use,
								copy, modify, merge, publish, distribute, sublicense, and/or
								sell copies of the Software, and to permit persons to whom the
								Software is furnished to do so, subject to the following
								conditions:
							</p>
							<p class="spaced-paragraph">
								The above copyright notice and this permission notice shall be
								included in all copies or substantial portions of the Software.
							</p>
							<p>
								THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
								EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
								OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
								NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
								HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
								WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
								FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
								OTHER DEALINGS IN THE SOFTWARE.
							</p>
						</div>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Summary of the MIT License" />
					<div>
						<p class="spaced-paragraph">
							The MIT License is a permissive free software license that allows
							for the reuse of software, including the ability to copy, modify,
							merge, publish, distribute, sublicense, and sell copies of the
							software, provided that the original copyright notice and
							permission notice are included in all copies or substantial
							portions of the software.
						</p>
						<p class="spaced-paragraph">
							This license allows users to use our code in nearly any way they
							see fit, including in commercial applications, with minimal
							restrictions. The simplicity and openness of the MIT License
							encourage collaboration and sharing while maintaining the original
							author’s rights.
						</p>
					</div>
				</section>
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="Copyright & Attribution" />
			<div>
				<section>
					<SectionHeading level={3} title="CAPCOM Assets" />
					<div>
						<p class="spaced-paragraph">
							Wycademy is a <strong>fan-made, non-commercial</strong> project
							focused on Monster Hunter Frontier Z. The original assets,
							including
							<strong>monster icons, game models, and UI elements,</strong> are
							copyrighted by <strong>CAPCOM CO., LTD.</strong>. Any use of
							CAPCOM-owned materials falls under <strong>fair use</strong> for documentation,
							education, and community preservation.
						</p>
						<p class="spaced-paragraph">
							Wycademy is not <strong
								>affiliated with, endorsed, or sponsored by CAPCOM.</strong
							>
							All CAPCOM trademarks, logos, and copyrighted materials belong to their
							respective owners.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Fan-Made / Derivative Works" />
					<div>
						<p class="spaced-paragraph">
							Certain visual assets, including <strong
								>redrawn monster icons</strong
							>
							and
							<strong>community-contributed illustrations,</strong> are created
							by fans. These works may be
							<strong
								>inspired by CAPCOM's designs but are not direct copies.</strong
							> Wherever applicable, attribution is provided to the original creators.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Original Work by Wycademy" />
					<div>
						<p class="spaced-paragraph">All unique assets, including:</p>
						<UnorderedList>
							<ListItem
								><p>
									Vector redraws of game elements for web clarity.
								</p></ListItem
							>
							<ListItem
								><p>
									UI/UX components built for the Wycademy platform.
								</p></ListItem
							>
							<ListItem
								><p>Custom tools, data organization, and guides.</p></ListItem
							>
						</UnorderedList>
						<p class="spaced-paragraph">
							…are created and maintained by Wycademy under the MIT License.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Attribution & Requests" />
					<div>
						<p class="spaced-paragraph">
							We respect the work of all artists and contributors. If you
							believe an asset needs proper attribution or removal, please
							<OutboundLink
								href="https://github.com/DorielRivalet/wycademy/issues"
								>contact us</OutboundLink
							> with details, and we’ll review it promptly.
						</p>
					</div>
				</section>
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="Our Compliance" />
			<div>
				<section>
					<SectionHeading level={3} title="Reporting Copyright Issues" />
					<div>
						<div class="spaced-paragraph">
							If you believe any content on this website violates copyright law,
							please submit a report via our <OutboundLink
								href="https://github.com/DorielRivalet/wycademy/issues"
								>GitHub issue tracker</OutboundLink
							>. If you have any claims or issues related to copyright
							infringement or other intellectual property concerns regarding
							content on this website, please direct them to us for resolution <OutboundLink
								href="https://github.com/DorielRivalet/wycademy/issues"
								>in our GitHub issue tracker</OutboundLink
							>.
							<strong
								>We do not handle copyright concerns through Discord or other
								unofficial channels, as they lack proper documentation and
								tracking.</strong
							> We are committed to addressing any valid concerns and ensuring that
							our work remains compliant with all applicable laws and regulations.
						</div>
						<p class="spaced-paragraph">
							However, please be aware that in most cases, a copyright claim
							should be submitted by the copyright owner or an authorized agent
							acting on behalf of the copyright owner. This means that the
							person or entity who holds the copyright has the primary right to
							file a claim. A third party, such as a lawyer or a company
							specializing in copyright enforcement, would need explicit
							authorization to act on behalf of the copyright owner. If someone
							other than the copyright owner or their authorized agent tries to
							submit a claim, it might not be considered valid, and the platform
							receiving the claim may reject it or require further proof of
							authorization.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Original Work Statement" />
					<div>
						<p class="spaced-paragraph">
							The content, tools, and other works on this website are original
							works created by our team or contributors. We have ensured that
							our work does not infringe on the rights of others. Any
							resemblance to other works is coincidental or results from the
							shared use of publicly available game mechanics, which are not
							subject to copyright.
						</p>
						<p class="spaced-paragraph">
							Additionally, the monster icons featured on this site are
							vector-based representations created by us, distinct from Capcom’s
							raster-based icons. These vector icons are original works and do
							not infringe on Capcom’s copyright. The characters themselves
							(monsters in this case) still belong to Capcom. To see an example
							of these vector icons, visit our <Link
								inline
								href="/tools/generator/icon">Icon Generator.</Link
							>
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Copyright Compliance" />
					<div>
						<p class="spaced-paragraph">
							We respect copyright laws and have taken all necessary steps to
							ensure that any third-party content used on this site is
							appropriately licensed or used with proper attribution. If we have
							utilized third-party content, it is done in compliance with the
							terms set forth by the original creators. Should any issues arise,
							we are committed to promptly addressing and rectifying them.
						</p>
						<p>
							You can find credit information and acknowledgements in <OutboundLink
								href="https://github.com/DorielRivalet/wycademy?tab=readme-ov-file#acknowledgements"
								>our GitHub respository's README file.</OutboundLink
							>. We also insert license text in the source code at the top of
							files where applicable.
						</p>
					</div>
				</section>
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="Disclaimers" />
			<div>
				<section>
					<SectionHeading level={3} title="Public Misrepresentations" />
					<div>
						<p class="spaced-paragraph">
							There have been instances of incorrect claims regarding our work.
							To clarify, our content is legally and ethically sound, created
							independently, and adheres to copyright law. These claims, which
							suggest otherwise, lack a legal basis and are intended to mislead
							the public. We provide examples and further explanations below
							this section.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading
						level={3}
						title="Examples of Undesired Behavior or Actions"
					/>
					<div>
						<UnorderedList class="spaced-list">
							<ListItem>
								<p>
									<strong>Watermarking Capcom Icons</strong>: Placing a
									watermark on Capcom’s original monster icons and claiming
									ownership is an infringement of Capcom’s copyright, not a
									demonstration of legitimate ownership.
								</p>
								<OrderedList nested>
									<ListItem
										><p>
											<strong>Capcom's Copyright</strong>: Capcom, as the
											original creator of the monster icons, holds the copyright
											to those images. This gives them the exclusive right to
											reproduce, distribute, display, or create derivative works
											based on those icons.
										</p></ListItem
									>
									<ListItem
										><p>
											<strong>Unauthorized Use</strong>: If someone takes
											Capcom's copyrighted icons and adds their watermark, they
											are creating an unauthorized derivative work. Even if they
											add a watermark or make minor modifications, the
											underlying image still belongs to Capcom, and they would
											need permission from Capcom to use it in this way.
										</p></ListItem
									>
									<ListItem
										><p>
											<strong>Claiming Ownership</strong>: By placing a
											watermark on the image, the person is falsely implying
											ownership or authorship of the image, which could mislead
											others and is a form of misrepresentation.
										</p></ListItem
									>
									<ListItem
										><p>
											<strong>Accusing Others of Stealing</strong>: If the
											person is accusing others of stealing "their" version of
											the image, this is not legally valid since the image
											originally belongs to Capcom. Any claim they make based on
											their unauthorized use would not hold up legally.
										</p></ListItem
									>
								</OrderedList></ListItem
							>
						</UnorderedList>
						<p class="spaced-paragraph">
							In summary, such a person would be infringing on Capcom's
							copyright by using their monster icons without permission and
							adding a watermark. This not only violates copyright law but also
							potentially misleads others about the ownership of the work.
							Capcom would have the right to take legal action if they became
							aware of this unauthorized use.
						</p>
						<p class="spaced-paragraph">
							To reiterate, the monster icons featured on this site are
							vector-based representations created by us, distinct from Capcom’s
							raster-based icons. These vector icons are original works and do
							not infringe on Capcom’s copyright. The characters themselves
							(monsters in this case) still belong to Capcom. To see an example
							of these vector icons, visit our <Link
								inline
								href="/tools/generator/icon">Icon Generator.</Link
							>
						</p>
						<UnorderedList class="spaced-list">
							<ListItem
								><p>
									<strong>False Claims About Our Work</strong>: Accusations that
									our works or other tools are stolen or copied are
									unsubstantiated. Our tools are developed independently, based
									on publicly available information, and do not use any
									proprietary code or design elements from other sources.
								</p>
								<OrderedList nested>
									<ListItem
										><p>
											<strong>Copyright on Functionalities</strong>: Generally,
											copyright law does not protect ideas, procedures, methods
											of operation, or mathematical concepts. If an external
											work is based on externally set constraints by a video
											game (such as formulas or in-game mechanics), those
											underlying principles are not protected by copyright. What
											might be protected is the specific expression of those
											ideas—like the code, design, and overall presentation.
										</p></ListItem
									>
									<ListItem
										><p>
											<strong>Facts Are Not Copyrightable</strong>: Copyright
											law protects
											<strong>the way something is written,</strong> not the facts
											themselves. If a wiki states, "Rathalos has high fire resistance,"
											that’s just factual data, and you can include it.
										</p></ListItem
									>

									<ListItem
										><p>
											<strong>Paraphrasing Is Key</strong>: If you read their
											info, process it, and then write it in your own words,
											it’s not a direct reproduction.
										</p></ListItem
									>

									<ListItem
										><p>
											<strong>Original Code</strong>: If you're not copying the
											code that was written in a certain programming language or
											framework, but instead writing your own implementation in
											another programming language or framework, you're creating
											an independent work. Copyright would only apply if you
											directly copied substantial portions of the original code.
										</p></ListItem
									>
									<ListItem
										><p>
											<strong>User Interface (UI)</strong>: Creating a different
											UI further distinguishes a work from another. Visual
											design and layout can be protected under copyright, but
											since the UI is different, it's not infringing on that
											aspect.
										</p></ListItem
									>
								</OrderedList></ListItem
							>
						</UnorderedList>
						<p class="spaced-paragraph">
							In summary, as long as you’re independently implementing a work in
							a certain programming language or framework, with your own code
							and a different UI, and not copying any unique elements of an
							external work, you are not violating copyright.
						</p>
					</div>
					<section>
						<SectionHeading level={4} title="Abuse of Copyright Claims" />
						<div>
							<p class="spaced-paragraph">
								We recognize that some individuals misuse copyright claims in
								bad faith—whether to undermine legitimate work, settle personal
								disputes, or mislead the community.
							</p>
							<p class="spaced-paragraph">
								We take all copyright concerns seriously but reserve the right
								to dismiss claims that:
							</p>
							<UnorderedList class="spaced-list">
								<ListItem>
									<p>
										Are not filed by the rightful copyright owner or authorized
										agent.
									</p>
								</ListItem>
								<ListItem>
									<p>
										Lack legal merit (e.g., claiming ownership over content that
										is clearly public domain, fair use, or independently
										created).
									</p>
								</ListItem>
								<ListItem>
									<p>
										Appear to be retaliatory or malicious rather than genuine
										copyright concerns.
									</p>
								</ListItem>
							</UnorderedList>
							<p>
								<strong
									>Submitting false or misleading copyright claims may itself be
									a violation of legal and platform policies.
								</strong>
							</p>
						</div>
					</section>
				</section>
				<section>
					<SectionHeading
						level={3}
						title="Examples of Desired Behavior or Actions"
					/>
					<div>
						<UnorderedList>
							<ListItem
								><p>
									<strong>Direct Contact</strong>: If there are any issues or
									concerns regarding content on this website, please contact us
									directly for resolution. Publicly shaming or involving others
									in such matters is unproductive and contrary to professional
									conduct. If you have any issues or concerns, reach out to us
									through <OutboundLink
										href="https://github.com/DorielRivalet/wycademy/issues"
										>GitHub's issue tracker.</OutboundLink
									>
								</p></ListItem
							>
							<ListItem
								><p>
									<strong>Open Collaboration</strong>: We are open to
									collaboration and cross-referencing with other creators in the
									community. Our philosophy is rooted in helping players, and we
									believe in working together for the benefit of the community.
								</p></ListItem
							>
							<ListItem
								><p>
									<strong>Good Faith</strong>: We ask that any concerns be
									raised in good faith, with the understanding that we are
									committed to ethical practices and respect for intellectual
									property.
								</p></ListItem
							>
						</UnorderedList>
					</div>
				</section>
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="Closing Notes" />
			<div>
				<div class="spaced-paragraph">
					We hope this document clarifies our stance on copyright and
					intellectual property. If you want to learn more about our philosophy
					and goals, please visit <Link inline href="/support/website/about"
						>our About page.</Link
					>
				</div>
			</div>
		</section>

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

<style lang="scss">
	@use '@carbon/type';

	.page-turn {
		margin-top: 4rem;
	}

	.license > p {
		@include type.type-style('legal-02');
	}
</style>
