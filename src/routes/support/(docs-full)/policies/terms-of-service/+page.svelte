<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import { termsDates } from '$lib/client/modules/terms';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Terms of Service'} />
		<p class="spaced-paragraph">
			<strong>Effective Date: {termsDates.termsOfService}</strong>
		</p>
		<p class="spaced-paragraph">
			Welcome to Wycademy! By accessing or using this website (the "Website")
			and any related interfaces or mobile applications we may offer (the
			"Services"), you agree to be bound by these Terms of Service (the "Terms")
			and our Privacy Policy. Wycademy is a community-driven project hosted on
			GitHub, created and maintained by volunteers and contributors. The Website
			operates under the principles of Free Libre Open Source Software (FLOSS)
			and is licensed under the MIT License unless otherwise specified.
		</p>
		<p class="spaced-paragraph">
			In these Terms, "Wycademy," "we," "us," and "our" refer to the maintainers
			of the Website and its contributors. "You," "User," and "your" refer to
			anyone accessing or using the Website. If you disagree with any of these
			Terms, please refrain from using the Website. For questions or
			clarifications, contact us via our GitHub repository or other provided
			channels.
		</p>
		<SectionHeading level={2} title="Modification of Terms" />
		<p class="spaced-paragraph">
			We may modify these Terms at any time. Any modifications will apply
			prospectively from the date they are made, as indicated by the "Effective
			Date" date above. Your continued use of the Website constitutes acceptance
			of the updated Terms. Please review the Terms periodically for changes.
		</p>
		<SectionHeading level={2} title="No Children Under 13" />
		<p class="spaced-paragraph">
			The Website is not intended for children under 13 years old. If you are
			under 13, you may not register or use Wycademy's Services.
		</p>
		<SectionHeading level={2} title="Ownership of the Website" />
		<p class="spaced-paragraph">
			Wycademy is a collaborative project with its source code available under
			the MIT License. All original content (guides, tools, etc.) created by
			Wycademy contributors is licensed under MIT unless otherwise noted.
			User-submitted content, such as speedrun videos or images, remains the
			property of its respective owners.
		</p>
		<SectionHeading
			level={2}
			title="Website Access, Security and Restrictions"
		/>
		<p class="spaced-paragraph">You agree not to:</p>
		<UnorderedList class="spaced-list">
			<ListItem><p>Attempt unauthorized access to systems or data.</p></ListItem
			>
			<ListItem
				><p>
					Use automated tools (e.g., scrapers, bots) to extract data.
				</p></ListItem
			>
			<ListItem
				><p>
					Introduce malware or engage in activities that disrupt the Website.
				</p></ListItem
			>
			<ListItem
				><p>
					Violate or attempt to violate Website security, which may result in
					legal action.
				</p></ListItem
			>
		</UnorderedList>

		<SectionHeading level={2} title="Consent to Receive Communications" />
		<p class="spaced-paragraph">
			By registering or signing up for alerts, emails, or notifications, you
			consent to receive communications from us. You may opt out at any time via
			the provided instructions.
		</p>
		<SectionHeading level={2} title="Accuracy and Integrity of Information" />
		<p class="spaced-paragraph">
			While we strive for accuracy, the Website may contain errors or
			unauthorized modifications. If you identify inaccuracies, please report
			them via GitHub.
		</p>
		<SectionHeading level={2} title="Links to Third Party Websites" />
		<p class="spaced-paragraph">
			The Website may link to third-party websites, but Wycademy does not
			control or endorse their content. Users access external links at their own
			risk.
		</p>

		<SectionHeading level={2} title="Disclaimer of Warranties" />
		<p class="spaced-paragraph">
			Wycademy is provided "as is" without warranties of any kind, express or
			implied. We do not guarantee the accuracy, completeness, or reliability of
			the Website’s content or functionality.
		</p>
		<SectionHeading level={2} title="No Unlawful or Prohibited Use" />
		<p class="spaced-paragraph">
			You agree not to use the Website for unlawful purposes, including but not
			limited to:
		</p>
		<UnorderedList class="spaced-list">
			<ListItem
				><p>Overloading, disabling, or impairing the Website.</p></ListItem
			>
			<ListItem
				><p>
					Impersonating others or sharing personal information without consent.
				</p></ListItem
			>
			<ListItem><p>Posting unlawful, false, or offensive content.</p></ListItem>
			<ListItem
				><p>
					Violating copyright, trademark, or intellectual property rights.
				</p></ListItem
			>
		</UnorderedList>
		<p class="spaced-paragraph">
			Violating these rules may result in restricted access, content removal, or
			further action.
		</p>
		<SectionHeading level={2} title="User Submissions" />
		<p class="spaced-paragraph">
			<strong
				>By submitting content to Wycademy (e.g., speedrun data, comments,
				guides), you grant us a non-exclusive, royalty-free license to use,
				modify, and display it for Website operations. User-submitted content
				must not violate third-party rights, contain harmful software, or breach
				applicable laws.
			</strong>
		</p>

		<SectionHeading level={2} title="Limitation of Liability" />
		<p class="spaced-paragraph">
			To the maximum extent permitted by law, Wycademy and its contributors
			shall not be held liable for any damages arising from the use or inability
			to use the Website, including data loss, interruption, or unauthorized
			access.
		</p>
		<p class="spaced-paragraph">
			Wycademy disclaims all liability for the accuracy, reliability, or
			legality of user-submitted links or data and any issues arising from
			third-party websites. Users interact with third-party websites at their
			own risk.
		</p>

		<SectionHeading level={2} title="Enforcement and Termination" />
		<p class="spaced-paragraph">
			Wycademy may suspend or terminate access to the Website for violations of
			these Terms. We reserve the right to remove any content at our discretion.
		</p>
		<SectionHeading level={2} title="Account Inactivity" />
		<p class="spaced-paragraph">
			We reserve the right to remove accounts deemed inactive. An account may be
			classified as inactive if:
		</p>
		<UnorderedList class="spaced-list">
			<ListItem
				><p>
					The user has never submitted a quest or speedrun since account
					creation, for a period of 3 months or longer.
				</p></ListItem
			>
		</UnorderedList>
		<p class="spaced-paragraph">
			Inactive accounts may be removed to maintain the integrity and efficiency
			of the platform. If your account is removed due to inactivity, you may
			contact us to inquire about re-registration.
		</p>

		<SectionHeading level={2} title="General" />

		<p class="spaced-paragraph">
			If any part of these Terms of Use is determined to be invalid or
			unenforceable pursuant to applicable law including, but not limited to,
			the warranty disclaimers and liability limitations set forth above, then
			the invalid or unenforceable provision will be deemed superseded by a
			valid, enforceable provision that most closely matches the intent of the
			original provision and the remainder of the Terms of Use shall continue in
			effect.
		</p>

		<p class="spaced-paragraph">
			Any heading, caption, or paragraph title contained in these Terms of Use
			is inserted only as a matter of convenience and in no way defines or
			explains any paragraph or provision hereof. Nothing in these Terms of Use
			shall be deemed to confer any third-party rights or benefits. These Terms
			of Use, and any rights and licenses granted hereunder, may not be
			transferred or assigned by you, but may be assigned by Wycademy without
			restriction.
		</p>
		<p class="spaced-paragraph">
			Any rights not expressly granted herein are reserved.
		</p>
		<p class="spaced-paragraph">Wycademy</p>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

<style lang="scss">
	@use '@carbon/type' as type;

	.legal {
		@include type.type-style('legal-02');
	}

	.page-turn {
		margin-top: 4rem;
	}
</style>
