const cors = require('cors');
const apiRouter = require('../../src/routes/v1/api');
const config = require('../../src/config/app');

module.exports = async (app) => {
    //app.use(cors());
    app.use(apiRouter.routes());
    return app;
};