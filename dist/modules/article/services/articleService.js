"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArticle = exports.updateArticle = exports.getArticleById = exports.getArticlesByFilter = exports.getArticles = exports.createArticle = void 0;
const Article_1 = require("../models/Article");
/**
 * Create a new article
 */
const createArticle = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Article_1.Article.create(data);
});
exports.createArticle = createArticle;
/**
 * Get all articles
 */
const getArticles = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Article_1.Article.find();
});
exports.getArticles = getArticles;
/**
 * Get articles by filters (category, tags)
 */
const getArticlesByFilter = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    if (filters.category)
        query.category = filters.category;
    if (filters.tags)
        query.tags = { $in: filters.tags.split(',') };
    return yield Article_1.Article.find(query);
});
exports.getArticlesByFilter = getArticlesByFilter;
/**
 * Get a single article by ID
 */
const getArticleById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Article_1.Article.findById(id);
});
exports.getArticleById = getArticleById;
/**
 * Update an article by ID
 */
const updateArticle = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Article_1.Article.findByIdAndUpdate(id, data, { new: true });
});
exports.updateArticle = updateArticle;
/**
 * Delete an article by ID
 */
const deleteArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Article_1.Article.findByIdAndDelete(id);
});
exports.deleteArticle = deleteArticle;
//# sourceMappingURL=articleService.js.map