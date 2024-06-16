import { error, json, type RequestHandler } from '@sveltejs/kit';
import { WEBHOOK_SECRET_OVERLAY_RELEASE } from '$env/static/private';
import { verify } from '@octokit/webhooks-methods';

/**TODO redis? Also techniqually speaking this can not be the latest release.*/
let latestRelease: { tag_name: string; published_at: string } | null = null; // In-memory cache for latest release info

const apiTimeout = 60 * 2;

const handleWebhook = async (req: Request) => {
	const signature = req.headers.get('x-hub-signature-256');
	if (!signature) {
		error(401, 'Unauthorized');
	}

	const body = await req.text();

	if (!(await verify(WEBHOOK_SECRET_OVERLAY_RELEASE, body, signature))) {
		error(401, 'Unauthorized');
	}

	const githubEvent = req.headers.get('x-github-event');
	const payload = JSON.parse(body);

	if (githubEvent === 'issues') {
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
	} else if (githubEvent === 'ping') {
		console.log('GitHub sent the ping event');
	} else if (githubEvent === 'release') {
		const action = payload.action;
		// if (action === 'published') {
		latestRelease = {
			tag_name: payload.release.tag_name,
			published_at: payload.release.published_at,
		};
		// console.log(`A release was published: ${githubEvent} ${action}`);
		//};
		console.log(`A release was changed: ${githubEvent} ${action}`);
	} else {
		console.log(`Unhandled event: ${githubEvent}`);
	}

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
	res.headers.set('cache-control', `max-age=0, s-maxage=${apiTimeout}`);
	return res;
};
