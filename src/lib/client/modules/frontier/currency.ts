import CurrencyPoints from '$lib/client/images/currency/points.webp';
import CurrencyG from '$lib/client/images/currency/g.webp';
import CurrencyGg from '$lib/client/images/currency/gg.webp';
import CurrencyGzenny from '$lib/client/images/currency/g-zenny.webp';
import CurrencyZenny from '$lib/client/images/currency/zenny.webp';
import CurrencyMesfezPoints from '$lib/client/images/currency/mezfes-points.webp';
import CurrencyRoadPoints from '$lib/client/images/currency/road-points.webp';
import type { ComponentType, SvelteComponent } from 'svelte';
import Gacha from '$lib/client/components/frontier/icon/Gacha.svelte';

export type FrontierCurrencyAcronym =
	| 'GCP'
	| 'CP'
	| 'P'
	| 'RP'
	| 'Gz'
	| 'z'
	| 'FP'
	| 'MP'
	| 'GC'
	| 'GT'
	| 'LC'
	| 'g'
	| 'Gg';
export type FrontierCurrency =
	| 'GCP'
	| 'Caravan Points'
	| 'Points'
	| 'Road Points'
	| 'GZenny'
	| 'Zenny'
	| 'Frontier Points'
	| 'Mezfes Points'
	| 'Gacha Coins'
	| 'Lottery Coins'
	| 'Gacha Trial'
	| 'g'
	| 'Gg';

export const currencyInfo: {
	acronym: FrontierCurrencyAcronym;
	name: FrontierCurrency;
	icon: string | ComponentType<SvelteComponent>;
}[] = [
	{
		acronym: 'P',
		name: 'Points',
		icon: CurrencyPoints,
	},
	{
		acronym: 'GCP',
		name: 'GCP',
		icon: CurrencyPoints,
	},
	{
		acronym: 'CP',
		name: 'Caravan Points',
		icon: CurrencyPoints,
	},
	{
		acronym: 'RP',
		name: 'Road Points',
		icon: CurrencyRoadPoints,
	},
	{
		acronym: 'Gz',
		name: 'GZenny',
		icon: CurrencyGzenny,
	},
	{
		acronym: 'z',
		name: 'Zenny',
		icon: CurrencyZenny,
	},
	{
		acronym: 'FP',
		name: 'Frontier Points',
		icon: CurrencyPoints,
	},
	{
		acronym: 'MP',
		name: 'Mezfes Points',
		icon: CurrencyMesfezPoints,
	},
	{
		acronym: 'GC',
		name: 'Gacha Coins',
		icon: Gacha, // TODO: svg for the other currencies
	},
	{
		acronym: 'GT',
		name: 'Gacha Trial',
		icon: Gacha,
	},
	{
		acronym: 'LC',
		name: 'Lottery Coins',
		icon: Gacha,
	},
	{
		acronym: 'g',
		name: 'g',
		icon: CurrencyG,
	},
	{
		acronym: 'Gg',
		name: 'Gg',
		icon: CurrencyGg,
	},
];

export function getCurrencyIcon(acronym: FrontierCurrencyAcronym) {
	return (
		currencyInfo.find((e) => e.acronym === acronym)?.icon ||
		currencyInfo[0].icon
	);
}
