<script lang="ts">
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';
	import {
		type NavigationItem,
		type CategoryInfo,
		getRoutesSection,
	} from '../modules/routes';
	import { browser } from '$app/environment';
	import SkeletonPlaceholder from 'carbon-components-svelte/src/SkeletonPlaceholder/SkeletonPlaceholder.svelte';

	export let pageUrlPathName: string | null;

	function getCurrentCategoryInfo(
		section: CategoryInfo[] | null,
		url: string,
	): CategoryInfo | null {
		if (section === null) {
			return null;
		}

		// Extract the category segment from the URL
		const categorySegment = url.split('/')[2]; // This gets the segment after /section-name/

		// Find the category in section
		const category = section.find((categoryObj) => {
			const categoryLinkSegment = categoryObj.category.link.split('/')[2];
			return categoryLinkSegment === categorySegment;
		});

		return category ? category : null;
	}

	function checkIfCategoryHubPage(url: string) {
		// Regex to match /abc/123 pattern
		const categoryHubPattern = /^\/[^\/]+\/[^\/]+$/;
		return categoryHubPattern.test(url);
	}

	// Function to get the index of the current page in its category
	function getCurrentPageIndex(
		isCategoryHubPage: boolean,
		categoryInfo: CategoryInfo | null,
		cleanedUrlPath: string,
	) {
		if (
			isCategoryHubPage ||
			!categoryInfo ||
			cleanedUrlPath === '' ||
			!cleanedUrlPath
		) {
			return null;
		}

		const foundIndex = categoryInfo.pages.findIndex(
			(page) => page.link === cleanedUrlPath,
		);
		return foundIndex >= 0 ? foundIndex : null;
	}

	// Function to get the next link
	function getNextPage(
		routesSection: CategoryInfo[] | null,
		categoryIndex: number | null,
		pageIndex: number | null,
	): { categoryInfo: CategoryInfo; navigationItem: NavigationItem } | null {
		if (!routesSection || categoryIndex === null) {
			return null;
		}

		const currentCategory = routesSection[categoryIndex];

		// last category and last page
		if (
			categoryIndex >= routesSection.length - 1 &&
			pageIndex !== null &&
			pageIndex === currentCategory.pages.length - 1
		) {
			return null;
		}

		// last category and hub page
		if (categoryIndex >= routesSection.length - 1 && pageIndex === null) {
			return {
				categoryInfo: currentCategory,
				navigationItem: currentCategory.pages[0],
			};
		}

		// last category and other pages
		if (
			categoryIndex === routesSection.length - 1 &&
			pageIndex !== null &&
			pageIndex >= 0 &&
			pageIndex < currentCategory.pages.length - 1
		) {
			return {
				categoryInfo: currentCategory,
				navigationItem: currentCategory.pages[pageIndex + 1],
			};
		}

		// not the last category in the routes section
		if (categoryIndex < routesSection.length - 1) {
			const nextCategory = routesSection[categoryIndex + 1];

			if (pageIndex === null) {
				// hub page that is not the last one
				return {
					categoryInfo: currentCategory,
					navigationItem: currentCategory.pages[0],
				};
			} else if (pageIndex === currentCategory.pages.length - 1) {
				// last page of a category
				return {
					categoryInfo: nextCategory,
					navigationItem: nextCategory.category,
				};
			} else if (
				pageIndex !== null &&
				pageIndex >= 0 &&
				pageIndex < currentCategory.pages.length - 1
			) {
				// a page that is not the last in a category
				return {
					categoryInfo: currentCategory,
					navigationItem: currentCategory.pages[pageIndex + 1],
				};
			}
		}

		// category not found in the routes section
		return null;
	}

	// Function to get the previous link
	function getPreviousPage(
		routesSection: CategoryInfo[] | null,
		categoryIndex: number | null,
		pageIndex: number | null,
	): { categoryInfo: CategoryInfo; navigationItem: NavigationItem } | null {
		if (!routesSection || categoryIndex === null) {
			return null;
		}

		// first entry in the routes section
		if (categoryIndex === 0 && pageIndex === null) {
			return null;
		}

		const currentCategory = routesSection[categoryIndex];

		// first category and first page
		if (categoryIndex === 0 && pageIndex === 0) {
			return {
				categoryInfo: currentCategory,
				navigationItem: currentCategory.category,
			};
		}

		// first category and not the first page
		if (categoryIndex === 0 && pageIndex && pageIndex > 0) {
			return {
				categoryInfo: currentCategory,
				navigationItem: currentCategory.pages[pageIndex - 1],
			};
		}

		// not the first entry in the routes section
		if (categoryIndex > 0) {
			const previousCategory = routesSection[categoryIndex - 1];

			if (pageIndex === null) {
				// hub page that is not the first one
				return {
					categoryInfo: previousCategory,
					navigationItem:
						previousCategory.pages[previousCategory.pages.length - 1],
				};
			} else if (pageIndex === 0) {
				// first page of a category
				return {
					categoryInfo: currentCategory,
					navigationItem: currentCategory.category,
				};
			} else if (pageIndex !== null && pageIndex > 0) {
				// a page that is not the first in a category
				return {
					categoryInfo: currentCategory,
					navigationItem: currentCategory.pages[pageIndex - 1],
				};
			}
		}

		// category not found in the routes section
		return null;
	}

	function getCurrentCategoryIndex(
		section: CategoryInfo[] | null,
		currentCategory: CategoryInfo | null,
	) {
		if (currentCategory === null || section === null) {
			return null;
		}

		const foundIndex = section.findIndex(
			(e) => e.category.name === currentCategory.category.name,
		);
		return foundIndex >= 0 ? foundIndex : null;
	}

	const cleanedUrlPath = pageUrlPathName || '/';
	const routesSection = getRoutesSection(cleanedUrlPath);
	const currentCategoryInfo = getCurrentCategoryInfo(
		routesSection,
		cleanedUrlPath,
	);
	const isCategoryHubPage = checkIfCategoryHubPage(cleanedUrlPath);
	const currentCategoryIndex = getCurrentCategoryIndex(
		routesSection,
		currentCategoryInfo,
	);
	const currentPageIndex = getCurrentPageIndex(
		isCategoryHubPage,
		currentCategoryInfo,
		cleanedUrlPath,
	);

	const nextPage = getNextPage(
		routesSection,
		currentCategoryIndex,
		currentPageIndex,
	);
	const previousPage = getPreviousPage(
		routesSection,
		currentCategoryIndex,
		currentPageIndex,
	);
