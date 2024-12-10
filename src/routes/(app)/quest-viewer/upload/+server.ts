// src/routes/quest-viewer/upload/+server.ts
import { json, type RequestHandler } from '@sveltejs/kit';
import { streamDatabaseProcessing } from '$lib/server/sqlite';

export const POST: RequestHandler = async ({ request }) => {
	// Get the uploaded file from the request
	const data = await request.formData();
	const file = data.get('databaseFiles');
	const maximumMegabytes = 256;

	// Validate the uploaded file
	if (!file || !(file instanceof File) || file.size === 0) {
		return json({ error: 'Invalid file uploaded' }, { status: 400 });
	}

	if (file.size >= maximumMegabytes * Math.pow(10, 6)) {
		return json(
			{ error: `File size exceeds ${maximumMegabytes}MB` },
			{ status: 400 },
		);
	}

	// Read the file as a Buffer
	const buffer = Buffer.from(await file.arrayBuffer());

	return new Response(
		new ReadableStream({
			async start(controller) {
				const onProgress = (index: number, message: string) => {
					const data = { index, message };
					controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
				};

				try {
					// Stream processing with progress updates
					const result = streamDatabaseProcessing(buffer, onProgress);

					// Send final result
					controller.enqueue(`data: ${JSON.stringify({ result })}\n\n`);
					controller.close();
				} catch (err) {
					controller.enqueue(
						`data: ${JSON.stringify({ error: err.message })}\n\n`,
					);
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
};
