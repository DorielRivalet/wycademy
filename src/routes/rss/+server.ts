// rss/+server.ts
import { type RequestHandler } from '@sveltejs/kit';

export const prerender = true;

const announcements: {
	slug: string;
	title: string;
	description: string;
	published: string | number | Date;
}[] = [
	{
		slug: '2024/07/11',
		title: 'Urgent Notice for YouTube Content Creators',
		description: `<![CDATA[<div>Since late 2023, there have been multiple reports of people receiving copyright strikes on YouTube due to the use, or apparent use, of mods or any external programs, even if they are not technically mods, in Monster Hunter games. It is unclear what specifically triggers these strikes on YouTube or why this issue has only recently emerged, although there are videos clueing into some answers. For more information, see their video policy and their video about the topic in general.</div>
		<div>YouTube has a history of being a less-than-ideal platform for archiving speedruns. Therefore, we recommend using alternatives such as archive.org for this purpose.</div>
		<a href="https://wycademy.vercel.app/support/website/announcements/2024/07/11">Read more</a>
		]]>`,
		published: 'Thu, 11 Jul 2024 17:25:53 GMT',
	},
];

export const GET: RequestHandler = () => {
	const headers = {
		'Cache-Control': `max-age=0, s-maxage=${60 * 60 * 24}`,
		'Content-Type': 'application/xml',
	};
	const body = render(announcements);
	return new Response(body, { headers: headers });
};

const render = (
	announcements: {
		slug: string;
		title: string;
		description: string;
		published: string | number | Date;
	}[],
) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<atom:link href="https://wycademy.vercel.app/rss" rel="self" type="application/rss+xml" />
<title>Wycademy</title>
<link>https://wycademy.vercel.app</link>
<description>A compendium of resources for Monster Hunter Frontier Z (MHF-Z) by Doriel Rivalet</description>
<category>Videogames</category>
<copyright>2024 Doriel Rivalet. Code licensed MIT.</copyright>
<image>
  <url>https://raw.githubusercontent.com/DorielRivalet/wycademy/main/src/lib/client/images/logo.png</url>
  <title>Wycademy</title>
  <link>https://wycademy.vercel.app</link>
</image>
<language>en-us</language>
${announcements
	.map(
		(announcement: {
			slug: string;
			title: string;
			description: string;
			published: string | number | Date;
		}) => `<item>
<guid>https://wycademy.vercel.app/support/website/announcements/${announcement.slug}</guid>
<title>${announcement.title}</title>
<link>https://wycademy.vercel.app/support/website/announcements/${announcement.slug}</link>
<description>${announcement.description}</description>
<pubDate>${new Date(announcement.published).toUTCString()}</pubDate>
</item>`,
	)
	.join('')}
</channel>
</rss>
`;
