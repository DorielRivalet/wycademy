/*
 * © 2024 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */
import { error } from '@sveltejs/kit';
import { capitalizeFirstLetter } from '$lib/client/modules/strings';
import isEqual from 'lodash/isEqual';
import { monsterInfo } from '../frontier/monsters';

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

function generateMonsterUsernames() {
	const frontierMonsters = monsterInfo
		.filter(
			(e) =>
				!e.displayName.includes(' ') &&
				!e.displayName.includes('-') &&
				!e.displayName.includes('/') &&
				!e.displayName.includes('UNKNOWN') &&
				!e.displayName.includes('Cactus'),
		)
		.map((e) => {
			return e.displayName;
		});

	const secondGenMonsters = [
		// 'Giaprey',
		'Giadrome',
		'Ukanlos',
	];

	const thirdGenMonsters = [
		'Altaroth',
		'Baggi',
		'Bnahabra',
		'Delex',
		'Epioth',
		'Giggi',
		'Jaggi',
		'Jaggia',
		'Ludroth',
		'Rhenoplos',
		'Uroktor',
		'Agnaktor',
		'Barroth',
		'Gigginox',
		'Gobul',
		'Lagiacrus',
		'Qurupeco',
		'Alatreon',
		'Ceadeus',
		'Gargwa',
		'Slagtoth',
		'Wroggi',
		'Arzuros',
		'Duramboros',
		'Lagombi',
		'Nibelsnarf',
		'Volvidon',
	];

	const fourthGenMonsters = [
		'Konchu',
		'Zamite',
		'Najarala',
		'Nerscylla',
		'Seltas',
		'Tetsucabra',
		'Zamtrios',
		'Dalamadur',
		'Seregios',
		'Gogmazios',
		'Maccao',
		'Moofah',
		'Larinoth',
		'Astalos',
		'Gammoth',
		'Glavenus',
		'Malfestio',
		'Mizutsune',
		'Nakarkos',
		'Valstrax',
	];

	const fifthGenMonsters = [
		'Barnos',
		'Gajalaka',
		'Gajau',
		'Gastodon',
		'Girros',
		'Grimalkyne',
		'Jagras',
		'Kestodon',
		'Mernos',
		'Noios',
		'Raphinos',
		'Shamos',
		'Anjanath',
		'Bazelgeuse',
		'Dodogama',
		'Jyuratodus',
		'Legiana',
		'Odogaron',
		'Paolumu',
		'Radobaan',
		'Nergigante',
		'Boaboa',
		'Cortos',
		'Wulg',
		'Banbaro',
		'Beotodus',
		'Namielle',
		'Velkhana',
		'Bombadgy',
		'Izuchi',
		'Rachnoid',
		'Aknosom',
		'Almudron',
		'Bishaten',
		'Magnamalo',
		'Somnacanth',
		'Tetranadon',
		'Boggi',
		'Gowngoat',
		'Pyrantula',
		'Garangolm',
		'Lunagaron',
		'Gaismagorm',
		'Malzeno',
	];

	const sixthGenMonsters = [
		'Ceratonoth',
		'Dalthydon',
		'Ajarakan',
		'Arkveld',
		'Balahara',
		'Chatacabra',
		'Doshaguma',
		'Quematrice',
		'Rompopolo',
	];

	const allMonsters = [
		...frontierMonsters,
		...secondGenMonsters,
		...thirdGenMonsters,
		...fourthGenMonsters,
		...fifthGenMonsters,
		...sixthGenMonsters,
	];
	const allOrderedMonsters = allMonsters.sort();

	return [...new Set(allOrderedMonsters)];
}

export type UsernameMonsterType = '' | 'Zenith' | 'Supremacy' | 'Musou';

export const usernames: { types: UsernameMonsterType[]; monsters: string[] } = {
	types: ['', 'Zenith', 'Supremacy', 'Musou'],
	monsters: generateMonsterUsernames(),
};

interface ValidationError {
	code: number;
	message: string;
}

// Username validation errors
const USERNAME_ERRORS: { [index: string]: ValidationError } = {
	TOO_LONG: {
		code: 400,
		message: 'Username exceeds maximum length of 32 characters',
	},
	INVALID_FORMAT: { code: 400, message: 'Invalid username format' },
	INVALID_NUMBER: { code: 400, message: 'Number must be between 0000-9999' },
	INVALID_TYPE: { code: 400, message: 'Invalid username type' },
	INVALID_MONSTER: { code: 400, message: 'Invalid monster name' },
	INVALID_PARTS: { code: 400, message: 'Invalid number of parts in username' },
} as const;

// Validate number suffix (0000-9999)
function validateNumberSuffix(numberStr: string): boolean {
	// Check that it's exactly 4 characters
	if (numberStr.length !== 4) {
		return false;
	}

	// Check that it's all digits
	if (!/^\d{4}$/.test(numberStr)) {
		return false;
	}

	// Parse and check range
	const num = parseInt(numberStr);
	return num >= 0 && num <= 9999;
}

// Validate monster name
function validateMonsterName(name: string): boolean {
	return usernames.monsters.includes(capitalizeFirstLetter(name));
}

// Validate type name
function validateTypeName(type: string): boolean {
	return usernames.types.includes(capitalizeFirstLetter(type));
}

// Main validation function
export function validateUsername(username: string): void {
	// Check length
	if (!username || username.length > 32) {
		error(USERNAME_ERRORS.TOO_LONG.code, USERNAME_ERRORS.TOO_LONG.message);
	}

	// Split into parts
	const parts = username.split('-');
	if (parts.length < 2 || parts.length > 3) {
		error(
			USERNAME_ERRORS.INVALID_PARTS.code,
			USERNAME_ERRORS.INVALID_PARTS.message,
		);
	}

	// Validate number suffix
	const numberPart = parts[parts.length - 1];
	if (!validateNumberSuffix(numberPart)) {
		error(
			USERNAME_ERRORS.INVALID_NUMBER.code,
			USERNAME_ERRORS.INVALID_NUMBER.message,
		);
	}

	if (parts.length === 2) {
		// Format: monster-number
		if (!validateMonsterName(parts[0])) {
			error(
				USERNAME_ERRORS.INVALID_MONSTER.code,
				USERNAME_ERRORS.INVALID_MONSTER.message,
			);
		}
	} else if (parts.length === 3) {
		// Format: type-monster-number
		if (!validateTypeName(parts[0])) {
			error(
				USERNAME_ERRORS.INVALID_TYPE.code,
				USERNAME_ERRORS.INVALID_TYPE.message,
			);
		}
		if (!validateMonsterName(parts[1])) {
			error(
				USERNAME_ERRORS.INVALID_MONSTER.code,
				USERNAME_ERRORS.INVALID_MONSTER.message,
			);
		}
	}
}

// Test if a username matches the exact pattern (for strict comparison)
export function isValidUsername(username: string): boolean {
	try {
		validateUsername(username);
		return true;
	} catch {
		return false;
	}
}

// Test if two usernames are equivalent (case-insensitive)
export function areUsernamesEqual(
	username1: string,
	username2: string,
): boolean {
	return isEqual(username1.toLowerCase(), username2.toLowerCase());
}

// Helper function to ensure number is zero-padded
export function formatUsernameNumber(num: number): string {
	return num.toString().padStart(4, '0');
}
