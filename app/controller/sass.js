'use strict';

const Controller = require('egg').Controller;
const qs = require('querystring')

const HOST = 'http://cdn.npm.taobao.org/dist/node-sass'

class App extends Controller {
  async index() {
    const { ctx } = this;
    let { params , query , method } = ctx
    let url = HOST
    if(params.path) url += params.path
    if(query) url += '?' + qs.stringify(query)

    let result = await this.app.curl(url , {
      method,
      headers:{
        'user-agent':ctx.headers['user-agent']
      },
      data:ctx.request.body || {},
      followRedirect:true,
      rejectUnauthorized:false,
      streaming:true
    })

    ctx.status = result.status;
    ctx.set(result.headers)
    ctx.body = result.res
    
  }
}

module.exports = App;
