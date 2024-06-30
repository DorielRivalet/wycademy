<script lang="ts">
	import Pin from 'carbon-icons-svelte/lib/Pin.svelte';
	import HelmetIconWhite from './frontier/icon/armor/Helmet_Icon_White.svelte';
	import ChestIconWhite from './frontier/icon/armor/Chest_Icon_White.svelte';
	import ArmIconWhite from './frontier/icon/armor/Arm_Icon_White.svelte';
	import WaistIconWhite from './frontier/icon/armor/Waist_Icon_White.svelte';
	import LegIconWhite from './frontier/icon/armor/Leg_Icon_White.svelte';
	import MyTore from '$lib/client/images/icon/my_tore.webp';
	import JewelIconWhite from './frontier/icon/item/Jewel_Icon_White.svelte';
	import type { ProfilePinnedSet } from '$lib/client/modules/frontier/types';
	import { getHexStringFromCatppuccinColor } from '../themes/catppuccin';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getMonsterIcon, getWeaponIcon } from '../modules/frontier/functions';
	import { LocationIcons } from '../modules/frontier/objects';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	import { getTag } from '$lib/client/modules/frontier/functions';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import { scale } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	let selectedSetName = '';

	function onPieceClick(armorSet: ProfilePinnedSet) {
		if (selectedSetName === armorSet.setName) {
			selectedSetName = '';
		} else {
			selectedSetName = armorSet.setName;
		}
	}

	export let theme: CarbonTheme;
	export let armorSets: ProfilePinnedSet[] = [
		{
			setIcon: LocationIcons.find((e) => e.name === 'Road')?.icon,
			setTags: ['Road', 'Multiplayer', 'Premium'],
			setName: 'Armor Set 1',
			setColor: 'red',

			weaponType: 'Great Sword',
			weaponName: 'Weapon',
			head: 'Helmet',
			chest: 'Chest',
			arms: 'Arms',
			waist: 'Waist',
			legs: 'Legs',
			cuff1: 'Cuff1',
			cuff2: 'Cuff2',
			style: 'Extreme Style',
			weaponSlot1: 'Slot 1',
			weaponSlot2: 'Slot 2',
			weaponSlot3: 'Slot 3',
			headSlot1: 'Slot 1',
			headSlot2: 'Slot 2',
			headSlot3: 'Slot 3',
			chestSlot1: 'Slot 1',
			chestSlot2: 'Slot 2',
			chestSlot3: 'Slot 3',
			armsSlot1: 'Slot 1',
			armsSlot2: 'Slot 2',
			armsSlot3: 'Slot 3',
			waistSlot1: 'Slot 1',
			waistSlot2: 'Slot 2',
			waistSlot3: 'Slot 3',
			legsSlot1: 'Slot 1',
			legsSlot2: 'Slot 2',
			legsSlot3: 'Slot 3',
		},
		{
			setIcon: getMonsterIcon('Bogabadorumu'),
			setTags: ['Zenith', 'Multiplayer', 'Premium'],
			setName: 'Armor Set 2',
			setColor: 'green',

			weaponType: 'Long Sword',
			weaponName: 'Weapon',
			head: 'Helmet',
			chest: 'Chest',
			arms: 'Arms',
			waist: 'Waist',
			legs: 'Legs',
			cuff1: 'Cuff1',
			cuff2: 'Cuff2',
			style: 'Extreme Style',
			weaponSlot1: 'Slot 1',
			weaponSlot2: 'Slot 2',
			weaponSlot3: 'Slot 3',
			headSlot1: 'Slot 1',
			headSlot2: 'Slot 2',
			headSlot3: 'Slot 3',
			chestSlot1: 'Slot 1',
			chestSlot2: 'Slot 2',
			chestSlot3: 'Slot 3',
			armsSlot1: 'Slot 1',
			armsSlot2: 'Slot 2',
			armsSlot3: 'Slot 3',
			waistSlot1: 'Slot 1',
			waistSlot2: 'Slot 2',
			waistSlot3: 'Slot 3',
			legsSlot1: 'Slot 1',
			legsSlot2: 'Slot 2',
			legsSlot3: 'Slot 3',
		},
		{
			setIcon: getMonsterIcon('Howling Zinogre'),
			setTags: ['Musou', 'Multiplayer', 'Premium'],
			setName: 'Armor Set 3',
			setColor: 'blue',

			weaponType: 'Magnet Spike',
			weaponName: 'Weapon',
			head: 'Helmet',
			chest: 'Chest',
			arms: 'Arms',
			waist: 'Waist',
			legs: 'Legs',
			cuff1: 'Cuff1',
			cuff2: 'Cuff2',
			style: 'Extreme Style',
			weaponSlot1: 'Slot 1',
			weaponSlot2: 'Slot 2',
			weaponSlot3: 'Slot 3',
			headSlot1: 'Slot 1',
			headSlot2: 'Slot 2',
			headSlot3: 'Slot 3',
			chestSlot1: 'Slot 1',
			chestSlot2: 'Slot 2',
			chestSlot3: 'Slot 3',
			armsSlot1: 'Slot 1',
			armsSlot2: 'Slot 2',
			armsSlot3: 'Slot 3',
			waistSlot1: 'Slot 1',
			waistSlot2: 'Slot 2',
			waistSlot3: 'Slot 3',
			legsSlot1: 'Slot 1',
			legsSlot2: 'Slot 2',
			legsSlot3: 'Slot 3',
		},
		{
			setIcon: getMonsterIcon('Conquest Crimson Fatalis'),
			setTags: ['Conquest', 'Multiplayer', 'Premium'],
			setName: 'Armor Set 4',
			setColor: 'yellow',

			weaponType: 'Bow',
			weaponName: 'Weapon',
			head: 'Helmet',
			chest: 'Chest',
			arms: 'Arms',
			waist: 'Waist',
			legs: 'Legs',
			cuff1: 'Cuff1',
			cuff2: 'Cuff2',
			style: 'Extreme Style',
			weaponSlot1: 'Slot 1',
			weaponSlot2: 'Slot 2',
			weaponSlot3: 'Slot 3',
			headSlot1: 'Slot 1',
			headSlot2: 'Slot 2',
			headSlot3: 'Slot 3',
			chestSlot1: 'Slot 1',
			chestSlot2: 'Slot 2',
			chestSlot3: 'Slot 3',
			armsSlot1: 'Slot 1',
			armsSlot2: 'Slot 2',
			armsSlot3: 'Slot 3',
			waistSlot1: 'Slot 1',
			waistSlot2: 'Slot 2',
			waistSlot3: 'Slot 3',
			legsSlot1: 'Slot 1',
			legsSlot2: 'Slot 2',
			legsSlot3: 'Slot 3',
		},
		{
			setIcon: getMonsterIcon('Blinking Nargacuga'),
			setTags: ['Musou', 'Solo', 'Premium'],
			setName: 'Armor Set 5',
			setColor: 'mauve',

			weaponType: 'Tonfa',
			weaponName: 'Weapon',
			head: 'Helmet',
			chest: 'Chest',
			arms: 'Arms',
			waist: 'Waist',
			legs: 'Legs',
			cuff1: 'Cuff1',
			cuff2: 'Cuff2',
			style: 'Extreme Style',
			weaponSlot1: 'Slot 1',
			weaponSlot2: 'Slot 2',
			weaponSlot3: 'Slot 3',
			headSlot1: 'Slot 1',
			headSlot2: 'Slot 2',
			headSlot3: 'Slot 3',
			chestSlot1: 'Slot 1',
			chestSlot2: 'Slot 2',
			chestSlot3: 'Slot 3',
			armsSlot1: 'Slot 1',
			armsSlot2: 'Slot 2',
			armsSlot3: 'Slot 3',
			waistSlot1: 'Slot 1',
			waistSlot2: 'Slot 2',
			waistSlot3: 'Slot 3',
			legsSlot1: 'Slot 1',
			legsSlot2: 'Slot 2',
			legsSlot3: 'Slot 3',
		},
		{
			setIcon: getMonsterIcon('Supremacy Pariapuria'),
			setTags: ['Supremacy', 'Solo', 'Premium'],
			setName: 'Armor Set 6',
			setColor: 'sky',

			weaponType: 'Dual Swords',
			weaponName: 'Weapon',
			head: 'Helmet',
			chest: 'Chest',
			arms: 'Arms',
			waist: 'Waist',
			legs: 'Legs',
			cuff1: 'Cuff1',
			cuff2: 'Cuff2',
			style: 'Extreme Style',
			weaponSlot1: 'Slot 1',
			weaponSlot2: 'Slot 2',
			weaponSlot3: 'Slot 3',
			headSlot1: 'Slot 1',
			headSlot2: 'Slot 2',
			headSlot3: 'Slot 3',
			chestSlot1: 'Slot 1',
			chestSlot2: 'Slot 2',
			chestSlot3: 'Slot 3',
			armsSlot1: 'Slot 1',
			armsSlot2: 'Slot 2',
			armsSlot3: 'Slot 3',
			waistSlot1: 'Slot 1',
			waistSlot2: 'Slot 2',
			waistSlot3: 'Slot 3',
			legsSlot1: 'Slot 1',
			legsSlot2: 'Slot 2',
			legsSlot3: 'Slot 3',
		},
	];

	$: selectedArmorSet = armorSets.find((e) => e.setName === selectedSetName);
