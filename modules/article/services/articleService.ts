import {Article} from '../models/Article';

/**
 * Create a new article
 */
export const createArticle = async (data: any) => {
  return await Article.create(data);
};

/**
 * Get all articles
 */
export const getArticles = async () => {
  return await Article.find();
};

/**
 * Get articles by filters (category, tags)
 */
export const getArticlesByFilter = async (filters: any) => {
  const query: any = {};
  if (filters.category) query.category = filters.category;
  if (filters.tags) query.tags = { $in: filters.tags.split(',') };

  return await Article.find(query);
};

/**
 * Get a single article by ID
 */
export const getArticleById = async (id: string) => {
  return await Article.findById(id);
};

/**
 * Update an article by ID
 */
export const updateArticle = async (id: string, data: any) => {
  return await Article.findByIdAndUpdate(id, data, { new: true });
};

/**
 * Delete an article by ID
 */
export const deleteArticle = async (id: string) => {
  return await Article.findByIdAndDelete(id);
};
