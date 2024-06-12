import type { FrontierMonsterInfo } from '$lib/client/modules/frontier/types';
import type { SearchItem } from '$lib/search';
import { getUniqueMonsters } from '$lib/client/modules/frontier/functions';

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

export const pageInfo = [...mapToSearchItem(uniqueMonsters, 'monsterInfo')];
