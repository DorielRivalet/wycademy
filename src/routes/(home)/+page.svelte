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
		<HomeFrequentlyAskedQuestions faq={[]} />
	</div>
	<div><HomeBlogSection /></div>
	<div><HomeCallToActionSection /></div>
</div>

<style lang="scss">
	.container {
		.alternate-background {
			background-color: var(--ctp-mantle);
		}
	}
</style>
