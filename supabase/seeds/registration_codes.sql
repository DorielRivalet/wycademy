INSERT INTO registration_codes (code, used, created_at)
SELECT
  gen_random_uuid() as code,
  FALSE as used,
  NOW() as created_at
FROM generate_series(1, 1000); -- This generates 1000 codes, adjust number as needed