</script>

<div class="container">
	<div class="heading-container">
		<div>
			<Pin size="32" />
		</div>
	</div>
	{#if selectedSetName === ''}
		<div class="armor-sets">
			{#each armorSets as armorSet}
				<div class="armor-set">
					<div class="set-header">
						<div class="set-header-image-container">
							{#if typeof armorSet.setIcon === 'string'}
								<img
									class="set-header-image"
									src={armorSet.setIcon}
									alt="Armot Set Piece"
								/>
							{:else}
								<div class="set-header-image">
									<svelte:component
										this={armorSet.setIcon}
										{...{ size: '64px' }}
									/>
								</div>
							{/if}
						</div>
						<div>
							<Tag
								icon={getTag(armorSet.setTags[0]).icon}
								type="red"
								interactive
								size="sm">{armorSet.setTags[0]}</Tag
							>
						</div>
					</div>
					<button
						class="set-slot"
						on:click={(e) => onPieceClick(armorSet)}
						style:background-color={getHexStringFromCatppuccinColor(
							armorSet.setColor,
							theme,
						) + '80'}
					>
						<svelte:component
							this={getWeaponIcon(armorSet.weaponType)}
							{...{
								color: getHexStringFromCatppuccinColor(
									armorSet.setColor,
									theme,
								),
							}}
						/>
					</button>
					<button
						class="set-slot"
						on:click={(e) => onPieceClick(armorSet)}
						style:background-color={getHexStringFromCatppuccinColor(
							armorSet.setColor,
							theme,
						) + '80'}
						><HelmetIconWhite
							color={getHexStringFromCatppuccinColor(armorSet.setColor, theme)}
						/></button
					>
					<button
						on:click={(e) => onPieceClick(armorSet)}
						class="set-slot"
						style:background-color={getHexStringFromCatppuccinColor(
							armorSet.setColor,
							theme,
						) + '80'}
						><ChestIconWhite
							color={getHexStringFromCatppuccinColor(armorSet.setColor, theme)}
						/></button
					>
					<button
						on:click={(e) => onPieceClick(armorSet)}
						class="set-slot"
						style:background-color={getHexStringFromCatppuccinColor(
							armorSet.setColor,
							theme,
						) + '80'}
						><ArmIconWhite
							color={getHexStringFromCatppuccinColor(armorSet.setColor, theme)}
						/></button
					>
					<button
						class="set-slot"
						on:click={(e) => onPieceClick(armorSet)}
						style:background-color={getHexStringFromCatppuccinColor(
							armorSet.setColor,
							theme,
						) + '80'}
						><WaistIconWhite
							color={getHexStringFromCatppuccinColor(armorSet.setColor, theme)}
						/></button
					>
					<button
						class="set-slot"
						on:click={(e) => onPieceClick(armorSet)}
						style:background-color={getHexStringFromCatppuccinColor(
							armorSet.setColor,
							theme,
						) + '80'}
						><LegIconWhite
							color={getHexStringFromCatppuccinColor(armorSet.setColor, theme)}
						/></button
					>
					<button
						class="set-slot"
						on:click={(e) => onPieceClick(armorSet)}
						style:background-color={getHexStringFromCatppuccinColor(
							armorSet.setColor,
							theme,
						) + '80'}><img src={MyTore} width="64" alt="Poogie Cuff" /></button
					>
				</div>
			{/each}
		</div>
	{:else if selectedArmorSet}
		<div class="selected-armor-set">
			<div class="armor-set">
				<div class="set-header">
					<div class="set-header-image-container">
						{#if typeof selectedArmorSet?.setIcon === 'string'}
							<img
								class="set-header-image"
								src={selectedArmorSet.setIcon}
								alt="Armot Set Piece"
							/>
						{:else}
							<div class="set-header-image">
								<svelte:component
									this={selectedArmorSet?.setIcon}
									{...{ size: '64px' }}
								/>
							</div>
						{/if}
					</div>
				</div>
				<button
					class="set-slot"
					on:click={(e) => onPieceClick(selectedArmorSet)}
					style:background-color={getHexStringFromCatppuccinColor(
						selectedArmorSet?.setColor,
						theme,
					) + '80'}
				>
					<svelte:component
						this={getWeaponIcon(selectedArmorSet?.weaponType)}
						{...{
							color: getHexStringFromCatppuccinColor(
								selectedArmorSet?.setColor,
								theme,
							),
						}}
					/>
				</button>
				<button
					class="set-slot"
					on:click={(e) => onPieceClick(selectedArmorSet)}
					style:background-color={getHexStringFromCatppuccinColor(
						selectedArmorSet?.setColor,
						theme,
					) + '80'}
					><HelmetIconWhite
						color={getHexStringFromCatppuccinColor(
							selectedArmorSet?.setColor,
							theme,
						)}
					/></button
				>
				<button
					class="set-slot"
					on:click={(e) => onPieceClick(selectedArmorSet)}
					style:background-color={getHexStringFromCatppuccinColor(
						selectedArmorSet?.setColor,
						theme,
					) + '80'}
					><ChestIconWhite
						color={getHexStringFromCatppuccinColor(
							selectedArmorSet?.setColor,
							theme,
						)}
					/></button
				>
				<button
					class="set-slot"
					on:click={(e) => onPieceClick(selectedArmorSet)}
					style:background-color={getHexStringFromCatppuccinColor(
						selectedArmorSet?.setColor,
						theme,
					) + '80'}
					><ArmIconWhite
						color={getHexStringFromCatppuccinColor(
							selectedArmorSet?.setColor,
							theme,
						)}
					/></button
				>
				<button
					class="set-slot"
					on:click={(e) => onPieceClick(selectedArmorSet)}
					style:background-color={getHexStringFromCatppuccinColor(
						selectedArmorSet?.setColor,
						theme,
					) + '80'}
					><WaistIconWhite
						color={getHexStringFromCatppuccinColor(
							selectedArmorSet?.setColor,
							theme,
						)}
					/></button
				>
				<button
					class="set-slot"
					on:click={(e) => onPieceClick(selectedArmorSet)}
					style:background-color={getHexStringFromCatppuccinColor(
						selectedArmorSet?.setColor,
						theme,
					) + '80'}
					><LegIconWhite
						color={getHexStringFromCatppuccinColor(
							selectedArmorSet?.setColor,
							theme,
						)}
					/></button
				>
				<button
					class="set-slot"
					on:click={(e) => onPieceClick(selectedArmorSet)}
					style:background-color={getHexStringFromCatppuccinColor(
						selectedArmorSet?.setColor,
						theme,
					) + '80'}><img src={MyTore} width="64" alt="Poogie Cuff" /></button
				>
			</div>
			<div
				in:scale={{
					duration: 150,
					easing: cubicInOut,
				}}
				class="selected-armor-set-info"
			>
				<h3>{selectedArmorSet.setName}</h3>
				<div class="tags">
					{#each selectedArmorSet.setTags as tag}
						<div>
							<Tag icon={getTag(tag).icon} type="red" interactive size="sm"
								>{tag}</Tag
							>
						</div>
					{/each}
				</div>
				<p>
					<strong
						>{selectedArmorSet.weaponName} | {selectedArmorSet.style}</strong
					>
				</p>
				<p>
					{selectedArmorSet.weaponSlot1} | {selectedArmorSet.weaponSlot2} | {selectedArmorSet.weaponSlot3}
				</p>
				<p><strong>{selectedArmorSet.head}</strong></p>
				<p>
					{selectedArmorSet.headSlot1} | {selectedArmorSet.headSlot2} | {selectedArmorSet.headSlot3}
				</p>
				<p><strong>{selectedArmorSet.chest}</strong></p>
				<p>
					{selectedArmorSet.chestSlot1} | {selectedArmorSet.chestSlot2} | {selectedArmorSet.chestSlot3}
				</p>
				<p><strong>{selectedArmorSet.arms}</strong></p>
				<p>
					{selectedArmorSet.armsSlot1} | {selectedArmorSet.armsSlot2} | {selectedArmorSet.armsSlot3}
				</p>
				<p><strong>{selectedArmorSet.waist}</strong></p>
				<p>
					{selectedArmorSet.waistSlot1} | {selectedArmorSet.waistSlot2} | {selectedArmorSet.waistSlot3}
				</p>
				<p><strong>{selectedArmorSet.legs}</strong></p>
				<p>
					{selectedArmorSet.legsSlot1} | {selectedArmorSet.legsSlot2} | {selectedArmorSet.legsSlot3}
				</p>
				<p>
					<strong>{selectedArmorSet.cuff1} | {selectedArmorSet.cuff2}</strong>
				</p>
				<!---TODO: Armor skills etc-->
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: var(--ctp-mantle);
		border-radius: 8px;
		padding: 1rem;
	}

	.heading-container {
		text-align: end;
	}

	.armor-sets {
		display: flex;
		gap: 2rem;
		grid-template-columns: repeat(autofit, minmax(128px, 1fr));
		justify-content: start;
		flex-wrap: wrap;
	}

	.armor-set {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.set-header {
		text-align: center;
		text-wrap: wrap;
	}

	.set-header-image {
		width: 64px;
	}

	.set-header-image-container {
		display: flex;
		justify-content: center;
	}

	.set-slot {
		border-radius: 8px;
		padding: 0.5rem;
		width: var(--cds-spacing-12);
		height: var(--cds-spacing-12);
		border: 4px outset var(--ctp-overlay0);
	}

	.set-slot:hover {
		filter: brightness(110%);
	}

	.set-slot:active {
		border: 4px inset var(--ctp-overlay0);
	}

	.selected-armor-set {
		display: flex;
		gap: 2rem;
	}

	.selected-armor-set-info {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
</style>
