import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import siteMetadata from '@/data/siteMetadata'
import { ClientReload } from '@/components/ClientReload'
import LayoutWrapper from '@/components/LayoutWrapper'
import Script from 'next/script'
import * as gtag from 'lib/gtag'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  console.log('gtag.GA_TRACKING_ID', gtag.GA_TRACKING_ID)
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {isDevelopment && isSocket && <ClientReload />}
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
