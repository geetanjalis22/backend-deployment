"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoryController_1 = require("../controllers/categoryController");
const validateRequest_1 = __importDefault(require("../middleware/validateRequest"));
const categoryValidator_1 = require("../validators/categoryValidator");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(categoryValidator_1.categorySchema), categoryController_1.createCategory);
router.put('/:id', (0, validateRequest_1.default)(categoryValidator_1.idParamSchema, 'params'), (0, validateRequest_1.default)(categoryValidator_1.categorySchema), categoryController_1.updateCategory);
router.delete('/:id', (0, validateRequest_1.default)(categoryValidator_1.idParamSchema, 'params'), categoryController_1.deleteCategory);
router.get('/', categoryController_1.getCategories);
router.get('/:id', (0, validateRequest_1.default)(categoryValidator_1.idParamSchema, 'params'), categoryController_1.getCategoryById);
exports.default = router;
//# sourceMappingURL=categoryRoutes.js.map