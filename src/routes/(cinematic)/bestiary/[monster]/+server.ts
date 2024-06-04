// import type { WikiaMonster } from '$lib/client/modules/frontier/types';
// import type { RouteParams } from './$types';
// import { json } from '@sveltejs/kit';
// import { JSDOM } from 'jsdom';

// const wikiaMonsterNameMap = {
// 	bright_hypnoc: 'Breeding_Season_Hypnocatrice',
// 	silver_hypnoc: 'Silver_Hypnocatrice',
// 	yian_kut_ku: 'Yian_Kut-Ku',
// 	blue_yian_kut_ku: 'Blue_Yian_Kut-Ku',
// 	starving_deviljho: 'Savage_Deviljho',
// 	golden_deviljho: 'Starving_Deviljho',
// 	red_lavasioth: 'Lavasioth_Subspecies',
// 	baruragaru: 'Barlagual',
// 	zenith_baruragaru: 'Zenith_Barlagual',
// 	diorex: 'Diorekkusu',
// 	orange_espinas: 'Flaming_Espinas',
// 	white_espinas: 'Espinas_Rare_Species',
// 	shifting_mi_ru: 'Mysterious_Mi_Ru',
// 	unknown: 'Unknown_(Black_Flying_Wyvern)',
// 	elzelion: 'Eruzerion',
// 	burning_freezing_elzelion: 'Burning_Freezing_Eruzerion',
// 	// road_white_fatalis: '',
// 	// hc rajang
// 	ruling_guanzorumu: 'Ruler_Guanzorumu',
// 	lao_shan_lung: 'Lao-Shan_Lung',
// 	ashen_lao_shan_lung: 'Ashen_Lao-Shan_Lung',
// 	raviente: 'Laviente',
// 	violent_raviente: 'Violent_Laviente',
// 	berserk_raviente: 'Berserk_Laviente',
// 	giaprey_giadrome: 'Giadrome',
// };

// const wycademyMonsterNameMap = {
// 	'Breeding Season Hypnocatrice': 'Bright Hypnoc',
// 	'Silver Hypnocatrice': 'Silver Hypnoc',
// 	'Savage Deviljho': 'Starving Deviljho',
// 	'Starving Deviljho': 'Golden Deviljho',
// 	'Lavasioth Subspecies': 'Red Lavasioth',
// 	Barlagual: 'Baruragaru',
// 	'Zenith Barlagual': 'Zenith Baruragaru',
// 	Diorekkusu: 'Diorex',
// 	'Flaming Espinas': 'Orange Espinas',
// 	'Espinas Rare Species': 'White Espinas',
// 	Mysterious_Mi_Ru: 'Shifting Mi Ru',
// 	'Unknown_(Black_Flying_Wyvern)': 'UNKNOWN',
// 	Eruzerion: 'Elzelion',
// 	Burning_Freezing_Eruzerion: 'Burning Freezing Elzelion',
// 	'Ruler Guanzorumu': 'Ruling Guanzorumu',
// 	Laviente: 'Raviente',
// 	'Violent Laviente': 'Violent Raviente',
// 	'Berserk Laviente': 'Berserk Raviente',
// 	Giadrome: 'Giaprey / Giadrome',
// };

// // TODO fill these manually
// const blacklistedMonsterNames = [
// 	'conquest-crimson-fatalis',
// 	'conquest-fatalis',
// 	'conquest-shantien',
// 	'conquest-disufiroa',
// 	'road-white-fatalis',
// 	'shiten-disufiroa',
// 	'shiten-unknown',
// 	'supremacy-doragyurosu',
// 	'supremacy-pariapuria',
// 	'supremacy-teostra',
// 	'twinhead-rajang',
// ];

// export async function GET({ params, setHeaders }) {
// 	setHeaders({
// 		'Acces-Control-Allow-Origin': '*',
// 		'Cache-Control': `public, s-maxage=${60 * 60 * 24 * 30}`,
// 	});
// 	const html = await getMonsterData(params);
// 	return json(parseMonsterData(html, params.monster));
// }

