module.exports = ({ env }) => {
  const cloudinaryUrl = env("CLOUDINARY_URL")
  const splitUrl = cloudinaryUrl.split(/[\/\/,:,@]+/)
  const cloudinaryApiKey = splitUrl[1]
  const cloudinarySecretKey = splitUrl[2]
  const cloudinaryName = splitUrl[3]
  return {
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: cloudinaryName,
          api_key: cloudinaryApiKey,
          api_secret: cloudinarySecretKey,
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    sentry: {
      enabled: true,
      config: {
        dsn: env("SENTRY_DSN"),
        sendMetadata: true,
      },
    },
  }
}
