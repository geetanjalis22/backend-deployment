// src/modules/article/articleModule/router.ts
import express from 'express';
import { 
  createArticle, 
  getArticles, 
  getArticleById,
  updateArticle, 
  deleteArticle 
} from './controllers';

export const articleRouter = express.Router();

articleRouter.post("/", createArticle);
articleRouter.get("/", getArticles);
articleRouter.get("/:id", getArticleById);
articleRouter.put("/:id", updateArticle);
articleRouter.delete("/:id", deleteArticle);