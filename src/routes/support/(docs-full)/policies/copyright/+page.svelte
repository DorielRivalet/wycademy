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
							misinformation and provide a reference point for those who might
							be misled.
						</div></ListItem
					>
				</OrderedList>
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
			<SectionHeading level={2} title="Our Compliance" />
			<div>
				<section>
					<SectionHeading level={3} title="Disclaimer" />
					<div>
						<div class="spaced-paragraph">
							If you have any claims or issues related to copyright infringement
							or other intellectual property concerns regarding content on this
							website, please direct them to us for resolution. We are committed
							to addressing any valid concerns and ensuring that our work
							remains compliant with all applicable laws and regulations.
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
						<p>
							In summary, as long as you’re independently implementing a work in
							a certain programming language or framework, with your own code
							and a different UI, and not copying any unique elements of an
							external work, you are not violating copyright.
						</p>
					</div>
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
									conduct.
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
