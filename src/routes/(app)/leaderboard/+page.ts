/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */
console.log('page.ts');

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;
