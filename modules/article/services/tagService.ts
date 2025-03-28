import Tag from '../models/Tag';

/**
 * Create a new tag
 */
export const createTag = async (data: any) => {
  return await Tag.create(data);
};

/**
 * Get all tags
 */
export const getTags = async () => {
  return await Tag.find();
};

/**
 * Get a single tag by ID
 */
export const getTagById = async (id: string) => {
  return await Tag.findById(id);
};

/**
 * Update a tag by ID
 */
export const updateTag = async (id: string, data: any) => {
  return await Tag.findByIdAndUpdate(id, data, { new: true });
};

/**
 * Delete a tag by ID
 */
export const deleteTag = async (id: string) => {
  return await Tag.findByIdAndDelete(id);
};
