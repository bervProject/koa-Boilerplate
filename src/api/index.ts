import Koa from 'koa';
import rTracer from 'cls-rtracer';
import loggers from 'koa-log4';
const api = new Koa();
const logger = loggers.getLogger("api");
// response
api.use(async ctx => {
  const requestId = rTracer.id();
  logger.debug(`requestId: ${requestId}`);
  logger.debug(`From browser: ${ctx.userAgent.browser}`);
  const response = {
    data: {
      response: "Hello World"
    },
    status: 200,
    message: "Success"
  };
  ctx.body = response;
  logger.info(`Give response ${JSON.stringify(response)}`);
});

export default api;
