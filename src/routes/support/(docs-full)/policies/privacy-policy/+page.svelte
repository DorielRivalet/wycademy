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
			<strong>Effective Date: {termsDates.privacyPolicy}</strong>
		</p>
		<p class="spaced-paragraph">
			Wycademy values your privacy and is committed to protecting your personal
			data. This Privacy Policy outlines how we collect, use, and safeguard your
			information.
		</p>

		<SectionHeading level={2} title="Information We Collect and Receive" />
		<p class="spaced-paragraph">We collect the following types of data:</p>
		<UnorderedList class="spaced-list">
			<ListItem
				><p>
					<strong>Account Information: </strong> When you sign up via Discord OAuth,
					we receive your username, user ID, and avatar.
				</p></ListItem
			><ListItem
				><p>
					<strong>User Contributions:</strong> Content you submit, such as speedrun
					data, comments, or guides.
				</p></ListItem
			><ListItem
				><p>
					<strong>Technical Information:</strong> We may collect limited technical
					data (e.g., browser type, IP address) for security and performance monitoring.
				</p></ListItem
			>
		</UnorderedList>

		<SectionHeading level={2} title="How We Use Information" />

		<p class="spaced-paragraph">We use collected data to:</p>
		<UnorderedList class="spaced-list">
			<ListItem
				><p>Provide and improve Wycademy’s features and services.</p></ListItem
			><ListItem><p>Ensure website security and prevent abuse.</p></ListItem
			><ListItem
				><p>
					Enhance community engagement and maintain the integrity of the
					platform.
				</p></ListItem
			>
			<ListItem><p>Respond to user inquiries and support requests.</p></ListItem
			>
		</UnorderedList>
		<p>
			<strong>We do not sell, rent, or monetize user data in any way.</strong>
		</p>
		<SectionHeading level={2} title="How We Share Your Information" />
		<p class="spaced-paragraph">
			We may share limited data with third parties only when necessary to
			operate and maintain Wycademy. This includes:
		</p>
		<UnorderedList class="spaced-list">
			<ListItem
				><p>
					<strong>Discord</strong> (for authentication purposes).
				</p></ListItem
			><ListItem
				><p>
					<strong>Supabase</strong> (for backend data storage and account management).
				</p></ListItem
			><ListItem
				><p>
					<strong>Twitch/YouTube</strong> (optional): If you choose to link media
					content to your profile.
				</p></ListItem
			>
		</UnorderedList>
		<SectionHeading level={2} title="Data Retention" />
		<p class="spaced-paragraph">
			We retain data only as long as necessary to provide the service or comply
			with legal obligations. Users may request deletion of their account data
			by contacting support.
		</p>

		<SectionHeading level={2} title="Security" />
		<p class="spaced-paragraph">
			We implement industry-standard security measures to protect your
			information. However, no system is completely secure, and users should
			take steps to protect their own accounts.
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
			We may update this Privacy Policy from time to time. Significant changes
			will be communicated through the website.
		</p>

		<SectionHeading level={2} title="Your Rights" />
		<p class="spaced-paragraph">
			Depending on your jurisdiction, you may have rights such as:
		</p>
		<UnorderedList class="spaced-list">
			<ListItem
				><p>The right to access or request deletion of your data.</p></ListItem
			><ListItem
				><p>The right to opt out of optional data collection.</p></ListItem
			><ListItem><p>The right to correct inaccurate information.</p></ListItem>
		</UnorderedList>
		<p class="spaced-paragraph">Requests can be made by contacting us.</p>
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
