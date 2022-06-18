import 'faust.config';
import React, { useEffect } from 'react';
import { FaustProvider } from '@faustjs/next';
import type { AppProps } from 'next/app';
import Menu from '../layouts/Menu';
import Footer from '../layouts/Footer';
import { client } from 'client';

import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../public/supro/css/style.css';
import '../../public/supro/css/home-default.css';
import 'scss/main.scss';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { config, library } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

library.add(fas, fab);

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