</script>

{#if browser}
	<div class="container">
		{#if previousPage}
			<div class="tile-wrapper">
				<ClickableTile href={previousPage.navigationItem.link} class="tile">
					<p class="previous">Previous</p>
					<p class="title">
						<strong>{previousPage.categoryInfo.category.name}</strong
						>{previousPage.navigationItem.name ===
						previousPage.categoryInfo.category.name
							? ''
							: `: ${previousPage.navigationItem.name}`}
					</p>
				</ClickableTile>
			</div>
		{/if}
		{#if nextPage}
			<div class="tile-wrapper">
				<ClickableTile href={nextPage.navigationItem.link} class="tile">
					<p class="next">Next</p>
					<p class="title">
						<strong>{nextPage.categoryInfo.category.name}</strong>{nextPage
							.navigationItem.name === nextPage.categoryInfo.category.name
							? ''
							: `: ${nextPage.navigationItem.name}`}
					</p>
				</ClickableTile>
			</div>
		{/if}
	</div>
{:else}
	<SkeletonPlaceholder style="display: flex; width: 100%; min-height: 8rem;" />
{/if}

<style lang="scss">
	.container {
		min-height: 8rem;
		display: flex;
		width: 100%;
	}

	.title {
		font-size: 1.5em;
		margin-bottom: 2rem;
	}

	.tile-wrapper {
		flex-grow: 1;
		width: 0; // This ensures that the wrapper does not grow beyond its content size
	}
</style>
