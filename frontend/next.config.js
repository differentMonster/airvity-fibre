const { withFaust } = require('@faustjs/next')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
	images: {
		domains: ['http://localhost:3080/'],
	},
}

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
	myFaust: withFaust(),
	myImage: withPlugins([[withImages]], nextConfig),
}
