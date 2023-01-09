'use strict';

/**
 * feed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feed.feed');
