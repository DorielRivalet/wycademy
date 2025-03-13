<!--
MIT License

Copyright (c) 2023 Scott Spence

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
-->

<script lang="ts">
	import LogoImage from '$lib/client/images/logo.webp';
	import type { SchemaOrgProps } from '$lib/schema-org-props';
	import * as constant from '$lib/constants';
	interface Props {
		schemaOrgProps: SchemaOrgProps;
	}

	let { schemaOrgProps }: Props = $props();

	const mainEntity = schemaOrgProps.mainEntity;
	let jsonLd = {};
	// TODO FAQ and others. switch statement.
	if (mainEntity.type === 'SoftwareApplication') {
		jsonLd = {
			'@context': 'https://schema.org',
			'@type': ['SoftwareApplication', 'WebApplication'],
			browserRequirements: 'requires HTML5 support',
			applicationCategory: ['BrowserApplication', 'Wiki'],
			applicationSubCategory: 'Game Wiki',
			softwareVersion: `${constant.appVersion}`,
			identifier: 'https://vocab.getty.edu/aat/300410446',
			about: 'Guides for Monster Hunter Frontier Z',
			abstract:
				'A compendium of resources for Monster Hunter Frontier Z (MHF-Z) by Doriel Rivalet',
			accessMode: [
				'textual',
				'visual',
				'chartOnVisual',
				'colorDependent',
				'diagramOnVisual',
				'mathOnVisual',
				'textOnVisual',
			],
			accessibilityHazard: ['unknown'],
			acquireLicensePage:
				'https://github.com/Open-Frontiers/wycademy/blob/main/LICENSE.md',
			alternativeHeadline: 'wycademy',
			audience: {
				'@type': 'Audience',
				name: 'Gamers',
			},
			license:
				'https://github.com/Open-Frontiers/wycademy/blob/main/LICENSE.md',
			alternateName: 'wycademy',
			name: mainEntity.name,
			sameAs: 'https://wycademy.vercel.app',
			url: mainEntity.url,
			headline: mainEntity.headline,
			description: mainEntity.description,
			image: mainEntity.image,
			datePublished: mainEntity.datePublished,
			dateModified: mainEntity.dateModified,
			thumbnailUrl: LogoImage,
			typicalAgeRange: '13+',
			isAccessibleForFree: true,
			author: {
				'@type': mainEntity.author.type,
				name: mainEntity.author.name,
				url: mainEntity.author.url,
			},
			publisher: {
				'@type': mainEntity.publisher.type,
				name: mainEntity.publisher.name,
				logo: mainEntity.publisher.logo,
			},
			// SoftwareApplication
			offers: {
				'@type': 'Offer',
				price: '0',
				priceCurrency: 'USD',
			},
			// aggregateRating: {
			// 	'@type': 'AggregateRating',
			// 	itemReviewed: {
			// 		'@type': 'Thing',
			// 		image: mainEntity.image,
			// 		name: mainEntity.name,
			// 	},
			// 	ratingValue: '3',
			// 	ratingCount: '1',
			// },
			operatingSystem: ['Windows', 'Linux', 'macOS'],
		};
	} else {
		jsonLd = {
			'@context': 'https://schema.org',
			'@type': mainEntity.type,
			name: mainEntity.name,
			url: mainEntity.url,
			headline: mainEntity.headline,
			description: mainEntity.description,
			image: mainEntity.image,
			datePublished: mainEntity.datePublished,
			dateModified: mainEntity.dateModified,
			author: {
				'@type': mainEntity.author.type,
				name: mainEntity.author.name,
				url: mainEntity.author.url,
			},
			publisher: {
				'@type': mainEntity.publisher.type,
				name: mainEntity.publisher.name,
				logo: mainEntity.publisher.logo,
			},
		};
	}

	const jsonLdString = JSON.stringify(jsonLd);
	const jsonLdScript = `
    <script type="application/ld+json">
      ${jsonLdString}
		${'<'}/script>
  `;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
