// modules/tag/routes/tagRoutes.ts
import express from 'express';
import { createTag, updateTag, deleteTag, getTags } from '../controllers/tagController';
import validateRequest from '../middleware/validateRequest';
import { tagSchema, idParamSchema } from '../validators/tagValidator';

const router = express.Router();
router.get('/', getTags);
router.post('/', validateRequest(tagSchema), createTag);
router.put('/:id', validateRequest(idParamSchema, 'params'), validateRequest(tagSchema), updateTag);
router.delete('/:id', validateRequest(idParamSchema, 'params'), deleteTag);

export default router;