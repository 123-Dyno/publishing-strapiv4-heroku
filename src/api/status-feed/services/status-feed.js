'use strict';

/**
 * status-feed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::status-feed.status-feed');
