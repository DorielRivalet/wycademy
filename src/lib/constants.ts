/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { dev } from '$app/environment';

export const title = 'Frontier Compendium';
export const author = 'Doriel Rivalet';
export const description = `A compendium of resources for Monster Hunter Frontier Z (MHF-Z) by ${author}`;
export const authorGitHub = 'https://github.com/DorielRivalet';
export const url = dev
	? 'https://localhost:5173'
	: 'https://github.com/DorielRivalet/frontier-compendium';
export const developmentStage = 'alpha';
export const siteVersion = '0.2.0';
