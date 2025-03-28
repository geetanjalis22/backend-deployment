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
exports.deleteArticle = exports.updateArticle = exports.getArticleById = exports.getArticles = exports.createArticle = void 0;
const models_1 = require("./models");
const createArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = yield models_1.Article.create(req.body);
        res.status(201).json(article);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.createArticle = createArticle;
const getArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articles = yield models_1.Article.find();
        res.status(200).json(articles);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.getArticles = getArticles;
const getArticleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = yield models_1.Article.findById(req.params.id);
        if (!article)
            res.status(404).json({ error: "Article not found" });
        res.status(200).json(article);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.getArticleById = getArticleById;
const updateArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = yield models_1.Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!article)
            res.status(404).json({ error: "Article not found" });
        res.status(200).json(article);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.updateArticle = updateArticle;
const deleteArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = yield models_1.Article.findByIdAndDelete(req.params.id);
        if (!article)
            res.status(404).json({ error: "Article not found" });
        res.status(200).json({ message: "Article deleted" });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.deleteArticle = deleteArticle;
//# sourceMappingURL=controllers.js.map