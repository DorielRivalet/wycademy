# Layer Architecture

See [project structure](./project-structure.md) for more information on each file.

## Application Layer

The frontend: these are your `+page.ts`, `+page.svelte`, `[name].svelte.ts`, `+layout.svelte` and `+layout.ts` files. Assume the client is able see the contents in here. Universal load functions are used in `+page.ts` and `+layout.ts`. **Do not use `$env/static/private` in these files.** With SSR (server-side rendering), the files first load in the server and then are hydrated by the client. `+page.svelte` and `+layout.svelte` contains the frotend code for rendering a page or many pages respectively.

> [!CAUTION]
> We avoid using `*.svelte.ts` files because we use SSR and instead use a combination of Svelte's Context API with LocalStorage. Otherwise the security of the app is more likely to be compromised. We also avoid using shared global variables in load functions, or in other words, we avoid sharing a global variable across multiple requests because it is unsafe in SSR.

See also:

- [Dangerous Store Behaviour with SSR](https://github.com/sveltejs/kit/discussions/4339).

## API Layer

This is your **middleware**: `hooks.server.ts`, `$lib/server`, `+server.ts`, `+page.server.ts`, `+layout.server.ts`. The data can be passed from the server down to the client, in the order of `src/hooks.server.ts` -> `+layout.server.ts` -> `+page.server.ts` -> `+layout.ts` -> `+page.ts` -> `+layout.svelte` -> `+page.svelte`. Use await parent() in load functions to wait for the parent's `load` functions to complete. You can use private environment variables here. The `+server.ts` files are standalone API endpoints that you make.

See also:

- [SvelteKit Data Flow](https://joyofcode.xyz/sveltekit-data-flow).

## Database Layer

This is your backend: `/drizzle.config.ts`, `/src/lib/db/index.ts`, `/src/lib/db/schema.ts`, `/supabase`. The admin of the project can use the Supabase Dashboard to set custom claims and create or delete moderators.
