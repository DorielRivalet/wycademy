// src/lib/db/jwt.ts
import { jwtDecode, type JwtPayload } from 'jwt-decode';

export function decode(accessToken: string) {
	try {
		return jwtDecode<JwtPayload & { role: string }>(accessToken);
	} catch (error) {
		return { role: 'anon' } as JwtPayload & { role: string };
	}
}
