type cursorMap = {
	[key: string]: {
		[key: string]: string;
	};
};

export const cursorVars: cursorMap = {
	default: {
		'--cursor-icon': '--cursor-icon-classic',
		'--cursor-icon-pointer': '--cursor-icon-classic-pointer',
		'--cursor-icon-wait': '--cursor-icon-classic-wait',
	},
	Classic: {
		'--cursor-icon': '--cursor-icon-classic',
		'--cursor-icon-pointer': '--cursor-icon-classic-pointer',
		'--cursor-icon-wait': '--cursor-icon-classic-wait',
	},
	Modern: {
		'--cursor-icon': '--cursor-icon-modern',
		'--cursor-icon-pointer': '--cursor-icon-modern-pointer',
		'--cursor-icon-wait': '--cursor-icon-modern-wait',
	},
	None: {
		'--cursor-icon': '--cursor-icon-none',
		'--cursor-icon-pointer': '--cursor-icon-none-pointer',
		'--cursor-icon-wait': '--cursor-icon-none-wait',
	},
};
