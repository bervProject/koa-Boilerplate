const Koa = require("koa");
const api = new Koa();
const rTracer = require("cls-rtracer");
const logger = require("koa-log4").getLogger("api");
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

module.exports = api;
