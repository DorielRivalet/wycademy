-- https://github.com/supabase-community/supabase-custom-claims
CREATE OR REPLACE FUNCTION is_claims_admin() RETURNS "bool"
  LANGUAGE "plpgsql"
	SET search_path = ''
  AS $$
  BEGIN
    IF session_user = 'authenticator' THEN
      --------------------------------------------
      -- To disallow any authenticated app users
      -- from editing claims, delete the following
      -- block of code and replace it with:
      RETURN FALSE;
      --------------------------------------------
      -- IF extract(epoch from now()) > coalesce((pg_catalog.current_setting('request.jwt.claims', true)::jsonb)->>'exp', '0')::numeric THEN
      --   return false; -- jwt expired
      -- END IF;
      -- If pg_catalog.current_setting('request.jwt.claims', true)::jsonb->>'role' = 'service_role' THEN
      --   RETURN true; -- service role users have admin rights
      -- END IF;
      -- IF coalesce((pg_catalog.current_setting('request.jwt.claims', true)::jsonb)->'app_metadata'->'claims_admin', 'false')::bool THEN
      --   return true; -- user has claims_admin set to true
      -- ELSE
      --   return false; -- user does NOT have claims_admin set to true
      -- END IF;
      --------------------------------------------
      -- End of block
      --------------------------------------------
    ELSE -- not a user session, probably being called from a trigger or something
      return true;
    END IF;
  END;
$$;

CREATE OR REPLACE FUNCTION get_my_claims() RETURNS "jsonb"
    LANGUAGE "sql" STABLE
		SET search_path = ''
    AS $$
  select
  	coalesce(nullif(pg_catalog.current_setting('request.jwt.claims', true), '')::jsonb -> 'app_metadata', '{}'::jsonb)::jsonb
$$;
CREATE OR REPLACE FUNCTION get_my_claim(claim TEXT) RETURNS "jsonb"
    LANGUAGE "sql" STABLE
		SET search_path = ''
    AS $$
  select
  	coalesce(nullif(pg_catalog.current_setting('request.jwt.claims', true), '')::jsonb -> 'app_metadata' -> claim, null)
$$;

CREATE OR REPLACE FUNCTION get_claims(uid uuid) RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER SET search_path = ''
    AS $$
    DECLARE retval jsonb;
    BEGIN
      IF NOT public.is_claims_admin() THEN
          RETURN '{"error":"access denied"}'::jsonb;
      ELSE
        select raw_app_meta_data from auth.users into retval where id = uid::uuid;
        return retval;
      END IF;
    END;
$$;

CREATE OR REPLACE FUNCTION get_claim(uid uuid, claim text) RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER SET search_path = ''
    AS $$
    DECLARE retval jsonb;
    BEGIN
      IF NOT public.is_claims_admin() THEN
          RETURN '{"error":"access denied"}'::jsonb;
      ELSE
        select coalesce(raw_app_meta_data->claim, null) from auth.users into retval where id = uid::uuid;
        return retval;
      END IF;
    END;
$$;

CREATE OR REPLACE FUNCTION set_claim(uid uuid, claim text, value jsonb) RETURNS "text"
    LANGUAGE "plpgsql" SECURITY DEFINER SET search_path = ''
    AS $$
    BEGIN
      IF NOT public.is_claims_admin() THEN
          RETURN 'error: access denied';
      ELSE
        update auth.users set raw_app_meta_data =
          raw_app_meta_data ||
            json_build_object(claim, value)::jsonb where id = uid;
        return 'OK';
      END IF;
    END;
$$;

CREATE OR REPLACE FUNCTION delete_claim(uid uuid, claim text) RETURNS "text"
    LANGUAGE "plpgsql" SECURITY DEFINER SET search_path = ''
    AS $$
    BEGIN
      IF NOT public.is_claims_admin() THEN
          RETURN 'error: access denied';
      ELSE
        update auth.users set raw_app_meta_data =
          raw_app_meta_data - claim where id = uid;
        return 'OK';
      END IF;
    END;
$$;

-- Custom SQL migration file, put your code below! --
-- Create the custom claims functions
-- create or replace function is_claims_admin()
-- returns bool
-- language sql
-- security definer
-- set search_path = ''
-- stable
-- as $$
--   -- Only allow custom claims to be set from inside the database
--   select coalesce(
--     pg_catalog.current_setting('request.jwt.claims', true)::jsonb->>'claims_admin',
--     'false'
--   )::bool;
-- $$;

-- Create helper function to check if user is moderator
-- create or replace function is_moderator()
-- returns bool
-- language sql
-- security definer
-- set search_path = ''
-- stable
-- as $$
--   select coalesce(
--     (pg_catalog.current_setting('request.jwt.claims', true)::jsonb->>'user_role')::text = '"moderator"' or
--     (pg_catalog.current_setting('request.jwt.claims', true)::jsonb->>'user_role')::text = '"admin"',
--     false
--   );
-- $$;

-- Bootstrap an admin user (replace UUID with your admin user's ID)
-- select set_claim('your-admin-uuid', 'claims_admin', 'true');
-- select set_claim('your-admin-uuid', 'user_role', '"admin"');

-- Example: Set a user as moderator (run this in SQL editor)
-- select set_claim('user-uuid', 'user_role', '"moderator"');
-- uninstall.sql
-- DROP FUNCTION get_my_claims;
-- DROP FUNCTION get_my_claim;
-- DROP FUNCTION get_claims;
-- DROP FUNCTION set_claim;
-- DROP FUNCTION delete_claim;
-- DROP FUNCTION is_claims_admin;
-- NOTIFY pgrst, 'reload schema';
NOTIFY pgrst, 'reload schema';
