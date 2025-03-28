import Joi from "joi";

// Schema for category creation & update
export const categorySchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  description: Joi.string().max(255),
});

// Schema for validating ID in params (for DELETE & PUT requests)
export const idParamSchema = Joi.object({
  id: Joi.string().required(), // Ensures ID is provided
});
