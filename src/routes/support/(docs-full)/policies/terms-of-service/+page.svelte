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
			<strong>Last updated: {termsDates.termsOfService}</strong>
		</p>
		<p class="spaced-paragraph">
			Welcome to Wycademy! By accessing, using or visiting this website (the
			“Website”) and/or the related interfaces or mobile applications we may
			offer (the “Services”), you agree to be bound by these terms and
			conditions (the “Terms”) and our Privacy Policy. Wycademy is a
			community-driven project hosted on GitHub, created and maintained by
			volunteers and contributors. The Website is governed by the principles of
			Free Libre Open Source Software (FLOSS) and licensed under the MIT License
			unless otherwise specified.
		</p>
		<p class="spaced-paragraph">
			In these Terms, the words "Wycademy," "we," "us," and "our" refer to the
			maintainers of the Website and its contributors. The words "you," "User,"
			and "your" refer to anyone accessing or using the Website. If you disagree
			with any of these Terms, please refrain from using the Website. For
			questions or clarifications, contact us via the GitHub repository or other
			provided channels.
		</p>
		<SectionHeading level={2} title="Modification of Terms" />
		<p class="spaced-paragraph">
			We may modify these Terms of Use at any time. Any such modifications will
			apply prospectively, from the date the modifications are made, as
			designated by the “Last Revised” date depicted above. Your use of the
			Website subsequent to any modifications will constitute acceptance of the
			Terms of Use as so changed. You expressly agree that, by updating the
			“Last Revised” date when modifications are made, we are providing you with
			sufficient notice of such modifications, and that you will therefore be
			bound thereby if you continue to use the Website. As such, please check
			the “Last Revised” date prior to each use of the Website by you, as you
			will be bound by these Terms of Use as they exist on the date of each such
			use.
		</p>
		<SectionHeading level={2} title="No Children Under 13" />
		<p class="spaced-paragraph">
			The Website is not directed at or intended for use by children under 13
			years old. You may be required to provide a date of birth to register for
			certain functionality of this Website. You are not permitted to register
			or use Wycademy's Services if you are under 13.
		</p>
		<SectionHeading level={2} title="Ownership of the Website" />
		<p class="spaced-paragraph">
			Wycademy is a collaborative project, and its source code is available
			under the MIT License. All original content (guides, tools, etc.) created
			by Wycademy contributors is licensed under MIT unless otherwise noted.
			User-submitted content, such as speedrun videos or images, remains the
			property of their respective owners.
		</p>
		<SectionHeading
			level={2}
			title="Website Access, Security and Restrictions"
		/>
		<p class="spaced-paragraph">
			You are prohibited from violating or attempting to violate the security of
			the Website, including, without limitation, (a) accessing data not
			intended for such User or logging onto a server or an account which the
			User is not authorized to access; or (b) attempting to probe, scan or test
			the vulnerability of a system or network or to breach security or
			authentication measures without proper authorization; or (c) accessing or
			using the Website or any portion thereof without authorization, in
			violation of these Terms of Use or in violation of applicable law.
		</p>
		<p class="spaced-paragraph">
			You agree not to engage in any activity that compromises the security or
			functionality of the Website, such as:
		</p>
		<UnorderedList class="spaced-list">
			<ListItem
				><p>Attempting unauthorized access to systems or data.</p></ListItem
			><ListItem
				><p>
					Using automated tools like scrapers or bots to extract data.
				</p></ListItem
			><ListItem
				><p>
					Introducing malware or engaging in activities that disrupt the
					Website.
				</p></ListItem
			>
		</UnorderedList>
		<p class="spaced-paragraph">
			Violations may result in restricted access, removal of content, or further
			action.
		</p>
		<p class="spaced-paragraph">
			Violations of system or network security may result in civil or criminal
			liability. The Wycademy contributors will investigate occurrences that may
			involve such violations and may involve, and cooperate with, law
			enforcement authorities in prosecuting users who are involved in such
			violations. You agree not to use any device, software or routine to
			interfere or attempt to interfere with the proper working of this Website
			or any activity being conducted on this Website.
		</p>
		<SectionHeading level={2} title="Consent to Receive Communications" />
		<p class="spaced-paragraph">
			If you register or sign up to receive alerts, emails, or any other
			communications from us, you consent to receive such communications. You
			may opt out of these communications at any time using the prompts
			contained at the bottom of the communications.
		</p>
		<SectionHeading level={2} title="Accuracy and Integrity of Information" />
		<p class="spaced-paragraph">
			It is possible that the Website could include typographical errors,
			inaccuracies or other errors, and that unauthorized additions, deletions
			and alterations could be made to the Website by third parties. In the
			event that an inaccuracy arises, please inform the contributors by
			submitting an issue on GitHub so that it can be corrected. Information
			contained on the Website may be changed or updated without notice.
		</p>
		<SectionHeading level={2} title="Links to Third Party Websites" />
		<p class="spaced-paragraph">
			The Website may contain links to other third-party websites that are not
			under the control of Wycademy (each a “Linked Website” and together the
			“Linked Websites”). Wycademy disclaims any and all responsibility for the
			contents of any Linked Website, including without limitation any link
			contained in a Linked Website, or any changes or updates to a Linked
			Website. Wycademy is not responsible for webcasting or any other form of
			transmission received from any Linked Website. Wycademy is providing these
			links, if any, to you only as a convenience, and the inclusion of any link
			does not necessarily imply endorsement or representations by the
			contributors of the Website or any association with its operators. You are
			encouraged to review any privacy policy or terms of service posted on the
			Linked Websites.
		</p>
		<p class="spaced-paragraph">
			Wycademy provides links to third-party websites, such as video-hosting
			platforms, for convenience. Wycademy does not host or control the content
			of these links and disclaims all responsibility for their accuracy,
			legality, or appropriateness.
		</p>
		<SectionHeading level={2} title="Disclaimer of Warranties" />
		<p class="spaced-paragraph">
			Wycademy is provided "as is" without warranties of any kind, express or
			implied. We do not guarantee the accuracy, completeness, or reliability of
			the Website's content or functionality. Users assume full responsibility
			for their use of the Website.
		</p>
		<SectionHeading level={2} title="No Unlawful or Prohibited Use" />
		<p class="spaced-paragraph">
			By agreeing to these Terms of Use, you warrant to Wycademy that you will
			not use the Website for any purpose that is unlawful or prohibited by
			these Terms of Use. Additionally, Wycademy may immediately terminate any
			person’s use of the Services, including by blocking a User’s IP address or
			deactivating a User’s password(s) or account(s), in the event that these
			Terms are violated or if a User has engaged in conduct that Wycademy, in
			its sole discretion, considers to be unacceptable. Conduct that violates
			these Terms and may result in termination of your access to or use of the
			Services includes but is not limited to:
		</p>
		<UnorderedList class="spaced-list">
			<ListItem
				><p>
					Using or accessing the Website in any manner which could damage,
					disable, overburden, or impair the Website or interfere with any other
					party's use and enjoyment of the Website;
				</p></ListItem
			>
			<ListItem
				><p>
					Obtaining any materials or information through any means not
					intentionally made available or provided for through the Website;
				</p></ListItem
			>
			<ListItem
				><p>
					Restricting or inhibiting any other user from using and enjoying the
					Services without having authorization from Wycademy to do so;
				</p></ListItem
			>
			<ListItem
				><p>
					Impersonating any person or entity or sharing personally identifying
					information of any other person without their consent;
				</p></ListItem
			>
			<ListItem
				><p>
					Posting or transmitting any falsehoods, misrepresentations or
					deceptive material; or any content that is unlawful, fraudulent,
					threatening, abusive, libelous, defamatory, obscene, patently
					offensive, sexually explicit, harassing, hateful or racially or
					ethnically offensive; or content that would be considered a criminal
					offense or trespass or give rise to civil liability; or content that
					is otherwise inappropriate, objectionable or harmful in any way;
				</p></ListItem
			>
			<ListItem
				><p>
					Posting or transmitting any information that poses or creates a safety
					or security risk to any person;
				</p></ListItem
			>
			<ListItem
				><p>
					Posting or transmitting material that violates or infringes upon the
					rights of a third party, including but not limited to copyright,
					trademark, intellectual property rights, rights of privacy or
					publicity, real property rights, or rights in confidential
					information;
				</p></ListItem
			>
			<ListItem
				><p>
					Violating or attempting to violate the security or functionality of
					the Website as discussed above; or
				</p></ListItem
			>
			<ListItem
				><p>
					Violating or attempting to violate any part of these Terms of Use or
					applicable law.
				</p></ListItem
			>
		</UnorderedList>
		<SectionHeading level={2} title="User Submissions through the Website" />
		<p class="spaced-paragraph">
			<strong
				>Original content provided on the site is licensed under MIT. Content
				uploaded by users, such as game cover images, are copyright of their
				respective owners; the same applies to content that is linked to, like
				YouTube videos and external images or documents.
			</strong>
		</p>
		<p class="spaced-paragraph">
			By submitting content to the Website (e.g., speedrun data, comments, or
			guides), you grant Wycademy a non-exclusive, royalty-free license to use,
			modify, and display the content for the purpose of operating and improving
			the Website.
		</p>
		<p class="spaced-paragraph">
			If you submit to us (whether through the Website, by email, or otherwise)
			any comments, ideas, suggestions, information, files, images or other
			materials (each a “User Submission” and collectively, “User Submissions”),
			you agree not to provide any User Submission that (1) violates or
			infringes the privacy, copyright, trademark, trade dress, trade secret or
			intellectual property rights of any person or entity, or (2) contains or
			transmits a virus or any other harmful component. You represent and
			warrant to Wycademy that you have the legal right and authorization to
			provide all User Submissions to Wycademy for the purposes and the
			Wycademy’s use as set forth herein. Wycademy shall have a royalty-free,
			perpetual, irrevocable, transferable right and license to use the User
			Submissions in whatever way Wycademy desires, including without
			limitation, to copy, link to, modify, delete in its entirety, adapt,
			publish, translate, create derivative works from and/or sell, sublicense
			and/or distribute such User Submissions and/or incorporate such User
			Submissions into any form, medium or technology throughout the world.
			Wycademy is and shall be under no obligation, except as warranted in these
			Terms of Use or the Privacy Policy or as otherwise required by law, (1) to
			maintain any User Submissions in confidence; (2) to pay to you any
			compensation for any User Submissions; (3) to provide notice to you or
			attribution regarding any User Submissions; or (4) to respond to any User
			Submissions. Wycademy and its subsidiaries, licensees and third party
			content providers and licensors have the right to assert and enforce these
			provisions relating to User Submissions directly or on its own behalf.
		</p>
		<p class="spaced-paragraph">
			By submitting program-generated data, you agree that Wycademy may use this
			data to verify the integrity of your speedrun submissions. Wycademy makes
			no guarantees about the validity of the submitted data and disclaims
			responsibility for disputes between users regarding such data.
		</p>
		<p class="spaced-paragraph">
			You are solely responsible for ensuring that the links and data you submit
			do not violate any laws, third-party rights, or Wycademy’s rules. Wycademy
			reserves the right to reject or remove submissions at its discretion.
		</p>
		<p class="spaced-paragraph">
			Wycademy reserves the right to moderate, remove, or reject any
			user-submitted content, including but not limited to video links and
			program-generated data, that violates these Terms of Use or is deemed
			inappropriate at Wycademy’s discretion.
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
		<SectionHeading level={2} title="Open-Source Contributions" />
		<p class="spaced-paragraph">
			As an open-source project, Wycademy welcomes contributions. By
			contributing to the GitHub repository, you agree to license your
			contributions under the same terms as the MIT License unless otherwise
			stated.
		</p>
		<SectionHeading level={2} title="Termination" />
		<p class="spaced-paragraph">
			We reserve the right to restrict or terminate access to the Website if a
			User violates these Terms or engages in harmful behavior.
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
		<SectionHeading level={2} title="Contact Information" />
		<p class="spaced-paragraph">
			For questions, suggestions, or issues, please contact us through our
			GitHub repository or other listed support channels.
		</p>

		<SectionHeading level={2} title="General" />
		<p class="spaced-paragraph">
			You agree that no joint venture, partnership, employment, or agency
			relationship exists between you and Wycademy as a result of these Terms of
			Use or your use of the Website. Wycademy’s performance of these Terms of
			Use is subject to existing laws and legal process, and nothing contained
			in these Terms of Use is in derogation of Wycademy’s right to comply with
			governmental, court and law enforcement requests or requirements relating
			to your use of the Website or information provided to or gathered by
			Wycademy with respect to such use.
		</p>
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
			Unless otherwise specified herein or in another written agreement between
			you and Wycademy, these Terms of Use constitute the entire agreement
			between the User and Wycademy with respect to the Website and it
			supersedes all prior or contemporaneous communications and proposals,
			whether electronic, oral or written, between the User and Wycademy with
			respect to the Website. A printed version of these Terms of Use and of any
			notice given in electronic form shall be admissible in judicial or
			administrative proceedings based upon or relating to these Terms of Use to
			the same extent and subject to the same conditions as other business
			documents and records originally generated and maintained in printed form.
			No waiver by either party of any breach or default hereunder shall be
			deemed to be a waiver of any preceding or subsequent breach or default.
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
