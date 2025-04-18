import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://8f43415e44f5632f650b04ab26b9ccd3@o4509172565671936.ingest.us.sentry.io/4509172568948736',
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: 'system',
    }),
  ],
})
