/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

export function generateRandomUsername(): string {
	const prefix = randomChoice(usernames.types).toLowerCase();
	const monster = randomChoice(usernames.monsters).toLowerCase();
	const separator = prefix === '' ? '' : '-';
	return (prefix + separator + monster).replaceAll(' ', '-');
}

export function generateUsername(prefix: string, monster: string): string {
	const separator = prefix === '' ? '' : '-';
	return (prefix.toLowerCase() + separator + monster.toLowerCase()).replaceAll(
		' ',
		'-',
	);
}

function randomChoice(arr: string[]): string {
	return arr[Math.floor(arr.length * Math.random())];
}

export type UsernameMonsterType = '' | 'Zenith' | 'Supremacy' | 'Musou';

export const usernames: { types: UsernameMonsterType[]; monsters: string[] } = {
	types: ['', 'Zenith', 'Supremacy', 'Musou'],
	monsters: [
		'Rathian',
		'Fatalis',
		'Rathalos',
		'Diablos',
		'Gravios',
		'Plesioth',
		'Monoblos',
		'Kirin',
		'Rajang',
		'Chameleos',
		'Lunastra',
		'Teostra',
		'Tigrex',
		'Akantor',
		'Espinas',
		'Pariapuria',
		'Raviente',
		'Rukodiora',
		'Gogomoa',
		'Abiorugu',
		'Disufiroa',
		'Rebidiora',
		'Hyujikiki',
		'Midogaron',
		'Giaorugu',
		'Pokaradon',
		'Shantien',
		'Zerureusu',
		'Gougarf',
		'Diorex',
		'Inagami',
		'Duremudira',
		'Toridcless',
		'Zinogre',
		'Deviljho',
		'Brachydios',
		'Barioth',
		'Uragaan',
		'Guanzorumu',
		'Voljang',
		'Nargacuga',
		'Zenaserisu',
		'Amatsu',
		'Elzelion',
		'Seregios',
		'Taikun Zamuza',
		'Ukanlos',
		'Agnaktor',
		'Lagiacrus',
		'Qurupeco',
		'Alatreon',
		'Ceadeus',
		'Duramboros',
		'Lagombi',
		'Volvidon',
		'Gore Magala',
		'Shagaru Magala',
		'Najarala',
		'Zamtrios',
		'Dalamadur',
		'Gogmazios',
		'Astalos',
		'Glavenus',
		'Gammoth',
		'Mizutsune',
		'Malfestio',
		'Nakarkos',
		'Valstrax',
		'Legiana',
		'Odogaron',
		'Nergigante',
		'Velkhana',
		'Magnamalo',
		'Lunagaron',
		'Malzeno',
		'Gaismagorm',
	],
};
