'use client';
import React from 'react'
import Script from 'next/script'
import { ConsentManager, openConsentManager } from '@segment/consent-manager'
// import { ConsentManager, openConsentManager } from '@segment/consent-manager2'

export default function Home() {
  const bannerContent = (
    <span>
      We use cookies (and other similar technologies) to collect data to improve your experience on
      our site. By using our website, you’re agreeing to the collection of data as described in our{' '}
      <a href="/docs/legal/website-data-collection-policy/" target="_blank">
        Website Data Collection Policy
      </a>
      .
    </span>
  )
  const bannerSubContent = 'You can change your preferences at any time.'
  const preferencesDialogTitle = 'Website Data Collection Preferences'
  const preferencesDialogContent =
    'We use data collected by cookies and JavaScript libraries to improve your browsing experience, analyze site traffic, deliver personalized advertisements, and increase the overall performance of our site.'
  const cancelDialogTitle = 'Are you sure you want to cancel?'
  const cancelDialogContent =
    'Your preferences have not been saved. By continuing to use our website, you՚re agreeing to our Website Data Collection Policy.'

  return (
    <div>
      <Script
        id="show-banner"
        dangerouslySetInnerHTML={{
          __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};;analytics.SNIPPET_VERSION="4.13.2";
          analytics.page();
          }}();`
        }}
      />

      <main>
        <ConsentManager
          writeKey="5V8KznnIFIDh1ejQLbmX7ikfSRa6r8bF"
          bannerContent={bannerContent}
          bannerSubContent={bannerSubContent}
          preferencesDialogTitle={preferencesDialogTitle}
          preferencesDialogContent={preferencesDialogContent}
          cancelDialogTitle={cancelDialogTitle}
          cancelDialogContent={cancelDialogContent}
          bannerActionsBlock={true}
        />

        <button type="button" onClick={openConsentManager}>
          Website Data Collection Preferences
        </button>
      </main>
    </div>
  )
}