module.exports = ({ env }) => {
  const cloudinaryUrl = env("CLOUDINARY_URL");
  const splitCloudinary = cloudinaryUrl.split(/[\/\/,:,@]+/);
  const cloudinaryApiKey = splitCloudinary[1];
  const cloudinarySecretKey = splitCloudinary[2];
  const cloudinaryName = splitCloudinary[3];
  const redisURL = env("REDIS_URL");
  const splitRedis = redisURL.split(/[\/\/,:,@]+/);
  const redisPassword = splitRedis[1];
  const redisHost = splitRedis[2];
  const redisPort = splitRedis[3];
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
    redis: {
      config: {
        connections: {
          default: {
            connection: {
              host: redisHost,
              port: redisPort,
              db: 0,
              password: redisPassword,
            },
            settings: {
              debug: false,
            },
          },
        },
      },
    },
    "rest-cache": {
      config: {
        provider: {
          name: "redis",
          options: {
            max: 32767,
            connection: "default",
          },
        },
        strategy: {
          // if you are using keyPrefix for your Redis, please add <keysPrefix>
          keysPrefix: "strapi-heroku-bootstrap:",
          contentTypes: [
            // list of Content-Types UID to cache
            "api::category.category",
            "api::article.article",
            "api::global.global",
            "api::author.author",
            "api::about.about",
            "api::system-status.system-status",
          ],
        },
      },
    },
  };
};
