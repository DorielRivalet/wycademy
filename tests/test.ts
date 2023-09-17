/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
  await page.goto('/about');
  await expect(
    page.getByRole('heading', { name: 'About this app' }),
  ).toBeVisible();
});
