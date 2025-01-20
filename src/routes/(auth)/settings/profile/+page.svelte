<script lang="ts">
	// settings/profile/+page.svelte
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import ComboBox from 'carbon-components-svelte/src/ComboBox/ComboBox.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import Checkbox from 'carbon-components-svelte/src/Checkbox/Checkbox.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import {
		getAvatar,
		profileAvatars,
	} from '$lib/client/modules/profile/avatars';
	import { profileEmblems } from '$lib/client/modules/profile/emblems';
	import { profileTitles } from '$lib/client/modules/profile/titles';
	import { profileThemes } from '$lib/client/modules/profile/themes';
	import { guildCardBackgrounds } from '$lib/client/modules/frontier/guild-card';
	import { countries } from 'countries-list';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Tooltip from 'carbon-components-svelte/src/Tooltip/Tooltip.svelte';
	import { frontierServers } from '$lib/client/modules/frontier/servers';
	import 'flag-icons/css/flag-icons.min.css';
	import MultiSelect from 'carbon-components-svelte/src/MultiSelect/MultiSelect.svelte';
	import WorldIcon from '$lib/client/images/icon/world.webp';
	import { driver } from 'driver.js';
	import 'driver.js/dist/driver.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import Avatar from '$lib/client/components/Avatar.svelte';
	import Lens from '$lib/client/components/Lens.svelte';
	import ToastNotification from 'carbon-components-svelte/src/Notification/ToastNotification.svelte';
	import { fade } from 'svelte/transition';
	import {
		generateUsername,
		usernames,
	} from '$lib/client/modules/profile/username';
	import isEqual from 'lodash/isEqual';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { OnboardingType } from '$lib/client/types/onboarding';

	const onboardingTypeStore = getContext(
		Symbol.for('onboardingType'),
	) as Writable<OnboardingType>;

	const onboardingStepStore = getContext(
		Symbol.for('onboardingStep'),
	) as Writable<number>;

	async function startWalkthrough() {
		if (!browser) return;
		if ($onboardingStepStore !== 2) return;

		const driverObj = driver({
			popoverClass: 'driverjs-theme',
			allowClose: false,
			disableActiveInteraction: true,
			steps: [
				{
					element: '.driverjs-0-2',
					popover: {
						title: 'Select Your Username',
						description:
							'You can choose your username from various monster names.',
					},
				},
				{
					element: '.driverjs-1-2',
					popover: {
						title: 'Update Your Username',
						description:
							'Check if your username is unused. If the new username is unused, you can update your old username to that new one.',
						// onNextClick: async () => {
						// 	// .. load element dynamically
						// 	// .. and then call
						// 	onboardingState.step = 2;
						// 	goto('/settings/profile');
						// 	driverObj.moveNext();
						// },
					},
				},
			],
		});

		driverObj.drive();
	}

	function isNewUsernameDifferent(newUsername: string, oldUsername: string) {
		const newParts = newUsername.split('-');
		const oldParts = oldUsername.split('-');

		if (newParts.length > 2 || oldParts.length > 3) {
			return false;
		}

		if (oldParts.length === 3) {
			oldParts.pop();
		}

		return !isEqual(newParts, oldParts);
	}

	function shouldFilterItem(item: { text: string }, value: string) {
		if (!value) return true;
		return item.text.toLowerCase().includes(value.toLowerCase());
	}

	let selectedMonsterNameFromList = $state(usernames.monsters[0]);
	let selectedMonsterPrefixFromList = $state(usernames.types[0]);

	let newUsername = $derived(
		generateUsername(
			selectedMonsterPrefixFromList ?? usernames.types[0],
			selectedMonsterNameFromList ?? usernames.monsters[0],
		),
	);

	let { data } = $props();
	let { profile } = data;

	const toastNotificationDuration = 5_000;
	let toastNotificationTimeout: number | undefined = $state(undefined);
	let showToastNotification = $derived(toastNotificationTimeout !== undefined);
	let toastNotificationKind:
		| 'warning'
		| 'info'
		| 'error'
		| 'success'
		| 'info-square'
		| 'warning-alt'
		| undefined = $state('info');
	let toastNotificationTitle = $state('');
	let toastNotificationSubtitle = $state('');

	let profileGuildCardTheme = $state(profile?.guild_card_theme ?? 'Default');
	let profileTheme = $state(profile?.theme ?? 'Default');
	let profileTitle = $state(profile?.title ?? 'None');
	let profileEmblem = $state(profile?.emblem ?? 'None');
	let profileAvatar = $state(profile?.avatar ?? 'Default');
	let profileCountry = $state(profile?.country ?? 'World');
	let profilePrivate = $state(profile?.private ?? false);
	let profilePrivateServers = $state(profile?.private_servers ?? []);
	let profileDiscordUsernameShown = $state(
		profile?.discord_username_shown ?? false,
	);
	let profileModeratorBadgeShown = $state(
		profile?.moderator_badge_shown ?? false,
	);
	let profileUsername = $state(profile?.username ?? 'Not found');

	let usernameError = $state(false);
	let hoveringAvatar = $state(false);

	const allCountryOptions = [
		{ id: 'World', text: 'World' },
		...Object.keys(countries).map((e) => {
			return {
				id: e,
				text: countries[e].name,
			};
		}),
	];

	onMount(() => {
		if ($onboardingTypeStore === 'leaderboards' && $onboardingStepStore === 2) {
			startWalkthrough();
		}
	});

	// TODO check if it works with brand-new profile
	// $inspect(profilePrivateServers);

	// TODO check supabase db for duplicate names in the +page.server.ts file of where this component is used.
	// TODO zod
