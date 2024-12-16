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

	console.log(`Received client chunk ${chunkIndex + 1}/${totalChunks}`);

	if (!chunk || !(chunk instanceof File)) {
		console.error(`Client chunk ${chunkIndex + 1}/${totalChunks} not found`);
		return json({ error: 'Invalid client chunk' }, { status: 400 });
	}

	// Convert chunk to buffer
	const chunkBuffer = Buffer.from(await chunk.arrayBuffer());

	// Store chunk in memory
	if (!uploadedChunks[fileName]) {
		uploadedChunks[fileName] = Buffer.alloc(0);
	}

	// Append this chunk
	uploadedChunks[fileName] = Buffer.concat([
		uploadedChunks[fileName],
		chunkBuffer,
	]);

	// Check if all chunks are received
	if (uploadedChunks[fileName].length === Number(fileSize)) {
		console.log(
			`Received all client chunks (${chunkIndex + 1}/${totalChunks})`,
		);

		return new Response(
			new ReadableStream({
				async start(controller) {
					const onProgress = (index: number, message: string) => {
						const data = { index, message };
						controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
					};

					try {
						const fullBuffer = uploadedChunks[fileName];
						const result = streamDatabaseProcessing(fullBuffer, onProgress);

						// Send final result
						// TODO send result index 0 to x, then x to same incremented range until result.length?
						controller.enqueue(`data: ${JSON.stringify({ result })}\n\n`);
						console.log(`Processed server result: valid ${result.valid}`);
						controller.close();

						// Clean up chunks
						delete uploadedChunks[fileName];
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
			`(${chunkIndex + 1}/${totalChunks}) uploaded chunks length ${uploadedChunks[fileName].length} is not file size ${Number(fileSize)}`,
		);
	}

	// Acknowledge chunk receipt
	return json({
		message: `Client chunk ${chunkIndex + 1}/${totalChunks} acknowledged`,
		status: 'partial',
	});
};
