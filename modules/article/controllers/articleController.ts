import { Request, Response } from "express";
import { Article as ArticleModel, ArticleDocument } from "@modules/article/models/Article";

export const createArticle = async (req: Request, res: Response): Promise<void> => {
    try {
        const article: ArticleDocument = await ArticleModel.create(req.body);
        res.status(201).json(article);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getArticles = async (req: Request, res: Response): Promise<void> => {
    try {
        const articles: ArticleDocument[] = await ArticleModel.find();
        res.status(200).json(articles);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getArticleById = async (req: Request, res: Response): Promise<void> => {
    try {
        const article: ArticleDocument | null = await ArticleModel.findById(req.params.id);
        if (!article) {
            res.status(404).json({ error: "Article not found" });
            return;
        }
        res.status(200).json(article);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateArticle = async (req: Request, res: Response): Promise<void> => {
    try {
        const article: ArticleDocument | null = await ArticleModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!article) {
            res.status(404).json({ error: "Article not found" });
            return;
        }
        res.status(200).json(article);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteArticle = async (req: Request, res: Response): Promise<void> => {
    try {
        const article: ArticleDocument | null = await ArticleModel.findByIdAndDelete(req.params.id);
        if (!article) {
            res.status(404).json({ error: "Article not found" });
            return;
        }
        res.status(200).json({ message: "Article deleted" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getArticleByFilter = async (req: Request, res: Response): Promise<void> => {
    try {
        let filter: any = { ...req.query };

        if (filter.tags) {
            filter.tags = { $in: filter.tags.split(',') };
        }

        const articles: ArticleDocument[] = await ArticleModel.find(filter);
        res.status(200).json(articles);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
