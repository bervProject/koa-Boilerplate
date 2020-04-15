import logger from 'koa-logger';
import helmet from 'koa-helmet';
import mount from 'koa-mount';
import responseTime from 'koa-response-time';
import { userAgent } from 'koa-useragent';
import rTracer from 'cls-rtracer';
import Koa from 'koa';
import api from './api/index';
import staticFile from './static';
import loggers from './log';
const log = loggers.getLogger("app");

const app = new Koa();
const port = process.env.PORT || 3030;
// tracer
app.use(responseTime({ hrtime: true }));
app.use(rTracer.koaMiddleware());
app.use(logger());
app.use(helmet());
app.use(userAgent);
app.use(mount('/', staticFile));
app.use(mount('/api', api));

const server = app.listen(port, () => {
  log.info(`Starting server at http://localhost:${port}`);
});

export default server;
