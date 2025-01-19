/**
 * ! Executing this script will delete all data in your database and seed it with 10 users.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from '@snaplet/seed';

const main = async () => {
	//in dry run mode, we'll log the sql statements to the console instead of altering the database.
	const seed = await createSeedClient({ dryRun: false });

	// Truncate all tables in the database. Used when dryRun is enabled, this will clear the database of any current data, but keep the structure around
	//await seed.$resetDatabase();

	// Seed the database with data
	// TODO this inserts into auth.users but the data is misconfigured.
	await seed.users((x) => x(3));
	await seed.countries((x) => x(3));

	// Type completion not working? You might want to reload your TypeScript Server to pick up the changes
	// console.log('Database seeded successfully! (dryRun)');

	process.exit();
};

main();
