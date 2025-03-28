import { Request, Response, NextFunction } from 'express';
import { AnySchema } from 'joi';

const validateRequest = (schema: AnySchema, property: 'body' | 'query' | 'params' = 'body') => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[property], { abortEarly: false }); // Show all errors
        if (!error) return next();

        const message = error.details.map(i => i.message).join(', ');
        res.status(422).json({ error: message });
    };
};

export default validateRequest;
