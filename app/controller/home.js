'use strict';

const Controller = require('egg').Controller;
const qs = require('querystring')

class HomeController extends Controller {
  async npm(ctx){
    let { npm , path } = ctx.params
    let hit = this.app.rule[npm]
    if( hit ){
      let { query , method } = ctx
      let url = hit.dist
      if(path) url += path
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

  async hallo(ctx) {
    let host = ctx.origin
    let rules = this.app.ruleSet.map(i => {
      return `<div class="category">
      <a class="category-name" href="${i.repo}">${i.name}</a>
      <p class="category-description">${i.desc}</p>
      <pre>${i.usage}</pre>
    </div>`
    }).join('')
    ctx.body = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>NPM, Node.js, Node.js RC, Node.js Nightly, io.js, alinode, nsolid, Python, PhantomJS, electron, electron-builder-binaries, atom-shell, node-chakracore, git-for-windows, nwjs, atom, ChromeDriver, OperaDriver, geckodriver, selenium, node-inspector, fsevents, node-sass, leveldown, leveldown-hyper, mknod, rabin, sodium-prebuilt, utp-native, node-tk5, couchbase, fuse-bindings, zmq-prebuilt, gl, hackrf, sqlite3, sqlcipher, chromium-browser-snapshots, grpc, nodegit, canvas-prebuilt, cypress, flow, poi, libjpeg-turbo, moby, yarn, utf-8-validate, jpegtran-bin, pngquant-bin, zopflipng-bin, gifsicle-bin, mozjpeg-bin, cwebp-bin, optipng-bin, jpegoptim-bin, pngcrush-bin, guetzli-bin, gif2webp-bin, pngout-bin, advpng-bin, jpeg-recompress-bin, zeromq, minikube, sentry-cli, sharp-libvips, sharp, tfjs-models, node-canvas-prebuilt, node-swc Mirrors</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body{
        font-family:arial, sans-serif;
      }
      .category{
        padding: 25px 0 15px;
        border-bottom: 1px solid #e5e5e5;
        line-height:1.5em;
      }
      .category-name {
        font-size: 24px;
        font-weight: 600;
        color: #000;
        text-decoration:none;
      }
      .category-description {
        font-size: 15px;
        color: #000;
        opacity:0.6;
        font-weight: 600;
        margin-top:10px;

      }
      .container {
        width: 90%; max-width:1200px; margin: 35px auto;
      }
      pre{
        display: block;
        padding: 9.5px;
        margin: 0 0 10px;
        font-size: 13px;
        line-height: 1.42857143;
        color: #333;
        word-break: break-all;
        word-wrap: break-word;
        background-color: #f5f5f5;
        border: 1px solid #ccc;
        border-radius: 2px;
        white-space: normal;
      }
      footer{margin: 50px auto; width: 100%; text-align: center;color:#999;font-size:14px;border-top:1px solid rgba(0,0,0,.1);padding-top:20px;}
    </style>

  <head>
  <body>
    <div class="container">
      <h1>Mirrors</h1>
      ${rules}
    </div>
    <script type="text/javascript">
      document.querySelectorAll && document.querySelectorAll('pre').forEach(function (item) {
        item.innerHTML = item.innerHTML.replace(/\s+$/mg, '');
      });
    </script>
    <footer>
      Copyright &copy; <a href="https://github.com/reruin/npm-mirror" target="_blank">npm-mirror</a>
    </footer>
  </body>
</html>
    `.replace(/{host}/g,host);
  }
}

module.exports = HomeController;
