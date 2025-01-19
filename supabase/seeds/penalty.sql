-- Insert default configurations
INSERT INTO penalty_type_configuration
    (penalty_type, requires_acknowledgment, access_level, can_browse_after_acknowledgment, description)
VALUES
    ('warning', true, 'warning_only', true, 'User must acknowledge warning to continue'),
    ('timeout', true, 'limited_access', true, 'Limited access after acknowledgment until timeout ends'),
    ('suspension', true, 'full_block', false, 'No access except penalty page until suspension ends'),
    ('termination', true, 'full_block', false, 'Permanent restriction to penalty page only');
