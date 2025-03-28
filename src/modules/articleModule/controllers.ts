import { Request, Response } from "express";
import { Article } from "./models";

export const createArticle = async (req: Request, res: Response) => {
  try {
    const article = await Article.create(req.body);
     res.status(201).json(article);
  } catch (error) {
    const err = error as Error;
     res.status(500).json({ error: err.message });
  }
};

export const getArticles = async (req: Request, res: Response) => {
  try {
    const articles = await Article.find();
     res.status(200).json(articles);
  } catch (error) {
    const err = error as Error;
     res.status(500).json({ error: err.message });
  }
};

export const getArticleById = async (req: Request, res: Response) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article)  res.status(404).json({ error: "Article not found" });
     res.status(200).json(article);
  } catch (error) {
    const err = error as Error;
     res.status(500).json({ error: err.message });
  }
};

export const updateArticle = async (req: Request, res: Response) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!article)  res.status(404).json({ error: "Article not found" });
     res.status(200).json(article);
  } catch (error) {
    const err = error as Error;
     res.status(500).json({ error: err.message });
  }
};

export const deleteArticle = async (req: Request, res: Response) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article)  res.status(404).json({ error: "Article not found" });
     res.status(200).json({ message: "Article deleted" });
  } catch (error) {
    const err = error as Error;
     res.status(500).json({ error: err.message });
  }
};
