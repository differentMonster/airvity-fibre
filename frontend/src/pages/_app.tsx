import 'faust.config'
import React, { useEffect } from 'react'
import { FaustProvider } from '@faustjs/next'
import type { AppProps } from 'next/app'
import { Footer, Menu } from 'components'
import { client } from 'client'

// @params sccs file
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
/* **supro icons */
import '../../public/supro/fonts/Linearicons/Linearicons/Font/demo-files/demo.css'
/* **supro basic css */
import '../../public/supro/css/style.css'
/* **supro css */
import '../../public/supro/css/home-default.css'
import 'scss/main.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap')
	}, [])

	return (
		<React.Fragment>
			<FaustProvider client={client} pageProps={pageProps}>
				<Menu />
				<Component {...pageProps} />
			</FaustProvider>
			<Footer copyrightHolder={'airvity.com'} />
		</React.Fragment>
	)
}
