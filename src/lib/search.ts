import FlexSearch from 'flexsearch';

export type SearchResult = {
	content: string[];
	slug: string;
	title: string;
	category: SearchItemCategory;
	id: number;
	hex: string;
	originalTitle: string;
};

export type SearchItem = {
	title: string;
	slug: string;
	content: string;
	category: SearchItemCategory;
	id: number;
	hex: string;
};

export type SearchItemCategory =
	| 'Monster'
	| 'Armor'
	| 'Skill'
	| 'Sigil'
	| 'Item'
	| 'Tool'
	| 'Guide'
	| 'Event'
	| 'Support'
	| 'Weapon'
	| 'User'
	| 'Other'
	| 'All';

let postsIndex: FlexSearch.Index;
let posts: SearchItem[];

export function createPostsIndex(data: SearchItem[]) {
	postsIndex = new FlexSearch.Index({ tokenize: 'forward' });

	data.forEach((post, i) => {
		const item = `${post.title} ${post.content}`;
		postsIndex.add(i, item);
	});

	posts = data;
}

export function searchPostsIndex(
	searchTerm: string,
	scope: SearchItemCategory,
): SearchResult[] {
	if (searchTerm === '' || searchTerm === undefined) {
		return [];
	}
	const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const results = postsIndex.search(match);
	const indexedResults = results.map((index) => posts[index as number]);
	const mappedResults = indexedResults.map(
		({ slug, title, content, category, id, hex }) => {
			return {
				slug,
				title: replaceTextWithMarker(title, match),
				originalTitle: title,
				content: getMatches(content, match),
				category,
				id,
				hex,
			};
		},
	);

	if (scope === 'All') {
		return mappedResults;
	} else {
		return mappedResults.filter((result) => result.category === scope) ?? [];
	}
}

function replaceTextWithMarker(text: string, match: string) {
	const regex = new RegExp(match, 'gi');
	return text.replaceAll(regex, (match) => `<strong>${match}</strong>`);
}

function getMatches(text: string, searchTerm: string, limit = 1) {
	const regex = new RegExp(searchTerm, 'gi');
	const indexes = [];
	let matches = 0;
	let match;

	while ((match = regex.exec(text)) !== null && matches < limit) {
		indexes.push(match.index);
		matches++;
	}

	if (text === '' || text === undefined) {
		return [];
	}

	return indexes.map((index) => {
		const start = index - 20;
		const end = index + 80;
		const excerpt = text.substring(start, end).trim();
		return `...${replaceTextWithMarker(excerpt, searchTerm)}...`;
	});
}
