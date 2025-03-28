import express from 'express';
import { createCategory, updateCategory, deleteCategory, getCategories, getCategoryById } from '../controllers/categoryController';
import validateRequest from '../middleware/validateRequest';
import { categorySchema, idParamSchema } from '../validators/categoryValidator';

const router = express.Router();

router.post('/', validateRequest(categorySchema), createCategory);
router.put('/:id', validateRequest(idParamSchema, 'params'), validateRequest(categorySchema), updateCategory);
router.delete('/:id', validateRequest(idParamSchema, 'params'), deleteCategory);
router.get('/', getCategories);
router.get('/:id', validateRequest(idParamSchema, 'params'), getCategoryById);

export default router;
