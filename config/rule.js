module.exports = [
  {
    name:'node-sass',
    desc:'Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.',
    repo:'https://github.com/sass/node-sass',
    usage:'yarn config set sass_binary_site {host}/node-sass -g',
    dist:'http://cdn.npm.taobao.org/dist/node-sass'
  },
  {
    name:'puppeteer',
    desc:'A high-level API to control headless Chrome over the DevTools Protocol.',
    repo:'https://github.com/puppeteer/puppeteer/',
    usage:'yarn config set puppeteer_download_host {host}/chromium-browser-snapshots -g',
    dist:'https://cdn.npm.taobao.org/dist/chromium-browser-snapshots/'
  },
  {
    name:'cypress',
    desc:'Fast, easy and reliable testing for anything that runs in a browser.',
    repo:'https://www.cypress.io',
    usage:'yarn config set CYPRESS_DOWNLOAD_MIRROR {host}/cypress -g',
    dist:'https://download.cypress.io/'
  },
  {
    name:'tfjs-models',
    desc:'Pre-trained TensorFlow.js models.',
    repo:'https://github.com/tensorflow/tfjs-models',
    usage:'await someModel.load("{host}/tfjs-models/blazeface/1/default/1")',
    dist:'https://storage.googleapis.com/tfhub-tfjs-modules/tensorflow/tfjs-model/'
  }
]