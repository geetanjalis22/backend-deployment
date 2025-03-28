"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectRoutes = void 0;
const router_1 = require("./articleModule/router");
const injectRoutes = (app) => {
    app.use('/api/articles', router_1.articleRouter);
    app.all('*', (req, res, next) => {
        res.status(404).send({ status: false, message: 'Route not found!' });
    });
};
exports.injectRoutes = injectRoutes;
//# sourceMappingURL=injectRouters.js.map