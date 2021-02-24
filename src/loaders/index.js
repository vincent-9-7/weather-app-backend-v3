const koaLoader = require('./koa');
const mongooseLoader = require('./mongoose');

exports.init = (koaApp) => {
    const mongoConnection = mongooseLoader();
    koaLoader(koaApp);

    // ... more loaders can be here

    // ... Initialize agenda
    // ... or Redis, or whatever you want
};