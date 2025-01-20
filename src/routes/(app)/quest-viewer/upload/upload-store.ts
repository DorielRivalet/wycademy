export class UploadStore {
	private chunks = new Map<
		string,
		{
			buffer: Buffer;
			timestamp: number;
			size: number;
		}
	>();

	private readonly MAX_UPLOADS = 1; // Limit concurrent uploads
	private readonly CHUNK_TIMEOUT = 1000 * 60 * 10; // 10 minutes

	constructor() {
		// Cleanup every minute
		// TODO test
		setInterval(() => this.cleanup(), 60 * 1000);
	}

	add(uploadId: string, chunk: Buffer, expectedSize: number) {
		// Check upload limit
		if (this.chunks.size >= this.MAX_UPLOADS && !this.chunks.has(uploadId)) {
			throw new Error('Too many concurrent uploads');
		}

		const existing = this.chunks.get(uploadId);
		const newBuffer = existing
			? Buffer.concat([existing.buffer, chunk])
			: chunk;

		this.chunks.set(uploadId, {
			buffer: newBuffer,
			timestamp: Date.now(),
			size: expectedSize,
		});
	}

	get(uploadId: string) {
		return this.chunks.get(uploadId)?.buffer;
	}

	delete(uploadId: string) {
		this.chunks.delete(uploadId);
	}

	private cleanup() {
		const now = Date.now();
		for (const [id, data] of this.chunks.entries()) {
			if (now - data.timestamp > this.CHUNK_TIMEOUT) {
				this.chunks.delete(id);
			}
		}
	}
}
