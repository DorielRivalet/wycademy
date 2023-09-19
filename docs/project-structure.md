# Project structure

See also: [documentation](https://kit.svelte.dev/docs/project-structure).

A typical SvelteKit project looks like this:

```bash
my-project/
├ src/
│ ├ lib/
│ │ ├ server/
│ │ │ └ [your server-only lib files]
│ │ └ [your lib files]
│ ├ params/
│ │ └ [your param matchers]
│ ├ routes/
│ │ └ [your routes]
│ ├ app.html
│ ├ error.html
│ ├ hooks.client.js
│ └ hooks.server.js
├ static/
│ └ [your static assets]
├ tests/
│ └ [your tests]
├ package.json
├ svelte.config.js
├ tsconfig.json
└ vite.config.js
```

You'll also find common files like `.gitignore` and `.npmrc` (and `.prettierrc` and `.eslintrc.cjs` and so on, if you chose those options when running `npm create svelte@latest`).

## Project files

### src

The `src` directory contains the meat of your project. Everything except `src/routes` and `src/app.html` is optional.

- `lib` contains your library code (utilities and components), which can be imported via the `$lib` alias, or packaged up for distribution using `svelte-package`
  - `server` contains your server-only library code. It can be imported by using the `$lib/server` alias. SvelteKit will prevent you from importing these in client code.
- `params` contains any param matchers your app needs
- `routes` contains the routes of your application. You can also colocate other components that are only used within a single route here
- `app.html` is your page template — an HTML document containing the following placeholders:
  - `%sveltekit.head%` — `<link>` and `<script>` elements needed by the app, plus any `<svelte:head>` content
  - `%sveltekit.body%` — the markup for a rendered page. This should live inside a `<div>` or other element, rather than directly inside `<body>`, to prevent bugs caused by browser extensions injecting elements that are then destroyed by the hydration process. SvelteKit will warn you in development if this is not the case
  - `%sveltekit.assets%` — either `paths.assets`, if specified, or a relative path to `paths.base`
  - `%sveltekit.nonce%` — a CSP nonce for manually included links and scripts, if used
  - `%sveltekit.env.[NAME]%` - this will be replaced at render time with the `[NAME]` environment variable, which must begin with the `publicPrefix` (usually `PUBLIC_`). It will fallback to `''` if not matched.
- `error.html` is the page that is rendered when everything else fails. It can contain the following placeholders:
  - `%sveltekit.status%` — the HTTP status
  - `%sveltekit.error.message%` — the error message
- `hooks.client.js` contains your client hooks
- `hooks.server.js` contains your server hooks
- `service-worker.js` contains your service worker

(Whether the project contains `.js` or `.ts` files depends on whether you opt to use TypeScript when you create your project. You can switch between JavaScript and TypeScript in the documentation using the toggle at the bottom of this page.)

If you added [Vitest](https://vitest.dev) when you set up your project, your unit tests will live in the `src` directory with a `.test.js` extension.

### static

Any static assets that should be served as-is, like `robots.txt` or `favicon.png`, go in here.

### tests

If you added [Playwright](https://playwright.dev/) for browser testing when you set up your project, the tests will live in this directory.

### package.json

Your `package.json` file must include `@sveltejs/kit`, `svelte` and `vite` as `devDependencies`.

When you create a project with `npm create svelte@latest`, you'll also notice that `package.json` includes `"type": "module"`. This means that `.js` files are interpreted as native JavaScript modules with `import` and `export` keywords. Legacy CommonJS files need a `.cjs` file extension.

### svelte.config.js

This file contains your Svelte and SvelteKit configuration.

### tsconfig.json

This file (or `jsconfig.json`, if you prefer type-checked `.js` files over `.ts` files) configures TypeScript, if you added typechecking during `npm create svelte@latest`. Since SvelteKit relies on certain configuration being set a specific way, it generates its own `.svelte-kit/tsconfig.json` file which your own config `extends`.

### vite.config.js

A SvelteKit project is really just a [Vite](https://vitejs.dev) project that uses the `@sveltejs/kit/vite` plugin, along with any other [Vite configuration](https://vitejs.dev/config/).

## Other files

### .svelte-kit

As you develop and build your project, SvelteKit will generate files in a `.svelte-kit` directory (configurable as `outDir`). You can ignore its contents, and delete them at any time (they will be regenerated when you next `dev` or `build`).

### .alexignore

For ignores files when using alex.

### .alexrc

The configuration for alex, a profanity checker.

### .czrc

The configuration for commitizen, a `cli` tool for making commits.

### .eslintignore

For ignoring files when using ESlint.

### .eslintrc.cjs

The configuration for ESlint, a static code analysis tool.

### .gitattributes

A text file that gives `attributes` to pathnames.

### .gitignore

For ignoring files when using git.

### .licenserc.yaml

The configuration for the license comment at the top of a file.

### .npmrc

The configuration for node package manager.

### .prettierignore

For ignoring files when using Prettier.

### .prettierrc

The configuration for Prettier, an opinionated code formatter.

### .release-it.json

The configuration for releases and versioning.

### CHANGELOG.md

The changelog of the project.

### CODEOWNERS

The file that defines individuals or teams that are responsible for code in a repository.

### commitlint.config.cjs

The configuration for commitlint, a linter for commits.

### LICENSE.md

The license of the project.

### package-lock.json

A file that is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

This file is intended to be committed into source repositories, and serves various purposes:

- Describe a single representation of a dependency tree such that teammates, deployments, and continuous integration are guaranteed to install exactly the same dependencies.

- Provide a facility for users to "time-travel" to previous states of node_modules without having to commit the directory itself.

- Facilitate greater visibility of tree changes through readable source control diffs.

- Optimize the installation process by allowing npm to skip repeated metadata resolutions for previously-installed packages.

- As of npm v7, lockfiles include enough information to gain a complete picture of the package tree, reducing the need to read package.json files, and allowing for significant performance improvements.

See also: [documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-lock-json).

### playwright.config.ts

The configuration for Playwright, an End-to-End testing tool.

### README.md

The README for end-users.

### .github

The folder for handling the GitHub repository (templates, dependencies, workflows, etc.).

### .husky

The folder for handling git hooks.

### docs

The folder for technical documentation.

### scripts

The folder for general scripts.

## .editorconfig

A file to maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

See also: [documentation](https://editorconfig.org/).
