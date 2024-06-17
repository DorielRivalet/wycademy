import { error, json, type RequestHandler } from '@sveltejs/kit';
import {
	WEBHOOK_SECRET_OVERLAY_RELEASE,
	WEBHOOK_DISCORD_URL_OVERLAY_RELEASE,
} from '$env/static/private';
import { verify } from '@octokit/webhooks-methods';
import { getReleaseNotesSummary } from '$lib/client/modules/overlay-release-notes';
import axios from 'axios';

/**TODO redis? Also techniqually speaking this can not be the latest release.*/
let latestRelease: { tag_name: string; published_at: string } | null = null; // In-memory cache for latest release info

async function sendDiscordNotification(release: {
	tag_name: string;
	published_at: string;
}) {
	const version = release.tag_name.replaceAll('.', '-');
	const description = getReleaseNotesSummary(version);

	console.log(`Version: ${version}`);
	console.log(`Description: ${description}`);

	const discordMessage = {
		content: null,
		embeds: [
			{
				title: release.tag_name,
				description: description,
				url: `https://wycademy.vercel.app/overlay/release-notes/${version}`,
				color: 9024762,
				author: {
					name: 'Wycademy',
				},
				thumbnail: {
					url: 'https://raw.githubusercontent.com/DorielRivalet/wycademy/main/src/lib/client/images/logo.png',
				},
			},
		],
		username: 'Overlay Updates',
		avatar_url:
			'https://raw.githubusercontent.com/DorielRivalet/wycademy/main/src/lib/client/images/logo.png',
		attachments: [],
	};

	console.log('Sending to Discord: ' + JSON.stringify(discordMessage));

	return await wrapWebhook(
		WEBHOOK_DISCORD_URL_OVERLAY_RELEASE,
		JSON.stringify(discordMessage),
	);
}

function wrapWebhook(webhook: string, payload: Object): Promise<void> {
	return (async function () {
		try {
			await axios.post(webhook, payload);
			console.log('Sended to Discord');
		} catch (e: any) {
			if (e.response) {
				console.error(
					`Webhook response: ${e.response.status}: ${JSON.stringify(e.response.data)}`,
				);
			} else {
				console.error(e);
			}
		}
	})();
}

function handleGitHubEvent(
	gitHubEvent: string | null,
	payload: {
		issue: {
			title: string;
			user: {
				login: string;
			};
		};
		release: {
			tag_name: string;
			published_at: string;
		};
		action: string;
	},
) {
	if (!gitHubEvent) {
		console.log('GitHub event not found');
		return;
	}

	if (gitHubEvent === 'issues') {
		const action = payload.action;
		if (action === 'opened') {
			console.log(
				`An issue was opened with this title: ${payload.issue.title}`,
			);
		} else if (action === 'closed') {
			console.log(`An issue was closed by ${payload.issue.user.login}`);
		} else {
			console.log(`Unhandled action for the issue event: ${action}`);
		}
	} else if (gitHubEvent === 'ping') {
		console.log('GitHub sent the ping event');
	} else if (gitHubEvent === 'release') {
		const action = payload.action;
		// if (action === 'published') {
		latestRelease = {
			tag_name: payload.release.tag_name,
			published_at: payload.release.published_at,
		};
		// console.log(`A release was published: ${githubEvent} ${action}`);
		//};
		console.log(`A release was changed: ${gitHubEvent} ${action}`);
		sendDiscordNotification(latestRelease);
	} else {
		console.log(`Unhandled event: ${gitHubEvent}`);
	}
}

const handleWebhook = async (req: Request) => {
	const signature = req.headers.get('x-hub-signature-256');
	if (!signature) {
		error(401, 'Unauthorized');
	}

	const body = await req.text();

	if (!(await verify(WEBHOOK_SECRET_OVERLAY_RELEASE, body, signature))) {
		error(401, 'Unauthorized');
	}

	const gitHubEvent = req.headers.get('x-github-event');
	const payload = JSON.parse(body);

	handleGitHubEvent(gitHubEvent, payload);

	return new Response(null, { status: 200 });
};

export const POST: RequestHandler = async ({ request }) => {
	// if (latestRelease){
	// 	return new Response(null, { status: 304 });
	// }
	return await handleWebhook(request);
};

export const GET: RequestHandler = () => {
	const res = json(latestRelease);
	const apiTimeout = 60 * 2;

	res.headers.set('cache-control', `max-age=0, s-maxage=${apiTimeout}`);
	return res;
};
