import '../styles/globals.css'


import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '34479ab2-bd3a-4552-b2c3-1aa4b40b966f',
    clientToken: 'pub9c5479042679bcb961fe0064ffd0cbf3',
    site: 'datadoghq.com',
    service:'datadog-rum-test',
    env:'prod',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    premiumSampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
