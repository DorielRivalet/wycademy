# Documentation

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

The commands mentioned are done in the repository's root directory unless otherwise specified.

## Commits

```bash
npm run cm
```

## Versioning

```bash
npm run release
```

## Licenses (npm)

### Configuration

- `license-report` follows the configuration of `.license-reportrc`.
- `license-report-check` follows the configuration of `.license-report-check.json`.

### Dependencies

- `pip install requests`
- `jq`, `python`

### Procedure

To get the license text, create a fine-grained access token in GitHub and write it into a local file **outside of the repository**. Adjust the access rights and expiration date of the token as needed. Then run:

```bash
export GITHUB_TOKEN_LICENSE_FILE=/path/to/token-file.txt
cd your/project
npx license-report > ./license-report.json
```

Double-check any license issues. If there is any issue, apply changes and recreate `license-report.json`. Otherwise, proceed with:

```bash
npx license-report-check --source ./license-report.json $(jq -r '.allowed[] | "--allowed=\(.)"' .license-report-check.json)
```

Some packages may appear in the `notAllowed` array, double-check if this tooling did not detect open-source licenses. The license may be linked in the `README.md`, `package.json` or other places. You can also run `npx license-checker --summary`. **If a package is GPL or AGPL (but not LGPL), try to find alternatives.**

Proceed to get the licenses' text:

```bash
npx license-downloader --source ./license-report.json --githubToken.tokenFileEnvVar GITHUB_TOKEN_LICENSE_FILE
```

You may get the message `the project 'name/name.git' does not contain a license file on github`. Note down the packages with this message and double-check if this tooling did not detect open-source licenses. The license may be linked in the `README.md`, `package.json` or other places. You can also run `npx license-checker --summary`.

Fetch the license text from the links in `license-report.ext.json` (`licenseFileLink` field) for each package into `license-report-full.json`.

```bash
python ./scripts/license-text-fetch.py
```

Lastly, if there were packages whose license text was not found, find them from the list previously written down and manually add them to `/license-report-full.json`.

The contents of `/license-report-full.json` can then be copied into `/src/lib/client/modules/license-report.ts`.

### GitHub Actions

In order to automatically check license changes when updating packages, the Dependabot checks include a workflow file, which also involves running `/scripts/compare-licenses.js`. We can check the `Compare licenses` step of the `.github/workflows/license-change-checker.yml` workflow file and verify that there are no license changes when updating the packages.

### Git History

- **Dependencies:** `pip install git-filter-repo`

If the Git history needs to be rewritten, **avoid using `git-filter-branch`** and instead consider using `git-filter-repo`.

> [!IMPORTANT]
> `git filter-repo` is very destructive, and Git prevents you from using it unless you’re working on a **fresh clone** (to avoid corrupting history unexpectedly).

If you **want to completely remove** files from all history (so they no longer exist in past commits), follow these steps:

- Close all open PRs on GitHub and warn others of the cleanup, if you have collaborators.

- **Backup Your Repository:**

Since `git filter-repo` permanently rewrites history, make a backup before proceeding. Using `--mirror` ensures you keep all branches, tags, and refs:

```sh
git clone --mirror https://github.com/YOUR_USERNAME/YOUR_REPO.git repo-backup.git
```

If anything goes wrong, you can restore the original repo from this backup.

- **Clone a Fresh Bare Copy:**

```sh
git clone --bare https://github.com/YOUR_USERNAME/YOUR_REPO.git repo-clean.git
cd repo-clean.git
```

This ensures you're working on a clean history.

- **Purge a large list of files:**

Stick all the files in some file (one per line), e.g. `../purge.txt`, and then run:

```sh
git filter-repo --sensitive-data-removal --invert-paths --paths-from-file ../purge.txt
```

- **Double-check that you've removed everything you wanted to from your repository's history:**

```bash
git log --all --full-history -- path/to/your/file
```

If the command does not return anything, then the file was deleted from all commits.

> [!NOTE]
> You can run `git log --all --full-history -- README.md` to verify you did not affect unintended files.

- **Push the Cleaned History to GitHub:**

> [!WARNING]
> The following command overwrites all history on GitHub. This is permanent, and past commits cannot be recovered unless you saved a backup.

Force push the cleaned history back to your repository:

```sh
git push --force --mirror origin
```

- After this, all contributors will need to re-clone the repository, as their local histories will no longer match.

> [!WARNING]
> This rewrites history and affects all contributors. **Any other collaborators will need to re-clone the repo.**

---

**Explanation:**

If you push the **bare repository** back to GitHub using:

```sh
git push --force --mirror origin
```

🚨 **GitHub will still show your files normally, just like before.**

Even though a **bare repository** doesn’t have a working directory on your local machine, it still contains **all commits, branches, and history**. When you push it to GitHub, GitHub will reconstruct the repository and display the files **just like before, but with the cleaned history**.

**How This Works:**

- A **bare repository** is just a Git database **without a working directory** (the actual files don’t appear in your local folder, but they still exist inside Git’s history).
- When you push it with `--mirror`, GitHub receives the **entire Git history and file structure**, just like in a normal repository.
- GitHub will then **show the latest commit's files** in the UI, as if nothing changed—except that any removed files will be completely gone from history.

**Summary:**

- ✅ After `git push --force --mirror origin`, **GitHub will still show all the files that exist in the latest commit** (but without the files you purged).
- ❌ GitHub **won't** just show a "bare" repository structure—it will function like a normal repo, just with rewritten history.

---

**Errors:**

You may receive the following errors:

```sh
! [remote rejected]   refs/pull/x/head -> refs/pull/x/head (deny updating a hidden ref)
```

Your push **mostly succeeded**, but there are some warnings and a few rejected refs. Here’s what’s happening:

These are remote rejected hidden PR refs.

**What does this mean?**

- **GitHub blocks changes to pull request refs (`refs/pull/.../head`)** because they belong to GitHub’s PR system.
- This **doesn’t affect your repository’s main branches**.
- These refs are stored on **GitHub’s side** and **aren’t part of your actual commits**.

**What should you do?**

- **Ignore these errors**—they don’t affect your main repo.
- If you want to **completely reset pull request refs**, you need to **delete and recreate the repository**, but this is **usually unnecessary**.

**Summary of Actions**:

- ✅ **Your push mostly succeeded.**
- ✅ The main repository was updated.
- ❌ Some **pull request refs were rejected**—this is normal and **can be ignored**.

**Ignore the pull request ref errors** unless you want to **reset the entire repository**, which is usually overkill. You may want to contact GitHub Support if the deleted content is still accessible.

---

**Next Steps:**

1. Leave your old repository as a backup.
2. Do a `git clone` from the new GitHub repository that has the rewritten history.
3. Work from this new repository.
4. Some tools related to Git may stop working, for example `husky`. Try re-adding the hooks, and also re-build the project with `npm install`, `npm run dev`, etc. For example:

```sh
#!/bin/sh
gitleaks detect -v && npm run commitlint ${1}
```

- You may also need to re-add the environment variables.

---

See also:

- [Removing sensitive data from a repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
- [Fresh Clone Safety Checks](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html#FRESHCLONE)
- [Purge Multiple Files](https://github.com/newren/git-filter-repo/blob/main/Documentation/examples-from-user-filed-issues.md#purge-a-large-list-of-files)
- [What to do if you expose a secret](https://blog.gitguardian.com/what-to-do-if-you-expose-a-secret/)
- [Rewriting Git History](https://blog.gitguardian.com/rewriting-git-history-cheatsheet/)
