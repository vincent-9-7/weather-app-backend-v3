const Koa = require("koa");
const loader = require('./src/loaders');
const bodyParser = require('koa-bodyparser'); //接受post请求 koa-bodyparser


const app = new Koa();
app.use(bodyParser());

loader.init(app);

module.exports = app;