import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import IBMPlexSans from '$lib/fonts/IBMPlexSans-Regular.ttf';
import { read } from '$app/server';
import type { RequestHandler } from '@sveltejs/kit';
import { html as toReactNode } from 'satori-html';
import TowerWeaponStatsServer from '../components/TowerWeaponStatsServer.svelte';
import { render } from 'svelte/server';

const fontData = read(IBMPlexSans).arrayBuffer();

const height = 640;
const width = 1280;

export const GET: RequestHandler = async (event) => {
	const params = event.url.searchParams;
	// ?wt=Long+Sword&w=Widdershins&ak=2928&e=180&ay=0&pn=100&ps=0&sp=0&ss=1&g=0&rs=Very+Slow&rl=Max&b1=1&b2=1&b3=1&b4=1&tc=100&tgc=140&tgg=320&tgd=30&emc=false&ayi=0&aki=4&ei=4&psi=0&pni=6&ssi=1&spi=0&mss=2&mak=10&me=10&may=10&mps=8&mpn=6&msp=8

	// ?wt=Long+Sword&w=Widdershins&ak=2928&e=180&ay=0&pn=100&ps=0&sp=0&ss=1&g=0&rs=Very+Slow&rl=Max&b1=1&b2=1&b3=1&b4=1&tc=100&tgc=140&tgg=320&tgd=30&ssi=1

	const wt = params.get('wt') ?? 'Long Sword';
	const w = params.get('w') ?? 'Widdershins';
	const ak = params.get('ak') ?? '2928';
	const e = params.get('e') ?? '180';
	const ay = params.get('ay') ?? '0';
	const pn = params.get('pn') ?? '100';
	const ps = params.get('ps') ?? '0';
	const sp = params.get('sp') ?? '0';
	const ss = params.get('ss') ?? '1';
	const g = params.get('g') ?? '0';
	const rs = params.get('rs') ?? 'Very Slow';
	const rl = params.get('rl') ?? 'Max';
	const b1 = params.get('b1') ?? '1';
	const b2 = params.get('b2') ?? '1';
	const b3 = params.get('b3') ?? '1';
	const b4 = params.get('b4') ?? '1';
	const tc = params.get('tc') ?? '100';
	const tgc = params.get('tgc') ?? '140';
	const tgg = params.get('tgg') ?? '320';
	const tgd = params.get('tgd') ?? '30';
	const ssi = params.get('ssi') ?? '1';

	const result = render(TowerWeaponStatsServer, {
		props: {
			towerWeaponName: w,
			towerWeaponType: wt,

			towerWeaponAffinityValue: Number(ay),
			towerWeaponAttackValue: Number(ak),
			towerWeaponElementValue: Number(e),
			towerWeaponParalysisValue: Number(ps),
			towerWeaponPoisonValue: Number(pn),
			towerWeaponSleepValue: Number(sp),
			towerWeaponSharpnessLevel: Number(ss),

			towerWeaponBowCharge1Level: b1,
			towerWeaponBowCharge2Level: b2,
			towerWeaponBowCharge3Level: b3,
			towerWeaponBowCharge4Level: b4,

			towerWeaponRecoilValue: rl,
			towerWeaponReloadSpeedValue: rs,
			towerWeaponGunlanceShellLevel: g,

			towerWeaponSharpnessIndex: Number(ssi),

			towerWeaponTotalCost: Number(tc),
			towerWeaponTotalGems: {
				courage: Number(tgc),
				glittering: Number(tgg),
				divine: Number(tgd),
			},
		},
	});
	const element = toReactNode(`${result.body}`);

	const svg = await satori(element, {
		fonts: [
			{
				name: 'IBM Plex Sans',
				data: await fontData,
				style: 'normal',
			},
		],
		height,
		width,
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width,
		},
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png',
		},
	});
};
