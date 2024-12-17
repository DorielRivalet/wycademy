// src/routes/quest-viewer/upload/+server.ts
import { json, type RequestHandler } from '@sveltejs/kit';
import { streamDatabaseProcessing } from '$lib/server/sqlite';

// Temporary file storage for chunks
const uploadedChunks: Record<string, Buffer> = {};

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.formData();
	const chunk = data.get('chunk');
	const fileSize = data.get('fileSize') as string;
	const fileName = data.get('fileName') as string;
	const chunkIndex = parseInt(data.get('chunkIndex') as string);
	const totalChunks = parseInt(data.get('totalChunks') as string);
	const uploadId = data.get('uploadId'); // Unique ID for the upload session

	console.log(
		`Received client chunk ${chunkIndex + 1}/${totalChunks} for uploadId: ${uploadId}`,
	);

	const uniqueKey = `${uploadId}-${fileName}`; // Unique key for this upload

	if (!chunk || !(chunk instanceof File)) {
		console.error(
			`Client chunk ${chunkIndex + 1}/${totalChunks} not found for uploadId: ${uploadId}`,
		);
		return json(
			{ error: `Invalid client chunk for uploadId: ${uploadId}` },
			{ status: 400 },
		);
	}

	// Convert chunk to buffer
	const chunkBuffer = Buffer.from(await chunk.arrayBuffer());

	// Store chunk in memory
	if (!uploadedChunks[uniqueKey]) {
		uploadedChunks[uniqueKey] = Buffer.alloc(0);
	}

	// Append this chunk
	uploadedChunks[uniqueKey] = Buffer.concat([
		uploadedChunks[uniqueKey],
		chunkBuffer,
	]);

	// Check if all chunks are received
	if (chunkIndex + 1 === totalChunks) {
		// console.log(
		// 	`Received all client chunks (${chunkIndex + 1}/${totalChunks})`,
		// );
		console.log(
			`Final chunk received (${chunkIndex + 1}/${totalChunks}) for uploadId: ${uploadId}`,
		);

		if (uploadedChunks[uniqueKey].length >= Number(fileSize)) {
			console.log(
				`Uploaded file size matches the expected size for uploadId: ${uploadId}.`,
			);
		} else {
			console.error(
				`Error: Uploaded file size ${uploadedChunks[uniqueKey].length} does not match expected size ${fileSize} for uploadId: ${uploadId}.`,
			);
			return json(
				{ error: `Incomplete file upload for uploadId: ${uploadId}.` },
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
						const fullBuffer = uploadedChunks[uniqueKey];
						const result = streamDatabaseProcessing(fullBuffer, onProgress);

						// Send final result
						// TODO send result index 0 to x, then x to same incremented range until result.length?
						controller.enqueue(`data: ${JSON.stringify({ result })}\n\n`);
						console.log(`Processed server result: valid ${result.valid}`);
						console.log(`Quests processed: ${result.speedrunInfo?.length}`);
						controller.close();

						// Clean up chunks
						console.log(`Cleaning up chunks: length ${uploadedChunks.length}`);
						delete uploadedChunks[uniqueKey];
						console.log(`Cleaned up chunks: length ${uploadedChunks.length}`);
					} catch (err) {
						controller.enqueue(
							`data: ${JSON.stringify({ error: err.message })}\n\n`,
						);
						console.error(`Could not process server result: ${err.message}`);
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
			`(${chunkIndex + 1}/${totalChunks}) uploaded chunks length ${uploadedChunks[uniqueKey].length} is not file size ${Number(fileSize)} for uploadId: ${uploadId}`,
		);
	}

	// Acknowledge chunk receipt
	return json({
		message: `Client chunk ${chunkIndex + 1}/${totalChunks} acknowledged for uploadId: ${uploadId}`,
		status: 'partial',
	});
};
