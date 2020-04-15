import logger4js from 'koa-log4';
logger4js.configure({
  appenders: { "out": { type: "stdout" } },
  categories: { default: { appenders: ["out"], level: "debug" } }
});
export default logger4js;
