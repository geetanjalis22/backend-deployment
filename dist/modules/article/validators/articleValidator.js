"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.idParamSchema = exports.articleFilterSchema = exports.articleSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Validate article creation & update
exports.articleSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().min(10).required(),
    body: joi_1.default.string().required(),
    image_url: joi_1.default.string().uri(),
    category: joi_1.default.string().required(),
    tags: joi_1.default.array().items(joi_1.default.string()).min(1)
});
// Validate filtering (GET query params)
exports.articleFilterSchema = joi_1.default.object({
    category: joi_1.default.string().optional(),
    tags: joi_1.default.alternatives().try(joi_1.default.array().items(joi_1.default.string()), joi_1.default.string()).optional()
});
// Validate ID in params (for DELETE, UPDATE)
exports.idParamSchema = joi_1.default.object({
    id: joi_1.default.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
        "string.pattern.base": "Invalid ObjectId format"
    })
});
//# sourceMappingURL=articleValidator.js.map