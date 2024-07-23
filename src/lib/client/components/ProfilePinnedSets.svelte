<script lang="ts">
	import Pin from 'carbon-icons-svelte/lib/Pin.svelte';
	import HelmetIconWhite from './frontier/icon/armor/Helmet_Icon_White.svelte';
	import ChestIconWhite from './frontier/icon/armor/Chest_Icon_White.svelte';
	import ArmIconWhite from './frontier/icon/armor/Arm_Icon_White.svelte';
	import WaistIconWhite from './frontier/icon/armor/Waist_Icon_White.svelte';
	import LegIconWhite from './frontier/icon/armor/Leg_Icon_White.svelte';
	import MyTore from '$lib/client/images/icon/my_tore.webp';
	import type { ProfilePinnedSet } from '$lib/client/modules/frontier/types';
	import { getHexStringFromCatppuccinColor } from '../themes/catppuccin';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getWeaponIcon } from '../modules/frontier/weapons';
	import { LocationIcons } from '../modules/frontier/locations';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	import { getTag } from '$lib/client/modules/frontier/tags';
	import { scale } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import PreviousOutline from 'carbon-icons-svelte/lib/PreviousOutline.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ArmorStandIcon from '$lib/client/components/frontier/icon/armor/MHRise_Item_Icon-Armor_Stand_Equipment_White.svelte';
	import MonsterComponent from './frontier/icon/dynamic-import/MonsterComponent.svelte';
	import Tooltip from 'carbon-components-svelte/src/Tooltip/Tooltip.svelte';

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
			setIcon: MonsterComponent,
			setIconProps: {
				currentMonster: 'Bogabadorumu',
				background: false,
			},
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
			setIcon: MonsterComponent,
			setIconProps: {
				currentMonster: 'Howling Zinogre',
				background: false,
			},
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
			setIcon: MonsterComponent,
			setIconProps: {
				currentMonster: 'Conquest Crimson Fatalis',
				background: false,
			},
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
			setIcon: MonsterComponent,
			setIconProps: {
				currentMonster: 'Blinking Nargacuga',
				background: false,
			},
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
			setIcon: MonsterComponent,
			setIconProps: {
				currentMonster: 'Supremacy Pariapuria',
				background: false,
			},
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
								<Tooltip hideIcon>
									<span slot="triggerText">
										<img
											class="set-header-image"
											src={armorSet.setIcon}
											alt="Armot Set Piece"
										/></span
									>
									<p>{armorSet.setName}</p></Tooltip
								>
							{:else}
								<div class="set-header-image">
									<Tooltip hideIcon>
										<span slot="triggerText">
											<svelte:component
												this={armorSet.setIcon}
												{...{
													size: '64px',
													currentMonster: armorSet.setIconProps?.currentMonster,
													background: armorSet.setIconProps?.background,
												}}
											/></span
										>
										<p>{armorSet.setName}</p></Tooltip
									>
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
					>
						<svelte:component
							this={ArmorStandIcon}
							{...{
								color: getHexStringFromCatppuccinColor(
									armorSet.setColor,
									theme,
								),
							}}
						/>
					</button>
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
									{...{
										size: '64px',
										currentMonster:
											selectedArmorSet?.setIconProps?.currentMonster,
										background: selectedArmorSet?.setIconProps?.background,
									}}
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
					) + '80'}><img src={MyTore} alt="Poogie Cuff" /></button
				>
			</div>
			<div
				in:scale={{
					duration: 150,
					easing: cubicInOut,
				}}
				class="selected-armor-set-info"
			>
				<Button
					iconDescription={'Back'}
					kind="ghost"
					on:click={(e) => onPieceClick(selectedArmorSet)}
					><span slot="icon"><PreviousOutline size={24} /></span>
				</Button>
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
		grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.armor-set {
		display: flex;
		flex-direction: column;
		align-items: center;
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
		width: var(--cds-spacing-10);
		height: var(--cds-spacing-10);
		border: 2px outset var(--ctp-overlay0);

		img {
			width: 100%;
		}
	}

	.set-slot:hover {
		filter: brightness(110%);
	}

	.set-slot:active {
		border: 2px inset var(--ctp-overlay0);
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
