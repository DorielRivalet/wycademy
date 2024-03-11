/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

export const themeTokens = {
	g100: {
		'ui-background': 'var(--ctp-mocha-base)',
		'interactive-01': 'var(--ctp-mocha-blue)',
		'interactive-02': 'var(--ctp-mocha-subtext0)',
		'interactive-03': 'var(--ctp-mocha-text)',
		'interactive-04': 'var(--ctp-mocha-sapphire)',
		'danger-01': 'var(--ctp-mocha-red)',
		'danger-02': 'var(--ctp-mocha-peach)',
		'ui-01': 'var(--ctp-mocha-surface0)',
		'ui-02': 'var(--ctp-mocha-surface1)',
		'ui-03': 'var(--ctp-mocha-surface2)',
		'ui-04': 'var(--ctp-mocha-overlay0)',
		'ui-05': 'var(--ctp-mocha-rosewater)',
		'button-separator': 'var(--ctp-mocha-base)',
		'decorative-01': 'var(--ctp-mocha-overlay0)',
		'text-01': 'var(--ctp-mocha-text)',
		'text-02': 'var(--ctp-mocha-subtext1)',
		'text-03': 'var(--ctp-mocha-subtext0)',
		'text-04': 'var(--ctp-mocha-crust)',
		'text-05': 'var(--ctp-mocha-subtext1)',
		'text-error': 'var(--ctp-mocha-red)',
		'link-01': 'var(--ctp-mocha-blue)',
		'link-02': 'var(--ctp-mocha-sky)',
		'inverse-link': 'var(--ctp-mocha-teal)',
		'icon-01': 'var(--ctp-mocha-subtext1)',
		'icon-02': 'var(--ctp-mocha-text)',
		'icon-03': 'var(--ctp-mocha-mantle)',
		'field-01': 'var(--ctp-mocha-surface0)',
		'field-02': 'var(--ctp-mocha-crust)',
		'inverse-01': 'var(--ctp-mocha-crust)',
		'inverse-02': 'var(--ctp-mocha-text)',
		'support-01': 'var(--ctp-mocha-red)',
		'support-02': 'var(--ctp-mocha-green)',
		'support-03': 'var(--ctp-mocha-yellow)',
		'support-04': 'var(--ctp-mocha-teal)',
		'inverse-support-01': 'var(--ctp-mocha-red)',
		'inverse-support-02': 'var(--ctp-mocha-green)',
		'inverse-support-03': 'var(--ctp-mocha-yellow)',
		'inverse-support-04': 'var(--ctp-mocha-teal)',
		'overlay-01': 'var(--ctp-mocha-overlay0)',
		focus: 'var(--ctp-mocha-lavender)',
		'inverse-focus-ui': 'var(--ctp-mocha-blue)',
		'hover-primary': 'var(--ctp-mocha-sapphire)',
		'hover-primary-text': 'var(--ctp-mocha-sky)',
		'hover-secondary': 'var(--ctp-mocha-overlay0)',
		'hover-tertiary': 'var(--ctp-mocha-sky)',
		'hover-ui': 'var(--ctp-mocha-overlay0)',
		'hover-light-ui': 'var(--ctp-mocha-subtex1)',
		'hover-selected-ui': 'var(--ctp-mocha-overlay1)',
		'hover-danger': 'var(--ctp-mocha-red)',
		'hover-row': 'var(--ctp-mocha-surface0)',
		'inverse-hover-ui': 'var(--ctp-mocha-subtext0)',
		'active-primary': 'var(--ctp-mocha-blue)',
		'active-secondary': 'var(--ctp-mocha-sapphire)',
		'active-tertiary': 'var(--ctp-mocha-overlay2)',
		'active-ui': 'var(--ctp-mocha-overlay0)',
		'active-light-ui': 'var(--ctp-mocha-overlay1)',
		'active-danger': 'var(--ctp-mocha-red)',
		'selected-ui': 'var(--ctp-mocha-surface2)',
		'selected-light-ui': 'var(--ctp-mocha-overlay0)',
		highlight: 'var(--ctp-mocha-sapphire)',
		'skeleton-01': 'var(--ctp-mocha-overlay0)',
		'skeleton-02': 'var(--ctp-mocha-overlay1)',
		'visited-link': 'var(--ctp-mocha-lavender)',
		'disabled-01': 'var(--ctp-mocha-overlay0)',
		'disabled-02': 'var(--ctp-mocha-overlay1)',
		'disabled-03': 'var(--ctp-mocha-overlay2)',

		// v11 new
		'border-strong-02': 'var(--ctp-mocha-overlay1)',
		'border-strong-03': 'var(--ctp-mocha-overlay2)',
		'border-subtle-00': 'var(--ctp-mocha-surface2)',
		'border-subtle-03': 'var(--ctp-mocha-overlay1)',
		'border-subtle-selected-02': 'var(--ctp-mocha-overlay1)',
		'border-subtle-selected-03': 'var(--ctp-mocha-overlay2)',
		'field-03': 'var(--ctp-mocha-mantle)',
		'field-hover-03': 'var(--ctp-mocha-crust)',
		'layer-03': 'var(--ctp-mocha-surface2)',
		'layer-active-03': 'var(--ctp-mocha-overlay2)',
		'layer-hover-03': 'var(--ctp-mocha-overlay2)',
		'layer-selected-03': 'var(--ctp-mocha-overlay1)',
		'layer-selected-hover-02': 'var(--ctp-mocha-overlay1)',
		'layer-selected-hover-03': 'var(--ctp-mocha-overlay2)',
		'layer-accent-02': 'var(--ctp-mocha-surface1)',
		'layer-accent-03': 'var(--ctp-mocha-surface0)',
		'layer-accent-active-02': 'var(--ctp-mocha-overlay1)',
		'layer-accent-active-03': 'var(--ctp-mocha-overlay2)',
		'layer-accent-hover-02': 'var(--ctp-mocha-overlay1)',
		'layer-accent-hover-03': 'var(--ctp-mocha-overlay2)',

		layer: 'var(--ctp-mocha-surface0)',
		'layer-accent': 'var(--ctp-mocha-surface2)',
		'layer-active': 'var(--ctp-mocha-overlay0)',
		'layer-accent-active': 'var(--ctp-mocha-overlay0)',
		'layer-accent-hover': 'var(--ctp-mocha-overlay0)',
		field: 'var(--ctp-mocha-surface0)',
		'layer-hover': 'var(--ctp-mocha-overlay0)',
		'field-hover': 'var(--ctp-mocha-surface0)',
		'border-subtle': 'var(--ctp-mocha-overlay0)',
		'border-strong': 'var(--ctp-mocha-overlay0)',
		'layer-selected-hover': 'var(--ctp-mocha-overlay0)',
		'layer-selected': 'var(--ctp-mocha-surface2)',
		'border-subtle-selected': 'var(--ctp-mocha-overlay0)',
		danger: 'var(--ctp-mocha-red)',
		'brand-01': 'var(--ctp-mocha-blue)',
		'brand-02': 'var(--ctp-mocha-subtext1)',
		'brand-03': 'var(--ctp-mocha-text)',
		'active-01': 'var(--ctp-mocha-blue)',
		'hover-field': 'var(--ctp-mocha-surface0)',

		// v11 update/split
		'button-danger-active': 'var(--ctp-mocha-red)',
		'layer-active-02': 'var(--ctp-mocha-overlay1)',
		'button-primary-active': 'var(--ctp-mocha-blue)',
		'button-secondary-active': 'var(--ctp-mocha-sapphire)',
		'button-tertiary-active': 'var(--ctp-mocha-overlay2)',
		'layer-active-01': 'var(--ctp-mocha-overlay0)',
		'background-active': 'var(--ctp-mocha-overlay0)',
		'layer-accent-active-01': 'var(--ctp-mocha-overlay0)',
		'border-subtle-selected-01': 'var(--ctp-mocha-overlay0)',
		'button-danger-primary': 'var(--ctp-mocha-red)',
		'button-danger-secondary': 'var(--ctp-mocha-peach)',
		'border-subtle-02': 'var(--ctp-mocha-overlay0)',
		'text-disabled': 'var(--ctp-mocha-overlay1)',
		'icon-disabled': 'var(--ctp-mocha-overlay1)',
		'button-disabled': 'var(--ctp-mocha-overlay1)',
		'border-disabled': 'var(--ctp-mocha-overlay1)',
		'icon-on-color-disabled': 'var(--ctp-mocha-overlay2)',
		'layer-selected-disabled': 'var(--ctp-mocha-overlay2)',
		'text-on-color-disabled': 'var(--ctp-mocha-overlay2)',
		'button-danger-hover': 'var(--ctp-mocha-red)',
		'layer-hover-02': 'var(--ctp-mocha-overlay1)',
		'button-primary-hover': 'var(--ctp-mocha-sapphire)',
		'link-primary-hover': 'var(--ctp-mocha-sky)',
		'button-secondary-hover': 'var(--ctp-mocha-overlay0)',
		'background-selected-hover': 'var(--ctp-mocha-overlay0)',
		'layer-accent-hover-01': 'var(--ctp-mocha-overlay0)',
		'layer-selected-hover-01': 'var(--ctp-mocha-overlay0)',
		'button-tertiary-hover': 'var(--ctp-mocha-sky)',
		'background-hover': 'var(--ctp-mocha-subtext0)',
		'layer-hover-01': 'var(--ctp-mocha-overlay0)',
		'field-hover-01': 'var(--ctp-mocha-surface0)',
		'field-hover-02': 'var(--ctp-mocha-crust)',
		'icon-primary': 'var(--ctp-mocha-subtext1)',
		'icon-secondary': 'var(--ctp-mocha-text)',
		'icon-on-color': 'var(--ctp-mocha-mantle)',
		'button-primary': 'var(--ctp-mocha-blue)',
		'background-brand': 'var(--ctp-mocha-blue)',
		'button-secondary': 'var(--ctp-mocha-sapphire)',
		'button-tertiary': 'var(--ctp-mocha-overlay2)',
		'border-interactive': 'var(--ctp-mocha-sapphire)',
		interactive: 'var(--ctp-mocha-sapphire)',
		'icon-inverse': 'var(--ctp-mocha-crust)',
		'focus-inset': 'var(--ctp-mocha-blue)',
		'text-inverse': 'var(--ctp-mocha-text)',
		'background-inverse': 'var(--ctp-mocha-text)',
		'focus-inverse': 'var(--ctp-mocha-blue)',
		'background-inverse-hover': 'var(--ctp-mocha-blue)',
		'link-inverse': 'var(--ctp-mocha-teal)',
		'support-error-inverse': 'var(--ctp-mocha-red)',
		'support-success-inverse': 'var(--ctp-mocha-green)',
		'support-warning-inverse': 'var(--ctp-mocha-yellow)',
		'support-info-inverse': 'var(--ctp-mocha-teal)',
		'link-primary': 'var(--ctp-mocha-blue)',
		'link-secondary': 'var(--ctp-mocha-sky)',
		overlay: 'var(--ctp-mocha-overlay0)',
		'layer-selected-02': 'var(--ctp-mocha-overlay0)',
		'layer-selected-01': 'var(--ctp-mocha-surface2)',
		'background-selected': 'var(--ctp-mocha-surface2)',
		'skeleton-background': 'var(--ctp-mocha-overlay0)',
		'skeleton-element': 'var(--ctp-mocha-overlay1)',
		'support-error': 'var(--ctp-mocha-red)',
		'support-success': 'var(--ctp-mocha-green)',
		'support-warning': 'var(--ctp-mocha-yellow)',
		'support-info': 'var(--ctp-mocha-teal)',
		'text-primary': 'var(--ctp-mocha-text)',
		'text-secondary': 'var(--ctp-mocha-subtext1)',
		'text-placeholder': 'var(--ctp-mocha-subtext0)',
		'text-on-color': 'var(--ctp-mocha-crust)',
		'text-helper': 'var(--ctp-mocha-subtext1)',
		'layer-01': 'var(--ctp-mocha-surface0)',
		'layer-02': 'var(--ctp-mocha-surface1)',
		'layer-accent-01': 'var(--ctp-mocha-surface2)',
		'border-subtle-01': 'var(--ctp-mocha-overlay0)',
		'toggle-off': 'var(--ctp-mocha-overlay0)',
		'border-strong-01': 'var(--ctp-mocha-overlay0)',
		'border-inverse': 'var(--ctp-mocha-text)',
		'layer-selected-inverse': 'var(--ctp-mocha-text)',
		background: 'var(--ctp-mocha-base)',
		'link-visited': 'var(--ctp-mocha-lavender)',
	},
	g90: {
		'ui-background': 'var(--ctp-macchiato-base)',
		'interactive-01': 'var(--ctp-macchiato-blue)',
		'interactive-02': 'var(--ctp-macchiato-subtext0)',
		'interactive-03': 'var(--ctp-macchiato-text)',
		'interactive-04': 'var(--ctp-macchiato-sapphire)',
		'danger-01': 'var(--ctp-macchiato-red)',
		'danger-02': 'var(--ctp-macchiato-peach)',
		'ui-01': 'var(--ctp-macchiato-surface0)',
		'ui-02': 'var(--ctp-macchiato-surface1)',
		'ui-03': 'var(--ctp-macchiato-surface2)',
		'ui-04': 'var(--ctp-macchiato-overlay0)',
		'ui-05': 'var(--ctp-macchiato-rosewater)',
		'button-separator': 'var(--ctp-macchiato-base)',
		'decorative-01': 'var(--ctp-macchiato-overlay0)',
		'text-01': 'var(--ctp-macchiato-text)',
		'text-02': 'var(--ctp-macchiato-subtext1)',
		'text-03': 'var(--ctp-macchiato-subtext0)',
		'text-04': 'var(--ctp-macchiato-crust)',
		'text-05': 'var(--ctp-macchiato-subtext1)',
		'text-error': 'var(--ctp-macchiato-red)',
		'link-01': 'var(--ctp-macchiato-blue)',
		'link-02': 'var(--ctp-macchiato-sky)',
		'inverse-link': 'var(--ctp-macchiato-teal)',
		'icon-01': 'var(--ctp-macchiato-subtext1)',
		'icon-02': 'var(--ctp-macchiato-text)',
		'icon-03': 'var(--ctp-macchiato-mantle)',
		'field-01': 'var(--ctp-macchiato-surface0)',
		'field-02': 'var(--ctp-macchiato-crust)',
		'inverse-01': 'var(--ctp-macchiato-crust)',
		'inverse-02': 'var(--ctp-macchiato-text)',
		'support-01': 'var(--ctp-macchiato-red)',
		'support-02': 'var(--ctp-macchiato-green)',
		'support-03': 'var(--ctp-macchiato-yellow)',
		'support-04': 'var(--ctp-mocha-teal)',
		'inverse-support-01': 'var(--ctp-macchiato-red)',
		'inverse-support-02': 'var(--ctp-macchiato-green)',
		'inverse-support-03': 'var(--ctp-macchiato-yellow)',
		'inverse-support-04': 'var(--ctp-macchiato-teal)',
		'overlay-01': 'var(--ctp-macchiato-overlay0)',
		focus: 'var(--ctp-macchiato-lavender)',
		'inverse-focus-ui': 'var(--ctp-macchiato-blue)',
		'hover-primary': 'var(--ctp-macchiato-sapphire)',
		'hover-primary-text': 'var(--ctp-macchiato-sky)',
		'hover-secondary': 'var(--ctp-macchiato-overlay0)',
		'hover-tertiary': 'var(--ctp-macchiato-sky)',
		'hover-ui': 'var(--ctp-macchiato-overlay0)',
		'hover-light-ui': 'var(--ctp-macchiato-subtex1)',
		'hover-selected-ui': 'var(--ctp-macchiato-overlay1)',
		'hover-danger': 'var(--ctp-macchiato-red)',
		'hover-row': 'var(--ctp-macchiato-surface0)',
		'inverse-hover-ui': 'var(--ctp-macchiato-subtext0)',
		'active-primary': 'var(--ctp-macchiato-blue)',
		'active-secondary': 'var(--ctp-macchiato-sapphire)',
		'active-tertiary': 'var(--ctp-macchiato-overlay2)',
		'active-ui': 'var(--ctp-macchiato-overlay0)',
		'active-light-ui': 'var(--ctp-macchiato-overlay1)',
		'active-danger': 'var(--ctp-macchiato-red)',
		'selected-ui': 'var(--ctp-macchiato-surface2)',
		'selected-light-ui': 'var(--ctp-macchiato-overlay0)',
		highlight: 'var(--ctp-macchiato-sapphire)',
		'skeleton-01': 'var(--ctp-macchiato-overlay0)',
		'skeleton-02': 'var(--ctp-macchiato-overlay1)',
		'visited-link': 'var(--ctp-macchiato-lavender)',
		'disabled-01': 'var(--ctp-macchiato-overlay0)',
		'disabled-02': 'var(--ctp-macchiato-overlay1)',
		'disabled-03': 'var(--ctp-macchiato-overlay2)',

		// v11 new
		'border-strong-02': 'var(--ctp-macchiato-overlay1)',
		'border-strong-03': 'var(--ctp-macchiato-overlay2)',
		'border-subtle-00': 'var(--ctp-macchiato-surface2)',
		'border-subtle-03': 'var(--ctp-macchiato-overlay1)',
		'border-subtle-selected-02': 'var(--ctp-macchiato-overlay1)',
		'border-subtle-selected-03': 'var(--ctp-macchiato-overlay2)',
		'field-03': 'var(--ctp-macchiato-mantle)',
		'field-hover-03': 'var(--ctp-macchiato-crust)',
		'layer-03': 'var(--ctp-macchiato-surface2)',
		'layer-active-03': 'var(--ctp-macchiato-overlay2)',
		'layer-hover-03': 'var(--ctp-macchiato-overlay2)',
		'layer-selected-03': 'var(--ctp-macchiato-overlay1)',
		'layer-selected-hover-02': 'var(--ctp-macchiato-overlay1)',
		'layer-selected-hover-03': 'var(--ctp-macchiato-overlay2)',
		'layer-accent-02': 'var(--ctp-macchiato-surface1)',
		'layer-accent-03': 'var(--ctp-macchiato-surface0)',
		'layer-accent-active-02': 'var(--ctp-macchiato-overlay1)',
		'layer-accent-active-03': 'var(--ctp-macchiato-overlay2)',
		'layer-accent-hover-02': 'var(--ctp-macchiato-overlay1)',
		'layer-accent-hover-03': 'var(--ctp-macchiato-overlay2)',

		layer: 'var(--ctp-macchiato-surface0)',
		'layer-accent': 'var(--ctp-macchiato-surface2)',
		'layer-active': 'var(--ctp-macchiato-overlay0)',
		'layer-accent-active': 'var(--ctp-macchiato-overlay0)',
		'layer-accent-hover': 'var(--ctp-macchiato-overlay0)',
		field: 'var(--ctp-macchiato-surface0)',
		'layer-hover': 'var(--ctp-macchiato-overlay0)',
		'field-hover': 'var(--ctp-macchiato-surface0)',
		'border-subtle': 'var(--ctp-macchiato-overlay0)',
		'border-strong': 'var(--ctp-macchiato-overlay0)',
		'layer-selected-hover': 'var(--ctp-macchiato-overlay0)',
		'layer-selected': 'var(--ctp-macchiato-surface2)',
		'border-subtle-selected': 'var(--ctp-macchiato-overlay0)',
		danger: 'var(--ctp-macchiato-red)',
		'brand-01': 'var(--ctp-macchiato-blue)',
		'brand-02': 'var(--ctp-macchiato-subtext1)',
		'brand-03': 'var(--ctp-macchiato-text)',
		'active-01': 'var(--ctp-macchiato-blue)',
		'hover-field': 'var(--ctp-macchiato-surface0)',

		// v11 update/split
		'button-danger-active': 'var(--ctp-macchiato-red)',
		'layer-active-02': 'var(--ctp-macchiato-overlay1)',
		'button-primary-active': 'var(--ctp-macchiato-blue)',
		'button-secondary-active': 'var(--ctp-macchiato-sapphire)',
		'button-tertiary-active': 'var(--ctp-macchiato-overlay2)',
		'layer-active-01': 'var(--ctp-macchiato-overlay0)',
		'background-active': 'var(--ctp-macchiato-overlay0)',
		'layer-accent-active-01': 'var(--ctp-macchiato-overlay0)',
		'border-subtle-selected-01': 'var(--ctp-macchiato-overlay0)',
		'button-danger-primary': 'var(--ctp-macchiato-red)',
		'button-danger-secondary': 'var(--ctp-macchiato-peach)',
		'border-subtle-02': 'var(--ctp-macchiato-overlay0)',
		'text-disabled': 'var(--ctp-macchiato-overlay1)',
		'icon-disabled': 'var(--ctp-macchiato-overlay1)',
		'button-disabled': 'var(--ctp-macchiato-overlay1)',
		'border-disabled': 'var(--ctp-macchiato-overlay1)',
		'icon-on-color-disabled': 'var(--ctp-macchiato-overlay2)',
		'layer-selected-disabled': 'var(--ctp-macchiato-overlay2)',
		'text-on-color-disabled': 'var(--ctp-macchiato-overlay2)',
		'button-danger-hover': 'var(--ctp-macchiato-red)',
		'layer-hover-02': 'var(--ctp-macchiato-overlay1)',
		'button-primary-hover': 'var(--ctp-macchiato-sapphire)',
		'link-primary-hover': 'var(--ctp-macchiato-sky)',
		'button-secondary-hover': 'var(--ctp-macchiato-overlay0)',
		'background-selected-hover': 'var(--ctp-macchiato-overlay0)',
		'layer-accent-hover-01': 'var(--ctp-macchiato-overlay0)',
		'layer-selected-hover-01': 'var(--ctp-macchiato-overlay0)',
		'button-tertiary-hover': 'var(--ctp-macchiato-sky)',
		'background-hover': 'var(--ctp-macchiato-subtext0)',
		'layer-hover-01': 'var(--ctp-macchiato-overlay0)',
		'field-hover-01': 'var(--ctp-macchiato-surface0)',
		'field-hover-02': 'var(--ctp-macchiato-crust)',
		'icon-primary': 'var(--ctp-macchiato-subtext1)',
		'icon-secondary': 'var(--ctp-macchiato-text)',
		'icon-on-color': 'var(--ctp-macchiato-mantle)',
		'button-primary': 'var(--ctp-macchiato-blue)',
		'background-brand': 'var(--ctp-macchiato-blue)',
		'button-secondary': 'var(--ctp-macchiato-sapphire)',
		'button-tertiary': 'var(--ctp-macchiato-overlay2)',
		'border-interactive': 'var(--ctp-macchiato-sapphire)',
		interactive: 'var(--ctp-macchiato-sapphire)',
		'icon-inverse': 'var(--ctp-macchiato-crust)',
		'focus-inset': 'var(--ctp-macchiato-blue)',
		'text-inverse': 'var(--ctp-macchiato-text)',
		'background-inverse': 'var(--ctp-macchiato-text)',
		'focus-inverse': 'var(--ctp-macchiato-blue)',
		'background-inverse-hover': 'var(--ctp-macchiato-blue)',
		'link-inverse': 'var(--ctp-macchiato-teal)',
		'support-error-inverse': 'var(--ctp-macchiato-red)',
		'support-success-inverse': 'var(--ctp-macchiato-green)',
		'support-warning-inverse': 'var(--ctp-macchiato-yellow)',
		'support-info-inverse': 'var(--ctp-macchiato-teal)',
		'link-primary': 'var(--ctp-macchiato-blue)',
		'link-secondary': 'var(--ctp-macchiato-sky)',
		overlay: 'var(--ctp-macchiato-overlay0)',
		'layer-selected-02': 'var(--ctp-macchiato-overlay0)',
		'layer-selected-01': 'var(--ctp-macchiato-surface2)',
		'background-selected': 'var(--ctp-macchiato-surface2)',
		'skeleton-background': 'var(--ctp-macchiato-overlay0)',
		'skeleton-element': 'var(--ctp-macchiato-overlay1)',
		'support-error': 'var(--ctp-macchiato-red)',
		'support-success': 'var(--ctp-macchiato-green)',
		'support-warning': 'var(--ctp-macchiato-yellow)',
		'support-info': 'var(--ctp-macchiato-teal)',
		'text-primary': 'var(--ctp-macchiato-text)',
		'text-secondary': 'var(--ctp-macchiato-subtext1)',
		'text-placeholder': 'var(--ctp-macchiato-subtext0)',
		'text-on-color': 'var(--ctp-macchiato-crust)',
		'text-helper': 'var(--ctp-macchiato-subtext1)',
		'layer-01': 'var(--ctp-macchiato-surface0)',
		'layer-02': 'var(--ctp-macchiato-surface1)',
		'layer-accent-01': 'var(--ctp-macchiato-surface2)',
		'border-subtle-01': 'var(--ctp-macchiato-overlay0)',
		'toggle-off': 'var(--ctp-macchiato-overlay0)',
		'border-strong-01': 'var(--ctp-macchiato-overlay0)',
		'border-inverse': 'var(--ctp-macchiato-text)',
		'layer-selected-inverse': 'var(--ctp-macchiato-text)',
		background: 'var(--ctp-macchiato-base)',
		'link-visited': 'var(--ctp-macchiato-lavender)',
	},
	g80: {
		'ui-background': 'var(--ctp-frappe-base)',
		'interactive-01': 'var(--ctp-frappe-blue)',
		'interactive-02': 'var(--ctp-frappe-subtext0)',
		'interactive-03': 'var(--ctp-frappe-text)',
		'interactive-04': 'var(--ctp-frappe-sapphire)',
		'danger-01': 'var(--ctp-frappe-red)',
		'danger-02': 'var(--ctp-frappe-peach)',
		'ui-01': 'var(--ctp-frappe-surface0)',
		'ui-02': 'var(--ctp-frappe-surface1)',
		'ui-03': 'var(--ctp-frappe-surface2)',
		'ui-04': 'var(--ctp-frappe-overlay0)',
		'ui-05': 'var(--ctp-frappe-rosewater)',
		'button-separator': 'var(--ctp-frappe-base)',
		'decorative-01': 'var(--ctp-frappe-overlay0)',
		'text-01': 'var(--ctp-frappe-text)',
		'text-02': 'var(--ctp-frappe-subtext1)',
		'text-03': 'var(--ctp-frappe-subtext0)',
		'text-04': 'var(--ctp-frappe-crust)',
		'text-05': 'var(--ctp-frappe-subtext1)',
		'text-error': 'var(--ctp-frappe-red)',
		'link-01': 'var(--ctp-frappe-blue)',
		'link-02': 'var(--ctp-frappe-sky)',
		'inverse-link': 'var(--ctp-frappe-teal)',
		'icon-01': 'var(--ctp-frappe-subtext1)',
		'icon-02': 'var(--ctp-frappe-text)',
		'icon-03': 'var(--ctp-frappe-mantle)',
		'field-01': 'var(--ctp-frappe-surface0)',
		'field-02': 'var(--ctp-frappe-crust)',
		'inverse-01': 'var(--ctp-frappe-crust)',
		'inverse-02': 'var(--ctp-frappe-text)',
		'support-01': 'var(--ctp-frappe-red)',
		'support-02': 'var(--ctp-frappe-green)',
		'support-03': 'var(--ctp-frappe-yellow)',
		'support-04': 'var(--ctp-mocha-teal)',
		'inverse-support-01': 'var(--ctp-frappe-red)',
		'inverse-support-02': 'var(--ctp-frappe-green)',
		'inverse-support-03': 'var(--ctp-frappe-yellow)',
		'inverse-support-04': 'var(--ctp-frappe-teal)',
		'overlay-01': 'var(--ctp-frappe-overlay0)',
		focus: 'var(--ctp-frappe-lavender)',
		'inverse-focus-ui': 'var(--ctp-frappe-blue)',
		'hover-primary': 'var(--ctp-frappe-sapphire)',
		'hover-primary-text': 'var(--ctp-frappe-sky)',
		'hover-secondary': 'var(--ctp-frappe-overlay0)',
		'hover-tertiary': 'var(--ctp-frappe-sky)',
		'hover-ui': 'var(--ctp-frappe-overlay0)',
		'hover-light-ui': 'var(--ctp-frappe-subtex1)',
		'hover-selected-ui': 'var(--ctp-frappe-overlay1)',
		'hover-danger': 'var(--ctp-frappe-red)',
		'hover-row': 'var(--ctp-frappe-surface0)',
		'inverse-hover-ui': 'var(--ctp-frappe-subtext0)',
		'active-primary': 'var(--ctp-frappe-blue)',
		'active-secondary': 'var(--ctp-frappe-sapphire)',
		'active-tertiary': 'var(--ctp-frappe-overlay2)',
		'active-ui': 'var(--ctp-frappe-overlay0)',
		'active-light-ui': 'var(--ctp-frappe-overlay1)',
		'active-danger': 'var(--ctp-frappe-red)',
		'selected-ui': 'var(--ctp-frappe-surface2)',
		'selected-light-ui': 'var(--ctp-frappe-overlay0)',
		highlight: 'var(--ctp-frappe-sapphire)',
		'skeleton-01': 'var(--ctp-frappe-overlay0)',
		'skeleton-02': 'var(--ctp-frappe-overlay1)',
		'visited-link': 'var(--ctp-frappe-lavender)',
		'disabled-01': 'var(--ctp-frappe-overlay0)',
		'disabled-02': 'var(--ctp-frappe-overlay1)',
		'disabled-03': 'var(--ctp-frappe-overlay2)',

		// v11 new
		'border-strong-02': 'var(--ctp-frappe-overlay1)',
		'border-strong-03': 'var(--ctp-frappe-overlay2)',
		'border-subtle-00': 'var(--ctp-frappe-surface2)',
		'border-subtle-03': 'var(--ctp-frappe-overlay1)',
		'border-subtle-selected-02': 'var(--ctp-frappe-overlay1)',
		'border-subtle-selected-03': 'var(--ctp-frappe-overlay2)',
		'field-03': 'var(--ctp-frappe-mantle)',
		'field-hover-03': 'var(--ctp-frappe-crust)',
		'layer-03': 'var(--ctp-frappe-surface2)',
		'layer-active-03': 'var(--ctp-frappe-overlay2)',
		'layer-hover-03': 'var(--ctp-frappe-overlay2)',
		'layer-selected-03': 'var(--ctp-frappe-overlay1)',
		'layer-selected-hover-02': 'var(--ctp-frappe-overlay1)',
		'layer-selected-hover-03': 'var(--ctp-frappe-overlay2)',
		'layer-accent-02': 'var(--ctp-frappe-surface1)',
		'layer-accent-03': 'var(--ctp-frappe-surface0)',
		'layer-accent-active-02': 'var(--ctp-frappe-overlay1)',
		'layer-accent-active-03': 'var(--ctp-frappe-overlay2)',
		'layer-accent-hover-02': 'var(--ctp-frappe-overlay1)',
		'layer-accent-hover-03': 'var(--ctp-frappe-overlay2)',

		layer: 'var(--ctp-frappe-surface0)',
		'layer-accent': 'var(--ctp-frappe-surface2)',
		'layer-active': 'var(--ctp-frappe-overlay0)',
		'layer-accent-active': 'var(--ctp-frappe-overlay0)',
		'layer-accent-hover': 'var(--ctp-frappe-overlay0)',
		field: 'var(--ctp-frappe-surface0)',
		'layer-hover': 'var(--ctp-frappe-overlay0)',
		'field-hover': 'var(--ctp-frappe-surface0)',
		'border-subtle': 'var(--ctp-frappe-overlay0)',
		'border-strong': 'var(--ctp-frappe-overlay0)',
		'layer-selected-hover': 'var(--ctp-frappe-overlay0)',
		'layer-selected': 'var(--ctp-frappe-surface2)',
		'border-subtle-selected': 'var(--ctp-frappe-overlay0)',
		danger: 'var(--ctp-frappe-red)',
		'brand-01': 'var(--ctp-frappe-blue)',
		'brand-02': 'var(--ctp-frappe-subtext1)',
		'brand-03': 'var(--ctp-frappe-text)',
		'active-01': 'var(--ctp-frappe-blue)',
		'hover-field': 'var(--ctp-frappe-surface0)',

		// v11 update/split
		'button-danger-active': 'var(--ctp-frappe-red)',
		'layer-active-02': 'var(--ctp-frappe-overlay1)',
		'button-primary-active': 'var(--ctp-frappe-blue)',
		'button-secondary-active': 'var(--ctp-frappe-sapphire)',
		'button-tertiary-active': 'var(--ctp-frappe-overlay2)',
		'layer-active-01': 'var(--ctp-frappe-overlay0)',
		'background-active': 'var(--ctp-frappe-overlay0)',
		'layer-accent-active-01': 'var(--ctp-frappe-overlay0)',
		'border-subtle-selected-01': 'var(--ctp-frappe-overlay0)',
		'button-danger-primary': 'var(--ctp-frappe-red)',
		'button-danger-secondary': 'var(--ctp-frappe-peach)',
		'border-subtle-02': 'var(--ctp-frappe-overlay0)',
		'text-disabled': 'var(--ctp-frappe-overlay1)',
		'icon-disabled': 'var(--ctp-frappe-overlay1)',
		'button-disabled': 'var(--ctp-frappe-overlay1)',
		'border-disabled': 'var(--ctp-frappe-overlay1)',
		'icon-on-color-disabled': 'var(--ctp-frappe-overlay2)',
		'layer-selected-disabled': 'var(--ctp-frappe-overlay2)',
		'text-on-color-disabled': 'var(--ctp-frappe-overlay2)',
		'button-danger-hover': 'var(--ctp-frappe-red)',
		'layer-hover-02': 'var(--ctp-frappe-overlay1)',
		'button-primary-hover': 'var(--ctp-frappe-sapphire)',
		'link-primary-hover': 'var(--ctp-frappe-sky)',
		'button-secondary-hover': 'var(--ctp-frappe-overlay0)',
		'background-selected-hover': 'var(--ctp-frappe-overlay0)',
		'layer-accent-hover-01': 'var(--ctp-frappe-overlay0)',
		'layer-selected-hover-01': 'var(--ctp-frappe-overlay0)',
		'button-tertiary-hover': 'var(--ctp-frappe-sky)',
		'background-hover': 'var(--ctp-frappe-subtext0)',
		'layer-hover-01': 'var(--ctp-frappe-overlay0)',
		'field-hover-01': 'var(--ctp-frappe-surface0)',
		'field-hover-02': 'var(--ctp-frappe-crust)',
		'icon-primary': 'var(--ctp-frappe-subtext1)',
		'icon-secondary': 'var(--ctp-frappe-text)',
		'icon-on-color': 'var(--ctp-frappe-mantle)',
		'button-primary': 'var(--ctp-frappe-blue)',
		'background-brand': 'var(--ctp-frappe-blue)',
		'button-secondary': 'var(--ctp-frappe-sapphire)',
		'button-tertiary': 'var(--ctp-frappe-overlay2)',
		'border-interactive': 'var(--ctp-frappe-sapphire)',
		interactive: 'var(--ctp-frappe-sapphire)',
		'icon-inverse': 'var(--ctp-frappe-crust)',
		'focus-inset': 'var(--ctp-frappe-blue)',
		'text-inverse': 'var(--ctp-frappe-text)',
		'background-inverse': 'var(--ctp-frappe-text)',
		'focus-inverse': 'var(--ctp-frappe-blue)',
		'background-inverse-hover': 'var(--ctp-frappe-blue)',
		'link-inverse': 'var(--ctp-frappe-teal)',
		'support-error-inverse': 'var(--ctp-frappe-red)',
		'support-success-inverse': 'var(--ctp-frappe-green)',
		'support-warning-inverse': 'var(--ctp-frappe-yellow)',
		'support-info-inverse': 'var(--ctp-frappe-teal)',
		'link-primary': 'var(--ctp-frappe-blue)',
		'link-secondary': 'var(--ctp-frappe-sky)',
		overlay: 'var(--ctp-frappe-overlay0)',
		'layer-selected-02': 'var(--ctp-frappe-overlay0)',
		'layer-selected-01': 'var(--ctp-frappe-surface2)',
		'background-selected': 'var(--ctp-frappe-surface2)',
		'skeleton-background': 'var(--ctp-frappe-overlay0)',
		'skeleton-element': 'var(--ctp-frappe-overlay1)',
		'support-error': 'var(--ctp-frappe-red)',
		'support-success': 'var(--ctp-frappe-green)',
		'support-warning': 'var(--ctp-frappe-yellow)',
		'support-info': 'var(--ctp-frappe-teal)',
		'text-primary': 'var(--ctp-frappe-text)',
		'text-secondary': 'var(--ctp-frappe-subtext1)',
		'text-placeholder': 'var(--ctp-frappe-subtext0)',
		'text-on-color': 'var(--ctp-frappe-crust)',
		'text-helper': 'var(--ctp-frappe-subtext1)',
		'layer-01': 'var(--ctp-frappe-surface0)',
		'layer-02': 'var(--ctp-frappe-surface1)',
		'layer-accent-01': 'var(--ctp-frappe-surface2)',
		'border-subtle-01': 'var(--ctp-frappe-overlay0)',
		'toggle-off': 'var(--ctp-frappe-overlay0)',
		'border-strong-01': 'var(--ctp-frappe-overlay0)',
		'border-inverse': 'var(--ctp-frappe-text)',
		'layer-selected-inverse': 'var(--ctp-frappe-text)',
		background: 'var(--ctp-frappe-base)',
		'link-visited': 'var(--ctp-frappe-lavender)',
	},
	g10: {
		'ui-background': 'var(--ctp-latte-base)',
		'interactive-01': 'var(--ctp-latte-blue)',
		'interactive-02': 'var(--ctp-latte-subtext0)',
		'interactive-03': 'var(--ctp-latte-text)',
		'interactive-04': 'var(--ctp-latte-sapphire)',
		'danger-01': 'var(--ctp-latte-red)',
		'danger-02': 'var(--ctp-latte-peach)',
		'ui-01': 'var(--ctp-latte-surface0)',
		'ui-02': 'var(--ctp-latte-surface1)',
		'ui-03': 'var(--ctp-latte-surface2)',
		'ui-04': 'var(--ctp-latte-overlay0)',
		'ui-05': 'var(--ctp-latte-rosewater)',
		'button-separator': 'var(--ctp-latte-base)',
		'decorative-01': 'var(--ctp-latte-overlay0)',
		'text-01': 'var(--ctp-latte-text)',
		'text-02': 'var(--ctp-latte-subtext1)',
		'text-03': 'var(--ctp-latte-subtext0)',
		'text-04': 'var(--ctp-latte-crust)',
		'text-05': 'var(--ctp-latte-subtext1)',
		'text-error': 'var(--ctp-latte-red)',
		'link-01': 'var(--ctp-latte-blue)',
		'link-02': 'var(--ctp-latte-sky)',
		'inverse-link': 'var(--ctp-latte-teal)',
		'icon-01': 'var(--ctp-latte-subtext1)',
		'icon-02': 'var(--ctp-latte-text)',
		'icon-03': 'var(--ctp-latte-mantle)',
		'field-01': 'var(--ctp-latte-surface0)',
		'field-02': 'var(--ctp-latte-crust)',
		'inverse-01': 'var(--ctp-latte-base)',
		'inverse-02': 'var(--ctp-latte-text)',
		'support-01': 'var(--ctp-latte-red)',
		'support-02': 'var(--ctp-latte-green)',
		'support-03': 'var(--ctp-latte-yellow)',
		'support-04': 'var(--ctp-mocha-teal)',
		'inverse-support-01': 'var(--ctp-latte-red)',
		'inverse-support-02': 'var(--ctp-latte-green)',
		'inverse-support-03': 'var(--ctp-latte-yellow)',
		'inverse-support-04': 'var(--ctp-latte-teal)',
		'overlay-01': 'var(--ctp-latte-overlay0)',
		focus: 'var(--ctp-latte-lavender)',
		'inverse-focus-ui': 'var(--ctp-latte-blue)',
		'hover-primary': 'var(--ctp-latte-sapphire)',
		'hover-primary-text': 'var(--ctp-latte-sky)',
		'hover-secondary': 'var(--ctp-latte-overlay0)',
		'hover-tertiary': 'var(--ctp-latte-sky)',
		'hover-ui': 'var(--ctp-latte-overlay0)',
		'hover-light-ui': 'var(--ctp-latte-subtex1)',
		'hover-selected-ui': 'var(--ctp-latte-overlay1)',
		'hover-danger': 'var(--ctp-latte-red)',
		'hover-row': 'var(--ctp-latte-surface0)',
		'inverse-hover-ui': 'var(--ctp-latte-subtext0)',
		'active-primary': 'var(--ctp-latte-blue)',
		'active-secondary': 'var(--ctp-latte-sapphire)',
		'active-tertiary': 'var(--ctp-latte-overlay2)',
		'active-ui': 'var(--ctp-latte-overlay0)',
		'active-light-ui': 'var(--ctp-latte-overlay1)',
		'active-danger': 'var(--ctp-latte-red)',
		'selected-ui': 'var(--ctp-latte-surface2)',
		'selected-light-ui': 'var(--ctp-latte-overlay0)',
		highlight: 'var(--ctp-latte-sapphire)',
		'skeleton-01': 'var(--ctp-latte-overlay0)',
		'skeleton-02': 'var(--ctp-latte-overlay1)',
		'visited-link': 'var(--ctp-latte-lavender)',
		'disabled-01': 'var(--ctp-latte-overlay0)',
		'disabled-02': 'var(--ctp-latte-overlay1)',
		'disabled-03': 'var(--ctp-latte-overlay2)',

		// v11 new
		'border-strong-02': 'var(--ctp-latte-overlay1)',
		'border-strong-03': 'var(--ctp-latte-overlay2)',
		'border-subtle-00': 'var(--ctp-latte-surface2)',
		'border-subtle-03': 'var(--ctp-latte-overlay1)',
		'border-subtle-selected-02': 'var(--ctp-latte-overlay1)',
		'border-subtle-selected-03': 'var(--ctp-latte-overlay2)',
		'field-03': 'var(--ctp-latte-mantle)',
		'field-hover-03': 'var(--ctp-latte-crust)',
		'layer-03': 'var(--ctp-latte-surface2)',
		'layer-active-03': 'var(--ctp-latte-overlay2)',
		'layer-hover-03': 'var(--ctp-latte-overlay2)',
		'layer-selected-03': 'var(--ctp-latte-overlay1)',
		'layer-selected-hover-02': 'var(--ctp-latte-overlay1)',
		'layer-selected-hover-03': 'var(--ctp-latte-overlay2)',
		'layer-accent-02': 'var(--ctp-latte-surface1)',
		'layer-accent-03': 'var(--ctp-latte-surface0)',
		'layer-accent-active-02': 'var(--ctp-latte-overlay1)',
		'layer-accent-active-03': 'var(--ctp-latte-overlay2)',
		'layer-accent-hover-02': 'var(--ctp-latte-overlay1)',
		'layer-accent-hover-03': 'var(--ctp-latte-overlay2)',

		layer: 'var(--ctp-latte-surface0)',
		'layer-accent': 'var(--ctp-latte-surface2)',
		'layer-active': 'var(--ctp-latte-overlay0)',
		'layer-accent-active': 'var(--ctp-latte-overlay0)',
		'layer-accent-hover': 'var(--ctp-latte-overlay0)',
		field: 'var(--ctp-latte-surface0)',
		'layer-hover': 'var(--ctp-latte-overlay0)',
		'field-hover': 'var(--ctp-latte-surface0)',
		'border-subtle': 'var(--ctp-latte-overlay0)',
		'border-strong': 'var(--ctp-latte-overlay0)',
		'layer-selected-hover': 'var(--ctp-latte-overlay0)',
		'layer-selected': 'var(--ctp-latte-surface2)',
		'border-subtle-selected': 'var(--ctp-latte-overlay0)',
		danger: 'var(--ctp-latte-red)',
		'brand-01': 'var(--ctp-latte-blue)',
		'brand-02': 'var(--ctp-latte-subtext1)',
		'brand-03': 'var(--ctp-latte-text)',
		'active-01': 'var(--ctp-latte-blue)',
		'hover-field': 'var(--ctp-latte-surface0)',

		// v11 update/split
		'button-danger-active': 'var(--ctp-latte-red)',
		'layer-active-02': 'var(--ctp-latte-overlay1)',
		'button-primary-active': 'var(--ctp-latte-blue)',
		'button-secondary-active': 'var(--ctp-latte-sapphire)',
		'button-tertiary-active': 'var(--ctp-latte-overlay2)',
		'layer-active-01': 'var(--ctp-latte-overlay0)',
		'background-active': 'var(--ctp-latte-overlay0)',
		'layer-accent-active-01': 'var(--ctp-latte-overlay0)',
		'border-subtle-selected-01': 'var(--ctp-latte-overlay0)',
		'button-danger-primary': 'var(--ctp-latte-red)',
		'button-danger-secondary': 'var(--ctp-latte-peach)',
		'border-subtle-02': 'var(--ctp-latte-overlay0)',
		'text-disabled': 'var(--ctp-latte-overlay1)',
		'icon-disabled': 'var(--ctp-latte-overlay1)',
		'button-disabled': 'var(--ctp-latte-overlay1)',
		'border-disabled': 'var(--ctp-latte-overlay1)',
		'icon-on-color-disabled': 'var(--ctp-latte-overlay2)',
		'layer-selected-disabled': 'var(--ctp-latte-overlay2)',
		'text-on-color-disabled': 'var(--ctp-latte-overlay2)',
		'button-danger-hover': 'var(--ctp-latte-red)',
		'layer-hover-02': 'var(--ctp-latte-overlay1)',
		'button-primary-hover': 'var(--ctp-latte-sapphire)',
		'link-primary-hover': 'var(--ctp-latte-sky)',
		'button-secondary-hover': 'var(--ctp-latte-overlay0)',
		'background-selected-hover': 'var(--ctp-latte-overlay0)',
		'layer-accent-hover-01': 'var(--ctp-latte-overlay0)',
		'layer-selected-hover-01': 'var(--ctp-latte-overlay0)',
		'button-tertiary-hover': 'var(--ctp-latte-sky)',
		'background-hover': 'var(--ctp-latte-subtext0)',
		'layer-hover-01': 'var(--ctp-latte-overlay0)',
		'field-hover-01': 'var(--ctp-latte-surface0)',
		'field-hover-02': 'var(--ctp-latte-crust)',
		'icon-primary': 'var(--ctp-latte-subtext1)',
		'icon-secondary': 'var(--ctp-latte-text)',
		'icon-on-color': 'var(--ctp-latte-mantle)',
		'button-primary': 'var(--ctp-latte-blue)',
		'background-brand': 'var(--ctp-latte-blue)',
		'button-secondary': 'var(--ctp-latte-sapphire)',
		'button-tertiary': 'var(--ctp-latte-overlay2)',
		'border-interactive': 'var(--ctp-latte-sapphire)',
		interactive: 'var(--ctp-latte-sapphire)',
		'icon-inverse': 'var(--ctp-latte-crust)',
		'focus-inset': 'var(--ctp-latte-blue)',
		'text-inverse': 'var(--ctp-latte-text)',
		'background-inverse': 'var(--ctp-latte-text)',
		'focus-inverse': 'var(--ctp-latte-blue)',
		'background-inverse-hover': 'var(--ctp-latte-blue)',
		'link-inverse': 'var(--ctp-latte-teal)',
		'support-error-inverse': 'var(--ctp-latte-red)',
		'support-success-inverse': 'var(--ctp-latte-green)',
		'support-warning-inverse': 'var(--ctp-latte-yellow)',
		'support-info-inverse': 'var(--ctp-latte-teal)',
		'link-primary': 'var(--ctp-latte-blue)',
		'link-secondary': 'var(--ctp-latte-sky)',
		overlay: 'var(--ctp-latte-overlay0)',
		'layer-selected-02': 'var(--ctp-latte-overlay0)',
		'layer-selected-01': 'var(--ctp-latte-surface2)',
		'background-selected': 'var(--ctp-latte-surface2)',
		'skeleton-background': 'var(--ctp-latte-overlay0)',
		'skeleton-element': 'var(--ctp-latte-overlay1)',
		'support-error': 'var(--ctp-latte-red)',
		'support-success': 'var(--ctp-latte-green)',
		'support-warning': 'var(--ctp-latte-yellow)',
		'support-info': 'var(--ctp-latte-teal)',
		'text-primary': 'var(--ctp-latte-text)',
		'text-secondary': 'var(--ctp-latte-subtext1)',
		'text-placeholder': 'var(--ctp-latte-subtext0)',
		'text-on-color': 'var(--ctp-latte-crust)',
		'text-helper': 'var(--ctp-latte-subtext1)',
		'layer-01': 'var(--ctp-latte-surface0)',
		'layer-02': 'var(--ctp-latte-surface1)',
		'layer-accent-01': 'var(--ctp-latte-surface2)',
		'border-subtle-01': 'var(--ctp-latte-overlay0)',
		'toggle-off': 'var(--ctp-latte-overlay0)',
		'border-strong-01': 'var(--ctp-latte-overlay0)',
		'border-inverse': 'var(--ctp-latte-text)',
		'layer-selected-inverse': 'var(--ctp-latte-text)',
		background: 'var(--ctp-latte-base)',
		'link-visited': 'var(--ctp-latte-lavender)',
	},
	white: {
		'ui-background': 'var(--ctp-latte-base)',
		'interactive-01': 'var(--ctp-latte-blue)',
		'interactive-02': 'var(--ctp-latte-subtext0)',
		'interactive-03': 'var(--ctp-latte-text)',
		'interactive-04': 'var(--ctp-latte-sapphire)',
		'danger-01': 'var(--ctp-latte-red)',
		'danger-02': 'var(--ctp-latte-peach)',
		'ui-01': 'var(--ctp-latte-surface0)',
		'ui-02': 'var(--ctp-latte-surface1)',
		'ui-03': 'var(--ctp-latte-surface2)',
		'ui-04': 'var(--ctp-latte-overlay0)',
		'ui-05': 'var(--ctp-latte-rosewater)',
		'button-separator': 'var(--ctp-latte-base)',
		'decorative-01': 'var(--ctp-latte-overlay0)',
		'text-01': 'var(--ctp-latte-text)',
		'text-02': 'var(--ctp-latte-subtext1)',
		'text-03': 'var(--ctp-latte-subtext0)',
		'text-04': 'var(--ctp-latte-crust)',
		'text-05': 'var(--ctp-latte-subtext1)',
		'text-error': 'var(--ctp-latte-red)',
		'link-01': 'var(--ctp-latte-blue)',
		'link-02': 'var(--ctp-latte-sky)',
		'inverse-link': 'var(--ctp-latte-teal)',
		'icon-01': 'var(--ctp-latte-subtext1)',
		'icon-02': 'var(--ctp-latte-text)',
		'icon-03': 'var(--ctp-latte-mantle)',
		'field-01': 'var(--ctp-latte-surface0)',
		'field-02': 'var(--ctp-latte-crust)',
		'inverse-01': 'var(--ctp-latte-base)',
		'inverse-02': 'var(--ctp-latte-text)',
		'support-01': 'var(--ctp-latte-red)',
		'support-02': 'var(--ctp-latte-green)',
		'support-03': 'var(--ctp-latte-yellow)',
		'support-04': 'var(--ctp-mocha-teal)',
		'inverse-support-01': 'var(--ctp-latte-red)',
		'inverse-support-02': 'var(--ctp-latte-green)',
		'inverse-support-03': 'var(--ctp-latte-yellow)',
		'inverse-support-04': 'var(--ctp-latte-teal)',
		'overlay-01': 'var(--ctp-latte-overlay0)',
		focus: 'var(--ctp-latte-lavender)',
		'inverse-focus-ui': 'var(--ctp-latte-blue)',
		'hover-primary': 'var(--ctp-latte-sapphire)',
		'hover-primary-text': 'var(--ctp-latte-sky)',
		'hover-secondary': 'var(--ctp-latte-overlay0)',
		'hover-tertiary': 'var(--ctp-latte-sky)',
		'hover-ui': 'var(--ctp-latte-overlay0)',
		'hover-light-ui': 'var(--ctp-latte-subtex1)',
		'hover-selected-ui': 'var(--ctp-latte-overlay1)',
		'hover-danger': 'var(--ctp-latte-red)',
		'hover-row': 'var(--ctp-latte-surface0)',
		'inverse-hover-ui': 'var(--ctp-latte-subtext0)',
		'active-primary': 'var(--ctp-latte-blue)',
		'active-secondary': 'var(--ctp-latte-sapphire)',
		'active-tertiary': 'var(--ctp-latte-overlay2)',
		'active-ui': 'var(--ctp-latte-overlay0)',
		'active-light-ui': 'var(--ctp-latte-overlay1)',
		'active-danger': 'var(--ctp-latte-red)',
		'selected-ui': 'var(--ctp-latte-surface2)',
		'selected-light-ui': 'var(--ctp-latte-overlay0)',
		highlight: 'var(--ctp-latte-sapphire)',
		'skeleton-01': 'var(--ctp-latte-overlay0)',
		'skeleton-02': 'var(--ctp-latte-overlay1)',
		'visited-link': 'var(--ctp-latte-lavender)',
		'disabled-01': 'var(--ctp-latte-overlay0)',
		'disabled-02': 'var(--ctp-latte-overlay1)',
		'disabled-03': 'var(--ctp-latte-overlay2)',

		// v11 new
		'border-strong-02': 'var(--ctp-latte-overlay1)',
		'border-strong-03': 'var(--ctp-latte-overlay2)',
		'border-subtle-00': 'var(--ctp-latte-surface2)',
		'border-subtle-03': 'var(--ctp-latte-overlay1)',
		'border-subtle-selected-02': 'var(--ctp-latte-overlay1)',
		'border-subtle-selected-03': 'var(--ctp-latte-overlay2)',
		'field-03': 'var(--ctp-latte-mantle)',
		'field-hover-03': 'var(--ctp-latte-crust)',
		'layer-03': 'var(--ctp-latte-surface2)',
		'layer-active-03': 'var(--ctp-latte-overlay2)',
		'layer-hover-03': 'var(--ctp-latte-overlay2)',
		'layer-selected-03': 'var(--ctp-latte-overlay1)',
		'layer-selected-hover-02': 'var(--ctp-latte-overlay1)',
		'layer-selected-hover-03': 'var(--ctp-latte-overlay2)',
		'layer-accent-02': 'var(--ctp-latte-surface1)',
		'layer-accent-03': 'var(--ctp-latte-surface0)',
		'layer-accent-active-02': 'var(--ctp-latte-overlay1)',
		'layer-accent-active-03': 'var(--ctp-latte-overlay2)',
		'layer-accent-hover-02': 'var(--ctp-latte-overlay1)',
		'layer-accent-hover-03': 'var(--ctp-latte-overlay2)',

		layer: 'var(--ctp-latte-surface0)',
		'layer-accent': 'var(--ctp-latte-surface2)',
		'layer-active': 'var(--ctp-latte-overlay0)',
		'layer-accent-active': 'var(--ctp-latte-overlay0)',
		'layer-accent-hover': 'var(--ctp-latte-overlay0)',
		field: 'var(--ctp-latte-surface0)',
		'layer-hover': 'var(--ctp-latte-overlay0)',
		'field-hover': 'var(--ctp-latte-surface0)',
		'border-subtle': 'var(--ctp-latte-overlay0)',
		'border-strong': 'var(--ctp-latte-overlay0)',
		'layer-selected-hover': 'var(--ctp-latte-overlay0)',
		'layer-selected': 'var(--ctp-latte-surface2)',
		'border-subtle-selected': 'var(--ctp-latte-overlay0)',
		danger: 'var(--ctp-latte-red)',
		'brand-01': 'var(--ctp-latte-blue)',
		'brand-02': 'var(--ctp-latte-subtext1)',
		'brand-03': 'var(--ctp-latte-text)',
		'active-01': 'var(--ctp-latte-blue)',
		'hover-field': 'var(--ctp-latte-surface0)',

		// v11 update/split
		'button-danger-active': 'var(--ctp-latte-red)',
		'layer-active-02': 'var(--ctp-latte-overlay1)',
		'button-primary-active': 'var(--ctp-latte-blue)',
		'button-secondary-active': 'var(--ctp-latte-sapphire)',
		'button-tertiary-active': 'var(--ctp-latte-overlay2)',
		'layer-active-01': 'var(--ctp-latte-overlay0)',
		'background-active': 'var(--ctp-latte-overlay0)',
		'layer-accent-active-01': 'var(--ctp-latte-overlay0)',
		'border-subtle-selected-01': 'var(--ctp-latte-overlay0)',
		'button-danger-primary': 'var(--ctp-latte-red)',
		'button-danger-secondary': 'var(--ctp-latte-peach)',
		'border-subtle-02': 'var(--ctp-latte-overlay0)',
		'text-disabled': 'var(--ctp-latte-overlay1)',
		'icon-disabled': 'var(--ctp-latte-overlay1)',
		'button-disabled': 'var(--ctp-latte-overlay1)',
		'border-disabled': 'var(--ctp-latte-overlay1)',
		'icon-on-color-disabled': 'var(--ctp-latte-overlay2)',
		'layer-selected-disabled': 'var(--ctp-latte-overlay2)',
		'text-on-color-disabled': 'var(--ctp-latte-overlay2)',
		'button-danger-hover': 'var(--ctp-latte-red)',
		'layer-hover-02': 'var(--ctp-latte-overlay1)',
		'button-primary-hover': 'var(--ctp-latte-sapphire)',
		'link-primary-hover': 'var(--ctp-latte-sky)',
		'button-secondary-hover': 'var(--ctp-latte-overlay0)',
		'background-selected-hover': 'var(--ctp-latte-overlay0)',
		'layer-accent-hover-01': 'var(--ctp-latte-overlay0)',
		'layer-selected-hover-01': 'var(--ctp-latte-overlay0)',
		'button-tertiary-hover': 'var(--ctp-latte-sky)',
		'background-hover': 'var(--ctp-latte-subtext0)',
		'layer-hover-01': 'var(--ctp-latte-overlay0)',
		'field-hover-01': 'var(--ctp-latte-surface0)',
		'field-hover-02': 'var(--ctp-latte-crust)',
		'icon-primary': 'var(--ctp-latte-subtext1)',
		'icon-secondary': 'var(--ctp-latte-text)',
		'icon-on-color': 'var(--ctp-latte-mantle)',
		'button-primary': 'var(--ctp-latte-blue)',
		'background-brand': 'var(--ctp-latte-blue)',
		'button-secondary': 'var(--ctp-latte-sapphire)',
		'button-tertiary': 'var(--ctp-latte-overlay2)',
		'border-interactive': 'var(--ctp-latte-sapphire)',
		interactive: 'var(--ctp-latte-sapphire)',
		'icon-inverse': 'var(--ctp-latte-crust)',
		'focus-inset': 'var(--ctp-latte-blue)',
		'text-inverse': 'var(--ctp-latte-text)',
		'background-inverse': 'var(--ctp-latte-text)',
		'focus-inverse': 'var(--ctp-latte-blue)',
		'background-inverse-hover': 'var(--ctp-latte-blue)',
		'link-inverse': 'var(--ctp-latte-teal)',
		'support-error-inverse': 'var(--ctp-latte-red)',
		'support-success-inverse': 'var(--ctp-latte-green)',
		'support-warning-inverse': 'var(--ctp-latte-yellow)',
		'support-info-inverse': 'var(--ctp-latte-teal)',
		'link-primary': 'var(--ctp-latte-blue)',
		'link-secondary': 'var(--ctp-latte-sky)',
		overlay: 'var(--ctp-latte-overlay0)',
		'layer-selected-02': 'var(--ctp-latte-overlay0)',
		'layer-selected-01': 'var(--ctp-latte-surface2)',
		'background-selected': 'var(--ctp-latte-surface2)',
		'skeleton-background': 'var(--ctp-latte-overlay0)',
		'skeleton-element': 'var(--ctp-latte-overlay1)',
		'support-error': 'var(--ctp-latte-red)',
		'support-success': 'var(--ctp-latte-green)',
		'support-warning': 'var(--ctp-latte-yellow)',
		'support-info': 'var(--ctp-latte-teal)',
		'text-primary': 'var(--ctp-latte-text)',
		'text-secondary': 'var(--ctp-latte-subtext1)',
		'text-placeholder': 'var(--ctp-latte-subtext0)',
		'text-on-color': 'var(--ctp-latte-crust)',
		'text-helper': 'var(--ctp-latte-subtext1)',
		'layer-01': 'var(--ctp-latte-surface0)',
		'layer-02': 'var(--ctp-latte-surface1)',
		'layer-accent-01': 'var(--ctp-latte-surface2)',
		'border-subtle-01': 'var(--ctp-latte-overlay0)',
		'toggle-off': 'var(--ctp-latte-overlay0)',
		'border-strong-01': 'var(--ctp-latte-overlay0)',
		'border-inverse': 'var(--ctp-latte-text)',
		'layer-selected-inverse': 'var(--ctp-latte-text)',
		background: 'var(--ctp-latte-base)',
		'link-visited': 'var(--ctp-latte-lavender)',
	},
	default: {
		'ui-background': 'var(--ctp-mocha-base)',
		'interactive-01': 'var(--ctp-mocha-blue)',
		'interactive-02': 'var(--ctp-mocha-subtext0)',
		'interactive-03': 'var(--ctp-mocha-text)',
		'interactive-04': 'var(--ctp-mocha-sapphire)',
		'danger-01': 'var(--ctp-mocha-red)',
		'danger-02': 'var(--ctp-mocha-peach)',
		'ui-01': 'var(--ctp-mocha-surface0)',
		'ui-02': 'var(--ctp-mocha-surface1)',
		'ui-03': 'var(--ctp-mocha-surface2)',
		'ui-04': 'var(--ctp-mocha-overlay0)',
		'ui-05': 'var(--ctp-mocha-rosewater)',
		'button-separator': 'var(--ctp-mocha-base)',
		'decorative-01': 'var(--ctp-mocha-overlay0)',
		'text-01': 'var(--ctp-mocha-text)',
		'text-02': 'var(--ctp-mocha-subtext1)',
		'text-03': 'var(--ctp-mocha-subtext0)',
		'text-04': 'var(--ctp-mocha-crust)',
		'text-05': 'var(--ctp-mocha-subtext1)',
		'text-error': 'var(--ctp-mocha-red)',
		'link-01': 'var(--ctp-mocha-blue)',
		'link-02': 'var(--ctp-mocha-sky)',
		'inverse-link': 'var(--ctp-mocha-teal)',
		'icon-01': 'var(--ctp-mocha-subtext1)',
		'icon-02': 'var(--ctp-mocha-text)',
		'icon-03': 'var(--ctp-mocha-mantle)',
		'field-01': 'var(--ctp-mocha-surface0)',
		'field-02': 'var(--ctp-mocha-crust)',
		'inverse-01': 'var(--ctp-mocha-crust)',
		'inverse-02': 'var(--ctp-mocha-text)',
		'support-01': 'var(--ctp-mocha-red)',
		'support-02': 'var(--ctp-mocha-green)',
		'support-03': 'var(--ctp-mocha-yellow)',
		'support-04': 'var(--ctp-mocha-teal)',
		'inverse-support-01': 'var(--ctp-mocha-red)',
		'inverse-support-02': 'var(--ctp-mocha-green)',
		'inverse-support-03': 'var(--ctp-mocha-yellow)',
		'inverse-support-04': 'var(--ctp-mocha-teal)',
		'overlay-01': 'var(--ctp-mocha-overlay0)',
		focus: 'var(--ctp-mocha-lavender)',
		'inverse-focus-ui': 'var(--ctp-mocha-blue)',
		'hover-primary': 'var(--ctp-mocha-sapphire)',
		'hover-primary-text': 'var(--ctp-mocha-sky)',
		'hover-secondary': 'var(--ctp-mocha-overlay0)',
		'hover-tertiary': 'var(--ctp-mocha-sky)',
		'hover-ui': 'var(--ctp-mocha-overlay0)',
		'hover-light-ui': 'var(--ctp-mocha-subtex1)',
		'hover-selected-ui': 'var(--ctp-mocha-overlay1)',
		'hover-danger': 'var(--ctp-mocha-red)',
		'hover-row': 'var(--ctp-mocha-surface0)',
		'inverse-hover-ui': 'var(--ctp-mocha-subtext0)',
		'active-primary': 'var(--ctp-mocha-blue)',
		'active-secondary': 'var(--ctp-mocha-sapphire)',
		'active-tertiary': 'var(--ctp-mocha-overlay2)',
		'active-ui': 'var(--ctp-mocha-overlay0)',
		'active-light-ui': 'var(--ctp-mocha-overlay1)',
		'active-danger': 'var(--ctp-mocha-red)',
		'selected-ui': 'var(--ctp-mocha-surface2)',
		'selected-light-ui': 'var(--ctp-mocha-overlay0)',
		highlight: 'var(--ctp-mocha-sapphire)',
		'skeleton-01': 'var(--ctp-mocha-overlay0)',
		'skeleton-02': 'var(--ctp-mocha-overlay1)',
		'visited-link': 'var(--ctp-mocha-lavender)',
		'disabled-01': 'var(--ctp-mocha-overlay0)',
		'disabled-02': 'var(--ctp-mocha-overlay1)',
		'disabled-03': 'var(--ctp-mocha-overlay2)',

		// v11 new
		'border-strong-02': 'var(--ctp-mocha-overlay1)',
		'border-strong-03': 'var(--ctp-mocha-overlay2)',
		'border-subtle-00': 'var(--ctp-mocha-surface2)',
		'border-subtle-03': 'var(--ctp-mocha-overlay1)',
		'border-subtle-selected-02': 'var(--ctp-mocha-overlay1)',
		'border-subtle-selected-03': 'var(--ctp-mocha-overlay2)',
		'field-03': 'var(--ctp-mocha-mantle)',
		'field-hover-03': 'var(--ctp-mocha-crust)',
		'layer-03': 'var(--ctp-mocha-surface2)',
		'layer-active-03': 'var(--ctp-mocha-overlay2)',
		'layer-hover-03': 'var(--ctp-mocha-overlay2)',
		'layer-selected-03': 'var(--ctp-mocha-overlay1)',
		'layer-selected-hover-02': 'var(--ctp-mocha-overlay1)',
		'layer-selected-hover-03': 'var(--ctp-mocha-overlay2)',
		'layer-accent-02': 'var(--ctp-mocha-surface1)',
		'layer-accent-03': 'var(--ctp-mocha-surface0)',
		'layer-accent-active-02': 'var(--ctp-mocha-overlay1)',
		'layer-accent-active-03': 'var(--ctp-mocha-overlay2)',
		'layer-accent-hover-02': 'var(--ctp-mocha-overlay1)',
		'layer-accent-hover-03': 'var(--ctp-mocha-overlay2)',

		layer: 'var(--ctp-mocha-surface0)',
		'layer-accent': 'var(--ctp-mocha-surface2)',
		'layer-active': 'var(--ctp-mocha-overlay0)',
		'layer-accent-active': 'var(--ctp-mocha-overlay0)',
		'layer-accent-hover': 'var(--ctp-mocha-overlay0)',
		field: 'var(--ctp-mocha-surface0)',
		'layer-hover': 'var(--ctp-mocha-overlay0)',
		'field-hover': 'var(--ctp-mocha-surface0)',
		'border-subtle': 'var(--ctp-mocha-overlay0)',
		'border-strong': 'var(--ctp-mocha-overlay0)',
		'layer-selected-hover': 'var(--ctp-mocha-overlay0)',
		'layer-selected': 'var(--ctp-mocha-surface2)',
		'border-subtle-selected': 'var(--ctp-mocha-overlay0)',
		danger: 'var(--ctp-mocha-red)',
		'brand-01': 'var(--ctp-mocha-blue)',
		'brand-02': 'var(--ctp-mocha-subtext1)',
		'brand-03': 'var(--ctp-mocha-text)',
		'active-01': 'var(--ctp-mocha-blue)',
		'hover-field': 'var(--ctp-mocha-surface0)',

		// v11 update/split
		'button-danger-active': 'var(--ctp-mocha-red)',
		'layer-active-02': 'var(--ctp-mocha-overlay1)',
		'button-primary-active': 'var(--ctp-mocha-blue)',
		'button-secondary-active': 'var(--ctp-mocha-sapphire)',
		'button-tertiary-active': 'var(--ctp-mocha-overlay2)',
		'layer-active-01': 'var(--ctp-mocha-overlay0)',
		'background-active': 'var(--ctp-mocha-overlay0)',
		'layer-accent-active-01': 'var(--ctp-mocha-overlay0)',
		'border-subtle-selected-01': 'var(--ctp-mocha-overlay0)',
		'button-danger-primary': 'var(--ctp-mocha-red)',
		'button-danger-secondary': 'var(--ctp-mocha-peach)',
		'border-subtle-02': 'var(--ctp-mocha-overlay0)',
		'text-disabled': 'var(--ctp-mocha-overlay1)',
		'icon-disabled': 'var(--ctp-mocha-overlay1)',
		'button-disabled': 'var(--ctp-mocha-overlay1)',
		'border-disabled': 'var(--ctp-mocha-overlay1)',
		'icon-on-color-disabled': 'var(--ctp-mocha-overlay2)',
		'layer-selected-disabled': 'var(--ctp-mocha-overlay2)',
		'text-on-color-disabled': 'var(--ctp-mocha-overlay2)',
		'button-danger-hover': 'var(--ctp-mocha-red)',
		'layer-hover-02': 'var(--ctp-mocha-overlay1)',
		'button-primary-hover': 'var(--ctp-mocha-sapphire)',
		'link-primary-hover': 'var(--ctp-mocha-sky)',
		'button-secondary-hover': 'var(--ctp-mocha-overlay0)',
		'background-selected-hover': 'var(--ctp-mocha-overlay0)',
		'layer-accent-hover-01': 'var(--ctp-mocha-overlay0)',
		'layer-selected-hover-01': 'var(--ctp-mocha-overlay0)',
		'button-tertiary-hover': 'var(--ctp-mocha-sky)',
		'background-hover': 'var(--ctp-mocha-subtext0)',
		'layer-hover-01': 'var(--ctp-mocha-overlay0)',
		'field-hover-01': 'var(--ctp-mocha-surface0)',
		'field-hover-02': 'var(--ctp-mocha-crust)',
		'icon-primary': 'var(--ctp-mocha-subtext1)',
		'icon-secondary': 'var(--ctp-mocha-text)',
		'icon-on-color': 'var(--ctp-mocha-mantle)',
		'button-primary': 'var(--ctp-mocha-blue)',
		'background-brand': 'var(--ctp-mocha-blue)',
		'button-secondary': 'var(--ctp-mocha-sapphire)',
		'button-tertiary': 'var(--ctp-mocha-overlay2)',
		'border-interactive': 'var(--ctp-mocha-sapphire)',
		interactive: 'var(--ctp-mocha-sapphire)',
		'icon-inverse': 'var(--ctp-mocha-crust)',
		'focus-inset': 'var(--ctp-mocha-blue)',
		'text-inverse': 'var(--ctp-mocha-text)',
		'background-inverse': 'var(--ctp-mocha-text)',
		'focus-inverse': 'var(--ctp-mocha-blue)',
		'background-inverse-hover': 'var(--ctp-mocha-blue)',
		'link-inverse': 'var(--ctp-mocha-teal)',
		'support-error-inverse': 'var(--ctp-mocha-red)',
		'support-success-inverse': 'var(--ctp-mocha-green)',
		'support-warning-inverse': 'var(--ctp-mocha-yellow)',
		'support-info-inverse': 'var(--ctp-mocha-teal)',
		'link-primary': 'var(--ctp-mocha-blue)',
		'link-secondary': 'var(--ctp-mocha-sky)',
		overlay: 'var(--ctp-mocha-overlay0)',
		'layer-selected-02': 'var(--ctp-mocha-overlay0)',
		'layer-selected-01': 'var(--ctp-mocha-surface2)',
		'background-selected': 'var(--ctp-mocha-surface2)',
		'skeleton-background': 'var(--ctp-mocha-overlay0)',
		'skeleton-element': 'var(--ctp-mocha-overlay1)',
		'support-error': 'var(--ctp-mocha-red)',
		'support-success': 'var(--ctp-mocha-green)',
		'support-warning': 'var(--ctp-mocha-yellow)',
		'support-info': 'var(--ctp-mocha-teal)',
		'text-primary': 'var(--ctp-mocha-text)',
		'text-secondary': 'var(--ctp-mocha-subtext1)',
		'text-placeholder': 'var(--ctp-mocha-subtext0)',
		'text-on-color': 'var(--ctp-mocha-crust)',
		'text-helper': 'var(--ctp-mocha-subtext1)',
		'layer-01': 'var(--ctp-mocha-surface0)',
		'layer-02': 'var(--ctp-mocha-surface1)',
		'layer-accent-01': 'var(--ctp-mocha-surface2)',
		'border-subtle-01': 'var(--ctp-mocha-overlay0)',
		'toggle-off': 'var(--ctp-mocha-overlay0)',
		'border-strong-01': 'var(--ctp-mocha-overlay0)',
		'border-inverse': 'var(--ctp-mocha-text)',
		'layer-selected-inverse': 'var(--ctp-mocha-text)',
		background: 'var(--ctp-mocha-base)',
		'link-visited': 'var(--ctp-mocha-lavender)',
	},
} as const;

