import { createPostsIndex, searchPostsIndex } from '$lib/search';

// listen for messages
addEventListener('message', async (e) => {
	const { type, payload } = e.data;

	if (type === 'load') {
		// get the posts data
		const posts = await fetch('/api/search').then((res) => res.json());
		// create search index
		createPostsIndex(posts);
		// send message to signal we are ready
		postMessage({ type: 'ready' });
	}

	if (type === 'search') {
		const startTime = Date.now();
		// get search term
		const searchTerm = payload.searchTerm;
		// search posts index
		const results = searchPostsIndex(searchTerm, payload.scopeFilterId);

		const endTime = Date.now();
		const searchDuration = endTime - startTime;

		// send message with results and search term
		postMessage({
			type: 'results',
			payload: { results, searchTerm, searchDuration },
		});
	}
});
