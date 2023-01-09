'use strict';

/**
 * system-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::system-status.system-status');
