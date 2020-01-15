const logger = require('koa-logger');
const helmet = require("koa-helmet");
const mount = require('koa-mount');
const rTracer = require('cls-rtracer');
const Koa = require('koa');
const api = require('./api/index');
const staticFile = require('./static');
const log = require("./log").getLogger("app");
const responseTime = require('./responseTime');

const app = new Koa();
const port = process.env.PORT || 3030;
// tracer
app.use(rTracer.koaMiddleware());
// logger
app.use(logger());
app.use(helmet());
// x-response-time
app.use(responseTime);

app.use(mount('/', staticFile));
app.use(mount('/api', api));

const server = app.listen(port, () => {
  log.info(`Starting server at http://localhost:${port}`);
});

module.exports = server;