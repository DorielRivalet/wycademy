/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@use 'src/variables.scss' as variables;
				@use 'src/mixins.scss' as mixins;
				`,
			},
		},
	},
	plugins: [
		sveltekit(),
		visualizer({
			filename: './dist/stats.html',
			template: 'treemap', // or sunburst, network, etc.
		}),
	],
	ssr: {
		noExternal:
			process.env.NODE_ENV === 'production'
				? ['@carbon/charts', 'three']
				: ['three'],
	},
	define: {
		'process.env.NODE_ENV':
			process.env.NODE_ENV === 'production' ? '"production"' : '"development"',
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
});
