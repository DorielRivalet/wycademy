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
	import FrequentlyAskedQuestions from '$lib/client/components/FrequentlyAskedQuestions.svelte';
	import HomeCallToActionSection from './HomeCallToActionSection.svelte';

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

<div>
	<HomeHeroSection />
	<HomeProblemSection />
	<HomeSolutionSection />
	<HomeHowItWorksSection />
	<HomeTestimonialSection />
	<FrequentlyAskedQuestions faq={[]} />
	<HomeCallToActionSection />
</div>

<style lang="scss">
</style>
