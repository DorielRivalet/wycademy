import { type Component } from 'svelte';

export interface TreeItem {
	id: string;
	text: string;
	href?: string;
	icon?: Component | string;
	nodes?: TreeItem[];
	iconProps?: Object;
}
