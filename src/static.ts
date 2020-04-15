import serve from 'koa-static';
import Koa from 'koa';

const staticFile = new Koa();
staticFile.use(serve('web'));

export default staticFile;