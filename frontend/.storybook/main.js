// module.exports = {
// 	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
// 	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
// 	framework: "@storybook/react",
// 	core: {
// 		builder: "@storybook/builder-webpack5",
// 	},
// }

module.exports = {
	stories: ["../src/stories/**/*.stories.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-webpack5",
	},
	typescript: { reactDocgen: false },
}