/*
https://v10.carbondesignsystem.com/guidelines/color/usage

Core color tokens
Token
Role
Value
ui-background
Default page background
White
—
#ffffff

interactive-01
Primary interactive color;
Primary buttons
Blue 60
—
#0f62fe

interactive-02
Secondary interactive color;
Secondary button
Gray 80
—
#393939

interactive-03
4.5:1 AA contrast;
Tertiary button
Blue 60
—
#0f62fe

interactive-04
3:1 AA contrast;
Selected elements;
Active elements;
Accent icons
Blue 60
—
#0f62fe

danger-01
Danger button background;
3:1 AA contrast
Red 60
—
#da1e28

danger-02
Danger button variant;
Text;
Icon;
Border
Red 60
—
#da1e28

ui-01
Container background on ui-background;
Secondary page background
Gray 10
—
#f4f4f4

ui-02
Container background on ui-01;
`Light` variant background
White
—
#ffffff

ui-03
Subtle border;
Tertiary background
Gray 20
—
#e0e0e0

ui-04
3:1 aa element contrast;
Medium contrast border
Gray 50
—
#8d8d8d

ui-05
4.5:1 aa element contrast;
High contrast border;
Emphasis elements
Gray 100
—
#161616

button-separator
3:1 aa element contrast;
Fluid button separator
Gray 20
—
#e0e0e0

decorative-01
“Light” variant elements
Gray 20
—
#e0e0e0

text-01
Primary text;
Body copy;
Headers;
Hover text color for text-02
Gray 100
—
#161616

text-02
Secondary text;
Input labels
Gray 70
—
#525252

text-03
Placeholder text
Gray 40
—
#a8a8a8

text-04
Text on interactive colors
White
—
#ffffff

text-05
Tertiary text;
Help text
Gray 60
—
#6f6f6f

text-error
Error message text
Red 60
—
#da1e28

link-01
Primary links;
Ghost button
Blue 60
—
#0f62fe

link-02
Secondary link color for lower contrast backgrounds
Blue 70
—
#0043ce

inverse-link
Links on inverse-02 backgrounds
Blue 40
—
#78a9ff

icon-01
Primary icons
Gray 100
—
#161616

icon-02
Secondary icons
Gray 70
—
#525252

icon-03
Icons on interactive colors;
Icons on non-ui colors
White
—
#ffffff

field-01
Default input fields;
Fields on ui-backgrounds
Gray 10
—
#f4f4f4

field-02
“Light” variant input fields;
Fields on ui-01 backgrounds
White
—
#ffffff

inverse-01
Inverse text color;
Inverse icon color
White
—
#ffffff

inverse-02
High contrast backgrounds;
High contrast elements
Gray 80
—
#393939

support-01
Error
Red 60
—
#da1e28

support-02
Success
Green 60
—
#198038

support-03
Warning
Yellow
—
#f1c21b

support-04
Information
Blue 70
—
#0043ce

inverse-support-01
Danger in high contrast moments
Red 50
—
#fa4d56

inverse-support-02
Success in high contrast moments
Green 40
—
#42be65

inverse-support-03
Warning in high contrast moments
Yellow
—
#f1c21b

inverse-support-04
Information in high contrast moments
Blue 50
—
#4589ff

overlay-01
Background overlay
Gray 100
—
#161616 @ 50%

Interactive color tokens
Token
Role
Value
focus
Focus border;
Focus underline
Blue 60
—
#0f62fe

inverse-focus-ui
Focus on high contrast moments
White
—
#ffffff

hover-primary
interactive-01 hover
Blue 60 hover
—
#0353e9

hover-primary-text
interactive-01 text hover
Blue 70
—
#0043ce

hover-secondary
interactive-02 hover
Gray 80 hover
—
#4c4c4c

hover-tertiary
interactive-03 hover;
inverse-01 hover
Blue 60 hover
—
#0353e9

hover-ui
ui-01 hover;
ui-02 hover;
Transparent background hover
Gray 10 hover
—
#e5e5e5

hover-light-ui
“Light” variant hover
Gray 10 hover
—
#e5e5e5

hover-selected-ui
Selected row hover
Gray 20 hover
—
#cacaca

hover-danger
Danger hover;
support-01 hover
Red 60 hover
—
#ba1b23

hover-row
Row hover
Gray 10 hover
—
#e5e5e5

inverse-hover-ui
Hover for inverse-02
Gray 80 hover
—
#4c4c4c

active-primary
interactive-01 active
Blue 80
—
#002d9c

active-secondary
interactive-02 active;
inverse-01 active
Gray 60
—
#6f6f6f

active-tertiary
interactive-03 active
Blue 80
—
#002d9c

active-ui
ui-01 active;
ui-02 active
Gray 30
—
#c6c6c6

active-light-ui
“Light” variant active
Gray 30
—
#c6c6c6

active-danger
Danger active;
support-01 active
Red 80
—
#750e13

selected-ui
Selected UI elements
Gray 20
—
#e0e0e0

selected-light-ui
“Light” variant selected
Gray 20
—
#e0e0e0

highlight
interactive-01 highlight
Blue 20
—
#d0e2ff

skeleton-01
Skeleton state of graphics
Gray 10 hover
—
#e5e5e5

skeleton-02
Skeleton state of texts
Gray 30
—
#c6c6c6

visited-link
Visited links
Purple 60
—
#8a3ffc

disabled-01
Disabled fields;
Disabled backgrounds;
Disabled border
Gray 10
—
#f4f4f4

disabled-02
Disabled elements on disabled-01;
Disabled label;
Disabled text on disabled-01;
Disabled icons;
Disabled border
Gray 30
—
#c6c6c6

disabled-03
Disabled text on disabled-02;
Disabled icons on disabled-02
Gray 50
—
#8d8d8d
*/
