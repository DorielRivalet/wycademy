import { json } from '@sveltejs/kit';
import type {
	FrontierMonsterInfo,
	SearchItem,
} from '$lib/client/modules/frontier/types';
import { getUniqueMonsters } from '$lib/client/modules/frontier/functions';

export const prerender = true;

type PossibleArrays = FrontierMonsterInfo;

function mapToSearchItem(
	input: Array<PossibleArrays>,
	name: string,
): SearchItem[] {
	const result: SearchItem[] = [];
	switch (name) {
		case 'monsterInfo':
			input.map(({ displayName, link, ecology, id }) => {
				result.push({
					title: displayName,
					slug: link!,
					content: ecology!,
					id: id,
					hex: `0x${id.toString(16).toUpperCase().padStart(2, '0')}`,
					category: 'Monster',
				});
			});
			break;
		default:
			return [];
	}

	return result;
}

const uniqueMonsters = getUniqueMonsters();

export async function GET() {
	const jsonResult = [...mapToSearchItem(uniqueMonsters, 'monsterInfo')];
	return json(jsonResult);
}
