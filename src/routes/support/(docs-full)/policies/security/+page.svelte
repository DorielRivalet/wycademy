<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import FrequentlyAskedQuestions from '$lib/client/components/FrequentlyAskedQuestions.svelte';

	const faq = [
		{
			question: 'What happens if a vulnerability is found?',
			answer:
				'When a vulnerability is reported, our team reviews and prioritizes it. We work promptly to resolve the issue, with fixes deployed as soon as possible.',
		},
		{
			question: 'How is my personal data protected?',
			answer:
				'All sensitive data is encrypted and stored securely in Supabase, which adheres to modern security standards. We also minimize data collection and storage wherever possible.',
		},
		{
			question: "How can I help improve Wycademy's security?",
			answer:
				'You can contribute by reviewing our code on GitHub, reporting issues, and following our responsible disclosure guidelines. Community feedback is invaluable in maintaining a secure site.',
		},
	];
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Security'} />
		<div class="spaced-paragraph">
			At Wycademy, we are committed to providing a safe, secure, and transparent
			experience for all our users. Security is a core value of our platform,
			and we continuously work to protect the integrity of user data and our
			website. This page details the measures we take to secure our open-source
			project and the ways you can help keep your account safe.
		</div>
		<section>
			<SectionHeading level={2} title="Monitoring and Protection Measures" />
			<div>
				<div class="spaced-paragraph">
					We use Vercel logs to monitor our website’s traffic and check for any
					irregular or unauthorized attempts to access sensitive areas. This
					includes:
				</div>
				<UnorderedList>
					<ListItem>
						<p>
							<strong>Analyzing Access Patterns:</strong> We regularly review
							traffic logs for unusual requests, such as automated probes
							targeting files that don’t exist on our platform (e.g., <CodeSnippet
								type="inline"
								hideCopyButton
								code={'xmlrpc.php'}
							/>).
						</p>
					</ListItem>
					<ListItem
						><div class="paragraph-long-02">
							<strong>Logging Suspicious Requests:</strong> Any access attempts to
							non-existent or suspicious endpoints are flagged and monitored to ensure
							no further unauthorized attempts follow.
						</div></ListItem
					>
					<ListItem
						><div class="paragraph-long-02">
							<strong>Automated Rate Limiting:</strong> For added protection, our
							platform may automatically block excessive or repetitive requests that
							appear malicious.
						</div></ListItem
					>
				</UnorderedList>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Encryption and Data Protection" />
			<div>
				<UnorderedList>
					<ListItem>
						<p>
							<strong>Encryption of Sensitive Data:</strong> All speedrun data is
							encrypted using a public/private key approach. When users upload their
							speedrun data, it is encrypted client-side with a public key and then
							stored securely on our servers. Only the intended recipient can decrypt
							the data using a corresponding private key.
						</p>
					</ListItem>
					<ListItem
						><div class="paragraph-long-02">
							<strong>Secure Storage with Supabase:</strong> We rely on <OutboundLink
								href="https://supabase.com/">Supabase</OutboundLink
							>
							for secure backend services. Sensitive data is stored in private tables
							accessible only by authorized users, and all user information is handled
							according to strict privacy protocols.
						</div></ListItem
					>
				</UnorderedList>
			</div>
		</section>
		<section>
			<SectionHeading
				level={2}
				title="Open Source Transparency and Code Auditing"
			/>
			<div>
				<UnorderedList>
					<ListItem>
						<p>
							<strong>Transparency Benefits:</strong> Our open-source status allows
							anyone to review our code, which promotes transparency and encourages
							community feedback.
						</p>
					</ListItem>
					<ListItem
						><div class="paragraph-long-02">
							<strong>Security Reviews for Contributions:</strong> Any external contributions
							or code changes are carefully reviewed with a focus on maintaining
							security standards. We appreciate the support of the community in helping
							to identify and address potential security risks.
						</div></ListItem
					>
					<ListItem
						><div class="paragraph-long-02">
							<strong>Community Feedback:</strong> We invite feedback from the
							community to ensure that Wycademy remains a safe and reliable
							platform. If you spot an issue or potential vulnerability, <OutboundLink
								href="https://github.com/DorielRivalet/wycademy/issues"
								>we’d love to hear from you.</OutboundLink
							>
						</div></ListItem
					>
				</UnorderedList>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Secure Development Practices" />
			<div>
				<UnorderedList>
					<ListItem>
						<p>
							<strong>Frameworks and Modern Tools:</strong> Wycademy is built
							with
							<OutboundLink href="https://supabase.com/">Supabase</OutboundLink
							>, <OutboundLink href="https://svelte.dev/docs/kit/introduction"
								>SvelteKit</OutboundLink
							>, and <OutboundLink href="https://vercel.com/docs"
								>Vercel</OutboundLink
							>, each of which follows industry best practices in security.
						</p>
					</ListItem>
					<ListItem
						><div class="paragraph-long-02">
							<strong>Sanitization of Inputs:</strong> All user inputs are thoroughly
							sanitized and validated to prevent malicious code injections.
						</div></ListItem
					>
					<ListItem
						><div class="paragraph-long-02">
							<strong>Access Controls and Permissions:</strong> We enforce strict
							access controls for any pages or data that require special permissions,
							ensuring only authorized users have access to sensitive features.
						</div></ListItem
					>
				</UnorderedList>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Responsible Disclosure Program" />
			<div>
				<UnorderedList>
					<ListItem>
						<p>
							<strong>How to Report a Vulnerability:</strong> We take security
							issues seriously and encourage responsible disclosure. If you
							discover a vulnerability or have concerns about our site’s
							security, please report it responsibly
							<OutboundLink
								href="https://github.com/DorielRivalet/wycademy/issues"
								>via GitHub Issues.</OutboundLink
							>
						</p>
					</ListItem>
					<ListItem
						><div class="paragraph-long-02">
							<strong>Logging Suspicious Requests:</strong> Any access attempts to
							non-existent or suspicious endpoints are flagged and monitored to ensure
							no further unauthorized attempts follow.
						</div></ListItem
					>
					<ListItem
						><div class="paragraph-long-02">
							<strong>Disclosure Guidelines:</strong> When reporting, please include
							as much detail as possible to help us address the issue quickly. Avoid
							sharing details publicly until we’ve had a chance to review and resolve
							the issue.
						</div></ListItem
					>
				</UnorderedList>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Security Tips for Users" />
			<div>
				<UnorderedList>
					<ListItem>
						<p>
							<strong>Use Strong, Unique Passwords:</strong> While Wycademy doesn’t
							require passwords (relying on OAuth via Discord), any associated accounts
							should still use strong, unique passwords for added security.
						</p>
					</ListItem>
					<ListItem
						><div class="paragraph-long-02">
							<strong>Regularly Monitor Account Activity:</strong> Keep an eye on
							any activity or settings related to your account. Report unusual findings
							immediately.
						</div></ListItem
					>
					<ListItem
						><div class="paragraph-long-02">
							<strong>Avoid Sharing Sensitive Information:</strong> Be cautious when
							sharing any personal information or sensitive data in public spaces.
						</div></ListItem
					>
				</UnorderedList>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Frequently Asked Questions (FAQ)" />
			<div>
				<FrequentlyAskedQuestions {faq} minHeight={'50vh'} />
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Contact and Further Reading" />
			<div>
				<div class="spaced-paragraph">
					If you have any questions about security on Wycademy, want to report
					an issue, or just want to learn more about our practices, please <OutboundLink
						href="https://github.com/DorielRivalet/wycademy/issues"
						>reach out to us.</OutboundLink
					>
				</div>
				<div class="spaced-paragraph">
					We also recommend exploring some general resources on web security
					best practices, including the <OutboundLink
						href="https://owasp.org/www-project-developer-guide/"
						>OWASP Foundation’s website</OutboundLink
					> and other open-source security guides.
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
</style>
