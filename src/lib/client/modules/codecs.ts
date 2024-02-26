export const stringToBase64 =
	typeof Buffer !== 'undefined'
		? (str: string) => Buffer.from(str).toString('base64')
		: (str: string) =>
				btoa(
					new TextEncoder()
						.encode(str)
						.reduce((acc, byte) => acc + String.fromCharCode(byte), ''),
				);

export const base64ToString =
	typeof Buffer !== 'undefined'
		? (str: string) => Buffer.from(str, 'base64').toString()
		: (str: string) =>
				new TextDecoder().decode(
					Uint8Array.from(atob(str), (c) => c.charCodeAt(0)),
				);
