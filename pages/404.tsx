import type { ReactElement } from 'react';
import { Head } from 'next/document';
import '@/styles/error.scss';


export default function ErrorPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Oops, 404! | GD</title>
        <meta property="og:title" content="404 Whoopie!" />
        <meta
          property="og:description"
          content="This page's preview is not available as this page doesn't exist"
        />
        <style>

        </style>
      </Head>
      <div className="bsod container">
        <h1 className="neg title"><span className="bg">Error - 404</span></h1>
        <p>An error has occured, to continue:</p>
        <p>* Return to our homepage.<br />
          * Send us an e-mail about this error and try later.</p>
        <nav className="nav">
          <a href="#" className="link">index</a>&nbsp;|&nbsp;<a href="#" className="link">webmaster</a>
        </nav>
      </div>
    </>
  );
}
