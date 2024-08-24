<script lang="ts">
	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import '../app.scss';
	import ScrollToTop from './ScrollToTop.svelte';

	// Define unique symbols for the context keys
	const soundKey = Symbol.for('sound');
	const scrollToTopKey = Symbol.for('scrollToTop');
	const stickyHeaderKey = Symbol.for('stickyHeader');
	const volumeKey = Symbol.for('volume');
	const tocEnabledKey = Symbol.for('tocEnabled');
	const hunterNotesSidebarKey = Symbol.for('hunterNotesSidebar');
	const bannerKey = Symbol.for('banner');
	const carbonThemeKey = Symbol.for('carbonTheme');
	const cursonIconKey = Symbol.for('cursonIcon');
	const pushNotificationsKey = Symbol.for('pushNotifications');
	const notificationsKey = Symbol.for('notifications');

	// Helper function to get stored value or default
	const getStoredValue = (
		key: string,
		defaultValue: boolean | string | number,
	) => {
		if (!browser) return defaultValue;

		const storedValue = window.localStorage.getItem(key);
		if (storedValue === null) return defaultValue;

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
	const cursonIconStore = writable(getStoredValue('__curson-icon', '1'));
	const pushNotificationsStore = writable(
		getStoredValue('__push-notifications-enabled', true),
	);
	const notificationsStore = writable(
		getStoredValue('__notifications-enabled', true),
	);

	// Set stores in context using symbols as keys
	setContext(soundKey, soundStore);
	setContext(scrollToTopKey, scrollToTopStore);
	setContext(stickyHeaderKey, stickyHeaderStore);
	setContext(volumeKey, volumeStore);
	setContext(tocEnabledKey, tocEnabledStore);
	setContext(hunterNotesSidebarKey, hunterNotesSidebarEnabledStore);
	setContext(bannerKey, bannerEnabledStore);
	setContext(carbonThemeKey, carbonThemeStore);
	setContext(cursonIconKey, cursonIconStore);
	setContext(pushNotificationsKey, pushNotificationsStore);
	setContext(notificationsKey, notificationsStore);
</script>

<slot />

{#if $scrollToTopStore}
	<ScrollToTop />
{/if}