// async function getMonsterData({ monster }: RouteParams) {
// 	if (blacklistedMonsterNames.find((x) => x === monster)) {
// 		return '';
// 	}

// 	const words = monster.split('-');

// 	for (let i = 0; i < words.length; i++) {
// 		words[i] = words[i][0].toUpperCase() + words[i].substring(1);
// 	}

// 	const joinedWords = words.join('-');
// 	let sanitizedMonster = joinedWords.replaceAll('-', '_');

// 	if (
// 		Object.keys(wikiaMonsterNameMap).find(
// 			(e) => e === sanitizedMonster.toLowerCase(),
// 		)
// 	) {
// 		sanitizedMonster = wikiaMonsterNameMap[sanitizedMonster.toLowerCase()];
// 	}

// 	const resource = `https://monsterhunter.fandom.com/wiki/${sanitizedMonster}?action=edit`;
// 	const response = await fetch(resource);

// 	if (!response.ok) {
// 		throw new Error(`Failed to fetch: ${response.status}`);
// 	}

// 	console.log('yes1');

// 	return await response.text();
// }

// function parseMonsterData(html: string, monsterName: string): WikiaMonster {
// 	if (html === '') {
// 		return null;
// 	}

// 	const separatorRegex = /<br\s*\/?>/;
// 	const gameLinkRegex = /\{\{GameLink\|[^}]*\}\}/g;

// 	// Use JSDOM to parse the HTML string
// 	const dom = new JSDOM(html);
// 	const { document } = dom.window;

// 	const textareaContent =
// 		document.getElementById('wpTextbox1')?.innerText ??
// 		document.querySelector('#wpTextbox1')?.textContent ??
// 		document.querySelector('textarea')?.innerText;

// 	console.log('yes2');

// 	if (!textareaContent) {
// 		console.log(`textareaContent: ${textareaContent}`);
// 		console.log(document.getElementById('wpTextbox1'));
// 		console.log(document.querySelector('#wpTextbox1'));
// 		console.log(document.querySelector('textarea'));

// 		// todo error logging

// 		return null;
// 	}

// 	console.log('yes3');

// 	const extractField = (field: string): string => {
// 		let regex = /a/;
// 		/*
// <textarea readonly="" accesskey="," id="wpTextbox1" cols="80" rows="25" style="" class="mw-editfont-default" lang="en" dir="ltr" name="wpTextbox1">{{Monster Infobox
// |English Title     = Burning Zero Dragon
// |Monster Type      = [[Elder Dragon]]
// |Element           = {{Element|Fire}}&lt;br /&gt;{{Element|Ice}}
// |Ailments          = [[File:Status Effect-Extreme Fireblight FrontierGen Icon.png|18x18px]] [[Status Effects|Extreme Fireblight]]&lt;br /&gt;[[File:Status Effect-Extreme Iceblight FrontierGen Icon.png|18x18px]] [[Status Effects|Extreme Iceblight]]
// |Weakest to        = {{Element|Fire}}&lt;br /&gt;{{Element|Ice}}
// |Weakness Sign     = Limping
// |Habitats          = [[Historical Site]], [[Tower]]
// |Monster Size      = Large
// |Monster Relations = [[Eruzerion]]
// |Generation        = Frontier
// }}
// </textarea>
// 		*/
// 		switch (field) {
// 			case 'Element':
// 				regex = new RegExp(
// 					`^\\|${field}\\s*=\\s*(.*)(?=\\r?\\n\\|Ailments)`,
// 					'm',
// 				);
// 				break;
// 			case 'Ailments':
// 				regex = new RegExp(
// 					`^\\|${field}\\s*=\\s*(.*)(?=\\r?\\n\\|Weakest to)`,
// 					'm',
// 				);
// 				break;
// 			case 'Weakest to':
// 				regex = new RegExp(
// 					`^\\|${field}\\s*=\\s*(.*)(?=\\r?\\n\\|Weakness Sign)`,
// 					'm',
// 				);
// 				if (!textareaContent.match(regex)) {
// 					regex = new RegExp(
// 						`^\\|${field}\\s*=\\s*(.*)(?=\\r?\\n\\|Habitats)`,
// 						'm',
// 					);
// 				}
// 				break;
// 			default:
// 				regex = new RegExp(`\\|${field}\\s*=\\s*([^\\n|]+)`, 'i');
// 				break;
// 		}
// 		const match = textareaContent.match(regex);
// 		console.log(`match : ${match}`);
// 		return match ? match[1].trim() : 'Not found';
// 	};

