import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import Layout from '@components/layout';
import { useRouter } from 'next/router'

// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'

import * as gtag from '../lib/gtag'

import '../styles/global.css'
import '../scss/global.scss'
import '../styles/markdown.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout>
      <Head>
        <title>underline Jobs</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
