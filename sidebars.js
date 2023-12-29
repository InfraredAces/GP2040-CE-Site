/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
- render a sidebar for each doc of that group
- provide next/previous navigation

The sidebars can be generated from the filesystem, or explicitly defined here.

Create as many sidebars as you want.
*/

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	// tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

	// But you can create a sidebar manually
	docSidebar: [
		{
			type: 'doc',
			id: 'home',
		},
		{
			type: 'category',
			label: 'General',
			collapsed: false,
			items: [
				'introduction',
				'installation',
				'usage',
				'hotkeys',
				{
					type: 'ref',
					label: 'Web Configurator',
					id: 'web-configurator/web-configurator',
				},
				'rgb-leds',
				'getting-help-support',
			],
		},
		{
			type: 'category',
			label: 'FAQ',
			collapsed: false,
			items: [
				'faq/faq-general',
				'faq/faq-ps4-ps5-compatibility',
				'faq/faq-troubleshooting',
			],
		},
		{
			type: 'category',
			label: 'Controller Building',
			collapsed: true,
			items: ['controller-build/wiring'],
		},
	],
	webConfigSidebar: [
		'web-configurator/web-configurator',
		{
			type: 'category',
			label: 'Web Configurator Menu',
			collapsed: false,
			items: [
				{ type: 'autogenerated', dirName: 'web-configurator/menu-pages' },
			],
		},
		{
			type: 'category',
			label: 'Add-Ons',
			collapsed: false,
			items: [{ type: 'autogenerated', dirName: 'add-ons' }],
		},
	],
	contributeSidebar: [
		'development/contribution-guide',
		{
			type: 'category',
			label: 'Firmware',
			collapsed: false,
			items: ['development/firmware-development'],
		},
		{
			type: 'category',
			label: 'Documentation',
			collapsed: false,
			items: [
				'development/documentation-preview',
				'development/documentation-update-downloads',
			],
		},
		'development/templates',
	],
};

module.exports = sidebars;
