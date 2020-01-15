const logger4js = require("koa-log4");
logger4js.configure({
  appenders: { "out": { type: "stdout" } },
  categories: { default: { appenders: ["out"], level: "debug" } }
});
module.exports = logger4js;
