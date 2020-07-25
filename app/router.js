'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.all('/cypress', controller.cypress.index);
  router.all('/cypress/:path(.*)', controller.cypress.index);
  router.all('/node-sass/:path(.*)', controller.sass.index)
};
