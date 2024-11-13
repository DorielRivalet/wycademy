<script lang="ts">
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import ComboBox from 'carbon-components-svelte/src/ComboBox/ComboBox.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import NotificationActionButton from 'carbon-components-svelte/src/Notification/NotificationActionButton.svelte';
	import { goto } from '$app/navigation';
	import LogoDiscord from 'carbon-icons-svelte/lib/LogoDiscord.svelte';
	import Checkbox from 'carbon-components-svelte/src/Checkbox/Checkbox.svelte';
	import {
		generateUsername,
		usernames,
	} from '$lib/client/modules/username-generator';

	function shouldFilterItem(item: { text: string }, value: string) {
		if (!value) return true;
		return item.text.toLowerCase().includes(value.toLowerCase());
	}

	function signup() {
		return;
	}

	let userAgreed = false;

	let selectedMonsterNameFromList = usernames.monsters[0];
	let selectedMonsterPrefixFromList = usernames.types[0];

	$: username =
		generateUsername(
			selectedMonsterPrefixFromList ?? usernames.types[0],
			selectedMonsterNameFromList ?? usernames.monsters[0],
		) + '-####';

	// TODO some pages like this one are missing Head component
</script>

<div class="container">
	<div class="headings-container">
		<div class="headings">
			<h1>Welcome to Frontier's Wycademy</h1>
			<h2>
				Create an account to submit speedruns, obtain trophies and participate
				in events.
			</h2>
		</div>
	</div>
	<div class="form">
		<div class="banner">
			<InlineNotification
				lowContrast
				kind="warning"
				title="Beta Testing:"
				hideCloseButton
				subtitle="Please read about our development process before creating an account. It is currently not possible to make an account"
			>
				<svelte:fragment slot="actions">
					<NotificationActionButton
						on:click={() => goto('/support/website/development')}
						>Learn more</NotificationActionButton
					>
				</svelte:fragment>
			</InlineNotification>
		</div>
		<div class="login">
			<h1>Create your account</h1>
			<p>
				Already have a Wycademy account? <Link inline href="/">Log in</Link>
			</p>
		</div>
		<div class="username">
			<Dropdown
				titleText="Username Prefix"
				bind:selectedId={selectedMonsterPrefixFromList}
				items={usernames.types.map((e) => {
					return { id: e, text: e !== '' ? e : 'None' };
				})}
			/>
			<ComboBox
				titleText="Username"
				placeholder="Select monster"
				bind:selectedId={selectedMonsterNameFromList}
				items={usernames.monsters.map((e) => {
					return { id: e, text: e };
				})}
				{shouldFilterItem}
			/>

			<p>Current username: {username}</p>
		</div>
		<div class="signup">
			<Button
				disabled={!userAgreed}
				icon={LogoDiscord}
				on:click={() => signup()}
				kind="primary">Sign up with Discord</Button
			>
		</div>
		<div class="agreement">
			<Checkbox bind:checked={userAgreed} required
				><span slot="labelText">
					By signing up with Wycademy, you agree to our <Link
						inline
						href="/support/policies/terms-of-service">Terms of Service</Link
					> and <Link href="/support/policies/privacy-policy" inline
						>Privacy Policy.</Link
					></span
				></Checkbox
			>
		</div>
	</div>
</div>

<style lang="scss">
	@use '@carbon/type' as type;

	@media (min-width: 320px) {
		.username {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

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

			h1 {
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
			grid-template-columns: 1fr 1fr;
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
</style>
