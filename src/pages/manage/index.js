/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import dynamic from 'next/dynamic'
import config from '../../../cms-config'

const NetlifyCMS = dynamic(async () => {
  window.CMS_MANUAL_INIT = true
  const CMS = await import('netlify-cms-app')

  CMS.init({ config })

  console.log('Netlify CMS init', config)
}, { ssr: false })

export default function Manager() {
  return (
    <div>
      <Head>
        {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> */}
      </Head>
      <NetlifyCMS />
    </div>
  )
}
