'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let host = ctx.origin
    ctx.body = `
      <div>
        <h2>cypress</h2>
        <p>yarn config set CYPRESS_DOWNLOAD_MIRROR ${host}/cypress -g</p>
        <h2>sass</h2>
        <p>yarn config set sass_binary_site ${host}/node-sass -g</p>
      </div>
    `;
  }
}

module.exports = HomeController;
