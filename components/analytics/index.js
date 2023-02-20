import siteMetadata from '@/data/siteMetadata'
import GAScript from './GAScript'
import Plausible from './Plausible'
import SimpleAnalytics from './SimpleAnalytics'
import Umami from './Umami'
import Posthog from './Posthog'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return (
    <>
      {isProduction && siteMetadata.analytics.googleAnalyticsId && <GAScript />}
      {isProduction && siteMetadata.analytics.plausibleDataDomain && <Plausible />}
      {isProduction && siteMetadata.analytics.simpleAnalytics && <SimpleAnalytics />}
      {isProduction && siteMetadata.analytics.umamiWebsiteId && <Umami />}
      {isProduction && siteMetadata.analytics.posthogAnalyticsId && <Posthog />}
    </>
  )
}

export default Analytics
