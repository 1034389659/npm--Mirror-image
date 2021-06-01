/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1595671160175_5141';

  // add your middleware config here
  config.middleware = [];

  config.cluster = {
    listen: {
      port: 7005,
      hostname: '127.0.0.1'
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // userConfig.customLoader = {
  //   // 定义在 app 上的属性名 app.adapter
  //   adapter: {
  //     // 相对于 app.config.baseDir
  //     directory: 'app/adapter',
  //     // 如果是 ctx 则使用 loadToContext
  //     inject: 'app',
  //     // 是否加载框架和插件的目录
  //     loadunit: false,
  //     // 还可以定义其他 LoaderOptions
  //   }
  // }

  return {
    ...config,
    ...userConfig,
  };
};
