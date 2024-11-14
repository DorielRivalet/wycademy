<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import Header from '../../../../../Header.svelte';
	import ViewTransition from '../../../../../Navigation.svelte';
	import Theme from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { themeTokens } from '$lib/client/themes/tokens';
	import { catppuccinThemeMap } from '$lib/client/themes/catppuccin';
	import { onMount } from 'svelte';
	import { cursorVars } from '$lib/client/themes/cursor';
	import { page } from '$app/stores';
	import {
		authorName,
		authorUrl,
		datePublished,
		projectName,
		website,
	} from '$lib/constants';
	import Head from '$lib/client/components/Head.svelte';
	import { getPageThumbnail } from '$lib/client/modules/thumbnails';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import PreviousOutline from 'carbon-icons-svelte/lib/PreviousOutline.svelte';
	import Help from 'carbon-icons-svelte/lib/Help.svelte';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;
	const cursorIcon = getContext(Symbol.for('cursorIcon')) as Writable<string>;

	$: tokens = themeTokens[$carbonThemeStore] || themeTokens.default;

	const url = $page.url.toString();

	onMount(() => {
		let themeValue = $carbonThemeStore;
		let cssVarMap =
			catppuccinThemeMap[themeValue] || catppuccinThemeMap.default;
		Object.keys(cssVarMap).forEach((key) => {
			document.documentElement.style.setProperty(key, `var(${cssVarMap[key]})`);
		});

		let cursorValue = $cursorIcon;
		cssVarMap = cursorVars[cursorValue] || cursorVars.default;
		Object.keys(cssVarMap).forEach((key) => {
			document.documentElement.style.setProperty(key, `var(${cssVarMap[key]})`);
		});
	});
</script>

<Head
	title={"Damage Calculator App — Frontier's Wycademy"}
	description={'Damage calculator application: see motion values, monster hitzones, armor skills, elements, status, and much more.'}
	image={getPageThumbnail(
		$page.url.pathname,
		null,
		$carbonThemeStore === 'g10' ? 'light' : 'dark',
	)}
	{url}
	{website}
	{authorName}
	{datePublished}
	{authorUrl}
	contentType="SoftwareApplication"
	name={projectName}
	siteName={projectName}
/>

<Theme
	bind:theme={$carbonThemeStore}
	persist
	persistKey="__carbon-theme"
	{tokens}
/>

<div class="app">
	<ViewTransition />
	<Splitpanes theme="no-splitter" horizontal dblClickSplitter={false}>
		<Pane size={6} minSize={6} maxSize={6}>
			<Header />
		</Pane>
		<Pane size={6} minSize={6} maxSize={6}>
			<div class="toolbar">
				<Button
					href="/tools/calculator/damage"
					kind="ghost"
					icon={PreviousOutline}
					tooltipPosition="right"
					iconDescription="Go to Page version"
				/>
				<Button
					kind="ghost"
					icon={Help}
					tooltipPosition="right"
					iconDescription="Walkthrough"
				/>
			</div>
		</Pane>

		<Pane>
			<Splitpanes horizontal theme="modern-theme">
				<Pane size={50}>
					<Splitpanes theme="modern-theme">
						<Pane size={75}>
							<p>Inputs + Diva Prayers, True Raw Converter, Help</p>
						</Pane>
						<Pane size={25}>
							<p>Results, Inputs Logs, Save and Load</p>
						</Pane>
					</Splitpanes>
				</Pane>
				<Pane size={50}>
					<Splitpanes theme="modern-theme">
						<Pane size={75}>
							<p>Motion Values, Shared Motion Values</p>
						</Pane>
						<Pane size={25}>
							<p>Monster HZV interactive SVG</p>
						</Pane>
					</Splitpanes>
				</Pane>
			</Splitpanes>
		</Pane>
		<Pane size={6} minSize={6} maxSize={6}>
			<p>statusbar</p>
		</Pane>
	</Splitpanes>

	<style global lang="scss">
		.splitpanes.modern-theme {
			.splitpanes__pane {
				background-color: red;
			}
			.splitpanes__splitter {
				background-color: red;
				position: relative;

				&:before {
					content: '';
					position: absolute;
					left: 0;
					top: 0;
					transition: opacity 0.4s;
					background-color: var(--ctp-blue);
					opacity: 0;
					z-index: 1;
				}
				&:hover:before {
					opacity: 1;
				}
				&.splitpanes__splitter__active {
					z-index: 2; /* Fix an issue of overlap fighting with a near hovered splitter */
				}
			}
		}
		.modern-theme {
			&.splitpanes--vertical > .splitpanes__splitter:before {
				left: -3px;
				right: -3px;
				height: 100%;
				cursor: col-resize;
			}
			&.splitpanes--horizontal > .splitpanes__splitter:before {
				top: -3px;
				bottom: -3px;
				width: 100%;
				cursor: row-resize;
			}
		}

		.splitpanes.no-splitter {
			.splitpanes__pane {
				background-color: var(--ctp-base);
			}
			.splitpanes__splitter {
				background-color: var(--ctp-surface1);
				position: relative;
			}
		}
		.no-splitter {
			&.splitpanes--horizontal > .splitpanes__splitter:before {
				width: 0.125rem;
				pointer-events: none;
				cursor: none;
			}
			&.splitpanes--vertical > .splitpanes__splitter:before {
				height: 0.125rem;
				pointer-events: none;
				cursor: none;
			}
		}
	</style>
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;

	.app {
		width: 100%;
		height: 100vh;
	}

	.toolbar {
		display: flex;
		gap: 0rem;
	}
</style>
