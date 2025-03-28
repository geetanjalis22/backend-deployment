import Joi from "joi";

// Validate article creation & update
export const articleSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().min(10).required(),
  body: Joi.string().required(),
  image_url: Joi.string().uri(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).min(1)
});

// Validate filtering (GET query params)
export const articleFilterSchema = Joi.object({
  category: Joi.string().optional(),
  tags: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.string()).optional()
});

// Validate ID in params (for DELETE, UPDATE)
export const idParamSchema = Joi.object({
  id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
    "string.pattern.base": "Invalid ObjectId format"
  })
});
