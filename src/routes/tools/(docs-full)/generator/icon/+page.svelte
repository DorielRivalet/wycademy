<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Dropdown, {
		type DropdownItem,
	} from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import ComboBox from 'carbon-components-svelte/src/ComboBox/ComboBox.svelte';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import ColorPicker from 'svelte-awesome-color-picker';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import { browser } from '$app/environment';
	import { getHexStringFromCatppuccinColor } from '$lib/client/themes/catppuccin';
	import { domToPng } from 'modern-screenshot';
	import slugify from 'slugify';
	import type {
		FrontierArmor,
		FrontierImageType,
		FrontierMonsterInfo,
		FrontierWeapon,
		IconSize,
	} from '$lib/client/modules/frontier/types';
	import { getUniqueMonsters } from '$lib/client/modules/frontier/monsters';
	import {
		AilmentIcons,
		StatusIcons,
	} from '$lib/client/modules/frontier/ailments';
	import { ArmorTypes } from '$lib/client/modules/frontier/armor';
	import { ElementIcons } from '$lib/client/modules/frontier/elements';
	import { Habitats } from '$lib/client/modules/frontier/habitat';
	import { ItemColors, itemInfo } from '$lib/client/modules/frontier/items';
	import { LocationIcons } from '$lib/client/modules/frontier/locations';
	import { monsterInfo } from '$lib/client/modules/frontier/monsters';
	import {
		RarityColors,
		ColorCodes,
		gameInfo,
	} from '$lib/client/modules/frontier/objects';
	import { WeaponTypes } from '$lib/client/modules/frontier/weapons';
	import MonsterComponent from '$lib/client/components/frontier/icon/dynamic-import/MonsterComponent.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	function downloadIconImage() {
		if (!browser) return;
		const isSVG =
			((selectedIconType === 'Monster Icon' || selectedIconType === 'Weapon') &&
				selectedIconFormat === 'Vector') ||
			selectedIconType === 'Element' ||
			selectedIconType === 'Ailment' ||
			selectedIconType === 'Status' ||
			selectedIconType === 'Armor' ||
			selectedIconType === 'Item';
		let node = isSVG
			? document.querySelector('#icon-dom svg')
			: document.querySelector('#icon-dom img');
		if (!node) return;
		if (!isSVG) {
			domToPng(node, { quality: 1 }).then((dataUrl) => {
				const link = document.createElement('a');
				link.download = `${slugify(`${slugify(selectedIconIdFromList)}.png`)}`;
				link.href = dataUrl;
				link.click();
			});
		} else {
			// Serialize the SVG node to a string
			let svgString = new XMLSerializer().serializeToString(node);

			// Create a Blob from the SVG string
			let blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });

			// Create a URL for the Blob
			const url = URL.createObjectURL(blob);

			// Create a link element for downloading
			const link = document.createElement('a');
			link.download = `${slugify(`${slugify(selectedIconIdFromList)}${selectedIconType === 'Armor' || selectedIconType === 'Item' || selectedIconType === 'Weapon' ? `-${selectedIconColor}` : ''}.svg`)}`;
			link.href = url;

			// Append the link to the body, click it, and then remove it
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	}

	function getAllFrontierColors() {
		let result: DropdownItem[] = [];
		RarityColors.forEach((e, i) => {
			if (i < 3) {
				// For the first three entries, group them under "Rare 1-3"
				if (i === 0) {
					result.push({ id: e, text: `Rare 1-3` });
				}
			} else {
				// For the rest, use the index to generate the text "Rare 4 to Rare 12"
				result.push({ id: e, text: `Rare ${i + 1}` });
			}
		});
		ItemColors.forEach((e) => result.push({ id: e.value, text: e.name }));
		ColorCodes.forEach((e, i) => result.push({ id: e, text: `~C${i}` }));

		// Remove duplicates based on 'id'
		const uniqueResult = result.filter(
			(obj, index) => result.findIndex((item) => item.id === obj.id) === index,
		);

		return uniqueResult;
	}

	function getCurrentIconsFromType(type: string) {
		let list:
			| FrontierWeapon[]
			| FrontierArmor[]
			| { name: string; icon: any }[]
			| FrontierMonsterInfo[]
			| { name: string; image: any }[];
		switch (type) {
			default:
				list = WeaponTypes;
				break;
			case 'Weapon':
				list = WeaponTypes;
				break;
			case 'Armor':
				list = ArmorTypes;
				break;
			case 'Item':
				list = itemInfo;
				break;
			case 'Monster Icon':
			case 'Monster Render':
				list = uniqueMonsters;
				break;
			case 'Element':
				list = ElementIcons;
				break;
			case 'Ailment':
				list = AilmentIcons;
				break;
			case 'Status':
				list = StatusIcons;
				break;
			case 'Location':
				list = LocationIcons;
				break;
			case 'Habitat':
				list = Habitats;
				break;
			case 'Game':
				list = gameInfo;
				break;
		}

		if (type !== 'Habitat') {
			list = list.filter((e) => e.icon !== '');
		}

		let result: DropdownItem[] = [];
		list.forEach((element) => {
			if (
				(type === 'Monster Icon' ||
					type === 'Element' ||
					type === 'Monster Render') &&
				'displayName' in element
			) {
				// TypeScript now knows that element is of type FrontierMonsterInfo
				// Ensure 'displayName' is a string before pushing to result
				if (
					typeof element.displayName === 'string' &&
					!result.find((e) => e.id === element.displayName)
				) {
					result.push({
						id: `${element.displayName}`,
						text: element.displayName,
					});
				}
			} else {
				result.push({ id: element.name, text: element.name });
			}
		});

		result.sort((a, b) => a.text.localeCompare(b.text));

		selectedIconIdFromList = result[0].id;

		return result;
	}

	function getIconBlobFromIconMetaData(
		selectedIconType: FrontierImageType,
		selectionID: string,
		size: IconSize,
		format: 'Vector' | 'Raster',
		color: string,
	) {
		// TODO return html in either the form of img if selecting PNG or
		// svelte component if selecting SVG.
		switch (selectedIconType) {
			case 'Weapon':
				return {
					component: WeaponTypes.find((e) => e.name === selectionID)?.icon,
					image: WeaponTypes.find((e) => e.name === selectionID)?.smallIcon,
				};
			case 'Monster Icon':
				return {
					component: MonsterComponent,
					image: monsterInfo.find((e) => e.displayName === selectionID)?.icon,
				};
			case 'Monster Render':
				return {
					full: monsterInfo.find((e) => e.displayName === selectionID)
						?.fullRender,
					small: monsterInfo.find((e) => e.displayName === selectionID)?.render,
				};
			case 'Armor':
				return {
					component: ArmorTypes.find((e) => e.name === selectionID)?.icon,
					image: ArmorTypes.find((e) => e.name === selectionID)?.icon,
				};
			case 'Item':
				return {
					component: itemInfo.find((e) => e.name === selectionID)?.icon,
					image: itemInfo.find((e) => e.name === selectionID)?.icon,
				};
			case 'Location':
				return {
					component: LocationIcons.find((e) => e.name === selectionID)?.icon,
					image: LocationIcons.find((e) => e.name === selectionID)?.icon,
				};
			case 'Element':
				return {
					component: ElementIcons.find((e) => e.displayName === selectionID)
						?.icon,
					image: ElementIcons.find((e) => e.displayName === selectionID)?.icon,
				};
			case 'Ailment':
				return {
					component: AilmentIcons.find((e) => e.name === selectionID)?.icon,
					image: AilmentIcons.find((e) => e.name === selectionID)?.icon,
				};
			case 'Status':
				return {
					component: StatusIcons.find((e) => e.name === selectionID)?.icon,
					image: StatusIcons.find((e) => e.name === selectionID)?.icon,
				};
			case 'Habitat':
				return {
					component: Habitats.find((e) => e.name === selectionID)?.image,
					image: Habitats.find((e) => e.name === selectionID)?.image,
				};
			case 'Game':
				return {
					component: gameInfo.find((e) => e.name === selectionID)?.icon,
					image: gameInfo.find((e) => e.name === selectionID)?.icon,
				};
		}
	}

	function shouldFilterItem(item: { text: string }, value: string) {
		if (!value) return true;
		return item.text.toLowerCase().includes(value.toLowerCase());
	}

	let selectedIconFormat: 'Vector' | 'Raster' = $state('Vector');
	let selectedIconMonsterRenderSize: 'Small' | 'Full' = $state('Full');
	let selectedIconSize: IconSize = $state('256px');
	let selectedIconType: FrontierImageType = $state('Monster Icon');
	const allFrontierColors = getAllFrontierColors();

	let uniqueMonsters = getUniqueMonsters().sort(
		(a, b) =>
			(a?.displayName?.codePointAt(0) ?? 0) -
			(b?.displayName?.codePointAt(0) ?? 0),
	);
	let selectedIconIdFromList = $state('Abiorugu');
	let selectedIconColor = $state(allFrontierColors[0].id);
	let selectedIconBackground = $state(false);

	let selectedIconShadowColor = $state('#ffffff');
	let selectedIconShadowWidth = $state(0);

	let currentIconsFromType = $derived(getCurrentIconsFromType(selectedIconType));

	let currentIconPreview = $derived(getIconBlobFromIconMetaData(
		selectedIconType,
		selectedIconIdFromList,
		selectedIconSize,
		selectedIconFormat,
		selectedIconColor,
	));
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Icons Preview'} />
		<p class="spaced-paragraph">
			This is a playground for icons, which can be useful for seeing game assets
			and downloading your results.
		</p>
		<p class="spaced-paragraph">
			You can find the image for the monster backgrounds in our <OutboundLink
				href="https://github.com/DorielRivalet/wycademy/blob/main/src/lib/client/images/monster/bg-512.webp"
				>repository</OutboundLink
			>.
		</p>
		<div class="container-buttons">
			<Button kind="tertiary" icon={Download} on:click={downloadIconImage}
				>Download</Button
			>
			<Dropdown
				type="inline"
				titleText="Type"
				bind:selectedId={selectedIconType}
				items={[
					{ id: 'Ailment', text: 'Ailment' },
					{ id: 'Armor', text: 'Armor' },
					{ id: 'Element', text: 'Element' },
					{ id: 'Game', text: 'Game' },
					{ id: 'Habitat', text: 'Habitat' },
					{ id: 'Item', text: 'Item' },
					{ id: 'Location', text: 'Location' },
					{ id: 'Status', text: 'Status' },
					{ id: 'Monster Icon', text: 'Monster Icon' },
					{ id: 'Monster Render', text: 'Monster Render' },
					{ id: 'Weapon', text: 'Weapon' },
				]}
			/>
			<ComboBox
				titleText="Icon"
				placeholder="Select icon"
				bind:selectedId={selectedIconIdFromList}
				items={currentIconsFromType}
				{shouldFilterItem}
			/>
			<Dropdown
				type="inline"
				titleText="Size"
				bind:selectedId={selectedIconSize}
				items={[
					{ id: '64px', text: '64px' },
					{ id: '128px', text: '128px' },
					{ id: '256px', text: '256px' },
					{ id: '512px', text: '512px' },
					{ id: '1024px', text: '1024px' },
					{ id: '2048px', text: '2048px' },
				]}
			/>
			{#if selectedIconType === 'Monster Icon' || selectedIconType === 'Weapon'}
				<Dropdown
					type="inline"
					titleText="Format"
					bind:selectedId={selectedIconFormat}
					items={[
						{ id: 'Raster', text: 'Raster' },
						{ id: 'Vector', text: 'Vector' },
					]}
				/>
			{/if}
			{#if selectedIconType === 'Monster Render'}
				<Dropdown
					type="inline"
					titleText="Render Size"
					bind:selectedId={selectedIconMonsterRenderSize}
					items={[
						{ id: 'Small', text: 'Small' },
						{ id: 'Full', text: 'Full' },
					]}
				/>
			{/if}
			{#if selectedIconType === 'Armor' || selectedIconType === 'Item' || selectedIconType === 'Weapon'}
				<Dropdown
					type="inline"
					titleText="Color"
					bind:selectedId={selectedIconColor}
					items={allFrontierColors}
				/>
			{/if}
			{#if selectedIconType === 'Monster Icon' && selectedIconFormat === 'Vector'}
				<Toggle
					labelText="Background"
					bind:toggled={selectedIconBackground}
				/>{/if}
			<ColorPicker
				bind:hex={selectedIconShadowColor}
				label="Shadow Color"
				--cp-bg-color={getHexStringFromCatppuccinColor(
					'base',
					$carbonThemeStore,
				)}
				--cp-border-color={getHexStringFromCatppuccinColor(
					'text',
					$carbonThemeStore,
				)}
				--cp-input-color={getHexStringFromCatppuccinColor(
					'surface0',
					$carbonThemeStore,
				)}
				--cp-button-hover-color={getHexStringFromCatppuccinColor(
					'blue',
					$carbonThemeStore,
				)}
			/>
			<NumberInput
				size="sm"
				step={1}
				min={0}
				max={128}
				bind:value={selectedIconShadowWidth}
				invalidText={'Value must be between 0 and 128'}
				label={'Shadow Width (px)'}
			/>
		</div>
		<div class="icon-preview">
			<div id={'icon-dom'} style="width: {selectedIconSize}">
				{#if ((selectedIconType === 'Monster Icon' || selectedIconType === 'Weapon') && selectedIconFormat === 'Vector') || selectedIconType === 'Element' || selectedIconType === 'Ailment' || selectedIconType === 'Status' || selectedIconType === 'Item' || selectedIconType === 'Armor'}
					<div
						style="filter: drop-shadow(0 0 {selectedIconShadowWidth}px {selectedIconShadowColor});"
					>
						<currentIconPreview.component
							{...{
								currentMonster: selectedIconIdFromList,
								size: selectedIconType === 'Weapon' ? '100%' : selectedIconSize,
								color: selectedIconColor,
								background: selectedIconBackground,
							}}
						/>
					</div>
				{:else}
					<img
						src={selectedIconType === 'Monster Render'
							? selectedIconMonsterRenderSize === 'Small'
								? currentIconPreview.small
								: currentIconPreview.full
							: currentIconPreview.image}
						alt={selectedIconIdFromList}
						width={selectedIconSize}
						style="filter: drop-shadow(0 0 {selectedIconShadowWidth}px {selectedIconShadowColor});"
					/>
				{/if}
			</div>
		</div>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.container-buttons {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	.icon-preview {
		display: flex;
		width: 100%;
		justify-content: center;
	}
</style>
