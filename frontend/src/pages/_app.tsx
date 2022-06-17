import 'faust.config'
import React, { useEffect } from 'react'
import { FaustProvider } from '@faustjs/next'
import type { AppProps } from 'next/app'
import Menu from '../layouts/Menu'
import Footer from '../layouts/Footer'
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

// font awesome
import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { config, library } from '@fortawesome/fontawesome-svg-core'

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false

// import font awesome as library
library.add(fas, fab)

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
