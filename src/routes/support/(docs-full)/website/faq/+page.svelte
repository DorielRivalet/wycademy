<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import FrequentlyAskedQuestions from '$lib/client/components/FrequentlyAskedQuestions.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';

	const faq = {
		generalQuestions: [
			{
				question: 'What is Wycademy?',
				answer:
					'Wycademy is a fan-driven knowledge base, speedrunning hub, and toolset for Monster Hunter Frontier Z. It provides in-depth guides, speedrun leaderboards, calculators, and other utilities to help players understand and optimize their gameplay. Our goal is to preserve and expand knowledge about the game in a way that is accessible, community-driven, and open-source.',
			},
			{
				question: 'Is Wycademy official?',
				answer:
					'No. Wycademy is an independent fan project and is not affiliated with Capcom in any way. It exists to serve the community by organizing and enhancing information about Monster Hunter Frontier Z.',
			},
			{
				question: 'Is Wycademy free to use?',
				answer:
					'Yes! Wycademy is completely free, with no ads or monetization beyond optional donations. Our mission is to provide valuable resources without financial barriers.',
			},
			{
				question: 'Do I need an account to use Wycademy?',
				answer:
					'No, most of Wycademy’s content is accessible without an account. However, an account is required for certain features like creating speedrun profiles, favoriting runs and armor sets, and archiving speedrun videos.',
			},
		],
		speedruns: [
			{
				question: 'How do I submit a speedrun?',
				answer:
					'You can submit a speedrun by using our Wycademy overlay and uploading your run data. The process involves verifying run data integrity, then uploading it to Wycademy for verification and display on the leaderboard.',
			},
			{
				question: 'How are speedruns verified?',
				answer:
					'Currently, speedruns are either self-verified or reviewed by the community. Depending on the category and game mode, we may implement additional verification methods over time.',
			},
			{
				question: 'What tools does Wycademy offer?',
				answer: `Wycademy provides several useful tools, including:

Tower Weapon Simulator – Helps you share the result via URL.

Damage Calculators – Estimate and compare damage outputs.

Overlay & Timer – A tracking tool for speedruns.

Hunter’s Notes – A knowledge base with guides and game mechanics.`,
			},
			{
				question: 'Can I download my speedrun data?',
				answer:
					'Yes! Since speedruns are stored as SQLite files, you can download and manage your own data as needed.',
			},
		],
		technical: [
			{
				question: 'How do I sign up for Wycademy?',
				answer:
					'We use Discord OAuth for authentication, meaning you can sign in with your Discord account. Wycademy does not store any passwords.',
			},
			{
				question: 'I forgot my account info. What do I do?',
				answer:
					'Since Wycademy uses Discord OAuth, you should recover your account through Discord’s account recovery process.',
			},
			{
				question: 'Why isn’t my tool/calculator working?',
				answer: `Try the following troubleshooting steps:

1. Ensure your browser is up to date.

2. Clear your cache and cookies.

3. Disable browser extensions that may interfere with scripts.

4. Check if there’s a known site issue.`,
			},
			{
				question: 'Is Wycademy available offline?',
				answer:
					'Yes! Wycademy functions as a Progressive Web App (PWA), allowing you to install and use it offline. You can add it to your desktop or mobile device through your browser’s install option.',
			},
		],
		community: [
			{
				question: 'Can I contribute to Wycademy?',
				answer:
					'Absolutely! Wycademy is open-source under the MIT license, meaning anyone can contribute by submitting guides, tools, or even code improvements. If you’re interested in helping, check out our GitHub repository.',
			},
			{
				question: 'Where can I give feedback or request features?',
				answer:
					'You can submit feedback through our survey forms or GitHub issues.',
			},
			{
				question: 'How do I report incorrect information?',
				answer:
					'If you spot a mistake or outdated information, you can report it through our website’s feedback system or GitHub issues.',
			},
			{
				question: 'Does Wycademy have a Discord server?',
				answer: 'No, Wycademy does not have an official Discord server.',
			},
			{
				question: 'Why doesn’t Wycademy use Discord?',
				answer: `Discord is great for casual chats, but it isn't the best platform for structured, long-term knowledge sharing. Wycademy is focused on preserving and organizing information in a way that is accessible, searchable, and useful over time. Relying on Discord, a closed platform with limited discoverability outside its own ecosystem, would go against that goal.

Additionally, past community experiences have shown that real-time chat environments can sometimes lead to issues that structured platforms help avoid. Instead, Wycademy prioritizes clear documentation, open collaboration, and sustainable discussion formats.

While we don’t have a Discord, we encourage community contributions through other means, such as feature requests, corrections, and guides. If you’d like to contribute or ask questions, check out our other Support pages for more information.`,
			},
			{
				question:
					'Is Wycademy affiliated with any Monster Hunter communities or teams?',
				answer:
					'No. Wycademy is not affiliated with any particular Monster Hunter Discord server, private server, or development team (other than the members of Open Frontiers). It is an independent platform dedicated to knowledge-sharing. We appreciate private servers supporting our work via word of mouth and other means.',
			},
		],
	};
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Frequently Asked Questions'} />
		<section>
			<SectionHeading level={2} title="General Questions" />
			<div>
				<FrequentlyAskedQuestions faq={faq.generalQuestions} />
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Speedrunning & Tools" />
			<div>
				<FrequentlyAskedQuestions faq={faq.speedruns} />
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Technical & Account Issues" />
			<div>
				<FrequentlyAskedQuestions faq={faq.technical} />
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Community & Contributions" />
			<div>
				<FrequentlyAskedQuestions faq={faq.community} />
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="A Note on Wycademy's Impact" />
			<div>
				<p class="spaced-paragraph">
					Wycademy is not just a resource—it’s an <strong>open framework</strong
					>
					for knowledge-sharing. Because of its <strong>MIT license</strong>,
					anyone can repurpose and adapt it for other gaming communities,
					technical projects, or educational efforts. This was always part of
					the vision: empowering others to build upon and extend what has been
					created. Whether you use Wycademy for personal learning, game
					preservation, or even as a foundation for something entirely new, the
					possibilities are open-ended. Our hope is that it continues to serve
					players and developers alike in meaningful ways.
				</p>
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
