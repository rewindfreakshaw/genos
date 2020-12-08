import { description, name } from 'package.json';

import Head from 'next/head';
import { lockDocumentTitle } from '@/utils/elements';
import { memo, useEffect } from 'react';

const Metadata: React.FC = () => {
  useEffect(lockDocumentTitle, []);

  return (
    <Head>
      <title>GenOS - Genemator's Desktop Browser OS</title>
      <meta name="description" content="This is Genemator's Browser OS which was created to work remotely without server bind." />
      <link
        rel="preload"
        href="fonts/segoeui.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="fonts/segmdl2.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="fonts/SF-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Head>
  );
};

export default memo(Metadata);
