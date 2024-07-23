import { browser } from '$app/environment';
import { domToPng } from 'modern-screenshot';
import slugify from 'slugify';

export function downloadDomAsPng(id: string, filePrefix: string) {
	if (!browser) return;
	const node = document.getElementById(id);
	if (!node) return;
	domToPng(node, { quality: 1 }).then((dataUrl) => {
		const link = document.createElement('a');
		link.download = `${slugify(`${filePrefix}-${new Date().toISOString()}.png`)}`;
		link.href = dataUrl;
		link.click();
	});
}