</script>

{#if showToastNotification}
	<div transition:fade class="toast-notification">
		<ToastNotification
			hideCloseButton
			timeout={toastNotificationTimeout}
			kind={toastNotificationKind}
			title={toastNotificationTitle}
			subtitle={toastNotificationSubtitle}
			caption={new Date().toLocaleString()}
			on:close={(e) => {
				toastNotificationTimeout = undefined;
				//console.log(e.detail.timeout); // true if closed via timeout
			}}
		/>
	</div>
{/if}

<div>
	<SectionHeadingTopLevel title="Public Profile" />

	<div>
		{#if usernameError}
			<div class="inline-notification-container">
				<InlineNotification
					lowContrast
					kind="error"
					title="Error:"
					subtitle="Coult not set username, choose another one."
				/>
			</div>
		{/if}
		<div class="username-container">
			<div class="driverjs-0-2">
				<form
					method="POST"
					action="?/updateProfileUsername"
					use:enhance={({ formData }) => {
						formData.set('username', newUsername);

						return async ({ result }) => {
							if (result.type === 'success') {
								// Invalidate all routes that might show profile data
								await invalidateAll(); // Add this dependency tag in your load functions
								toastNotificationTitle = 'Success';
								toastNotificationSubtitle =
									'Profile username updated successfully!';
								toastNotificationKind = 'success';
								toastNotificationTimeout = undefined;
								toastNotificationTimeout = toastNotificationDuration;

								profileUsername = newUsername;

								if (
									$onboardingTypeStore === 'leaderboards' &&
									$onboardingStepStore === 2
								) {
									$onboardingStepStore = 3;
								}
							} else {
								toastNotificationTitle = 'Error';
								toastNotificationSubtitle =
									'Failed to update profile username. try another name.';
								toastNotificationKind = 'error';
								toastNotificationTimeout = undefined;
								toastNotificationTimeout = toastNotificationDuration;
							}
						};
					}}
				>
					<div class="username-inputs-container">
						<div class="username-inputs">
							<div class="username-input">
								<Dropdown
									titleText="Username Prefix"
									bind:selectedId={selectedMonsterPrefixFromList}
									items={usernames.types.map((e) => {
										return { id: e, text: e !== '' ? e : 'None' };
									})}
								/>
							</div>
							<div class="username-input">
								<ComboBox
									titleText="Username"
									placeholder="Select monster"
									bind:selectedId={selectedMonsterNameFromList}
									items={usernames.monsters.map((e) => {
										return { id: e, text: e };
									})}
									{shouldFilterItem}
								/>
							</div>
						</div>

						<p>Current username: {profileUsername}</p>
						<p>New username: {newUsername}-####</p>

						<div class="tooltip-container driverjs-1-2">
							<Tooltip align="start"
								><p>
									The numbers after the monster name cannot be chosen. You need
									to choose a username in order to create a profile. The total
									possible combinations give {usernames.types.length *
										usernames.monsters.length *
										10_000} available usernames to choose from!
								</p></Tooltip
							>
							<Button
								disabled={!isNewUsernameDifferent(newUsername, profileUsername)}
								type="submit"
								kind="primary">Update username</Button
							>
						</div>
					</div>
				</form>
			</div>
			<div class="avatar-container">
				<p class="spaced-paragraph"><strong>Profile picture</strong></p>
				<Lens hovering={hoveringAvatar}>
					<Avatar height="256px" src={getAvatar(profileAvatar)} />
				</Lens>
			</div>
		</div>

		<form
			method="POST"
			action="?/updatePublicProfile"
			use:enhance={({ formData }) => {
				formData.set('avatar', profileAvatar);
				formData.set('country', profileCountry ?? 'World');
				formData.set('theme', profileTheme);
				formData.set('title', profileTitle);
				formData.set('emblem', profileEmblem);
				// TODO works?
				// Don't stringify the array, just send it as is
				formData.delete('privateServers'); // Remove any existing values
				profilePrivateServers.forEach((server) => {
					formData.append('privateServers', server);
				});
				formData.set('guildCardTheme', profileGuildCardTheme);

				// TODO it does not update the ui until i refresh the page.
				return async ({ result }) => {
					if (result.type === 'success') {
						await invalidateAll();
						// Invalidate all routes that might show profile data
						// await invalidate('supabase:db:profiles'); // Add this dependency tag in your load functions
						// await invalidate((url) => url.pathname.startsWith('/profile')); // Invalidate all profile routes
						// await invalidate('/'); // Invalidate root route if it shows profile data

						// Optional: Show success notification
						// alert('Profile updated successfully!');
						toastNotificationTitle = 'Success';
						toastNotificationSubtitle = 'Profile updated successfully!';
						toastNotificationKind = 'success';
						toastNotificationTimeout = undefined;
						toastNotificationTimeout = toastNotificationDuration;
					} else {
						// alert('Failed to update profile!');
						toastNotificationTitle = 'Error';
						toastNotificationSubtitle = 'Failed to update profile.';
						toastNotificationKind = 'error';
						toastNotificationTimeout = undefined;
						toastNotificationTimeout = toastNotificationDuration;
					}
				};
			}}
		>
			<div class="inputs">
				<div class="dropdown-tooltip-container">
					<Tooltip align="start">
						<p>
							The avatar for your profile page and leaderboards. You can obtain
							avatars from Wycademy events.
						</p>
					</Tooltip>
					<div class="input">
						<Dropdown
							titleText="Avatar"
							bind:selectedId={profileAvatar}
							items={profileAvatars.map((e) => {
								return {
									id: e.id,
									text: e.id,
								};
							})}
						>
							{#snippet children({ item })}
								<div>
									<img
										alt="Avatar Icon"
										src={getAvatar(item.text)}
										width="24"
									/>
									<strong style="vertical-align: center;">{item.text}</strong>
								</div>
							{/snippet}
						</Dropdown>
					</div>
				</div>

				<div class="dropdown-tooltip-container">
					<Tooltip align="start">
						<p>
							Your country name and flag will be shown publicly in leaderboards
							and in your profile page. Select "World" if you do not want to
							show your real country.
						</p>
					</Tooltip>
					<div class="input">
						<ComboBox
							invalid={!profileCountry}
							invalidText={'Select a country'}
							titleText="Country"
							placeholder="Select country"
							bind:selectedId={profileCountry}
							items={allCountryOptions}
							{shouldFilterItem}
						>
							{#snippet children({ item })}
								<div>
									{#if item.id === 'World'}
										<span><img alt="World" src={WorldIcon} /></span>
									{:else}
										<span class="fi fi-{item.id.toLowerCase()}"></span>
									{/if}
									<span style="vertical-align: center;">{item.text}</span>
								</div>
							{/snippet}
						</ComboBox>
					</div>
				</div>

				<div class="dropdown-tooltip-container">
					<Tooltip align="start">
						<p>
							The theme for your profile page. You can obtain themes from
							Wycademy events.
						</p>
					</Tooltip>
					<div class="input">
						<Dropdown
							titleText="Theme"
							bind:selectedId={profileTheme}
							items={profileThemes.map((e) => {
								return {
									id: e.id,
									text: e.id,
								};
							})}
						/>
					</div>
				</div>

				<div class="dropdown-tooltip-container">
					<Tooltip align="start">
						<p>
							Your title will show next to your profile username. You can obtain
							titles from Wycademy events.
						</p>
					</Tooltip>
					<div class="input">
						<Dropdown
							titleText="Title"
							bind:selectedId={profileTitle}
							items={profileTitles.map((e) => {
								return {
									id: e.id,
									text: e.id,
								};
							})}
						/>
					</div>
				</div>
				<div class="dropdown-tooltip-container">
					<Tooltip align="start">
						<p>
							Your emblem is a symbol or icon shown next to your profile
							username and in leaderboards. You can obtain emblems from Wycademy
							events.
						</p>
					</Tooltip>
					<div class="input">
						<Dropdown
							titleText="Emblem"
							bind:selectedId={profileEmblem}
							items={profileEmblems.map((e) => {
								return {
									id: e.id,
									text: e.id,
								};
							})}
						/>
					</div>
				</div>
				<div class="dropdown-tooltip-container">
					<Tooltip align="start">
						<p>
							The private servers that you mainly play on. Shown in your
							profile.
						</p>
					</Tooltip>
					<div class="input">
						<MultiSelect
							spellcheck="false"
							placeholder="Select private servers..."
							filterable
							titleText="Private Servers"
							label="Select class..."
							items={frontierServers.map((e) => {
								return {
									id: e,
									text: e,
								};
							})}
							bind:selectedIds={profilePrivateServers}
						/>
					</div>
				</div>
				<div class="input guild-card-theme">
					<Dropdown
						titleText="Guild Card Theme"
						bind:selectedId={profileGuildCardTheme}
						items={guildCardBackgrounds
							.filter((e) => !e.unused)
							.map((e) => {
								return {
									id: e.name,
									text: e.name,
								};
							})}
					/>
				</div>
				<div class="privacy-notice">
					<p class="spaced-paragraph">
						All of the fields on this page are optional and can be deleted at
						any time, and by filling them out, you're giving us consent to share
						this data wherever your user profile appears. Please see our <Link
							inline
							href="/support/policies/privacy-policy">privacy statement</Link
						> to learn more about how we use this information.
					</p>

					<Button
						disabled={!profileCountry ||
							!profileAvatar ||
							!profileEmblem ||
							!profileTheme ||
							!profileGuildCardTheme}
						type="submit"
						kind="primary">Update preferences</Button
					>
				</div>
			</div>
		</form>

		<section>
			<SectionHeading level={2} title="Activity" />
			<div>
				<form
					method="POST"
					action="?/updateActivity"
					use:enhance={({ formData }) => {
						formData.delete('activity');
						formData.append('activity', profilePrivate.toString());
						return async ({ result }) => {
							if (result.type === 'success') {
								await invalidateAll();
								toastNotificationTitle = 'Success';
								toastNotificationSubtitle = 'Profile updated successfully!';
								toastNotificationKind = 'success';
								toastNotificationTimeout = undefined;
								toastNotificationTimeout = toastNotificationDuration;
							} else {
								toastNotificationTitle = 'Error';
								toastNotificationSubtitle = 'Failed to update profile.';
								toastNotificationKind = 'error';
								toastNotificationTimeout = undefined;
								toastNotificationTimeout = toastNotificationDuration;
							}
						};
					}}
				>
					<div class="checkbox-container">
						<Tooltip>
							<p>
								Enabling this will hide your quests and activity from your
								Wycademy profile and from social features like followers,
								favorites, leaderboards, etc.
							</p>
						</Tooltip>
						<Checkbox
							labelText="Make profile private and hide activity"
							bind:checked={profilePrivate}
						/>
					</div>
					<Button type="submit" kind="tertiary">Update preferences</Button>
				</form>
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="Profile Settings" />
			<div>
				<form
					method="POST"
					action="?/updateProfileSettings"
					use:enhance={({ formData }) => {
						formData.delete('settings');
						formData.append('settings', profileDiscordUsernameShown.toString());
						formData.append('settings', profileModeratorBadgeShown.toString());

						return async ({ result }) => {
							if (result.type === 'success') {
								await invalidateAll();

								toastNotificationTitle = 'Success';
								toastNotificationSubtitle = 'Profile updated successfully!';
								toastNotificationKind = 'success';
								toastNotificationTimeout = undefined;
								toastNotificationTimeout = toastNotificationDuration;
							} else {
								toastNotificationTitle = 'Error';
								toastNotificationSubtitle = 'Failed to update profile.';
								toastNotificationKind = 'error';
								toastNotificationTimeout = undefined;
								toastNotificationTimeout = toastNotificationDuration;
							}
						};
					}}
				>
					<div class="checkbox-container">
						<Tooltip>
							<p>
								Enabling this will show your Discord username in your Wycademy
								profile and in leaderboards.
							</p>
						</Tooltip>
						<Checkbox
							labelText="Make Discord username public"
							bind:checked={profileDiscordUsernameShown}
						/>
					</div>
					<div class="checkbox-container">
						<Tooltip>
							<p>
								Enabling this will show your Moderator badge in your Wycademy
								profile, if you are a moderator.
							</p>
						</Tooltip>
						<Checkbox
							labelText="Make Moderator badge public"
							bind:checked={profileModeratorBadgeShown}
						/>
					</div>
					<Button type="submit" kind="tertiary">Update preferences</Button>
				</form>
			</div>
		</section>
	</div>
</div>

<style lang="scss">
	.toast-notification {
		position: fixed;
		top: 5vh;
		right: 0;
	}

	.username-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		flex-direction: row;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.checkbox-container {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.dropdown-tooltip-container {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: 1rem;
	}

	.privacy-notice {
		display: flex;
		flex-direction: column;
	}

	.inputs {
		display: flex;
		gap: 1rem;
		flex-direction: column;
	}

	.input {
		width: max-content;
		min-width: 12rem;
	}

	.avatar-container {
		display: flex;
		flex-direction: column;
	}

	.username-inputs-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.tooltip-container {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.username-inputs {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		width: 100%;
		flex-direction: column;

		.username-input {
			width: max-content;
			min-width: 12rem;
		}
	}
</style>
