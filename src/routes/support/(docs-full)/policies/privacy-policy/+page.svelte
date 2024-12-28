<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import OrderedList from 'carbon-components-svelte/src/OrderedList/OrderedList.svelte';
	import { termsDates } from '$lib/client/modules/terms';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Privacy Policy'} />
		<p class="spaced-paragraph">
			<strong>Last updated: {termsDates.privacyPolicy}</strong>
		</p>
		<p class="spaced-paragraph">
			This Privacy Policy describes how Wycademy collects, uses, and discloses
			information, and what choices you have with respect to that information.
		</p>
		<SectionHeading level={2} title="Application of this Privacy Policy" />
		<p class="spaced-paragraph">
			This Privacy Policy applies to all websites, Internet properties,
			applications, and accounts operated by Wycademy. This includes all
			websites, applications, accounts, and services owned or operated by
			Wycademy (collectively, the "Services").
		</p>
		<p class="spaced-paragraph">
			This Privacy Policy applies to all Users of the Services, where “User” is
			defined as anyone who accesses the Website, regardless of subscription
			status or lack thereof.
		</p>
		<p class="spaced-paragraph">
			Please refer to our Terms of Use (the "Terms") for additional information
			regarding your use of the Website and the Services provided by Wycademy.
		</p>
		<p class="spaced-paragraph">
			By accessing the Website or using the Services, you acknowledge that you
			have read, understand, and accept this Privacy Policy and the Terms. For
			Users who access the Website without signing in, we reserve the right to
			collect and process Service Usage Data that may be used for legitimate
			interests of Wycademy. For Users who create an account with Wycademy,
			including paying subscribers, you may consent to the collection and
			processing of your data by agreeing to the Customer Agreement presented
			during the sign up process.
		</p>

		<SectionHeading level={2} title="Information We Collect and Receive" />
		<p class="spaced-paragraph">
			We collect data in three different categories:
		</p>
		<p class="spaced-paragraph">
			Website Information. We collect certain categories of information from all
			users of our website.
		</p>
		<UnorderedList class="spaced-list">
			<ListItem
				><p>
					<strong>Service usage data.</strong> With the help of third parties like
					Vercel Web Analytics we automatically collect visitor usage data. This
					may include your IP address, location, device and browser type, demographic
					information, or similar information, as well as a record of the pages or
					screens you visit. This data is anonymized and not connected to your specific
					account. Vercel Web Analytics provides privacy-friendly insights into website
					traffic, allowing Wycademy to track page views, user demographics, and
					custom events without using cookies. Instead of relying on cookies like
					many analytics products, visitors are identified by a hash created from
					the incoming request. Using a generated hash provides a privacy-friendly
					experience for Wycademy's visitors and means visitors can't be tracked
					between different days or different websites.
				</p></ListItem
			><ListItem
				><p>
					<strong>Service logs.</strong> As with most websites and applications,
					our services automatically collect information when you access the Service.
					This log data may include your IP address, the address or location of the
					requested web page, your browser type and settings, the date and time of
					the event, and data from your user session (such as your session identifier).
				</p></ListItem
			><ListItem
				><p>
					<strong>Email communications.</strong> For users who choose to send us
					email (such as for customer service, media or business development inquiries,
					or other purposes), we retain a record of the conversation including your
					email address and messages.
				</p></ListItem
			><ListItem
				><p>
					<strong>Chat and social media messages.</strong> For users who interact
					with us on social media or chat services (like YouTube, Twitter or Discord,
					respectively), we may retain a record of those communications including
					your service identity and messages.
				</p></ListItem
			>
		</UnorderedList>
		<p class="spaced-paragraph">
			User information. For visitors who use our Services, we may collect the
			following information. None of this information is collected
			automatically, you must choose to provide it.
		</p>
		<UnorderedList class="spaced-list">
			<ListItem
				><p>
					<strong>Email addresses.</strong> Users may choose to provide their email
					address, which we store on our servers.
				</p></ListItem
			><ListItem
				><p>
					<strong>Third party accounts.</strong> Users may choose to link third party
					accounts like Steam, Battle.net, Twitch, Discord, Twitter, etc. In this
					case, we store the identities and related metadata for those third party
					accounts, which includes emails.
				</p></ListItem
			><ListItem
				><p>
					<strong>User submitted content.</strong> Users may choose to submit original
					content like forum threads, comments, profile customizations, and other
					user created or submitted content. We collect and store this information
					on our servers.
				</p></ListItem
			>
		</UnorderedList>
		<SectionHeading level={2} title="How We Use Information" />

		<p class="spaced-paragraph">
			We use the information collected for the following purposes:
		</p>
		<UnorderedList class="spaced-list">
			<ListItem
				><p>
					<strong
						>To provide, update, maintain, and operate the Services.</strong
					> We use User, Customer, and Website Information to provide customized
					features for you on the Services. We may use Website Information to improve
					website performance and resolve problems with the Services.
				</p></ListItem
			><ListItem
				><p>
					<strong
						>To develop and provide additional features on the Services.</strong
					> We use User, Customer and Website Information to aide in making decisions
					about the future of the Services, such as making improvements or creating
					new features. For example, we may aggregate and anonymize User Information
					and/or Customer Information to determine the number of visitors who have
					linked their Twitch account and whether further information about the benefits
					of such linking would be helpful.
				</p></ListItem
			><ListItem
				><p>
					<strong
						>To communicate with you by responding to your requests, comments
						and questions.
					</strong> We use User, Customer, and Website Information to aide in the
					resolution of support tickets for purposes of customer service or business
					development.
				</p></ListItem
			>
			<ListItem
				><p>
					<strong>To send emails and other communications.</strong> We use User and
					Customer Information to send you service, technical and other administrative
					emails, messages and other types of communications. We may also contact
					you to inform you about changes in our Services or important Services-related
					notices. These communications are considered part of the Services and you
					may not opt out of them without discontinuing use of the Services.
				</p></ListItem
			>
			<ListItem
				><p>
					<strong
						>For billing, account management and other administrative matters.</strong
					>
					We use User and Customer Information to contact you for billing, account
					management and similar reasons.
				</p></ListItem
			>
			<ListItem
				><p>
					<strong>For business development purposes.</strong> We use Website Information
					to aide in the growth of the business of Wycademy. To investigate and help
					prevent security issues, fraud, or other illegal activity.
				</p></ListItem
			>
			<ListItem
				><p>
					For other purposes as required by applicable law, legal process or
					regulation, including, but not limited to, in the event that any of
					the personal information you provided to us is exposed to unauthorized
					third-parties. In the event of such unauthorized exposure, we
					expressly reserve the right to provide notice to you electronically
					via any email address you have provided directly to us if permitted to
					do so by law.
				</p></ListItem
			>
			<ListItem
				><p>
					To investigate or defend against third-party claims against Wycademy.
				</p></ListItem
			>
			<ListItem
				><p>
					To respond to a request by you, or a person authorized by you, to
					disclose or update any collected information.
				</p></ListItem
			>
			<ListItem
				><p>
					For any other purpose after receiving your express consent.
				</p></ListItem
			>
		</UnorderedList>
		<SectionHeading
			level={2}
			title="How and to Whom We Share and Disclose Information"
		/>
		<p class="spaced-paragraph">
			We may share the information we collect according to the following
			guidelines:
		</p>
		<UnorderedList class="spaced-list">
			<ListItem
				><p>
					<strong>Display on the Services. </strong> We may display User Information
					to other users of the Services. For example, by authorizing and linking
					your Discord account, we may show your data from that account to other
					visitors.
				</p></ListItem
			><ListItem
				><p>
					<strong>Data insights and matching. </strong> We may display User Information
					to users of the Services, including matched, analyzed or accumulated data
					to our users.
				</p></ListItem
			><ListItem
				><p>
					<strong>Third party service providers and partners.</strong> We may engage
					third party companies or individuals as service providers or business partners
					to process data to support our business. These third parties may, for example,
					provide virtual computing, storage, payment, help desk, bug tracking, or
					other related services. We may share Website Information with these third
					parties, and we make a conscious effort to share the minimum amount of
					data possible with each third party service.
				</p></ListItem
			>
			<ListItem
				><p>
					<strong>Aggregated or anonymized data.</strong> We may disclose or use
					aggregated or de-identified data for any purpose. For example, we may share
					aggregated or de-identified account, usage, and log with prospects or partners
					for business or research purposes.
				</p></ListItem
			>
			<ListItem
				><p>
					<strong>Upon request.</strong> We may share or disclose User Information
					in accordance with the instructions of the User, and in compliance with
					applicable law and legal process.
				</p></ListItem
			>
			<ListItem
				><p>
					<strong>To comply with laws.</strong> If we receive a request for information,
					we may disclose User, Customer, or Website Information if we reasonably
					believe disclosure is in accordance with or required by any applicable
					law, regulation or legal process. Upon receipt of a request for information,
					Wycademy reserves the right to verify the identity of the person requesting
					access to or update of the information as allowed by applicable law.
				</p></ListItem
			>
			<ListItem
				><p>
					<strong>To enforce our rights, prevent fraud, and for safety.</strong>
					We may use data to protect and defend the rights, property or safety of
					Wycademy or third parties, including enforcing contracts or policies, or
					in connection with investigating and preventing fraud or security issues.
				</p></ListItem
			>
			<ListItem
				><p>
					<strong>With consent.</strong> We may share data with third parties when
					we have your consent to do so.
				</p></ListItem
			>
		</UnorderedList>
		<SectionHeading level={2} title="Data Retention" />
		<p class="spaced-paragraph">
			We may retain User, Customer, and Website Information for as long as
			necessary to aide in delivery of the Services, unless a different
			retention period is required by any applicable law, rule or regulation.
			Users may control which account data we collect, and may update existing
			User Information by re-authorizing third party services. In the case you
			are unable to update existing account data yourself, we will update other
			account data upon request. Wycademy reserves the right to delete or
			destroy any such information at any time.
		</p>

		<SectionHeading level={2} title="Security" />
		<p class="spaced-paragraph">
			We implement commercially reasonable security measures to protect
			information you provide from loss, misuse, and unauthorized access or
			disclosure. These steps take into account the sensitivity of the
			information we collect, process and store, and the current state of
			technology. Given the nature of communications and information processing
			technology, Wycademy cannot and does not guarantee that information,
			during transmission through the Internet or while stored on our systems or
			otherwise in our care, will be absolutely safe from intrusion by others.
		</p>
		<SectionHeading level={2} title="Age Limitations" />
		<p class="spaced-paragraph">
			To the extent prohibited by applicable law, Wycademy does not allow use of
			our Services by anyone younger than 13 years old. If you learn that anyone
			younger than 13 has unlawfully provided us with personal data, please
			contact us and we will take steps to delete such information.
		</p>

		<SectionHeading level={2} title="Changes to this Privacy Policy" />
		<p class="spaced-paragraph">
			We may change this Privacy Policy from time to time. Laws, regulations and
			industry standards evolve, which may make those changes necessary, or we
			may make changes to our business. We will post the changes to this page
			and encourage you to review our Privacy Policy to stay informed. If we
			make changes that materially alter your privacy rights, we will provide
			additional notice, such as via email or through the Services. If you do
			not consent to the changes to this Privacy Policy, you should deactivate
			your Services account.
		</p>

		<SectionHeading level={2} title="Your Rights" />
		<p class="spaced-paragraph">
			Residents of certain areas, including the European Economic Area and
			California, have certain statutory rights in relation to their personal
			data. Subject to any exemptions provided by law, you may have the right to
			request access to Information, as well as to seek to update or correct
			this Information. You can usually do this using the settings and tools
			provided in your Services account. If you cannot use the settings and
			tools, contact us for additional access and assistance by submitting an
			issue on GitHub. Wycademy will not retaliate or discriminate against you
			for exercising your rights under any such applicable law. However, this
			does not restrict the right of Wycademy to engage in financial incentive
			programs or otherwise alter the Services received if they are directly
			related to the value provided to Wycademy by the consumer’s data.
		</p>
		<SectionHeading level={2} title="Cookies" />
		<p class="spaced-paragraph">
			A cookie is a small amount of data, which may include an anonymous unique
			identifier. Cookies are sent to your browser from a web site’s computers
			and stored on your computer’s hard drive. Our Services use cookies to
			record current session information. Our cookies typically exist
			perpetually and we provide the ability to remove your session cookie with
			a sign out link.
		</p>
		<p class="spaced-paragraph">
			Additionally, most web browsers allow you to set controls to accept or
			refuse cookies. If you choose to reject cookies, you may still use our
			Website though your access to some functionality and areas of our Website
			may be restricted. As the means by which you can refuse cookies through
			your web browser controls vary from browser-to-browser, you should visit
			your browser’s help menu for more information.
		</p>

		<SectionHeading level={2} title="Vercel Web Analytics" />
		<p class="spaced-paragraph">
			Among other technologies, the Website uses Vercel Web Analytics, a service
			provided by Vercel. Vercel Web Analytics uses cookies to analyze how our
			Website is used. Vercel Web Analytics has its own policy that describes
			how it collects and processes data, located
			<Link inline href="https://vercel.com/docs/analytics">here</Link>. By
			using our Website, you agree to the processing of data about you by Vercel
			in the manner and for the purposes described here and in the Vercel Web
			Analytics policy.
		</p>
		<SectionHeading level={2} title="Do-not-track Disclosure" />
		<p class="spaced-paragraph">
			This Website does not respond to “Do Not Track Signals.”
		</p>

		<SectionHeading level={2} title="Links to Third Party Websites" />
		<p class="spaced-paragraph">
			The Website may contain links to other third-party websites (each a
			“Linked Website” and together the “Linked Websites”). The Linked Websites
			are not under the control of Wycademy and Wycademy disclaims any and all
			responsibility for the contents of any Linked Website, including without
			limitation any link contained in a Linked Website, or any changes or
			updates to a Linked Website. Wycademy is not responsible for webcasting or
			any other form of transmission received from any Linked Website. Wycademy
			is providing these links, if any, to you only as a convenience, and the
			inclusion of any link does not necessarily imply endorsement or
			representations by Wycademy or any association with its operators. You are
			encouraged to review any Privacy Policy or terms of service posted on the
			Linked Websites.
		</p>
		<p class="spaced-paragraph">
			Wycademy cannot and does not assume any responsibility for any actions or
			omissions of operators of the Linked Websites, including the manner in
			which they use information received either from us or independently.
			Nevertheless, in the event you encounter any third party associated with,
			or who claims association with, us who you feel is improperly collecting
			or using information about you, please submit an issue on GitHub; Wycademy
			will make reasonable efforts to address your concerns.
		</p>
		<SectionHeading level={2} title="Account Information and Privacy" />
		<OrderedList class="spaced-list">
			<ListItem
				><p>
					<strong>Email Address Requirement:</strong> When signing in via Discord
					OAuth, users are required to provide an email address. This requirement
					stems from the implementation of the OAuth library used in Wycademy, which
					is powered by Supabase. The email address is a fundamental part of the
					authentication system and cannot be omitted.
				</p></ListItem
			>
			<ListItem
				><p>
					<strong>Email Address Changes:</strong> Changing the email address associated
					with your account can be done via Discord's account settings and then signing
					up in Wycademy. This also applies even if you already created an account
					in Wycademy, but necessitates signing out, changing the email adress, then
					signing in again in order to apply the changes. You can also change other
					account data, such as your username shown in the homepage, via Discord's
					account settings.
				</p></ListItem
			>
			<ListItem
				><p>
					<strong>Account Deletion:</strong> For the integrity of our speedrunning
					leaderboards or community contributions and to affirm the authenticity
					of the content of the Website, Wycademy does not support complete account
					deletions. This is necessary to maintain the accuracy and reliability of
					leaderboard records and historical data. Instead, users have the option
					to hide their profiles. This will make your profile and associated data
					inaccessible to the public, while still preserving the integrity and transparency
					of Wycademy's leaderboards and contributions.
				</p></ListItem
			>
		</OrderedList>
		<SectionHeading level={3} title="For EU Users (GDPR Compliance)" />
		<p class="spaced-paragraph">
			We acknowledge the rights granted to EU residents under the General Data
			Protection Regulation (GDPR). While we aim to uphold these rights, certain
			technical and operational limitations—such as the need for email addresses
			for authentication and the inability to delete accounts due to leaderboard
			integrity—impact how we handle data requests.
		</p>
		<UnorderedList class="spaced-list">
			<ListItem
				><p>
					<strong>Right to Erasure:</strong> While account deletion is not possible,
					hiding your profile can effectively anonymize your presence on Wycademy.
					If your profile is private, you will not be able to do actions in the website
					that requires your account, such as submitting speedruns. Any submitted
					speedruns or related account data made prior to making your profile private
					remains public.
				</p></ListItem
			>
			<ListItem
				><p>
					<strong>Right to Access and Rectification:</strong> You can access and
					update your information (including your profile visibility) via account
					settings or by contacting support.
				</p></ListItem
			>
		</UnorderedList>
		<p class="spaced-paragraph">
			Whatever you post on Wycademy can be seen and used by everyone.
		</p>
		<p class="spaced-paragraph">
			When you make a contribution to Wycademy, including on user or speedrun
			pages, you are creating a permanent, public record of every piece of
			content added, removed, or altered by you. The quest history will show
			when your contribution was made, as well as your username. We may use your
			public contributions, either aggregated with the public contributions of
			others or individually, to create new features or data-related products
			for you or to learn more about how Wycademy is used.
		</p>
		<p class="spaced-paragraph">
			Unless this Policy says otherwise, you should assume that information that
			you actively contribute to the Website, including Personal Information, is
			publicly visible and can be found by search engines. Like most things on
			the Internet, anything you share may be copied and redistributed
			throughout the Internet by other people. Please do not contribute any
			information that you are uncomfortable making permanently public, like
			revealing your real name or location in your contributions.
		</p>
		<p class="spaced-paragraph">
			You should be aware that specific data made public by you or aggregated
			data that is made public by us can be used by anyone for analysis and to
			infer further information, such as which country a user is from, political
			affiliation and gender.
		</p>
		<p class="spaced-paragraph">
			To gain a better understanding of the demographics of our users, to
			localize our services and to learn how we can improve our services, we may
			ask you for more demographic information, such as gender or age, about
			yourself. We will tell you if such information is intended to be public or
			private, so that you can make an informed decision about whether you want
			to provide us with that information. Providing such information is always
			completely optional. If you do not want to, you do not have to—it is as
			simple as that.
		</p>
		<p class="spaced-paragraph">
			We want to make the Website better for you by learning more about how you
			use it. Examples of this might include how often you visit the Website,
			what you like, what you find helpful, how you get to the Website, and
			whether you would use a helpful feature more if we explained it
			differently. We also want this Policy and our practices to reflect our
			community's values. For this reason, we keep information related to your
			use of the Website confidential, except as provided in this Policy.
		</p>
		<p class="spaced-paragraph">
			Because of how browsers work, we receive some information automatically
			when you visit the Website. This includes when you use an online tool on a
			third-party site that loads information coming from the Website. This
			information includes the type of device you are using, the type and
			version of your browser, your browser's language preference, the type and
			version of your device's operating system, in some cases the name of your
			internet service provider or mobile carrier, the website that referred you
			to Wycademy, which pages you request and visit, and the date and time of
			each request you make to the Website.
		</p>
		<p class="spaced-paragraph">
			Put simply, we use this information to enhance your experience with
			Wycademy. For example, we use this information to administer the sites,
			provide greater security, and fight vandalism; optimize mobile
			applications, customize content and set language preferences, test
			features to see what works, and improve performance; understand how users
			interact with the Website, track and study use of various features, gain
			understanding about the demographics of the Website, and analyze trends.
		</p>

		<SectionHeading level={2} title="Severability" />
		<p class="spaced-paragraph">
			If any part of this Privacy Policy is determined to be invalid or
			unenforceable pursuant to applicable law, then the invalid or
			unenforceable provision will be deemed superseded by a valid, enforceable
			provision that most closely matches the intent of the original provision
			and the remainder of this Privacy Policy shall continue in effect.
		</p>

		<!-- <SectionHeading level={2} title="Data Protection Officer" /> -->

		<!-- <p class="spaced-paragraph"></p> -->

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}
</style>
