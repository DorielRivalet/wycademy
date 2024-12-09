/*
 * © 2024 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */
import svelteConfig from './svelte.config.js';

// TODO not sure if correct
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
		project: './tsconfig.json',
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	files: [
		'**/*.svelte',
		'*.svelte',
		// Add more files if you need.
		// '**/*.svelte.ts', '*.svelte.ts', '**/*.svelte.js', '*.svelte.js',
	],
	languageOptions: {
		parserOptions: {
			// Specify the `svelte.config.js`.
			svelteConfig,
		},
	},
};
