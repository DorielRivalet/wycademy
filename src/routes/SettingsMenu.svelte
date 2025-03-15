<script lang="ts">
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';
	import Popover from 'carbon-components-svelte/src/Popover/Popover.svelte';
	import { slide } from 'svelte/transition';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import {
		getThemeIcon,
		getThemeId,
		getThemeNameFromId,
		setTheme,
	} from '$lib/client/stores/theme';
	import { getCursorIcon, setCursor } from '$lib/client/stores/cursor';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import Slider from 'carbon-components-svelte/src/Slider/Slider.svelte';
	import { themeOptions } from '$lib/client/themes/options';
	import Language from 'carbon-icons-svelte/lib/Language.svelte';
	import ColorPalette from 'carbon-icons-svelte/lib/ColorPalette.svelte';
	import VolumeUp from 'carbon-icons-svelte/lib/VolumeUp.svelte';
	import VolumeMute from 'carbon-icons-svelte/lib/VolumeMute.svelte';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';
	import { getContext } from 'svelte';
	import { onStoreToggle } from '$lib/client/stores/toggles';
	import { onVolumeChange } from '$lib/client/stores/volume';
	import DropdownSkeleton from 'carbon-components-svelte/src/Dropdown/DropdownSkeleton.svelte';
	import { browser } from '$app/environment';
	import { catppuccinThemeMap } from '$lib/catppuccin';
	import Cursor_1 from 'carbon-icons-svelte/lib/Cursor_1.svelte';
	import { cursorVars } from '$lib/client/themes/cursor';
	import type { Writable } from 'svelte/store';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import Settings from 'carbon-icons-svelte/lib/Settings.svelte';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	const cursorIconStore = getContext(
		Symbol.for('cursorIcon'),
	) as Writable<string>;

	const soundStore = getContext(Symbol.for('sound')) as Writable<boolean>;

	const volumeStore = getContext(Symbol.for('volume')) as Writable<number>;

	const scrollToTopStore = getContext(
		Symbol.for('scrollToTop'),
	) as Writable<boolean>;

	const stickyHeaderStore = getContext(
		Symbol.for('stickyHeader'),
	) as Writable<boolean>;

	// TODO

	function changeCatppuccinFlavorCSSVariables(selectedId: string) {
		if (!browser) return;
		let themeValue = getThemeNameFromId(selectedId);
		let cssVarMap =
			catppuccinThemeMap[themeValue] || catppuccinThemeMap.default;
		Object.keys(cssVarMap).forEach((key) => {
			document.documentElement.style.setProperty(key, `var(${cssVarMap[key]})`);
		});
	}

	function changeCursorCSSVariable(selectedId: string) {
		if (!browser) return;
		let cssVarMap = cursorVars[selectedId] || cursorVars.default;
		Object.keys(cssVarMap).forEach((key) => {
			document.documentElement.style.setProperty(key, `var(${cssVarMap[key]})`);
		});
	}

	function changeTheme(selectedId: string) {
		setTheme(carbonThemeStore, selectedId);
		changeCatppuccinFlavorCSSVariables(selectedId);
		// let oldDiagram = diagram;
		// diagram = '';
		// mermaidTheme = $carbonThemeStore === 'g10' ? 'default' : 'dark';
		// diagram = oldDiagram;
	}

	function changeCursor(selectedId: string) {
		setCursor(cursorIconStore, selectedId);
		changeCursorCSSVariable(selectedId);
	}

	let open = $state(false);
	let ref: HTMLDivElement | null = $state(null);
</script>

<LocalStorage bind:value={$soundStore} key="__sound-enabled" />
<LocalStorage bind:value={$volumeStore} key="__volume" />
<LocalStorage bind:value={$cursorIconStore} key="__cursor-icon" />
<LocalStorage bind:value={$scrollToTopStore} key="__scroll-to-top-enabled" />
<LocalStorage bind:value={$stickyHeaderStore} key="__sticky-header-enabled" />

