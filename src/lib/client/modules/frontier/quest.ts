// lib/client/modules/frontier/quest.ts
export interface DatabaseTableInfo {
	name: string;
	rowCount?: number;
	rows: unknown[];
}

export interface SharedQuestData {
	id?: string; // Generated unique ID
	tables: DatabaseTableInfo[];
	createdAt: Date;
	expiresAt: Date;
}
