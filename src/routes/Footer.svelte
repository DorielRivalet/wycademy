<script lang="ts">
	import { LogoGithub } from 'carbon-icons-svelte';

	let settingsFill = "#000000";

	// function getGitHubIcon(themeId: string) {
	// 	switch (themeId) {
	// 		case "0":
	// 			return github_light;
	// 		default:
	// 			return github;
	// 	}
	// }

	function getSettingsFill(themeId: string): string {
		return "ff0000";
	}

	$:{
		settingsFill = getSettingsFill("themeId");
	}
</script>

<footer>
	<div class="corner">
		<a href="https://github.com/DorielRivalet/frontier-compendium">
			<LogoGithub title="Go to GitHub repository" fill={settingsFill}/>
		</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	a:hover {
		color: var(--ctp-mocha-red);
	}
</style>
