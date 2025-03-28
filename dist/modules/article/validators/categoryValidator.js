"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.idParamSchema = exports.categorySchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Schema for category creation & update
exports.categorySchema = joi_1.default.object({
    name: joi_1.default.string().min(3).max(50).required(),
    description: joi_1.default.string().max(255),
});
// Schema for validating ID in params (for DELETE & PUT requests)
exports.idParamSchema = joi_1.default.object({
    id: joi_1.default.string().required(), // Ensures ID is provided
});
//# sourceMappingURL=categoryValidator.js.map