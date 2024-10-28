import { error, json, type RequestHandler } from '@sveltejs/kit';
import {
	WEBHOOK_SECRET_OVERLAY_RELEASE,
	WEBHOOK_DISCORD_URL_OVERLAY_RELEASE,
} from '$env/static/private';
import { verify } from '@octokit/webhooks-methods';
import { getReleaseNotesSummary } from '$lib/client/modules/overlay-release-notes';

async function sendDiscordNotification(release: {
	tag_name: string;
	published_at: string | null;
}) {
	let attempts = 0;
	const maxAttempts = 3; // Maximum number of retries
	let waitTime = 1000; // Initial wait time in milliseconds

	if (release.tag_name === '' || !release.published_at) {
		console.error('Failed to send Discord notification: invalid properties.');
		error(500, 'Internal Server Error');
	}

	const version = release.tag_name.replaceAll('.', '-');
	const description = getReleaseNotesSummary(version);

	console.log(`Version: ${version}`);
	console.log(`Description: ${description}`);

	if (description === 'No release notes summary found.') {
		console.error(
			'Failed to send Discord notification: no release notes summary found.',
		);
		error(500, 'Internal Server Error');
	}

	const discordMessage = {
		content: `https://wycademy.vercel.app/overlay/release-notes/latest`,
		username: 'Overlay Updates',
		avatar_url:
			'https://raw.githubusercontent.com/DorielRivalet/wycademy/main/src/lib/client/images/logo.png',
		attachments: [],
	};

	while (attempts < maxAttempts) {
		try {
			const response = await fetch(
				`${WEBHOOK_DISCORD_URL_OVERLAY_RELEASE}?wait=true`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(discordMessage),
				},
			);

			if (!response.ok) {
				error(
					500,
					`Failed to send Discord notification: ${response.statusText}`,
				);
			}

			console.log(
				'Successfully sent Discord notification',
				response.statusText,
			);
			return json(null, { status: 200 });
		} catch (error) {
			console.error(`Attempt ${attempts + 1}: ${error}`);
			attempts++;
			await new Promise((resolve) => setTimeout(resolve, waitTime));
			waitTime *= 2; // Exponential backoff
		}
	}

	console.error('Failed to send Discord notification after maximum attempts');
	error(500, 'Internal Server Error');
}

async function handleGitHubEvent(
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
		if (action === 'released') {
			if (payload.release.tag_name === '' || !payload.release.published_at) {
				console.error('Error: invalid properties.');
				error(500, 'Internal Server Error');
			}

			console.log(`A release was released: ${gitHubEvent} ${action}`);
			const latestRelease = {
				tag_name: payload.release.tag_name,
				published_at: payload.release.published_at,
			};

			sendDiscordNotification(latestRelease);
		}
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
	return await handleWebhook(request);
};
