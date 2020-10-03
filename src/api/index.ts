import Koa from "koa";
import rTracer from "cls-rtracer";
import loggers from "koa-log4";
import mount from "koa-mount";
import users from "./services/users";
const api = new Koa();
const logger = loggers.getLogger("api");

api.use(mount("/user", users));

// response
api.use(async (ctx) => {
  const requestId = rTracer.id();
  logger.debug(`requestId: ${requestId}`);
  logger.debug(`From browser: ${ctx.userAgent.browser}`);
  logger.info(`URL: ${JSON.stringify(ctx.URL)}`);
  if (ctx.URL.pathname === "/api/error") {
    throw new Error("Give an error");
  }
});

export default api;
