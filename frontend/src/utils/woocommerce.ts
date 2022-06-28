import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

// initialise production //
// export const WooComGateway = new WooCommerceRestApi({
// 	url: process.env.NEXT_PUBLIC_WORDPRESS_URL,
// 	consumerKey: process.env.WOO_KEY,
// 	consumerSecret: process.env.WOO_SECRET,
// 	version: 'wc/v3',
// })

export const WooComGateway = new WooCommerceRestApi({
	url: 'http://localhost:3080',
	consumerKey: 'ck_32da8e98aaeaec278d1f245d72c02da333f4a7a4',
	consumerSecret: 'cs_22d06c948dba4767e395ea08efda251440288b34',
	version: 'wc/v3',
})
