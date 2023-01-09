'use strict';

/**
 * feed router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::feed.feed');
