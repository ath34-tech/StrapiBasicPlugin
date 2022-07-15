
module.exports = ({ env }) => ({
  // ...
    'reminderapp': {
      enabled: true,
      resolve: './src/plugins/reminderapp'
    },
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'nerdsculturecom@gmail.com',
        defaultReplyTo: 'nerdsculturecom@gmail.com',
      },
    },
    // ...
  })