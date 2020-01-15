const serve = require('koa-static');
const Koa = require('koa');

const staticFile = new Koa();
staticFile.use(serve('web'));

module.exports = staticFile;