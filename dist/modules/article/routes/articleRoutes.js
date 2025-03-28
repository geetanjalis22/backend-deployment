"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const articleController_1 = require("../controllers/articleController");
const validateRequest_1 = __importDefault(require("../middleware/validateRequest"));
const articleValidator_1 = require("../validators/articleValidator");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(articleValidator_1.articleSchema), articleController_1.createArticle);
router.put('/:id', (0, validateRequest_1.default)(articleValidator_1.idParamSchema, 'params'), (0, validateRequest_1.default)(articleValidator_1.articleSchema), articleController_1.updateArticle);
router.delete('/:id', (0, validateRequest_1.default)(articleValidator_1.idParamSchema, 'params'), articleController_1.deleteArticle);
router.get('/', (0, validateRequest_1.default)(articleValidator_1.articleFilterSchema, 'query'), articleController_1.getArticleByFilter); // Fixed route path
exports.default = router;
//# sourceMappingURL=articleRoutes.js.map