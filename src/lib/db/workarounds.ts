import type { User } from '@supabase/supabase-js';
import { type SelectProfile } from './schema';

/**The user needs to be retrieved with safeGetSession. Use WHERE queries to replace USING and WITH CHECK */
export function isUserAuthenticated(user: User | null) {
	if (!user || user?.role !== 'authenticated') {
		return false;
	} else {
		return true;
	}
}

/**The user needs to be retrieved with safeGetSession. Use WHERE queries to replace USING and WITH CHECK */
export function isUserModerator(user: User | null) {
	if (
		!user ||
		user?.role !== 'authenticated' ||
		user?.app_metadata?.user_role !== 'moderator'
	) {
		return false;
	} else {
		return true;
	}
}

/**The user that then derives the profile needs to be retrieved with safeGetSession. Use WHERE queries to replace USING and WITH CHECK */
export function isUserProfileUsernameSet(profile: SelectProfile | null) {
	if (!profile || !profile.username_set) {
		return false;
	} else {
		return true;
	}
}
