import Koa from "koa";
import rTracer from "cls-rtracer";
import loggers from "koa-log4";
import createModel from "../../models/user";
import db from "../../models";
const users = new Koa();
const logger = loggers.getLogger("users");

// response
users.use(async (ctx) => {
  const requestId = rTracer.id();
  logger.debug(`requestId: ${requestId}`);
  const User = createModel(db.sequelize);
  // const User = db.models["User"];
  const usersData = await User.findAll();
  const response = {
    data: usersData,
    status: 200,
    message: "Success",
  };
  ctx.body = response;
  logger.info(`Give response ${JSON.stringify(response)}`);
});

export default users;
