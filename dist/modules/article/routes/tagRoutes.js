"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules/tag/routes/tagRoutes.ts
const express_1 = __importDefault(require("express"));
const tagController_1 = require("../controllers/tagController");
const validateRequest_1 = __importDefault(require("../middleware/validateRequest"));
const tagValidator_1 = require("../validators/tagValidator");
const router = express_1.default.Router();
router.get('/', tagController_1.getTags);
router.post('/', (0, validateRequest_1.default)(tagValidator_1.tagSchema), tagController_1.createTag);
router.put('/:id', (0, validateRequest_1.default)(tagValidator_1.idParamSchema, 'params'), (0, validateRequest_1.default)(tagValidator_1.tagSchema), tagController_1.updateTag);
router.delete('/:id', (0, validateRequest_1.default)(tagValidator_1.idParamSchema, 'params'), tagController_1.deleteTag);
exports.default = router;
//# sourceMappingURL=tagRoutes.js.map