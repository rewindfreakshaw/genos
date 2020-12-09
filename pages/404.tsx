import type { ReactElement } from 'react';
import { Head } from 'next/document';
import Error from '@/components/System/Error';

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
      </Head>
      <Error/>
    </>
  );
}
