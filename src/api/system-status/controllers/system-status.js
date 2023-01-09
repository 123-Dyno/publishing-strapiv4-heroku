'use strict';

/**
 * system-status controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::system-status.system-status');
