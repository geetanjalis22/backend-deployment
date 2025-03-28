import express from 'express';
import { createArticle, updateArticle, deleteArticle, getArticleByFilter } from '../controllers/articleController';
import validateRequest from '../middleware/validateRequest';
import { articleSchema, articleFilterSchema, idParamSchema } from '../validators/articleValidator';

const router = express.Router();

router.post('/', validateRequest(articleSchema), createArticle);
router.put('/:id', validateRequest(idParamSchema, 'params'), validateRequest(articleSchema), updateArticle);
router.delete('/:id', validateRequest(idParamSchema, 'params'), deleteArticle);
router.get('/', validateRequest(articleFilterSchema, 'query'), getArticleByFilter); // Fixed route path

export default router;