// 	const monster: WikiaMonster = {
// 		englishTitle: extractField('English Title').split(separatorRegex),
// 		monsterType: extractField('Monster Type')
// 			.replaceAll('[[', '')
// 			.replaceAll(']]', ''),
// 		element: extractField('Element')
// 			.replaceAll('{{Element|', '')
// 			.replaceAll(gameLinkRegex, '')
// 			.replaceAll('}}', '')
// 			.trim()
// 			.split(separatorRegex),
// 		ailments: extractField('Ailments')
// 			.replaceAll('{{Status Effects|', '')
// 			.replaceAll('{{Ailments|', '')
// 			.replaceAll('{{Ailment|', '')
// 			.replaceAll('{{Status|', '')
// 			.replaceAll('[[Status Effects|', '')
// 			.replaceAll('[[Ailments|', '')
// 			.replaceAll('{[Ailment|', '')
// 			.replaceAll('[[Status|', '')
// 			.replaceAll(gameLinkRegex, '')
// 			.replaceAll('}}', '')
// 			.replaceAll(']]', '')
// 			.trim()
// 			.split(separatorRegex),
// 		// ?.match(/\[\[Status Effects\|([^\]]*)\]\]/g)
// 		// ?.map((match) => match.replace(/\[\[Status Effects\|([^\]]*)\]\]/, '$1'))
// 		// .join('&lt;br />')
// 		// .split('&lt;br />'),
// 		weakestTo: extractField('Weakest to')
// 			.replaceAll('{{Element|', '')
// 			.replaceAll(gameLinkRegex, '')
// 			.replaceAll('{{Small|(Enraged)}}', '')
// 			.replaceAll('}}', '')
// 			.trim()
// 			.split(separatorRegex),
// 		habitats: extractField('Habitats')
// 			.replaceAll('[[', '')
// 			.replaceAll(']]', '')
// 			.split(separatorRegex),
// 		monsterSize: extractField('Monster Size')
// 			.replaceAll('[[File:Gold Crown Small.png]] ', 'Gold Crown Small: ')
// 			.replaceAll('[[File:Gold Crown Large.png]] ', 'Gold Crown Large: ')
// 			.replaceAll('[[Image:Gold_Crown_Large.png]] ', 'Gold Crown Large: ')
// 			.replaceAll('[[Image:Gold_Crown_Small.png]] ', 'Gold Crown Small: ')
// 			.replaceAll('[[Image:Gold Crown Large.png]] ', 'Gold Crown Large: ')
// 			.replaceAll('[[Image:Gold Crown Small.png]] ', 'Gold Crown Small: ')
// 			.replaceAll('[[File:Silver Crown Large.png]] ', 'Silver Crown Large: ')
// 			.replaceAll('[[File:Gold_Crown_Large.png]] ', 'Gold Crown Large: ')
// 			.replaceAll('[[File:Gold_Crown_Small.png]] ', 'Gold Crown Small: ')
// 			.split(separatorRegex)
// 			.filter((e) => e !== ''),
// 		monsterRelations: extractField('Monster Relations')
// 			.replaceAll('[[', '')
// 			.replaceAll(']]', '')
// 			.split(separatorRegex)
// 			.map((monster) => wycademyMonsterNameMap[monster] || monster),
// 		generation: extractField('Generation')
// 			.replace('[[', '')
// 			.replaceAll(']]', '')
// 			.replaceAll('}}', ''),
// 	};

// 	return monster;
// }
