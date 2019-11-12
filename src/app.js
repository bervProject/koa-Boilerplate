const logger = require('koa-logger');
const helmet = require("koa-helmet");
const serve = require('koa-static');
const mount = require('koa-mount');
const Koa = require('koa');
const app = new Koa();
const port = 3000;

// logger
app.use(logger());
app.use(helmet());

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

const api = new Koa();

// response
api.use(async ctx => {
  ctx.body = 'Hello World';
});

const staticFile = new Koa();
staticFile.use(serve('web'));

app.use(mount('/', staticFile));
app.use(mount('/api', api));

app.listen(port, () => {
  console.log(`Starting server at http://localhost:${port}`);
});