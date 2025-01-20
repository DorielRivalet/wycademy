// src/routes/quest-viewer/upload/[id]/+server.ts
import { json, type RequestHandler } from '@sveltejs/kit';
import { streamDatabaseProcessing } from '$lib/server/sqlite';
import { UploadStore } from '../upload-store';
import { error } from '@sveltejs/kit';
import { RateLimiter } from 'sveltekit-rate-limiter/server';

const limiter = new RateLimiter({
	IP: [1000, 'h'], // IP address limiter
	IPUA: [120, 'm'], // IP + User Agent limiter
});

// Temporary file storage for chunks
// TODO to supabase storage
// const uploadedChunks: Record<string, Buffer> = {};
const uploadStore = new UploadStore();

export const POST: RequestHandler = async (event) => {
	// Every call to isLimited counts as a hit towards the rate limit for the event.
	if (await limiter.isLimited(event)) error(429);
	const data = await event.request.formData();
	const chunk = data.get('chunk');
	const fileSize = parseInt(data.get('fileSize') as string);
	const chunkIndex = parseInt(data.get('chunkIndex') as string);
	const totalChunks = parseInt(data.get('totalChunks') as string);
	const uploadId = data.get('uploadId') as string; // Unique ID for the upload session

	// TODO limit concurrent uploads to 2 users max?

	console.log(
		`Received client chunk ${chunkIndex + 1}/${totalChunks} for uploadId: ${uploadId}`,
	);

	// const uniqueKey = `${uploadId}`; // Unique key for this upload

	if (!chunk || !(chunk instanceof File)) {
		console.error(
			`Client chunk ${chunkIndex + 1}/${totalChunks} not found for uploadId: ${uploadId}`,
		);
		uploadStore.delete(uploadId);
		return json(
			{ error: `Invalid client chunk for uploadId: ${uploadId}` },
			{ status: 400 },
		);
	}
	try {
		// Convert chunk to buffer
		const chunkBuffer = Buffer.from(await chunk.arrayBuffer());
		uploadStore.add(uploadId, chunkBuffer, fileSize);

		// Store chunk in memory
		// if (!uploadedChunks[uniqueKey]) {
		// 	uploadedChunks[uniqueKey] = Buffer.alloc(0);
		// }

		// // Append this chunk
		// uploadedChunks[uniqueKey] = Buffer.concat([
		// 	uploadedChunks[uniqueKey],
		// 	chunkBuffer,
		// ]);

		// Check if all chunks are received
		if (chunkIndex + 1 === totalChunks) {
			// console.log(
			// 	`Received all client chunks (${chunkIndex + 1}/${totalChunks})`,
			// );
			console.log(
				`Final chunk received (${chunkIndex + 1}/${totalChunks}) for uploadId: ${uploadId}`,
			);

			const fullBuffer = uploadStore.get(uploadId);

			if (!fullBuffer || fullBuffer.length !== fileSize) {
				uploadStore.delete(uploadId);
				return json(
					{ error: `Incomplete file upload for uploadId: ${uploadId}` },
					{ status: 400 },
				);
			}

			return new Response(
				new ReadableStream({
					async start(controller) {
						const onProgress = (index: number, message: string) => {
							const data = { index, message };
							controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
						};

						try {
							const result = streamDatabaseProcessing(fullBuffer, onProgress);

							// Send final result
							// TODO send result index 0 to x, then x to same incremented range until result.length?
							controller.enqueue(`data: ${JSON.stringify({ result })}\n\n`);
							console.log(`Processed server result: valid ${result.valid}`);
							console.log(`Quests processed: ${result.speedrunInfo?.length}`);

							// Clean up chunks
							// console.log(
							// 	`Cleaning up chunks: length ${Object.keys(uploadedChunks).length}`,
							// );
							// delete uploadedChunks[uniqueKey];
							// console.log(
							// 	`Cleaned up chunks: length ${Object.keys(uploadedChunks).length}`,
							// );
						} catch (err) {
							controller.enqueue(
								`data: ${JSON.stringify({ error: err.message })}\n\n`,
							);
							console.error(`Could not process server result: ${err.message}`);
						} finally {
							uploadStore.delete(uploadId);
							controller.close();
						}
					},
				}),
				{
					headers: {
						'Content-Type': 'text/event-stream',
						'Cache-Control': 'no-cache',
						Connection: 'keep-alive',
					},
				},
			);
		} else {
			console.log(
				`(${chunkIndex + 1}/${totalChunks}) uploaded chunks is not file size ${Number(fileSize)} for uploadId: ${uploadId}`,
			);
		}

		// Acknowledge chunk receipt
		return json({
			message: `Client chunk ${chunkIndex + 1}/${totalChunks} acknowledged for uploadId: ${uploadId}`,
			status: 'partial',
		});
	} catch (err) {
		// Handle UploadStore errors (like too many concurrent uploads)
		uploadStore.delete(uploadId);
		return json(
			{ error: err instanceof Error ? err.message : 'Upload failed' },
			{ status: 400 },
		);
	}
};
