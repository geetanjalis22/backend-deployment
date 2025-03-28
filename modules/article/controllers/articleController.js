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
exports.getArticleByFilter = exports.deleteArticle = exports.updateArticle = exports.getArticleById = exports.getArticles = exports.createArticle = void 0;
const Article_1 = require("@modules/article/models/Article");
const createArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = yield Article_1.Article.create(req.body);
        res.status(201).json(article);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createArticle = createArticle;
const getArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articles = yield Article_1.Article.find();
        res.status(200).json(articles);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getArticles = getArticles;
const getArticleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = yield Article_1.Article.findById(req.params.id);
        if (!article) {
            res.status(404).json({ error: "Article not found" });
            return;
        }
        res.status(200).json(article);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getArticleById = getArticleById;
const updateArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = yield Article_1.Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!article) {
            res.status(404).json({ error: "Article not found" });
            return;
        }
        res.status(200).json(article);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateArticle = updateArticle;
const deleteArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = yield Article_1.Article.findByIdAndDelete(req.params.id);
        if (!article) {
            res.status(404).json({ error: "Article not found" });
            return;
        }
        res.status(200).json({ message: "Article deleted" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteArticle = deleteArticle;
const getArticleByFilter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let filter = Object.assign({}, req.query);
        if (filter.tags) {
            filter.tags = { $in: filter.tags.split(',') };
        }
        const articles = yield Article_1.Article.find(filter);
        res.status(200).json(articles);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getArticleByFilter = getArticleByFilter;
//# sourceMappingURL=articleController.js.map