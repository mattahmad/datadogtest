// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '34479ab2-bd3a-4552-b2c3-1aa4b40b966f',
    clientToken: 'pub9c5479042679bcb961fe0064ffd0cbf3',
    site: 'datadoghq.com',
    service:'datadog-rum-test',
    env:'production',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    premiumSampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();




export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


