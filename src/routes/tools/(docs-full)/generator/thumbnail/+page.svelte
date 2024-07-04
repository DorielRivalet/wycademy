<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import LogoYoutube from 'carbon-icons-svelte/lib/LogoYoutube.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import FileUploader from 'carbon-components-svelte/src/FileUploader/FileUploader.svelte';
	import Save from 'carbon-icons-svelte/lib/Save.svelte';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import ColorPicker from 'svelte-awesome-color-picker';
	import Dropdown, {
		type DropdownItem,
	} from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import { theme } from '$lib/client/stores/theme';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import ComboBox from 'carbon-components-svelte/src/ComboBox/ComboBox.svelte';
	import FileUploaderDropContainer from 'carbon-components-svelte/src/FileUploader/FileUploaderDropContainer.svelte';
	import SkeletonPlaceholder from 'carbon-components-svelte/src/SkeletonPlaceholder/SkeletonPlaceholder.svelte';
	import ThumbnailGeneratorImage from './ThumbnailGeneratorImage.svelte';
	import ThumbnailGeneratorText from './ThumbnailGeneratorText.svelte';
	import type { FrontierEnumerable } from 'ezlion';
	import type { HTMLImgAttributes } from 'svelte/elements';
	import type {
		FrontierArmor,
		FrontierImageType,
		FrontierMonsterInfo,
		FrontierWeapon,
		IconSize,
	} from '$lib/client/modules/frontier/types';
	import { getHexStringFromCatppuccinColor } from '$lib/client/themes/catppuccin';
	import { domToPng } from 'modern-screenshot';
	import slugify from 'slugify';
	import { onMount } from 'svelte';
	import Moveable from 'svelte-moveable';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import Youtube from 'svelte-youtube-embed';
	import {
		WeaponTypes,
		monsterInfo,
		ArmorTypes,
		itemInfo,
		LocationIcons,
		ElementIcons,
		AilmentIcons,
		StatusIcons,
		Habitats,
		gameInfo,
		ColorCodes,
		ItemColors,
		RarityColors,
	} from '$lib/client/modules/frontier/objects';
	import { getUniqueMonsters } from '$lib/client/modules/frontier/functions';

	let thumbnailElementsOrderReversed = false;

	let modalOpen = false;
	let modalHeading = '';
	let modalLabel = '';
	let modalImage = '';
	let modalNotes = '';

	function changeModal(heading: string, section: string) {
		modalOpen = true;
		modalHeading = heading;
		modalLabel = section || '';

		switch (section) {
			case 'youtube':
				modalImage = '';
				modalNotes = '';
				break;
			default:
				modalImage = '';
				modalNotes = '';
				break;
		}
	}

	function handleDragStart(
		e: { dataTransfer: { setData: (arg0: string, arg1: string) => void } },
		id: any,
		offsetX: any,
		offsetY: any,
		index: number,
	) {
		e.dataTransfer.setData(
			'text/plain',
			JSON.stringify({ id, offsetX, offsetY, index }),
		);
	}

	function countStringOccurrences(nestedArray: string[][]) {
		const counts = {};

		function countStrings(arr: any[]) {
			arr.forEach((item: string | number) => {
				if (typeof item === 'string') {
					counts[item] = (counts[item] || 0) + 1;
				} else if (Array.isArray(item)) {
					countStrings(item);
				}
			});
		}

		countStrings(nestedArray);
		return counts;
	}

	function countStringValueOccurrencesInFrontierEnumerables(
		inputObj: Record<string, FrontierEnumerable>,
	): Record<string, Record<string, number>> {
		const result: Record<string, Record<string, number>> = {};

		function traverse(obj: FrontierEnumerable, currentKey: string = '') {
			Object.values(obj).forEach((value) => {
				if (typeof value === 'string') {
					if (!result[currentKey]) {
						result[currentKey] = {};
					}
					result[currentKey][value] = (result[currentKey][value] || 0) + 1;
				} else if (value instanceof Object) {
					traverse(value, currentKey);
				}
			});
		}

		Object.keys(inputObj).forEach((key) => {
			traverse(inputObj[key], key);
		});

		// Filter occurrences above 1
		const filteredResult: Record<string, Record<string, number>> = {};
		Object.entries(result).forEach(([key, values]) => {
			const filteredValues = Object.fromEntries(
				Object.entries(values).filter(([_, count]) => count > 1),
			);
			if (Object.keys(filteredValues).length > 0) {
				filteredResult[key] = filteredValues;
			}
		});

		return filteredResult;
	}

	let thumbnailGeneratorSmallPreview = '';
	let thumbnailGeneratorSmallPreviewStatus: 'unloaded' | 'loading' | 'loaded' =
		'unloaded';
	let thumbnailGeneratorSmallPreviewSize = '512';

	async function downloadGeneratedThumbnailImage() {
		let node = document.getElementById('generated-thumbnail-dom');

		if (!node) {
			return;
		}

		await domToPng(node, { quality: 1 }).then((dataUrl) => {
			const link = document.createElement('a');
			link.download = `${slugify('generated-thumbnail')}-${new Date().toISOString()}.png`;
			link.href = dataUrl;
			link.click();
		});
	}

	function getThumbnailGeneratorTemplateExampleTexts() {
		return [
			{
				elementType: 'Text',
				text: 'Rush of Madness',
				top: 594,
				left: 431,
				zindex: 2,
				opacity: 1,
				fontSize: 80,
				color: getHexStringFromCatppuccinColor('green', 'g100'),
				rotation: 0,
				shadowWidth: 0,
				shadowColor: '#000000',
				decoration: 'none',
				decorationColor: '#000000',
				fontFamily: 'MS Gothic',
				fontWeight: 'bold',
				fontStyle: 'normal',
			},
			{
				elementType: 'Text',
				text: 'Rush of Madness',
				top: 590,
				left: 427,
				zindex: 2,
				opacity: 1,
				fontSize: 80,
				color: getHexStringFromCatppuccinColor('rosewater', 'g100'),
				rotation: 0,
				shadowWidth: 0,
				shadowColor: '#000000',
				decoration: 'none',
				decorationColor: '#000000',
				fontFamily: 'MS Gothic',
				fontWeight: 'bold',
				fontStyle: 'normal',
			},
			{
				elementType: 'Text',
				text: '23\'29"56',
				top: 474,
				left: 514,
				zindex: 2,
				opacity: 1,
				fontSize: 96,
				color: getHexStringFromCatppuccinColor('blue', 'g100'),
				rotation: 0,
				shadowWidth: 0,
				shadowColor: '#000000',
				decoration: 'none',
				decorationColor: '#000000',
				fontFamily: 'MS Gothic',
				fontWeight: 'bold',
				fontStyle: 'normal',
			},
			{
				elementType: 'Text',
				text: '23\'29"56',
				top: 470,
				left: 510,
				zindex: 2,
				opacity: 1,
				fontSize: 96,
				color: getHexStringFromCatppuccinColor('rosewater', 'g100'),
				rotation: 0,
				shadowWidth: 0,
				shadowColor: '#000000',
				decoration: 'none',
				decorationColor: '#000000',
				fontFamily: 'MS Gothic',
				fontWeight: 'bold',
				fontStyle: 'normal',
			},
		];
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
					component: monsterInfo.find((e) => e.displayName === selectionID)
						?.component,
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

	function getThumbnailGeneratorTemplateExampleImages() {
		return [
			{
				optionId: 'Historical Site',
				elementType: 'Image',
				fileFormat: 'Raster',
				fileType: 'Habitat',
				src: getIconBlobFromIconMetaData(
					'Habitat',
					'Historical Site',
					'256px',
					'Raster',
					'#ffffff',
				),
				alt: 'Thumbnail Image',
				top: 0,
				left: 0,
				width: 1280,
				height: 721,
				zindex: 0,
				opacity: 1,
				dropShadowSize: 0,
				dropShadowColor: '#000000',
				borderWidth: 0,
				borderColor: '#000000',
				borderRadius: 0,
				background: false,
				color: '#ffffff',
				monsterRenderSize: 'Full',
			},
			{
				optionId: 'Magnet Spike',
				elementType: 'Image',
				fileFormat: 'Vector',
				fileType: 'Weapon',
				src: getIconBlobFromIconMetaData(
					'Weapon',
					'Magnet Spike',
					'256px',
					'Vector',
					'#ffffff',
				),
				alt: 'Thumbnail Image',
				top: 420,
				left: 64,
				width: 256,
				height: 256,
				zindex: 0,
				opacity: 1,
				dropShadowSize: 8,
				dropShadowColor: '#ff0000',
				borderWidth: 0,
				borderColor: '#000000',
				borderRadius: 0,
				background: false,
				color: '#ffffff',
				monsterRenderSize: 'Full',
			},
			{
				optionId: 'Blinking Nargacuga',
				elementType: 'Image',
				fileFormat: 'Vector',
				fileType: 'Monster Icon',
				src: getIconBlobFromIconMetaData(
					'Monster Icon',
					'Blinking Nargacuga',
					'256px',
					'Vector',
					'#ffffff',
				),
				alt: 'Thumbnail Image',
				top: 50,
				left: 400,
				width: 192,
				height: 192,
				zindex: 0,
				opacity: 1,
				dropShadowSize: 8,
				dropShadowColor: '#ffffff',
				borderWidth: 0,
				borderColor: '#ffffff',
				borderRadius: 0,
				background: false,
				color: '#ffffff',
				monsterRenderSize: 'Full',
			},
			{
				optionId: 'Burning Freezing Elzelion',
				elementType: 'Image',
				fileFormat: 'Vector',
				fileType: 'Monster Icon',
				src: getIconBlobFromIconMetaData(
					'Monster Icon',
					'Burning Freezing Elzelion',
					'256px',
					'Vector',
					'#ffffff',
				),
				alt: 'Thumbnail Image',
				top: 242,
				left: 496,
				width: 192,
				height: 192,
				zindex: 0,
				opacity: 1,
				dropShadowSize: 8,
				dropShadowColor: '#ff00ff',
				borderWidth: 0,
				borderColor: '#0000ff',
				borderRadius: 0,
				background: false,
				color: '#ffffff',
				monsterRenderSize: 'Full',
			},
			{
				optionId: 'Howling Zinogre',
				elementType: 'Image',
				fileFormat: 'Vector',
				fileType: 'Monster Icon',
				src: getIconBlobFromIconMetaData(
					'Monster Icon',
					'Howling Zinogre',
					'256px',
					'Vector',
					'#ffffff',
				),
				alt: 'Thumbnail Image',
				top: 50,
				left: 592,
				width: 192,
				height: 192,
				zindex: 0,
				opacity: 1,
				dropShadowSize: 8,
				dropShadowColor: '#00ffff',
				borderWidth: 0,
				borderColor: '#000000',
				borderRadius: 0,
				background: false,
				color: '#ffffff',
				monsterRenderSize: 'Full',
			},
			{
				optionId: 'Sparkling Zerureusu',
				elementType: 'Image',
				fileFormat: 'Vector',
				fileType: 'Monster Icon',
				src: getIconBlobFromIconMetaData(
					'Monster Icon',
					'Sparkling Zerureusu',
					'256px',
					'Vector',
					'#ffffff',
				),
				alt: 'Thumbnail Image',
				top: 242,
				left: 688,
				width: 192,
				height: 192,
				zindex: 0,
				opacity: 1,
				dropShadowSize: 8,
				dropShadowColor: '#ff0000',
				borderWidth: 0,
				borderColor: '#000000',
				borderRadius: 0,
				background: false,
				color: '#ffffff',
				monsterRenderSize: 'Full',
			},
			{
				optionId: 'Bombardier Bogabadorumu',
				elementType: 'Image',
				fileFormat: 'Vector',
				fileType: 'Monster Icon',
				src: getIconBlobFromIconMetaData(
					'Monster Icon',
					'Bombardier Bogabadorumu',
					'256px',
					'Vector',
					'#ffffff',
				),
				alt: 'Thumbnail Image',
				top: 50,
				left: 784,
				width: 192,
				height: 192,
				zindex: 0,
				opacity: 1,
				dropShadowSize: 8,
				dropShadowColor: '#0000ff',
				borderWidth: 0,
				borderColor: '#000000',
				borderRadius: 0,
				background: false,
				color: '#ffffff',
				monsterRenderSize: 'Full',
			},
		];
	}

	async function loadThumbnailTemplate() {
		if (thumbnailGeneratorTemplateFiles.length > 0) {
			loadingTemplateStatus = 'uploading';
			const file = thumbnailGeneratorTemplateFiles[0]; // Assuming one file is uploaded at a time
			const reader = new FileReader();
			reader.onload = function (event) {
				try {
					const jsonData = JSON.parse(event.target.result);
					thumbnailImages = [...[]];
					thumbnailTexts = [...[]];
					setTimeout(() => {
						thumbnailImages = [...jsonData.thumbnailImages];
						thumbnailTexts = [...jsonData.thumbnailTexts];
						loadingTemplateStatus = 'complete';
					}, 1000);
				} catch (error) {
					console.error('Error parsing JSON:', error);
					loadingTemplateStatus = 'uploading';
				}
			};
			reader.onerror = function (error) {
				console.error('Error reading file:', error);
				loadingTemplateStatus = 'uploading';
			};
			reader.readAsText(file); // Read the file as text
			loadingTemplateStatus = 'uploading';
		} else {
			loadingTemplateStatus = 'uploading';
		}
	}

	function saveThumbnailTemplate() {
		let input = JSON.stringify({
			thumbnailImages: thumbnailImages,
			thumbnailTexts: thumbnailTexts,
		});

		// Create a Blob object from the string content
		const blob = new Blob([input], { type: 'application/json;charset=utf-8' });

		// Generate a URL for the Blob
		const url = URL.createObjectURL(blob);

		// Create an anchor element
		const link = document.createElement('a');

		// Set the href and download attributes of the anchor element
		link.href = url;
		link.download = `wycademy-tools-thumbnail-template-${new Date().toISOString()}.json`; // You can customize the filename here

		// Append the anchor element to the document body
		document.body.appendChild(link);

		// Trigger the download by simulating a click on the anchor element
		link.click();

		// Remove the anchor element from the document
		document.body.removeChild(link);

		// Revoke the URL to free up memory
		URL.revokeObjectURL(url);
	}

	function addThumbnailImage() {
		if (thumbnailImages.length > 16) {
			return;
		}
		thumbnailImages = [
			...thumbnailImages,
			{
				optionId: thumbnailGeneratorImageIdFromList,
				elementType: thumbnailGeneratorSectionOption,
				fileFormat: thumbnailGeneratorImageFormat,
				fileType: thumbnailGeneratorImageType,
				src: getIconBlobFromIconMetaData(
					thumbnailGeneratorImageType,
					thumbnailGeneratorImageIdFromList,
					'256px',
					thumbnailGeneratorImageFormat,
					thumbnailGeneratorImageColor,
				),
				alt: 'Thumbnail Image',
				top: 0,
				left: 0,
				width: thumbnailGeneratorImageType === 'Habitat' ? 1280 : 256,
				height: thumbnailGeneratorImageType === 'Habitat' ? 721 : 256,
				zindex: 1,
				opacity: 1,
				dropShadowSize: thumbnailGeneratorImageShadowWidth,
				dropShadowColor: thumbnailGeneratorImageShadowColor,
				borderWidth: thumbnailGeneratorImageBorderWidth,
				borderColor: thumbnailGeneratorImageBorderColor,
				borderRadius: thumbnailGeneratorImageBorderRadius,
				background: thumbnailGeneratorImageBackground,
				color: thumbnailGeneratorImageColor,
				monsterRenderSize: thumbnailGeneratorMonsterRenderSize,
				name: `${thumbnailGeneratorImageType} ${thumbnailGeneratorImageIdFromList}`,
			},
		];
	}

	function addUploadedImage(files: ReadonlyArray<File>) {
		if (
			files.length === 0 ||
			thumbnailUploadedImages.length > 16 ||
			files[files.length - 1].size >= 8 * Math.pow(10, 6)
		) {
			return;
		}
		thumbnailUploadedImages = [
			...thumbnailUploadedImages,
			{
				elementType: thumbnailGeneratorSectionOption,
				fileType: files[files.length - 1].type.toLowerCase(),
				src: URL.createObjectURL(files[files.length - 1]),
				alt: 'Thumbnail Image',
				top: 0,
				left: 0,
				width: 256,
				height: 256,
				zindex: 1,
				opacity: 1,
				dropShadowSize: thumbnailGeneratorUploadedImageShadowWidth,
				dropShadowColor: thumbnailGeneratorUploadedImageShadowColor,
				borderWidth: thumbnailGeneratorUploadedImageBorderWidth,
				borderColor: thumbnailGeneratorUploadedImageBorderColor,
				borderRadius: thumbnailGeneratorUploadedImageBorderRadius,
				name: files[files.length - 1].name,
			},
		];
	}

	function addThumbnailText() {
		if (thumbnailTexts.length > 16) {
			return;
		}
		thumbnailTexts = [
			...thumbnailTexts,
			{
				elementType: thumbnailGeneratorSectionOption,
				text: thumbnailGeneratorText,
				top: 100,
				left: 100,
				zindex: 1,
				opacity: 1,
				fontSize: thumbnailGeneratorTextFontSize,
				color: thumbnailGeneratorTextColor,
				rotation: thumbnailGeneratorTextRotation,
				shadowWidth: thumbnailGeneratorTextShadowWidth,
				shadowColor: thumbnailGeneratorTextShadowColor,
				decoration: thumbnailGeneratorTextDecoration,
				decorationColor: thumbnailGeneratorTextDecorationColor,
				fontFamily: thumbnailGeneratorTextFontFamily,
				fontWeight: thumbnailGeneratorTextFontWeight,
				fontStyle: thumbnailGeneratorTextFontStyle,
			},
		];
	}

	function getCorrectIndex(i: number, totalLength: number) {
		return thumbnailElementsOrderReversed ? totalLength - 1 - i : i;
	}

	function handleDelete(
		section: 'Image' | 'Custom Image' | 'Text',
		index: number,
	) {
		switch (section) {
			case 'Image':
				thumbnailImages = thumbnailImages.filter((_, i) => i !== index);
				break;
			case 'Custom Image':
				thumbnailUploadedImages = thumbnailUploadedImages.filter(
					(_, i) => i !== index,
				);
				break;
			case 'Text':
				thumbnailTexts = thumbnailTexts.filter((_, i) => i !== index);
				break;
		}
	}

	function handleDuplicate(
		section: 'Image' | 'Custom Image' | 'Text',
		index: number,
	) {
		switch (section) {
			case 'Image':
				thumbnailImages = [
					...thumbnailImages,
					{
						optionId: thumbnailImages[index].optionId,
						elementType: thumbnailImages[index].elementType,
						fileFormat: thumbnailImages[index].fileFormat,
						fileType: thumbnailImages[index].fileType,
						src: thumbnailImages[index].src,
						alt: thumbnailImages[index].alt,
						top: thumbnailImages[index].top,
						left: thumbnailImages[index].left,
						width: thumbnailImages[index].width,
						height: thumbnailImages[index].height,
						zindex: thumbnailImages[index].zindex,
						opacity: thumbnailImages[index].opacity,
						dropShadowSize: thumbnailImages[index].dropShadowSize,
						dropShadowColor: thumbnailImages[index].dropShadowColor,
						borderWidth: thumbnailImages[index].borderWidth,
						borderColor: thumbnailImages[index].borderColor,
						borderRadius: thumbnailImages[index].borderRadius,
						background: thumbnailImages[index].background,
						color: thumbnailImages[index].color,
						monsterRenderSize: thumbnailImages[index].monsterRenderSize,
						name: thumbnailImages[index].name,
					},
				];
				break;
			case 'Custom Image':
				thumbnailUploadedImages = [
					...thumbnailUploadedImages,
					{
						elementType: thumbnailUploadedImages[index].elementType,
						fileType: thumbnailUploadedImages[index].fileType,
						src: thumbnailUploadedImages[index].src,
						alt: thumbnailUploadedImages[index].alt,
						top: thumbnailUploadedImages[index].top,
						left: thumbnailUploadedImages[index].left,
						width: thumbnailUploadedImages[index].width,
						height: thumbnailUploadedImages[index].height,
						zindex: thumbnailUploadedImages[index].zindex,
						opacity: thumbnailUploadedImages[index].opacity,
						dropShadowSize: thumbnailUploadedImages[index].dropShadowSize,
						dropShadowColor: thumbnailUploadedImages[index].dropShadowColor,
						borderWidth: thumbnailUploadedImages[index].borderWidth,
						borderColor: thumbnailUploadedImages[index].borderColor,
						borderRadius: thumbnailUploadedImages[index].borderRadius,
						name: thumbnailUploadedImages[index].name,
					},
				];
				break;
			case 'Text':
				thumbnailTexts = [
					...thumbnailTexts,
					{
						elementType: thumbnailTexts[index].elementType,
						text: thumbnailTexts[index].text,
						top: thumbnailTexts[index].top,
						left: thumbnailTexts[index].left,
						zindex: thumbnailTexts[index].zindex,
						opacity: thumbnailTexts[index].opacity,
						fontSize: thumbnailTexts[index].fontSize,
						color: thumbnailTexts[index].color,
						rotation: thumbnailTexts[index].rotation,
						shadowWidth: thumbnailTexts[index].shadowWidth,
						shadowColor: thumbnailTexts[index].shadowColor,
						decoration: thumbnailTexts[index].decoration,
						decorationColor: thumbnailTexts[index].decorationColor,
						fontFamily: thumbnailTexts[index].fontFamily,
						fontWeight: thumbnailTexts[index].fontWeight,
						fontStyle: thumbnailTexts[index].fontStyle,
					},
				];
				break;
		}
	}

	async function createThumbnailGeneratorSmallPreview() {
		let node = document.getElementById('generated-thumbnail-dom');

		if (!node) {
			return;
		}

		thumbnailGeneratorSmallPreviewStatus = 'loading';

		await domToPng(node, {
			quality: 1,
		}).then((dataUrl) => {
			thumbnailGeneratorSmallPreview = dataUrl;
		});

		thumbnailGeneratorSmallPreviewStatus = 'loaded';
	}

	function shouldFilterItem(item: { text: string }, value: string) {
		if (!value) return true;
		return item.text.toLowerCase().includes(value.toLowerCase());
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

	let thumbnailImages: HTMLImgAttributes[] = [];
	let thumbnailUploadedImages: HTMLImgAttributes[] = [];
	let thumbnailTexts: HTMLParagraphElement[] = [];

	let thumbnailGeneratorImageFormat: 'Vector' | 'Raster' = 'Vector';
	let thumbnailGeneratorImageType: FrontierImageType = 'Monster Icon';
	let thumbnailGeneratorImageIdFromList = 'Abiorugu';
	let thumbnailGeneratorImageColor = allFrontierColors[0].id;
	let thumbnailGeneratorImageBackground = false;
	let thumbnailGeneratorMonsterRenderSize: 'Small' | 'Full' = 'Full';
	let thumbnailGeneratorBackgroundGradientStartColor =
		getHexStringFromCatppuccinColor('mantle', $theme);
	let thumbnailGeneratorBackgroundGradientEndColor =
		getHexStringFromCatppuccinColor('crust', $theme);
	let thumbnailGeneratorBackgroundGradientRotation = 45;
	let thumbnailGeneratorBackgroundGradientLinear = false;
	let thumbnailGeneratorImageShadowColor = '#000000';
	let thumbnailGeneratorImageShadowWidth = 4;
	let thumbnailGeneratorImageBorderWidth = 0;
	let thumbnailGeneratorImageBorderColor = '#000000';
	let thumbnailGeneratorImageBorderRadius = 5;

	let thumbnailGeneratorBorderWidth = 12;
	let thumbnailGeneratorBorderStyle = 'outset';
	let thumbnailGeneratorBorderColor = getHexStringFromCatppuccinColor(
		'red',
		$theme,
	);
	let thumbnailGeneratorBorder = false;

	let thumbnailGeneratorImageFiles: ReadonlyArray<File> = [];
	let thumbnailGeneratorTemplateFiles: ReadonlyArray<File> = [];

	let thumbnailGeneratorText = '5 Musous No Hit SW+CS';
	let thumbnailGeneratorTextFontSize = 48;
	let thumbnailGeneratorTextColor = '#000000';
	let thumbnailGeneratorTextRotation = 0;
	let thumbnailGeneratorTextShadowColor = '#ff0000';
	let thumbnailGeneratorTextShadowWidth = 1;
	let thumbnailGeneratorTextFontFamily = 'Arial';
	let thumbnailGeneratorTextFontStyle = 'italic';
	let thumbnailGeneratorTextFontWeight = 'bold';
	let thumbnailGeneratorTextDecoration = 'underline';
	let thumbnailGeneratorTextDecorationColor = '#ff0000';

	let thumbnailGeneratorSectionOption: 'Text' | 'Image' | 'Custom Image' =
		'Image';

	let thumbnailGeneratorUploadedImageShadowWidth = 4;
	let thumbnailGeneratorUploadedImageShadowColor = '#000000';
	let thumbnailGeneratorUploadedImageBorderWidth = 4;
	let thumbnailGeneratorUploadedImageBorderColor = '#000000';
	let thumbnailGeneratorUploadedImageBorderRadius = 5;

	let thumbnailGeneratorTemplateExampleImages =
		getThumbnailGeneratorTemplateExampleImages();
	let thumbnailGeneratorTemplateExampleTexts =
		getThumbnailGeneratorTemplateExampleTexts();

	thumbnailImages = [
		...thumbnailImages,
		...thumbnailGeneratorTemplateExampleImages,
	];

	thumbnailTexts = [
		...thumbnailTexts,
		...thumbnailGeneratorTemplateExampleTexts,
	];

	$: addUploadedImage(thumbnailGeneratorImageFiles);

	$: thumbnailGeneratorPreviewStyle = `background: ${thumbnailGeneratorBackgroundGradientLinear ? 'linear' : 'radial'}-gradient(${thumbnailGeneratorBackgroundGradientLinear ? `${thumbnailGeneratorBackgroundGradientRotation}deg` : 'circle'}, ${thumbnailGeneratorBackgroundGradientStartColor} 0%, ${thumbnailGeneratorBackgroundGradientEndColor} 100%); border: ${thumbnailGeneratorBorder ? thumbnailGeneratorBorderWidth : '0'}px ${thumbnailGeneratorBorderStyle} ${thumbnailGeneratorBorderColor};`;

	let thumbnailContainer: HTMLDivElement;
	let thumbnailContainerCursorPosition = { x: 0, y: 0 };

	onMount(() => {
		thumbnailContainer.addEventListener('dragover', (e) => {
			e.preventDefault(); // Necessary to allow dropping
		});

		thumbnailContainer.addEventListener('mousemove', (e) => {
			const rect = thumbnailContainer.getBoundingClientRect();
			thumbnailContainerCursorPosition.x = Math.round(e.clientX - rect.left);
			thumbnailContainerCursorPosition.y = Math.round(e.clientY - rect.top);
		});

		thumbnailContainer.addEventListener('drop', (e) => {
			e.preventDefault(); // Prevents default behavior
			const data = JSON.parse(e.dataTransfer.getData('text/plain'));
			const element = document.getElementById(data.id);
			if (element) {
				// Calculate the correct position based on the cursor's position relative to the container
				// and the initial offset of the dragged element
				const rect = thumbnailContainer.getBoundingClientRect();
				const newTop = Math.round(e.clientY - rect.top - data.offsetY);
				const newLeft = Math.round(e.clientX - rect.left - data.offsetX);

				// Update the element's position
				element.style.top = `${newTop}px`;
				element.style.left = `${newLeft}px`;

				// Update the position in your data model here
				// For example, if you're tracking the position in a Svelte store or a local variable, update it here
				if (data.id.startsWith('image')) {
					thumbnailImages[data.index].top = newTop;
					thumbnailImages[data.index].left = newLeft;
				} else if (data.id.startsWith('upload')) {
					thumbnailUploadedImages[data.index].top = newTop;
					thumbnailUploadedImages[data.index].left = newLeft;
				} else if (data.id.startsWith('text')) {
					thumbnailTexts[data.index].top = newTop;
					thumbnailTexts[data.index].left = newLeft;
				}
			}
		});
	});

	let moveableTarget;

	let loadingTemplateStatus: 'uploading' | 'edit' | 'complete' | undefined =
		'uploading';

	function onThumbnailImageContainerMouseDown(
		e: MouseEvent & { currentTarget: EventTarget & HTMLDivElement },
		i: number,
	) {
		if (e.target.tagName !== 'svg' && e.target.tagName !== 'div') {
			moveableTarget = undefined;
		} else {
			moveableTarget = document.getElementById(`image-${i}`);
		}
	}

	function onDragEnd(e) {
		let { target, isDrag, clientX, clientY } = e;
		const element = moveableTarget;
		const rect = thumbnailContainer.getBoundingClientRect();

		// Adjustments for centering the element
		const elementWidth = element.offsetWidth;
		const elementHeight = element.offsetHeight;
		const newTop = Math.round(clientY - rect.top - elementHeight / 2); // Subtract half the height
		const newLeft = Math.round(clientX - rect.left - elementWidth / 2); // Subtract half the width

		element.style.top = `${newTop}px`;
		element.style.left = `${newLeft}px`;

		// Update the thumbnailImages array with the new positions
		thumbnailImages[Number(moveableTarget.id.replace('image-', ''))].top =
			newTop;
		thumbnailImages[Number(moveableTarget.id.replace('image-', ''))].left =
			newLeft;
	}

	let uniqueMonsters = getUniqueMonsters().sort(
		(a, b) =>
			(a?.displayName?.codePointAt(0) ?? 0) -
			(b?.displayName?.codePointAt(0) ?? 0),
	);

	function getThumbnailGeneratorImagesFromType(type: FrontierImageType) {
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

		list = list.filter((e) => e.icon !== '');

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

		thumbnailGeneratorImageIdFromList = result[0].id;

		return result;
	}

	$: thumbnailGeneratorImagesFromType = getThumbnailGeneratorImagesFromType(
		thumbnailGeneratorImageType,
	);
</script>

<Modal
	passiveModal
	bind:open={modalOpen}
	{modalHeading}
	{modalLabel}
	on:open
	on:close
>
	<div class="modal-content">
		<div class="video-container">
			<Youtube id="rLzX-y-BJfw" />
		</div>
	</div>
</Modal>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Thumbnail Generator'} />
		<InlineNotification
			lowContrast
			hideCloseButton
			kind="warning"
			title="Browser compatibility:"
			subtitle="Many features on this section may not work on Firefox. It is confirmed to work with Chromium based browsers."
		/>
		<InlineNotification
			lowContrast
			hideCloseButton
			kind="info"
			title="Background:"
			subtitle="The ZIndex of the background should be 0."
		/>
		<p class="spaced-paragraph">
			Here you can download the thumbnail generated below, with the resulting
			size being 1280x720 pixels, perfect for things such as
			<span
				><Button
					on:click={() => changeModal('', 'YouTube')}
					size="default"
					icon={LogoYoutube}
					kind="ghost">YouTube thumbnails.</Button
				></span
			>
		</p>

		<p class="spaced-paragraph">
			Additionally, for text, vector and raster images you can drag and drop
			them in order to change their position in the thumbnail, as an alternative
			to the number inputs.
		</p>
		<p>Rule of thirds:</p>
		<UnorderedList class="spaced-list">
			<ListItem>X: 427, 853</ListItem>
			<ListItem>Y: 240, 480</ListItem>
		</UnorderedList>
		<div class="container-buttons">
			<p>Credit text</p>
			<CopyButton
				text={'Thumbnail generated by https://wycademy.vercel.app/tools/generator/thumbnail'}
				iconDescription={'Credit text'}
			/>
		</div>
		<div class="container-item-buttons">
			<Button
				kind="tertiary"
				icon={Download}
				on:click={downloadGeneratedThumbnailImage}>Download Thumbnail</Button
			>
			<Button kind="tertiary" icon={Save} on:click={saveThumbnailTemplate}
				>Save as Template</Button
			>
			<FileUploader
				labelTitle="Load Template"
				buttonLabel="Add File"
				labelDescription="Only JSON files are accepted. Custom images are neither loaded nor saved."
				accept={['.json']}
				iconDescription="Template file"
				kind="tertiary"
				bind:files={thumbnailGeneratorTemplateFiles}
				on:add={loadThumbnailTemplate}
				bind:status={loadingTemplateStatus}
			/>
		</div>
		<div class="container-buttons">
			<Toggle labelText="Border" bind:toggled={thumbnailGeneratorBorder} />

			{#if thumbnailGeneratorBorder}
				<ColorPicker
					bind:hex={thumbnailGeneratorBorderColor}
					label="Border Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>

				<Dropdown
					type="inline"
					titleText="Border Style"
					bind:selectedId={thumbnailGeneratorBorderStyle}
					items={[
						{ id: 'none', text: 'None' },
						{ id: 'hidden', text: 'Hidden' },
						{ id: 'dotted', text: 'Dotted' },
						{ id: 'dashed', text: 'Dashed' },
						{ id: 'solid', text: 'Solid' },
						{ id: 'double', text: 'Double' },
						{ id: 'groove', text: 'Groove' },
						{ id: 'ridge', text: 'Ridge' },
						{ id: 'inset', text: 'Inset' },
						{ id: 'outset', text: 'Outset' },
					]}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorBorderWidth}
					invalidText={'Value must be between 0 and 128'}
					label={'Border Width (px)'}
				/>
			{/if}
		</div>
		<div class="container-buttons">
			<ColorPicker
				bind:hex={thumbnailGeneratorBackgroundGradientStartColor}
				label="Background Color Gradient Start"
				--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
				--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
				--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
				--cp-button-hover-color={getHexStringFromCatppuccinColor(
					'blue',
					$theme,
				)}
			/>
			<ColorPicker
				bind:hex={thumbnailGeneratorBackgroundGradientEndColor}
				label="Background Color Gradient End"
				--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
				--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
				--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
				--cp-button-hover-color={getHexStringFromCatppuccinColor(
					'blue',
					$theme,
				)}
			/>
			<NumberInput
				size="sm"
				step={1}
				min={-360}
				max={360}
				bind:value={thumbnailGeneratorBackgroundGradientRotation}
				invalidText={'Value must be between -360 and 360'}
				label={'Gradient Rotation (degrees)'}
			/>
			<Toggle
				labelText="Gradient Type"
				labelA="Radial"
				labelB="Linear"
				bind:toggled={thumbnailGeneratorBackgroundGradientLinear}
			/>
		</div>

		<div class="container-buttons">
			<Dropdown
				type="inline"
				titleText="Insert Element"
				bind:selectedId={thumbnailGeneratorSectionOption}
				items={[
					{ id: 'Text', text: 'Text' },
					{ id: 'Image', text: 'Image' },
					{ id: 'Custom Image', text: 'Custom Image' },
				]}
			/>
		</div>

		{#if thumbnailGeneratorSectionOption === 'Text'}
			<div class="container-buttons">
				<Button kind="tertiary" icon={Add} on:click={addThumbnailText}
					>Add Text</Button
				>
				<TextInput
					labelText="Text"
					placeholder="Enter text"
					hideLabel
					bind:value={thumbnailGeneratorText}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={1}
					max={128}
					bind:value={thumbnailGeneratorTextFontSize}
					invalidText={'Value must be between 1 and 128'}
					label={'Text Size (px)'}
				/>

				<Dropdown
					titleText="Font Family"
					type="inline"
					bind:selectedId={thumbnailGeneratorTextFontFamily}
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
						{ id: 'MS Gothic', text: 'MS Gothic' },
					]}
					let:item
				>
					<p style="font-family: {item.id}">{item.id}</p>
				</Dropdown>

				<Dropdown
					titleText="Font Style"
					type="inline"
					bind:selectedId={thumbnailGeneratorTextFontStyle}
					items={[
						{ id: 'normal', text: 'Normal' },
						{ id: 'italic', text: 'Italic' },
					]}
				/>

				<Dropdown
					titleText="Font Weight"
					type="inline"
					bind:selectedId={thumbnailGeneratorTextFontWeight}
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
					bind:selectedId={thumbnailGeneratorTextDecoration}
					items={[
						{ id: 'none', text: 'None' },
						{ id: 'underline', text: 'Underline' },
						{ id: 'line-through', text: 'Strikethrough' },
						{ id: 'overline', text: 'Overline' },
					]}
				/>

				<ColorPicker
					bind:hex={thumbnailGeneratorTextDecorationColor}
					label="Text Decoration Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>

				<ColorPicker
					bind:hex={thumbnailGeneratorTextShadowColor}
					label="Text Shadow Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorTextShadowWidth}
					invalidText={'Value must be between 0 and 128'}
					label={'Text Shadow Width (px)'}
				/>

				<ColorPicker
					bind:hex={thumbnailGeneratorTextColor}
					label="Text Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={-360}
					max={360}
					bind:value={thumbnailGeneratorTextRotation}
					invalidText={'Value must be between -360 and 360'}
					label={'Text Rotation (degrees)'}
				/>
			</div>
		{:else if thumbnailGeneratorSectionOption === 'Image'}
			<div class="container-buttons">
				<Button kind="tertiary" icon={Add} on:click={addThumbnailImage}
					>Add Image</Button
				>
				<Dropdown
					type="inline"
					titleText="Type"
					bind:selectedId={thumbnailGeneratorImageType}
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
					bind:selectedId={thumbnailGeneratorImageIdFromList}
					items={thumbnailGeneratorImagesFromType}
					{shouldFilterItem}
				/>
				{#if thumbnailGeneratorImageType === 'Armor' || thumbnailGeneratorImageType === 'Item' || thumbnailGeneratorImageType === 'Weapon'}
					<Dropdown
						type="inline"
						titleText="Color"
						bind:selectedId={thumbnailGeneratorImageColor}
						items={allFrontierColors}
					/>
				{/if}
				{#if thumbnailGeneratorImageType === 'Monster Render'}
					<Dropdown
						type="inline"
						titleText="Render Size"
						bind:selectedId={thumbnailGeneratorMonsterRenderSize}
						items={[
							{ id: 'Small', text: 'Small' },
							{ id: 'Full', text: 'Full' },
						]}
					/>
				{/if}
				{#if thumbnailGeneratorImageType === 'Monster Icon'}
					<Toggle
						labelText="Background"
						bind:toggled={thumbnailGeneratorImageBackground}
					/>
				{/if}
				<ColorPicker
					bind:hex={thumbnailGeneratorImageShadowColor}
					label="Image Shadow Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorImageShadowWidth}
					invalidText={'Value must be between 0 and 128'}
					label={'Image Shadow Width (px)'}
				/>
				<ColorPicker
					bind:hex={thumbnailGeneratorImageBorderColor}
					label="Image Border Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorImageBorderWidth}
					invalidText={'Value must be between 0 and 128'}
					label={'Image Border Width (px)'}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorImageBorderRadius}
					invalidText={'Value must be between 0 and 128'}
					label={'Image Border Radius (px)'}
				/>
			</div>
		{:else}
			<div class="container-buttons">
				<FileUploaderDropContainer
					accept={['.svg', '.png', '.webp', '.jpg', '.jpeg']}
					bind:files={thumbnailGeneratorImageFiles}
					labelText="Drag and drop images here or click to upload (8MB max)"
					validateFiles={(files) => {
						return files.filter(
							(file) =>
								file.size < 8 * Math.pow(10, 6) &&
								(file.name.endsWith('.png') ||
									file.name.endsWith('.webp') ||
									file.name.endsWith('.jpg') ||
									file.name.endsWith('.svg') ||
									file.name.endsWith('.jpeg')),
						);
					}}
				/>
				<ColorPicker
					bind:hex={thumbnailGeneratorUploadedImageShadowColor}
					label="Uploaded Image Shadow Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorUploadedImageShadowWidth}
					invalidText={'Value must be between 0 and 128'}
					label={'Uploaded Image Shadow Width (px)'}
				/>
				<ColorPicker
					bind:hex={thumbnailGeneratorUploadedImageBorderColor}
					label="Uploaded Image Border Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorUploadedImageBorderWidth}
					invalidText={'Value must be between 0 and 128'}
					label={'Uploaded Image Border Width (px)'}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorUploadedImageBorderRadius}
					invalidText={'Value must be between 0 and 128'}
					label={'Uploaded Image Border Radius (px)'}
				/>
			</div>
		{/if}

		<div class="container-buttons">
			<Button
				kind="tertiary"
				icon={Add}
				on:click={createThumbnailGeneratorSmallPreview}>Create Preview</Button
			>
			<Dropdown
				type="inline"
				titleText="Size"
				bind:selectedId={thumbnailGeneratorSmallPreviewSize}
				items={[
					{ id: '128', text: '128px' },
					{ id: '256', text: '256px' },
					{ id: '512', text: '512px' },
				]}
			/>
		</div>

		<div class="thumbnail-generator-small-preview">
			{#if thumbnailGeneratorSmallPreviewStatus === 'unloaded'}
				<p>Your thumbnail preview will be displayed here.</p>
			{:else if thumbnailGeneratorSmallPreviewStatus === 'loading'}
				<SkeletonPlaceholder
					style="height: {thumbnailGeneratorSmallPreviewSize}px; width: 50%;"
				/>
			{:else if thumbnailGeneratorSmallPreviewStatus === 'loaded'}
				<img
					src={thumbnailGeneratorSmallPreview}
					width="auto"
					height={`${thumbnailGeneratorSmallPreviewSize}px`}
					alt="Thumbnail Preview"
				/>
			{/if}
		</div>

		<p class="spaced-paragraph flex-centered">
			X: {thumbnailContainerCursorPosition.x} Y: {thumbnailContainerCursorPosition.y}
		</p>

		<div class="thumbnail-container">
			<div
				style={thumbnailGeneratorPreviewStyle}
				id="generated-thumbnail-dom"
				bind:this={thumbnailContainer}
			>
				{#if thumbnailImages.length !== undefined && thumbnailImages.length > 0}
					{#each thumbnailImages as image, i}
						{#if image.fileType === 'Location' || image.fileType === 'Habitat' || image.fileType === 'Monster Render' || image.fileType === 'Game'}
							<img
								src={image.fileType === 'Monster Render'
									? image.monsterRenderSize === 'Small'
										? image.src.small
										: image.src.full
									: image.src.image}
								alt={image.alt}
								draggable={image.fileType === 'Habitat' ? 'false' : 'true'}
								id={`image-${i}`}
								on:dragstart={(e) =>
									handleDragStart(e, `image-${i}`, e.offsetX, e.offsetY, i)}
								style="position: absolute; top: {image.top}px; left: {image.left}px; width: {image.width}px; height: {image.height}px; z-index: {image.zindex}; opacity: {image.opacity}; filter: drop-shadow(0 0 {image.dropShadowSize}px {image.dropShadowColor}); border-color: {image.borderColor}; border-style: solid; border-radius: {image.borderRadius}px; border-width: {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px;"
							/>
						{:else}
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<div
								style="position: absolute; top: {image.top}px; left: {image.left}px; width: {image.width}px; height: {image.height}px; z-index: {image.zindex}; opacity: {image.opacity}; filter: drop-shadow(0 0 {image.dropShadowSize}px {image.dropShadowColor}); border-color: {image.borderColor}; border-style: solid; border-radius: {image.borderRadius}px; border-width: {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px;"
								on:mousedown={(e) => onThumbnailImageContainerMouseDown(e, i)}
								id={`image-${i}`}
							>
								<svelte:component
									this={image.src.component}
									{...{
										color: image.color,
										background: image.background,
										size: `${image.width}px`,
									}}
								/>
							</div>
						{/if}
					{/each}
				{/if}
				<Moveable
					target={moveableTarget}
					draggable={true}
					on:dragEnd={({ detail: e }) => onDragEnd(e)}
				/>
				{#if thumbnailUploadedImages.length !== undefined && thumbnailUploadedImages.length > 0}
					{#each thumbnailUploadedImages as image, i}
						{#if image.fileType !== 'image/svg+xml'}
							<img
								src={image.src}
								alt={image.alt}
								draggable={'true'}
								on:dragstart={(e) =>
									handleDragStart(e, `upload-${i}`, e.offsetX, e.offsetY, i)}
								id={`upload-${i}`}
								style="position: absolute; top: {image.top}px; left: {image.left}px; width: {image.width}px; height: {image.height}px; z-index: {image.zindex}; opacity: {image.opacity}; filter: drop-shadow(0 0 {image.dropShadowSize}px {image.dropShadowColor}); border-color: {image.borderColor}; border-style: solid; border-radius: {image.borderRadius}px; border-width: {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px;"
							/>
						{:else if image.fileType === 'image/svg+xml'}
							<img
								src={image.src}
								alt={image.alt}
								draggable={'true'}
								on:dragstart={(e) =>
									handleDragStart(e, `upload-${i}`, e.offsetX, e.offsetY, i)}
								id={`upload-${i}`}
								style="position: absolute; top: {image.top}px; left: {image.left}px; width: {image.width}px; height: {image.height}px; z-index: {image.zindex}; opacity: {image.opacity}; filter: drop-shadow(0 0 {image.dropShadowSize}px {image.dropShadowColor}); border-color: {image.borderColor}; border-style: solid; border-radius: {image.borderRadius}px; border-width: {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px;"
							/>
						{/if}
					{/each}
				{/if}
				{#if thumbnailTexts.length !== undefined && thumbnailTexts.length > 0}
					{#each thumbnailTexts as text, i}
						<p
							draggable={'true'}
							on:dragstart={(e) =>
								handleDragStart(e, `text-${i}`, e.offsetX, e.offsetY, i)}
							id={`text-${i}`}
							style="position: absolute; top: {text.top}px; left: {text.left}px; z-index: {text.zIndex}; opacity: {text.opacity}; font-size: {text.fontSize}px; text-shadow:
						-{text.shadowWidth}px -{text.shadowWidth}px 0 {text.shadowColor},
						{text.shadowWidth}px -{text.shadowWidth}px 0 {text.shadowColor},
						-{text.shadowWidth}px {text.shadowWidth}px 0 {text.shadowColor},
						{text.shadowWidth}px {text.shadowWidth}px 0 {text.shadowColor};
						color: {text.color};
						 transform: rotate({text.rotation}deg); text-decoration: {text.decoration} {text.decorationColor}; font-family: {text.fontFamily}; font-weight: {text.fontWeight}; font-style: {text.fontStyle};"
						>
							{text.text}
						</p>
					{/each}
				{/if}
			</div>
		</div>

		<div class="thumbnail-order-toggle">
			<Toggle
				labelText="Order"
				bind:toggled={thumbnailElementsOrderReversed}
				labelA={'Oldest'}
				labelB="Newest"
			/>
		</div>

		<div class="thumbnail-element-container">
			{#if !thumbnailElementsOrderReversed}
				{#if thumbnailImages.length > 0}
					{#each thumbnailImages as image, i}
						<ThumbnailGeneratorImage
							index={i}
							on:delete={() =>
								handleDelete(
									image.elementType,
									getCorrectIndex(i, thumbnailImages.length),
								)}
							on:duplicate={() =>
								handleDuplicate(
									image.elementType,
									getCorrectIndex(i, thumbnailImages.length),
								)}
							bind:top={image.top}
							bind:left={image.left}
							bind:width={image.width}
							bind:height={image.height}
							bind:zindex={image.zindex}
							bind:opacity={image.opacity}
							bind:dropShadowSize={image.dropShadowSize}
							bind:dropShadowColor={image.dropShadowColor}
							bind:borderWidth={image.borderWidth}
							bind:borderColor={image.borderColor}
							bind:borderRadius={image.borderRadius}
							bind:background={image.background}
							bind:color={image.color}
							bind:monsterRenderSize={image.monsterRenderSize}
							bind:fileType={image.fileType}
							bind:src={image.src}
							optionsList={getThumbnailGeneratorImagesFromType(image.fileType)}
							bind:optionId={image.optionId}
						/>
					{/each}
				{/if}
				{#if thumbnailUploadedImages.length > 0}
					{#each thumbnailUploadedImages as image, i}
						<ThumbnailGeneratorImage
							index={i}
							on:delete={() =>
								handleDelete(
									image.elementType,
									getCorrectIndex(i, thumbnailImages.length),
								)}
							on:duplicate={() =>
								handleDuplicate(
									image.elementType,
									getCorrectIndex(i, thumbnailImages.length),
								)}
							bind:top={image.top}
							bind:left={image.left}
							bind:width={image.width}
							bind:height={image.height}
							bind:zindex={image.zindex}
							bind:opacity={image.opacity}
							bind:dropShadowSize={image.dropShadowSize}
							bind:dropShadowColor={image.dropShadowColor}
							bind:borderWidth={image.borderWidth}
							bind:borderColor={image.borderColor}
							bind:borderRadius={image.borderRadius}
						/>
					{/each}
				{/if}
				{#if thumbnailTexts.length > 0}
					{#each thumbnailTexts as textElement, i}
						<ThumbnailGeneratorText
							index={i}
							bind:text={textElement.text}
							on:delete={() =>
								handleDelete(
									textElement.elementType,
									getCorrectIndex(i, thumbnailImages.length),
								)}
							on:duplicate={() =>
								handleDuplicate(
									textElement.elementType,
									getCorrectIndex(i, thumbnailImages.length),
								)}
							bind:top={textElement.top}
							bind:left={textElement.left}
							bind:zindex={textElement.zindex}
							bind:opacity={textElement.opacity}
							bind:fontSize={textElement.fontSize}
							bind:fontFamily={textElement.fontFamily}
							bind:fontWeight={textElement.fontWeight}
							bind:fontStyle={textElement.fontStyle}
							bind:textDecoration={textElement.decoration}
							bind:textDecorationColor={textElement.decorationColor}
							bind:textShadowWidth={textElement.shadowWidth}
							bind:textShadowColor={textElement.shadowColor}
							bind:textColor={textElement.color}
							bind:textRotation={textElement.rotation}
						/>
					{/each}
				{/if}
			{:else}
				{#if thumbnailImages.length > 0}
					{#each [...thumbnailImages].reverse() as image, i}
						<ThumbnailGeneratorImage
							index={i}
							on:delete={() =>
								handleDelete(
									image.elementType,
									getCorrectIndex(i, thumbnailImages.length),
								)}
							on:duplicate={() =>
								handleDuplicate(
									image.elementType,
									getCorrectIndex(i, thumbnailImages.length),
								)}
							bind:top={image.top}
							bind:left={image.left}
							bind:width={image.width}
							bind:height={image.height}
							bind:zindex={image.zindex}
							bind:opacity={image.opacity}
							bind:dropShadowSize={image.dropShadowSize}
							bind:dropShadowColor={image.dropShadowColor}
							bind:borderWidth={image.borderWidth}
							bind:borderColor={image.borderColor}
							bind:borderRadius={image.borderRadius}
							bind:background={image.background}
							bind:color={image.color}
							bind:monsterRenderSize={image.monsterRenderSize}
							bind:fileType={image.fileType}
							bind:src={image.src}
							optionsList={getThumbnailGeneratorImagesFromType(image.fileType)}
							bind:optionId={image.optionId}
						/>
					{/each}
				{/if}
				{#if thumbnailUploadedImages.length > 0}
					{#each [...thumbnailUploadedImages].reverse() as image, i}
						<ThumbnailGeneratorImage
							index={i}
							on:delete={() =>
								handleDelete(
									image.elementType,
									getCorrectIndex(i, thumbnailImages.length),
								)}
							on:duplicate={() =>
								handleDuplicate(
									image.elementType,
									getCorrectIndex(i, thumbnailImages.length),
								)}
							bind:top={image.top}
							bind:left={image.left}
							bind:width={image.width}
							bind:height={image.height}
							bind:zindex={image.zindex}
							bind:opacity={image.opacity}
							bind:dropShadowSize={image.dropShadowSize}
							bind:dropShadowColor={image.dropShadowColor}
							bind:borderWidth={image.borderWidth}
							bind:borderColor={image.borderColor}
							bind:borderRadius={image.borderRadius}
						/>
					{/each}
				{/if}
				{#if thumbnailTexts.length > 0}
					{#each [...thumbnailTexts].reverse() as textElement, i}
						<ThumbnailGeneratorText
							index={i}
							bind:text={textElement.text}
							on:delete={() =>
								handleDelete(
									textElement.elementType,
									getCorrectIndex(i, thumbnailImages.length),
								)}
							on:duplicate={() =>
								handleDuplicate(
									textElement.elementType,
									getCorrectIndex(i, thumbnailImages.length),
								)}
							bind:top={textElement.top}
							bind:left={textElement.left}
							bind:zindex={textElement.zindex}
							bind:opacity={textElement.opacity}
							bind:fontSize={textElement.fontSize}
							bind:fontFamily={textElement.fontFamily}
							bind:fontWeight={textElement.fontWeight}
							bind:fontStyle={textElement.fontStyle}
							bind:textDecoration={textElement.decoration}
							bind:textDecorationColor={textElement.decorationColor}
							bind:textShadowWidth={textElement.shadowWidth}
							bind:textShadowColor={textElement.shadowColor}
							bind:textColor={textElement.color}
							bind:textRotation={textElement.rotation}
						/>
					{/each}
				{/if}
			{/if}
		</div>
		<div class="page-turn">
			<PageTurn pageRouteId={$page.route.id} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.thumbnail-element-container {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.container-buttons {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	.thumbnail-container {
		overflow-x: auto; /* Enable horizontal scrolling */
		overflow-y: auto; /* Prevent vertical scrolling */
		border: 2px solid var(--ctp-surface0); /* Keep the border */
		white-space: nowrap; /* Prevent content from wrapping to the next line */
	}

	#generated-thumbnail-dom {
		position: relative; /* Changed from absolute to relative to allow border to be applied */
		width: 1280px; /* Fixed width to match the desired output size */
		height: 720px; /* Fixed height to match the desired output size */
	}

	.flex-centered {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		display: flex;
		gap: var(--cds-spacing-06);
		flex-direction: column;
	}

	.thumbnail-order-toggle {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem;
	}

	.thumbnail-generator-small-preview {
		margin-bottom: 1rem;
	}
</style>
