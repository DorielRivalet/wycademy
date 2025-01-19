-- Custom SQL migration file, put your code below! --
-- inserts a row into public.profiles
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, discord_username, discord_avatar, username)
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
		new.raw_user_meta_data ->> 'avatar_url',
    new.raw_user_meta_data ->> 'provider_id'
  )
  on conflict (id) do update set
    discord_username = excluded.discord_username,
    discord_avatar = excluded.discord_avatar;
  return new;
end;
$$;

-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- trigger the function when a user signs in/their email is confirmed to get missing values if any
create trigger on_auth_user_verified
  after update on auth.users
  for each row when (
    old.last_sign_in_at is null
    and new.last_sign_in_at is not null
  ) execute procedure public.handle_new_user();



-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
security invoker set search_path = ''
AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updating timestamps
CREATE TRIGGER update_profiles_modtime
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_penalties_modtime
    BEFORE UPDATE ON user_penalties
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_penalty_appeals_modtime
    BEFORE UPDATE ON penalty_appeals
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Function to check for active penalties
CREATE OR REPLACE FUNCTION check_active_penalties(p_user_id UUID)
RETURNS TABLE (
    penalty_type penalty_type,
    starts_at TIMESTAMP WITH TIME ZONE,
    ends_at TIMESTAMP WITH TIME ZONE,
    reason TEXT
)
security invoker set search_path = ''
AS $$
BEGIN
    RETURN QUERY
    SELECT
        up.penalty_type,
        up.starts_at,
        up.ends_at,
        pr.description as reason
    FROM user_penalties up
    JOIN penalty_reasons pr ON up.reason_id = pr.id
    WHERE up.user_id = p_user_id
    AND up.status = 'active'
    AND up.starts_at <= CURRENT_TIMESTAMP
    AND (up.ends_at IS NULL OR up.ends_at > CURRENT_TIMESTAMP);
END;
$$ LANGUAGE plpgsql;

-- Function to check if user should be redirected to penalty page
CREATE OR REPLACE FUNCTION should_redirect_to_penalty_page(p_user_id UUID)
RETURNS TABLE (
    should_redirect BOOLEAN,
    penalty_id UUID,
    penalty_type penalty_type,
    access_level access_restriction,
    requires_acknowledgment BOOLEAN,
    has_acknowledged BOOLEAN
)
security invoker set search_path = ''
AS $$
BEGIN
    RETURN QUERY
    SELECT
        CASE
            WHEN up.status = 'active' AND
                 (ptc.access_level = 'full_block' OR
                  (ptc.requires_acknowledgment AND pa.acknowledgment_id IS NULL))
            THEN true
            ELSE false
        END as should_redirect,
        up.penalty_id,
        up.penalty_type,
        ptc.access_level,
        ptc.requires_acknowledgment,
        CASE WHEN pa.acknowledgment_id IS NOT NULL THEN true ELSE false END as has_acknowledged
    FROM user_penalties up
    JOIN penalty_type_configuration ptc ON up.penalty_type = ptc.penalty_type
    LEFT JOIN penalty_acknowledgments pa ON up.penalty_id = pa.penalty_id
    WHERE up.user_id = p_user_id
    AND up.status = 'active'
    AND up.starts_at <= CURRENT_TIMESTAMP
    AND (up.ends_at IS NULL OR up.ends_at > CURRENT_TIMESTAMP)
    ORDER BY up.created_at DESC
    LIMIT 1;
END;
$$ LANGUAGE plpgsql;

-- Function to acknowledge penalty
CREATE OR REPLACE FUNCTION acknowledge_penalty(
    p_penalty_id UUID,
    p_user_id UUID,
    p_acknowledgment_text TEXT
) RETURNS BOOLEAN
security invoker set search_path = ''
AS $$
DECLARE
    v_penalty_type public.penalty_type;
    v_penalty_status public.penalty_status;
BEGIN
    -- Get penalty type and status
    SELECT penalty_type, status
    INTO v_penalty_type, v_penalty_status
    FROM user_penalties
    WHERE penalty_id = p_penalty_id AND user_id = p_user_id;

    -- Check if penalty exists and is active
    IF v_penalty_status != 'active' THEN
        RETURN false;
    END IF;

    -- Insert acknowledgment
    INSERT INTO penalty_acknowledgments (
        penalty_id,
        user_id,
        acknowledgment_text
    ) VALUES (
        p_penalty_id,
        p_user_id,
        p_acknowledgment_text
    );

    -- If warning, mark as completed
    IF v_penalty_type = 'warning' THEN
        UPDATE user_penalties
        SET status = 'completed',
            actual_end_at = CURRENT_TIMESTAMP
        WHERE penalty_id = p_penalty_id;
    END IF;

    RETURN true;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION update_username_set_date()
RETURNS TRIGGER
SECURITY INVOKER SET search_path = ''
AS $$
BEGIN
    IF NEW.username <> OLD.username THEN
        NEW.username_set_date = NOW();
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER update_username_set_date_trigger
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_username_set_date();


