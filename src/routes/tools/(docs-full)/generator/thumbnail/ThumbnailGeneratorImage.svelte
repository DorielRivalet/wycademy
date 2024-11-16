<script lang="ts">
	import { run } from 'svelte/legacy';

	import MagicWand from 'carbon-icons-svelte/lib/MagicWand.svelte';
	import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Dropdown, {
		type DropdownItem,
	} from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import ColorPicker from 'svelte-awesome-color-picker';
	import type { FrontierImageType } from '$lib/client/modules/frontier/types';
	import { getHexStringFromCatppuccinColor } from '$lib/client/themes/catppuccin';
	import { createEventDispatcher } from 'svelte';
	import ComboBox from 'carbon-components-svelte/src/ComboBox/ComboBox.svelte';
	import {
		AilmentIcons,
		StatusIcons,
	} from '$lib/client/modules/frontier/ailments';
	import { ArmorTypes } from '$lib/client/modules/frontier/armor';
	import { ElementIcons } from '$lib/client/modules/frontier/elements';
	import { Habitats } from '$lib/client/modules/frontier/habitat';
	import { itemInfo, ItemColors } from '$lib/client/modules/frontier/items';
	import { LocationIcons } from '$lib/client/modules/frontier/locations';
	import { monsterInfo } from '$lib/client/modules/frontier/monsters';
	import { WeaponTypes } from '$lib/client/modules/frontier/weapons';
	import {
		gameInfo,
		RarityColors,
		ColorCodes,
	} from '$lib/client/modules/frontier/objects';
	import MonsterComponent from '$lib/client/components/frontier/icon/dynamic-import/MonsterComponent.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	interface Props {
		top?: number;
		left?: number;
		width?: number;
		height?: number;
		zindex?: number;
		opacity?: number;
		dropShadowSize?: number;
		dropShadowColor?: string;
		borderWidth?: number;
		borderColor?: string;
		borderRadius?: number;
		background?: boolean;
		color: '#ffffff';
		monsterRenderSize: 'Small' | 'Full';
		fileType: FrontierImageType;
		index?: number;
		optionsList?: DropdownItem[];
		optionId: string;
		src: any;
	}

	let {
		top = $bindable(0),
		left = $bindable(0),
		width = $bindable(256),
		height = $bindable(256),
		zindex = $bindable(1),
		opacity = $bindable(1),
		dropShadowSize = $bindable(8),
		dropShadowColor = $bindable('#000000'),
		borderWidth = $bindable(0),
		borderColor = $bindable('#000000'),
		borderRadius = $bindable(8),
		background = $bindable(true),
		color = $bindable(),
		monsterRenderSize = $bindable(),
		fileType,
		index = 0,
		optionsList = [],
		optionId = $bindable(),
		src = $bindable()
	}: Props = $props();

	const dispatch = createEventDispatcher();

	function shouldFilterItem(item: { text: string }, value: string) {
		if (!value) return true;
		return item.text.toLowerCase().includes(value.toLowerCase());
	}

	function deleteElement() {
		// Emit an event to the parent component with the index
		dispatch('delete', { index });
	}

	function duplicate() {
		// Emit an event to the parent component with the index
		dispatch('duplicate', { index });
	}

	function getIconBlobFromIconMetaData(
		selectedIconType: FrontierImageType,
		selectionID: string,
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

	const allFrontierColors = getAllFrontierColors();
	run(() => {
		src = getIconBlobFromIconMetaData(fileType, optionId);
	});
</script>

<div class="container flex-column">
	<div class="flex-row">
		<ComboBox
			titleText="Icon"
			placeholder="Select icon"
			bind:selectedId={optionId}
			items={optionsList}
			{shouldFilterItem}
		/>
		<Button kind="danger-tertiary" icon={TrashCan} on:click={deleteElement}
			>Delete</Button
		>
		<Button kind="tertiary" icon={MagicWand} on:click={duplicate}
			>Duplicate</Button
		>
	</div>
	<div class="flex-row">
		<NumberInput
			size="sm"
			step={1}
			min={0}
			max={721}
			bind:value={top}
			invalidText={'Value must be between 0 and 721'}
			label={'Top Position (px)'}
		/>
		<NumberInput
			size="sm"
			step={1}
			min={0}
			max={1280}
			bind:value={left}
			invalidText={'Value must be between 0 and 1280'}
			label={'Left Position (px)'}
		/>
		{#if fileType === 'Armor' || fileType === 'Item' || fileType === 'Weapon'}
			<Dropdown
				type="inline"
				titleText="Color"
				bind:selectedId={color}
				items={allFrontierColors}
			/>
		{/if}
		{#if fileType === 'Monster Render'}
			<Dropdown
				type="inline"
				titleText="Render Size"
				bind:selectedId={monsterRenderSize}
				items={[
					{ id: 'Small', text: 'Small' },
					{ id: 'Full', text: 'Full' },
				]}
			/>
		{/if}
		{#if fileType === 'Monster Icon'}
			<Toggle labelText="Background" bind:toggled={background} />
		{/if}
		<ColorPicker
			bind:hex={dropShadowColor}
			label="Image Shadow Color"
			--cp-bg-color={getHexStringFromCatppuccinColor('base', $carbonThemeStore)}
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
			bind:value={dropShadowSize}
			invalidText={'Value must be between 0 and 128'}
			label={'Image Shadow Width (px)'}
		/>
		<ColorPicker
			bind:hex={borderColor}
			label="Image Border Color"
			--cp-bg-color={getHexStringFromCatppuccinColor('base', $carbonThemeStore)}
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
			bind:value={borderWidth}
			invalidText={'Value must be between 0 and 128'}
			label={'Image Border Width (px)'}
		/>
		<NumberInput
			size="sm"
			step={1}
			min={0}
			max={128}
			bind:value={borderRadius}
			invalidText={'Value must be between 0 and 128'}
			label={'Image Border Radius (px)'}
		/>
		<NumberInput
			size="sm"
			step={1}
			min={0}
			max={2048}
			bind:value={width}
			invalidText={'Value must be between 0 and 2048'}
			label={'Width (px)'}
		/>
		<NumberInput
			size="sm"
			step={1}
			min={0}
			max={2048}
			bind:value={height}
			invalidText={'Value must be between 0 and 2048'}
			label={'Height (px)'}
		/>
		<NumberInput
			size="sm"
			step={1}
			min={0}
			max={100}
			bind:value={zindex}
			invalidText={'Value must be between 0 and 100'}
			label={'ZIndex'}
		/>
		<NumberInput
			size="sm"
			step={0.1}
			min={0}
			max={1}
			bind:value={opacity}
			invalidText={'Value must be between 0 and 1'}
			label={'Opacity'}
		/>
	</div>
</div>

<style lang="scss">
	.container {
		border: 2px solid var(--ctp-overlay0);
		border-radius: 5px;
		padding: 1rem;
		background: var(--ctp-surface0);
	}

	.flex-row {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
	}

	.flex-column {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