<div style:height="100%" bind:this={ref} style:position="relative">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<Button
		kind="ghost"
		onclick={() => (open = !open)}
		tooltipPosition="left"
		iconDescription={!open ? 'Open Site Preferences' : 'Close Site Preferences'}
		><span slot="icon"><Settings size={24} color="var(--ctp-text)" /></span
		></Button
	>

	<Popover
		bind:open
		align="bottom-right"
		on:click:outside={({ detail }) => {
			open = ref.contains(detail.target);
		}}
	>
		{#if open}
			<div class="popover-content" transition:slide={{ duration: 150 }}>
				<div class="header">
					<p><strong>Preferences</strong></p>
				</div>
				<hr />

				<div class="all-settings-container">
					<div class="setting-container">
						<Language size={32} />
						<Dropdown
							disabled
							titleText="Language"
							type="inline"
							selectedId="0"
							items={[{ id: '0', text: 'English' }]}
						/>
					</div>

					<div class="setting-container">
						<div class="sound-setting-icon-container">
							<div class="setting-icon">
								{#if $soundStore && $volumeStore > 0}
									<VolumeUp size={32} />
								{:else}
									<VolumeMute size={32} />
								{/if}
							</div>
							<Toggle
								labelText="Sound"
								on:toggle={(e) => onStoreToggle(soundStore, e)}
								bind:toggled={$soundStore}
							/>
						</div>
						<Slider
							labelText="Volume"
							required
							on:change={(e) => onVolumeChange(volumeStore, e)}
							value={$volumeStore}
							disabled={!$soundStore}
						/>
					</div>

					<div class="setting-container">
						<Toggle
							labelText="Scroll to Top Button"
							on:toggle={(e) => onStoreToggle(scrollToTopStore, e)}
							bind:toggled={$scrollToTopStore}
						/>
					</div>

					<div class="setting-container">
						<Toggle
							labelText="Sticky Header"
							on:toggle={(e) => onStoreToggle(stickyHeaderStore, e)}
							bind:toggled={$stickyHeaderStore}
						/>
					</div>

					<div class="setting-container">
						<Cursor_1 size={32} />
						{#if $cursorIconStore !== undefined}
							<Dropdown
								titleText="Cursor Icon"
								selectedId={$cursorIconStore}
								type="inline"
								items={[
									{ id: 'Classic', text: 'Classic' },
									{ id: 'Modern', text: 'Modern' },
									{ id: 'None', text: 'None' },
								]}
								on:select={(event) => {
									changeCursor(event.detail.selectedId);
								}}
							>
								{#snippet children({ item })}
									<div>
										<img
											alt="Cursor Icon"
											src={getCursorIcon(item.id)}
											width="24"
										/>
										<strong style="vertical-align: top;">{item.text}</strong>
									</div>
								{/snippet}
							</Dropdown>
						{:else}
							<DropdownSkeleton />
						{/if}
					</div>

					<div class="setting-container">
						<ColorPalette size={32} />
						{#if getThemeId($carbonThemeStore) !== undefined}
							<Dropdown
								titleText="Theme"
								selectedId={getThemeId($carbonThemeStore)}
								type="inline"
								items={[
									{ id: '0', text: themeOptions[0].labelText },
									{ id: '1', text: themeOptions[1].labelText },
									{ id: '2', text: themeOptions[2].labelText },
									{ id: '3', text: themeOptions[3].labelText },
								]}
								on:select={(event) => changeTheme(event.detail.selectedId)}
							>
								{#snippet children({ item })}
									<div>
										<img
											alt="Theme Icon"
											src={getThemeIcon(item.id)}
											width="24"
										/>
										<strong style="vertical-align: center;">{item.text}</strong>
									</div>
								{/snippet}
							</Dropdown>
						{:else}
							<DropdownSkeleton />
						{/if}
					</div>
				</div>

				<ClickableTile href={'/site-preferences'}>
					<p>Notifications & More</p>
				</ClickableTile>
			</div>
		{/if}
	</Popover>
</div>

<style lang="scss">
	.header > p {
		padding: 1rem;
	}

	hr {
		width: 100%;
		height: 1px;
		background-color: var(--ctp-surface1);
		margin: 0;
	}

	.all-settings-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}

	.popover-content {
		display: flex;
		flex-direction: column;
		max-height: 85vh;
		overflow-y: auto;
	}

	.sound-setting-icon-container {
		display: flex;
		gap: 1rem;
	}
</style>
