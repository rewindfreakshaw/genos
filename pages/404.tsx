import type { ReactElement } from 'react';
import { Head } from 'next/document';
// @ts-ignore
import styles from '@/styles/error.scss';


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
      <div className={styles.container && styles.bsod}>
        <h1 className={styles.neg && styles.title}><span className={styles.bg}>Error - 404</span></h1>
        <p>An error has occurred, to continue:</p>
        <p>* Return to our homepage.<br />
          * Send us a feedback about this error and try later.</p>
        <nav className={styles.nav}>
          <a href="/" className={styles.link}>index</a>&nbsp;|&nbsp;<a href="https://genemator.me" className={styles.link}>webmaster</a>
        </nav>
      </div>
    </>
  );
}
