<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script>
	import pageThumbnail from '$lib/client/images/wycademy.png';
	import {
		authorName,
		authorUrl,
		datePublished,
		description,
		projectName,
		website,
	} from '$lib/constants';
	import Head from '$lib/client/components/Head.svelte';
	import { page } from '$app/stores';
	import HomeHeroSection from './HomeHeroSection.svelte';
	import HomeSolutionSection from './HomeSolutionSection.svelte';
	import HomeHowItWorksSection from './HomeHowItWorksSection.svelte';
	import HomeTestimonialSection from './HomeTestimonialSection.svelte';
	import HomeProblemSection from './HomeProblemSection.svelte';
	import HomeCallToActionSection from './HomeCallToActionSection.svelte';
	import HomeFeaturesSection from './HomeFeaturesSection.svelte';
	import HomeBlogSection from './HomeBlogSection.svelte';
	import HomeFrequentlyAskedQuestions from './HomeFrequentlyAskedQuestions.svelte';

	const customTitle = "Home — Frontier's Wycademy";
	const url = $page.url.toString();

	let faq = [
		{
			question: 'What is Wycademy?',
			answer:
				'Wycademy is a comprehensive resource for MHF-Z players, offering guides, tools, leaderboards, and a community space. We’re committed to making this information freely accessible to everyone.',
		},
		{
			question: 'How can I get started with Wycademy leaderboards?',
			answer:
				'You can get started with Wycademy leaderboards by signing up for an account on our website, submitting a new run, and following our quick-start guide. We also offer tutorials and documentation to help you along the way.',
		},
		{
			question: 'Do I need an account?',
			answer:
				'Most resources are available without an account. However, creating an account lets you access additional features like customizing profiles, favoriting runs, and participating in events.',
		},
		{
			question: 'What game versions does Wycademy support?',
			answer:
				'Wycademy primarily supports information about Monster Hunter Frontier Z, including but not limited to monsters, gear, and mechanics. We continuously update our platform to support the latest accurate information.',
		},
		{
			question: 'Is Wycademy suitable for beginners in the game?',
			answer:
				'Yes, Wycademy is designed to be user-friendly for both beginners and experienced hunters. We offer intuitive interfaces, in-depth tools, and extensive learning resources to help hunters of all skill levels.',
		},
		{
			question: 'What kind of support does Wycademy provide?',
			answer:
				'Wycademy provides comprehensive support including documentation, video tutorials, an issue tracker, and dedicated maintenance. The issue tracker is provided by GitHub.',
		},
	];
</script>

<Head
	title={customTitle}
	{description}
	image={pageThumbnail}
	{url}
	{website}
	{authorName}
	{datePublished}
	{authorUrl}
	contentType="SoftwareApplication"
	name={projectName}
	siteName={projectName}
/>

<div class="container">
	<div>
		<HomeHeroSection />
	</div>
	<div><HomeProblemSection /></div>
	<div class="alternate-background"><HomeSolutionSection /></div>
	<!--TODO: explain leaderboards-->
	<div><HomeHowItWorksSection /></div>
	<div><HomeTestimonialSection /></div>
	<div><HomeFeaturesSection /></div>
	<div class="alternate-background">
		<HomeFrequentlyAskedQuestions {faq} />
	</div>
	<div><HomeBlogSection /></div>
	<div class="alternate-background"><HomeCallToActionSection /></div>
</div>

<style lang="scss">
	.container {
		.alternate-background {
			background-color: var(--ctp-mantle);
		}
	}
</style>
