// TODO achievements, events, mezfes, etc.

// export interface SupabaseTableProfile {
// 	//TODO this is unused, i use Drizzle instead
// 	/** auth.users uuid */
// 	id: string;
// 	/** same as Copy User ID button in discord */
// 	// discord_id: string;
// 	/** last profile edit date */
// 	updated_at: string | null;
// 	/**sign up date. has default. */
// 	join_date: string;
// 	/**  e.g rathian#1234. is unique */
// 	username: string;
// 	twitter_username: string;
// 	/** e.g. predetermined icons. shown everywhere except header top-right icon */
// 	avatar: string;
// 	/** e.g. medals */
// 	emblem: string;
// 	/** e.g hiden skills */
// 	title: string;
// 	/** e.g US. default is World. */
// 	country: string;
// 	/** date where u accepted terms. default is same as join_date. */
// 	agreed_terms: string;
// 	/** default to false.*/
// 	discord_username_shown: boolean;
// 	/** default to false.*/
// 	twitter_username_shown: boolean;
// 	/** e.g rathianhunter */
// 	discord_username: string;
// 	/** the id of the avatar. real url is https://cdn.discordapp.com/avatars/${discord_id}/${discord_avatar_hash}.png?size=256 . if it is null or empty string, load transcend image.*/
// 	discord_avatar: string; // Optional and nullable
// 	/** whether the user signed up with a mfa enabled discord account. if false, warn the user and recommend steps in onboarding. */
// 	// discord_mfa_enabled: boolean; // Optional
// 	/** profile themes, 'default' as default */
// 	theme: string;
// 	/** whether the user was already onboarded. default is false */
// 	onboarded: boolean;
// 	/** guild card themes, 'default' as default */
// 	guild_card_theme: string;
// 	// discriminator: string; // Always present
// 	// global_name?: string | null; // Optional and nullable
// 	// bot?: boolean; // Optional
// 	// system?: boolean; // Optional
// 	// banner?: string | null; // Optional and nullable
// 	// accent_color?: number | null; // Optional and nullable
// 	// locale?: string; // Optional
// 	// verified?: boolean; // Optional
// 	// email?: string | null; // Optional and nullable
// 	// flags?: number; // Optional
// 	// premium_type?: number; // Optional
// 	// public_flags?: number; // Optional
// 	// avatar_decoration_data?: any | null; // Optional and nullable (type is unclear, using `any` for now)
// }
