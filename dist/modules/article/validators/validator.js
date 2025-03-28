"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({
                message: "Validation error",
                errors: error.details.map((err) => err.message),
            });
        }
        next();
    };
};
exports.default = validateRequest;
//# sourceMappingURL=validator.js.map