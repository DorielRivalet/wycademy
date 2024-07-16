<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import BlinkiesSmall from '$lib/client/images/blinkies-wycademy-small.gif';
	import Blinkies from '$lib/client/images/blinkies-wycademy.gif';
	import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'About Us'} />
		<p class="spaced-paragraph"></p>
		<section>
			<SectionHeading level={2} title="Linking to Wycademy on the web" />
			<div>
				<p>
					If you want to link to Wycademy on your website, you can use the
					following officially endorsed buttons.
				</p>
				<p class="spaced-paragraph">
					The HTML code for each button is under the image.
				</p>
				<div class="blinkies-container">
					<div>
						<h3>Small button</h3>
						<img src={BlinkiesSmall} alt="Blinkies small" />
						<CodeSnippet
							code={"<a href='https://wycademy.vercel.app/' target='_blank'><img src='https://raw.githubusercontent.com/DorielRivalet/wycademy/main/src/lib/client/images/blinkies-wycademy-small.gif' alt='Wycademy | MHF-Z Knowledge Base'></a>"}
							type="multi"
						/>
					</div>
					<div>
						<h3>Large button</h3>
						<img src={Blinkies} alt="Blinkies" />
						<CodeSnippet
							code={"<a href='https://wycademy.vercel.app/' target='_blank'><img src='https://raw.githubusercontent.com/DorielRivalet/wycademy/main/src/lib/client/images/blinkies-wycademy.gif' alt='Wycademy | MHF-Z Knowledge Base'></a>"}
							type="multi"
						/>
					</div>
				</div>
			</div>
		</section>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.blinkies-container {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		div {
			display: flex;
			flex-direction: column;
			width: auto;
			justify-content: start;
			align-items: start;
			gap: 0.5rem;
		}
	}
</style>
