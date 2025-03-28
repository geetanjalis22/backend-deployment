"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateRequest = (schema, property = 'body') => {
    return (req, res, next) => {
        const { error } = schema.validate(req[property], { abortEarly: false }); // Show all errors
        if (!error)
            return next();
        const message = error.details.map(i => i.message).join(', ');
        res.status(422).json({ error: message });
    };
};
exports.default = validateRequest;
//# sourceMappingURL=validateRequest.js.map