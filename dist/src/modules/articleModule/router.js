"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleRouter = void 0;
// src/modules/article/articleModule/router.ts
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
exports.articleRouter = express_1.default.Router();
exports.articleRouter.post("/", controllers_1.createArticle);
exports.articleRouter.get("/", controllers_1.getArticles);
exports.articleRouter.get("/:id", controllers_1.getArticleById);
exports.articleRouter.put("/:id", controllers_1.updateArticle);
exports.articleRouter.delete("/:id", controllers_1.deleteArticle);
//# sourceMappingURL=router.js.map