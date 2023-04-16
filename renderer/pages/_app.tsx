import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

import Layout from '../components/Layout';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WhatsApp clone</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <Layout children={<Component {...pageProps} />} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
