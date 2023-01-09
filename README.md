# Two Step Bootstraped Strapi Install on Heroku

Secret keys are not provided in the repo by default to make sure you don't accidently deploy a vunerable instance, click the button below to install the stack then run the following commands.

<a href="https://www.heroku.com/deploy/?template=https://github.com/123-Dyno/publishing-strapiv4-heroku" target="_blank">
<img src="https://www.herokucdn.com/deploy/button.svg" />
</a>

```
heroku config:set APP_KEYS=$(openssl rand -base64 32) --app <heroku-app-name> && \
heroku config:set API_TOKEN_SALT=$(openssl rand -base64 32)  --app <heroku-app-name> && \
heroku config:set ADMIN_JWT_SECRET=$(openssl rand -base64 32)  --app <heroku-app-name> && \
heroku config:set JWT_SECRET=$(openssl rand -base64 32) --app <heroku-app-name>
```

Open up your Heroku app and start using Strapi via `/admin`! Sometimes it takes a few seconds to load initially.

## More Info: General Purpose Strapi Heroku Button

[Strapi](https://strapi.io/) is an open sources headless CMS that can be used for many things (originally it was to bootstrap an API) but is used as a highly extendable content management system. The repo was created as an open source way to published simple content streams like Feeds, Blog Posts, and System Status in less than 10 minutes.

![Strapi Screenshot](/strapi-heroku-button-screenshot.png "Strapi Screenshot")

This Strapi button is running [123 Dyno's Blog](https://www.123dyno.com/blog) and [System Status Feeds](https://www.123dyno.com/system-status), some of the endpoints below.

https://strapi.123dyno.com/api/articles

[https://strapi.123dyno.com/api/articles?populate=\*](https://strapi.123dyno.com/api/articles?populate=*)

https://strapi.123dyno.com/api/status-feeds

Strapi gets conservatively 800 req/s before maxing out CPU on Heroku Standard-1x Dynos, better performance on dedicated Performance Dynos [more info on CPU scaling here](https://www.123dyno.com/blog/cpu-autoscaling-on-heroku-with-123-dyno). 123 Dyno is a Heroku autoscaling add-on that provides a DevOps tools, a 12x speed boost, and the ability to autoscale by CPU that Strapi responds well too.

The button was designed for rapid prototyping and with the ability to scale to production by default. It comes populated with common public content endpoints for Article, Author, Category, Feed, Status Feed, User, About, Global, and System Status. If you need multiple feeds you can just click the button again and get a new domain and /feed! A microservice content architecture if you want it, for more monolithic extensibility you can look at the dev section below.

This package also comes with add-ons for Strapi Redis LCU cache, Cloudinary Image Hosting, GraphQL, Senty Error Handling, SEO, and a simple Markdown editor that are all hooked into their respective Heroku add-ons by default, all you have to do is click the button below and generate keys.

## Development

To extend and customize this instance with things like new content types and fields you need to fork/clone and run Strapi in development locally, config files locally are setup to use filesystem for images and local services, more can be found in the `/config` directory. More drastic alteration will have to delete or edit the `/src/bootstrap.js` that populates Strapi with some content. Full details can be found here https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html for the best introduction to Strapi.

## Supporting Open Source Strapi

At the current moment Strapi Cloud is in closed beta but does look to provide fully managed and lower cost services when it releases for those interested in a fully cloud managed solution. If you prefer to self host and fully own Strapi, the software comes with a license for use above 5 seats that you can find on their [website](https://strapi.io), this was initially built off the blog template in the starters section there.

## Future Wants

A starter blog will be added to this later to bootstrap simple blogs and feeds, but if you want an example of this in production https://www.123dyno.com/blog is running on Next.js and this repo.
