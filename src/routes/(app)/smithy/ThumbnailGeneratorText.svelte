<script lang="ts">
	import MagicWand from 'carbon-icons-svelte/lib/MagicWand.svelte';
	import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import ColorPicker from 'svelte-awesome-color-picker';
	import { getHexStringFromCatppuccinColor } from '$lib/client/themes/catppuccin';
	import { theme } from '$lib/client/stores/theme';
	import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
	import { createEventDispatcher } from 'svelte';

	export let name = 'Name';
	export let top = 0;
	export let left = 0;
	export let zindex = 1;
	export let opacity = 1;
	export let fontSize = 48;
	export let fontFamily = 'Arial';
	export let fontWeight = 'bold';
	export let fontStyle = 'italic';
	export let textDecoration = 'underline';
	export let textDecorationColor = '#ff0000';
	export let textShadowWidth: number;
	export let textShadowColor: string;
	export let textColor: '#000';
	export let textRotation = 0;
	export let index = 0;

	const dispatch = createEventDispatcher();

	function deleteElement() {
		// Emit an event to the parent component with the index
		dispatch('delete', { index });
	}

	function duplicate() {
		// Emit an event to the parent component with the index
		dispatch('duplicate', { index });
	}
</script>

<div class="container flex-column">
	<div class="flex-row">
		<CodeSnippet code={name} type="inline" hideCopyButton light />
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
			max={720}
			bind:value={top}
			invalidText={'Value must be between 0 and 720'}
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
		<NumberInput
			size="sm"
			step={1}
			min={1}
			max={128}
			bind:value={fontSize}
			invalidText={'Value must be between 1 and 128'}
			label={'Text Size (px)'}
		/>

		<Dropdown
			titleText="Font Family"
			type="inline"
			bind:selectedId={fontFamily}
			items={[
				{ id: 'Arial', text: 'Arial' },
				{ id: 'Times New Roman', text: 'Times New Roman' },
				{ id: 'Courier New', text: 'Courier New' },
				{ id: 'Verdana', text: 'Verdana' },
				{ id: 'Georgia', text: 'Georgia' },
				{ id: 'Tahoma', text: 'Tahoma' },
				{ id: 'Trebuchet MS', text: 'Trebuchet MS' },
				{ id: 'Palatino', text: 'Palatino' },
				{ id: 'Garamond', text: 'Garamond' },
				{ id: 'Bookman', text: 'Bookman' },
				{ id: 'Comic Sans MS', text: 'Comic Sans MS' },
				{ id: 'Courier', text: 'Courier' },
				{ id: 'Lucida Console', text: 'Lucida Console' },
			]}
		/>

		<Dropdown
			titleText="Font Style"
			type="inline"
			bind:selectedId={fontStyle}
			items={[
				{ id: 'normal', text: 'Normal' },
				{ id: 'italic', text: 'Italic' },
			]}
		/>

		<Dropdown
			titleText="Font Weight"
			type="inline"
			bind:selectedId={fontWeight}
			items={[
				{ id: '100', text: '100' },
				{ id: '200', text: '200' },
				{ id: '300', text: '300' },
				{ id: '400', text: '400' },
				{ id: '500', text: '500' },
				{ id: '600', text: '600' },
				{ id: '700', text: '700' },
				{ id: '800', text: '800' },
				{ id: '900', text: '900' },
				{ id: 'normal', text: 'Normal' },
				{ id: 'bold', text: 'Bold' },
			]}
		/>

		<Dropdown
			titleText="Text Decoration"
			type="inline"
			bind:selectedId={textDecoration}
			items={[
				{ id: 'none', text: 'None' },
				{ id: 'underline', text: 'Underline' },
				{ id: 'line-through', text: 'Strikethrough' },
				{ id: 'overline', text: 'Overline' },
			]}
		/>

		<ColorPicker
			bind:hex={textDecorationColor}
			label="Text Decoration Color"
			--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
			--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
			--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
			--cp-button-hover-color={getHexStringFromCatppuccinColor('blue', $theme)}
		/>

		<ColorPicker
			bind:hex={textShadowColor}
			label="Text Shadow Color"
			--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
			--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
			--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
			--cp-button-hover-color={getHexStringFromCatppuccinColor('blue', $theme)}
		/>
		<NumberInput
			size="sm"
			step={1}
			min={0}
			max={128}
			bind:value={textShadowWidth}
			invalidText={'Value must be between 0 and 128'}
			label={'Text Shadow Width (px)'}
		/>

		<ColorPicker
			bind:hex={textColor}
			label="Text Color"
			--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
			--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
			--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
			--cp-button-hover-color={getHexStringFromCatppuccinColor('blue', $theme)}
		/>
		<NumberInput
			size="sm"
			step={1}
			min={-360}
			max={360}
			bind:value={textRotation}
			invalidText={'Value must be between -360 and 360'}
			label={'Text Rotation (degrees)'}
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
