import React from 'react';
import { client } from 'client';
import { Menu, Hero, Footer } from '../components';

export default function Page(): JSX.Element {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <React.Fragment>
      <Menu />
      <main className="content content-page">
        <Hero title={`Oops! That page can’t be found.`} />
        <div className="wrap">
          <div>
            <div>
              <p>
                The page you were looking for does not exist or is no longer
                available.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer copyrightHolder={generalSettings?.title} />
    </React.Fragment>
  );
}
