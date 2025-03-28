import Category from '../models/Category';

/**
 * Create a new category
 */
export const createCategory = async (data: any) => {
  return await Category.create(data);
};

/**
 * Get all categories
 */
export const getCategories = async () => {
  return await Category.find();
};

/**
 * Get a single category by ID
 */
export const getCategoryById = async (id: string) => {
  return await Category.findById(id);
};

/**
 * Update a category by ID
 */
export const updateCategory = async (id: string, data: any) => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};

/**
 * Delete a category by ID
 */
export const deleteCategory = async (id: string) => {
  return await Category.findByIdAndDelete(id);
};
