<script lang="ts">
	import { browser } from '$app/environment';
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import '../app.scss';
	import ScrollToTop from './ScrollToTop.svelte';
	import { themeTokens } from '$lib/client/themes/tokens';
	import { cursorVars } from '$lib/client/themes/cursor';
	import Theme from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { catppuccinThemeMap } from '$lib/catppuccin';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';
	import type { OnboardingType } from '$lib/client/types/onboarding';

	interface Props {
		children?: import('svelte').Snippet;
		data: import('./$types').LayoutData;
	}

	let { children, data }: Props = $props();

	// null session = no user. otherwise they are logged in.
	let { session, supabase } = $derived(data);

	// Define unique symbols for the context keys
	const soundKey = Symbol.for('sound');
	const scrollToTopKey = Symbol.for('scrollToTop');
	const stickyHeaderKey = Symbol.for('stickyHeader');
	const volumeKey = Symbol.for('volume');
	const tocEnabledKey = Symbol.for('tocEnabled');
	const hunterNotesSidebarKey = Symbol.for('hunterNotesSidebar');
	const bannerKey = Symbol.for('banner');
	const carbonThemeKey = Symbol.for('carbonTheme');
	const cursorIconKey = Symbol.for('cursorIcon');
	const pushNotificationsKey = Symbol.for('pushNotifications');
	const notificationsKey = Symbol.for('notifications');
	const onboardingTypeKey = Symbol.for('onboardingType');
	const onboardingStepKey = Symbol.for('onboardingStep');

	// Helper function to get stored value or default
	const getStoredValue = (
		key: string,
		defaultValue: boolean | string | number | OnboardingType,
	) => {
		if (!browser) return defaultValue;

		const storedValue = window.localStorage.getItem(key);
		if (storedValue === null) {
			// localStorage.getItem() specifically returns:
			// null if the key doesn't exist,
			// or a string if the key exists (even if that string is empty, like "")
			return defaultValue;
		}

		// Convert string to boolean or number if applicable
		if (typeof defaultValue === 'boolean') {
			return storedValue === 'true';
		} else if (typeof defaultValue === 'number') {
			return Number(storedValue);
		} else {
			return storedValue; // Assume string. If its an object/array we just do JSON.parse.
		}
	};

	// Initialize stores with values from localStorage or defaults
	const soundStore = writable(getStoredValue('__sound-enabled', true));
	const scrollToTopStore = writable(
		getStoredValue('__scroll-to-top-enabled', true),
	);
	const stickyHeaderStore = writable(
		getStoredValue('__sticky-header-enabled', true),
	);
	const volumeStore = writable(getStoredValue('__volume', 100));
	const tocEnabledStore = writable(getStoredValue('__toc-enabled', true));
	const hunterNotesSidebarEnabledStore = writable(
		getStoredValue('__hunter-notes-sidebar-enabled', true),
	);
	const bannerEnabledStore = writable(getStoredValue('__banner-enabled', true));
	const carbonThemeStore = writable(getStoredValue('__carbon-theme', 'g100'));
	const cursorIconStore = writable(getStoredValue('__cursor-icon', 'Classic'));
	const pushNotificationsStore = writable(
		getStoredValue('__push-notifications-enabled', true),
	);
	const notificationsStore = writable(
		getStoredValue('__notifications-enabled', true),
	);
	const onboardingTypeStore = writable(
		getStoredValue('__onboarding-type', ''),
	) as Writable<OnboardingType>;
	const onboardingStepStore = writable(getStoredValue('__onboarding-step', 0));

	// TODO to localstorage too?
	// export const onboardingState: { type: OnboardingType; step: number } = $state({
	// 	type: null,
	// 	step: 0,
	// });

	// Set stores in context using symbols as keys
	setContext(soundKey, soundStore);
	setContext(scrollToTopKey, scrollToTopStore);
	setContext(stickyHeaderKey, stickyHeaderStore);
	setContext(volumeKey, volumeStore);
	setContext(tocEnabledKey, tocEnabledStore);
	setContext(hunterNotesSidebarKey, hunterNotesSidebarEnabledStore);
	setContext(bannerKey, bannerEnabledStore);
	setContext(carbonThemeKey, carbonThemeStore);
	setContext(cursorIconKey, cursorIconStore);
	setContext(pushNotificationsKey, pushNotificationsStore);
	setContext(notificationsKey, notificationsStore);
	setContext(onboardingTypeKey, onboardingTypeStore);
	setContext(onboardingStepKey, onboardingStepStore);

	let tokens = $derived(themeTokens[$carbonThemeStore] || themeTokens.default);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
			// Queue this as a task so the navigation wont prevent the triggering function from completing.
			// This does not give security, add to authGuard in hooks.server.ts instead.
			// if (!newSession){
			// 	setTimeout(() => {
			// 		goto('/', {invalidateAll: true});
			// 	})
			// }

			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		let cssVarMap;
		let themeValue = $carbonThemeStore;
		// console.log('On mount 1');
		cssVarMap = catppuccinThemeMap[themeValue] || catppuccinThemeMap.default;
		// console.log('On mount 2');
		Object.keys(cssVarMap).forEach((key) => {
			// console.log('On mount ' + key.toString());
			document.documentElement.style.setProperty(key, `var(${cssVarMap[key]})`);
		});

		let cursorValue = $cursorIconStore;
		cssVarMap = cursorVars[cursorValue] || cursorVars.default;
		Object.keys(cssVarMap).forEach((key) => {
			document.documentElement.style.setProperty(key, `var(${cssVarMap[key]})`);
		});

		// window.addEventListener('scroll', handleScroll);
		return () => data.subscription.unsubscribe();
	});

	//$inspect(tokens);
</script>

<!--TODO: works? remove if it causes issues -->
<LocalStorage bind:value={$onboardingTypeStore} key="__onboarding-type" />
<LocalStorage bind:value={$onboardingStepStore} key="__onboarding-step" />

<Theme
	bind:theme={$carbonThemeStore}
	persist
	persistKey="__carbon-theme"
	{tokens}
/>

{@render children?.()}

{#if $scrollToTopStore}
	<ScrollToTop />
{/if}

<style lang="scss">
</style>
