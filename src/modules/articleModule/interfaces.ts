// src/modules/article/articleModule/interface.ts
export interface IArticle {
  title: string;
  content: string;
  author?: string;
  createdAt?: Date;
  updatedAt?: Date;
}