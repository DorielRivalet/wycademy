import { readFileSync } from 'fs';

const baseLicenses = JSON.parse(readFileSync('base-licenses.json', 'utf8'));
const prLicenses = JSON.parse(readFileSync('pr-licenses.json', 'utf8'));

const baseMap = new Map(baseLicenses.map((pkg) => [pkg.name, pkg.licenseType]));
const prMap = new Map(prLicenses.map((pkg) => [pkg.name, pkg.licenseType]));

let changes = [];

for (const [name, newLicense] of prMap.entries()) {
	const oldLicense = baseMap.get(name);
	if (oldLicense && oldLicense !== newLicense) {
		changes.push(
			`⚠️ License change detected for **${name}**: \`${oldLicense}\` → \`${newLicense}\``,
		);
	} else {
		console.log(
			`No license changes detected for ${name}: ${oldLicense} / ${newLicense}`,
		);
	}
}

if (changes.length > 0) {
	console.log(changes.join('\n'));
	process.exit(1); // Fail the workflow if any license change is detected
} else {
	console.log('✅ No license changes detected');
}
