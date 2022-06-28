import 'faust.config';
import React, { useEffect } from 'react';
import { FaustProvider } from '@faustjs/next';
import type { AppProps } from 'next/app';
import { client } from 'client';

// Layouts
import Menu from '../layouts/Menu';
import Footer from '../layouts/Footer';

// Global Styles
import 'normalize.css/normalize.css';
/* **bootstrap */
import 'bootstrap/dist/css/bootstrap.css';
/* **supro */
import '../../public/supro/css/style.css';
import '../../public/supro/css/home-default.css';
import 'scss/main.scss';
/* **sweetalert2 */
import 'sweetalert2/dist/sweetalert2.min.css';
/* **fontawesome */
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { config, library } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

library.add(fas, fab, far);

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <React.Fragment>
      <FaustProvider client={client} pageProps={pageProps}>
        <Menu />
        <Component {...pageProps} />
      </FaustProvider>
      <Footer copyrightHolder={'airvity.com'} />
    </React.Fragment>
  );
}
