import React from 'react';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { AuthProvider } from '@/hooks/useAuth';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon/favicon.ico" />
      </Head>
      <RecoilRoot>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
