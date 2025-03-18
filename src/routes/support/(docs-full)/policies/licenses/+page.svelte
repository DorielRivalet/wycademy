<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import PackagesLicenseText from './PackagesLicenseText.svelte';
	import { licenseInformation } from '$lib/client/modules/license-report';
	import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Licenses'} />
		<InlineNotification
			title="Attributions"
			subtitle="If you are looking for an attribution list, please check our repository README. View also our acknowledgements page and the licenses folder in the root directory of the repository."
			kind="info"
		/>

		<p class="spaced-paragraph">
			<strong
				>Game data such as numerical values (e.g., stats, formulas, parameters)
				are factual information and not subject to copyright. Sources include
				in-game research, community contributions, and available documentation.</strong
			>
		</p>

		<p class="spaced-paragraph">
			<strong
				>The package <CodeSnippet
					type="inline"
					hideCopyButton
					code="@theatre/studio"
				/> is used solely in the development environment and is not included in the
				distributed or deployed product.
			</strong>
		</p>

		<p class="spaced-paragraph">
			These are the licenses for the libraries we use:
		</p>
		<p class="spaced-paragraph heading-05">
			<strong>Licenses for OSS used in Wycademy are reproduced below</strong>
		</p>
		<p class="spaced-paragraph heading-05">
			<strong>Software used in Wycademy for Windows, Mac, Web and iOS</strong>
		</p>
		<p class="spaced-paragraph legal">
			THE FOLLOWING SETS FORTH ATTRIBUTION NOTICES FOR THIRD PARTY SOFTWARE THAT
			MAY BE CONTAINED IN PORTIONS OF THE WYCADEMY PRODUCT.
		</p>

		<PackagesLicenseText
			packages={licenseInformation.map((e) => {
				return {
					name: e.name,
					source: e.link.replace('git+', '').replace('git:', ''),
					license: e.licenseText,
				};
			})}
		/>
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

	.heading-05 {
		@include type.type-style('heading-05');
	}
</style>
