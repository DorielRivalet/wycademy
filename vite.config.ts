/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env.NODE_ENV':
			process.env.NODE_ENV === 'production' ? '"production"' : '"development"',
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
});
