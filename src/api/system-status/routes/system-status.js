'use strict';

/**
 * system-status router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::system-status.system-status');
