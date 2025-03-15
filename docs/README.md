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

Some packages may appear in the `notAllowed` array, double-check if this tooling did not detect open-source licenses. The license may be linked in the `README.md`, `package.json` or other places. You can also run `npx license-checker --summary`.**If a package is GPL or AGPL (but not LGPL), try to find alternatives.**

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
