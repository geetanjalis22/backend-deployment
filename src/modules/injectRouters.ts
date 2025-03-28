// src/modules/injectRouters.ts
import { Application, NextFunction, Request, Response } from "express";
import { articleRouter } from "./articleModule/router";

export const injectRoutes = (app: Application) => {

    app.use('/api/articles', articleRouter );

    app.all('*', (req: Request, res: Response, next: NextFunction) => {
        res.status(404).send({ status: false, message: 'Route not found!' });
    });

};