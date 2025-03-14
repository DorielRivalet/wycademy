<script lang="ts">
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import NotificationActionButton from 'carbon-components-svelte/src/Notification/NotificationActionButton.svelte';
	import { goto } from '$app/navigation';
	import LogoDiscord from 'carbon-icons-svelte/lib/LogoDiscord.svelte';
	import Checkbox from 'carbon-components-svelte/src/Checkbox/Checkbox.svelte';
	import Head from '$lib/client/components/Head.svelte';
	import pageThumbnail from '$lib/client/images/icon/pvp.png';
	import {
		authorName,
		authorUrl,
		datePublished,
		projectName,
		website,
	} from '$lib/constants';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';
	import Help from 'carbon-icons-svelte/lib/Help.svelte';
	import { Turnstile } from 'svelte-turnstile';
	import { PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY } from '$env/static/public';
	import { enhance } from '$app/forms';
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import Safari from '$lib/client/components/devices/Safari.svelte';
	import { getContext } from 'svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import type { Writable } from 'svelte/store';
	import desktopLight from '$lib/client/images/supplemental/profile-desktop-light.webp';
	import desktopDark from '$lib/client/images/supplemental/profile-desktop-dark.webp';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	function handleTurnstileCallback(event: CustomEvent<{ token: string }>) {
		console.log('called back');
	}

	function handleTurnstileError(event: CustomEvent<{ code: string }>) {
		console.log('did error');
		turnstileResponse = '';
	}

	async function handleLogin() {
		const response = await fetch('/auth/registration-code', {
			method: 'POST',
			body: JSON.stringify({ submittedCode }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			error = false;
			console.log('Correct code, going to Discord OAuth flow...');
			goto('/auth/login/discord');
		} else {
			console.error('Invalid code');
			error = true;
		}
	}

	const customTitle = "Leaderboard — Frontier's Wycademy";
	const url = $page.url.toString();

	let userAgreed = $state(false);
	let userHasVerifiedEmail = $state(false);
	let turnstileResponse = $state('');
	let submittedCode = $state('');
	let error = $state(false);

	// TODO some pages like this one are missing Head component
	let description =
		'Sign up to Wycademy: submit hunts, participate in events, follow others and customize profiles.';
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
	<div class="headings-container">
		<div class="headings">
			<h1>Welcome to Frontier's Wycademy</h1>
			<h2>
				Create an account to submit speedruns, obtain trophies and participate
				in events.
			</h2>
		</div>
		<div class="graphics">
			<div>
				<Safari
					src={$carbonThemeStore === 'g10' ? desktopLight : desktopDark}
				/>
			</div>
		</div>
	</div>
	<div class="form">
		<div class="banner">
			<InlineNotification
				lowContrast
				kind="warning"
				title="Beta Testing:"
				hideCloseButton
				subtitle="Please read about our development process before creating an account."
			>
				{#snippet actions()}
					<NotificationActionButton
						on:click={() => goto('/support/website/development')}
						>Learn more</NotificationActionButton
					>
				{/snippet}
			</InlineNotification>
		</div>
		<div class="login">
			<h2>Create your account</h2>
		</div>

		<div class="signup">
			{#if error}
				<InlineNotification
					kind="error"
					title="Error:"
					subtitle="Invalid registration code."
				/>
			{/if}
			<TextInput
				labelText="Registration code"
				helperText="You need a code in order to register. It is currently invite-only."
				placeholder="Enter registration code..."
				bind:value={submittedCode}
			/>
			<Button
				disabled={!userAgreed ||
					!browser ||
					!userHasVerifiedEmail ||
					!turnstileResponse}
				kind="primary"
				icon={LogoDiscord}
				on:click={(e) => handleLogin()}>Sign up with Discord</Button
			>
		</div>
		<div class="agreement">
			<!-- <p>{turnstileResponse}</p> -->
			{#if browser}
				<form method="POST" action="?/turnstile" use:enhance>
					<Turnstile
						on:callback={handleTurnstileCallback}
						on:error={handleTurnstileError}
						theme={'dark'}
						siteKey={PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
						on:turnstile-callback={(event) => {
							turnstileResponse = event.detail.token;
							console.log('turnstile callback');
						}}
					/>
				</form>
			{/if}
			<Checkbox bind:checked={userAgreed} required
				>{#snippet labelText()}
					<span>
						By signing up with Wycademy, you agree to our <Link
							inline
							href="/support/policies/terms-of-service">Terms of Service</Link
						> and <Link href="/support/policies/privacy-policy" inline
							>Privacy Policy.</Link
						></span
					>
				{/snippet}</Checkbox
			>
			<Checkbox bind:checked={userHasVerifiedEmail} required
				>{#snippet labelText()}
					<span> I have verified my Discord account's email.</span>
				{/snippet}</Checkbox
			>
		</div>
		<hr />
		<p>
			<Link inline href="/login">Already have an account? Log in</Link>
		</p>
		<Accordion class="spaced-accordion">
			<AccordionItem>
				{#snippet title()}
					<h5 class="accordion-title">
						<span><Help /></span><span>Help</span>
					</h5>
				{/snippet}
				<div class="spaced-paragraph">
					You must have a <strong>verified email</strong> in your Discord
					account prior to making a Wycademy account. It is also highly
					recommended that you have <strong>2FA enabled</strong> on your Discord
					account.
				</div>
				<p>If you cannot pass the CAPTCHA, try another browser.</p>
			</AccordionItem>
			<AccordionItem>
				{#snippet title()}
					<h5 class="accordion-title">
						<span><Help /></span><span
							>Why sign up on Wycademy with Discord?
						</span>
					</h5>
				{/snippet}
				<p class="spaced-paragraph">
					Wycademy uses OAuth2 for authentication, eliminating the need to store
					passwords. Since Discord is widely used in the community, it provides
					a convenient way to create an account. You don’t need an active
					Discord account, and Wycademy will never contact you through
					Discord—if someone does, it's likely a scam. You can also create an
					alternate account just for this purpose.
				</p>
			</AccordionItem>
		</Accordion>
	</div>
</div>

<style lang="scss">
	@use '@carbon/type' as type;

	.signup {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.accordion-title {
		display: flex;
		gap: 0.25rem;
		align-items: start;
		vertical-align: middle;
	}

	hr {
		opacity: 1;
		width: 100%;
		border: none;
		height: 1px;
		margin: 0;
		background: var(--ctp-surface0);
	}

	@media (min-width: 320px) {
		.container {
			padding-bottom: 4rem;
		}

		.headings-container {
			width: 100%;
			padding-top: 2rem;
			padding-bottom: 2rem;
			background-color: var(--ctp-mantle);
		}

		.headings {
			padding-top: 2rem;
			padding-bottom: 2rem;
			display: flex;
			flex-direction: column;
			-webkit-font-smoothing: antialiased;
			text-rendering: optimizeLegibility;
			direction: ltr;
			gap: 2rem;
			box-sizing: border-box;
			padding: 0;
			border: 0;
			font: inherit;
			font-size: 100%;
			padding-right: 1rem;
			padding-left: 1rem;
			max-width: 32rem;
			word-break: break-word;
			margin: 0 auto;
			padding-bottom: 0.5rem;

			h1 {
				all: unset;
				@include type.type-style('heading-05');
			}

			h2 {
				all: unset;
				@include type.type-style('heading-04');
			}
		}

		.form {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			gap: 1rem;
			padding-right: 1rem;
			padding-left: 1rem;
			max-width: 32rem;
			margin: 0 auto;
			background-color: var(--ctp-base);

			.login {
				display: flex;
				flex-direction: column;
			}

			h2 {
				all: unset;
				@include type.type-style('heading-02');
			}

			p {
				all: unset;

				@include type.type-style('body-02');
			}
		}
	}

	@media (min-width: 1056px) {
		.container {
			padding-bottom: 0rem;
			display: grid;
			grid-template-columns: 5fr 3fr;
		}

		.headings-container {
			width: 100%;
			min-height: 90vh;
			padding-top: 2rem;
			padding-bottom: 0rem;
			padding-right: 0rem;
			padding-left: 2rem;
			background-color: var(--ctp-mantle);
		}

		.headings {
			padding-top: 0rem;
			padding-bottom: 0rem;
			padding-right: 0rem;
			padding-left: 0rem;
			display: flex;
			flex-direction: column;
			-webkit-font-smoothing: antialiased;
			text-rendering: optimizeLegibility;
			direction: ltr;
			gap: 2rem;
			box-sizing: border-box;
			padding: 0;
			border: 0;
			font: inherit;
			font-size: 100%;
			max-width: 32rem;
			word-break: break-word;
			margin: 0;

			h1 {
				all: unset;
				@include type.type-style('heading-05');
			}

			h2 {
				all: unset;
				@include type.type-style('heading-04');
			}
		}

		.form {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			gap: 1rem;
			padding-right: 2rem;
			padding-left: 2rem;
			padding-top: 2rem;
			max-width: 32rem;
			margin: 0;
			background-color: var(--ctp-base);

			.login {
				display: flex;
				flex-direction: column;
			}

			h1 {
				all: unset;
				@include type.type-style('heading-05');
			}

			p {
				all: unset;
				@include type.type-style('body-02');
			}
		}
	}

	.graphics {
		padding: 2rem;
	}
</style>
